<template>
  <div class="registration-container">
    <div v-if="errorMessage" class="error-banner">
      {{ errorMessage }}
    </div>

    <div v-if="sendEmail" class="email-sent">
      <h2>Письмо отправлено!</h2>
      <p>Проверьте вашу почту для подтверждения аккаунта.</p>
      <p class="redirect-timer">Перенаправление через {{ countdown }} сек...</p>
      <NuxtLink to="/" class="redirect-btn">На главную</NuxtLink>
    </div>

    <form v-else @submit.prevent="handleSubmit" class="reg-form">
      <h1>Регистрация</h1>

      <div class="field">
        <label>Имя</label>
        <input
          type="text"
          v-model="form.name"
          placeholder="Введите имя"
          required
        />
      </div>

      <div class="field">
        <label>Email</label>
        <input
          type="email"
          v-model="form.email"
          placeholder="example@mail.com"
          required
        />
      </div>

      <div class="field">
        <label>Пароль</label>
        <div class="input-wrapper">
          <input
            :type="showPass ? 'text' : 'password'"
            v-model="form.password"
            required
          />
          <span class="eye-icon" @click="showPass = !showPass">
            <svg
              v-if="!showPass"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
              ></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
            <svg
              v-else
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </span>
        </div>
      </div>

      <div class="field">
        <label>Телефон</label>
        <div class="phone-input">
          <div class="country-prefix">
            <img src="https://flagcdn.com/w20/ru.png" width="20" alt="RU" />
            <span>+7</span>
          </div>
          <input
            type="tel"
            v-model="formattedPhone"
            @input="handlePhoneInput"
            placeholder="(999) 000-00-00"
            required
          />
        </div>
      </div>

      <div class="row">
        <div class="field half">
          <label>Страна</label>
          <div
            class="custom-select"
            :class="{ active: activeSelect === 'country' }"
            @click.stop="toggleSelect('country')"
          >
            <div class="select-trigger">
              {{ form.country }}
              <span class="arrow"></span>
            </div>
            <Transition name="fade">
              <div class="select-options" v-if="activeSelect === 'country'">
                <div @click.stop="selectValue('country', 'Россия')">Россия</div>
              </div>
            </Transition>
          </div>
        </div>

        <div class="field half">
          <label>CRM</label>
          <div
            class="custom-select"
            :class="{ active: activeSelect === 'crm' }"
            @click.stop="toggleSelect('crm')"
          >
            <div class="select-trigger" :class="{ placeholder: !form.crm }">
              {{ form.crm || "-" }}
              <span class="arrow"></span>
            </div>
            <Transition name="fade">
              <div class="select-options" v-if="activeSelect === 'crm'">
                <div @click.stop="selectValue('crm', 'Bitrix24')">Bitrix24</div>
                <div @click.stop="selectValue('crm', 'AmoCRM')">AmoCRM</div>
                <div @click.stop="selectValue('crm', 'uon')">Uon-Travel</div>
              </div>
            </Transition>
          </div>
        </div>
      </div>

      <div class="field">
        <label>Промокод</label>
        <input type="text" v-model="form.promo" />
      </div>

      <div class="checkbox-group">
        <label class="checkbox-container">
          <input type="checkbox" v-model="form.agreeTerms" required />
          <span class="custom-checkmark"></span>
          <span class="checkbox-text"
            >Я согласен с <NuxtLink to="/documents">Условиями</NuxtLink> и
            <NuxtLink to="/documents">Политикой конфиденциальности</NuxtLink></span
          >
        </label>

        <label class="checkbox-container">
          <input type="checkbox" v-model="form.agreeCookies" />
          <span class="custom-checkmark"></span>
          <span class="checkbox-text"
            >Я согласен на использование файлов cookie</span
          >
        </label>

        <label class="checkbox-container">
          <input type="checkbox" v-model="form.agreeNews" />
          <span class="custom-checkmark"></span>
          <span class="checkbox-text"
            >Я согласен получать новостные рассылки</span
          >
        </label>

        <label class="checkbox-container">
          <input type="checkbox" v-model="form.agreePersonalData" required />
          <span class="custom-checkmark"></span>
          <span class="checkbox-text"
            >Даю согласие на обработку персональных данных</span
          >
        </label>
      </div>

      <button type="submit" class="submit-btn" :disabled="!isFormValid || loading">
        <span v-if="loading" class="btn-spinner"></span>
        {{ loading ? "Загрузка..." : "Регистрация" }}
      </button>

      <div class="footer-link">УЖЕ ЗАРЕГИСТРИРОВАНЫ? <a href="https://app.whatsapi.ru/">ВОЙТИ</a></div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";

