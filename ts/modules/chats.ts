import Handlebars from "../../partials/partials.ts";
import cn from "bem-cn-lite";

const cnChats = cn("chats");


export function renderChats(templates: object, data: object) {
  const templ = `
    <div class = ${cnChats()}>
      <div class=${cnChats("left-side")}>
      <div class=${cnChats("top-sticky-position")}>
        <div class=${cnChats("top-bar")}>
        {{> buttonCircle className='${cnChats("hide-button")}' textBtn='<-'}}
         {{> iconCirle myAcc='true' src='https://cdn-icons-png.flaticon.com/512/147/147144.png'}}
          {{> nikname text = 'MISHA'}}
        </div>
        <div class=${cnChats("search")}>
      {{> inputSerch className = '${cnChats(
        "search-input"
      )}' type = 'text' name='search' placeholder = 'Поиск по чатам'}}
      {{> button className="${cnChats("switch-button")}"  textBtn ='Contact' }}
      </div>
      </div>
      {{#each chatItem}}
          {{> chatItem }}
      {{/each}}
      
      </div>
      <div class=${cnChats("right-side")}>
      <div class=${cnChats("chat-interlocutor")}>
        {{> iconCirle  src='https://cdn-icons-png.flaticon.com/512/147/147144.png'}}
        {{> nikname text = 'KSUSHA'}}
      </div>
      <div class=${cnChats("current-chats")}>
      {{#each message}}
          {{> message }}
      {{/each}}
       </div>
      {{> inputMessage name = 'message' placeholder = 'Сообщение' className="${cnChats("input-message")}"}}
      </div>
    </div>`;
    
  data = {
    chatItem: [
      {
        "user-name": "Andrey",
        "last-mess": "Привет",
        "time-least-mess": "21:30",
        "num-unread-mess": "3",
      },
      {
        "user-name": "Andrey",
        "last-mess": "Салам, на рахате?",
        "time-least-mess": "23:30",
      },
      {
        "user-name": "Света",
        "last-mess": "Че каго",
        "time-least-mess": "21:30",
        "num-unread-mess": "10",
      },
      {
        "user-name": "Петрович",
        "last-mess": "Бизнес всем",
        "time-least-mess": "21:30",
      },
      {
        "user-name": "Andrey",
        "last-mess": "Привет",
        "time-least-mess": "21:30",
      },
      {
        "user-name": "Andrey",
        "last-mess": "Салам, на рахате?",
        "time-least-mess": "23:30",
      },
      {
        "user-name": "Света",
        "last-mess": "Че каго",
        "time-least-mess": "21:30",
        "num-unread-mess": "10",
      },
      {
        "user-name": "Петрович",
        "last-mess": "Бизнес всем",
        "time-least-mess": "21:30",
      },
      {
        "user-name": "Andrey",
        "last-mess": "Привет",
        "time-least-mess": "21:30",
      },
      {
        "user-name": "Andrey",
        "last-mess": "Салам, на рахате?",
        "time-least-mess": "23:30",
      },
      {
        "user-name": "Света",
        "last-mess": "Че каго",
        "time-least-mess": "21:30",
        "num-unread-mess": "10",
      },
      {
        "user-name": "Петрович",
        "last-mess": "Бизнес всем",
        "time-least-mess": "21:30",
      },
      {
        "user-name": "Andrey",
        "last-mess": "Привет",
        "time-least-mess": "21:30",
      },
      {
        "user-name": "Andrey",
        "last-mess": "Салам, на рахате?",
        "time-least-mess": "23:30",
      },
      {
        "user-name": "Света",
        "last-mess": "Че каго",
        "time-least-mess": "21:30",
        "num-unread-mess": "10",
      },
      {
        "user-name": "Петрович",
        "last-mess": "Бизнес всем",
        "time-least-mess": "21:30",
      },
      {
        "user-name": "Andrey",
        "last-mess": "Привет",
        "time-least-mess": "21:30",
      },
    ],
    message : [
      {
        "textMessage":'Привет, давай поговорим с тобой о чем ты захочешь, я расскажу много итересного собвтенно все',
       "timeMessage":'21:39'
      },
      {
       "textMessage":'Привет всем',
       "timeMessage":'21:39',
       "send" : true,
      },
      {
        "textMessage":'Привет, давай поговорим с тобой о чем ты захочешь, я расскажу много итересного собвтенно все',
       "timeMessage":'21:39'
      },
      {
       "textMessage":'Привет всем',
       "timeMessage":'21:39',
       "send" : true,
      },
      {
        "textMessage":'Привет, давай поговорим с тобой о чем ты захочешь, я расскажу много итересного собвтенно все',
       "timeMessage":'21:39'
      },
      {
       "textMessage":'Привет всем',
       "timeMessage":'21:39',
       "send" : true,
      },
      {
        "textMessage":'Привет, давай поговорим с тобой о чем ты захочешь, я расскажу много итересного собвтенно все',
       "timeMessage":'21:39'
      },
      {
       "textMessage":'Привет всем',
       "timeMessage":'21:39',
       "send" : true,
      },
      {
        "textMessage":'Привет, давай поговорим с тобой о чем ты захочешь, я расскажу много итересного собвтенно все',
       "timeMessage":'21:39'
      },
      {
       "textMessage":'Привет всем',
       "timeMessage":'21:39',
       "send" : true,
      },
      {
        "textMessage":'Привет, давай поговорим с тобой о чем ты захочешь, я расскажу много итересного собвтенно все',
       "timeMessage":'21:39'
      },
      {
       "textMessage":'Привет всем',
       "timeMessage":'21:39',
       "send" : true,
      },
      {
        "textMessage":'Привет, давай поговорим с тобой о чем ты захочешь, я расскажу много итересного собвтенно все',
       "timeMessage":'21:39'
      },
      {
       "textMessage":'Привет всем',
       "timeMessage":'21:39',
       "send" : true,
      },
      {
        "textMessage":'Привет, давай поговорим с тобой о чем ты захочешь, я расскажу много итересного собвтенно все',
       "timeMessage":'21:39'
      },
      {
       "textMessage":'Привет всем',
       "timeMessage":'21:39',
       "send" : true,
      },

    ]
  };

  templates["chats"] = Handlebars.compile(templ);
  const loginTemplate = templates["chats"];
  const renderedHtml = loginTemplate(data);

  document.getElementById("app").innerHTML = renderedHtml;
  console.log('ddd')
}
