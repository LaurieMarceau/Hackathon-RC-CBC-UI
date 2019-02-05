import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './home/HomePage.vue';
import ReaderPage from './reader/ReaderPage.vue';
import HomePub from './sidebar/HomePub.vue';
import TouTv from './mockTOUTV/HomeTouTV.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),

  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: HomePub,
    },
  }, {
    path: '/reader/:id',
    name: 'Reader',
    components: {
      default: ReaderPage,
      sidebar: HomePub,
    },
  }, {
    path: '/toutv',
    name: 'Toutv',
    components: {
      default: TouTv,
      sidebar: HomePub,
    },
  },
  ],
});
