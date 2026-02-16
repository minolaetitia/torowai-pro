<script setup lang="ts">
import { computed } from 'vue';
import { pcmTypes } from '~/data/pcmTypes';
import type { PcmResults } from '~/stores/pcm';

const props = defineProps<{
  results: PcmResults;
}>();

const towerBlocks = computed(() => {
  // Create blocks ordered from highest to lowest score (base at bottom)
  return props.results.towerLevels.map((typeId, index) => {
    const type = pcmTypes[typeId];
    const percentage = Math.round(props.results.percentages[typeId]);
    const isBase = typeId === props.results.base;
    const isPhase = typeId === props.results.phase;

    return {
      id: typeId,
      name: type.name,
      percentage,
      gradient: `linear-gradient(135deg, ${type.gradientFrom}, ${type.gradientTo})`,
      isBase,
      isPhase,
      animationDelay: index * 100, // Stagger animation
    };
  });
});
</script>

<template>
  <div class="pcm-tower-container">
    <div class="tower-wrapper">
      <div
        v-for="(block, index) in towerBlocks"
        :key="block.id"
        class="tower-block"
        :class="{
          'is-base': block.isBase,
          'is-phase': block.isPhase
        }"
        :style="{
          background: block.gradient,
          '--animation-delay': `${block.animationDelay}ms`,
          '--block-height': `${Math.max(block.percentage / 2, 15)}%`
        }"
      >
        <div class="block-content">
          <div class="block-label">
            <span class="block-name">{{ block.name }}</span>
            <span v-if="block.isBase" class="block-badge">BASE</span>
            <span v-else-if="block.isPhase" class="block-badge">PHASE</span>
          </div>
          <div class="block-percentage">{{ block.percentage }}%</div>
        </div>

        <!-- Tooltip on hover -->
        <div class="block-tooltip">
          <div v-if="block.isBase" class="text-xs font-bold mb-1">
            Ta personnalité de base
          </div>
          <div v-else-if="block.isPhase" class="text-xs font-bold mb-1">
            Ta phase actuelle
          </div>
          <div class="text-xs opacity-90">
            {{ pcmTypes[block.id].subtitle }}
          </div>
        </div>
      </div>
    </div>

    <!-- Legend -->
    <div class="tower-legend">
      <div class="legend-item">
        <div class="legend-icon bg-[#6B46C1]"></div>
        <span class="text-sm text-gray-600">Base = Personnalité innée</span>
      </div>
      <div class="legend-item">
        <div class="legend-icon bg-purple-400"></div>
        <span class="text-sm text-gray-600">Phase = Personnalité adaptée</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pcm-tower-container {
  @apply w-full max-w-md mx-auto p-6;
}

.tower-wrapper {
  @apply relative flex flex-col-reverse gap-2 min-h-[400px] md:min-h-[500px];
}

.tower-block {
  @apply relative rounded-2xl text-white transition-all duration-300 flex items-center justify-center cursor-pointer;
  min-height: 60px;
  height: var(--block-height);
  animation: slideUp 0.6s ease-out;
  animation-delay: var(--animation-delay);
  animation-fill-mode: both;
}

.tower-block:hover {
  @apply scale-105 shadow-2xl z-10;
}

.tower-block.is-base {
  @apply border-4 border-white shadow-2xl;
}

.tower-block.is-phase {
  @apply border-2 border-white shadow-xl;
}

.block-content {
  @apply flex flex-col items-center justify-center text-center px-4 py-3 w-full;
}

.block-label {
  @apply flex items-center gap-2 mb-1;
}

.block-name {
  @apply text-lg md:text-xl font-bold drop-shadow-md;
}

.block-badge {
  @apply text-[10px] font-black bg-white/30 px-2 py-0.5 rounded-full backdrop-blur-sm;
}

.block-percentage {
  @apply text-2xl md:text-3xl font-black drop-shadow-md;
}

.block-tooltip {
  @apply absolute -top-16 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-xl opacity-0 pointer-events-none transition-opacity duration-200 text-center whitespace-nowrap shadow-xl z-20;
}

.tower-block:hover .block-tooltip {
  @apply opacity-100;
}

.tower-legend {
  @apply flex flex-wrap items-center justify-center gap-6 mt-8 pt-6 border-t border-gray-200;
}

.legend-item {
  @apply flex items-center gap-2;
}

.legend-icon {
  @apply w-4 h-4 rounded-full;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .tower-wrapper {
    @apply min-h-[350px];
  }

  .block-name {
    @apply text-base;
  }

  .block-percentage {
    @apply text-xl;
  }
}
</style>
