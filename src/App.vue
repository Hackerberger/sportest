<template>
  <v-app style="background:black" dark>
    <v-app-bar app color="#161616">
      <v-container fluid>
        <v-layout justify-center align-center>
          <img
            v-if="
              $route.name == 'home' ||
                $route.name == 'login' ||
                $route.name == 'statistics' ||
                $route.name == 'test'
            "
            @click="$router.push({ name: 'home' })"
            class="logo mt-1"
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
            v-if="
              $route.name == 'home' ||
                $route.name == 'statistics' ||
                $route.name == 'home_l' ||
                $route.name == 'statistics_l'
            "
            id="logout"
            color="#161616"
            class="primary--text"
            fab
            depressed
            rounded
            @click="logout()"
          >
            <v-icon>mdi-account-remove</v-icon>
          </v-btn>
        </v-layout>
      </v-container>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view
        @userLogin="userLogin()"
        :globalData="globalData"
        @googleUserData="data => (globalData.googleUser = data)"
        @testCreated="testCreated"
      ></router-view>
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

        <v-btn
        id="home"
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
import axios from 'axios';

import PouchDB from 'pouchdb';
import PouchDBAuthentication from 'pouchdb-authentication';
PouchDB.plugin(PouchDBAuthentication);

export default {
  name: 'App',
  components: {},
  data() {
    return {
      globalData: {},
      db: {},
      username: '',
      token: '',
      dbname: ''
    };
  },
  methods: {
    logout() {
      this.$router.push({ name: 'login' });

      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function() {
        console.log('Abmeldung erfolgreich!');
      });
      alert('Abmeldung erfolgreich!');
    },
    async userLogin() {
      await this.getToken();

      await this.pouchDBSetup();
      await this.getAllData();
    },
    async getToken() {
      let res = await axios.post(
        'https://sportest-auth-server.azurewebsites.net/auth/token',
        {
          email: this.globalData.googleUser.getBasicProfile().getEmail(),
          token: this.globalData.googleUser.getAuthResponse().id_token
        }
      );
      console.log(res.data);
      this.username = res.data.username;
      this.token = res.data.token;
      this.dbname = res.data.dbname;
    },
    pouchDBSetup() {
      const remoteOptions = {
        skip_setup: true,
        fetch: (url, opts) => {
          opts.headers.set('X-Auth-CouchDB-UserName', this.username);
          opts.headers.set('X-Auth-CouchDB-Roles', '');
          opts.headers.set('X-Auth-CouchDB-Token', this.token);

          return PouchDB.fetch(url, opts);
        }
      };

      this.db = new PouchDB(
        'http://51.144.121.173:5984' + this.dbname,
        remoteOptions
      );
      this.db.info().then(function(params) {
        console.log(params);
      });
    },
    async getAllData() {
      await this.db.allDocs({ include_docs: true }).then(docs => {
        this.globalData.tests = [];
        docs.rows.forEach(element => {
          this.globalData.tests.push(element.doc);
        });
      });
    },
    testCreated(test) {
      this.db.post(test).then(async () => {
        this.$router.push({ name: 'statistics' });
      }).catch((error)=>{
        console.log(error);
      })
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
