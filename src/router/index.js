import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Index from '@/views/Index';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/index',
      name: 'index',
      meta: {
        pageName: '首页',
        pageCode: 'index',
      },
      component: Index,
    },
  ],
});

export default router;
