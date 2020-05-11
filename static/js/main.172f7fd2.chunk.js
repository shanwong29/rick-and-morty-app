(this["webpackJsonprick-and-morty-app"]=this["webpackJsonprick-and-morty-app"]||[]).push([[0],{26:function(e,t,n){e.exports=n(49)},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),u=Object(a.createContext)({}),i=n(3),l=n(2);function s(){var e=Object(i.a)(["\n  width: 100%;\n"]);return s=function(){return e},e}function p(){var e=Object(i.a)(["\n  grid-column: span 5;\n"]);return p=function(){return e},e}function d(){var e=Object(i.a)(["\n  color: ",";\n  background: ",";\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n  grid-row: span 1;\n"]);return d=function(){return e},e}function m(){var e=Object(i.a)(["\n  width: 80vw;\n  min-height: 40vw;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  margin-bottom: 1%;\n\n  @media "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"]);return m=function(){return e},e}var f=l.c.div(m(),(function(e){return e.theme.breakpoints.sm})),h=l.c.button(d(),(function(e){return e.theme.deepGreen}),(function(e){return e.theme.lightGreen}),(function(e){return e.theme.deepGreen}),(function(e){return e.theme.lightGreen})),E=l.c.h1(p()),b=l.c.img(s()),v=function(e){var t=new Date(e),n=t.getDate(),a={0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec"}[t.getMonth()],r=t.getFullYear();return"".concat(n," ").concat(a," ").concat(r)},g=r.a.memo((function(){var e=Object(a.useContext)(u),t=e.state,n=e.dispatch;if(t.isDataNotFound)return r.a.createElement("h1",null,"No characters fits this filter request. :(");var c;c=t.showSecondPart?t.characterData.slice(10):t.characterData.slice(0,10);var o=0,i=c.map((function(e,c){var u,i,l,s=e.name,p=e.status,d=e.species,m=e.image,f=e.created,E=e.id,g=c;return t.showSecondPart&&(g=c+10),(u=f,i=t.startDateQuery,l=t.endDateQuery,u=new Date(u),!(i&&((i=new Date(i)).setHours(0,0,0),u<i))&&!(l&&((l=new Date(l)).setHours(23,59,0),u>l)))?r.a.createElement(h,{onClick:function(){n({type:"SET_ACTIVE_CHAR_POSITION",payload:g})},key:c},r.a.createElement(b,{src:m,alt:s}),r.a.createElement("p",null,s," id: ",E),r.a.createElement("p",null,"created on ",v(f)," "),r.a.createElement("p",null,"Species: ",d),r.a.createElement("p",null,"Status: ",p)):(o++,r.a.createElement(a.Fragment,{key:c}))}));return o===c.length&&t.characterData.length?r.a.createElement(f,null,r.a.createElement(E,null,'No character on this page fit the "created date filter."'),";"):r.a.createElement(f,null,i)}));function y(){var e=Object(i.a)(["\n  width: 50%;\n"]);return y=function(){return e},e}function O(){var e=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return O=function(){return e},e}function D(){var e=Object(i.a)(["\n  width: 60%;\n  height: 70%;\n  background: white;\n  text-align: left;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  overflow: auto;\n"]);return D=function(){return e},e}function j(){var e=Object(i.a)(["\n  color: white;\n  background-color: ",";\n  border-radius: 50%;\n  &:hover {\n    color: white;\n    background-color: ",";\n  }\n  font-size: 1.5rem;\n  width: 3rem;\n  height: 3rem;\n  position: absolute;\n  left: 80%;\n  top: 15%;\n  transform: translate(-50%, -50%);\n"]);return j=function(){return e},e}var A=l.c.button(j(),(function(e){return e.theme.pastelOrange}),(function(e){return e.theme.darkOrange})),S=l.c.div(D()),x=l.c.div(O()),_=l.c.img(y()),w=function(){var e=Object(a.useContext)(u),t=e.state,n=e.dispatch;if(!(t.activeCharPosition||0===t.activeCharPosition))return r.a.createElement(r.a.Fragment,null);var c=t.characterData[t.activeCharPosition],o=t.episodeData.map((function(e,t){return r.a.createElement(a.Fragment,{key:t},r.a.createElement("p",null,e.episode," ",e.name))})),i=c.name,l=c.status,s=c.species,p=c.image,d=c.created,m=c.id,f=c.gender,h=c.origin;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null,r.a.createElement(x,null,r.a.createElement(_,{src:p,alt:i}),r.a.createElement("div",null,r.a.createElement("p",null,i," id: ",m),r.a.createElement("p",null,"created on ",v(d)," "),r.a.createElement("p",null,"Species: ",s),r.a.createElement("p",null,"Status: ",l),r.a.createElement("p",null,"Gender: ",f),r.a.createElement("p",null,"Origin: ",h.name))),r.a.createElement("p",null,"Appeared Episode:"),o),r.a.createElement(A,{onClick:function(){n({type:"SET_ACTIVE_CHAR_POSITION",payload:null})}},"\u2715"))};function C(){var e=Object(i.a)(["\n  color: ",";\n  font-size: 1rem;\n  padding: 5px;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return C=function(){return e},e}var P=l.c.button(C(),(function(e){var t=e.isActive,n=e.theme;return t?"red":n.milkTea})),k=r.a.memo((function(){var e=Object(a.useContext)(u),t=e.state,n=e.dispatch,c=Math.ceil(t.dataInfo.count/10),o=2*t.currentApiPage;t.showSecondPart||(o=2*t.currentApiPage-1);for(var i=[],l=function(e){var t=!1;o===e&&(t=!0),i.push(r.a.createElement(P,{isActive:t,key:e,onClick:function(){n({type:"HANDLE_CHANGE_SITE_PAGE_NUM",payload:e})}},e))},s=1;s<=c;s++)l(s);return r.a.createElement("div",null,i)})),T=n(8);function I(){var e=Object(i.a)(["\n  background: white;\n  color: ",";\n  border: "," 1px solid;\n  border-radius: 20px;\n  &:hover {\n    color: white;\n    background-color: ",";\n  }\n  padding: 5px 10px;\n  margin-left: 7px;\n"]);return I=function(){return e},e}function Q(){var e=Object(i.a)(["\n  font-size: 14px;\n  padding: 2px;\n"]);return Q=function(){return e},e}function R(){var e=Object(i.a)(["\n  display: inline;\n"]);return R=function(){return e},e}function N(){var e=Object(i.a)(["\n  margin: 1% auto;\n  & > label {\n    margin-left: 7px;\n  }\n"]);return N=function(){return e},e}var F=l.c.div(N()),U=l.c.form(R()),H=l.c.input(Q()),G=l.c.button(I(),(function(e){return e.theme.pastelOrange}),(function(e){return e.theme.pastelOrange}),(function(e){return e.theme.pastelOrange})),L=r.a.memo((function(){var e=Object(a.useContext)(u),t=e.state,n=e.dispatch,c=Object(a.useState)(""),o=Object(T.a)(c,2),i=o[0],l=o[1],s=function(e){switch(e.target.name){case"speciesInput":l(e.target.value);break;case"statusInput":n({type:"SET_STATUS_QUERY",payload:e.target.value});break;case"startDateInput":n({type:"SET_START_DATE_QUERY",payload:e.target.value});break;case"endDateInput":n({type:"SET_END_DATE_QUERY",payload:e.target.value});break;default:return}};return r.a.createElement(F,null,r.a.createElement(U,{onSubmit:function(e){!function(e){e.preventDefault();var a=e.target.speciesInput.value.trim();a!==t.speciesQuery&&n({type:"SET_SPECIES_QUERY",payload:a})}(e)}},r.a.createElement("label",{htmlFor:"speciesInput"},"Species: "),r.a.createElement(H,{type:"text",id:"speciesInput",name:"speciesInput",placeholder:"Press enter to submit",value:i,onChange:function(e){return s(e)}})),r.a.createElement("label",{htmlFor:"statusInput"},"Status: "),r.a.createElement("select",{id:"statusInput",name:"statusInput",onChange:function(e){return s(e)}},r.a.createElement("option",{defaultValue:t.statusQuery},t.statusQuery&&"".concat(t.statusQuery)),r.a.createElement("option",{value:""},"All"),r.a.createElement("option",{value:"alive"},"Alive"),r.a.createElement("option",{value:"dead"},"Dead"),r.a.createElement("option",{value:"unknown"},"Unknown")),r.a.createElement("label",{htmlFor:"startDateInput"},"Filter characters by created date:"," "),"from"," ",r.a.createElement("input",{type:"date",name:"startDateInput",id:"startDateInput",value:t.startDateQuery,onChange:function(e){return s(e)}})," ","to",r.a.createElement("input",{type:"date",name:"endDateInput",id:"endDateInput",value:t.endDateQuery,onChange:function(e){return s(e)}}),r.a.createElement(G,{onClick:function(){n({type:"CLEAR_ALL_FILTER"}),l("")}},"CLEAR"))}));function M(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n"]);return M=function(){return e},e}var Y=l.c.div(M()),V=n(5),z=n.n(V),B=n(1),J=n(7),W={characterData:[],dataInfo:{},episodeData:[],isDataNotFound:!1,currentApiPage:1,showSecondPart:!1,activeCharPosition:null,speciesQuery:"",statusQuery:"",startDateQuery:"",endDateQuery:""},q=function(e,t){switch(t.type){case"RECIEVE_CHAR_DATA":return Object(B.a)(Object(B.a)({},e),{},{characterData:t.payload.results,dataInfo:t.payload.info,isDataNotFound:!1});case"SET_DATA_NOT_FOUND":return Object(B.a)(Object(B.a)({},e),{},{isDataNotFound:!0,characterData:[],episodeData:[],dataInfo:{}});case"HANDLE_CHANGE_SITE_PAGE_NUM":var n=t.payload,a=Math.ceil(n/2);return a!==e.currentApiPage?n%2===0?Object(B.a)(Object(B.a)({},e),{},{currentApiPage:a,showSecondPart:!0,activeCharPosition:null}):Object(B.a)(Object(B.a)({},e),{},{currentApiPage:a,showSecondPart:!1,activeCharPosition:null}):n%2===0?Object(B.a)(Object(B.a)({},e),{},{showSecondPart:!0,activeCharPosition:null}):Object(B.a)(Object(B.a)({},e),{},{showSecondPart:!1});case"SET_ACTIVE_CHAR_POSITION":return Object(B.a)(Object(B.a)({},e),{},{activeCharPosition:t.payload});case"RECIEVE_EPISODE_DATA":return Object(B.a)(Object(B.a)({},e),{},{episodeData:t.payload});case"SET_SPECIES_QUERY":return Object(B.a)(Object(B.a)({},e),{},{speciesQuery:t.payload,currentApiPage:1,showSecondPart:!1,activeCharPosition:null});case"SET_STATUS_QUERY":return Object(B.a)(Object(B.a)({},e),{},{statusQuery:t.payload,currentApiPage:1,showSecondPart:!1,activeCharPosition:null});case"SET_START_DATE_QUERY":return Object(B.a)(Object(B.a)({},e),{},{startDateQuery:t.payload,activeCharPosition:null});case"SET_END_DATE_QUERY":return Object(B.a)(Object(B.a)({},e),{},{endDateQuery:t.payload,activeCharPosition:null});case"CLEAR_ALL_FILTER":return Object(B.a)(Object(B.a)({},e),{},{speciesQuery:"",statusQuery:"",startDateQuery:"",endDateQuery:"",activeCharPosition:null,currentApiPage:1,showSecondPart:!1});default:return e}},$=function(){return Object(a.useReducer)(q,W)},K=n(25),X=n.n(K),Z=function(){var e=Object(J.a)(z.a.mark((function e(t){var n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee={pastelOrange:"#EE6C4D",darkOrange:"#B0361E",lightGreen:"#C0CFC3",deepGreen:"#4B554F",blue:"#a8dadc",paleBlue:"#f1faee",milkTea:"#8e7054",fontSizes:{sm:"10px",md:"15px",lg:"25px"},breakpoints:{sm:"(max-width: 540px)",md:"(max-width: 720px)",lg:"(max-width: 960px)"}};function te(){var e=Object(i.a)(['\n    * {\n        margin: 0;\n        padding:0;\n        box-sizing: border-box;\n    }\n\n    body {\n        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n        sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        box-sizing: border-box; \n    }\n\n    button {\n        border: none;\n        outline:none;\n        background:none;\n        cursor:pointer;\n    }\n\n    input{\n        border-radius: 5px;\n        box-shadow: 0 2px 5px ',", 0 -2px 5px ",";\n        border: 1px solid ",";\n        margin: 5px;\n    }\n"]);return te=function(){return e},e}var ne=Object(l.b)(te(),ee.blue,ee.paleBlue,ee.blue),ae=function(e){var t=e.children,n=$(),c=Object(T.a)(n,2),o=c[0],i=c[1],s=function(){var e=Object(J.a)(z.a.mark((function e(){var t,n,a,r,c=arguments;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:"character",e.prev=2,e.next=5,Z("https://rickandmortyapi.com/api/".concat(n,"/").concat(t));case 5:a=e.sent,e.t0=n,e.next="character"===e.t0?9:"episode"===e.t0?11:15;break;case 9:return i({type:"RECIEVE_CHAR_DATA",payload:{results:a.results,info:a.info}}),e.abrupt("break",16);case 11:return r=a,a.length||(r=[Object(B.a)({},a)]),i({type:"RECIEVE_EPISODE_DATA",payload:r}),e.abrupt("break",16);case 15:return e.abrupt("return");case 16:e.next=23;break;case 18:if(e.prev=18,e.t1=e.catch(2),404!==e.t1.response.status){e.next=22;break}return e.abrupt("return",i({type:"SET_DATA_NOT_FOUND",payload:e.t1}));case 22:console.log("error from fetching data: ",e.t1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),Object(a.useEffect)((function(){s("?page=".concat(o.currentApiPage,"&species=").concat(o.speciesQuery,"&status=").concat(o.statusQuery))}),[o.currentApiPage,o.speciesQuery,o.statusQuery]),Object(a.useEffect)((function(){var e=o.activeCharPosition;if(e||0===e){var t=o.characterData[e].episode,n=t.map((function(e,t){for(var n=1,a=e.length-1;a>=0;a--)if("/"===e[a]){n=e.slice(a+1);break}return n})).join();s("".concat(n),"episode")}}),[o.activeCharPosition]),r.a.createElement(u.Provider,{value:{state:o,dispatch:i}},r.a.createElement(l.a,{theme:ee},r.a.createElement(ne,null),t))};var re=function(){return r.a.createElement(ae,null,r.a.createElement(Y,null,r.a.createElement(L,null),r.a.createElement(g,null),r.a.createElement(w,null),r.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.172f7fd2.chunk.js.map