<template>
  <section
    class="contacts-section"
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
      transition: { duration: 800, delay: 900 },
    }"
  >
    <div class="contacts-card-content">
      <div class="contacts-text">
        <h2 class="section-title">Свяжитесь с нами</h2>
        <p class="contacts-desc">
          Есть вопросы по интеграции или работе сервиса? Наша команда
          поддержки всегда на связи.
        </p>
        <div class="contacts-methods">
          <NuxtLink to="/#feedback" class="contact-item">
            <div class="contact-icon email-bg">✉</div>
            <div class="contact-info">
              <span class="label">Напишите нам</span>
              <span class="value">hello@whatsapi.ru</span>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="qr-container">
        <div class="qr-box">
          <img
            src="/qr-vk.png"
            alt="QR Код ВК"
            class="qr-code-img"
          />
          <div class="qr-caption">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f3/VK_Compact_Logo_%282021-present%29.svg"
              alt="VK"
              width="18"
            />
            <span>Группа ВКонтакте</span>
          </div>
          <a href="https://vk.ru/whatsapi" target="_blank" class="qr-vk-btn">
            Перейти в группу ВК
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contacts-section {
  background: #ffffff;
  border: 1px solid #eef2f6;
  border-radius: 32px;
  padding: 50px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);
  margin-top: 40px;
  will-change: transform, opacity;
}

.contacts-card-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #1a1a1a;
}

.contacts-desc {
  color: #64748b;
  font-size: 1.1rem;
  margin-bottom: 30px;
  max-width: 450px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: inherit;
  background: #f8fafc;
  padding: 15px 25px;
  border-radius: 16px;
  transition: all 0.3s ease;
  width: fit-content;
}

.contact-item:hover {
  background: #f1f5f9;
  transform: translateX(5px);
}

.contact-icon {
  width: 45px;
  height: 45px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.email-bg {
  background: var(--primary-color);
  color: white;
}

.contact-info .label {
  display: block;
  font-size: 0.85rem;
  color: #94a3b8;
}

.contact-info .value {
  font-weight: 600;
  font-size: 1.1rem;
}

.qr-container {
  perspective: 1000px;
}

.qr-box {
  background: white;
  padding: 20px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.5s ease;
}

.qr-box:hover {
  transform: rotateY(-5deg) rotateX(5deg);
}

.qr-code-img {
  width: 160px;
  height: 160px;
  margin-bottom: 15px;
  border-radius: 12px;
}

.qr-caption {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  color: #4c75a3;
  font-size: 0.95rem;
}

.qr-vk-btn {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 24px;
  background: #4c75a3;
  color: #fff;
  border-radius: 12px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background 0.2s ease;
}

.qr-vk-btn:hover {
  background: #3b6490;
}

@media (max-width: 900px) {
  .contacts-card-content {
    flex-direction: column;
    text-align: center;
  }
  .contacts-desc {
    margin: 0 auto 30px auto;
  }
  .contact-item {
    margin: 0 auto;
  }
}

@media (max-width: 700px) {
  .contacts-section {
    padding: 30px;
  }
}

@media (max-width: 400px) {
  .section-title {
    font-size: 24px;
  }

  .contacts-desc {
    font-size: 12px;
  }

  .contact-info .label {
    display: block;
    font-size: 0.65rem;
    color: #94a3b8;
  }

  .contact-info .value {
    font-weight: 600;
    font-size: 14px;
  }
}
</style>
