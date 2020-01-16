<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-bottom-nav :value="true" fixed color="#00295D"></v-bottom-nav>

      <v-carousel interval="60000" hide-delimiters :show-arrows="false" continuous="true">
        <v-carousel-item>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="490px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date_birth"
                label="Birthday date"
                prepend-icon="mdi-calendar-month"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              ref="picker"
              v-model="date_birth"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
            ></v-date-picker>
          </v-menu>

          <v-menu
            ref="menu"
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date_test"
                label="Testdatum"
                prepend-icon="mdi-calendar-month"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              ref="picker"
              v-model="date_birth"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
            ></v-date-picker>
          </v-menu>

          <v-container fluid>
            <p>{{ radios || 'Geschlecht' }}</p>
            <v-radio-group v-model="radios" :mandatory="false">
              <v-radio label="Männlich" value="Männlich"></v-radio>
              <v-radio label="Weiblich" value="Weiblich"></v-radio>
            </v-radio-group>
          </v-container>

          <v-layout row>
            <v-flex xs3 ml-4>
              <v-text-field
                type="number"
                label="Gewicht"
                suffix="kg"
                v-model="testDaten.gewicht"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs3 ml-4>
              <v-text-field
                type="number"
                label="Größe"
                suffix="cm"
                v-model="testDaten.groeße"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-carousel-item>

        <v-form>
          <v-carousel-item>
            <v-container>
              <h3 class="white--text">Balancieren rückwärts:</h3>
              <v-layout wrap>
                <v-container fluid>
                  <p class="white--text">
                    Balance Points: {{ testDaten.erg_bal }}
                  </p>

                  <v-card
                    v-for="n in 1"
                    :key="n"
                    class="ma-3 pa-6"
                    outlined
                    tile
                  >
                    <span class="white--text">6cm-Balken:</span>
                    <v-slider
                      v-model="testDaten.balance6_1"
                      thumb-label
                      label="1.Durchgang"
                      class="align-center"
                      min="0"
                      max="8"
                      hide-details
                    >
                      <template v-slot:append>
                        <v-text-field
                          v-model="testDaten.balance6_1"
                          class="mt-0 pt-0 mb-4"
                          hide-details
                          single-line
                          type="number"
                          style="width: 30px"
                        ></v-text-field>
                      </template>
                      <v-btn
                        @click="Balance(testDaten.balance6_1)"
                        color="white"
                        value="statistics"
                      >
                        <v-icon>Balance 6cm</v-icon>
                      </v-btn>
                    </v-slider>
                    <v-slider
                      v-model="testDaten.balance6_2"
                      thumb-label
                      label="2.Durchgang"
                      class="align-center"
                      min="0"
                      max="8"
                      hide-details
                    >
                      <template v-slot:append>
                        <v-text-field
                          v-model="testDaten.balance6_2"
                          class="mt-0 pt-0 mb-4"
                          hide-details
                          single-line
                          type="number"
                          style="width: 30px"
                        ></v-text-field>
                      </template>
                    </v-slider>
                  </v-card>

                  <v-card
                    v-for="n in 1"
                    :key="n"
                    class="ma-3 pa-6"
                    outlined
                    tile
                  >
                    <span class="white--text">4,5cm-Balken:</span>
                    <v-slider
                      v-model="testDaten.balance4_5_1"
                      thumb-label
                      label="1.Durchgang"
                      class="align-center"
                      min="0"
                      max="8"
                      hide-details
                    >
                      <template v-slot:append>
                        <v-text-field
                          v-model="testDaten.balance4_5_1"
                          class="mt-0 pt-0 mb-4"
                          hide-details
                          single-line
                          type="number"
                          style="width: 30px"
                        ></v-text-field>
                      </template>
                    </v-slider>

                    <v-slider
                      v-model="testDaten.balance4_5_2"
                      thumb-label
                      label="2.Durchgang"
                      class="align-center"
                      min="0"
                      max="8"
                      hide-details
                    >
                      <template v-slot:append>
                        <v-text-field
                          v-model="testDaten.balance4_5_2"
                          class="mt-0 pt-0 mb-4"
                          hide-details
                          single-line
                          type="number"
                          style="width: 30px"
                        ></v-text-field>
                      </template>
                    </v-slider>
                  </v-card>

                  <v-card
                    v-for="n in 1"
                    :key="n"
                    class="ma-3 pa-6"
                    outlined
                    tile
                  >
                    <span class="white--text">3cm-Balken:</span>

                    <v-slider
                      v-model="testDaten.balance3_1"
                      thumb-label
                      label="1.Durchgang"
                      class="align-center"
                      min="0"
                      max="8"
                      hide-details
                    >
                      <template v-slot:append>
                        <v-text-field
                          v-model="testDaten.balance3_1"
                          class="mt-0 pt-0 mb-4"
                          hide-details
                          single-line
                          type="number"
                          style="width: 30px"
                        ></v-text-field>
                      </template>
                    </v-slider>

                    <v-slider
                      v-model="testDaten.balance3_2"
                      thumb-label
                      label="2.Durchgang"
                      class="align-center"
                      min="0"
                      max="8"
                      hide-details
                    >
                      <template v-slot:append>
                        <v-text-field
                          v-model="testDaten.balance3_2"
                          class="mt-0 pt-0 mb-4"
                          hide-details
                          single-line
                          type="number"
                          style="width: 30px"
                        ></v-text-field>
                      </template>
                    </v-slider>
                  </v-card>
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
                </v-flex>-->
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 class="white--text">Seitliches Hin- u.Herspringen:</h3>
              <v-layout wrap>
                <v-flex sm1>
                  <v-text-field
                    label="Durchgang 1"
                    single-line
                    v-model="testDaten.seit_1"
                  ></v-text-field>
                </v-flex>
                <v-flex sm1>
                  <v-text-field
                    label="Durchgang 2"
                    single-line
                    v-model="testDaten.seit_2"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 class="white--text">Rumpfbeuge:</h3>
              <v-layout row wrap>
                <v-flex sm1>
                  <v-text-field
                    label="Durchgang 1"
                    single-line
                    v-model="testDaten.rumpf_1"
                  ></v-text-field>
                </v-flex>
                <v-flex sm1>
                  <v-text-field
                    label="Durchgang 2"
                    single-line
                    v-model="testDaten.rumpf_2"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 class="white--text">Liegestütze:</h3>
              <v-layout row wrap>
                <v-flex sm1>
                  <v-text-field
                    label="Versuch 1"
                    single-line
                    v-model="testDaten.liege"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 class="white--text">Situps:</h3>
              <v-layout row wrap>
                <v-flex sm1>
                  <v-text-field
                    label="Versuch 1"
                    single-line
                    v-model="testDaten.situps"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 class="white--text">Standweitsprung:</h3>
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
              <h3 class="white--text">Liegestütze:</h3>
              <v-layout row wrap>
                <v-flex sm1>
                  <v-text-field label="Versuch 1" single-line></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 class="white--text">20m-Sprint:</h3>
              <v-layout wrap>
                <v-flex sm1>
                  <v-text-field
                    label="Zeit"
                    suffix="sek"
                    single-line
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 class="white--text">6-Minuten-Lauf:</h3>
              <v-layout wrap>
                <v-flex sm1>
                  <v-text-field
                    label="Zeit"
                    suffix="sek"
                    single-line
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>
        </v-form>
      </v-carousel>
    </v-layout>
    <!-- <v-btn @click="addTest()" color="#00295D" value="statistics">
          <v-icon>done</v-icon>
    </v-btn>-->

    <v-btn
        fab
        dark
        color="white"
        @click="$router.push({ name:'statistics'})"
        absolute
        :style="{left: '50%', bottom:'5%', transform:'translateX(-50%)' }"
        bottom
        fixed
        align-center
        right
      >
        <v-icon dark large color="#FF0000">mdi-check</v-icon>
      </v-btn>

    <!-- <v-btn
      @click="balanceObject()"
      color="#FF6600"
      class="white--text"
      value="statistics"
    >
      <v-icon>Send</v-icon>
    </v-btn> -->

    <!-- <v-btn @click="$router.push({ name:'home'})" color="teal" value="home">
          <v-icon>clear</v-icon>
    </v-btn>-->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      testDaten: {
        date_birth: null,
        date_test: null,
        balance6_1: 0,
        balance6_2: 0,
        balance4_5_1: 0,
        balance4_5_2: 0,
        balance3_1: 0,
        balance3_2: 0,
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
        menu: null,
        gewicht: null,
        groeße: null,
        erg_bal: null,
      },
    };
  },
  methods: {
    addTest() {
      this.$setItem('testDaten', this.testDaten)
        .then(value => {
          this.$router.push({ name: 'statistics' });
          console.log('Test saved!' + value);
        })
        .catch(err => {
          console.log('Error!' + err);
        });
    },
    balanceObject() {
      var testobject = {
        age: 16,
        gender: 'w',
        balance: [
          this.testDaten.balance6_1,
          this.testDaten.balance6_2,
          this.testDaten.balance4_5_1,
          this.testDaten.balance4_5_2,
          8,
          8,
        ],
      };
      this.Balance(testobject);
    },
    Balance(bData) {
      let bpoints;
      let steps = bData.balance.reduce((a, b) => a + b);

      // if (bData.gender == 'w') {
      if (bData.age >= 17) {
        if (steps < 10) bpoints = 70;
        else if (steps == 10) bpoints = 71;
        else if (steps > 41) bpoints = steps + 65;
        else if (steps > 31) bpoints = steps + 64;
        else if (steps > 20) bpoints = steps + 63;
        else if (steps > 10) bpoints = steps + 62;
      } else if (bData.age == 16) {
        if (steps < 9) bpoints = 70;
        else if (steps > 39) bpoints = steps + 65;
        else if (steps > 28) bpoints = steps + 64;
        else if (steps > 17) bpoints = steps + 63;
        else if (steps >= 9) bpoints = steps + 62;
      } else if (bData.age >= 14) {
        if (steps < 9) bpoints = 70;
        else if (steps == 9) bpoints = 71;
        else if (steps > 40) bpoints = steps + 66;
        else if (steps > 30) bpoints = steps + 65;
        else if (steps > 19) bpoints = steps + 64;
        else if (steps > 9) bpoints = steps + 63;
        // }
      }

      console.log('Balance-Points: ' + bpoints);
      this.testDaten.erg_bal = bpoints;

      return bpoints;
    },
  },
};
</script>

<style></style>
