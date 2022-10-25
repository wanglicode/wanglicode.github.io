import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/day1",
  },
  {
    path:"/day1",
    component: () => import("@/views/day1"),
  }
  ,
  {
    name: "group",
    path: "/group",
    component: () => import("@/views/group"),
  },
  {
    name: "img",
    path: "/img",
    component: () => import("@/views/image"),
  },
  {
    name: "line",
    path: "/line",
    component: () => import("@/views/lineBox"),
  },
  {
    name: "dir",
    path: "/dir",
    component: () => import("@/views/dir"),
  },

  {
    name: "clone",
    path: "/clone",
    component: () => import("@/views/cloneDeep"),
  },

  {
    name: "demo",
    path: "/demo",
    component: () => import("@/views/demo/demo"),
  },

  {
    name: "onSale",
    path: "/onSale",
    component: () => import("@/views/spumanager/spulist/onSale"),
  },

  {
    name: "cas",
    path: "/cas",
    component: () => import("@/views/Cascader"),
  },

  {
    name: "richText",
    path: "/richText",
    component: () => import("@/views/richText"),
  },
  {
    name: "draggable",
    path: "/draggable",
    component: () => import("@/views/draggable"),
  },
  {
    name: "layout",
    path: "/layout",
    component: () => import("@/views/layout"),
  },
  {
    name: "a",
    path: "/a",
    component: () => import("@/views/demo/a.vue"),
  },
  {
    name: "open",
    path: "/open",
    component: () => import("@/views/demo/open.vue"),
  },
  {
    name: "b",
    path: "/b",
    component: () => import("@/views/demo/b.vue"),
  },
  // {
  //   name: "login",
  //   path: "/login",
  //   component: () => import("@/views/demo/b.vue"),
  // },
  {
    name: "right",
    path: "/right",
    component: () => import("@/views/demo/right.vue"),
  },
  {
    name: "test",
    path: "/test",
    component: () => import("@/views/demo/test.vue"),
  },
  {
    name: "father",
    path: "/father",
    component: () => import("@/views/father.vue"),
  },
  {
    name: "luckwheel",
    path: "/luckwheel",
    component: () => import("@/views/luckwheel"),
  },
];


const router = new VueRouter({
  routes
})

export default router
