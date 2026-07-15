import { withCtx, createVNode, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate } from 'vue/server-renderer';
import Frame from './Frame-Cgxcj7h0.mjs';
import { _ as _export_sfc } from './server.mjs';
import { A as AboutContacts } from './AboutContacts-BlQURsCn.mjs';
import { u as useSeoMeta } from './composables-BAkOW_Sw.mjs';
import './Header-YlFDdJey.mjs';
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
import '../routes/renderer.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_motion = resolveDirective("motion");
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "api-container" }, _attrs))} data-v-7a4746f6><div class="api-card" data-v-7a4746f6><header${ssrRenderAttrs(mergeProps({
    class: "api-header",
    initial: { opacity: 0, y: -40 },
    visibleOnce: { opacity: 1, y: 0, transition: { duration: 800 } }
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-7a4746f6><h1 class="page-title" data-v-7a4746f6><span class="green-title" data-v-7a4746f6>TouchApi</span> и цены </h1></header><hr${ssrRenderAttrs(_temp0 = mergeProps({
    class: "divider",
    initial: { scaleX: 0, opacity: 0 },
    visibleOnce: {
      scaleX: 1,
      opacity: 1,
      transition: { delay: 400, duration: 1e3 }
    }
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-7a4746f6>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}<section class="mission-section" data-v-7a4746f6><p${ssrRenderAttrs(mergeProps({
    class: "mission-section-text left",
    initial: { opacity: 0, x: -60 },
    visibleOnce: {
      opacity: 1,
      x: 0,
      transition: { duration: 800, delay: 200 }
    }
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-7a4746f6> Предоставляем TouchApi для вашего проекта. </p><p${ssrRenderAttrs(mergeProps({
    class: "mission-section-text right",
    initial: { opacity: 0, x: 60 },
    visibleOnce: {
      opacity: 1,
      x: 0,
      transition: { duration: 800, delay: 400 }
    }
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-7a4746f6> Индивидуальное предложение: от <strong data-v-7a4746f6>100 рублей</strong> при подключении в зависимости от количества пользователей. </p><p${ssrRenderAttrs(mergeProps({
    class: "mission-section-text left",
    initial: { opacity: 0, x: -60 },
    visibleOnce: {
      opacity: 1,
      x: 0,
      transition: { duration: 800, delay: 600 }
    }
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-7a4746f6> Свяжитесь с нами и узнайте подробности. </p></section></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/api/Api.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Api = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7a4746f6"]]), { __name: "SectionsApi" });
const _sfc_main = {
  __name: "api",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "API и цены — WhatsApi",
      description: "WhatsApi предоставляет API для интеграции мессенджеров. Индивидуальное предложение от 100 рублей в зависимости от количества пользователей.",
      ogTitle: "API и цены — WhatsApi",
      ogDescription: "Подключите API WhatsApi к вашему проекту. Гибкое ценообразование от 100 рублей.",
      ogUrl: "https://whatsapi.ru/api"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Frame, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Api, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(AboutContacts, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Api),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/api.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=api-DnFk0q7s.mjs.map
