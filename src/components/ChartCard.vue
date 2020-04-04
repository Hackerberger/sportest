<template>
  <v-card color="#FF6600" class="black--text">
    <v-card-title primary-title>
      <h3 class="headline">Test 2020</h3>
      <v-container>
        <Chart :test="test"></Chart>
      </v-container>
    </v-card-title>
    <v-card-actions>
      <v-btn v-if="detailsButton" @click="getdetails" class="#4b7dbb--text" text> Details </v-btn>
    </v-card-actions>
    <v-container class="text-center" v-if="anzeigen">
      <v-icon @click="close" color="black">mdi-window-close</v-icon>
      <br />
      <p></p>
      <p>
        Gleichgewicht: {{ this.test.gleichgewichtPunkte }}
        <br />
        Koordination: {{ this.test.koordination_1 }} / {{ this.test.koordination_2 }}
        <br />
        Rumpfbeweglichkeit: {{ this.test.rumpfbeuge_1 }} / {{ this.test.rumpfbeuge_2 }}
        <br />
        Oberkoerperkraft: {{ this.test.oberkoerperkraftPunkte }}
        <br />
        Rumpfkraft: {{ this.test.rumpfkraftPunkte }}
        <br />
        Schnellkraft: {{ this.test.schnellkraftPunkte }}
        <br />
        Aktionsschnelligkeit: {{ this.test.aktionsschnelligkeitPunkte }}
        <br />
        Ausdauer: {{ this.test.ausdauerPunkte }}
      </p>
    </v-container>
  </v-card>
</template>

<script>
import Chart from "../components/Chart";

export default {
  props: {
    test: {
      type: Object
    }
  },
  components: { Chart },
  data() {
    return {
      anzeigen: false,
      detailsButton: true
    };
  },
  methods: {
    getdetails() {
      this.anzeigen = true;
      this.detailsButton = false;
    },
    close() {
      this.anzeigen = false;
      this.detailsButton = true;
    }
  }
};
</script>

<style></style>
