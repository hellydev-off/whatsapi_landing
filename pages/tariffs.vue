<template>
  <Frame>
    <Tariff />
    <TariffCalculator class="mt-120" />
  </Frame>
</template>

<script setup>
import Frame from "~/layouts/Frame.vue";
import Tariff from "~/components/sections/tariff/Tariff.vue";
import TariffCalculator from "~/components/sections/tariff/TariffCalculator.vue";
</script>

<style scoped>
.mt-120 {
  margin-top: 120px;
}
</style>
