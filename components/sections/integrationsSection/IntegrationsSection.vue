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
          :class="{ 'is-upcoming': item.isComingSoon }"
          v-motion
          :initial="{ opacity: 0, scale: 0.8, y: 20 }"
          :visibleOnce="{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 400, delay: index * 100 },
          }"
          :hovered="
            !item.isComingSoon
              ? { scale: 1.05, backgroundColor: '#f0f0f0' }
              : {}
          "
        >
          <img :src="item.icon" class="icon" alt="" />
          <span class="card-text">{{ item.title }}</span>

          <span v-if="item.isNew" class="badge-soon">Новинка</span>
          <span v-if="item.isComingSoon" class="badge-soon">Скоро</span>
        </div>
      </div>
    </div>

    <div class="block-crm">
      <h2
        class="title"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 200 },
        }"
      >
        <span class="text-green">Свяжите сервис</span> с любой из популярных
        CRM-платформ
      </h2>

      <div class="grid-list">
        <div
          v-for="(item, index) in integrationsSection.crm"
          :key="index"
          class="integration-card"
          :class="{ 'is-upcoming': item.isComingSoon }"
          v-motion
          :initial="{ opacity: 0, scale: 0.8, y: 20 }"
          :visibleOnce="{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 500, delay: 400 + index * 100 },
          }"
          :hovered="
            !item.isComingSoon ? { y: -5, transition: { duration: 200 } } : {}
          "
        >
          <img :src="item.icon" class="icon-full" alt="CRM" />

          <span v-if="item.isComingSoon" class="badge-soon">Скоро</span>
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
.integrations {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.text-green {
  color: var(--primary-color, #22c55e);
}

.title {
  font-weight: 500;
  font-size: 40px;
  margin-bottom: 30px;
  color: #1a1a1a;
  text-align: center;
  width: 100%;
}

.grid-list {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}

.integration-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-color, #f3f4f6);
  padding: 20px 35px;
  border-radius: 12px;
  min-width: 140px;
  height: 54px;
  cursor: pointer;
  will-change: transform, opacity;
}

.is-upcoming {
  opacity: 0.7;
  cursor: default;
  filter: grayscale(0.5);
}

.badge-soon {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #22c55e; /* Зеленый под стиль */
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 20px;
  text-transform: uppercase;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.icon-full {
  max-height: 28px;
  max-width: 100%;
  object-fit: contain;
}

.card-text {
  font-weight: 700;
  font-size: 24px;
  color: #000;
}

@media (max-width: 768px) {
  .integrations {
    gap: 40px;
    padding: 20px 15px;
  }
  .title {
    font-size: 28px;
    margin-bottom: 20px;
  }
  .integration-card {
    padding: 10px 20px;
    min-width: 120px;
    height: 48px;
  }
  .card-text {
    font-size: 18px;
  }
  .badge-soon {
    font-size: 9px;
    right: -4px;
  }
}
</style>
