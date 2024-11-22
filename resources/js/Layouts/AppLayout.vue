<script setup>
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Banner from '@/Components/Banner.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import Icon from "@/CustomComponents/Icon.vue"


defineProps({
    title: String,
});

const showingNavigationDropdown = ref(false);

const switchToTeam = (team) => {
    router.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};

const logout = () => {
    router.post(route('logout'));
};
</script>

<template>
    <div>

        <Head :title="title" />

        <Banner />

        <div class="min-h-screen bg-gray-100 flex relative">
            <div class=" top-0 left-0 w-[40vmin]">

            </div>
            <aside class=" top-0 left-0 w-[35vmin] transition-transform -translate-x-full translate-x-0 fixed"
                aria-label="Sidebar">
                <div class="h-screen px-3 py-4 bg-[#070d31] ">
                    <div class="">
                        <div class="relative flex left-4 lg:left-8">
                            <img class="w-[50px] h-[50px]" src="./../CustomComponents/images/sasmes_logo.png" alt="">
                            <img class="w-[60px] h-[15px] my-auto" src="./../CustomComponents/images/sasmes_text.png"
                                alt="">
                        </div>
                        <ul class="space-y-2 font-medium mt-4">
                            <li class="w-[28vmin]">
                                <a :href="route('dashboard')"
                                    class="flex items-center p-2 text-white rounded-lg group w-full"
                                    :class="route().current('dashboard') ? 'bg-[#f9b418]' : ''">
                                    <svg class="w-5 h-5 text-white transition duration-75" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path
                                            d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path
                                            d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <span class="ms-3">Dashboard</span>
                                </a>
                            </li>
                            <li v-if="$page.props.auth.user.user_type != 'vcsas'">
                                <a :href="route('office.index')"
                                    class="flex items-center p-2 text-white rounded-lg group"
                                    :class="route().current('office.index') || route().current('unit.index') || route().current('unit_service.index') ? 'bg-[#f9b418]' : ''">
                                    <svg fill="#FFFFFF" class="w-5 h-5 text-white transition duration-75"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M22,7H17V2a1,1,0,0,0-1-1H8A1,1,0,0,0,7,2V7H2A1,1,0,0,0,1,8V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V8A1,1,0,0,0,22,7ZM3,9H7V21H3ZM9,8V3h6V21H13V19a1,1,0,0,0-2,0v2H9ZM21,21H17V9h4ZM13,7H11V5h2Zm0,4H11V9h2Zm0,4H11V13h2ZM4,10H6v2H4Zm0,4H6v2H4Zm0,4H6v2H4Zm16-6H18V10h2Zm0,4H18V14h2Zm0,4H18V18h2Z" />
                                    </svg>
                                    <span class="ms-3">Offices</span>
                                </a>
                            </li>

                            <li
                                v-if="$page.props.auth.user.user_type == 'root' || $page.props.auth.user.user_type == 'admin' || $page.props.auth.user.user_type == 'director'">
                                <a :href="route('service.index')"
                                    class="flex items-center p-2 text-white rounded-lg group"
                                    :class="route().current('service.index') ? 'bg-[#f9b418]' : ''">
                                    <svg fill="#FFFFFF" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="3vmin" height="3vmin"
                                        viewBox="0 0 236 256" enable-background="new 0 0 236 256" xml:space="preserve">
                                        <path d="M117.5,2c-12.47,0-22.63,10.16-22.63,22.63c0,12.46,10.06,22.62,22.63,22.62c12.37,0,22.62-10.16,22.62-22.62
	C140.12,12.16,129.97,2,117.5,2z M146,52H89c-15.59,0-28,13.41-28,29v32h20V86c0-1.71,1.29-3,3-3s3,1.29,3,3v27h61V86
	c0-1.71,1.29-3,3-3s3,1.29,3,3v27h20V81C174,65.51,161.49,52,146,52z M2,118v27h23v109h185V145h24v-27H2z M136.06,206.81
	c1.03-0.34,2.02-0.58,3.05-0.58c3.05-0.11,5.66,0.82,7.88,2.84c2.23,1.99,3.43,4.45,3.5,7.57c0.1,0.93,0,2.02-0.24,3.05l-8.74-8.05
	l-7.88,8.6l8.84,8.02c-1.03,0.34-2.02,0.58-3.05,0.58c-3.05,0.11-5.65-0.82-7.88-2.84c-2.23-2.13-3.43-4.59-3.53-7.64
	c0-1.07,0.1-2.27,0.34-3.29l-2.12-2.03l-12.72-11.61l-21.52,23.71c-1.3,1.75-3.32,2.95-5.65,2.95c-3.77,0-6.82-3.05-6.82-6.82
	c0-2.02,0.79-3.87,2.33-5.18l22.34-23.16l-13.5-12.37c-1.06,0.48-2.26,0.72-3.29,0.72c-3.05,0.1-5.65-0.82-7.88-2.85
	c-2.23-2.02-3.43-4.49-3.53-7.54c-0.1-0.92,0-2.02,0.24-3.05l8.84,8.02l7.81-8.56l-8.84-8.02c0.93-0.35,2.02-0.59,3.05-0.59
	c3.05-0.1,5.66,0.83,7.88,2.85c2.23,1.99,3.43,4.59,3.53,7.64c0.11,1.03,0,2.02-0.24,3.05l13.92,12.75l10.17-11l-15.21-13.4
	l13.81-15.73l39.1,34.41l-13.81,15.73l-15.63-13.78l-9.83,11.62L136.06,206.81z" />
                                    </svg>
                                    <span class="ms-3">Services Management</span>
                                </a>
                            </li>

                            <li
                                v-if="$page.props.auth.user.user_type == 'root' || $page.props.auth.user.user_type == 'admin' || $page.props.auth.user.user_type == 'director' || $page.props.auth.user.user_type == 'vcsas' || $page.props.auth.user.user_type == 'unit_head'">
                                <a :href="route('client.index')"
                                    class="flex items-center p-2 text-white rounded-lg group"
                                    :class="route().current('client.index') || route().current('client.index_details') ? 'bg-[#f9b418]' : ''">
                                    <Icon icon="user" />
                                    <span class="ms-3">Client Management</span>
                                </a>
                            </li>

                            <li
                                v-if="$page.props.auth.user.user_type == 'root' || $page.props.auth.user.user_type == 'admin' || $page.props.auth.user.user_type == 'director' || $page.props.auth.user.user_type == 'unit_head'">
                                <a :href="route('record.index')"
                                    class="flex items-center p-2 text-white rounded-lg group"
                                    :class="route().current('record.index') ? 'bg-[#f9b418]' : ''">
                                    <Icon icon="docs" />
                                    <span class="ms-3">Client Records</span>
                                </a>
                            </li>

                            <li
                                v-if="$page.props.auth.user.user_type == 'root' || $page.props.auth.user.user_type == 'admin' || $page.props.auth.user.user_type == 'director'">
                                <a :href="route('user.index')" class="flex items-center p-2 text-white rounded-lg group"
                                    :class="route().current('user.index') ? 'bg-[#f9b418]' : ''">
                                    <Icon icon="users" />
                                    <span class="ms-3">User Management</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </aside>
            <!-- <nav class="bg-white border-b border-gray-100"> -->
            <!-- Primary Navigation Menu -->
            <!-- 
                <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex"> -->
            <!-- Logo -->
            <!-- <div class="shrink-0 flex items-center">
                                <Link :href="route('dashboard')">
                                <ApplicationMark class="block h-9 w-auto" />
                                </Link>
                            </div> -->

            <!-- Navigation Links -->
            <!-- <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                                    Dashboard
                                </NavLink>
                            </div>
                        </div>

                        <div class="hidden sm:flex sm:items-center sm:ms-6">
                            <div class="ms-3 relative"> -->
            <!-- Teams Dropdown -->
            <!-- <Dropdown v-if="$page.props.jetstream.hasTeamFeatures" align="right" width="60">
                                    <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button type="button"
                                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150">
                                                {{ $page.props.auth.user.current_team.name }}

                                                <svg class="ms-2 -me-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

