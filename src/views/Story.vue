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
        // Integrations & Automation
        'telegram-chatbot': {
          title: 'Telegram Chatbot',
          summary: 'Built a versatile Telegram bot that automates customer support and engagement',
          image: '/images/stories/telegram-bot.jpg',
          tags: ['Telegram', 'Automation', 'Customer Support'],
          fullStory: {
            challenge: 'A client needed an automated way to handle customer inquiries and provide instant responses 24/7. Manual support was becoming unsustainable as their user base grew.',
            solution: 'We developed a Telegram bot that handles common customer queries, provides automated responses, and escalates complex issues to human support when needed.',
            results: [
              '90% reduction in support response time',
              '24/7 automated customer service',
              'Handles 1000+ daily interactions',
              'Seamless integration with existing systems'
            ]
          }
        },
        'api-gateway': {
          title: 'API Gateway',
          summary: 'Developed a robust API gateway for microservices architecture',
          image: '/images/stories/api-gateway.jpg',
          tags: ['API', 'Microservices', 'Architecture'],
          fullStory: {
            challenge: 'A client needed to manage multiple microservices with different authentication methods and rate limiting requirements.',
            solution: 'We built a centralized API gateway that handles authentication, rate limiting, and request routing across all microservices.',
            results: [
              'Unified authentication system',
              'Improved security and monitoring',
              'Reduced latency by 40%',
              'Simplified service management'
            ]
          }
        },
        // Mobile Apps
        'cross-platform-mvp': {
          title: 'Cross-platform MVP',
          summary: 'Launched a cross-platform mobile app in record time',
          image: '/images/stories/mobile-mvp.jpg',
          tags: ['Flutter', 'Mobile', 'MVP'],
          fullStory: {
            challenge: 'A startup needed to quickly validate their product idea with a cross-platform mobile app while maintaining high performance.',
            solution: 'We developed a Flutter-based MVP that delivered native performance across iOS and Android with a single codebase.',
            results: [
              '2-week development cycle',
              'Native performance on both platforms',
              'Reduced maintenance costs',
              'Faster time to market'
            ]
          }
        },
        'fitness-tracking': {
          title: 'Fitness Tracking App',
          summary: 'Created a fitness tracking app with real-time analytics',
          image: '/images/stories/fitness-app.jpg',
          tags: ['React Native', 'Health', 'Analytics'],
          fullStory: {
            challenge: 'A fitness company needed a mobile app that could track workouts, provide real-time feedback, and sync with various fitness devices.',
            solution: 'We built a React Native app with native device integration, real-time tracking, and personalized workout recommendations.',
            results: [
              'Seamless device integration',
              'Real-time workout tracking',
              'Personalized recommendations',
              'Engaged user base'
            ]
          }
        },
        // SaaS Solutions
        'llm-integration': {
          title: 'LLM Integration SDK',
          summary: 'Created a flexible SDK for enterprise LLM integration',
          image: '/images/stories/llm-sdk.jpg',
          tags: ['AI', 'SDK', 'Enterprise'],
          fullStory: {
            challenge: 'Multiple enterprise clients needed to integrate LLMs into their existing workflows but were struggling with security and implementation complexity.',
            solution: 'We developed a flexible SDK that handles authentication, rate limiting, prompt management, and model switching.',
            results: [
              '90% reduction in integration time',
              'Enterprise-grade security',
              'Multiple LLM support',
              'Detailed analytics'
            ]
          }
        },
        'sales-forecasting': {
          title: 'Sales Forecasting',
          summary: 'Built an AI-powered sales forecasting system',
          image: '/images/stories/sales-forecasting.jpg',
          tags: ['AI', 'Analytics', 'Enterprise'],
          fullStory: {
            challenge: 'A retail chain needed accurate sales predictions to optimize inventory management and reduce costs.',
            solution: 'We developed a machine learning model that analyzes historical data, seasonal trends, and external factors to predict sales.',
            results: [
              '47% increase in prediction accuracy',
              '23% reduction in inventory costs',
              'Real-time updates',
              'ROI within first quarter'
            ]
          }
        },
        // ML & Analytics
        'predictive-analytics': {
          title: 'Predictive Analytics',
          summary: 'Implemented predictive analytics for business intelligence',
          image: '/images/stories/predictive-analytics.jpg',
          tags: ['ML', 'Analytics', 'Business Intelligence'],
          fullStory: {
            challenge: 'A company needed to predict customer behavior and market trends to make data-driven decisions.',
            solution: 'We built a comprehensive analytics system that combines multiple data sources and ML models to provide actionable insights.',
            results: [
              '85% prediction accuracy',
              'Automated reporting',
              'Real-time insights',
              'Data-driven decision making'
            ]
          }
        },
        'data-viz': {
          title: 'Data Visualization',
          summary: 'Created interactive data visualization dashboards',
          image: '/images/stories/data-viz.jpg',
          tags: ['Visualization', 'Analytics', 'Dashboard'],
          fullStory: {
            challenge: 'A client needed to make complex data accessible and actionable for non-technical stakeholders.',
            solution: 'We developed interactive dashboards with real-time data visualization and custom reporting features.',
            results: [
              'Intuitive data exploration',
              'Real-time updates',
              'Custom reporting',
              'Improved decision making'
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