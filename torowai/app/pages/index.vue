<script setup lang="ts">
const scrollToBenefits = () => {
  const benefitsSection = document.getElementById('benefits-section')
  if (benefitsSection) {
    benefitsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container mx-auto px-6 py-20 text-center max-w-4xl">
        <span class="tagline">Torowai : Le guide intelligent</span>
        <h1 class="hero-title">
          Mieux te comprendre pour <span class="text-[#6B46C1]">mieux avancer</span>
        </h1>
        <p class="hero-subtitle">
          Découvre ton tempérament et ton type de personnalité grâce à notre approche bienveillante et scientifique.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <BaseButton variant="ghost" class="text-gray-500" @click="scrollToBenefits">
            Découvrir les modules
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits-section" class="benefits-section bg-white py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">Pourquoi faire ce test ?</h2>
        </div>
        
        <div class="grid md:grid-cols-3 gap-12">
          <div class="benefit-card">
            <div class="icon-box bg-purple-50">
              <Icon name="heroicons:light-bulb" class="text-purple-600" />
            </div>
            <h3 class="benefit-title">Comprendre ton fonctionnement</h3>
            <p class="benefit-desc">Identifie tes mécanismes naturels de pensée et d'action pour mieux gérer ton énergie.</p>
          </div>
          
          <div class="benefit-card">
            <div class="icon-box bg-blue-50">
              <Icon name="heroicons:check-circle" class="text-blue-600" />
            </div>
            <h3 class="benefit-title">Mieux décider</h3>
            <p class="benefit-desc">Prends des décisions alignées avec tes besoins psychologiques fondamentaux.</p>
          </div>
          
          <div class="benefit-card">
            <div class="icon-box bg-emerald-50">
              <Icon name="heroicons:map" class="text-emerald-600" />
            </div>
            <h3 class="benefit-title">Trouver ta direction</h3>
            <p class="benefit-desc">Clarifie ton chemin personnel et professionnel en t'appuyant sur tes forces innées.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Modules Section -->
    <section class="modules-section py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <span class="tagline !bg-purple-50 !text-purple-700">Nos modules d'évaluation</span>
          <h2 class="section-title mt-4 mb-4">Deux approches complémentaires</h2>
          <p class="text-gray-500 max-w-2xl mx-auto">
            Chaque module explore un aspect différent de ta personnalité pour une compréhension globale et profonde.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Module 1: Tempérament -->
          <BaseCard class="!p-0 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Icon name="heroicons:fire" class="w-8 h-8" />
                </div>
                <div>
                  <span class="text-sm opacity-90 font-medium">Module 1</span>
                  <h3 class="text-2xl font-bold">Tempéraments</h3>
                </div>
              </div>
              <p class="text-purple-50 mb-6 leading-relaxed">
                Découvre ton énergie naturelle et ta dynamique comportementale selon la théorie des 4 tempéraments d'Hippocrate.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">Colérique</span>
                <span class="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">Sanguin</span>
                <span class="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">Mélancolique</span>
                <span class="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">Flegmatique</span>
              </div>
            </div>
            <div class="p-6 bg-white">
              <div class="flex items-center gap-3 text-sm text-gray-600 mb-4">
                <div class="flex items-center gap-1">
                  <Icon name="heroicons:clock" class="w-4 h-4" />
                  <span>10 min</span>
                </div>
                <div class="flex items-center gap-1">
                  <Icon name="heroicons:document-text" class="w-4 h-4" />
                  <span>20 questions</span>
                </div>
                <div class="flex items-center gap-1">
                  <Icon name="heroicons:sparkles" class="w-4 h-4 text-green-500" />
                  <span class="text-green-600 font-medium">Freemium</span>
                </div>
              </div>
              <NuxtLink to="/test">
                <BaseButton variant="primary" class="w-full">
                  Commencer le test
                  <Icon name="heroicons:arrow-right" class="w-4 h-4" />
                </BaseButton>
              </NuxtLink>
            </div>
          </BaseCard>

          <!-- Module 2: MBTI -->
          <BaseCard class="!p-0 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="bg-gradient-to-br from-teal-500 to-cyan-600 p-8 text-white">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Icon name="heroicons:puzzle-piece" class="w-8 h-8" />
                </div>
                <div>
                  <span class="text-sm opacity-90 font-medium">Module 2</span>
                  <h3 class="text-2xl font-bold">Profil MBTI</h3>
                </div>
              </div>
              <p class="text-teal-50 mb-6 leading-relaxed">
                Identifie ton type de personnalité parmi les 16 profils MBTI et comprends tes préférences cognitives.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">Analystes</span>
                <span class="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">Diplomates</span>
                <span class="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">Sentinelles</span>
                <span class="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">Explorateurs</span>
              </div>
            </div>
            <div class="p-6 bg-white">
              <div class="flex items-center gap-3 text-sm text-gray-600 mb-4">
                <div class="flex items-center gap-1">
                  <Icon name="heroicons:clock" class="w-4 h-4" />
                  <span>10 min</span>
                </div>
                <div class="flex items-center gap-1">
                  <Icon name="heroicons:document-text" class="w-4 h-4" />
                  <span>20 questions</span>
                </div>
                <div class="flex items-center gap-1">
                  <Icon name="heroicons:sparkles" class="w-4 h-4 text-green-500" />
                  <span class="text-green-600 font-medium">Freemium</span>
                </div>
              </div>
              <NuxtLink to="/mbti/test">
                <BaseButton variant="primary" class="w-full">
                  Commencer le test
                  <Icon name="heroicons:arrow-right" class="w-4 h-4" />
                </BaseButton>
              </NuxtLink>
            </div>
          </BaseCard>
        </div>

        <div class="text-center mt-12">
          <p class="text-gray-500 text-sm italic">
            💡 Ces deux modules sont complémentaires et t'offrent une vision complète de ta personnalité
          </p>
        </div>
      </div>
    </section>

    <!-- Pedagogy Section -->
    <section class="pedagogy-section py-20 bg-[#6B46C1] text-white overflow-hidden relative">
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Une approche humaine et bienveillante</h2>
          <p class="text-purple-100 text-lg mb-10 leading-relaxed">
            Ce test n’est pas un diagnostic médical. C'est un outil d'exploration de soi conçu pour t'apporter de la clarté, sans jamais t'enfermer dans une étiquette rigide. Nous croyons en ton potentiel d'évolution.
          </p>
          <BaseButton variant="outline" class="!border-white !text-white hover:!bg-white hover:!text-purple-900 px-10" @click="scrollToBenefits">
            Découvrir les modules
          </BaseButton>
        </div>
      </div>
      <!-- Decorative circles -->
      <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-50"></div>
    </section>

    <!-- Footer -->
    <footer class="py-10 text-center text-gray-400 text-sm">
      <p>&copy; {{ new Date().getFullYear() }} Torowai - Le guide intelligent pour trouver ton chemin.</p>
      <p class="mt-2">&copy; Fidèle Rabearimanana</p>
    </footer>
  </div>
</template>

<style scoped>
.hero-section {
  @apply bg-gradient-to-b from-purple-50 to-white;
}

.tagline {
  @apply inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-6 tracking-wide;
}

.hero-title {
  @apply text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-[1.1];
}

.hero-subtitle {
  @apply text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed;
}

.section-title {
  @apply text-3xl font-bold text-gray-900;
}

.benefit-card {
  @apply flex flex-col items-center text-center p-8;
}

.icon-box {
  @apply w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl;
}

.benefit-title {
  @apply text-xl font-bold text-gray-900 mb-4;
}

.benefit-desc {
  @apply text-gray-500 leading-relaxed;
}
</style>