<template #content>
                                        <div class="w-60"> -->
            <!-- Team Management -->
            <!-- <div class="block px-4 py-2 text-xs text-gray-400">
                                                Manage Team
                                            </div> -->

            <!-- Team Settings -->
            <!-- <DropdownLink
                                                :href="route('teams.show', $page.props.auth.user.current_team)">
                                                Team Settings
                                            </DropdownLink>

                                            <DropdownLink v-if="$page.props.jetstream.canCreateTeams"
                                                :href="route('teams.create')">
                                                Create New Team
                                            </DropdownLink> -->

            <!-- Team Switcher -->
            <!-- <template v-if="$page.props.auth.user.all_teams.length > 1">
                                                <div class="border-t border-gray-200" />

                                                <div class="block px-4 py-2 text-xs text-gray-400">
                                                    Switch Teams
                                                </div>

                                                <template v-for="team in $page.props.auth.user.all_teams"
                                                    :key="team.id">
                                                    <form @submit.prevent="switchToTeam(team)">
                                                        <DropdownLink as="button">
                                                            <div class="flex items-center">
                                                                <svg v-if="team.id == $page.props.auth.user.current_team_id"
                                                                    class="me-2 h-5 w-5 text-green-400"
                                                                    xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                    viewBox="0 0 24 24" stroke-width="1.5"
                                                                    stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>

                                                                <div>{{ team.name }}</div>
                                                            </div>
                                                        </DropdownLink>
                                                    </form>
                                                </template>
