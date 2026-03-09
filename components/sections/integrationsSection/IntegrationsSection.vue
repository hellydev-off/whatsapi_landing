<template>
  <section class="integrations">
    <div class="block-messengers">
      <h2
        class="title"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <span class="text-green">Общайтесь там</span>, где удобно вашим клиентам
      </h2>

      <div class="grid-list">
        <div
          v-for="(item, index) in integrationsSection.messengers"
          :key="index"
          class="integration-card"
          v-motion
          :initial="{ opacity: 0, scale: 0.8, y: 20 }"
          :visibleOnce="{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              duration: 400,
              delay: index * 100, // Каждая следующая карточка позже на 100мс
            },
          }"
          :hovered="{ scale: 1.05, backgroundColor: '#f0f0f0' }"
        >
          <img :src="item.icon" class="icon" alt="" />
          <span class="card-text">{{ item.title }}</span>
        </div>
      </div>
    </div>

    <div class="block-crm">
      <h2
        class="title title-right"
        v-motion
        :initial="{ opacity: 0, x: 50 }"
        :visibleOnce="{
          opacity: 1,
          x: 0,
          transition: { duration: 600, delay: 200 },
        }"
      >
        <span class="text-green">Свяжите сервис</span> с любой из популярных
        CRM-платформ
      </h2>

      <div class="grid-list grid-right">
        <div
          v-for="(item, index) in integrationsSection.crm"
          :key="index"
          class="integration-card"
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: {
              duration: 500,
              delay: 400 + index * 100, // Начинаем после заголовка
            },
          }"
          :hovered="{ y: -5, transition: { duration: 200 } }"
        >
          <img :src="item.icon" class="icon-full" alt="CRM" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import landingData from "~/assets/data/content.json";
const { integrationsSection } = landingData;
</script>

<style scoped>
/* Стили оставляем ваши, добавляем только небольшие правки для плавности */
.integrations {
  max-width: 100%;
  overflow: hidden; /* Чтобы вылетающие элементы не ломали верстку */
  padding: 40px 0;
}

.text-green {
  color: var(--primary-color, #22c55e);
}

.title {
  font-weight: 500;
  font-size: 40px;
  margin-bottom: 40px;
  color: #1a1a1a;
  max-width: 600px;
}

.title-right {
  margin-left: auto;
  text-align: right;
  margin-top: 80px;
}

.grid-list {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.grid-right {
  justify-content: flex-end;
}

.integration-card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-color, #f3f4f6);
  padding: 16px 30px;
  border-radius: 8px;
  min-width: 140px;
  height: 54px;
  cursor: default;
  /* Для плавной смены цвета при hover через Motion */
  will-change: transform, opacity;
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.icon-full {
  max-height: 30px;
  max-width: 100%;
}

.card-text {
  font-weight: 700;
  font-size: 24px;
  color: #000;
}

@media (max-width: 500px) {
  .title {
    font-size: 28px;
    margin-bottom: 30px;
  }

  .title-right {
    text-align: left;
    margin-left: 0;
    margin-top: 50px;
  }

  .grid-right {
    justify-content: flex-start;
  }

  .integration-card {
    padding: 10px 20px;
    min-width: 120px;
  }
}
</style>
