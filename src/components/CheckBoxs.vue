<script setup lang="ts">
import { Prefecture } from "../services/RESAS-API";

interface Props {
  prefectures: Prefecture[];
}

defineProps<Props>();

interface Emits {
  (e: "changed", value: { prefCode: string; status: boolean }): void;
}

const emit = defineEmits<Emits>();

function changed(event: Event) {
  emit("changed", {
    prefCode: (event.target as HTMLInputElement).id,
    status: (event.target as HTMLInputElement).checked,
  });
}
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
          @change="changed($event)"
        />
        <label :for="prefecture.prefCode.toString()">{{
          prefecture.prefName
        }}</label>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.check-boxs {
  display: flex;
  flex-wrap: wrap;
  &__box {
    margin-right: 8px;
  }
}
</style>
