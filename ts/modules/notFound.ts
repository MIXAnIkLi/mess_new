import Handlebars from "../../partials/partials.ts";
import cn from "bem-cn-lite";

const cnError = cn("error");

export function renderNotFound(templates: object, data: object) {
  const templ = `
  <div class="${cnError()}">
    <h1>404</h1>
    <h2>Упс... Такой страницы не существует</h2>
    {{> liteButton text="<-- Вернуться назад"}}
    </div>
  `;
  

  templates["Error"] = Handlebars.compile(templ);
  const loginTemplate = templates["Error"];
  const renderedHtml = loginTemplate(data);

  document.getElementById("app").innerHTML = renderedHtml;
}
