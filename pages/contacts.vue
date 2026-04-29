<template>
  <Frame>
    <Contacts />
  </Frame>
</template>

<script setup>
useSeoMeta({
  title: "Контакты — WhatsApi",
  description:
    "Свяжитесь с командой WhatsApi: техническая поддержка и вопросы сотрудничества. Мы всегда на связи.",
  ogTitle: "Контакты — WhatsApi",
  ogDescription:
    "Техподдержка: hello@whatsapi.ru. По вопросам сотрудничества: hr@developtech.ru.",
  ogUrl: "https://whatsapi.ru/contacts",
});

import Frame from "~/layouts/Frame.vue";
import Contacts from "~/components/sections/contacts/Contacts.vue";
</script>

<style scoped></style>
