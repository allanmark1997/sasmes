<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import Input from "@/CustomComponents/Input.vue";
import { router, useForm } from '@inertiajs/vue3';
import Icon from '@/CustomComponents/Icon.vue';

const props = defineProps(["client_chart", "from", "to", "filter", "offices", "units"])

const form = useForm({
    from: props.from,
    to: props.to,
    filter:props.filter
})

const search_ = () => {
    form.get(
        route("dashboard")
    );
};

const search_remove = () => {
    form.from = "";
    form.to = "";
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
                        <select v-model="form.filter" @change="search_"
                            class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full">
                            <option value="" disabled>Select Filter type</option>
                            <option value="office">Offices</option>
                            <option value="units">Units</option>
                        </select>
                    </div>
                    <div>
                        <Input v-model="form.from" class="rounded-lg mb-2 w-[30vmin]" type="date" label="From date" />
                    </div>
                    <div>
                        <Input v-model="form.to" class="rounded-lg mb-2 w-[30vmin]" type="date" label="To date" @keyup.enter="search_" />
                    </div>
                    <button v-if="filter || from || to" class="h-10 my-auto mt-5" @click="search_remove">
                        <Icon icon="close_icon" size="sm" />
                    </button>
                </div>
                <p class="m-2 text-2xl font-bold">
                    Quantity of clients
                </p>
                <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg ">
                    <line-chart :data="[
                        { name: 'Workout1', data: { '2017-01-24 10:17:18': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-07': 8, '2017-01-08': 8, '2017-01-08': 8, '2017-01-10': 8, '2017-01-11': 8, '2017-01-12': 8, '2017-01-13': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout2', data: { '2017-01-01': 3, '2017-01-02': 4 } },
                        { name: 'Workout3', data: { '2017-01-01': 3, '2017-01-02': 4 } },
                        { name: 'Workout4', data: { '2017-01-01': 3, '2017-01-02': 4 } },
                        { name: 'Call parents', data: { '2017-01-05': 5, '2017-01-02': 3 } }
                    ]"></line-chart>
                </div>

                <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2">
                    <column-chart :data="[
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-07': 8, '2017-01-08': 8, '2017-01-08': 8, '2017-01-10': 8, '2017-01-11': 8, '2017-01-12': 8, '2017-01-13': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout2', data: { '2017-01-01': 3, '2017-01-02': 4 } },
                        { name: 'Workout3', data: { '2017-01-01': 3, '2017-01-02': 4 } },
                        { name: 'Workout4', data: { '2017-01-01': 3, '2017-01-02': 4 } },
                        { name: 'Call parents', data: { '2017-01-05': 5, '2017-01-02': 3 } }
                    ]"></column-chart>
                </div>

                <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2">
                    <column-chart :data="[
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-07': 8, '2017-01-08': 8, '2017-01-08': 8, '2017-01-10': 8, '2017-01-11': 8, '2017-01-12': 8, '2017-01-13': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout2', data: { '2017-01-01': 3, '2017-01-02': 4 } },
                        { name: 'Workout3', data: { '2017-01-01': 3, '2017-01-02': 4 } },
                        { name: 'Workout4', data: { '2017-01-01': 3, '2017-01-02': 4 } },
                        { name: 'Call parents', data: { '2017-01-05': 5, '2017-01-02': 3 } }
                    ]"></column-chart>
                </div>

                <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2">
                    <column-chart :data="[
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-07': 8, '2017-01-08': 8, '2017-01-08': 8, '2017-01-10': 8, '2017-01-11': 8, '2017-01-12': 8, '2017-01-13': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout1', data: { '2017-01-01': 1, '2017-01-02': 4, '2017-01-04': 3, '2017-01-05': 8, '2017-01-30': 1, '2017-01-31': 10 } },
                        { name: 'Workout2', data: { '2017-01-01': 3, '2017-01-02': 4 } },
                        { name: 'Workout3', data: { '2017-01-01': 3, '2017-01-02': 4 } },
                        { name: 'Workout4', data: { '2017-01-01': 3, '2017-01-02': 4 } },
                        { name: 'Call parents', data: { '2017-01-05': 5, '2017-01-02': 3 } }
                    ]"></column-chart>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
