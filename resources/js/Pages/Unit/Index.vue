<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import UnitLists from '@/Pages/Unit/UnitLists.vue';
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

const props = defineProps(["units", "search", "office_id", "office", "services"])
const form = useForm({
    name: null,
    abbrevation: null,
    image: [],
    office_id: props.office_id,
    selected: []
})

const add_modal = ref(false);
const post_image = ref([]);
const unit_photo_error = ref("");
const search = ref(props.search);

const open_modal = () => {
    form.reset()
    post_image.value = []
    add_modal.value = !add_modal.value
}

const add_unit = () => {
    form.post(route("unit.store"), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
            toast.success("Unit has been successfully added!", {
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
    unit_photo_error.value = ""

    let hidden = document.getElementById("profile_photo");
    hidden.click();
    hidden.onchange = (e) => {
        for (let index = 0; index < e.target.files.length; index++) {
            post_image.value.push(window.URL.createObjectURL(e.target.files[0]));
            form.image = e.target.files[0];
        }
    };
};

const dragFile = (e) => {
    unit_photo_error.value = ""

    e.preventDefault();
    if (e.dataTransfer.files.length > 1) {
        unit_photo_error.value = "Only 1 image can be selected";
    }
    else {
        for (const file of e.dataTransfer.files) {
            var objectURL = URL.createObjectURL(file);
            post_image.value.push(objectURL);
            form.image = file;
        }
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
        route("unit.index", { search: search.value, office_id: props.office_id })
    );
};

const search_remove = () => {
    search.value = "";
    router.get(
        route("unit.index", { search: search.value, office_id: props.office_id })
    );
}
</script>
<template>
    <AppLayout title="Units">
        <template #header>
            <h2 class="font-semibold text-lg text-white leading-tight">
                <a class="hover:underline" :href="route('office.index')">Offices</a> > {{ props.office.name }} > Units
            </h2>
        </template>

        <div class="py-4">
            <div class="flex justify-between">
                <div class="flex gap-2 ml-8">
                    <Input v-model="search" class="rounded-lg mb-2 w-[30vmin]" type="text" label="Search Unit"
                        @keyup.enter="search_" />
                    <button v-if="search" class="h-10 my-auto mt-5" @click="search_remove">
                        <Icon icon="close_icon" size="sm" />
                    </button>
                </div>
                <PrimaryButton v-if="($page.props.auth.user.user_type == 'root' || $page.props.auth.user.user_type == 'admin' || $page.props.auth.user.user_type == 'vcsas' || $page.props.auth.user.user_type == 'director' || $page.props.auth.user.user_type == 'unit_head') && props.office.status == 1" @click="open_modal()" class=" mb-2 mr-12 h-10 mt-5">
                    Add Unit
                </PrimaryButton>
            </div>

            <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <UnitLists :units="props.units" :search="props.search" :office_id="props.office_id" :office="props.office" />
                </div>
            </div>
        </div>
    </AppLayout>

    <JetDialogModal :show="add_modal" @close="add_modal = false" maxWidth="2xl">
        <template #title>Add Unit here!</template>
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
                </div>
                <div class="col-span-12">
                    <JetInputError :message="form.errors.image || unit_photo_error" class="mt-2" />
                </div>
            </div>
            <div class="grid grid-cols-12 gap-1">
                <div class="col-span-12">
                    <Input type="text" label="Unit name" v-model="form.name" />
                    <JetInputError :message="form.errors.name" class="mt-2" />
                </div>
            </div>
            <div class="col-span-full">
                <Input type="text" label="Unit abbrevation" v-model="form.abbrevation" />
                <JetInputError :message="form.errors.abbrevation" class="mt-2" />
            </div>
            <!-- <div class="grid grid-cols-12 gap-1">
                <div class="col-span-11 border p-1 mt-1 rounded-lg border-gray-300">
                    <div class="grid grid-cols-12 gap-2">
                        <template v-for="(service, key) in 10" :key="key">

                            <div class="col-span-4 border rounded-lg p-1 flex justify-between">
                                <p class="truncate">
                                    sample Selected sample Selectedsample Selected
                                </p>
                                <button>x</button>
                            </div>
                        </template>
                    </div>
                </div>
                <div class="col-span-1">
                    <button class="mx-auto my-auto mt-2 ml-2">
                        <svg class="mx-auto my-auto" width="3vmin" height="3vmin" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                                fill="#0F0F0F" />
                        </svg>
                    </button>
                </div>
            </div> -->

            <!-- <div class="grid grid-cols-12 gap-1 border p-1 mt-1 rounded-lg border-gray-300 h-[40vmin] overflow-y-auto">
                <template v-for="(service, key) in props.services" :key="key">
                    <div class="col-span-4 flex items-center ps-4 border border-gray-200 rounded">
                        <input id="bordered-checkbox-1" type="checkbox" :value="service.id" v-model="form.selected"
                            name="bordered-checkbox"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500">
                        <label for="bordered-checkbox-1" class="w-full py-1 ms-2 text-sm font-medium text-gray-700">
                            {{ service.name }}
                        </label>
                    </div>
                </template>
            </div> -->
        </template>
        <template #footer>
            <SecondaryButton @click="add_modal = false" class="mr-2 hover:bg-red-500">
                Cancel
            </SecondaryButton>
            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                class="hover:bg-green-300" @click="add_unit">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-auto" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>&nbsp;Submit
            </PrimaryButton>
        </template>
    </JetDialogModal>
</template>