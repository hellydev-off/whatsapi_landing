<template>
  <div class="calculator-container">
    <div class="pricing-grid">
      <div class="setup-column">
        <header class="setup-header">
          <h1 class="title">Конфигуратор тарифа</h1>
          <p class="subtitle">Настройте решение под масштаб вашего бизнеса</p>
        </header>

        <div class="config-flex-row">
          <section class="config-card slider-part">
            <div class="control-info">
              <span class="control-label">Номера</span>
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

            <Transition name="fade">
              <div v-if="phoneCount >= 3" class="discount-badge">
                <span class="sparkle">✨</span> -50% на доп. номера
              </div>
            </Transition>
          </section>

          <section class="config-card services-part">
            <span class="control-label">Дополнительные каналы</span>
            <div class="services-mini-grid">
              <div
                class="service-item"
                :class="{ active: options.vkTariff }"
                @click="options.vkTariff = !options.vkTariff"
              >
                <div class="service-icon-sm vk-bg">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path
                      d="M10.4559 0H5.54412C1.06146 0 0 1.06146 0 5.54412V10.4559C0 14.9385 1.06146 16 5.54412 16H10.4559C14.9385 16 16 14.9385 16 10.4559V5.54412C16 1.06146 14.9272 0 10.4559 0ZM12.9174 11.4156H11.7532C11.3128 11.4156 11.1774 11.0656 10.387 10.264C9.69813 9.59867 9.39343 9.50753 9.22279 9.50753C8.98561 9.50753 8.91776 9.57405 8.91776 9.9027V10.9528C8.91776 11.2353 8.82728 11.4046 8.08216 11.4046C6.85139 11.4046 5.48524 10.6595 4.52524 9.27035C3.07992 7.23792 2.68474 5.71343 2.68474 5.39742C2.68474 5.22811 2.75127 5.0701 3.07992 5.0701H4.24416C4.53788 5.0701 4.65064 5.20549 4.76341 5.52183C5.33921 7.1817 6.29921 8.63834 6.69272 8.63834C6.83942 8.63834 6.90728 8.57181 6.90728 8.19792V6.4815C6.86204 5.69114 6.44424 5.62329 6.44424 5.34121C6.44424 5.20582 6.55701 5.0701 6.73796 5.0701H8.56748C8.81597 5.0701 8.90611 5.20549 8.90611 5.49921V7.81372C8.90611 8.0622 9.01888 8.15235 9.08674 8.15235C9.23343 8.15235 9.35784 8.06187 9.62861 7.7911C10.4642 6.85405 11.0626 5.40873 11.0626 5.40873C11.1418 5.23942 11.2772 5.08141 11.5709 5.08141H12.7351C13.0851 5.08141 13.1642 5.26204 13.0851 5.51052C12.9384 6.18811 11.5157 8.19792 11.5157 8.19792C11.3916 8.40116 11.3464 8.49164 11.5157 8.71717C11.6398 8.88649 12.0479 9.23642 12.3173 9.55276C12.8143 10.1183 13.1982 10.5916 13.2996 10.9189C13.4144 11.2462 13.2447 11.4156 12.9174 11.4156Z"
                    />
                  </svg>
                </div>
                <div class="service-details">
                  <span class="service-label">ВКонтакте</span>
                  <span class="service-cost">990 ₽</span>
                </div>
                <div class="dot-check"></div>
              </div>

              <div
                class="service-item"
                :class="{ active: options.massMail }"
                @click="options.massMail = !options.massMail"
              >
                <div class="service-icon-sm mail-bg">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 21 16"
                    fill="currentColor"
                  >
                    <path
                      d="M19.125 0H1.125C0.826631 0 0.540483 0.118526 0.329505 0.329505C0.118526 0.540483 0 0.826631 0 1.125V13.875C0 14.3723 0.197544 14.8492 0.549175 15.2008C0.900806 15.5525 1.37772 15.75 1.875 15.75H18.375C18.8723 15.75 19.3492 15.5525 19.7008 15.2008C20.0525 14.8492 20.25 14.3723 20.25 13.875V1.125C20.25 0.826631 20.1315 0.540483 19.9205 0.329505C19.7095 0.118526 19.4234 0 19.125 0ZM16.2328 2.25L10.125 7.84875L4.01719 2.25H16.2328ZM2.25 13.5V3.6825L9.36469 10.2047C9.57219 10.395 9.84348 10.5005 10.125 10.5005C10.4065 10.5005 10.6778 10.395 10.8853 10.2047L18 3.6825V13.5H2.25Z"
                    />
                  </svg>
                </div>
                <div class="service-details">
                  <span class="service-label">Рассылки</span>
                  <span class="service-cost">{{ currentData.mass }} ₽</span>
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
              placeholder="У меня есть промокод"
              class="promo-input"
            />
            <button v-if="!isPromoValid" class="promo-btn">Активировать</button>
            <span v-else class="promo-status">Готово!</span>
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
              <span class="total-label">Итого</span>
              <div v-if="phoneCount >= 20" class="franchise-tag">Франшиза</div>
            </div>

            <div class="total-price">
              <span class="num">{{
                Math.round(totalPrice).toLocaleString()
              }}</span>
              <span class="currency">₽</span>
            </div>

            <Transition name="fade">
              <div v-if="economy > 0" class="savings-label">
                Экономия {{ Math.round(economy).toLocaleString() }} ₽
              </div>
            </Transition>

            <div class="price-breakdown">
              <div class="item">
                <span>Лицензии ({{ phoneCount }})</span>
                <span
                  >{{
                    Math.round(basePartPrice * selectedPeriod).toLocaleString()
                  }}
                  ₽</span
                >
              </div>
              <div class="item" v-if="options.vkTariff">
                <span>Канал ВКонтакте</span>
                <span>{{ (990 * selectedPeriod).toLocaleString() }} ₽</span>
              </div>
              <div class="item" v-if="options.massMail">
                <span>Модуль рассылок</span>
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
            <button class="primary-btn">
              {{
                phoneCount >= 20 ? "Получить предложение" : "Оформить подписку"
              }}
            </button>
            <p class="footer-note">3 дня теста — бесплатно</p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
