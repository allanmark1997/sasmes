<script setup>
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { onMounted, reactive } from 'vue';
import { ref } from 'vue';

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const props = defineProps(["questions"])

const form = useForm({
    answer: []
})

const iteration = ref(0)
const answer = ref("")
const answer_set = reactive({
    "question": null,
    "question_series": null,
    "answer": null
})

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}

onMounted(() => {
    props.questions.forEach(element => {
        form.answer.push(element)
    });
})

const function_next = () => {
    // answer_set.question = props.questions[iteration.value]
    // answer_set.question_series = "q" + parseInt(iteration.value + 1)
    // answer_set.answer = answer.value

    // form.answer.push(JSON.stringify(answer_set))
    form.answer[iteration.value].answer = answer
    answer.value = ""
    // answer_set.value.question = null
    // answer_set.value.question_series = null
    // answer_set.value.answer = null
    iteration.value++
}

const function_prev = () => {
    if (iteration.value <= 0) {
        toast.error("This is the first question", {
            autoClose: 1000,
            transition: toast.TRANSITIONS.FLIP,
            position: toast.POSITION.TOP_RIGHT,
        });
    }
    else {
        iteration.value--
    }
}
</script>

<template>

    <Head title="Evaluation" />
    <div class="bg-gray-50 text-black/50 mt-[25vmin] mx-auto w-[75vmin] p-3 rounded-lg">
        <p class="text-center font-bold text-5xl">
            {{ props.questions[iteration].title }}
        </p>
        <p class="text-lg font-bold text-center">
            {{ props.questions[iteration].sub_title }}
        </p>
    </div>
    <div class="bg-gray-50 text-black/50 mt-12 mx-auto w-[75vmin] p-3 rounded-lg">
        <div>
            <p class="text-xl font-bold">
                {{ props.questions[iteration].question }}
            </p>
        </div>
        <div v-if="props.questions[iteration].qtype == 'dropdown'">
            <select v-model="answer"
                class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full">
                <option value="" disabled>Select options</option>
                <template v-for="(choice, key) in props.questions[iteration].choices" :key="key">
                    <option :value="choice">{{ choice }}</option>
                </template>
            </select>
        </div>
        <div v-else-if="props.questions[iteration].qtype == 'radio'" class="mt-2">
            <template v-for="(choice, key) in props.questions[iteration].choices" :key="key">
                <div class="flex items-center mb-4">
                    <input v-model="answer" id="default-radio-1" type="radio" value="" name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
                    <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-500">
                        {{ choice }}
                    </label>
                </div>
            </template>
        </div>
        <div v-else-if="props.questions[iteration].qtype == 'button'" class="mt-2">
            <template v-for="(choice, key) in props.questions[iteration].choices" :key="key">
                <div class="flex items-center mb-4">
                    <input v-model="answer" id="default-radio-1" type="radio" value="" name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
                    <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-500">
                        {{ choice }}
                    </label>
                </div>
            </template>
        </div>
        <div v-else-if="props.questions[iteration].qtype == 'open_ended'" class="mt-4">
            <textarea v-model="answer" id="message" rows="4"
                class="block p-2.5 w-full text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your thoughts here..."></textarea>
        </div>
    </div>
    <div class="bg-white text-black/50 mt-12 mx-auto w-[75vmin] p-3 flex">
        <div class="flex gap-4 ml-[30%]">
            <div class="">
                <SecondaryButton class="hover:bg-red-400" @click="function_prev">
                    << Previous</SecondaryButton>
            </div>
            <div class=" ">
                <PrimaryButton class="hover:bg-green-400" @click="function_next">Next >></PrimaryButton>
            </div>
        </div>
    </div>
</template>
