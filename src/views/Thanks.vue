<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text p-6">
    <div class="max-w-2xl mx-auto pt-24 text-center">
      <div class="bg-invoke-accent/10 p-8 rounded-2xl border border-invoke-accent/20 mb-8">
        <svg class="w-16 h-16 text-invoke-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <h1 class="text-4xl font-bold mb-4">Thank You!</h1>
        <p class="text-xl text-invoke-text/80 mb-6">
          Your message has been sent successfully. We'll get back to you as soon as possible.
        </p>
        <router-link to="/" class="inline-block px-6 py-3 bg-invoke-text text-invoke-bg rounded-xl hover:bg-invoke-accent transition-all duration-200 hover:shadow-lg">
          Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thanks'
}
</script> 