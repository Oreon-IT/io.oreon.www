<template>
  <div class="flex h-full flex-col">
    <a
      href="https://github.com/Oreon-IT/io.oreon.www"
      target="_blank"
      class="self-end"
    >
      <GitHubIcon width="32" />
    </a>
    <div class="grid grow place-content-center">
      <h1 class="mb-8 text-center text-6xl">
        Hello there,
        <span class="material-symbols-outlined text-6xl text-yellow-300"
          >waving_hand</span
        >
      </h1>
      <main class="flex flex-col gap-8">
        <p class="max-w-4xl text-xl">
          My name is Robin, I've been building web applications as a Software
          Engineer for 10 years. I have used various languages, frameworks,
          tools,.. along the road, such as:
        </p>

        <SkillsList />

        <ActionButton class="self-center text-xl"> Contact me </ActionButton>
      </main>
    </div>
  </div>
</template>

<script setup>
import GitHubIcon from "@/assets/icons/github.svg";
</script>
