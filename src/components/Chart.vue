<script>
import { Bar } from "vue-chartjs";

//Default font color
Chart.defaults.global.defaultFontColor = "black";

export default {
  props: {
    test: {
      type: Object
    }
  },
  extends: Bar,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: [
        "Sprint",
        "Balancieren rückwärts",
        "Seitliches Hin- und Herspringen",
        "Rumpfbeuge",
        "Liegestütz",
        "Sit-ups",
        "Standweitsprung",
        "Ausdauer"
      ],
      datasets: [
        {
          label: "Punkte",
          backgroundColor: "black",
          // average: 70,
          data: [
            this.test.erg_sprint,
            this.test.erg_Bal,
            this.test.erg_SHH,
            this.test.erg_RB,
            this.test.erg_LS,
            this.test.erg_SU,
            this.test.erg_SW,
            this.test.erg_ausdauer
          ]
        }
      ]
    });
  }
};
</script>
