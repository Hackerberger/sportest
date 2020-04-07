<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-bottom-nav :value="true" fixed color="#00295D"></v-bottom-nav>

      <v-carousel
        interval="60000"
        hide-delimiters
        :show-arrows="true"
        continuous="true"
      >
        <v-carousel-item>
          <v-overflow-btn
            background-color="black"
            border-color="white"
            color="black"
            :items="klassen"
            label="Klasse"
            target="#dropdown-example"
          ></v-overflow-btn>

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

          <!-- <v-menu
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
          </v-menu>-->

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
            <h3 class="white--text">Gleichgewicht</h3>

            <v-container>
              <p class="white--text">
                Gleichgewicht Points: {{ testDaten.erg_bal }}
              </p>

              <v-card
                color="black"
                v-for="n in 1"
                :key="n"
                class="ma-3 pa-6"
                outlined
                tile
              >
                <span class="white--text">6cm-Balken:</span>

                <v-slider
                  v-model="testDaten.gleichgewicht6_1"
                  label="1.Durchgang"
                  class="align-center"
                  min="0"
                  max="8"
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="testDaten.gleichgewicht6_1"
                      class="mt-0 pt-0 mb-4"
                      hide-details
                      single-line
                      type="number"
                      style="width: 30px"
                    ></v-text-field>
                  </template>
                  <v-btn
                    @click="Gleichgewicht(testDaten.gleichgewicht6_1)"
                    color="white"
                    value="statistics"
                  >
                    <v-icon>Gleichgewicht 6cm</v-icon>
                  </v-btn>
                </v-slider>
                <v-slider
                  v-model="testDaten.gleichgewicht6_2"
                  thumb-label
                  label="2.Durchgang"
                  class="align-center"
                  min="0"
                  max="8"
                  hide-details
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="testDaten.gleichgewicht6_2"
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
                color="black"
                v-for="n in 1"
                :key="n"
                class="ma-3 pa-6"
                outlined
              >
                <span class="white--text">4,5cm-Balken:</span>
                <v-slider
                  v-model="testDaten.gleichgewicht4_5_1"
                  thumb-label
                  label="1.Durchgang"
                  class="align-center"
                  min="0"
                  max="8"
                  hide-details
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="testDaten.gleichgewicht4_5_1"
                      class="mt-0 pt-0 mb-4"
                      hide-details
                      single-line
                      type="number"
                      style="width: 30px"
                    ></v-text-field>
                  </template>
                </v-slider>

                <v-slider
                  v-model="testDaten.gleichgewicht4_5_2"
                  thumb-label
                  label="2.Durchgang"
                  class="align-center"
                  min="0"
                  max="8"
                  hide-details
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="testDaten.gleichgewicht4_5_2"
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
                color="black"
                v-for="n in 1"
                :key="n"
                class="ma-3 pa-6"
                outlined
                tile
              >
                <span class="white--text">3cm-Balken:</span>

                <v-slider
                  v-model="testDaten.gleichgewicht3_1"
                  thumb-label
                  label="1.Durchgang"
                  class="align-center"
                  min="0"
                  max="8"
                  hide-details
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="testDaten.gleichgewicht3_1"
                      class="mt-0 pt-0 mb-4"
                      hide-details
                      single-line
                      type="number"
                      style="width: 30px"
                    ></v-text-field>
                  </template>
                </v-slider>

                <v-slider
                  v-model="testDaten.gleichgewicht3_2"
                  thumb-label
                  label="2.Durchgang"
                  class="align-center"
                  min="0"
                  max="8"
                  hide-details
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="testDaten.gleichgewicht3_2"
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
                    v-model="testDaten.gleichgewicht3_1"
                  ></v-text-field>
                </v-flex>
                <v-flex sm2>
                  <v-text-field
                    label="Durchgang 2"
                    suffix="Schritte"
                    single-line
                    v-model="testDaten.gleichgewicht3_2"
                  ></v-text-field>
            </v-flex>-->
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 class="white--text">Koordination</h3>
              <v-layout wrap>
                <v-flex sm1>
                  <v-text-field
                    label="Durchgang 1"
                    single-line
                    v-model="testDaten.koordination_1"
                  ></v-text-field>
                </v-flex>
                <v-flex sm1>
                  <v-text-field
                    label="Durchgang 2"
                    single-line
                    v-model="testDaten.koordination_2"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 class="white--text">Rumpfbeweglichkeit</h3>
              <v-layout row wrap>
                <v-flex sm1>
                  <v-text-field
                    label="Durchgang 1"
                    single-line
                    v-model="testDaten.rumpfbeuge_1"
                  ></v-text-field>
                </v-flex>
                <v-flex sm1>
                  <v-text-field
                    label="Durchgang 2"
                    single-line
                    v-model="testDaten.rumpfbeuge_2"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 class="white--text">Oberkörperkraft</h3>
              <v-layout row wrap>
                <v-flex sm1>
                  <v-text-field
                    label="Versuch 1"
                    single-line
                    v-model="testDaten.oberkoerperkraft"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 class="white--text">Rumpfkraft</h3>
              <v-layout row wrap>
                <v-flex sm1>
                  <v-text-field
                    label="Versuch 1"
                    single-line
                    v-model="testDaten.rumpfkraft"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 class="white--text">Schnellkraft</h3>
              <v-layout row wrap>
                <v-flex sm1>
                  <v-text-field
                    label="Versuch 1"
                    suffix="cm"
                    single-line
                    v-model="testDaten.schnellkraft_1"
                  ></v-text-field>
                </v-flex>
                <v-flex sm1>
                  <v-text-field
                    label="Versuch 2"
                    suffix="cm"
                    single-line
                    v-model="testDaten.schnellkraft_2"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 class="white--text">Aktionsschnelligkeit</h3>
              <v-layout wrap>
                <v-flex sm1>
                  <v-text-field
                    label="Zeit in sek"
                    suffix="sek"
                    single-line
                    v-model="testDaten.aktionsschnelligkeit"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 class="white--text">Ausdauer</h3>
              <v-layout wrap>
                <v-flex sm1>
                  <v-text-field
                    label="Meter"
                    suffix="sek"
                    single-line
                    v-model="testDaten.ausdauer"
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
      @click="dialog = true"
      absolute
      :style="{ left: '50%', bottom: '5%', transform: 'translateX(-50%)' }"
      bottom
      fixed
      align-center
      right
      :disabled="testDaten.groeße == null"
    >
      <v-icon dark large color="#FF0000">mdi-check</v-icon>
    </v-btn>

    <div color="black" class="text-center">
      <v-dialog class="mx-auto" scrollable="false" v-model="dialog" width="500">
        <v-card color="black">
          <!-- <v-card-title color="black" class="headline grey lighten-2" primary-title>Test abschicken?</v-card-title> -->

          <v-card-text style="margin-top: 3%" class="primary--text">
            Möchtest du den Test beenden?
            <!-- Soll die 'sportest' App der Home Seite hinzugefügt werden? -->
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions id="act">
            <v-btn
              color="primary"
              text
              @click="$router.push({ name: 'statistics' })"
            >
              <v-icon dark color="primary">mdi-check</v-icon>
            </v-btn>
            <v-btn color="primary" large text @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <!-- <v-btn
      @click="gleichgewichtObject()"
      color="#FF6600"
      class="white--text"
      value="statistics"
    >
      <v-icon>Send</v-icon>
    </v-btn>-->

    <!-- <v-btn @click="$router.push({ name:'home'})" color="teal" value="home">
          <v-icon>clear</v-icon>
    </v-btn>-->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      klassen: ['5AHITN', '5BHITM', '5CHITM'],
      testDaten: {
        date_birth: null,
        date_test: null,
        gender: null,
        gewicht: null,
        groeße: null,
        //Gleichgewicht
        gleichgewicht3_1: 0,
        gleichgewicht3_2: 0,
        gleichgewicht4_5_1: 0,
        gleichgewicht4_5_2: 0,
        gleichgewicht6_1: 0,
        gleichgewicht6_2: 0,
        //Hinundher
        koordination_1: null,
        koordination_2: null,
        //Rumpfbeweglichkeit
        rumpfbeuge_1: null,
        rumpfbeuge_2: null,
        //Liegestütze
        oberkoerperkraft: null,
        //Situps
        rumpfkraft: null,
        //Standweitsprung
        schnellkraft_1: null,
        schnellkraft_2: null,
        //Sprint
        aktionsschnelligkeit: null,

        //Ausdauer
        ausdauer: null,
      },
      ergebnisse: {
        //Punkteergebnisse
        erg_gleichgewicht: null,
        erg_koordination: null,
        erg_rumpfbeuge: null,
        erg_oberkoerperkraft: null,
        erg_rumpfkraft: null,
        erg_schnellkraft: null,
        erg_aktionsschnelligkeit: null,
        erg_ausdauer: null,
      },
    };
  },
  created() {
    this.calcPoints({
      age: 18,
      //Gleichgewicht
      gleichgewicht3_1: 6,
      gleichgewicht3_2: 6,
      gleichgewicht4_5_1: 6,
      gleichgewicht4_5_2: 6,
      gleichgewicht6_1: 7,
      gleichgewicht6_2: 8,
      //Hinundher
      koordination_1: 35,
      koordination_2: 37,
      //Rumpfbeweglichkeit
      rumpfbeuge_1: -0.2,
      rumpfbeuge_2: -5.3,
      //Liegestütze
      oberkoerperkraft: 18,
      //Situps
      rumpfkraft: 20,
      //Standweitsprung
      schnellkraft_1: 220,
      schnellkraft_2: 207,
      //Sprint
      aktionsschnelligkeit: 2.79,

      //Ausdauer
      ausdauer: 1485,
    });
  },
  methods: {
    addTest() {},
    calcPoints(testobject) {
      var normValues = {
        aktionsschnelligkeit: {},
        oberkoerperkraft: {},
        rumpfkraft: {},
        schnellkraft: {},
        koordination: {},
        gleichgewicht: {},
        rumpfbeuge: {},
        ausdauer: {},
      };

      if (testobject.age > 16) {
        //Alter 17 oder mehr
        //20m Sprint

        normValues.aktionsschnelligkeit.norm = 3.5;
        normValues.aktionsschnelligkeit.sa = 0.28;

        //LS Liegestütz
        normValues.oberkoerperkraft.norm = 15.19;
        normValues.oberkoerperkraft.sa = 3.44;

        //SU Situps
        normValues.rumpfkraft.norm = 26.32;
        normValues.rumpfkraft.sa = 5.64;

        //SW Standweitsprung
        normValues.schnellkraft.norm = 208.69;
        normValues.schnellkraft.sa = 27.13;

        //SSH Seitlich Hin und Herspringen
        normValues.koordination.norm = 37.35;
        normValues.koordination.sa = 7.47;

        //Balancieren rückwärts
        normValues.gleichgewicht.norm = 34.53;
        normValues.gleichgewicht.sa = 9.12;

        //RB Rumpfbeuge
        normValues.rumpfbeuge.norm = -2.09;
        normValues.rumpfbeuge.sa = 9.11;

        //6-min Lauf
        normValues.ausdauer.norm = 1346;
        normValues.ausdauer.sa = 187;
      } else if (testobject.age == 16) {
      } else if (testobject.age == 15) {
      } else if (testobject.age < 15) {
      }

      let ergebnisse = {
        //Punkteergebnisse
        erg_gleichgewicht: null,
        erg_koordination: null,
        erg_rumpfbeuge: null,
        erg_oberkoerperkraft: null,
        erg_rumpfkraft: null,
        erg_schnellkraft: null,
        erg_aktionsschnelligkeit: null,
        erg_ausdauer: null,
      };

      console.log(normValues);
    },
  },
};
</script>

<style>
#act {
  margin: 0 auto;
}
</style>
