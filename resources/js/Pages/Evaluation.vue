<script setup>
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import Input from '@/CustomComponents/Input.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { onMounted, reactive } from 'vue';
import { ref } from 'vue';

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const props = defineProps(["questions", "evaluation"])

const form = useForm({
    answer: []
})

const form_answers = useForm({
    age: null,
    client_type: props.evaluation?.client_record?.type ?? null,
    client_role: props.evaluation?.client_record?.role ?? null,
    client_unit: props.evaluation?.client_record?.unit_service?.unit?.name ?? null,
    client_service: props.evaluation?.client_record?.unit_service?.unit_service?.name ?? null,
    client_sex: props.evaluation?.client_record?.client?.sex ?? null,
    client_region: null,
    cc_1: {
        c1: 0,
        c2: 0,
        c3: 0,
        c4: 0,
    },
    cc_2: {
        c1: 0,
        c2: 0,
        c3: 0,
        c4: 0,
        c5: 0,
    },
    cc_3: {
        c1: 0,
        c2: 0,
        c3: 0,
        c4: 0,
    },
    e_1: {
        c1: 0,
        c2: 0,
        c3: 0,
        c4: 0,
        c5: 0,
        c6: 0,
    },
    e_2: {
        c1: 0,
        c2: 0,
        c3: 0,
        c4: 0,
        c5: 0,
        c6: 0,

    },
    e_3: {
        c1: 0,
        c2: 0,
        c3: 0,
        c4: 0,
        c5: 0,
        c6: 0,

    },
    e_4: {
        c1: 0,
        c2: 0,
        c3: 0,
        c4: 0,
        c5: 0,
        c6: 0,

    },
    e_5: {
        c1: 0,
        c2: 0,
        c3: 0,
        c4: 0,
        c5: 0,
        c6: 0,

    },
    e_6: {
        c1: 0,
        c2: 0,
        c3: 0,
        c4: 0,
        c5: 0,
        c6: 0,

    },
    e_7: {
        c1: 0,
        c2: 0,
        c3: 0,
        c4: 0,
        c5: 0,
        c6: 0,

    },
    e_8: {
        c1: 0,
        c2: 0,
        c3: 0,
        c4: 0,
        c5: 0,
        c6: 0,

    },
    suggestions: null,
})

const iteration = ref(0)
const question_set = ref((props.evaluation == null) ? 5 : ((props.evaluation.status == "complete") ? 4 : 0))
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

// const function_next = () => {
//     // answer_set.question = props.questions[iteration.value]
//     // answer_set.question_series = "q" + parseInt(iteration.value + 1)
//     // answer_set.answer = answer.value

//     // form.answer.push(JSON.stringify(answer_set))
//     form.answer[iteration.value].answer = answer
//     answer.value = ""
//     // answer_set.value.question = null
//     // answer_set.value.question_series = null
//     // answer_set.value.answer = null
//     iteration.value++
// }

const update_answer = () => {
    form_answers.put(route("evaluation.update", { evaluation: props.evaluation }), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
            toast.success("Evaluation has been done!", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
            form_answers.reset()
        }
    });
}

