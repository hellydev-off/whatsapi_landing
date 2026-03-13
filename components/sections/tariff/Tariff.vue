<template>
  <section class="pricing-section">
    <h2 class="page-title">Тарифы <span class="green-title">WhatsApi</span></h2>
    <div class="period-switcher">
      <button
        v-for="(label, key) in periods"
        :key="key"
        :class="{ active: currentPeriod === key }"
        @click="currentPeriod = key"
      >
        {{ label }}
      </button>
    </div>
    <div class="pricing-grid">
      <!-- Карточка 1 канал -->
      <div class="card card-small">
        <div class="card-header">
          <div class="price">{{ current.oneChannelPrice }} ₽</div>
          <div class="icons">
            <img src="/messangers/tg_icon.svg" alt="" />
            <img src="/messangers/max_logo.svg" alt="" />
            <img src="/messangers/ws_icon.svg" alt="" />
          </div>
        </div>
        <p class="subtitle green">За 1 канал отправки</p>
      </div>

      <!-- Карточка 2 канала -->
      <div class="card card-small">
        <div class="card-header">
          <div class="price">{{ current.twoChannelsTotal }} ₽</div>
          <div class="icons">
            <img src="/messangers/tg_icon.svg" alt="" />
            <img src="/messangers/max_logo.svg" alt="" />
            <img src="/messangers/ws_icon.svg" alt="" />
          </div>
        </div>
        <p class="subtitle green">За 2 канала отправки</p>
        <p class="sub-text">{{ current.twoChannelsPerChannel }} ₽ за канал</p>
      </div>

      <!-- Карточка Рассылки ВатсАпи (теперь с динамической ценой) -->
      <div class="card card-tall">
        <h3>Рассылки Ватс<span>Апи</span></h3>
        <!-- 🔥 Динамическая цена из таблицы (ежемесячная ставка с учётом периода) -->
        <div class="price-main">{{ current.mailingMonthlyPrice }} ₽</div>
        <ul class="features">
          <li>Можно писать первым</li>
          <li>Для интервальной массовой рассылки по клиентской базе</li>
          <li>Неограниченное количество сообщений</li>
        </ul>
        <p class="note">*Каналы отправки оплачиваются отдельно</p>
      </div>

      <!-- Остальные карточки без изменений -->
      <div class="card card-medium light-bg">
        <h3>БЕСПЛАТНО</h3>
        <ul class="features">
          <li>Интеграции CRM</li>
          <li>Омниканальный чат</li>
          <li>Неограниченное количество сообщений</li>
        </ul>
      </div>
      <div class="card card-medium light-bg">
        <h3>Мессенджер VK</h3>
        <div class="price-main">790 ₽ <span>/В месяц</span></div>
      </div>
      <div class="card card-wide light-bg">
        <h3>Масштабируете бизнес <br />или управляете сетью?</h3>
        <ul class="features">
          <li>
            Подготовим специальные условия и персональный тариф для крупных
            проектов
          </li>
        </ul>
        <button class="cta-button">
          Связаться с нами <span class="arrow">→</span>
        </button>
      </div>
      <div class="card card-small light-bg">
        <h3>Скоро</h3>
        <ul class="features no-marker">
          <li>
            <img src="/messangers/avito_logo.svg" alt="" />
            Avito
          </li>
          <li>
            <img src="/messangers/insta_logo.svg" alt="" />
            Instagram*
          </li>
          <li>
            <img src="/messangers/tg_bot_logo.svg" alt="" />
            Telegram-Bot
          </li>
          <span class="inst"
            >"*Принадлежит компании Meta (признана экстремистской и запрещена в
            РФ)"</span
          >
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const currentPeriod = ref("1m");

const periods = {
  "1m": "1 месяц",
  "3m": "3 месяца",
  "6m": "6 месяцев",
  "12m": "12 месяцев",
};

