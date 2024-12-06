<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import ClientDetails from '@/Pages/ClientProfile/ClientDetails.vue';
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

const props = defineProps(["from", "to", "client", "client_id", "unit_services_count", "office_visits", "unit_visits"])
const from = ref(props.from);
const to = ref(props.to);
const search_ = () => {
    router.get(
        route("client.index_details", { from: from.value, to: to.value, client_id: props.client_id })
    );
};

const search_remove = () => {
    from.value = "";
    to.value = "";
    router.get(
        route("client.index_details", { from: from.value, to: to.value, client_id: props.client_id })
    );
}
</script>
<template>
    <AppLayout title="Client Details">
        <template #header>
            <h2 class="font-semibold text-lg text-white leading-tight">
                <a class="hover:underline" :href="route('client.index')">Clients</a> > Client Details
            </h2>
        </template>

        <div class="py-4">
            <div class="flex justify-between">
                <div class="flex gap-2 ml-8">
                    <div>
                        <Input v-model="from" class="rounded-lg mb-2 w-[30vmin]" type="date" label="From date" />
                    </div>
                    <div>
                        <Input v-model="to" class="rounded-lg mb-2 w-[30vmin]" type="date" label="To date"
                            @keyup.enter="search_" />
                    </div>
                    <!-- <button v-if="from || to" class="h-10 my-auto mt-5" @click="search_remove">
                        <Icon icon="close_icon" size="sm" />
                    </button> -->
                    <button v-if="from || to" class="h-10 my-auto mt-5" @click="search_">
                        <small class="bg-green-500 text-white p-2 rounded-lg">Search</small>
                    </button>
                    <button v-if="from || to" class="h-10 my-auto mt-5" @click="search_remove">
                        <small class="bg-red-500 text-white p-2 rounded-lg">remove filter</small>
                    </button>
                </div>
            </div>

            <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <ClientDetails :client="props.client" :from="props.from" :to="props.to" :client_id="props.client_id"
                        :unit_services_count="props.unit_services_count" :office_visits="props.office_visits"
                        :unit_visits="props.unit_visits" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>