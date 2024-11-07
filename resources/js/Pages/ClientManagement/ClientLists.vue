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

const props = defineProps(["clients", "search"])
const form_update = useForm({
    fname: null,
    mname: null,
    lname: null,
    sex: null,
})

const update_modal = ref(false);
const details_modal = ref(false);

const open_update_modal = (client) => {
    form_update.reset()

    form_update.client = client
    form_update.fname = client.fname
    form_update.mname = client.mname
    form_update.lname = client.lname
    form_update.sex = client.sex
    update_modal.value = !update_modal.value
}

const update_client = () => {
    form_update.post(route("client.update", { client: form_update.client }), {
        preserveScroll: true,
        onSuccess: () => {
            form_update.reset();
            toast.success("Client has been successfully updated!", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
            form_update.reset()
            update_modal.value = !update_modal.value
        }
    });
}

const open_modal_details = (client) => {
    form_update.client = client
    details_modal.value = !details_modal.value
}

const date = (date) => {
    return moment(date).format('MMMM Do YYYY');
}

const date_time = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}
</script>

<template>
    <div v-if="clients.data.length == 0">
        <p class="text-center font-bold text-[5vmin] mt-12">
            No Clients!
        </p>
    </div>
    <div v-else class="relative overflow-x-auto overflow-y-auto rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-700">
            <thead class="text-xs text-white uppercase bg-yellow-500 ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Client Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Gender
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Date & Time
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(client, key) in clients.data" :key="key">
                    <tr class="odd:bg-white even:bg-gray-200 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex">
                            <a class="hover:font-bold hover:underline" :href="route('client.index_details', {client_id:client.id})">
                                {{ client.lname + ", " }}{{ client.fname + " " }}{{ " " + !client.mname ? client.mname : ""
                            }}
                            </a>
                        </th>
                        <td class="px-6 py-4">
                            {{ client.sex == "male" ? "Male" : "Female" }}
                        </td>
                        <td class="px-6 py-4 ">
                            {{ date_time(client.created_at) }}
                        </td>
                        <td class="px-6 py-4 ">
                            <button @click="open_modal_details(client)" class="bg-green-500 rounded-md p-1 mr-1">
                                <Icon icon="docs" />
                            </button>
                            <button
                                v-if="$page.props.auth.user.user_type == 'root' || $page.props.auth.user.user_type == 'admin' || $page.props.auth.user.user_type == 'vcsas' || $page.props.auth.user.user_type == 'director' || $page.props.auth.user.user_type == 'unit_head'"
                                @click="open_update_modal(client)" class="bg-orange-500 rounded-md p-1 mr-1">
                                <Icon icon="pencil" />
                            </button>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
    <div class="flex items-center justify-between bottom-1 fixed">
        <Pagination :links="props.clients.links" :search="props.search" />
        <p class="mt-6 text-sm text-gray-500">
            Showing {{ clients.data.length }} Clients
        </p>
    </div>

    <JetDialogModal :show="update_modal" @close="update_modal = false" maxWidth="2xl">
        <template #title>Update Client here!</template>
        <template #content>
            <div class="col-span-full">
                <Input type="text" label="Client First Name" v-model="form_update.fname" />
                <JetInputError :message="form_update.errors.fname" class="mt-2" />
            </div>
            <div class="col-span-full">
                <Input type="text" label="Client Middle Name" v-model="form_update.mname" />
            </div>
            <div class="col-span-full">
                <Input type="text" label="Client Surname" v-model="form_update.lname" />
                <JetInputError :message="form_update.errors.lname" class="mt-2" />
            </div>
            <div class="col-span-full">
                <select
                    class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"
                    v-model="form_update.sex">
                    <option :value=null disabled>Select Client Sex</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <JetInputError :message="form_update.errors.sex" class="mt-2" />
            </div>
        </template>
        <template #footer>
            <SecondaryButton @click="update_modal = false" class="mr-2 hover:bg-red-500">
                Cancel
            </SecondaryButton>
            <PrimaryButton :class="{ 'opacity-25': form_update.processing }" :disabled="form_update.processing"
                class="hover:bg-green-300" @click="update_client">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-auto" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>&nbsp;Update
            </PrimaryButton>
        </template>
    </JetDialogModal>

    <JetDialogModal :show="details_modal" @close="details_modal = false" maxWidth="6xl">
        <template #title>
            <div class="flex mt-2 bg-[#fff7d1] shadow-lg rounded-lg justify-between">
                <div class="flex">
                    <p class="border-r-2 p-3">
                        Name:
                    </p>
                    <div class="p-3 ">
                        <p class="text-xl uppercase">
                            {{ form_update.client?.lname + ", " }}
                        </p>
                        <p class="text-sm">
                            {{ form_update.client?.fname + " " + (!form_update.client?.mname ?
                                "" : form_update.client?.mname) }}
                        </p>
                    </div>
                </div>

                <div class="p-3 flex">
                    <p>
                        Sex:
                    </p>
                    <p class="uppercase">
                        &nbsp;&nbsp;{{ form_update.client?.sex }}
                    </p>
                </div>
            </div>
        </template>
        <template #content>
           
        </template>
        <template #footer>
            <SecondaryButton @click="details_modal = false" class="mr-2 hover:bg-red-500">
                Close
            </SecondaryButton>
        </template>
    </JetDialogModal>
</template>
