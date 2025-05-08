<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 py-3 px-6 z-50 bg-invoke-bg border-b border-invoke-border/10">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <router-link to="/" class="text-2xl font-bold text-invoke-text hover:text-invoke-accent transition-colors">
          INVK<span class="animate-pulse">_</span>
        </router-link>

        <!-- Mobile menu button -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-invoke-text hover:text-invoke-accent">
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Desktop menu -->
        <div class="hidden md:flex items-center space-x-6">
          <router-link to="/" class="text-sm text-invoke-text/70 hover:text-invoke-accent transition-colors">
            Home
          </router-link>
          <router-link to="/stories" class="text-sm text-invoke-text/70 hover:text-invoke-accent transition-colors">
            Stories
          </router-link>
          <router-link to="/expertise" class="text-sm text-invoke-text/70 hover:text-invoke-accent transition-colors">
            Expertise
          </router-link>
          <router-link to="/team" class="text-sm text-invoke-text/70 hover:text-invoke-accent transition-colors">
            Team
          </router-link>
          <router-link to="/about" class="text-sm text-invoke-text/70 hover:text-invoke-accent transition-colors">
            About
          </router-link>
          <router-link to="/contact" class="text-sm px-4 py-2 border border-invoke-text/20 rounded-xl hover:border-invoke-accent transition-colors">
            Contact
          </router-link>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-show="isMenuOpen" class="md:hidden absolute top-full left-0 right-0 bg-invoke-bg border-b border-invoke-border/10">
        <div class="px-4 py-4 space-y-4">
          <router-link @click="isMenuOpen = false" to="/" class="block text-sm text-invoke-text/70 hover:text-invoke-accent transition-colors">
            Home
          </router-link>
          <router-link @click="isMenuOpen = false" to="/stories" class="block text-sm text-invoke-text/70 hover:text-invoke-accent transition-colors">
            Stories
          </router-link>
          <router-link @click="isMenuOpen = false" to="/expertise" class="block text-sm text-invoke-text/70 hover:text-invoke-accent transition-colors">
            Expertise
          </router-link>
          <router-link @click="isMenuOpen = false" to="/team" class="block text-sm text-invoke-text/70 hover:text-invoke-accent transition-colors">
            Team
          </router-link>
          <router-link @click="isMenuOpen = false" to="/about" class="block text-sm text-invoke-text/70 hover:text-invoke-accent transition-colors">
            About
          </router-link>
          <router-link @click="isMenuOpen = false" to="/contact" class="block text-sm px-4 py-2 border border-invoke-text/20 rounded-xl hover:border-invoke-accent transition-colors w-full text-center">
            Contact
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Router View -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  watch: {
    $route() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: blink 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
