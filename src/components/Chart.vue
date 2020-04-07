<script>
import { Bar } from "vue-chartjs";

//Default font color
Chart.defaults.global.defaultFontColor = "black";

export default {
  props: {
    test: {
      type: Object
    },
  },
  extends: Bar,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: [
        "Gleichgewicht",
        "Koordination",
        "Rumpfbeweglichkeit",
        "Oberkörperkraft",
        "Rumpfkraft",
        "Schnellkraft",
        "Aktionsschnelligkeit",
        "Ausdauer"
      ],
      datasets: [
        /* {
          type: "line",
          label: "Durchschnitt",
          borderColor: "black",
          fill: "false",
          
          data: [100, 100, 100, 100, 100, 100, 100, 100, 100]
        }, */
        {
          label: "Punkte",
          backgroundColor: "black",
          // average: 70,
          data: [
            this.test.gleichgewichtPunkte, 
            this.test.koordinationPunkte,
            this.test.rumpfbeugePunkte,
            this.test.oberkoerperkraftPunkte,
            this.test.rumpfkraftPunkte,
            this.test.schnellkraftPunkte,
            this.test.aktionsschnelligkeitPunkte,
            this.test.ausdauerPunkte,
            70
            ]
        }
      ],
    });
  }
};
</script>
