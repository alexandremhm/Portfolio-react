(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{106:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(73),i=a.n(o),c=(a(88),a(1)),l=a(2),s=a(4),m=a(3),u=a(14),d=a(74),p=a.n(d),h=(a(89),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"profile-card"},r.a.createElement("img",{src:p.a,alt:"John",className:"img-profile"}))}}]),a}(r.a.Component)),g=(a(90),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"about"},r.a.createElement("div",{className:"text-about-container"},r.a.createElement("div",{className:"moldura-dois"},r.a.createElement("div",{className:"moldura-um"},r.a.createElement("p",{id:"about-paragraph"},"I have a degree in Technological Chemistry and for a long time I was happy with this path, until it was no longer enough. I recently started my studies in web development and I am very excited to cross this new universe. When not coding it's easy to find me playing PC or playstation games, cooking or just relaxing, listening some chill music."))),r.a.createElement(h,null)),r.a.createElement("p",{id:"about-paragraph-mobile"},"I have a degree in Technological Chemistry and for a long time I was happy with this path, until it was no longer enough. I recently started my studies in web development and I am very excited to cross this new universe. When not coding it's easy to find me playing PC or playstation games, cooking or just relaxing, listening some chill music."))}}]),a}(r.a.Component)),f=a(75),v=a.n(f),b=a(76),E=a.n(b),j=(a(106),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.projectsData,t=e.title,a=e.description,n=e.image,o=e.credits,i=e.technologies,c=e.linkRepo,l=e.linkDemo;return r.a.createElement("div",{className:"project-card-container"},r.a.createElement("div",{className:"project-card"},r.a.createElement("h1",{className:"project-card-title"},t),r.a.createElement("img",{src:n,alt:t,className:"project-card-image"}),r.a.createElement("p",{className:"project-card-none project-card-description"},a),r.a.createElement("p",{className:"project-card-tech"},i.join(" - ")),r.a.createElement("p",{className:"project-card-none project-card-credits"},o),r.a.createElement("div",{className:"project-card-links"},r.a.createElement("button",{className:"project-card-button btn-margin"},r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"btn-link"},"Repo")),r.a.createElement("button",{className:"project-card-button"},r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"btn-link"},"Demo")))))}}]),a}(n.Component)),w=(a(107),a(108),a(109),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e={infinite:!0,speed:window.innerWidth>768?800:500,slidesToShow:window.innerWidth>768?2:1,slidesToScroll:1,centerMode:!0,className:"center",accessibility:!0};return r.a.createElement("div",{id:"projectsnav"},r.a.createElement(v.a,e,E.a.map((function(e,t){return r.a.createElement(j,{key:t,projectsData:e})}))))}}]),a}(n.Component)),x=(a(110),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"projects",className:"carousel-big-container"},r.a.createElement(w,null))}}]),a}(r.a.Component)),y=(a(111),a(32)),O=a(43),k=a(82),N=a(47);Object(N.a)("user_3xlFXTaDJ18AUeIMpjzhY");var C,S,I,P=function(){var e=Object(n.useState)({from_name:"",message:"",reply_to:""}),t=Object(k.a)(e,2),a=t[0],o=t[1],i=function(e){var t=e.target,n=t.name,r=t.value;o(Object(O.a)(Object(O.a)({},a),{},Object(y.a)({},n,r)))};return r.a.createElement("div",{className:"text-inputs"},r.a.createElement("div",null,r.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),Object(N.b)("alexandremhm_id","template_w4im8q4",a,"user_3xlFXTaDJ18AUeIMpjzhY").then((function(e){alert("Your message has been sent!")})).catch((function(e){alert("Something went wrong, please try again.")}))},method:"POST"},r.a.createElement("div",{class:"mb-3"},r.a.createElement("label",{for:"exampleFormControlInput1",class:"form-label"},"Name:"),r.a.createElement("input",{type:"text",name:"from_name",placeholder:"Your name",value:a.from_name,onChange:i,class:"form-control",id:"exampleFormControlInput1"}),r.a.createElement("label",{for:"exampleFormControlInput1",class:"form-label"},"Email address:"),r.a.createElement("input",{type:"text",name:"reply_to",placeholder:"Your email",value:a.reply_to,onChange:i,class:"form-control",id:"exampleFormControlInput1"})),r.a.createElement("label",{for:"floatingTextarea",className:"form-label"},"Write your message here:"),r.a.createElement("textarea",{type:"text-area",name:"message",placeholder:"Your message",value:a.message,onChange:i,class:"form-control form-control-md",rows:"3"}),r.a.createElement("div",{id:"btn-div"},r.a.createElement("button",{type:"submit",className:"btn col-12 btn-primary",id:"btn-submit-contact"},"Submit")))))},T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"contact"},r.a.createElement("div",null,r.a.createElement("h1",{className:"header-hello"},"Say Hi!!! Feel free to contact me at any time if you have any questions.")),r.a.createElement("div",{id:"contact-big-container"},r.a.createElement(P,null)),r.a.createElement("div",{id:"contact-links"},r.a.createElement("div",{className:"contact-div"},r.a.createElement("a",{href:"https://github.com/alexandremhm",target:"blank",className:"links-contact"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"aside-contact-img"},r.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"}))),r.a.createElement("a",{href:"https://www.linkedin.com/in/alexandremhm/",target:"blank",className:"links-contact"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"aside-contact-img"},r.a.createElement("path",{d:"M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"}))))))}}]),a}(r.a.Component),z=a(77),M=a.n(z),D=(a(112),a(113),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"home",className:"general"},r.a.createElement("div",{className:"homeContainer"},r.a.createElement("aside",{className:"aside-home"},r.a.createElement("a",{href:"https://github.com/alexandremhm",target:"blank",className:"social-links"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"aside-home-img"},r.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"}))),r.a.createElement("a",{href:"https://www.linkedin.com/in/alexandremhm/",target:"blank",className:"social-links"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"aside-home-img"},r.a.createElement("path",{d:"M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"})))),r.a.createElement("div",{className:"Header"},r.a.createElement("h2",{className:"title-two"},"Hello, I'm"),r.a.createElement("h1",{className:"title-one title-name"},"Matheus Alexandre"),r.a.createElement("h1",{className:"title-one"},"Web Development Student"),r.a.createElement("h3",{className:"title-general"},"My Second 'Hello World' happened when I started coding!!!")),r.a.createElement("img",{className:"img-home",id:"dev-pic",src:M.a,alt:"developer"})),r.a.createElement(g,null),r.a.createElement(x,null),r.a.createElement(T,null))}}]),a}(r.a.Component)),H=a(12),_=a(13),R=a(31),J=(a(114),a(22)),W=_.a.nav(C||(C=Object(H.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  position: fixed;\n  font-size: 1.2rem;\n  background-color: #333;\n  align-items: center;\n  width: 100%;\n  gap: 1rem;\n  @media (max-width: 768px) {\n    background-color: #333;\n    top: 0;\n    right: 0;\n    flex-flow: column;\n    gap:1rem;\n    width: 100%;\n    heigh: 100%;\n    transform: ",";\n    transition: transform 0.3s ease-in-out;\n    position: fixed;\n  };\n"])),(function(e){return e.open?"translateX(0)":"translateX(100%)"})),A=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.open;return r.a.createElement(W,{className:"header-container",open:e},r.a.createElement(J.a,{className:"header-link",smooth:!0,to:"/#home"},"Home"),r.a.createElement(J.a,{className:"header-link",smooth:!0,to:"/#about"},"About"),r.a.createElement(J.a,{className:"header-link",smooth:!0,to:"/#projectsnav"},"Projects"),r.a.createElement(J.a,{className:"header-link",smooth:!0,to:"/#contact"},"Contact"))}}]),a}(r.a.Component),F=_.a.div(S||(S=Object(H.a)(["\n  width: 2rem;\n  height: 2rem;\n  z-index: 10;\n  display: none;\n  top: 0.85rem;\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n    z-index: 100;\n    position: fixed;\n  };\n  div {\n    width: 2rem;\n    background: #43D993;\n    height: 0.25rem;\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }    \n  }\n"])),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),Y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).setOPen=function(){var t=e.state.open;e.setState({open:!t})},e.state={open:!1},e.setOPen=e.setOPen.bind(Object(R.a)(e)),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{open:e,onClick:this.setOPen},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement(A,{open:e,setOPen:this.setOPen}))}}]),a}(n.Component),B=_.a.nav(I||(I=Object(H.a)([" \n  height: 60px;\n  padding: 0 20px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  position: fixed;\n  background: #333;\n  opacity: 0.9;\n  z-index: 100;\n\n"]))),L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(B,null,r.a.createElement(Y,null))}}]),a}(n.Component),X=a(48),q=(a(203),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this)).state={update:!0,obfuscate:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.update,a=e.obfuscate;return r.a.createElement("div",null,r.a.createElement("div",{className:"opening"},r.a.createElement("h1",{className:"opening-hero"},r.a.createElement(X.a,{speed:50,characters:"01",exclude:[" ","!"],obfuscate:a,update:t,revealDuration:1e3,revealDelay:1e3}," New Ideas"))),r.a.createElement("div",{className:"opening-div-two"},r.a.createElement("h1",{className:"opening-hero-two"},r.a.createElement(X.a,{speed:50,characters:"01",exclude:[" ","!"],obfuscate:a,update:t,revealDuration:1e3,revealDelay:1500}," New Solutions"))))}}]),a}(r.a.Component)),V=a(207),U=(a(204),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={showOpening:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState((function(){return{showOpening:!1}}))}),3500)}},{key:"render",value:function(){return r.a.createElement(u.a,{basename:"/"},this.state.showOpening?r.a.createElement(q,null):r.a.createElement(V.a.div,{exit:{opacity:.6},initial:{opacity:0},animate:{opacity:1}},r.a.createElement("div",{className:"app-container"},r.a.createElement(L,null),r.a.createElement(D,null))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){e.exports=a.p+"static/media/matheus.ff84438d.jpg"},76:function(e,t){e.exports=[{id:1,title:"Pixel-art",description:"Pixel-art is a game where you can create your own pixel art. The page allows you to configure the pixel-board size, and reloading the page brings to you new colors options.",technologies:["HTML","CSS","JavaScript"],image:"https://gartic.com.br/imgs/mural/ma/matheus1569/super-mario-pixel-art-2.png?raw=true",credits:"Project part of Trybe course",linkRepo:"https://github.com/alexandremhm/pixel-art",linkDemo:"https://alexandremhm.github.io/pixel-art/"},{id:2,title:"To do List",description:"To do list is a simple todo list application. You can add, edit and delete tasks. You can also mark tasks as done.",technologies:["HTML","CSS","JavaScript","React","Context-API"],image:"https://images-na.ssl-images-amazon.com/images/I/31S0Ht7jUyL.png?raw=true",credits:"Personal Project",linkRepo:"https://github.com/alexandremhm/todo-react",linkDemo:"https://alexandremhm.github.io/todo-react/"},{id:3,title:"Trivia Game",description:"Trivia Game is a simple quizz game. By correcting questions you accumulate points and at the end a ranking with the highest scores is presented.",technologies:["HTML","CSS","JavaScript","React","Redux"],image:"https://github.com/alexandremhm/trivia/blob/gh-pages/Captura%20de%20tela%20de%202021-09-16%2018-57-03.png?raw=true",credits:"Project part of Trybe course",linkRepo:"https://github.com/alexandremhm/trivia",linkDemo:"https://alexandremhm.github.io/trivia"},{id:4,title:"ApPalmirinha",description:"ApPalimirinha is a simple recipe app for drink's and food's.",technologies:["HTML","CSS","JavaScript","React","Redux","Context-API"],image:"https://github.com/alexandremhm/appalmirinha/blob/main/src/images/trybe_cook.svg?raw=true",credits:"Project part of Trybe course",linkRepo:"https://github.com/alexandremhm/appalmirinha",linkDemo:"https://alexandremhm.github.io/appalmirinha"}]},77:function(e,t,a){e.exports=a.p+"static/media/dev.918a3e3b.svg"},83:function(e,t,a){e.exports=a(205)},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.f6ed5c15.chunk.js.map