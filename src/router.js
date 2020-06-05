import Vue from "vue";
import Router from "vue-router";

import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import Home_L from "./views/Home_lehrer.vue";
import Test from "./views/TestForm.vue";
import Statistics from "./views/Statistics.vue";
import Statistics_L from "./views/Statistics_lehrer.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/home_l",
      name: "home_l",
      component: Home_L
    },
    {
      path: "/test",
      name: "test",
      props: true,
      component: Test
    },
    {
      path: "/statistics",
      name: "statistics",
      props: true,
      component: Statistics
    },
    {
      path: "/statistics_l",
      name: "statistics_l",
      props: true,
      component: Statistics_L
    }
  ]
});
