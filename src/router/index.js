import { createRouter, createWebHistory } from 'vue-router'
import DisplayView from '../views/DisplayView.vue'

import EditPath from '../views/EditPath.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'display',
      component: DisplayView,
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditPath,
    },
  ],
})

export default router
