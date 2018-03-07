import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import { createStore } from './store/store';

Vue.config.productionTip = false;

Vue.config.ignoredElements = [
  'px-app-nav',
];

Vue.use(Vuex);

new Vue({
  router,
  store: createStore(),
  render: (h) => h(App),
}).$mount('#app');
