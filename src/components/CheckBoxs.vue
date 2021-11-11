<script setup lang="ts">
import { Prefecture } from "../services/RESAS-API";

interface Props {
  prefectures: Prefecture[];
}

defineProps<Props>();
</script>

<template>
  <div>
    <h2>都道府県</h2>
    <div class="check-boxs">
      <div
        v-for="prefecture in prefectures"
        :key="prefecture.prefCode"
        class="check-boxs__box"
      >
        <input
          :id="prefecture.prefCode.toString()"
          type="checkbox"
          :name="prefecture.prefName"
        />
        <label :for="prefecture.prefCode.toString()">{{
          prefecture.prefName
        }}</label>
      </div>
    </div>
  </div>
</template>

<style>
.check-boxs {
  display: flex;
  flex-wrap: wrap;
}
.check-boxs__box {
  margin-right: 8px;
}
</style>
