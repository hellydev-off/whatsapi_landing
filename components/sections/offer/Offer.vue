<template>
  <section class="offer-section">
    <h2
      class="section-title"
      v-motion
      :initial="{ opacity: 0, y: -30 }"
      :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
    >
      Что мы <span class="green-title">предлагаем</span>
    </h2>

    <div class="offer-container">
      <div
        v-for="(item, index) in offer"
        :key="index"
        class="offer-card"
        :class="{ 'is-expanded': expandedIndex === index }"
        @click="toggleCard(index)"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: index * 100 },
        }"
      >
        <div class="card-header">
          <div
            class="icon-circle"
            v-motion
            :initial="{ scale: 0 }"
            :visibleOnce="{
              scale: 1,
              transition: { delay: index * 100 + 300, type: 'spring' },
            }"
          >
            <img :src="item.icon" :alt="item.title" />
          </div>

          <div class="header-text">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-description">{{ item.description }}</p>
          </div>

          <div class="expand-icon">
            <span>{{ expandedIndex === index ? "−" : "+" }}</span>
          </div>
        </div>

        <div class="expandable-content">
          <div class="content-inner">
            <div class="divider"></div>

            <ul v-if="item.bullets" class="card-list">
              <li v-for="(bullet, bIndex) in item.bullets" :key="bIndex">
                {{ bullet }}
              </li>
            </ul>

            <div v-if="item.sections" class="card-sections">
              <div
                v-for="(sec, sIndex) in item.sections"
                :key="sIndex"
                class="card-section"
              >
                <h4 class="section-subtitle">{{ sec.subtitle }}</h4>
                <ul class="card-list">
                  <li v-for="(sBullet, sbIndex) in sec.bullets" :key="sbIndex">
                    {{ sBullet }}
                  </li>
                </ul>
              </div>
            </div>

            <div v-if="item.example" class="card-example">
              <strong>Пример:</strong> <span>{{ item.example }}</span>
            </div>

            <div v-if="item.action || item.hint" class="card-footer">
              <a
                v-if="item.action"
                href="/signup"
                class="btn-action"
                @click.stop
              >
                {{ item.action }}
              </a>
              <p v-if="item.hint" class="hint-text">{{ item.hint }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import landingData from "~/assets/data/content.json";

const { offer } = landingData;

// Состояние открытой карточки (-1 значит все закрыты)
const expandedIndex = ref(-1);

const toggleCard = (index) => {
  if (expandedIndex.value === index) {
    expandedIndex.value = -1; // Закрыть, если кликнули по открытой
  } else {
    expandedIndex.value = index; // Открыть выбранную
  }
};
</script>

<style scoped>
.offer-section {
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
}

.offer-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.offer-card {
  background: var(--gray-color);
  border-radius: 20px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-self: flex-start; /* Чтобы карточки не растягивались по высоте соседа */
}

.offer-card:hover {
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.offer-card.is-expanded {
  background: #ffffff;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  border-color: #4caf50;
}

/* Шапка */
.card-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
}

.icon-circle {
  width: 54px;
  height: 54px;
  background-color: var(--primary-color);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-circle img {
  width: 28px;
  height: 28px;
}

.header-text {
  flex-grow: 1;
  padding-right: 30px;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #1a1a1a;
}

.card-description {
  font-size: 15px;
  color: #666;
  line-height: 1.4;
  margin: 0;
}

/* Иконка + / - */
.expand-icon {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 24px;
  font-weight: 300;
  color: #999;
}

/* Анимация раскрытия через CSS Grid */
.expandable-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s ease;
  overflow: hidden;
}

.is-expanded .expandable-content {
  grid-template-rows: 1fr;
}

.content-inner {
  min-height: 0; /* Обязательно для анимации grid-rows */
}

.divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.06);
  margin: 20px 0;
}

/* Стили контента */
.card-list {
  padding-left: 18px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #444;
}

.card-list li {
  margin-bottom: 8px;
}

.section-subtitle {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

.card-example {
  background: #f0f9f0;
  padding: 14px;
  border-radius: 10px;
  font-size: 14px;
  border-left: 4px solid #4caf50;
  margin-top: 10px;
}

.card-footer {
  margin-top: 24px;
  padding-top: 10px;
}

.btn-action {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: opacity 0.2s;
}

.btn-action:hover {
  opacity: 0.9;
}

.hint-text {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}

/* Адаптив */
@media (max-width: 992px) {
  .offer-container {
    grid-template-columns: 1fr;
  }
}
</style>