// import Frame from "~/layouts/Frame.vue"; // Раскомментируйте, если используете

const phoneCount = ref(1);
const selectedPeriod = ref(1);
const promoCode = ref("");
const options = ref({ massMail: false, vkTariff: false });

const periods = [
  { label: "1 мес", value: 1, base: 2200, mass: 2900 },
  { label: "3 мес", value: 3, base: 2000, mass: 2633 },
  { label: "6 мес", value: 6, base: 1900, mass: 2483 },
  { label: "12 мес", value: 12, base: 1800, mass: 1992 },
];

const currentData = computed(() =>
  periods.find((p) => p.value === selectedPeriod.value),
);
const isPromoValid = computed(
  () =>
    selectedPeriod.value === 12 && promoCode.value.toUpperCase() === "YEAR20",
);

const basePartPrice = computed(() => {
  let pricePerOne = currentData.value.base;
  if (phoneCount.value >= 3) pricePerOne *= 0.5;
  return pricePerOne * phoneCount.value;
});

const totalPrice = computed(() => {
  let monthlySum = basePartPrice.value;
  if (options.value.vkTariff) monthlySum += 990;
  if (options.value.massMail) monthlySum += currentData.value.mass;
  let total = monthlySum * selectedPeriod.value;
  if (isPromoValid.value) total *= 0.8;
  return total;
});

const economy = computed(() => {
  const full = 2200 * phoneCount.value * selectedPeriod.value;
  return full > totalPrice.value ? full - totalPrice.value : 0;
});

const getWord = (n) => {
  if (n % 10 === 1 && n % 100 !== 11) return "номер";
  if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20))
    return "номера";
  return "номеров";
};
</script>

<style scoped>
.calculator-container {
  margin: 2rem auto;
  color: #1e293b;
  box-sizing: border-box;
}

.pricing-grid {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 2.5rem;
}

/* ШАПКА */
.setup-header {
  margin-bottom: 2.5rem;
}
.title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}
.subtitle {
  color: #64748b;
  font-size: 1.1rem;
}

/* ОБЪЕДИНЕННАЯ СТРОКА */
.config-flex-row {
  display: grid;
  grid-template-columns: 1.2fr 1.5fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.config-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.control-label {
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  color: #94a3b8;
  letter-spacing: 0.05em;
  margin-bottom: 1.25rem;
  display: block;
}

/* СЛАЙДЕР СЛЕВА */
.control-info {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.count {
  font-size: 2.5rem;
  font-weight: 800;
  color: #10b981;
}
.unit {
  font-size: 1.1rem;
  color: #94a3b8;
  margin-left: 0.5rem;
  font-weight: 600;
}

.slider-wrapper {
  margin: 1.5rem 0;
}
.custom-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  background: linear-gradient(
    to right,
    #10b981 var(--progress),
    #f1f5f9 var(--progress)
  );
  border-radius: 10px;
}
.custom-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  background: white;
  border: 4px solid #10b981;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(16, 185, 129, 0.2);
}

.slider-marks {
  display: flex;
  justify-content: space-between;
  margin-top: 0.75rem;
  color: #cbd5e1;
  font-size: 0.75rem;
  font-weight: 700;
}

.discount-badge {
  margin-top: auto;
  background: #ecfdf5;
  color: #059669;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

/* СЕРВИСЫ СПРАВА */
.services-mini-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  height: 100%;
}

