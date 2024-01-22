<template>
  <div class="flex h-full flex-col">
    <TheHeader />
    <div class="grid grow place-content-center">
      <TheWelcome @click-contact-button="handleClickContactButton" />

      <ContactDialog :open="isContactDialogOpen" @on-close="handleClose" />
    </div>
  </div>
</template>

<script setup lang="ts">
const isContactDialogOpen = ref(false);

function handleClickContactButton() {
  isContactDialogOpen.value = !isContactDialogOpen.value;
}

function handleClose() {
  isContactDialogOpen.value = false;
}
</script>
