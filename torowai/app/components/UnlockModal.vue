<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePremiumStore } from '~/stores/premium';
import { useRouter } from 'vue-router';

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

const premiumStore = usePremiumStore();
const router = useRouter();

type ModalState = 'idle' | 'loading' | 'success';
const state = ref<ModalState>('idle');

const close = () => {
  if (state.value !== 'loading' && state.value !== 'success') {
    emit('update:modelValue', false);
    // Reset state when closing
    setTimeout(() => {
      state.value = 'idle';
    }, 300);
  }
};

const handleUnlock = async () => {
  state.value = 'loading';

  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Unlock premium features
  premiumStore.unlockPremium(['pcm', 'mission', 'job', 'kaizen']);

  // Show success state
  state.value = 'success';

  // Redirect after 2 seconds
  setTimeout(() => {
    close();
    router.push('/pcm/test');
  }, 2000);
};

const modules = [
  { name: 'Profil PCM', description: 'Ton profil de communication complet' },
  { name: 'Mission de Vie', description: 'Clarifie tes objectifs à long terme' },
  { name: 'Job Aligné', description: 'Trouve la carrière faite pour toi' },
  { name: 'Plan Kaizen', description: 'Feuille de route personnalisée' }
];
</script>

<template>
  <transition name="modal">
    <div
      v-if="modelValue"
      class="modal-backdrop"
      @click.self="close"
    >
      <div class="modal-container">
        <!-- Close button (hidden in loading/success states) -->
        <button
          v-if="state === 'idle'"
          class="close-btn"
          @click="close"
        >
          <Icon name="heroicons:x-mark" class="w-6 h-6" />
        </button>

        <!-- Idle State -->
        <div v-if="state === 'idle'" class="modal-content">
          <!-- Simulation Banner -->
          <div class="simulation-banner">
            <Icon name="heroicons:information-circle" class="w-5 h-5" />
            <span class="font-bold">MODE SIMULATION</span>
            <span class="text-xs">- AUCUN PAIEMENT RÉEL</span>
          </div>

          <!-- Header -->
          <div class="text-center mb-8">
            <div class="icon-wrapper mx-auto mb-4">
              <Icon name="heroicons:lock-open" class="w-10 h-10 text-[#6B46C1]" />
            </div>
            <h2 class="text-3xl font-black text-gray-900 mb-2">
              Débloquer ton profil complet
            </h2>
            <p class="text-gray-500">
              Accède à tous les modules premium pour une analyse approfondie
            </p>
          </div>

          <!-- Modules List -->
          <div class="modules-list">
            <div
              v-for="module in modules"
              :key="module.name"
              class="module-item"
            >
              <Icon name="heroicons:check-circle" class="w-6 h-6 text-emerald-500 shrink-0" />
              <div>
                <div class="font-bold text-gray-900">{{ module.name }}</div>
                <div class="text-sm text-gray-500">{{ module.description }}</div>
              </div>
            </div>
          </div>

          <!-- Pricing -->
          <div class="pricing-section">
            <div class="text-center mb-6">
              <div class="text-gray-400 line-through text-lg">Prix normal: 29€</div>
              <div class="text-3xl font-black text-emerald-600">
                GRATUIT <span class="text-lg font-normal">(démo)</span>
              </div>
            </div>

            <!-- Unlock Button -->
            <BaseButton
              variant="primary"
              class="w-full py-5 text-xl font-bold"
              @click="handleUnlock"
            >
              <Icon name="heroicons:sparkles" class="w-6 h-6" />
              SIMULATION - Débloquer maintenant
            </BaseButton>
          </div>
        </div>

        <!-- Loading State -->
        <div v-if="state === 'loading'" class="modal-content text-center py-12">
          <div class="loading-spinner mx-auto mb-6"></div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Déblocage en cours...</h3>
          <p class="text-gray-500">Un instant, nous préparons ton accès</p>
        </div>

        <!-- Success State -->
        <div v-if="state === 'success'" class="modal-content text-center py-12">
          <div class="success-checkmark mx-auto mb-6">
            <Icon name="heroicons:check-circle" class="w-24 h-24 text-emerald-500" />
          </div>
          <h3 class="text-3xl font-black text-gray-900 mb-4">
            <Icon name="heroicons:sparkles" class="inline w-8 h-8 text-amber-400" />
            Succès!
            <Icon name="heroicons:sparkles" class="inline w-8 h-8 text-amber-400" />
          </h3>
          <p class="text-xl text-gray-600 mb-2">Ton profil complet est débloqué</p>
          <p class="text-sm text-gray-400">Redirection vers le test PCM...</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-backdrop {
  @apply fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm;
}

.modal-container {
  @apply relative w-full max-w-lg bg-white rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto;
}

.close-btn {
  @apply absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors z-10;
}

.modal-content {
  @apply p-8 md:p-10;
}

.simulation-banner {
  @apply flex items-center justify-center gap-2 bg-amber-100 text-amber-800 px-4 py-3 rounded-xl mb-8 text-sm;
}

.icon-wrapper {
  @apply w-20 h-20 rounded-2xl bg-purple-50 flex items-center justify-center;
}

.modules-list {
  @apply space-y-4 mb-8;
}

.module-item {
  @apply flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100;
}

.pricing-section {
  @apply pt-6 border-t border-gray-100;
}

.loading-spinner {
  @apply w-16 h-16 rounded-full border-4 border-purple-100 border-t-[#6B46C1] animate-spin;
}

.success-checkmark {
  @apply animate-bounce;
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  @apply transition-opacity duration-300;
}

.modal-enter-from,
.modal-leave-to {
  @apply opacity-0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  @apply transition-transform duration-300;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  @apply scale-95;
}
</style>
