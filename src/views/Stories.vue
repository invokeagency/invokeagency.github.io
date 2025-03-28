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
        // Integrations & Automation
        {
          id: 'telegram-chatbot',
          title: 'Telegram Chatbot',
          summary: 'Built a versatile Telegram bot that automates customer support and engagement',
          tags: ['Telegram', 'Automation', 'Customer Support']
        },
        {
          id: 'api-gateway',
          title: 'API Gateway',
          summary: 'Developed a robust API gateway for microservices architecture',
          tags: ['API', 'Microservices', 'Architecture']
        },
        // Mobile Apps
        {
          id: 'cross-platform-mvp',
          title: 'Cross-platform MVP',
          summary: 'Launched a cross-platform mobile app in record time',
          tags: ['Flutter', 'Mobile', 'MVP']
        },
        {
          id: 'fitness-tracking',
          title: 'Fitness Tracking App',
          summary: 'Created a fitness tracking app with real-time analytics',
          tags: ['React Native', 'Health', 'Analytics']
        },
        // SaaS Solutions
        {
          id: 'llm-integration',
          title: 'LLM Integration SDK',
          summary: 'Created a flexible SDK for enterprise LLM integration',
          tags: ['AI', 'SDK', 'Enterprise']
        },
        {
          id: 'sales-forecasting',
          title: 'Sales Forecasting',
          summary: 'Built an AI-powered sales forecasting system',
          tags: ['AI', 'Analytics', 'Enterprise']
        },
        // ML & Analytics
        {
          id: 'predictive-analytics',
          title: 'Predictive Analytics',
          summary: 'Implemented predictive analytics for business intelligence',
          tags: ['ML', 'Analytics', 'Business Intelligence']
        },
        {
          id: 'data-viz',
          title: 'Data Visualization',
          summary: 'Created interactive data visualization dashboards',
          tags: ['Visualization', 'Analytics', 'Dashboard']
        }
      ]
    }
  }
}
</script> 