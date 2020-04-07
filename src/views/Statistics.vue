<template>
  <v-container>
    <v-layout column justify-space-between fill-height>
      <v-flex>
        <ChartCard v-for="test in tests" :key="test._id" class="mb-5" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ChartCard from '../components/ChartCard';
import axios from 'axios';

import PouchDB from 'pouchdb';
import PouchDBAuthentication from 'pouchdb-authentication';
PouchDB.plugin(PouchDBAuthentication);

export default {
  components: { ChartCard },
  data() {
    return {
      tests: [],
      username: '',
      token: '',
      dbname: '',
    };
  },
  async created() {
    await this.getToken();
    await this.getAllData();
  },
  methods: {
    async getToken() {
      let res = await axios.post('https://sportest-auth-server.azurewebsites.net/auth/token', {
        email: 'schuelertest@htlwienwest.at',
      });
      console.log(res.data);
      this.username = res.data.username;
      this.token = res.data.token;
      this.dbname = res.data.dbname;
      
    },
    getAllData() {
      const remoteOptions = {
        skip_setup: true,
        fetch: (url, opts) => {
          opts.headers.set('X-Auth-CouchDB-UserName', this.username);
          opts.headers.set('X-Auth-CouchDB-Roles', '');
          opts.headers.set('X-Auth-CouchDB-Token', this.token);

          return PouchDB.fetch(url, opts);
        },
      };

      var db = new PouchDB(
        'http://51.144.121.173:5984'+ this.dbname,
        remoteOptions,
      );
      db.info().then(function(params) {
        console.log(params);
      });

      db.allDocs().then(function(docs) {
        console.log(docs);
      });

      /* db.login(user.name, user.password, ajaxOpts)
        .then(function() {
          return db.allDocs();
        })
        .then(function(docs) {
          console.log(docs);
        })
        .catch(function(error) {
          console.error(error);
        }); */

      // var doc = {
      //   date_birth: '04-10-2000',
      //   date_test: '21-02-2020',
      //   gender: false,
      //   gewicht: 89,
      //   groeße: 129,
      //   gleichgewicht3_1: 8,
      //   gleichgewicht3_2: 8,
      //   gleichgewicht4_5_1: 7,
      //   gleichgewicht4_5_2: 8,
      //   gleichgewicht6_1: 7,
      //   gleichgewicht6_2: 6,
      //   //Hinundher
      //   koordination_1: 30,
      //   koordination_2: 25,
      //   //Rumpfbeweglichkeit
      //   rumpfbeuge_1: 5.25,
      //   rumpfbeuge_2: 6.23,
      //   //Liegestütze
      //   oberkoerperkraft: 21,
      //   //Situps
      //   rumpfkraft: 25,
      //   //Standweitsprung
      //   schnellkraft_1: 3.2,
      //   schnellkraft_2: 3.1,
      //   aktionsschnelligkeit: 23.23,
      //   ausdauer: 6000,
      // };
      // db.post(doc)
      //   .then(function(response) {
      //     console.log(response);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    },
  },
};
</script>

<style></style>
