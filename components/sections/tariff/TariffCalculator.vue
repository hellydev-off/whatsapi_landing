<template>
  <div class="calculator-container">
    <div class="pricing-grid">
      <div class="setup-column">
        <header class="setup-header">
          <h1 class="title">Конфигуратор тарифа</h1>
          <p class="subtitle">
            Настройте решение под масштаб вашего бизнеса с выгодой до 50%
          </p>
        </header>

        <div class="config-flex-row">
          <section class="config-card slider-part">
            <div class="control-info">
              <span class="control-label">Количество линий (номеров)</span>
              <div class="counter-display">
                <span class="count">{{ phoneCount }}</span>
                <span class="unit">{{ getWord(phoneCount) }}</span>
              </div>
            </div>

            <div class="slider-wrapper">
              <input
                type="range"
                min="1"
                max="20"
                v-model.number="phoneCount"
                class="custom-slider"
                :style="{ '--progress': ((phoneCount - 1) / 19) * 100 + '%' }"
              />
              <div class="slider-marks">
                <span>1</span>
                <span>20+</span>
              </div>
            </div>

            <div class="badge-container">
              <Transition name="fade">
                <div v-if="phoneCount === 2" class="discount-badge special">
                  <span class="sparkle">🎁</span> Спеццена за 2 номера
                </div>
                <div v-else-if="phoneCount >= 3" class="discount-badge extra">
                  <span class="sparkle">🔥</span> -50% на доп. линии
                </div>
              </Transition>
            </div>
          </section>

          <section class="config-card services-part">
            <span class="control-label">Дополнительные каналы</span>
            <div class="services-mini-grid">
              <div
                class="service-item"
                :class="{ active: options.vkTariff }"
                @click="options.vkTariff = !options.vkTariff"
              >
                <div class="service-icon vk-bg">VK</div>
                <div class="service-details">
                  <span class="service-label">ВКонтакте</span>
                  <span class="service-cost">990 ₽/мес</span>
                </div>
                <div class="dot-check"></div>
              </div>

              <div
                class="service-item"
                :class="{ active: options.massMail }"
                @click="options.massMail = !options.massMail"
              >
                <div class="service-icon mail-bg">@</div>
                <div class="service-details">
                  <span class="service-label">Рассылки</span>
                  <span class="service-cost">{{ currentData.mass }} ₽/мес</span>
                </div>
                <div class="dot-check"></div>
              </div>
            </div>
          </section>
        </div>

        <section class="promo-section">
          <div class="promo-field" :class="{ 'is-active': isPromoValid }">
            <input
              type="text"
              v-model="promoCode"
              placeholder="Введите промокод (YEAR20)"
              class="promo-input"
            />
            <button v-if="!isPromoValid" class="promo-btn">Активировать</button>
            <span v-else class="promo-status">Скидка -20% активирована</span>
          </div>
        </section>
      </div>

      <aside class="summary-column">
        <div class="summary-card">
          <div class="period-tabs">
            <button
              v-for="p in periods"
              :key="p.value"
              @click="selectedPeriod = p.value"
              :class="{ active: selectedPeriod === p.value }"
            >
              {{ p.label }}
            </button>
          </div>

          <div class="total-block">
            <div class="total-top">
              <span class="total-label">Итого к оплате</span>
            </div>

            <div class="total-price">
              <span class="num">{{
                Math.round(totalPrice).toLocaleString()
              }}</span>
              <span class="currency">₽</span>
            </div>

            <Transition name="fade">
              <div v-if="economy > 0" class="savings-label">
                Ваша экономия {{ Math.round(economy).toLocaleString() }} ₽
              </div>
            </Transition>

            <div class="price-breakdown">
              <div class="item">
                <span>Лицензии ({{ phoneCount }} шт.)</span>
                <span>{{ Math.round(basePartPrice).toLocaleString() }} ₽</span>
              </div>

              <div class="item" v-if="options.vkTariff">
                <span>ВКонтакте (на {{ selectedPeriod }} мес.)</span>
                <span>{{ (990 * selectedPeriod).toLocaleString() }} ₽</span>
              </div>

              <div class="item" v-if="options.massMail">
                <span>Рассылки (на {{ selectedPeriod }} мес.)</span>
                <span
                  >{{
                    (currentData.mass * selectedPeriod).toLocaleString()
                  }}
                  ₽</span
                >
              </div>

              <div class="item discount" v-if="isPromoValid">
                <span>Скидка по промокоду</span>
                <span>-20%</span>
              </div>
            </div>
          </div>

          <div class="summary-actions">
            <button
              @click="openMail"
              v-if="phoneCount < 20"
              class="primary-btn"
            >
              Оформить подписку
            </button>

            <button v-else class="primary-btn">Получить предложение</button>
            <p class="footer-note">14 дней бесплатного теста на все функции</p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const phoneCount = ref(1);
