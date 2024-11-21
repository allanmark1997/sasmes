<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import ServiceLists from '@/Pages/ServiceManagement/ServiceLists.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import JetDialogModal from "@/Components/DialogModal.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Input from "@/CustomComponents/Input.vue";
import JetInputError from "@/Components/InputError.vue";
import Icon from "@/CustomComponents/Icon.vue"

import { Head, Link, useForm, router } from '@inertiajs/vue3';
import { onMounted, ref, watch } from "vue";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const props = defineProps(["services", "search", "offices", "office", "units"])
const form = useForm({
    name: null,
    abbrevation: null,
    image: [],
    office:props.office,
    selected_units: [],
})

const form_director = useForm({
    name: null,
    abbrevation: null,
    image: [],
    selected_units: [],
})

const add_modal = ref(false);
const add_modal_director = ref(false);
const post_image = ref([]);
const service_photo_error = ref("");
const post_image_director = ref([]);
const service_photo_error_director = ref("");
const search = ref(props.search);
const office = ref(props.office);
const unit_lists = ref(null);

const open_modal = () => {
    form.reset()
    post_image.value = []
    add_modal.value = !add_modal.value
}

const open_modal_director = () => {
    form_director.reset()
    post_image.value = []
    add_modal_director.value = !add_modal_director.value
}


const add_services = () => {
    form.post(route("service.store"), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
            toast.success("Service has been successfully added!", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
            form.reset()
            post_image.value = []
            unit_lists.value = []
            open_modal();
        }
    });
}

