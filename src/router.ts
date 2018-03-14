import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
import Console from './views/Console.vue';
import Home from './views/Home.vue';
import { Routes } from '@/router/routes';

Vue.use(Router);

const router =  new Router({
  routes: [
    {
      path: '/',
      component: Console,
      redirect: Routes.HOME,
      children: [
        {
          path: 'home',
          name: Routes.HOME,
          meta: {title: "Home"},
          component: Home,
        },
        {
          path: 'about',
          meta: {title: "About"},
          name: Routes.ABOUT,
          component: About,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  window.document.title = `Predix Seed - ${to.meta.title}`;
  next();
});

export default router;
