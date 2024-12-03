<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import Input from "@/CustomComponents/Input.vue";
import { router, useForm } from '@inertiajs/vue3';
import Icon from '@/CustomComponents/Icon.vue';
import moment from 'moment';

const date_time = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

const date = (date) => {
    return moment(date).format('MMMM Do YYYY');
}

const props = defineProps(["mean", "standard_deviation", "adjectival", "suggestions", "mean_chart", "standard_deviation_chart", "from", "to", "offices", "office_id"])

const form = useForm({
    from: props.from,
    to: props.to,
    office_id: props.office_id,
})

const search_ = () => {
    form.get(
        route("evaluation_result.index")
    );
};

const search_remove = () => {
    form.filter = "";
    form.from = "";
    form.to = "";
    form.office_id = "";
    form.unit = "";
    form.get(
        route("evaluation_result.index")
    );
};

const number_format = (number) => {
    return new Intl.NumberFormat('en-US').format(number)
}
</script>

<template>
    <AppLayout title="Evaluation Results">
        <template #header>
            <h2 class="font-semibold text-xl text-white leading-tight">
                Evaluation Results
            </h2>
        </template>
        <div class="py-4">
            <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
                <div class="flex gap-2 ">
                    <div
                        v-if="($page.props.auth.user.user_type == 'root' || $page.props.auth.user.user_type == 'admin' || $page.props.auth.user.user_type == 'vcsas')">
                        <select v-model="form.office_id" @change="(search_)"
                            class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"
                            :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            <option value="" disabled>Select office</option>
                            <option value="">All Office</option>
                            <template v-for="(office, key) in props.offices" :key="key">
                                <option :value="office.id">{{ office.abbrevation }}</option>
                            </template>
                        </select>
                    </div>
                    <div>
                        <Input v-model="form.from" class="rounded-lg mb-2 w-[25vmin]" type="date" label="From date" />
                    </div>
                    <div>
                        <Input v-model="form.to" class="rounded-lg mb-2 w-[25vmin]" type="date" label="To date"
                            @keyup.enter="search_" />
                    </div>
                    <button v-if="filter || from || to" class="h-10 my-auto mt-5" @click="search_">
                        <small class="bg-green-500 text-white p-2 rounded-lg">Search</small>
                    </button>
                    <button v-if="filter || from || to" class="h-10 my-auto mt-5" @click="search_remove">
                        <small class="bg-red-500 text-white p-2 rounded-lg">remove filter</small>
                    </button>
                </div>
                <div class="w-full">
                    <p class="m-2 text-2xl font-bold text-center">
                        Overall Ratings of SAS Offices
                    </p>
                    <p class="text-xl text-center">
                        {{ date(props.from) }} - {{ date(props.to) }}
                    </p>
                </div>
                <div class="w-full grid grid-cols-2 gap-2 mt-6">
                    <div class="col-span-1">
                        <p class="text-center font-bold">Mean</p>
                        <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2 mx-auto">
                            <column-chart :data="props.mean_chart" legend="bottom" />
                        </div>
                    </div>
                    <div class="col-span-1">
                        <p class="text-center font-bold">Standard Deviation</p>
                        <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2 mx-auto">
                            <column-chart :data="props.standard_deviation_chart" legend="bottom" />
                        </div>
                    </div>
                </div>
                <div class="w-full grid grid-cols-3 gap-2 mt-10 p-2">
                    <div class="col-span-1  border-r-2 border-gray-700">
                        <p class="text-center font-bold">Mean</p>
                        <ul class="list-disc">
                            <template v-for="(mean, key) in props.mean" :key="key">
                                <li>
                                    <div class="grid grid-cols-2 gap-2">
                                        <div class="col-span-1">{{ key }}</div>
                                        <div class="col-span-1">= {{ number_format(mean) }}</div>
                                    </div>
                                </li>
                            </template>
                        </ul>
                    </div>
                    <div class="col-span-1  border-r-2 border-gray-700">
                        <p class="text-center font-bold">Standard Deviation</p>
                        <ul class="list-disc ml-4">
                            <template v-for="(standard_deviation, key) in props.standard_deviation" :key="key">
                                <li>
                                    <div class="grid grid-cols-2 gap-2">
                                        <div class="col-span-1">{{ key }}</div>
                                        <div class="col-span-1">= {{ number_format(standard_deviation) == 0 ? "Not enough samples":number_format(standard_deviation) }}</div>
                                    </div>
                                </li>
                            </template>
                        </ul>
                    </div>
                    <div class="col-span-1 ml-4">
                        <p class="text-center font-bold">Adjectival Result</p>
                        <ul class="list-disc">
                            <template v-for="(adjectival, key) in props.adjectival" :key="key">
                                <li>
                                    <div class="grid grid-cols-2 gap-2">
                                        <div class="col-span-1">{{ key }}</div>
                                        <div class="col-span-1 font-bold">= <span
                                                :class="((adjectival == 'Excellent') || (adjectival == 'Above Average')) ? 'text-green-500' : (adjectival == 'Average' ? 'text-orange-500' : (adjectival == 'Poor' ? 'text-red-400' : 'text-red-500'))">{{
                                                adjectival }}</span></div>
                                    </div>
                                </li>
                            </template>
                        </ul>
                    </div>
                </div>
                <div class="w-full grid grid-cols-1 gap-2 mt-10 p-2">
                    <div class="col-span-1">
                        <p class="text-left font-bold">Suggestions</p>
                        <div class=" relative overflow-x-auto overflow-y-auto rounded-lg">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-700 ">
                                <thead class="text-xs text-white uppercase bg-yellow-500 ">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Suggestion
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Office
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Service
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(suggestion, key) in props.suggestions" :key="key">
                                        <tr class="odd:bg-white even:bg-gray-200 border-b">
                                            <th scope="row"
                                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex">
                                                {{ suggestion.suggestion??"None" }}
                                            </th>
                                            <td class="px-6 py-4">
                                                {{ suggestion.office }}
                                            </td>
                                            <td class="px-6 py-4">
                                                {{ suggestion.client_service }}
                                            </td>
                                            <td class="px-6 py-4">
                                                {{ date_time(suggestion.date) }}
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
