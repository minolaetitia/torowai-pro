<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  disabled?: boolean;
  type?: 'button' | 'submit';
}>();
</script>

<template>
  <button
    :type="type || 'button'"
    :disabled="disabled"
    class="action-button"
    :class="{
      'primary-btn': variant === 'primary' || !variant,
      'secondary-btn': variant === 'secondary',
      'outline-btn': variant === 'outline',
      'ghost-btn': variant === 'ghost'
    }"
  >
    <slot />
  </button>
</template>

<style scoped>
.action-button {
  @apply px-6 py-3 rounded-full font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2;
}

.primary-btn {
  @apply bg-[#6B46C1] text-white hover:bg-[#553C9A] hover:shadow-md;
}

.secondary-btn {
  @apply bg-[#3182CE] text-white hover:bg-[#2B6CB0] hover:shadow-md;
}

.outline-btn {
  @apply bg-transparent border-2 border-[#6B46C1] text-[#6B46C1] hover:bg-purple-50;
}

.ghost-btn {
  @apply bg-transparent text-gray-600 hover:bg-gray-100;
}
</style>
