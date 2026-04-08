<script setup lang="ts">
import { ref } from 'vue'
import Divider from 'primevue/divider'

import logo from '../assets/eyecarekids logo.png'

const year = new Date().getFullYear()

const links = ref([
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Articles', to: '/articles' },
  { label: 'Categories', to: '/categories' }
])
</script>

<template>
  <footer 
    class="px-4 py-4"
    style="background: #EFF2EB; border-top: 1px solid #c2d8b9;"
  >

    <!-- TOP ROW -->
    <div class="grid align-items-center">

      <!-- LOGO -->
      <div class="col-12 md:col-3 flex align-items-center">
        <RouterLink to="/" class="flex align-items-center no-underline">
          <img :src="logo" class="h-2rem mr-2" />
          <span style="color: #1a1a1a; font-weight: 600; font-size: 1.1rem;">
            Eyecare Kids
          </span>
        </RouterLink>
      </div>

      <!-- NAV LINKS -->
      <div class="col-12 md:col-6 flex flex-wrap gap-3 md:justify-content-center text-sm">
        <RouterLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="no-underline"
          style="color: #515151; font-weight: 500;"
        >
          {{ link.label }}
        </RouterLink>
      </div>

      <!-- SOCIALS -->
      <div class="col-12 md:col-3 flex md:justify-content-end gap-3 text-lg mt-2 md:mt-0">
        <a href="https://www.facebook.com/eyecarekids" target="_blank" style="color: #515151;">
          <i class="pi pi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/eyecarekids/" target="_blank" style="color: #515151;">
          <i class="pi pi-instagram"></i>
        </a>
        <a href="https://au.pinterest.com/eyecarekids/" target="_blank" style="color: #515151;">
          <i class="pi pi-pinterest"></i>
        </a>
      </div>

    </div>

    <!-- CONTACT ROW -->
    <div 
      class="text-center text-xs mt-3 flex flex-wrap justify-content-center gap-2"
      style="color: #515151;"
    >
      <span>Bankstown (02) 9790 5343</span>
      <span>|</span>
      <span>Chullora (02) 9642 7799</span>
      <span>|</span>
      <span>Hillsdale (02) 9311 4600</span>
      <span>|</span>
      <span>Kareela (02) 9528 2041</span>
      <span>|</span>
      <span>Roselands (02) 9740 4675</span>
    </div>

    <!-- DIVIDER -->
    <Divider class="my-3" />

    <!-- BOTTOM BAR -->
    <div 
      class="flex flex-column md:flex-row justify-content-between align-items-center text-xs gap-2"
      style="color: #515151;"
    >

      <span>© {{ year }} Eyecare Kids</span>

      <!-- POLICIES -->
      <div class="flex gap-3">
        <RouterLink to="/privacy" class="no-underline" style="color: #1a1a1a;">
          Privacy
        </RouterLink>
        <RouterLink to="/terms" class="no-underline" style="color: #1a1a1a;">
          Terms
        </RouterLink>
      </div>

    </div>

  </footer>
</template>