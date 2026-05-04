import { withCtx, createVNode, ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import Frame from './Frame-CO3k-wpV.mjs';
import { _ as _imports_1, a as _imports_0, b as _imports_2 } from './virtual_public-BXowcQTc.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import { u as useSeoMeta } from './composables-OmIBIWah.mjs';
import './Header-Dm4R_cXQ.mjs';
import './nuxt-link-BsQqtqux.mjs';
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

const _imports_3 = publicAssetsURL("/messangers/avito_logo.svg");
const _imports_4 = publicAssetsURL("/messangers/insta_logo.svg");
const _imports_5 = publicAssetsURL("/messangers/tg_bot_logo.svg");
const _sfc_main$2 = {
  __name: "SectionsTariff",
  __ssrInlineRender: true,
  setup(__props) {
    const currentPeriod = ref("1m");
    const promoCode = ref("");
    const periods = {
      "1m": "1 месяц",
      "3m": "3 месяца",
      "6m": "6 месяцев",
      "12m": "12 месяцев"
    };
    const priceTable = {
      "1m": {
        oneChannel: 1900,
        twoChannelsTotal: 3380,
        twoChannelsPerChannel: 1690,
        threeChannelsTotal: 4170,
        threeChannelsSubNumber: 1390,
        threeChannelsSubLabel: "за канал",
        mailingMonthly: 2900
      },
      "3m": {
        oneChannel: 5557,
        twoChannelsTotal: 9790,
        twoChannelsPerChannel: 4895,
        threeChannelsTotal: 12190,
        threeChannelsSubNumber: 4062,
        threeChannelsSubLabel: "за месяц",
        mailingMonthly: 7900
      },
      "6m": {
        oneChannel: 10900,
        twoChannelsTotal: 18900,
        twoChannelsPerChannel: 9450,
        threeChannelsTotal: 23900,
        threeChannelsSubNumber: 3983,
        threeChannelsSubLabel: "за месяц",
        mailingMonthly: 14900
      },
      "12m": {
        oneChannel: 19990,
        twoChannelsTotal: 33800,
        twoChannelsPerChannel: 16900,
        threeChannelsTotal: 41700,
        threeChannelsSubNumber: 3475,
        threeChannelsSubLabel: "за месяц",
        mailingMonthly: 23900
      }
    };
    const promoError = computed(() => {
      const code = promoCode.value.trim().toUpperCase();
      if (!code) return "";
      const months = parseInt(currentPeriod.value);
      if (code === "UON26W" && months < 6) return "Промокод UON26W действует от 6 месяцев";
      if (code === "SOLO26WA") return "";
      if (code === "EXTRA50") return "Промокод EXTRA50 применяется в калькуляторе (от 3 номеров)";
      if (code !== "UON26W" && code !== "SOLO26WA" && code !== "EXTRA50") return "Промокод не найден";
      return "";
    });
    const isPromoApplied = computed(() => {
      const code = promoCode.value.trim().toUpperCase();
      if (!code || promoError.value) return false;
      const months = parseInt(currentPeriod.value);
      if (code === "UON26W" && months >= 6) return true;
      if (code === "SOLO26WA") return true;
      return false;
    });
    const getMultiplier = (code, months, channels) => {
      if (code === "UON26W" && months >= 6) return 0.75;
      if (code === "SOLO26WA" && channels === 1) return 0.5;
      return 1;
    };
    const current = computed(() => {
      const p = priceTable[currentPeriod.value];
      const months = parseInt(currentPeriod.value);
      const code = promoCode.value.trim().toUpperCase();
      const basePricePerMonth = 1900;
      const baseOne = basePricePerMonth * 1 * months;
      const baseTwo = basePricePerMonth * 2 * months;
      const baseThree = basePricePerMonth * 3 * months;
      const m1 = getMultiplier(code, months, 1);
      const m2 = getMultiplier(code, months, 2);
      const m3 = getMultiplier(code, months, 3);
      const oneChannel = Math.round(p.oneChannel * m1);
      const twoChannelsTotal = Math.round(p.twoChannelsTotal * m2);
      const twoChannelsPerChannel = Math.round(p.twoChannelsPerChannel * m2);
      const threeChannelsTotal = Math.round(p.threeChannelsTotal * m3);
      const threeChannelsSubNumber = Math.round(p.threeChannelsSubNumber * m3);
      const mailingMonthly = Math.round(p.mailingMonthly * m1);
      const saveOne = baseOne - oneChannel;
      const saveTwo = baseTwo - twoChannelsTotal;
      const saveThree = baseThree - threeChannelsTotal;
      return {
        oneChannelPrice: oneChannel,
        twoChannelsTotal,
        twoChannelsPerChannel,
        threeChannelsTotal,
        threeChannelsSubNumber,
        threeChannelsSubLabel: p.threeChannelsSubLabel,
        mailingMonthlyPrice: mailingMonthly,
        baseOne,
        saveOne,
        baseTwo,
        saveTwo,
        baseThree,
        saveThree,
        smsEmailPrice: 490 * months
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pricing-section" }, _attrs))} data-v-c986fe2e><h2 class="page-title" data-v-c986fe2e>Тарифы <span class="green-title" data-v-c986fe2e>WhatsApi</span></h2><div class="period-switcher" data-v-c986fe2e><!--[-->`);
      ssrRenderList(periods, (label, key) => {
        _push(`<button class="${ssrRenderClass({ active: currentPeriod.value === key })}" data-v-c986fe2e>${ssrInterpolate(label)}</button>`);
      });
      _push(`<!--]--></div><div class="pricing-grid" data-v-c986fe2e><div class="card card-small" data-v-c986fe2e><div class="card-header" data-v-c986fe2e><div class="price-wrap" data-v-c986fe2e>`);
      if (current.value.saveOne > 0) {
        _push(`<div class="old-price" data-v-c986fe2e>${ssrInterpolate(current.value.baseOne)} ₽ </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="price" data-v-c986fe2e>${ssrInterpolate(current.value.oneChannelPrice)} ₽</div></div><div class="icons" data-v-c986fe2e><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-c986fe2e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-c986fe2e><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-c986fe2e></div></div><p class="subtitle green" data-v-c986fe2e> За 1 канал отправки <span class="info-tooltip" data-v-c986fe2e><svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c986fe2e><path d="M8.25 6C8.25 5.70333 8.33798 5.41332 8.5028 5.16664C8.66762 4.91997 8.90189 4.72771 9.17598 4.61418C9.45007 4.50065 9.75167 4.47094 10.0426 4.52882C10.3336 4.5867 10.6009 4.72956 10.8107 4.93934C11.0204 5.14912 11.1633 5.41639 11.2212 5.70736C11.2791 5.99834 11.2494 6.29994 11.1358 6.57402C11.0223 6.84811 10.83 7.08238 10.5834 7.2472C10.3367 7.41203 10.0467 7.5 9.75 7.5C9.35218 7.5 8.97065 7.34196 8.68934 7.06066C8.40804 6.77936 8.25 6.39782 8.25 6ZM20.25 10.125C20.25 12.1275 19.6562 14.0851 18.5436 15.7501C17.4311 17.4152 15.8498 18.7129 13.9997 19.4793C12.1496 20.2456 10.1138 20.4461 8.14971 20.0555C6.18566 19.6648 4.38156 18.7005 2.96555 17.2845C1.54954 15.8685 0.585229 14.0643 0.194554 12.1003C-0.196122 10.1362 0.00438702 8.10043 0.770724 6.25033C1.53706 4.40023 2.83481 2.81892 4.49986 1.70637C6.1649 0.593821 8.12247 0 10.125 0C12.8094 0.00297771 15.383 1.07067 17.2812 2.96883C19.1793 4.86699 20.247 7.4406 20.25 10.125ZM18 10.125C18 8.56747 17.5381 7.04492 16.6728 5.74988C15.8075 4.45485 14.5776 3.44549 13.1386 2.84945C11.6997 2.25341 10.1163 2.09746 8.58867 2.40132C7.06107 2.70517 5.65788 3.4552 4.55654 4.55653C3.4552 5.65787 2.70518 7.06106 2.40132 8.58866C2.09746 10.1163 2.25341 11.6997 2.84945 13.1386C3.44549 14.5776 4.45485 15.8075 5.74989 16.6728C7.04493 17.5381 8.56748 18 10.125 18C12.2129 17.9978 14.2146 17.1674 15.691 15.691C17.1674 14.2146 17.9978 12.2129 18 10.125ZM11.25 13.5637V10.5C11.25 10.0027 11.0525 9.52581 10.7008 9.17417C10.3492 8.82254 9.87229 8.625 9.375 8.625C9.10933 8.6246 8.85208 8.71825 8.64883 8.88935C8.44558 9.06044 8.30944 9.29795 8.26452 9.55981C8.21961 9.82166 8.26881 10.091 8.40343 10.32C8.53804 10.5491 8.74938 10.7231 9 10.8113V13.875C9 14.3723 9.19755 14.8492 9.54918 15.2008C9.90081 15.5525 10.3777 15.75 10.875 15.75C11.1407 15.7504 11.3979 15.6568 11.6012 15.4857C11.8044 15.3146 11.9406 15.077 11.9855 14.8152C12.0304 14.5533 11.9812 14.284 11.8466 14.055C11.712 13.8259 11.5006 13.6519 11.25 13.5637Z" fill="#c4c4c4" data-v-c986fe2e></path></svg><span class="tooltip-text" data-v-c986fe2e><strong data-v-c986fe2e>Канал</strong> = один подключённый аккаунт мессенджера или соцсети.<br data-v-c986fe2e><br data-v-c986fe2e><strong data-v-c986fe2e>Номерной канал</strong> – канал коммуникации, в котором доступна отправка сообщений по номеру телефона. Могут быть подключены для: отправки автоматических уведомлений, массовых рассылок, переписок в омниканальном чате. Можно писать первым, безграничное количество диалогов.<br data-v-c986fe2e><br data-v-c986fe2e><strong data-v-c986fe2e>Неномерной канал</strong> – канал без привязки к номеру телефона (например, ВКонтакте, Telegram-бот). Обычно клиент должен написать первым. </span></span></p>`);
      if (current.value.saveOne > 0) {
        _push(`<div class="save-badge" data-v-c986fe2e> Выгода ${ssrInterpolate(current.value.saveOne)} ₽ </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="card card-small" data-v-c986fe2e><div class="card-header" data-v-c986fe2e><div class="price-wrap" data-v-c986fe2e>`);
      if (current.value.saveTwo > 0) {
        _push(`<div class="old-price" data-v-c986fe2e>${ssrInterpolate(current.value.baseTwo)} ₽ </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="price" data-v-c986fe2e>${ssrInterpolate(current.value.twoChannelsTotal)} ₽</div></div><div class="icons" data-v-c986fe2e><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-c986fe2e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-c986fe2e><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-c986fe2e></div></div><p class="subtitle green" data-v-c986fe2e> За 2 канала отправки <span class="info-tooltip" data-v-c986fe2e><svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c986fe2e><path d="M8.25 6C8.25 5.70333 8.33798 5.41332 8.5028 5.16664C8.66762 4.91997 8.90189 4.72771 9.17598 4.61418C9.45007 4.50065 9.75167 4.47094 10.0426 4.52882C10.3336 4.5867 10.6009 4.72956 10.8107 4.93934C11.0204 5.14912 11.1633 5.41639 11.2212 5.70736C11.2791 5.99834 11.2494 6.29994 11.1358 6.57402C11.0223 6.84811 10.83 7.08238 10.5834 7.2472C10.3367 7.41203 10.0467 7.5 9.75 7.5C9.35218 7.5 8.97065 7.34196 8.68934 7.06066C8.40804 6.77936 8.25 6.39782 8.25 6ZM20.25 10.125C20.25 12.1275 19.6562 14.0851 18.5436 15.7501C17.4311 17.4152 15.8498 18.7129 13.9997 19.4793C12.1496 20.2456 10.1138 20.4461 8.14971 20.0555C6.18566 19.6648 4.38156 18.7005 2.96555 17.2845C1.54954 15.8685 0.585229 14.0643 0.194554 12.1003C-0.196122 10.1362 0.00438702 8.10043 0.770724 6.25033C1.53706 4.40023 2.83481 2.81892 4.49986 1.70637C6.1649 0.593821 8.12247 0 10.125 0C12.8094 0.00297771 15.383 1.07067 17.2812 2.96883C19.1793 4.86699 20.247 7.4406 20.25 10.125ZM18 10.125C18 8.56747 17.5381 7.04492 16.6728 5.74988C15.8075 4.45485 14.5776 3.44549 13.1386 2.84945C11.6997 2.25341 10.1163 2.09746 8.58867 2.40132C7.06107 2.70517 5.65788 3.4552 4.55654 4.55653C3.4552 5.65787 2.70518 7.06106 2.40132 8.58866C2.09746 10.1163 2.25341 11.6997 2.84945 13.1386C3.44549 14.5776 4.45485 15.8075 5.74989 16.6728C7.04493 17.5381 8.56748 18 10.125 18C12.2129 17.9978 14.2146 17.1674 15.691 15.691C17.1674 14.2146 17.9978 12.2129 18 10.125ZM11.25 13.5637V10.5C11.25 10.0027 11.0525 9.52581 10.7008 9.17417C10.3492 8.82254 9.87229 8.625 9.375 8.625C9.10933 8.6246 8.85208 8.71825 8.64883 8.88935C8.44558 9.06044 8.30944 9.29795 8.26452 9.55981C8.21961 9.82166 8.26881 10.091 8.40343 10.32C8.53804 10.5491 8.74938 10.7231 9 10.8113V13.875C9 14.3723 9.19755 14.8492 9.54918 15.2008C9.90081 15.5525 10.3777 15.75 10.875 15.75C11.1407 15.7504 11.3979 15.6568 11.6012 15.4857C11.8044 15.3146 11.9406 15.077 11.9855 14.8152C12.0304 14.5533 11.9812 14.284 11.8466 14.055C11.712 13.8259 11.5006 13.6519 11.25 13.5637Z" fill="#c4c4c4" data-v-c986fe2e></path></svg><span class="tooltip-text" data-v-c986fe2e><strong data-v-c986fe2e>Канал</strong> = один подключённый аккаунт мессенджера или соцсети.<br data-v-c986fe2e><br data-v-c986fe2e><strong data-v-c986fe2e>Номерной канал</strong> – канал коммуникации, в котором доступна отправка сообщений по номеру телефона. Могут быть подключены для: отправки автоматических уведомлений, массовых рассылок, переписок в омниканальном чате. Можно писать первым, безграничное количество диалогов.<br data-v-c986fe2e><br data-v-c986fe2e><strong data-v-c986fe2e>Неномерной канал</strong> – канал без привязки к номеру телефона (например, ВКонтакте, Telegram-бот). Обычно клиент должен написать первым. </span></span></p><p class="sub-text" data-v-c986fe2e>${ssrInterpolate(current.value.twoChannelsPerChannel)} ₽ за канал</p>`);
      if (current.value.saveTwo > 0) {
        _push(`<div class="save-badge" data-v-c986fe2e> Выгода ${ssrInterpolate(current.value.saveTwo)} ₽ </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="card card-small" data-v-c986fe2e><div class="card-header" data-v-c986fe2e><div class="price-wrap" data-v-c986fe2e>`);
      if (current.value.saveThree > 0) {
        _push(`<div class="old-price" data-v-c986fe2e>${ssrInterpolate(current.value.baseThree)} ₽ </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="price" data-v-c986fe2e>${ssrInterpolate(current.value.threeChannelsTotal)} ₽</div></div><div class="icons" data-v-c986fe2e><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-c986fe2e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-c986fe2e><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-c986fe2e></div></div><p class="subtitle green" data-v-c986fe2e> За 3 канала отправки <span class="info-tooltip" data-v-c986fe2e><svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c986fe2e><path d="M8.25 6C8.25 5.70333 8.33798 5.41332 8.5028 5.16664C8.66762 4.91997 8.90189 4.72771 9.17598 4.61418C9.45007 4.50065 9.75167 4.47094 10.0426 4.52882C10.3336 4.5867 10.6009 4.72956 10.8107 4.93934C11.0204 5.14912 11.1633 5.41639 11.2212 5.70736C11.2791 5.99834 11.2494 6.29994 11.1358 6.57402C11.0223 6.84811 10.83 7.08238 10.5834 7.2472C10.3367 7.41203 10.0467 7.5 9.75 7.5C9.35218 7.5 8.97065 7.34196 8.68934 7.06066C8.40804 6.77936 8.25 6.39782 8.25 6ZM20.25 10.125C20.25 12.1275 19.6562 14.0851 18.5436 15.7501C17.4311 17.4152 15.8498 18.7129 13.9997 19.4793C12.1496 20.2456 10.1138 20.4461 8.14971 20.0555C6.18566 19.6648 4.38156 18.7005 2.96555 17.2845C1.54954 15.8685 0.585229 14.0643 0.194554 12.1003C-0.196122 10.1362 0.00438702 8.10043 0.770724 6.25033C1.53706 4.40023 2.83481 2.81892 4.49986 1.70637C6.1649 0.593821 8.12247 0 10.125 0C12.8094 0.00297771 15.383 1.07067 17.2812 2.96883C19.1793 4.86699 20.247 7.4406 20.25 10.125ZM18 10.125C18 8.56747 17.5381 7.04492 16.6728 5.74988C15.8075 4.45485 14.5776 3.44549 13.1386 2.84945C11.6997 2.25341 10.1163 2.09746 8.58867 2.40132C7.06107 2.70517 5.65788 3.4552 4.55654 4.55653C3.4552 5.65787 2.70518 7.06106 2.40132 8.58866C2.09746 10.1163 2.25341 11.6997 2.84945 13.1386C3.44549 14.5776 4.45485 15.8075 5.74989 16.6728C7.04493 17.5381 8.56748 18 10.125 18C12.2129 17.9978 14.2146 17.1674 15.691 15.691C17.1674 14.2146 17.9978 12.2129 18 10.125ZM11.25 13.5637V10.5C11.25 10.0027 11.0525 9.52581 10.7008 9.17417C10.3492 8.82254 9.87229 8.625 9.375 8.625C9.10933 8.6246 8.85208 8.71825 8.64883 8.88935C8.44558 9.06044 8.30944 9.29795 8.26452 9.55981C8.21961 9.82166 8.26881 10.091 8.40343 10.32C8.53804 10.5491 8.74938 10.7231 9 10.8113V13.875C9 14.3723 9.19755 14.8492 9.54918 15.2008C9.90081 15.5525 10.3777 15.75 10.875 15.75C11.1407 15.7504 11.3979 15.6568 11.6012 15.4857C11.8044 15.3146 11.9406 15.077 11.9855 14.8152C12.0304 14.5533 11.9812 14.284 11.8466 14.055C11.712 13.8259 11.5006 13.6519 11.25 13.5637Z" fill="#c4c4c4" data-v-c986fe2e></path></svg><span class="tooltip-text" data-v-c986fe2e><strong data-v-c986fe2e>Канал</strong> = один подключённый аккаунт мессенджера или соцсети.<br data-v-c986fe2e><br data-v-c986fe2e><strong data-v-c986fe2e>Номерной канал</strong> – канал коммуникации, в котором доступна отправка сообщений по номеру телефона. Могут быть подключены для: отправки автоматических уведомлений, массовых рассылок, переписок в омниканальном чате. Можно писать первым, безграничное количество диалогов.<br data-v-c986fe2e><br data-v-c986fe2e><strong data-v-c986fe2e>Неномерной канал</strong> – канал без привязки к номеру телефона (например, ВКонтакте, Telegram-бот). Обычно клиент должен написать первым. </span></span></p><p class="sub-text" data-v-c986fe2e>${ssrInterpolate(current.value.threeChannelsSubNumber)} ₽ ${ssrInterpolate(current.value.threeChannelsSubLabel)}</p>`);
      if (current.value.saveThree > 0) {
        _push(`<div class="save-badge" data-v-c986fe2e> Выгода ${ssrInterpolate(current.value.saveThree)} ₽ </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="card card-tall" data-v-c986fe2e><h3 data-v-c986fe2e>Рассылки Ватс<span data-v-c986fe2e>Апи</span></h3><div class="price-main" data-v-c986fe2e>${ssrInterpolate(current.value.mailingMonthlyPrice)} ₽</div><ul class="features" data-v-c986fe2e><li data-v-c986fe2e>Для интервальной массовой рассылки по клиентской базе</li><li data-v-c986fe2e>Неограниченное количество сообщений</li></ul><p class="note" data-v-c986fe2e>*Каналы отправки оплачиваются отдельно</p></div><div class="card card-medium light-bg" data-v-c986fe2e><h3 data-v-c986fe2e>БЕСПЛАТНО</h3><ul class="features" data-v-c986fe2e><li data-v-c986fe2e>Интеграции CRM</li><li data-v-c986fe2e>Омниканальный чат</li><li data-v-c986fe2e>Неограниченное количество сообщений</li></ul></div><div class="card card-medium light-bg promo-card" data-v-c986fe2e><div class="promo-header" data-v-c986fe2e><div class="promo-title-group" data-v-c986fe2e><h3 data-v-c986fe2e>Система промокодов</h3><p class="sub-text" data-v-c986fe2e>Введите код для пересчета стоимости</p></div></div><div class="promo-container" data-v-c986fe2e><div class="input-group" data-v-c986fe2e><input type="text"${ssrRenderAttr("value", promoCode.value)} placeholder="Ваш промокод..." class="${ssrRenderClass([{ "active-border": isPromoApplied.value, "error-border": promoError.value }, "promo-input"])}" data-v-c986fe2e></div>`);
      if (promoError.value) {
        _push(`<div class="save-badge promo-error" data-v-c986fe2e>${ssrInterpolate(promoError.value)}</div>`);
      } else if (isPromoApplied.value) {
        _push(`<div class="save-badge promo-badge" data-v-c986fe2e> Скидка применена </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="card card-medium light-bg" data-v-c986fe2e><h3 data-v-c986fe2e>Мессенджер VK</h3><div class="price-main" data-v-c986fe2e>790 ₽ <span data-v-c986fe2e>/В месяц</span></div></div><div class="card card-medium light-bg" data-v-c986fe2e><h3 data-v-c986fe2e>SMS</h3><div class="price-main" data-v-c986fe2e>${ssrInterpolate(current.value.smsEmailPrice)} ₽ <span data-v-c986fe2e>/ ${ssrInterpolate(periods[currentPeriod.value])}</span></div></div><div class="card card-medium light-bg" data-v-c986fe2e><h3 data-v-c986fe2e>Email</h3><div class="price-main" data-v-c986fe2e>${ssrInterpolate(current.value.smsEmailPrice)} ₽ <span data-v-c986fe2e>/ ${ssrInterpolate(periods[currentPeriod.value])}</span></div></div><div class="card card-wide light-bg" data-v-c986fe2e><h3 data-v-c986fe2e>Масштабируете бизнес <br data-v-c986fe2e>или управляете сетью?</h3><ul class="features" data-v-c986fe2e><li data-v-c986fe2e> Подготовим специальные условия и персональный тариф для крупных проектов </li></ul><button class="cta-button" data-v-c986fe2e> Связаться с нами <span class="arrow" data-v-c986fe2e>→</span></button></div><div class="card card-small light-bg" data-v-c986fe2e><h3 data-v-c986fe2e>Скоро</h3><ul class="features no-marker" data-v-c986fe2e><li data-v-c986fe2e><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-c986fe2e> Avito </li><li data-v-c986fe2e><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-c986fe2e> Instagram* </li><li data-v-c986fe2e><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-c986fe2e> Telegram-Bot </li></ul></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/tariff/Tariff.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Tariff = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c986fe2e"]]);
const _sfc_main$1 = {
  __name: "SectionsTariffCalculator",
  __ssrInlineRender: true,
  setup(__props) {
    const phoneCount = ref(1);
    const selectedPeriod = ref(1);
    const options = ref({ massMail: false, vkTariff: false, emailTariff: false, smsTariff: false });
    const promoCode = ref("");
    const periods = [
      {
        label: "1 мес",
        value: 1,
        price1: 1900,
        price2: 3380,
        price3: 4170,
        mass: 2900
      },
      {
        label: "3 мес",
        value: 3,
        price1: 5557,
        price2: 9790,
        price3: 12190,
        mass: 7900
      },
      {
        label: "6 мес",
        value: 6,
        price1: 10900,
        price2: 18900,
        price3: 23900,
        mass: 14900
      },
      {
        label: "12 мес",
        value: 12,
        price1: 19990,
        price2: 33800,
        price3: 41700,
        mass: 23900
      }
    ];
    const currentData = computed(
      () => periods.find((p) => p.value === selectedPeriod.value)
    );
    const promoError = computed(() => {
      const code = promoCode.value.trim().toUpperCase();
      if (!code) return "";
      if (code === "EXTRA50" && phoneCount.value < 3) return "Промокод EXTRA50 действует от 3 номеров";
      if (code === "UON26W" && selectedPeriod.value < 6) return "Промокод UON26W действует от 6 месяцев";
      if (code === "SOLO26WA" && phoneCount.value !== 1) return "Промокод SOLO26WA только для 1 номера";
      if (!["EXTRA50", "UON26W", "SOLO26WA"].includes(code)) return "Промокод не найден";
      return "";
    });
    const isPromoApplied = computed(() => {
      const code = promoCode.value.trim().toUpperCase();
      return code && !promoError.value;
    });
    const basePartPrice = computed(() => {
      const p = currentData.value;
      const baseOneMonthPrice = 1900 * selectedPeriod.value;
      const code = promoCode.value.trim().toUpperCase();
      if (phoneCount.value === 1) return p.price1;
      if (phoneCount.value === 2) return p.price2;
      if (phoneCount.value === 3) return p.price3;
      const extraCount = phoneCount.value - 3;
      const extraDiscount = code === "EXTRA50" && phoneCount.value >= 3 && !promoError.value ? 0.5 : 1;
      const extraPrice = baseOneMonthPrice * 0.5 * extraCount * extraDiscount;
      return p.price3 + extraPrice;
    });
    const totalPrice = computed(() => {
      let total = basePartPrice.value;
      if (options.value.vkTariff) total += 790 * selectedPeriod.value;
      if (options.value.massMail) total += currentData.value.mass;
      if (options.value.emailTariff) total += 490 * selectedPeriod.value;
      if (options.value.smsTariff) total += 490 * selectedPeriod.value;
      const code = promoCode.value.trim().toUpperCase();
      if (promoError.value) return total;
      if (code === "UON26W") return Math.round(total * 0.75);
      if (code === "SOLO26WA") return Math.round(total * 0.5);
      return total;
    });
    const economy = computed(() => {
      const retailPricePerUnit = 1900;
      const baseline = retailPricePerUnit * phoneCount.value * selectedPeriod.value;
      const servicesBaseline = (options.value.vkTariff ? 790 * selectedPeriod.value : 0) + (options.value.massMail ? 2900 * selectedPeriod.value : 0) + (options.value.emailTariff ? 490 * selectedPeriod.value : 0) + (options.value.smsTariff ? 490 * selectedPeriod.value : 0);
      const savings = baseline + servicesBaseline - totalPrice.value;
      return savings > 0 ? savings : 0;
    });
    const getWord = (n) => {
      const cases = [2, 0, 1, 1, 1, 2];
      const titles = ["номер", "номера", "номеров"];
      return titles[n % 100 > 4 && n % 100 < 20 ? 2 : cases[Math.min(n % 10, 5)]];
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "calculator-container" }, _attrs))} data-v-75d92c06><div class="pricing-grid" data-v-75d92c06><div class="setup-column" data-v-75d92c06><header class="setup-header" data-v-75d92c06><h1 class="title" data-v-75d92c06>Конфигуратор тарифа</h1><p class="subtitle" data-v-75d92c06> Настройте решение под масштаб вашего бизнеса с максимальной выгодой </p></header><div class="config-flex-row" data-v-75d92c06><section class="config-card slider-part" data-v-75d92c06><div class="control-info" data-v-75d92c06><span class="control-label" data-v-75d92c06>Количество линий (номеров)</span><div class="counter-display" data-v-75d92c06><span class="count" data-v-75d92c06>${ssrInterpolate(phoneCount.value)}</span><span class="unit" data-v-75d92c06>${ssrInterpolate(getWord(phoneCount.value))}</span></div></div><div class="slider-wrapper" data-v-75d92c06><input type="range" min="1" max="20"${ssrRenderAttr("value", phoneCount.value)} class="custom-slider" style="${ssrRenderStyle({ "--progress": (phoneCount.value - 1) / 19 * 100 + "%" })}" data-v-75d92c06><div class="slider-marks" data-v-75d92c06><span data-v-75d92c06>1</span><span data-v-75d92c06>20+</span></div></div><div class="badge-container" data-v-75d92c06>`);
      if (phoneCount.value === 2) {
        _push(`<div class="discount-badge special" data-v-75d92c06><span class="sparkle" data-v-75d92c06>🎁</span> Спеццена за 2 номера </div>`);
      } else if (phoneCount.value >= 3) {
        _push(`<div class="discount-badge extra" data-v-75d92c06><span class="sparkle" data-v-75d92c06>🔥</span> Оптовая скидка активирована </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section class="config-card services-part" data-v-75d92c06><span class="control-label" data-v-75d92c06>Дополнительные каналы</span><div class="services-mini-grid" data-v-75d92c06><div class="${ssrRenderClass([{ active: options.value.vkTariff }, "service-item"])}" data-v-75d92c06><div class="service-icon vk-bg" data-v-75d92c06>VK</div><div class="service-details" data-v-75d92c06><span class="service-label" data-v-75d92c06>ВКонтакте</span><span class="service-cost" data-v-75d92c06>790 ₽/мес</span></div><div class="dot-check" data-v-75d92c06></div></div><div class="${ssrRenderClass([{ active: options.value.massMail }, "service-item"])}" data-v-75d92c06><div class="service-icon mail-bg" data-v-75d92c06>@</div><div class="service-details" data-v-75d92c06><span class="service-label" data-v-75d92c06>Рассылки</span><span class="service-cost" data-v-75d92c06>${ssrInterpolate(currentData.value.mass)} ₽ за ${ssrInterpolate(currentData.value.label)}</span></div><div class="dot-check" data-v-75d92c06></div></div><div class="${ssrRenderClass([{ active: options.value.emailTariff }, "service-item"])}" data-v-75d92c06><div class="service-icon email-bg" data-v-75d92c06>✉</div><div class="service-details" data-v-75d92c06><span class="service-label" data-v-75d92c06>Email</span><span class="service-cost" data-v-75d92c06>490 ₽/мес</span></div><div class="dot-check" data-v-75d92c06></div></div><div class="${ssrRenderClass([{ active: options.value.smsTariff }, "service-item"])}" data-v-75d92c06><div class="service-icon sms-bg" data-v-75d92c06>SMS</div><div class="service-details" data-v-75d92c06><span class="service-label" data-v-75d92c06>SMS</span><span class="service-cost" data-v-75d92c06>490 ₽/мес</span></div><div class="dot-check" data-v-75d92c06></div></div></div></section></div></div><aside class="summary-column" data-v-75d92c06><div class="summary-card" data-v-75d92c06><div class="period-tabs" data-v-75d92c06><!--[-->`);
      ssrRenderList(periods, (p) => {
        _push(`<button class="${ssrRenderClass({ active: selectedPeriod.value === p.value })}" data-v-75d92c06>${ssrInterpolate(p.label)}</button>`);
      });
      _push(`<!--]--></div><div class="total-block" data-v-75d92c06><div class="total-top" data-v-75d92c06><span class="total-label" data-v-75d92c06>Итого к оплате</span></div><div class="total-price" data-v-75d92c06><span class="num" data-v-75d92c06>${ssrInterpolate(Math.round(totalPrice.value).toLocaleString())}</span><span class="currency" data-v-75d92c06>₽</span></div>`);
      if (economy.value > 0) {
        _push(`<div class="savings-label" data-v-75d92c06> Ваша экономия ${ssrInterpolate(Math.round(economy.value).toLocaleString())} ₽ </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="promo-block" data-v-75d92c06><input type="text"${ssrRenderAttr("value", promoCode.value)} placeholder="Введите промокод" class="${ssrRenderClass([{ "active-border": isPromoApplied.value, "error-border": promoError.value }, "promo-input"])}" data-v-75d92c06>`);
      if (promoError.value) {
        _push(`<span class="promo-error" data-v-75d92c06>${ssrInterpolate(promoError.value)}</span>`);
      } else if (isPromoApplied.value) {
        _push(`<span class="promo-success" data-v-75d92c06> Скидка применена! </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="price-breakdown" data-v-75d92c06><div class="item" data-v-75d92c06><span data-v-75d92c06>Лицензии (${ssrInterpolate(phoneCount.value)} шт.)</span><span data-v-75d92c06>${ssrInterpolate(Math.round(basePartPrice.value).toLocaleString())} ₽</span></div>`);
      if (options.value.vkTariff) {
        _push(`<div class="item" data-v-75d92c06><span data-v-75d92c06>ВКонтакте (на ${ssrInterpolate(selectedPeriod.value)} мес.)</span><span data-v-75d92c06>${ssrInterpolate((790 * selectedPeriod.value).toLocaleString())} ₽</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (options.value.massMail) {
        _push(`<div class="item" data-v-75d92c06><span data-v-75d92c06>Рассылки (на ${ssrInterpolate(selectedPeriod.value)} мес.)</span><span data-v-75d92c06>${ssrInterpolate(currentData.value.mass.toLocaleString())} ₽</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (options.value.emailTariff) {
        _push(`<div class="item" data-v-75d92c06><span data-v-75d92c06>Email (на ${ssrInterpolate(selectedPeriod.value)} мес.)</span><span data-v-75d92c06>${ssrInterpolate((490 * selectedPeriod.value).toLocaleString())} ₽</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (options.value.smsTariff) {
        _push(`<div class="item" data-v-75d92c06><span data-v-75d92c06>SMS (на ${ssrInterpolate(selectedPeriod.value)} мес.)</span><span data-v-75d92c06>${ssrInterpolate((490 * selectedPeriod.value).toLocaleString())} ₽</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="summary-actions" data-v-75d92c06>`);
      if (phoneCount.value < 20) {
        _push(`<a href="https://app.whatsapi.ru/" class="primary-btn" target="_blank" data-v-75d92c06> Оформить подписку </a>`);
      } else {
        _push(`<button class="primary-btn" data-v-75d92c06> Получить предложение </button>`);
      }
      _push(`<p class="footer-note" data-v-75d92c06>14 дней бесплатного теста на все функции</p></div></div></aside></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/tariff/TariffCalculator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TariffCalculator = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-75d92c06"]]);
const _sfc_main = {
  __name: "tariffs",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Тарифы — WhatsApi",
      description: "Выберите подходящий тариф для подключения мессенджеров к вашей CRM. Гибкие цены, 14 дней бесплатно, без ограничений по сообщениям.",
      ogTitle: "Тарифы WhatsApi — интеграция мессенджеров с CRM",
      ogDescription: "Гибкие тарифы на подключение WhatsApp, Telegram и других мессенджеров к вашей CRM. 14 дней бесплатного периода.",
      ogUrl: "https://whatsapi.ru/tariffs"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Frame, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Tariff, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(TariffCalculator, { class: "mt-120" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Tariff),
              createVNode(TariffCalculator, { class: "mt-120" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tariffs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tariffs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d84eab42"]]);

export { tariffs as default };
//# sourceMappingURL=tariffs-BY9PBGQm.mjs.map
