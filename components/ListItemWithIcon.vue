<template>
  <li class="flex gap-2">
    <slot />
    <strong v-if="prominent">
      {{ text }}
    </strong>
    <span v-else>
      {{ text }}
    </span>
  </li>
</template>

<script setup lang="ts">
const { prominent } = defineProps<{
  text: string;
  prominent?: boolean;
}>();
</script>
