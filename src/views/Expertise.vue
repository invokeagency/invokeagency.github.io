<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text p-6">
    <div class="max-w-6xl mx-auto pt-24 space-y-16">
      <!-- Header -->
      <header class="space-y-4">
        <h1 class="text-4xl font-bold">Our Expertise</h1>
        <p class="text-xl text-invoke-accent">Specialized knowledge. Proven results.</p>
      </header>

      <!-- Expertise Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(domain, key) in domains" 
             :key="key"
             :id="key"
             class="bg-invoke-bg/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-invoke-border/10">
          <div class="p-8 space-y-6">
            <!-- Domain Header -->
            <div class="flex items-start gap-4">
              <div class="p-3 bg-invoke-accent/10 rounded-xl">
                <svg class="w-6 h-6 text-invoke-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="domain.icon" />
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-semibold">{{ domain.title }}</h2>
                <p class="mt-2 text-invoke-text/70">{{ domain.description }}</p>
              </div>
            </div>

            <!-- Experts and Stories Grid -->
            <div class="grid grid-cols-2 gap-6 pt-6 border-t border-invoke-border/10">
              <!-- Experts Column -->
              <div class="space-y-4">
                <h3 class="text-lg font-medium">{{ domain.experts.length === 1 ? 'Domain Expert' : 'Domain Experts' }}</h3>
                <div class="space-y-4">
                  <div v-for="expert in domain.experts" 
                       :key="expert.id"
                       class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-full bg-invoke-accent/10 overflow-hidden flex-shrink-0">
                      <img v-if="getTeamMember(expert.id).image"
                           :src="getTeamMember(expert.id).image"
                           :alt="getTeamMember(expert.id).name"
                           class="w-full h-full object-cover"
                           @error="handleImageError($event, expert.id)">
                      <div v-else 
                           class="w-full h-full flex items-center justify-center text-invoke-accent text-sm">
                        {{ getInitials(getTeamMember(expert.id).name) }}
                      </div>
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <h4 class="font-medium text-sm">{{ getTeamMember(expert.id).name }}</h4>
                        <span class="text-xs text-invoke-text/60">{{ getTeamMember(expert.id).role }}</span>
                      </div>
                      <p class="mt-0.5 text-xs text-invoke-text/70">{{ expert.expertise }}</p>
                      <div class="flex gap-2 mt-1">
                        <a v-if="getTeamMember(expert.id).linkedin"
                           :href="getTeamMember(expert.id).linkedin"
                           target="_blank"
                           rel="noopener noreferrer"
                           class="text-invoke-text/60 hover:text-invoke-accent transition-colors">
                          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a v-if="getTeamMember(expert.id).github"
                           :href="getTeamMember(expert.id).github"
                           target="_blank"
                           rel="noopener noreferrer"
                           class="text-invoke-text/60 hover:text-invoke-accent transition-colors">
                          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Stories Column -->
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-medium">{{ domain.stories.length === 1 ? 'Featured Story' : 'Featured Stories' }}</h3>
                </div>
                <div class="space-y-4">
                  <div v-for="storyId in domain.stories.slice(0, 2)" 
                       :key="storyId"
                       class="space-y-1">
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-invoke-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h4 class="font-medium text-sm">{{ getStoryTitle(storyId) }}</h4>
                    </div>
                    <p class="text-xs text-invoke-text/70 pl-6 line-clamp-2">{{ getStoryDescription(storyId) }}</p>
                    <router-link :to="{ name: 'story', params: { id: storyId }}" 
                               class="inline-flex items-center gap-1 text-xs text-invoke-accent hover:text-invoke-text transition-colors pl-6">
                      Read story
                      <svg class="w-3.5 h-3.5 transform hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </router-link>
                  </div>
                  <div v-if="domain.stories.length > 2" class="text-sm text-invoke-accent">
                    +{{ domain.stories.length - 2 }} more stories
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Navigation -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 mt-8 border-t border-invoke-border/20">
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
import expertiseData from '../data/expertise.json'
import teamData from '../data/team.json'
import storiesData from '../data/stories.json'

export default {
  name: 'Expertise',
  data() {
    return {
      domains: expertiseData.domains,
      teamMembers: teamData.members,
      stories: Object.values(storiesData.stories),
      imageErrors: new Set()
    }
  },
  mounted() {
    // Handle anchor links when navigating to the page
    if (this.$route.hash) {
      this.scrollToSection(this.$route.hash.slice(1))
    }
  },
  watch: {
    // Handle anchor links when hash changes while on the page
    '$route.hash': {
      handler(newHash) {
        if (newHash) {
          this.scrollToSection(newHash.slice(1))
        }
      },
      immediate: true
    }
  },
  methods: {
    getTeamMember(id) {
      return this.teamMembers[id] || { name: 'Unknown', role: '' }
    },
    getInitials(name) {
      if (!name) return ''
      return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
    },
    handleImageError(event, id) {
      this.imageErrors.add(id)
    },
    getStoryTitle(id) {
      const story = this.stories.find(s => s.id === id)
      return story ? story.project : 'Story'
    },
    getStoryClient(id) {
      const story = this.stories.find(s => s.id === id)
      return story ? story.client : ''
    },
    getStoryDescription(id) {
      const story = this.stories.find(s => s.id === id)
      return story ? story.description : ''
    },
    scrollToSection(sectionId) {
      // Wait for the next tick to ensure the DOM is updated
      this.$nextTick(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const offset = 100 // Adjust this value based on your header height
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      })
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