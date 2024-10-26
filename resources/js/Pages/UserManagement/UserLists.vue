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

const props = defineProps(["users", "offices", "search", "position", "office", "units"])
const date_time = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

const form_status = useForm({
    user: null,
    status: null
})

const form_access_control = useForm({
    user: null,
    selected: []
})

const form_update = useForm({
    user: null,
    name: null,
    email: null,
    user_type: "",
    office_id: "",
    change_pass: false,
    password: "",
})

const status_modal = ref(false);
const update_modal = ref(false);
const access_control_modal = ref(false);

const open_modal_access_control = (user) => {
    form_access_control.reset()
    form_access_control.user = user
    user.access_control.units.forEach(unit => {
        form_access_control.selected.push(unit)
    });
    access_control_modal.value = !access_control_modal.value
}

const open_modal_status = (user) => {
    form_status.reset()
    form_status.user = user
    form_status.status = user.status == 1 ? false : true
    status_modal.value = !status_modal.value
}

const open_modal_update = (user) => {
    form_update.reset()
    form_update.user = user
    form_update.name = user.name
    form_update.email = user.email
    form_update.user_type = user.user_type
    form_update.office_id = user.office_id
    update_modal.value = !update_modal.value
}

const confirm_status = () => {
    form_status.put(route("user.status", { user: form_status.user }), {
        preserveScroll: true,
        onSuccess: () => {
            form_status.reset();
            toast.success("User has been successfully updated the status!", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
            status_modal.value = !status_modal.value
        }
    });
}

const update = () => {
    form_update.put(route("user.update", { user: form_update.user }), {
        preserveScroll: true,
        onSuccess: () => {
            form_update.reset();
            toast.success("User has been successfully updated.", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
            update_modal.value = !update_modal.value
        }
    });
}

const access_control = () => {
    form_access_control.put(route("access.update", { accessControl: form_access_control.user.access_control.id }), {
        preserveScroll: true,
        onSuccess: () => {
            form_access_control.reset();
            toast.success("User has been successfully updated.", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
            access_control_modal.value = !access_control_modal.value
        }
    });
}
</script>

<template>
    <div v-if="users.data.length == 0">
        <p class="text-center font-bold text-[5vmin] mt-12">
            No Users!
        </p>
    </div>
    <div v-else class="grid grid-cols-12 gap-2">
        <template v-for="(user, key) in users.data" :key="key">
            <div class="col-span-3">
                <div
                    class="w-full h-[38vmin] max-w-sm bg-white border border-gray-200 rounded-lg shadow group relative">
                    <div class="absolute hidden group-hover:block top-0 right-0 text-white p-2 rounded ">
                        <button
                            v-if="($page.props.auth.user.user_type == 'root' || $page.props.auth.user.user_type == 'admin') && $page.props.auth.user.id != user.id"
                            @click="open_modal_update(user)" class="bg-orange-500 rounded-md p-1 mr-1">
                            <Icon icon="pencil" />
                        </button>
                        <button
                            v-if="($page.props.auth.user.user_type == 'root' || $page.props.auth.user.user_type == 'admin') && $page.props.auth.user.id != user.id"
                            @click="open_modal_status(user)" class="rounded-md p-1"
                            :class="user.status == 1 ? 'bg-red-500' : 'bg-green-500'">
                            <Icon v-if="user.status == 1" icon="close_icon" />
                            <Icon v-else icon="check" />
                        </button>
                        <button @click="open_modal_access_control(user)" class="rounded-md p-1 ml-1 bg-teal-500">
                            <Icon icon="option" />
                        </button>
                    </div>
                    <img class="object-obtain p-8 h-[25vmin] w-[25vmin] mx-auto rounded-full -mt-5"
                        :src="user.profile_photo_url" :onerror="`this.src='${default_image}'`" alt="User image" />
                    <div class="px-2 pb-2">
                        <div>
                            <h5 class="text-lg font-semibold tracking-tight text-gray-900 text-center -mt-4">{{
                                user.name }}
                            </h5>
                            <p class="text-center mx-auto text-xs">{{ user.email }}</p>
                            <p
                                class="text-center text-white mx-auto text-xs uppercase bg-green-500 w-[10vmin] rounded-lg mt-2 p-1">
                                {{ user.user_type == 'root' ? "Super Admin" : user.user_type == 'admin' ?
                                    "Admin" : user.user_type == 'vcsas' ? "VCSAS" : user.user_type == 'director' ?
                                        "Director" : user.user_type == 'unit_head' ? "Unit Head" : "Unit Staff" }}</p>
                            <p
                                class="text-center text-white mx-auto text-xs uppercase bg-orange-500 w-[10vmin] rounded-lg mt-2 p-1 pl-1 pr-1">
                                {{ user.office.abbrevation }}</p>
                            <p class="text-xs p-1 text-center text-white rounded-lg font-bold w-[10vmin] mx-auto mt-2"
                                :class="user.status == 1 ? 'bg-green-500' : 'bg-red-500'">{{ user.status == 1 ?
                                    'Active' : 'Deactivated' }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
    <div class="flex items-center justify-between bottom-1 fixed">
        <Pagination :links="props.users.links" :search="props.search" :position="props.position"
            :office="props.office" />
        <p class="mt-6 text-sm text-gray-500">
            Showing {{ users.data.length }} Users
        </p>
    </div>

    <ConfirmDialogModal :show="status_modal" @close="status_modal = false" maxWidth="2xl">
        <template #title>
            Are you sure you want to update status of this user({{
                form_status.user.name
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

    <JetDialogModal :show="update_modal" @close="update_modal = false" maxWidth="2xl">
        <template #title>Update User here!</template>
        <template #content>
            <div class="col-span-full">
                <Input type="text" label="User Name" v-model="form_update.name" />
                <JetInputError :message="form_update.errors.name" class="mt-2" />
            </div>
            <div class="col-span-full">
                <Input type="email" label="User Email" v-model="form_update.email" />
                <JetInputError :message="form_update.errors.email" class="mt-2" />
            </div>
            <div class="col-span-full">
                <select v-model="form_update.office_id"
                    class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full">
                    <option value="" disabled>Select Office</option>
                    <template v-for="(office, key) in props.offices" :key="key">
                        <option :value="office.id">{{ office.abbrevation }}({{ office.name }})</option>
                    </template>
                </select>
                <JetInputError :message="form_update.errors.office_id" class="mt-2" />
            </div>
            <div class="col-span-full">
                <select v-model="form_update.user_type"
                    class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full">
                    <option value="" disabled>Select User Position</option>
                    <option value="root">Root</option>
                    <option value="admin">Admin</option>
                    <option value="vcsas">VCSAS</option>
                    <option value="director">Director</option>
                    <option value="unit_head">Unit Head</option>
                    <option value="unit_staff">Unit Staff</option>
                </select>
                <JetInputError :message="form_update.errors.user_type" class="mt-2" />
            </div>
            <div class="col-span-full mt-4">
                <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="form_update.change_pass" value="" class="sr-only peer" checked>
                    <div
                        class="relative w-11 h-6 bg-orange-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600">
                    </div>
                    <span class="ms-3 text-sm font-medium text-gray-500">Change Password</span>
                </label>
                <Input v-if="form_update.change_pass == true" type="password" label="User New Password"
                    v-model="form_update.password" />
                <JetInputError :message="form_update.errors.password" class="mt-2" />
            </div>

        </template>
        <template #footer>
            <SecondaryButton @click="update_modal = false" class="mr-2 hover:bg-red-500">
                Cancel
            </SecondaryButton>
            <PrimaryButton :class="{ 'opacity-25': form_update.processing }" :disabled="form_update.processing"
                class="hover:bg-green-300" @click="update">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-auto" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>&nbsp;Update
            </PrimaryButton>
        </template>
    </JetDialogModal>

    <JetDialogModal :show="access_control_modal" @close="access_control_modal = false" maxWidth="2xl">
        <template #title>Access Control for user ({{ form_access_control?.user?.name }})</template>
        <template #content>
            <div class="grid grid-cols-12 gap-1 border p-1 mt-1 rounded-lg border-gray-300 h-[70vmin] overflow-y-auto">
                <template v-for="(unit, key) in props.units" :key="key">
                    <div class="col-span-4 flex items-center ps-4 border border-gray-200 rounded h-[5vmin]">
                        <input id="bordered-checkbox-1" type="checkbox" :value="unit.id"
                            v-model="form_access_control.selected" name="bordered-checkbox"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500">
                        <label for="bordered-checkbox-1" class="w-full py-1 ms-2 text-sm font-medium text-gray-700">
                            {{ unit.name }}
                        </label>
                    </div>
                </template>
            </div>
        </template>
        <template #footer>
            <SecondaryButton @click="access_control_modal = false" class="mr-2 hover:bg-red-500">
                Cancel
            </SecondaryButton>
            <PrimaryButton :class="{ 'opacity-25': form_access_control.processing }"
                :disabled="form_access_control.processing" class="hover:bg-green-300" @click="access_control">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-auto" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>&nbsp;Submit
            </PrimaryButton>
        </template>
    </JetDialogModal>
</template>
