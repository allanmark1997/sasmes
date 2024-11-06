<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import Input from "@/CustomComponents/Input.vue";
import { router, useForm } from '@inertiajs/vue3';
import Icon from '@/CustomComponents/Icon.vue';
import moment from 'moment';

const date_time = (date) => {
    return moment(date).format('MMMM Do YYYY');
}

const props = defineProps(["client_chart", "from", "to", "offices", "office_id", "office_count_role_gender"])

const form = useForm({
    from: props.from,
    to: props.to,
    office_id: props.office_id,
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
    form.office_id = "";
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
                    <div >
                        <select v-model="form.office_id"
                        @change="(search_)"
                            class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"
                            :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            <option value="" disabled>Select office</option>
                            <option value="" >All Office</option>
                            <template v-for="(office, key) in props.offices" :key="key">
                                <option :value="office.id">{{ office.abbrevation }}</option>
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
                        <!-- <Icon icon="close_icon" size="sm" /> -->
                        <small class="bg-red-500 text-white p-1 rounded-lg">remove filter</small>
                    </button>
                </div>
                <p class="m-2 text-2xl font-normal">
                    Quantity of clients
                </p>

                <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2 w-[150vmin] mx-auto">
                    <column-chart :data="props.client_chart" legend="bottom" />
                </div>
                <template v-for="(office, key) in props.office_count_role_gender" :key="key">
                    <div class="">
                        <p class="mt-12 text-2xl font-normal">
                            {{ key }}
                        </p>
                        <div class="flex gap-2">
                            <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2">
                                <column-chart :data="office.type" legend="bottom" width="100vmin" />
                            </div>
                            <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2 mx-auto">
                                <column-chart :data="office.sex" legend="bottom" :colors="['#4CC9FE', '#FF77B7']"
                                    width="500px" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-10 text-center font-bold">
                        <p class="text-xl">
                            {{ date_time(props.from) }} - {{ date_time(props.to) }}
                        </p>
                        <p class="text-xl underline">
                            Overall Clients: {{ office.overall_count }}
                        </p>
                        <div class="grid grid-cols-2 gap-8">
                            <div class="col-span-1 text-right">
                                <template v-for="(type, key2) in office.type_text" :key="key2">
                                    <p class="uppercase">
                                        {{ key2 }}: {{ type }}
                                    </p>
                                </template>
                            </div>
                            <div class="col-span-1 text-left">
                                <template v-for="(type, key2) in office.sex" :key="key2">
                                    <p class="uppercase">
                                        {{ key2 }}: {{ type }}
                                    </p>
                                </template>
                            </div>

                        </div>

                    </div>
                </template>
            </div>
        </div>
    </AppLayout>
</template>
