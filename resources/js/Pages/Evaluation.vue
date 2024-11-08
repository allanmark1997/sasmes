<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';

const props = defineProps(["questions"])

const form = useForm({
   answer:[]
})

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script>

<template>

    <Head title="Evaluation" />
    <div class="bg-gray-50 text-black/50 mt-[25vmin] mx-auto w-[75vmin] p-3">
        <p class="text-center font-bold text-5xl">
            Office name
        </p>
        <p class="text-lg font-bold text-center">
            Title
        </p>
    </div>
    <div class="bg-gray-50 text-black/50 mt-12 mx-auto w-[75vmin] p-3">
        <div>
            <p>
                Title
            </p>
        </div>
        <p>asd</p>
    </div>
</template>
