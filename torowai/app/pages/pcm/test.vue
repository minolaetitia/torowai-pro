<script setup lang="ts">
import { usePcmStore } from '~/stores/pcm';
import { usePremiumStore } from '~/stores/premium';
import { useRouter } from 'vue-router';
import { onMounted, ref, computed } from 'vue';

const pcmStore = usePcmStore();
const premiumStore = usePremiumStore();
const router = useRouter();

const showUnlockModal = ref(false);

onMounted(() => {
  // Check premium status
  premiumStore.checkPremiumStatus();
});

const isLocked = computed(() => !premiumStore.isPcmUnlocked);

const handleNext = () => {
  if (pcmStore.isLastQuestion) {
    pcmStore.calculateResults();
    router.push('/pcm/results');
  } else {
    pcmStore.nextQuestion();
  }
};

const handleBack = () => {
  pcmStore.prevQuestion();
};

const selectAnswer = (value: number) => {
  if (pcmStore.currentQuestion) {
    pcmStore.setAnswer(pcmStore.currentQuestion.id, value);
    // Auto advance after a short delay for better UX
    setTimeout(() => {
      handleNext();
    }, 300);
  }
};
</script>

<template>
  <div class="test-page min-h-screen bg-gray-50 flex flex-col">
    <!-- Locked State -->
    <div v-if="isLocked" class="flex-grow flex items-center justify-center p-6">
      <div class="max-w-2xl w-full">
        <BaseCard class="!p-12 text-center">
          <div class="w-24 h-24 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-6">
            <Icon name="heroicons:lock-closed" class="w-12 h-12 text-amber-600" />
          </div>

          <h1 class="text-3xl font-black text-gray-900 mb-4">
            Module PCM Premium
          </h1>

          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            Le test PCM (Process Communication Model) est un module premium qui te permet de découvrir ton profil de communication complet et avancé.
          </p>

          <div class="bg-purple-50 rounded-2xl p-6 mb-8 text-left">
            <h3 class="font-bold text-purple-900 mb-4 flex items-center gap-2">
              <Icon name="heroicons:sparkles" class="w-5 h-5" />
              Ce que tu vas découvrir :
            </h3>
            <ul class="space-y-3 text-purple-800">
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check-circle" class="w-5 h-5 shrink-0 mt-0.5 text-purple-600" />
                <span>Ton type de personnalité de base et ta phase</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check-circle" class="w-5 h-5 shrink-0 mt-0.5 text-purple-600" />
                <span>Tes canaux de communication préférés</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check-circle" class="w-5 h-5 shrink-0 mt-0.5 text-purple-600" />
                <span>Tes besoins psychologiques fondamentaux</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check-circle" class="w-5 h-5 shrink-0 mt-0.5 text-purple-600" />
                <span>Comment tu réagis sous stress</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check-circle" class="w-5 h-5 shrink-0 mt-0.5 text-purple-600" />
                <span>Des recommandations concrètes pour mieux communiquer</span>
              </li>
            </ul>
          </div>

          <BaseButton
            variant="primary"
            class="px-10 py-4 text-lg mb-4"
            @click="showUnlockModal = true"
          >
            <Icon name="heroicons:lock-open" class="w-5 h-5" />
            Débloquer le module PCM
          </BaseButton>

          <p class="text-sm text-gray-400 mb-6">
            Nous te recommandons de compléter d'abord le test de Tempérament si ce n'est pas encore fait.
          </p>

          <NuxtLink to="/">
            <BaseButton variant="ghost" class="text-gray-500">
              Retour à l'accueil
            </BaseButton>
          </NuxtLink>
        </BaseCard>
      </div>
    </div>

    <!-- Test Interface (when unlocked) -->
    <template v-else>
      <!-- Header with Progress -->
      <header class="bg-white border-b border-gray-100 sticky top-0 z-20">
        <div class="container mx-auto px-6 py-4">
          <div class="flex items-center justify-between mb-2">
            <NuxtLink to="/results" class="text-gray-400 hover:text-[#6B46C1] transition-colors">
              <Icon name="heroicons:x-mark" class="w-6 h-6" />
            </NuxtLink>
            <span class="text-sm font-bold text-gray-500">
              Question {{ pcmStore.currentQuestionIndex + 1 }} sur 36
            </span>
            <div class="w-6"></div> <!-- Spacer -->
          </div>
          <ProgressBar :progress="pcmStore.progress" />
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-grow flex items-center justify-center p-6">
        <div class="w-full max-w-2xl">
          <transition name="page" mode="out-in">
            <BaseCard :key="pcmStore.currentQuestionIndex" class="!p-8 md:!p-12 shadow-xl">
              <QuestionBlock
                v-if="pcmStore.currentQuestion"
                :question="pcmStore.currentQuestion.text"
                :modelValue="pcmStore.answers[pcmStore.currentQuestion.id]"
                @update:modelValue="selectAnswer"
              />

              <template #footer>
                <div class="flex items-center justify-between mt-12 pt-8 border-t border-gray-100">
                  <BaseButton
                    variant="ghost"
                    :disabled="pcmStore.isFirstQuestion"
                    @click="handleBack"
                  >
                    <Icon name="heroicons:arrow-left" class="w-4 h-4" />
                    Précédent
                  </BaseButton>

                  <div class="flex gap-2">
                    <!-- Indicators -->
                    <div
                      v-for="i in 6"
                      :key="i"
                      class="w-1.5 h-1.5 rounded-full"
                      :class="i <= (pcmStore.currentQuestionIndex % 6 + 1) ? 'bg-[#6B46C1]' : 'bg-gray-200'"
                    ></div>
                  </div>

                  <BaseButton
                    variant="primary"
                    :disabled="!pcmStore.answers[pcmStore.currentQuestion?.id]"
                    @click="handleNext"
                  >
                    {{ pcmStore.isLastQuestion ? 'Voir mes résultats' : 'Suivant' }}
                    <Icon v-if="!pcmStore.isLastQuestion" name="heroicons:arrow-right" class="w-4 h-4" />
                  </BaseButton>
                </div>
              </template>
            </BaseCard>
          </transition>
        </div>
      </main>

      <!-- Support Message -->
      <footer class="p-6 text-center text-gray-400 text-xs italic">
        "Ce test va t'aider à mieux comprendre ton mode de communication."
      </footer>
    </template>

    <!-- Unlock Modal -->
    <UnlockModal v-model="showUnlockModal" />
  </div>
</template>

<style scoped>
.test-page {
  background: radial-gradient(circle at top right, #fdfbff 0%, #f7fafc 100%);
}
</style>
