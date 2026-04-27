import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { H as Header } from './Header-ueAueolM.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BsQqtqux.mjs';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-07cc726b><div class="footer-container" data-v-07cc726b><div class="footer-logo-section" data-v-07cc726b>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link-deco",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="logo-cont" data-v-07cc726b${_scopeId}><div class="logo-ru" data-v-07cc726b${_scopeId}><span class="logo-black" data-v-07cc726b${_scopeId}>Ватс</span><span class="logo-green" data-v-07cc726b${_scopeId}>Апи</span></div><div class="logo-eu" data-v-07cc726b${_scopeId}><span class="logo-black-eu" data-v-07cc726b${_scopeId}>Whats</span><span class="logo-green-eu" data-v-07cc726b${_scopeId}>Api</span></div></div>`);
      } else {
        return [
          createVNode("div", { class: "logo-cont" }, [
            createVNode("div", { class: "logo-ru" }, [
              createVNode("span", { class: "logo-black" }, "Ватс"),
              createVNode("span", { class: "logo-green" }, "Апи")
            ]),
            createVNode("div", { class: "logo-eu" }, [
              createVNode("span", { class: "logo-black-eu" }, "Whats"),
              createVNode("span", { class: "logo-green-eu" }, "Api")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer-grid" data-v-07cc726b><div class="footer-column" data-v-07cc726b><h3 data-v-07cc726b>Компания</h3><ul data-v-07cc726b><li data-v-07cc726b>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link-deco",
    to: "/about"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`О компании`);
      } else {
        return [
          createTextVNode("О компании")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-07cc726b>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link-deco",
    to: "/documents"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Документы`);
      } else {
        return [
          createTextVNode("Документы")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="footer-column" data-v-07cc726b><h3 data-v-07cc726b>Информация</h3><ul data-v-07cc726b><li data-v-07cc726b>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link-deco",
    to: "/tariffs"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Тарифы`);
      } else {
        return [
          createTextVNode("Тарифы")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-07cc726b>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link-deco",
    to: "/docs"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`База знаний`);
      } else {
        return [
          createTextVNode("База знаний")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-07cc726b><a href="https://app.whatsapi.ru/" target="_blank" data-v-07cc726b>Личный кабинет</a></li></ul></div></div></div><div class="footer-bottom" data-v-07cc726b><p class="disclaimer" data-v-07cc726b> *Принадлежит компании Meta (признана экстремистской и запрещена в РФ) </p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/footer/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-07cc726b"]]), { __name: "LayoutFooter" });
const _sfc_main = {
  __name: "Frame",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cont" }, _attrs))} data-v-2eaeeeb5>`);
      _push(ssrRenderComponent(Header, { class: "mb-120" }, null, _parent));
      _push(`<main class="main-content" data-v-2eaeeeb5>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, { class: "mt-160" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/Frame.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Frame = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2eaeeeb5"]]);

export { Frame as default };
//# sourceMappingURL=Frame-BFEmLfwY.mjs.map
