<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text p-6">
    <div class="max-w-4xl mx-auto pt-24 space-y-12">
      <header class="space-y-4">
        <h1 class="text-4xl font-bold">Terms of Service</h1>
        <p class="text-xl text-invoke-accent">Last updated: {{ new Date().toLocaleDateString() }}</p>
      </header>

      <div class="prose prose-invert max-w-none space-y-8">
        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">1. Agreement to Terms</h2>
          <p class="text-invoke-text/80">
            By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">2. Services</h2>
          <p class="text-invoke-text/80">
            INVOKE provides software development and consulting services. We reserve the right to:
          </p>
          <ul class="list-disc pl-6 text-invoke-text/80 space-y-2">
            <li>Modify or discontinue any part of our services</li>
            <li>Change pricing with notice</li>
            <li>Refuse service to anyone</li>
            <li>Limit service availability</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">3. Project Terms</h2>
          <p class="text-invoke-text/80">
            For each project, we will provide:
          </p>
          <ul class="list-disc pl-6 text-invoke-text/80 space-y-2">
            <li>A detailed project scope</li>
            <li>Timeline and milestones</li>
            <li>Pricing and payment terms</li>
            <li>Deliverables and acceptance criteria</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">4. Intellectual Property</h2>
          <p class="text-invoke-text/80">
            Unless otherwise agreed in writing:
          </p>
          <ul class="list-disc pl-6 text-invoke-text/80 space-y-2">
            <li>Client retains ownership of their existing intellectual property</li>
            <li>INVOKE retains ownership of our tools, frameworks, and methodologies</li>
            <li>Project deliverables become client property upon full payment</li>
            <li>Both parties may use project work in their portfolios</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">5. Confidentiality</h2>
          <p class="text-invoke-text/80">
            Both parties agree to maintain the confidentiality of:
          </p>
          <ul class="list-disc pl-6 text-invoke-text/80 space-y-2">
            <li>Project details and requirements</li>
            <li>Technical specifications and architecture</li>
            <li>Business information and strategies</li>
            <li>Pricing and financial terms</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">6. Limitation of Liability</h2>
          <p class="text-invoke-text/80">
            INVOKE shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">7. Changes to Terms</h2>
          <p class="text-invoke-text/80">
            We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page.
          </p>
        </section>

        <section class="space-y-4">
          <h2 class="text-2xl font-semibold">8. Contact</h2>
          <p class="text-invoke-text/80">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p class="text-invoke-text/80">
            Email: legal@invoke.dev
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Terms'
}
</script> 