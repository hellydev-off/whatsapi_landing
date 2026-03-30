<template>
  <Frame>
    <About />
  </Frame>
</template>

<script setup>
useSeoMeta({
  title: "О компании — WhatsApi",
  description:
    "WhatsApi — официальный интегратор мессенджеров для CRM-систем. Помогаем бизнесу объединять каналы связи и не терять ни одного обращения клиента.",
  ogTitle: "О компании WhatsApi — интегратор мессенджеров для CRM",
  ogDescription:
    "Официальный интегратор мессенджеров для CRM. Подключаем WhatsApp, Telegram и другие каналы к вашей системе управления клиентами.",
  ogUrl: "https://whatsapi.ru/about",
});

import Frame from "~/layouts/Frame.vue";
import About from "~/components/sections/about/About.vue";
</script>

<style scoped></style>
