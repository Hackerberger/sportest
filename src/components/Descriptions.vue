<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel v-for="d in descriptions" :key="d.name">
        <v-expansion-panel-header>
          <template v-slot:actions>
            <v-icon color="black">$expand</v-icon>
          </template>
          <h4>{{ d.name }}</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container class="text-center" v-if="!(d.video == null)">
            <video :src="publicPath + d.video" loop autoplay width="100%"></video>
          </v-container>
          <h4>Testziel</h4>
          {{ d.goal }}
          <h4>Testaufgabe</h4>
          {{ d.desc }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      descriptions: [
        {
          //Balancieren
          name: "Gleichgewicht",
          goal:
            "Die Aufgabe dient der Überprüfung der Koordination bei Präzisionsaufgaben.",
          desc:
            "Die Ver­suchs­person muss hier über einen 6 cm & 4,5 cm breiten Balken balan­cieren. Der Test­versuch beginnt stets mit beiden Füßen vom Startbrett aus. Gezählt wird jeweils die Anzahl der Schritte, bis es zum Bodenkontakt kommt. Vor dem Test wird jeweils ein Probeversuch vorwärts und rückwärts über die gesamte Balkenlänge durchgeführt. Somit wird als Vorübung pro Balken einmal vorwärts und einmal rückwärts, an­schließend zur Lei­stungs­messung je zweimal rück­wärts balanciert. Insge­samt werden damit zwei gültige Versuche pro Bal­ken ge­wer­tet.",
          video: "videos/balance.mp4"
        },
        {
          // Seitliches Hin- U. Herspringen
          name: "Koordination",
          goal: "Die Aufgabe dient für...",
          desc: "Die Ver­suchs­person muss das.."
        },
        {
          // Rumpfbeuge
          name: "Rumpfbeweglichkeit",
          goal: "Die Aufgabe dient für...",
          desc: "Die Ver­suchs­person muss das.."
        },
        {
          // Liegestütze
          name: "Oberkörperkraft",
          goal: "Die Aufgabe dient für...",
          desc: "Die Ver­suchs­person muss das.."
        },
        {
          // Situps
          name: "Rumpfkraft",
          goal:"Die Aufgabe dient der Überprüfung der Kraftausdauer der Rumpfmuskulatur.",
          desc:"Die Versuchsperson muss in 40 Sekunden so viele Sit-ups wie möglich absolvieren. Während der Durchführung werden die Füße vom Testleiter fixiert und die Beine im Kniegelenk um ca. 80° gebeugt. Die Hände werden an die Schläfe gehalten. Die Versuchsperson muss bei einem Sit-up aus liegender Position den Oberkörper aufrichten und mit beiden Ellenbogen beide Knie berühren. Anschließend muss die Testperson mit den Schultern die Matte berühren.",
          video: "videos/Situps.mp4"
        },
        {
          // Standweitsprung
          name: "Schnellkraft",
          goal: "Die Aufgabe dient für...",
          desc: "Die Ver­suchs­person muss das.."
        },
        {
          //20-m Sprint
          name: "Aktionsschnelligkeit",
          goal: "Die Aufgabe dient für...",
          desc: "Die Ver­suchs­person muss das.."
        },
        {
          //6-Minuten-Lauf
          name: "Ausdauer",
          goal: "Die Aufgabe dient für...",
          desc: "Die Ver­suchs­person muss das.."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.v-expansion-panel {
  background-color: #ff6600 !important;
  color: black !important;
  margin: 5px;
  border-radius: 5px;
  //border: solid white 1px;
}
</style>