const selectedPeriod = ref(1);
const promoCode = ref("");
const options = ref({ massMail: false, vkTariff: false });

const openMail = () => {
  window.open(`mailto:support@app.whatsapi.ru`, "_blank");
};

/**
 * ДАННЫЕ ИЗ ТАБЛИЦЫ
 * price1 - цена за 1 номер за весь период
 * price2 - спеццена за 2 номера за весь период
 */
const periods = [
  { label: "1 мес", value: 1, price1: 1900, price2: 3380, mass: 2900 },
  { label: "3 мес", value: 3, price1: 5570, price2: 9790, mass: 2633 },
  { label: "6 мес", value: 6, price1: 10900, price2: 18900, mass: 2483 },
  { label: "12 мес", value: 12, price1: 19900, price2: 33800, mass: 1992 },
];

const currentData = computed(() =>
  periods.find((p) => p.value === selectedPeriod.value),
);

// Промокод работает только на годовой тариф (для примера)
const isPromoValid = computed(
  () =>
    selectedPeriod.value === 12 && promoCode.value.toUpperCase() === "YEAR20",
);

/**
 * ЛОГИКА РАСЧЕТА НОМЕРОВ
 */
const basePartPrice = computed(() => {
  const p = currentData.value;

  if (phoneCount.value === 1) {
    return p.price1;
  }

  if (phoneCount.value === 2) {
    return p.price2;
  }

  // Если больше 2: Цена_за_2 + (Цена_за_1 * 0.5 * кол-во_оставшихся)
  const extraCount = phoneCount.value - 2;
  const extraPrice = p.price1 * 0.5 * extraCount;

  return p.price2 + extraPrice;
});

/**
 * ИТОГОВАЯ СУММА
 */
const totalPrice = computed(() => {
  let total = basePartPrice.value;

  if (options.value.vkTariff) total += 990 * selectedPeriod.value;
  if (options.value.massMail)
    total += currentData.value.mass * selectedPeriod.value;

  if (isPromoValid.value) total *= 0.8;

  return total;
});

/**
 * РАСЧЕТ ВЫГОДЫ
 * Считаем как: (Цена за 1 номер * кол-во) - текущая цена
 */
const economy = computed(() => {
  const baseline = currentData.value.price1 * phoneCount.value;
  const services =
    (options.value.vkTariff ? 990 * selectedPeriod.value : 0) +
    (options.value.massMail
      ? currentData.value.mass * selectedPeriod.value
      : 0);

  const savings = baseline + services - totalPrice.value;
  return savings > 0 ? savings : 0;
});

const getWord = (n) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const titles = ["номер", "номера", "номеров"];
  return titles[n % 100 > 4 && n % 100 < 20 ? 2 : cases[Math.min(n % 10, 5)]];
};
</script>

<style scoped>
.calculator-container {
  color: #1e293b;
  margin: 0 auto;
}

.pricing-grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 32px;
  align-items: start;
}

/* ЗАГОЛОВКИ */
.setup-header {
  margin-bottom: 40px;
}
.title {
  font-size: 42px;
  font-weight: 850;
  letter-spacing: -1px;
  margin: 0 0 12px;
  color: #0f172a;
}
.subtitle {
  font-size: 18px;
  color: #64748b;
  margin: 0;
}

/* КАРТОЧКИ КОНФИГУРАЦИИ */
.config-flex-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;
}

.config-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.control-label {
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #94a3b8;
  letter-spacing: 0.05em;
  margin-bottom: 20px;
}

/* СЛАЙДЕР */
.counter-display {
  display: flex;
  align-items: baseline;
  margin-bottom: 8px;
}
.count {
  font-size: 48px;
  font-weight: 800;
  color: #10b981;
  line-height: 1;
}
.unit {
  font-size: 20px;
  font-weight: 600;
  color: #94a3b8;
  margin-left: 8px;
}

