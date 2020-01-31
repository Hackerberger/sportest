<template>
  <v-container>
    <v-layout column justify-space-between fill-height>
 <v-overflow-btn
          background-color="#FF6600"
          color="black"
          editable
          class="text--white my-2"
          :items="klassen"
          label="Klasse"
          target="#dropdown-example"
        ></v-overflow-btn>


 <v-overflow-btn
          background-color="#FF6600"
          color="black"
          editable
          class="text--white my-2"
          :items="schueler"
          label="Schüler"
          target="#dropdown-example"
        ></v-overflow-btn>


      <v-flex>
        <v-card color="#FF6600" class="black--text">
          <v-card-title primary-title>
            <h3 class="headline">Test 2020</h3>
            <v-container>
              <Chart1></Chart1>
            </v-container>
          </v-card-title>
          <v-card-actions>
            <v-btn class="#4b7dbb--text" text>Details</v-btn>
          </v-card-actions>
        </v-card>
        
      </v-flex>
      <br />

      <v-flex>
        <v-card color="#FF6600" class="black--text">
          <v-card-title primary-title>
            <h3 class="headline">Test 2019</h3>
            <v-container>
              <Chart2></Chart2>
            </v-container>
          </v-card-title>
          <v-card-actions>
            <v-btn text>Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <br />
    </v-layout>
  </v-container>
</template>

<script>
import Chart1 from '../components/Chart1';
import Chart2 from '../components/Chart2';

export default {
  components: { Chart1, Chart2 },
  data() {
    return {
      klassen: ['5AHITN', '5BHITM', '5CHITM'],
      schueler: ['Schüler x', "schüler y", "schüler z"]
    };
  },
  created() {
    this.$getItem('testDaten')
      .then(value => {
        console.log(value);
      })
      .catch(err => {
        console.log('Error!' + err);
      });
  },
  methods: {
    getAllData() {
      var db = new PouchDB('http://localhost:5984/kittens');

    }
  },
};
</script>

<style></style>
