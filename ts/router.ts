import { renderLogin } from "./modules/login";
import { renderSignin } from "./modules/signin"; 
import { renderChats } from "./modules/chats";

export function initRouter(templates: object): void {
  function route() {
    const path: string = window.location.hash.substring(1);
    const data: object = {};
    switch (path) {
      case "/login":
        renderChats(templates, data);
        break;
      default:
        renderChats(templates, data);
    }
  }
  route()
 
  window.addEventListener('hashchange', route)
  window.addEventListener('load', route)
}
