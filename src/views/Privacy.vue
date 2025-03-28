<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text p-6">
    <div class="max-w-4xl mx-auto pt-24 space-y-12">
      <header class="space-y-4">
        <h1 class="text-4xl font-bold">Privacy Policy</h1>
        <p class="text-xl text-invoke-accent">Last updated: {{ new Date().toLocaleDateString() }}</p>
      </header>

      <div class="prose prose-invert max-w-none space-y-8">
        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">1. Information We Collect</h2>
          <p class="text-invoke-text/80">
            We collect information that you provide directly to us, including:
          </p>
          <ul class="list-disc pl-6 text-invoke-text/80 space-y-2">
            <li>Name and contact information</li>
            <li>Project details and requirements</li>
            <li>Communication preferences</li>
            <li>Any other information you choose to provide</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">2. How We Use Your Information</h2>
          <p class="text-invoke-text/80">
            We use the information we collect to:
          </p>
          <ul class="list-disc pl-6 text-invoke-text/80 space-y-2">
            <li>Provide and maintain our services</li>
            <li>Process your project requests</li>
            <li>Communicate with you about our services</li>
            <li>Send you updates and marketing communications (with your consent)</li>
            <li>Improve our services and develop new features</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">3. Information Sharing</h2>
          <p class="text-invoke-text/80">
            We do not sell or rent your personal information to third parties. We may share your information with:
          </p>
          <ul class="list-disc pl-6 text-invoke-text/80 space-y-2">
            <li>Service providers who assist in our operations</li>
            <li>Professional advisors and consultants</li>
            <li>Law enforcement when required by law</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">4. Data Security</h2>
          <p class="text-invoke-text/80">
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">5. Your Rights</h2>
          <p class="text-invoke-text/80">
            You have the right to:
          </p>
          <ul class="list-disc pl-6 text-invoke-text/80 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Object to processing of your information</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">6. Contact Us</h2>
          <p class="text-invoke-text/80">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p class="text-invoke-text/80">
            Email: privacy@invoke.dev
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Privacy'
}
</script> 