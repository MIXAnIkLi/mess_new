import Handlebars from "handlebars";
import cn from "bem-cn-lite";

const cnButtonSubmit = cn("button-submit");
const cnInput = cn("input-block");
const cnliteButton = cn("lite-button");
const cnButtonCircle = cn("button-circle");
const cnIconCirle = cn("icon-circle");
const cnNikName = cn("nikname");
const cnInputSerch = cn("serch-input");
const cnMessageInput = cn("message-input");
const cnChatItem = cn("chat-item");
const cnMessage = cn("message");

const buttonSubmit: string = `
  <button class="${cnButtonSubmit()} {{className}}" {{#if disabled}}disabled{{/if}}>
    {{textBtn}}
  </button>`;

const input: string = `
  <div class="${cnInput()}">
  {{#if label}}<label class="${cnInput("label")}">{{label-name}}</label>{{/if}}
  <input class="${cnInput("input")}" 
  title = "{{title}}"
  minlength= "{{minlength}}" 
  maxlength= "{{maxlength}}"
  pattern = "{{pattern}}"
  type="{{type}}"
  name="{{name}}"  
  placeholder="{{placeholder}}" 
  {{#if required}}required{{/if}}>
  {{#if error}}
  <span class="${cnInput('errors')}" data-js-form-field-errors ></span>
  {{/if}}
  </div>`;

const liteButton: string = `
  <a class="${cnliteButton()} {{className}}" href="{{href}}" title="{{title}}" >{{text}}</a>
  `;

const buttonCircle: string = `
  <button class="${cnButtonCircle()} {{className}}" {{#if disabled}}disabled{{/if}}>
    {{textBtn}}
  </button> 
  `;

const iconCirle: string = `
  <div class="${cnIconCirle()}">
        <img src={{src}} alt={{alt}}>
        {{#if myAcc}}
        <button class="${cnIconCirle('edit-button')}">⚙️</button>
        {{/if}}
  </div>
    
  `;

const nikname: string = `
  <div class="${cnNikName()}">
        <h2 class="${cnNikName('text')}">
          {{text}}
        </h2>
  </div>
  `;

const inputSerch: string = `
  <input class="${cnInputSerch()}" {{className}} type="{{type}}" name="{{name}}" placeholder="{{placeholder}}">
  `;

const inputMessage: string = `
    <div class="${cnMessageInput()} {{className}}">
    <button class="${cnMessageInput("button-emoji")}"> ☺︎ </button>
    <input class="${cnMessageInput(
      "input"
    )}" type="text" name="{{name}}" placeholder="{{placeholder}}">
    <button class="${cnMessageInput("button-sends")}"> ↑ </button>
    </div>
  `;

const chatItem: string = `
  <div class=${cnChatItem()}>
  <div class=${cnChatItem('left-side')}>
  <div class=${cnChatItem("img")}>{{> iconCirle src ='https://cdn-icons-png.flaticon.com/512/3607/3607444.png'}} </div>
  <div class=${cnChatItem("mid-content")}>
    <h3 class=${cnChatItem("user-name")}>{{user-name}}</h3>
    <p class=${cnChatItem("last-mess")}>{{last-mess}}</p>
  </div>
  </div>
  <div class=${cnChatItem("meta-info")}>
    <p class=${cnChatItem("time-last-mess")}> {{time-least-mess}} </p>
    {{#if num-unread-mess}}
    <div class=${cnChatItem("count-mess")}>
      <p class=${cnChatItem("unread-mess")}>{{num-unread-mess}}</p>
    </div>
    {{/if}} 
  </div>
</div>
  `;

const message: string = `
    {{#if send}}  
    <div class='${cnMessage()}  message__from'>
    {{else}}
    <div class='${cnMessage()}'>
    {{/if}}
      <p wrap = soft readonly class=${cnMessage('text-message')}> {{textMessage}} </p>
      <span class=${cnMessage('time')}>{{timeMessage}}</span>
    </div>
`

Handlebars.registerPartial("inputIn", input);
Handlebars.registerPartial("button", buttonSubmit);
Handlebars.registerPartial("liteButton", liteButton);
Handlebars.registerPartial("buttonCircle", buttonCircle);
Handlebars.registerPartial("iconCirle", iconCirle);
Handlebars.registerPartial("nikname", nikname);
Handlebars.registerPartial("inputSerch", inputSerch);
Handlebars.registerPartial("inputMessage", inputMessage);
Handlebars.registerPartial("chatItem", chatItem);
Handlebars.registerPartial("message", message);


export default Handlebars;
