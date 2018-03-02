import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
import Console from './views/Console.vue';
import Home from './views/Home.vue';
import { Routes } from '@/router/routes';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Console,
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
