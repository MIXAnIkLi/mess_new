import Handlebars from '../../partials/partials.ts';
import cn from 'bem-cn-lite'; 

const cnSignin = cn('signin');
'/'

export function renderSignin(templates: object, data: object) {

  const templ = `
    <div class = ${cnSignin()}>
    <h1 class = ${cnSignin('title')}>Регистрация</h1>
    {{> inputIn type="text" placeholder = 'pochta@yandex.ru' name="mail" label="true" label-name="Почта"}}
    {{> inputIn type="text" placeholder = 'ivanivanov' name="login" label="true" label-name="Логин"}}
    {{> inputIn type="text" placeholder = 'Иван' name="first-name" label="true" label-name="Имя"}}
    {{> inputIn type="text" placeholder = 'Иванов' name="second-name" label="true" label-name="Фамилия"}}
    {{> inputIn type="tel" placeholder = '+7 (909) 967 30 30' name="tel" label="true" label-name="Телефон"}}
    {{> inputIn type="password" placeholder = '••••••••••••' name="password" label="true" label-name="Пароль"}}
    {{> inputIn type="password" placeholder = '••••••••••••' name="password-two" label="true" label-name="Пароль (еще раз)"}}
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