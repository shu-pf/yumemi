<script setup lang="ts">
import { ref, onMounted } from "vue";

import Checkboxs from "./components/CheckBoxes.vue";
import Chart from "./components/Chart.vue";
import resasApi, { Prefecture } from "./services/RESAS-API";
import * as Highcharts from "highcharts";

const prefectures = ref([] as Prefecture[]);

onMounted(async () => {
  prefectures.value = await resasApi.prefectures();
});

const populationCompositions = ref([] as Highcharts.SeriesOptionsType[]);

function changed(e: { prefName: string; prefCode: string; status: boolean }) {
  if (e.status) {
    resasApi.populationComposition(Number(e.prefCode)).then((res) => {
      const resParsed = res.data[0].data.map(function (d: {
        year: number;
        value: number;
      }): [number, number] {
        return [d.year, d.value];
      });

      populationCompositions.value.push({
        name: e.prefName,
        type: "line",
        data: resParsed,
      });
    });
  } else {
    populationCompositions.value.splice(
      populationCompositions.value.findIndex(
        (element) => element.name == e.prefName
      ),
      1
    );
  }
}
</script>

<template>
  <h1>都道府県別の人口の推移</h1>
  <Checkboxs :prefectures="prefectures" @changed="changed" />
  <Chart
    class="chart"
    :population-compositions="populationCompositions"
  ></Chart>
</template>

<style>
.chart {
  padding-top: 10px;
  height: 250px;
}
</style>
