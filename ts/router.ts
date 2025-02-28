import { renderLogin } from "./modules/login";

export function initRouter(templates: object): void {
  function route() {
    const path: string = window.location.hash.substring(1);
    const data: object = {};
    switch (path) {
      case "/login":
        renderLogin(templates, data);
        break;
      default:
        renderLogin(templates, data);
    }
  }
  route()
 
  window.addEventListener('hashchange', route)
  window.addEventListener('load', route)
}
