<template>
  <section id="feedback" class="feedback-wrapper">
    <header class="feedback-header">
      <h2>Остались вопросы?</h2>
      <p>Оставьте заявку и мы свяжемся с вами</p>
    </header>

    <div class="feedback-layout">
      <form class="feedback-form" @submit.prevent="submitForm">
        <div v-if="successMessage" class="success-msg">
          {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="error-msg">{{ errorMessage }}</div>
        <input
          type="text"
          v-model="form.name"
          placeholder="Ваше имя"
          class="input-field"
          required
          :disabled="loading"
        />
        <input
          type="email"
          v-model="form.email"
          placeholder="Ваш email"
          class="input-field"
          required
          :disabled="loading"
        />
        <textarea
          v-model="form.question"
          placeholder="Ваш вопрос"
          class="textarea-field"
          :disabled="loading"
        ></textarea>

        <button type="submit" class="submit-btn" :disabled="loading">
          {{ loading ? "Отправка..." : "Отправить" }}
          <svg
            width="11"
            height="14"
            viewBox="0 0 11 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
</template>

<script setup>
import { reactive, ref } from "vue";

const config = useRuntimeConfig();
const API_SUPPORT_URL = config.public.apiSupportUrl;

const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const form = reactive({
  name: "",
  email: "",
  question: "",
});

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const submitForm = async () => {
  if (!isValidEmail(form.email)) {
    errorMessage.value = "Введите корректный email";
    setTimeout(() => (errorMessage.value = ""), 3000);
    return;
  }

  loading.value = true;
  successMessage.value = "";
  errorMessage.value = "";

  try {
    await $fetch(`${API_SUPPORT_URL}sendInquiry`, {
      method: "POST",
      body: {
        name: form.name,
        email: form.email,
        message: form.question,
        inquiry_source: "site",
        submitted_from: "feedback_section",
      },
    });

    successMessage.value = "Заявка отправлена! Мы скоро свяжемся с вами.";
    form.name = "";
    form.email = "";
    form.question = "";
  } catch {
    errorMessage.value = "Не удалось отправить заявку. Попробуйте позже.";
  } finally {
    loading.value = false;
    setTimeout(() => {
      successMessage.value = "";
      errorMessage.value = "";
    }, 5000);
  }
};
</script>

<style scoped>
.success-msg {
  background: #d1fae5;
  color: #065f46;
  padding: 14px 18px;
  border-radius: 12px;
  font-size: 16px;
  text-align: center;
}
.error-msg {
  background: #fee2e2;
  color: #dc2626;
  padding: 14px 18px;
  border-radius: 12px;
  font-size: 16px;
  text-align: center;
}
.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.feedback-wrapper {
  box-sizing: border-box;
}

.feedback-header {
  text-align: center;
  margin-bottom: 50px;
}

.feedback-header h2 {
  font-size: 44px;
  font-weight: 600;
  margin-bottom: 10px;
}

.feedback-header p {
  font-weight: 400;
  font-size: 22px;
}

/* Десктопная раскладка */
.feedback-layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

/* Форма: плавно сжимается до мобильного брейкпоинта */
.feedback-form {
  flex: 0 1 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 0;
}

.input-field,
.textarea-field {
  background-color: var(--gray-color, #f5f5f5);
  border: none;
  border-radius: 15px;
  padding: 18px 25px;
  font-size: 22px;
  width: 100%; /* Всегда 100% от родителя (.feedback-form) */
  box-sizing: border-box;
  outline: none;
}

.textarea-field {
  min-height: 150px;
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
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
}

/* Картинка */
.feedback-image {
  flex: 0 1 500px;
  display: flex;
  justify-content: flex-end;
}

.feedback-image img {
  width: 100%;
  height: auto;
  max-width: 500px;
  object-fit: contain;
}

/* --- МОБИЛЬНЫЙ АДАПТИВ --- */

@media (max-width: 600px) {
  .feedback-header h2 {
    font-size: 36px;
  }

  .feedback-header p {
    display: none;
  }
}

@media (max-width: 450px) {
  .feedback-header h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
  }
}

@media (max-width: 768px) {
  .feedback-layout {
    flex-direction: column;
    gap: 40px;
  }

  .feedback-form {
    order: 1; /* Форма сверху */
    width: 100%; /* Растягиваем на всю ширину экрана */
    max-width: 100%;
    flex: 1 1 auto;
  }

  .feedback-image {
    order: 2; /* Картинка снизу */
    width: 100%;
    justify-content: center;
    margin: 0 auto;
  }

  .input-field,
  .textarea-field,
  .submit-btn {
    font-size: 18px; /* Чуть уменьшим шрифт для удобства на смартфонах */
    padding: 15px 20px;
  }
}
</style>
