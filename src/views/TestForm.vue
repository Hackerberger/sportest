<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-carousel interval="60000" hide-delimiters :show-arrows="true">
        <v-carousel-item scrollable>
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
                label="Geburtstag"
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
            <v-container>
              <h3 style="padding-bottom: 4%;" class="white--text">20m-Sprint</h3>
              <v-layout wrap>
                <v-flex xs5>
                  <v-text-field
                    outlined
                    shaped
                    label="Versuch 1"
                    type="number"
                    suffix="sek"
                    single-line
                    v-model="testDaten.sprint_D1"
                    :rules="sprint_rules"
                  ></v-text-field>

                  <v-text-field
                    outlined
                    shaped
                    label="Versuch 2"
                    type="number"
                    suffix="sek"
                    single-line
                    v-model="testDaten.sprint_D2"
                    :rules="sprint_rules"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 style class="white--text">Balancieren rückwärts</h3>
              <v-layout wrap>
                <v-container>
                  <v-card color="black" class="pt-1" outlined>
                    <span class="white--text">6cm-Balken:</span>
                    <v-slider
                      v-model="testDaten.Bal_D1_6"
                      thumb-label
                      label="Versuch 1"
                      class="align-center"
                      min="0"
                      max="8"
                      hide-details
                    >
                      <template v-slot:append>
                        <v-text-field
                          :rules="Bal_rules"
                          v-model="testDaten.Bal_D1_6"
                          class="mt-0 pt-0 mb-4"
                          hide-details
                          single-line
                          type="number"
                          style="width: 30px"
                        ></v-text-field>
                      </template>
                    </v-slider>

                    <v-slider
                      v-model="testDaten.Bal_D2_6"
                      thumb-label
                      label="Versuch 2"
                      class="align-center"
                      min="0"
                      max="8"
                      hide-details
                    >
                      <template v-slot:append>
                        <v-text-field
                          :rules="Bal_rules"
                          v-model="testDaten.Bal_D2_6"
                          class="mt-0 pt-0 mb-4"
                          hide-details
                          single-line
                          type="number"
                          style="width: 30px"
                        ></v-text-field>
                      </template>
                    </v-slider>
                  </v-card>

                  <v-card color="black" class="pt-5" outlined>
                    <span class="white--text">4,5cm-Balken:</span>
                    <v-slider
                      v-model="testDaten.Bal_D1_4_5"
                      thumb-label
                      label="Versuch 1"
                      class="align-center"
                      min="0"
                      max="8"
                      hide-details
                    >
                      <template v-slot:append>
                        <v-text-field
                          :rules="Bal_rules"
                          v-model="testDaten.Bal_D1_4_5"
                          class="mt-0 pt-0 mb-4"
                          hide-details
                          single-line
                          type="number"
                          style="width: 30px"
                        ></v-text-field>
                      </template>
                    </v-slider>

                    <v-slider
                      v-model="testDaten.Bal_D2_4_5"
                      thumb-label
                      label="Versuch 2"
                      class="align-center"
                      min="0"
                      max="8"
                      hide-details
                    >
                      <template v-slot:append>
                        <v-text-field
                          :rules="Bal_rules"
                          v-model="testDaten.Bal_D2_4_5"
                          class="mt-0 pt-0 mb-4"
                          hide-details
                          single-line
                          type="number"
                          style="width: 30px"
                        ></v-text-field>
                      </template>
                    </v-slider>
                  </v-card>

                  <v-card color="black" class="pt-4" outlined tile>
                    <span class="white--text">3cm-Balken:</span>

                    <v-slider
                      v-model="testDaten.Bal_D1_3"
                      thumb-label
                      label="Versuch 1"
                      class="align-center"
                      min="0"
                      max="8"
                      hide-details
                    >
                      <template v-slot:append>
                        <v-text-field
                          :rules="Bal_rules"
                          v-model="testDaten.Bal_D1_3"
                          class="mt-0 pt-0 mb-4"
                          hide-details
                          single-line
                          type="number"
                          style="width: 30px"
                        ></v-text-field>
                      </template>
                    </v-slider>

                    <v-slider
                      v-model="testDaten.Bal_D2_3"
                      thumb-label
                      label="Versuch 2"
                      class="align-center"
                      min="0"
                      max="8"
                      hide-details
                    >
                      <template v-slot:append>
                        <v-text-field
                          :rules="Bal_rules"
                          v-model="testDaten.Bal_D2_3"
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
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 style="padding-bottom: 4%;" class="white--text">Seitliches Hin- und Herspringen</h3>
              <v-layout wrap>
                <v-flex xs6>
                  <v-text-field
                    outlined
                    shaped
                    label="Versuch 1"
                    single-line
                    min-width="400px"
                    suffix="Sprünge"
                    type="number"
                    v-model="testDaten.SHH_D1"
                    :rules="SHH_rules"
                  ></v-text-field>

                  <v-text-field
                    outlined
                    shaped
                    label="Versuch 2"
                    suffix="Sprünge"
                    type="number"
                    v-model="testDaten.SHH_D2"
                    :rules="SHH_rules"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 style="padding-bottom: 4%;" class="white--text">Rumpfbeuge</h3>
              <v-layout row wrap>
                <v-flex xs5>
                  <v-text-field
                    outlined
                    shaped
                    label="Versuch 1"
                    type="number"
                    suffix="cm"
                    single-line
                    v-model="testDaten.RB_D1"
                    :rules="RB_rules"
                  ></v-text-field>

                  <v-text-field
                    outlined
                    shaped
                    label="Versuch 2"
                    type="number"
                    suffix="cm"
                    single-line
                    v-model="testDaten.RB_D2"
                    :rules="RB_rules"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 style="padding-bottom: 4%;" class="white--text">Liegestütz</h3>
              <v-layout row wrap>
                <v-flex xs7>
                  <v-text-field
                    outlined
                    shaped
                    label="Versuch 1"
                    type="number"
                    suffix="Liegestütze"
                    single-line
                    v-model="testDaten.LS_Anzahl"
                    :rules="LS_rules"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 style="padding-bottom: 4%;" class="white--text">Sit-ups</h3>
              <v-layout row wrap>
                <v-flex xs6>
                  <v-text-field
                    outlined
                    shaped
                    label="Versuch 1"
                    type="number"
                    suffix="Situps"
                    single-line
                    v-model="testDaten.SU_Anzahl"
                    :rules="SU_rules"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 style="padding-bottom: 4%;" class="white--text">Standweitsprung</h3>
              <v-layout row wrap>
                <v-flex xs5>
                  <v-text-field
                    outlined
                    shaped
                    label="Versuch 1"
                    type="number"
                    suffix="cm"
                    single-line
                    v-model="testDaten.SW_D1"
                    :rules="SW_rules"
                  ></v-text-field>

                  <v-text-field
                    outlined
                    shaped
                    label="Versuch 2"
                    type="number"
                    suffix="cm"
                    single-line
                    v-model="testDaten.SW_D2"
                    :rules="SW_rules"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>

          <v-carousel-item>
            <v-container>
              <h3 style="padding-bottom: 4%;" class="white--text">6-Minuten-Lauf</h3>
              <v-layout row>
                <v-flex xs9>
                  <v-text-field
                    outlined
                    shaped
                    label="Runden"
                    placeholder="Runden"
                    type="number"
                    v-model="testDaten.ausdauer"
                    :rules="ausdauer_rules"
                    style="margin-right: 35%; max-width: 460px"
                  >
                    <template slot="append">
                      <v-btn fab outlined style="margin-bottom: 25%" @click="addRound">
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </template>
                  </v-text-field>
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
      @click="openD()"
      absolute
      :style="{ left: '50%', bottom: '5%', transform: 'translateX(-50%)' }"
      bottom
      fixed
      align-center
      right
      :disabled="testDaten.ausdauer == 0"
    >
      <v-icon dark large color="#FF0000">mdi-check</v-icon>
    </v-btn>

    <div color="black" class="text-center">
      <v-dialog class="mx-auto" v-model="dialog" width="500">
        <v-card
          style=" background-color: black; border-style: solid; border-color: #FF6600; margin-top:4%;"
          class="text-center"
        >
          <v-card-text></v-card-text>
          <p
            style="font-family: calibri; font-size: 110%;"
            class="primary--text"
          >Möchtest du den Test beenden?</p>

          <v-container class="text-xs-center">
            <v-card-actions id="act">
              <v-layout row>
                <v-flex justify-center>
                  <v-btn fab dark color="#FF6600" @click="done">
                    <v-icon dark color="black">mdi-check</v-icon>
                  </v-btn>

                  <v-btn style="margin-left: 30%;" fab dark color="#FF6600" @click="dialog = false">
                    <v-icon dark color="black">mdi-close</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      dialog: false,
      klassen: ["5AHITN", "5BHITM", "5CHITM"],
      testDaten: {
        date_birth: null,
        age: null,
        radios: null,
        menu: null,
        date_test: null,
        gender: null,
        gewicht: 43,
        groeße: 123,
        //Sprint
        sprint_D1: 4.0,
        sprint_D2: 3.0,
        //Gleichgewicht
        Bal_D1_6: 0,
        Bal_D2_6: 0,
        Bal_D1_4_5: 0,
        Bal_D2_4_5: 0,
        Bal_D1_3: 0,
        Bal_D2_3: 0,
        //Hinundher
        SHH_D1: 59,
        SHH_D2: 40,
        //Rumpfbeuge
        RB_D1: -43,
        RB_D2: 43,
        //Liegestütze
        LS_Anzahl: 28,
        //Situps
        SU_Anzahl: 99,
        //Standweitsprung
        SW_D1: 793,
        SW_D2: 345,
        //Ausdauer
        ausdauer: 1
      },
      ergebnisse: {
        //Punkteergebnisse
        erg_sprint: null,
        erg_Bal: null,
        erg_SHH: null,
        erg_RB: null,
        erg_LS: null,
        erg_SUt: null,
        erg_SW: null,
        erg_ausdauer: null
      },
      weight_rules: [v => (v >= 30 && v <= 300) || "Gewicht nicht angenommen."],
      height_rules: [v => (v >= 50 && v <= 250) || "Größe nicht angenommen."],
      sprint_rules: [v => (v >= 2.0 && v <= 10.0) || "irreguläre Sprintzeit"],
      Bal_rules: [v => (v >= 0 && v <= 8) || "irregulärer Balancierwert"],
      SHH_rules: [v => (v >= 0 && v <= 60) || "irregulärer Koordinationswert"],
      RB_rules: [v => (v >= -50 && v <= 50) || "irregulärer Rumpfbeugewert"],
      LS_rules: [v => (v >= 0 && v <= 99) || "irreguläre Liegestützanzahl"],
      SU_rules: [v => (v >= 0 && v <= 99) || "irreguläre Situpsanzahl"],
      SW_rules: [
        v => (v >= 0 && v <= 800) || "irregulärer Standweitsprungwert"
      ],
      ausdauer_rules: [
        v => (v >= 1 && v <= 30) || "irreguläre Ausdauerrundenanzahl"
      ]
    };
  },
  created() {},
  methods: {
    addRound() {
      this.testDaten.ausdauer = this.testDaten.ausdauer + 1;
    },
    openD() {
      if (
        this.testDaten.gewicht >= 30 &&
        this.testDaten.gewicht <= 300 &&
        this.testDaten.groeße >= 50 &&
        this.testDaten.groeße <= 250 &&
        this.testDaten.sprint_D1 >= 2.0 &&
        this.testDaten.sprint_D1 <= 10.0 &&
        this.testDaten.sprint_D2 >= 2.0 &&
        this.testDaten.sprint_D2 <= 10.0 &&
        // this.testDaten.Bal_D1_6 >= 0 &&
        // this.testDaten.Bal_D1_6 <= 8 &&
        // this.testDaten.Bal_D2_6 >= 0 &&
        // this.testDaten.Bal_D2_6 <= 8 &&
        // this.testDaten.Bal_D1_4_5 >= 0 &&
        // this.testDaten.Bal_D1_4_5 <= 8 &&
        // this.testDaten.Bal_D2_4_5 >= 0 &&
        // this.testDaten.Bal_D2_4_5 <= 8 &&
        // this.testDaten.Bal_D1_3 >= 0 &&
        // this.testDaten.Bal_D1_3 <= 8 &&
        // this.testDaten.Bal_D2_3 >= 0 &&
        // this.testDaten.Bal_D2_3 <= 8 &&
        this.testDaten.SHH_D1 >= 0 &&
        this.testDaten.SHH_D1 <= 60 &&
        this.testDaten.SHH_D2 >= 0 &&
        this.testDaten.SHH_D2 <= 60 &&
        this.testDaten.RB_D1 >= -50 &&
        this.testDaten.RB_D1 <= 50 &&
        this.testDaten.RB_D2 >= -50 &&
        this.testDaten.RB_D2 <= 50 &&
        this.testDaten.LS_Anzahl >= 0 &&
        this.testDaten.LS_Anzahl <= 99 &&
        this.testDaten.SU_Anzahl >= 0 &&
        this.testDaten.SU_Anzahl <= 99 &&
        this.testDaten.SW_D1 >= 0 &&
        this.testDaten.SW_D1 <= 800 &&
        this.testDaten.SW_D2 >= 0 &&
        this.testDaten.SW_D2 <= 800 &&
        this.testDaten.ausdauer >= 1 &&
        this.testDaten.ausdauer <= 30
      )
        this.dialog = true;
      else {
        alert("Eine oder mehre Eingaben sind nicht korrekt!");
        this.dialog = false;
      }
    },
    done() {
      let t = this.calcPoints(this.testDaten);
      console.log(t);

      this.$emit("testCreated", t);
      let l = {
        klasse: "5CHITM",
        geschlecht: "Männlich",
        datum_geburt: "2000-10-04",
        datum_test: "2020-04-17",
        alter: 19,

        groeße: "178",
        gewicht: "60",

        sprint_D1: 3.2,
        sprint_D2: "2.8",
        Bal_D1_6: 7,
        Bal_D2_6: 7,
        Bal_D1_4_5: 6,
        Bal_D2_4_5: 7,
        Bal_D1_3: 6,
        Bal_D2_3: 8,
        SHH_D1: "34",
        SHH_D2: "45",
        RB_D1: "-4.6",
        RB_D2: "-3.4",
        LS_Anzahl: "23",
        SU_Anzahl: "30",
        SW_D1: "214",
        SW_D2: "176",
        ausdauer: 26,

        erg_sprint: 125,
        erg_Bal: 107.09429824561403,
        erg_SHH: 102.87817938420348,
        erg_RB: 107.90340285400659,
        erg_LS: 122.70348837209303,
        erg_SU: 106.52482269503545,
        erg_SW: 101.95724290453373,
        erg_ausdauer: 103.10160427807486
      };
    },
    calcPoints(testobject) {
      var normValues = {
        sprint: {},
        Bal: {},
        SHH: {},
        RB: {},
        LS: {},
        SU: {},
        SW: {},
        ausdauer: {}
      };

      this.testDaten.age = this.calculateAge(this.testDaten.date_birth);
      this.testDaten.date_test = new Date().toISOString().substr(0, 10);

      if (testobject.age > 16) {
        //Alter 17 oder mehr
        //20m Sprint
        normValues.sprint.norm = 3.5;
        normValues.sprint.sa = 0.28;

        //Balancieren rückwärts
        normValues.Bal.norm = 34.53;
        normValues.Bal.sa = 9.12;

        //SHH Seitlich Hin und Herspringen
        normValues.SHH.norm = 37.35;
        normValues.SHH.sa = 7.47;

        //RB Rumpfbeuge
        normValues.RB.norm = 2.6;
        normValues.RB.sa = 9.11;

        //LS Liegestütz
        normValues.LS.norm = 15.19;
        normValues.LS.sa = 3.44;

        //SU Sit-ups
        normValues.SU.norm = 26.32;
        normValues.SU.sa = 5.64;

        //SW Standweitsprung
        normValues.SW.norm = 208.69;
        normValues.SW.sa = 27.13;

        //6-min Lauf
        normValues.ausdauer.norm = 1346;
        normValues.ausdauer.sa = 187;
      } else if (testobject.age == 16) {
        //Alter 16
        //20m Sprint
        normValues.sprint.norm = 3.61;
        normValues.sprint.sa = 0.29;

        //Bal Balancieren rückwärts
        normValues.Bal.norm = 34.02;
        normValues.Bal.sa = 9.12;

        //SHH Seitlich Hin und Herspringen
        normValues.SHH.norm = 36.27;
        normValues.SHH.sa = 7.25;

        //RB Rumpfbeuge
        normValues.RB.norm = 2.06;
        normValues.RB.sa = 8.83;

        //LS Liegestütz
        normValues.LS.norm = 14.65;
        normValues.LS.sa = 3.44;

        //SU Sit-ups
        normValues.SU.norm = 25.98;
        normValues.SU.sa = 5.64;

        //SW Standweitsprung
        normValues.SW.norm = 199.68;
        normValues.SW.sa = 25.96;

        //6-min Lauf
        normValues.ausdauer.norm = 1302;
        normValues.ausdauer.sa = 181;
      } else if (testobject.age == 15) {
        //Alter 15

        //20m Sprint
        normValues.sprint.norm = 3.72;
        normValues.sprint.sa = 0.3;

        //Balancieren rückwärts
        normValues.Bal.norm = 33.51;
        normValues.Bal.sa = 9.12;

        //SHH Seitlich Hin und Herspringen
        normValues.SHH.norm = 35.19;
        normValues.SHH.sa = 7.04;

        //RB Rumpfbeuge
        normValues.RB.norm = 2.06;
        normValues.RB.sa = 8.54;

        //LS Liegestütz
        normValues.LS.norm = 14.1;
        normValues.LS.sa = 3.44;

        //SU Situps
        normValues.SU.norm = 25.47;
        normValues.SU.sa = 5.64;

        //SW Standweitsprung
        normValues.SW.norm = 190.68;
        normValues.SW.sa = 24.79;

        //6-min Lauf
        normValues.ausdauer.norm = 1257;
        normValues.ausdauer.sa = 175;
      } else if (testobject.age < 15) {
        //Alter 14 oder weniger
        //20m Sprint
        normValues.sprint.norm = 3.84;
        normValues.sprint.sa = 0.31;

        //Balancieren rückwärts
        normValues.Bal.norm = 32.99;
        normValues.Bal.sa = 9.12;

        //SHH Seitlich Hin und Herspringen
        normValues.SHH.norm = 34.11;
        normValues.SHH.sa = 6.82;

        //RB Rumpfbeuge
        normValues.RB.norm = 2.06;
        normValues.RB.sa = 8.25;

        //LS Liegestütz
        normValues.LS.norm = 13.56;
        normValues.LS.sa = 3.44;

        //SU Situps
        normValues.SU.norm = 24.78;
        normValues.SU.sa = 5.64;

        //SW Standweitsprung
        normValues.SW.norm = 181.68;
        normValues.SW.sa = 23.62;

        //6-Minuten-Lauf
        normValues.ausdauer.norm = 1213;
        normValues.ausdauer.sa = 168;
      }

      //Berechnung des Z-Werts
      function zWert(w, n, s) {
        return 100 + (10 * (w - n)) / s;
      }

      //Punkteergebnisse
      let ergebnisse = {
        erg_Bal: zWert(
          testobject.Bal_D1_6 +
            testobject.Bal_D2_6 +
            testobject.Bal_D1_4_5 +
            testobject.Bal_D2_4_5 +
            testobject.Bal_D1_6 +
            testobject.Bal_D2_6,
          normValues.Bal.norm,
          normValues.Bal.sa
        ),
        erg_SHH: zWert(
          (parseInt(testobject.SHH_D1) + parseInt(testobject.SHH_D2)) / 2,
          normValues.SHH.norm,
          normValues.SHH.sa
        ),
        erg_RB: zWert(
          Math.min(testobject.RB_D1, testobject.RB_D2),
          normValues.RB.norm,
          -normValues.RB.sa
        ),
        erg_LS: zWert(
          testobject.LS_Anzahl,
          normValues.LS.norm,
          normValues.LS.sa
        ),
        erg_SU: zWert(
          testobject.SU_Anzahl,
          normValues.SU.norm,
          normValues.SU.sa
        ),
        erg_SW: zWert(
          Math.max(testobject.SW_D1, testobject.SW_D2),
          normValues.SW.norm,
          normValues.SW.sa
        ),
        erg_sprint: zWert(
          Math.min(testobject.sprint_D1, testobject.sprint_D2),
          normValues.sprint.norm,
          -normValues.sprint.sa
        ),
        erg_ausdauer: zWert(
          testobject.ausdauer * 54,
          normValues.ausdauer.norm,
          normValues.ausdauer.sa
        )
      };

      return { ...testobject, ...ergebnisse };
    },
    calculateAge(birthd) {
      let b = moment(birthd);
      return moment().diff(b, "years");
    }
  }
};
</script>

<style>
#act {
  margin: 15px;
}
</style>
