<template>
  <div class="space-y-8">
    <router-link v-for="story in stories" 
                 :key="story.id"
                 :to="{ name: 'story', params: { id: story.id }}"
                 class="group block relative bg-invoke-bg/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-invoke-border/10 hover:border-invoke-accent/30 transition-all duration-300 shadow-sm hover:shadow-md">
      <!-- Background gradient effect -->
      <div class="absolute inset-0 bg-gradient-to-br from-invoke-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div class="p-8">
        <!-- Header -->
        <div class="space-y-3 mb-8">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl font-semibold text-invoke-text group-hover:text-invoke-accent transition-colors duration-300">
              {{ story.project }}
            </h3>
            <span class="text-sm text-invoke-text/60">{{ story.client }}</span>
          </div>
        </div>

        <!-- Main Content -->
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Challenge -->
          <div class="space-y-3">
            <h4 class="text-sm font-medium text-invoke-text/60">Challenge</h4>
            <div class="relative">
              <p class="text-invoke-text/80 line-clamp-5">{{ story.challenge }}</p>
              <div class="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-invoke-bg/40 to-transparent"></div>
            </div>
          </div>

          <!-- Solution -->
          <div class="space-y-3">
            <h4 class="text-sm font-medium text-invoke-text/60">Solution</h4>
            <div class="relative">
              <p class="text-invoke-text/80 line-clamp-5">{{ story.solution }}</p>
              <div class="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-invoke-bg/40 to-transparent"></div>
            </div>
          </div>

          <!-- Results -->
          <div class="space-y-3">
            <h4 class="text-sm font-medium text-invoke-text/60">Key Results</h4>
            <ul class="space-y-3">
              <li v-for="result in story.results.slice(0, 3)" 
                  :key="result"
                  class="flex items-start space-x-2 text-invoke-text/80">
                <svg class="w-5 h-5 text-invoke-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ result }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Technologies and Read More -->
        <div class="mt-8 pt-4 border-t border-invoke-border/10">
          <div class="flex items-center justify-between mb-4">
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in story.technologies" 
                    :key="tech"
                    class="px-3 py-1 text-sm bg-invoke-accent/10 rounded-full text-invoke-text/80 group-hover:bg-invoke-accent/20 transition-colors duration-300">
                {{ tech }}
              </span>
            </div>
            <span class="text-sm text-invoke-accent hover:text-invoke-text transition-colors duration-300">Read full story →</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import storiesData from '../data/stories.json'

export default {
  name: 'SuccessStories',
  data() {
    return {
      stories: Object.values(storiesData.stories)
    }
  }
}
</script>

<style>
.line-clamp-5 {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 