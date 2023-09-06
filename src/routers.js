import { createRouter, createWebHistory } from 'vue-router';

export default {
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: { title: '智能网站开发' },
      component: () => import('@/view/home/home.vue'),
    },
    {
      path: '/css-editor',
      meta: { title: 'css编辑器' },
      component: () => import('@/view/css-editor/css-editor.vue'),
    },
  ],
};
