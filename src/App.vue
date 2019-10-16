<template>
  <v-app style="background:#05518b" dark>
    <v-app-bar app style="background: #4B7DBB">
      <v-btn
        icon
        v-if="$route.name !== 'home' && $route.name !== 'login' && $route.name !== 'statistics'"
        @click="$router.go(-1) "
      >
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-container fluid>
        <v-layout justify-center>
          <img class="logo" src="./../public/img/Sportest_Logo.png">
        </v-layout>
      </v-container>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <!--  Navbar unten  -->
    <v-container v-if="$route.name == 'home' || $route.name == 'statistics'">
      <v-bottom-navigation :value="true" fixed dark color="#00295D">
        <v-btn @click="$router.push({ name:'home'})" color="#00295D" value="home">
          <span>Home</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn @click="$router.push({ name:'statistics'})" color="teal" value="statistic">
          <span>Statistic</span>
          <v-icon>mdi-chart-bar</v-icon>
        </v-btn>
      </v-bottom-navigation>

      <v-btn
        fab
        dark
        color="indigo"
        @click="$router.push({ name:'test'})"
        absolute
        :style="{left: '50%', bottom:'5%', transform:'translateX(-50%)' }"
        bottom
        fixed
        align-center
        right
      >
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      globalData: {},
    };
  },
  methods: {}
};
</script>

<style>
img {
  margin-top: -0.5rem;
  max-height: 2.5rem;
}
</style>
