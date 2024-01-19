<template>
  <div class="flex flex-col" :class="containerClasses">
    <label :for="id" class="mb-1">{{ label }} </label>
    <div v-if="errorMessage" class="mb-1 flex items-center gap-1 text-red-500">
      <span class="material-symbols-outlined">error</span>
      <span class="text-sm">{{ errorMessage }}</span>
    </div>
    <textarea
      v-if="textArea"
      v-model="value"
      v-on="validationListeners"
      v-bind="attrs"
      :id="id"
      class="border-2 border-black p-1"
      :class="inputClasses"
    />
    <input
      v-else
      v-model="value"
      v-on="validationListeners"
      v-bind="attrs"
      :id="id"
      class="border-2 border-black p-1"
      :class="inputClasses"
    />
    <div class="text-xs text-slate-500">
      <slot name="hint" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";

const attrs = useAttrs();
defineOptions({
  inheritAttrs: false,
});

const {
  label,
  id,
  textArea = false,
} = defineProps<{
  label: string;
  id: string;
  textArea?: boolean;
}>();

const { value, errorMessage, handleChange, handleBlur, meta } =
  useField<string>(id, undefined, {
    validateOnValueUpdate: false,
  });

const hasErrorMessage = computed(
  () => typeof errorMessage.value === "string" && errorMessage.value.length > 0,
);

// From https://vee-validate.logaretm.com/v4/guide/composition-api/custom-inputs/#handling-events
const validationListeners = {
  blur: (event: Event) => handleBlur(event, true),
  change: handleChange,
  input: (event: Event) => {
    handleChange(event, hasErrorMessage.value);
  },
};

const containerClasses = computed(
  () =>
    `border-l-2 pl-2 ${
      meta.touched && hasErrorMessage.value
        ? "border-red-500"
        : "border-transparent"
    }`,
);

const inputClasses = computed(() =>
  meta.touched && hasErrorMessage.value
    ? "border-red-500"
    : "focus-visible:border-yellow-300",
);
</script>
