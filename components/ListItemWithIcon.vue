<template>
  <VListItem class="gap-2">
    <template #prepend>
      <slot />
    </template>
    <strong v-if="prominent">
      {{ text }}
    </strong>
    <span v-else>
      {{ text }}
    </span>
  </VListItem>
</template>

<script setup lang="ts">
const { prominent } = defineProps<{
  text: string;
  prominent?: boolean;
}>();
</script>
