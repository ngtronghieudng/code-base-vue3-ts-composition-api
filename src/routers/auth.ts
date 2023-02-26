import constants from '@/constants'
import Login from '@/pages/auth/index.vue'

export const authRoute = [
  {
    path: constants.routePages.ROOT,
    redirect: constants.routePages.LOGIN,
  },
  {
    path: constants.routePages.LOGIN,
    component: Login,
  },
]
