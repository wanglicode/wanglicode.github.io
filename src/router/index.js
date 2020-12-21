import Vue from 'vue'
import VueRouter from 'vue-router'
import pageA from '../views/pageA.vue'
import pageB from '../views/pageB.vue'
import pageC from '../views/pageC.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/pageA',
    component: pageA,
    meta: {
      info: 'i am jack'
    }
  },
  {
    path: '/pageB',
    component: pageB,
    meta: {
      skill: 'jump'
    }
  },
  {
    path: '/pageC',
    component: pageC,
    meta: {
      friend: 'rose'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
