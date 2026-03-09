// app/router.options.ts (создай такой файл, если его нет)
import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
        behavior: "smooth", // Плавная прокрутка к верху при переходе
      };
    }
  },
};
