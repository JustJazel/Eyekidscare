<script setup lang="ts">
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import '../styles/home.css'

import { ref } from 'vue'

const activeIndex = ref<number | null>(null)

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index}
</script>

<template>
  <section class="article-page flex justify-content-center p-6">
    
    <div class="w-full max-w-4xl">

    

      <!-- MAIN CARD -->
      <Card class="article-card">

        <template #title>
          <h1 class="article-title">
            The Sunburn Risk Many Australians Don’t Realise
          </h1>
        </template>

        <template #content>

          <!-- INTRO -->
          <p class="article-text mb-3">
            We all know how to lather on sunscreen and pop a hat on the kids before a day outside. But it’s just as important to think about their eyes—because the sun can hurt them too.
          </p>

          <p class="article-text mb-3">
            Sunlight contains invisible ultraviolet (UV) rays that can bother and even injure the surface of the eye.
          </p>

          <p class="article-text mb-4">
            Kids spend a lot of time outdoors, so it’s important to make sure they’re protected.
          </p>

          <Divider />

          <!-- QUOTE -->
          <blockquote class="article-quote mb-4">
            “You may not see the effects of sun damage straight away, but cumulative UV exposure can cause irreversible damage many years later.”
          </blockquote>

          <Divider />

          <!-- SECTION -->
          <h3 class="article-heading mb-3">
            Choosing sunglasses that actually protect
          </h3>

          <p class="article-text mb-3">
            Not all sunglasses protect eyes equally. Look for categories 2, 3 or 4.
          </p>

         <div class="custom-accordion">

    <div class="accordion-item" v-for="(item, i) in [
      { title: 'Category 2 – Everyday Protection', content: 'Good for everyday outdoor activities.' },
      { title: 'Category 3 – High Protection', content: 'Stronger protection for bright conditions.' },
      { title: 'Category 4 – Maximum Protection', content: 'Very high protection but not for driving.' }
    ]" :key="i">

      <!-- HEADER -->
      <button class="accordion-header" @click="toggle(i)">
        <span>{{ item.title }}</span>
        <span class="icon" :class="{ open: activeIndex === i }">+</span>
      </button>

      <!-- CONTENT -->
      <div 
        class="accordion-content"
        :class="{ open: activeIndex === i }"
      >
        <p class="article-text">{{ item.content }}</p>
      </div>

    </div>

  </div>

          <h3 class="article-heading mb-3">
            Everyday habits build better eye health
          </h3>

          <p class="article-text">
            Making sunglasses part of daily life helps protect children’s eyesight long term.
          </p>

        </template>

      </Card>

    </div>

  </section>
</template>