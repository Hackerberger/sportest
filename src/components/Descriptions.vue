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
          //Aktionsschnelligkeit
          name: "20-m Sprint",
          goal:
            "Das Ziel dieser Übung ist es die Aktionsschnelligkeit zu überprüfen.",
          desc:
            "Man versucht mit einem Sprint eine Strecke von 20m so schnell wie möglich zurückzulegen. Man steht in einer aufrechten Starthaltung vor der Startlinie. Die Zeit wird durch eine Zeitmess-Anlage automatisch gemessen."
        },
        {
          //Gleichgewicht
          name: "Balancieren rückwärts",
          goal:
            "Das Ziel dieser Übung ist es den Gleichgewichtssinn zu überprüfen.",
          desc:
            "Bei dieser Übung balanciert man rückwärts über 6 cm, 4,5 cm & 3 cm breite Balken. Der Start erfolgt mit beiden Füßen am Anfang des Balkens. Es werden die Schritte gezählt, bis einer der Füße den Boden berührt. Die Anzahl der Schritte werden im Testformular eingegeben. Die Höchstpunktzahl beträgt 8. Man hat 2 gültige Versuche pro Balken, wobei der Bessere zählt. Ein Probeversuch ist erlaubt.",
          video: "videos/balance.mp4"
        },
        {
          //Koordination
          name: "Seitliches Hin- und Herspringen",
          goal:
            "Das Ziel dieser Übung ist es die Koordination bei Sprüngen zu überprüfen.",
          desc:
            "Man springt mit beiden Beinen nebeneinander so schnell wie möglich seitlich über eine Linie am Boden hin- und her. Die Sprünge gehen immer von einer Feldhälfte zur anderen, ohne dabei die Mittellinie zu berühren. Der Testversuch beträgt 15 Sekunden und diese werden mit der Stoppuhr von einem/r Mitschüler/in gestoppt. Es sind keine Zwischensprünge erlaubt!"
        },
        {
          //Rumpfbeweglichkeit
          name: "Rumpfbeuge",
          goal:
            "Das Ziel dieser Übung ist es die Rumpfbeweglichkeit zu messen.",
          desc:
            "Man stellt sich ohne Schuhe auf eine Langbank. Als nächstes beugt sich nur der Oberkörper langsam nach vorne. Die Beine dürfen nicht abgewinkelt werden. Die Hände werden parallel so weit wie möglich entlang der Zentimeterskala geführt. Diese Position muss 2 Sekunden gehalten werden. Der Skalenwert, der am tiefsten Punkt bei den Fingerspitzen abgemessen wird, wird ins Testformular eingetragen. Jede/r hat 2 gültige Versuche."
        },
        {
          //Oberkörperkraft
          name: "Liegestütz",
          goal:
            "Das Ziel dieser Übung ist es die Kraftausdauer des Oberkörpers zu messen.",
          desc:
            "Man versucht innerhalb von 40 Sekunden so viele Liegestütze wie möglich zu machen. Am Anfang liegt man in Bauchlage und die Hände berühren sich hinter dem Rücken. Als nächstes wird der gestreckte Körper dabei von den Armen gestützt, wobei der Blick zum Boden hin gerichtet ist. Die Länge des Testversuches wird mit der Stoppuhr von einem/r Mitschüler/in gestoppt. Im Probeversuch dürfen zwei Liegestütze gemacht werden."
        },
        {
          //Rumpfkraft
          name: "Sit-ups",
          goal:
            "Das Ziel dieser Übung ist es die Kraftausdauer des Rumpfbereichs zu überprüfen.",
          desc:
            "Man versucht in 40 Sekunden so viele Sit-ups wie möglich zu machen. Ein/e Mitschüler/in hält beide Beine am Boden. Diese werden im Kniegelenk um ungefähr 75-85° gebeugt und die Hände berühren die Schläfen. Ein Situp zählt erst dann, wenn beide Ellbogen die Knie berühren und dann anschließend beim Zurücklehnen die Schultern die Matte berühren. Im Probeversuch dürfen zwei Sit-ups gemacht werden.",
          video: "videos/Situps.mp4"
        },
        {
          //Schnellkraft
          name: "Standweitsprung",
          goal:
            "Das Ziel dieser Übung ist es die Schnellkraft bei Sprüngen zu überprüfen.",
          desc:
            "Man versucht mit einem Standweitsprung so weit wie möglich zu springen. Beim Abspringen müssen beide Füße parallel vor der Absprunglinie stehen. Die Landung muss ebenfalls mit den Beinen parallel zueinander erfolgen. Nach dem Sprung muss man in der gleichen Position wie bei der Landung stehen bleiben, bis ein/e Mitschüler/in den Abstand von der Absprunglinie bis zur Ferse abgemessen hat. Im Probeversuch dürfen zwei Sprünge absolviert werden."
        },
        {
          //Ausdauer
          name: "6-Minuten-Lauf",
          goal: "Das Ziel dieser Übung ist es die Ausdauer zu messen",
          desc:
            "Man läuft innerhalb von sechs Minuten so viele Runden wie möglich um ein Volleyballfeld. Es wird in Gruppen von ca. 10 Schüler/innen gelaufen. Ein Partner, meistens ein/e Mitschüler/in zählt die Runden des jeweils anderen. Gehen ist erlaubt, stehen bleiben jedoch nicht. Jede Minute gibt der/die Lehrer/in die noch zu laufende Zeit ein. In das Testformular wird die gelaufene Rundenzahl eingetragen."
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
}
</style>
