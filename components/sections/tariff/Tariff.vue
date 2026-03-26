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
      <div class="card card-small">
        <div class="card-header">
          <div class="price-wrap">
            <div v-if="current.saveOne > 0" class="old-price">
              {{ current.baseOne }} ₽
            </div>
            <div class="price">{{ current.oneChannelPrice }} ₽</div>
          </div>
          <div class="icons">
            <img src="/messangers/tg_icon.svg" alt="" />
            <img src="/messangers/max_logo.svg" alt="" />
            <img src="/messangers/ws_icon.svg" alt="" />
          </div>
        </div>
        <p class="subtitle green">
          За 1 канал отправки
          <span class="info-tooltip">
            <svg
              width="18"
              height="18"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 6C8.25 5.70333 8.33798 5.41332 8.5028 5.16664C8.66762 4.91997 8.90189 4.72771 9.17598 4.61418C9.45007 4.50065 9.75167 4.47094 10.0426 4.52882C10.3336 4.5867 10.6009 4.72956 10.8107 4.93934C11.0204 5.14912 11.1633 5.41639 11.2212 5.70736C11.2791 5.99834 11.2494 6.29994 11.1358 6.57402C11.0223 6.84811 10.83 7.08238 10.5834 7.2472C10.3367 7.41203 10.0467 7.5 9.75 7.5C9.35218 7.5 8.97065 7.34196 8.68934 7.06066C8.40804 6.77936 8.25 6.39782 8.25 6ZM20.25 10.125C20.25 12.1275 19.6562 14.0851 18.5436 15.7501C17.4311 17.4152 15.8498 18.7129 13.9997 19.4793C12.1496 20.2456 10.1138 20.4461 8.14971 20.0555C6.18566 19.6648 4.38156 18.7005 2.96555 17.2845C1.54954 15.8685 0.585229 14.0643 0.194554 12.1003C-0.196122 10.1362 0.00438702 8.10043 0.770724 6.25033C1.53706 4.40023 2.83481 2.81892 4.49986 1.70637C6.1649 0.593821 8.12247 0 10.125 0C12.8094 0.00297771 15.383 1.07067 17.2812 2.96883C19.1793 4.86699 20.247 7.4406 20.25 10.125ZM18 10.125C18 8.56747 17.5381 7.04492 16.6728 5.74988C15.8075 4.45485 14.5776 3.44549 13.1386 2.84945C11.6997 2.25341 10.1163 2.09746 8.58867 2.40132C7.06107 2.70517 5.65788 3.4552 4.55654 4.55653C3.4552 5.65787 2.70518 7.06106 2.40132 8.58866C2.09746 10.1163 2.25341 11.6997 2.84945 13.1386C3.44549 14.5776 4.45485 15.8075 5.74989 16.6728C7.04493 17.5381 8.56748 18 10.125 18C12.2129 17.9978 14.2146 17.1674 15.691 15.691C17.1674 14.2146 17.9978 12.2129 18 10.125ZM11.25 13.5637V10.5C11.25 10.0027 11.0525 9.52581 10.7008 9.17417C10.3492 8.82254 9.87229 8.625 9.375 8.625C9.10933 8.6246 8.85208 8.71825 8.64883 8.88935C8.44558 9.06044 8.30944 9.29795 8.26452 9.55981C8.21961 9.82166 8.26881 10.091 8.40343 10.32C8.53804 10.5491 8.74938 10.7231 9 10.8113V13.875C9 14.3723 9.19755 14.8492 9.54918 15.2008C9.90081 15.5525 10.3777 15.75 10.875 15.75C11.1407 15.7504 11.3979 15.6568 11.6012 15.4857C11.8044 15.3146 11.9406 15.077 11.9855 14.8152C12.0304 14.5533 11.9812 14.284 11.8466 14.055C11.712 13.8259 11.5006 13.6519 11.25 13.5637Z"
                fill="#c4c4c4"
              />
            </svg>
            <span class="tooltip-text">
              <strong>Канал</strong> = один подключённый аккаунт мессенджера или
              соцсети.<br /><br />
              <strong>Номерной канал</strong> – канал коммуникации, в котором
              доступна отправка сообщений по номеру телефона. Могут быть
              подключены для: отправки автоматических уведомлений, массовых
              рассылок, переписок в омниканальном чате. Можно писать первым,
              безграничное количество диалогов.<br /><br />
              <strong>Неномерной канал</strong> – канал без привязки к номеру
              телефона (например, ВКонтакте, Telegram-бот). Обычно клиент должен
              написать первым.
            </span>
          </span>
        </p>
        <div v-if="current.saveOne > 0" class="save-badge">
          Выгода {{ current.saveOne }} ₽
        </div>
      </div>

      <div class="card card-small">
        <div class="card-header">
          <div class="price-wrap">
            <div v-if="current.saveTwo > 0" class="old-price">
              {{ current.baseTwo }} ₽
            </div>
            <div class="price">{{ current.twoChannelsTotal }} ₽</div>
          </div>
          <div class="icons">
            <img src="/messangers/tg_icon.svg" alt="" />
            <img src="/messangers/max_logo.svg" alt="" />
            <img src="/messangers/ws_icon.svg" alt="" />
          </div>
        </div>
        <p class="subtitle green">
          За 2 канала отправки
          <span class="info-tooltip">
            <svg
              width="18"
              height="18"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 6C8.25 5.70333 8.33798 5.41332 8.5028 5.16664C8.66762 4.91997 8.90189 4.72771 9.17598 4.61418C9.45007 4.50065 9.75167 4.47094 10.0426 4.52882C10.3336 4.5867 10.6009 4.72956 10.8107 4.93934C11.0204 5.14912 11.1633 5.41639 11.2212 5.70736C11.2791 5.99834 11.2494 6.29994 11.1358 6.57402C11.0223 6.84811 10.83 7.08238 10.5834 7.2472C10.3367 7.41203 10.0467 7.5 9.75 7.5C9.35218 7.5 8.97065 7.34196 8.68934 7.06066C8.40804 6.77936 8.25 6.39782 8.25 6ZM20.25 10.125C20.25 12.1275 19.6562 14.0851 18.5436 15.7501C17.4311 17.4152 15.8498 18.7129 13.9997 19.4793C12.1496 20.2456 10.1138 20.4461 8.14971 20.0555C6.18566 19.6648 4.38156 18.7005 2.96555 17.2845C1.54954 15.8685 0.585229 14.0643 0.194554 12.1003C-0.196122 10.1362 0.00438702 8.10043 0.770724 6.25033C1.53706 4.40023 2.83481 2.81892 4.49986 1.70637C6.1649 0.593821 8.12247 0 10.125 0C12.8094 0.00297771 15.383 1.07067 17.2812 2.96883C19.1793 4.86699 20.247 7.4406 20.25 10.125ZM18 10.125C18 8.56747 17.5381 7.04492 16.6728 5.74988C15.8075 4.45485 14.5776 3.44549 13.1386 2.84945C11.6997 2.25341 10.1163 2.09746 8.58867 2.40132C7.06107 2.70517 5.65788 3.4552 4.55654 4.55653C3.4552 5.65787 2.70518 7.06106 2.40132 8.58866C2.09746 10.1163 2.25341 11.6997 2.84945 13.1386C3.44549 14.5776 4.45485 15.8075 5.74989 16.6728C7.04493 17.5381 8.56748 18 10.125 18C12.2129 17.9978 14.2146 17.1674 15.691 15.691C17.1674 14.2146 17.9978 12.2129 18 10.125ZM11.25 13.5637V10.5C11.25 10.0027 11.0525 9.52581 10.7008 9.17417C10.3492 8.82254 9.87229 8.625 9.375 8.625C9.10933 8.6246 8.85208 8.71825 8.64883 8.88935C8.44558 9.06044 8.30944 9.29795 8.26452 9.55981C8.21961 9.82166 8.26881 10.091 8.40343 10.32C8.53804 10.5491 8.74938 10.7231 9 10.8113V13.875C9 14.3723 9.19755 14.8492 9.54918 15.2008C9.90081 15.5525 10.3777 15.75 10.875 15.75C11.1407 15.7504 11.3979 15.6568 11.6012 15.4857C11.8044 15.3146 11.9406 15.077 11.9855 14.8152C12.0304 14.5533 11.9812 14.284 11.8466 14.055C11.712 13.8259 11.5006 13.6519 11.25 13.5637Z"
                fill="#c4c4c4"
              />
            </svg>
            <span class="tooltip-text">
              <strong>Канал</strong> = один подключённый аккаунт мессенджера или
              соцсети.<br /><br />
              <strong>Номерной канал</strong> – канал коммуникации, в котором
              доступна отправка сообщений по номеру телефона. Могут быть
              подключены для: отправки автоматических уведомлений, массовых
              рассылок, переписок в омниканальном чате. Можно писать первым,
              безграничное количество диалогов.<br /><br />
              <strong>Неномерной канал</strong> – канал без привязки к номеру
              телефона (например, ВКонтакте, Telegram-бот). Обычно клиент должен
              написать первым.
            </span>
          </span>
        </p>

        <p class="sub-text">{{ current.twoChannelsPerChannel }} ₽ за канал</p>
        <div v-if="current.saveTwo > 0" class="save-badge">
          Выгода {{ current.saveTwo }} ₽
        </div>
      </div>

      <div class="card card-small">
        <div class="card-header">
          <div class="price-wrap">
            <div v-if="current.saveThree > 0" class="old-price">
              {{ current.baseThree }} ₽
            </div>
            <div class="price">{{ current.threeChannelsTotal }} ₽</div>
          </div>
          <div class="icons">
            <img src="/messangers/tg_icon.svg" alt="" />
            <img src="/messangers/max_logo.svg" alt="" />
            <img src="/messangers/ws_icon.svg" alt="" />
          </div>
        </div>
        <p class="subtitle green">
          За 3 канала отправки
          <span class="info-tooltip">
            <svg
              width="18"
              height="18"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 6C8.25 5.70333 8.33798 5.41332 8.5028 5.16664C8.66762 4.91997 8.90189 4.72771 9.17598 4.61418C9.45007 4.50065 9.75167 4.47094 10.0426 4.52882C10.3336 4.5867 10.6009 4.72956 10.8107 4.93934C11.0204 5.14912 11.1633 5.41639 11.2212 5.70736C11.2791 5.99834 11.2494 6.29994 11.1358 6.57402C11.0223 6.84811 10.83 7.08238 10.5834 7.2472C10.3367 7.41203 10.0467 7.5 9.75 7.5C9.35218 7.5 8.97065 7.34196 8.68934 7.06066C8.40804 6.77936 8.25 6.39782 8.25 6ZM20.25 10.125C20.25 12.1275 19.6562 14.0851 18.5436 15.7501C17.4311 17.4152 15.8498 18.7129 13.9997 19.4793C12.1496 20.2456 10.1138 20.4461 8.14971 20.0555C6.18566 19.6648 4.38156 18.7005 2.96555 17.2845C1.54954 15.8685 0.585229 14.0643 0.194554 12.1003C-0.196122 10.1362 0.00438702 8.10043 0.770724 6.25033C1.53706 4.40023 2.83481 2.81892 4.49986 1.70637C6.1649 0.593821 8.12247 0 10.125 0C12.8094 0.00297771 15.383 1.07067 17.2812 2.96883C19.1793 4.86699 20.247 7.4406 20.25 10.125ZM18 10.125C18 8.56747 17.5381 7.04492 16.6728 5.74988C15.8075 4.45485 14.5776 3.44549 13.1386 2.84945C11.6997 2.25341 10.1163 2.09746 8.58867 2.40132C7.06107 2.70517 5.65788 3.4552 4.55654 4.55653C3.4552 5.65787 2.70518 7.06106 2.40132 8.58866C2.09746 10.1163 2.25341 11.6997 2.84945 13.1386C3.44549 14.5776 4.45485 15.8075 5.74989 16.6728C7.04493 17.5381 8.56748 18 10.125 18C12.2129 17.9978 14.2146 17.1674 15.691 15.691C17.1674 14.2146 17.9978 12.2129 18 10.125ZM11.25 13.5637V10.5C11.25 10.0027 11.0525 9.52581 10.7008 9.17417C10.3492 8.82254 9.87229 8.625 9.375 8.625C9.10933 8.6246 8.85208 8.71825 8.64883 8.88935C8.44558 9.06044 8.30944 9.29795 8.26452 9.55981C8.21961 9.82166 8.26881 10.091 8.40343 10.32C8.53804 10.5491 8.74938 10.7231 9 10.8113V13.875C9 14.3723 9.19755 14.8492 9.54918 15.2008C9.90081 15.5525 10.3777 15.75 10.875 15.75C11.1407 15.7504 11.3979 15.6568 11.6012 15.4857C11.8044 15.3146 11.9406 15.077 11.9855 14.8152C12.0304 14.5533 11.9812 14.284 11.8466 14.055C11.712 13.8259 11.5006 13.6519 11.25 13.5637Z"
                fill="#c4c4c4"
              />
            </svg>
            <span class="tooltip-text">
              <strong>Канал</strong> = один подключённый аккаунт мессенджера или
              соцсети.<br /><br />
              <strong>Номерной канал</strong> – канал коммуникации, в котором
              доступна отправка сообщений по номеру телефона. Могут быть
              подключены для: отправки автоматических уведомлений, массовых
              рассылок, переписок в омниканальном чате. Можно писать первым,
              безграничное количество диалогов.<br /><br />
              <strong>Неномерной канал</strong> – канал без привязки к номеру
              телефона (например, ВКонтакте, Telegram-бот). Обычно клиент должен
              написать первым.
            </span>
          </span>
        </p>

        <p class="sub-text">
          {{ current.threeChannelsSubNumber }} ₽
          {{ current.threeChannelsSubLabel }}
        </p>
        <div v-if="current.saveThree > 0" class="save-badge">
          Выгода {{ current.saveThree }} ₽
        </div>
      </div>

      <div class="card card-tall">
        <h3>Рассылки Ватс<span>Апи</span></h3>
        <div class="price-main">{{ current.mailingMonthlyPrice }} ₽</div>
        <ul class="features">
          <li>Для интервальной массовой рассылки по клиентской базе</li>
          <li>Неограниченное количество сообщений</li>
        </ul>
        <p class="note">*Каналы отправки оплачиваются отдельно</p>
      </div>

      <div class="card card-medium light-bg">
        <h3>БЕСПЛАТНО</h3>
        <ul class="features">
          <li>Интеграции CRM</li>
          <li>Омниканальный чат</li>
          <li>Неограниченное количество сообщений</li>
        </ul>
      </div>
      <div class="card card-medium light-bg promo-card">
        <div class="promo-header">
          <div class="promo-title-group">
            <h3>Система промокодов</h3>
            <p class="sub-text">Введите код для пересчета стоимости</p>
          </div>
        </div>

        <div class="promo-container">
          <div class="input-group">
            <input
              type="text"
              v-model="promoCode"
              placeholder="Ваш промокод..."
              class="promo-input"
              :class="{ 'active-border': isPromoApplied, 'error-border': promoError }"
            />
          </div>

          <transition name="slide-fade">
            <div v-if="promoError" class="save-badge promo-error">
              {{ promoError }}
            </div>
            <div v-else-if="isPromoApplied" class="save-badge promo-badge">
              Скидка применена
            </div>
          </transition>
        </div>
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
        <button @click="openMail" class="cta-button">
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
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const currentPeriod = ref("1m");
const promoCode = ref("");

