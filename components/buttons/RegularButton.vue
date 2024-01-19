<template>
  <button :type="buttonType" class="rounded px-4 py-1" :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
const { type } = defineProps<{
  buttonType: "button" | "submit" | "reset";
  type: "primary" | "danger";
}>();

const classes = computed(() =>
  type === "primary"
    ? "transition-color bg-yellow-300 duration-200 focus- hover:bg-yellow-500 hover:text-white"
    : "transition-color border-2 border-orange-500 duration-200 focus-visible:bg-orange-500 hover:bg-orange-500 focus-visible:text-white hover:text-white",
);
</script>
