import Markdown from "unplugin-vue-markdown/vite";

export default defineNuxtConfig({
  // Включаем SSR (серверный рендеринг) — это база для отсутствия скачков стилей
  ssr: true,

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: { lang: "ru" },
      titleTemplate: "%s | WhatsApi",
      meta: [
        {
          name: "description",
          content:
            "Интеграция мессенджеров с CRM. Автоматизируйте общение с клиентами, увеличивайте продажи и подписывайте договоры.",
        },
        {
          name: "keywords",
          content:
            "интеграция whatsapp crm, мессенджеры для бизнеса, whatsapp crm интеграция, мессенджеры crm, автоматизация общения с клиентами, u-on crm, crm для бизнеса",
        },
        { name: "robots", content: "index, follow" },
        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "WhatsApi" },
        { property: "og:locale", content: "ru_RU" },
        {
          property: "og:image",
          content: "https://whatsapi.ru/og-image.png",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:image",
          content: "https://whatsapi.ru/og-image.png",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://whatsapi.ru" },
      ],
      script: [
        {
          type: "text/javascript",
          innerHTML: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108234450','ym');
            ym(108234450,'init',{
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              accurateTrackBounce: true,
              trackLinks: true
            });
          `,
        },
      ],
      noscript: [
        {
          innerHTML:
            '<div><img src="https://mc.yandex.ru/watch/108234450" style="position:absolute; left:-9999px;" alt="" /></div>',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      apiAuthUrl: "https://bapi88.apitter.com/api/v1/auth/",
      apiSupportUrl: "https://bapi88.apitter.com/api/v1/support/",
    },
  },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // Главный файл стилей — Nuxt автоматически добавит его в <head>
  css: ["~/assets/css/main.css"],

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
