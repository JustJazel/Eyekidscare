import { createRouter, createWebHistory } from 'vue-router'
import Home from'../components/Home.vue'
import About from '../components/AboutMe.vue'
import Portfolio from '../components/Portfolio.vue'
import Contact from '../components/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/portfolio', component: Portfolio },
  { path: '/contact', component: Contact }
]

export default createRouter({
  history: createWebHistory(),
  routes
})