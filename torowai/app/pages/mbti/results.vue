<script setup lang="ts">
import { useMBTIStore } from '~/stores/mbti';
import { usePremiumStore } from '~/stores/premium';
import { mbtiTypes, familyDescriptions } from '~/data/mbtiTypes';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const store = useMBTIStore();
const premiumStore = usePremiumStore();
const router = useRouter();
const showUnlockModal = ref(false);

onMounted(() => {
  if (!store.results) {
    // If no results, redirect to landing or test
    router.push('/');
  }
  // Check premium status on mount
  premiumStore.checkPremiumStatus();
});

const typeInfo = store.results ? mbtiTypes[store.results.type] : null;
const familyDesc = store.results ? familyDescriptions[store.results.family] : '';

const handleUnlock = () => {
  showUnlockModal.value = true;
};

const retakeTest = () => {
  store.$reset();
  router.push('/mbti/test');
};
</script>

<template>
  <div v-if="typeInfo && store.results" class="results-page bg-gray-50 min-h-screen py-12 px-6">
    <div class="container mx-auto max-w-5xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <span class="text-[#6B46C1] font-bold tracking-widest uppercase text-sm">Ton profil de personnalité</span>
        <h1 class="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
          <span :class="typeInfo.color.replace('bg-', 'text-')">{{ typeInfo.code }}</span> - {{ typeInfo.name }}
        </h1>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg mb-4">
          {{ typeInfo.shortDescription }}
        </p>
        <div class="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
          <Icon :name="typeInfo.icon" class="w-5 h-5" :class="typeInfo.color.replace('bg-', 'text-')" />
          <span class="font-bold text-gray-700">Famille : {{ typeInfo.family }}</span>
        </div>
      </div>

      <!-- Main Type Card -->
      <BaseCard class="mb-8 !p-0 overflow-hidden">
        <div class="grid md:grid-cols-5">
          <div :class="[typeInfo.color, 'md:col-span-2 p-12 text-white flex flex-col items-center justify-center text-center']">
            <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
              <Icon :name="typeInfo.icon" class="w-12 h-12 text-white" />
            </div>
            <h2 class="text-3xl font-bold mb-2">{{ typeInfo.code }}</h2>
            <p class="text-sm opacity-90 font-medium">{{ typeInfo.name }}</p>
          </div>
          
          <div class="md:col-span-3 p-8 md:p-10 bg-white">
            <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Icon name="heroicons:chart-bar" class="w-5 h-5 text-[#6B46C1]" />
              Tes préférences cognitives
            </h3>
            
            <div class="space-y-5">
              <div v-for="dim in (['EI', 'SN', 'TF', 'JP'] as const)" :key="dim" class="preference-row">
                <div class="flex justify-between text-sm font-bold text-gray-600 mb-2">
                  <span>{{ store.getPreferenceLabel(dim) }}</span>
                  <span>{{ Math.round(store.getPreferenceStrength(dim)) }}%</span>
                </div>
                <div class="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    class="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-[#6B46C1] to-purple-400"
                    :style="{ width: `${store.getPreferenceStrength(dim)}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseCard>

      <!-- Family Description -->
      <BaseCard class="mb-8">
        <div class="flex items-start gap-4">
          <div class="p-3 rounded-xl bg-purple-50">
            <Icon name="heroicons:users" class="w-6 h-6 text-[#6B46C1]" />
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-800 mb-2">
              Famille : {{ typeInfo.family }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ familyDesc }}
            </p>
          </div>
        </div>
      </BaseCard>

      <!-- Freemium Content: Main Traits -->
      <BaseCard class="mb-8">
        <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Icon name="heroicons:star" class="w-5 h-5 text-amber-500" />
          Tes 3 traits principaux
        </h3>
        <div class="grid md:grid-cols-3 gap-4">
          <div 
            v-for="(trait, index) in typeInfo.mainTraits" 
            :key="index"
            class="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl text-center border border-purple-100"
          >
            <div class="text-3xl font-black text-[#6B46C1] mb-2">{{ index + 1 }}</div>
            <div class="text-lg font-bold text-gray-800">{{ trait }}</div>
          </div>
        </div>
      </BaseCard>

      <!-- Premium Feature Teaser -->
      <div v-if="!premiumStore.isPremium" class="mb-8">
        <div @click="handleUnlock" class="cursor-pointer">
          <BaseCard class="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-purple-50">
            <div class="flex items-start gap-4 mb-6">
              <div class="p-3 rounded-xl bg-amber-100">
                <Icon name="heroicons:lock-closed" class="w-6 h-6 text-amber-600" />
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-2">
                  <h3 class="text-xl font-bold text-gray-800">
                    🔓 Débloquer l'analyse complète Premium
                  </h3>
                  <span class="text-xs font-bold bg-amber-500 text-white px-2 py-1 rounded-full uppercase">Premium</span>
                </div>
                <p class="text-gray-600 text-sm">Accède à une analyse exhaustive de ton profil de personnalité</p>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Description complète et détaillée</span>
                </li>
                <li class="flex items-start gap-2">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Forces et zones de développement</span>
                </li>
                <li class="flex items-start gap-2">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Fonctionnement cognitif (stack complet)</span>
                </li>
                <li class="flex items-start gap-2">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Besoins psychologiques spécifiques</span>
                </li>
              </ul>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Comportement sous stress</span>
                </li>
                <li class="flex items-start gap-2">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Relations interpersonnelles et compatibilités</span>
                </li>
                <li class="flex items-start gap-2">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Recommandations professionnelles détaillées</span>
                </li>
                <li class="flex items-start gap-2">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Plan de développement personnel</span>
                </li>
              </ul>
            </div>
          </BaseCard>
        </div>
      </div>

      <!-- Premium Content (only if premium) -->
      <div v-if="premiumStore.isPremium && typeInfo.fullDescription" class="space-y-8">
        <!-- Full Description -->
        <BaseCard>
          <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Icon name="heroicons:document-text" class="w-5 h-5 text-[#6B46C1]" />
            Description complète
          </h3>
          <p class="text-gray-600 leading-relaxed">{{ typeInfo.fullDescription }}</p>
        </BaseCard>

        <!-- Strengths & Challenges -->
        <div class="grid md:grid-cols-2 gap-8">
          <BaseCard>
            <div class="flex items-center gap-3 mb-4">
              <div class="p-2 rounded-lg bg-emerald-50">
                <Icon name="heroicons:sparkles" class="w-5 h-5 text-emerald-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-800">Tes forces</h3>
            </div>
            <ul class="space-y-3">
              <li v-for="strength in typeInfo.strengths" :key="strength" class="flex items-start gap-2 text-gray-600">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{{ strength }}</span>
              </li>
            </ul>
          </BaseCard>

          <BaseCard>
            <div class="flex items-center gap-3 mb-4">
              <div class="p-2 rounded-lg bg-amber-50">
                <Icon name="heroicons:exclamation-triangle" class="w-5 h-5 text-amber-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-800">Points de vigilance</h3>
            </div>
            <ul class="space-y-3">
              <li v-for="challenge in typeInfo.challenges" :key="challenge" class="flex items-start gap-2 text-gray-600">
                <Icon name="heroicons:arrow-right" class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{{ challenge }}</span>
              </li>
            </ul>
          </BaseCard>
        </div>

        <!-- Cognitive Stack -->
        <BaseCard v-if="typeInfo.cognitiveStack">
          <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Icon name="heroicons:cpu-chip" class="w-5 h-5 text-[#6B46C1]" />
            Ton fonctionnement cognitif (Stack)
          </h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <div class="text-sm font-bold text-purple-600 mb-1">Fonction dominante</div>
              <div class="text-gray-800 font-medium">{{ typeInfo.cognitiveStack.dominant }}</div>
            </div>
            <div class="p-4 bg-purple-50/70 rounded-lg border border-purple-100">
              <div class="text-sm font-bold text-purple-600 mb-1">Fonction auxiliaire</div>
              <div class="text-gray-800 font-medium">{{ typeInfo.cognitiveStack.auxiliary }}</div>
            </div>
            <div class="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div class="text-sm font-bold text-gray-600 mb-1">Fonction tertiaire</div>
              <div class="text-gray-700">{{ typeInfo.cognitiveStack.tertiary }}</div>
            </div>
            <div class="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div class="text-sm font-bold text-gray-600 mb-1">Fonction inférieure</div>
              <div class="text-gray-700">{{ typeInfo.cognitiveStack.inferior }}</div>
            </div>
          </div>
        </BaseCard>

        <!-- Career Info -->
        <BaseCard v-if="typeInfo.career">
          <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Icon name="heroicons:briefcase" class="w-5 h-5 text-[#6B46C1]" />
            Recommandations professionnelles
          </h3>
          <div class="space-y-6">
            <div>
              <h4 class="font-bold text-gray-700 mb-3">Environnements de travail favorables</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="env in typeInfo.career.idealEnvironments" 
                  :key="env"
                  class="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                >
                  {{ env }}
                </span>
              </div>
            </div>
            <div>
              <h4 class="font-bold text-gray-700 mb-3">Rôles adaptés</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="role in typeInfo.career.suitedRoles" 
                  :key="role"
                  class="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium"
                >
                  {{ role }}
                </span>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
        <BaseButton variant="ghost" @click="retakeTest">
          <Icon name="heroicons:arrow-path" class="w-4 h-4" />
          Refaire le test
        </BaseButton>
        <BaseButton variant="primary" @click="$router.push('/')">
          Retour à l'accueil
          <Icon name="heroicons:home" class="w-4 h-4" />
        </BaseButton>
      </div>
    </div>

    <!-- Unlock Modal -->
    <UnlockModal 
      v-model="showUnlockModal"
    />
  </div>
</template>

<style scoped>
.preference-row {
  transition: all 0.3s;
}

.preference-row:hover {
  transform: scale(1.02);
}
</style>
