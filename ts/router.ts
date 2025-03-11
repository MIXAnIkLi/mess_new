import { renderLogin } from "./modules/login";
import { renderSignin } from "./modules/signin"; 
import { renderChats } from "./modules/chats";
import { renderEditInfo } from "./modules/editInfo";
import { renderNotFound } from "./modules/NotFound";
import { renderServerError } from "./modules/serverError";

export function initRouter(templates: object): void {
  function route() {
    const path: string = window.location.hash.substring(1);
    const data: object = {};
    switch (path) {
      case "/login":
        renderSignin(templates, data);
        break;
      default:
        renderSignin(templates, data);
    }
  }
  route()
 
  // window.addEventListener('hashchange', route)
  // window.addEventListener('load', route)
}
