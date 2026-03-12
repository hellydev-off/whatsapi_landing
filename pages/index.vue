<template>
  <Frame>
    <HeroBanner class="mb-160" />
    <IntegrationsSection class="mb-160" />
    <Interface class="mb-160" />
    <FastStart class="mb-160" />
    <Offer class="mb-160" />

    <!-- <Tariff class="mb-100" /> -->
    <!-- <TariffCalculator class="mb-100" /> -->
    <!-- <SpecialConditions class="mb-160" /> -->
    <Faq class="mb-160" />
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
import TariffCalculator from "~/components/sections/tariff/TariffCalculator.vue";
import Tariff from "~/components/sections/tariff/Tariff.vue";
import Interface from "~/components/sections/interface/Interface.vue";
import Faq from "~/components/sections/faq/Faq.vue";
import SpecialConditions from "~/components/sections/tariff/SpecialConditions.vue";
</script>

<style scoped>
.mb-120 {
  margin-bottom: 120px;
}

.mb-160 {
  margin-bottom: 160px;
}

.mb-100 {
  margin-bottom: 100px;
}

.mt-160 {
  margin-top: 160px;
}
</style>
