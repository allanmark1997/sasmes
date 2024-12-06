<script setup>
import Icon from "@/CustomComponents/Icon.vue"
import default_image from "@/CustomComponents/images/sasmes_logo.png"
import PrimaryButton from '@/Components/PrimaryButton.vue';
import JetDialogModal from "@/Components/DialogModal.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Input from "@/CustomComponents/Input.vue";
import JetInputError from "@/Components/InputError.vue";
import ConfirmDialogModal from "@/Components/ConfirmationModal.vue";
import Pagination from "@/CustomComponents/Pagination2.vue";
import { Head, Link, useForm } from '@inertiajs/vue3';
import { onMounted, ref } from "vue";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import moment from 'moment';

const props = defineProps(["from", "to", "client", "client_id", "unit_services_count", "office_visits", "unit_visits"])
const form = useForm({
    unit: null
})
const services_modal = ref(false);

const open_modal = (data) => {
    form.unit = data
    services_modal.value = !services_modal.value
}

const date = (date) => {
    return moment(date).format('MMMM Do YYYY');
}

const date_time = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

const number_format = (number) => {
    return new Intl.NumberFormat('en-US').format(number)
}
</script>

<template>

    <div class="relative overflow-x-auto overflow-y-auto rounded-lg">
        <div class="flex mt-2 bg-[#fff7d1] shadow-lg rounded-lg justify-between font-bold">
            <div class="flex">
                <p class="border-r-2 p-6">
                    Name:
                </p>
                <div class="p-3 ">
                    <p class="text-xl uppercase">
                        {{ client?.lname + ", " }}
                    </p>
                    <p class="text-sm">
                        {{ client?.fname + " " + (!client?.mname ?
                            "" : client?.mname) }}
                    </p>
                </div>
            </div>

            <div class="p-6 flex">
                <p>
                    Sex:
                </p>
                <p class="uppercase">
                    &nbsp;&nbsp;{{ client?.sex }}
                </p>
            </div>
        </div>
        <div v-if="office_visits.length == 0">
            <p class="text-center font-bold text-[5vmin] mt-12">
                No Data!
            </p>
        </div>
        <div v-else class="grid grid-cols-2 mt-4 shadow-lg gap-4">
            <div class=" mt-2 bg-[#fff7d1] shadow-lg rounded-lg justify-between font-bold p-6">
                <p class="mx-auto text-2xl text-center font-bold">
                    SAS OFFICES
                </p>
                <pie-chart :data="props.office_visits.chart" legend="bottom"></pie-chart>
            </div>

            <div class="mt-2 bg-[#fff7d1] shadow-lg rounded-lg justify-between p-6">
                <p class="mx-auto text-xl text-center">
                    Overall Services: <span class="font-bold">{{ number_format(props.unit_services_count) }}</span>
                </p>
                <p class="mx-auto text-lg font-bold">
                    Offices:
                </p>
                <div class="grid grid-cols-2 gap-4">
                    <template v-for="(office, key) in props.office_visits.text" :key="key">
                        <div>
                            <p class="text-center">
                                {{ key }}
                            </p>
                            <p class="text-center text-xs">
                                {{ office.percent }}%
                            </p>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-blue-600 h-2.5 rounded-full" :style="`width: ${office.percent}%`"></div>
                            </div>
                            <p class="text-center text-xs">
                                {{ office.count }} out of {{ number_format(props.unit_services_count) }}
                            </p>
                        </div>
                    </template>
                </div>
            </div>
        </div>

        <template v-for="(office, key) in props.unit_visits" :key="key">
            <div class="mt-6 bg-[#fff7d1] shadow-lg rounded-lg justify-between p-6">
                <p class="mx-auto text-2xl text-center font-bold">
                    {{ key }}
                </p>
                <pie-chart :data="office.chart" legend="bottom"></pie-chart>

                <div class="grid grid-cols-3 gap-4 mt-4">
                    <template v-for="(units, key2) in office.text" :key="key2">
                        <div>
                            <p v-if="$page.props.auth.user.user_type == 'vcsas'" class="text-center underline cursor-pointer">
                                {{ key2 }}
                            </p>
                            <p v-else class="text-center underline cursor-pointer" @click="open_modal(units.services)">
                                {{ key2 }}
                            </p>
                            <p class="text-center text-xs">
                                {{ units.percent }}%
                            </p>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-blue-600 h-2.5 rounded-full" :style="`width: ${units.percent}%`"></div>
                            </div>
                            <p class="text-center text-xs">
                                {{ units.count }} out of {{ number_format(office.office_count) }}
                            </p>
                        </div>
                    </template>
                </div>
            </div>
        </template>
    </div>

    <JetDialogModal :show="services_modal" @close="services_modal = false" maxWidth="2xl">
        <template #title>
            <p class="text-center font-bold">
                {{ form.unit.name }}
            </p>
        </template>
        <template #content>
            <p class="text-center underline">
                Services
            </p>
            <div class="grid grid-cols-2 gap-4 mt-4">
                <template v-for="(service, key) in form.unit.services.text" :key="key">
                    <div>
                        <p class="text-left">
                            {{ key }}
                        </p>
                        <p class="text-center text-xs">
                            {{ service.percent }}%
                        </p>
                        <div class="w-full bg-gray-200 rounded-full h-2.5">
                            <div class="bg-blue-600 h-2.5 rounded-full" :style="`width: ${service.percent}%`"></div>
                        </div>
                        <p class="text-center text-xs">
                            {{ service.count }} out of {{ number_format(form.unit.unit_count) }}
                        </p>
                    </div>
                </template>
            </div>
        </template>
        <template #footer>
            <SecondaryButton @click="services_modal = false" class="mr-2 hover:bg-red-500">
                Close
            </SecondaryButton>
        </template>
    </JetDialogModal>
</template>
