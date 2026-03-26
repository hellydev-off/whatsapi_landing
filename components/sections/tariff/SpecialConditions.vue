<template>
  <div class="enterprise-banner">
    <div class="banner-content">
      <h2 class="banner-title">
        Масштабируете бизнес <br />
        или управляете сетью?
      </h2>

      <p class="banner-subtitle">
        Подготовим специальные условия и персональный тариф для крупных проектов
        🤝
      </p>

      <button class="contact-btn" @click="handleContact">
        Связаться с нами
        <span class="arrow">→</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const handleContact = () => {
  navigateTo("/#feedback");
};
</script>

<style scoped>
.enterprise-banner {
  background: var(--gray-color);
  border-radius: 24px;
  padding: 30px;
  max-width: 600px;
  display: flex;
  align-items: flex-start;
  transition: transform 0.3s ease;
}

.enterprise-banner:hover {
  transform: translateY(-2px);
}

.banner-content {
  text-align: left; /* Прижимаем к левому краю, как и тарифы */
  max-width: 700px;
}

.banner-title {
  font-size: 32px;
  font-weight: 850;
  line-height: 1.2;
  color: #1a1a1a;
  margin: 0 0 16px 0;
  letter-spacing: -0.5px;
}

.banner-subtitle {
  font-size: 18px;
  color: #636366;
  margin-bottom: 32px;
  line-height: 1.5;
}

.contact-btn {
  background: var(--primary-color); /* Темная кнопка для акцента "Enterprise" */
  color: #ffffff;
  border: none;
  padding: 16px 32px;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background: var(--hover-primary);
  padding-right: 40px; /* Эффект "вытягивания" при наведении */
}

.arrow {
  transition: transform 0.3s ease;
}

.contact-btn:hover .arrow {
  transform: translateX(5px);
}

/* Адаптивность */
@media (max-width: 768px) {
  .enterprise-banner {
    padding: 30px 20px;
    margin: 20px;
  }

  .banner-title {
    font-size: 24px;
  }

  .banner-subtitle {
    font-size: 16px;
  }

  .contact-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