</template>
</div>
</template>
</Dropdown>
</div> -->

            <!-- Settings Dropdown -->
            <!-- <div class="ms-3 relative">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <button v-if="$page.props.jetstream.managesProfilePhotos"
                                            class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                                            <img class="h-8 w-8 rounded-full object-cover"
                                                :src="$page.props.auth.user.profile_photo_url"
                                                :alt="$page.props.auth.user.name">
                                        </button>

                                        <span v-else class="inline-flex rounded-md">
                                            <button type="button"
                                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150">
                                                {{ $page.props.auth.user.name }}

                                                <svg class="ms-2 -me-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content> -->
            <!-- Account Management -->
            <!-- <div class="block px-4 py-2 text-xs text-gray-400">
                                            Manage Account
                                        </div>

                                        <DropdownLink :href="route('profile.show')">
                                            Profile
                                        </DropdownLink>

                                        <DropdownLink v-if="$page.props.jetstream.hasApiFeatures"
                                            :href="route('api-tokens.index')">
                                            API Tokens
                                        </DropdownLink>

                                        <div class="border-t border-gray-200" /> -->

            <!-- Authentication -->
            <!-- <form @submit.prevent="logout">
                                            <DropdownLink as="button">
                                                Log Out
                                            </DropdownLink>
                                        </form>
                                    </template>
                                </Dropdown>
                            </div>
                        </div> -->

            <!-- Hamburger -->
            <!-- <div class="-me-2 flex items-center sm:hidden">
                            <button
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                @click="showingNavigationDropdown = !showingNavigationDropdown">
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        :class="{ 'hidden': showingNavigationDropdown, 'inline-flex': !showingNavigationDropdown }"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                    <path
                                        :class="{ 'hidden': !showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div> -->

            <!-- </nav> -->

            <!-- Page Heading -->
            <!-- <header v-if="$slots.header" class="bg-white shadow">
                <div class="max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header> -->

            <!-- Page Content -->
            <main class="w-full">
                <div class="flex justify-between bg-[#070d31] shadow">
                    <header v-if="$slots.header">
                        <div class="max-w-8xl mx-auto py-3 px-2 sm:px-3 lg:px-4">
                            <slot name="header" />
                        </div>
                    </header>
                    <div class="ms-3 relative p-2">
                        <Dropdown align="right" width="48">
                            <template #trigger>
                                <button v-if="$page.props.jetstream.managesProfilePhotos"
                                    class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                                    <img class="h-8 w-8 rounded-full object-cover"
                                        :src="$page.props.auth.user.profile_photo_url"
                                        :alt="$page.props.auth.user.name">
                                </button>

                                <span v-else class="inline-flex rounded-md">
                                    <button type="button"
                                        class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150">
                                        {{ $page.props.auth.user.name }}

                                        <svg class="ms-2 -me-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </span>
                            </template>

                            <template #content>
                                <!-- Account Management -->
                                <div class="block px-4 py-2 text-xs text-gray-400">
                                    Manage Account
                                </div>

                                <DropdownLink :href="route('profile.show')">
                                    Profile
                                </DropdownLink>

                                <DropdownLink v-if="$page.props.jetstream.hasApiFeatures"
                                    :href="route('api-tokens.index')">
                                    API Tokens
                                </DropdownLink>

                                <div class="border-t border-gray-200" />

                                <!-- Authentication -->
                                <form @submit.prevent="logout">
                                    <DropdownLink as="button">
                                        Log Out
                                    </DropdownLink>
                                </form>
                            </template>
                        </Dropdown>
                    </div>

                </div>

                <slot />
            </main>
        </div>
    </div>
</template>
