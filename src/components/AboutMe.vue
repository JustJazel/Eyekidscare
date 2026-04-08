<script setup lang="ts">
import Card from 'primevue/card'
import Divider from 'primevue/divider'
//import 'primevue/resources/themes/saga-blue/theme.css'
//import 'primeicons/primeicons.css'
import '../styles/about-me.css'
</script>

<template>
  <section class="about-container">

    <!-- HEADER -->
    <div class="about-header">
      <h1>About Me</h1>
      <p>Get to know who I am, what I do, and what I love.</p>
      <Divider class="my-4" />
    </div>

    <!-- GRID CONTENT -->
    <div class="about-grid">

      <!-- EDUCATION -->
      <Card class="about-card">
        <h2>🎓 Educational Background</h2>

        <Divider />

        <h3>Silliman University</h3>
        <p class="text-muted italic">Bachelor of Science in Information Technology (Aug 2021 – May 2025)</p>
        <ul>
          <li>IT Representative (S.Y. 2023–2024), leading projects and peers</li>
          <li>Full-stack developer for multi-tenant CMS food park capstone project</li>
        </ul>

        <h3>Ramon Teves Pastor Memorial – Dumaguete Science High School</h3>
        <p class="text-muted italic">June 2015 – May 2021</p>
        <ul>
          <li>Graduated with <strong>High Honors</strong></li>
          <li>Vice President of Apothegm English Club (S.Y. 2019–2020)</li>
          <li>Scientific Investigatory Project on sea urchin embryonic development</li>
        </ul>
      </Card>

      <!-- CAREER -->
      <Card class="about-card">
        <h2>💼 Career Path</h2>
        <Divider />

        <ul>
          <li>
            <strong>Foundations in Technology & Leadership (2015–2021)</strong><br>
            Built strong academic foundations at Dumaguete Science High School, early leadership and research roles.
          </li>
          <li>
            <strong>Academic Growth & Capstone Leadership (2021–2025)</strong><br>
            IT Representative at Silliman University and full-stack capstone project.
          </li>
          <li>
            <strong>Entry into Professional Development (2025)</strong><br>
            Interned at Miller Solutions Development Inc., working with Nuxt & TypeScript.
          </li>
          <li>
            <strong>Specialized Web Development Roles (2025–2026)</strong><br>
            Worked with Luxury Presence (Web Builder) and Ivy’s VA Services (Full Stack Developer).
          </li>
          <li>
            <strong>Creative & Entrepreneurial Ventures (2022–Present)</strong><br>
            Freelance Digital Artist/Writer and managed Printing Services business.
          </li>
        </ul>
      </Card>

      <!-- HOBBIES -->
      <Card class="about-card">
        <h2>🎨 Hobbies</h2>
        <Divider />
        <p>
          I enjoy photography, digital art, gaming, music, dancing, and exploring creative tools. Each hobby fuels creativity and keeps me grounded.
        </p>
      </Card>

      <!-- LIFE & WORKS -->
      <Card class="about-card">
        <h2>🌱 Life & Works</h2>
        <Divider />
        <p>
          Life is a blend of creativity, companionship, and expression. I share days with my pets, write stories, produce podcasts, and create music. My work reflects the life I live and the passions I pursue.
        </p>
      </Card>

    </div>
  </section>
</template>