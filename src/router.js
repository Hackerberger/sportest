import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/test',
      name: 'test',
      props: true,
      component: () =>
        import(/* webpackChunkName: "test" */ './components/TestForm.vue'),
    },
    {
      path: '/statistics',
      name: 'statistics',
      props: true,
      component: () =>
        import(/* webpackChunkName: "statistics" */ './views/Statistics.vue'),
    }
  ],
});
