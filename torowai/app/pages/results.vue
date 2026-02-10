<script setup lang="ts">
import { useTemperamentStore } from '~/stores/temperament';
import { temperaments } from '~/data/temperaments';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const store = useTemperamentStore();
const router = useRouter();

onMounted(() => {
  if (!store.results) {
    // If no results, redirect to landing or test
    router.push('/');
  }
});

const primary = store.results ? temperaments[store.results.primary] : null;
const secondary = store.results ? temperaments[store.results.secondary] : null;

const getMaxScore = () => {
  if (!store.results) return 25;
  return Math.max(...Object.values(store.results.scores));
};

const getScorePercentage = (score: number) => {
  // Max possible score per category is 5 questions * 5 = 25
  return (score / 25) * 100;
};
</script>

<template>
  <div v-if="primary && secondary" class="results-page bg-gray-50 min-h-screen py-12 px-6">
    <div class="container mx-auto max-w-4xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <span class="text-[#6B46C1] font-bold tracking-widest uppercase text-sm">Tes résultats</span>
        <h1 class="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
          Ton profil : <span class="text-[#6B46C1]">{{ primary.name }}</span>
        </h1>
        <p class="text-gray-500 max-w-2xl mx-auto text-lg">
          Ton tempérament dominant est complété par une forte influence du profil <strong>{{ secondary.name }}</strong>.
        </p>
      </div>

      <!-- Main Result Card -->
      <BaseCard class="mb-12 !p-0">
        <div class="grid md:grid-cols-2">
          <div :class="[primary.color, 'p-12 text-white flex flex-col items-center justify-center text-center']">
            <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
              <Icon :name="primary.icon" class="w-12 h-12 text-white" />
            </div>
            <h2 class="text-3xl font-bold mb-4">{{ primary.name }}</h2>
            <p class="text-indigo-50 leading-relaxed">{{ primary.description }}</p>
          </div>
          
          <div class="p-10 md:p-12 bg-white">
            <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Icon name="heroicons:presentation-chart-bar" class="w-5 h-5 text-[#6B46C1]" />
              Répartition de tes scores
            </h3>
            
            <div class="space-y-6">
              <div v-for="(score, cat) in store.results?.scores" :key="cat" class="score-row">
                <div class="flex justify-between text-sm font-bold text-gray-600 mb-2 capitalize">
                  <span>{{ temperaments[cat].name }}</span>
                  <span>{{ Math.round(getScorePercentage(score)) }}%</span>
                </div>
                <div class="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    class="h-full rounded-full transition-all duration-1000"
                    :class="temperaments[cat].color"
                    :style="{ width: `${getScorePercentage(score)}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseCard>

      <!-- Detailed Analysis -->
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <div class="analysis-card">
          <div class="analysis-icon text-emerald-600 bg-emerald-50">
            <Icon name="heroicons:star" />
          </div>
          <h3 class="analysis-title">Tes Forces</h3>
          <ul class="analysis-list">
            <li v-for="strength in primary.strengths" :key="strength">{{ strength }}</li>
          </ul>
        </div>

        <div class="analysis-card">
          <div class="analysis-icon text-amber-600 bg-amber-50">
            <Icon name="heroicons:exclamation-triangle" />
          </div>
          <h3 class="analysis-title">Points de Vigilance</h3>
          <ul class="analysis-list">
            <li v-for="challenge in primary.challenges" :key="challenge">{{ challenge }}</li>
          </ul>
        </div>

        <div class="analysis-card">
          <div class="analysis-icon text-blue-600 bg-blue-50">
            <Icon name="heroicons:sparkles" />
          </div>
          <h3 class="analysis-title">Besoins Clés</h3>
          <ul class="analysis-list">
            <li v-for="need in primary.needs" :key="need">{{ need }}</li>
          </ul>
        </div>
      </div>

      <!-- Secondary Info -->
      <BaseCard class="mb-16 bg-purple-50 border-purple-100">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-sm shrink-0">
             <Icon :name="secondary.icon" class="w-10 h-10 text-[#6B46C1]" />
          </div>
          <div>
            <h3 class="text-xl font-bold text-purple-900 mb-2">L'influence du {{ secondary.name }}</h3>
            <p class="text-purple-700 leading-relaxed">
              En plus de ton tempérament dominant, tu possèdes des traits caractéristiques du {{ secondary.name.toLowerCase() }}. Cela signifie que dans certaines situations, notamment {{ secondary.id === 'analyste' ? 'lors de tâches demandant de la réflexion' : 'lors de tes interactions sociales' }}, tu sauras faire preuve de {{ secondary.strengths[0].toLowerCase() }}.
            </p>
          </div>
        </div>
      </BaseCard>

      <!-- Upsell Section -->
      <div class="upsell-section">
        <div class="text-center mb-10">
          <h2 class="text-2xl font-bold text-gray-900">Pour aller plus loin...</h2>
          <p class="text-gray-500">Débloque ton plein potentiel avec nos modules avancés.</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <LockedCard 
            title="Profil PCM" 
            description="Découvre ton profil de communication complet." 
            icon="heroicons:chat-bubble-left-right"
          />
          <LockedCard 
            title="Mission de Vie" 
            description="Clarifie tes objectifs à long terme." 
            icon="heroicons:flag"
          />
          <LockedCard 
            title="Job Aligné" 
            description="Trouve la carrière qui te correspond vraiment." 
            icon="heroicons:briefcase"
          />
          <LockedCard 
            title="Plan Kaizen" 
            description="Une feuille de route personnalisée." 
            icon="heroicons:map"
          />
        </div>

        <div class="text-center">
          <BaseButton variant="primary" class="px-12 py-5 text-xl shadow-xl shadow-purple-200">
            Débloquer mon profil complet
          </BaseButton>
        </div>
      </div>
      
      <!-- Reset -->
      <div class="mt-20 text-center">
        <BaseButton variant="ghost" class="text-gray-400 text-sm" @click="store.resetTest(); router.push('/test')">
          Recommencer le test
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.analysis-card {
  @apply bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md;
}

.analysis-icon {
  @apply w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-6;
}

.analysis-title {
  @apply text-lg font-black text-gray-900 mb-4;
}

.analysis-list {
  @apply space-y-3 text-gray-600 text-sm;
}

.analysis-list li {
  @apply flex items-start gap-2 before:content-['•'] before:text-purple-400 before:font-bold;
}
</style>
