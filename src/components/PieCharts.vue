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
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        exporting: {
          enabled: true
        },
        title: {
          text: "人口密度(万人)"
        },
        tooltip: {
          pointFormat: "{data.name}<b>{point.percentage:.1f}%</b>"
        },
        series: [
          {
            data: [
              {
                name: "関東",
                y: 33
              },
              {
                name: "近畿",
                y: 18
              },
              {
                name: "中部",
                y: 17
              },
              {
                name: "九州",
                y: 12
              },
              {
                name: "東北",
                y: 9
              },
              {
                name: "中国",
                y: 6
              },
              {
                name: "北海道",
                y: 4
              },
              {
                name: "四国",
                y: 3
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
