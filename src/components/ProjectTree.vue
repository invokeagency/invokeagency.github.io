<template>
  <div class="space-y-6">
    <div v-for="(folder, index) in folders" :key="index" class="group">
      <div class="flex items-center space-x-3 text-invoke-bg bg-invoke-bg/5 rounded-lg p-2 hover:bg-invoke-bg/10 transition-all duration-200">
        <svg class="w-5 h-5 text-invoke-bg transform group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
        <span class="font-medium">{{ folder.name }}</span>
      </div>
      <ul class="ml-8 mt-3 space-y-2 relative">
        <!-- Left vertical tree line -->
        <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-invoke-border"></div>
        
        <li v-for="(file, fileIndex) in folder.files" :key="fileIndex" 
            class="flex items-center space-x-3 text-invoke-bg hover:bg-invoke-bg/10 rounded-lg px-3 py-2 transition-all duration-200 hover:translate-x-1 group/item relative pl-8 cursor-pointer"
            @click="navigateToStory(folder.id, fileIndex)">
          <!-- Branch line -->
          <div class="absolute left-0 top-1/2 w-8 h-0.5 bg-invoke-border"></div>
          
          <svg class="w-4 h-4 text-invoke-bg transform group-hover/item:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span class="relative">
            {{ file }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-invoke-bg group-hover/item:w-full transition-all duration-200"></span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectTree',
  data() {
    return {
      folders: [
        {
          id: 'predictive-analytics',
          name: 'Predictive Analytics',
          files: ['Sales Forecasting Tool', 'Risk Scoring System']
        },
        {
          id: 'ai-platform',
          name: 'AI Platform',
          files: ['LLM Integration SDK', 'Chatbot Analytics Dashboard']
        },
        {
          id: 'mobile-app',
          name: 'Mobile App',
          files: ['Cross-platform MVPs', 'Embedded AI modules']
        }
      ]
    }
  },
  methods: {
    navigateToStory(folderId, fileIndex) {
      const storyIds = {
        'predictive-analytics': ['sales-forecasting', 'risk-scoring'],
        'ai-platform': ['llm-integration', 'chatbot-analytics'],
        'mobile-app': ['cross-platform-mvp', 'embedded-ai']
      }
      const storyId = storyIds[folderId][fileIndex]
      this.$router.push(`/stories/${storyId}`)
    }
  }
}
</script> 