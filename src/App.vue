<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <div class="flex">
      <NavBar />
      <main class="flex-1 relative overflow-y-scroll">
        <RouterView />
        <footer class="absolute bottom-1 left-0 right-0">
          <p class="text-center text-gray-500 text-xs mt-4">tik-demo v.0.0.1-beta PowerBy RCN Product | SupportBy Capybara Hub</p>
        </footer>
      </main>
    </div>
  </div>
</template>