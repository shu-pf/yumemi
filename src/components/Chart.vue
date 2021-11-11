<script setup lang="ts">
import { ref } from "vue";
import { Chart } from "highcharts-vue";

const chartOptions = ref({
  chart: {
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
    tickInterval: 1,
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
  series: [
    {
      name: "北海道",
      data: [
        [2020, 400000],
        [2021, 500000],
        [2022, 800000],
      ],
    },
    {
      name: "青森県",
      data: [
        [2020, 500000],
        [2021, 500000],
        [2022, 800000],
      ],
    },
  ],
  credits: {
    enabled: false,
  },
});
</script>

<template>
  <Chart :options="chartOptions"></Chart>
</template>

<style></style>
