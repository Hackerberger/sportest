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
          borderColor: "#000",
          fill:"false",
          data: [100,100,100,100,100]
        },
        {
          label: "Punkte",
          backgroundColor: "#f2d039",
          data: [103, 80, 70, 120, 88]
        }
      ]
    });
  }
};
</script>
  