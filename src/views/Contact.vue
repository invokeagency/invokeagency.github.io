<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text p-6">
    <div class="max-w-2xl mx-auto pt-24">
      <h1 class="text-4xl font-bold mb-2">Let's Build Together</h1>
      <p class="text-invoke-accent mb-12">Tell us about your project and we'll get back to you within 24 hours.</p>

      <form @submit.prevent="submitForm" class="space-y-6">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2">Name</label>
            <input 
              v-model="form.name"
              type="text"
              class="w-full px-4 py-2 bg-invoke-panel/50 border border-invoke-border/20 rounded-lg focus:outline-none focus:border-invoke-accent"
              required
            >
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Email</label>
            <input 
              v-model="form.email"
              type="email"
              class="w-full px-4 py-2 bg-invoke-panel/50 border border-invoke-border/20 rounded-lg focus:outline-none focus:border-invoke-accent"
              required
            >
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Project Type</label>
            <select 
              v-model="form.projectType"
              class="w-full px-4 py-2 bg-invoke-panel/50 border border-invoke-border/20 rounded-lg focus:outline-none focus:border-invoke-accent"
              required
            >
              <option value="">Select a project type</option>
              <option value="mvp">MVP Development</option>
              <option value="prototype">Prototype</option>
              <option value="full-product">Full Product</option>
              <option value="ai-integration">AI Integration</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Timeline</label>
            <select 
              v-model="form.timeline"
              class="w-full px-4 py-2 bg-invoke-panel/50 border border-invoke-border/20 rounded-lg focus:outline-none focus:border-invoke-accent"
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
              v-model="form.description"
              rows="4"
              class="w-full px-4 py-2 bg-invoke-panel/50 border border-invoke-border/20 rounded-lg focus:outline-none focus:border-invoke-accent"
              required
            ></textarea>
          </div>
        </div>

        <button 
          type="submit"
          class="w-full px-6 py-3 bg-invoke-text text-invoke-bg rounded-xl hover:bg-invoke-accent transition-all duration-200 hover:shadow-lg font-medium"
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
  data() {
    return {
      form: {
        name: '',
        email: '',
        projectType: '',
        timeline: '',
        description: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.form)
      // Add actual form submission logic here
    }
  }
}
</script> 