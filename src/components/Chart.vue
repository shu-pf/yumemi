<script setup lang="ts">
import { ref } from "vue";
import { Chart } from "highcharts-vue";

interface PopulationComposition {
  name: string;
  data: [number, number];
}

interface Props {
  populationCompositions: PopulationComposition[];
}

const props = defineProps<Props>();

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
  series: props.populationCompositions,
  credits: {
    enabled: false,
  },
});
</script>

<template>
  <div>
    <h2>人口数推移グラフ</h2>
    <Chart :options="chartOptions"></Chart>
  </div>
</template>

<style></style>
