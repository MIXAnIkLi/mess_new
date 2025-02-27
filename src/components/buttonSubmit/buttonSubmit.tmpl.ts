import Handlebars from "handlebars";

const source: string= `
    <button class='{{className}}' {{#if disabled}}disabled{{/if}}>
      {{textBtn}}
    </button>
`

export const template = Handlebars.compile(source)