<template>
  <dialog
    class="w-11/12 flex-col gap-2 border-2 border-black p-4 backdrop-opacity-5 sm:w-[600px]"
    ref="dialogEl"
    :class="dialogClasses"
  >
    <button
      class="material-symbols-outlined absolute right-1 top-1"
      @click="handleClickCloseButton"
    >
      close
    </button>
    <ContactForm @close="emit('onClose')" />
    <p class="transition-opacity duration-300" :class="thankYouDialogClasses">
      Thanks for reaching out! I'll be in touch soon.
    </p>
  </dialog>
</template>

<script lang="ts" setup>
const { open } = defineProps<{ open: boolean }>();
const emit = defineEmits<{ onClose: [] }>();

const dialogEl = ref<HTMLDialogElement | null>(null);
const formSubmitted = ref(false);

setTimeout(() => (formSubmitted.value = true), 2000);

// Prevents overriding display: none on dialog when hidden
const dialogClasses = computed(() => (open ? "flex" : undefined));
const thankYouDialogClasses = computed(() =>
  formSubmitted.value ? "opacity-100" : "opacity-0",
);

watch(
  toRef(() => open),
  () => {
    if (open) {
      return dialogEl.value?.showModal();
    }
    dialogEl.value?.close();
  },
);

function handleClickCloseButton() {
  emit("onClose");
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
