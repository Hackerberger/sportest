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
            "Das Ziel dieser Übung ist es den Gleichgewichtssinn der Schüler/innen zu überprüfen. ",
          desc:
            "Die Schülerin bzw. der Schüler balanciert hier rückwärts über 6 cm, 4,5 cm & 3 cm breiten Balken. Der Start erfolgt mit beiden Füßen am Anfang des Balkens. Es werden die Schritte bis zum Kontakt mit einem der beiden Füße gezählt. Die Anzahl der Schritte werden im Testformular eingegeben. Die Höchstpunktzahl beträgt 8. Jede/r hat 2 gültige Versuche pro Balken, wobei der Bessere zählt. Ein Probeversuch ist erlaubt. ",
          video: "videos/balance.mp4"
        },
        {
          // Seitliches Hin- U. Herspringen
          name: "Koordination",
          goal: "Das Ziel dieser Übung ist es die Koordination bei Sprüngen der Schüler/innen zu überprüfen.",
          desc: "Die Schülerin bzw. der Schüler springt mit beiden Beinen nebeneinander so schnell wie möglich seitlich über eine Linie am Boden hin- und her. Die Sprünge gehen immer von einer Feldhälfte zur anderen, ohne dabei die Mittellinie zu berühren. Der Testversuch beträgt 15 Sekunden und diese werden mit der Stoppuhr von einem/r Mitschüler/in gestoppt. Es sind keine Zwischensprünge erlaubt!"
        },
        {
          // Rumpfbeuge
          name: "Rumpfbeweglichkeit",
          goal: "Das Ziel dieser Übung ist es die Rumpfbeweglichkeit der Schüler/innen zu messen.",
          desc: "Die Schülerin bzw. der Schüler stellt sich ohne Schuhe auf eine Langbank. Als nächstes beugt sich nur der Oberkörper langsam nach vorne. Die Beine dürfen nicht abgewinkelt werden. Die Hände werden parallel so weit wie möglich entlang der Zentimeterskala geführt. Diese Position muss 2 Sekunden gehalten werden. Der Skalenwert, der am tiefsten Punkt bei den Fingerspitzen abgemessen wird, wird ins Testformular eingetragen. Jede/r hat 2 gültige Versuche und es gibt keinen Probeversuch!"
        },
        {
          // Liegestütze
          name: "Oberkörperkraft",
          goal: "Das Ziel dieser Übung ist es die Kraftausdauer des Oberkörpers zu messen.",
          desc: "Die Schülerin bzw. der Schüler versucht innerhalb von 40 Sekunden so viele Liegestütze wie möglich zu machen. Am Anfang liegt der/die Schüler/in in Bauchlage und die Hände berühren sich auf dem Gesäß. Als nächstes wird der gestreckte Körper dabei von den Armen gestützt, wobei der Blick zum Boden hin gerichtet ist. Die Länge des Testversuches wird mit der Stoppuhr von einem/r Mitschüler/in gestoppt. Im Probeversuch dürfen zwei Liegestütze gemacht werden."
        },
        {
          // Situps
          name: "Rumpfkraft",
          goal:"Das Ziel dieser Übung ist es die Kraftausdauer des Rumpfbereichs zu überprüfen.",
          desc:"Die Schülerin bzw. der Schüler versucht in 40 Sekunden so viele Sit-ups wie möglich zu machen. Eine Mitschülerin bzw. ein Mitschüler hält beide Beine am Boden. Diese werden im Kniegelenk um ungefähr 75-85° gebeugt und die Hände berühren die Schläfen. Ein Situp zählt erst dann, wenn beide Ellbogen die Knie berühren und dann anschließend beim zurücklehnen die Schultern die Matte berühren. Im Probeversuch dürfen zwei Sit-ups gemacht werden.",
          video: "videos/Situps.mp4"
        },
        {
          // Standweitsprung
          name: "Schnellkraft",
          goal: "Das Ziel dieser Übung ist es die Schnellkraft bei Sprüngen zu überprüfen.",
          desc: "Die Schülerin bzw. der Schüler versucht mit einem Standweitsprung so weit wie möglich zu springen. Beim Abspringen müssen beide Füße parallel vor der Absprunglinie stehen. Die Landung muss ebenfalls mit den Beinen parallel zueinander erfolgen. Nach dem Sprung muss die Schülerin bzw. der Schüler in der gleichen Position wie bei der Landung stehen bleiben, bis ein/e Mitschüler/in den Abstand von der Absprunglinie bis zur Ferse abgemessen hat. Im Probeversuch dürfen zwei Sprünge absolviert werden."
        },
        {
          //20-m Sprint
          name: "Aktionsschnelligkeit",
          goal: "Das Ziel dieser Übung ist es die Aktionsschnelligkeit zu überprüfen.",
          desc: "Die Schülerin bzw. der Schüler versucht mit einem Sprint eine Strecke von 20m so schnell wie möglich zurückzulegen. Der Schüler bzw. die Schülerin hält eine aufrechte Haltung vor der Startlinie. Die Zeit wird durch eine Zeitmess-Anlage automatisch gemessen. Diese beginnt beim Überqueren der Startlinie und endet beim Überqueren der Endlinie."
        },
        {
          //6-Minuten-Lauf
          name: "Ausdauer",
          goal: "Das Ziel dieser Übung ist es die Ausdauer zu messen",
          desc: "Die Schülerin bzw. der Schüler läuft innerhalb von sechs Minuten so viele Runden wie möglich. Es wird in Gruppen von 10 Schüler/innen gelaufen. Ein Partner, meistens ein/e Mitschüler/in zählt die Runden des jeweils anderen. Gehen ist erlaubt, aber stehen bleiben nicht. Jede Minute gibt der/die Lehrer/in die noch zu laufende Zeit ein. In das Testformular wird die gelaufene Rundenzahl eingetragen."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.v-expansion-panel {
  background-color: #FF6600 !important;
  color: black !important;
  margin: 5px;
  border-radius: 5px;
  //border: solid white 1px;
}
</style>
