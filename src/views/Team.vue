<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text p-6">
    <div class="max-w-6xl mx-auto pt-24 space-y-16">
      <!-- Header -->
      <header class="space-y-4">
        <h1 class="text-4xl font-bold">Our Team</h1>
        <p class="text-xl text-invoke-accent">Your on-demand product team of engineers focused on delivering real value</p>
      </header>

      <!-- Team Component -->
      <Team />
    </div>
  </div>
</template>

<script>
import Team from '../components/Team.vue'

export default {
  name: 'TeamView',
  components: {
    Team
  }
}
</script> 