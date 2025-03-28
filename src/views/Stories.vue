<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text p-6">
    <div class="max-w-7xl mx-auto pt-24">
      <h1 class="text-4xl font-bold mb-2">Success Stories</h1>
      <p class="text-invoke-accent mb-12">Real projects. Real impact. Real results.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link v-for="story in stories" 
                     :key="story.id" 
                     :to="{ name: 'story', params: { id: story.id }}"
                     class="group">
          <div class="bg-invoke-bg/80 p-6 rounded-xl border border-invoke-border space-y-4 hover:shadow-lg transition-all duration-200">
            <div class="aspect-square rounded-lg bg-gradient-to-br from-invoke-accent/10 to-invoke-text/10 flex items-center justify-center overflow-hidden">
              <svg class="w-12 h-12 text-invoke-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div class="space-y-2">
              <h3 class="text-xl font-semibold text-invoke-text">{{ story.title }}</h3>
              <p class="text-invoke-text/90">{{ story.summary }}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in story.tags" 
                    :key="tag"
                    class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">
                {{ tag }}
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stories',
  data() {
    return {
      stories: [
        {
          id: 'predictive-analytics',
          title: 'Sales Forecasting Tool',
          summary: 'Built an AI-powered sales forecasting system that increased prediction accuracy by 47%',
          tags: ['AI', 'Data Science', 'Enterprise'],
          fullStory: {
            challenge: 'Legacy forecasting systems were causing inventory issues',
            solution: 'Implemented machine learning models with real-time data integration',
            results: ['47% increase in prediction accuracy', '23% reduction in inventory costs', '2-week implementation']
          }
        },
        {
          id: 'risk-scoring',
          title: 'Risk Scoring System',
          summary: 'Developed an automated risk assessment platform reducing manual review time by 80%',
          tags: ['FinTech', 'Machine Learning', 'Automation'],
          fullStory: {
            challenge: 'Manual risk assessment was causing delays',
            solution: 'Built an automated scoring system with multiple data points',
            results: ['80% reduction in review time', '35% better risk detection', '3-week delivery']
          }
        },
        {
          id: 'llm-integration',
          title: 'LLM Integration SDK',
          summary: 'Created a flexible SDK for enterprise LLM integration, deployed across 12 companies',
          tags: ['AI', 'Enterprise', 'SDK'],
          fullStory: {
            challenge: 'Companies struggling with LLM integration',
            solution: 'Developed a flexible, secure SDK with multiple LLM support',
            results: ['12 successful deployments', '90% reduction in integration time', '4-week development']
          }
        }
        // Add more stories as needed
      ]
    }
  }
}
</script> 