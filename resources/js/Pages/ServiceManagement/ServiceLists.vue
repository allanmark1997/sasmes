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

const props = defineProps(["services", "search", "office_id", "office", "offices", "units"])
const form_update = useForm({
    name: null,
    abbrevation: null,
    image: [],
    service: null,
    office_id: "",
    selected_units: []
})

onMounted(() => {

})

const form_delete = useForm({
    service: null
})

const form_status = useForm({
    service: null,
    status: null
})

const update_modal = ref(false);
const delete_modal = ref(false);
const post_image = ref([]);
const status_modal = ref(false);
const new_set_units = ref([]);

const open_modal = (service) => {
    form_update.reset()
    post_image.value = []
    new_set_units.value = []
    form_update.service = service
    form_update.name = service.name
    form_update.abbrevation = service.abbrevation
    form_update.office_id = service.office_id
    post_image.value.push(service.photo)

    var array_temp = []
    service.unit_service.forEach(unit => {
        array_temp.push(unit.unit.id)
    })
    props.units.forEach(unit_ => {
        if (unit_.office_id == service.office_id) {
            new_set_units.value.push(unit_)
        }
    });
    array_temp.forEach(exist => {
        var index = new_set_units.value.findIndex(x => x.id === exist);
        console.log(index, exist)
        if (index > -1) { // only splice array when item is found
            new_set_units.value.splice(index, 1); // 2nd parameter means remove one item only
        }
    });

    update_modal.value = !update_modal.value
}

const open_modal_delete = (service) => {
    form_delete.reset()
    form_delete.service = service
    delete_modal.value = !delete_modal.value
}

const open_modal_status = (service) => {
    form_status.reset()
    form_status.service = service
    form_status.status = service.status == 1 ? false : true
    status_modal.value = !status_modal.value
}

const openFile = () => {
    let hidden = document.getElementById("profile_photo");
    hidden.click();
    hidden.onchange = (e) => {
        post_image.value.push(window.URL.createObjectURL(e.target.files[0]));
        form_update.image = e.target.files[0];
    };
};

const dragFile = (e) => {
    e.preventDefault();
    for (const file of e.dataTransfer.files) {
        var objectURL = URL.createObjectURL(file);
        post_image.value.push(objectURL);
        form_update.image = file;
    }
};

const remove_image = (key) => {
    post_image.value.splice(key, 1);
    form_update.image = null;
    toast.warn("Image remove", {
        autoClose: 1000,
        transition: toast.TRANSITIONS.FLIP,
        position: toast.POSITION.TOP_RIGHT,
    });
};

