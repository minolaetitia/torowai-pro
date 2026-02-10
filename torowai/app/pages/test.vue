<script setup lang="ts">
import { useTemperamentStore } from '~/stores/temperament';
import { useRouter } from 'vue-router';

const store = useTemperamentStore();
const router = useRouter();

const handleNext = () => {
  if (store.isLastQuestion) {
    store.calculateResults();
    router.push('/results');
  } else {
    store.nextQuestion();
  }
};

const handleBack = () => {
  store.prevQuestion();
};

const selectAnswer = (value: number) => {
  if (store.currentQuestion) {
    store.setAnswer(store.currentQuestion.id, value);
    // Auto advance after a short delay for better UX
    setTimeout(() => {
      handleNext();
    }, 300);
  }
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
      <div class="w-full max-w-2xl">
        <transition name="page" mode="out-in">
          <BaseCard :key="store.currentQuestionIndex" class="!p-8 md:!p-12 shadow-xl">
            <QuestionBlock
              v-if="store.currentQuestion"
              :question="store.currentQuestion.text"
              :modelValue="store.answers[store.currentQuestion.id]"
              @update:modelValue="selectAnswer"
            />

            <template #footer>
              <div class="flex items-center justify-between mt-12 pt-8 border-t border-gray-100">
                <BaseButton
                  variant="ghost"
                  :disabled="store.isFirstQuestion"
                  @click="handleBack"
                >
                  <Icon name="heroicons:arrow-left" class="w-4 h-4" />
                  Précédent
                </BaseButton>

                <div class="flex gap-2">
                   <!-- Indicators -->
                   <div
                    v-for="i in 5"
                    :key="i"
                    class="w-1.5 h-1.5 rounded-full"
                    :class="i <= (store.currentQuestionIndex % 5 + 1) ? 'bg-[#6B46C1]' : 'bg-gray-200'"
                   ></div>
                </div>

                <BaseButton
                  variant="primary"
                  :disabled="!store.answers[store.currentQuestion?.id]"
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
      "Prends ton temps, il n'y a pas de mauvaises réponses."
    </footer>
  </div>
</template>

<style scoped>
.test-page {
  background: radial-gradient(circle at top right, #fdfbff 0%, #f7fafc 100%);
}
</style>
