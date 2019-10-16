<template>
  <v-container>
    <v-layout column justify-space-between fill-height>
      <v-flex>
        <v-card color="#00295d" class="white--text">
          <v-card-title primary-title>
            <h3 class="headline">Test 2019</h3>
            <v-container>
              <Chart1></Chart1>
            </v-container>
          </v-card-title>
          <v-card-actions>
            <v-btn class="#4b7dbb--text" flat>Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <br>

      <v-flex>
        <v-card color="#00295d" class="white--text">
          <v-card-title primary-title>
            <h3 class="headline">Test 2018</h3>
            <v-container>
              <Chart2></Chart2>
            </v-container>
          </v-card-title>
          <v-card-actions>
            <v-btn flat>Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <br>
    </v-layout>
  </v-container>
</template>

<script>
import Chart1 from "../components/Chart1";
import Chart2 from "../components/Chart2";


export default {
  components: { Chart1, Chart2 },
  data() {
    return {};
  },
  created(){
          this.$getItem("testDaten")
        .then(value => {
          console.log(value);
        })
        .catch(err => {
          console.log("Error!" + err);
        });
  }
};
</script>

<style>
</style>

