<script setup lang="ts">
// No complex logic needed for landing page
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
          Découvre ton tempérament et ton mode de fonctionnement naturel grâce à notre approche bienveillante et scientifique.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink to="/test">
            <BaseButton variant="primary" class="px-10 py-4 text-lg">
              Découvrir mon tempérament
            </BaseButton>
          </NuxtLink>
          <BaseButton variant="ghost" class="text-gray-500">
            En savoir plus
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits-section bg-white py-20">
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

    <!-- Pedagogy Section -->
    <section class="pedagogy-section py-20 bg-[#6B46C1] text-white overflow-hidden relative">
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Une approche humaine et bienveillante</h2>
          <p class="text-purple-100 text-lg mb-10 leading-relaxed">
            Ce test n’est pas un diagnostic médical. C'est un outil d'exploration de soi conçu pour t'apporter de la clarté, sans jamais t'enfermer dans une étiquette rigide. Nous croyons en ton potentiel d'évolution.
          </p>
          <NuxtLink to="/test">
            <BaseButton variant="outline" class="!border-white !text-white hover:!bg-white hover:!text-purple-900 px-10">
              Commencer le test gratuitement
            </BaseButton>
          </NuxtLink>
        </div>
      </div>
      <!-- Decorative circles -->
      <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-50"></div>
    </section>

    <!-- Footer -->
    <footer class="py-10 text-center text-gray-400 text-sm">
      <p>&copy; 2025 Torowai - Le guide intelligent pour trouver ton chemin.</p>
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
