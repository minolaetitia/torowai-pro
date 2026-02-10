<script setup lang="ts">
const props = defineProps<{
  question: string;
  modelValue?: number;
}>();

const emit = defineEmits(['update:modelValue']);

const options = [
  { value: 1, label: 'Pas du tout' },
  { value: 2, label: 'Un peu' },
  { value: 3, label: 'Moyennement' },
  { value: 4, label: 'Beaucoup' },
  { value: 5, label: 'Tout à fait' },
];

const selectOption = (val: number) => {
  emit('update:modelValue', val);
};
</script>

<template>
  <div class="question-container">
    <h2 class="question-text">{{ question }}</h2>
    
    <div class="options-grid">
      <button
        v-for="option in options"
        :key="option.value"
        class="option-button"
        :class="{ 'selected': modelValue === option.value }"
        @click="selectOption(option.value)"
      >
        <span class="option-number">{{ option.value }}</span>
        <span class="option-label">{{ option.label }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.question-container {
  @apply space-y-8 py-4;
}

.question-text {
  @apply text-2xl font-bold text-gray-800 text-center leading-tight;
}

.options-grid {
  @apply grid grid-cols-1 md:grid-cols-5 gap-3;
}

.option-button {
  @apply flex flex-col items-center p-4 rounded-2xl border-2 border-gray-100 transition-all duration-200 hover:border-purple-300 hover:bg-purple-50;
}

.option-button.selected {
  @apply border-[#6B46C1] bg-[#6B46C1] text-white shadow-md;
}

.option-number {
  @apply text-lg font-bold mb-1;
}

.option-label {
  @apply text-xs text-center font-medium;
}

.option-button.selected .option-label {
  @apply text-purple-100;
}
</style>
