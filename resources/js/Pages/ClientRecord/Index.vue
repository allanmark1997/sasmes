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

const props = defineProps(["client_record", "search"])
const search = ref(props.search);

const search_ = () => {
    router.get(
        route("record.index", { search: search.value })
    );
};

const search_remove = () => {
    search.value = "";
    router.get(
        route("record.index", { search: search.value })
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
                    <Input v-model="search" class="rounded-lg mb-2 w-[30vmin]" type="text" label="Search Office"
                        @keyup.enter="search_" />
                    <button v-if="search" class="h-10 my-auto mt-5" @click="search_remove">
                        <Icon icon="close_icon" size="sm" />
                    </button>
                </div>
            </div>

            <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <RecordLists :client_record="props.client_record" :search="props.search" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>