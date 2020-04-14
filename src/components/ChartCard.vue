<template>
  <v-card color="#FF6600" class="black--text">
    <v-card-title primary-title>
      <h3 class="headline">Test</h3>
      <v-container>
        <Chart :test="test"></Chart>
      </v-container>
    </v-card-title>
    <v-card-actions>
      <v-btn
        v-if="detailsButton"
        @click="getdetails"
        class="#4b7dbb--text"
        text
      >
        Details
      </v-btn>
    </v-card-actions>
    <v-container class="text-center" v-if="anzeigen">
      <v-icon @click="close" color="black">mdi-window-close</v-icon>
      <br />
      <p></p>
      <p>
        <b> Gleichgewicht: </b> <br />
        3cm-Balken: {{ this.test.gleichgewicht3_1 }} /
        {{ this.test.gleichgewicht3_2 }}
        <br />
        4.5cm-Balken: {{ this.test.gleichgewicht4_5_1 }} /
        {{ this.test.gleichgewicht4_5_2 }}
        <br />
        6cm-Balken: {{ this.test.gleichgewicht6_1 }} /
        {{ this.test.gleichgewicht6_2 }}
        <br />
        <b> Koordination: </b> {{ this.test.koordination_1 }} /
        {{ this.test.koordination_2 }}
        <br />
        <b> Rumpfbeweglichkeit: </b> {{ this.test.rumpfbeuge_1 }} /
        {{ this.test.rumpfbeuge_2 }}
        <br />
        <b> Oberkörperkraft: </b> {{ this.test.oberkoerperkraft }}
        <br />
        <b> Rumpfkraft: </b> {{ this.test.erg_rumpfkraft }}
        <br />
        <b> Schnellkraft: </b> {{ this.test.erg_schnellkraft }}
        <br />
        <b> Aktionsschnelligkeit: </b> {{ this.test.aktionsschnelligkeit }} sek
        <br />
        <b> Ausdauer: </b> {{ this.test.ausdauer }} Runden
      </p>
    </v-container>
  </v-card>
</template>

<script>
import Chart from '../components/Chart';

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
