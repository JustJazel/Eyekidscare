<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'

const articles = ref([
  {
    id: 1,
    title: "The Sunburn Risk Many Australians Don’t Realise",
    excerpt:
      "We all know how to lather on sunscreen, but protecting children’s eyes from UV rays is just as important.",
  },
  {
    id: 2,
    title: "Why Kids Need Regular Eye Checks",
    excerpt:
      "Early detection of vision problems can greatly improve your child’s development and learning.",
  },
  {
    id: 3,
    title: "Choosing the Right Glasses for Kids",
    excerpt:
      "From durability to comfort, here’s how to pick the perfect pair for your child.",
  }
])
</script>
<template>
  <div class="px-4 py-5">

    <!-- PAGE TITLE -->
    <h1 style="color:#000000;" class="text-3xl font-semibold mb-4">
      Articles
    </h1>

    <!-- GRID -->
    <div class="grid">

      <div
        v-for="article in articles"
        :key="article.id"
        class="col-12 md:col-4"
      >
        <Card 
          class="h-full border-round-xl"
          style="background:#e4f0d0; border:1px solid #c2d8b9;"
        >

          <template #title>
            <span style="color:#000000; font-weight:600; font-size:1.1rem;">
              {{ article.title }}
            </span>
          </template>

          <template #content>
            <p style="color:#000000; line-height:1.6;">
              {{ article.excerpt }}
            </p>
          </template>

          <template #footer>
            <RouterLink :to="`/articles/${article.id}`">
              <Button label="Read More" text style="color:#000000;" />
            </RouterLink>
          </template>

        </Card>
      </div>

    </div>

  </div>
</template>