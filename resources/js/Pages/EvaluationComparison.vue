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

const props = defineProps(["mean", "mean2", "standard_deviation", "standard_deviation2", "adjectival", "adjectival2", "mean_chart", "mean_chart2", "standard_deviation_chart", "standard_deviation_chart2", "from", "from2", "to", "to2", "offices", "office", "office_id"])

const form = useForm({
    from: props.from,
    to: props.to,
    from2: props.from2,
    to2: props.to2,
    office_id: props.office_id,
})

const search_ = () => {
    form.get(
        route("evaluation_result.comparison")
    );
};

const search_remove = () => {
    form.from = "";
    form.to = "";
    form.from2 = "";
    form.to2 = "";
    form.office_id = "";
    form.get(
        route("evaluation_result.comparison")
    );
};

const number_format = (number) => {
    return new Intl.NumberFormat('en-US').format(number)
}
</script>

<template>
    <AppLayout title="Evaluation Comparison">
        <template #header>
            <h2 class="font-semibold text-xl text-white leading-tight">
                <a class="hover:underline" :href="route('evaluation_result.index')">Evaluation Results</a> > Evaluation Comparison
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
                        <Input v-model="form.from" class="rounded-lg mb-2 w-[25vmin]" type="date" label="From date 1st comparison" />
                    </div>
                    <div>
                        <Input v-model="form.to" class="rounded-lg mb-2 w-[25vmin]" type="date" label="To date 1st comparison"
                            @keyup.enter="search_" />
                    </div>

                    <div>
                        <Input v-model="form.from2" class="rounded-lg mb-2 w-[25vmin]" type="date" label="From date 2nd comparison" />
                    </div>
                    <div>
                        <Input v-model="form.to2" class="rounded-lg mb-2 w-[25vmin]" type="date" label="To date 2nd comparison"
                            @keyup.enter="search_" />
                    </div>
                    <button v-if="from || to || from2 || to2" class="h-10 my-auto mt-5" @click="search_">
                        <small class="bg-green-500 text-white p-2 rounded-lg">Search</small>
                    </button>
                    <button v-if="from || to || from2 || to2" class="h-10 my-auto mt-5" @click="search_remove">
                        <small class="bg-red-500 text-white p-2 rounded-lg">remove filter</small>
                    </button>
                </div>
                <p class="m-2 text-2xl font-bold text-center">
                    Comparison Ratings of {{ props.office_id == "" ? "SAS Offices" : props.office.name }}
                </p>
                <div>
                    <div class="w-full">
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
                                            <div class="col-span-1">= {{ number_format(standard_deviation) == 0 ?
                                                "Not enough samples" : number_format(standard_deviation) }}</div>
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

                <div class="mt-10">
                    <div class="w-full">
                        <p class="text-xl text-center">
                            {{ date(props.from2) }} - {{ date(props.to2) }}
                        </p>
                    </div>
                    <div class="w-full grid grid-cols-2 gap-2 mt-6">
                        <div class="col-span-1">
                            <p class="text-center font-bold">Mean</p>
                            <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2 mx-auto">
                                <column-chart :data="props.mean_chart2" legend="bottom" />
                            </div>
                        </div>
                        <div class="col-span-1">
                            <p class="text-center font-bold">Standard Deviation</p>
                            <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2 mx-auto">
                                <column-chart :data="props.standard_deviation_chart2" legend="bottom" />
                            </div>
                        </div>
                    </div>
                    <div class="w-full grid grid-cols-3 gap-2 mt-10 p-2">
                        <div class="col-span-1  border-r-2 border-gray-700">
                            <p class="text-center font-bold">Mean</p>
                            <ul class="list-disc">
                                <template v-for="(mean, key) in props.mean2" :key="key">
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
                                <template v-for="(standard_deviation, key) in props.standard_deviation2" :key="key">
                                    <li>
                                        <div class="grid grid-cols-2 gap-2">
                                            <div class="col-span-1">{{ key }}</div>
                                            <div class="col-span-1">= {{ number_format(standard_deviation) == 0 ?
                                                "Not enough samples" : number_format(standard_deviation) }}</div>
                                        </div>
                                    </li>
                                </template>
                            </ul>
                        </div>
                        <div class="col-span-1 ml-4">
                            <p class="text-center font-bold">Adjectival Result</p>
                            <ul class="list-disc">
                                <template v-for="(adjectival, key) in props.adjectival2" :key="key">
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
            </div>
        </div>
    </AppLayout>
</template>
