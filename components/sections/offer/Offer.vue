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
        class="offer-card-wrapper"
        :class="{ reverse: index % 2 !== 0 }"
      >
        <div
          class="offer-card"
          v-motion
          :initial="{
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
          }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: { duration: 700, delay: index * 100 },
          }"
        >
          <div
            class="icon-circle"
            v-motion
            :initial="{ scale: 0, opacity: 0 }"
            :visibleOnce="{
              scale: 1,
              opacity: 1,
              transition: {
                delay: index * 100 + 400,
                type: 'spring',
                stiffness: 200,
              },
            }"
          >
            <img :src="item.icon" :alt="item.title" />
          </div>

          <div class="card-content">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-description">{{ item.description }}</p>

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
              <a v-if="item.action" href="#" class="btn-action">
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
import landingData from "~/assets/data/content.json";
const { offer } = landingData;
</script>

<style scoped>
.offer-section {
  padding: 80px 60px;
  margin: 0 auto;
  overflow: hidden;
}

.offer-container {
  display: flex;
  flex-direction: column;
  gap: 80px; /* Увеличил отступ из-за возросшего объема карточек */
}

.offer-card-wrapper {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.offer-card-wrapper.reverse {
  justify-content: flex-end;
}

.offer-card {
  position: relative;
  background: var(--gray-color, #f5f5f5);
  border-radius: 12px;
  padding: 40px 60px;
  max-width: 650px; /* Увеличил ширину, чтобы большие списки влезали красиво */
  min-height: 180px;
  display: flex;
  align-items: flex-start; /* Изменил на flex-start, чтобы длинный контент рос вниз */
  transition: box-shadow 0.3s ease;
}

.offer-card:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
}

.icon-circle {
  position: absolute;
  top: 40px; /* Иконка теперь не сверху, а сбоку, с небольшим отступом */
  width: 140px;
  height: 140px;
  background-color: #ffd700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  z-index: 2;
}

/* Позиционирование иконки в зависимости от стороны */
.offer-card-wrapper:not(.reverse) .icon-circle {
  left: -70px;
}
.offer-card-wrapper.reverse .icon-circle {
  right: -70px;
}

/* Отступы для контента карточки от иконки */
.offer-card-wrapper:not(.reverse) .card-content {
  padding-left: 50px;
}
.offer-card-wrapper.reverse .card-content {
  padding-right: 50px;
  text-align: left; /* Важно: оставляем текст слева для читаемости списков */
}

.icon-circle img {
  width: 60px;
  height: 60px;
  filter: brightness(0) invert(1);
}

/* Стили типографики внутри карточки */
.card-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #000;
}

.card-description {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  line-height: 1.5;
  margin-bottom: 20px;
}

.card-list {
  padding-left: 20px;
  margin-bottom: 20px;
  color: #555;
  line-height: 1.6;
}

.card-list li {
  margin-bottom: 8px;
}

.card-sections {
  margin-top: 20px;
}

.section-subtitle {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.card-example {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
  font-size: 15px;
  color: #444;
  border-left: 4px solid #ffd700;
}

.card-footer {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn-action {
  display: inline-block;
  background-color: #ffd700;
  color: #000;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  transition: background-color 0.2s;
  align-self: flex-start;
}

.btn-action:hover {
  background-color: #e6c200;
}

.hint-text {
  font-size: 14px;
  color: #777;
  font-style: italic;
}

/* Адаптив */
@media (max-width: 768px) {
  .offer-section {
    padding: 40px 20px;
  }
  .offer-container {
    gap: 100px;
  }
  .offer-card {
    padding: 70px 20px 30px; /* Отступ сверху под иконку */
    max-width: 100%;
  }
  .offer-card-wrapper.reverse .card-content,
  .offer-card-wrapper:not(.reverse) .card-content {
    padding: 0;
  }

  /* Иконка переезжает наверх по центру */
  .icon-circle {
    top: -45px;
    left: 50% !important;
    right: auto !important;
    transform: translateX(-50%);
    width: 90px;
    height: 90px;
  }
  .icon-circle img {
    width: 40px;
  }

  .btn-action {
    align-self: stretch; /* На мобилках кнопка на всю ширину */
  }
}
</style>
