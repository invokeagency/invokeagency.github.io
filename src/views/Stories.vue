<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text p-6">
    <div class="max-w-6xl mx-auto pt-24">
      <!-- Header -->
      <header class="space-y-4 mb-12">
        <h1 class="text-4xl font-bold">Success Stories</h1>
        <p class="text-xl text-invoke-accent">Real projects, real results.</p>
      </header>

      <!-- Category Filter -->
      <div class="flex flex-wrap gap-2 mb-8">
        <button 
          @click="selectedCategory = null"
          :class="[
            'px-4 py-2 rounded-xl text-sm transition-all duration-200',
            !selectedCategory 
              ? 'bg-invoke-accent text-invoke-bg' 
              : 'bg-invoke-bg/40 text-invoke-text/70 hover:bg-invoke-bg/60'
          ]"
        >
          All Stories
        </button>
        <button 
          v-for="(label, id) in categories" 
          :key="id"
          @click="selectedCategory = selectedCategory === id ? null : id"
          :class="[
            'px-4 py-2 rounded-xl text-sm transition-all duration-200',
            selectedCategory === id 
              ? 'bg-invoke-accent text-invoke-bg' 
              : 'bg-invoke-bg/40 text-invoke-text/70 hover:bg-invoke-bg/60'
          ]"
        >
          {{ label }}
        </button>
      </div>

      <!-- Stories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link 
          v-for="story in filteredStories" 
          :key="story.id"
          :to="{ name: 'story', params: { id: story.id }}"
          class="group bg-invoke-bg/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-invoke-border/10 hover:border-invoke-accent/30 transition-all duration-300"
        >
          <!-- Background gradient effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-invoke-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="p-6 relative" style="height: 380px;">
            <!-- Category Badges - Absolute positioned at top -->
            <div class="absolute top-6 left-6 right-6">
              <span 
                v-for="category in story.categories" 
                :key="category"
                class="text-xs px-2 py-1 rounded-full bg-invoke-accent/10 text-invoke-accent mr-2 mb-2 inline-block">
                {{ categories[category] }}
              </span>
            </div>

            <!-- Title - Absolute positioned at fixed distance from top -->
            <div class="absolute top-[4.5rem] left-6 right-6 min-h-[3.5rem]">
              <h3 class="text-xl font-semibold group-hover:text-invoke-accent transition-colors line-clamp-2">
                {{ story.project }}
              </h3>
            </div>

            <!-- Description - Absolute positioned at fixed distance from top -->
            <div class="absolute top-[8.5rem] left-6 right-6">
              <p class="text-sm text-invoke-text/70 line-clamp-2">
                {{ story.description }}
              </p>
            </div>

            <!-- Metrics - Absolute positioned at fixed distance from top -->
            <div v-if="story.metrics" class="absolute top-[13rem] left-6 right-6">
              <div class="grid grid-cols-2 gap-3">
                <div v-for="metric in story.metrics.slice(0, 2)" 
                     :key="metric.label"
                     :class="story.metrics.length === 1 ? 'col-span-2' : ''"
                     class="bg-invoke-bg/60 rounded-lg p-2 text-center">
                  <div class="text-sm font-medium text-invoke-accent">{{ metric.value }}</div>
                  <div class="text-xs text-invoke-text/60">{{ metric.label }}</div>
                </div>
              </div>
            </div>

            <!-- Technologies - Absolute positioned at fixed distance from top -->
            <div class="absolute top-[18rem] left-6 right-6">
              <div class="flex flex-wrap gap-2 max-h-[80px] overflow-hidden">
                <span 
                  v-for="tech in story.technologies.slice(0, 3)" 
                  :key="tech"
                  class="text-xs px-2 py-1 rounded-full bg-invoke-bg/60 text-invoke-text/70 group-hover:bg-invoke-accent/10 group-hover:text-invoke-accent transition-colors"
                >
                  {{ tech }}
                </span>
                <span v-if="story.technologies.length > 3" 
                      class="text-xs px-2 py-1 rounded-full bg-invoke-bg/60 text-invoke-text/70 group-hover:bg-invoke-accent/10 group-hover:text-invoke-accent transition-colors">
                  +{{ story.technologies.length - 3 }} more
                </span>
              </div>
            </div>

            <!-- Read More - Absolute positioned at bottom -->
            <div class="absolute bottom-6 left-6 right-6">
              <div class="flex items-center justify-between bg-invoke-bg/80 backdrop-blur-sm py-2 rounded-lg">
                <span class="text-sm text-invoke-accent group-hover:text-invoke-text transition-colors px-2">
                  Read full story
                </span>
                <svg class="w-4 h-4 text-invoke-accent transform group-hover:translate-x-1 transition-transform mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <!-- Bottom Navigation -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-8">
        <router-link to="/" class="inline-flex items-center gap-2 text-invoke-text/70 hover:text-invoke-accent transition-colors">
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
import storiesData from '../data/stories.json'

export default {
  name: 'Stories',
  data() {
    return {
      stories: Object.values(storiesData.stories),
      categories: storiesData.categories,
      selectedCategory: null
    }
  },
  computed: {
    filteredStories() {
      let stories = this.selectedCategory 
        ? this.stories.filter(story => story.categories.includes(this.selectedCategory))
        : this.stories;
      
      // Sort by priority (lower numbers first)
      return stories.sort((a, b) => {
        // Default priority to 999 if not set
        const priorityA = a.priority !== undefined ? a.priority : 999;
        const priorityB = b.priority !== undefined ? b.priority : 999;
        return priorityA - priorityB;
      });
    }
  }
}
</script>

<style>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 