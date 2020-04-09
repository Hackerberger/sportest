<template>
  <v-app style="background:black" dark>
    <v-app-bar app color="#161616">
      <!-- background-image: linear-gradient(to top, black 0%, #333333 51%, #646464 100%); -->
      <!-- <v-btn
        icon
        v-if="$route.name !== 'home' && $route.name !== 'login' && $route.name !== 'statistics'"
        @click="$router.go(-1) "
      ></v-btn>-->
      <v-container fluid>
        <v-layout justify-center>
          <img
            v-if="
              $route.name == 'home' ||
                $route.name == 'login' ||
                $route.name == 'statistics'
            "
            @click="$router.push({ name: 'home' })"
            class="logo"
            small
            src="./../public/img/Sportest_Logo.png"
          />
          <img
            v-if="$route.name == 'test'"
            @click="$router.push({ name: 'home' })"
            class="logo"
            small
            src="./../public/img/Sportest_Logo.png"
          />
          <img
            v-if="$route.name == 'home_l' || $route.name == 'statistics_l'"
            @click="$router.push({ name: 'home_l' })"
            class="logo"
            small
            src="./../public/img/Sportest_Logo.png"
          />

          <v-btn
            v-if="$route.name == 'home'"
            id="logout"
            color="#161616"
            class="primary--text"
            fab
            depressed
            rounded
            @click="Logout()"
          >
            <v-icon>mdi-account-remove</v-icon>
          </v-btn>
        </v-layout>
      </v-container>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <!--  Navbar unten Schüler  -->
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

        <v-btn
          @click="$router.push({ name: 'home' })"
          color="black"
          value="home"
        >
          <span class="primary--text">Home</span>
          <v-icon color="primary">mdi-home</v-icon>
        </v-btn>

        <v-btn
          @click="$router.push({ name: 'statistics' })"
          color="black"
          value="statistic"
        >
          <span class="primary--text">Statistic</span>
          <v-icon color="primary">mdi-chart-bar</v-icon>
        </v-btn>
      </v-bottom-navigation>

      <v-btn
        fab
        dark
        color="white"
        @click="$router.push({ name: 'test' })"
        absolute
        :style="{ left: '50%', bottom: '4%', transform: 'translateX(-50%)' }"
        bottom
        fixed
        align-center
        right
      >
        <v-icon dark large color="#FF0000">mdi-plus</v-icon>
      </v-btn>
    </v-container>

    <!-- Navbar unten Lehrer -->
    <v-container
      v-if="$route.name == 'home_l' || $route.name == 'statistics_l'"
    >
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

        <v-btn
          @click="$router.push({ name: 'home_l' })"
          color="black"
          value="home"
        >
          <span class="primary--text">Home</span>
          <v-icon color="primary">mdi-home</v-icon>
        </v-btn>

        <v-btn
          @click="$router.push({ name: 'statistics_l' })"
          color="black"
          value="statistic"
        >
          <span class="primary--text">Statistic</span>
          <v-icon color="primary">mdi-chart-bar</v-icon>
        </v-btn>
      </v-bottom-navigation>
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
  methods: {
    Logout() {
      this.$router.push({ name: "login" });

      //gapi.auth2.getAuthInstance().signOut();
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function() {
        console.log("Abmeldung erfolgreich!");
      });
      alert("Abmeldung erfolgreich!");
    }
  }
};
</script>

<style>
img {
  margin-top: -0.5rem;
  max-height: 2.5rem;
}

#Nav {
  border-top: #ff6600 1.5px solid !important;
}

#logout {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
