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

import VueQrcode from '@chenfengyuan/vue-qrcode';
import html2canvas from 'html2canvas';
const props = defineProps(["unit_services", "search", "office_id", "unit_id", "clients"])

const form_status = useForm({
    service: null,
    status: null
})

const form_admission = useForm({
    search: "",
    id: "",
    client: "",
    unit_services_id: null,
    role: "",
    type: "",
    office_id: props.office_id,
    unit_id: props.unit_id,
})

const admission_modal = ref(false);
const status_modal = ref(false);
const search_results_client_to_add = ref(false)

const open_modal = (service) => {
    form_admission.reset()
    form_admission.unit_services_id = service.id
    admission_modal.value = !admission_modal.value
}

const open_modal_status = (service) => {
    form_status.reset()
    form_status.service = service
    form_status.status = service.status == 1 ? false : true
    status_modal.value = !status_modal.value
}

const update_unit = () => {
    form_admission.post(route("record.store"), {
        preserveScroll: true,
        onSuccess: () => {
            form_admission.reset();
            toast.success("Client has been successfully added a service!", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
            // admission_modal.value = !admission_modal.value
        }
    });
}

const confirm_status = () => {
    form_status.put(route("unit_service.status", { unitService: form_status.service }), {
        preserveScroll: true,
        onSuccess: () => {
            form_status.reset();
            toast.success("Service has been successfully updated the status!", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
            status_modal.value = !status_modal.value
        }
    });
}

const open_search_product = () => {
    search_results_client_to_add.value = !search_results_client_to_add.value;
};

const date = (date) => {
    return moment(date).format('MMMM Do YYYY');
}

// const download_qr = () => {
//     html2canvas(document.querySelector("#capture")).then(canvas => {
//         document.body.appendChild(canvas)
//     });
// }
</script>

<template>
    <div v-if="unit_services.data.length == 0">
        <p class="text-center font-bold text-[5vmin] mt-12">
            No Services!
        </p>
    </div>
    <div class="grid grid-cols-12 gap-2">
        <template v-for="(service, key) in unit_services.data" :key="key">
            <div class="col-span-3">
                <div
                    class="w-full h-[38vmin] max-w-sm bg-white border border-gray-200 rounded-lg shadow group relative">
                    <div class="absolute hidden group-hover:block top-0 right-0 text-white p-2 rounded ">
                        <button v-if="service.status == 1" @click="open_modal(service)"
                            class="bg-orange-500 rounded-md p-1 mr-1">
                            <Icon icon="user" />
                        </button>
                        <button v-if="($page.props.auth.user.user_type == 'root' || $page.props.auth.user.user_type == 'admin' || $page.props.auth.user.user_type == 'director')" @click="open_modal_status(service)" class="rounded-md p-1"
                            :class="service.status == 1 ? 'bg-red-500' : 'bg-green-500'">
                            <Icon v-if="service.status == 1" icon="close_icon" />
                            <Icon v-else icon="check" />
                        </button>
                    </div>
                    <img class="object-scale-down p-8 rounded-t-lg h-[25vmin] w-[25vmin] mx-auto rounded-lg -mt-6"
                        :src="service.unit_service.photo" :onerror="`this.src='${default_image}'`"
                        alt="Service image" />
                    <div class="px-5 pb-5">
                        <div>
                            <h5 class="text-md font-semibold tracking-tight text-gray-900">{{ service.unit_service.name
                                }}</h5>
                            <small>{{ service.unit_service.abbrevation }}</small>
                        </div>
                        <div>
                            <p class="text-xs p-1 text-center text-white rounded-lg font-bold w-[10vmin] mx-auto"
                                :class="service.status == 1 ? 'bg-green-500' : 'bg-red-500'">{{ service.status == 1 ?
                                    'Active' : 'Deactivated' }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
    <div class="flex items-center justify-between bottom-1 fixed">
        <Pagination :links="props.unit_services.links" :search="props.search" :office_id="props.office_id"
            :unit_id="props.unit_id" />
        <p class="mt-6 text-sm text-gray-500">
            Showing {{ unit_services.data.length }} Units
        </p>
    </div>

    <JetDialogModal :show="admission_modal" maxWidth="2xl">
        <template #title>{{ $page.props.flash.code ? "Please get the code before closing" : "Client Admission here!"
            }}</template>
        <template #content>
            <div class="h-[50vmin]">
                <div v-if="!$page.props.flash.code" class="col-span-full">
                    <select
                        class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"
                        v-model="form_admission.type">
                        <option value="" disabled>Select Client Type</option>
                        <option value="citizen">Citizen</option>
                        <option value="business">Business</option>
                        <option value="government">Government</option>
                    </select>
                    <JetInputError :message="form_admission.errors.type" class="mt-2" />
                </div>
                <div v-if="!$page.props.flash.code">
                    <select v-model="form_admission.role"
                        class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-[15vmin] h-10 mt-5 w-full">
                        <option value="" disabled>Select Client Role</option>
                        <option value="student">Student</option>
                        <option value="employee">Employee</option>
                        <option value="alumni">Alumni</option>
                        <option value="guardian">Guardian</option>
                        <option value="others">Others</option>
                    </select>
                    <JetInputError :message="form_admission.errors.role" class="mt-2" />

                </div>
                <div v-if="!$page.props.flash.code" class="col-span-full grid grid-cols-6 gap-1">
                    <div v-if="!form_admission.client" class="col-span-5">
                        <Input type="text" label="Search Client name" v-model="form_admission.search" />
                        <JetInputError :message="form_admission.errors.client" class="mt-2" />
                        <div v-if="form_admission.search && !form_admission.client"
                            class="absolute z-50 w-60 bg-white rounded shadow">
                            <ul class="overflow-y-auto py-1 h-[20vmin] text-gray-700"
                                aria-labelledby="dropdownUsersButton">
                                <li v-for="(client, index) in props.clients" :key="index">
                                    <a v-if="client.lname
                                        .toLowerCase()
                                        .includes(form_admission.search.toLowerCase()) ||
                                        client.fname
                                            .toLowerCase()
                                            .includes(form_admission.search.toLowerCase())
                                    " class="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer" @click="
                                        (form_admission.id = client.id),
                                        (form_admission.client = client),
                                        (search_results_client_to_add = false),
                                        (form_admission.search = '')
                                        ">
                                        {{ client.lname + ", " + client.fname + " " + (!client.mname ? "" :
                                            client.mname)
                                        }}
                                    </a>
                                </li>
                            </ul>
                            <div class="flex justify-center">
                                <small>Results</small>
                            </div>
                            <a @click="
                                (search_results_client_to_add = false),
                                (form_admission.client = ''),
                                (form_admission.id = false),
                                (form_admission.search = '')
                                "
                                class="flex items-center p-3 text-sm font-medium text-blue-600 bg-gray-50 border-t border-gray-200 hover:bg-gray-100 hover:underline cursor-pointer">
                                clear search
                            </a>
                        </div>
                    </div>
                    <div v-if="!form_admission.client" class="col-span-1 my-auto flex">
                        <button v-if="form_admission.client" class="h-10 my-auto mt-5" @click="
                            (search_results_client_to_add = false),
                            (form_admission.client = ''),
                            (form_admission.id = false),
                            (form_admission.search = '')
                            ">
                            <Icon icon="close_icon" size="sm" />
                        </button>
                    </div>
                </div>
                <div  class="grid grid-cols-1 mx-auto my-auto text-center item-center" id="captured">
                    <div v-if="$page.props.flash.code" class="col-span-full mx-auto">
                        <vue-qrcode :value="$page.props.flash.code" :options="{ width: 200 }" />
                    </div>
                    <div v-if="$page.props.flash.code" class="col-span-full mx-auto">
                        <p>
                            <small> {{ $page.props.flash.code }}</small>
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-1 mx-auto my-auto text-center item-center">
                    <div v-if="$page.props.flash.code" class="col-span-full mx-auto mt-2 mx-auto">
                    </div>
                </div>

                <div v-if="form_admission.client" class="mt-6">
                    <div class="w-full mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <div class="flex flex-col items-center ">
                            <h5 class="mb-1 text-xl font-medium text-gray-700 mt-2 mr-2 ml-2 text-center">
                                {{ form_admission.client?.lname }} , {{ form_admission.client?.fname }} {{
                                    form_admission.client?.mname }}</h5>
                            <div class="grid grid-cols-12 gap-1">
                                <div class="col-span-6 flex  text-left">
                                    <Icon icon="sex" /><span class="text-sm text-gray-500 uppercase">{{
                                        form_admission.client?.sex }}</span>
                                </div>
                                <div class="col-span-6 flex text-left">
                                    <Icon icon="calendar" /><span class="text-sm text-gray-500 uppercase">{{ date(
                                        form_admission.client?.created_at) }}</span>
                                </div>
                            </div>
                            <div>
                                <button v-if="form_admission.id"
                                    class="w-[10vmin] bg-red-500 rounded-lg mt-6 mb-2 text-white" @click="
                                        (search_results_client_to_add = false),
                                        (form_admission.client = ''),
                                        (form_admission.id = false),
                                        (form_admission.search = '')
                                        ">
                                    Remove
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </template>
        <template #footer>
            <SecondaryButton @click="admission_modal = false, $page.props.flash.code = null"
                class="mr-2 hover:bg-red-500">
                {{ $page.props.flash.code ? "Close" : "Cancel" }}
            </SecondaryButton>
            <PrimaryButton v-if="!$page.props.flash.code" :class="{ 'opacity-25': form_admission.processing }"
                :disabled="form_admission.processing" class="hover:bg-green-300" @click="update_unit">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-auto" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>&nbsp;Submit
            </PrimaryButton>
        </template>
    </JetDialogModal>

    <ConfirmDialogModal :show="status_modal" @close="status_modal = false" maxWidth="2xl">
        <template #title>
            Are you sure you want to update status of service({{
                form_status.service.unit_service.name
            }})?</template>
        <template #content>
        </template>
        <template #footer>
            <SecondaryButton @click="status_modal = false" class="mr-2">
                nevermind
            </SecondaryButton>
            <PrimaryButton :class="{ 'opacity-25': form_status.processing }" :disabled="form_status.processing"
                class="hover:bg-green-400" @click="confirm_status">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-auto" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>&nbsp;Confirm
            </PrimaryButton>
        </template>
    </ConfirmDialogModal>
</template>
