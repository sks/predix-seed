import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import { Routes } from '@/router/routes';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: Routes.HOME,
      children: [
        {
          path: 'home',
          name: Routes.HOME,
          component: Home,
        },
        {
          path: 'about',
          name: Routes.ABOUT,
          component: About,
        },
      ],
    },
  ],
});
