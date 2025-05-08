<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text p-6">
    <div class="max-w-4xl mx-auto pt-24">
      <div v-if="story" class="space-y-8">
        <header class="space-y-4">
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span 
              v-for="category in story.categories" 
              :key="category"
              class="text-xs px-2 py-1 rounded-full bg-invoke-accent/10 text-invoke-accent">
              {{ getCategory(category) }}
            </span>
          </div>
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

        <!-- Image Gallery (at bottom) -->
        <div v-if="hasScreenshots" class="space-y-4 pt-8">
          <h2 class="text-2xl font-semibold">Project Gallery</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div v-for="(image, index) in screenshots" :key="index" 
                 class="bg-invoke-bg/60 rounded-lg overflow-hidden border border-invoke-border/20 hover:border-invoke-accent/30 transition-all duration-300 cursor-pointer shadow-lg relative group"
                 @click="openLightbox(index)">
              <div class="relative pt-[16:9]">
                <img :src="image" :alt="`${story.project} screenshot ${index + 1}`" class="absolute inset-0 w-full h-full object-cover bg-invoke-bg/60 blur-[0.5px] group-hover:blur-0 transition-all duration-300" />
                <div class="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                  <svg class="w-10 h-10 text-white drop-shadow-lg opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between items-center pt-8">
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
        
        <!-- Lightbox -->
        <div v-if="lightboxActive" class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" @click="closeLightbox">
          <div class="relative max-w-3xl w-full">
            <img :src="screenshots[currentLightboxIndex]" :alt="`${story.project} screenshot ${currentLightboxIndex + 1}`" class="w-full h-auto object-contain max-h-[80vh]" />
            
            <button class="absolute top-1/2 left-4 -translate-y-1/2 bg-invoke-bg/20 text-white p-2 rounded-full hover:bg-invoke-bg/40 transition-colors"
                    @click.stop="prevImage">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button class="absolute top-1/2 right-4 -translate-y-1/2 bg-invoke-bg/20 text-white p-2 rounded-full hover:bg-invoke-bg/40 transition-colors"
                    @click.stop="nextImage">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button class="absolute top-4 right-4 bg-invoke-bg/20 text-white p-2 rounded-full hover:bg-invoke-bg/40 transition-colors"
                    @click.stop="closeLightbox">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
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
import sublimeImg1 from '../assets/images/stories/subliminal-meditation/1.png'
import sublimeImg2 from '../assets/images/stories/subliminal-meditation/2.png'
import sublimeImg3 from '../assets/images/stories/subliminal-meditation/3.png'

export default {
  name: 'Story',
  data() {
    return {
      stories: storiesData.stories,
      categories: storiesData.categories,
      screenshotMap: {
        'subliminal-meditation': [
          sublimeImg1,
          sublimeImg2,
          sublimeImg3
        ]
      },
      lightboxActive: false,
      currentLightboxIndex: 0
    }
  },
  computed: {
    story() {
      return this.stories.find(story => story.id === this.$route.params.id)
    },
    hasScreenshots() {
      return this.story && this.screenshotMap[this.story.id]
    },
    screenshots() {
      return this.hasScreenshots ? this.screenshotMap[this.story.id] : []
    }
  },
  methods: {
    getCategory(categoryId) {
      return this.categories[categoryId] || categoryId
    },
    openLightbox(index) {
      this.currentLightboxIndex = index
      this.lightboxActive = true
      document.body.style.overflow = 'hidden' // Prevent scrolling when lightbox is open
    },
    closeLightbox() {
      this.lightboxActive = false
      document.body.style.overflow = '' // Restore scrolling
    },
    nextImage() {
      this.currentLightboxIndex = (this.currentLightboxIndex + 1) % this.screenshots.length
    },
    prevImage() {
      this.currentLightboxIndex = (this.currentLightboxIndex - 1 + this.screenshots.length) % this.screenshots.length
    }
  },
  beforeDestroy() {
    // Make sure to restore scrolling if component is destroyed with lightbox open
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
.aspect-\[9\/16\] {
  aspect-ratio: 9/16;
}

.pt-\[4\:3\] {
  padding-top: 75%; /* 4:3 aspect ratio */
}

.pt-\[16\:9\] {
  padding-top: 56.25%; /* 16:9 aspect ratio */
}
</style> 