import { withCtx, createVNode, ref, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrGetDirectiveProps, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import Frame from './Frame-Cgxcj7h0.mjs';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$1 = {
  __name: "SectionsIntegrationIntegrations",
  __ssrInlineRender: true,
  setup(__props) {
    const crms = [
      {
        id: "uon",
        name: "U-ON.Travel",
        logo: "/integrationsSection/uon_icon.svg",
        description: "Лучшее решение для туристических агентств. Полная синхронизация переписки с карточкой туриста.",
        messengers: [
          {
            name: "WhatsApp",
            icon: "/integrationsSection/whatsapp_icon.svg",
            text: "Клиент пишет в WhatsApp → сообщение появляется в CRM.",
            link: "#"
          },
          {
            name: "Telegram",
            icon: "/integrationsSection/telegram_icon.svg",
            text: "Поддержка личных номеров и ботов.",
            link: "#"
          },
          {
            name: "ВКонтакте",
            icon: "/integrationsSection/vk_icon.svg",
            text: "Сообщения сообществ попадают в CRM.",
            price: "990 ₽/мес",
            isNew: true,
            link: "#"
          }
        ]
      },
      {
        id: "bitrix",
        name: "Bitrix24",
        logo: "https://cdn-icons-png.flaticon.com/512/5968/5968843.png",
        description: "Мощная интеграция для крупных отделов продаж. Автоматические роботы и бизнес-процессы.",
        messengers: [
          {
            name: "WhatsApp",
            icon: "/integrationsSection/whatsapp_icon.svg",
            text: "Интеграция через официальный API.",
            link: "#"
          },
          {
            name: "Telegram",
            icon: "/integrationsSection/telegram_icon.svg",
            text: "Создание лидов из диалогов.",
            link: "#"
          }
        ]
      },
      {
        id: "amocrm",
        name: "amoCRM",
        logo: "https://static.tildacdn.com/tild3235-3031-4131-b337-333034633731/amo_logo_black.png",
        description: "Фокус на продажах. Мессенджеры становятся частью воронки продаж без лишних кликов.",
        messengers: [
          {
            name: "WhatsApp",
            icon: "/integrationsSection/whatsapp_icon.svg",
            text: "Пишите первым из карточки сделки.",
            link: "#"
          },
          {
            name: "Telegram",
            icon: "/integrationsSection/telegram_icon.svg",
            text: "Мгновенные уведомления о новых чатах.",
            link: "#"
          }
        ]
      }
    ];
    const selectedCrm = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "integration-page" }, _attrs))} data-v-723b8ab5><div class="container" data-v-723b8ab5>`);
      if (!selectedCrm.value) {
        _push(`<section class="selection-screen" data-v-723b8ab5><header class="selection-header" data-v-723b8ab5><h1 class="page-title" data-v-723b8ab5>Выберите вашу CRM систему</h1><p class="subtitle" data-v-723b8ab5> Мы интегрируемся с самыми популярными платформами для автоматизации вашего бизнеса </p></header><div class="crm-large-grid" data-v-723b8ab5><!--[-->`);
        ssrRenderList(crms, (crm) => {
          _push(`<div${ssrRenderAttrs(mergeProps({
            key: crm.id,
            class: "crm-main-card",
            initial: { opacity: 0, y: 20 },
            enter: { opacity: 1, y: 0 },
            hovered: { y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }
          }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-723b8ab5><div class="crm-logo-wrapper" data-v-723b8ab5><img${ssrRenderAttr("src", crm.logo)}${ssrRenderAttr("alt", crm.name)} class="crm-main-logo" data-v-723b8ab5></div><h3 data-v-723b8ab5>${ssrInterpolate(crm.name)}</h3><p data-v-723b8ab5>Настройте уведомления и чаты за 5 минут</p><span class="btn-outline" data-v-723b8ab5>Выбрать →</span></div>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<section class="details-screen" data-v-723b8ab5><button class="btn-back" data-v-723b8ab5> ← Вернуться к выбору </button><header class="hero" data-v-723b8ab5><h1 class="page-title flex" data-v-723b8ab5> Интеграция с <img class="crm-icon-large"${ssrRenderAttr("src", selectedCrm.value.logo)}${ssrRenderAttr("alt", selectedCrm.value.name)} data-v-723b8ab5></h1><p class="subtitle" data-v-723b8ab5>${ssrInterpolate(selectedCrm.value.description)}</p><button class="btn-primary" data-v-723b8ab5> Подключить ${ssrInterpolate(selectedCrm.value.name)}</button></header><div class="integrations-grid" data-v-723b8ab5><!--[-->`);
        ssrRenderList(selectedCrm.value.messengers, (messenger, index) => {
          _push(`<div${ssrRenderAttrs(mergeProps({
            key: messenger.name,
            class: ["card", { highlight: messenger.isNew }],
            initial: { opacity: 0, y: 30 },
            enter: { opacity: 1, y: 0, transition: { delay: index * 100 } }
          }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-723b8ab5>`);
          if (messenger.isNew) {
            _push(`<div class="status-badge" data-v-723b8ab5>Новинка!</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<img class="messenger-icon"${ssrRenderAttr("src", messenger.icon)}${ssrRenderAttr("alt", messenger.name)} data-v-723b8ab5><h3 data-v-723b8ab5>${ssrInterpolate(messenger.name)}</h3><p data-v-723b8ab5>${ssrInterpolate(messenger.text)}</p>`);
          if (messenger.price) {
            _push(`<div class="price-tag" data-v-723b8ab5> Тариф: <b data-v-723b8ab5>${ssrInterpolate(messenger.price)}</b></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<a${ssrRenderAttr("href", messenger.link)} class="card-link" data-v-723b8ab5>Инструкция подключения →</a></div>`);
        });
        _push(`<!--]--></div></section>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/integration/Integrations.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Integrations = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-723b8ab5"]]);
const _sfc_main = {
  __name: "integrations",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Интеграции — WhatsApi",
      description: "Подключите WhatsApp, Telegram, ВКонтакте и другие мессенджеры к Bitrix24, AmoCRM, UON и другим CRM-системам. Официальный интегратор.",
      ogTitle: "Интеграции мессенджеров с CRM — WhatsApi",
      ogDescription: "WhatsApp, Telegram, ВКонтакте, Avito и другие мессенджеры в вашей CRM. Официальный интегратор для бизнеса.",
      ogUrl: "https://whatsapi.ru/integrations"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Frame, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Integrations, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Integrations)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/integrations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=integrations--69ieWrz.mjs.map
