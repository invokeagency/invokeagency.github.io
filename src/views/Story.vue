<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text p-6">
    <div class="max-w-4xl mx-auto pt-24">
      <div v-if="story" class="space-y-8">
        <header class="space-y-4">
          <h1 class="text-4xl font-bold">{{ story.project }}</h1>
          <p class="text-xl text-invoke-accent">{{ story.client }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in story.technologies" 
                  :key="tech"
                  class="text-sm px-3 py-1 bg-invoke-accent/10 rounded-full">
              {{ tech }}
            </span>
          </div>
        </header>

        <div class="grid gap-8 sm:grid-cols-2">
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold">Challenge</h2>
            <p class="text-invoke-text/80">{{ story.challenge }}</p>
          </div>
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold">Solution</h2>
            <p class="text-invoke-text/80">{{ story.solution }}</p>
          </div>
        </div>

        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Results</h2>
          <ul class="grid gap-4 sm:grid-cols-2">
            <li v-for="result in story.results" 
                :key="result"
                class="flex items-center space-x-2 bg-invoke-accent/5 p-4 rounded-lg">
              <svg class="w-5 h-5 text-invoke-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{{ result }}</span>
            </li>
          </ul>
        </div>

        <div v-if="story.testimonial" class="border-l-2 border-invoke-accent/20 pl-4 ml-2">
          <p class="text-invoke-text/70 italic">{{ story.testimonial.quote }}</p>
          <p class="mt-2 text-sm">
            <span class="text-invoke-accent">{{ story.testimonial.author }}</span>
            <span class="text-invoke-text/50"> · {{ story.testimonial.company }}</span>
          </p>
        </div>

        <div class="flex justify-between items-center pt-8 border-t border-invoke-border/20">
          <router-link to="/stories" class="inline-flex items-center space-x-2 text-invoke-accent hover:text-invoke-text transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Stories</span>
          </router-link>
          <router-link to="/contact" class="inline-block px-6 py-2 bg-invoke-text text-invoke-bg rounded-xl hover:bg-invoke-accent transition-all duration-200 hover:shadow-lg">
            Start Your Project
          </router-link>
        </div>
      </div>

      <div v-else class="text-center py-12">
        <h2 class="text-2xl font-semibold mb-4">Story Not Found</h2>
        <p class="text-invoke-text/80 mb-8">The story you're looking for doesn't exist or has been moved.</p>
        <router-link to="/stories" class="inline-flex items-center space-x-2 text-invoke-accent hover:text-invoke-text transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Stories</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import storiesData from '../data/stories.json'

export default {
  name: 'Story',
  data() {
    return {
      stories: storiesData.stories
    }
  },
  computed: {
    story() {
      return this.stories.find(story => story.id === this.$route.params.id)
    }
  }
}
</script> 