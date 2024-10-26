<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import JetDialogModal from "@/Components/DialogModal.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Input from "@/CustomComponents/Input.vue";
import JetInputError from "@/Components/InputError.vue";
import Icon from "@/CustomComponents/Icon.vue"

import { Head, Link, useForm, router } from '@inertiajs/vue3';
import { onMounted, ref } from "vue";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import UserLists from './UserLists.vue';

const props = defineProps(["users", "offices", "services", "search", "office", "position", "units"])

const form = useForm({
    name: null,
    email: null,
    user_type: "",
    office_id: ""
})

const add_modal = ref(false);
const search = ref(props.search);
const position = ref(props.position);
const office = ref(props.office);

const search_ = () => {
    router.get(
        route("user.index", { search: search.value, position: position.value, office: office.value })
    );
};

const search_remove = () => {
    search.value = "";
    position.value = "";
    office.value = "";
    router.get(
        route("user.index", { search: search.value, position: position.value, office: office.value })
    );
}

const open_modal = () => {
    form.reset()
    add_modal.value = !add_modal.value
}

const create_user = () => {
    form.post(route("user.store"), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
            toast.success("User has been successfully registered!", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
            form.reset()
            add_modal.value = !add_modal.value
        }
    });
}
</script>
<template>
    <AppLayout title="Users">
        <template #header>
            <h2 class="font-semibold text-lg text-white leading-tight">
                Users
            </h2>
        </template>

        <div class="py-4">
            <div class="flex justify-between">
                <div class="flex gap-2 ml-8">
                    
                    <div v-if="($page.props.auth.user.user_type == 'root' || $page.props.auth.user.user_type == 'admin')">
                        <select v-model="office" @change="search_"
                            class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full">
                            <option value="" disabled>Select Office</option>
                            <option value="">All Offices</option>
                            <template v-for="(office, key) in props.offices" :key="key">
                                <option :value="office.id">{{ office.abbrevation }} ({{ office.name }})</option>
                            </template>
                        </select>
                    </div>
                    <div v-if="($page.props.auth.user.user_type == 'root' || $page.props.auth.user.user_type == 'admin')">
                        <select v-model="position" @change="search_"
                            class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full">
                            <option value="" disabled>Select User Position</option>
                            <option value="">All Positions</option>
                            <option value="root">Root</option>
                            <option value="admin">Admin</option>
                            <option value="vcsas">VCSAS</option>
                            <option value="director">Director</option>
                            <option value="unit_head">Unit Head</option>
                            <option value="unit_staff">Unit Staff</option>
                        </select>
                    </div>

                    <Input v-model="search" class="rounded-lg mb-2 w-[30vmin]" type="text" label="Search User"
                        @keyup.enter="search_" />
                    <button v-if="search || position || office" class="h-10 my-auto mt-5" @click="search_remove">
                        <Icon icon="close_icon" size="sm" />
                    </button>
                </div>
                <div>
                    <PrimaryButton @click="open_modal()" class=" mb-2 mr-12 h-10 mt-5">
                        Create User
                    </PrimaryButton>
                </div>
            </div>

            <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <UserLists :users="props.users" :offices="props.offices" :search="props.search" :position="props.position"
                        :office="props.office" :units="props.units" />
                </div>
            </div>
        </div>
    </AppLayout>

    <JetDialogModal :show="add_modal" @close="add_modal = false" maxWidth="2xl">
        <template #title>Register User here!</template>
        <template #content>
            <div class="col-span-full">
                <Input type="text" label="User Name" v-model="form.name" />
                <JetInputError :message="form.errors.name" class="mt-2" />
            </div>
            <div class="col-span-full">
                <Input type="email" label="User Email" v-model="form.email" />
                <JetInputError :message="form.errors.email" class="mt-2" />
            </div>
            <div class="col-span-full">
                <select v-model="form.office_id"
                    class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full">
                    <option value="" disabled>Select Office</option>
                    <template v-for="(office, key) in props.offices" :key="key">
                        <option :value="office.id">{{ office.abbrevation }} ({{ office.name }})</option>
                    </template>
                </select>
                <JetInputError :message="form.errors.office_id" class="mt-2" />
            </div>
            <div class="col-span-full">
                <select v-model="form.user_type"
                    class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full">
                    <option value="" disabled>Select User Position</option>
                    <option value="root">Root</option>
                    <option value="admin">Admin</option>
                    <option value="vcsas">VCSAS</option>
                    <option value="director">Director</option>
                    <option value="unit_head">Unit Head</option>
                    <option value="unit_staff">Unit Staff</option>
                </select>
                <JetInputError :message="form.errors.user_type" class="mt-2" />
            </div>

        </template>
        <template #footer>
            <SecondaryButton @click="add_modal = false" class="mr-2 hover:bg-red-500">
                Cancel
            </SecondaryButton>
            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                class="hover:bg-green-300" @click="create_user">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-auto" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>&nbsp;Register
            </PrimaryButton>
        </template>
    </JetDialogModal>
</template>