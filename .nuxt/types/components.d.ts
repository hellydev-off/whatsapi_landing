
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  LayoutFooter: typeof import("../../components/layout/footer/Footer.vue")['default']
  LayoutHeader: typeof import("../../components/layout/header/Header.vue")['default']
  SectionsAbout: typeof import("../../components/sections/about/About.vue")['default']
  SectionsAboutContacts: typeof import("../../components/sections/about/AboutContacts.vue")['default']
  SectionsApi: typeof import("../../components/sections/api/Api.vue")['default']
  SectionsAuthRegister: typeof import("../../components/sections/auth/Register.vue")['default']
  SectionsContacts: typeof import("../../components/sections/contacts/Contacts.vue")['default']
  SectionsFaq: typeof import("../../components/sections/faq/Faq.vue")['default']
  SectionsFastStart: typeof import("../../components/sections/fastStart/FastStart.vue")['default']
  SectionsFastStartDocs: typeof import("../../components/sections/fastStart/docs/Docs.vue")['default']
  SectionsFastStartDocsNav: typeof import("../../components/sections/fastStart/docs/Nav.vue")['default']
  SectionsFastStartDocsNavItem: typeof import("../../components/sections/fastStart/docs/NavItem.vue")['default']
  SectionsFeedBackForm: typeof import("../../components/sections/feedBackForm/FeedBackForm.vue")['default']
  SectionsFeedBackFormModal: typeof import("../../components/sections/feedBackForm/Modal.vue")['default']
  SectionsHeroBanner: typeof import("../../components/sections/hero/HeroBanner.vue")['default']
  SectionsIntegrationIntegrations: typeof import("../../components/sections/integration/Integrations.vue")['default']
  SectionsIntegrationUonChat: typeof import("../../components/sections/integration/uon/Chat.vue")['default']
  SectionsIntegrationUonControl: typeof import("../../components/sections/integration/uon/Control.vue")['default']
  SectionsIntegrationUonSupport: typeof import("../../components/sections/integration/uon/Support.vue")['default']
  SectionsIntegrationUonHero: typeof import("../../components/sections/integration/uon/UonHero.vue")['default']
  SectionsIntegrationsSection: typeof import("../../components/sections/integrationsSection/IntegrationsSection.vue")['default']
  SectionsInterface: typeof import("../../components/sections/interface/Interface.vue")['default']
  SectionsOffer: typeof import("../../components/sections/offer/Offer.vue")['default']
  SectionsTariffSpecialConditions: typeof import("../../components/sections/tariff/SpecialConditions.vue")['default']
  SectionsTariff: typeof import("../../components/sections/tariff/Tariff.vue")['default']
  SectionsTariffCalculator: typeof import("../../components/sections/tariff/TariffCalculator.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  Motion: typeof import("@vueuse/motion")['MotionComponent']
  MotionGroup: typeof import("@vueuse/motion")['MotionGroupComponent']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyLayoutFooter: LazyComponent<typeof import("../../components/layout/footer/Footer.vue")['default']>
  LazyLayoutHeader: LazyComponent<typeof import("../../components/layout/header/Header.vue")['default']>
  LazySectionsAbout: LazyComponent<typeof import("../../components/sections/about/About.vue")['default']>
  LazySectionsAboutContacts: LazyComponent<typeof import("../../components/sections/about/AboutContacts.vue")['default']>
  LazySectionsApi: LazyComponent<typeof import("../../components/sections/api/Api.vue")['default']>
  LazySectionsAuthRegister: LazyComponent<typeof import("../../components/sections/auth/Register.vue")['default']>
  LazySectionsContacts: LazyComponent<typeof import("../../components/sections/contacts/Contacts.vue")['default']>
  LazySectionsFaq: LazyComponent<typeof import("../../components/sections/faq/Faq.vue")['default']>
  LazySectionsFastStart: LazyComponent<typeof import("../../components/sections/fastStart/FastStart.vue")['default']>
  LazySectionsFastStartDocs: LazyComponent<typeof import("../../components/sections/fastStart/docs/Docs.vue")['default']>
  LazySectionsFastStartDocsNav: LazyComponent<typeof import("../../components/sections/fastStart/docs/Nav.vue")['default']>
  LazySectionsFastStartDocsNavItem: LazyComponent<typeof import("../../components/sections/fastStart/docs/NavItem.vue")['default']>
  LazySectionsFeedBackForm: LazyComponent<typeof import("../../components/sections/feedBackForm/FeedBackForm.vue")['default']>
  LazySectionsFeedBackFormModal: LazyComponent<typeof import("../../components/sections/feedBackForm/Modal.vue")['default']>
  LazySectionsHeroBanner: LazyComponent<typeof import("../../components/sections/hero/HeroBanner.vue")['default']>
  LazySectionsIntegrationIntegrations: LazyComponent<typeof import("../../components/sections/integration/Integrations.vue")['default']>
  LazySectionsIntegrationUonChat: LazyComponent<typeof import("../../components/sections/integration/uon/Chat.vue")['default']>
  LazySectionsIntegrationUonControl: LazyComponent<typeof import("../../components/sections/integration/uon/Control.vue")['default']>
  LazySectionsIntegrationUonSupport: LazyComponent<typeof import("../../components/sections/integration/uon/Support.vue")['default']>
  LazySectionsIntegrationUonHero: LazyComponent<typeof import("../../components/sections/integration/uon/UonHero.vue")['default']>
  LazySectionsIntegrationsSection: LazyComponent<typeof import("../../components/sections/integrationsSection/IntegrationsSection.vue")['default']>
  LazySectionsInterface: LazyComponent<typeof import("../../components/sections/interface/Interface.vue")['default']>
  LazySectionsOffer: LazyComponent<typeof import("../../components/sections/offer/Offer.vue")['default']>
  LazySectionsTariffSpecialConditions: LazyComponent<typeof import("../../components/sections/tariff/SpecialConditions.vue")['default']>
  LazySectionsTariff: LazyComponent<typeof import("../../components/sections/tariff/Tariff.vue")['default']>
  LazySectionsTariffCalculator: LazyComponent<typeof import("../../components/sections/tariff/TariffCalculator.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyMotion: LazyComponent<typeof import("@vueuse/motion")['MotionComponent']>
  LazyMotionGroup: LazyComponent<typeof import("@vueuse/motion")['MotionGroupComponent']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
