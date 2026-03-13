<template>
  <NuxtLayout>
    <NuxtPage />
    <Modal @close="close" :isOpen="isOpen" />
  </NuxtLayout>
</template>

<script setup>
import Modal from "./components/sections/feedBackForm/Modal.vue";
import { useModal } from "@/composables/useModal";

const { isOpen, close } = useModal();
</script>

<style>
/* Если не хочешь создавать отдельный CSS файл, напиши стили переходов здесь без scoped */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem); /* Эффект размытия при переходе */
}
</style>
