<script>
import { Bar } from 'vue-chartjs';

//Default font color
Chart.defaults.global.defaultFontColor = 'black';

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
        'Gleichgewicht',
        'Koordination',
        'Rumpfbeweglichkeit',
        'Oberkörperkraft',
        'Rumpfkraft',
        'Schnellkraft',
        'Aktionsschnelligkeit',
        'Ausdauer'
      ],
      datasets: [
        {
          label: 'Punkte',
          backgroundColor: 'black',
          // average: 70,
          data: [
            this.test.erg_gleichgewicht,
            this.test.erg_koordination,
            this.test.erg_rumpfbeuge,
            this.test.erg_oberkoerperkraft,
            this.test.erg_rumpfkraft,
            this.test.erg_schnellkraft,
            this.test.erg_aktionsschnelligkeit,
            this.test.erg_ausdauer,
            
          ]
        }
      ]
    });
  }
};
</script>
