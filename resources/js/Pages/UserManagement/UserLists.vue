<script setup>
import Icon from "@/CustomComponents/Icon.vue"
import default_image from "@/CustomComponents/images/sasmes_logo.png"
import AppLayout from '@/Layouts/AppLayout.vue';
import OfficeLists from '@/Pages/Office/OfficeLists.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import JetDialogModal from "@/Components/DialogModal.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Input from "@/CustomComponents/Input.vue";
import JetInputError from "@/Components/InputError.vue";
import ConfirmDialogModal from "@/Components/ConfirmationModal.vue";
import Pagination from "@/CustomComponents/Pagination2.vue";
import { Head, Link, useForm } from '@inertiajs/vue3';
import { onMounted, ref } from "vue";
import moment from 'moment';

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const props = defineProps(["users", "search", "position", "office"])
const date_time = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}
</script>

<template>
    <div v-if="users.data.length == 0">
        <p class="text-center font-bold text-[5vmin] mt-12">
            No Users!
        </p>
    </div>
    <div v-else class="grid grid-cols-12 gap-2">
        <template v-for="(user, key) in users.data" :key="key">
            <div class="col-span-3">
                <div
                    class="w-full h-[43vmin] max-w-sm bg-white border border-gray-200 rounded-lg shadow group relative">
                    <div class="absolute hidden group-hover:block top-0 right-0 text-white p-2 rounded ">
                        <button @click="open_modal_details(user)" class="bg-green-500 rounded-md p-1 mr-1">
                            <Icon icon="docs" />
                        </button>
                        <button @click="open_update_modal(user)" class="bg-orange-500 rounded-md p-1 mr-1">
                            <Icon icon="pencil" />
                        </button>
                        <button @click="open_modal_status(user)" class="rounded-md p-1"
                            :class="user.status == 1 ? 'bg-red-500' : 'bg-green-500'">
                            <Icon v-if="user.status == 1" icon="close_icon" />
                            <Icon v-else icon="check" />
                        </button>

                    </div>
                    <img class="object-obtain p-8 h-[30vmin] w-[30vmin] mx-auto rounded-full -mt-5" :src="user.profile_photo_url"
                        :onerror="`this.src='${default_image}'`" alt="User image" />
                    <div class="px-2 pb-2">
                        <div>
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 text-center -mt-4">{{ user.name }}
                            </h5>
                            <p class="text-center mx-auto text-xs">{{ user.email }}</p>
                            <p class="text-center text-white mx-auto text-xs uppercase bg-green-500 w-[10vmin] rounded-lg mt-2 p-1">{{ user.user_type }}</p>
                            <p class="text-center text-white mx-auto text-xs uppercase bg-orange-500 w-[10vmin] rounded-lg mt-2 p-1 pl-1 pr-1">{{ user.office.abbrevation }}</p>
                            <p class="text-xs p-1 text-center text-white rounded-lg font-bold w-[10vmin] mx-auto mt-2"
                                :class="user.status == 1 ? 'bg-green-500' : 'bg-red-500'">{{ user.status == 1 ?
        'Active' : 'Deactivated' }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
    <div class="flex items-center justify-between bottom-1 fixed">
        <Pagination :links="props.users.links" :search="props.search" :position="props.position" :office="props.office" />
        <p class="mt-6 text-sm text-gray-500">
            Showing {{ users.data.length }} Users
        </p>
    </div>
</template>