const function_next = () => {
    if (question_set.value >= 3) {
        update_answer()
    }
    if (question_set.value == 0) {
        // if (form_answers.age == null || form_answers.age == "") {
        //     toast.error("Age is required to be answered", {
        //         autoClose: 1000,
        //         transition: toast.TRANSITIONS.FLIP,
        //         position: toast.POSITION.TOP_RIGHT,
        //     });
        // }
        // else if (form_answers.client_region == null) {
        //     toast.error("You must select Region", {
        //         autoClose: 1000,
        //         transition: toast.TRANSITIONS.FLIP,
        //         position: toast.POSITION.TOP_RIGHT,
        //     });
        // }
        // else {
        question_set.value++
        // }
    }
    else if (question_set.value == 1) {
        // if (form_answers.cc_1.c1 == 0 && form_answers.cc_1.c2 == 0 && form_answers.cc_1.c3 == 0 && form_answers.cc_1.c4 == 0) {
        //     toast.error("Citizens Charter Question 1 is required to be answered", {
        //         autoClose: 1000,
        //         transition: toast.TRANSITIONS.FLIP,
        //         position: toast.POSITION.TOP_RIGHT,
        //     });
        // }
        // else if (form_answers.cc_2.c1 == 0 && form_answers.cc_2.c2 == 0 && form_answers.cc_2.c3 == 0 && form_answers.cc_2.c4 == 0) {
        //     toast.error("Citizens Charter Question 2 is required to be answered", {
        //         autoClose: 1000,
        //         transition: toast.TRANSITIONS.FLIP,
        //         position: toast.POSITION.TOP_RIGHT,
        //     });
        // }
        // else if (form_answers.cc_3.c1 == 0 && form_answers.cc_3.c2 == 0 && form_answers.cc_3.c3 == 0 && form_answers.cc_3.c4 == 0) {
        //     toast.error("Citizens Charter Question 3 is required to be answered", {
        //         autoClose: 1000,
        //         transition: toast.TRANSITIONS.FLIP,
        //         position: toast.POSITION.TOP_RIGHT,
        //     });
        // }
        // else {
        question_set.value++
        // }
    }
    else if (question_set.value == 2) {
        if (form_answers.e_1.c1 == null && form_answers.e_1.c2 == null && form_answers.e_1.c3 == null && form_answers.e_1.c4 == null && form_answers.e_1.c5 == null && form_answers.e_1.c6 == null) {
            toast.error("Evaluation Question 1 is required to be answered", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
        }
        else if (form_answers.e_2.c1 == null && form_answers.e_2.c2 == null && form_answers.e_2.c3 == null && form_answers.e_2.c4 == null && form_answers.e_2.c5 == null && form_answers.e_2.c6 == null) {
            toast.error("Evaluation Question 2 is required to be answered", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
        }
        else if (form_answers.e_3.c1 == null && form_answers.e_3.c2 == null && form_answers.e_3.c3 == null && form_answers.e_3.c4 == null && form_answers.e_3.c5 == null && form_answers.e_3.c6 == null) {
            toast.error("Evaluation Question 3 is required to be answered", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
        }
        else if (form_answers.e_4.c1 == null && form_answers.e_4.c2 == null && form_answers.e_4.c3 == null && form_answers.e_4.c4 == null && form_answers.e_4.c5 == null && form_answers.e_4.c6 == null) {
            toast.error("Evaluation Question 4 is required to be answered", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
        }
        else if (form_answers.e_5.c1 == null && form_answers.e_5.c2 == null && form_answers.e_5.c3 == null && form_answers.e_5.c4 == null && form_answers.e_5.c5 == null && form_answers.e_5.c6 == null) {
            toast.error("Evaluation Question 5 is required to be answered", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
        }
        else if (form_answers.e_6.c1 == null && form_answers.e_6.c2 == null && form_answers.e_6.c3 == null && form_answers.e_6.c4 == null && form_answers.e_6.c5 == null && form_answers.e_6.c6 == null) {
            toast.error("Evaluation Question 6 is required to be answered", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
        }
        else if (form_answers.e_7.c1 == null && form_answers.e_7.c2 == null && form_answers.e_7.c3 == null && form_answers.e_7.c4 == null && form_answers.e_7.c5 == null && form_answers.e_7.c6 == null) {
            toast.error("Evaluation Question 7 is required to be answered", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
        }
        else if (form_answers.e_8.c1 == null && form_answers.e_8.c2 == null && form_answers.e_8.c3 == null && form_answers.e_8.c4 == null && form_answers.e_8.c5 == null && form_answers.e_8.c6 == null) {
            toast.error("Evaluation Question 8 is required to be answered", {
                autoClose: 1000,
                transition: toast.TRANSITIONS.FLIP,
                position: toast.POSITION.TOP_RIGHT,
            });
        }
        else {
            if (form_answers.e_1.c6 == '' && form_answers.e_2.c6 == '' && form_answers.e_3.c6 == '' && form_answers.e_4.c6 == '' && form_answers.e_5.c6 == '' && form_answers.e_6.c6 == '' && form_answers.e_7.c6 == '' && form_answers.e_8.c6 == '') {
                toast.error("Answering all questions with N/A or empty is invalid, please answer it properly", {
                    autoClose: 1000,
                    transition: toast.TRANSITIONS.FLIP,
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
            else {
                question_set.value++
            }
        }
    }
    else if (question_set.value == 3) {
        question_set.value++
    }
}
const function_prev = () => {
    if (question_set.value <= 0) {
        toast.error("This is the first set of questions", {
            autoClose: 1000,
            transition: toast.TRANSITIONS.FLIP,
            position: toast.POSITION.TOP_RIGHT,
        });
    }
    else {
        question_set.value--
    }
}

// const function_prev = () => {
//     if (iteration.value <= 0) {
//         toast.error("This is the first question", {
//             autoClose: 1000,
//             transition: toast.TRANSITIONS.FLIP,
//             position: toast.POSITION.TOP_RIGHT,
//         });
//     }
//     else {
//         iteration.value--
//     }
// }
</script>

<template>

    <Head title="Evaluation" />
    <!-- <div class="bg-gray-50 text-black/50 mt-[25vmin] mx-auto w-[75vmin] p-3 rounded-lg">
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
</div> -->

    <div v-if="question_set == 0">
        <div class="bg-gray-50 text-black/50 mt-[10vmin] mx-auto w-[75vmin] p-3 rounded-lg">
            <p class="text-center font-bold text-5xl">
                {{ props.evaluation?.client_record?.unit_service?.unit?.office?.name }}
            </p>
            <!-- <p class="text-lg font-bold text-center">
            {{ props.questions[iteration].sub_title }}
        </p> -->
        </div>
        <div class="bg-gray-50 text-black/50 mt-12 mx-auto w-[75vmin] p-3 rounded-lg">
            <div class="grid grid-cols-12 gap-2">
                <div class="col-span-6">
                    <select
                        class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-auto h-10 mt-5 w-full cursor-not-allowed"
                        v-model="form_answers.client_type" disabled>
                        <option value="null" disabled>Select Client Type</option>
                        <option value="citizen">Citizen</option>
                        <option value="business">Business</option>
                        <option value="government">Government</option>
                    </select>
                    <JetInputError :message="form_answers.errors.client_type" class="mt-2" />
                </div>
                <div class="col-span-6">
                    <select v-model="form_answers.client_role"
                        class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-[15vmin] h-10 mt-5 w-full cursor-not-allowed"
                        disabled>
                        <option value="null" disabled>Select Client Role</option>
                        <option value="student">Student</option>
                        <option value="employee">Employee</option>
                        <option value="alumni">Alumni</option>
                        <option value="guardian">Guardian</option>
                        <option value="others">Others</option>
                    </select>
                    <JetInputError :message="form_answers.errors.client_role" class="mt-2" />
                </div>
                <div class="col-span-6">
                    <select v-model="form_answers.client_unit"
                        class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-[15vmin] h-10 mt-5 w-full cursor-not-allowed"
                        disabled>
                        <option :value="form_answers.client_unit">{{ form_answers.client_unit }}</option>
                    </select>
                </div>
                <div class="col-span-6">
                    <select v-model="form_answers.client_service"
                        class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-[15vmin] h-10 mt-5 w-full cursor-not-allowed"
                        disabled>
                        <option :value="form_answers.client_service">{{ form_answers.client_service }}</option>
                    </select>
                </div>
                <div class="col-span-12">
                    <select v-model="form_answers.client_sex"
                        class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-[15vmin] h-10 mt-5 w-full uppercase cursor-not-allowed"
                        disabled>
                        <option :value="form_answers.client_sex">{{ form_answers.client_sex }}</option>
                    </select>
                </div>
                <div class="col-span-6">
                    <Input type="number" v-model="form_answers.age" label="Enter your age" class="w-full" />
                </div>
                <div class="col-span-6">
                    <select v-model="form_answers.client_region"
                        class="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-[15vmin] h-10 mt-5 w-full">
                        <option value="null" disabled>Select Region</option>
                        <option value="Bangsamoro Autonomous Region in Muslim Mindanao">Bangsamoro Autonomous Region in
                            Muslim
                            Mindanao</option>
                        <option value="Bicol Region">Bicol Region</option>
                        <option value="Cagayan Valley">Cagayan Valley</option>
                        <option value="CALABARZON">CALABARZON</option>
                        <option value="Caraga Region">Caraga Region</option>
                        <option value="Central Luzon">Central Luzon</option>
                        <option value="Central Visayas">Central Visayas</option>
                        <option value="ordillera Administrative Region">Cordillera Administrative Region</option>
                        <option value="Davao Region">Davao Region</option>
                        <option value="Ilocos Region">Ilocos Region</option>
                        <option value="MIMAROPA">MIMAROPA</option>
                        <option value="National Capital Region">National Capital Region</option>
                        <option value="Northern Mindanao">Northern Mindanao</option>
                        <option value="SOCCSKSARGEN">SOCCSKSARGEN</option>
                        <option value="Western Visayas">Western Visayas</option>
                        <option value="Zamboanga Peninsula">Zamboanga Peninsula</option>
                    </select>
                    <JetInputError :message="form_answers.errors.client_region" class="mt-2" />
                </div>
            </div>
        </div>
    </div>
    <div v-if="question_set == 1">
        <div class="bg-gray-50 text-black/50 mt-[10vmin] mx-auto w-[75vmin] p-3 rounded-lg">
            <p class="text-center font-bold text-5xl">
                {{ props.evaluation.client_record.unit_service.unit.office.name }}
            </p>
            <p class="text-lg font-bold text-center">
                Citizens Charter Questions(CC)
            </p>
        </div>
        <div class="bg-gray-50 text-black/50 mt-12 mx-auto w-[75vmin] p-3 rounded-lg">
            <div class="grid grid-cols-12 gap-2">
                <div class="col-span-12">
                    <label class="text-base font-medium text-gray-900">Which of the following best describes your
                        awareness
                        of a CC?</label>
                    <fieldset class="mt-2">
                        <div class="flex">
                            <div></div>
                            <input v-model="form_answers.cc_1.c1"
                                @change="form_answers.cc_1.c2 = 0, form_answers.cc_1.c3 = 0, form_answers.cc_1.c4 = 0"
                                name="notification-method" value="I know what a CC is and I saw this office's CC."
                                type="radio" class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                I know what a CC is and I saw this office's CC.
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.cc_1.c2"
                                @change="form_answers.cc_1.c1 = 0, form_answers.cc_1.c3 = 0, form_answers.cc_1.c4 = 0"
                                name="notification-method"
                                value="I know what a CC is but I did NOT see this office's CC." type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                I know what a CC is but I did NOT see this office's CC.
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.cc_1.c3"
                                @change="form_answers.cc_1.c2 = 0, form_answers.cc_1.c1 = 0, form_answers.cc_1.c4 = 0"
                                name="notification-method"
                                value="I learned of the CC is and I did not see one of this office." type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                I learned of the CC is and I did not see one of this office.
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.cc_1.c4"
                                @change="form_answers.cc_1.c2 = 0, form_answers.cc_1.c3 = 0, form_answers.cc_1.c1 = 0"
                                name="notification-method" value="N/A" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                N/A
                            </label>
                        </div>
                    </fieldset>
                </div>
                <div class="col-span-12">
                    <label class="text-base font-medium text-gray-900">If aware of CC (answered 1-3 in CC1). Would you
                        say
                        that the CC of this office was?</label>
                    <fieldset class="mt-2">
                        <div class="flex">
                            <input v-model="form_answers.cc_2.c1"
                                @change="form_answers.cc_2.c2 = 0, form_answers.cc_2.c3 = 0, form_answers.cc_2.c4 = 0, form_answers.cc_2.c5 = 0"
                                name="notification-method2" value="Easy to see" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Easy to see
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.cc_2.c2"
                                @change="form_answers.cc_2.c1 = 0, form_answers.cc_2.c3 = 0, form_answers.cc_2.c4 = 0, form_answers.cc_2.c5 = 0"
                                name="notification-method2" value="Somewhat easy to see" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Somewhat easy to see
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.cc_2.c3"
                                @change="form_answers.cc_2.c2 = 0, form_answers.cc_2.c1 = 0, form_answers.cc_2.c4 = 0, form_answers.cc_2.c5 = 0"
                                name="notification-method2" value="Difficult to see" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Difficult to see
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.cc_2.c4"
                                @change="form_answers.cc_2.c2 = 0, form_answers.cc_2.c3 = 0, form_answers.cc_2.c1 = 0, form_answers.cc_2.c5 = 0"
                                name="notification-method2" value="Not visible at all" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Not visible at all
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.cc_2.c5"
                                @change="form_answers.cc_2.c2 = 0, form_answers.cc_2.c3 = 0, form_answers.cc_2.c4 = 0, form_answers.cc_2.c1 = 0"
                                name="notification-method2" value="N/A" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                N/A
                            </label>
                        </div>
                    </fieldset>
                </div>
                <div class="col-span-12">
                    <label class="text-base font-medium text-gray-900">If aware of CC (answered 1-3 in CC1). How much
                        did
                        the CC help you in your transaction?
                        of a CC?</label>
                    <fieldset class="mt-2">
                        <div class="flex">
                            <input v-model="form_answers.cc_3.c1"
                                @change="form_answers.cc_3.c2 = 0, form_answers.cc_3.c3 = 0, form_answers.cc_3.c4 = 0"
                                name="notification-method3" value="Helped very much" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Helped very much
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.cc_3.c2"
                                @change="form_answers.cc_3.c1 = 0, form_answers.cc_3.c3 = 0, form_answers.cc_3.c4 = 0"
                                name="notification-method3" value="Somewhat helped" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Somewhat helped
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.cc_3.c3"
                                @change="form_answers.cc_3.c2 = 0, form_answers.cc_3.c1 = 0, form_answers.cc_3.c4 = 0"
                                name="notification-method3" value="Did not help" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Did not help
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.cc_3.c4"
                                @change="form_answers.cc_3.c2 = 0, form_answers.cc_3.c3 = 0, form_answers.cc_3.c1 = 0"
                                name="notification-method3" value="N/A" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                N/A
                            </label>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
    <div v-if="question_set == 2">
        <div class="bg-gray-50 text-black/50 mt-[10vmin] mx-auto w-[75vmin] p-3 rounded-lg">
            <p class="text-center font-bold text-5xl">
                {{ props.evaluation.client_record.unit_service.unit.office.name }}
            </p>
            <p class="text-lg font-bold text-center">
                Evaluation Questions
            </p>
        </div>
        <div class="bg-gray-50 text-black/50 mt-12 mx-auto w-[75vmin] p-3 rounded-lg">
            <div class="grid grid-cols-12 gap-2">
                <div class="col-span-12">
                    <label class="text-base font-medium text-gray-900">The office has the willingness to help, assist,
                        and
                        provide prompt service to the client.</label>
                    <fieldset class="mt-2">
                        <div class="flex">
                            <input v-model="form_answers.e_1.c1"
                                @change="form_answers.e_1.c2 = 0, form_answers.e_1.c3 = 0, form_answers.e_1.c4 = 0, form_answers.e_1.c5 = 0, form_answers.e_1.c6 = null"
                                name="notification-method4" value="5" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Strongly Agree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_1.c2"
                                @change="form_answers.e_1.c1 = 0, form_answers.e_1.c3 = 0, form_answers.e_1.c4 = 0, form_answers.e_1.c5 = 0, form_answers.e_1.c6 = null"
                                name="notification-method4" value="4" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Agree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_1.c3"
                                @change="form_answers.e_1.c2 = 0, form_answers.e_1.c1 = 0, form_answers.e_1.c4 = 0, form_answers.e_1.c5 = 0, form_answers.e_1.c6 = null"
                                name="notification-method4" value="3" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Neither Agree or Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_1.c4"
                                @change="form_answers.e_1.c2 = 0, form_answers.e_1.c3 = 0, form_answers.e_1.c1 = 0, form_answers.e_1.c5 = 0, form_answers.e_1.c6 = null"
                                name="notification-method4" value="2" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_1.c5"
                                @change="form_answers.e_1.c2 = 0, form_answers.e_1.c3 = 0, form_answers.e_1.c4 = 0, form_answers.e_1.c1 = 0, form_answers.e_1.c6 = null"
                                name="notification-method4" value="1" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Strongly Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_1.c6"
                                @change="form_answers.e_1.c2 = 0, form_answers.e_1.c3 = 0, form_answers.e_1.c4 = 0, form_answers.e_1.c5 = 0, form_answers.e_1.c1 = 0"
                                name="notification-method4" value='' type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                N/A
                            </label>
                        </div>
                    </fieldset>
                </div>

                <div class="col-span-12">
                    <label class="text-base font-medium text-gray-900">The office provides effective service that you
                        need.</label>
                    <fieldset class="mt-2">
                        <div class="flex">
                            <input v-model="form_answers.e_2.c1"
                                @change="form_answers.e_2.c2 = 0, form_answers.e_2.c3 = 0, form_answers.e_2.c4 = 0, form_answers.e_2.c5 = 0, form_answers.e_2.c6 = null"
                                name="notification-method5" value="5" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Strongly Agree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_2.c2"
                                @change="form_answers.e_2.c1 = 0, form_answers.e_2.c3 = 0, form_answers.e_2.c4 = 0, form_answers.e_2.c5 = 0, form_answers.e_2.c6 = null"
                                name="notification-method5" value="4" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Agree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_2.c3"
                                @change="form_answers.e_2.c2 = 0, form_answers.e_2.c1 = 0, form_answers.e_2.c4 = 0, form_answers.e_2.c5 = 0, form_answers.e_2.c6 = null"
                                name="notification-method5" value="3" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Neither Agree or Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_2.c4"
                                @change="form_answers.e_2.c2 = 0, form_answers.e_2.c3 = 0, form_answers.e_2.c1 = 0, form_answers.e_2.c5 = 0, form_answers.e_2.c6 = null"
                                name="notification-method5" value="2" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_2.c5" name="notification-method5" value="1" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Strongly Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_2.c6"
                                @change="form_answers.e_2.c2 = 0, form_answers.e_2.c3 = 0, form_answers.e_2.c4 = 0, form_answers.e_2.c5 = 0, form_answers.e_2.c1 = 0"
                                name="notification-method5" value='' type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                N/A
                            </label>
                        </div>
                    </fieldset>
                </div>

                <div class="col-span-12">
                    <label class="text-base font-medium text-gray-900">The office provides the convenience of location
                        or
                        accesibility of the service you require.</label>
                    <fieldset class="mt-2">
                        <div class="flex">
                            <input v-model="form_answers.e_3.c1"
                                @change="form_answers.e_3.c2 = 0, form_answers.e_3.c3 = 0, form_answers.e_3.c4 = 0, form_answers.e_3.c5 = 0, form_answers.e_3.c6 = null"
                                name="notification-method6" value="5" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Strongly Agree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_3.c2"
                                @change="form_answers.e_3.c1 = 0, form_answers.e_3.c3 = 0, form_answers.e_3.c4 = 0, form_answers.e_3.c5 = 0, form_answers.e_3.c6 = null"
                                name="notification-method6" value="4" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Agree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_3.c3"
                                @change="form_answers.e_3.c2 = 0, form_answers.e_3.c1 = 0, form_answers.e_3.c4 = 0, form_answers.e_3.c5 = 0, form_answers.e_3.c6 = null"
                                name="notification-method6" value="3" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Neither Agree or Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_3.c4"
                                @change="form_answers.e_3.c2 = 0, form_answers.e_3.c3 = 0, form_answers.e_3.c1 = 0, form_answers.e_3.c5 = 0, form_answers.e_3.c6 = null"
                                name="notification-method6" value="2" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_3.c5"
                                @change="form_answers.e_3.c2 = 0, form_answers.e_3.c3 = 0, form_answers.e_3.c4 = 0, form_answers.e_3.c1 = 0, form_answers.e_3.c6 = null"
                                name="notification-method6" value="1" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Strongly Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_3.c6"
                                @change="form_answers.e_3.c2 = 0, form_answers.e_3.c3 = 0, form_answers.e_3.c4 = 0, form_answers.e_3.c5 = 0, form_answers.e_3.c1 = 0"
                                name="notification-method6" value='' type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                N/A
                            </label>
                        </div>
                    </fieldset>
                </div>

                <div class="col-span-12">
                    <label class="text-base font-medium text-gray-900">The office gives effective ways of providing
                        information.</label>
                    <fieldset class="mt-2">
                        <div class="flex">
                            <input v-model="form_answers.e_4.c1"
                                @change="form_answers.e_4.c2 = 0, form_answers.e_4.c3 = 0, form_answers.e_4.c4 = 0, form_answers.e_4.c5 = 0, form_answers.e_4.c6 = null"
                                name="notification-method7" value="5" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Strongly Agree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_4.c2"
                                @change="form_answers.e_4.c1 = 0, form_answers.e_4.c3 = 0, form_answers.e_4.c4 = 0, form_answers.e_4.c5 = 0, form_answers.e_4.c6 = null"
                                name="notification-method7" value="4" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Agree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_4.c3"
                                @change="form_answers.e_4.c2 = 0, form_answers.e_4.c1 = 0, form_answers.e_4.c4 = 0, form_answers.e_4.c5 = 0, form_answers.e_4.c6 = null"
                                name="notification-method7" value="3" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Neither Agree or Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_4.c4"
                                @change="form_answers.e_4.c2 = 0, form_answers.e_4.c3 = 0, form_answers.e_4.c1 = 0, form_answers.e_4.c5 = 0, form_answers.e_4.c6 = null"
                                name="notification-method7" value="2" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_4.c5"
                                @change="form_answers.e_4.c2 = 0, form_answers.e_4.c3 = 0, form_answers.e_4.c4 = 0, form_answers.e_4.c1 = 0, form_answers.e_4.c6 = null"
                                name="notification-method7" value="1" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Strongly Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_4.c6"
                                @change="form_answers.e_4.c2 = 0, form_answers.e_4.c3 = 0, form_answers.e_4.c4 = 0, form_answers.e_4.c5 = 0, form_answers.e_4.c1 = 0"
                                name="notification-method7" value='' type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                N/A
                            </label>
                        </div>
                    </fieldset>
                </div>

                <div class="col-span-12">
                    <label class="text-base font-medium text-gray-900">The office provides modest/affordable/justifiable
                        cost, if any, of the service that you require.</label>
                    <fieldset class="mt-2">
                        <div class="flex">
                            <input v-model="form_answers.e_5.c1"
                                @change="form_answers.e_5.c2 = 0, form_answers.e_5.c3 = 0, form_answers.e_5.c4 = 0, form_answers.e_5.c5 = 0, form_answers.e_5.c6 = null"
                                name="notification-method8" value="5" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Strongly Agree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_5.c2"
                                @change="form_answers.e_5.c1 = 0, form_answers.e_5.c3 = 0, form_answers.e_5.c4 = 0, form_answers.e_5.c5 = 0, form_answers.e_5.c6 = null"
                                name="notification-method8" value="4" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Agree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_5.c3"
                                @change="form_answers.e_5.c2 = 0, form_answers.e_5.c1 = 0, form_answers.e_5.c4 = 0, form_answers.e_5.c5 = 0, form_answers.e_5.c6 = null"
                                name="notification-method8" value="3" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Neither Agree or Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_5.c4"
                                @change="form_answers.e_5.c2 = 0, form_answers.e_5.c3 = 0, form_answers.e_5.c1 = 0, form_answers.e_5.c5 = 0, form_answers.e_5.c6 = null"
                                name="notification-method8" value="2" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_5.c5"
                                @change="form_answers.e_5.c2 = 0, form_answers.e_5.c3 = 0, form_answers.e_5.c4 = 0, form_answers.e_5.c1 = 0, form_answers.e_5.c6 = null"
                                name="notification-method8" value="1" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Strongly Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_5.c6"
                                @change="form_answers.e_5.c2 = 0, form_answers.e_5.c3 = 0, form_answers.e_5.c4 = 0, form_answers.e_5.c5 = 0, form_answers.e_5.c1 = 0"
                                name="notification-method8" value='' type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                N/A
                            </label>
                        </div>
                    </fieldset>
                </div>

                <div class="col-span-12">
                    <label class="text-base font-medium text-gray-900">The office was able to deliver the service/s with
                        integrety, honesty, and fairness.</label>
                    <fieldset class="mt-2">
                        <div class="flex">
                            <input v-model="form_answers.e_6.c1"
                                @change="form_answers.e_6.c2 = 0, form_answers.e_6.c3 = 0, form_answers.e_6.c4 = 0, form_answers.e_6.c5 = 0, form_answers.e_6.c6 = null"
                                name="notification-method9" value="5" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Strongly Agree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_6.c2"
                                @change="form_answers.e_6.c1 = 0, form_answers.e_6.c3 = 0, form_answers.e_6.c4 = 0, form_answers.e_6.c5 = 0, form_answers.e_6.c6 = null"
                                name="notification-method9" value="4" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Agree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_6.c3"
                                @change="form_answers.e_6.c2 = 0, form_answers.e_6.c1 = 0, form_answers.e_6.c4 = 0, form_answers.e_6.c5 = 0, form_answers.e_6.c6 = null"
                                name="notification-method9" value="3" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Neither Agree or Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_6.c4"
                                @change="form_answers.e_6.c2 = 0, form_answers.e_6.c3 = 0, form_answers.e_6.c1 = 0, form_answers.e_6.c5 = 0, form_answers.e_6.c6 = null"
                                name="notification-method9" value="2" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_6.c5"
                                @change="form_answers.e_6.c2 = 0, form_answers.e_6.c3 = 0, form_answers.e_6.c4 = 0, form_answers.e_6.c1 = 0, form_answers.e_6.c6 = null"
                                name="notification-method9" value="1" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Strongly Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_6.c6"
                                @change="form_answers.e_6.c2 = 0, form_answers.e_6.c3 = 0, form_answers.e_6.c4 = 0, form_answers.e_6.c5 = 0, form_answers.e_6.c1 = 0"
                                name="notification-method9" value='' type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                N/A
                            </label>
                        </div>
                    </fieldset>
                </div>

                <div class="col-span-12">
                    <label class="text-base font-medium text-gray-900">The office provides a level of competence and
                        capability with satisfying service/s</label>
                    <fieldset class="mt-2">
                        <div class="flex">
                            <input v-model="form_answers.e_7.c1"
                                @change="form_answers.e_7.c2 = 0, form_answers.e_7.c3 = 0, form_answers.e_7.c4 = 0, form_answers.e_7.c5 = 0, form_answers.e_7.c6 = null"
                                name="notification-method10" value="5" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Strongly Agree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_7.c2"
                                @change="form_answers.e_7.c1 = 0, form_answers.e_7.c3 = 0, form_answers.e_7.c4 = 0, form_answers.e_7.c5 = 0, form_answers.e_7.c6 = null"
                                name="notification-method10" value="4" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Agree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_7.c3"
                                @change="form_answers.e_7.c2 = 0, form_answers.e_7.c1 = 0, form_answers.e_7.c4 = 0, form_answers.e_7.c5 = 0, form_answers.e_7.c6 = null"
                                name="notification-method10" value="3" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Neither Agree or Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_7.c4"
                                @change="form_answers.e_7.c2 = 0, form_answers.e_7.c3 = 0, form_answers.e_7.c1 = 0, form_answers.e_7.c5 = 0, form_answers.e_7.c6 = null"
                                name="notification-method10" value="2" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_7.c5"
                                @change="form_answers.e_7.c2 = 0, form_answers.e_7.c3 = 0, form_answers.e_7.c4 = 0, form_answers.e_7.c1 = 0, form_answers.e_7.c6 = null"
                                name="notification-method10" value="1" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Strongly Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_7.c6"
                                @change="form_answers.e_7.c2 = 0, form_answers.e_7.c3 = 0, form_answers.e_7.c4 = 0, form_answers.e_7.c5 = 0, form_answers.e_7.c1 = 0"
                                name="notification-method10" value='' type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                N/A
                            </label>
                        </div>
                    </fieldset>
                </div>

                <div class="col-span-12">
                    <label class="text-base font-medium text-gray-900">The office has provided the service/s that you
                        need.</label>
                    <fieldset class="mt-2">
                        <div class="flex">
                            <input v-model="form_answers.e_8.c1"
                                @change="form_answers.e_8.c2 = 0, form_answers.e_8.c3 = 0, form_answers.e_8.c4 = 0, form_answers.e_8.c5 = 0, form_answers.e_8.c6 = null"
                                name="notification-method11" value="5" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Strongly Agree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_8.c2"
                                @change="form_answers.e_8.c1 = 0, form_answers.e_8.c3 = 0, form_answers.e_8.c4 = 0, form_answers.e_8.c5 = 0, form_answers.e_8.c6 = null"
                                name="notification-method11" value="4" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Agree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_8.c3"
                                @change="form_answers.e_8.c2 = 0, form_answers.e_8.c1 = 0, form_answers.e_8.c4 = 0, form_answers.e_8.c5 = 0, form_answers.e_8.c6 = null"
                                name="notification-method11" value="3" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Neither Agree or Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_8.c4"
                                @change="form_answers.e_8.c2 = 0, form_answers.e_8.c3 = 0, form_answers.e_8.c1 = 0, form_answers.e_8.c5 = 0, form_answers.e_8.c6 = null"
                                name="notification-method11" value="2" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_8.c5"
                                @change="form_answers.e_8.c2 = 0, form_answers.e_8.c3 = 0, form_answers.e_8.c4 = 0, form_answers.e_8.c1 = 0, form_answers.e_8.c6 = null"
                                name="notification-method11" value="1" type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                Strongly Disagree
                            </label>
                        </div>
                        <div class="flex">
                            <input v-model="form_answers.e_8.c6"
                                @change="form_answers.e_8.c2 = 0, form_answers.e_8.c3 = 0, form_answers.e_8.c4 = 0, form_answers.e_8.c5 = 0, form_answers.e_8.c1 = 0"
                                name="notification-method11" value='' type="radio"
                                class="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300" />
                            <label class="ml-3 block text-sm font-medium text-gray-700">
                                N/A
                            </label>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>

    <div v-if="question_set == 3">
        <div class="bg-gray-50 text-black/50 mt-[10vmin] mx-auto w-[75vmin] p-3 rounded-lg">
            <p class="text-center font-bold text-5xl">
                {{ props.evaluation.client_record.unit_service.unit.office.name }}
            </p>
        </div>
        <div class="bg-gray-50 text-black/50 mt-12 mx-auto w-[75vmin] p-3 rounded-lg">
            <div class="grid grid-cols-12 gap-2">
                <div class="col-span-12">
                    <label class="text-base font-medium text-gray-900">Do you have any other information/ comments/
                        suggestions/ recommendations? Type none if there aren'nt any.</label>
                    <fieldset class="mt-2">
                        <textarea v-model="form_answers.suggestions" class="rounded-lg focus:ring-yellow-500 w-full"
                            rows="10"></textarea>
                    </fieldset>
                </div>

            </div>
        </div>
    </div>
    <div v-if="question_set == 4">
        <div class="bg-gray-50 text-black/50 mt-[10vmin] mx-auto w-[75vmin] p-3 rounded-lg">
            <p class="text-center font-bold text-5xl">
                This survey is done!
            </p>
            <p class="text-lg font-bold text-center">
                Please close it now.
            </p>
        </div>
    </div>
    <div v-if="question_set == 5">
        <div class="bg-gray-50 text-black/50 mt-[10vmin] mx-auto w-[75vmin] p-3 rounded-lg">
            <p class="text-center font-bold text-5xl">
                You're trying to access survey with wrong credentials!
            </p>
            <p class="text-lg font-bold text-center">
                Please close it now.
            </p>
        </div>
    </div>

    <div v-if="question_set != 4 && question_set != 5" class="bg-white text-black/50 mt-12 mx-auto w-[75vmin] p-3 flex">
        <div class="flex gap-4 mx-auto">
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
