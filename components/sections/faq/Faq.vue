<template>
  <section class="faq">
    <div class="container">
      <h2 class="faq__title">Часто задаваемые вопросы</h2>

      <div class="faq__list">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="faq__item"
          :class="{ 'faq__item--active': activeIndex === index }"
        >
          <button class="faq__question" @click="toggleItem(index)">
            <span>{{ item.question }}</span>
            <span class="faq__icon">
              {{ activeIndex === index ? "−" : "+" }}
            </span>
          </button>

          <div class="faq__answer" v-show="activeIndex === index">
            <div class="faq__answer-content">
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref(null);

const faqItems = ref([
  {
    question: "Какая стоимость?",
    answer:
      "Стоимость зависит от выбранного тарифа и объема сообщений. Мы подберем оптимальный вариант под ваши задачи.",
  },
  {
    question: "Для чего нужна каскадная отправка?",
    answer:
      "Каскадная отправка позволяет экономить бюджет: сообщение сначала отправляется в дешевый канал (например, мессенджер), и только если оно не доставлено, переотправляется через SMS.",
  },
  {
    question: "В списке нет нужной CRM, могу ли я подключить ваш сервис?",
    answer:
      "Да, вы можете использовать наше открытое API для интеграции с любой самописной или редкой CRM-системой.",
  },
  {
    question: "Есть ли скидки при подключении нескольких номеров?",
    answer:
      "Да, при подключении более 3-х номеров действуют индивидуальные условия и прогрессивная шкала скидок.",
  },
]);

const toggleItem = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
.faq {
  /* padding: 60px 0; */
  color: #1a1a1a;
}

.faq__title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
}

.faq__list {
  max-width: 800px;
}

.faq__item {
  border-top: 1px solid #e0e0e0;
}

.faq__item:last-child {
  border-bottom: 1px solid #e0e0e0;
}

.faq__question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  transition: color 0.3s;
}

.faq__question:hover {
  color: #555;
}

.faq__icon {
  font-size: 24px;
  line-height: 1;
  margin-left: 20px;
}

.faq__answer {
  overflow: hidden;
  transition: all 0.3s ease-out;
}

.faq__answer-content {
  padding-bottom: 24px;
  color: #666;
  line-height: 1.6;
}

/* Опционально: анимация появления */
.faq__item--active .faq__question {
  color: #000;
}
</style>
