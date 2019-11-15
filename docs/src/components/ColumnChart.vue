<template>
  <highcharts :options="options" ref="highcharts" class="ml-5"></highcharts>
</template>
<script>
import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";

exportingInit(Highcharts);

export default {
  data() {
    return {
      options: {
        chart: {
          type: "column"
        },
        title: {
          text: ""
        },
        subtitle: {
          text: ""
        },
        // 横軸
        xAxis: {
          categories: ["test", "test2", "test3"],
          title: {
            text: null
          }
        },
        // 縦軸
        yAxis: {
          allowDecimals: false,
          title: {
            text: ""
          },
          plotLines: [
            {
              value: 0,
              width: 1,
              color: "#808080"
            }
          ]
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            }
          }
        },
        labels: {
          overflow: "justify"
        },
        tooltip: {
          valueSuffix: ""
        },
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle",
          borderWidth: 0
        },
        series: [
          {
            name: "test",
            data: [5.6, 7.2, 10.6]
          },
          {
            name: "test2",
            data: [2.4, 3.7, 7.0]
          },
          {
            name: "test3",
            data: [18.1, 20.0, 19.9]
          }
        ]
      }
    };
  },
  methods: {
    //
  }
};
</script>
