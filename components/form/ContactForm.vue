<template>
  <form class="flex flex-col gap-2" @submit="handleSubmitEvent">
    <OutlinedInput
      id="email"
      type="email"
      label="E-mail*"
      autofocus
      autocomplete="email"
    />

    <OutlinedInput id="name" label="Name" autocomplete="name">
      <template #hint>
        I don't <i>need</i> it, but it's nice to know who you are
      </template>
    </OutlinedInput>

    <OutlinedInput
      id="message"
      label="Message*"
      hint="What's on your mind?"
      text-area
      rows="5"
    />

    <ActionButton type="submit" class="self-start">Submit</ActionButton>
  </form>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      email: z
        .string()
        .min(1, "I need to be able to contact you")
        .email("This email address is not in the correct format"),
      name: z.string().optional(),
      message: z
        .string()
        .min(1, "Without a message, there is no point contacting me"),
    }),
  ),
});

const handleSubmitEvent = handleSubmit((values) =>
  console.log("values are", values),
);
</script>
