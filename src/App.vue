<script setup lang="ts">
import { ref } from "vue";

import HelloWorld from "./components/HelloWorld.vue";
import { Chart } from "highcharts-vue";

const chartOptions = ref({
  series: [
    {
      data: [1, 2, 3], // sample data
    },
  ],
});
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Chart :options="chartOptions"></Chart>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
