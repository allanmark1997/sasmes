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
                        {{ date_time(props.from) }} - {{ date_time(props.to) }}
                    </p>
                </div>
                <div class="w-full grid grid-cols-2 gap-2 mt-6">
                    <div class="col-span-1">
                        <p class="text-center font-bold">Mean</p>
                        <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2 mx-auto">
                            <column-chart :data="props.client_chart" legend="bottom" />
                        </div>
                    </div>
                    <div class="col-span-1">
                        <p class="text-center font-bold">Standard Deviation</p>
                        <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2 mx-auto">
                            <column-chart :data="props.client_chart" legend="bottom" />
                        </div>
                    </div>
                </div>
                <div class="w-full grid grid-cols-3 gap-2 mt-10 p-2">
                    <div class="col-span-1  border-r-2 border-gray-700">
                        <p class="text-center font-bold">Mean</p>
                        asdas
                    </div>
                    <div class="col-span-1  border-r-2 border-gray-700">
                        <p class="text-center font-bold">Standard Deviation</p>
                        asdas
                    </div>
                    <div class="col-span-1">
                        <p class="text-center font-bold">Adjectival Result</p>
                        asdas
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
                                <template >
                                    <tr class="odd:bg-white even:bg-gray-200 border-b">
                                        <th scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex">
                                           asd
                                        </th>
                                        <td class="px-6 py-4">
                                           asdasd
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

        <!-- <div class="py-4">
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
                <div>
                    <p class="m-2 text-2xl font-normal">
                        Quantity of clients
                    </p>
                    <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2 mx-auto">
                        <column-chart :data="props.client_chart" legend="bottom" />
                    </div>

                </div>

                <div class="ml-2">
                    <template v-for="(office, key) in props.office_count_role_gender" :key="key">
                        <div class="mx-auto">
                            <p class="mt-12 text-2xl font-normal">
                                {{ key }}
                            </p>
                            <div class="flex gap-2">
                                <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2 mx-auto">
                                    <column-chart :data="office.type" legend="bottom" width="70vmin" />
                                </div>
                                <div class="bg-[#fff7d1] overflow-hidden shadow-xl sm:rounded-lg mt-2 mx-auto">
                                    <pie-chart :data="office.sex" legend="bottom" :colors="['#4CC9FE', '#FF77B7']"
                                        width="40vmin" />
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
        </div> -->
    </AppLayout>
</template>
