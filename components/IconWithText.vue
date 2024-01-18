<template>
  <VListItem v-if="listItem" class="gap-2">
    <template #prepend>
      <slot name="icon" />
    </template>
    <span>
      {{ text }}
    </span>
  </VListItem>
  <div v-else class="flex gap-2">
    <slot name="icon" />
    <strong>
      {{ text }}
    </strong>
  </div>
</template>

<script setup lang="ts">
const { listItem = false } = defineProps<{
  text: string;
  listItem?: boolean;
  center?: boolean;
}>();
</script>
