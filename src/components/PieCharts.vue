<template>
  <highcharts :options="chartOptions" :updateArgs="updateArgs"></highcharts>
</template>

<script>
import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";

exportingInit(Highcharts);

export default {
  props: ["data", "title"],
  data() {
    return {
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie"
        },
        exporting: {
          enabled: false
        },
        title: {
          text: ""
        },
        series: [
          {
            data: [
              {
                name: "test",
                y: 29.9
              },
              {
                name: "test2",
                y: 29.9
              },
              {
                name: "test3",
                y: 29.94
              }
            ]
          }
        ]
      },
      updateArgs: [true, true, { duration: 1000 }]
    };
  }
};
</script>
