<script setup lang="ts">
import { watch } from "vue";
import * as Highcharts from "highcharts";

interface Props {
  populationCompositions: Highcharts.SeriesOptionsType[];
}

const props = defineProps<Props>();

watch(
  () => props.populationCompositions,
  (value) => {
    Highcharts.chart({
      chart: {
        renderTo: "chart",
        marginTop: 25,
      },
      title: {
        text: "",
      },
      yAxis: {
        title: {
          text: "人口数",
          align: "high",
          rotation: 0,
          y: -15,
          style: {
            "text-anchor": "start",
          },
          reserveSpace: false,
        },
        labels: {
          format: "{value:,.0f}",
        },
      },
      xAxis: {
        tickInterval: 5,
        title: { align: "high", text: "年度" },
      },
      legend: {
        layout: "vertical",
        backgroundColor: "#FFFFFF",
        floating: true,
        align: "left",
        x: 70,
        verticalAlign: "top",
        y: 20,
      },
      credits: {
        enabled: false,
      },
      series: value,
    });
  },
  { deep: true }
);
</script>

<template>
  <div>
    <h2>人口数推移グラフ</h2>
    <div id="chart"></div>
  </div>
</template>

<style></style>