const update_service = () => {
    form_update.post(route("service.update", { service: form_update.service }), {
        preserveScroll: true,
        onSuccess: () => {
            form_update.reset();
            toast.success("Service has been successfully updated!", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
            update_modal.value = !update_modal.value
        }
    });
}

const confirm_delete = () => {
    form_delete.delete(route("service.destroy", { service: form_delete.service }), {
        preserveScroll: true,
        onSuccess: () => {
            form_delete.reset();
            toast.success("Service has been successfully deleted!", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
            delete_modal.value = !delete_modal.value
        }
    });
}

const confirm_status = () => {
    form_status.put(route("service.status", { service: form_status.service }), {
        preserveScroll: true,
        onSuccess: () => {
            form_status.reset();
            toast.success("Unit has been successfully updated the status!", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
            status_modal.value = !status_modal.value
        }
    });
}

// const check_if_exist = (unit) => {
//     var index = form_update.selected_units.findIndex(x => x === unit);
//     if (index == -1) {
//         return false
//     }
//     else{
//         return true
//     }
// }
</script>

<template>
    <div v-if="services.data.length == 0">
        <p class="text-center font-bold text-[5vmin] mt-12">
            No Services!
        </p>
    </div>
    <div class="grid grid-cols-12 gap-2">
        <template v-for="(service, key) in services.data" :key="key">
            <div class="col-span-3">
                <div
                    class="w-full h-[38vmin] max-w-sm bg-white border border-gray-200 rounded-lg shadow group relative">
                    <div class="absolute hidden group-hover:block top-0 right-0 text-white p-2 rounded ">
                        <button
                            v-if="$page.props.auth.user.user_type == 'root' || $page.props.auth.user.user_type == 'admin' || $page.props.auth.user.user_type == 'director' && service.status == 1"
                            @click="open_modal(service)" class="bg-orange-500 rounded-md p-1 mr-1">
                            <Icon icon="pencil" />
                        </button>
                        <button
                            v-if="$page.props.auth.user.user_type == 'root' || $page.props.auth.user.user_type == 'admin' || $page.props.auth.user.user_type == 'director'"
                            @click="open_modal_status(service)" class=" rounded-md p-1"
                            :class="service.status == 1 ? 'bg-red-500' : 'bg-green-500'">
                            <Icon v-if="service.status == 1" icon="close_icon" />
                            <Icon v-else icon="check" />
                        </button>
                    </div>
                    <img class="object-scale-down p-8 rounded-t-lg h-[25vmin] w-[25vmin] mx-auto rounded-lg -mt-6"
                        :src="service.photo" :onerror="`this.src='${default_image}'`" alt="Service image" />
                    <div class="px-5 pb-5">
                        <div>
                            <h5 class="text-md font-semibold tracking-tight text-gray-900">{{ service.name }}</h5>
                            <small>{{ service.abbrevation }}</small>
                        </div>
                        <small>Own by {{ service.office.name }}({{ service.office.abbrevation }})</small>
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
        <Pagination :links="props.services.links" :search="props.search" :office="props.office" />
        <p class="mt-6 text-sm text-gray-500">
            Showing {{ services.data.length }} Services
        </p>
    </div>

    <JetDialogModal :show="update_modal" @close="update_modal = false" maxWidth="2xl">
        <template #title>Update Service here!</template>
        <template #content>
            <div class="grid grid-cols-12 gap-2">

                <div v-if="post_image.length != 0" class="col-span-12 mx-auto">
                    <template v-for="(image, key) in post_image" :key="key">
                        <div class="flex-shrink-0">
                            <img class="w-64 h-64 rounded-lg " :src="image" :onerror="`this.src='${default_image}'`" />
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
                    <JetInputError :message="form_update.errors.image" class="mt-2" />
                </div>

            </div>
            <div class="grid grid-cols-12 gap-1">
                <div class="col-span-12">
                    <Input type="text" label="Service name" v-model="form_update.name" />
                    <JetInputError :message="form_update.errors.name" class="mt-2" />
                </div>
            </div>
            <div class="col-span-full">
                <Input type="text" label="Service abbrevation" v-model="form_update.abbrevation" />
                <JetInputError :message="form_update.errors.abbrevation" class="mt-2" />
            </div>
            <!-- <div v-if="$page.props.auth.user.user_type != 'director'">
                <select v-model="form_update.office_id"
                    class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full">
                    <option value="" disabled>Select Office</option>
                    <template v-for="(office, key) in props.offices" :key="key">
                        <option :value="office.id">{{ office.name }}</option>
                    </template>
                </select>
            </div> -->
            <div class="grid grid-cols-12 gap-1 border p-1 mt-1 rounded-lg border-gray-300 h-[40vmin] overflow-y-auto">
                <div v-if="new_set_units.length == 0" class="col-span-12">
                    <p class="text-center">
                        There's no units available.
                    </p>
                </div>
                <template v-for="(unit, key) in new_set_units" :key="key">
                    <div class="col-span-4 flex items-center ps-4 border border-gray-200 rounded">
                        <input type="checkbox" :value="unit.id" v-model="form_update.selected_units"
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
            <SecondaryButton @click="update_modal = false" class="mr-2 hover:bg-red-500">
                Cancel
            </SecondaryButton>
            <PrimaryButton :class="{ 'opacity-25': form_update.processing }" :disabled="form_update.processing"
                class="hover:bg-green-300" @click="update_service">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-auto" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>&nbsp;Submit
            </PrimaryButton>
        </template>
    </JetDialogModal>

    <ConfirmDialogModal :show="delete_modal" @close="delete_modal = false" maxWidth="2xl">
        <template #title>
            Are you sure you want to delete this service({{
                form_delete.service.name
            }})?</template>
        <template #content>
            <p class="text-red-500">
                This action can update the system and this is not reversible!
            </p>
        </template>
        <template #footer>
            <SecondaryButton @click="delete_modal = false" class="mr-2">
                nevermind
            </SecondaryButton>
            <PrimaryButton :class="{ 'opacity-25': form_delete.processing }" :disabled="form_delete.processing"
                class="hover:bg-green-400" @click="confirm_delete">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-auto" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>&nbsp;Delete
            </PrimaryButton>
        </template>
    </ConfirmDialogModal>

    <ConfirmDialogModal :show="status_modal" @close="status_modal = false" maxWidth="2xl">
        <template #title>
            Are you sure you want to update status of service({{
                form_status.service.name
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
