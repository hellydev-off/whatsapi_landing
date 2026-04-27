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

const _imports_0 = publicAssetsURL("/docs/image.webp");
const _imports_1 = publicAssetsURL("/docs/accounts.webp");
const _imports_2 = publicAssetsURL("/docs/add.webp");
const _imports_3 = publicAssetsURL("/docs/add_success.webp");
const _imports_4 = publicAssetsURL("/docs/info.webp");
const _imports_5 = publicAssetsURL("/docs/tariff.webp");
const _imports_6 = publicAssetsURL("/docs/account_modal.webp");
const _imports_7 = publicAssetsURL("/docs/qr_code.webp");
const _imports_8 = publicAssetsURL("/docs/accountsv2.webp");
const _imports_9 = publicAssetsURL("/docs/a_modal.webp");
const _sfc_main = {
  __name: "Подключение мессенджеров в Личном Кабинете",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-body" }, _attrs))}><h2>1. Вход в личный кабинет</h2><ol><li>Перейдите на страницу входа по ссылке: <a href="https://www.google.com/search?q=https://app.whatsapi.ru/login">https://app.whatsapi.ru/login</a></li><li>Введите ваши <strong>логин</strong> и <strong>пароль</strong>.</li><li>Если вы забыли пароль, нажмите <strong>«Сбросить пароль»</strong> и следуйте инструкциям, которые придут на вашу электронную почту.</li></ol><p><img${ssrRenderAttr("src", _imports_0)} alt="Описание картинки"></p><h2>2. Добавление нового аккаунта мессенджера</h2><p>В меню личного кабинета нажмите кнопку <strong>«+ Добавить аккаунт»</strong>. В появившемся окне «Настройка интеграции» выполните следующие действия:</p><p><img${ssrRenderAttr("src", _imports_1)} alt="Описание картинки"></p><ul><li><p>Выберите тип мессенджера, который хотите подключить: <img${ssrRenderAttr("src", _imports_2)} alt="Описание картинки"><img${ssrRenderAttr("src", _imports_3)} alt="Описание картинки"></p></li><li><p><strong>Выберите мессенджер:</strong> (например, WhatsApp или Max)</p></li><li><p>Нажмите кнопку <strong>«Сохранить»</strong>.</p></li></ul><blockquote><p><strong>Проверьте состояние вашей подписки:</strong></p><ul><li>Если подписка активна — продолжайте подключение.</li><li>Если нет — оформите подписку через раздел <strong>«Действие»</strong> → <strong>«Подписка»</strong> → <strong>«Оплатить»</strong> (стоимость тарифа, например Max 1 Month, составляет <strong>2 200 ₽/мес</strong>). <img${ssrRenderAttr("src", _imports_4)} alt="Описание картинки"><img${ssrRenderAttr("src", _imports_5)} alt="Описание картинки"></li></ul></blockquote><h2>3. Активация аккаунта</h2><ol><li>В списке аккаунтов найдите нужный и в колонке «Действие» выберите пункт <strong>«Включить»</strong>. <img${ssrRenderAttr("src", _imports_6)} alt="Описание картинки"></li><li>На экране появится <strong>QR-код</strong>. Откройте мессенджер на вашем телефоне и отсканируйте этот код. <img${ssrRenderAttr("src", _imports_7)} alt="Описание картинки"></li><li>После успешного сканирования статус аккаунта изменится на <strong>«Включен»</strong> (зеленый индикатор).</li></ol><h2>4. Просмотр и управление аккаунтами</h2><p>В разделе <strong>«Аккаунты»</strong> отображается таблица со списком всех подключений. <img${ssrRenderAttr("src", _imports_8)} alt="Описание картинки"></p><h3>Статусы аккаунта:</h3><table><thead><tr><th>Индикатор</th><th>Статус</th><th>Описание</th></tr></thead><tbody><tr><td>🟢</td><td><strong>Включен</strong></td><td>Аккаунт работает корректно.</td></tr><tr><td>🔴</td><td><strong>Отключен</strong></td><td>Аккаунт временно неактивен.</td></tr><tr><td>🟡</td><td><strong>Связь разорвана</strong></td><td>Требуется повторная активация (сканирование QR-кода).</td></tr></tbody></table><h3>Статусы подписки:</h3><ul><li><strong>Активна до [дата]</strong> — аккаунт будет работать до указанного срока.</li><li><strong>Не требуется активации</strong> — аккаунт готов к использованию.</li><li><strong>Активировать</strong> — необходимо оплатить тариф и выполнить активацию.</li></ul><h3>Возможные действия с аккаунтом:</h3><p><img${ssrRenderAttr("src", _imports_9)} alt="Описание картинки"> Через кнопку меню в колонке «Действие» доступны следующие опции:</p><ul><li><strong>Подписка</strong> — управление оплатой и тарифом.</li><li><strong>Настройки</strong> — изменение внутренних параметров аккаунта.</li><li><strong>Сменить имя</strong> — редактирование отображаемого названия.</li><li><strong>Включить / Выключить</strong> — запуск или приостановка работы шлюза.</li><li><strong>Сбросить</strong> — удаление текущих настроек для подключения другого номера телефона.</li><li><strong>Сменить прокси</strong> — изменение сетевых настроек для аккаунта.</li><li><strong>Удалить аккаунт</strong> — полное удаление записи из личного кабинета.</li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("docs/whatsapi/Информация/Подключение мессенджеров в Личном Кабинете.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Подключение мессенджеров в Личном Кабинете-jxB40VWI.mjs.map
