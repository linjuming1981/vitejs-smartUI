import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      meta: { title: '智能网站开发' },
      component: () => import('@/view/home/home.vue'),
    },
    {
      name: 'css-editor',
      path: '/css-editor',
      meta: { title: 'css编辑器' },
      component: () => import('@/view/css-editor/css-editor.vue'),
    },
    {
      name: 'echarts',
      path: '/echarts',
      meta: { title: 'echarts图表' },
      component: () => import('@/view/echarts/echarts.vue'),
    },
  ],
});
