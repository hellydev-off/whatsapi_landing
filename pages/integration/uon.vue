<template>
  <Frame>
    <UonHero />
    <Control />
    <Chat />
    <Support />
  </Frame>
</template>

<script setup>
import Frame from "~/layouts/Frame.vue";
import UonHero from "~/components/sections/integration/uon/UonHero.vue";
import Control from "~/components/sections/integration/uon/Control.vue";
import Chat from "~/components/sections/integration/uon/Chat.vue";
import Support from "~/components/sections/integration/uon/Support.vue";
</script>

<style scoped></style>
