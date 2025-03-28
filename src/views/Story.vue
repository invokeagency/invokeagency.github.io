<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text p-6">
    <div class="max-w-4xl mx-auto pt-24">
      <div v-if="story" class="space-y-12">
        <header class="space-y-4">
          <h1 class="text-4xl font-bold">{{ story.title }}</h1>
          <p class="text-xl text-invoke-accent">{{ story.summary }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in story.tags" 
                  :key="tag"
                  class="text-sm px-3 py-1 bg-invoke-accent/10 rounded-full">
              {{ tag }}
            </span>
          </div>
        </header>


        <div class="grid gap-8 sm:grid-cols-2">
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold">Challenge</h2>
            <p class="text-invoke-text/80">{{ story.fullStory.challenge }}</p>
          </div>
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold">Solution</h2>
            <p class="text-invoke-text/80">{{ story.fullStory.solution }}</p>
          </div>
        </div>

        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Results</h2>
          <ul class="grid gap-4 sm:grid-cols-2">
            <li v-for="result in story.fullStory.results" 
                :key="result"
                class="flex items-center space-x-2 bg-invoke-accent/5 p-4 rounded-lg">
              <svg class="w-5 h-5 text-invoke-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{{ result }}</span>
            </li>
          </ul>
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
export default {
  name: 'Story',
  data() {
    return {
      stories: {
        'sales-forecasting': {
          title: 'Sales Forecasting Tool',
          summary: 'Built an AI-powered sales forecasting system that increased prediction accuracy by 47%',
          image: '/images/stories/sales-forecasting.jpg',
          tags: ['AI', 'Data Science', 'Enterprise'],
          fullStory: {
            challenge: 'A retail chain was struggling with inventory management due to inaccurate sales predictions. Their legacy forecasting system was causing overstocking in some locations and stockouts in others.',
            solution: 'We developed a machine learning model that analyzes historical sales data, seasonal trends, and external factors. The system integrates with their existing ERP and updates predictions in real-time.',
            results: [
              '47% increase in prediction accuracy',
              '23% reduction in inventory costs',
              'Implemented in just 2 weeks',
              'ROI achieved within first quarter'
            ]
          }
        },
        'risk-scoring': {
          title: 'Risk Scoring System',
          summary: 'Developed an automated risk assessment platform reducing manual review time by 80%',
          image: '/images/stories/risk-scoring.jpg',
          tags: ['FinTech', 'Machine Learning', 'Automation'],
          fullStory: {
            challenge: 'A financial services company was bottlenecked by manual risk assessment processes. Their team was spending hours reviewing each case, causing delays and inconsistent evaluations.',
            solution: 'We built an automated scoring system that pulls data from multiple sources, applies machine learning models, and provides instant risk assessments with clear explanations.',
            results: [
              '80% reduction in review time',
              '35% better risk detection',
              '3-week delivery timeline',
              'Scalable to 100x current volume'
            ]
          }
        },
        'llm-integration': {
          title: 'LLM Integration SDK',
          summary: 'Created a flexible SDK for enterprise LLM integration, deployed across 12 companies',
          image: '/images/stories/llm-sdk.jpg',
          tags: ['AI', 'Enterprise', 'SDK'],
          fullStory: {
            challenge: 'Multiple enterprise clients needed to integrate LLMs into their existing workflows but were struggling with security, cost management, and implementation complexity.',
            solution: 'We developed a flexible SDK that handles authentication, rate limiting, prompt management, and model switching. It includes pre-built modules for common use cases and detailed analytics.',
            results: [
              '12 successful enterprise deployments',
              '90% reduction in integration time',
              '4-week development cycle',
              'Millions in cost savings'
            ]
          }
        }
      }
    }
  },
  computed: {
    story() {
      return this.stories[this.$route.params.id]
    }
  }
}
</script> 