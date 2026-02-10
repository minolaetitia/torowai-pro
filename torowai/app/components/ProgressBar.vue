<script setup lang="ts">
defineProps<{
  progress: number;
}>();
</script>

<template>
  <div class="progress-container">
    <div
      class="progress-fill"
      :style="{ width: `${progress}%` }"
    ></div>
  </div>
</template>

<style scoped>
.progress-container {
  @apply w-full h-2 bg-gray-100 rounded-full overflow-hidden;
}

.progress-fill {
  @apply h-full bg-[#6B46C1] transition-all duration-500 ease-out rounded-full;
}
</style>
