import Handlebars from '../../partials/partials.ts';

export function renderLogin(templates: object, data: object) {

  templates = {}

  const templ = `<div class="login">
  <h1>Вход</h1>
  {{> inputIn type="text" placeholder = 'Логин' name="login"}}
  {{> inputIn type="password" placeholder = 'Пароль' name="password"}}
  {{> button textBtn="Авторизоваться" }}
  </div>`
  

  templates["login"] = Handlebars.compile(templ)
  const loginTemplate = templates["login"];
  const renderedHtml = loginTemplate(data)

  document.getElementById("app").innerHTML = renderedHtml;

}
