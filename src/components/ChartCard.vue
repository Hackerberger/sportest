<template>
  <v-card color="#FF6600" class="black--text">
    <v-card-title primary-title>
      <h3 class="headline">Test 2020</h3>
      <v-container>
        <Chart></Chart>
      </v-container>
    </v-card-title>
    <v-card-actions>
      <v-btn class="#4b7dbb--text" text>Details</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Chart from "../components/Chart";

export default {
  components: { Chart },
  data() {
    return {};
  }
};
</script>

<style></style>
