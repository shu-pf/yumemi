<script setup lang="ts">
import Checkboxs from "./components/CheckBoxs.vue";
import Chart from "./components/Chart.vue";
</script>

<template>
  <h1>都道府県別の人口の推移</h1>
  <Checkboxs />
  <Chart class="chart"></Chart>
</template>

<style>
.chart {
  padding-top: 10px;
  height: 250px;
}
</style>
