<script setup>
import Button from 'primevue/button'
import 'primeflex/primeflex.css'
import '../styles/home.css' // adjust if your path is different

import heroImage from '../assets/kidpage.jpg'
</script>

<template>
  <section class="hero-container">
    
    <!-- LEFT CONTENT -->
    <div class="hero-content">
      <h1 class="hero-title">
        <span>Help your kid unlock their full potential</span>
        <span> with the right vision care</span>
      </h1>
      

      <p class="hero-text">
   Our optometrists have a special interest in children’s vision and myopia management. Book in today for a comprehensive vision assessment at one of our 5 Sydney locations!
      </p>

       
      <div class="hero-button">
        <RouterLink to="/eye-test">
          <Button label="Book an Eye Test" />
        </RouterLink>
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