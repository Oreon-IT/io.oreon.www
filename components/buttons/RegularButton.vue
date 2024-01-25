<template>
  <button
    ref="buttonEl"
    :type="buttonType"
    class="transition-color rounded border-4 px-2 py-1 duration-200 enabled:hover:text-white enabled:focus-visible:text-white disabled:cursor-progress"
    :class="classes"
    :disabled="loading"
  >
    <CircularProgressAnimation
      v-if="loading"
      :color="textColorClass"
      class="!absolute"
    />
    <slot />
  </button>
</template>

<script setup lang="ts">
const { type, loading = false } = defineProps<{
  buttonType: "button" | "submit" | "reset";
  type: "primary" | "danger";
  loading?: boolean;
}>();

const classes = computed(() => {
  const loadingClasses = loading
    ? "text-transparent flex items-center justify-center"
    : "";
  return type === "primary"
    ? `border-yellow-300 enabled:focus-visible:bg-yellow-300 enabled:hover:bg-yellow-300 ${loadingClasses}`
    : `border-orange-500 enabled:focus-visible:bg-orange-500 enabled:hover:bg-orange-500 ${loadingClasses}`;
});

const textColorClass = computed(() =>
  type === "primary" ? "text-yellow-300" : "text-orange-500",
);
</script>
