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
      :disabled="emailSent"
    />

    <OutlinedInput
      id="name"
      label="Name"
      autocomplete="name"
      :disabled="emailSent"
    >
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
      :disabled="emailSent"
    />

    <FadeTransition>
      <SuccessMessage v-if="emailSent">
        Thanks for reaching out! I'll be in touch soon.
      </SuccessMessage>
      <ErrorMessage v-else-if="emailError">
        Something went wrong, please try again later
      </ErrorMessage>
      <div v-else class="flex justify-end gap-2">
        <RegularButton button-type="reset" type="danger">Cancel</RegularButton>
        <RegularButton :loading="loading" button-type="submit" type="primary"
          >Submit</RegularButton
        >
      </div>
    </FadeTransition>
  </form>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

defineProps<{ emailSent: boolean; emailError: boolean; loading: boolean }>();

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
