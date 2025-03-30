<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text p-6">
    <div class="max-w-4xl mx-auto pt-24 space-y-8">
      <header class="space-y-4">
        <h1 class="text-4xl font-bold">Privacy Policy</h1>
        <p class="text-xl text-invoke-accent">How we handle and protect your data</p>
      </header>

      <div class="prose prose-invert max-w-none space-y-8">
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Introduction</h2>
          <p class="text-lg text-invoke-text/80">
            At INVOKE, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </div>

        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Information We Collect</h2>
          <p class="text-lg text-invoke-text/80">
            We collect information that you voluntarily provide to us when you:
          </p>
          <ul class="list-disc pl-6 text-invoke-text/80">
            <li>Contact us through our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Request a quote or consultation</li>
            <li>Apply for a position</li>
          </ul>
        </div>

        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">How We Use Your Information</h2>
          <p class="text-lg text-invoke-text/80">
            We use the information we collect to:
          </p>
          <ul class="list-disc pl-6 text-invoke-text/80">
            <li>Respond to your inquiries</li>
            <li>Process your requests</li>
            <li>Send you our newsletter (if subscribed)</li>
            <li>Improve our services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Data Security</h2>
          <p class="text-lg text-invoke-text/80">
            We implement appropriate technical and organizational security measures to protect 
            your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </div>

        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Contact Us</h2>
          <p class="text-lg text-invoke-text/80">
            If you have questions about this Privacy Policy, please contact us at:
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
  name: 'Privacy'
}
</script> 