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

const props = defineProps(["mean", "standard_deviation", "adjectival", "suggestions", "mean_chart", "standard_deviation_chart", "result_per_question", "from", "to", "offices", "office", "office_id"])

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
    form.from = "";
    form.to = "";
    form.office_id = "";
    form.get(
        route("evaluation_result.index")
    );
};

const number_format = (number) => {
    return new Intl.NumberFormat('en-US').format(number)
}

const number_format2 = (data) => {
    const formatter = new Intl.NumberFormat("en-PH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 20,
        minimumSignificantDigits: 1,
        maximumSignificantDigits: 20
    });
    let total = formatter.format(data);
    let split_data = total.split(".")
    let decimal = String(split_data[1])
    let slice_decimal = decimal.slice(0, 2)
    let validate_decimal = slice_decimal == "un" ? String("00") : slice_decimal
    let final_data = String(split_data[0]) + "." + validate_decimal
    return final_data;
};
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
                <div class="flex justify-between">
                    <div class="flex  gap-2 ">
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
                            <Input v-model="form.from" class="rounded-lg mb-2 w-[25vmin]" type="date"
                                label="From date" />
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
                    <div class="mt-7">
                        <a class="bg-orange-500 hover:bg-orange-400 rounded-lg p-1 mt-3 text-white "
                            :href="route('evaluation_result.comparison')">Comparison Results</a>
                    </div>
                </div>

                <div>
                    <div class="w-full">
                        <p class="m-2 text-2xl font-bold text-center">
                            Overall Ratings of {{ props.office_id == "" ? "SAS Offices" : props.office.name }}
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
                                            <div class="col-span-1">= {{ mean == 0 ?
                                                "Not enough samples" : number_format2(mean) }}</div>
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
                                            <div class="col-span-1">=
                                                {{ standard_deviation == 0 ?
                                                    "Not enough samples" : number_format2(standard_deviation) }}</div>
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
                </div>
                <div class="w-full mt-10">
                    <p class="m-2 text-2xl font-bold text-center">
                        Survey Question Results
                    </p>
                </div>
                <template v-for="(question, key, i) in props.result_per_question" :key="key, i">
                    <div class="mt-12">
                        <div class="w-full">
                            <p class="text-xl text-center">
                                {{ i + 1 }} . {{ key }}
                            </p>
                        </div>
                        <div class="w-full grid grid-cols-2 gap-2 ">
                            <div class="col-span-1">
                                <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2 mx-auto">
                                    <column-chart :data="question.mean_chart" legend="bottom" />
                                </div>
                            </div>
                            <div class="col-span-1">
                                <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2 mx-auto">
                                    <column-chart :data="question.standard_deviation_chart" legend="bottom" />
                                </div>
                            </div>
                        </div>
                        <div class="w-full grid grid-cols-3 gap-2 mt-10 p-2">
                            <div class="col-span-1  border-r-2 border-gray-700">
                                <p class="text-center font-bold">Mean</p>
                                <ul class="list-disc">
                                    <template v-for="(mean, key) in question.mean_label" :key="key">
                                        <li>
                                            <div class="grid grid-cols-2 gap-2">
                                                <div class="col-span-1">{{ key }}</div>
                                                <div class="col-span-1">= {{ mean.result == 0 ?
                                                "Not enough samples" :number_format2(mean.result) }}</div>
                                            </div>
                                        </li>
                                    </template>
                                </ul>
                            </div>
                            <div class="col-span-1  border-r-2 border-gray-700">
                                <p class="text-center font-bold">Standard Deviation</p>
                                <ul class="list-disc ml-4">
                                    <template v-for="(standard_deviation, key) in question.standard_deviation_label"
                                        :key="key">
                                        <li>
                                            <div class="grid grid-cols-2 gap-2">
                                                <div class="col-span-1">{{ key }}</div>
                                                <div class="col-span-1">= {{ standard_deviation == 0 ?
                                                    "Not enough samples" : number_format2(standard_deviation) }}</div>
                                            </div>
                                        </li>
                                    </template>
                                </ul>
                            </div>
                            <div class="col-span-1 ml-4">
                                <p class="text-center font-bold">Adjectival Result</p>
                                <ul class="list-disc">
                                    <template v-for="(adjectival, key) in question.mean_label" :key="key">
                                        <li>
                                            <div class="grid grid-cols-2 gap-2">
                                                <div class="col-span-1">{{ key }}</div>
                                                <div class="col-span-1 font-bold">= <span
                                                        :class="((adjectival.adjectival_result == 'Excellent') || (adjectival.adjectival_result == 'Above Average')) ? 'text-green-500' : (adjectival.adjectival_result == 'Average' ? 'text-orange-500' : (adjectival.adjectival_result == 'Poor' ? 'text-red-400' : 'text-red-500'))">{{
                                                            adjectival.adjectival_result }}</span></div>
                                            </div>
                                        </li>
                                    </template>
                                </ul>
                            </div>
                        </div>
                    </div>
                </template>

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
                                                class="px-6 py-4 font-medium text-gray-900 w-[50vmin] break-words">
                                                {{ suggestion.suggestion ?? "None" }}
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
