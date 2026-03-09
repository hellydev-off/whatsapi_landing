import Markdown from "unplugin-vue-markdown/vite";

export default defineNuxtConfig({
  // Включаем SSR (серверный рендеринг) — это база для отсутствия скачков стилей
  ssr: true,

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // Главный файл стилей — Nuxt автоматически добавит его в <head>
  css: ["~/assets/css/main.css"],

  // Настройки экспериментальных функций для ускорения загрузки CSS
  experimental: {
    // Инлайнит CSS прямо в HTML-ответ сервера (убирает лишний запрос за файлом)
    inlineSSRStyles: true,
  },

  extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".vue", ".md"],

  vite: {
    // Оптимизация сборки CSS
    build: {
      cssCodeSplit: true, // Разделяет CSS по компонентам, чтобы не грузить лишнее
    },
    plugins: [
      Markdown({
        markdownItOptions: {
          html: true,
          linkify: true,
          typographer: true,
        },
      }),
    ],
    vue: {
      include: [/\.vue$/, /\.md$/],
    },
  },

  modules: ["@vueuse/motion/nuxt"],

  motion: {
    directives: {
      "pop-in": {
        initial: {
          scale: 0,
          opacity: 0,
        },
        enter: {
          scale: 1,
          opacity: 1,
          transition: {
            duration: 400,
          },
        },
      },
    },
  },
});
