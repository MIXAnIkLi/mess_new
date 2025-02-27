import {template} from './buttonSubmit.tmpl'
import {cnButtonSubmit} from './buttonSubmit.classname';

interface ButtonData {
    textBtn: string,
    className?: string,
    disabled: boolean
}

export function renderButton({className, ...data}: ButtonData): string {
    return template({...data, className: cnButtonSubmit(null, className) })
}

// function fetchTemplate(templatePath) {
//     return fetch(templatePath)
//         .then(response => response.text());
// }

// function renderView(templatePath) {
//     fetchTemplate(templatePath).then(templateData => {
//         const template = Handlebars.compile(templateData);
//         document.getElementById("app").innerHTML = template();
//     });
// }