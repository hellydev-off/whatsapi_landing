<template>
  <div class="integration-page">
    <header class="hero">
      <div class="container">
        <h1
          class="page-title flex"
          v-motion
          :initial="{ opacity: 0, y: -30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          Интеграция с
          <img
            class="crm-icon"
            src="/integrationsSection/uon_icon.svg"
            alt=""
          />
        </h1>
        <p
          class="subtitle"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { duration: 800, delay: 300 } }"
        >
          Подключайте мессенджеры за 5 минут и общайтесь с клиентами прямо из
          CRM. Вся переписка в одном окне — никаких лишних вкладок.
        </p>
        <button
          class="btn-primary"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: { duration: 500, delay: 500 },
          }"
          :hovered="{ scale: 1.05 }"
          :tapped="{ scale: 0.95 }"
        >
          Подключить интеграцию
        </button>
      </div>
    </header>

    <section class="grid-section">
      <div class="container">
        <div class="integrations-grid">
          <div
            class="card"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 100 },
            }"
          >
            <img
              class="messenger-icon"
              src="/integrationsSection/whatsapp_icon.svg"
              alt=""
            />
            <h3>WhatsApp</h3>
            <p>
              Клиент пишет в WhatsApp → сообщение появляется в U-ON.Travel. Вы
              отвечаете из CRM → ответ улетает в мессенджер.
            </p>
            <a href="#" class="card-link">Как подключить WhatsApp →</a>
          </div>

          <div
            class="card"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 200 },
            }"
          >
            <img
              class="messenger-icon"
              src="/integrationsSection/telegram_icon.svg"
              alt=""
            />
            <h3>Telegram</h3>
            <p>
              Полная поддержка как личных номеров, так и Telegram-ботов для
              вашего бизнеса.
            </p>
            <a href="#" class="card-link">Как подключить Telegram →</a>
          </div>

          <div
            class="card highlight"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 300 },
            }"
          >
            <div
              class="status-badge"
              v-motion
              :initial="{ scale: 0 }"
              :visibleOnce="{
                scale: 1,
                transition: { delay: 800, type: 'spring' },
              }"
            >
              Новинка!
            </div>
            <img
              class="messenger-icon"
              src="/integrationsSection/vk_icon.svg"
              alt=""
            />
            <h3>ВКонтакте</h3>
            <p>
              Подключайте сообщества ВКонтакте. Все сообщения от подписчиков
              мгновенно попадают в CRM.
            </p>
            <div class="price-tag">Специальный тариф: <b>990 ₽/мес</b></div>
            <a href="#" class="card-link">Как подключить ВКонтакте →</a>
          </div>

          <div
            class="card"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 400 },
            }"
          >
            <img
              class="messenger-icon"
              src="/integrationsSection/max_icon.svg"
              alt=""
            />
            <h3>Max</h3>
            <p>
              Подключайте Max и не теряйте ни одного клиента из этого канала
              коммуникации.
            </p>
            <a href="#" class="card-link">Как подключить Max →</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.integration-page {
  color: #2d3436;
  line-height: 1.6;
}

.container {
  width: 100%;
  margin: 0 auto;
}

/* Hero Section */
.hero {
  padding: 80px 0 60px;
  text-align: center;
}

.crm-icon {
  width: 180px;
}

.messenger-icon {
  width: 40px;
  margin-bottom: 10px;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
}

.subtitle {
  font-size: 18px;
  color: #636e72;
  max-width: 600px;
  margin: 0 auto 30px;
  margin-top: 20px;
}

/* Grid & Cards */
.grid-section {
  padding: 40px 0 80px;
}

.integrations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

.card {
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  border: 1px solid #edf2f7;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}

.card.highlight {
  border: 2px solid var(--primary-color);
}

.status-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #00b894;
  color: #fff;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: bold;
}

h3 {
  font-size: 20px;
  margin-bottom: 12px;
}

.card p {
  font-size: 15px;
  color: #636e72;
  flex-grow: 1;
  margin-bottom: 20px;
}

.price-tag {
  background: #f1f2f6;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 15px;
}

.card-link {
  color: #007aff;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
}

.card-link:hover {
  text-decoration: underline;
}

.btn-primary {
  background: var(--primary-color);
  color: #fff;
  border: none;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

@media (max-width: 600px) {
  .flex {
    flex-direction: column;
  }
  .subtitle {
    margin-top: 40px;
  }
}

@media (max-width: 450px) {
  .flex {
    flex-direction: column;
    gap: 6px;
  }
  .subtitle {
    margin-top: 40px;
    font-size: 14px;
  }
}
</style>
