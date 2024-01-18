<template>
  <div>
    <IconWithText text="Java">
      <template #icon> <JavaIcon width="24" /> </template>
    </IconWithText>
    <v-list>
      <IconWithText list-item text="Spring">
        <template #icon>
          <SpringIcon width="24" />
        </template>
      </IconWithText>
    </v-list>
  </div>
</template>

<script setup>
import JavaIcon from "@/assets/icons/java.svg";
import SpringIcon from "@/assets/icons/spring.svg";
</script>
