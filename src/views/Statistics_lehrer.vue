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
        <ChartCard :disabled="schueler == null" v-for="t in tests" :test="t" :key="t._id" class="mb-5" />
      </v-flex>

      <br />

      <v-flex>
        <ChartCard v-for="t in tests" :test="t" :key="t._id" class="mb-5" />
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
      schueler: ["Schüler x", "schüler y", "schüler z"],
      tests: [
        {
          date_birth: "04-10-2000",
          date_test: "21-02-2020",
          gender: false,
          gewicht: 89,
          groeße: 129,
          gleichgewicht3_1: 8,
          gleichgewicht3_2: 8,
          gleichgewicht4_5_1: 7,
          gleichgewicht4_5_2: 8,
          gleichgewicht6_1: 7,
          gleichgewicht6_2: 6,
          gleichgewichtPunkte: 80,
          //Hinundher
          koordination_1: 100,
          koordination_2: 120,
          koordinationPunkte: 120,
          //Rumpfbeweglichkeit
          rumpfbeuge_1: 5.25,
          rumpfbeuge_2: 6.23,
          rumpfbeugePunkte: 85.5,
          //Liegestütze
          oberkoerperkraft: 21,
          oberkoerperkraftPunkte: 95.6,
          //Situps
          rumpfkraft: 25,
          rumpfkraftPunkte: 105.2,
          //Standweitsprung
          schnellkraft_1: 3.2,
          schnellkraft_2: 3.1,
          schnellkraftPunkte: 115,
          //Springt
          aktionsschnelligkeit: 23.23,
          aktionsschnelligkeitPunkte: 120.5,
          //6 min Lauf
          ausdauer: 6000,
          ausdauerPunkte: 75
        }
      ]
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
