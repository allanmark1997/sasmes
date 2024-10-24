<script setup>
import Icon from "@/CustomComponents/Icon.vue"
import default_image from "@/CustomComponents/images/sasmes_logo.png"
import AppLayout from '@/Layouts/AppLayout.vue';
import OfficeLists from '@/Pages/Office/OfficeLists.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import JetDialogModal from "@/Components/DialogModal.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Input from "@/CustomComponents/Input.vue";
import JetInputError from "@/Components/InputError.vue";
import ConfirmDialogModal from "@/Components/ConfirmationModal.vue";
import Pagination from "@/CustomComponents/Pagination2.vue";
import { Head, Link, useForm } from '@inertiajs/vue3';
import { onMounted, ref } from "vue";
import moment from 'moment';

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const props = defineProps(["client_record", "search"])
const date_time = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}
</script>

<template>
    <div v-if="client_record.data.length == 0">
        <p class="text-center font-bold text-[5vmin] mt-12">
            No Records!
        </p>
    </div>
    <!-- <div class="grid grid-cols-12 gap-2">
        <template v-for="(record, key) in client_record.data" :key="key">
            <div class="col-span-3">
                <div
                    class="w-full h-[40vmin] max-w-sm bg-white border border-gray-200 rounded-lg shadow group relative">
                    <div class="absolute hidden group-hover:block top-0 right-0 text-white p-2 rounded ">
                        <button @click="open_modal(office)" class="bg-orange-500 rounded-md p-1 mr-1">
                            <Icon icon="pencil" />
                        </button>
                        <button @click="open_modal_delete(office)" class="bg-red-500 rounded-md p-1">
                            <Icon icon="trash" />
                        </button>
                    </div>
                    <img class="object-scale-down p-8 rounded-t-lg h-[30vmin] w-[30vmin] mx-auto rounded-lg"
                        :src="office.photo" :onerror="`this.src='${default_image}'`" alt="Office image" />
                    <div class="px-5 pb-5">
                        <a :href="route('unit.index', { office_id:office.id } )">
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900">{{ office.name }}</h5>
                            <small>{{ office.abbrevation }}</small>
                        </a>
                    </div>
                </div>
            </div>
        </template>
    </div> -->
    <div class="relative overflow-x-auto overflow-y-auto rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-700">
        <thead class="text-xs text-white uppercase bg-yellow-500 ">
            <tr >
                <th scope="col" class="px-6 py-3">
                    Client Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Gender
                </th>
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Role
                </th>
                <th scope="col" class="px-6 py-3">
                    Appointment Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Office
                </th>
                <th scope="col" class="px-6 py-3">
                    Service
                </th>
                <th scope="col" class="px-6 py-3">
                    Date & Time
                </th>
            </tr>
        </thead>
        <tbody>
            <template v-for="(record, key) in client_record.data" :key="key">
            <tr class="odd:bg-white even:bg-gray-200 border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                   {{ record.client.name }}
                </th>
                <td class="px-6 py-4">
                    {{ record.client.gender == "male" ? "Male":"Female" }}
                </td>
                <td class="px-6 py-4 uppercase">
                    {{ record.client.type }}
                </td>
                <td class="px-6 py-4 uppercase">
                    {{ record.client.role }}
                </td>
                <td class="px-6 py-4 uppercase">
                    {{ record.appointment_type }}
                </td>
                <td class="px-6 py-4 ">
                    {{ record.office.name }}
                </td>
                <td class="px-6 py-4 ">
                    {{ record.service.unit_service.name }}
                </td>
                <td class="px-6 py-4 ">
                    {{ date_time(record.created_at) }}
                </td>
            </tr>
        </template>
        </tbody>
    </table>
</div>
    <div class="flex items-center justify-between bottom-1 fixed">
        <Pagination :links="props.client_record.links" :search="props.search" />
        <p class="mt-6 text-sm text-gray-500">
            Showing {{ client_record.data.length }} Offices                                                       
        </p>
    </div>
</template>
