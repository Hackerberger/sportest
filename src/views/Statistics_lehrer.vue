<template>
  <v-container>
    <v-layout column justify-space-between fill-height>
      <v-overflow-btn
        background-color="primary"
        color="black"
        rounded
        editable
        class="text--white my-2"
        :items="klassen"
        label="Klasse"
        target="#dropdown-example"
      ></v-overflow-btn>

      <v-overflow-btn
        background-color="primary"
        color="black"
        rounded
        editable
        class="text--white my-2"
        :items="schueler"
        label="Schüler"
        target="#dropdown-example"
      ></v-overflow-btn>

      <v-flex>
        <ChartCard />
      </v-flex>
      <br />

      <v-flex>
        <ChartCard />
      </v-flex>
      <br />
    </v-layout>
  </v-container>
</template>

<script>
import ChartCard from "../components/ChartCard";

export default {
  components: { ChartCard },
  data() {
    return {
      klassen: ["5AHITN", "5BHITM", "5CHITM"],
      schueler: ["Schüler x", "schüler y", "schüler z"]
    };
  },
  methods: {
    getAllData() {
      //var db = new PouchDB('http://localhost:5984/kittens');
    }
  }
};
</script>

<style></style>