const periods = {
  "1m": "1 месяц",
  "3m": "3 месяца",
  "6m": "6 месяцев",
  "12m": "12 месяцев",
};

const priceTable = {
  "1m": {
    oneChannel: 1900,
    twoChannelsTotal: 3380,
    twoChannelsPerChannel: 1690,
    threeChannelsTotal: 4170,
    threeChannelsSubNumber: 1390,
    threeChannelsSubLabel: "за канал",
    mailingMonthly: 2900,
  },
  "3m": {
    oneChannel: 5557,
    twoChannelsTotal: 9790,
    twoChannelsPerChannel: 4895,
    threeChannelsTotal: 12190,
    threeChannelsSubNumber: 4062,
    threeChannelsSubLabel: "за месяц",
    mailingMonthly: 7900,
  },
  "6m": {
    oneChannel: 10900,
    twoChannelsTotal: 18900,
    twoChannelsPerChannel: 9450,
    threeChannelsTotal: 23900,
    threeChannelsSubNumber: 3983,
    threeChannelsSubLabel: "за месяц",
    mailingMonthly: 14900,
  },
  "12m": {
    oneChannel: 19990,
    twoChannelsTotal: 33800,
    twoChannelsPerChannel: 16900,
    threeChannelsTotal: 41700,
    threeChannelsSubNumber: 3475,
    threeChannelsSubLabel: "за месяц",
    mailingMonthly: 23900,
  },
};

