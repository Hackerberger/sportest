<script>
import { Bar } from "vue-chartjs";

//Default font color
Chart.defaults.global.defaultFontColor = "white";

export default {
  extends: Bar,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ["Sprint", "Balanzieren", "Springen", "Laufen", "Situps"],
      datasets: [
        {
          type: "line",
          label: "Durchschnitt",
          borderColor: "white",
          fill:"false",
          average: 50,
          data: [100,100,100,100,100]
        },
        {
          label: "Punkte",
          backgroundColor: "white",
          data: [103, 80, 88, 120, 70]
        }
      ]
    });
  }
};
</script>
  