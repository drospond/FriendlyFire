(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{146:function(e,a,t){e.exports=t(295)},152:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},156:function(e,a){},158:function(e,a){},170:function(e,a){},172:function(e,a){},200:function(e,a){},202:function(e,a){},203:function(e,a){},209:function(e,a){},211:function(e,a){},229:function(e,a){},232:function(e,a){},248:function(e,a){},251:function(e,a){},272:function(e,a,t){},273:function(e,a,t){},290:function(e,a,t){},291:function(e,a,t){},292:function(e,a,t){},295:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(28),l=t.n(c),s=t(5),o=t.n(s),i=t(18),m=t(45),u=(t(152),t(54)),d=t.n(u),h=t(25),f=t(26),p=function(e){return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper",id:"NavFooter"},r.a.createElement(h.b,{to:"/dashboard/".concat(e.userObject.id),className:"brand-logo center",id:"FFheadText"},"FriendlyFire"),e.isLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{id:"nav-mobile",className:"left hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(h.b,{to:"/FindFriends/".concat(e.userObject.id),id:"FFheadText"},"Find a Friend"))),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(h.b,{to:"/account/".concat(e.userObject.id),id:"FFheadText"},"Edit Profile")),r.a.createElement("li",{onClick:e.logOutUser},r.a.createElement("a",{href:"/"},"Sign Out")))):r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null))))},g=(t(272),function(){return r.a.createElement("footer",{className:"page-footer",id:"NavFooter"},r.a.createElement("div",{className:"footer-copyright"},r.a.createElement("div",{className:"container center-align"},"Made with ",r.a.createElement("span",{role:"img","aria-label":"finger-heart"},"\ud83e\udd1e")," by DDRL Entertainment \xa92020")))}),E=t(8),b=t(9),v=t(10),N=t(12),w=t(11),y=(t(273),t(3)),S=t.n(y),x=function(e){Object(N.a)(t,e);var a=Object(w.a)(t);function t(){var e;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password:"",error:""},e.handleInputChange=function(a){var t,n=a.target,r=n.name,c=n.value;e.setState((t={},Object(E.a)(t,r,c),Object(E.a)(t,"error",""),t))},e.handleSubmit=function(a,t,n){a.preventDefault(),S.a.post("/api/auth",{email:t,password:n}).then(function(){var a=Object(i.a)(o.a.mark((function a(t){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(console.log(t.data.data),!t.data.success){a.next=12;break}return a.next=4,d.a.verify(t.data.data,"secret");case 4:return n=a.sent,console.log(n),a.next=8,sessionStorage.setItem("jwt",t.data.data);case 8:return a.next=10,e.props.checkForToken();case 10:return a.next=12,e.props.history.push("/dashboard/".concat(n.id));case 12:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(a){console.log(a),e.setState({error:!0})}))},e}return Object(v.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container center"},r.a.createElement("h1",{id:"FFheadText"}," Welcome to FriendlyFire! "),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12 center",onSubmit:function(a){return e.handleSubmit(a,e.state.email,e.state.password)}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{className:"material-icons prefix"},"account_circle"),r.a.createElement("input",{id:"icon_prefix",type:"text",name:"email",onChange:this.handleInputChange}),r.a.createElement("label",{for:"icon_prefix"},"Email"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{className:"material-icons prefix"},"sms"),r.a.createElement("input",{id:"icon_sms",type:"password",name:"password",onChange:this.handleInputChange}),r.a.createElement("label",{for:"icon_"},"Password"))),r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:"btn waves-effect waves-light",href:"/dashboard",id:"ButtonColor",type:"submit",name:"action"},"Sign in!",r.a.createElement("i",{className:"material-icons right"},"send")))),r.a.createElement("div",{className:"row"},r.a.createElement("a",{className:"waves-effect waves-light btn",id:"ButtonColor",href:"/createAccount"},r.a.createElement("i",{className:"material-icons left"},"cloud"),"Create a new account?"))))}}]),t}(n.Component),C=(t(290),function(e){var a=Object(n.useState)({platform:""}),t=Object(m.a)(a,2),c=t[0],l=t[1],s=function(e){var a=e.target,t=a.name,n=a.value;l(Object(E.a)({},t,n))},o={name:e.name,platform:c.platform};return r.a.createElement("div",{className:"col s12 m7"},r.a.createElement("div",{className:"card horizontal"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{className:"cardImage",src:e.imgURL,alt:"".concat(e.name)})),r.a.createElement("div",{className:"card-stacked"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s6"},r.a.createElement("div",{style:{float:"left"}},r.a.createElement("h4",null,e.name))),r.a.createElement("form",null,r.a.createElement("div",{className:"col s5"},"Platforms:"," ",e.platform.map((function(e){return r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("input",{name:"platform",type:"radio",onChange:s,value:e}),r.a.createElement("span",null,e)))})))),r.a.createElement("div",{className:"col s1"},r.a.createElement("button",{className:"waves-effect waves-light btn save",id:"ButtonColor",type:"submit",onClick:function(){return e.saveGame(o)}},r.a.createElement("i",{className:"material-icons"},"save"))))))))}),O=function(e){Object(N.a)(t,e);var a=Object(w.a)(t);function t(){var e;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={discordName:"",gameResults:[],search:""},e.pageChanger=function(a){window.location.href="/dashboard/".concat(e.props.match.params.id)},e.handleChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState(Object(E.a)({},n,r))},e.pageChanger=function(a){window.location.href="/dashboard/".concat(e.props.match.params.id)},e.handleSubmitUser=function(a){a.preventDefault(),S.a.put("/api/user/".concat(e.props.match.params.id),{discord:e.state.discordName}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},e.handleSubmit=function(a){a.preventDefault();var t=e.state.search;S.a.get("https://api.rawg.io/api/games?search=".concat(t)).then((function(a){var t=a.data.results.map((function(a){return e.createGameObj(a)}));e.setState({gameResults:t})}))},e.createGameObj=function(a){var t=e.filterPlatforms(a.platforms);return{name:a.name,platform:t,imgURL:a.background_image}},e.filterPlatforms=function(e){for(var a=[],t=0;t<e.length;t++)switch(e[t].platform.name){case"PC":case"Linux":case"macOS":a.includes("PC")||a.push("PC");break;case"PlayStation 4":case"PlayStation 3":case"PlayStation 2":case"PlayStation":a.includes("PlayStation")||a.push("PlayStation");break;case"Xbox One":case"Xbox 360":case"Xbox":a.includes("Xbox")||a.push("Xbox");break;case"Nintendo Switch":a.includes("Nintendo Switch")||a.push("Nintendo Switch")}return a},e.saveGame=function(){var a=Object(i.a)(o.a.mark((function a(t){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S.a.get("/api/game?name=".concat(t.name,"&platform=").concat(t.platform)).then(function(){var e=Object(i.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.data){e.next=5;break}return e.next=3,S.a.post("/api/game",t).then(Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("succes"),e.next=3,S.a.get("/api/game/?name=".concat(t.name,"&platform=").concat(t.platform)).then((function(e){n=e.data.id}));case 3:case"end":return e.stop()}}),e)})))).catch((function(e){return console.log(e)}));case 3:e.next=6;break;case 5:n=a.data.id;case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}());case 2:return a.next=4,S.a.post("/api/usergame",{gameId:n,userId:e.props.match.params.id}).then((function(){return console.log("game saved")})).catch((function(e){return console.log(e)}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(v.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container center"},r.a.createElement("h1",{id:"FFheadText"}," Welcome to FriendlyFire! "),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12 center",onSubmit:this.handleSubmitUser},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{className:"material-icons prefix"},"gamepad"),r.a.createElement("input",{id:"icon_gamepad",type:"text",name:"discordName",onChange:this.handleChange}),r.a.createElement("label",{for:"icon_gamepad"},"Discord Username"),r.a.createElement("button",{className:"btn waves-effect waves-light",id:"ButtonColor",type:"submit",name:"action"},"Submit",r.a.createElement("i",{className:"material-icons right"},"account_box")))))),r.a.createElement("div",{className:"container center"},r.a.createElement("h3",null,"Add your games to your profile!"),r.a.createElement("form",{className:"col s12",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col offset-s4 s4"},r.a.createElement("input",{id:"add_a_game",type:"text",name:"search",onChange:this.handleChange}),r.a.createElement("label",{for:"add_a_game"},"Search Game here"),r.a.createElement("button",{className:"btn waves-effect waves-light",id:"ButtonColor",type:"submit",name:"action"},"Find Game",r.a.createElement("i",{className:"material-icons right"},"search")))))),this.state.gameResults.map((function(a){a.genre;var t=a.imgURL,n=a.name,c=a.platform;return r.a.createElement(C,{imgURL:t,name:n,platform:c,saveGame:e.saveGame})})),r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:"btn waves-effect waves-light",href:"/Dashboard",id:"ButtonColor",type:"submit",name:"action",onClick:this.pageChanger},"Done! Go Find Friends!",r.a.createElement("i",{className:"material-icons right"},"send"))))}}]),t}(n.Component),j=(t(291),function(e){Object(N.a)(t,e);var a=Object(w.a)(t);function t(){var e;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={email:"",handle:"",password:""},e.handleChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState(Object(E.a)({},n,r))},e.pageChanger=function(a){S.a.get("/api/user/handle/".concat(e.state.handle)).then((function(e){window.location.href="/account/".concat(e.data.id)})).catch((function(e){console.log(e)}))},e.handleSubmit=function(a){a.preventDefault(),S.a.post("api/user",{email:e.state.email,handle:e.state.handle,password:e.state.password}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},e}return Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container center"},r.a.createElement("h1",{id:"FFheadText"}," Welcome to FriendlyFire! "),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12 center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{className:"material-icons prefix"},"account_circle"),r.a.createElement("input",{id:"icon_prefix",type:"text",name:"handle",onChange:this.handleChange}),r.a.createElement("label",{for:"icon_prefix"},"Username")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{className:"material-icons prefix"},"account_circle"),r.a.createElement("input",{id:"icon_prefix",type:"text",name:"email",onChange:this.handleChange}),r.a.createElement("label",{for:"icon_prefix"},"Email"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{className:"material-icons prefix"},"sms"),r.a.createElement("input",{id:"icon_sms",type:"password",name:"password",onChange:this.handleChange}),r.a.createElement("label",{for:"icon_"},"Password")))),r.a.createElement("div",{className:"row"},r.a.createElement("button",{class:"btn waves-effect waves-light",type:"submit",id:"ButtonColor",name:"action",onClick:this.handleSubmit},"Save",r.a.createElement("i",{class:"material-icons right"},"save"))),r.a.createElement("div",{className:"row"},r.a.createElement("a",{className:"btn waves-effect waves-light",id:"ButtonColor",name:"action",onClick:this.pageChanger},"Add Info",r.a.createElement("i",{className:"material-icons right"},"send")))))}}]),t}(n.Component)),k=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.handle),r.a.createElement("td",null,e.discord),e.saveButton?r.a.createElement("td",null,r.a.createElement("button",{className:"waves-effect waves-light btn save",id:"ButtonColor",type:"submit",onClick:function(){return e.addFriend(e.id)}},r.a.createElement("i",{className:"material-icons"},"person_add"))):r.a.createElement(r.a.Fragment,null))},F=function(e){return r.a.createElement("tbody",null,e.friendResults.map((function(a){return r.a.createElement(k,Object.assign({},a,{key:a.id,id:a.id,Username:a.handle,discordName:a.discord,saveButton:e.saveButton,addFriend:e.addFriend}))})))},_=function(e){return r.a.createElement("table",{className:"centered highlight bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Game"),r.a.createElement("th",null,"Platform"),r.a.createElement("th",null,"Remove"))),r.a.createElement("tbody",null,e.games.map((function(a){return r.a.createElement("tr",null,r.a.createElement("td",null,a.name),r.a.createElement("td",null,a.platform),r.a.createElement("td",null,r.a.createElement("button",{className:"waves-effect waves-light btn save",id:"ButtonColor",type:"submit",onClick:function(){return e.deleteGame(a.id)}},r.a.createElement("i",{className:"material-icons"},"delete"))))}))))},G=function(e){Object(N.a)(t,e);var a=Object(w.a)(t);function t(){var e;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={friendResults:[],searchFriendResults:[],gameResults:[],searchGame:"",searchName:"",searchBy:"",id:""},e.handleChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState(Object(E.a)({},n,r))},e.handleSubmitName=function(a){if(a.preventDefault(),""===e.state.searchName)e.setState({searchFriendResults:e.state.friendResults});else{var t=e.state.friendResults.filter((function(a){return a.handle.includes(e.state.searchName)}));e.setState({searchFriendResults:t})}},e.handleSubmitGame=function(a){a.preventDefault();var t=e.state.searchGame;S.a.get("/api/friend/find?game=".concat(t)).then((function(a){console.log(a.data.results),e.setState({friendResults:[a.data]}),e.setState({searchBy:" by Game"})})).catch((function(e){e&&console.log(e)}))},e.deleteGame=function(a){S.a.delete("/api/userGame/".concat(a,"/").concat(e.props.match.params.id)).then((function(){console.log("game deleted"),S.a.get("/api/usergame/".concat(e.props.match.params.id)).then((function(a){console.log(a.data),e.setState({gameResults:a.data})})).catch((function(e){e&&console.log(e)}))})).catch((function(e){return console.log(e)}))},e}return Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.a.get("/api/friend/".concat(this.props.match.params.id)).then((function(a){console.log(a.data),e.setState({friendResults:a.data,searchFriendResults:a.data})})).catch((function(e){e&&console.log(e)})),S.a.get("/api/usergame/".concat(this.props.match.params.id)).then((function(a){console.log(a.data),e.setState({gameResults:a.data})})).catch((function(e){e&&console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container center"},r.a.createElement("h4",{id:"FFheadText"},"Dashboard"),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("h5",{id:"FFheadText"},"Search your friends list",this.state.searchBy,"!"),r.a.createElement("form",{className:"col s3 offset-s1",onSubmit:this.handleSubmitName},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{id:"search_by_name",type:"text",name:"searchName",onChange:this.handleChange}),r.a.createElement("label",{for:"search_by_name"},"Search By Name"),r.a.createElement("button",{className:"btn waves-effect waves-light",id:"ButtonColor",type:"submit",name:"action"},"Search",r.a.createElement("i",{className:"material-icons right"},"search"))))),r.a.createElement("form",{className:" col s3 offset-s4",onSubmit:this.handleSubmitGame},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"search_by_game",className:"materialize-textarea",name:"searchGame",onChange:this.handleChange}),r.a.createElement("label",{for:"search_by_game"},"Search By Game"),r.a.createElement("button",{className:"btn waves-effect waves-light",id:"ButtonColor",type:"submit",name:"action"},"Search",r.a.createElement("i",{className:"material-icons right"},"search")))))),r.a.createElement("h3",null,"Friends List"),r.a.createElement("table",{className:"centered highlight bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"User ID"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Discord Name"))),r.a.createElement(F,{friendResults:this.state.searchFriendResults,saveButton:!1})),r.a.createElement("h3",null,"Your Games"),r.a.createElement(_,{games:this.state.gameResults,deleteGame:this.deleteGame}))}}]),t}(n.Component),B=t(76),R=t(145),P=(t(292),function(e){Object(N.a)(t,e);var a=Object(w.a)(t);function t(){var e;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={friendResults:[],friendsToShow:[],searchGame:"",searchName:"",usersGames:[],searchBy:""},e.handleChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState(Object(E.a)({},n,r))},e.handleSelectChange=function(a){e.setState({searchGame:a.value}),console.log("Option selected:",a)},e.addFriend=function(a){console.log("ADD FRIEND!"),console.log(a),S.a.post("/api/friend",{user1Id:e.props.match.params.id,user2Id:a}).then((function(){return console.log("friend added")})).catch((function(e){return console.log(e)}))},e.handleSubmitName=function(a){a.preventDefault();var t=e.state.searchName;S.a.get("/api/friend/find?name=".concat(t)).then((function(a){console.log(a.data),e.setState({friendResults:[a.data]}),e.setState({searchBy:"Name"})})).catch((function(e){e&&console.log(e)}))},e.handleSubmitGame=function(a){a.preventDefault();var t=e.state.searchGame;S.a.get("/api/friend/find?game=".concat(t)).then((function(a){console.log(a.data.results),e.setState({friendResults:[a.data]}),e.setState({searchBy:"Game"})})).catch((function(e){e&&console.log(e)}))},e}return Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.a.get("/api/usergame/".concat(this.props.match.params.id)).then((function(a){e.setState({usersGames:a.data})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container center"},r.a.createElement("div",{className:"row"},r.a.createElement("h5",{id:"FFheadText"},"Search for a new friend!")),r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s3 offset-s1",onSubmit:this.handleSubmitName},r.a.createElement("div",{class:"input-field col"},r.a.createElement("input",{id:"search_by_name",type:"text",name:"searchName",onChange:this.handleChange}),r.a.createElement("label",{for:"search_by_name"},"Search By Name"),r.a.createElement("button",{className:"btn waves-effect waves-light",id:"ButtonColor",type:"submit",name:"action"},"Search",r.a.createElement("i",{className:"material-icons right"},"search")))),r.a.createElement("form",{className:"col s3 offset-s4",onSubmit:this.handleSubmitGame},r.a.createElement("div",{className:"input-field"},r.a.createElement(R.a,{className:"gameSelect",styles:{menu:function(e){return Object(B.a)(Object(B.a)({},e),{},{zIndex:9999,color:"black"})}},onChange:this.handleSelectChange,options:this.state.usersGames.map((function(e){return{value:e.name,label:"".concat(e.name," | ").concat(e.platform)}}))})),r.a.createElement("div",null,r.a.createElement("button",{className:"btn waves-effect waves-light",id:"ButtonColor",type:"submit",name:"action"},"Search",r.a.createElement("i",{className:"material-icons right"},"search")))),r.a.createElement("h4",{className:"center"},"Results by ",this.state.searchBy,":"),r.a.createElement("table",{className:"centered highlight bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"User's ID"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Discord Name"),r.a.createElement("th",null,"Add Friend"))),r.a.createElement(F,{friendResults:this.state.friendResults,saveButton:!0,addFriend:this.addFriend})),r.a.createElement("a",{className:"waves-effect waves-light btn",href:"/dashboard",id:"ButtonColor"},r.a.createElement("i",{className:"material-icons left"},"arrow_back"),"Back to the dashboard")))}}]),t}(n.Component)),D=function(e){Object(N.a)(t,e);var a=Object(w.a)(t);function t(){var e;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={gameResults:[],search:""},e.handleChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState(Object(E.a)({},n,r))},e.handleSubmit=function(a){a.preventDefault();var t=e.state.search;S.a.get("https://api.rawg.io/api/games?search=".concat(t)).then((function(a){var t=a.data.results.map((function(a){return e.createGameObj(a)}));e.setState({gameResults:t})}))},e.createGameObj=function(a){var t=e.filterPlatforms(a.platforms);return{name:a.name,platform:t,imgURL:a.background_image}},e.filterPlatforms=function(e){for(var a=[],t=0;t<e.length;t++)switch(e[t].platform.name){case"PC":case"Linux":case"macOS":a.includes("PC")||a.push("PC");break;case"PlayStation 4":case"PlayStation 3":case"PlayStation 2":case"PlayStation":a.includes("PlayStation")||a.push("PlayStation");break;case"Xbox One":case"Xbox 360":case"Xbox":a.includes("Xbox")||a.push("Xbox");break;case"Nintendo Switch":a.includes("Nintendo Switch")||a.push("Nintendo Switch")}return a},e.saveGame=function(){var a=Object(i.a)(o.a.mark((function a(t){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S.a.get("/api/game?name=".concat(t.name,"&platform=").concat(t.platform)).then(function(){var e=Object(i.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.data){e.next=5;break}return e.next=3,S.a.post("/api/game",t).then(Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("succes"),e.next=3,S.a.get("/api/game/?name=".concat(t.name,"&platform=").concat(t.platform)).then((function(e){n=e.data.id}));case 3:case"end":return e.stop()}}),e)})))).catch((function(e){return console.log(e)}));case 3:e.next=6;break;case 5:n=a.data.id;case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}());case 2:return a.next=4,S.a.post("/api/usergame",{gameId:n,userId:e.props.match.params.id}).then((function(){return console.log("game saved")})).catch((function(e){return console.log(e)}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(v.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container center"},r.a.createElement("h3",null,"Add a new game to your profile?"),r.a.createElement("form",{className:"col s12",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col offset-s4 s4"},r.a.createElement("input",{placeholder:"Search",id:"add_a_game",type:"text",name:"search",onChange:this.handleChange}),r.a.createElement("label",{for:"add_a_game"},"Search Game here"),r.a.createElement("button",{className:"btn waves-effect waves-light",id:"ButtonColor",type:"submit",name:"action"},"Find Game",r.a.createElement("i",{className:"material-icons right"},"search"))))),r.a.createElement("a",{className:"waves-effect waves-light btn",href:"/dashboard",id:"ButtonColor"},r.a.createElement("i",{className:"material-icons left"},"arrow_back"),"Back to the dashboard"),this.state.gameResults.map((function(a){a.genre;var t=a.imgURL,n=a.name,c=a.platform;return r.a.createElement(C,{imgURL:t,name:n,platform:c,saveGame:e.saveGame})})))}}]),t}(n.Component),I=function(e){Object(N.a)(t,e);var a=Object(w.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"There's no page here! Go back to the dashboard?"),r.a.createElement("a",{class:"waves-effect waves-light btn",href:"/dashboard",id:"ButtonColor"},r.a.createElement("i",{class:"material-icons left"},"arrow_back"),"Back to the dashboard"))}}]),t}(n.Component);var U=function(){var e=Object(n.useState)({}),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),s=Object(m.a)(l,2),u=s[0],E=s[1];Object(n.useEffect)((function(){b()}),[]);var b=function(){var e=Object(i.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,sessionStorage.getItem("jwt");case 2:if(!(a=e.sent)){e.next=18;break}return E(!0),e.prev=5,e.next=8,d.a.verify(a,"secret");case 8:(t=e.sent)&&t.email&&t.id&&(c(t),E(!0)),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(5),c({}),E(!1),sessionStorage.setItem("jwt",""),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(h.a,null,r.a.createElement("header",null),r.a.createElement("main",null,r.a.createElement("div",null,r.a.createElement(p,{isLoggedIn:u,logOutUser:function(){c({}),E(!1),sessionStorage.setItem("jwt","")},userObject:t}),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:["/","/landing"],render:function(e){return r.a.createElement(x,Object.assign({},e,{checkForToken:b}))}}),r.a.createElement(f.a,{path:["/account/:id"],render:function(e){return r.a.createElement(O,e)}}),r.a.createElement(f.a,{exact:!0,path:["/createAccount"]},r.a.createElement(j,null)),r.a.createElement(f.a,{path:["/dashboard/:id"],render:function(e){return r.a.createElement(G,e)}}),r.a.createElement(f.a,{path:["/findfriends/:id"],render:function(e){return r.a.createElement(P,e)}}),r.a.createElement(f.a,{path:["/addgame/:id"],render:function(e){return r.a.createElement(D,e)}}),r.a.createElement(f.a,null,r.a.createElement(I,{exact:!0,path:["*"]}))))),r.a.createElement("footer",null,r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[146,1,2]]]);
//# sourceMappingURL=main.701f143a.chunk.js.map