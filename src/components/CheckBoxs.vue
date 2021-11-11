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
    <div>
      <template v-for="prefecture in prefectures" :key="prefecture.prefCode">
        <input
          :id="prefecture.prefCode.toString()"
          type="checkbox"
          :name="prefecture.prefName"
        />
        <label :for="prefecture.prefCode.toString()">{{
          prefecture.prefName
        }}</label>
      </template>
    </div>
  </div>
</template>
