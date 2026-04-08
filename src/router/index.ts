import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/AboutUs.vue'
import Article from '../components/Article.vue'
import Category from '../components/Categories.vue'
import EyeTest from '../components/EyeTest.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/articles', name: 'Articles', component: Article },
  { path: '/categories', name: 'Categories', component: Category },
  { path: '/eye-test', name: 'EyeTest', component: EyeTest },

  // Article Detail Page
  {
    path: '/articles/:id',
    name: 'ArticleDetail',
    component: () => import('../components/ArticleDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router