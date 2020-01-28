<script>
import { Bar } from "vue-chartjs";

//Default font color
Chart.defaults.global.defaultFontColor = "black";

export default {
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
        {
          type: "line",
          label: "Durchschnitt",
          borderColor: "black",
          fill:"false",
          data: [100, 100, 100, 100, 100, 100, 100, 100,100]
        },
        {
          label: "Punkte",
          backgroundColor: "black",
          data: [103, 80, 88, 120, 35, 70, 110, 80]
        }
      ]
    });
  }
};
</script>
  