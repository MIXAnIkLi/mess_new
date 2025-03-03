import Handlebars from '../../partials/partials.ts';
import cn from 'bem-cn-lite';

const cnSignin = cn('signin');

export function renderSignin(templates: object, data: object) {

  const templ = `
    <div class = ${cnSignin()}>
    <h1 class = ${cnSignin('title')}>Регистрация</h1>
    {{> inputIn type="text" placeholder = 'Почта' name="mail" label="true" label-name="Почта"}}
    {{> inputIn type="text" placeholder = 'Логин' name="login" label="true" label-name="Логин"}}
    {{> inputIn type="text" placeholder = 'Имя' name="first-name" label="true" label-name="Имя"}}
    {{> inputIn type="text" placeholder = 'Фамилия' name="second-name" label="true" label-name="Фамилия"}}
    {{> inputIn type="text" placeholder = 'Телефон' name="tel" label="true" label-name="Телефон"}}
    {{> inputIn type="text" placeholder = 'Пароль' name="password" label="true" label-name="Пароль"}}
    {{> inputIn type="text" placeholder = 'Пароль (еще раз)' name="password-two" label="true" label-name="Пароль (еще раз)"}}
    <div class=${cnSignin('submit')}>
    {{> button  textBtn="Зарегистрироваться" className = '${cnSignin('button')}'}}
    {{> liteButton className = '${cnSignin('lite-button')}' text="Войти" title="Зарегистрироваться"}}
    </div>
    </div>`
    templates["signin"] = Handlebars.compile(templ)
    const loginTemplate = templates["signin"];
    const renderedHtml = loginTemplate(data)

  document.getElementById("app").innerHTML = renderedHtml;
}