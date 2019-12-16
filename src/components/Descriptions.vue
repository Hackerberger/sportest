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
            <video
              src="../assets/videos/balance.mp4"
              loop
              autoplay
              width="300px"
            ></video>
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
      descriptions: [
        {
          name: 'Balancieren',
          goal:
            'Die Aufgabe dient der Überprüfung der Koordination bei Präzisionsaufgaben.',
          desc:
            'Die Ver­suchs­person muss hier über einen 6 cm, 4,5 cm und 3cm breiten Balken balan­cieren. Der Test­versuch beginnt stets mit beiden Füßen vom Startbrett aus. Gezählt wird jeweils die Anzahl der Schritte, bis es zum Bodenkontakt kommt. Vor dem Test wird jeweils ein Probeversuch vorwärts und rückwärts über die gesamte Balkenlänge durchgeführt. Somit wird als Vorübung pro Balken einmal vorwärts und einmal rückwärts, an­schließend zur Lei­stungs­messung je zweimal rück­wärts balanciert. Insge­samt werden damit zwei gültige Versuche pro Bal­ken ge­wer­tet.',
          video: '../assets/videos/balancieren.mp4',
        
        },
        {
          name: 'Seitliches Hin- U. Herspringen',
          goal: 'Die Aufgabe dient für...',
          desc: 'Die Ver­suchs­person muss das..',
        },
        {
          name: 'Rumpfbeuge',
          goal: 'Die Aufgabe dient für...',
          desc: 'Die Ver­suchs­person muss das..',
        },
        {
          name: 'Liegestütze',
          goal: 'Die Aufgabe dient für...',
          desc: 'Die Ver­suchs­person muss das..',
        },
        {
          name: 'Situps',
          goal: 'Die Aufgabe dient für...',
          desc: 'Die Ver­suchs­person muss das..',
          video: '../assets/videos/Situps.mp4',
        },
        {
          name: 'Standweitsprung',
          goal: 'Die Aufgabe dient für...',
          desc: 'Die Ver­suchs­person muss das..',
        },
        {
          name: '20m Sprint',
          goal: 'Die Aufgabe dient für...',
          desc: 'Die Ver­suchs­person muss das..',
        },
      ],
    };
  },
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
