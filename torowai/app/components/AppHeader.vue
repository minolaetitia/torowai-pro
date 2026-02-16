<script setup lang="ts">
const route = useRoute()
const isMenuOpen = ref(false)

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Tempérament', path: '/test' },
  { name: 'MBTI', path: '/mbti/test' },
  { name: 'PCM', path: '/pcm/test' }
]

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Fermer le menu lors du changement de route
watch(() => route.path, () => {
  closeMenu()
})
</script>

<template>
  <header class="app-header">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="logo">
          <span class="logo-text">Torowai</span>
        </NuxtLink>

        <!-- Navigation Desktop -->
        <nav class="nav-menu nav-desktop">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-item"
            :class="{ 'nav-item-active': isActive(item.path) }"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>

        <!-- Burger Button -->
        <button
          class="burger-btn"
          :class="{ 'burger-open': isMenuOpen }"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <span class="burger-line"></span>
          <span class="burger-line"></span>
          <span class="burger-line"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <nav v-if="isMenuOpen" class="nav-mobile">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-item-mobile"
          :class="{ 'nav-item-active': isActive(item.path) }"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>
    </Transition>

    <!-- Overlay -->
    <Transition name="overlay">
      <div v-if="isMenuOpen" class="menu-overlay" @click="closeMenu"></div>
    </Transition>
  </header>
</template>

<style scoped>
.app-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
}

.logo {
  text-decoration: none;
  transition: transform 0.2s ease;
  z-index: 52;
  position: relative;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.02em;
}

/* Navigation Desktop */
.nav-menu {
  display: flex;
  gap: 0.5rem;
}

.nav-desktop {
  display: flex;
}

.nav-item {
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  position: relative;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.nav-item-active {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 600;
}

.nav-item-active::after {
  content: '';
  position: absolute;
  bottom: 0.25rem;
  left: 50%;
  transform: translateX(-50%);
  width: 1.5rem;
  height: 2px;
  background: white;
  border-radius: 1px;
}

/* Burger Button */
.burger-btn {
  display: none;
  flex-direction: column;
  gap: 0.375rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 52;
  position: relative;
}

.burger-line {
  width: 1.5rem;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.burger-open .burger-line:nth-child(1) {
  transform: rotate(45deg) translate(0.375rem, 0.375rem);
}

.burger-open .burger-line:nth-child(2) {
  opacity: 0;
}

.burger-open .burger-line:nth-child(3) {
  transform: rotate(-45deg) translate(0.375rem, -0.375rem);
}

/* Mobile Menu */
.nav-mobile {
  position: fixed;
  top: 4rem;
  right: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  width: 16rem;
  max-width: 80vw;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  z-index: 51;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
}

.nav-item-mobile {
  padding: 1rem 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.nav-item-mobile:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.nav-item-mobile.nav-item-active {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-weight: 600;
  border-left-color: white;
}

/* Overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 49;
}

/* Transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: transform 0.3s ease-out;
}

.mobile-menu-enter-from {
  transform: translateX(100%);
}

.mobile-menu-leave-to {
  transform: translateX(100%);
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }
  
  .burger-btn {
    display: flex;
  }
  
  .logo-text {
    font-size: 1.25rem;
  }
}
</style>
