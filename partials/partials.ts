import Handlebars from "handlebars"
import cn from 'bem-cn-lite';

const cnButtonSubmit = cn('button-submit');
const cnInput = cn('input');

  const buttonSubmit = `
  <button class='${cnButtonSubmit()}' {{#if disabled}}disabled{{/if}}>
    {{textBtn}}
  </button>`

  const input = `
  <input class='${cnInput()}' type="{{type}}" name="{{name}}" placeholder="{{placeholder}}">`

Handlebars.registerPartial('inputIn', input)
Handlebars.registerPartial('button', buttonSubmit)

export default Handlebars
