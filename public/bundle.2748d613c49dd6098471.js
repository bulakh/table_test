(()=>{"use strict";var e={28:(e,t,i)=>{i.d(t,{Z:()=>u});var a=i(81),n=i.n(a),o=i(645),r=i.n(o)()(n());r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Martel+Sans:wght@400;600;700&display=swap);"]),r.push([e.id,':root {\n  --black: #00001a;\n  --grey: #eaeafb;\n}\n\nhtml {\n  height: 100%;\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  padding: 15px;\n  margin: 0;\n\n  font-family: \'Arvo\', serif;\n  color: var(--black);\n}\n\n.visually-hidden {\n  position: absolute;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  border: 0;\n}\n\nh1 {\n  font-size: 30px;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.table-wrap {\n  display: grid;\n  grid-template-columns: 50% 40%;\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas:\n      "table form"\n      "pagination .";\n  gap: 1% 2.5%;\n}\n\n.table-wrap__main {\n  /* width: 50%; */\n}\n\n.header {\n  text-align: center;\n}\n\n.table {\n  grid-area: table;\n  width: 100%;\n}\n\n.table,tr ,td {\n  border: 1px solid var(--black);\n  border-collapse: collapse;\n  text-align: center;\n}\n\n.table__row:hover {\n  cursor: pointer;\n  background-color: var(--grey);\n}\n\n.select-wrap {\n  display: inline-block;\n}\n\n/* Form */\n\n.table-form {\n  grid-area: form;\n  margin-top: 98px;\n  padding: 30px;\n\n  border: 1px solid var(--black);\n  border-radius: 5px;\n}\n\n.table-form__item {\n  display: grid;\n  grid-template-columns: 0.25fr 1fr;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n\n.table-form__label {\n  flex-grow: 0.1;\n}\n\n.table-form__input {\n  flex-grow: 1;\n}\n\n.table-form__input--textarea {\n  height: 180px;\n}\n\n/* Pagination */\n\n.pagination__list {\n  grid-area: pagination;\n  display: flex;\n  justify-self: center;\n  gap: 6px;\n}\n\n.pagination__btn {\n  font-size: 15px;\n  font-family: inherit;\n\n  width: 30px;\n  height: 30px;\n\n  background: transparent;\n  border: 1px solid var(--black);\n  color: inherit;\n  cursor: pointer;\n}\n\n.pagination__btn--active {\n  background-color: var(--grey);\n  font-weight: 700;\n}\n\n\n.pagination__btn:hover {\n  background-color: var(--black);\n  color: white;\n  transition: all 0.5s;\n}\n',""]);const u=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",a=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),a&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),a&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,a,n,o){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var u=0;u<this.length;u++){var s=this[u][0];null!=s&&(r[s]=!0)}for(var l=0;l<e.length;l++){var m=[].concat(e[l]);a&&r[m[0]]||(void 0!==o&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=o),i&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=i):m[2]=i),n&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=n):m[4]="".concat(n)),t.push(m))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function i(e){for(var i=-1,a=0;a<t.length;a++)if(t[a].identifier===e){i=a;break}return i}function a(e,a){for(var o={},r=[],u=0;u<e.length;u++){var s=e[u],l=a.base?s[0]+a.base:s[0],m=o[l]||0,c="".concat(l," ").concat(m);o[l]=m+1;var d=i(c),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var b=n(p,a);a.byIndex=u,t.splice(u,0,{identifier:c,updater:b,references:1})}r.push(c)}return r}function n(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,n){var o=a(e=e||[],n=n||{});return function(e){e=e||[];for(var r=0;r<o.length;r++){var u=i(o[r]);t[u].references--}for(var s=a(e,n),l=0;l<o.length;l++){var m=i(o[l]);0===t[m].references&&(t[m].updater(),t.splice(m,1))}o=s}}},569:e=>{var t={};e.exports=function(e,i){var a=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(i)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,i)=>{e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var a="";i.supports&&(a+="@supports (".concat(i.supports,") {")),i.media&&(a+="@media ".concat(i.media," {"));var n=void 0!==i.layer;n&&(a+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),a+=i.css,n&&(a+="}"),i.media&&(a+="}"),i.supports&&(a+="}");var o=i.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function i(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,i),o.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=i(379),t=i.n(e),a=i(795),n=i.n(a),o=i(569),r=i.n(o),u=i(565),s=i.n(u),l=i(216),m=i.n(l),c=i(589),d=i.n(c),p=i(28),b={};b.styleTagTransform=d(),b.setAttributes=s(),b.insert=r().bind(null,"head"),b.domAPI=n(),b.insertStyleElement=m(),t()(p.Z,b),p.Z&&p.Z.locals&&p.Z.locals;const f=10,h=(e,t)=>Math.ceil(e.length/t),g=(e,t)=>{e=e.slice();const i=[],a=h(e,t);for(let n=0;n<a;++n)i.push(e.slice(0,t)),e.splice(0,t);return i};class _{constructor(){if(new.target===_)throw new Error("Can't instantiate Abstract, only concrete one.");this._element=null,this._callback={}}getTemplate(){throw new Error("Abstract method not implemented: getTemplate")}getElement(){return this._element||(this._element=y(this.getTemplate())),this._element}removeElement(){this._element=null}}const v=["tr","tb","th"],q="beforeend",x=(e,t,i)=>{switch(e instanceof _&&(e=e.getElement()),t instanceof _&&(t=t.getElement()),i){case"afterbegin":e.prepend(t);break;case q:e.append(t)}},y=e=>{let t;return t=document.createElement("div"),v.includes(e.slice(1,3))&&(t=document.createElement("table")),t.innerHTML=e,t.firstChild},C=e=>{if(!(e instanceof _))throw new Error("Can remove only components");e.getElement().remove(),e.removeElement()};class N extends _{constructor(e){super(),this._user=e,this._changeUserDataHandler=this._changeUserDataHandler.bind(this),this._closeClickFormHandler=this._closeClickFormHandler.bind(this),this._escKeyDownHandler=this._escKeyDownHandler.bind(this)}getTemplate(){return(e=>{const{name:t,about:i,eyeColor:a}=e,{firstName:n,lastName:o}=t;return`<form class="table-form">\n    <button class="button-close" type="button">Close</button>\n    <ul class="table-form__list">\n      <li class="table-form__item">\n        <label class="table-form__label" for="firstName">FirstName</label>\n        <input class="table-form__input" type="text" name="firstName" id="firstName" value="${n}">\n      </li>\n      <li class="table-form__item">\n        <label class="table-form__label" for="lastName">LastName</label>\n        <input class="table-form__input" type="text" name="lastName" id="lastName" value="${o}">\n      </li>\n      <li class="table-form__item">\n        <label class="table-form__label" for="about">About</label>\n        <textarea class="table-form__input table-form__input--textarea" name="about" id="about">${i}</textarea>\n      </li>\n      <li class="table-form__item">\n        <label class="table-form__label" for="eyeColor">EyeColor</label>\n        <input class="table-form__input" type="text" name="eyeColor" id="eyeColor" value="${a}">\n      </li>\n    </ul>\n    <button class="button-close" type="button">Cancel</button>\n    <button class="button-submit" type="submit">Change</button>\n  </form>`})(this._user)}_getUserData(){const e=Array.from(this.getElement().querySelectorAll(".table-form__input")).map((e=>e.value)),[t,i,a,n]=e;return{name:{firstName:t,lastName:i},about:a,eyeColor:n}}_closeClickFormHandler(e){e.preventDefault(),this._callback.closeForm(),this._removeEvents()}_escKeyDownHandler(e){"Escape"!==e.key&&"Esc"!==e.key||(this._callback.closeForm(),this._removeEvents())}_changeUserDataHandler(e){e.preventDefault(),this._callback.changeUser(this._getUserData()),this._removeEvents()}_removeEvents(){document.removeEventListener("keydown",this._escKeyDownHandler),Array.from(this.getElement().querySelectorAll(".button-close")).map((e=>e.removeEventListener("click",this._closeClickFormHandler)))}setClickCancelHandler(e){this._callback.closeForm=e,Array.from(this.getElement().querySelectorAll(".button-close")).map((e=>e.addEventListener("click",this._closeClickFormHandler)))}setEscCloseHandler(e){this._callback.closeForm=e,document.addEventListener("keydown",this._escKeyDownHandler)}setSubmitChangeUserHandler(e){this._callback.changeUser=e,this.getElement().querySelector(".button-submit").addEventListener("click",this._changeUserDataHandler)}}class w extends _{constructor(e,t){super(),this._user=e,this._count=t}getTemplate(){return((e,t)=>{const{id:i,name:a,about:n,eyeColor:o}=e,{firstName:r,lastName:u}=a;return`<tr class="table__row" data-id="${i}">\n    <td>${r}</td>\n    <td>${u}</td>\n    <td class="block-about">\n      ${n.slice(0,t)+"..."}\n    </td>\n    <td>${o}</td>\n  </tr>`})(this._user,this._count)}}class E extends _{constructor(e,t){super(),this._users=e,this._count=t,this._showFormHandler=this._showFormHandler.bind(this)}getTemplate(){return e=this._users,t=this._count,`<table class="table">\n    <thead>\n      <tr>\n        <td>firstName</td>\n        <td>lastName</td>\n        <td>about</td>\n        <td>eyeColor</td>\n      </tr>\n    </thead>\n    <tbody class="table-list">${e.map((e=>new w(e,t).getElement().innerHTML)).join("")}</tbody>\n  </table>`;var e,t}_showFormHandler(e){e.preventDefault(),this._callback.openForm(e)}setClickOpenFormHandler(e){this._callback.openForm=e,Array.from(this.getElement().querySelectorAll(".table__row")).map((e=>e.addEventListener("click",this._showFormHandler)))}}class L extends _{constructor(e,t){super(),this._count=e,this._currentPage=t+1,this._changeCurrentPageNumber=this._changeCurrentPageNumber.bind(this)}getTemplate(){return((e,t)=>{const i=[];for(let a=1;a<=e;a++)i.push(`<li><input type='button' class='pagination__btn ${a===t?"pagination__btn--active":""}' value='${a}'></li>`);return`<ul class='pagination__list'>${i.join("")}</ul>`})(this._count,this._currentPage)}_changeCurrentPageNumber(e){e.preventDefault(),this._callback.changePage(e)}setClickChangePageNumber(e){this._callback.changePage=e,Array.from(this.getElement().querySelectorAll(".pagination__btn")).map((e=>e.addEventListener("click",this._changeCurrentPageNumber)))}}class S extends _{constructor(){super(),this._changeSortHandler=this._changeSortHandler.bind(this)}getTemplate(){return'<select name="sort" class="sort">\n    <option value="default">default</option>\n    <option value="firstName">firstName</option>\n    <option value="lastName">lastName</option>\n    <option value="about">about</option>\n    <option value="eyeColor">eyeColor</option>\n  </select>'}_changeSortHandler(e){e.preventDefault(),this._callback.changeSort(e)}setChangeSortHandler(e){this._callback.changeSort=e,this.getElement().addEventListener("change",this._changeSortHandler)}}const k=document.querySelector(".table-wrap"),P=document.querySelector(".table-wrap__main"),A=document.querySelector(".select-wrap"),D=new class{constructor(e=[],t=[]){this._users=[...e],this._colomns=[...t],this._user=null,this._countSymbols=null,this._pageNumber=0,this._usersOnPage=g(this._users.slice(),f)[this._pageNumber]}setCountSymbols(e){const t=28.87*window.innerWidth/100,i=window.getComputedStyle(e).fontSize;this._countSymbols=Math.round(1.7*t/parseInt(i,10)*2),window.innerWidth<1227&&(this._countSymbols-=10),window.innerWidth<1075&&(this._countSymbols-=15)}setUser(e){this._user=this._users.find((t=>t.id===e.currentTarget.dataset.id))}setPageNumber(e){this._pageNumber=e-1,this._usersOnPage=g(this._users.slice(),f)[this._pageNumber]}setSortedUsers(e){const t=g(this._users.slice(),f)[this._pageNumber];this._usersOnPage=((e,t,i)=>{switch(t){case"firstName":return e.sort(((e,t)=>e.name.firstName>t.name.firstName?1:-1));case"lastName":return e.sort(((e,t)=>e.name.lastName>t.name.lastName?1:-1));case"about":return e.sort(((e,t)=>e.about>t.about?1:-1));case"eyeColor":return e.sort(((e,t)=>e.eyeColor>t.eyeColor?1:-1));default:return i}})(this._usersOnPage,e,t)}changeUsers(e){this._user={...this._user,...e},this._users=this._users.map((e=>e.id===this._user.id?this._user:e)),this._usersOnPage=g(this._users.slice(),f)[this._pageNumber]}getUsers(){return this._users}getUsersOnPage(){return this._usersOnPage}getUser(){return this._user}getCountSymbols(){return this._countSymbols}getPageNumber(){return this._pageNumber}getColumns(){return this._colomns}}([{id:"5c2286fb23e87be312d55d9a",name:{firstName:"Brooks",lastName:"Stone"},phone:"+7 (843) 431-2190",about:"Qui aliquip esse occaecat voluptate cillum laborum do adipisicing ea. Lorem dolor pariatur exercitation et Lorem voluptate reprehenderit. Culpa nisi sunt laborum culpa eu et nulla aute aliqua commodo cupidatat culpa. Eu laboris dolor enim officia mollit labore proident proident tempor ex minim magna dolor. Ipsum cillum officia irure amet enim voluptate consequat deserunt laborum nulla excepteur pariatur voluptate incididunt. In excepteur adipisicing dolor ea occaecat elit. Irure dolor quis cillum minim voluptate.",eyeColor:"blue"},{id:"5c2286fb7f4c26c63eff1b66",name:{firstName:"Johnston",lastName:"Tate"},phone:"+7 (939) 409-2841",about:"Eu ipsum est in exercitation voluptate occaecat fugiat fugiat ea elit ad veniam adipisicing ullamco. Laboris consectetur enim dolore amet exercitation sit non do reprehenderit non. Proident consequat anim non voluptate non culpa sit occaecat adipisicing. Reprehenderit dolor cillum laboris incididunt exercitation quis esse in ad ut voluptate commodo in. Exercitation veniam adipisicing irure ut qui nulla.",eyeColor:"brown"},{id:"5c2286fb25005bd0905c04e1",name:{firstName:"Susie",lastName:"Newman"},phone:"+7 (910) 551-3326",about:"Non eiusmod minim ut anim qui non dolore veniam. Lorem veniam nostrud ullamco ad enim commodo incididunt amet ipsum irure. Minim sint tempor incididunt quis. Excepteur commodo mollit elit voluptate reprehenderit eiusmod ex nostrud dolor mollit. Culpa duis pariatur anim sunt in irure ex aliqua.",eyeColor:"red"},{id:"5c2286fb982c7590025be630",name:{firstName:"Kelly",lastName:"Schwartz"},phone:"+7 (977) 450-2369",about:"Et commodo velit proident reprehenderit. In cillum adipisicing ut excepteur nostrud pariatur proident. Qui consectetur esse aliqua incididunt dolor esse ullamco cupidatat tempor mollit. Elit nulla eiusmod occaecat laborum laborum consequat eu nisi labore tempor aute. Dolor sunt anim reprehenderit non excepteur dolor consectetur eu.",eyeColor:"green"},{id:"5c2286fbc20c5d4618855c36",name:{firstName:"Chris",lastName:"Dorsey"},phone:"+7 (886) 425-2696",about:"Aliquip velit ut ex nisi officia proident. Eu anim elit deserunt exercitation officia tempor proident eu non incididunt aliqua. Lorem consequat commodo laborum minim ad consectetur. Sunt et anim dolor mollit tempor irure. Non fugiat anim laborum fugiat duis et culpa ea enim excepteur. Amet sint enim aliquip est.",eyeColor:"blue"},{id:"5c2286fb0d7c75cda0c18b33",name:{firstName:"Jimmie",lastName:"Gay"},phone:"+7 (908) 513-3062",about:"Nisi deserunt eu consectetur occaecat minim aliqua eu cupidatat ea. Esse consectetur deserunt nulla ullamco sit aute. Ad aliqua sint veniam enim exercitation in eiusmod ut aliqua consequat ipsum laborum. Aliqua excepteur non dolore adipisicing aliquip incididunt nostrud dolore consequat.",eyeColor:"blue"},{id:"5c2286fb49295e3d2caa2b19",name:{firstName:"Moon",lastName:"Ortiz"},phone:"+7 (905) 447-3306",about:"Eiusmod amet commodo sit nulla velit eu eiusmod. Fugiat proident sunt fugiat nostrud occaecat velit qui. Ea aute culpa irure excepteur esse. Laborum esse in enim aliqua proident ea cupidatat enim ea enim exercitation ullamco. Aliquip culpa enim et tempor elit enim quis sint ea.",eyeColor:"blue"},{id:"5c2286fbb2ad79f1f40500d3",name:{firstName:"Beach",lastName:"Lindsey"},phone:"+7 (981) 438-3607",about:"Laborum pariatur fugiat ut fugiat nulla ad nostrud minim nulla do do occaecat labore. Incididunt exercitation nulla ea sint quis excepteur reprehenderit. Amet ea tempor dolor incididunt aliqua reprehenderit laborum excepteur consectetur consequat minim ea. Velit labore ex non reprehenderit. Dolor laboris voluptate sit adipisicing ad officia tempor aliqua eu. Aliqua do cupidatat veniam nulla. Aliqua minim tempor non eu commodo quis ex.",eyeColor:"blue"},{id:"5c2286fb25a61a6ff446ab4f",name:{firstName:"Gilbert",lastName:"Sanford"},phone:"+7 (891) 579-2502",about:"Cupidatat veniam occaecat deserunt ullamco do magna ex voluptate exercitation irure. Proident ea officia laboris nulla eu fugiat aliqua veniam duis exercitation aute anim velit. Minim nulla amet id mollit reprehenderit id. Duis ullamco occaecat mollit excepteur adipisicing nostrud velit exercitation quis veniam commodo aliquip veniam. Mollit sunt culpa nulla excepteur adipisicing do ut fugiat. Mollit elit pariatur esse ea officia mollit exercitation.",eyeColor:"red"},{id:"5c2286fbfb41f12cd0bc3fb2",name:{firstName:"Julie",lastName:"Shepherd"},phone:"+7 (944) 442-3173",about:"Excepteur quis exercitation sint officia commodo commodo aliquip ex exercitation laborum quis qui. Reprehenderit aliqua dolore aliqua est veniam et. Cupidatat sint ea ex consectetur eu aliqua cillum velit nulla ipsum fugiat qui ad.",eyeColor:"red"},{id:"5c2286fbd9e655815bd489d2",name:{firstName:"Callie",lastName:"Ford"},phone:"+7 (998) 563-3808",about:"Ea elit veniam laborum adipisicing. Lorem consequat magna ea et aliqua duis in mollit ea commodo officia amet et. Amet eu cupidatat proident commodo ex exercitation est voluptate mollit laborum et tempor duis nisi. Qui cupidatat adipisicing enim irure enim elit ullamco.",eyeColor:"brown"},{id:"5c2286fbbabce0ea304e7b70",name:{firstName:"Beatriz",lastName:"Lancaster"},phone:"+7 (812) 472-3455",about:"Cillum quis incididunt aute laboris ad ad irure laborum fugiat nostrud. Ad aute sint duis excepteur ut officia. Qui consequat incididunt magna incididunt anim sunt cillum dolor incididunt veniam nulla elit id. Ullamco eu in tempor laborum sunt consectetur cupidatat ex amet Lorem reprehenderit in. Exercitation laborum labore minim ad. Occaecat culpa amet aute cupidatat nostrud excepteur.",eyeColor:"red"},{id:"5c2286fb639d7dbcc0cae9e6",name:{firstName:"Johnnie",lastName:"Knowles"},phone:"+7 (995) 488-2804",about:"In esse exercitation tempor proident nulla est amet ut. Enim pariatur do laboris dolor Lorem amet ullamco eiusmod aliqua excepteur elit nisi. Adipisicing deserunt cupidatat in reprehenderit adipisicing proident deserunt. Elit adipisicing officia excepteur magna magna officia incididunt minim irure pariatur. Aliquip culpa do ullamco labore aliqua minim reprehenderit magna esse Lorem culpa. Consequat elit labore irure cupidatat id qui pariatur deserunt non consequat eiusmod et minim amet.",eyeColor:"red"},{id:"5c2286fb5d734a18b3163fc8",name:{firstName:"Finley",lastName:"Watts"},phone:"+7 (928) 472-2012",about:"Occaecat in velit ullamco ad mollit ea nisi mollit sit esse consectetur exercitation reprehenderit. Labore cupidatat voluptate quis ipsum esse excepteur. Enim sunt officia culpa Lorem ipsum voluptate id aliquip. Aute nostrud consectetur consectetur quis aute quis exercitation aliqua elit magna.",eyeColor:"blue"},{id:"5c2286fb54624961f84b6607",name:{firstName:"Brady",lastName:"Trevino"},phone:"+7 (954) 435-2361",about:"In sunt non reprehenderit Lorem sit exercitation anim eiusmod irure. Non anim Lorem nulla in culpa non pariatur nulla in Lorem enim sit. Sunt pariatur deserunt occaecat ut. Nostrud enim laborum pariatur Lorem voluptate reprehenderit do aute officia veniam. Duis laborum et ea laboris elit consectetur id enim enim nisi consequat. Tempor occaecat culpa qui ipsum nisi fugiat nisi sit esse ea. Culpa est nisi Lorem officia commodo minim ullamco cupidatat nisi irure.",eyeColor:"brown"},{id:"5c2286fb5c2ac3cd9312946c",name:{firstName:"Vanessa",lastName:"Lowe"},phone:"+7 (804) 563-2180",about:"Reprehenderit magna esse tempor dolor deserunt veniam officia ullamco ipsum. Officia nostrud dolore fugiat amet reprehenderit sint velit est nisi exercitation in et. Aliqua quis nisi duis minim. Exercitation pariatur officia aliquip do anim nisi nisi dolor pariatur consectetur ea.",eyeColor:"green"},{id:"5c2286fbad86e5926e025b52",name:{firstName:"Maricela",lastName:"Roberson"},phone:"+7 (937) 471-3638",about:"Duis cupidatat qui nulla ea elit enim est incididunt aute consequat fugiat minim non sint. Id ipsum exercitation minim minim aute. Minim magna aliquip adipisicing in fugiat aliquip duis proident.",eyeColor:"brown"},{id:"5c2286fbe9146dab0289ee25",name:{firstName:"Marva",lastName:"Ray"},phone:"+7 (930) 439-2652",about:"Non aliqua cupidatat quis adipisicing non consequat. Nulla eiusmod sint minim aliqua sint nostrud occaecat nisi incididunt. Dolor exercitation enim elit nisi aute cillum proident duis fugiat do ex excepteur. Deserunt fugiat est laborum esse veniam. Magna ipsum ea incididunt proident.",eyeColor:"blue"},{id:"5c2286fb6ed4e8c39e8f549c",name:{firstName:"Mcclure",lastName:"Melendez"},phone:"+7 (946) 407-3558",about:"Exercitation aliqua id cillum laborum amet officia et. Est ad nulla do incididunt consequat officia laborum magna laboris. Incididunt est voluptate voluptate non est ipsum commodo enim voluptate mollit sit ullamco aliquip ea. Eiusmod incididunt ea occaecat incididunt adipisicing eiusmod deserunt elit reprehenderit. Est nulla minim commodo quis id irure proident do magna aliqua culpa aute cillum reprehenderit. Incididunt nulla Lorem officia veniam sunt culpa. Proident sunt sint incididunt non voluptate consequat amet elit ea ut incididunt dolore.",eyeColor:"brown"},{id:"5c2286fb42cbbcf764de06c8",name:{firstName:"Vasquez",lastName:"Manning"},phone:"+7 (970) 405-2316",about:"Sunt mollit anim nulla consequat. Commodo laborum Lorem labore sunt pariatur consequat velit ad. Pariatur aute Lorem dolor cillum dolore sit ut. Deserunt excepteur elit do qui ex anim pariatur pariatur dolor eu laborum cillum ipsum veniam. Nisi dolore ipsum irure magna do amet ex esse in laboris aliqua ullamco fugiat cupidatat. Consequat tempor velit consectetur consequat enim do Lorem adipisicing tempor laboris. Mollit officia cupidatat veniam duis minim cillum nostrud incididunt ullamco ad incididunt enim est.",eyeColor:"blue"},{id:"5c2286fb03b63d22fad39e10",name:{firstName:"Hawkins",lastName:"Hopkins"},phone:"+7 (837) 542-3177",about:"Fugiat aliqua esse eu quis velit nulla fugiat id reprehenderit sint non irure ea enim. Elit laborum sunt esse occaecat aliqua veniam dolore nostrud dolore. Eiusmod et commodo dolor exercitation Lorem consectetur qui sint eu. Culpa magna ut consequat Lorem nisi proident nisi irure adipisicing laboris velit dolore Lorem.",eyeColor:"blue"},{id:"5c2286fb88b8cf12c9a35aca",name:{firstName:"Angelina",lastName:"Gillespie"},phone:"+7 (868) 520-3317",about:"Est esse deserunt laborum sint sunt occaecat cupidatat enim. Duis aliqua officia cupidatat cupidatat. Eu enim elit eu magna proident est veniam. Pariatur proident elit in aliqua ad consectetur proident nostrud anim reprehenderit.",eyeColor:"red"},{id:"5c2286fb73c192df1d6cf949",name:{firstName:"Meghan",lastName:"Robbins"},phone:"+7 (967) 457-3538",about:"Lorem nostrud aute incididunt proident non laboris esse non do excepteur. Sint mollit consequat enim minim quis laborum ad cupidatat aliquip minim duis. Sunt excepteur id esse voluptate.",eyeColor:"brown"},{id:"5c2286fb8ab95671e3765259",name:{firstName:"Malone",lastName:"Mack"},phone:"+7 (843) 581-2406",about:"Esse nostrud voluptate commodo commodo ad consectetur aliquip tempor velit veniam ex. Culpa reprehenderit pariatur aliqua in occaecat cillum esse laboris enim exercitation ex minim. Labore non sint deserunt id. Et deserunt id anim magna amet. Non ipsum commodo commodo sint nostrud dolore et veniam elit ad. Est dolor non ad id enim ut laborum do consectetur id officia. Exercitation cillum occaecat eiusmod exercitation.",eyeColor:"brown"},{id:"5c2286fba5bd3d862ac4d7e0",name:{firstName:"Eula",lastName:"Aguirre"},phone:"+7 (886) 422-2720",about:"Consectetur do cupidatat reprehenderit nulla anim dolore anim voluptate esse non ex ullamco eu ea. Deserunt do irure ad incididunt ut. Minim pariatur ipsum quis ipsum reprehenderit exercitation voluptate ut occaecat labore amet. Nisi sit ex dolor nulla reprehenderit nulla ullamco sint aliqua. Ullamco non aliquip elit est eiusmod.",eyeColor:"red"},{id:"5c2286fb4148f031437ee69c",name:{firstName:"Katy",lastName:"Church"},phone:"+7 (860) 475-2861",about:"Pariatur irure dolore excepteur commodo do id commodo ex sit nulla tempor fugiat dolor. Ad ullamco labore eiusmod laboris quis excepteur velit minim exercitation elit non irure. Occaecat voluptate nostrud cillum ea laboris exercitation consectetur ex. Incididunt nisi magna occaecat reprehenderit laboris esse. Laborum nulla fugiat sint incididunt. Deserunt quis ipsum aute eiusmod anim dolore sunt.",eyeColor:"red"},{id:"5c2286fb49d38b81288fca71",name:{firstName:"Blanca",lastName:"Bradshaw"},phone:"+7 (806) 457-2264",about:"Dolore quis ex laborum anim tempor adipisicing Lorem pariatur reprehenderit commodo sit fugiat. Cillum consectetur ea reprehenderit anim. Dolor voluptate proident pariatur veniam reprehenderit aliqua nostrud.",eyeColor:"green"},{id:"5c2286fb0afb209b3bec8073",name:{firstName:"Kay",lastName:"William"},phone:"+7 (914) 411-3009",about:"Consequat eu fugiat id elit laborum do nulla Lorem nulla in laborum laborum. Sit officia nulla amet consequat commodo deserunt eu cupidatat labore nostrud nostrud. Cillum nulla cillum ad nostrud eiusmod elit esse tempor commodo proident nostrud occaecat reprehenderit. Excepteur in officia mollit in qui non aute in sunt sint Lorem eiusmod consequat.",eyeColor:"green"},{id:"5c2286fbbfc54c696f663211",name:{firstName:"Camacho",lastName:"Wells"},phone:"+7 (946) 492-2660",about:"Occaecat deserunt consequat deserunt officia ipsum ex. Nostrud officia in voluptate tempor velit nisi dolor cupidatat irure quis. Deserunt excepteur deserunt veniam exercitation ea cillum nostrud occaecat excepteur in ut veniam. Anim voluptate pariatur sunt consequat pariatur occaecat laborum nisi esse labore cupidatat. Do proident cillum consectetur enim Lorem voluptate proident.",eyeColor:"brown"},{id:"5c2286fbb73f5c893d46dde2",name:{firstName:"Bradshaw",lastName:"Hodges"},phone:"+7 (807) 586-3870",about:"Ea quis sint magna amet nulla ut nostrud. Ea sunt do aliquip cupidatat pariatur officia ex laboris proident quis minim ea. Officia anim minim aliquip labore ex anim irure qui anim magna labore aliqua occaecat. Velit consequat duis culpa esse dolor. Duis non qui fugiat ex laboris.",eyeColor:"red"},{id:"5c2286fb6072dd80f1d56c39",name:{firstName:"Rutledge",lastName:"Acosta"},phone:"+7 (800) 574-3803",about:"Dolore minim anim sint eu culpa et eu adipisicing nisi laborum laborum id qui veniam. Anim reprehenderit est dolor proident velit nisi. Anim eu elit enim laborum minim duis. Consequat et ipsum ex esse cillum excepteur commodo commodo irure sit proident. In deserunt nulla qui fugiat.",eyeColor:"green"},{id:"5c2286fbc750d871ffb16329",name:{firstName:"Cline",lastName:"Fitzpatrick"},phone:"+7 (894) 563-2167",about:"In incididunt reprehenderit quis do consequat duis et in. Ea mollit mollit nulla deserunt nulla commodo voluptate laboris cupidatat sit non. Sint eiusmod minim ut commodo sint. Quis in ea non consectetur do aliquip veniam aute.",eyeColor:"green"},{id:"5c2286fb79bf32d653202f75",name:{firstName:"Sloan",lastName:"Dale"},phone:"+7 (828) 575-3234",about:"Laboris ut ullamco consequat nisi occaecat sint nisi. Commodo minim deserunt officia exercitation est aliquip pariatur et aliquip quis dolore deserunt esse. Eu consectetur elit do veniam sit.",eyeColor:"red"},{id:"5c2286fb81d27ce4dd8a84ae",name:{firstName:"Buckner",lastName:"Fowler"},phone:"+7 (801) 600-3763",about:"Est anim labore ea qui officia ea sunt dolor. Elit aliquip dolore amet nostrud qui cillum anim aute ut voluptate non non. Consectetur cillum velit elit sit dolore occaecat amet sunt mollit quis aute labore enim commodo. Minim eu in nisi mollit veniam aliquip fugiat duis nostrud deserunt incididunt duis.",eyeColor:"brown"},{id:"5c2286fbf5a16ef438aaa5fa",name:{firstName:"Hays",lastName:"Hurley"},phone:"+7 (963) 481-2993",about:"Consequat commodo anim est ex veniam dolor pariatur officia officia elit quis sint esse. Commodo consectetur esse enim mollit reprehenderit qui ad. Mollit magna ipsum et exercitation voluptate veniam adipisicing duis nisi dolore ad do quis tempor. Esse ea nisi cupidatat non elit velit anim nulla qui nisi commodo ullamco anim.",eyeColor:"red"},{id:"5c2286fbab253d31546ba1ac",name:{firstName:"Ryan",lastName:"Case"},phone:"+7 (847) 466-2653",about:"Excepteur quis dolor qui laborum anim anim cupidatat culpa esse sunt excepteur. Incididunt elit nostrud excepteur anim nostrud sit veniam deserunt sunt id ipsum labore aute dolor. Est culpa in do ea Lorem fugiat cillum reprehenderit. Consectetur cupidatat irure adipisicing dolore voluptate sit ex. Exercitation in tempor duis ea irure nisi minim velit ipsum irure. Cillum ullamco cillum commodo fugiat mollit.",eyeColor:"brown"},{id:"5c2286fb63577dc573f8a927",name:{firstName:"Tameka",lastName:"Walls"},phone:"+7 (984) 523-3641",about:"Aliqua tempor do tempor Lorem laborum ut consectetur commodo velit magna non deserunt quis. Eu et cupidatat pariatur amet laborum amet officia eu voluptate ad adipisicing. Occaecat nisi Lorem esse commodo dolore tempor dolore exercitation ea sint labore. Do proident id quis ex do consequat non eiusmod consequat pariatur nostrud. Ad id adipisicing reprehenderit sit amet fugiat in eiusmod sunt incididunt laboris.",eyeColor:"brown"},{id:"5c2286fb82222dbb58fb241c",name:{firstName:"Diane",lastName:"Pruitt"},phone:"+7 (959) 464-3535",about:"Occaecat ad reprehenderit aute quis culpa anim tempor officia. Fugiat laboris et nostrud veniam aliquip. Ut nulla culpa quis anim sunt aliquip. Proident esse incididunt do commodo est non ea dolor nisi adipisicing quis id exercitation. Nisi eu do pariatur id officia nostrud culpa amet. Anim duis anim aute amet pariatur irure anim deserunt irure sit proident sunt exercitation. Culpa nisi excepteur id laborum occaecat esse occaecat laborum aliquip non non.",eyeColor:"red"},{id:"5c2286fb1802a0ecd0aa6873",name:{firstName:"Mccullough",lastName:"Sullivan"},phone:"+7 (953) 553-3215",about:"Velit ipsum elit amet aute incididunt culpa occaecat dolore cillum esse quis magna veniam. Elit ipsum cupidatat irure Lorem minim nulla deserunt. Incididunt officia esse Lorem cillum sint qui amet esse est.",eyeColor:"blue"},{id:"5c2286fb02d305780e20521b",name:{firstName:"Fay",lastName:"Burgess"},phone:"+7 (935) 563-3787",about:"Occaecat non nisi nisi qui minim eiusmod aute ullamco culpa aliquip ut irure. Culpa sit exercitation dolore ullamco velit proident incididunt. Amet aliqua adipisicing cillum sint cupidatat ullamco cillum aute eiusmod ex. Adipisicing reprehenderit proident nulla commodo mollit tempor eiusmod nulla eiusmod. Non commodo amet reprehenderit aute. Officia voluptate in adipisicing nostrud pariatur in. Labore commodo do commodo excepteur nostrud ea occaecat ullamco pariatur veniam excepteur aliquip fugiat amet.",eyeColor:"green"},{id:"5c2286fbe330f035ee90c0db",name:{firstName:"Kasey",lastName:"Joyner"},phone:"+7 (998) 497-2317",about:"Dolor aliqua quis nulla fugiat enim cillum aute excepteur. Qui qui commodo ipsum deserunt velit fugiat ex ipsum Lorem velit. Veniam veniam aliquip commodo adipisicing officia sint ut dolor et. Fugiat consequat ad nulla nostrud aliqua Lorem. Sit tempor ut esse non nisi officia qui consectetur velit adipisicing sit excepteur cupidatat.",eyeColor:"blue"},{id:"5c2286fbf21aa796126a9505",name:{firstName:"Delia",lastName:"Kline"},phone:"+7 (901) 562-2975",about:"Nulla esse sunt aute reprehenderit aliqua nisi eiusmod dolor. Excepteur consequat nisi ea ex velit et officia voluptate. Qui culpa mollit culpa ut enim non laborum in amet. Id aute cupidatat magna ipsum consequat magna officia velit.",eyeColor:"green"},{id:"5c2286fb771275c314fa32d2",name:{firstName:"Finch",lastName:"Keller"},phone:"+7 (845) 599-3611",about:"Proident nostrud voluptate incididunt nostrud Lorem cillum voluptate cillum ipsum duis irure. Ut exercitation aliquip ullamco laboris sunt incididunt magna est ipsum cillum. Dolor exercitation ullamco dolor anim et mollit ex proident amet Lorem proident laboris enim. Tempor laboris dolore anim anim officia voluptate exercitation sint eiusmod. Pariatur ex laborum nulla adipisicing ex cupidatat ea officia duis aute. Do anim velit dolor ad quis occaecat id.",eyeColor:"green"},{id:"5c2286fb166f6243646aa197",name:{firstName:"Yang",lastName:"Reeves"},phone:"+7 (976) 457-2144",about:"Fugiat deserunt veniam incididunt cillum irure nulla esse. Minim ut dolor in consequat anim incididunt. Consequat incididunt culpa enim laborum et ipsum.",eyeColor:"red"},{id:"5c2286fbec1ed6670a8e3fce",name:{firstName:"Mayer",lastName:"Boyd"},phone:"+7 (811) 462-2191",about:"Dolor enim ad aliquip cupidatat ut voluptate voluptate Lorem proident dolore. Anim id ullamco consequat aliqua ut voluptate et ea minim officia. Dolor ex irure sint Lorem ad tempor duis. Sit ullamco ullamco eu esse cupidatat ut culpa ut. Reprehenderit ex proident do esse labore fugiat non Lorem exercitation excepteur ex et. Mollit in aliqua nostrud irure ipsum ad cupidatat eu aliqua ut officia. Est Lorem ut do et duis irure velit ipsum ullamco duis.",eyeColor:"brown"},{id:"5c2286fb8e5edeca325590ee",name:{firstName:"Molly",lastName:"Gentry"},phone:"+7 (987) 526-2754",about:"Do aliquip occaecat labore excepteur officia. Tempor Lorem ipsum qui enim non et quis velit. Commodo ut commodo aliqua proident irure minim non adipisicing id dolore. Veniam voluptate esse nostrud ut anim ea. Do dolor id quis commodo eiusmod aliquip in ex duis fugiat proident amet ad. Excepteur fugiat occaecat ad Lorem esse est quis pariatur aliqua amet sunt consequat consectetur. Pariatur laboris mollit ut sunt commodo aute quis velit fugiat qui nostrud consectetur qui consectetur.",eyeColor:"brown"},{id:"5c2286fbe2e14f332b2ec00d",name:{firstName:"Misty",lastName:"Fernandez"},phone:"+7 (859) 510-3637",about:"Velit est aliqua laboris ea commodo. Nisi adipisicing veniam deserunt excepteur do excepteur in sit ullamco do laborum minim ex. Qui dolor ullamco consectetur esse ut irure dolor cupidatat duis dolor eiusmod cupidatat.",eyeColor:"brown"},{id:"5c2286fbc0dd407398e1a2a1",name:{firstName:"George",lastName:"Yang"},phone:"+7 (909) 426-3260",about:"Officia aliquip consequat reprehenderit do aute Lorem in proident reprehenderit ad ullamco eiusmod esse consectetur. Eu fugiat Lorem ullamco irure minim pariatur aliqua magna mollit non eu exercitation exercitation. Enim Lorem exercitation fugiat ad reprehenderit enim laborum qui. Id officia reprehenderit veniam nostrud officia laboris minim ad fugiat ex nulla dolor ut proident. Nulla consequat amet anim id eiusmod minim.",eyeColor:"brown"},{id:"5c2286fbaee7a091b9ead63f",name:{firstName:"Lucille",lastName:"Clark"},phone:"+7 (972) 469-3368",about:"Irure ex exercitation et dolore. Quis duis dolor quis do deserunt voluptate. Aliquip commodo sunt consequat non consectetur anim qui voluptate commodo culpa. Laborum mollit tempor adipisicing ad do mollit dolor ex veniam in quis exercitation. Consectetur consectetur incididunt pariatur sunt dolore. Consequat ullamco consectetur sunt proident sunt excepteur pariatur dolor magna ut esse tempor.",eyeColor:"red"},{id:"5c2286fb7761161aac35caaa",name:{firstName:"Leblanc",lastName:"Monroe"},phone:"+7 (950) 498-3212",about:"Nulla consectetur laboris nisi labore laboris reprehenderit. Deserunt aute pariatur nostrud tempor amet ad pariatur et ipsum cupidatat nostrud. Elit irure labore nostrud et reprehenderit enim. Deserunt sint magna sunt ex commodo nostrud adipisicing et laborum est amet.",eyeColor:"brown"}],["firstName","lastName","about","eyeColor"]),F=new class{constructor(e,t,i){this._tableWrapMainContainer=e,this._tableWrapContainer=t,this._model=i,this._users=this._model.getUsersOnPage(),this._TableComponent=new E(this._users,this._countSymbols),this._formComponent=null,this._user=null,this._countSymbols=null,this.setCountSymbols=this.setCountSymbols.bind(this),this._renderForm=this._renderForm.bind(this),this._removeForm=this._removeForm.bind(this),this._changeUser=this._changeUser.bind(this)}init(){this.renderTable(),this.setCountSymbols()}renderTable(){C(this._TableComponent),this._users=this._model.getUsersOnPage(),this._TableComponent=new E(this._users,this._countSymbols),x(this._tableWrapMainContainer,this._TableComponent,q),this._TableComponent.setClickOpenFormHandler(this._renderForm)}_renderForm(e){null!==this._formComponent&&this._removeForm(),this._model.setUser(e),this._user=this._model.getUser(),this._formComponent=new N(this._user),x(this._tableWrapContainer,this._formComponent,q),this._formComponent.setSubmitChangeUserHandler(this._changeUser),this._formComponent.setClickCancelHandler(this._removeForm),this._formComponent.setEscCloseHandler(this._removeForm)}_changeUser(e){this._model.changeUsers(e),this.renderTable(),this._removeForm()}_removeForm(){C(this._formComponent)}setCountSymbols(){const e=document.querySelector(".block-about");this._model.setCountSymbols(e),this._countSymbols=this._model.getCountSymbols(),this.renderTable()}}(P,k,D);F.init(),new class{constructor(e,t,i,a){this._tableSort=t,this._tableWrapContainer=e,this._model=i,this._tablePresenter=a,this._users=this._model.getUsers(),this._pageNumber=0,this._sortComponent=new S,this._paginationComponent=new L(h(this._users,f),this._pageNumber),this._changePageNumber=this._changePageNumber.bind(this),this._sortUsers=this._sortUsers.bind(this)}init(){this._renderSort(),this._renderPagination()}_renderSort(){C(this._sortComponent),x(this._tableSort,this._sortComponent,q),this._sortComponent.setChangeSortHandler(this._sortUsers)}_sortUsers(e){this._model.setSortedUsers(e.target.value),this._tablePresenter.renderTable()}_renderPagination(){null!==this._paginationComponent&&C(this._paginationComponent),this._paginationComponent=new L(h(this._users,f),this._pageNumber),x(this._tableWrapContainer,this._paginationComponent,q),this._paginationComponent.setClickChangePageNumber(this._changePageNumber)}_changePageNumber(e){this._model.setPageNumber(e.target.value),this._pageNumber=this._model.getPageNumber(),this._tablePresenter.renderTable(),this._renderSort(),this._renderPagination()}}(k,A,D,F).init(),window.onresize=F.setCountSymbols})()})();