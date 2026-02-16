<script setup lang="ts">
import { useMBTIStore } from '~/stores/mbti';
import { useRouter } from 'vue-router';

const store = useMBTIStore();
const router = useRouter();

const handleNext = () => {
  if (store.isLastQuestion) {
    store.calculateResults();
    router.push('/mbti/results');
  } else {
    store.nextQuestion();
  }
};

const handleBack = () => {
  store.prevQuestion();
};

const selectAnswer = (value: 'A' | 'B' | 'C') => {
  if (store.currentQuestion) {
    store.setAnswer(store.currentQuestion.id, value);
    // Auto advance after a short delay for better UX
    setTimeout(() => {
      handleNext();
    }, 300);
  }
};

const getCurrentAnswer = () => {
  if (!store.currentQuestion) return null;
  return store.answers[store.currentQuestion.id];
};
</script>

<template>
  <div class="test-page min-h-screen bg-gray-50 flex flex-col">
    <!-- Header with Progress -->
    <header class="bg-white border-b border-gray-100 sticky top-0 z-20">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between mb-2">
          <NuxtLink to="/" class="text-gray-400 hover:text-[#6B46C1] transition-colors">
            <Icon name="heroicons:x-mark" class="w-6 h-6" />
          </NuxtLink>
          <span class="text-sm font-bold text-gray-500">
            Question {{ store.currentQuestionIndex + 1 }} sur 20
          </span>
          <div class="w-6"></div> <!-- Spacer -->
        </div>
        <ProgressBar :progress="store.progress" />
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow flex items-center justify-center p-6">
      <div class="w-full max-w-3xl">
        <transition name="page" mode="out-in">
          <BaseCard :key="store.currentQuestionIndex" class="!p-8 md:!p-12 shadow-xl">
            <div v-if="store.currentQuestion">
              <!-- Question Title -->
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                {{ store.currentQuestion.text }}
              </h2>

              <!-- Options -->
              <div class="space-y-4 mb-8">
                <button
                  v-for="option in ['A', 'B', 'C']"
                  :key="option"
                  @click="selectAnswer(option as 'A' | 'B' | 'C')"
                  class="w-full p-6 text-left rounded-xl border-2 transition-all duration-300"
                  :class="[
                    getCurrentAnswer() === option
                      ? 'border-[#6B46C1] bg-purple-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-sm'
                  ]"
                >
                  <div class="flex items-start gap-4">
                    <div
                      class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold transition-colors"
                      :class="[
                        getCurrentAnswer() === option
                          ? 'bg-[#6B46C1] text-white'
                          : 'bg-gray-100 text-gray-600'
                      ]"
                    >
                      {{ option }}
                    </div>
                    <p
                      class="flex-1 text-gray-700 leading-relaxed"
                      :class="[getCurrentAnswer() === option ? 'font-medium' : '']"
                    >
                      {{ store.currentQuestion.options[option as 'A' | 'B' | 'C'] }}
                    </p>
                  </div>
                </button>
              </div>

              <!-- Dimension indicator -->
              <div class="text-center text-sm text-gray-500 mb-4">
                <span class="font-medium">
                  Dimension : 
                  <span class="text-[#6B46C1]">
                    {{ store.currentQuestion.dimension === 'EI' ? 'Extraversion / Introversion' : '' }}
                    {{ store.currentQuestion.dimension === 'SN' ? 'Sensation / Intuition' : '' }}
                    {{ store.currentQuestion.dimension === 'TF' ? 'Pensée / Sentiment' : '' }}
                    {{ store.currentQuestion.dimension === 'JP' ? 'Jugement / Perception' : '' }}
                  </span>
                </span>
              </div>
            </div>

            <template #footer>
              <div class="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                <BaseButton
                  variant="ghost"
                  :disabled="store.isFirstQuestion"
                  @click="handleBack"
                >
                  <Icon name="heroicons:arrow-left" class="w-4 h-4" />
                  Précédent
                </BaseButton>

                <div class="flex gap-2">
                  <!-- Indicators by dimension -->
                  <div
                    v-for="i in 5"
                    :key="i"
                    class="w-1.5 h-1.5 rounded-full"
                    :class="i <= (store.currentQuestionIndex % 5 + 1) ? 'bg-[#6B46C1]' : 'bg-gray-200'"
                  ></div>
                </div>

                <BaseButton
                  variant="primary"
                  :disabled="!getCurrentAnswer()"
                  @click="handleNext"
                >
                  {{ store.isLastQuestion ? 'Voir mes résultats' : 'Suivant' }}
                  <Icon v-if="!store.isLastQuestion" name="heroicons:arrow-right" class="w-4 h-4" />
                </BaseButton>
              </div>
            </template>
          </BaseCard>
        </transition>
      </div>
    </main>

    <!-- Support Message -->
    <footer class="p-6 text-center text-gray-400 text-xs italic">
      "Réponds spontanément, choisis l'option qui te correspond le mieux."
    </footer>
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
