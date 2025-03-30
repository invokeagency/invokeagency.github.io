<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text p-6">
    <div class="max-w-4xl mx-auto pt-24">
      <h1 class="text-4xl font-bold mb-8">Success Stories</h1>
      <SuccessStories />
      
      <div class="flex justify-between items-center pt-8 mt-8 border-t border-invoke-border/20">
        <router-link to="/" class="inline-flex items-center space-x-2 text-invoke-accent hover:text-invoke-text transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </router-link>
        <router-link to="/contact" class="inline-block px-6 py-2 bg-invoke-text text-invoke-bg rounded-xl hover:bg-invoke-accent transition-all duration-200 hover:shadow-lg">
          Start Your Project
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SuccessStories from '../components/SuccessStories.vue'

export default {
  name: 'Stories',
  components: {
    SuccessStories
  }
}
</script> 