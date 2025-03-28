<template>
  <nav class="fixed top-0 right-0 p-6 z-10">
    <ul class="flex items-center space-x-8 text-invoke-text/80">
      <li>
        <router-link to="/stories" class="hover:text-invoke-text transition-colors duration-200">Stories</router-link>
      </li>
      <li>
        <router-link to="/about" class="hover:text-invoke-text transition-colors duration-200">About</router-link>
      </li>
      <li>
        <router-link to="/contact" class="hover:text-invoke-text transition-colors duration-200 px-4 py-1.5 border border-invoke-border/30 rounded-lg hover:border-invoke-border">
          Contact
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script> 