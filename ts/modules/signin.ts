import Handlebars from '../../partials/partials.ts';
import cn from 'bem-cn-lite'; 
import FormValidations from './utils/formValidation.ts';

const cnSignin = cn('signin');
'/'

export function renderSignin(templates: object, data: object) {

  const templ = `
    <form class = ${cnSignin()}  novalidate data-js-form>
    <h1 class = ${cnSignin('title')}>Регистрация</h1>

    {{> inputIn 
      error = 'true' 
      required='true' 
      pattern = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/' 
      minlength = '3' 
      type="text" 
      placeholder = 'pochta@yandex.ru' 
      name="mail" 
      label="true" 
      label-name="Почта"}}

    {{> inputIn 
      error = 'true' 
      required='true' 
      pattern = "/^[a-zA-Z0-9._%+-]"
      type="text" 
      placeholder = 'ivanivanov' 
      name="login" 
      label="true" 
      label-name="Логин"}}

    {{> inputIn 
      error = 'true' 
      required='true' 
      pattern = "/[\u0400-\u04FF]+/g"
      type="text" 
      placeholder = 'Иван' 
      name="first-name" 
      label="true" 
      label-name="Имя"}}

    {{> inputIn 
      error = 'true' 
      required='true' 
      type="text" 
      pattern = "/^[а-яА-Я0-9._%+-]"
      placeholder = 'Иванов' 
      name="second-name" 
      label="true" 
      label-name="Фамилия"}}

    {{> inputIn  
      minlength = '8' 
      type="tel" 
      placeholder = '+7 (909) 967 30 30' 
      name="tel" 
      label="true" 
      label-name="Телефон"}}

    {{> inputIn 
      minlength = '3' 
      error = 'true' 
      maxlength= '12' 
      title = "Минимальная длина 8 символов, Содержит хотя бы одну букву верхнего регистра"
      required='true' 
      type="password" 
      placeholder = '••••••••••••' 
      name="password" 
      label="true" 
      label-name="Пароль"}}

    {{> inputIn   
      type="password" 
      placeholder = '••••••••••••' 
      name="password-two" 
      label="true" 
      label-name="Пароль (еще раз)"}}

    <div class=${cnSignin('submit')}>
    {{> button  textBtn="Зарегистрироваться" className = '${cnSignin('button')}'}}
    {{> liteButton className = '${cnSignin('lite-button')}' text="Войти" title="Зарегистрироваться"}}
    
  
    </div>
    </form>`
    
    templates["signin"] = Handlebars.compile(templ)
    const loginTemplate = templates["signin"];
    const renderedHtml = loginTemplate(data)

  document.getElementById("app").innerHTML = renderedHtml;

  const signinForm = document.querySelector('.signin')
  
  new FormValidations()
  // signinForm?.addEventListener('submit', (event) => {
  //   event.preventDefault()

  //   const formData = new FormData(signinForm)
    
    
  //   console.log(Object.fromEntries(formData))
  // })
  // const inputLogin = signinForm?.login
  // inputLogin?.addEventListener('input', (event) => {
  //   const inputValue = event.target.value
  // })

}