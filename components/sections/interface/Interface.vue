<template>
  <section class="wazzup-interface">
    <h2 class="section-title">
      Интерфейс Ватс<span class="green-title">Апи</span>
    </h2>
    <div class="controls">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="setActive(index)"
        :class="['tab-btn', { active: activeTab === index }]"
      >
        {{ tab.label }}
        <div class="line-loader">
          <div
            class="line-fill"
            :style="{ width: activeTab === index ? progress + '%' : '0%' }"
          ></div>
        </div>
      </button>
    </div>

    <div class="display-area">
      <transition name="fade" mode="out-in">
        <div :key="activeTab" class="image-container">
          <img :src="tabs[activeTab].img" class="main-img" alt="interface" />
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const tabs = [
  { label: "Аккаунты", img: "/interface/accounts.svg" },
  { label: "Рассылки", img: "/interface/mailing.svg" },
];

const activeTab = ref(0);
const progress = ref(0);
let timer = null;
let progressTimer = null;

const startCycle = () => {
  stopCycle();
  progress.value = 0;
  progressTimer = setInterval(() => {
    progress.value += 1;
  }, 50); // 5 сек цикл
  timer = setInterval(() => {
    activeTab.value = activeTab.value === 0 ? 1 : 0;
    progress.value = 0;
  }, 5000);
};

const stopCycle = () => {
  clearInterval(timer);
  clearInterval(progressTimer);
};

const setActive = (index) => {
  activeTab.value = index;
  startCycle();
};

onMounted(startCycle);
onUnmounted(stopCycle);
</script>

<style scoped>
.wazzup-interface {
  width: 100%;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
}

.tab-btn {
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  color: #94a3b8;
  padding: 10px;
  transition: color 0.3s;
  position: relative;
}

.tab-btn.active {
  color: #1e293b;
}

.line-loader {
  width: 100%;
  height: 2px;
  background: #e2e8f0;
  margin-top: 8px;
  border-radius: 2px;
  overflow: hidden;
}

.line-fill {
  height: 100%;
  background: var(--primary-color);
}

.display-area {
  position: relative;
  width: 100%;
}

.main-img {
  width: 100%;
  display: block;
}

/* Стрелки и подписи */
.arrow-box {
  position: absolute;
  pointer-events: none;
  z-index: 10;
}

.handwriting {
  color: var(--primary-color);
  font-size: 16px;
  line-height: 1.2;
  margin: 0;
}

.svg-arrow {
  width: 40px;
  height: 40px;
}

/* Позиционирование стрелок (настроить под ваши svg) */
.arrow-accounts {
  top: 20%;
  left: 5%;
}

.arrow-mailing {
  bottom: 15%;
  right: 10%;
}

/* Анимация смены */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
