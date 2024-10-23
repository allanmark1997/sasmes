<template>
    <div class="min-h-screen flex sm:justify-center items-center pt-6 sm:pt-0 bg-[#070d31] ">
        <div>
            <slot name="logo" />
        </div>

        <div>
            <div class="w-full mt-10 mx-auto">
                <p class="font-bold text-white mx-auto mb-4 text-4xl text-center">
                    <slot name="card_text"/>
                </p>
            </div>

            <div class="w-full sm:max-w-md mx-6 px-6 py-4 bg-[#070d31] overflow-hidden sm:rounded-lg text-white">
                <slot />
            </div>
        </div>

    </div>
</template>