// 🔥 Расширенная таблица цен — добавлены цены для тарифа «Рассылки ВатсАпи»
// (ежемесячная ставка точно по таблице из скриншота)
const priceTable = {
  "1m": {
    oneChannel: 1900,
    twoChannelsTotal: 3380,
    twoChannelsPerChannel: 1690,
    mailingMonthly: 2900, // ← из таблицы
  },
  "3m": {
    oneChannel: 5557,
    twoChannelsTotal: 9790,
    twoChannelsPerChannel: 4895,
    mailingMonthly: 7900, // ← из таблицы
  },
  "6m": {
    oneChannel: 10900,
    twoChannelsTotal: 18900,
    twoChannelsPerChannel: 9450,
    mailingMonthly: 14900, // ← из таблицы
  },
  "12m": {
    oneChannel: 19990,
    twoChannelsTotal: 33800,
    twoChannelsPerChannel: 16900,
    mailingMonthly: 23900,
  },
};

const current = computed(() => {
  const p = priceTable[currentPeriod.value];

  return {
    oneChannelPrice: p.oneChannel,
    twoChannelsTotal: p.twoChannelsTotal,
    twoChannelsPerChannel: p.twoChannelsPerChannel,
    // ✅ Новая динамическая цена для карточки Рассылки ВатсАпи
    mailingMonthlyPrice: p.mailingMonthly,
  };
});
</script>

<style scoped>
.pricing-section {
  color: #1d1d1f;
}

.title {
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 30px;
}

.title span {
  color: #64e35e;
}

.period-switcher {
  display: flex;
  background: #f0f2f5;
  padding: 6px;
  border-radius: 12px;
  width: fit-content;
  margin: 0 auto 40px;
  margin-top: 24px;
}

.icons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.period-switcher button {
  border: none;
  background: none;
  padding: 10px 24px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
  color: #1d1d1f;
}

.period-switcher button.active {
  background: #64e35e;
  color: white;
}

/* Сетка */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto auto;
  gap: 20px;
}

.card {
  background: var(--gray-color);
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
}

.card-small {
  grid-column: span 2;
}
.card-tall {
  grid-column: span 2;
  grid-row: span 2;
}
.card-medium {
  grid-column: span 2;
}
.card-wide {
  grid-column: span 3;
}
.card-small.light-bg {
  grid-column: span 1;
}

.inst {
  font-size: 12px;
}

.light-bg {
  background: var(--gray-color);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-weight: 700;
  font-size: 44px;
  line-height: 43%;
  color: #000;
}

.price-main {
  font-size: 32px;
  font-weight: 800;
  margin: 15px 0;
}

.price-main span {
  font-size: 14px;
  color: #888;
  font-weight: 400;
}

.subtitle.green {
  font-weight: 500;
  font-size: 16px;
  line-height: 119%;
  color: #00e13f;
}

.sub-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 119%;
  color: #8f8f8f;
}

h3 {
  margin: 0 0 15px 0;
  font-weight: 700;
  font-size: 26px;
  color: #2b2b2b;
}

h3 span {
  color: #64e35e;
}
.uppercase {
  text-transform: uppercase;
  letter-spacing: 1px;
}

.features {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}

.features li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.4;
}

.features li::before {
  content: "—";
  position: absolute;
  left: 0;
  color: #64e35e;
}

.features.no-marker li::before {
  content: none;
}
.features.no-marker li {
  padding-left: 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.note {
  font-size: 11px;
  color: #888;
  margin-top: auto;
}

/* Кнопка */
.cta-button {
  background: #64e35e;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 14px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Заглушки иконок */
.icon-placeholder {
  display: inline-flex;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-left: 4px;
}

.icon-placeholder.s {
  width: 20px;
  height: 20px;
  margin: 0;
}

@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }
  .card-small,
  .card-tall,
  .card-medium,
  .card-wide,
  .card-small.light-bg {
    grid-column: span 1;
  }
}
</style>
