import {loadTemplates} from './templates'
import { initRouter } from './router'

(async function initApp() {
  const templates = await loadTemplates()
  initRouter(templates)
})()