const config = useRuntimeConfig();
const API_AUTH_URL = config.public.apiAuthUrl;

const showPass = ref(false);
const activeSelect = ref(null);
const formattedPhone = ref("");
const router = useRouter();
const loading = ref(false);
const errorMessage = ref("");
const sendEmail = ref(false);
const countdown = ref(5);

const form = reactive({
  name: "",
  email: "",
  password: "",
  phone: "",
  country: "Russia",
  crm: "",
  promo: "",
  agreeTerms: false,
  agreeCookies: false,
  agreeNews: false,
  agreePersonalData: false,
});

// Маска телефона РФ
const handlePhoneInput = (e) => {
  let val = e.target.value.replace(/\D/g, "");
  if (val.length > 10) val = val.substring(0, 10);

  let formatted = "";
  if (val.length > 0) formatted += "(" + val.substring(0, 3);
  if (val.length >= 4) formatted += ") " + val.substring(3, 6);
  if (val.length >= 7) formatted += "-" + val.substring(6, 8);
  if (val.length >= 9) formatted += "-" + val.substring(8, 10);

  formattedPhone.value = formatted;
  form.phone = val;
};

// Селекторы
const toggleSelect = (type) => {
  activeSelect.value = activeSelect.value === type ? null : type;
};
const selectValue = (type, val) => {
  form[type] = val;
  activeSelect.value = null;
};
const closeSelects = () => {
  activeSelect.value = null;
};

onMounted(() => window.addEventListener("click", closeSelects));
onUnmounted(() => window.removeEventListener("click", closeSelects));

const isFormValid = computed(() => {
  return (
    form.name &&
    form.email &&
    form.password &&
    form.phone.length === 10 &&
    form.agreeTerms &&
    form.agreePersonalData
  );
});

const handleSubmit = async () => {
  if (!isFormValid.value) return;

  loading.value = true;
  errorMessage.value = "";

  try {
    const requestData = {
      email: form.email,
      phone: "+7" + form.phone,
      password: form.password,
    };

    const response = await $fetch(`${API_AUTH_URL}register`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: requestData,
    });

    if (!response.ok) {
      errorMessage.value = response.error_message || "Ошибка регистрации";
      setTimeout(() => (errorMessage.value = ""), 5000);
      return;
    }

    if (response.data?.result === true) {
      sendEmail.value = true;
      startRedirectTimer();
    }
  } catch (err) {
    const serverError = err.data?.errors?.[0];
    errorMessage.value =
      serverError === "User with this credentials already exists."
        ? "Пользователь с такими данными уже существует"
        : "Ошибка регистрации. Попробуйте позже";
    setTimeout(() => (errorMessage.value = ""), 5000);
  } finally {
    loading.value = false;
  }
};

const startRedirectTimer = () => {
  const interval = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(interval);
      router.push("/");
    }
  }, 1000);
};
</script>

<style scoped>
/* ПЕРЕМЕННЫЕ ЦВЕТОВ */
.registration-container {
  --primary-color: #00e13f; /* Основной неоновый зеленый */
  --primary-hover: #00c737; /* Насыщенный зеленый при наведении */
  --primary-light: rgba(0, 225, 63, 0.15); /* Цвет для фокуса/теней */
  --border-color: #e1e5eb;
  --text-main: #1a1a1a;
  --text-secondary: #7a828a;
  --bg-input: #fcfdfe;

  font-family: "Inter", sans-serif;
  max-width: 420px;
  margin: 40px auto;
  padding: 30px;
  color: var(--text-main);
}

.reg-form {
  box-sizing: border-box;
}

.reg-form *,
.reg-form *::before,
.reg-form *::after {
  box-sizing: border-box;
}

