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

const props = defineProps(["unit_services", "search", "office_id", "unit_id", "clients"])

const form_status = useForm({
    service: null,
    status: null
})

const form_admission = useForm({
    search: "",
    id: "",
    client: "",
    appointment_type: null,
    office_id: props.office_id,
    unit_id: props.unit_id,
    unit_services_id: null,
    role: "",
    type: "",
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
            admission_modal.value = !admission_modal.value
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
                        <button @click="open_modal_status(service)" class="rounded-md p-1"
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

    <JetDialogModal :show="admission_modal" @close="admission_modal = false" maxWidth="2xl">
        <template #title>Client Admission here!</template>
        <template #content>
            <!-- <div class="col-span-full">
                <Input type="text" label="Search Client" v-model="form_update.abbrevation" />
                <JetInputError :message="form_update.errors.abbrevation" class="mt-2" />
            </div> -->

            <div class="h-[50vmin]">
                <div class="col-span-full">
                    <select
                        class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"
                        v-model="form_admission.appointment_type">
                        <option :value=null disabled>Select Client Appointment</option>
                        <option value="schedule">Scheduled</option>
                        <option value="walkin">Walk-in</option>
                    </select>
                    <JetInputError :message="form_admission.errors.appointment_type" class="mt-2" />
                </div>
                <div class="col-span-full">
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
                <div>
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
                <div class="col-span-full grid grid-cols-6 gap-1">
                    <div class="col-span-5">
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
                                        <!-- <img class="mr-2 w-6 h-6 rounded-full" :src="client.photo"
                                            :onerror="`this.src='${default_image}'`" />
                                             -->
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
                    <div class="col-span-1 my-auto flex">
                        <button v-if="form_admission.client" class="h-10 my-auto mt-5" @click="
                            (search_results_client_to_add = false),
                            (form_admission.client = ''),
                            (form_admission.id = false),
                            (form_admission.search = '')
                            ">
                            <Icon icon="close_icon" size="sm" />
                        </button>
                        <!-- <button @click="open_search_product"
                            class="bg-yellow-400 text-sm lg:text-xs font-bold rounded-lg p-2 hover:bg-yellow-500 flex gap-2 item-center justify-center mt-4">
                            <Icon icon="search_icon" size="sm" />
                        </button> -->
                    </div>
                </div>

                <div v-if="form_admission.client" class="mt-6">
                    <div class="w-full mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <div class="flex flex-col items-center ">
                            <!-- <img class="w-24 h-24 mb-3 rounded-full shadow-lg mt-4" :src="form_admission.client?.photo"
                                alt="Bonnie image" /> -->

                            <h5 class="mb-1 text-xl font-medium text-gray-700">{{ form_admission.client?.fname }}</h5>
                            <div class="grid grid-cols-12 gap-1">
                                <!-- <div class="col-span-6 flex text-left">
                                    <Icon icon="birthday" /><span class="text-sm text-gray-500">{{
                                        date(form_admission.client?.birthday) }}</span>
                                </div> -->
                                <div class="col-span-6 flex  text-left">
                                    <Icon icon="sex" /><span class="text-sm text-gray-500 uppercase">{{
                                        form_admission.client?.sex }}</span>
                                </div>
                                <!-- <div class="col-span-6 flex text-left">
                                    <Icon icon="location" /><span class="text-sm text-gray-500">{{
                                        form_admission.client?.address
                                    }}</span>
                                </div>
                                <div class="col-span-6 flex text-left">
                                    <Icon icon="user" /><span class="text-sm text-gray-500 uppercase">{{
                                        form_admission.client?.type }}</span>
                                </div>
                                <div class="col-span-6 flex text-left">
                                    <Icon icon="user" /><span class="text-sm text-gray-500 uppercase">{{
                                        form_admission.client?.role }}</span>
                                </div> -->
                                <div class="col-span-6 flex text-left">
                                    <Icon icon="calendar" /><span class="text-sm text-gray-500 uppercase">{{ date(
                                        form_admission.client?.created_at) }}</span>
                                </div>
                            </div>
                            <!-- <img class="w-[35vmin] h-[25vmin] mb-3 rounded-lg shadow-lg mt-4 object-scale-down p-2"
                                :src="form_admission.client.id_photo" alt="Bonnie image" /> -->
                            <div>
                                <button v-if="form_admission.id" class="w-[10vmin] bg-red-500 rounded-lg mt-6 mb-2 text-white" @click="
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


            <!-- <div class="grid grid-cols-12 gap-2">

                <div v-if="post_image.length != 0" class="col-span-12 mx-auto">
                    <template v-for="(image, key) in post_image" :key="key">
                        <div class="flex-shrink-0">
                            <img class="w-64 h-64 rounded-lg " :src="image" />
                            <button @click="remove_image(key)"
                                class="flex text-gray-400 hover:text-gray-600 mt-2 mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path class="text-red-500" stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                                <span class="text-red-500">Remove</span>
                            </button>
                        </div>
                    </template>
    </div>
    <div v-if="post_image.length != 1" class="col-span-12" @dragover.prevent @drop.prevent>
        <label @drop="dragFile" @click="openFile" for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg aria-hidden="true" class="w-8 h-8 mb-1 text-gray-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                    </path>
                </svg>
                <p class="mb-1 text-sm text-gray-500">
                    <span class="font-semibold">Click to upload</span> or drag and
                    drop
                </p>
                <p class="text-xs text-gray-500">
                    PNG, JPG or JPEG (MAX.1024kb)
                </p>
            </div>
            <input id="profile_photo" type="file" accept="image/png, image/gif, image/jpeg" class="hidden" />
        </label>
    </div>
    <div class="col-span-12">
        <JetInputError :message="form_update.errors.image" class="mt-2" />
    </div>

    </div>
    <div class="grid grid-cols-12 gap-1">
        <div class="col-span-12">
            <Input type="text" label="Office name" v-model="form_update.name" />
            <JetInputError :message="form_update.errors.name" class="mt-2" />
        </div>
    </div>
    <div class="col-span-full">
        <Input type="text" label="Office abbrevation" v-model="form_update.abbrevation" />
        <JetInputError :message="form_update.errors.abbrevation" class="mt-2" />
    </div> -->
        </template>
        <template #footer>
            <SecondaryButton @click="admission_modal = false" class="mr-2 hover:bg-red-500">
                Cancel
            </SecondaryButton>
            <PrimaryButton :class="{ 'opacity-25': form_admission.processing }" :disabled="form_admission.processing"
                class="hover:bg-green-300" @click="update_unit">
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
