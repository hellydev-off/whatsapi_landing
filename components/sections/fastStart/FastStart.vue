<template>
  <section
    class="fast-start"
    v-motion
    :initial="{ opacity: 0 }"
    :visibleOnce="{ opacity: 1, transition: { duration: 800 } }"
  >
    <h2
      class="section-title"
      v-motion
      :initial="{ opacity: 0, y: -20 }"
      :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
    >
      Быстрый старт за <span class="green-title">5 минут</span>
    </h2>

    <div class="fast-start-steps">
      <div
        class="step-card"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 200 },
        }"
      >
        <div class="step-card-icon-container">
          <img
            :src="fastStart.steps[0].icon"
            alt="Step 1"
            class="step-card-img"
          />
          <div
            class="step-card-arrow arrow-1"
            v-motion
            :initial="{ opacity: 0, scale: 0.5, x: -20 }"
            :visibleOnce="{
              opacity: 1,
              scale: 1,
              x: 0,
              transition: { delay: 800, duration: 500 },
            }"
          >
            <svg
              class="arrow"
              width="103"
              height="49"
              viewBox="0 0 103 49"
              fill="none"
            >
              <path
                d="M1.49995 46.7841C24.6672 48.0807 69.3362 43.4387 68.3261 14.193C67.6369 -5.77441 44.4031 -1.11712 46.004 20.6992C47.6048 42.5156 83.7155 52.436 97.8311 12.0275M97.8311 12.0275L89.5708 14.6112M97.8311 12.0275L100.982 23.1226"
                stroke="#424242"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <p class="step-card-text">
          Создайте и подключите нужные аккаунты
          <strong>CRM и мессенджеров</strong>
        </p>
      </div>

      <div
        class="step-card"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 500 },
        }"
      >
        <div class="step-card-icon-container">
          <img
            :src="fastStart.steps[1].icon"
            alt="Step 2"
            class="step-card-img"
          />
          <div
            class="step-card-arrow arrow-2"
            v-motion
            :initial="{ opacity: 0, scale: 0.5, x: -20 }"
            :visibleOnce="{
              opacity: 1,
              scale: 1,
              x: 0,
              transition: { delay: 1100, duration: 500 },
            }"
          >
            <svg
              class="arrow"
              width="137"
              height="75"
              viewBox="0 0 137 75"
              fill="none"
            >
              <path
                d="M1.49982 1.5001C33.7952 3.42876 94.9142 17.0379 88.814 57.3804C84.6492 84.9239 53.2193 74.7388 58.9435 44.7808C64.6676 14.8228 116.28 6.88689 129.329 65.1222M129.329 65.1222L118.304 60.216M129.329 65.1222L135.478 50.262"
                stroke="#424242"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <p class="step-card-text">
          Получите <strong>бесплатную подписку</strong> на каждый новый аккаунт
        </p>
      </div>

      <div
        class="step-card"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 800 },
        }"
      >
        <div class="step-card-icon-container">
          <img
            :src="fastStart.steps[2].icon"
            alt="Step 3"
            class="step-card-img"
          />
        </div>
        <p class="step-card-text">
          Появились вопросы? Напишите в <strong>поддержку</strong> и вам
          <strong>помогут</strong>
        </p>
      </div>
    </div>

    <button
      class="fast-start-btn"
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 1300 } }"
      :hovered="{ scale: 1.05 }"
      :tapped="{ scale: 0.95 }"
    >
      {{ fastStart.buttonText }}
      <svg width="11" height="14" viewBox="0 0 11 14" fill="none">
        <path
          d="M2.28267e-06 11.9107V2.08929C-0.000591436 1.70155 0.114952 1.32158 0.333258 0.993356C0.551565 0.665135 0.863708 0.402083 1.23356 0.23465C1.67239 0.0386502 2.16062 -0.0368408 2.64261 0.0167792C3.1246 0.0703991 3.58098 0.250973 3.95972 0.537925L10.2509 5.44863C10.486 5.64135 10.6746 5.87961 10.8039 6.14728C10.9331 6.41494 11 6.70575 11 7C11 7.29425 10.9331 7.58506 10.8039 7.85272C10.6746 8.12039 10.486 8.35865 10.2509 8.55136L3.95972 13.4621C3.58098 13.749 3.1246 13.9296 2.64261 13.9832C2.16062 14.0368 1.67239 13.9613 1.23356 13.7653C0.863708 13.5979 0.551565 13.3349 0.333258 13.0066C0.114952 12.6784 -0.000591436 12.2984 2.28267e-06 11.9107Z"
          fill="white"
        />
      </svg>
    </button>
  </section>
</template>

<script setup>
import landingData from "~/assets/data/content.json";
const { fastStart } = landingData;
</script>

<style scoped>
/* Ваши базовые стили остаются без изменений */
.fast-start {
  background-color: var(--gray-color, #f5f5f5);
  padding: 60px 40px;
  border-radius: 16px;
  text-align: center;
  overflow: hidden; /* Важно для анимаций вылета */
}

.section-title {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 60px;
  color: #1a1a1a;
}

.green-title {
  color: var(--primary-color, #22c55e);
}

.fast-start-steps {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 50px;
}

.step-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-card-icon-container {
  height: 160px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 24px;
}

.step-card-img {
  max-width: 100%;
  max-height: 140px;
  object-fit: contain;
}

.step-card-text {
  font-size: 26px;
  font-weight: 500;
  line-height: 1.4;
  color: #333;
  max-width: 400px;
}

.step-card-text strong {
  font-weight: 700;
}

.step-card-arrow {
  position: absolute;
  top: 50%;
  right: -60px; /* Немного увеличил вылет для видимости */
  width: 100px;
  z-index: 2;
}

.arrow-1 {
  transform: translateY(20px);
}
.arrow-2 {
  transform: translateY(-40px);
}

.fast-start-btn {
  background-color: var(--primary-color, #22c55e);
  color: #fff;
  border: none;
  padding: 20px 30px;
  border-radius: 12px;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

@media (max-width: 1100px) {
  .step-card-arrow {
    width: 80px;
    right: -40px;
  }
  .step-card-text {
    font-size: 20px;
  }
}

@media (max-width: 900px) {
  .fast-start-steps {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
  .step-card-arrow {
    display: none;
  }
}
</style>
