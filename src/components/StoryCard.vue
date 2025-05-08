<template>
  <router-link 
    :to="{ name: 'story', params: { id: story.id }}"
    class="group flex flex-col bg-invoke-bg/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-invoke-border/20 hover:border-invoke-accent/60 transition-all duration-300 hover:shadow-xl p-6 space-y-4"
  >
    <!-- Categories -->
    <div v-if="story.categories && story.categories.length && categoriesData" class="flex flex-wrap gap-2">
      <span 
        v-for="categoryKey in story.categories" 
        :key="categoryKey"
        class="text-xs px-3 py-1 rounded-full bg-invoke-accent/10 text-invoke-accent font-semibold"
      >
        {{ categoriesData[categoryKey] || categoryKey }}
      </span>
    </div>

    <!-- Title -->
    <h3 class="text-xl md:text-2xl font-bold text-white group-hover:text-invoke-accent transition-colors duration-300 line-clamp-2">
      {{ story.project }}
    </h3>

    <!-- Description -->
    <p class="text-sm md:text-base text-invoke-text/70 flex-grow">
      {{ story.description }}
    </p>

    <!-- Metrics -->
    <div v-if="story.metrics && story.metrics.length" class="grid grid-cols-2 gap-3 pt-2">
      <div 
        v-for="metric in story.metrics.slice(0, 2)" 
        :key="metric.label"
        :class="story.metrics.length === 1 ? 'col-span-2' : ''"
        class="bg-invoke-bg/50 rounded-lg p-3 text-center transition-colors duration-300 group-hover:bg-invoke-bg/80"
      >
        <div class="text-md md:text-lg font-semibold text-invoke-accent">{{ metric.value }}</div>
        <div class="text-xs text-invoke-text/60">{{ metric.label }}</div>
      </div>
    </div>

    <!-- Technologies -->
    <div v-if="story.technologies && story.technologies.length" class="pt-2">
      <p class="text-xs text-invoke-text/60 mb-2 uppercase tracking-wider">Key Technologies:</p>
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tech in story.technologies.slice(0, 4)" 
          :key="tech"
          class="text-xs px-2.5 py-1 rounded-md bg-invoke-bg text-invoke-text/80 group-hover:bg-invoke-accent/15 group-hover:text-invoke-accent transition-colors duration-300"
        >
          {{ tech }}
        </span>
        <span 
          v-if="story.technologies.length > 4" 
          class="text-xs px-2.5 py-1 rounded-md bg-invoke-bg text-invoke-text/80 group-hover:bg-invoke-accent/15 group-hover:text-invoke-accent transition-colors duration-300"
        >
          +{{ story.technologies.length - 4 }} more
        </span>
      </div>
    </div>

    <!-- Read Full Story Button -->
    <div class="pt-4 mt-auto">
      <div class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium transition-all duration-300 group-hover:shadow-md w-full text-sm md:text-base bg-transparent text-invoke-accent hover:bg-invoke-accent hover:text-white hover:border-transparent">
        <span>Read full story</span>
        <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7L9 5z"></path>
        </svg>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'StoryCard',
  props: {
    story: {
      type: Object,
      required: true
    },
    categoriesData: { // Pass categoriesData from parent for lookup
      type: Object,
      required: false,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style> 