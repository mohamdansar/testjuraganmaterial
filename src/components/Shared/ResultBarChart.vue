<script>

import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ['Match Name', 'Match Phone', 'Match Mobile', 'Match Email', 'Match Adress'],
      datasets: [
        {
          label: 'no data selected yet',
          backgroundColor: '#94D82D',
          data: [100, 0]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}

</script>