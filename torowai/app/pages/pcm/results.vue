<script setup lang="ts">
import { usePcmStore } from '~/stores/pcm';
import { pcmTypes } from '~/data/pcmTypes';
import { useRouter } from 'vue-router';
import { onMounted, computed } from 'vue';

const pcmStore = usePcmStore();
const router = useRouter();

onMounted(() => {
  if (!pcmStore.results) {
    // If no results, redirect to test
    router.push('/pcm/test');
  }
});

const baseType = computed(() =>
  pcmStore.results ? pcmTypes[pcmStore.results.base] : null
);

const phaseType = computed(() =>
  pcmStore.results ? pcmTypes[pcmStore.results.phase] : null
);
</script>

<template>
  <div v-if="baseType && phaseType" class="results-page bg-gray-50 min-h-screen py-12 px-6">
    <div class="container mx-auto max-w-5xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="flex items-center justify-center gap-2 mb-4">
          <span class="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wide">
            <Icon name="heroicons:lock-open" class="inline w-3 h-3" />
            Premium
          </span>
          <span class="text-[#6B46C1] font-bold tracking-widest uppercase text-sm">Profil PCM</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
          Ton profil : <span :class="baseType.color" class="text-transparent bg-clip-text" :style="{backgroundImage: baseType.gradient}">{{ baseType.name }}</span>
        </h1>
        <p class="text-gray-500 max-w-2xl mx-auto text-lg">
          {{ baseType.subtitle }} • Complété par une phase {{ phaseType.name }}
        </p>
      </div>

      <!-- Main Hero Card -->
      <BaseCard class="mb-12 !p-0 overflow-hidden">
        <div class="grid md:grid-cols-5">
          <div
            class="md:col-span-2 p-12 text-white flex flex-col items-center justify-center text-center"
            :style="{background: baseType.gradient}"
          >
            <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
              <Icon :name="baseType.icon" class="w-12 h-12 text-white" />
            </div>
            <h2 class="text-3xl font-bold mb-2">{{ baseType.name }}</h2>
            <p class="text-white/90 text-sm font-medium mb-4">{{ baseType.subtitle }}</p>
            <p class="text-white/80 leading-relaxed">{{ baseType.description }}</p>
          </div>

          <div class="md:col-span-3 p-10 md:p-12 bg-white">
            <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Icon name="heroicons:chart-bar" class="w-5 h-5 text-[#6B46C1]" />
              Ta Tour PCM
            </h3>
            <PcmTowerVisualizer v-if="pcmStore.results" :results="pcmStore.results" />
          </div>
        </div>
      </BaseCard>

      <!-- Communication Section -->
      <BaseCard class="mb-8">
        <div class="flex items-start gap-4 mb-6">
          <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
            <Icon name="heroicons:chat-bubble-left-right" class="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 class="text-2xl font-black text-gray-900 mb-2">Communication</h3>
            <p class="text-gray-600">Ton style naturel de communication</p>
          </div>
        </div>

        <div class="space-y-6">
          <div class="bg-gray-50 rounded-xl p-6">
            <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Icon name="heroicons:megaphone" class="w-4 h-4 text-[#6B46C1]" />
              Style
            </h4>
            <p class="text-gray-700">{{ baseType.communication.style }}</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-gray-50 rounded-xl p-6">
              <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Icon name="heroicons:arrow-trending-up" class="w-4 h-4 text-[#6B46C1]" />
                Canaux PCM
              </h4>
              <ul class="space-y-2">
                <li v-for="channel in baseType.communication.channels" :key="channel" class="flex items-start gap-2 text-gray-700 text-sm">
                  <Icon name="heroicons:check" class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{{ channel }}</span>
                </li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-xl p-6">
              <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Icon name="heroicons:key" class="w-4 h-4 text-[#6B46C1]" />
                Mots-clés
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="keyword in baseType.communication.keywords"
                  :key="keyword"
                  class="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                >
                  {{ keyword }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </BaseCard>

      <!-- Motivation Section -->
      <BaseCard class="mb-8">
        <div class="flex items-start gap-4 mb-6">
          <div class="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
            <Icon name="heroicons:bolt" class="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 class="text-2xl font-black text-gray-900 mb-2">Motivation</h3>
            <p class="text-gray-600">Ce qui t'énergise et te motive</p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
            <h4 class="font-bold text-emerald-900 mb-4 flex items-center gap-2">
              <Icon name="heroicons:heart" class="w-4 h-4" />
              Besoins psychologiques
            </h4>
            <ul class="space-y-3">
              <li v-for="need in baseType.motivation.needs" :key="need" class="flex items-start gap-2 text-emerald-800">
                <Icon name="heroicons:check-circle" class="w-5 h-5 shrink-0 mt-0.5" />
                <span>{{ need }}</span>
              </li>
            </ul>
          </div>

          <div class="bg-amber-50 rounded-xl p-6 border border-amber-100">
            <h4 class="font-bold text-amber-900 mb-4 flex items-center gap-2">
              <Icon name="heroicons:sparkles" class="w-4 h-4" />
              Énergiseurs
            </h4>
            <ul class="space-y-3">
              <li v-for="energizer in baseType.motivation.energizers" :key="energizer" class="flex items-start gap-2 text-amber-800">
                <Icon name="heroicons:lightning-bolt" class="w-5 h-5 shrink-0 mt-0.5" />
                <span>{{ energizer }}</span>
              </li>
            </ul>
          </div>
        </div>
      </BaseCard>

      <!-- Stress Management Section -->
      <BaseCard class="mb-8">
        <div class="flex items-start gap-4 mb-6">
          <div class="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
            <Icon name="heroicons:exclamation-triangle" class="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 class="text-2xl font-black text-gray-900 mb-2">Gestion du Stress</h3>
            <p class="text-gray-600">Comment tu réagis sous pression</p>
          </div>
        </div>

        <div class="space-y-6">
          <div class="bg-purple-50 rounded-xl p-6 border border-purple-100">
            <h4 class="font-bold text-purple-900 mb-2">Driver : {{ baseType.stress.driver }}</h4>
            <p class="text-purple-700 text-sm">
              C'est le message automatique qui te pousse à agir d'une certaine manière, surtout sous pression.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
              <h4 class="font-bold text-yellow-900 mb-3 text-sm">Stress 1er degré</h4>
              <ul class="space-y-2">
                <li v-for="behavior in baseType.stress.firstDegree" :key="behavior" class="text-yellow-800 text-sm flex items-start gap-1">
                  <span class="shrink-0">•</span>
                  <span>{{ behavior }}</span>
                </li>
              </ul>
            </div>

            <div class="bg-red-50 rounded-xl p-6 border border-red-100">
              <h4 class="font-bold text-red-900 mb-3 text-sm">Stress 2ème degré</h4>
              <ul class="space-y-2">
                <li v-for="behavior in baseType.stress.secondDegree" :key="behavior" class="text-red-800 text-sm flex items-start gap-1">
                  <span class="shrink-0">•</span>
                  <span>{{ behavior }}</span>
                </li>
              </ul>
            </div>

            <div class="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
              <h4 class="font-bold text-emerald-900 mb-3 text-sm">Comment gérer</h4>
              <ul class="space-y-2">
                <li v-for="tip in baseType.stress.management" :key="tip" class="text-emerald-800 text-sm flex items-start gap-1">
                  <span class="shrink-0">✓</span>
                  <span>{{ tip }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </BaseCard>

      <!-- Phase Type Info -->
      <BaseCard class="mb-8 bg-purple-50 border-purple-100">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div
            class="w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg shrink-0"
            :style="{background: phaseType.gradient}"
          >
            <Icon :name="phaseType.icon" class="w-12 h-12 text-white" />
          </div>
          <div class="flex-grow">
            <h3 class="text-2xl font-bold text-purple-900 mb-2 flex items-center gap-2">
              Ta Phase : {{ phaseType.name }}
            </h3>
            <p class="text-purple-700 leading-relaxed mb-4">
              En plus de ta personnalité de base, tu possèdes des traits caractéristiques du {{ phaseType.name }}.
              C'est la « phase » dans laquelle tu fonctionnes actuellement, celle que tu as développée pour t'adapter à ton environnement.
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="strength in phaseType.strengths.slice(0, 3)"
                :key="strength"
                class="px-3 py-1 bg-white rounded-full text-sm font-medium text-purple-700"
              >
                {{ strength }}
              </span>
            </div>
          </div>
        </div>
      </BaseCard>

      <!-- Strengths & Challenges -->
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <BaseCard class="bg-emerald-50 border-emerald-100">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
              <Icon name="heroicons:star" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-xl font-black text-emerald-900">Tes Forces</h3>
          </div>
          <ul class="space-y-3">
            <li v-for="strength in baseType.strengths" :key="strength" class="flex items-start gap-3 text-emerald-800">
              <Icon name="heroicons:check-badge" class="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
              <span>{{ strength }}</span>
            </li>
          </ul>
        </BaseCard>

        <BaseCard class="bg-amber-50 border-amber-100">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
              <Icon name="heroicons:shield-exclamation" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-xl font-black text-amber-900">Points de Vigilance</h3>
          </div>
          <ul class="space-y-3">
            <li v-for="challenge in baseType.challenges" :key="challenge" class="flex items-start gap-3 text-amber-800">
              <Icon name="heroicons:exclamation-circle" class="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
              <span>{{ challenge }}</span>
            </li>
          </ul>
        </BaseCard>
      </div>

      <!-- Work Style -->
      <BaseCard class="mb-12">
        <div class="flex items-start gap-4 mb-6">
          <div class="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
            <Icon name="heroicons:briefcase" class="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 class="text-2xl font-black text-gray-900 mb-2">Style de Travail Idéal</h3>
            <p class="text-gray-600">L'environnement dans lequel tu t'épanouis le mieux</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="style in baseType.workStyle"
            :key="style"
            class="bg-indigo-50 rounded-xl p-4 border border-indigo-100 text-center"
          >
            <Icon name="heroicons:check-circle" class="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <p class="text-indigo-900 font-medium text-sm">{{ style }}</p>
          </div>
        </div>
      </BaseCard>

      <!-- Navigation -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <NuxtLink to="/results">
          <BaseButton variant="outline" class="px-8">
            <Icon name="heroicons:arrow-left" class="w-4 h-4" />
            Retour au Tempérament
          </BaseButton>
        </NuxtLink>
        <BaseButton variant="ghost" class="text-gray-400" @click="pcmStore.resetTest(); router.push('/pcm/test')">
          Recommencer le test PCM
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.results-page {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
