
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


export const LayoutFooter: typeof import("../components/layout/footer/Footer.vue")['default']
export const LayoutHeader: typeof import("../components/layout/header/Header.vue")['default']
export const SectionsAbout: typeof import("../components/sections/about/About.vue")['default']
export const SectionsAuthRegister: typeof import("../components/sections/auth/Register.vue")['default']
export const SectionsFaq: typeof import("../components/sections/faq/Faq.vue")['default']
export const SectionsFastStart: typeof import("../components/sections/fastStart/FastStart.vue")['default']
export const SectionsFastStartDocs: typeof import("../components/sections/fastStart/docs/Docs.vue")['default']
export const SectionsFastStartDocsNav: typeof import("../components/sections/fastStart/docs/Nav.vue")['default']
export const SectionsFastStartDocsNavItem: typeof import("../components/sections/fastStart/docs/NavItem.vue")['default']
export const SectionsFeedBackForm: typeof import("../components/sections/feedBackForm/FeedBackForm.vue")['default']
export const SectionsFeedBackFormModal: typeof import("../components/sections/feedBackForm/Modal.vue")['default']
export const SectionsHeroBanner: typeof import("../components/sections/hero/HeroBanner.vue")['default']
export const SectionsIntegrationIntegrations: typeof import("../components/sections/integration/Integrations.vue")['default']
export const SectionsIntegrationUonChat: typeof import("../components/sections/integration/uon/Chat.vue")['default']
export const SectionsIntegrationUonControl: typeof import("../components/sections/integration/uon/Control.vue")['default']
export const SectionsIntegrationUonSupport: typeof import("../components/sections/integration/uon/Support.vue")['default']
export const SectionsIntegrationUonHero: typeof import("../components/sections/integration/uon/UonHero.vue")['default']
export const SectionsIntegrationsSection: typeof import("../components/sections/integrationsSection/IntegrationsSection.vue")['default']
export const SectionsInterface: typeof import("../components/sections/interface/Interface.vue")['default']
export const SectionsOffer: typeof import("../components/sections/offer/Offer.vue")['default']
export const SectionsTariffSpecialConditions: typeof import("../components/sections/tariff/SpecialConditions.vue")['default']
export const SectionsTariff: typeof import("../components/sections/tariff/Tariff.vue")['default']
export const SectionsTariffCalculator: typeof import("../components/sections/tariff/TariffCalculator.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Motion: typeof import("@vueuse/motion")['MotionComponent']
export const MotionGroup: typeof import("@vueuse/motion")['MotionGroupComponent']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyLayoutFooter: LazyComponent<typeof import("../components/layout/footer/Footer.vue")['default']>
export const LazyLayoutHeader: LazyComponent<typeof import("../components/layout/header/Header.vue")['default']>
export const LazySectionsAbout: LazyComponent<typeof import("../components/sections/about/About.vue")['default']>
export const LazySectionsAuthRegister: LazyComponent<typeof import("../components/sections/auth/Register.vue")['default']>
export const LazySectionsFaq: LazyComponent<typeof import("../components/sections/faq/Faq.vue")['default']>
export const LazySectionsFastStart: LazyComponent<typeof import("../components/sections/fastStart/FastStart.vue")['default']>
export const LazySectionsFastStartDocs: LazyComponent<typeof import("../components/sections/fastStart/docs/Docs.vue")['default']>
export const LazySectionsFastStartDocsNav: LazyComponent<typeof import("../components/sections/fastStart/docs/Nav.vue")['default']>
export const LazySectionsFastStartDocsNavItem: LazyComponent<typeof import("../components/sections/fastStart/docs/NavItem.vue")['default']>
export const LazySectionsFeedBackForm: LazyComponent<typeof import("../components/sections/feedBackForm/FeedBackForm.vue")['default']>
export const LazySectionsFeedBackFormModal: LazyComponent<typeof import("../components/sections/feedBackForm/Modal.vue")['default']>
export const LazySectionsHeroBanner: LazyComponent<typeof import("../components/sections/hero/HeroBanner.vue")['default']>
export const LazySectionsIntegrationIntegrations: LazyComponent<typeof import("../components/sections/integration/Integrations.vue")['default']>
export const LazySectionsIntegrationUonChat: LazyComponent<typeof import("../components/sections/integration/uon/Chat.vue")['default']>
export const LazySectionsIntegrationUonControl: LazyComponent<typeof import("../components/sections/integration/uon/Control.vue")['default']>
export const LazySectionsIntegrationUonSupport: LazyComponent<typeof import("../components/sections/integration/uon/Support.vue")['default']>
export const LazySectionsIntegrationUonHero: LazyComponent<typeof import("../components/sections/integration/uon/UonHero.vue")['default']>
export const LazySectionsIntegrationsSection: LazyComponent<typeof import("../components/sections/integrationsSection/IntegrationsSection.vue")['default']>
export const LazySectionsInterface: LazyComponent<typeof import("../components/sections/interface/Interface.vue")['default']>
export const LazySectionsOffer: LazyComponent<typeof import("../components/sections/offer/Offer.vue")['default']>
export const LazySectionsTariffSpecialConditions: LazyComponent<typeof import("../components/sections/tariff/SpecialConditions.vue")['default']>
export const LazySectionsTariff: LazyComponent<typeof import("../components/sections/tariff/Tariff.vue")['default']>
export const LazySectionsTariffCalculator: LazyComponent<typeof import("../components/sections/tariff/TariffCalculator.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyMotion: LazyComponent<typeof import("@vueuse/motion")['MotionComponent']>
export const LazyMotionGroup: LazyComponent<typeof import("@vueuse/motion")['MotionGroupComponent']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
