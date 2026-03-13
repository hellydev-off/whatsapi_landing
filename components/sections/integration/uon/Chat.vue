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

        <NuxtLink to="/signup" class="link-wrapper">
          <button class="main-button">Подключить бесплатно</button>
        </NuxtLink>
      </div>

      <div class="visual-side">
        <div class="phone-mockup">
          <div class="chat-header">
            <div class="window-controls">
              <span class="dot-red"></span>
              <span class="dot-yellow"></span>
              <span class="dot-green"></span>
            </div>
            <div class="messenger-icons">
              <img src="/messangers/max_logo.svg" alt="" />
              <img src="/messangers/tg_icon.svg" alt="" />
              <img src="/messangers/ws_icon.svg" alt="" />
            </div>
          </div>

          <div class="chat-body">
            <div class="message-bubble">
              <p>Ссылка для подписи документа:</p>
              <a href="#" class="chat-link"
                >https://integrilla.u-on.ru/doc_sign.php</a
              >
              <span class="message-time">18:20</span>
            </div>

            <div class="message-bubble">
              <p>Код для подписания документа: <strong>1234</strong></p>
              <span class="message-time">18:21</span>
            </div>
          </div>

          <div class="chat-input-area">
            <div class="emoji-icon">☺</div>
            <div class="input-fake-text"></div>
            <div class="input-tools">
              <div class="tool-icon clip"></div>
              <div class="tool-icon camera"></div>
            </div>
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
/* Основные цвета */
:root {
  --dark-text: #1a1a1a;
  --light-text: #666;
  --bg-color: #f8f9fa;
  --card-bg: #ffffff;
}

.page-wrapper {
  min-height: 100vh;
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

/* --- СТИЛИ ЛЕВОЙ ЧАСТИ --- */
.content-side {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feature-card {
  background: #ffffff;
  padding: 24px;
  border-radius: 20px;
  display: flex;
  gap: 20px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
}

.card-icon {
  margin-top: 8px;
}

.dot {
  display: block;
  width: 12px;
  height: 12px;
  background-color: var(--primary-color); /* Можно заменить на переменную */
  border-radius: 50%;
}

.card-text h3 {
  margin: 0 0 6px 0;
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
}

.card-text p {
  margin: 0;
  color: #666;
  line-height: 1.5;
  font-size: 15px;
}

.link-wrapper {
  text-decoration: none;
  width: fit-content;
}

.main-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 16px 36px;
  border-radius: 14px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.2s;
}

.main-button:hover {
  filter: brightness(1.1);
  box-shadow: 0 4px 15px rgba(0, 136, 204, 0.3);
}

/* --- СТИЛИ ПРАВОЙ ЧАСТИ (ЧАТ) --- */
.visual-side {
  display: flex;
  justify-content: center;
}

.phone-mockup {
  width: 100%;
  max-width: 400px;
  height: 500px;
  background-color: #f0f2f5; /* Цвет фона мессенджера */
  border-radius: 30px;
  border: 8px solid white;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

/* Шапка */
.chat-header {
  background: #ffffff;
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.window-controls {
  display: flex;
  gap: 6px;
}

.window-controls span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.dot-red {
  background: #ff5f56;
}
.dot-yellow {
  background: #ffbd2e;
}
.dot-green {
  background: #27c93f;
}

.messenger-icons {
  display: flex;
  gap: 10px;
}

.m-icon {
  width: 22px;
  height: 22px;
  border-radius: 50%;
}
.tg {
  background: #24a1de;
  position: relative;
} /* Имитация Telegram */
.tg::after {
  content: "✈";
  color: white;
  font-size: 10px;
  position: absolute;
  left: 5px;
  top: 2px;
}
.wa {
  background: #25d366;
  position: relative;
} /* Имитация WhatsApp */
.wa::after {
  content: "📞";
  color: white;
  font-size: 10px;
  position: absolute;
  left: 5px;
  top: 2px;
}

/* Тело чата */
.chat-body {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message-bubble {
  background: #ffffff;
  padding: 12px 16px;
  border-radius: 4px 18px 18px 18px; /* Стиль хвоста сообщения */
  max-width: 85%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.04);
  position: relative;
}

.message-bubble p {
  margin: 0;
  font-size: 14px;
  color: #333;
}

.chat-link {
  color: #0088cc;
  text-decoration: none;
  font-size: 13px;
  word-break: break-all;
  display: block;
  margin-top: 4px;
}

.message-time {
  display: block;
  text-align: right;
  font-size: 10px;
  color: #999;
  margin-top: 5px;
}

/* Инпут */
.chat-input-area {
  background: white;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.emoji-icon {
  font-size: 20px;
  color: #a0a0a0;
  cursor: pointer;
}

.input-fake-text {
  flex: 1;
  height: 8px;
  background: #f1f3f5;
  border-radius: 4px;
}

.input-tools {
  display: flex;
  gap: 12px;
}

.tool-icon {
  width: 18px;
  height: 18px;
  border: 2px solid #ddd;
  border-radius: 4px;
}

/* --- АДАПТИВНОСТЬ --- */
@media (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 20px;
  }

  .visual-side {
    order: -1; /* Чат теперь сверху на мобильных */
  }

  .phone-mockup {
    max-width: 100%;
    height: 450px;
  }
}
</style>
