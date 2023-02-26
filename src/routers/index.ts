import { createRouter, createWebHistory } from 'vue-router'
import { homePageRoute } from './home-page'
import { authRoute } from './auth'

const routes = [...homePageRoute, ...authRoute]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
