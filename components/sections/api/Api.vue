<template>
  <div class="api-container">
    <div class="api-card">
      <header
        class="api-header"
        v-motion
        :initial="{ opacity: 0, y: -40 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      >
        <h1 class="page-title"><span class="green-title">API</span> и цены</h1>
      </header>

      <hr
        class="divider"
        v-motion
        :initial="{ scaleX: 0, opacity: 0 }"
        :visibleOnce="{
          scaleX: 1,
          opacity: 1,
          transition: { delay: 400, duration: 1000 },
        }"
      />

      <section class="mission-section">
        <p
          class="mission-section-text left"
          v-motion
          :initial="{ opacity: 0, x: -60 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: { duration: 800, delay: 200 },
          }"
        >
          Предоставляем API для вашего проекта.
        </p>

        <p
          class="mission-section-text right"
          v-motion
          :initial="{ opacity: 0, x: 60 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: { duration: 800, delay: 400 },
          }"
        >
          Индивидуальное предложение: от <strong>100 рублей</strong> при
          подключении в зависимости от количества пользователей.
        </p>

        <p
          class="mission-section-text left"
          v-motion
          :initial="{ opacity: 0, x: -60 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: { duration: 800, delay: 600 },
          }"
        >
          Свяжитесь с нами и узнайте подробности.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.api-container {
  display: flex;
  justify-content: center;
  color: #2c3e50;
  line-height: 1.6;
  overflow: hidden;
}

.api-card {
  width: 100%;
  border-radius: 24px;
  position: relative;
}

.api-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-title {
  font-size: 2.5rem;
  margin: 0;
}

.green-title {
  color: var(--primary-color);
}

.divider {
  border: 0;
  height: 1px;
  background: #eee;
  margin: 30px 0;
  transform-origin: left;
}

.mission-section {
  font-size: 1.15rem;
  text-align: center;
  margin-bottom: 40px;
  overflow: hidden;
}

.mission-section-text {
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 80px;
  color: #000;
  line-height: 1.2;
}

.right {
  text-align: right;
}
.left {
  text-align: left;
}

@media (max-width: 700px) {
  .mission-section-text {
    font-size: 24px;
    margin-bottom: 40px;
  }
  .page-title {
    font-size: 1.8rem;
  }
}
</style>
