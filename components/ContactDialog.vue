<template>
  <dialog
    class="w-11/12 flex-col gap-2 border-2 border-black p-4 sm:w-[500px]"
    ref="dialogEl"
    :class="classes"
  >
    <ContactForm v-if="open" />

    <button type="button" @click="emit('onClose')">Close</button>
  </dialog>
</template>

<script lang="ts" setup>
const { open } = defineProps<{ open: boolean }>();
const emit = defineEmits<{ onClose: [] }>();

const dialogEl = ref<HTMLDialogElement | null>(null);

// Prevents overriding display: none on dialog when hidden
const classes = computed(() => (open ? `flex` : undefined));

watch(
  toRef(() => open),
  () => {
    if (open) {
      return dialogEl.value?.showModal();
    }
    dialogEl.value?.close();
  },
);
</script>
