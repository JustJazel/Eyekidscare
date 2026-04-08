<script setup lang="ts">
import Card from 'primevue/card'
import '../styles/home.css'
</script>

<template>
  <div class="about-page px-4 py-5 flex justify-content-center">

    <div class="w-full max-w-4xl">

      <!-- HERO / INTRO -->
      <Card class="about-card mb-4 border-round-xl shadow-1">
        <template #title>
          <h1 class="text-3xl font-semibold">
            About Eyecare Kids
          </h1>
        </template>

        <template #content>
          <p class="about-text">
            We are a team of highly trained eyecare professionals who are passionate about children’s vision,
            offering a full range of optometry services for both adults and children across our 5 locations in Sydney, New South Wales.
          </p>
        </template>
      </Card>

      <!-- EXPERIENCE -->
      <Card class="about-card mb-4 border-round-xl shadow-1">
        <template #title>
          <h2 class="text-xl font-semibold">
            A Comfortable Experience for You and Your Child
          </h2>
        </template>

        <template #content>
          <p class="about-text">
            Being told that your child has poor vision can be daunting.
            Eyecare Kids was designed to make your child’s visit fun—and stress-free for you.
          </p>
        </template>
      </Card>

      <!-- TECHNOLOGY -->
      <Card class="about-card mb-4 border-round-xl shadow-1">
        <template #title>
          <h2 class="text-xl font-semibold">
            Advanced Eye Care & Early Detection
          </h2>
        </template>

        <template #content>
          <p class="about-text">
            Our comprehensive eye tests and state-of-the-art equipment allow us to detect childhood vision problems
            that may not be identified in standard school screenings.
          </p>

          <p class="about-text mt-3">
            Our experienced behavioural optometrists identify even the problems your child may not express.
          </p>
        </template>
      </Card>

      <!-- MISSION -->
      <Card class="about-card mb-4 border-round-xl shadow-1">
        <template #title>
          <h2 class="text-xl font-semibold">
            Supporting Learning Through Vision
          </h2>
        </template>

        <template #content>
          <p class="about-text">
            We understand the important role vision plays in learning.
          </p>

          <p class="about-text mt-3">
            We’re committed to detecting and addressing issues early.
          </p>

          <p class="about-text mt-3">
            We work with you to find the right solution.
          </p>
        </template>
      </Card>

      <!-- CTA -->
      <Card class="about-card border-round-xl shadow-1">
        <template #content>
          <div class="text-center">
            <h2 class="text-xl font-semibold mb-2">
              Helping Your Child Reach Their Full Potential
            </h2>

            <p class="about-text mb-3">
              With vision problems addressed early, your child is free to achieve their best.
            </p>

            <p class="font-medium">
              Let Eyecare Kids optometrists take care of your child’s eyes.
            </p>
          </div>
        </template>
      </Card>

    </div>

  </div>
</template>