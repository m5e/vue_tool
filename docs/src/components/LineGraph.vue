<template>
  <highcharts :options="options" ref="highcharts"></highcharts>
</template>
<script>
import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";

exportingInit(Highcharts);

export default {
  data() {
    return {
      options: {
        title: {
          text: "月別平均気温"
        },
        subtitle: {
          text: "2019年度"
        },
        // 横軸
        xAxis: {
          categories: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        },
        // 縦軸
        yAxis: {
          title: {
            text: "気温 (°C)"
          },
          plotLines: [
            {
              value: 0,
              width: 1,
              color: "#808080"
            }
          ]
        },
        tooltip: {
          valueSuffix: "°C"
        },
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle",
          borderWidth: 1
        },
        series: [
          {
            name: "東京都",
            data: [
              5.6,
              7.2,
              10.6,
              13.6,
              20.0,
              21.8,
              24.1,
              28.4,
              25.1,
              19.4,
              15.1,
              0
            ]
          },
          {
            name: "北海道",
            data: [
              -3.0,
              -2.6,
              2.5,
              8.0,
              15.7,
              17.4,
              21.7,
              22.5,
              19.3,
              13.3,
              6.7,
              0
            ]
          },
          {
            name: "宮城県",
            data: [
              2.4,
              3.7,
              7.0,
              10.2,
              17.4,
              19.0,
              22.4,
              26.2,
              22.4,
              16.9,
              12.3,
              0
            ]
          },
          {
            name: "沖縄県",
            data: [
              18.1,
              20.0,
              19.9,
              22.3,
              24.2,
              26.5,
              28.9,
              29.2,
              28.0,
              26.0,
              24.1,
              0
            ]
          },
          {
            name: "福岡県",
            data: [
              8.0,
              9.4,
              11.9,
              15.4,
              21.1,
              23.4,
              26.4,
              28.0,
              25.9,
              20.5,
              16.4,
              0
            ]
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
