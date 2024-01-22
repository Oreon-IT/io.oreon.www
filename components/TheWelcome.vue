<template>
  <h1
    class="mb-8 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-center text-6xl text-transparent"
  >
    Hello there,
    <span class="material-symbols-outlined text-6xl text-yellow-300"
      >waving_hand</span
    >
  </h1>
  <main class="flex flex-col gap-8">
    <p class="max-w-4xl text-xl">
      My name is Robin, I've been building web applications as a Software
      Engineer for 10 years. I have used various languages, frameworks, tools,..
      along the road, such as:
    </p>

    <SkillsList />

    <p class="max-4-xl text-xl">
      I'm available for consultancy work on exciting projects that push my
      boundaries.
    </p>

    <ActionButton
      class="self-center text-xl"
      @click="$emit('clickContactButton')"
      type="button"
    >
      Contact me
    </ActionButton>
  </main>
</template>

<script lang="ts" setup>
defineEmits<{ clickContactButton: [void] }>();
</script>
