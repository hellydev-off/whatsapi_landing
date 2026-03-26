import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 100,
        behavior: "smooth",
      };
    }

    return {
      top: 0,
      behavior: "smooth",
    };
  },
};