.slider-wrapper {
  margin: 24px 0;
}
.custom-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: linear-gradient(
    to right,
    #10b981 var(--progress),
    #f1f5f9 var(--progress)
  );
  border-radius: 10px;
  outline: none;
}
.custom-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 26px;
  height: 26px;
  background: #fff;
  border: 4px solid #10b981;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);
}

.slider-marks {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  font-size: 12px;
  font-weight: 700;
  color: #cbd5e1;
}

/* БЕЙДЖИ */
.badge-container {
  height: 36px;
  margin-top: 12px;
}
.discount-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 700;
}
.discount-badge.special {
  background: #eff6ff;
  color: #2563eb;
}
.discount-badge.extra {
  background: #f0fdf4;
  color: #16a34a;
}

/* СЕРВИСЫ */
.services-mini-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.service-item {
  display: flex;
  align-items: center;
  padding: 14px;
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  border-radius: 16px;
  cursor: pointer;
  transition: 0.2s;
  position: relative;
}
.service-item:hover {
  border-color: #cbd5e1;
}
.service-item.active {
  background: #fff;
  border-color: #10b981;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.08);
}

.service-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 800;
  font-size: 14px;
  margin-right: 14px;
}
.vk-bg {
  background: #0077ff;
}
.mail-bg {
  background: #10b981;
}

.service-label {
  display: block;
  font-weight: 700;
  font-size: 15px;
}
.service-cost {
  font-size: 13px;
  color: #64748b;
  font-weight: 500;
}

.dot-check {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  background: #e2e8f0;
  border-radius: 50%;
}
.active .dot-check {
  background: #10b981;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.15);
}

/* ПРОМОКОД */
.promo-field {
  display: flex;
  align-items: center;
  background: #f1f5f9;
  padding: 6px;
  border-radius: 16px;
  max-width: 440px;
}
.promo-input {
  background: transparent;
  border: none;
  padding: 10px 16px;
  flex: 1;
  font-size: 15px;
  font-weight: 500;
  outline: none;
}
.promo-btn {
  background: #0f172a;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
}
.promo-status {
  color: #10b981;
  font-weight: 700;
  padding: 0 16px;
}

/* КАРТОЧКА ИТОГОВ */
.summary-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 32px;
  padding: 32px;
  position: sticky;
  top: 40px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
}

.period-tabs {
  display: flex;
  background: #f1f5f9;
  padding: 4px;
  border-radius: 16px;
  margin-bottom: 32px;
}
.period-tabs button {
  flex: 1;
  border: none;
  background: transparent;
  padding: 12px 4px;
  font-size: 14px;
  font-weight: 700;
  color: #64748b;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s;
}
.period-tabs button.active {
  background: #fff;
  color: #0f172a;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04);
}

.total-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.total-label {
  font-size: 14px;
  font-weight: 800;
  color: #94a3b8;
  text-transform: uppercase;
}
.franchise-tag {
  background: #fef3c7;
  color: #92400e;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 900;
}

.total-price {
  display: flex;
  align-items: baseline;
  margin-bottom: 16px;
}
.total-price .num {
  font-size: 64px;
  font-weight: 900;
  letter-spacing: -3px;
  color: #0f172a;
}
.total-price .currency {
  font-size: 28px;
  color: #cbd5e1;
  margin-left: 8px;
  font-weight: 700;
}

.savings-label {
  display: inline-block;
  background: #10b981;
  color: #fff;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 24px;
}

.price-breakdown {
  border-top: 1px dashed #e2e8f0;
  padding-top: 24px;
  margin-bottom: 32px;
}
.price-breakdown .item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #64748b;
}
.price-breakdown .item span:last-child {
  color: #0f172a;
  font-weight: 700;
}
.item.discount span {
  color: #10b981 !important;
}

.primary-btn {
  width: 100%;
  padding: 20px;
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.primary-btn:hover {
  background: #059669;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.4);
}

.footer-note {
  text-align: center;
  color: #94a3b8;
  font-size: 13px;
  margin-top: 16px;
  font-weight: 600;
}

/* АНИМАЦИИ */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(5px);
}

/* АДАПТИВНОСТЬ */
@media (max-width: 1024px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }
  .summary-card {
    position: static;
  }
}
@media (max-width: 640px) {
  .config-flex-row {
    grid-template-columns: 1fr;
  }
  .title {
    font-size: 32px;
  }
  .total-price .num {
    font-size: 48px;
  }
}
</style>
