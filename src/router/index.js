import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@views/HomeView.vue') },
    { path: '/blog', name: 'blog', component: () => import('@views/BlogView.vue') },
    { path: '/blog/:slug', name: 'blog-post', component: () => import('@views/BlogPostView.vue') },
    { path: '/service', name: 'service', component: () => import('@views/ServiceView.vue') },
    { path: '/project', name: 'project', component: () => import('@views/ProjectView.vue') },
    { path: '/project/:slug', name: 'project-post', component: () => import('@views/ProjectPostView.vue') },
    { path: "/team", name: "team", component: () => import('@views/TeamView.vue') },
    { path: "/order", name: "order", component: () => import('@views/OrderView.vue') },
    { path: '/login', name: "login", component: () => import('@views/LoginPage.vue') }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});

export default router;
