<template>
  <div class="space-y-4">
    <div v-for="(category, categoryId) in categories" :key="categoryId" class="group">
      <div class="flex items-center space-x-2 text-invoke-bg bg-invoke-bg/5 rounded-lg p-1.5 hover:bg-invoke-bg/10 transition-all duration-200 cursor-pointer"
           @click="navigateToExpertise(categoryId)">
        <svg class="w-4 h-4 text-invoke-bg transform group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
        <span class="font-medium text-sm">{{ category }}</span>
      </div>
      <ul class="ml-6 mt-2 space-y-1 relative">
        <!-- Left vertical tree line -->
        <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-invoke-border"></div>
        
        <li v-for="story in getStoriesForCategory(categoryId)" :key="story.id" 
            class="flex items-center space-x-2 text-invoke-bg hover:bg-invoke-bg/10 rounded-lg px-2 py-1.5 transition-all duration-200 hover:translate-x-1 group/item relative pl-6 cursor-pointer"
            @click="navigateToStory(story.id)">
          <!-- Branch line -->
          <div class="absolute left-0 top-1/2 w-6 h-0.5 bg-invoke-border"></div>
          
          <svg class="w-3.5 h-3.5 text-invoke-bg transform group-hover/item:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span class="relative text-sm">
            {{ story.project }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-invoke-bg group-hover/item:w-full transition-all duration-200"></span>
          </span>
          <!-- Tooltip -->
          <span class="absolute right-0 translate-x-2 ml-2 px-2 py-0.5 bg-invoke-bg/90 text-invoke-text text-xs rounded opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
            Click to view story
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import storiesData from '../data/stories.json'

export default {
  name: 'ProjectTree',
  data() {
    return {
      stories: storiesData.stories,
      categories: storiesData.categories,
      categoryToDomain: {
        'ml-analytics': 'ml-analytics',
        'integrations': 'integrations',
        'mobile-apps': 'mobile-apps',
        'saas': 'saas'
      }
    }
  },
  methods: {
    getStoriesForCategory(categoryId) {
      return Object.values(this.stories)
        .filter(story => story.categories && story.categories.includes(categoryId) && story.addToProjectTree)
        .map(story => ({
          id: story.id,
          project: story.project,
          order: story.treeOrder && story.treeOrder[categoryId] ? story.treeOrder[categoryId] : 999
        }))
        .sort((a, b) => a.order - b.order)
    },
    navigateToStory(storyId) {
      this.$router.push(`/stories/${storyId}`)
    },
    navigateToExpertise(categoryId) {
      const domainId = this.categoryToDomain[categoryId]
      if (domainId) {
        this.$router.push(`/expertise#${domainId}`)
      }
    }
  }
}
</script> 