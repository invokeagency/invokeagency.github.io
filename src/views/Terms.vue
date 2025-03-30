<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text p-6">
    <div class="max-w-4xl mx-auto pt-24 space-y-8">
      <header class="space-y-4">
        <h1 class="text-4xl font-bold">Terms of Service</h1>
        <p class="text-xl text-invoke-accent">Our commitment to you</p>
      </header>

      <div class="prose prose-invert max-w-none space-y-8">
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Agreement to Terms</h2>
          <p class="text-lg text-invoke-text/80">
            By accessing or using our services, you agree to be bound by these Terms of Service. 
            If you disagree with any part of these terms, you may not access our services.
          </p>
        </div>

        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Services</h2>
          <p class="text-lg text-invoke-text/80">
            INVOKE provides software development and consulting services. Our services include:
          </p>
          <ul class="list-disc pl-6 text-invoke-text/80">
            <li>Custom software development</li>
            <li>Technical consulting</li>
            <li>System architecture design</li>
            <li>Project management</li>
          </ul>
        </div>

        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Intellectual Property</h2>
          <p class="text-lg text-invoke-text/80">
            Unless otherwise agreed in writing:
          </p>
          <ul class="list-disc pl-6 text-invoke-text/80">
            <li>We retain ownership of our pre-existing intellectual property</li>
            <li>You retain ownership of your pre-existing intellectual property</li>
            <li>You own the intellectual property rights to custom software we develop specifically for you</li>
            <li>We retain the right to use and implement general concepts and techniques developed during our work</li>
          </ul>
        </div>

        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Limitation of Liability</h2>
          <p class="text-lg text-invoke-text/80">
            INVOKE shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
          </p>
        </div>

        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Contact Us</h2>
          <p class="text-lg text-invoke-text/80">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <router-link to="/contact" class="text-invoke-accent hover:text-invoke-text transition-colors">
            Contact Page
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Terms'
}
</script> 