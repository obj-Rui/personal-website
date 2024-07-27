import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('@/views/home/home.vue');
const Article = () => import('@/views/article/article.vue');

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home, meta: { transition: 'slide-right' }, alias: '/home' },
  { path: '/home', redirect: '/' },
  { path: '/article/:id', component: Article, meta: { transition: 'slide-left' } },
  //登录
  { path: '/login', name: 'login', component: () => import('@/views/basic/login/index.vue') },
  // 注册
  { path: '/register', name: 'register', component: () => import('@/views/basic/login/register.vue') },
  // 未找到页面
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/basic/404/index.vue') },
];
// app router
export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: routes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0, behavior: 'smooth' }),
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}