.service-item {
  border: 1px solid #f1f5f9;
  background: #f8fafc;
  padding: 1rem;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.2s;
  position: relative;
}
.service-item:hover {
  border-color: #cbd5e1;
  background: white;
}
.service-item.active {
  border-color: #10b981;
  background: #f0fdf4;
  transform: scale(1.02);
}

.service-icon-sm {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}
.vk-bg {
  background: #0077ff;
}
.mail-bg {
  background: #059669;
}

.service-label {
  display: block;
  font-weight: 700;
  font-size: 0.9rem;
}
.service-cost {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
}

.dot-check {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 8px;
  height: 8px;
  background: #e2e8f0;
  border-radius: 50%;
}
.active .dot-check {
  background: #10b981;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
}

/* ПРОМОКОД */
.promo-field {
  display: flex;
  background: #f1f5f9;
  padding: 0.5rem;
  border-radius: 12px;
  max-width: 400px;
}
.promo-input {
  background: transparent;
  border: none;
  padding: 0.5rem 1rem;
  outline: none;
  flex: 1;
  font-size: 0.9rem;
  width: 100%; /* Для стабильности на узких экранах */
  box-sizing: border-box;
}
.promo-btn {
  background: #1e293b;
  color: white;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}
.promo-status {
  color: #10b981;
  font-weight: 700;
  padding: 0.5rem 1rem;
}

/* КАРТОЧКА ИТОГОВ */
.summary-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 28px;
  padding: 2rem;
  position: sticky;
  top: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.03);
}

.period-tabs {
  display: flex;
  background: #f1f5f9;
  padding: 0.25rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}
.period-tabs button {
  flex: 1;
  border: none;
  background: transparent;
  padding: 0.6rem;
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  color: #64748b;
  transition: all 0.2s ease;
}
.period-tabs button.active {
  background: white;
  color: #1e293b;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.total-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.total-label {
  font-size: 0.9rem;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
}
.franchise-tag {
  background: #fffbeb;
  color: #d97706;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 800;
  border: 1px solid #fef3c7;
}

.total-price {
  display: flex;
  align-items: baseline;
  margin-bottom: 1rem;
}
.total-price .num {
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: -2px;
}
.total-price .currency {
  font-size: 1.5rem;
  color: #cbd5e1;
  margin-left: 0.5rem;
}

.savings-label {
  background: #10b981;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 2rem;
}

.price-breakdown {
  border-top: 1px dashed #e2e8f0;
  padding-top: 1.5rem;
  margin-bottom: 2rem;
}
.price-breakdown .item {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
  color: #64748b;
}
.price-breakdown .item span:last-child {
  font-weight: 700;
  color: #1e293b;
  text-align: right;
  margin-left: 1rem;
}
.discount {
  color: #10b981 !important;
}

.primary-btn {
  width: 100%;
  padding: 1.25rem;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.3);
}
.primary-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.05);
}
.footer-note {
  text-align: center;
  color: #94a3b8;
  font-size: 0.85rem;
  margin-top: 1rem;
  font-weight: 500;
}

/* АНИМАЦИИ ВЬЮ */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* === АДАПТИВНОСТЬ === */

/* Планшеты */
@media (max-width: 1024px) {
  .calculator-container {
    margin: 1rem auto;
  }
  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .config-flex-row {
    grid-template-columns: 1fr;
  }
  .summary-card {
    position: static; /* Отключаем sticky, так как карточка теперь внизу */
    margin-top: 1rem;
  }
}

/* Смартфоны */
@media (max-width: 640px) {
  .setup-header {
    margin-bottom: 1.5rem;
  }
  .title {
    font-size: 1.5rem;
  }
  .subtitle {
    font-size: 0.95rem;
  }

  .config-card {
    padding: 1rem; /* Уменьшаем отступы на карточках */
  }

  /* Каналы друг под друга */
  .services-mini-grid {
    grid-template-columns: 1fr;
  }

  /* Поле промокода во всю ширину */
  .promo-field {
    max-width: 100%;
    flex-direction: column;
    gap: 0.5rem;
    background: transparent;
    padding: 0;
  }
  .promo-input {
    background: #f1f5f9;
    border-radius: 12px;
    padding: 0.8rem 1rem;
  }
  .promo-btn {
    width: 100%;
    padding: 0.8rem 1.25rem;
  }
  .promo-status {
    background: #ecfdf5;
    border-radius: 12px;
    text-align: center;
    padding: 0.8rem;
  }

  /* Итоги */
  .summary-card {
    padding: 1.5rem 1rem;
    border-radius: 20px;
  }

  .period-tabs button {
    padding: 0.5rem 0.2rem; /* Уменьшаем кнопки, чтобы 4 влезли в ряд */
    font-size: 0.75rem;
  }

  .total-price .num {
    font-size: 2.5rem; /* Уменьшаем гигантский шрифт цены */
  }
}
</style>
