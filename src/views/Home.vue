<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text p-6 flex flex-col items-center justify-start space-y-24 relative overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-invoke-bg via-invoke-bg/95 to-invoke-bg/90"></div>
    
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-invoke-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-invoke-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <!-- Main content with proper padding to avoid logo -->
    <section class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative mt-16 md:mt-0">
      <div class="space-y-8">
        <div class="relative z-10">
          <div>
            <h1 class="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-invoke-text to-invoke-accent">INVOKE</h1>
            <p class="text-xl text-invoke-accent">Fast builds. Flexible solutions. Expert execution.</p>
          </div>

          <div class="space-y-6 text-invoke-text/90">
            <p class="text-lg leading-relaxed">
              We're a software agency that cuts through the noise. No endless meetings, no overengineered solutions. 
              Just fast, impactful development focused on what matters.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-invoke-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span class="font-medium">Ship Fast</span>
                </div>
                <p class="text-sm text-invoke-text/70 pl-7">Cut through red tape. Get results in weeks, not months</p>
              </div>

              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-invoke-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span class="font-medium">Pre-vetted Experts</span>
                </div>
                <p class="text-sm text-invoke-text/70 pl-7">Work with developers who've shipped products</p>
              </div>

              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-invoke-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <span class="font-medium">Clear Communication</span>
                </div>
                <p class="text-sm text-invoke-text/70 pl-7">No account managers. Direct access to the team</p>
              </div>

              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <svg class="w-5 h-5 text-invoke-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span class="font-medium">Business First</span>
                </div>
                <p class="text-sm text-invoke-text/70 pl-7">Focus on outcomes, not just code</p>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 mt-8">
            <router-link to="/stories" class="px-8 py-3 bg-invoke-text text-invoke-bg rounded-xl hover:bg-invoke-accent transition-all duration-200 hover:shadow-lg">
              View Our Work
            </router-link>
            <router-link to="/contact" class="px-8 py-3 border border-invoke-text/20 rounded-xl hover:border-invoke-accent transition-all duration-200">
              Start Building
            </router-link>
          </div>
        </div>
      </div>

      <div id="projects" class="bg-invoke-panel/90 backdrop-blur-sm text-invoke-bg p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-invoke-border/10 -mr-8">
        <h2 class="text-2xl font-semibold mb-6 flex items-center space-x-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span>Stories</span>
        </h2>
        <ProjectTree />
      </div>
    </section>
  </div>
</template>

<script>
import ProjectTree from '../components/ProjectTree.vue'

export default {
  name: 'Home',
  components: {
    ProjectTree
  }
}
</script> 