const openMail = () => {
  navigateTo("/#feedback");
};

// Промокоды:
// EXTRA50 — для сетей (от 3 номеров): скидка 50% на каждый доп. номер (4+) — в тарифах не применяется
// UON26W — скидка 25%, только от 6 месяцев
// SOLO26WA — скидка 50%, только для 1 номера (одиночные пользователи)
const promoError = computed(() => {
  const code = promoCode.value.trim().toUpperCase();
  if (!code) return "";
  const months = parseInt(currentPeriod.value);
  if (code === "UON26W" && months < 6) return "Промокод UON26W действует от 6 месяцев";
  if (code === "SOLO26WA") return ""; // применяется только к 1 каналу
  if (code === "EXTRA50") return "Промокод EXTRA50 применяется в калькуляторе (от 3 номеров)";
  if (code !== "UON26W" && code !== "SOLO26WA" && code !== "EXTRA50") return "Промокод не найден";
  return "";
});

const isPromoApplied = computed(() => {
  const code = promoCode.value.trim().toUpperCase();
  if (!code || promoError.value) return false;
  const months = parseInt(currentPeriod.value);
  if (code === "UON26W" && months >= 6) return true;
  if (code === "SOLO26WA") return true;
  return false;
});

const getMultiplier = (code, months, channels) => {
  if (code === "UON26W" && months >= 6) return 0.75;
  if (code === "SOLO26WA" && channels === 1) return 0.5;
  return 1;
};

