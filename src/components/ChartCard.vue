<template>
  <v-card color="#FF6600" class="black--text">
    <v-card-title primary-title>
      <h3 class="headline">Test am {{ this.test.date_test }}</h3>
      <v-container>
        <Chart :test="test"></Chart>
      </v-container>
    </v-card-title>
    <v-card-actions>
      <v-btn v-if="detailsButton" @click="getdetails" class="#4b7dbb--text" text>Details</v-btn>
    </v-card-actions>
    <v-container class="text-center" v-if="anzeigen">
      <v-icon @click="close" color="black">mdi-window-close</v-icon>
      <br />
      <p></p>
      <p>
        <b>Sprint:</b>
        {{ this.test.sprint_D1 }} /
        {{ this.test.sprint_D2 }} sek
        <br />
        <b>Balancieren:</b>
        <br />
        6cm-Balken: {{ this.test.Bal_D1_6 }} /
        {{ this.test.Bal_D2_6 }} Schritte
        <br />
        4.5cm-Balken: {{ this.test.Bal_D1_4_5 }} /
        {{ this.test.Bal_D2_4_5 }} Schritte
        <br />
        3cm-Balken: {{ this.test.Bal_D1_3 }} /
        {{ this.test.Bal_D2_3 }} Schritte
        <br />
        <b>Seitliches Hin- und Herspringen:</b>
        {{ this.test.SHH_D1 }} /
        {{ this.SHH_D2 }} Sprünge
        <br />
        <b>Rumpfbeuge:</b>
        {{ this.test.RB_D1 }} /
        {{ this.test.RB_D2 }} cm
        <br />
        <b>Liegestütz:</b>
        {{ this.test.LS_Anzahl }} Liegestütze
        <br />
        <b>Sit-ups:</b>
        {{ this.test.SU_Anzahl }} Situps
        <br />
        <b>Standweitsprung:</b>
        {{ this.test.SW_D1 }} /
        {{ this.test.SW_D1 }} cm
        <br />
        <b>Ausdauer:</b>
        {{ this.test.ausdauer }} Runden
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
