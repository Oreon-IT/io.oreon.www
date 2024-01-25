<template>
  <!-- Inspired by https://gist.github.com/eYinka/873be69fae3ef27b103681b8a9f5e379 -->
  <div class="relative h-6 w-6" role="progressbar">
    <svg class="h-full w-full animate-spin" viewBox="0 0 100 100">
      <circle
        class="fill-transparent stroke-current stroke-[10] text-gray-200"
        cx="50"
        cy="50"
        r="40"
      />
      <circle
        class="origin-center -rotate-90 fill-transparent stroke-current stroke-[10] transition-[stroke-dashoffset] duration-300"
        :class="color"
        stroke-linecap="round"
        stroke-dasharray="400, 400"
        stroke-dashoffset="calc(400 - (400 * 45) / 100)"
        cx="50"
        cy="50"
        r="40"
      />
    </svg>
  </div>
</template>

<script lang="ts" setup>
// Should be Tailwind text-color class (e.g. text-yellow-300)
defineProps<{ color: string }>();
</script>
