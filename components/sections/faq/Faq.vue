<template>
  <section class="faq">
    <div class="faq__container">
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

          <transition name="fade">
            <div class="faq__answer" v-show="activeIndex === index">
              <div class="faq__answer-content">
                {{ item.answer }}
              </div>
            </div>
          </transition>
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
      "Подробное описание сервисов и цены представлены в разделе «Тарифы». Действует система скидок при одновременной оплате нескольких каналов.",
  },
  {
    question: "Сколько длится тестовый период?",
    answer: "14 дней. Доступен полный функционал без ограничений.",
  },
  {
    question: "Можно ли переписываться с телефона?",
    answer:
      "Да. Сообщения синхронизируются: ответил с телефона – запись появится в CRM, ответил из CRM – клиент увидит сообщение в мессенджере. История не теряется.",
  },
  {
    question: "Сколько номеров можно подключить?",
    answer:
      "Любое количество. Ограничений нет. Подключайте один номер или сто – платите только за те, которые реально используете.",
  },
  {
    question: "Нужно ли держать телефон включенным постоянно?",
    answer:
      "Нет. Телефон может быть выключен – сообщения всё равно придут в CRM.",
  },
  {
    question: "Есть ограничения по количеству сообщений?",
    answer:
      "Нет. Тарифы ограничены только количеством подключенных номеров, не количеством сообщений.",
  },
  {
    question: "Можно ли вам позвонить?",
    answer:
      "Созвон не предусмотрен – процесс подключения полностью автоматический. После регистрации вы сразу получаете доступ к личному кабинету и настраиваете интеграцию самостоятельно за 5-10 минут. Если возникнут вопросы – пишите на почту или в чат, отвечаем быстро и со скриншотами. Такой формат удобнее: у вас остаётся история переписки с решением.",
  },
]);

const toggleItem = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
.faq {
  width: 100%;
  padding: 60px 0;
  color: #1a1a1a;
}

.faq__container {
  width: 100%;
  /* Добавляем внутренние отступы, чтобы текст не прилипал к краям экрана на мобильных */

  box-sizing: border-box;
}

.faq__title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: left;
}

.faq__list {
  /* Убрали max-width: 800px; теперь список тянется на всю доступную ширину */
  width: 100%;
}

.faq__item {
  border-top: 1px solid #e0e0e0;
  width: 100%;
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
}

.faq__answer-content {
  padding-bottom: 24px;
  color: #666;
  line-height: 1.6;
  /* Можно ограничить ширину самого текста ответа для удобства чтения на сверхшироких мониторах */
  max-width: 1200px;
}

.faq__item--active .faq__question {
  color: #000;
}

/* Простая анимация появления */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
