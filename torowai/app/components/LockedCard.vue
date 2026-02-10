<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  icon?: string;
}>();
</script>

<template>
  <div class="locked-card-container">
    <div class="lock-overlay">
      <Icon name="heroicons:lock-closed-solid" class="lock-icon" />
      <span class="premium-tag">PREMIUM</span>
    </div>
    
    <div class="card-content">
      <div class="icon-wrapper">
        <Icon :name="icon || 'heroicons:sparkles'" class="feature-icon" />
      </div>
      <h3 class="feature-title">{{ title }}</h3>
      <p class="feature-description">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.locked-card-container {
  @apply relative bg-white rounded-2xl p-6 border border-gray-100 opacity-75 grayscale-[0.5] transition-all hover:grayscale-0 hover:opacity-100 cursor-pointer overflow-hidden;
}

.lock-overlay {
  @apply absolute top-4 right-4 flex items-center gap-1;
}

.lock-icon {
  @apply w-4 h-4 text-amber-500;
}

.premium-tag {
  @apply text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full;
}

.icon-wrapper {
  @apply w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4;
}

.feature-icon {
  @apply w-6 h-6 text-[#6B46C1];
}

.feature-title {
  @apply text-lg font-bold text-gray-800 mb-2;
}

.feature-description {
  @apply text-sm text-gray-500 leading-relaxed;
}
</style>
