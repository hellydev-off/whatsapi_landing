<template>
  <div class="integration-page">
    <div class="container">
      <transition name="fade-slide" mode="out-in">
        <section v-if="!selectedCrm" key="selector" class="selection-screen">
          <header class="selection-header">
            <h1 class="page-title">Выберите вашу CRM систему</h1>
            <p class="subtitle">
              Мы интегрируемся с самыми популярными платформами для
              автоматизации вашего бизнеса
            </p>
          </header>

          <div class="crm-large-grid">
            <div
              v-for="crm in crms"
              :key="crm.id"
              class="crm-main-card"
              @click="selectedCrm = crm"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0 }"
              :hovered="{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }"
            >
              <div class="crm-logo-wrapper">
                <img :src="crm.logo" :alt="crm.name" class="crm-main-logo" />
              </div>
              <h3>{{ crm.name }}</h3>
              <p>Настройте уведомления и чаты за 5 минут</p>
              <span class="btn-outline">Выбрать →</span>
            </div>
          </div>
        </section>

        <section v-else key="details" class="details-screen">
          <button class="btn-back" @click="selectedCrm = null">
            ← Вернуться к выбору
          </button>

          <header class="hero">
            <h1 class="page-title flex">
              Интеграция с
              <img
                class="crm-icon-large"
                :src="selectedCrm.logo"
                :alt="selectedCrm.name"
              />
            </h1>
            <p class="subtitle">{{ selectedCrm.description }}</p>
            <button class="btn-primary">
              Подключить {{ selectedCrm.name }}
            </button>
          </header>

          <div class="integrations-grid">
            <div
              v-for="(messenger, index) in selectedCrm.messengers"
              :key="messenger.name"
              class="card"
              :class="{ highlight: messenger.isNew }"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            >
              <div v-if="messenger.isNew" class="status-badge">Новинка!</div>
              <img
                class="messenger-icon"
                :src="messenger.icon"
                :alt="messenger.name"
              />
              <h3>{{ messenger.name }}</h3>
              <p>{{ messenger.text }}</p>
              <div v-if="messenger.price" class="price-tag">
                Тариф: <b>{{ messenger.price }}</b>
              </div>
              <a :href="messenger.link" class="card-link"
                >Инструкция подключения →</a
              >
            </div>
          </div>
        </section>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const crms = [
  {
    id: "uon",
    name: "U-ON.Travel",
    logo: "/integrationsSection/uon_icon.svg",
    description:
      "Лучшее решение для туристических агентств. Полная синхронизация переписки с карточкой туриста.",
    messengers: [
      {
        name: "WhatsApp",
        icon: "/integrationsSection/whatsapp_icon.svg",
        text: "Клиент пишет в WhatsApp → сообщение появляется в CRM.",
        link: "#",
      },
      {
        name: "Telegram",
        icon: "/integrationsSection/telegram_icon.svg",
        text: "Поддержка личных номеров и ботов.",
        link: "#",
      },
      {
        name: "ВКонтакте",
        icon: "/integrationsSection/vk_icon.svg",
        text: "Сообщения сообществ попадают в CRM.",
        price: "990 ₽/мес",
        isNew: true,
        link: "#",
      },
    ],
  },
  {
    id: "bitrix",
    name: "Bitrix24",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968843.png",
    description:
      "Мощная интеграция для крупных отделов продаж. Автоматические роботы и бизнес-процессы.",
    messengers: [
      {
        name: "WhatsApp",
        icon: "/integrationsSection/whatsapp_icon.svg",
        text: "Интеграция через официальный API.",
        link: "#",
      },
      {
        name: "Telegram",
        icon: "/integrationsSection/telegram_icon.svg",
        text: "Создание лидов из диалогов.",
        link: "#",
      },
    ],
  },
  {
    id: "amocrm",
    name: "amoCRM",
    logo: "https://static.tildacdn.com/tild3235-3031-4131-b337-333034633731/amo_logo_black.png",
    description:
      "Фокус на продажах. Мессенджеры становятся частью воронки продаж без лишних кликов.",
    messengers: [
      {
        name: "WhatsApp",
        icon: "/integrationsSection/whatsapp_icon.svg",
        text: "Пишите первым из карточки сделки.",
        link: "#",
      },
      {
        name: "Telegram",
        icon: "/integrationsSection/telegram_icon.svg",
        text: "Мгновенные уведомления о новых чатах.",
        link: "#",
      },
    ],
  },
];

// По умолчанию ничего не выбрано
const selectedCrm = ref(null);
</script>

<style scoped>
.integration-page {
  min-height: 100vh;
  color: #2d3436;
  background: #f8fafc;
  padding: 60px 0;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ЭКРАН ВЫБОРА */
.selection-header {
  text-align: center;
  margin-bottom: 50px;
}

.page-title {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 16px;
}

.crm-large-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.crm-main-card {
  background: #fff;
  border-radius: 24px;
  padding: 40px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #e2e8f0;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.crm-logo-wrapper {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.crm-main-logo {
  max-height: 100%;
  max-width: 200px;
  object-fit: contain;
}

.crm-main-card h3 {
  font-size: 24px;
  margin-bottom: 12px;
}

.crm-main-card p {
  color: #64748b;
  font-size: 15px;
  margin-bottom: 24px;
}

.btn-outline {
  display: inline-block;
  padding: 10px 24px;
  border: 2px solid #007aff;
  color: #007aff;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s;
}

.crm-main-card:hover .btn-outline {
  background: #007aff;
  color: #fff;
}

/* ЭКРАН ДЕТАЛЕЙ */
.btn-back {
  background: none;
  border: none;
  color: #64748b;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 30px;
  transition: color 0.2s;
}

.btn-back:hover {
  color: #007aff;
}

.hero {
  text-align: center;
  margin-bottom: 60px;
}

.crm-icon-large {
  height: 40px;
  margin-left: 15px;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.integrations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.card {
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  border: 1px solid #e2e8f0;
  position: relative;
}

.status-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #10b981;
  color: #fff;
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 20px;
}

.messenger-icon {
  width: 40px;
  margin-bottom: 15px;
}

.price-tag {
  background: #f1f5f9;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 13px;
  margin-bottom: 15px;
}

.card-link {
  color: #007aff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
}

.btn-primary {
  background: #007aff;
  color: #fff;
  border: none;
  padding: 16px 36px;
  border-radius: 14px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}

/* АНИМАЦИИ ПЕРЕХОДА */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@media (max-width: 600px) {
  .flex {
    flex-direction: column;
    gap: 10px;
  }
  .crm-icon-large {
    margin-left: 0;
  }
  .page-title {
    font-size: 28px;
  }
}
</style>
