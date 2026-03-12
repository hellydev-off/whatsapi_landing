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

const goToExternalSite = () => {
  // Аналог нажатия на ссылку
  window.location.href = "https://another-site.com";

  // Или открыть в новой вкладке
  // window.open("https://another-site.com", "_blank");
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
          <span class="logo-black">Ватс</span
          ><span class="logo-green">Апи</span>
        </NuxtLink>
      </div>

      <div
        class="menu-overlay"
        :class="{ 'menu-overlay--active': isMenuOpen }"
        @click="toggleMenu"
      ></div>

      <nav class="nav" :class="{ 'nav--open': isMenuOpen }">
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

              <ul
                class="dropdown-menu"
                :class="{ 'dropdown-menu--open': activeDropdown === index }"
              >
                <li v-for="(subItem, subIndex) in item.list" :key="subIndex">
                  <NuxtLink
                    :to="subItem.to"
                    class="dropdown-link"
                    @click="isMenuOpen = false"
                  >
                    {{ subItem.page }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
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
  margin-top: 20px;
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

.logo-green {
  color: var(--primary-color);
}

.link-deco {
  text-decoration: none;
  color: black;
}

/* --- Навигация Desktop --- */
.nav-list {
  display: flex;
  list-style: none;
  gap: 40px;
}

.nav-item {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;
  cursor: pointer;
}

.nav-item:hover {
  color: var(--hover-primary);
}

@media (min-width: 1201px) {
  .dropdown-container {
    position: relative;
    padding-bottom: 10px;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(15px);
    background: #fff;
    min-width: 260px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
    border-radius: 16px;
    padding: 15px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    list-style: none;
    z-index: 100;
  }

  .dropdown-container:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }

  .dropdown-link {
    display: block;
    padding: 14px 20px;
    color: #444;
    text-decoration: none;
    font-size: 17px;
    border-radius: 10px;
    transition: all 0.2s ease;
  }

  .dropdown-link:hover {
    background: #f0fff4;
    color: var(--hover-primary);
    padding-left: 25px;
  }
}

/* --- Бургер и Overlay --- */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
  z-index: 1040;
}

.menu-overlay--active {
  opacity: 1;
  visibility: visible;
}

/* ИСПРАВЛЕНИЕ: Скрываем бургер на десктопе по умолчанию */
.burger {
  display: none;
  background: none;
  border: none;
  position: relative;
  /* Бургер должен быть выше оверлея (1040) и мобильного меню (1050), чтобы его можно было закрыть */
  z-index: 1060;
  cursor: pointer;
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
    z-index: 1050; /* Меню теперь поверх хедера */
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
    gap: 20px;
  }

  .nav-item {
    font-size: 22px;
    width: 100%;
    justify-content: space-between;
  }

  .dropdown-menu {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition:
      max-height 0.4s ease,
      padding 0.3s ease;
    background: #f9f9f9;
    border-radius: 10px;
    list-style: none;
    padding: 0;
  }

  .dropdown-menu--open {
    max-height: 1000px;
    padding: 10px 0;
    margin-top: 10px;
  }

  .dropdown-link {
    padding: 12px 20px;
    display: block;
    font-size: 18px;
    text-decoration: none;
    color: #666;
  }

  /* ИСПРАВЛЕНИЕ: Показываем бургер только на экранах < 1200px */
  .burger {
    display: flex;
    flex-direction: column;
    gap: 6px;
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
  gap: 15px;
  position: relative;
  /* ИСПРАВЛЕНИЕ: Убрал z-index: 1100. Теперь кнопки не будут торчать поверх открытого меню */
  z-index: 10;
}

.btn {
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.btn:active {
  transform: scale(0.95);
}

.btn-primary {
  background: var(--primary-color);
  color: white;
  border: none;
}
.btn-outline {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

@media (max-width: 600px) {
  .btn-outline {
    display: none;
  }
  .nav {
    width: 85%;
  }
}
@media (max-width: 450px) {
  .btn-primary {
    display: none;
  }
}
.arrow {
  font-size: 10px;
  transition: transform 0.3s ease;
  margin-left: auto;
}

.arrow--rotate {
  transform: rotate(180deg);
}
</style>
