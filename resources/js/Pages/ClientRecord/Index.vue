<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import RecordLists from '@/Pages/ClientRecord/RecordLists.vue';
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

const props = defineProps(["client_record", "offices", "services", "search", "role", "office", "service", "from", "to"])
const search = ref(props.search);
const role = ref(props.role);
const office = ref(props.office);
const service = ref(props.service);
const from = ref(props.from);
const to = ref(props.to);

const search_ = () => {
    router.get(
        route("record.index", { search: search.value, role: role.value, office:office.value, service:service.value, from:from.value, to:to.value })
    );
};

const search_remove = () => {
    search.value = "";
    role.value = "";
    office.value = "";
    service.value = "";
    from.value = "";
    to.value = "";
    router.get(
        route("record.index", { search: search.value, role: role.value, office:office.value, service:service.value, from:from.value, to:to.value })
    );
}
</script>
<template>
    <AppLayout title="Records">
        <template #header>
            <h2 class="font-semibold text-lg text-white leading-tight">
                Records
            </h2>
        </template>

        <div class="py-4">
            <div class="flex justify-between">
                <div class="flex gap-2 ml-8">
                    <div>
                        <select v-model="role" @change="search_"
                            class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-[15vmin] h-10 mt-5 w-full">
                            <option value="" disabled>Select Client Role</option>
                            <option value="">All Roles</option>
                            <option value="student">Student</option>
                            <option value="employee">Employee</option>
                            <option value="alumni">Alumni</option>
                            <option value="guardian">Guardian</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div>
                        <select v-model="office" @change="search_"
                            class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-[15vmin] h-10 mt-5 w-full">
                            <option value="" disabled>Select Office</option>
                            <option value="">All Offices</option>
                            <template v-for="(office, key) in props.offices"  :key="key">
                                <option  :value="office.id">{{ office.abbrevation }}</option>
                            </template>
                        </select>
                    </div>
                    <div>
                        <select v-model="service" @change="search_"
                            class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-[10vmin] h-10 mt-5 w-full">
                            <option value="" disabled>Select Service</option>
                            <option value="">All Services</option>
                            <template v-for="(service, key) in props.services"  :key="key">
                                <option class="break-words ml-1" :value="service.id">{{ service.name }} fsdfsdfsdfsdf</option>
                            </template>
                        </select>
                    </div>
                    <div>
                        <Input v-model="from" class="rounded-lg mb-2 w-[20vmin]" type="date" label="From date" />
                    </div>
                    <div>
                        <Input v-model="to" class="rounded-lg mb-2 w-[20vmin]" type="date" label="To date" @keyup.enter="search_" />
                    </div>
                    <Input v-model="search" class="rounded-lg mb-2 w-[20vmin]" type="text" label="Search Client"
                        @keyup.enter="search_" />
                    <button v-if="search || role || office || service || from || to" class="h-10 my-auto mt-5" @click="search_remove">
                        <Icon icon="close_icon" size="sm" />
                    </button>
                </div>
            </div>

            <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <RecordLists :client_record="props.client_record" :search="props.search" :role="props.role" :office="props.office" :service="props.service" :from="props.from" :to="props.to" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>