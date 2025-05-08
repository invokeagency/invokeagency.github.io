<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text p-6">
    <div class="max-w-2xl mx-auto pt-24">
      <h1 class="text-4xl font-bold mb-2">Let's Build Together</h1>
      <p class="text-invoke-accent mb-12">Tell us about your project and we'll get back to you within 24 hours.</p>

      <form action="https://formsubmit.co/el/fozohu" method="POST" class="space-y-6">
        <!-- FormSubmit configuration -->
        <input type="hidden" name="_subject" value="New contact from INVOKE website">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" :value="nextUrl">
        
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2">Name</label>
            <input 
              name="name"
              type="text"
              class="w-full px-4 py-2 bg-white/5 border border-invoke-border/30 rounded-lg focus:outline-none focus:border-invoke-accent focus:ring-1 focus:ring-invoke-accent/30 hover:border-invoke-border/50 transition-colors"
              required
            >
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Email</label>
            <input 
              name="email"
              type="email"
              class="w-full px-4 py-2 bg-white/5 border border-invoke-border/30 rounded-lg focus:outline-none focus:border-invoke-accent focus:ring-1 focus:ring-invoke-accent/30 hover:border-invoke-border/50 transition-colors"
              required
            >
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Project Type</label>
            <select 
              name="project_type"
              class="w-full px-4 py-2 bg-white/5 border border-invoke-border/30 rounded-lg focus:outline-none focus:border-invoke-accent focus:ring-1 focus:ring-invoke-accent/30 hover:border-invoke-border/50 transition-colors"
              required
            >
              <option value="">Select a project type</option>
              <option value="mvp">MVP Development</option>
              <option value="prototype">Prototype</option>
              <option value="full-product">Full Product</option>
              <option value="ai-integration">AI Integration</option>
              <option value="careers">Careers</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Timeline</label>
            <select 
              name="timeline"
              class="w-full px-4 py-2 bg-white/5 border border-invoke-border/30 rounded-lg focus:outline-none focus:border-invoke-accent focus:ring-1 focus:ring-invoke-accent/30 hover:border-invoke-border/50 transition-colors"
              required
            >
              <option value="">Select a timeline</option>
              <option value="asap">ASAP</option>
              <option value="1-2-weeks">1-2 weeks</option>
              <option value="2-4-weeks">2-4 weeks</option>
              <option value="1-2-months">1-2 months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Project Description</label>
            <textarea 
              name="message"
              rows="4"
              class="w-full px-4 py-2 bg-white/5 border border-invoke-border/30 rounded-lg focus:outline-none focus:border-invoke-accent focus:ring-1 focus:ring-invoke-accent/30 hover:border-invoke-border/50 transition-colors"
              required
            ></textarea>
          </div>
        </div>

        <button 
          type="submit"
          class="w-full px-6 py-3 bg-invoke-text text-invoke-bg rounded-xl hover:bg-invoke-accent transition-all duration-300 hover:shadow-lg font-medium transform hover:translate-y-[-2px]"
        >
          Start Building
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  computed: {
    nextUrl() {
      // Use absolute URL to ensure redirect works on GitHub Pages
      return 'https://invokeagency.github.io/#/thanks';
    }
  }
}
</script> 