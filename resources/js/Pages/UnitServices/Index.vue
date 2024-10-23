<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import ServiceLists from '@/Pages/UnitServices/ServiceLists.vue';
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

const props = defineProps(["unit_services", "unit", "search", "office_id", "office", "services", "unit_id", "service"])
const form = useForm({
    office_id: props.office_id,
    unit_id: props.unit_id,
    selected: []
})

const add_modal = ref(false);
const search = ref(props.search);

const open_modal = () => {
    form.reset()
    add_modal.value = !add_modal.value
}

const add_unit_service = () => {
    form.post(route("unit_service.store"), {
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
            open_modal();
        }
    });
}

const search_ = () => {
    router.get(
        route("unit_service.index", { search: search.value, office_id: props.office.id, unit_id: props.unit_id })
    );
};

const search_remove = () => {
    search.value = "";
    router.get(
        route("unit_service.index", { search: search.value, office_id: props.office.id, unit_id: props.unit_id })
    );
}
</script>
<template>
    <AppLayout title="Units">
        <template #header>
            <h2 class="font-semibold text-lg text-white leading-tight">
                <a class="hover:underline" :href="route('office.index')">Offices</a> > <a class="hover:underline"
                    :href="route('unit.index', { office_id: props.office.id })">{{ props.office.name }} </a> > {{
                    props.unit.name }} > Services
            </h2>
        </template>

        <div class="py-4">
            <div class="flex justify-between">
                <div class="flex gap-2 ml-8">
                    <Input v-model="search" class="rounded-lg mb-2 w-[30vmin]" type="text" label="Search Service"
                        @keyup.enter="search_" />
                    <button v-if="search" class="h-10 my-auto mt-5" @click="search_remove">
                        <Icon icon="close_icon" size="sm" />
                    </button>
                </div>
                <div>
                    <PrimaryButton @click="open_modal()" class=" mb-2 mr-2 h-10 mt-5">
                        Add Service
                    </PrimaryButton>
                    <PrimaryButton @click="open_modal()" class=" mb-2 mr-12 h-10 mt-5">
                        Register Client
                    </PrimaryButton>
                </div>
            </div>

            <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <ServiceLists :unit_services="props.unit_services" :search="props.search"
                        :office_id="props.office_id" :unit_id="props.unit_id" />
                </div>
            </div>
        </div>
    </AppLayout>

    <JetDialogModal :show="add_modal" @close="add_modal = false" maxWidth="2xl">
        <template #title>Add Service here!</template>
        <template #content>
            <!-- <div class="grid grid-cols-12 gap-1 border p-1 mt-1 rounded-lg border-gray-300 h-[20vmin] overflow-y-auto">
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

            <!-- <div class="col-span-full">
                <select class="rounded-lg border-gray-300 w-full">
                    <template v-for="(service, key) in props.services" :key="key">
                        <option class="truncate" :value="service">{{ service.name }}</option>
                    </template>
                </select>
            </div>
            <div class="grid grid-cols-12 gap-1">
                <div class="col-span-12 border p-1 mt-1 rounded-lg border-gray-300">
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
            </div> -->
            <div class="grid grid-cols-12 gap-1 border p-1 mt-1 rounded-lg border-gray-300 h-[20vmin] overflow-y-auto">
                <template v-for="(service, key) in props.services" :key="key">
                    <div class="col-span-4 flex items-center ps-4 border border-gray-200 rounded">
                        <input id="bordered-checkbox-1" type="checkbox" :value="service.id" v-model="form.selected" name="bordered-checkbox"
                            class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500">
                        <label for="bordered-checkbox-1" class="w-full py-1 ms-2 text-sm font-medium text-gray-700">
                            {{ service.name }}
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
                class="hover:bg-green-300" @click="add_unit_service">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-auto" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>&nbsp;Submit
            </PrimaryButton>
        </template>
    </JetDialogModal>
</template>