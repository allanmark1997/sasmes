<script setup>
import { Link, usePage } from "@inertiajs/vue3";
import { computed, inject, onMounted, ref } from "vue";

const props = defineProps([
  "links",
  "search",
  "office_id",
  "unit_id",
  "role",
  "office",
  "service",
  "category",
  "from",
  "to",
  "filter",
]);

const filter_url = computed(() =>
  props.filter != "" && props.filter != undefined
    ? "&filter=" + props.filter
    : ""
);

const search_url = computed(() =>
  props.search != "" && props.search != undefined
    ? "&search=" + props.search
    : ""
);

const office_url = computed(() =>
  props.office_id != "" && props.office_id != undefined
    ? "&office_id=" + props.office_id
    : ""
);

const unit_url = computed(() =>
  props.unit_id != "" && props.unit_id != undefined
    ? "&unit_id=" + props.unit_id
    : ""
);

const role_url = computed(() =>
  props.role != "" && props.role != undefined
    ? "&role=" + props.role
    : ""
);

const office_url2 = computed(() =>
  props.office != "" && props.office != undefined
    ? "&office=" + props.office
    : ""
);

const service_url = computed(() =>
  props.service != "" && props.service != undefined
    ? "&service=" + props.service
    : ""
);

const category_url = computed(() =>
  props.category != "" && props.category != undefined
    ? "&category=" + props.category
    : ""
);

const delivery_url = computed(() =>
  props.from != "" &&
  props.from != undefined &&
  props.to != "" &&
  props.to != undefined
    ? "&from=" + props.from + "&to=" + props.to
    : ""
);

onMounted(() => {});
</script>

<template>
  <div class="mt-6 -mb-1 flex flex-wrap">
    <template v-for="(link, key) in links" :key="key">
      <div
        v-if="link.url === null"
        class="mr-1 mb-1 px-2 py-1 text-sm bg-white border rounded text-gray-400"
        :class="{ 'ml-auto': links.length === key + 1 }"
      >
        <span v-html="link.label"></span>
      </div>
      <Link
        v-else
        class="mr-1 mb-1 px-2 bg-white py-1 text-sm shadow-sm border rounded hover:bg-white focus:border-yellow-500 focus:text-yellow-500"
        :class="{
          'bg-orange-400': link.active,
          'ml-auto': links.length === key + 1,
        }"
        :href="link.url + search_url + category_url + delivery_url + filter_url + office_url + unit_url + role_url + office_url2 + service_url"
      >
        <span v-html="link.label"></span>
      </Link>
    </template>
  </div>
</template>
