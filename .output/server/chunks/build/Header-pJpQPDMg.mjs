import { _ as __nuxt_component_0 } from './nuxt-link-BsQqtqux.mjs';
import { ref, watch, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const header = { "title": "ВатсАпи", "pages": [{ "page": "Интеграции", "isList": true, "list": [{ "page": "Интеграция с U-ON.Travel", "desc": "WhatsApp, Telegram, Max и SMS", "icon": "/integrationsSection/uon_icon.svg", "available": true, "to": "/integration/uon" }, { "page": "Интеграция с AmoCRM", "desc": "WhatsApp, Telegram, Max и SMS", "icon": "/integrationsSection/amo_icon.svg", "available": false, "to": "/" }, { "page": "Интеграция с Bitrix24", "desc": "WhatsApp, Telegram, Max и SMS", "icon": "/integrationsSection/bitrix_icon.svg", "available": false, "to": "/" }] }, { "page": "Тарифы", "to": "/tariffs", "isList": false }, { "page": "База знаний", "to": "/docs", "isList": false }, { "page": "Компания", "list": [{ "page": "О компании", "to": "/about" }, { "page": "Документы", "to": "/documents" }, { "page": "Api и цены", "to": "/api" }, { "page": "Контакты", "to": "/contacts" }], "to": "/", "isList": true }], "buttons": { "signin": "Войти", "actions": "Начать бесплатно" } };
const hero = { "title": "Перенесите продажи из мессенджеров в CRM и поднимите конверсию", "description": "Интегрируйте популярные мессенджеры с любой CRM, чтобы каждое сообщение превращалось в сделку под вашим контролем.", "button": { "text": "Рассчитать стоимость", "image": "@/assets/img/hero/button_star.svg" }, "image": "@/assets/img/hero/herobanner.svg" };
const integrationsSection = { "messengerText": "Общайтесь там, где удобно вашим клиентам", "messengers": [{ "title": "Telegram", "icon": "/integrationsSection/telegram_icon.svg" }, { "title": "WhatsApp", "icon": "/integrationsSection/whatsapp_icon.svg" }, { "title": "Max", "icon": "/integrationsSection/max_icon.svg" }, { "title": "Avito", "icon": "/integrationsSection/avito_logo.svg", "isComingSoon": true }, { "title": "Telegram-bot", "icon": "/integrationsSection/tgbot_logo.svg", "isComingSoon": true }, { "title": "Вконтакте", "icon": "/integrationsSection/vk_icon.svg", "isNew": true }, { "title": "SMS", "icon": "/integrationsSection/sms.svg", "isNew": true }, { "title": "Email", "icon": "/integrationsSection/email.svg", "isNew": true }, { "title": "Instagram*", "icon": "/integrationsSection/instagram_logo.svg", "isNew": true }], "crmText": "Свяжите сервис с любой из популярных CRM-платформ", "crm": [{ "icon": "/integrationsSection/amo_icon.svg", "isComingSoon": true }, { "icon": "/integrationsSection/bitrix_icon.svg", "isComingSoon": true }, { "icon": "/integrationsSection/uon_icon.svg" }] };
const fastStart = { "title": "Быстрый старт за 5 минут", "steps": [{ "icon": "/steps/step_1.svg", "text": "Создайте и добавьте нужные аккаунты CRM и мессенджеров", "boldText": "CRM и мессенждеров" }, { "icon": "/steps/step_2.svg", "text": "Получите бесплатную подписку на каждый новый аккаунт", "boldText": "бесплатную подписку" }, { "icon": "/steps/step_3.svg", "text": "Появились вопросы? Напишите в поддержку и вам помогут", "boldText": "поддержку и вам помогут" }], "buttonText": "Переход на демо" };
const offer = [{ "title": "Автоматические уведомления и документы в U‑ON.Travel", "description": "Настройте автоматические сообщения и подписание договоров прямо в CRM — клиенты вовремя получают информацию, а вы экономите время.", "sections": [{ "subtitle": "Поздравления и напоминания:", "bullets": ["Поздравление с Днём Рождения", "Напоминание о вылете", "Уведомление по возвращению из тура", "Напоминание об окончании срока загранпаспорта", "Напоминание об окончании срока страховки"] }, { "subtitle": "По заявкам и оплатам:", "bullets": ["Уведомление о создании заявки", "Уведомление о статусе заявки (например, забронирована туроператором)", "Уведомление о полученной оплате"] }, { "subtitle": "По бонусной программе:", "bullets": ["Уведомление о создании бонусной карты", "Уведомление о списании бонусов"] }, { "subtitle": "Документы:", "bullets": ["Подписание договоров онлайн — клиент ставит подпись прямо в мессенджере"] }, { "subtitle": "Как работает:", "bullets": ["Все настройки выполняются в U‑ON.Travel", "Вы задаете сценарий один раз в разделе уведомлений", "Система отправляет сообщения автоматически в WhatsApp, Telegram или Max", "Договоры подписываются без встреч и распечаток"] }], "hint": "Где настраивать: U‑ON.Travel → Еще → Рассылки → Уведомления туристов", "action": "Настроить", "icon": "/offerSteps/step_7.svg" }, { "title": "Оповещения об ошибках", "description": "Если аккаунт отключился или сообщение не отправилось — вы сразу узнаете об этом в Telegram-боте.", "bullets": ["Мгновенные уведомления о сбоях", "Контроль всех подключенных аккаунтов", "Ни одного потерянного сообщения"], "action": "Включить уведомления в личном кабинете", "icon": "/offerSteps/step_1.svg" }, { "title": "Черный список", "description": "Чтобы не создавались обращения в CRM", "bullets": ["Номера из черного списка не создают обращения в CRM", "Защита от спама", "Чистая база клиентов"], "action": "Настроить в личном кабинете", "hint": "Уже в ЛК? Настройки → Черный список", "icon": "/offerSteps/step_2.svg" }, { "title": "Плавные рассылки", "description": "Сообщения уходят с комфортной задержкой, а не все сразу.", "sections": [{ "subtitle": "Как работает:", "bullets": ["Вы задаете интервал между сообщениями", "Система отправляет их постепенно", "Клиенты не получают пачку сообщений одновременно"] }, { "subtitle": "Отправляйте не только текст:", "bullets": ["Картинки и фото туров", "Видео с отелями и странами"] }, { "subtitle": "Зачем нужно:", "bullets": ["Не раздражать клиентов", "Не провоцировать ограничения от мессенджеров", "Выше эффективность рассылок", "Клиенты сразу видят визуальную информацию"] }], "action": "Настроить интервалы в личном кабинете → Рассылки", "icon": "/offerSteps/step_4.svg" }, { "title": "Ответы с телефона", "description": "Отвечайте клиентам из обычных мессенджеров на телефоне — все ответы попадут в CRM.", "sections": [{ "subtitle": "Как работает:", "bullets": ["Настраиваете проброс сообщений один раз", "Отвечаете из привычного приложения на телефоне (WhatsApp, Telegram)", "История сохраняется в CRM автоматически"] }, { "subtitle": "Зачем нужно:", "bullets": ["Работайте оттуда, где удобно", "Не теряйте историю переписки", "Менеджеры могут отвечать с личных телефонов"] }], "action": "Настроить проброс в личном кабинете → Настройки аккаунта", "icon": "/offerSteps/step_5.svg" }, { "title": "Каскадная отправка", "description": "WhatsApp, Telegram, Max — в любой последовательности. Сообщение уходит в первый доступный канал. Не дошло? Пробуем следующий. Клиент всегда получит уведомление.", "action": "Настроить в личном кабинете", "icon": "/offerSteps/step_6.svg" }, { "title": "Чаты в личном кабинете", "description": "Вся переписка с клиентами в одном окне. Не нужно переключаться между мессенджерами.", "bullets": ["Отвечайте на сообщения из WhatsApp, Telegram, Max и ВК прямо в личном кабинете WhatsApi", "Удобно. Быстро. Всё в одном месте."], "action": "Подключить", "icon": "/offerSteps/step_8.svg" }];
const landingData = {
  header,
  hero,
  integrationsSection,
  fastStart,
  offer
};
const _sfc_main = {
  __name: "LayoutHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { header: header2 } = landingData;
    const isMenuOpen = ref(false);
    const activeDropdown = ref(null);
    watch(isMenuOpen, (val) => {
      if (val) {
        (void 0).body.style.overflow = "hidden";
      } else {
        (void 0).body.style.overflow = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-81847566><div class="container" data-v-81847566><div class="logo" data-v-81847566>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link-deco",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="logo-cont" data-v-81847566${_scopeId}><div class="logo-ru" data-v-81847566${_scopeId}><span class="logo-black" data-v-81847566${_scopeId}>Ватс</span><span class="logo-green" data-v-81847566${_scopeId}>Апи</span></div><div class="logo-eu" data-v-81847566${_scopeId}><span class="logo-black-eu" data-v-81847566${_scopeId}>Whats</span><span class="logo-green-eu" data-v-81847566${_scopeId}>Api</span></div></div>`);
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
      _push(`</div><div class="${ssrRenderClass([{ "menu-overlay--active": isMenuOpen.value }, "menu-overlay"])}" data-v-81847566></div><nav class="${ssrRenderClass([{ "nav--open": isMenuOpen.value }, "nav"])}" data-v-81847566><button class="close-menu" aria-label="Закрыть меню" data-v-81847566> × </button><ul class="nav-list" data-v-81847566><!--[-->`);
      ssrRenderList(unref(header2).pages, (item, index) => {
        _push(`<li class="nav-wrapper" data-v-81847566>`);
        if (!item.isList) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.to,
            class: "nav-item",
            onClick: ($event) => isMenuOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.page)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.page), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<div class="dropdown-container" data-v-81847566><div class="nav-item dropdown-trigger" data-v-81847566>${ssrInterpolate(item.page)} <span class="${ssrRenderClass([{ "arrow--rotate": activeDropdown.value === index }, "arrow"])}" data-v-81847566>▼</span></div><div class="${ssrRenderClass([{
            "dropdown-menu--open": activeDropdown.value === index,
            "mega-menu": item.page === "Интеграции"
          }, "dropdown-menu"])}" data-v-81847566><!--[-->`);
          ssrRenderList(item.list, (subItem, subIndex) => {
            _push(`<div class="dropdown-item-slot" data-v-81847566>`);
            if (subItem.available !== false) {
              _push(ssrRenderComponent(_component_NuxtLink, {
                to: subItem.to,
                class: "dropdown-link",
                onClick: ($event) => isMenuOpen.value = false
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    if (subItem.icon) {
                      _push2(`<img${ssrRenderAttr("src", subItem.icon)} class="menu-icon" data-v-81847566${_scopeId}>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<div class="menu-content" data-v-81847566${_scopeId}><span class="menu-title" data-v-81847566${_scopeId}>${ssrInterpolate(subItem.page)}</span>`);
                    if (subItem.desc) {
                      _push2(`<span class="menu-desc" data-v-81847566${_scopeId}>${ssrInterpolate(subItem.desc)}</span>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div>`);
                  } else {
                    return [
                      subItem.icon ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: subItem.icon,
                        class: "menu-icon"
                      }, null, 8, ["src"])) : createCommentVNode("", true),
                      createVNode("div", { class: "menu-content" }, [
                        createVNode("span", { class: "menu-title" }, toDisplayString(subItem.page), 1),
                        subItem.desc ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "menu-desc"
                        }, toDisplayString(subItem.desc), 1)) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<div class="dropdown-link dropdown-link--disabled" data-v-81847566>`);
              if (subItem.icon) {
                _push(`<img${ssrRenderAttr("src", subItem.icon)} class="menu-icon grayscale" data-v-81847566>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<div class="menu-content" data-v-81847566><span class="menu-title" data-v-81847566>${ssrInterpolate(subItem.page)} <span class="badge-soon" data-v-81847566>Скоро</span></span>`);
              if (subItem.desc) {
                _push(`<span class="menu-desc" data-v-81847566>${ssrInterpolate(subItem.desc)}</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div></div>`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div></div>`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul><div class="mobile-actions" data-v-81847566>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link-deco",
        to: "/signup",
        onClick: ($event) => isMenuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btn btn-primary" data-v-81847566${_scopeId}>${ssrInterpolate(unref(header2).buttons.actions)}</button>`);
          } else {
            return [
              createVNode("button", { class: "btn btn-primary" }, toDisplayString(unref(header2).buttons.actions), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://app.whatsapi.ru/" class="link-deco" data-v-81847566><button class="btn btn-outline" data-v-81847566>${ssrInterpolate(unref(header2).buttons.signin)}</button></a></div></nav><div class="actions" data-v-81847566>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link-deco",
        to: "/signup"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btn btn-primary" data-v-81847566${_scopeId}>${ssrInterpolate(unref(header2).buttons.actions)}</button>`);
          } else {
            return [
              createVNode("button", { class: "btn btn-primary" }, toDisplayString(unref(header2).buttons.actions), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://app.whatsapi.ru/" class="link-deco" data-v-81847566><button class="btn btn-outline" data-v-81847566>${ssrInterpolate(unref(header2).buttons.signin)}</button></a><button class="${ssrRenderClass([{ "is-active": isMenuOpen.value }, "burger"])}" data-v-81847566><span data-v-81847566></span><span data-v-81847566></span><span data-v-81847566></span></button></div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/header/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-81847566"]]);

export { Header as H, landingData as l };
//# sourceMappingURL=Header-pJpQPDMg.mjs.map
