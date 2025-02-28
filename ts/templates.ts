import Handlebars from "handlebars";


export async function loadTemplates(): Promise<object> {
  const templates: object = {};

  async function loadTemplate(url: string): Promise<string> {
    const response = await fetch(url);
    const text =  await response.text();
    return text;
  }

  const partialsFile: string[] = ["buttonSubmit.hbs", 
    // "input.hbs", 
    // "chatItem.hbs"
  ];
  for (const part of partialsFile) {
    const partialUrl: string = `templates/${part}`;
    const partialContent: string = await loadTemplate(partialUrl);
    // console.log(partialContent)
    const partialName : string = part.replace(".hbs", "")
    Handlebars.registerPartial(partialName, partialContent)
  }

  const templateFiles: string[] = [
    "login.hbs",
    // "signin.hbs",
    // "serverError.hbs",
    // "pageNotFound.hbs",
    // "mainChats.hbs",
  ];
  for (const file of templateFiles) {
    const templateUrl: string = `templates/${file}`;
    console.log(templateUrl)
    const templateContent: string = await loadTemplate(templateUrl);
    // console.log(templateContent)
    templates[file.replace(".hbs", "")] = Handlebars.compile(templateContent);
  }
  console.log(templates)
  return templates
}
