import Handlebars from '../../partials/partials.ts';
import cn from 'bem-cn-lite';

const cnLogin = cn('login');

export function renderLogin(templates: object, data: object) {

  const templ = `<div class=${cnLogin()}>
  <div class=${cnLogin('info')}>
  <h1 class = ${cnLogin('title')}>Вход</h1>
  {{> inputIn type="text" placeholder = 'Логин' name="login" label='true' label-name='Почта'}}
  {{> inputIn type="password" placeholder = 'Пароль' name="password"}}
  </div>
  <div class=${cnLogin('submit')}>
  {{> button disabled = 'true' textBtn="Авторизоваться" className = '${cnLogin('button')}'}}
  {{> liteButton className = '${cnLogin('lite-button')}' text="Нет аккаунта?" title="Зарегистрироваться" }}
   </div>
  </div>`
  

  templates["login"] = Handlebars.compile(templ)
  const loginTemplate = templates["login"];
  const renderedHtml = loginTemplate(data)

  document.getElementById("app").innerHTML = renderedHtml;


}
