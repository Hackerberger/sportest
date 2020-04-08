<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-carousel
        interval="60000"
        hide-delimiters
        :show-arrows="true"
      >
        <v-carousel-item>
          <v-overflow-btn
                        shaped
              outlined
            background-color="black"
            border-color="white"
            color="black"
            :items="klassen"
            label="Klasse"
            target="#dropdown-example"
          ></v-overflow-btn>

          <v-menu
            ref="menu"
            v-model="testDaten.menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="490px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
              shaped
              outlined
                v-model="testDaten.date_birth"
                label="Birthday date"
                prepend-inner-icon="mdi-calendar-month"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              ref="picker"
              v-model="testDaten.date_birth"
              :max="new Date().toISOString().substr(0, 10)"
              min="1998-01-01"
            ></v-date-picker>
          </v-menu>

          <div class="text-center pl-11">
          <v-container fluid>
            <p>{{ testDaten.gender || "Geschlecht" }}</p>
            <v-radio-group v-model="testDaten.gender" :mandatory="false">
              <v-radio label="Männlich" value="Männlich"></v-radio>
              <v-radio label="Weiblich" value="Weiblich"></v-radio>
            </v-radio-group>
          </v-container>
            </div>


          <v-layout row>
            <v-flex xs5 ml-4>
              <v-text-field
              shaped
              outlined
              single-line
              clearable
               :rules="weight_rules"
                type="number"
                label="Gewicht"
                suffix="kg"
                v-model="testDaten.gewicht"
              ></v-text-field>
            </v-flex>
          </v-layout>


          <v-layout row>
            <v-flex xs5 ml-4>
              <v-text-field
              shaped
              outlined
               :rules="height_rules"
              clearable
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
                    outlined
                  shaped
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

            <v-flex sm2>
                  <span>3cm-Balken:</span>
                  <v-text-field
                  outlined
                  shaped
                    label="Durchgang 1"
                    suffix="Schritte"
                    single-line
                    v-model="testDaten.gleichgewicht3_1"
                  ></v-text-field>
                </v-flex>
                <v-flex sm2>
                  <v-text-field
                  outlined
                  shaped
                    label="Durchgang 2"
                    suffix="Schritte"
                    single-line
                    v-model="testDaten.gleichgewicht3_2"
                  ></v-text-field>
            </v-flex>

          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 style="padding-bottom: 4%;" class="white--text">Koordination</h3>
              <v-layout wrap>
                <v-flex xs5>
                  <v-text-field
                  outlined
                  shaped
                    label="Durchgang 1"
                    single-line
                    min-width="400px"
                    v-model="testDaten.koordination_1"
                  ></v-text-field>

                  <v-text-field
                  outlined
                  shaped
                    label="Durchgang 2"
                    v-model="testDaten.koordination_2"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 style="padding-bottom: 4%;" class="white--text">Rumpfbeweglichkeit</h3>
              <v-layout row wrap>
                <v-flex xs5>
                  <v-text-field
                  outlined
                  shaped
                    label="Durchgang 1"
                    single-line
                    v-model="testDaten.rumpfbeuge_1"
                  ></v-text-field>

                  <v-text-field
                  outlined
                  shaped
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
              <h3 style="padding-bottom: 4%;" class="white--text">Oberkörperkraft</h3>
              <v-layout row wrap>
                <v-flex xs5>
                  <v-text-field
                  outlined
                  shaped
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
                <v-flex xs5>
                  <v-text-field
                  outlined
                  shaped
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
              <h3 style="padding-bottom: 4%;" class="white--text">Schnellkraft</h3>
              <v-layout row wrap>
                <v-flex xs5>
                  <v-text-field
                  outlined
                  shaped
                    label="Versuch 1"
                    suffix="cm"
                    single-line
                    v-model="testDaten.schnellkraft_1"
                  ></v-text-field>


                  <v-text-field
                  outlined
                  shaped
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
              <h3 style="padding-bottom: 4%;" class="white--text">Aktionsschnelligkeit</h3>
              <v-layout wrap>
                <v-flex xs5>
                  <v-text-field
                  outlined
                  shaped
                    label="Versuch 1"
                    suffix="sek"
                    single-line
                    v-model="testDaten.aktionsschnelligkeit_1"
                  ></v-text-field>

                  <v-text-field
                  outlined
                  shaped
                    label="Versuch 2"
                    suffix="sek"
                    single-line
                    v-model="testDaten.aktionsschnelligkeit_2"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 style="padding-bottom: 4%;" class="white--text">Ausdauer</h3>
              <v-layout wrap>
                <v-flex xs5>
                  <v-text-field
                  outlined
                  shaped
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
      <v-dialog class="mx-auto" v-model="dialog" width="500">
        <v-card color="black">
          <v-card-text style="margin-top: 3%" class="primary--text">
            Möchtest du den Test beenden?
          </v-card-text>

          <v-divider></v-divider>
          <v-container class="text-center">

          <v-card-actions id="act">
            <v-btn
              color="primary"
              text
              @click="done"
            >
              <v-icon dark color="primary">mdi-check</v-icon>
            </v-btn>
            <v-btn color="primary" large text @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-actions>

          </v-container>


        </v-card>
      </v-dialog>
    </div>
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
        radios: null,
        menu: null,
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
      weight_rules: [v => v >= 30 && v <= 300 || 'Gewicht nicht angenommen.'],
      height_rules: [v => v >=  50 && v <= 250 || 'Größe nicht angenommen.'],
    };
  },
  created() {
    this.calcPoints({
      age: 14,
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
      rumpfbeuge_1: -5,
      rumpfbeuge_2: -2.09,
      //Liegestütze
      oberkoerperkraft: 18,
      //Situps
      rumpfkraft: 18,
      //Standweitsprung
      schnellkraft_1: 220,
      schnellkraft_2: 207,
      //Sprint
      aktionsschnelligkeit_1: 3,
      aktionsschnelligkeit_2: 3,

      //Ausdauer
      ausdauer: 1103,
    });
  },
  methods: {
    done() {
      console.log(this.testDaten);
      this.$router.push({ name: 'statistics' })

    },
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
        normValues.rumpfbeuge.norm = 2.6;
        normValues.rumpfbeuge.sa = 9.11;

        //6-min Lauf
        normValues.ausdauer.norm = 1346;
        normValues.ausdauer.sa = 187;
      } else if (testobject.age == 16) {
        //Alter 16
        //20m Sprint

        normValues.aktionsschnelligkeit.norm = 3.61;
        normValues.aktionsschnelligkeit.sa = 0.29;

        //LS Liegestütz
        normValues.oberkoerperkraft.norm = 14.65;
        normValues.oberkoerperkraft.sa = 3.44;

        //SU Situps
        normValues.rumpfkraft.norm = 25.98;
        normValues.rumpfkraft.sa = 5.64;

        //SW Standweitsprung
        normValues.schnellkraft.norm = 199.68;
        normValues.schnellkraft.sa = 25.96;

        //SSH Seitlich Hin und Herspringen
        normValues.koordination.norm = 36.27;
        normValues.koordination.sa = 7.25;

        //Balancieren rückwärts
        normValues.gleichgewicht.norm = 34.02;
        normValues.gleichgewicht.sa = 9.12;

        //RB Rumpfbeuge
        normValues.rumpfbeuge.norm = 2.06;
        normValues.rumpfbeuge.sa = 8.83;

        //6-min Lauf
        normValues.ausdauer.norm = 1302;
        normValues.ausdauer.sa = 181;
      } else if (testobject.age == 15) {
        //Alter 15

        //20m Sprint
        normValues.aktionsschnelligkeit.norm = 3.72;
        normValues.aktionsschnelligkeit.sa = 0.3;

        //LS Liegestütz
        normValues.oberkoerperkraft.norm = 14.10;
        normValues.oberkoerperkraft.sa = 3.44;

        //SU Situps
        normValues.rumpfkraft.norm = 25.47;
        normValues.rumpfkraft.sa = 5.64;

        //SW Standweitsprung
        normValues.schnellkraft.norm = 190.68;
        normValues.schnellkraft.sa = 24.79;

        //SSH Seitlich Hin und Herspringen
        normValues.koordination.norm = 35.19;
        normValues.koordination.sa = 7.04;

        //Balancieren rückwärts
        normValues.gleichgewicht.norm = 33.51;
        normValues.gleichgewicht.sa = 9.12;

        //RB Rumpfbeuge
        normValues.rumpfbeuge.norm = 2.06;
        normValues.rumpfbeuge.sa = 8.54;

        //6-min Lauf
        normValues.ausdauer.norm = 1257;
        normValues.ausdauer.sa = 175;
      } else if (testobject.age < 15) {
        //Alter 14 oder weniger
        //20m Sprint
        normValues.aktionsschnelligkeit.norm = 3.84;
        normValues.aktionsschnelligkeit.sa = 0.31;

        //LS Liegestütz
        normValues.oberkoerperkraft.norm = 13.56;
        normValues.oberkoerperkraft.sa = 3.44;

        //SU Situps
        normValues.rumpfkraft.norm = 24.78;
        normValues.rumpfkraft.sa = 5.64;

        //SW Standweitsprung
        normValues.schnellkraft.norm = 181.68;
        normValues.schnellkraft.sa = 23.62;

        //SSH Seitlich Hin und Herspringen
        normValues.koordination.norm = 34.11;
        normValues.koordination.sa = 6.82;

        //Balancieren rückwärts
        normValues.gleichgewicht.norm = 32.99;
        normValues.gleichgewicht.sa = 9.12;

        //RB Rumpfbeuge
        normValues.rumpfbeuge.norm = 2.06;
        normValues.rumpfbeuge.sa = 8.25;

        //6-min Lauf
        normValues.ausdauer.norm = 1213;
        normValues.ausdauer.sa = 168;
      }

      //Berechnung des Z-Werts
      function zWert(w, n, s) {
        return 100 + (10 * (w - n)) / s;
      }

      //Punkteergebnisse
      let ergebnisse = {
        erg_gleichgewicht: zWert(
          testobject.gleichgewicht3_1 +
            testobject.gleichgewicht3_2 +
            testobject.gleichgewicht4_5_1 +
            testobject.gleichgewicht4_5_2 +
            testobject.gleichgewicht6_1 +
            testobject.gleichgewicht6_2,
          normValues.gleichgewicht.norm,
          normValues.gleichgewicht.sa,
        ),
        erg_koordination: zWert(
          (testobject.koordination_1 + testobject.koordination_2) / 2,
          normValues.koordination.norm,
          normValues.koordination.sa,
        ),
        erg_rumpfbeuge: zWert(
          Math.min(testobject.rumpfbeuge_1, testobject.rumpfbeuge_2),
          normValues.rumpfbeuge.norm,
          -normValues.rumpfbeuge.sa,
        ),
        erg_oberkoerperkraft: zWert(
          testobject.oberkoerperkraft,
          normValues.oberkoerperkraft.norm,
          normValues.oberkoerperkraft.sa,
        ),
        erg_rumpfkraft: zWert(
          testobject.rumpfkraft,
          normValues.rumpfkraft.norm,
          normValues.rumpfkraft.sa,
        ),
        erg_schnellkraft: zWert(
          Math.max(testobject.schnellkraft_1, testobject.schnellkraft_2),
          normValues.schnellkraft.norm,
          normValues.schnellkraft.sa,
        ),
        erg_aktionsschnelligkeit: zWert(
          Math.min(
            testobject.aktionsschnelligkeit_1,
            testobject.aktionsschnelligkeit_2,
          ),
          normValues.aktionsschnelligkeit.norm,
          -normValues.aktionsschnelligkeit.sa,
        ),
        erg_ausdauer: zWert(
          testobject.ausdauer,
          normValues.ausdauer.norm,
          normValues.ausdauer.sa,
        ),
      };

      console.log(ergebnisse);
    },
  },
};
</script>

<style>
#act {
  margin: 15px;
}
</style>
