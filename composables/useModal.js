import { ref } from "vue";

// Выносим в область видимости файла — теперь это Singleton (общее состояние)
const isOpen = ref(false);

export function useModal() {
  const open = () => {
    isOpen.value = true;
    if (process.client) {
      document.body.style.overflow = "hidden";
    }
  };

  const close = () => {
    isOpen.value = false;
    if (process.client) {
      document.body.style.overflow = "";
    }
  };

  return {
    isOpen, // Теперь это одна и та же переменная для всех
    open,
    close,
  };
}
