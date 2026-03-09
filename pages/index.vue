<template>
  <Frame>
    <HeroBanner class="mb-160" />
    <IntegrationsSection class="mb-160" />
    <FastStart class="mb-160" />
    <Offer class="mb-160" />
    <Tariff />
    <FeedBackForm class="mt-160 mb-160" />
  </Frame>
</template>

<script setup lang="ts">
import Frame from "~/layouts/Frame.vue";
import HeroBanner from "~/components/sections/hero/HeroBanner.vue";
import IntegrationsSection from "~/components/sections/integrationsSection/IntegrationsSection.vue";
import FastStart from "~/components/sections/fastStart/FastStart.vue";
import Offer from "~/components/sections/offer/Offer.vue";
import FeedBackForm from "~/components/sections/feedBackForm/FeedBackForm.vue";
import Tariff from "~/components/sections/tariff/Tariff.vue";
</script>

<style scoped>
.mb-120 {
  margin-bottom: 120px;
}

.mb-160 {
  margin-bottom: 160px;
}

.mt-160 {
  margin-top: 160px;
}
</style>
