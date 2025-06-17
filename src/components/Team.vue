<template>
  <div class="space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="(member, index) in members" 
           :key="member.id" 
           class="group relative bg-invoke-bg/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-invoke-border/10 hover:border-invoke-accent/30 transition-all duration-300 flex flex-col">
        <!-- Background gradient effect -->
        <div class="absolute inset-0 bg-gradient-to-br from-invoke-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        
        <div class="relative aspect-square overflow-hidden">
          <img :src="member.image" 
               :alt="member.name"
               @error="handleImageError"
               class="w-full h-full object-cover team-image" />
        </div>
        
        <div class="p-4 flex flex-col flex-grow relative z-10">
          <div>
            <h3 class="text-base font-semibold text-invoke-text group-hover:text-invoke-accent transition-colors duration-300">{{ member.name }}</h3>
            <p class="text-sm text-invoke-accent">{{ member.role }}</p>
          </div>

          <div class="mt-4 flex-grow">
            <!-- Collapsed bio -->
            <div v-if="!member.expanded" class="text-sm text-invoke-text/80 line-clamp-3">
              {{ member.bio }}
            </div>
            
            <!-- Expanded bio -->
            <div v-else class="text-sm text-invoke-text/80">
              {{ member.bio }}
            </div>
            
            <button v-if="member.bio.length > 240"
                    @click.stop="toggleBio(member)"
                    class="mt-2 text-sm font-medium cursor-pointer z-10 relative"
                    :class="member.expanded ? 'text-invoke-accent' : 'text-invoke-text/60 hover:text-invoke-accent'">
              {{ member.expanded ? 'Show Less' : 'Read More' }}
            </button>
          </div>

          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="skill in member.skills" 
                  :key="skill"
                  class="px-1.5 py-0.5 text-xs bg-invoke-accent/10 rounded-full text-invoke-text/80 group-hover:bg-invoke-accent/20 transition-colors duration-300">
              {{ skill }}
            </span>
          </div>

          <div class="flex gap-4 mt-4 pt-4 border-t border-invoke-border/10">
            <a v-if="member.linkedin" 
               :href="member.linkedin" 
               target="_blank"
               rel="noopener noreferrer"
               class="text-invoke-text/60 hover:text-invoke-accent transition-colors">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a v-if="member.github" 
               :href="member.github" 
               target="_blank"
               rel="noopener noreferrer"
               class="text-invoke-text/60 hover:text-invoke-accent transition-colors">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
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
import teamData from '../data/team.json'
import albertoImage from '../assets/images/team/alberto.jpg'
import antonImage from '../assets/images/team/anton.png'
import lasseImage from '../assets/images/team/lasse.jpg'
import lucasImage from '../assets/images/team/lucas.jpg'
import frederikImage from '../assets/images/team/profile.png'
import irenImage from '../assets/images/team/iren.png'

export default {
  name: 'Team',
  data() {
    // Define the order of team members
    const memberOrder = ['frederik', 'iren', 'alberto', 'lasse', 'anton', 'lucas'];
    
    // Create a mapping of member IDs to their local images
    const memberImages = {
      alberto: albertoImage,
      anton: antonImage,
      lasse: lasseImage,
      lucas: lucasImage,
      frederik: frederikImage,
      iren: irenImage
    };
    
    // Create a map of all members with local images for specific members
    const membersMap = Object.entries(teamData.members).reduce((acc, [id, member]) => {
      acc[id] = {
        ...member,
        id,
        image: memberImages[id] || member.image,
        expanded: false
      };
      return acc;
    }, {});
    
    // Return members in the specified order
    return {
      members: memberOrder.map(id => membersMap[id] || { ...teamData.members[id], id, expanded: false })
    }
  },
  mounted() {
    // No need for resize handler or overflow check
  },
  updated() {
    // No need for overflow check
  },
  beforeDestroy() {
    // No cleanup needed
  },
  methods: {
    handleImageError(e) {
      e.target.src = '/images/placeholder-profile.jpg'
    },
    toggleBio(member) {
      const index = this.members.findIndex(m => m.id === member.id);
      if (index !== -1) {
        this.members = [
          ...this.members.slice(0, index),
          { ...this.members[index], expanded: !this.members[index].expanded },
          ...this.members.slice(index + 1)
        ];
      }
    }
  }
}
</script>

<style>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.team-image {
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

/* Optional: add hover effect to restore color */
.group:hover .team-image {
  filter: grayscale(0%);
}
</style> 