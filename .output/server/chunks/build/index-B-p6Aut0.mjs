import { defineComponent, withCtx, createVNode, resolveDirective, mergeProps, unref, withDirectives, openBlock, createBlock, createTextVNode, toDisplayString, ref, reactive, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import Frame from './Frame-DsM_uN0w.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BsQqtqux.mjs';
import { l as landingData } from './Header-BvuKxpWQ.mjs';
import { _ as _export_sfc, d as _imports_0$1, b as useRuntimeConfig } from './server.mjs';
import { u as useSeoMeta } from './composables-OmIBIWah.mjs';
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

const _imports_0 = "" + __buildAssetsURL("herobanner.C5J9b4h4.svg");
const _sfc_main$7 = {
  __name: "SectionsHeroBanner",
  __ssrInlineRender: true,
  setup(__props) {
    const { hero } = landingData;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section" }, _attrs))} data-v-c54f72f9><div class="hero-content" data-v-c54f72f9><h1${ssrRenderAttrs(mergeProps({
        class: "hero-title",
        initial: { opacity: 0, y: 50 },
        enter: { opacity: 1, y: 0, transition: { duration: 600 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-c54f72f9>${unref(hero).title ?? ""}</h1><p${ssrRenderAttrs(mergeProps({
        class: "hero-description",
        initial: { opacity: 0, y: 30 },
        enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-c54f72f9>${ssrInterpolate(unref(hero).description)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        initial: { opacity: 0, scale: 0.9 },
        enter: {
          opacity: 1,
          scale: 1,
          transition: { duration: 400, delay: 400 }
        },
        hovered: { scale: 1.05 },
        tapped: { scale: 0.95 },
        class: "link-deco",
        to: "/tariffs"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${ssrRenderAttrs(mergeProps({
              class: "hero-button",
              initial: { opacity: 0, scale: 0.9 },
              enter: {
                opacity: 1,
                scale: 1,
                transition: { duration: 400, delay: 400 }
              },
              hovered: { scale: 1.05 },
              tapped: { scale: 0.95 }
            }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-c54f72f9${_scopeId}>${ssrInterpolate(unref(hero).button.text)} <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c54f72f9${_scopeId}><g clip-path="url(#clip0_2208_1456)" data-v-c54f72f9${_scopeId}><path d="M18.656 11.7478L13.9798 10.0237L12.2519 5.34375C12.1198 4.98542 11.881 4.67621 11.5677 4.45781C11.2544 4.2394 10.8817 4.12231 10.4998 4.12231C10.1178 4.12231 9.74511 4.2394 9.43181 4.45781C9.1185 4.67621 8.87969 4.98542 8.74757 5.34375L7.02351 10.0237L2.34351 11.7478C1.98518 11.8799 1.67597 12.1187 1.45757 12.432C1.23916 12.7454 1.12207 13.1181 1.12207 13.5C1.12207 13.8819 1.23916 14.2546 1.45757 14.568C1.67597 14.8813 1.98518 15.1201 2.34351 15.2522L7.01976 16.9763L8.74757 21.6562C8.87969 22.0146 9.1185 22.3238 9.43181 22.5422C9.74511 22.7606 10.1178 22.8777 10.4998 22.8777C10.8817 22.8777 11.2544 22.7606 11.5677 22.5422C11.881 22.3238 12.1198 22.0146 12.2519 21.6562L13.976 16.98L18.656 15.2522C19.0143 15.1201 19.3236 14.8813 19.542 14.568C19.7604 14.2546 19.8774 13.8819 19.8774 13.5C19.8774 13.1181 19.7604 12.7454 19.542 12.432C19.3236 12.1187 19.0143 11.8799 18.656 11.7478ZM12.7141 15.0441C12.5614 15.1003 12.4228 15.1891 12.3077 15.3042C12.1926 15.4192 12.1038 15.5579 12.0476 15.7106L10.4998 19.9012L8.9557 15.7106C8.89942 15.5579 8.81068 15.4192 8.6956 15.3042C8.58052 15.1891 8.44184 15.1003 8.28913 15.0441L4.09851 13.5L8.28913 11.9559C8.44184 11.8997 8.58052 11.8109 8.6956 11.6958C8.81068 11.5808 8.89942 11.4421 8.9557 11.2894L10.4998 7.09875L12.0438 11.2894C12.1001 11.4421 12.1888 11.5808 12.3039 11.6958C12.419 11.8109 12.5577 11.8997 12.7104 11.9559L16.901 13.5L12.7141 15.0441ZM13.1248 3.75C13.1248 3.45163 13.2433 3.16548 13.4543 2.9545C13.6652 2.74353 13.9514 2.625 14.2498 2.625H15.3748V1.5C15.3748 1.20163 15.4933 0.915483 15.7043 0.704505C15.9152 0.493526 16.2014 0.375 16.4998 0.375C16.7981 0.375 17.0843 0.493526 17.2953 0.704505C17.5062 0.915483 17.6248 1.20163 17.6248 1.5V2.625H18.7498C19.0481 2.625 19.3343 2.74353 19.5453 2.9545C19.7562 3.16548 19.8748 3.45163 19.8748 3.75C19.8748 4.04837 19.7562 4.33452 19.5453 4.5455C19.3343 4.75647 19.0481 4.875 18.7498 4.875H17.6248V6C17.6248 6.29837 17.5062 6.58452 17.2953 6.7955C17.0843 7.00647 16.7981 7.125 16.4998 7.125C16.2014 7.125 15.9152 7.00647 15.7043 6.7955C15.4933 6.58452 15.3748 6.29837 15.3748 6V4.875H14.2498C13.9514 4.875 13.6652 4.75647 13.4543 4.5455C13.2433 4.33452 13.1248 4.04837 13.1248 3.75ZM23.6248 8.25C23.6248 8.54837 23.5062 8.83452 23.2953 9.0455C23.0843 9.25647 22.7981 9.375 22.4998 9.375H22.1248V9.75C22.1248 10.0484 22.0062 10.3345 21.7953 10.5455C21.5843 10.7565 21.2981 10.875 20.9998 10.875C20.7014 10.875 20.4152 10.7565 20.2043 10.5455C19.9933 10.3345 19.8748 10.0484 19.8748 9.75V9.375H19.4998C19.2014 9.375 18.9152 9.25647 18.7043 9.0455C18.4933 8.83452 18.3748 8.54837 18.3748 8.25C18.3748 7.95163 18.4933 7.66548 18.7043 7.4545C18.9152 7.24353 19.2014 7.125 19.4998 7.125H19.8748V6.75C19.8748 6.45163 19.9933 6.16548 20.2043 5.9545C20.4152 5.74353 20.7014 5.625 20.9998 5.625C21.2981 5.625 21.5843 5.74353 21.7953 5.9545C22.0062 6.16548 22.1248 6.45163 22.1248 6.75V7.125H22.4998C22.7981 7.125 23.0843 7.24353 23.2953 7.4545C23.5062 7.66548 23.6248 7.95163 23.6248 8.25Z" fill="white" data-v-c54f72f9${_scopeId}></path></g><defs data-v-c54f72f9${_scopeId}><clipPath id="clip0_2208_1456" data-v-c54f72f9${_scopeId}><rect width="24" height="24" fill="white" data-v-c54f72f9${_scopeId}></rect></clipPath></defs></svg></button>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("button", {
                class: "hero-button",
                initial: { opacity: 0, scale: 0.9 },
                enter: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 400, delay: 400 }
                },
                hovered: { scale: 1.05 },
                tapped: { scale: 0.95 }
              }, [
                createTextVNode(toDisplayString(unref(hero).button.text) + " ", 1),
                (openBlock(), createBlock("svg", {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("g", { "clip-path": "url(#clip0_2208_1456)" }, [
                    createVNode("path", {
                      d: "M18.656 11.7478L13.9798 10.0237L12.2519 5.34375C12.1198 4.98542 11.881 4.67621 11.5677 4.45781C11.2544 4.2394 10.8817 4.12231 10.4998 4.12231C10.1178 4.12231 9.74511 4.2394 9.43181 4.45781C9.1185 4.67621 8.87969 4.98542 8.74757 5.34375L7.02351 10.0237L2.34351 11.7478C1.98518 11.8799 1.67597 12.1187 1.45757 12.432C1.23916 12.7454 1.12207 13.1181 1.12207 13.5C1.12207 13.8819 1.23916 14.2546 1.45757 14.568C1.67597 14.8813 1.98518 15.1201 2.34351 15.2522L7.01976 16.9763L8.74757 21.6562C8.87969 22.0146 9.1185 22.3238 9.43181 22.5422C9.74511 22.7606 10.1178 22.8777 10.4998 22.8777C10.8817 22.8777 11.2544 22.7606 11.5677 22.5422C11.881 22.3238 12.1198 22.0146 12.2519 21.6562L13.976 16.98L18.656 15.2522C19.0143 15.1201 19.3236 14.8813 19.542 14.568C19.7604 14.2546 19.8774 13.8819 19.8774 13.5C19.8774 13.1181 19.7604 12.7454 19.542 12.432C19.3236 12.1187 19.0143 11.8799 18.656 11.7478ZM12.7141 15.0441C12.5614 15.1003 12.4228 15.1891 12.3077 15.3042C12.1926 15.4192 12.1038 15.5579 12.0476 15.7106L10.4998 19.9012L8.9557 15.7106C8.89942 15.5579 8.81068 15.4192 8.6956 15.3042C8.58052 15.1891 8.44184 15.1003 8.28913 15.0441L4.09851 13.5L8.28913 11.9559C8.44184 11.8997 8.58052 11.8109 8.6956 11.6958C8.81068 11.5808 8.89942 11.4421 8.9557 11.2894L10.4998 7.09875L12.0438 11.2894C12.1001 11.4421 12.1888 11.5808 12.3039 11.6958C12.419 11.8109 12.5577 11.8997 12.7104 11.9559L16.901 13.5L12.7141 15.0441ZM13.1248 3.75C13.1248 3.45163 13.2433 3.16548 13.4543 2.9545C13.6652 2.74353 13.9514 2.625 14.2498 2.625H15.3748V1.5C15.3748 1.20163 15.4933 0.915483 15.7043 0.704505C15.9152 0.493526 16.2014 0.375 16.4998 0.375C16.7981 0.375 17.0843 0.493526 17.2953 0.704505C17.5062 0.915483 17.6248 1.20163 17.6248 1.5V2.625H18.7498C19.0481 2.625 19.3343 2.74353 19.5453 2.9545C19.7562 3.16548 19.8748 3.45163 19.8748 3.75C19.8748 4.04837 19.7562 4.33452 19.5453 4.5455C19.3343 4.75647 19.0481 4.875 18.7498 4.875H17.6248V6C17.6248 6.29837 17.5062 6.58452 17.2953 6.7955C17.0843 7.00647 16.7981 7.125 16.4998 7.125C16.2014 7.125 15.9152 7.00647 15.7043 6.7955C15.4933 6.58452 15.3748 6.29837 15.3748 6V4.875H14.2498C13.9514 4.875 13.6652 4.75647 13.4543 4.5455C13.2433 4.33452 13.1248 4.04837 13.1248 3.75ZM23.6248 8.25C23.6248 8.54837 23.5062 8.83452 23.2953 9.0455C23.0843 9.25647 22.7981 9.375 22.4998 9.375H22.1248V9.75C22.1248 10.0484 22.0062 10.3345 21.7953 10.5455C21.5843 10.7565 21.2981 10.875 20.9998 10.875C20.7014 10.875 20.4152 10.7565 20.2043 10.5455C19.9933 10.3345 19.8748 10.0484 19.8748 9.75V9.375H19.4998C19.2014 9.375 18.9152 9.25647 18.7043 9.0455C18.4933 8.83452 18.3748 8.54837 18.3748 8.25C18.3748 7.95163 18.4933 7.66548 18.7043 7.4545C18.9152 7.24353 19.2014 7.125 19.4998 7.125H19.8748V6.75C19.8748 6.45163 19.9933 6.16548 20.2043 5.9545C20.4152 5.74353 20.7014 5.625 20.9998 5.625C21.2981 5.625 21.5843 5.74353 21.7953 5.9545C22.0062 6.16548 22.1248 6.45163 22.1248 6.75V7.125H22.4998C22.7981 7.125 23.0843 7.24353 23.2953 7.4545C23.5062 7.66548 23.6248 7.95163 23.6248 8.25Z",
                      fill: "white"
                    })
                  ]),
                  createVNode("defs", null, [
                    createVNode("clipPath", { id: "clip0_2208_1456" }, [
                      createVNode("rect", {
                        width: "24",
                        height: "24",
                        fill: "white"
                      })
                    ])
                  ])
                ]))
              ])), [
                [_directive_motion]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div${ssrRenderAttrs(mergeProps({
        class: "hero-image",
        initial: { opacity: 0, x: 100 },
        enter: {
          opacity: 1,
          x: 0,
          transition: { duration: 800, delay: 300, ease: "easeOut" }
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-c54f72f9><img${ssrRenderAttr("src", _imports_0)} alt="CRM Illustration" data-v-c54f72f9></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/hero/HeroBanner.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const HeroBanner = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-c54f72f9"]]);
const _sfc_main$6 = {
  __name: "SectionsIntegrationsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { integrationsSection } = landingData;
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "integrations" }, _attrs))} data-v-8e2705bf><div class="block-messengers" data-v-8e2705bf><h2${ssrRenderAttrs(mergeProps({
        class: "title",
        initial: { opacity: 0, y: 30 },
        visibleOnce: { opacity: 1, y: 0, transition: { duration: 600 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-8e2705bf><span class="text-green" data-v-8e2705bf>Общайтесь там</span>, где удобно вашим клиентам </h2><div class="grid-list" data-v-8e2705bf><!--[-->`);
      ssrRenderList(unref(integrationsSection).messengers, (item, index2) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: index2,
          class: ["integration-card", { "is-upcoming": item.isComingSoon }],
          initial: { opacity: 0, scale: 0.8, y: 20 },
          visibleOnce: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 400, delay: index2 * 100 }
          },
          hovered: !item.isComingSoon ? { scale: 1.05, backgroundColor: "#f0f0f0" } : {}
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-8e2705bf><img${ssrRenderAttr("src", item.icon)} class="icon"${ssrRenderAttr("alt", item.title)} data-v-8e2705bf><span class="card-text" data-v-8e2705bf>${ssrInterpolate(item.title)}</span>`);
        if (item.isNew) {
          _push(`<span class="badge-soon" data-v-8e2705bf>Новинка</span>`);
        } else {
          _push(`<!---->`);
        }
        if (item.isComingSoon) {
          _push(`<span class="badge-soon" data-v-8e2705bf>Скоро</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="block-crm" data-v-8e2705bf><h2${ssrRenderAttrs(mergeProps({
        class: "title",
        initial: { opacity: 0, y: 30 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 200 }
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-8e2705bf><span class="text-green" data-v-8e2705bf>Свяжите сервис</span> с любой из популярных CRM-платформ </h2><div class="grid-list" data-v-8e2705bf><!--[-->`);
      ssrRenderList(unref(integrationsSection).crm, (item, index2) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: index2,
          class: ["integration-card", { "is-upcoming": item.isComingSoon }],
          initial: { opacity: 0, scale: 0.8, y: 20 },
          visibleOnce: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 500, delay: 400 + index2 * 100 }
          },
          hovered: !item.isComingSoon ? { y: -5, transition: { duration: 200 } } : {}
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-8e2705bf><img${ssrRenderAttr("src", item.icon)} class="icon-full"${ssrRenderAttr("alt", item.title || "CRM")} data-v-8e2705bf>`);
        if (item.isComingSoon) {
          _push(`<span class="badge-soon" data-v-8e2705bf>Скоро</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/integrationsSection/IntegrationsSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const IntegrationsSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-8e2705bf"]]);
const _sfc_main$5 = {
  __name: "SectionsFastStart",
  __ssrInlineRender: true,
  setup(__props) {
    const { fastStart } = landingData;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "fast-start",
        initial: { opacity: 0 },
        visibleOnce: { opacity: 1, transition: { duration: 800 } }
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-0abd5c43><h2${ssrRenderAttrs(mergeProps({
        class: "section-title",
        initial: { opacity: 0, y: -20 },
        visibleOnce: { opacity: 1, y: 0, transition: { duration: 600 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-0abd5c43> Быстрое <span class="green-title" data-v-0abd5c43>подключение</span></h2><div class="fast-start-steps" data-v-0abd5c43><div${ssrRenderAttrs(mergeProps({
        class: "step-card",
        initial: { opacity: 0, y: 30 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 200 }
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-0abd5c43><div class="step-card-icon-container" data-v-0abd5c43><img${ssrRenderAttr("src", unref(fastStart).steps[0].icon)} alt="Step 1" class="step-card-img" data-v-0abd5c43><div${ssrRenderAttrs(mergeProps({
        class: "step-card-arrow arrow-1",
        initial: { opacity: 0, scale: 0.5, x: -20 },
        visibleOnce: {
          opacity: 1,
          scale: 1,
          x: 0,
          transition: { delay: 800, duration: 500 }
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-0abd5c43><svg class="arrow" width="103" height="49" viewBox="0 0 103 49" fill="none" data-v-0abd5c43><path d="M1.49995 46.7841C24.6672 48.0807 69.3362 43.4387 68.3261 14.193C67.6369 -5.77441 44.4031 -1.11712 46.004 20.6992C47.6048 42.5156 83.7155 52.436 97.8311 12.0275M97.8311 12.0275L89.5708 14.6112M97.8311 12.0275L100.982 23.1226" stroke="#424242" stroke-width="3" stroke-linecap="round" data-v-0abd5c43></path></svg></div></div><p class="step-card-text" data-v-0abd5c43> Создайте и подключите нужные аккаунты <strong data-v-0abd5c43>CRM и мессенджеров</strong></p></div><div${ssrRenderAttrs(mergeProps({
        class: "step-card",
        initial: { opacity: 0, y: 30 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 500 }
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-0abd5c43><div class="step-card-icon-container" data-v-0abd5c43><img${ssrRenderAttr("src", unref(fastStart).steps[1].icon)} alt="Step 2" class="step-card-img" data-v-0abd5c43><div${ssrRenderAttrs(mergeProps({
        class: "step-card-arrow arrow-2",
        initial: { opacity: 0, scale: 0.5, x: -20 },
        visibleOnce: {
          opacity: 1,
          scale: 1,
          x: 0,
          transition: { delay: 1100, duration: 500 }
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-0abd5c43><svg class="arrow" width="137" height="75" viewBox="0 0 137 75" fill="none" data-v-0abd5c43><path d="M1.49982 1.5001C33.7952 3.42876 94.9142 17.0379 88.814 57.3804C84.6492 84.9239 53.2193 74.7388 58.9435 44.7808C64.6676 14.8228 116.28 6.88689 129.329 65.1222M129.329 65.1222L118.304 60.216M129.329 65.1222L135.478 50.262" stroke="#424242" stroke-width="3" stroke-linecap="round" data-v-0abd5c43></path></svg></div></div><p class="step-card-text" data-v-0abd5c43> Подключите пробный период на <strong data-v-0abd5c43>14 дней</strong></p></div><div${ssrRenderAttrs(mergeProps({
        class: "step-card",
        initial: { opacity: 0, y: 30 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 800 }
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-0abd5c43><div class="step-card-icon-container" data-v-0abd5c43><img${ssrRenderAttr("src", unref(fastStart).steps[2].icon)} alt="Step 3" class="step-card-img" data-v-0abd5c43></div><p class="step-card-text" data-v-0abd5c43> Появились вопросы? Напишите в <strong data-v-0abd5c43>поддержку</strong> и вам <strong data-v-0abd5c43>помогут</strong></p></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        initial: { opacity: 0, scale: 0.9 },
        visibleOnce: { opacity: 1, scale: 1, transition: { delay: 1300 } },
        hovered: { scale: 1.05 },
        tapped: { scale: 0.95 },
        class: "link-deco",
        to: "/signup"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="fast-start-btn" data-v-0abd5c43${_scopeId}>${ssrInterpolate(unref(fastStart).buttonText)} <svg width="11" height="14" viewBox="0 0 11 14" fill="none" data-v-0abd5c43${_scopeId}><path d="M2.28267e-06 11.9107V2.08929C-0.000591436 1.70155 0.114952 1.32158 0.333258 0.993356C0.551565 0.665135 0.863708 0.402083 1.23356 0.23465C1.67239 0.0386502 2.16062 -0.0368408 2.64261 0.0167792C3.1246 0.0703991 3.58098 0.250973 3.95972 0.537925L10.2509 5.44863C10.486 5.64135 10.6746 5.87961 10.8039 6.14728C10.9331 6.41494 11 6.70575 11 7C11 7.29425 10.9331 7.58506 10.8039 7.85272C10.6746 8.12039 10.486 8.35865 10.2509 8.55136L3.95972 13.4621C3.58098 13.749 3.1246 13.9296 2.64261 13.9832C2.16062 14.0368 1.67239 13.9613 1.23356 13.7653C0.863708 13.5979 0.551565 13.3349 0.333258 13.0066C0.114952 12.6784 -0.000591436 12.2984 2.28267e-06 11.9107Z" fill="white" data-v-0abd5c43${_scopeId}></path></svg></button>`);
          } else {
            return [
              createVNode("button", { class: "fast-start-btn" }, [
                createTextVNode(toDisplayString(unref(fastStart).buttonText) + " ", 1),
                (openBlock(), createBlock("svg", {
                  width: "11",
                  height: "14",
                  viewBox: "0 0 11 14",
                  fill: "none"
                }, [
                  createVNode("path", {
                    d: "M2.28267e-06 11.9107V2.08929C-0.000591436 1.70155 0.114952 1.32158 0.333258 0.993356C0.551565 0.665135 0.863708 0.402083 1.23356 0.23465C1.67239 0.0386502 2.16062 -0.0368408 2.64261 0.0167792C3.1246 0.0703991 3.58098 0.250973 3.95972 0.537925L10.2509 5.44863C10.486 5.64135 10.6746 5.87961 10.8039 6.14728C10.9331 6.41494 11 6.70575 11 7C11 7.29425 10.9331 7.58506 10.8039 7.85272C10.6746 8.12039 10.486 8.35865 10.2509 8.55136L3.95972 13.4621C3.58098 13.749 3.1246 13.9296 2.64261 13.9832C2.16062 14.0368 1.67239 13.9613 1.23356 13.7653C0.863708 13.5979 0.551565 13.3349 0.333258 13.0066C0.114952 12.6784 -0.000591436 12.2984 2.28267e-06 11.9107Z",
                    fill: "white"
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/fastStart/FastStart.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const FastStart = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-0abd5c43"]]);
const _sfc_main$4 = {
  __name: "SectionsOffer",
  __ssrInlineRender: true,
  setup(__props) {
    const { offer } = landingData;
    const expandedIndex = ref(-1);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "offer-section" }, _attrs))} data-v-3b6b78bb><h2${ssrRenderAttrs(mergeProps({
        class: "section-title",
        initial: { opacity: 0, y: -30 },
        visibleOnce: { opacity: 1, y: 0, transition: { duration: 600 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-3b6b78bb> Что мы <span class="green-title" data-v-3b6b78bb>предлагаем</span></h2><div class="offer-container" data-v-3b6b78bb><!--[-->`);
      ssrRenderList(unref(offer), (item, index2) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: index2,
          class: ["offer-card", { "is-expanded": expandedIndex.value === index2 }],
          initial: { opacity: 0, y: 30 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: index2 * 100 }
          }
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-3b6b78bb><div class="card-header" data-v-3b6b78bb><div${ssrRenderAttrs(mergeProps({
          class: "icon-circle",
          initial: { scale: 0 },
          visibleOnce: {
            scale: 1,
            transition: { delay: index2 * 100 + 300, type: "spring" }
          }
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-3b6b78bb><img${ssrRenderAttr("src", item.icon)}${ssrRenderAttr("alt", item.title)} data-v-3b6b78bb></div><div class="header-text" data-v-3b6b78bb><h3 class="card-title" data-v-3b6b78bb>${ssrInterpolate(item.title)}</h3><p class="card-description" data-v-3b6b78bb>${ssrInterpolate(item.description)}</p></div><div class="expand-icon" data-v-3b6b78bb><span data-v-3b6b78bb>${ssrInterpolate(expandedIndex.value === index2 ? "−" : "+")}</span></div></div><div class="expandable-content" data-v-3b6b78bb><div class="content-inner" data-v-3b6b78bb><div class="divider" data-v-3b6b78bb></div>`);
        if (item.bullets) {
          _push(`<ul class="card-list" data-v-3b6b78bb><!--[-->`);
          ssrRenderList(item.bullets, (bullet, bIndex) => {
            _push(`<li data-v-3b6b78bb>${ssrInterpolate(bullet)}</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        if (item.sections) {
          _push(`<div class="card-sections" data-v-3b6b78bb><!--[-->`);
          ssrRenderList(item.sections, (sec, sIndex) => {
            _push(`<div class="card-section" data-v-3b6b78bb><h4 class="section-subtitle" data-v-3b6b78bb>${ssrInterpolate(sec.subtitle)}</h4><ul class="card-list" data-v-3b6b78bb><!--[-->`);
            ssrRenderList(sec.bullets, (sBullet, sbIndex) => {
              _push(`<li data-v-3b6b78bb>${ssrInterpolate(sBullet)}</li>`);
            });
            _push(`<!--]--></ul></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.example) {
          _push(`<div class="card-example" data-v-3b6b78bb><strong data-v-3b6b78bb>Пример:</strong> <span data-v-3b6b78bb>${ssrInterpolate(item.example)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item.action || item.hint) {
          _push(`<div class="card-footer" data-v-3b6b78bb>`);
          if (item.action) {
            _push(`<a href="/signup" class="btn-action" data-v-3b6b78bb>${ssrInterpolate(item.action)}</a>`);
          } else {
            _push(`<!---->`);
          }
          if (item.hint) {
            _push(`<p class="hint-text" data-v-3b6b78bb>${ssrInterpolate(item.hint)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/offer/Offer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Offer = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3b6b78bb"]]);
const _sfc_main$3 = {
  __name: "SectionsFeedBackForm",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    config.public.apiSupportUrl;
    const loading = ref(false);
    const successMessage = ref("");
    const errorMessage = ref("");
    const form = reactive({
      name: "",
      email: "",
      question: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "feedback",
        class: "feedback-wrapper"
      }, _attrs))} data-v-ec62c429><header class="feedback-header" data-v-ec62c429><h2 data-v-ec62c429>Остались вопросы?</h2><p data-v-ec62c429>Оставьте заявку и мы свяжемся с вами</p></header><div class="feedback-layout" data-v-ec62c429><form class="feedback-form" data-v-ec62c429>`);
      if (successMessage.value) {
        _push(`<div class="success-msg" data-v-ec62c429>${ssrInterpolate(successMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (errorMessage.value) {
        _push(`<div class="error-msg" data-v-ec62c429>${ssrInterpolate(errorMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input type="text"${ssrRenderAttr("value", form.name)} placeholder="Ваше имя" class="input-field" required${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-ec62c429><input type="email"${ssrRenderAttr("value", form.email)} placeholder="Ваш email" class="input-field" required${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-ec62c429><textarea placeholder="Ваш вопрос" class="textarea-field"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-ec62c429>${ssrInterpolate(form.question)}</textarea><button type="submit" class="submit-btn"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-ec62c429>${ssrInterpolate(loading.value ? "Отправка..." : "Отправить")} <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ec62c429><path d="M2.28267e-06 11.9107V2.08929C-0.000591436 1.70155 0.114952 1.32158 0.333258 0.993356C0.551565 0.665135 0.863708 0.402083 1.23356 0.23465C1.67239 0.0386502 2.16062 -0.0368408 2.64261 0.0167792C3.1246 0.0703991 3.58098 0.250973 3.95972 0.537925L10.2509 5.44863C10.486 5.64135 10.6746 5.87961 10.8039 6.14728C10.9331 6.41494 11 6.70575 11 7C11 7.29425 10.9331 7.58506 10.8039 7.85272C10.6746 8.12039 10.486 8.35865 10.2509 8.55136L3.95972 13.4621C3.58098 13.749 3.1246 13.9296 2.64261 13.9832C2.16062 14.0368 1.67239 13.9613 1.23356 13.7653C0.863708 13.5979 0.551565 13.3349 0.333258 13.0066C0.114952 12.6784 -0.000591436 12.2984 2.28267e-06 11.9107Z" fill="white" data-v-ec62c429></path></svg></button></form><div class="feedback-image" data-v-ec62c429><img${ssrRenderAttr("src", _imports_0$1)} alt="Иллюстрация" data-v-ec62c429></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/feedBackForm/FeedBackForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const FeedBackForm = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ec62c429"]]);
const _sfc_main$2 = {
  __name: "SectionsInterface",
  __ssrInlineRender: true,
  setup(__props) {
    const tabs = [
      { label: "Аккаунты", img: "/interface/accounts.svg" },
      { label: "Рассылки", img: "/interface/mailing.svg" }
    ];
    const activeTab = ref(0);
    const progress = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "wazzup-interface" }, _attrs))} data-v-f823f0c7><h2 class="section-title" data-v-f823f0c7> Интерфейс Ватс<span class="green-title" data-v-f823f0c7>Апи</span></h2><div class="controls" data-v-f823f0c7><!--[-->`);
      ssrRenderList(tabs, (tab, index2) => {
        _push(`<button class="${ssrRenderClass(["tab-btn", { active: activeTab.value === index2 }])}" data-v-f823f0c7>${ssrInterpolate(tab.label)} <div class="line-loader" data-v-f823f0c7><div class="line-fill" style="${ssrRenderStyle({ width: activeTab.value === index2 ? progress.value + "%" : "0%" })}" data-v-f823f0c7></div></div></button>`);
      });
      _push(`<!--]--></div><div class="display-area" data-v-f823f0c7><div class="image-container" data-v-f823f0c7><img${ssrRenderAttr("src", tabs[activeTab.value].img)} class="main-img" alt="interface" data-v-f823f0c7></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/interface/Interface.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Interface = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f823f0c7"]]);
const _sfc_main$1 = {
  __name: "SectionsFaq",
  __ssrInlineRender: true,
  setup(__props) {
    const activeIndex = ref(null);
    const faqItems = ref([
      {
        question: "Какая стоимость?",
        answer: "Подробное описание сервисов и цены представлены в разделе «Тарифы». Действует система скидок при одновременной оплате нескольких каналов."
      },
      {
        question: "Сколько длится тестовый период?",
        answer: "14 дней. Доступен полный функционал без ограничений."
      },
      {
        question: "Можно ли переписываться с телефона?",
        answer: "Да. Сообщения синхронизируются: ответил с телефона – запись появится в CRM, ответил из CRM – клиент увидит сообщение в мессенджере. История не теряется."
      },
      {
        question: "Сколько номеров можно подключить?",
        answer: "Любое количество. Ограничений нет. Подключайте один номер или сто – платите только за те, которые реально используете."
      },
      {
        question: "Нужно ли держать телефон включенным постоянно?",
        answer: "Нет. Телефон может быть выключен – сообщения всё равно придут в CRM."
      },
      {
        question: "Есть ограничения по количеству сообщений?",
        answer: "Нет. Тарифы ограничены только количеством подключенных номеров, не количеством сообщений."
      },
      {
        question: "Можно ли вам позвонить?",
        answer: "Созвон не предусмотрен – процесс подключения полностью автоматический. После регистрации вы сразу получаете доступ к личному кабинету и настраиваете интеграцию самостоятельно за 5-10 минут. Если возникнут вопросы – пишите на почту или в чат, отвечаем быстро и со скриншотами. Такой формат удобнее: у вас остаётся история переписки с решением."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "faq" }, _attrs))} data-v-d2590198><div class="faq__container" data-v-d2590198><h2 class="faq__title" data-v-d2590198>Часто задаваемые вопросы</h2><div class="faq__list" data-v-d2590198><!--[-->`);
      ssrRenderList(faqItems.value, (item, index2) => {
        _push(`<div class="${ssrRenderClass([{ "faq__item--active": activeIndex.value === index2 }, "faq__item"])}" data-v-d2590198><button class="faq__question"${ssrRenderAttr("aria-expanded", activeIndex.value === index2)}${ssrRenderAttr("aria-label", (activeIndex.value === index2 ? "Свернуть: " : "Развернуть: ") + item.question)} data-v-d2590198><span data-v-d2590198>${ssrInterpolate(item.question)}</span><span class="faq__icon" aria-hidden="true" data-v-d2590198>${ssrInterpolate(activeIndex.value === index2 ? "−" : "+")}</span></button><div class="faq__answer" style="${ssrRenderStyle(activeIndex.value === index2 ? null : { display: "none" })}" data-v-d2590198><div class="faq__answer-content" data-v-d2590198>${ssrInterpolate(item.answer)}</div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/faq/Faq.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Faq = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d2590198"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "WhatsApi — интеграция CRM с мессенджерами для бизнеса",
      description: "Интеграция мессенджеров с CRM. Автоматизируйте общение с клиентами, увеличивайте продажи и подписывайте договоры.",
      ogTitle: "WhatsApi — интеграция CRM с мессенджерами для бизнеса",
      ogDescription: "Интеграция мессенджеров с CRM. Автоматизируйте общение с клиентами, увеличивайте продажи и подписывайте договоры.",
      ogUrl: "https://whatsapi.ru"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Frame, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HeroBanner, { class: "mb-160" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(IntegrationsSection, { class: "mb-160" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Interface, { class: "mb-160" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(FastStart, { class: "mb-160" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Offer, { class: "mb-160" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Faq, { class: "mb-160" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(FeedBackForm, { class: "mt-160 mb-160" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(HeroBanner, { class: "mb-160" }),
              createVNode(IntegrationsSection, { class: "mb-160" }),
              createVNode(Interface, { class: "mb-160" }),
              createVNode(FastStart, { class: "mb-160" }),
              createVNode(Offer, { class: "mb-160" }),
              createVNode(Faq, { class: "mb-160" }),
              createVNode(FeedBackForm, { class: "mt-160 mb-160" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-367bd365"]]);

export { index as default };
//# sourceMappingURL=index-B-p6Aut0.mjs.map
