<template>
  <section class="support-section">
    <div class="container">
      <h2 class="title">Поддержка на всех этапах</h2>

      <div class="grid">
        <div class="card">
          <div class="icon-wrapper">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <p class="card-text">
            Наша поддержка работает <strong>ежедневно</strong>, без выходных и
            перерывов
          </p>
          <NuxtLink to="/signup">
            <button class="btn btn-primary">Подключить бесплатно</button>
          </NuxtLink>
        </div>

        <div class="card">
          <div class="icon-wrapper">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              ></path>
            </svg>
          </div>
          <p class="card-text">
            Наши специалисты погружаются в вопрос и
            <strong>сразу решают</strong> возникшие задачи
          </p>
          <button @click="openMail" class="btn btn-outline">
            Написать в поддержку
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useModal } from "@/composables/useModal";

const { open } = useModal();

const openMail = () => {
  window.open(`mailto:support@app.whatsapi.ru`, "_blank");
};
</script>

<style scoped>
.support-section {
  padding: 60px 20px;
  background-color: #f9fafb;
  color: #1f2937;
  border-radius: 24px;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 48px;
  letter-spacing: -0.02em;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.card {
  background: #ffffff;
  padding: 40px 32px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  background: #f3f4f6;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: #4b5563;
}

.icon-wrapper svg {
  width: 28px;
  height: 28px;
}

.card-text {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 32px;
  min-height: 54px; /* Чтобы кнопки были на одном уровне */
}

/* Кнопки */
.btn {
  width: 100%;
  padding: 14px 24px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: var(--hover-primary);
}

.btn-outline {
  background-color: #000000;
  color: white;
}

.btn-outline:hover {
  background-color: #262626;
}

@media (max-width: 640px) {
  .title {
    font-size: 1.8rem;
  }

  .card {
    padding: 32px 24px;
  }
}
</style>
