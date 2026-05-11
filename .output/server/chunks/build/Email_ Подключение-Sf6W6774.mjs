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

const _imports_0 = publicAssetsURL("/docs/email/email.jpg");
const _sfc_main = {
  __name: "Email: Подключение",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-body" }, _attrs))}><h1>Инструкция по подключению Email (на примере Gmail)</h1><hr><ol><li>Зайдите в раздел <strong>Настройки → Интеграции → Email</strong>.</li><li>Нажмите <strong>«Добавить аккаунт»</strong>.<br> Выберите вид аккаунта — <strong>Email</strong>.<br> В поле <strong>«Провайдер»</strong> выберите <strong>Gmail</strong>.</li><li>Заполните поля: <ul><li><strong>Адрес отправки</strong> — ваш email (например, <code>example@gmail.com</code>).</li><li><strong>Пользователь</strong> — оставьте пустым, если совпадает с адресом отправки.</li><li><strong>Пароль для приложений</strong> — специальный пароль, созданный в настройках безопасности Google.</li><li><strong>SMTP сервер</strong> — <code>smtp.gmail.com</code> (подставится автоматически при выборе Gmail).</li><li><strong>Порт SMTP</strong> — <code>587</code>.</li></ul></li><li>Нажмите <strong>«Сохранить»</strong>.</li></ol><p><img${ssrRenderAttr("src", _imports_0)} alt="Описание картинки"></p><blockquote><p>После сохранения аккаунт <strong>Email</strong> можно добавить в каскадную группу аналогично <strong>SMS</strong>.</p></blockquote></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/whatsapi/Информация/Email: Подключение.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Email_ Подключение-Sf6W6774.mjs.map
