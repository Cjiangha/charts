<template>
  <!-- <div>11</div> -->
  <div id="container" style="height: 400px"></div>
</template>
<script>
import Highcharts from "highcharts/highstock";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsDrilldown from "highcharts/modules/drilldown";
import Highcharts3D from "highcharts/highcharts-3d";

HighchartsMore(Highcharts);
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);

export default {
  data() {
    return {
      options: {
        credits: {
          enabled: false,
        },
        chart: {
          type: "pie",
          options3d: {
            enabled: true,
            alpha: 60,
            beta: 0,
            depth: 10,
            viewDistance: 0,
            // frams: {
            //   back: {
            //     color: "transparent",
            //     size: 1,
            //     visible: "default",
            //   },
            // },
          },
        },
        legend: {
          enabled: true,
          //图例
          align: "center", //程度标的目标地位
          layout: "horizontal",
          verticalAlign: "top", //垂直标的目标地位
          padding: 2,
          margin: 0,
          itemStyle: {
            cursor: "pointer",
            color: "#black",
            fontWeight: 100,
            backgroundColor: ["#ccc"],
          },
          itemHoverStyle: {
            color: "#black",
          },
        },
        plotOptions: {
          pie: {
            slicedOffset: 50,
            innerSize: "80%", //设置空心的位置
            depth: 45,
          },
        },
        series: [
          {
            name: "Brands",
            data: [
              {
                name: "Chrome",
                y: 61.41,
                slicedOffset: 50, //gpt表示这个可以浮起来。
              },
              { name: "Internet Explorer", y: 11.84, height: 5 },
              { name: "Firefox", y: 10.85, height: 8 },
              { name: "Edge", y: 4.67, height: 2 },
              { name: "Safari", y: 4.18, height: 3 },
              { name: "Other", y: 7.05, height: 4 },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    this.initChart();
  },

  methods: {
    initChart() {
      // 根据传进来的style设置宽高
      console.log(this.$el, "22");
      this.$el.style.width = "800px";
      this.$el.style.height = "400px";
      this.$el.style.backgroundColor = "#fff";
      this.chart = new Highcharts.Chart(this.$el, this.options);
      this.chart.series[0].data[0].update({
        // sliced: true,
        // selected: true,
        slicedOffset: 20,
      });
    },
  },
};
</script>
