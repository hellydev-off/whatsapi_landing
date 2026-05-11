import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _imports_0 = publicAssetsURL("/docs/sms/s1.png");
const _imports_1 = publicAssetsURL("/docs/sms/s2.png");
const _imports_2 = publicAssetsURL("/docs/sms/s3.png");
const _imports_3 = publicAssetsURL("/docs/sms/s4.png");
const _imports_4 = publicAssetsURL("/docs/sms/s5.png");
const _imports_5 = publicAssetsURL("/docs/sms/s6.png");
const _sfc_main = {
  __name: "SMS: Подключение",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-body" }, _attrs))}><h1>Инструкция по подключению SMS</h1><hr><h2>Шаг 1. Добавить аккаунт SMS</h2><ol><li>Зайдите в раздел <strong>Настройки → Интеграции → SMS</strong>.</li><li>Нажмите <strong>«Добавить аккаунт»</strong>.</li><li>Выберите вид аккаунта — <strong>SMS</strong>.</li><li>Примите условия работы канала SMS и нажмите <strong>«Сохранить»</strong>.</li></ol><p><img${ssrRenderAttr("src", _imports_0)} alt="Описание картинки"></p><hr><h2>Шаг 2. Включить аккаунт</h2><ol><li>В списке аккаунтов найдите созданный <strong>SMS</strong>.</li><li>Нажмите <strong>«Включить»</strong>. <img${ssrRenderAttr("src", _imports_1)} alt="Описание картинки"></li></ol><hr><h2>Шаг 3. Установить приложение на телефон</h2><ol><li>Система предложит установить приложение из <strong>RuStore</strong>.</li><li>Скачайте и установите приложение.</li><li>Вернитесь в личный кабинет и нажмите <strong>«Я уже скачал»</strong>.</li></ol><h2><img${ssrRenderAttr("src", _imports_2)} alt="Описание картинки"></h2><h2>Шаг 4. Авторизоваться в приложении</h2><ol><li>Запустите приложение на телефоне.</li><li>Выдайте все необходимые разрешения (доступ к SMS, контактам, работе в фоне).</li><li>Нажмите <strong>«Отсканировать QR-код»</strong>.</li><li>Наведите камеру на QR-код, который отобразится в личном кабинете. <img${ssrRenderAttr("src", _imports_3)} alt="Описание картинки"></li></ol><hr><h2>Шаг 5. Запустить рассылку</h2><ol><li>После успешной авторизации в приложении нажмите <strong>«Начать рассылку»</strong>.</li><li><strong>Важно:</strong> если не нажать <strong>«Начать рассылку»</strong>, сообщения будут накапливаться в очереди и отправятся только после запуска. <img${ssrRenderAttr("src", _imports_4)} alt="Описание картинки"></li></ol><hr><h2>Шаг 6. Настроить каскад (группу отправки)</h2><ol><li>Перейдите в раздел <strong>Аккаунты → Группы</strong>.</li><li>Откройте группу <strong>Default cascade group</strong> (или создайте новую).</li><li>Добавьте аккаунт <strong>SMS</strong> в группу.</li><li>Обязательно поставьте <strong>SMS</strong> на последнее место в порядке отправки.</li></ol><blockquote><p><strong>Внимание:</strong> если SMS стоит выше Telegram или WhatsApp — все сообщения будут уходить через SMS, и затраты на рассылку возрастут. До остальных каналов очередь просто не дойдёт.</p></blockquote><h2><img${ssrRenderAttr("src", _imports_5)} alt="Описание картинки"></h2><h2>Рекомендации для стабильной работы</h2><ul><li>Держите телефон на зарядке.</li><li>Не выключайте экран во время активной рассылки.</li><li>Не закрывайте приложение <strong>SMS API</strong>.</li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/whatsapi/Информация/SMS: Подключение.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SMS_ Подключение-SrEQTIjO.mjs.map
