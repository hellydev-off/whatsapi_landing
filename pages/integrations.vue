<template>
  <Frame>
    <Integrations />
  </Frame>
</template>

<script setup>
useSeoMeta({
  title: "Интеграции — WhatsApi",
  description:
    "Подключите WhatsApp, Telegram, ВКонтакте и другие мессенджеры к Bitrix24, AmoCRM, UON и другим CRM-системам. Официальный интегратор.",
  ogTitle: "Интеграции мессенджеров с CRM — WhatsApi",
  ogDescription:
    "WhatsApp, Telegram, ВКонтакте, Avito и другие мессенджеры в вашей CRM. Официальный интегратор для бизнеса.",
  ogUrl: "https://whatsapi.ru/integrations",
});

import Frame from "~/layouts/Frame.vue";
import Integrations from "~/components/sections/integration/Integrations.vue";
</script>

<style scoped></style>
