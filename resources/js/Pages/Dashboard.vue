<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import Input from "@/CustomComponents/Input.vue";
import { router, useForm } from '@inertiajs/vue3';
import Icon from '@/CustomComponents/Icon.vue';

const props = defineProps(["client_chart", "from", "to", "filter", "offices", "units", "office", "unit"])

const form = useForm({
    from: props.from,
    to: props.to,
    filter: props.filter,
    office: props.office,
    unit: props.unit,
})

const search_ = () => {
    form.get(
        route("dashboard")
    );
};

const search_remove = () => {
    form.filter = "";
    form.from = "";
    form.to = "";
    form.office = "";
    form.unit = "";
    form.get(
        route("dashboard")
    );
};
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-white leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-4">
            <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
                <div class="flex gap-2 ">
                    <div>
                        <select v-model="form.filter"
                            class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"
                            :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            <option value="" disabled>Select Filter type</option>
                            <option value="office">Offices</option>
                            <option value="units">Units</option>
                        </select>
                    </div>
                    <div v-if="form.filter != ''" @change="search_">
                        <select v-model="form.office"
                            class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"
                            :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            <option value="" disabled>Select office</option>
                            <template v-for="(office, key) in props.offices" :key="key">
                                <option :value="office.id">{{ office.abbrevation }}</option>
                            </template>
                        </select>
                    </div>
                    <div v-if="form.filter != null || form.office != ''">
                        <select v-model="form.unit" @change="search_"
                            class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"
                            :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            <option value="" disabled>Select unit</option>
                            <template v-for="(unit, key) in props.units" :key="key">
                                <option :value="unit.id">{{ unit.abbrevation }}</option>
                            </template>
                        </select>
                    </div>
                    <div>
                        <Input v-model="form.from" class="rounded-lg mb-2 w-[30vmin]" type="date" label="From date" />
                    </div>
                    <div>
                        <Input v-model="form.to" class="rounded-lg mb-2 w-[30vmin]" type="date" label="To date"
                            @keyup.enter="search_" />
                    </div>
                    <button v-if="filter || from || to" class="h-10 my-auto mt-5" @click="search_remove">
                        <Icon icon="close_icon" size="sm" />
                    </button>
                </div>
                <p class="m-2 text-2xl font-bold">
                    Quantity of clients
                </p>
                <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg ">
                    <line-chart :data="props.client_chart"></line-chart>
                </div>

                <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2">
                    <column-chart :data="props.client_chart"></column-chart>
                </div>

            </div>
        </div>
    </AppLayout>
</template>