const add_services_director = () => {
    form_director.post(route("service.store_director"), {
        preserveScroll: true,
        onSuccess: () => {
            form_director.reset();
            toast.success("Service has been successfully added!", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
            form_director.reset()
            post_image_director.value = []
            open_modal_director();
        }
    });
}

const openFileDirector = () => {
    service_photo_error_director.value = ""
    let hidden = document.getElementById("profile_photo_director");
    hidden.click();
    hidden.onchange = (e) => {
        for (let index = 0; index < e.target.files.length; index++) {
            post_image_director.value.push(window.URL.createObjectURL(e.target.files[0]));
            form_director.image = e.target.files[0];
        }
    };
};

const dragFileDirector = (e) => {
    service_photo_error_director.value = ""
    e.preventDefault();
    if (e.dataTransfer.files.length > 1) {
        service_photo_error_director.value = "Only 1 image can be selected";
    }
    else {
        for (const file of e.dataTransfer.files) {
            var objectURL = URL.createObjectURL(file);
            post_image_director.value.push(objectURL);
            form_director.image = file;
        }
    }
};

const remove_image_director = (key) => {
    post_image_director.value.splice(key, 1);
    form_director.image = null;
    toast.warn("Image remove", {
        autoClose: 1000,
        transition: toast.TRANSITIONS.FLIP,
        position: toast.POSITION.TOP_RIGHT,
    });
};

const openFile = () => {
    service_photo_error.value = ""
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
    service_photo_error.value = ""
    e.preventDefault();
    if (e.dataTransfer.files.length > 1) {
        service_photo_error.value = "Only 1 image can be selected";
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
        route("service.index", { search: search.value, office: office.value })
    );
};

const search_remove = () => {
    search.value = "";
    office.value = "";
    router.get(
        route("service.index", { search: search.value, office: office.value })
    );
}

watch(
    () => form.office_id,
    (id) => {
        form.selected_units = []
        var index = props.offices.findIndex(x => x.id === id);
        unit_lists.value = props.offices[index].units
        console.log(index, id, unit_lists.value)
    },
    { deep: true }
)
</script>
<template>
    <AppLayout title="Services">
        <template #header>
            <h2 class="font-semibold text-lg text-white leading-tight">
                Services
            </h2>
        </template>

        <div class="py-4">
            <div class="flex justify-between">
                <div class="flex gap-2 ml-8">
                    <div v-if="$page.props.auth.user.user_type != 'director'">
                        <select v-model="office" @change="search_"
                            class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-[15vmin] h-10 mt-5 p-1">
                            <option value="" disabled>Select Office</option>
                            <option value="">All Offices</option>
                            <template v-for="(office, key) in props.offices" :key="key">
                                <option :value="office.id">{{ office.abbrevation }}</option>
                            </template>
                        </select>
                    </div>
                    <Input v-model="search" class="rounded-lg mb-2 w-[30vmin]" type="text" label="Search Service"
                        @keyup.enter="search_" />
                    <button v-if="search" class="h-10 my-auto mt-5" @click="search_remove">
                        <Icon icon="close_icon" size="sm" />
                    </button>
                </div>
                <div class="flex">
                    <PrimaryButton v-if="$page.props.auth.user.user_type == 'director'" @click="open_modal_director()"
                        class=" mb-2 mr-10 h-10 mt-5">
                        Add Service
                    </PrimaryButton>
                    <PrimaryButton v-else @click="open_modal()" class=" mb-2 mr-12 h-10 mt-5">
                        Add Service
                    </PrimaryButton>
                </div>

            </div>

            <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <ServiceLists :services="props.services" :search="props.search" :office="props.office"
                        :offices="props.offices" :units="props.units" />
                </div>
            </div>
        </div>
    </AppLayout>

    <JetDialogModal :show="add_modal" @close="add_modal = false" maxWidth="2xl">
        <template #title>Add Services here!</template>
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
                    <JetInputError :message="form.errors.image || service_photo_error" class="mt-2" />
                </div>
            </div>
            <div class="grid grid-cols-12 gap-1">
                <div class="col-span-12">
                    <Input type="text" label="Service name" v-model="form.name" />
                    <JetInputError :message="form.errors.name" class="mt-2" />
                </div>
            </div>
            <div class="col-span-full">
                <Input type="text" label="Service abbrevation" v-model="form.abbrevation" />
                <JetInputError :message="form.errors.abbrevation" class="mt-2" />
            </div>
            <div>
                <select v-model="form.office_id"
                    class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full">
                    <option value="" disabled>Select Office</option>
                    <template v-for="(office, key) in props.offices" :key="key">
                        <option :value="office.id">{{ office.name }}</option>
                    </template>
                </select>
            </div>

            <div class="grid grid-cols-12 gap-1 border p-1 mt-1 rounded-lg border-gray-300 h-[40vmin] overflow-y-auto">
                <template v-for="(unit, key) in unit_lists" :key="key">
                    <div class="col-span-4 flex items-center ps-4 border border-gray-200 rounded">
                        <input id="bordered-checkbox-1" type="checkbox" :value="unit.id" v-model="form.selected_units"
                            name="bordered-checkbox"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500">
                        <label for="bordered-checkbox-1" class="w-full py-1 ms-2 text-sm font-medium text-gray-700">
                            {{ unit.name }}
                        </label>
                    </div>
                </template>
            </div>
        </template>
        <template #footer>
            <SecondaryButton @click="add_modal = false" class="mr-2 hover:bg-red-500">
                Cancel
            </SecondaryButton>
            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                class="hover:bg-green-300" @click="add_services">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-auto" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>&nbsp;Submit
            </PrimaryButton>
        </template>
    </JetDialogModal>

    <JetDialogModal :show="add_modal_director" @close="add_modal_director = false" maxWidth="2xl">
        <template #title>Add Services here!</template>
        <template #content>
            <div class="grid grid-cols-12 gap-2">
                <div v-if="post_image_director.length != 0" class="col-span-12 mx-auto">
                    <template v-for="(image, key) in post_image_director" :key="key">
                        <div class="flex-shrink-0">
                            <img class="w-64 h-64 rounded-lg " :src="image" />
                            <button @click="remove_image_director(key)"
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
                <div v-if="post_image_director.length != 1" class="col-span-12" @dragover.prevent @drop.prevent>
                    <label @drop="dragFileDirector" @click="openFileDirector" for="dropzone-file"
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
                        <input id="profile_photo_director" type="file" accept="image/png, image/gif, image/jpeg"
                            class="hidden" />
                    </label>
                    <JetInputError :message="form_director.errors.image || service_photo_error_director" class="mt-2" />
                </div>
            </div>
            <div class="grid grid-cols-12 gap-1">
                <div class="col-span-12">
                    <Input type="text" label="Service name" v-model="form_director.name" />
                    <JetInputError :message="form_director.errors.name" class="mt-2" />
                </div>
            </div>
            <div class="col-span-full">
                <Input type="text" label="Service abbrevation" v-model="form_director.abbrevation" />
                <JetInputError :message="form_director.errors.abbrevation" class="mt-2" />
            </div>
            <div class="grid grid-cols-12 gap-1 border p-1 mt-1 rounded-lg border-gray-300 h-[40vmin] overflow-y-auto">
                <template v-for="(unit, key) in props.offices?.units" :key="key">
                    <div class="col-span-4 flex items-center ps-4 border border-gray-200 rounded">
                        <input id="bordered-checkbox-1" type="checkbox" :value="unit.id" v-model="form_director.selected_units"
                            name="bordered-checkbox"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500">
                        <label for="bordered-checkbox-1" class="w-full py-1 ms-2 text-sm font-medium text-gray-700">
                            {{ unit.name }}
                        </label>
                    </div>
                </template>
            </div>
        </template>
        <template #footer>
            <SecondaryButton @click="add_modal_director = false" class="mr-2 hover:bg-red-500">
                Cancel
            </SecondaryButton>
            <PrimaryButton :class="{ 'opacity-25': form_director.processing }" :disabled="form_director.processing"
                class="hover:bg-green-300" @click="add_services_director">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-auto" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>&nbsp;Submit
            </PrimaryButton>
        </template>
    </JetDialogModal>
</template>