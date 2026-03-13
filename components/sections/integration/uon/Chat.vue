<template>
  <div class="page-wrapper">
    <div class="container">
      <div class="content-side">
        <div
          class="feature-card"
          v-for="(item, index) in features"
          :key="index"
        >
          <div class="card-icon">
            <span class="dot"></span>
          </div>
          <div class="card-text">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>

        <NuxtLink to="/signup">
          <button class="main-button">Подключить бесплатно</button></NuxtLink
        >
      </div>

      <div class="visual-side">
        <div class="phone-mockup">
          <div class="chat-label">*чат*</div>
          <div class="input-bar">
            <div class="line"></div>
            <div class="send-btn"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    title: "Документы",
    description:
      "Подписание договоров онлайн — клиент ставит подпись прямо в мессенджере",
  },
  {
    title: "Бонусная программа",
    description: "Оповещение о создании бонусной карты и списании бонусов",
  },
  {
    title: "Заявки и оплаты",
    description: "Уведомления о создании заявки, статусе и полученной оплате",
  },
];
</script>

<style scoped>
/* Переменные для удобства */
:offset {
  --dark-text: #1a1a1a;
  --light-text: #666;
  --bg-color: #f8f9fa;
  --card-bg: #ffffff;
}

.page-wrapper {
  min-height: 100vh;
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  width: 100%;
  align-items: center;
}

/* Карточки */
.content-side {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.feature-card {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 16px;
  display: flex;
  gap: 20px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
}

.card-icon {
  min-width: 12px;
  height: 12px;
  background-color: var(--primary-color);
  border-radius: 50%;
  margin-top: 8px;
}

.card-text h3 {
  margin: 0 0 8px 0;
  font-size: 22px;
  font-weight: 700;
  color: var(--dark-text);
}

.card-text p {
  margin: 0;
  color: var(--light-text);
  line-height: 1.5;
  font-size: 16px;
}

/* Кнопка */
.main-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 18px 40px;
  border-radius: 14px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
  margin-top: 10px;
  transition:
    filter 0.2s,
    transform 0.1s;
}

.main-button:hover {
  filter: brightness(1.1);
}

.main-button:active {
  transform: scale(0.98);
}

/* Стилизация чата */
.visual-side {
  display: flex;
  justify-content: center;
}

.phone-mockup {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1 / 1;
  background-color: #e9ecef;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 8px solid white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.chat-label {
  font-size: 24px;
  font-weight: 800;
  color: #adb5bd;
  letter-spacing: 4px;
  text-transform: uppercase;
}

.input-bar {
  position: absolute;
  bottom: 30px;
  left: 30px;
  right: 30px;
  height: 50px;
  background: white;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
}

.line {
  height: 6px;
  width: 60%;
  background: #f1f3f5;
  border-radius: 3px;
}

.send-btn {
  width: 32px;
  height: 32px;
  background: var(--primary-color);
  border-radius: 50%;
}

/* Адаптивность */
@media (max-width: 850px) {
  .container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .visual-side {
    order: -1; /* Чат будет сверху на мобилках */
  }
}
</style>
