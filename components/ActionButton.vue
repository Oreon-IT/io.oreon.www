<template>
  <button
    type="button"
    class="relative border-4 border-yellow-300 px-4 py-2 before:absolute before:inset-0 before:z-[-1] before:origin-left before:scale-x-0 before:bg-yellow-300 before:transition-transform hover:before:scale-x-100 focus:before:scale-x-100"
  >
    <slot />
  </button>
</template>
