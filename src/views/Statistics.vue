<template>
  <v-container>
    <v-layout column justify-space-between fill-height>
      <v-flex>
        <ChartCard v-for="test in tests" :key="test._id" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ChartCard from '../components/ChartCard';

import PouchDB from 'pouchdb';

export default {
  components: { ChartCard },
  data() {
    return {
      tests: [],
    };
  },
  created() {
    this.getAllData();
  },
  methods: {
    getAllData() {
      var db = new PouchDB('http://localhost:3000/db/sportest');

      db.info().then(function(info) {
        console.log(info);
      });

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

      db.allDocs({
        include_docs: true,
        attachments: true,
      })
        .then((result)=> {
          result.rows.forEach(element => {
            console.log(element);
            this.tests.push(element);
          });
        })
        .catch(function(err) {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
