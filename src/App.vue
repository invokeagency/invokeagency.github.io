<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text">
    <!-- Logo in fixed position -->
    <div class="fixed top-0 left-0 p-6 z-50">
      <router-link to="/" class="text-2xl font-bold hover:text-invoke-accent transition-colors">
        INVK<span class="animate-pulse">_</span>
      </router-link>
    </div>

    <!-- Navigation -->
    <nav class="fixed top-0 right-0 p-6 z-50">
      <div class="flex items-center space-x-6">
        <router-link to="/" class="text-sm hover:text-invoke-accent transition-colors">
          Home
        </router-link>
        <router-link to="/stories" class="text-sm hover:text-invoke-accent transition-colors">
          Stories
        </router-link>
        <router-link to="/team" class="text-sm hover:text-invoke-accent transition-colors">
          Team
        </router-link>
        <router-link to="/about" class="text-sm hover:text-invoke-accent transition-colors">
          About
        </router-link>
        <router-link to="/contact" class="text-sm px-4 py-2 border border-invoke-text/20 rounded-xl hover:border-invoke-accent transition-colors">
          Contact
        </router-link>
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
