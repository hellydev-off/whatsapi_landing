<template>
  <section class="control-panel">
    <header class="panel-header">
      <div class="title-group">
        <h2 class="main-title">Контроль общения</h2>
        <p class="subtitle">
          Настройте идеальный путь сообщения для каждого клиента
        </p>
      </div>
    </header>

    <div class="bento-grid">
      <div class="bento-item channels-card">
        <div class="card-info">
          <span class="tag">Доступные каналы</span>
          <h3>Всегда на связи</h3>
        </div>

        <div class="messengers-list">
          <div
            v-for="m in staticMessengers"
            :key="m.name"
            class="m-item"
            :style="{ '--color': m.color }"
          >
            <img class="m-icon" :src="m.icon" alt="" />
            <div class="m-content">
              <span class="m-name">{{ m.name }}</span>
              <span class="m-status">Подключено</span>
            </div>
            <div class="m-dot"></div>
          </div>
        </div>
      </div>

      <div class="bento-item cascade-card">
        <div class="card-info">
          <span class="tag">Умная доставка</span>
          <h3>Каскадная очередь</h3>
        </div>

        <div class="cascade-visual">
          <div class="cascade-track">
            <TransitionGroup name="list" tag="div" class="nodes-wrapper">
              <div
                v-for="(node, index) in cascadeOrder"
                :key="node.id"
                class="cascade-node"
              >
                <div class="node-box" :class="node.id">
                  <img :src="node.icon" alt="" />
                  <span class="node-label">{{ node.name }}</span>
                </div>
                <div
                  v-if="index < cascadeOrder.length - 1"
                  class="node-connector"
                >
                  <div class="arrow-head"></div>
                </div>
              </div>
            </TransitionGroup>
          </div>
        </div>
      </div>
    </div>

    <div class="action-footer">
      <NuxtLink to="/signup">
        <button class="cta-primary">Подключить бесплатно</button>
      </NuxtLink>

      <p class="trial-text">14 дней без ограничений</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const staticMessengers = [
  { name: "Telegram", color: "#0088cc", icon: "/messangers/tg_icon.svg" },
  { name: "WhatsApp", color: "#25d366", icon: "/messangers/ws_icon.svg" },
  { name: "Max", color: "#6366f1", icon: "/messangers/max_logo.svg" },
];

const cascadeOrder = ref([
  { id: "tg", name: "Telegram", icon: "/messangers/tg_icon.svg" },
  { id: "wa", name: "WhatsApp", icon: "/messangers/ws_icon.svg" },
  { id: "max", name: "Max", icon: "/messangers/max_logo.svg" },
]);

const shuffleCascade = () => {
  cascadeOrder.value = [...cascadeOrder.value].sort(() => Math.random() - 0.5);
};

onMounted(() => {
  setInterval(shuffleCascade, 3000);
});
</script>

<style scoped>
.control-panel {
  margin: 0 auto;
  background: #fff;
  height: 100vh;
}

.panel-header {
  margin-bottom: 40px;
}
.main-title {
  font-size: 38px;
  font-weight: 850;
  letter-spacing: -1px;
  margin-bottom: 8px;
}
.subtitle {
  color: #666;
  font-size: 18px;
}

.bento-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 24px;
  margin-bottom: 40px;
}

.bento-item {
  background: var(--gray-color);
  border-radius: 32px;
  padding: 32px;
  display: flex;
  flex-direction: column;
}

.tag {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  color: var(--primary-color);
  letter-spacing: 1px;
  display: block;
  margin-bottom: 8px;
}

.card-info h3 {
  font-size: 24px;
  margin: 0 0 24px 0;
}

.messengers-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.m-item {
  background: #fff;
  padding: 14px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.m-icon {
  font-size: 20px;
  width: 30px;
  text-align: center;
}
.m-name {
  font-weight: 600;
  display: block;
  font-size: 15px;
}
.m-status {
  font-size: 12px;
  color: #999;
}
.m-dot {
  margin-left: auto;
  width: 8px;
  height: 8px;
  background: var(--primary-color);
  border-radius: 50%;
}

.cascade-visual {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nodes-wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.cascade-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
}

.node-box {
  width: 80%;
  padding: 16px;
  background: #fff;
  border-radius: 14px;
  text-align: center;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #eee;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.node-index {
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  font-weight: 800;
  color: #ccc;
}

.node-connector {
  height: 15px;
  width: 2px;
  background: #ddd;
  margin-top: 15px;
  position: relative;
}

.arrow-head {
  position: absolute;
  bottom: -4px;
  left: -3px;
  width: 8px;
  height: 8px;
  border-right: 2px solid #ddd;
  border-bottom: 2px solid #ddd;
  transform: rotate(45deg);
}

.cascade-hint {
  margin-top: 30px;
  font-size: 13px;
  color: #888;
  text-align: center;
  font-style: italic;
}

/* Анимации перемещения (FLIP) */
.list-move {
  transition: transform 0.6s cubic-bezier(0.5, 0, 0.5, 1);
}

/* Футер */
.action-footer {
  text-align: center;
  margin-top: 40px;
}
.cta-primary {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 18px 40px;
  border-radius: 100px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}
.cta-primary:hover {
  background: var(--hover-primary);
  transform: scale(1.03);
}
.trial-text {
  margin-top: 12px;
  color: #999;
  font-size: 14px;
}

@media (max-width: 850px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
}
</style>
