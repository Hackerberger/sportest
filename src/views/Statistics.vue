<template>
  <v-container>
    <v-layout column justify-space-between fill-height>
      <v-flex>
        <ChartCard />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ChartCard from '../components/ChartCard';

export default {
  components: { ChartCard },
  data() {
    return {};
  },
  created() {
    console.log('fsdhsdfhsfhsdf');

    this.getAllData();
    console.log('fsdhsdfhsfhsdf');
  },
  methods: {
    getAllData() {
      console.log('erledigt');

      var db = new PouchDB('http://localhost:3000/db');
    },
  },
};
</script>

<style></style>
