<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1
        class="hero-title"
        v-html="hero.title"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      ></h1>

      <p
        class="hero-description"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
      >
        {{ hero.description }}
      </p>

      <button
        class="hero-button"
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: { duration: 400, delay: 400 },
        }"
        :hovered="{ scale: 1.05 }"
        :tapped="{ scale: 0.95 }"
      >
        {{ hero.button.text }}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2208_1456)">
            <path
              d="M18.656 11.7478L13.9798 10.0237L12.2519 5.34375C12.1198 4.98542 11.881 4.67621 11.5677 4.45781C11.2544 4.2394 10.8817 4.12231 10.4998 4.12231C10.1178 4.12231 9.74511 4.2394 9.43181 4.45781C9.1185 4.67621 8.87969 4.98542 8.74757 5.34375L7.02351 10.0237L2.34351 11.7478C1.98518 11.8799 1.67597 12.1187 1.45757 12.432C1.23916 12.7454 1.12207 13.1181 1.12207 13.5C1.12207 13.8819 1.23916 14.2546 1.45757 14.568C1.67597 14.8813 1.98518 15.1201 2.34351 15.2522L7.01976 16.9763L8.74757 21.6562C8.87969 22.0146 9.1185 22.3238 9.43181 22.5422C9.74511 22.7606 10.1178 22.8777 10.4998 22.8777C10.8817 22.8777 11.2544 22.7606 11.5677 22.5422C11.881 22.3238 12.1198 22.0146 12.2519 21.6562L13.976 16.98L18.656 15.2522C19.0143 15.1201 19.3236 14.8813 19.542 14.568C19.7604 14.2546 19.8774 13.8819 19.8774 13.5C19.8774 13.1181 19.7604 12.7454 19.542 12.432C19.3236 12.1187 19.0143 11.8799 18.656 11.7478ZM12.7141 15.0441C12.5614 15.1003 12.4228 15.1891 12.3077 15.3042C12.1926 15.4192 12.1038 15.5579 12.0476 15.7106L10.4998 19.9012L8.9557 15.7106C8.89942 15.5579 8.81068 15.4192 8.6956 15.3042C8.58052 15.1891 8.44184 15.1003 8.28913 15.0441L4.09851 13.5L8.28913 11.9559C8.44184 11.8997 8.58052 11.8109 8.6956 11.6958C8.81068 11.5808 8.89942 11.4421 8.9557 11.2894L10.4998 7.09875L12.0438 11.2894C12.1001 11.4421 12.1888 11.5808 12.3039 11.6958C12.419 11.8109 12.5577 11.8997 12.7104 11.9559L16.901 13.5L12.7141 15.0441ZM13.1248 3.75C13.1248 3.45163 13.2433 3.16548 13.4543 2.9545C13.6652 2.74353 13.9514 2.625 14.2498 2.625H15.3748V1.5C15.3748 1.20163 15.4933 0.915483 15.7043 0.704505C15.9152 0.493526 16.2014 0.375 16.4998 0.375C16.7981 0.375 17.0843 0.493526 17.2953 0.704505C17.5062 0.915483 17.6248 1.20163 17.6248 1.5V2.625H18.7498C19.0481 2.625 19.3343 2.74353 19.5453 2.9545C19.7562 3.16548 19.8748 3.45163 19.8748 3.75C19.8748 4.04837 19.7562 4.33452 19.5453 4.5455C19.3343 4.75647 19.0481 4.875 18.7498 4.875H17.6248V6C17.6248 6.29837 17.5062 6.58452 17.2953 6.7955C17.0843 7.00647 16.7981 7.125 16.4998 7.125C16.2014 7.125 15.9152 7.00647 15.7043 6.7955C15.4933 6.58452 15.3748 6.29837 15.3748 6V4.875H14.2498C13.9514 4.875 13.6652 4.75647 13.4543 4.5455C13.2433 4.33452 13.1248 4.04837 13.1248 3.75ZM23.6248 8.25C23.6248 8.54837 23.5062 8.83452 23.2953 9.0455C23.0843 9.25647 22.7981 9.375 22.4998 9.375H22.1248V9.75C22.1248 10.0484 22.0062 10.3345 21.7953 10.5455C21.5843 10.7565 21.2981 10.875 20.9998 10.875C20.7014 10.875 20.4152 10.7565 20.2043 10.5455C19.9933 10.3345 19.8748 10.0484 19.8748 9.75V9.375H19.4998C19.2014 9.375 18.9152 9.25647 18.7043 9.0455C18.4933 8.83452 18.3748 8.54837 18.3748 8.25C18.3748 7.95163 18.4933 7.66548 18.7043 7.4545C18.9152 7.24353 19.2014 7.125 19.4998 7.125H19.8748V6.75C19.8748 6.45163 19.9933 6.16548 20.2043 5.9545C20.4152 5.74353 20.7014 5.625 20.9998 5.625C21.2981 5.625 21.5843 5.74353 21.7953 5.9545C22.0062 6.16548 22.1248 6.45163 22.1248 6.75V7.125H22.4998C22.7981 7.125 23.0843 7.24353 23.2953 7.4545C23.5062 7.66548 23.6248 7.95163 23.6248 8.25Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2208_1456">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>

    <div
      class="hero-image"
      v-motion
      :initial="{ opacity: 0, x: 100 }"
      :enter="{
        opacity: 1,
        x: 0,
        transition: { duration: 800, delay: 300, ease: 'easeOut' },
      }"
    >
      <img src="@/assets/img/hero/herobanner.svg" alt="CRM Illustration" />
    </div>
  </section>
</template>

<script setup>
// Импорт данных (путь может отличаться в зависимости от структуры проекта)
import landingData from "~/assets/data/content.json";
const { hero } = landingData;
</script>

<style scoped>
/* Ваши стили остаются без изменений */
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  overflow: hidden; /* Важно, чтобы вылетающие элементы не создавали скролл */
}

.hero-content {
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-title {
  font-size: clamp(44px, 4vw, 56px);
  font-weight: 600;
  margin-bottom: 24px;
  letter-spacing: 0.03em;
  color: #000;
  max-width: 650px;
}

:deep(.hero-title span),
:deep(.highlight) {
  color: var(--primary-color, #4f46e5);
}

.hero-description {
  font-weight: 400;
  font-size: 22px;
  color: #000000;
  margin-bottom: 40px;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: var(--primary-color, #4f46e5);
  color: white;
  padding: 16px 20px;
  border-radius: 16px;
  border: none;
  font-weight: 700;
  font-size: 24px;
  cursor: pointer;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.hero-image img {
  width: 100%;
  max-width: 650px;
  height: auto;
  object-fit: contain;
}

/* Адаптив (сокращено для краткости, ваши медиа-запросы тоже будут работать) */
@media (max-width: 1024px) {
  .hero-section {
    justify-content: center;
    text-align: center;
  }
  .hero-image {
    display: none;
  }
  .hero-content {
    align-items: center;
    width: 100%;
  }
}
</style>
