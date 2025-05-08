<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text p-6">
    <div class="max-w-4xl mx-auto pt-24 space-y-16">
      <header class="space-y-4">
        <h1 class="text-4xl font-bold">About Us</h1>
        <p class="text-xl text-invoke-accent">Built by developers who actually ship products</p>
      </header>

      <div class="prose prose-invert max-w-none space-y-8">
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold">Our Story</h2>
          <p class="text-lg text-invoke-text/80">
            We started INVOKE out of frustration with how software gets built these days. 
            Too many meetings, too much planning, and way too many over-engineered solutions
            that waste months of development time. So we built a better way.
          </p>
          <p class="text-lg text-invoke-text/80">
            Our team brings together technical expertise and business insight to create solutions that matter. We focus on what drives real value - not buzzwords or over-engineered complexity. By understanding your business goals first, we build exactly what you need: powerful, efficient, and scalable systems. Our approach cuts through the usual tech noise to deliver meaningful results on accelerated timelines. We operate at the intersection of technical excellence and commercial impact - where code meets ROI.
          </p>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 pt-8">
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-invoke-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 class="text-xl font-semibold">Speed First</h3>
            </div>
            <p class="text-invoke-text/80">
              We believe in rapid iteration and quick wins. Our projects go from 
              concept to working prototype in 1-2 weeks. We focus on core functionality 
              first and only add complexity when it provides real value.
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-invoke-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 class="text-xl font-semibold">Quality Built In</h3>
            </div>
            <p class="text-invoke-text/80">
              Fast doesn't mean sloppy. We maintain high standards through automated testing, 
              observability with tools like Langfuse, and battle-tested best practices. We know 
              where to focus quality efforts for maximum impact.
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-invoke-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              <h3 class="text-xl font-semibold">Direct Communication</h3>
            </div>
            <p class="text-invoke-text/80">
              No account managers or unnecessary layers. You work directly with the people 
              building your product. We use async communication when possible and jump on 
              quick calls when needed to make sure we're aligned and moving fast.
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-invoke-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h3 class="text-xl font-semibold">Business Impact</h3>
            </div>
            <p class="text-invoke-text/80">
              Every feature we build ties back to business value. We help prioritize what 
              will drive real results and focus development efforts where they matter most - 
              whether that's an AI-powered feature or a cloud infrastructure upgrade.
            </p>
          </div>
        </div>

        <div class="pt-6 pb-10">
          <router-link to="/contact" class="inline-block px-6 py-2 bg-invoke-text text-invoke-bg rounded-xl hover:bg-invoke-accent transition-all duration-200 hover:shadow-lg">
            Work With Us
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script> 