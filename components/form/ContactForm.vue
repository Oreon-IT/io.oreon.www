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

const emit = defineEmits<{
  close: [void];
  submit: [ContactDetails];
}>();

const { handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(contactFormSchema),
});

const handleSubmitEvent = handleSubmit((contactDetails) =>
  emit("submit", contactDetails),
);

function handleReset() {
  resetForm();
  emit("close");
}
</script>
