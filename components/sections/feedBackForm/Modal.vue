<template>
  <Transition name="modal-fade">
    <div v-if="isOpen" class="modal-overlay" @click.self="close">
      <div class="modal-container">
        <button class="close-btn" @click="close" aria-label="Закрыть">
          &times;
        </button>

        <section class="feedback-wrapper">
          <header class="feedback-header">
            <h2>Остались вопросы?</h2>
            <p>Оставьте заявку и мы свяжемся с вами</p>
          </header>

          <div class="feedback-layout">
            <form class="feedback-form" @submit.prevent="handleSubmit">
              <input
                type="text"
                placeholder="Ваше имя"
                class="input-field"
                required
              />
              <input
                type="tel"
                placeholder="Номер телефона"
                class="input-field"
                required
              />
              <textarea
                placeholder="Ваш вопрос"
                class="textarea-field"
              ></textarea>

              <button type="submit" class="submit-btn">
                Отправить
                <svg width="11" height="14" viewBox="0 0 11 14" fill="none">
                  <path
                    d="M2.28267e-06 11.9107V2.08929C-0.000591436 1.70155 0.114952 1.32158 0.333258 0.993356C0.551565 0.665135 0.863708 0.402083 1.23356 0.23465C1.67239 0.0386502 2.16062 -0.0368408 2.64261 0.0167792C3.1246 0.0703991 3.58098 0.250973 3.95972 0.537925L10.2509 5.44863C10.486 5.64135 10.6746 5.87961 10.8039 6.14728C10.9331 6.41494 11 6.70575 11 7C11 7.29425 10.9331 7.58506 10.8039 7.85272C10.6746 8.12039 10.486 8.35865 10.2509 8.55136L3.95972 13.4621C3.58098 13.749 3.1246 13.9296 2.64261 13.9832C2.16062 14.0368 1.67239 13.9613 1.23356 13.7653C0.863708 13.5979 0.551565 13.3349 0.333258 13.0066C0.114952 12.6784 -0.000591436 12.2984 2.28267e-06 11.9107Z"
                    fill="white"
                  />
                </svg>
              </button>
            </form>

            <div class="feedback-image">
              <img src="/form/feedback.svg" alt="Иллюстрация" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { defineProps, defineEmits, watch } from "vue";

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};

const handleSubmit = () => {
  // Логика отправки
  console.log("Форма отправлена");
  close();
};

console.log("open");

// Блокировка скролла основной страницы при открытом модальном окне
</script>

<style scoped>
/* Стили модального окна */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  padding: 20px;
  backdrop-filter: blur(4px);
}

.modal-container {
  background: white;
  border-radius: 30px;
  padding: 60px 40px;
  position: relative;
  max-width: 1100px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 25px;
  background: none;
  border: none;
  font-size: 40px;
  line-height: 1;
  cursor: pointer;
  color: #333;
  transition: transform 0.2s;
}

.close-btn:hover {
  transform: scale(1.1);
}

/* Анимация Transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Ваши существующие стили с небольшими правками под модалку */
.feedback-header {
  text-align: center;
  margin-bottom: 40px;
}

.feedback-header h2 {
  font-size: 38px; /* Немного уменьшил для модалки */
  font-weight: 600;
  margin-bottom: 10px;
}

.feedback-header p {
  font-size: 18px;
  color: #666;
}

.feedback-layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.feedback-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input-field,
.textarea-field {
  background-color: #f5f5f5;
  border: none;
  border-radius: 15px;
  padding: 16px 20px;
  font-size: 18px;
  outline: none;
}

.textarea-field {
  min-height: 120px;
  resize: none;
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--primary-color, #007bff);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 18px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
}

.feedback-image {
  flex: 0 1 400px;
}

.feedback-image img {
  width: 100%;
  max-width: 400px;
}

/* Адаптив */
@media (max-width: 992px) {
  .feedback-image {
    display: none; /* В модалке на планшетах лучше скрыть картинку для экономии места */
  }
}

@media (max-width: 600px) {
  .modal-container {
    padding: 40px 20px;
    border-radius: 20px;
  }

  .feedback-header h2 {
    font-size: 28px;
  }
  .feedback-header p {
    display: none;
  }
}
</style>
