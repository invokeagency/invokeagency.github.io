<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text p-6">
    <div class="max-w-6xl mx-auto pt-24 space-y-16">
      <!-- Header -->
      <header class="space-y-4">
        <h1 class="text-4xl font-bold">Our Team</h1>
        <p class="text-xl text-invoke-accent">Pre-vetted experts who ship products</p>
      </header>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Frederik Gram -->
        <div class="bg-invoke-bg/80 p-6 rounded-xl border border-invoke-border space-y-4 hover:shadow-lg transition-all duration-200">
          <div class="aspect-square rounded-lg bg-gradient-to-br from-invoke-accent/10 to-invoke-text/10 flex items-center justify-center overflow-hidden">
            <img :src="imageUrl" :alt="name" class="w-full h-full object-cover" @error="handleImageError" />
          </div>
          <div class="space-y-2">
            <h3 class="text-xl font-semibold text-invoke-text">Frederik Gram</h3>
            <p class="text-invoke-text/90">Primary Architect & Co-founder</p>
          </div>
          <div class="space-y-2">
            <p class="text-sm text-invoke-text/90">Full-stack systems architect with expertise in high-performance APIs and cloud infrastructure. Specializes in building scalable solutions for enterprise clients.</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">FastAPI</span>
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">MLOps</span>
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">Systems</span>
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">Cloud</span>
            </div>
          </div>
        </div>

        <!-- Iren Glass -->
        <div class="bg-invoke-bg/80 p-6 rounded-xl border border-invoke-border space-y-4 hover:shadow-lg transition-all duration-200">
          <div class="aspect-square rounded-lg bg-gradient-to-br from-invoke-accent/10 to-invoke-text/10 flex items-center justify-center overflow-hidden">
            <img :src="imageUrl" :alt="name" class="w-full h-full object-cover" @error="handleImageError" />
          </div>
          <div class="space-y-2">
            <h3 class="text-xl font-semibold text-invoke-text">Iren Glass</h3>
            <p class="text-invoke-text/90">Co-founder & Product Specialist</p>
          </div>
          <div class="space-y-2">
            <p class="text-sm text-invoke-text/90">Product and marketing expert with a proven track record in launching successful digital products. Specializes in user experience and growth strategy.</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">Product</span>
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">UX Design</span>
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">Growth</span>
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">Strategy</span>
            </div>
          </div>
        </div>

        <!-- Luka Tutberidze -->
        <div class="bg-invoke-bg/80 p-6 rounded-xl border border-invoke-border space-y-4 hover:shadow-lg transition-all duration-200">
          <div class="aspect-square rounded-lg bg-gradient-to-br from-invoke-accent/10 to-invoke-text/10 flex items-center justify-center overflow-hidden">
            <img :src="imageUrl" :alt="name" class="w-full h-full object-cover" @error="handleImageError" />
          </div>
          <div class="space-y-2">
            <h3 class="text-xl font-semibold text-invoke-text">Luka Tutberidze</h3>
            <p class="text-invoke-text/90">Banking Systems Expert</p>
          </div>
          <div class="space-y-2">
            <p class="text-sm text-invoke-text/90">Top 100 competitive programmer turned banking systems expert. Specializes in high-performance applications and SWIFT integrations.</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">Spring Boot</span>
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">Django</span>
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">Python</span>
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">Banking</span>
            </div>
          </div>
        </div>

        <!-- Lasse Usbeck -->
        <div class="bg-invoke-bg/80 p-6 rounded-xl border border-invoke-border space-y-4 hover:shadow-lg transition-all duration-200">
          <div class="aspect-square rounded-lg bg-gradient-to-br from-invoke-accent/10 to-invoke-text/10 flex items-center justify-center overflow-hidden">
            <img :src="imageUrl" :alt="name" class="w-full h-full object-cover" @error="handleImageError" />
          </div>
          <div class="space-y-2">
            <h3 class="text-xl font-semibold text-invoke-text">Lasse Usbeck</h3>
            <p class="text-invoke-text/90">ML/AI Specialist</p>
          </div>
          <div class="space-y-2">
            <p class="text-sm text-invoke-text/90">Machine Learning Engineer focused on delivering practical AI solutions for businesses. Expert in building and deploying production-ready ML systems.</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">PyTorch</span>
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">TensorFlow</span>
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">Python</span>
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">Deep Learning</span>
            </div>
          </div>
        </div>

        <!-- Anton Kopylow -->
        <div class="bg-invoke-bg/80 p-6 rounded-xl border border-invoke-border space-y-4 hover:shadow-lg transition-all duration-200">
          <div class="aspect-square rounded-lg bg-gradient-to-br from-invoke-accent/10 to-invoke-text/10 flex items-center justify-center overflow-hidden">
            <img :src="imageUrl" :alt="name" class="w-full h-full object-cover" @error="handleImageError" />
          </div>
          <div class="space-y-2">
            <h3 class="text-xl font-semibold text-invoke-text">Anton Kopylow</h3>
            <p class="text-invoke-text/90">Systems & Performance Expert</p>
          </div>
          <div class="space-y-2">
            <p class="text-sm text-invoke-text/90">Systems architecture expert with deep experience in performance optimization. Delivers robust solutions for complex enterprise requirements.</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">C++</span>
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">CUDA</span>
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">Flutter</span>
              <span class="px-2 py-1 bg-invoke-accent/20 rounded-md text-xs text-invoke-text">DevOps</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Join the Team -->
      <div class="bg-invoke-bg/80 p-8 rounded-xl border border-invoke-border mt-16">
        <div class="max-w-2xl space-y-4">
          <h2 class="text-2xl font-semibold">Join Our Team</h2>
          <p class="text-invoke-text/80">
            We're always looking for exceptional developers who share our values: 
            fast execution, clear communication, and a focus on business impact.
          </p>
          <router-link to="/contact" class="inline-block px-6 py-3 bg-invoke-text text-invoke-bg rounded-xl hover:bg-invoke-accent transition-all duration-200 hover:shadow-lg">
            Get in Touch
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team',
  methods: {
    handleImageError(e) {
      e.target.insertAdjacentHTML('afterend', `
        <svg class="w-24 h-24 text-invoke-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      `);
      e.target.remove();
    }
  }
}
</script> 