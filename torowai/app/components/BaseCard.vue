<template>
  <div class="content-card">
    <slot name="header" />
    <div class="card-body">
      <slot />
    </div>
    <slot name="footer" />
  </div>
</template>

<style scoped>
.content-card {
  @apply bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden;
}

.card-body {
  @apply p-6;
}
</style>
