import { withCtx, createVNode, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import Frame from './Frame-BvmEWhWu.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import { A as AboutContacts } from './AboutContacts-BlQURsCn.mjs';
import { u as useSeoMeta } from './composables-BAkOW_Sw.mjs';
import './Header-D7THFmy8.mjs';
import './nuxt-link-0WJAlAXo.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import './virtual_public-A5vfXQ1u.mjs';

const _imports_0 = publicAssetsURL("/integrationsSection/uon_icon.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_motion = resolveDirective("motion");
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-container" }, _attrs))} data-v-295bedcb><div class="about-card" data-v-295bedcb><header${ssrRenderAttrs(mergeProps({
    class: "about-header",
    initial: { opacity: 0, y: -40 },
    visibleOnce: { opacity: 1, y: 0, transition: { duration: 800 } }
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-295bedcb><h1 class="page-title" data-v-295bedcb> О компании Ватс<span class="green-title" data-v-295bedcb>Апи</span></h1><p class="subtitle" data-v-295bedcb> Официальный интегратор мессенджеров для <img${ssrRenderAttr("src", _imports_0)} alt="UON" data-v-295bedcb></p></header><hr${ssrRenderAttrs(_temp0 = mergeProps({
    class: "divider",
    initial: { scaleX: 0, opacity: 0 },
    visibleOnce: {
      scaleX: 1,
      opacity: 1,
      transition: { delay: 400, duration: 1e3 }
    }
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-295bedcb>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}<section class="mission-section" data-v-295bedcb><p${ssrRenderAttrs(mergeProps({
    class: "mission-section-text left",
    initial: { opacity: 0, x: -60 },
    visibleOnce: {
      opacity: 1,
      x: 0,
      transition: { duration: 800, delay: 200 }
    }
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-295bedcb> С 2019 года мы занимаемся интеграцией мессенджеров и соцсетей с CRM, которые помогают взаимодействовать с пользователями в WhatsApp, Telegram, MAX и в других мессенджерах. </p><p${ssrRenderAttrs(mergeProps({
    class: "mission-section-text right",
    initial: { opacity: 0, x: 60 },
    visibleOnce: {
      opacity: 1,
      x: 0,
      transition: { duration: 800, delay: 400 }
    }
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-295bedcb> Мы представляем наши услуги для представителей малого, среднего и крупного бизнеса, агентств и турфирм — размер нашей клиентской базы составляет <strong data-v-295bedcb>3 тысячи человек</strong>. </p><p${ssrRenderAttrs(mergeProps({
    class: "mission-section-text left",
    initial: { opacity: 0, x: -60 },
    visibleOnce: {
      opacity: 1,
      x: 0,
      transition: { duration: 800, delay: 600 }
    }
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-295bedcb> Уже <strong data-v-295bedcb>7 лет</strong> мы работаем и облегчаем коммуникацию с клиентами. </p></section><div class="features-grid" data-v-295bedcb><div${ssrRenderAttrs(mergeProps({
    class: "feature-item",
    initial: { opacity: 0, scale: 0.9, y: 30 },
    visibleOnce: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 600, delay: 600 }
    }
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-295bedcb><svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-295bedcb><path d="M11.7198 14.6287L12.7998 13.5496C13.0111 13.3383 13.1298 13.0516 13.1298 12.7528C13.1298 12.4539 13.0111 12.1672 12.7998 11.9559C12.5884 11.7445 12.3018 11.6258 12.0029 11.6258C11.704 11.6258 11.4174 11.7445 11.206 11.9559L10.126 13.0349L8.71976 11.6287L9.79976 10.5496C10.0111 10.3383 10.1298 10.0516 10.1298 9.75276C10.1298 9.45388 10.0111 9.16723 9.79976 8.95589C9.58842 8.74454 9.30178 8.62581 9.00289 8.62581C8.704 8.62581 8.41736 8.74454 8.20601 8.95589L7.12601 10.0349L5.67195 8.58276C5.46061 8.37142 5.17396 8.25268 4.87508 8.25268C4.57619 8.25268 4.28955 8.37142 4.0782 8.58276C3.86686 8.79411 3.74812 9.08075 3.74812 9.37964C3.74812 9.67852 3.86686 9.96517 4.0782 10.1765L4.40726 10.5037L2.48914 12.4246C1.85625 13.0576 1.5007 13.916 1.5007 14.811C1.5007 15.7061 1.85625 16.5645 2.48914 17.1974L2.7282 17.4356L0.330076 19.8328C0.118732 20.0441 0 20.3307 0 20.6296C0 20.9285 0.118732 21.2152 0.330076 21.4265C0.541421 21.6379 0.828065 21.7566 1.12695 21.7566C1.42584 21.7566 1.71248 21.6379 1.92383 21.4265L4.32101 19.0284L4.55914 19.2674C5.1928 19.899 6.05093 20.2536 6.94555 20.2536C7.84016 20.2536 8.69829 19.899 9.33195 19.2674L11.251 17.3474L11.5801 17.6774C11.7914 17.8888 12.0781 18.0075 12.377 18.0075C12.6758 18.0075 12.9625 17.8888 13.1738 17.6774C13.3852 17.4661 13.5039 17.1795 13.5039 16.8806C13.5039 16.5817 13.3852 16.295 13.1738 16.0837L11.7198 14.6287ZM7.73914 17.6746C7.63462 17.7795 7.51043 17.8627 7.37369 17.9195C7.23694 17.9763 7.09033 18.0055 6.94226 18.0055C6.7942 18.0055 6.64759 17.9763 6.51084 17.9195C6.3741 17.8627 6.24991 17.7795 6.14539 17.6746L4.08008 15.6065C3.9752 15.502 3.89198 15.3778 3.8352 15.2411C3.77842 15.1043 3.74919 14.9577 3.74919 14.8096C3.74919 14.6616 3.77842 14.515 3.8352 14.3782C3.89198 14.2415 3.9752 14.1173 4.08008 14.0128L6.00101 12.0974L9.65726 15.7537L7.73914 17.6746ZM21.4266 0.330887C21.3221 0.226007 21.1979 0.142791 21.0612 0.0860097C20.9244 0.0292286 20.7778 0 20.6298 0C20.4817 0 20.3351 0.0292286 20.1983 0.0860097C20.0616 0.142791 19.9374 0.226007 19.8329 0.330887L17.4329 2.73089L17.1948 2.49182C16.5612 1.86008 15.703 1.50533 14.8084 1.50533C13.9137 1.50533 13.0555 1.86008 12.422 2.49182L10.501 4.40995L10.172 4.07995C9.96061 3.8686 9.67396 3.74987 9.37508 3.74987C9.07619 3.74987 8.78955 3.8686 8.5782 4.07995C8.36686 4.29129 8.24813 4.57794 8.24813 4.87682C8.24813 5.17571 8.36686 5.46236 8.5782 5.6737L16.0782 13.1737C16.2895 13.385 16.5762 13.5038 16.8751 13.5038C17.174 13.5038 17.4606 13.385 17.672 13.1737C17.8833 12.9624 18.002 12.6757 18.002 12.3768C18.002 12.0779 17.8833 11.7913 17.672 11.5799L17.3448 11.2537L19.2657 9.33276C19.8986 8.69983 20.2541 7.84142 20.2541 6.94636C20.2541 6.05129 19.8986 5.19288 19.2657 4.55995L19.0266 4.32182L21.4248 1.92464C21.5292 1.81997 21.6119 1.69575 21.6683 1.55908C21.7247 1.4224 21.7536 1.27596 21.7533 1.12812C21.753 0.980274 21.7236 0.833933 21.6668 0.69746C21.6099 0.560987 21.5267 0.437059 21.422 0.332762L21.4266 0.330887ZM17.6766 7.73714L15.751 9.65995L12.0948 6.0037L14.0157 4.08276C14.1202 3.97788 14.2444 3.89467 14.3812 3.83788C14.5179 3.7811 14.6645 3.75187 14.8126 3.75187C14.9606 3.75187 15.1073 3.7811 15.244 3.83788C15.3807 3.89467 15.5049 3.97788 15.6095 4.08276L17.6776 6.15089C17.7825 6.2554 17.8657 6.3796 17.9225 6.51634C17.9792 6.65309 18.0085 6.7997 18.0085 6.94776C18.0085 7.09583 17.9792 7.24244 17.9225 7.37918C17.8657 7.51593 17.7825 7.64012 17.6776 7.74464L17.6766 7.73714Z" fill="#00e13f" data-v-295bedcb></path></svg><h3 data-v-295bedcb>Простое подключение</h3><p data-v-295bedcb> WhatsApp, Telegram, ВКонтакте и Max к вашей CRM без сложных настроек. </p></div><div${ssrRenderAttrs(mergeProps({
    class: "feature-item",
    initial: { opacity: 0, scale: 0.9, y: 30 },
    visibleOnce: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 600, delay: 800 }
    }
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-295bedcb><svg width="30" height="30" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-295bedcb><path d="M12.75 14.2498C12.75 14.5482 12.6315 14.8343 12.4205 15.0453C12.2095 15.2563 11.9234 15.3748 11.625 15.3748H5.625C5.32663 15.3748 5.04048 15.2563 4.8295 15.0453C4.61853 14.8343 4.5 14.5482 4.5 14.2498C4.5 13.9514 4.61853 13.6653 4.8295 13.4543C5.04048 13.2433 5.32663 13.1248 5.625 13.1248H11.625C11.9234 13.1248 12.2095 13.2433 12.4205 13.4543C12.6315 13.6653 12.75 13.9514 12.75 14.2498ZM11.625 9.37479H5.625C5.32663 9.37479 5.04048 9.49332 4.8295 9.7043C4.61853 9.91528 4.5 10.2014 4.5 10.4998C4.5 10.7982 4.61853 11.0843 4.8295 11.2953C5.04048 11.5063 5.32663 11.6248 5.625 11.6248H11.625C11.9234 11.6248 12.2095 11.5063 12.4205 11.2953C12.6315 11.0843 12.75 10.7982 12.75 10.4998C12.75 10.2014 12.6315 9.91528 12.4205 9.7043C12.2095 9.49332 11.9234 9.37479 11.625 9.37479ZM17.25 3.37479V19.1248C17.25 19.6221 17.0525 20.099 16.7008 20.4506C16.3492 20.8022 15.8723 20.9998 15.375 20.9998H1.875C1.37772 20.9998 0.900806 20.8022 0.549175 20.4506C0.197544 20.099 0 19.6221 0 19.1248V3.37479C0 2.87751 0.197544 2.4006 0.549175 2.04897C0.900806 1.69734 1.37772 1.49979 1.875 1.49979H5.11219C5.5662 1.02569 6.11149 0.64839 6.71521 0.390635C7.31892 0.13288 7.96856 0 8.625 0C9.28144 0 9.93108 0.13288 10.5348 0.390635C11.1385 0.64839 11.6838 1.02569 12.1378 1.49979H15.375C15.8723 1.49979 16.3492 1.69734 16.7008 2.04897C17.0525 2.4006 17.25 2.87751 17.25 3.37479ZM6.02719 4.49979H11.2228C11.1322 3.87542 10.8198 3.30456 10.3428 2.8917C9.86571 2.47884 9.25591 2.25161 8.625 2.25161C7.99409 2.25161 7.38429 2.47884 6.90723 2.8917C6.43017 3.30456 6.11775 3.87542 6.02719 4.49979ZM15 3.74979H13.3678C13.4553 4.1184 13.4997 4.49594 13.5 4.87479V5.62479C13.5 5.92316 13.3815 6.20931 13.1705 6.42029C12.9595 6.63127 12.6734 6.74979 12.375 6.74979H4.875C4.57663 6.74979 4.29048 6.63127 4.0795 6.42029C3.86853 6.20931 3.75 5.92316 3.75 5.62479V4.87479C3.75031 4.49594 3.79467 4.1184 3.88219 3.74979H2.25V18.7498H15V3.74979Z" fill="#00e13f" data-v-295bedcb></path></svg><h3 data-v-295bedcb>Полная история</h3><p data-v-295bedcb> Ни одно слово не пропадет — вся переписка сохраняется в карточке клиента. </p></div></div><p class="legal-info" data-v-295bedcb> WhatsApi 2019–2026  |  ИП Красников Евгений Михайлович  |  ИНН 526019535896  |  ОГРНИП 326527500001626 </p></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/about/About.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const About = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-295bedcb"]]), { __name: "SectionsAbout" });
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "О компании — WhatsApi",
      description: "WhatsApi — официальный интегратор мессенджеров для CRM-систем. Помогаем бизнесу объединять каналы связи и не терять ни одного обращения клиента.",
      ogTitle: "О компании WhatsApi — интегратор мессенджеров для CRM",
      ogDescription: "Официальный интегратор мессенджеров для CRM. Подключаем WhatsApp, Telegram и другие каналы к вашей системе управления клиентами.",
      ogUrl: "https://whatsapi.ru/about"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Frame, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(About, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(AboutContacts, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(About),
              createVNode(AboutContacts)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-CwsXOMQY.mjs.map
