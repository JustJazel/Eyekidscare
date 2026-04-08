<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import logo from '../assets/eyecarekids logo.png'
import '../styles/home.css'

const items = ref([
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Articles', to: '/articles' },
  { label: 'Categories', to: '/categories' }
])



const hovered = ref<string | null>(null)

const linkColor = ref('#000000') // default text color
</script>

<template>
  <Menubar :model="items" class="navbar px-4">

    <!-- LOGO -->
    <template #start>
      <RouterLink to="/" class="flex align-items-center">
        <img :src="logo" class="h-3rem mr-2" />
      </RouterLink>
    </template>

    <!-- MENU -->
 <template #item="{ item, props }">
  <RouterLink
    v-bind="props.action"
    :to="item.to"
    class="nav-link"
    :style="{ color: hovered === item.label ? '#ffffff' : '#000000' }"
    @mouseover="hovered = (item.label as string) || null"
    @mouseleave="hovered = null"
  >
    <span>{{ item.label }}</span>
  </RouterLink>
</template>


    <!-- CTA -->
    <template #end>
      <RouterLink to="/eye-test">
        <Button label="Book an Eye Test" class="cta-btn" />
      </RouterLink>
    </template>

  </Menubar>
</template>