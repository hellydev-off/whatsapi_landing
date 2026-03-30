<template>
  <Frame>
    <Tariff />
    <TariffCalculator class="mt-120" />
  </Frame>
</template>

<script setup>
useSeoMeta({
  title: "Тарифы — WhatsApi",
  description:
    "Выберите подходящий тариф для подключения мессенджеров к вашей CRM. Гибкие цены, 14 дней бесплатно, без ограничений по сообщениям.",
  ogTitle: "Тарифы WhatsApi — интеграция мессенджеров с CRM",
  ogDescription:
    "Гибкие тарифы на подключение WhatsApp, Telegram и других мессенджеров к вашей CRM. 14 дней бесплатного периода.",
  ogUrl: "https://whatsapi.ru/tariffs",
});

import Frame from "~/layouts/Frame.vue";
import Tariff from "~/components/sections/tariff/Tariff.vue";
import TariffCalculator from "~/components/sections/tariff/TariffCalculator.vue";
</script>

<style scoped>
.mt-120 {
  margin-top: 120px;
}
</style>
