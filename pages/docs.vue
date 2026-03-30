<template>
  <div class="cont">
    <Header />
    <div class="main-content">
      <Docs />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "База знаний — WhatsApi",
  description:
    "Документация и руководства по настройке интеграции мессенджеров с CRM. Пошаговые инструкции по подключению WhatsApp, Telegram и других каналов.",
  ogTitle: "База знаний WhatsApi — документация и инструкции",
  ogDescription:
    "Пошаговые инструкции по настройке интеграции мессенджеров с CRM. Руководства, FAQ и техническая документация.",
  ogUrl: "https://whatsapi.ru/docs",
});

import Header from "~/components/layout/header/Header.vue";
import Docs from "~/components/sections/fastStart/docs/Docs.vue";
import Frame from "~/layouts/Frame.vue";
</script>

<style scoped>
.cont {
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
}

.main-content {
  flex-grow: 1; /* Заставляет контент занимать всё свободное пространство, толкая футер вниз */
}

/* Ваши медиа-запросы остаются без изменений */
@media (max-width: 1250px) {
  .cont {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (max-width: 768px) {
  .cont {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
