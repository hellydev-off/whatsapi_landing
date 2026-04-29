<template>
  <section
    class="contacts-section"
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
      transition: { duration: 800 },
    }"
  >
    <div class="contacts-inner">
      <div class="contacts-text">
        <h2 class="contacts-title">Техподдержка</h2>

        <div class="contact-group">
          <p class="contact-label">Для технических вопросов:</p>
          <a href="mailto:hello@whatsapi.ru" class="contact-email">
            hello@whatsapi.ru
          </a>
        </div>

        <div class="contact-group">
          <p class="contact-label">По вопросам сотрудничества:</p>
          <a href="mailto:hr@developtech.ru" class="contact-email">
            hr@developtech.ru
          </a>
        </div>
      </div>

      <div class="qr-container">
        <div class="qr-box">
          <img src="/qr-vk.png" alt="QR Код ВК" class="qr-code-img" />
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
}

.contacts-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.contacts-title {
  font-size: 2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 30px;
}

.contact-group {
  margin-bottom: 24px;
}

.contact-label {
  font-size: 0.95rem;
  color: #64748b;
  margin-bottom: 6px;
}

.contact-email {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-email:hover {
  color: var(--primary-color);
}

.qr-container {
  flex-shrink: 0;
}

.qr-box {
  background: #f8fafc;
  padding: 20px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  text-align: center;
}

.qr-code-img {
  display: block;
  width: 160px;
  height: 160px;
  margin: 0 auto 15px;
  border-radius: 8px;
}

.qr-caption {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  color: #4c75a3;
  font-size: 0.95rem;
  margin-bottom: 12px;
}

.qr-vk-btn {
  display: inline-block;
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

@media (max-width: 768px) {
  .contacts-section {
    padding: 30px;
  }

  .contacts-inner {
    flex-direction: column;
    text-align: center;
  }

  .contact-label {
    text-align: center;
  }
}
</style>
