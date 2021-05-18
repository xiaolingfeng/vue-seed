import VueRouter, { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/demo/index.vue')
  }
]

export default new VueRouter({
  routes
})
