<script setup lang="ts">

import Card from 'primevue/card'

const article = {
  title: "The Sunburn Risk Many Australians Don’t Realise",
  content: `
We all know how to lather on sunscreen and pop a hat on the kids before a day outside. But it’s just as important to think about their eyes—because the sun can hurt them too.

Sunlight contains invisible ultraviolet (UV) rays that can bother and even injure the surface of the eye.

Kids often spend a lot of time outdoors and may not notice discomfort.

In Australia, UV exposure remains strong even on cloudy days.

Dr Christine Do states that cumulative UV exposure can cause irreversible damage over time.

Choosing sunglasses:

• Category 2 – Everyday use  
• Category 3 – Bright conditions  
• Category 4 – Maximum protection  

Protecting children’s eyes daily is essential.
`
}
</script>

<template>
  <div class="px-4 py-5 flex justify-content-center">

    <Card 
      class="max-w-3xl w-full"
      style="background:#e4f0d0; border:1px solid #c2d8b9;"
    >

      <template #title>
        <h1 style="color:#000000; font-weight:700;">
          {{ article.title }}
        </h1>
      </template>

      <template #content>
        <p 
          style="color:#000000; line-height:1.7; white-space:pre-line;"
        >
          {{ article.content }}
        </p>
      </template>

    </Card>

  </div>
</template>