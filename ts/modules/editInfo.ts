import Handlebars from "../../partials/partials.ts";
import cn from "bem-cn-lite";

const cnEditInfo = cn("edit-info");

export function renderEditInfo(templates: object, data: object) {
  const templ = `
  <div class="${cnEditInfo()}">
  <div class="${cnEditInfo('example-start-info')}">
  {{> iconCirle src=''}}
   {{> buttonCircle }}
   {{> nikname text='MISHA'}}
    </div>
    <div class="${cnEditInfo('field-rename')}">
    {{> inputIn type="text" placeholder = 'pochta@yandex.ru' name="mail" label="true" label-name="Почта"}}
    {{> inputIn type="text" placeholder = 'ivanov' name="mail" label="true" label-name="Логин"}}
    {{> inputIn type="text" placeholder = 'pochta@yandex.ru' name="mail" label="true" label-name="Имя"}}
    {{> inputIn type="text" placeholder = 'pochta@yandex.ru' name="mail" label="true" label-name="Фамилия"}}
    {{> inputIn type="text" placeholder = 'pochta@yandex.ru' name="mail" label="true" label-name="Псевдоним"}}
    {{> inputIn type="text" placeholder = 'pochta@yandex.ru' name="mail" label="true" label-name="Телефон"}}
    {{> inputIn type="password" placeholder = '......' name="mail" label="true" label-name=" Пароль"}}
    </div>
    {{> liteButton text='Применить изменения'}}
    {{> liteButton text='Выход'}}
    
   
    </div>
    </div>
   </div>
  `;
  

  templates["editInfo"] = Handlebars.compile(templ);
  const loginTemplate = templates["editInfo"];
  const renderedHtml = loginTemplate(data);

  document.getElementById("app").innerHTML = renderedHtml;
}
