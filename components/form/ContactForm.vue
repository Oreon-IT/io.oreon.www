<template>
  <form
    class="flex flex-col gap-2"
    @submit="handleSubmitEvent"
    @reset="handleReset"
  >
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

    <div class="flex justify-end gap-2">
      <RegularButton button-type="reset" type="danger">Cancel</RegularButton>
      <RegularButton button-type="submit" type="primary">Submit</RegularButton>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

const emit = defineEmits<{ close: [void] }>();

const { handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      email: z
        .string({
          required_error: "I need to be able to contact you",
        })
        .email("This email address is not in the correct format"),
      name: z.string().optional(),
      message: z.string({
        required_error: "Without a message, there is no point contacting me",
      }),
    }),
  ),
});

const handleSubmitEvent = handleSubmit((values) =>
  console.log("values are", values),
);

function handleReset() {
  resetForm();
  emit("close");
}
</script>
