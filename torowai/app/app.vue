<template>
  <div class="min-h-screen font-sans">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* Global transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