h1 {
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 30px;
}

.field {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

/* ИНПУТЫ */
input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"] {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--border-color);
  background: var(--bg-input);
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

input:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px var(--primary-light);
}

/* ПАРОЛЬ */
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.input-wrapper input {
  padding-right: 40px;
}
.eye-icon {
  position: absolute;
  right: 12px;
  cursor: pointer;
  color: var(--text-secondary);
  display: flex;
}
.eye-icon:hover {
  color: var(--text-main);
}

/* ТЕЛЕФОН */
.phone-input {
  display: flex;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  transition: 0.2s;
}
.phone-input:focus-within {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px var(--primary-light);
}
.country-prefix {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 14px;
  background: #f4f6f8;
  border-right: 1px solid var(--border-color);
  font-size: 14px;
}
.phone-input input {
  border: none;
  flex: 1;
  box-shadow: none;
}

/* СЕЛЕКТЫ */
.row {
  display: flex;
  gap: 15px;
}
.half {
  flex: 1;
}
.custom-select {
  position: relative;
  cursor: pointer;
}
.select-trigger {
  padding: 12px 14px;
  border: 1px solid var(--border-color);
  background: var(--bg-input);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  transition: 0.2s;
}
.active .select-trigger {
  border-color: var(--primary-color);
}
.arrow {
  border: solid var(--text-secondary);
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  transition: 0.2s;
}
.active .arrow {
  transform: rotate(-135deg);
  margin-top: 4px;
}
.select-options {
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  z-index: 10;
  overflow: hidden;
}
.select-options div {
  padding: 10px 14px;
  font-size: 14px;
  transition: 0.2s;
}
.select-options div:hover {
  background: #f4f6f8;
  color: var(--primary-color);
}

/* ЧЕКБОКСЫ */
.checkbox-group {
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.checkbox-container {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
}
.checkbox-container input {
  position: absolute;
  opacity: 0;
  width: 0;
}
.custom-checkmark {
  flex-shrink: 0;
  height: 18px;
  width: 18px;
  background: var(--bg-input);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  margin-right: 12px;
  margin-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.checkbox-container:hover .custom-checkmark {
  border-color: var(--primary-color);
}
input:checked ~ .custom-checkmark {
  background: var(--primary-color);
  border-color: var(--primary-color);
}
.custom-checkmark::after {
  content: "";
  display: none;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  margin-bottom: 2px;
}
input:checked ~ .custom-checkmark::after {
  display: block;
}
.checkbox-text {
  font-size: 13px;
  line-height: 1.4;
  color: #4a4a4a;
}
.checkbox-text a,
.checkbox-text :deep(a) {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
}

/* КНОПКА */
.submit-btn {
  width: 100%;
  padding: 14px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.submit-btn:hover:not(:disabled) {
  background: var(--primary-hover);
  transform: translateY(-1px);
}
.submit-btn:disabled {
  background: #e1e5eb;
  color: #a0a5ab;
  cursor: not-allowed;
}

.footer-link {
  text-align: center;
  margin-top: 25px;
  font-size: 12px;
  font-weight: 700;
}
.footer-link a {
  color: var(--text-main);
  border-bottom: 2px solid var(--primary-color);
  text-decoration: none;
  margin-left: 4px;
}

/* ОШИБКА */
.error-banner {
  background: #fee2e2;
  color: #dc2626;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 16px;
  text-align: center;
}

/* ЭКРАН ПОДТВЕРЖДЕНИЯ */
.email-sent {
  text-align: center;
  padding: 60px 20px;
}
.email-sent h2 {
  font-size: 24px;
  margin-bottom: 12px;
  color: var(--primary-color);
}
.email-sent p {
  font-size: 16px;
  color: var(--text-secondary);
}
.redirect-timer {
  margin-top: 8px;
  font-size: 14px;
}
.redirect-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 28px;
  background: var(--primary-color);
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: background 0.2s;
}
.redirect-btn:hover {
  background: var(--primary-hover);
}

/* СПИННЕР КНОПКИ */
.btn-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-right: 6px;
  vertical-align: middle;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* АНИМАЦИИ */
.fade-enter-active,
.fade-leave-active {
  transition: 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
