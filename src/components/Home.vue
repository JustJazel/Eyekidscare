<script setup>
import Button from 'primevue/button'
import 'primeflex/primeflex.css'
import '../styles/home.css' // adjust if your path is different

import heroImage from '../assets/Jazel Equia.png'
</script>

<template>
  <section class="hero-container">
    
    <!-- LEFT CONTENT -->
    <div class="hero-content">
      <h1 class="hero-title">
        <span>Jazel Cal Equia</span>
        <span> Software Engineer, Graphic Designer & Artist, Photographer and Editor</span>
      </h1>
      

      <p class="hero-text">
     Where art and engineering shake hands.
      </p>

      <div class="hero-button">
        <a href="mailto:equiajazel@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Jazel,%20Enter%20your%20message%20here...">
          <Button label="Let's Connect" />
        </a>
      </div>
    </div>

    <!-- RIGHT IMAGE -->
    <div class="hero-image-wrapper">
      <div class="hero-overlay"></div>

      <img
        :src="heroImage"
        alt="Jazel Equia"
      />
    </div>

  </section>
</template>