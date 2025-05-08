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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <StoryCard 
          v-for="story in filteredStories" 
          :key="story.id"
          :story="story"
          :categoriesData="categories"
        />
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
import StoryCard from '../components/StoryCard.vue';
import storiesData from '../data/stories.json'

export default {
  name: 'Stories',
  components: {
    StoryCard
  },
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
/* .line-clamp-2 can be removed if StoryCard handles its own clamping 
   and it's not used elsewhere in this specific file 
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
*/
</style> 