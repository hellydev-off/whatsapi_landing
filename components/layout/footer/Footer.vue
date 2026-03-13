<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-logo-section">
        <div class="footer-logo">Ватс<span>Апи</span></div>
      </div>

      <div class="footer-grid">
        <div class="footer-column">
          <h3>Компания</h3>
          <ul>
            <li>
              <NuxtLink class="link-deco" to="/about">О компании</NuxtLink>
            </li>
            <li>
              <NuxtLink class="link-deco" to="/documents">Документы</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Информация</h3>
          <ul>
            <li>
              <NuxtLink class="link-deco" to="/tariffs">Тарифы</NuxtLink>
            </li>
            <li>
              <NuxtLink class="link-deco" to="/docs">База знаний</NuxtLink>
            </li>
            <li><a href="#">Личный кабинет</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="disclaimer">
        *Принадлежит компании Meta (признана экстремистской и запрещена в РФ)
      </p>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  background-color: var(--gray-color, #f5f5f5); /* Добавлен fallback цвет */
  padding: 60px 20px 40px;
  color: #000;
  border-radius: 20px 20px 0 0;
}

.footer-container {
  max-width: 1200px; /* Ограничил ширину для больших экранов */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 100px;
}

.footer-logo {
  font-size: 28px;
  font-weight: 700;
  cursor: pointer;
}

.footer-logo span {
  color: var(--primary-color, #25d366); /* Добавлен fallback цвет */
}

.footer-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
}

.footer-column h3 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 12px;
}

.footer-column a {
  text-decoration: none;
  color: #000;
  font-size: 24px;
  font-weight: 400;
  transition: opacity 0.2s;
}

.footer-column a:hover {
  opacity: 0.7;
}

/* Стили для нижней части с пометкой */
.footer-bottom {
  max-width: 1200px;
  margin: 60px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.disclaimer {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 992px) {
  .footer-container {
    gap: 40px;
  }

  .footer-grid {
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 40px;
  }

  .footer-column a {
    font-size: 20px;
  }

  .footer-column h3 {
    font-size: 24px;
  }

  .footer-bottom {
    margin-top: 40px;
  }
}
</style>
