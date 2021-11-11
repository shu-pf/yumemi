<script setup lang="ts">
import { ref, onMounted } from "vue";

import Checkboxs from "./components/CheckBoxs.vue";
import Chart from "./components/Chart.vue";
import resasApi, { Prefecture } from "./services/RESAS-API";

const prefectures = ref([] as Prefecture[]);

onMounted(async () => {
  prefectures.value = await resasApi.prefectures();
});
</script>

<template>
  <h1>都道府県別の人口の推移</h1>
  <Checkboxs :prefectures="prefectures" />
  <Chart class="chart"></Chart>
</template>

<style>
.chart {
  padding-top: 10px;
  height: 250px;
}
</style>
