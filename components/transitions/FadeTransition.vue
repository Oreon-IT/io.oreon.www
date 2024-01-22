<template>
  <Transition name="fade" mode="out-in">
    <slot />
  </Transition>
</template>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}
</style>
