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
            "Diese Übung hilft die Koordination bei Präzisionsaufgaben zu überprüfen.",
          desc:
            "Der Schüler balanciert hier über einen 6 cm, 4,5 cm und 3 cm breiten Balken. Der Test­versuch beginnt stets mit beiden Füßen vom Startbrett aus. Gezählt wird jeweils die Anzahl der Schritte, bis es zum Bodenkontakt kommt. Vor dem Test darf jeweils ein Probeversuch durchgeführt werden. Danach beginnen die Durchführungen der Übungen, welche in die App eingetragen werden. Insge­samt werden damit zwei gültige Versuche pro Bal­ken ge­wer­tet.",
          video: "videos/balance.mp4"
        },
        {
          // Seitliches Hin- U. Herspringen
          name: "Koordination",
          goal: "Diese Übung überprüft die Koordination unter Zeitdruck bei Sprüngen",
          desc: "Der Schüler springt hier, mit beiden Beinen gleichzeitig so schnell wie möglich, innerhalb von 15 Sekunden, seitlich über die Mittellinie einer Teppichmatte  hin- und her. Die Testperson startet mit geschlossenen Füßen in einer Hälfte des Feldes. Mit dem Startsignal springt die Testperson ohne Zwischenhüpfer immer von einer Feldhälfte in die Andere, ohne dabei die Mittellinie zu berühren und ohne die Teppichmatte zu verlassen. Ein/e Mitschüler/in signalisiert nach 15 Sekunden das Ende der Übung."
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
          goal: "Die Übung dient der Aktionsschnelligkeit in Sprints",
          desc: "Die Ver­suchs­person muss das.."
        },
        {
          //6-Minuten-Lauf
          name: "Ausdauer",
          goal: "Die Übung überprüft die Ausdauer.",
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
