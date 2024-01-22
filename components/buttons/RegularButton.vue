<template>
  <button
    :type="buttonType"
    class="transition-color rounded border-4 px-2 py-1 duration-200 hover:text-white focus-visible:text-white"
    :class="classes"
  >
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
    ? "border-yellow-300 focus-visible:bg-yellow-300 hover:bg-yellow-300"
    : "border-orange-500 focus-visible:bg-orange-500 hover:bg-orange-500",
);
</script>
