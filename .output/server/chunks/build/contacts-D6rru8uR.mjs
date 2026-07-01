import { withCtx, createVNode, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderAttr } from 'vue/server-renderer';
import Frame from './Frame-BvmEWhWu.mjs';
import { _ as _imports_0 } from './virtual_public-A5vfXQ1u.mjs';
import { _ as _export_sfc } from './server.mjs';
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
  const _directive_motion = resolveDirective("motion");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "contacts-section",
    initial: { opacity: 0, y: 30 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      transition: { duration: 800 }
    }
  }, _attrs, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-13966a27><div class="contacts-inner" data-v-13966a27><div class="contacts-text" data-v-13966a27><h2 class="contacts-title" data-v-13966a27>Техподдержка</h2><div class="contact-group" data-v-13966a27><p class="contact-label" data-v-13966a27>Для технических вопросов:</p><a href="mailto:hello@whatsapi.ru" class="contact-email" data-v-13966a27> hello@whatsapi.ru </a></div><div class="contact-group" data-v-13966a27><p class="contact-label" data-v-13966a27>По вопросам сотрудничества:</p><a href="mailto:hr@developtech.ru" class="contact-email" data-v-13966a27> hr@developtech.ru </a></div></div><div class="qr-container" data-v-13966a27><div class="qr-box" data-v-13966a27><img${ssrRenderAttr("src", _imports_0)} alt="QR Код ВК" class="qr-code-img" data-v-13966a27><div class="qr-caption" data-v-13966a27><img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/VK_Compact_Logo_%282021-present%29.svg" alt="VK" width="18" data-v-13966a27><span data-v-13966a27>Группа ВКонтакте</span></div><a href="https://vk.ru/whatsapi" target="_blank" class="qr-vk-btn" data-v-13966a27> Перейти в группу ВК </a></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/contacts/Contacts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Contacts = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-13966a27"]]), { __name: "SectionsContacts" });
const _sfc_main = {
  __name: "contacts",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Контакты — WhatsApi",
      description: "Свяжитесь с командой WhatsApi: техническая поддержка и вопросы сотрудничества. Мы всегда на связи.",
      ogTitle: "Контакты — WhatsApi",
      ogDescription: "Техподдержка: hello@whatsapi.ru. По вопросам сотрудничества: hr@developtech.ru.",
      ogUrl: "https://whatsapi.ru/contacts"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Frame, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Contacts, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Contacts)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contacts-D6rru8uR.mjs.map
