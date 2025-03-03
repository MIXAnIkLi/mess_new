import Handlebars from "handlebars"
import cn from 'bem-cn-lite';

const cnButtonSubmit = cn('button-submit');
const cnInput = cn('input-block');
const cnliteButton = cn('lite-button');

  const buttonSubmit = `
  <button class="${cnButtonSubmit()} {{className}}" {{#if disabled}}disabled{{/if}}>
    {{textBtn}}
  </button>`

  const input = `
  <div class="${cnInput()}">
  {{#if label}}<label class="${cnInput('label')}">{{label-name}}</label>{{/if}}
  <input class="${cnInput('input')}" type="{{type}}" name="{{name}}" placeholder="{{placeholder}}">
  </div>`

  const liteButton = `
  <a class="${cnliteButton()} {{className}}" href="{{href}}" title="{{title}}" >{{text}}</a>
  `

Handlebars.registerPartial('inputIn', input)
Handlebars.registerPartial('button', buttonSubmit)
Handlebars.registerPartial('liteButton', liteButton)

export default Handlebars
