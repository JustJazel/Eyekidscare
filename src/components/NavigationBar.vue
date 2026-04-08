<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Let\'s Connect', to: '/contact' }
])
</script>

<template>
  <Menubar :model="items" class="px-4">
    
    <!-- LOGO -->
    <template #start>
      <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-10">
        <path d="..." fill="var(--p-primary-color)" />
        <path d="..." fill="var(--p-text-color)" />
      </svg>
    </template>

    <!-- MENU ITEMS -->
    <template #item="{ item, props }">
      <RouterLink
        v-ripple
        v-bind="props.action"
        :to="item.to"
        class="flex items-center px-4 py-3 text-lg font-semibold transition-all duration-200 hover:text-primary"
      >
        <span>{{ item.label }}</span>
      </RouterLink>
    </template>

    <!-- RIGHT -->
    <template #end>
    
    </template>

  </Menubar>
</template>