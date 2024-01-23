<template>
  <dialog
    ref="dialogEl"
    class="w-11/12 flex-col gap-2 border-2 border-black p-4 backdrop-opacity-5 sm:w-[600px]"
    :class="dialogClasses"
    @close="$emit('close')"
  >
    <button
      class="material-symbols-outlined absolute right-1 top-1"
      @click="$emit('close')"
    >
      close
    </button>
    <ContactForm
      v-if="isFormAvailable"
      :email-sent="emailSent"
      :email-error="emailError"
      :submitted="emailSent"
      @close="$emit('close')"
      @submit="handleSubmit"
    />
  </dialog>
</template>

<script lang="ts" setup>
const { open } = defineProps<{ open: boolean }>();
defineEmits<{ close: [] }>();

const isFormAvailable = ref(true);
const dialogEl = ref<HTMLDialogElement | null>(null);
const emailSent = ref(false);
const emailError = ref(false);

// Prevents overriding display: none on dialog when hidden
const dialogClasses = computed(() => (open ? "flex" : undefined));

watch(
  toRef(() => open),
  () => {
    if (open) {
      isFormAvailable.value = true;
      emailError.value = false;
      return dialogEl.value?.showModal();
    }
    // Timeout ensures the form doesn't get destroyed before transition is over
    setTimeout(() => {
      if (!open) {
        isFormAvailable.value = false;
      }
    }, 300);
    dialogEl.value?.close();
  },
);

async function handleSubmit(contactDetails: ContactDetails) {
  try {
    await sendContactEmail(contactDetails);
    emailSent.value = true;
  } catch (error) {
    emailError.value = true;
  }
}
</script>

// Animating backdrop. This seems impossible with Tailwind // Inspired by
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
<style lang="scss" scoped>
$transition-duration: 300ms;

dialog[open] {
  opacity: 1;
  transform: translateY(0);
}

dialog {
  overflow: hidden; // 1Password menu can overflow dialog for some reason
  opacity: 0;
  transform: translateY(-50%);
  transition:
    opacity $transition-duration ease-out,
    transform $transition-duration ease-out,
    overlay $transition-duration ease-out allow-discrete,
    display $transition-duration ease-out allow-discrete;
}

/*   Before-open state  */
/* Needs to be after the previous dialog[open] rule to take effect,
    as the specificity is the same */
@starting-style {
  dialog[open] {
    opacity: 0;
    transform: translateY(-50%);
  }
}

/* Transition the :backdrop when the dialog modal is promoted to the top layer */
dialog::backdrop {
  --transition-duration: 300ms;
  background-color: rgb(0 0 0 / 0%);
  transition:
    display $transition-duration allow-discrete,
    overlay $transition-duration allow-discrete,
    background-color $transition-duration;
}

dialog[open]::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

@starting-style {
  dialog[open]::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
</style>
