<template>
  <Frame>
    <Api />
    <AboutContacts />
  </Frame>
</template>

<script setup>
useSeoMeta({
  title: "API и цены — WhatsApi",
  description:
    "WhatsApi предоставляет API для интеграции мессенджеров. Индивидуальное предложение от 100 рублей в зависимости от количества пользователей.",
  ogTitle: "API и цены — WhatsApi",
  ogDescription:
    "Подключите API WhatsApi к вашему проекту. Гибкое ценообразование от 100 рублей.",
  ogUrl: "https://whatsapi.ru/api",
});

import Frame from "~/layouts/Frame.vue";
import Api from "~/components/sections/api/Api.vue";
import AboutContacts from "~/components/sections/about/AboutContacts.vue";
</script>

<style scoped></style>
