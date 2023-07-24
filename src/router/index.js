import { createRouter, createWebHistory } from 'vue-router'
import IndexView from "@/views/IndexView.vue";

const routes = [
  {
    path: '/',
    name: 'IndexView',
    component: IndexView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/page/product/list',
    name: 'ProductListView',
    component: () => import('../views/ProductListView.vue')
  },
  {
    path: '/page/product/detail',
    name: 'ProductDetailView',
    component: () => import('../views/ProductDetailView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
