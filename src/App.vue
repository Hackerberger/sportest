<template>
  <v-app style="background:black" dark>
    <v-app-bar app style="background: black">
      <v-btn
        icon
        v-if="$route.name !== 'home' && $route.name !== 'login' && $route.name !== 'statistics'"
        @click="$router.go(-1) "
      ></v-btn>
      <v-container fluid>
        <v-layout justify-center>
          <img
            @click="$router.push({ name:'home'})"
            class="logo"
            small
            src="./../public/img/Sportest_Logo.png"
          />
        </v-layout>
      </v-container>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <!--  Navbar unten  -->
    <v-container v-if="$route.name == 'home' || $route.name == 'statistics'">
      <v-bottom-navigation
        block
        :value="true"
        id="Nav"
        fixed
        background-color="black !important"
        grow
      >
        <!-- <v-divider color="green !important"
        ></v-divider>-->

        <v-btn @click="$router.push({ name:'home'})" color="black" value="home">
          <span class="orange--text">Home</span>
          <v-icon class="orange--text">mdi-home</v-icon>
        </v-btn>

        <v-btn @click="$router.push({ name:'statistics'})" color="black" value="statistic">
          <span class="orange--text">Statistic</span>
          <v-icon class="orange--text">mdi-chart-bar</v-icon>
        </v-btn>
      </v-bottom-navigation>

      <v-btn
        fab
        dark
        color="orange"
        @click="$router.push({ name:'test'})"
        absolute
        :style="{left: '50%', bottom:'5%', transform:'translateX(-50%)' }"
        bottom
        fixed
        align-center
        right
      >
        <v-icon dark class="white--text">mdi-plus</v-icon>
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
      globalData: {}
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

#Nav {
  border-top: orange 1.5px solid !important;
}
</style>
