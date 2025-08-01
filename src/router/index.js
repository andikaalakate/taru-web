import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@views/HomeView.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("@views/HomeBlogView.vue"),
    },
    {
      path: "/what-we-can",
      name: "services",
      component: () => import("@views/ServiceView.vue"),
    },
    {
      path: "/project",
      name: "project",
      component: () => import("@views/ProjectView.vue"),
    },
    {
      path: "/team",
      name: "team",
      component: () => import("@views/TeamView.vue"),
    },
    {
      path: "/order",
      name: "order",
      component: () => import("@views/OrderView.vue"),
    },
  ],
});

export default router;
