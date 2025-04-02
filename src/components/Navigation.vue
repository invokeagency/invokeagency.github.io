<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-invoke-bg/80 backdrop-blur-sm border-b border-invoke-border/10">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2">
        <img src="/src/assets/images/logo.svg" alt="Invoke AI Logo" class="h-8 w-auto" />
      </router-link>

      <!-- Navigation Links -->
      <div class="flex items-center gap-6">
        <router-link to="/story" class="text-invoke-text/70 hover:text-invoke-accent transition-colors">Story</router-link>
        <router-link to="/expertise" class="text-invoke-text/70 hover:text-invoke-accent transition-colors">Expertise</router-link>
        <router-link to="/team" class="text-invoke-text/70 hover:text-invoke-accent transition-colors">Team</router-link>
        <router-link to="/contact" class="text-invoke-text/70 hover:text-invoke-accent transition-colors">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script> 