<script setup>
import { ref, watch } from "vue";
import landingData from "~/assets/data/content.json";

const { header } = landingData;

const isMenuOpen = ref(false);
const activeDropdown = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  activeDropdown.value = null;
};

const toggleDropdown = (index) => {
  activeDropdown.value = activeDropdown.value === index ? null : index;
};

// Блокировка скролла при открытом меню
watch(isMenuOpen, (val) => {
  if (val) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <NuxtLink class="link-deco" to="/">
          <div class="logo-cont">
            <div class="logo-ru">
              <span class="logo-black">Ватс</span
              ><span class="logo-green">Апи</span>
            </div>
            <div class="logo-eu">
              <span class="logo-black-eu">Whats</span
              ><span class="logo-green-eu">Api</span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div
        class="menu-overlay"
        :class="{ 'menu-overlay--active': isMenuOpen }"
        @click="toggleMenu"
      ></div>

      <nav class="nav" :class="{ 'nav--open': isMenuOpen }">
        <button
          class="close-menu"
          @click="toggleMenu"
          aria-label="Закрыть меню"
        >
          &times;
        </button>
        <ul class="nav-list">
          <li
            v-for="(item, index) in header.pages"
            :key="index"
            class="nav-wrapper"
          >
            <NuxtLink
              v-if="!item.isList"
              :to="item.to"
              class="nav-item"
              @click="isMenuOpen = false"
            >
              {{ item.page }}
            </NuxtLink>

            <div
              v-else
              class="dropdown-container"
              @mouseenter="activeDropdown = index"
              @mouseleave="activeDropdown = null"
            >
              <div
                class="nav-item dropdown-trigger"
                @click="toggleDropdown(index)"
              >
                {{ item.page }}
                <span
                  class="arrow"
                  :class="{ 'arrow--rotate': activeDropdown === index }"
                  >▼</span
                >
              </div>

              <div
                class="dropdown-menu"
                :class="{
                  'dropdown-menu--open': activeDropdown === index,
                  'mega-menu': item.page === 'Интеграции',
                }"
              >
                <div
                  v-for="(subItem, subIndex) in item.list"
                  :key="subIndex"
                  class="dropdown-item-slot"
                >
                  <NuxtLink
                    v-if="subItem.available !== false"
                    :to="subItem.to"
                    class="dropdown-link"
                    @click="isMenuOpen = false"
                  >
                    <img
                      v-if="subItem.icon"
                      :src="subItem.icon"
                      class="menu-icon"
                    />
                    <div class="menu-content">
                      <span class="menu-title">{{ subItem.page }}</span>
                      <span v-if="subItem.desc" class="menu-desc">{{
                        subItem.desc
                      }}</span>
                    </div>
                  </NuxtLink>

                  <div v-else class="dropdown-link dropdown-link--disabled">
                    <img
                      v-if="subItem.icon"
                      :src="subItem.icon"
                      class="menu-icon grayscale"
                    />
                    <div class="menu-content">
                      <span class="menu-title">
                        {{ subItem.page }}
                        <span class="badge-soon">Скоро</span>
                      </span>
                      <span v-if="subItem.desc" class="menu-desc">{{
                        subItem.desc
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div class="mobile-actions">
          <NuxtLink class="link-deco" to="/signup" @click="isMenuOpen = false">
            <button class="btn btn-primary">
              {{ header.buttons.actions }}
            </button>
          </NuxtLink>
          <a href="https://app.whatsapi.ru/" class="link-deco">
            <button class="btn btn-outline">
              {{ header.buttons.signin }}
            </button>
          </a>
        </div>
      </nav>

      <div class="actions">
        <NuxtLink class="link-deco" to="/signup">
          <button class="btn btn-primary">
            {{ header.buttons.actions }}
          </button>
        </NuxtLink>

        <a href="https://app.whatsapi.ru/" class="link-deco">
          <button class="btn btn-outline">
            {{ header.buttons.signin }}
          </button>
        </a>

        <button
          class="burger"
          @click="toggleMenu"
          :class="{ 'is-active': isMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 2000;
  padding: 16px 0px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}

.logo {
  font-size: 32px;
  font-weight: 700;
  position: relative;
  z-index: 10;
  text-decoration: none;
}

.logo-cont {
  display: flex;
  flex-direction: column;
  line-height: 1; /* Убираем лишние отступы строк */
  user-select: none;
}

.logo-ru {
  font-size: 28px; /* Чуть уменьшил, чтобы не было слишком громоздко */
  font-weight: 800;
  letter-spacing: -0.5px;
  margin-bottom: -2px; /* Легкое притяжение нижней строки */
}

.logo-eu {
  font-size: 14px; /* EU версия обычно делается как подзаголовок */
  font-weight: 600;
  text-transform: uppercase; /* Делает вид более "брендовым" и аккуратным */
  letter-spacing: 1.2px;
  opacity: 0.8; /* Делает вторую строку визуально легче */
  display: flex;
  justify-content: flex-start;
}

.logo-black,
.logo-black-eu {
  color: #1a1a1a;
}

.logo-green,
.logo-green-eu {
  color: #25d366;
}
.link-deco {
  text-decoration: none;
  color: black;
}

/* --- Навигация Desktop --- */
.nav-list {
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav-item {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;
  cursor: pointer;
  padding: 10px 0;
}

.nav-item:hover {
  color: #25d366;
}

.close-menu {
  display: block; /* Показываем только на мобилках */
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 40px; /* Размер крестика */
  line-height: 1;
  color: #333;
  cursor: pointer;
  padding: 10px;
  z-index: 1100;
}

@media (min-width: 1201px) {
  .dropdown-container {
    position: relative;
  }

  .close-menu {
    display: none;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(15px);
    background: #fff;
    min-width: 260px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    padding: 20px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 100;
  }

  /* Стиль Мега-меню (как на скрине) */
  .mega-menu {
    display: grid;
    grid-template-columns: repeat(3, 300px); /* 3 колонки */
    gap: 10px;
    padding: 25px;
    /* Центрирование относительно экрана, если меню слишком широкое */
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
  }

  .dropdown-container:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }

  .dropdown-link {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px;
    color: #444;
    text-decoration: none;
    border-radius: 12px;
    transition: all 0.2s ease;
  }

  .dropdown-link:hover:not(.dropdown-link--disabled) {
    background: #f7f9fb;
  }

  /* Иконки и текст внутри меню */
  .menu-icon {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    object-fit: contain;
  }

  .menu-content {
    display: flex;
    flex-direction: column;
  }

  .menu-title {
    font-size: 15px;
    font-weight: 600;
    color: #1a1a1a;
    line-height: 1.2;
  }

  .menu-desc {
    font-size: 12px;
    color: #888;
    margin-top: 4px;
  }

  /* Состояние "Скоро" */
  .dropdown-link--disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  .grayscale {
    filter: grayscale(1);
  }

  .badge-soon {
    font-size: 10px;
    background: #f0f0f0;
    color: #999;
    padding: 2px 6px;
    border-radius: 4px;
    margin-left: 5px;
    text-transform: uppercase;
  }
}

/* --- Мобильное меню (Side Drawer) --- */
@media (max-width: 1200px) {
  .nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 320px;
    height: 100vh;
    background: white;
    padding: 100px 30px 40px;
    transform: translateX(100%);
    transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    z-index: 1050;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .nav--open {
    transform: translateX(0);
  }

  .nav-list {
    flex-direction: column;
    gap: 15px;
  }

  .nav-item {
    font-size: 20px;
    width: 100%;
    justify-content: space-between;
  }

  .dropdown-menu {
    width: 100%;
    display: none;
    padding: 10px 0;
    list-style: none;
  }

  .dropdown-menu--open {
    display: block;
  }

  .dropdown-link {
    display: flex;
    gap: 10px;
    padding: 10px;
    font-size: 16px;
    text-decoration: none;
    color: #666;
  }

  .menu-icon {
    width: 24px;
    height: 24px;
  }
  .menu-desc {
    display: none;
  } /* Скрываем описания на мобилке для компактности */

  .burger {
    display: flex;
    flex-direction: column;
    gap: 6px;
    z-index: 1060;
    background: none;
    border: none;
    cursor: pointer;
  }

  .burger span {
    width: 30px;
    height: 3px;
    background: #333;
    transition: 0.3s;
    border-radius: 2px;
  }

  .burger.is-active span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }
  .burger.is-active span:nth-child(2) {
    opacity: 0;
  }
  .burger.is-active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
}

/* --- Кнопки --- */
.actions {
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 10;
}

.btn {
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.btn-primary {
  background: #25d366;
  color: white;
  border: none;
}
.btn-outline {
  background: transparent;
  color: #25d366;
  border: 2px solid #25d366;
}

@media (max-width: 600px) {
  .actions .btn-outline,
  .actions .btn-primary {
    display: none;
  }
  .nav {
    width: 85%;
  }
}

/* Кнопки внутри мобильного меню */
.mobile-actions {
  display: none;
}

@media (max-width: 1200px) {
  .mobile-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #e1e5eb;
  }
  .mobile-actions .btn {
    width: 100%;
    text-align: center;
  }
}

.arrow {
  font-size: 9px;
  transition: transform 0.3s ease;
}

.arrow--rotate {
  transform: rotate(180deg);
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 1040;
}

.menu-overlay--active {
  opacity: 1;
  visibility: visible;
}
</style>
