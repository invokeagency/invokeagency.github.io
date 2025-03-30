<template>
  <div class="space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="member in team" :key="member.name" 
           class="group relative bg-invoke-bg/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-invoke-border/10 hover:border-invoke-accent/30 transition-all duration-300 flex flex-col">
        <!-- Background gradient effect -->
        <div class="absolute inset-0 bg-gradient-to-br from-invoke-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <!-- Image container -->
        <div class="relative h-48 overflow-hidden">
          <img :src="member.image" 
               :alt="member.name" 
               class="w-full h-full object-cover" 
               @error="handleImageError" />
        </div>

        <!-- Content -->
        <div class="p-6 flex flex-col flex-grow">
          <div class="space-y-1">
            <h3 class="text-xl font-semibold text-invoke-text group-hover:text-invoke-accent transition-colors duration-300">
              {{ member.name }}
            </h3>
            <p class="text-sm text-invoke-text/70">{{ member.role }}</p>
          </div>

          <p class="text-sm text-invoke-text/80 leading-relaxed mt-2" :class="{ 'line-clamp-3': !member.isExpanded }">
            {{ member.bio }}
          </p>

          <div class="flex flex-wrap gap-2 mt-2">
            <span v-for="skill in member.skills" 
                  :key="skill"
                  class="px-2 py-1 bg-invoke-accent/10 rounded-full text-xs text-invoke-text/80 group-hover:bg-invoke-accent/20 transition-colors duration-300">
              {{ skill }}
            </span>
          </div>

          <!-- Social Links -->
          <div class="flex items-center justify-between pt-4 mt-4 border-t border-invoke-border/10">
            <div class="flex items-center space-x-3">
              <a :href="member.linkedin" target="_blank" rel="noopener noreferrer" 
                 class="p-1.5 bg-invoke-bg/80 rounded-full hover:bg-invoke-accent transition-colors duration-300">
                <svg class="w-4 h-4 text-invoke-text" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.016-2.005-1.22-2.005-1.22 0-1.405.953-1.405 1.94v5.669h-3v-11h2.85v1.626h.042c.387-.746 1.332-1.533 2.75-1.533 2.937 0 3.485 1.937 3.485 4.456v6.451z"/>
                </svg>
              </a>
              <a v-if="member.github" :href="member.github" target="_blank" rel="noopener noreferrer"
                 class="p-1.5 bg-invoke-bg/80 rounded-full hover:bg-invoke-accent transition-colors duration-300">
                <svg class="w-4 h-4 text-invoke-text" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            <button @click="toggleExpand(member)" 
                    class="text-sm text-invoke-accent hover:text-invoke-text transition-colors duration-300 flex items-center space-x-1">
              <span>{{ member.isExpanded ? 'Show Less' : 'Read More' }}</span>
              <svg class="w-4 h-4 transform transition-transform duration-300" 
                   :class="{ 'rotate-180': member.isExpanded }"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Join the Team -->
    <div class="bg-invoke-bg/40 backdrop-blur-sm p-8 rounded-2xl border border-invoke-border/10 mt-16 hover:border-invoke-accent/30 transition-all duration-300">
      <div class="max-w-2xl space-y-4">
        <h2 class="text-2xl font-semibold">Join Our Team</h2>
        <p class="text-invoke-text/80">
          We're always looking for exceptional developers who share our values: 
          fast execution, clear communication, and a focus on business impact.
        </p>
        <router-link to="/contact?type=careers" 
                    class="inline-block px-6 py-3 bg-invoke-text text-invoke-bg rounded-xl hover:bg-invoke-accent transition-all duration-200 hover:shadow-lg">
          Get in Touch
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {
      team: [
        {
          name: 'Frederik Gram',
          role: 'Primary Architect & Co-founder',
          image: 'https://i.pravatar.cc/150?img=1',
          bio: 'Architect of high-performance systems serving millions of users. Expert in cloud infrastructure and enterprise-scale solutions. Led the development of multiple successful startups and enterprise projects. Specializes in scalable architecture and system optimization.',
          skills: ['FastAPI', 'MLOps', 'Systems', 'Cloud'],
          linkedin: 'https://linkedin.com/in/frederik-gram',
          github: 'https://github.com/frederik-gram',
          isExpanded: false
        },
        {
          name: 'Iren Glass',
          role: 'Product Specialist & Co-founder',
          image: 'https://i.pravatar.cc/150?img=2',
          bio: 'Product leader with a track record of launching market-leading digital products. Specializes in UX and growth strategy. Successfully scaled products from 0 to 1M+ users. Expert in user research and data-driven decision making.',
          skills: ['Product', 'UX Design', 'Growth', 'Strategy'],
          linkedin: 'https://linkedin.com/in/iren-glass',
          isExpanded: false
        },
        {
          name: 'Luka Tutberidze',
          role: 'Algorithms Expert',
          image: 'https://i.pravatar.cc/150?img=3',
          bio: 'Among the top 100 competitive programmers globally. Expert in complex algorithms and high-performance financial systems. Built trading systems processing billions in daily volume. Specializes in algorithmic optimization and system architecture.',
          skills: ['Spring Boot', 'Django', 'Python', 'Banking'],
          linkedin: 'https://linkedin.com/in/luka-tutberidze',
          github: 'https://github.com/luka-tutberidze',
          isExpanded: false
        },
        {
          name: 'Lasse Usbeck',
          role: 'ML/AI Specialist',
          image: 'https://i.pravatar.cc/150?img=4',
          bio: 'Machine learning expert focused on production-ready AI solutions. Successfully deployed systems that drive real business value. Led the development of multiple ML pipelines and AI-powered features. Expert in model optimization and deployment.',
          skills: ['PyTorch', 'TensorFlow', 'Python', 'Deep Learning'],
          linkedin: 'https://linkedin.com/in/lasse-usbeck',
          github: 'https://github.com/lasse-usbeck',
          isExpanded: false
        },
        {
          name: 'Anton Kopylow',
          role: 'Systems & Performance Expert',
          image: 'https://i.pravatar.cc/150?img=5',
          bio: 'Systems architect specializing in performance optimization. Expert in C++ and CUDA for complex computational challenges. Built high-performance systems for scientific computing and real-time data processing. Specializes in low-level optimization and system architecture.',
          skills: ['C++', 'CUDA', 'Flutter', 'DevOps'],
          linkedin: 'https://linkedin.com/in/anton-kopylow',
          github: 'https://github.com/anton-kopylow',
          isExpanded: false
        }
      ]
    }
  },
  methods: {
    handleImageError(e) {
      e.target.insertAdjacentHTML('afterend', `
        <svg class="w-24 h-24 text-invoke-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      `);
      e.target.remove();
    },
    toggleExpand(member) {
      member.isExpanded = !member.isExpanded;
    }
  }
}
</script> 