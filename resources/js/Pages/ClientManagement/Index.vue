<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import ClientLists from '@/Pages/ClientManagement/ClientLists.vue';
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

const props = defineProps(["clients", "search"])
const form_register = useForm({
    fname: null,
    mname: null,
    lname: null,
    sex: null,
    // birthday: null,
    // address: null,
    // type: null,
    // role: null,
    // photo: [],
    // id_photo: []
})

const register_modal = ref(false);
// const client_photo_error = ref("");
// const id_photo_error = ref("");
// const post_image = ref([]);
// const post_image_id = ref([]);
const search = ref(props.search);

const open_register_modal = () => {
    form_register.reset()
    // post_image.value = []
    // post_image_id.value = []
    register_modal.value = !register_modal.value
}

const register_client = () => {
    form_register.post(route("client.store"), {
        preserveScroll: true,
        onSuccess: () => {
            form_register.reset();
            toast.success("Client has been successfully registered!", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
            form_register.reset()
            register_modal.value = !register_modal.value
        }
    });
}

// const openFile = () => {
//     client_photo_error.value = ""
//     let hidden = document.getElementById("profile_photo");
//     hidden.click();
//     hidden.onchange = (e) => {
//         for (let index = 0; index < e.target.files.length; index++) {
//             post_image.value.push(window.URL.createObjectURL(e.target.files[0]));
//             form_register.photo = e.target.files[0];
//         }
//     };
// };

// const dragFile = (e) => {
//     client_photo_error.value = ""
//     e.preventDefault();
//     if (e.dataTransfer.files.length > 1) {
//         client_photo_error.value = "Only 1 image can be selected";
//     }
//     else {
//         for (const file of e.dataTransfer.files) {
//             var objectURL = URL.createObjectURL(file);
//             post_image.value.push(objectURL);
//             form_register.photo = file;
//         }
//     }
// };

// const remove_image = (key) => {
//     post_image.value.splice(key, 1);
//     form_register.photo = null;
//     toast.warn("Image remove", {
//         autoClose: 1000,
//         transition: toast.TRANSITIONS.FLIP,
//         position: toast.POSITION.TOP_RIGHT,
//     });
// };

// const openFileId = () => {
//     id_photo_error.value = ""
//     let hidden = document.getElementById("id_photo");
//     hidden.click();
//     hidden.onchange = (e) => {
//         for (let index = 0; index < e.target.files.length; index++) {
//             post_image_id.value.push(window.URL.createObjectURL(e.target.files[0]));
//             form_register.id_photo = e.target.files[0];
//         }
//     };
// };

// const dragFileId = (e) => {
//     id_photo_error.value = ""
//     e.preventDefault();
//     if (e.dataTransfer.files.length > 1) {
//         id_photo_error.value = "Only 1 image can be selected";
//     }
//     else {
//         for (const file of e.dataTransfer.files) {
//             var objectURL = URL.createObjectURL(file);
//             post_image_id.value.push(objectURL);
//             form_register.id_photo = file;
//         }
//     }
// };

// const remove_imageId = (key) => {
//     post_image_id.value.splice(key, 1);
//     form_register.id_photo = null;
//     toast.warn("Image remove", {
//         autoClose: 1000,
//         transition: toast.TRANSITIONS.FLIP,
//         position: toast.POSITION.TOP_RIGHT,
//     });
// };

const search_ = () => {
    router.get(
        route("client.index", { search: search.value })
    );
};

const search_remove = () => {
    search.value = "";
    router.get(
        route("client.index", { search: search.value })
    );
}
</script>
<template>
    <AppLayout title="Clients">
        <template #header>
            <h2 class="font-semibold text-lg text-white leading-tight">
                Clients
            </h2>
        </template>

        <div class="py-4">
            <div class="flex justify-between">
                <div class="flex gap-2 ml-8">
                    <Input v-model="search" class="rounded-lg mb-2 w-[30vmin]" type="text" label="Search Client"
                        @keyup.enter="search_" />
                    <button v-if="search" class="h-10 my-auto mt-5" @click="search_remove">
                        <Icon icon="close_icon" size="sm" />
                    </button>
                </div>
                <PrimaryButton @click="open_register_modal()" class=" mb-2 mr-12 h-10 mt-5">
                    Register New Client
                </PrimaryButton>
            </div>

            <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <ClientLists :clients="props.clients" :search="props.search" />
                </div>
            </div>
        </div>
    </AppLayout>

    <JetDialogModal :show="register_modal" @close="register_modal = false" maxWidth="2xl">
        <template #title>Register New Client here!</template>
        <template #content>
            <!-- <div class="grid grid-cols-12 gap-2">
                <div v-if="post_image.length != 0" class="col-span-12 mx-auto">
                    <template v-for="(image, key) in post_image" :key="key">
                        <div class="flex-shrink-0">
                            <img class="w-[20vmin] h-[20vmin] rounded-full" :src="image" />
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
                                drop Client's Photo
                            </p>
                            <p class="text-xs text-gray-500">
                                PNG, JPG or JPEG (MAX.1024kb)
                            </p>
                        </div>
                        <input id="profile_photo" type="file" accept="image/png, image/gif, image/jpeg"
                            class="hidden" />
                    </label>
                </div>
                <JetInputError :message="form_register.errors.photo || client_photo_error" class="mt-2 col-span-full" />
            </div> -->
            <div class="col-span-full">
                <Input type="text" label="Client First Name" v-model="form_register.fname" />
                <JetInputError :message="form_register.errors.fname || form_register.errors.name_surname" class="mt-2" />
            </div>
            <div class="col-span-full">
                <Input type="text" label="Client Middle Name" v-model="form_register.mname" />
            </div>
            <div class="col-span-full">
                <Input type="text" label="Client Surname" v-model="form_register.lname" />
                <JetInputError :message="form_register.errors.lname || form_register.errors.name_surname" class="mt-2" />
            </div>  
            <div class="col-span-full">
                <select
                    class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"
                    v-model="form_register.sex">
                    <option :value=null disabled>Select Client Sex</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <JetInputError :message="form_register.errors.sex" class="mt-2" />
            </div>
            <!-- <div class="col-span-full">
                <Input type="date" label="Client Birthday" v-model="form_register.birthday" />
                <JetInputError :message="form_register.errors.birthday" class="mt-2" />
            </div>
            <div class="col-span-full">
                <Input type="text" label="Client Address" v-model="form_register.address" />
                <JetInputError :message="form_register.errors.address" class="mt-2" />
            </div>
            <div class="col-span-full">
                <select
                    class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"
                    v-model="form_register.role">
                    <option :value=null disabled>Select Client Role</option>
                    <option value="student">Student</option>
                    <option value="employee">Employee</option>
                    <option value="alumni">Alumni</option>
                    <option value="guardian">Guardian</option>
                    <option value="others">Others</option>
                </select>
                <JetInputError :message="form_register.errors.role" class="mt-2" />
            </div>
            <div class="col-span-full">
                <select
                    class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full"
                    v-model="form_register.type">
                    <option :value=null disabled>Select Client Type</option>
                    <option value="citizen">Citizen</option>
                    <option value="business">Business</option>
                    <option value="government">Government</option>
                </select>
                <JetInputError :message="form_register.errors.role" class="mt-2" />
            </div>
            <div class="grid grid-cols-12 gap-2 mt-2">
                <div v-if="post_image_id.length != 0" class="col-span-12 mx-auto">
                    <template v-for="(image, key) in post_image_id" :key="key">
                        <div class="flex-shrink-0">
                            <img class="w-64 h-64 rounded-lg " :src="image" />
                            <button @click="remove_imageId(key)"
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
                <div v-if="post_image_id.length != 1" class="col-span-12" @dragover.prevent @drop.prevent>
                    <label @drop="dragFileId" @click="openFileId" for="dropzone-file"
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
                                drop ID Photo
                            </p>
                            <p class="text-xs text-gray-500">
                                PNG, JPG or JPEG (MAX.1024kb)
                            </p>
                        </div>
                        <input id="id_photo" type="file" accept="image/png, image/gif, image/jpeg" class="hidden" />
                    </label>
                    <JetInputError :message="form_register.errors.id_photo || id_photo_error" class="mt-2" />
                </div>
            </div> -->
        </template>
        <template #footer>
            <SecondaryButton @click="register_modal = false" class="mr-2 hover:bg-red-500">
                Cancel
            </SecondaryButton>
            <PrimaryButton :class="{ 'opacity-25': form_register.processing }" :disabled="form_register.processing"
                class="hover:bg-green-300" @click="register_client">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-auto" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>&nbsp;Register
            </PrimaryButton>
        </template>
    </JetDialogModal>
</template>