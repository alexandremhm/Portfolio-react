(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{106:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(73),i=a.n(o),c=(a(88),a(1)),l=a(2),s=a(4),m=a(3),u=a(15),p=a(74),d=a.n(p),h=(a(89),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"profile-card"},r.a.createElement("img",{src:d.a,alt:"John",className:"img-profile"}))}}]),a}(r.a.Component)),f=(a(90),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"about"},r.a.createElement(h,null),r.a.createElement("div",{className:"text-about-container"},r.a.createElement("div",{className:"moldura-dois"},r.a.createElement("div",{className:"moldura-um"},r.a.createElement("p",{id:"about-paragraph"},"I have a degree in Technological Chemistry and for a long time I was happy with this path, until it was no longer enough. I recently started my studies in web development  and I am very excited to cross this new universe. When not coding it's easy to find me playing PC or playstation games, cooking or just relaxing, listening some chill music.")))),r.a.createElement("p",{id:"about-paragraph-mobile"},"I have a degree in Technological Chemistry and for a long time I was happy with this path, until it was no longer enough. I recently started my studies in web development  and I am very excited to cross this new universe. When not coding it's easy to find me playing PC or playstation games, cooking or just relaxing, listening some chill music."))}}]),a}(r.a.Component)),g=a(75),b=a.n(g),v=a(76),E=a.n(v),j=(a(106),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.projectsData,t=e.title,a=e.description,n=e.image,o=e.credits,i=e.technologies,c=e.linkRepo,l=e.linkDemo;return r.a.createElement("div",{className:"project-card-conatiner"},r.a.createElement("div",{className:"project-card"},r.a.createElement("h1",{className:"project-card-title"},t),r.a.createElement("img",{src:n,alt:t,className:"project-card-image"}),r.a.createElement("p",{className:"project-card-none"},a),r.a.createElement("p",{className:"project-card-tech"},i.join(" - ")),r.a.createElement("p",{className:"project-card-none"},o),r.a.createElement("button",{className:"project-card-button-repo"},r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},"Repo")),r.a.createElement("button",{className:"project-card-button-demo"},r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},"Demo"))))}}]),a}(n.Component)),y=(a(107),a(108),a(109),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e={infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,centerMode:!0,className:"center",dots:!0};return r.a.createElement("div",null,r.a.createElement(b.a,e,E.a.map((function(e,t){return r.a.createElement(j,{key:t,projectsData:e})}))))}}]),a}(n.Component)),x=(a(110),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"projects",className:"carousel-big-container"},r.a.createElement(y,null))}}]),a}(r.a.Component)),O=(a(111),a(32)),k=a(43),w=a(82),N=a(47);Object(N.a)("user_3xlFXTaDJ18AUeIMpjzhY");var C,S,T,I=function(){var e=Object(n.useState)({from_name:"",message:"",reply_to:""}),t=Object(w.a)(e,2),a=t[0],o=t[1],i=function(e){var t=e.target,n=t.name,r=t.value;o(Object(k.a)(Object(k.a)({},a),{},Object(O.a)({},n,r)))};return r.a.createElement("div",{className:"text-inputs"},r.a.createElement("div",null,r.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),Object(N.b)("alexandremhm_id","template_w4im8q4",a,"user_3xlFXTaDJ18AUeIMpjzhY").then((function(e){alert("Your message has been sent!")})).catch((function(e){alert("Something went wrong, please try again.")}))},method:"POST"},r.a.createElement("div",{class:"mb-3"},r.a.createElement("label",{for:"exampleFormControlInput1",class:"form-label"},"Name:"),r.a.createElement("input",{type:"text",name:"from_name",placeholder:"Your name",value:a.from_name,onChange:i,class:"form-control",id:"exampleFormControlInput1"}),r.a.createElement("label",{for:"exampleFormControlInput1",class:"form-label"},"Email address:"),r.a.createElement("input",{type:"text",name:"reply_to",placeholder:"Your email",value:a.reply_to,onChange:i,class:"form-control",id:"exampleFormControlInput1"})),r.a.createElement("label",{for:"floatingTextarea"},"Write your message here:"),r.a.createElement("textarea",{type:"text-area",name:"message",placeholder:"Your message",value:a.message,onChange:i,class:"form-control form-control-md",rows:"3"}),r.a.createElement("div",{id:"btn-div"},r.a.createElement("button",{type:"submit",className:"btn col-12 btn-primary",id:"btn-submit-contact"},"Submit")))))},P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"contact"},r.a.createElement("div",null,r.a.createElement("h1",{className:"header-hello"},"Say Hi!!! Feel free to contact me at any time if you have any questions.")),r.a.createElement("div",{id:"contact-big-container"},r.a.createElement(I,null)),r.a.createElement("div",{id:"contact-links"},r.a.createElement("div",{className:"contact-div"},r.a.createElement("a",{href:"https://github.com/alexandremhm",target:"blank"},r.a.createElement("img",{src:"https://img.icons8.com/ios-glyphs/30/000000/github.png",alt:"GitHub"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/alexandremhm/",target:"blank"},r.a.createElement("img",{src:"https://img.icons8.com/ios-glyphs/30/000000/linkedin.png",alt:"LinkedIn"})))))}}]),a}(r.a.Component),D=a(12),_=(a(112),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"Footer"},r.a.createElement("div",{className:"footer-container"},r.a.createElement("h2",{className:"footer-text"},"Thanks! Let's Code with Pride!"),r.a.createElement(D.a,{smooth:!0,to:"/#home"},r.a.createElement("img",{id:"img-footer",src:"https://img.icons8.com/ios-filled/50/000000/home-buton.png",alt:"home"}))))}}]),a}(r.a.Component)),H=a(77),z=a.n(H),M=(a(117),a(118),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"home",className:"general"},r.a.createElement("div",{className:"homeContainer"},r.a.createElement("aside",{className:"aside-home"},r.a.createElement("a",{href:"https://github.com/alexandremhm",target:"blank",className:"social-links"},r.a.createElement("img",{src:"https://img.icons8.com/ios-glyphs/30/000000/github.png",alt:"GitHub",className:"aside-home-img"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/alexandremhm/",target:"blank",className:"social-links"},r.a.createElement("img",{src:"https://img.icons8.com/ios-glyphs/30/000000/linkedin.png",alt:"LinkedIn",className:"aside-home-img"}))),r.a.createElement("div",{className:"Header"},r.a.createElement("h2",{className:"title-two"},"Hello, I'm"),r.a.createElement("h1",{className:"title-one"},"Matheus Alexandre"),r.a.createElement("h1",{className:"title-one"},"Web Development Student"),r.a.createElement("h3",{className:"title-general"},"My Second 'Hello World' happened when I started coding!!!")),r.a.createElement("img",{className:"img-home",id:"dev-pic",src:z.a,alt:"developer"})),r.a.createElement(f,null),r.a.createElement(x,null),r.a.createElement(P,null),r.a.createElement(_,null))}}]),a}(r.a.Component)),R=a(13),F=a(14),Y=a(31),A=(a(119),F.a.nav(C||(C=Object(R.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  position: fixed;\n  font-size: 1.2rem;\n  background-color: #333;\n  align-items: center;\n  width: 100%;\n  gap: 1rem;\n  @media (max-width: 768px) {\n    background-color: #333;\n    top: 0;\n    right: 0;\n    flex-flow: column;\n    gap:1rem;\n    width: 100%;\n    heigh: 100%;\n    transform: ",";\n    transition: transform 0.3s ease-in-out;\n    position: fixed;\n  };\n"])),(function(e){return e.open?"translateX(0)":"translateX(100%)"}))),J=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.open;return r.a.createElement(A,{className:"header-container",open:e},r.a.createElement(D.a,{className:"header-link",smooth:!0,to:"/#home"},"Home"),r.a.createElement(D.a,{className:"header-link",smooth:!0,to:"/#about"},"About"),r.a.createElement(D.a,{className:"header-link",smooth:!0,to:"/#projects"},"Projects"),r.a.createElement(D.a,{className:"header-link",smooth:!0,to:"/#contact"},"Contact"))}}]),a}(r.a.Component),L=F.a.div(S||(S=Object(R.a)(["\n  width: 2rem;\n  height: 2rem;\n  z-index: 10;\n  display: none;\n  top: 0.85rem;\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n    z-index: 100;\n    position: fixed;\n  };\n  div {\n    width: 2rem;\n    background: red;\n    height: 0.25rem;\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }    \n  }\n"])),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),W=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).setOPen=function(){var t=e.state.open;e.setState({open:!t})},e.state={open:!1},e.setOPen=e.setOPen.bind(Object(Y.a)(e)),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{open:e,onClick:this.setOPen},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement(J,{open:e,setOPen:this.setOPen}))}}]),a}(n.Component),X=F.a.nav(T||(T=Object(R.a)([" \n  height: 70px;\n  padding: 0 20px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  position: fixed;\n  background: #333;\n  opacity: 0.9;\n  z-index: 100;\n\n"]))),q=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(X,null,r.a.createElement(W,null))}}]),a}(n.Component),G=a(48),U=(a(204),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this)).state={update:!0,obfuscate:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.update,a=e.obfuscate;return r.a.createElement("div",null,r.a.createElement("div",{className:"opening"},r.a.createElement("h1",{className:"opening-hero"},r.a.createElement(G.a,{speed:50,characters:"01",exclude:[" ","!"],obfuscate:a,update:t,revealDuration:1e3,revealDelay:1e3}," New Ideas"))),r.a.createElement("div",null,r.a.createElement("h1",{className:"opening-hero-two"},r.a.createElement(G.a,{speed:50,characters:"01",exclude:[" ","!"],obfuscate:a,update:t,revealDuration:1e3,revealDelay:1500}," New Solutions"))))}}]),a}(r.a.Component)),B=a(208),K=(a(205),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={showOpening:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState((function(){return{showOpening:!1}}))}),3500)}},{key:"render",value:function(){return r.a.createElement(u.a,{basename:"/portfolio-react"},this.state.showOpening?r.a.createElement(U,null):r.a.createElement(B.a.div,{exit:{opacity:.6},initial:{opacity:0},animate:{opacity:1}},r.a.createElement("div",{className:"app-container"},r.a.createElement(q,null),r.a.createElement(M,null))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){e.exports=a.p+"static/media/matheus.ff84438d.jpg"},76:function(e,t){e.exports=[{id:1,title:"Pixel-art",description:"Pixel-art is a game where you can create your own pixel art. You can create your own pixel art and share it with your friends. The page allows you to configure the pixel-board size, and reloading the page brings to you new colors options.",technologies:["HTML","CSS","JavaScript"],image:"https://gartic.com.br/imgs/mural/ma/matheus1569/super-mario-pixel-art-2.png?raw=true",credits:"Project part of Trybe course",linkRepo:"https://github.com/alexandremhm/pixel-art",linkDemo:"https://alexandremhm.github.io/pixel-art/"},{id:2,title:"To do List",description:"To do list is a simple todo list application. You can add, edit and delete tasks. You can also mark tasks as done.",technologies:["HTML","CSS","JavaScript","React","Context-API"],image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYlgTjf0xkfUut-h4hg_WuHqnp6XmTsmVe4pjFCDIUzKCzDc&s?raw=true",credits:"Personal Project",linkRepo:"https://github.com/alexandremhm/todo-react",linkDemo:"https://alexandremhm.github.io/todo-react/"},{id:3,title:"Trivia Game",description:"Trivia Game is a simple quizz game. By correcting questions you accumulate points and at the end a ranking with the highest scores is presented.",technologies:["HTML","CSS","JavaScript","React","Redux"],image:"https://github.com/alexandremhm/trivia/blob/gh-pages/Captura%20de%20tela%20de%202021-09-16%2018-57-03.png?raw=true",credits:"Project part of Trybe course",linkRepo:"https://github.com/alexandremhm/trivia",linkDemo:"https://alexandremhm.github.io/trivia"},{id:4,title:"ApPalmirinha",description:"ApPalimirinha is a simple recipe app for drink's and food's.",technologies:["HTML","CSS","JavaScript","React","Redux","Context-API"],image:"https://github.com/alexandremhm/appalmirinha/blob/main/src/images/trybe_cook.svg?raw=true",credits:"Project part of Trybe course",linkRepo:"https://github.com/alexandremhm/appalmirinha",linkDemo:"https://alexandremhm.github.io/appalmirinha"}]},77:function(e,t,a){e.exports=a.p+"static/media/dev.fdf247da.svg"},83:function(e,t,a){e.exports=a(206)},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.5ee714c2.chunk.js.map