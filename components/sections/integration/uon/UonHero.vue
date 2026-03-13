<template>
  <div class="banner-container">
    <div class="banner-content">
      <h1 class="banner-title">
        Интеграция мессенджеров <br />
        <span class="brand-text">в U-ON. TRAVEL</span>
      </h1>

      <p class="banner-subtitle">Упростите общение с клиентами</p>

      <div class="cta-section">
        <NuxtLink to="/signup">
          <button class="cta-button">Подключить бесплатно</button>
        </NuxtLink>

        <p class="trial-info">14 дней без ограничения функционала</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Здесь можно добавить логику клика, если нужно
</script>

<style scoped>
/* Основной контейнер */
.banner-container {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  box-sizing: border-box;
}

.banner-content {
  width: 100%;
  position: relative;
}

/* Заголовок */
.banner-title {
  font-size: 66px;
  font-weight: 700;
  line-height: 1.2;
  color: #000;
  margin: 0 0 20px 0;
  letter-spacing: -0.02em;
}

.brand-text {
  /* Можно добавить легкий градиент или цвет бренда для улучшения */
  color: #1a1a1a;
}

/* Подзаголовок */
.banner-subtitle {
  font-size: 18px;
  color: #333;
  margin-bottom: 60px;
  max-width: 300px;
  line-height: 1.4;
}

/* Секция с кнопкой (позиционирование) */
.cta-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* Улучшение: на десктопе прижимаем вправо, как на макете */
  position: absolute;
  right: 0;
  bottom: -40px;
}

.cta-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(92, 184, 92, 0.2);
}

.cta-button:hover {
  background-color: var(--hover-primary);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(92, 184, 92, 0.3);
}

.cta-button:active {
  transform: translateY(0);
}

/* Текст под кнопкой */
.trial-info {
  margin-top: 12px;
  font-size: 14px;
  color: #000;
  text-align: center;
  width: 100%;
}

/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
  .banner-title {
    font-size: 32px;
  }

  .cta-section {
    position: static;
    margin-top: 40px;
    align-items: center;
  }

  .banner-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .banner-subtitle {
    max-width: 100%;
  }
}
</style>
