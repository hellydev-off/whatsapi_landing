<template>
  <div class="cont">
    <Header class="mb-120" />
    <main class="main-content">
      <slot />
    </main>
    <Footer class="mt-160" />
  </div>
</template>

<script setup>
import Header from "~/components/layout/header/Header.vue";
import Footer from "~/components/layout/footer/Footer.vue";
</script>

<style scoped>
.cont {
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;

  /* --- Магия здесь --- */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1; /* Заставляет контент занимать всё свободное пространство, толкая футер вниз */
}

.mb-120 {
  margin-bottom: 120px;
}

.mt-160 {
  margin-top: 160px;
}

/* Ваши медиа-запросы остаются без изменений */
@media (max-width: 1250px) {
  .cont {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (max-width: 768px) {
  .cont {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
