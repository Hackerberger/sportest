<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-bottom-nav :value="true" fixed dark color="#00295D">
      </v-bottom-nav>

      <v-carousel interval="60000" hide-delimiters hide-controls>
        <v-carousel-item>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date_birth"
                label="Birthday date"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              ref="picker"
              v-model="date_birth"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>

          <v-menu
            ref="menu"
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date2"
                label="Testdatum"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              ref="picker"
              v-model="date2"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>

          <v-container fluid>
            <p>{{ radios || 'Geschlecht' }}</p>
            <v-radio-group v-model="radios" :mandatory="false">
              <v-radio label="Männlich" value="Männlich" ></v-radio>
              <v-radio label="Weiblich" value="Weiblich"></v-radio>
            </v-radio-group>
          </v-container>

          <v-layout row>
            <v-flex xs3 ml-4>
              <v-text-field type="number" label="Gewicht" suffix="kg" v-model="testDaten.gewicht"></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs3 ml-4>
              <v-text-field type="number" label="Größe" suffix="cm" v-model="testDaten.groeße"></v-text-field>
            </v-flex>
          </v-layout>
        </v-carousel-item>

        <v-form>
          <v-carousel-item>
            <v-container>
              <h3>Balancieren rückwärts:</h3>
              <v-layout wrap>

                    <v-container fluid>
      <v-row>
        <v-col cols="12">

            <v-card
              v-for="n in 1"
              :key="n"
              class="ma-3 pa-6"
              outlined
              tile
            >
                      <span class="white--text">6cm-Balken:</span>
                <v-slider v-model="testDaten.balance6_1" label="1.Durchgang" min="0" max="8"></v-slider>
                <v-slider v-model="testDaten.balance6_2" label="2.Durchgang" min="0" max="320"></v-slider>
            </v-card>

                        <v-card
              v-for="n in 1"
              :key="n"
              class="ma-3 pa-6"
              outlined
              tile
            >

                                  <span class="white--text">4,5cm-Balken:</span>
                <v-slider v-model="testDaten.balance4_5_1" label="1.Durchgang" min="0" max="8"></v-slider>
                <v-slider v-model="testDaten.balance4_5_2" label="2.Durchgang" min="0" max="6"></v-slider>
            </v-card>

            
                        <v-card
              v-for="n in 1"
              :key="n"
              class="ma-3 pa-6"
              outlined
              tile
            >

                                  <span class="white--text">3cm-Balken:</span>
                <v-slider v-model="testDaten.balance3_1" label="1.Durchgang" min="0" max="8"></v-slider>
                <v-slider v-model="testDaten.balance3_2" label="2.Durchgang" min="0" max="6"></v-slider>
            </v-card>

        </v-col>
        <v-col cols="12">

        </v-col>
      </v-row>
    </v-container>
              


                <!-- <v-flex sm2>
                  <span>3cm-Balken:</span>
                  <v-text-field
                    label="Durchgang 1"
                    suffix="Schritte"
                    single-line
                    v-model="testDaten.balance3_1"
                  ></v-text-field>
                </v-flex>
                <v-flex sm2>
                  <v-text-field
                    label="Durchgang 2"
                    suffix="Schritte"
                    single-line
                    v-model="testDaten.balance3_2"
                  ></v-text-field>
                </v-flex> -->
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3>Seitliches Hin- u.Herspringen:</h3>
              <v-layout wrap>
                <v-flex sm1>
                  <v-text-field label="Durchgang 1" single-line v-model="testDaten.seit_1"></v-text-field>
                </v-flex>
                <v-flex sm1>
                  <v-text-field label="Durchgang 2" single-line v-model="testDaten.seit_2"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3>Rumpfbeuge:</h3>
              <v-layout row wrap>
                <v-flex sm1>
                  <v-text-field label="Durchgang 1" single-line v-model="testDaten.rumpf_1"></v-text-field>
                </v-flex>
                <v-flex sm1>
                  <v-text-field label="Durchgang 2" single-line v-model="testDaten.rumpf_2"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3>Liegestütze:</h3>
              <v-layout row wrap>
                <v-flex sm1>
                  <v-text-field label="Versuch 1" single-line v-model="testDaten.liege"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3>Situps:</h3>
              <v-layout row wrap>
                <v-flex sm1>
                  <v-text-field label="Versuch 1" single-line v-model="testDaten.situps"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3>Standweitsprung:</h3>
              <v-layout row wrap>
                <v-flex sm1>
                  <v-text-field
                    label="Versuch 1"
                    suffix="cm"
                    single-line
                    v-model="testDaten.stand_1"
                  ></v-text-field>
                </v-flex>
                <v-flex sm1>
                  <v-text-field
                    label="Versuch 2"
                    suffix="cm"
                    single-line
                    v-model="testDaten.stand_2"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3>Liegestütze:</h3>
              <v-layout row wrap>
                <v-flex sm1>
                  <v-text-field label="Versuch 1" single-line></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>



          <v-carousel-item>
            <v-container>
              <h3>20m-Sprint:</h3>
              <v-layout wrap>
                <v-flex sm1>
                  <v-text-field label="Zeit" suffix="sek" single-line></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3>6-Minuten-Lauf:</h3>
              <v-layout wrap>
                <v-flex sm1>
                  <v-text-field label="Zeit" suffix="sek" single-line></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>
        </v-form>
      </v-carousel>

    </v-layout>
            <v-btn @click="addTest()" color="#00295D" value="statistics">
          <v-icon>done</v-icon>
        </v-btn>

        <v-btn @click="$router.push({ name:'home'})" color="teal" value="home">
          <v-icon>clear</v-icon>
        </v-btn>
  </v-container>

</template>

<script>
export default {
  data() {
    return {
      testDaten: {
        balance6_1: null,
        balance6_2: null,
        balance4_5_1: null,
        balance4_5_2: null,
        balance3_1: null,
        balance3_2: null,
        seit_1: null,
        seit_2: null,
        rumpf_1: null,
        rumpf_2: null,
        liege: null,
        situps: null,
        stand_1: null,
        stand_2: null,
        sprint: null,
        lauf: null,
        gewicht:null,
        groeße: null,
      }
    };
  },
  methods: {
    addTest() {
      this.$setItem("testDaten",this.testDaten)
        .then(value => {
          this.$router.push({ name: "statistics" });
          console.log("Test saved!" + value);
        })
        .catch(err => {
          console.log("Error!" + err);
        });
    }
  }
};
</script>

<style>
</style>