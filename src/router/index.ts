import { createRouter, createWebHistory } from 'vue-router'
import WebugView from '../views/WebugView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WebugView,
      props: {bg_image: '/bg_bench.jpg'}
    },
  ],
})

export default router
