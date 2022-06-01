import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/home.vue'
import AboutPage from '@/pages/about.vue'
import NotFoundPage from '@/pages/notFound.vue'

const routerHistory = createWebHistory()

const routes = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: "/:pathMatch(.*)",
      name: 'NotFoundPage',
      component: NotFoundPage
    }
  ]
})

export default routes
