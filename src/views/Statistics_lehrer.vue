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
        <ChartCard
          :disabled="schueler == null"
          v-for="t in tests"
          :test="t"
          :key="t._id"
          class="mb-5"
        />
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
          //Sprint
          sprint: 23.23,
          erg_sprint: 120.5,
          //Balancieren
          Bal_D1_6: 8,
          Bal_D2_6: 8,
          Bal_D1_4_5: 7,
          Bal_D2_4_5: 8,
          Bal_D1_3: 7,
          Bal_D2_3: 6,
          erg_Bal: 80,
          //Hinundher
          SHH_D1: 100,
          SHH_D2: 120,
          erg_SHH: 120,
          //Rumpfbeweglichkeit
          RB_D1: 5.25,
          RB_D2: 6.23,
          erg_RB: 85.5,
          //Liegestütze
          LS_Anzahl: 21,
          erg_LS: 95.6,
          //Situps
          SU_Anzahl: 25,
          erg_SU: 105.2,
          //Standweitsprung
          SW_D1: 3.2,
          SW_D2: 3.1,
          erg_SW: 115,
          //6 min Lauf
          ausdauer: 6000,
          erg_ausdauer: 75
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
