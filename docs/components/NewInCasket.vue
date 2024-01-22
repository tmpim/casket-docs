<template>
  <span
    :title="title"
    class="inline-block whitespace-nowrap rounded bg-green-600 text-white px-2 py-1 text-xs font-semibold"
  >
    New in Casket
  </span>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  version?: string;
}>();

const title = props.version
  ? `New in Casket ${props.version}`
  : "New in Casket";
</script>