const current = computed(() => {
  const p = priceTable[currentPeriod.value];
  const months = parseInt(currentPeriod.value);
  const code = promoCode.value.trim().toUpperCase();

  const basePricePerMonth = 1900;

  const baseOne = basePricePerMonth * 1 * months;
  const baseTwo = basePricePerMonth * 2 * months;
  const baseThree = basePricePerMonth * 3 * months;

  const m1 = getMultiplier(code, months, 1);
  const m2 = getMultiplier(code, months, 2);
  const m3 = getMultiplier(code, months, 3);

  const oneChannel = Math.round(p.oneChannel * m1);
  const twoChannelsTotal = Math.round(p.twoChannelsTotal * m2);
  const twoChannelsPerChannel = Math.round(p.twoChannelsPerChannel * m2);
  const threeChannelsTotal = Math.round(p.threeChannelsTotal * m3);
  const threeChannelsSubNumber = Math.round(p.threeChannelsSubNumber * m3);
  const mailingMonthly = Math.round(p.mailingMonthly * m1);

  const saveOne = baseOne - oneChannel;
  const saveTwo = baseTwo - twoChannelsTotal;
  const saveThree = baseThree - threeChannelsTotal;

  return {
    oneChannelPrice: oneChannel,
    twoChannelsTotal,
    twoChannelsPerChannel,
    threeChannelsTotal,
    threeChannelsSubNumber,
    threeChannelsSubLabel: p.threeChannelsSubLabel,
    mailingMonthlyPrice: mailingMonthly,
    baseOne,
    saveOne,
    baseTwo,
    saveTwo,
    baseThree,
    saveThree,
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
/* Контейнер промокода в стиле карточек */
.promo-card {
  justify-content: flex-start;
}

.promo-title-group {
  margin-bottom: 20px;
}

.promo-title-group h3 {
  margin-bottom: 4px;
}

.promo-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.input-group {
  position: relative;
  max-width: 320px; /* Оптимально для карточки */
}

.promo-input {
  width: 100%;
  padding: 14px 16px;
  /* Используем цвета из вашего проекта */
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 14px; /* В стиле кнопок cta */
  font-size: 16px;
  color: #1d1d1f;
  outline: none;
  transition: all 0.3s ease;
}

.promo-input:focus {
  border-color: #64e35e;
}

.promo-input.active-border {
  border-color: #64e35e;
  background: rgba(100, 227, 94, 0.05);
}

/* Маленькая галочка внутри инпута */
.status-badge {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: #64e35e;
  width: 22px;
  height: 22px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Бейдж под инпутом в вашем стиле .save-badge */
.promo-badge {
  margin-top: 0;
  animation: fadeIn 0.4s ease-out;
}

.promo-error {
  margin-top: 0;
  background: #fee2e2;
  color: #dc2626;
  animation: fadeIn 0.4s ease-out;
}

.promo-input.error-border {
  border-color: #dc2626;
  background: rgba(220, 38, 38, 0.05);
}

/* Анимация появления */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

@media (max-width: 768px) {
  .input-group {
    max-width: 100%;
  }
}

.period-switcher {
  display: flex;
  background: #f0f2f5;
  padding: 6px;
  border-radius: 12px;
  width: fit-content;
  margin: 0 auto 20px;
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

/* Стили для экономии и цен */
.price-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.old-price {
  font-size: 16px;
  color: #a0a0a0;
  text-decoration: line-through;
  margin-bottom: 10px;
  font-weight: 600;
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
  display: flex;
  align-items: center;
}

.sub-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 119%;
  color: #8f8f8f;
  margin-bottom: 8px; /* Добавлен отступ для бейджа */
}

/* Бейдж выгоды */
.save-badge {
  background: rgba(100, 227, 94, 0.15); /* Полупрозрачный зеленый фон */
  color: #00ca38;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  display: inline-block;
  margin-top: 10px;
  width: fit-content;
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

/* Стили для иконки с подсказкой (Тултип) */
.info-tooltip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 11px;
  font-weight: bold;
  margin-left: 6px;
  cursor: pointer;
  position: relative;
  vertical-align: middle;
}

.info-tooltip .tooltip-text {
  visibility: hidden;
  width: 280px;
  background-color: #2b2b2b;
  color: #fff;
  text-align: left;
  border-radius: 8px;
  padding: 12px;
  position: absolute;
  z-index: 10;
  bottom: 135%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: none;
}

.info-tooltip .tooltip-text::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -6px;
  border-width: 6px;
  border-style: solid;
  border-color: #2b2b2b transparent transparent transparent;
}

.info-tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
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
