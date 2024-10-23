<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import OfficeLists from '@/Pages/Office/OfficeLists.vue';
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

const props = defineProps(["offices", "search"])
const form = useForm({
    name: null,
    abbrevation: null,
    image: []
})

const add_modal = ref(false);
const post_image = ref([]);
const search = ref(props.search);

const open_modal = () => {
    form.reset()
    post_image.value = []
    add_modal.value = !add_modal.value
}

const add_office = () => {
    form.post(route("office.store"), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
            toast.success("Office has been successfully added!", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
            form.reset()
            post_image.value = []
            open_modal();
        }
    });
}

const openFile = () => {
    let hidden = document.getElementById("profile_photo");
    hidden.click();
    hidden.onchange = (e) => {
        post_image.value.push(window.URL.createObjectURL(e.target.files[0]));
        form.image = e.target.files[0];
    };
};

const dragFile = (e) => {
    e.preventDefault();
    for (const file of e.dataTransfer.files) {
        var objectURL = URL.createObjectURL(file);
        post_image.value.push(objectURL);
        form.image = file;
    }
};

const remove_image = (key) => {
    post_image.value.splice(key, 1);
    form.image = null;
    toast.warn("Image remove", {
        autoClose: 1000,
        transition: toast.TRANSITIONS.FLIP,
        position: toast.POSITION.TOP_RIGHT,
    });
};

const search_ = () => {
    router.get(
        route("office.index", { search: search.value })
    );
};

const search_remove = () => {
    search.value = "";
    router.get(
        route("office.index", { search: search.value })
    );
}
</script>
<template>
    <AppLayout title="Offices">
        <template #header>
            <h2 class="font-semibold text-lg text-white leading-tight">
                Offices
            </h2>
        </template>

        <div class="py-4">
            <div class="flex justify-between">
                <div class="flex gap-2 ml-8">
                    <Input v-model="search" class="rounded-lg mb-2 w-[30vmin]" type="text" label="Search Office"
                        @keyup.enter="search_" />
                    <button v-if="search" class="h-10 my-auto mt-5" @click="search_remove">
                        <Icon icon="close_icon" size="sm" />
                    </button>
                </div>
                <PrimaryButton @click="open_modal()" class=" mb-2 mr-12 h-10 mt-5">
                    Add Office
                </PrimaryButton>
            </div>

            <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <OfficeLists :offices="props.offices" :search="props.search" /> 
                </div>
            </div>
        </div>
    </AppLayout>

    <JetDialogModal :show="add_modal" @close="add_modal = false" maxWidth="2xl">
        <template #title>Add Office here!</template>
        <template #content>
            <div class="grid grid-cols-12 gap-2">

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
                        <input id="profile_photo" type="file" accept="image/png, image/gif, image/jpeg"
                            class="hidden" />
                    </label>
                    <JetInputError :message="form.errors.image" class="mt-2" />
                </div>
            </div>
            <div class="grid grid-cols-12 gap-1">
                <div class="col-span-12">
                    <Input type="text" label="Office name" v-model="form.name" />
                    <JetInputError :message="form.errors.name" class="mt-2" />
                </div>
            </div>
            <div class="col-span-full">
                <Input type="text" label="Office abbrevation" v-model="form.abbrevation" />
                <JetInputError :message="form.errors.abbrevation" class="mt-2" />
            </div>
        </template>
        <template #footer>
            <SecondaryButton @click="add_modal = false" class="mr-2 hover:bg-red-500">
                Cancel
            </SecondaryButton>
            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                class="hover:bg-green-300" @click="add_office">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-auto" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>&nbsp;Submit
            </PrimaryButton>
        </template>
    </JetDialogModal>
</template>