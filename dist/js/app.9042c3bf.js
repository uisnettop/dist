(function(e){function t(t){for(var n,r,i=t[0],u=t[1],d=t[2],c=0,l=[];c<i.length;c++)r=i[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);g&&g(t);while(l.length)l.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=u(u.s=a[0]))}return e}var n={},r={app:0},o={app:0},s=[];function i(e){return u.p+"js/"+({xabout:"xabout"}[e]||e)+"."+{xabout:"1a058fff"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a={xabout:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({xabout:"xabout"}[e]||e)+"."+{xabout:"b9db4020"}[e]+".css",o=u.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var d=s[i],c=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(c===n||c===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){d=l[i],c=d.getAttribute("data-href");if(c===n||c===o)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[e],g.parentNode.removeChild(g),a(s)},g.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(g)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=s);var d,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var l=new Error;d=function(t){c.onerror=c.onload=null,clearTimeout(g);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}o[e]=void 0}};var g=setTimeout((function(){d({type:"timeout",target:c})}),12e4);c.onerror=c.onload=d,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(a,n,function(t){return e[t]}.bind(null,n));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var g=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0d20":function(e,t,a){"use strict";a("ada4")},"272a":function(e,t,a){"use strict";a("e3c2")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r=Object(n["i"])(" Click to show/hide debug panel: "),o={id:"debugStaticContent"},s=Object(n["g"])("br",null,null,-1),i={id:"debugDynamicContent"},u={id:"messageScreenContent"},d={class:"messageScreenContentOuter"},c={class:"messageScreenContentContainer1"},l={class:"messageScreenContentContainerCol1"},g={class:"messageScreenContentContainerCol1Content"},p=["innerHTML"],f=["innerHTML"],h={id:"nav"},b=Object(n["i"])("Home"),m=Object(n["i"])(" | "),v=Object(n["i"])("About"),w=Object(n["i"])(" | "),j={id:"contentArea"};function x(e,t,a,x,P,O){var y=Object(n["C"])("router-link"),k=Object(n["C"])("router-view");return Object(n["v"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("div",{id:"debug",class:Object(n["p"])(e.isDebugVisible),onClick:t[0]||(t[0]=function(){return x.showDebug&&x.showDebug.apply(x,arguments)})},[r,Object(n["g"])("div",{id:"debugContent",class:Object(n["p"])(e.debugContentStyle)},[Object(n["g"])("div",o,[Object(n["i"])(Object(n["E"])(e.programVersion),1),s,Object(n["i"])(" xMouse: "+Object(n["E"])(x.mousePos.x)+" x "+Object(n["E"])(x.mousePos.y),1)]),Object(n["g"])("div",i,[(Object(n["v"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(e.debugScreenContent,(function(e){return Object(n["v"])(),Object(n["f"])("div",{key:e.id},Object(n["E"])(e.tm)+" : "+Object(n["E"])(e.text),1)})),128))])],2)],2),Object(n["g"])("div",{id:"messageScreen",class:Object(n["p"])(e.isMessageScreenVisible),onClick:t[1]||(t[1]=function(){return e.messageScreenClick&&e.messageScreenClick.apply(e,arguments)})},[Object(n["g"])("div",u,[Object(n["g"])("div",d,[Object(n["g"])("div",c,[Object(n["g"])("div",l,[Object(n["g"])("div",g,[Object(n["g"])("h2",{innerHTML:e.messageScreenHeading},null,8,p),Object(n["g"])("p",{innerHTML:e.messageScreenContent},null,8,f)])])])])])],2),Object(n["g"])("div",h,[Object(n["j"])(y,{to:"/"},{default:Object(n["H"])((function(){return[b]})),_:1}),m,Object(n["j"])(y,{to:"/about"},{default:Object(n["H"])((function(){return[v]})),_:1}),w]),Object(n["g"])("div",j,[Object(n["j"])(k)])],64)}var P=a("5502");function O(){var e=Object(n["A"])(0),t=Object(n["A"])(0),a={x:e,y:t};function r(a){e.value=a.pageX,t.value=a.pageY}return Object(n["t"])((function(){window.addEventListener("mousemove",r)})),Object(n["u"])((function(){window.removeEventListener("mousemove",r)})),{mousePos:a}}var y=a("9224"),k={created:function(){console.log("0")},setup:function(){var e=O(),t=e.mousePos,a=Object(P["c"])();function r(){a.dispatch("app/showDebug")}return Object(n["t"])((function(){void 0!=a?a.storeIsReady||a.dispatch("init").then((function(e){e?(console.log("app.vue store is ready"),a.dispatch("app/showMessageScreen",{truefalse:!1})):console.error("store init failed - returned false")})):alert("No store! - real error!!!")})),{mousePos:t,showDebug:r}},computed:Object(P["b"])({messageScreenHeading:function(e){return e.app.messageScreen.heading},messageScreenContent:function(e){return e.app.messageScreen.content},debugScreenContent:function(e){return e.app.debugScreenContent},programVersion:function(){return"Program version: "+y["a"]},isDebugVisible:function(e){return e.app.debug&&e.app.allowDebugScreen?{debugView:e.app.debugIsVisible,debugHidden:!e.app.debugIsVisible}:{debugView:!1,hidden:!0}},isMessageScreenVisible:function(e){return{hidden:!e.app.isMessageScreenVisible}},debugContentStyle:function(e){return{hidden:!e.app.debugIsVisible}}}),methods:{testX:function(){console.log("app.vue return from dispatch")}}},S=(a("0d20"),a("6b0d")),L=a.n(S);const C=L()(k,[["render",x]]);var T=C,D=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),R=a("cf05"),E=a.n(R),M={class:"home"},W=Object(n["g"])("img",{alt:"Vue logo",src:E.a},null,-1);function A(e,t,a,r,o,s){var i=Object(n["C"])("HelloWorld");return Object(n["v"])(),Object(n["f"])("div",M,[W,Object(n["j"])(i,{msg:"Welcome to Your Vue.js App"})])}var _={class:"hello"},N=["innerHTML"],I=["onClick"],B=Object(n["h"])('<h3 data-v-46f1e0d9>Installed CLI Plugins</h3><ul data-v-46f1e0d9><li data-v-46f1e0d9><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-46f1e0d9>babel</a></li><li data-v-46f1e0d9><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-46f1e0d9>eslint</a></li></ul><h3 data-v-46f1e0d9>Essential Links</h3><ul data-v-46f1e0d9><li data-v-46f1e0d9><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-46f1e0d9>Core Docs</a></li><li data-v-46f1e0d9><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-46f1e0d9>Forum</a></li><li data-v-46f1e0d9><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-46f1e0d9>Community Chat</a></li><li data-v-46f1e0d9><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-46f1e0d9>Twitter</a></li><li data-v-46f1e0d9><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-46f1e0d9>News</a></li></ul><h3 data-v-46f1e0d9>Ecosystem</h3><ul data-v-46f1e0d9><li data-v-46f1e0d9><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-46f1e0d9>vue-router</a></li><li data-v-46f1e0d9><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-46f1e0d9>vuex</a></li><li data-v-46f1e0d9><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-46f1e0d9>vue-devtools</a></li><li data-v-46f1e0d9><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-46f1e0d9>vue-loader</a></li><li data-v-46f1e0d9><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-46f1e0d9>awesome-vue</a></li></ul>',6);function H(e,t,a,r,o,s){return Object(n["v"])(),Object(n["f"])("div",_,[Object(n["g"])("h1",null,Object(n["E"])(a.msg),1),Object(n["g"])("p",{innerHTML:e.lang.welcomeDescription},null,8,N),(Object(n["v"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(e.languagesAvailable,(function(e){return Object(n["v"])(),Object(n["f"])("p",{key:e.id,onClick:function(t){return r.changeLang(t,e)}},Object(n["E"])(e),9,I)})),128)),B])}var V={name:"HelloWorld",props:{msg:String},setup:function(){var e=Object(P["c"])();function t(t,a){e.dispatch("lang/setLanguage",a)}return{changeLang:t}},computed:Object(P["b"])({lang:function(e){return e.lang.text},languagesAvailable:function(e){return e.lang.languagesAvailable}}),methods:{changeLangX:function(e,t){console.log(t)}}};a("272a");const q=L()(V,[["render",H],["__scopeId","data-v-46f1e0d9"]]);var F=q,J={name:"Home",components:{HelloWorld:F}};const X=L()(J,[["render",A]]);var U=X,Y=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:function(){return a.e("xabout").then(a.bind(null,"f820"))}}],z=Object(D["a"])({history:Object(D["b"])(),routes:Y}),G=z,K=a("3835"),Q=a("1da1"),Z=(a("96cf"),a("a15b"),{namespaced:!0,state:{iam:"app.js",test:"blah",ready:!1,dynamic:{},isMessageScreenVisible:!0,messageScreen:{heading:"Loading",content:"Please wait..."},errored:!1,errors:[],debugIsVisible:!1,debug:!0,debugScreenContent:[],allowDebugScreen:!0,init:function(){console.log("init")}},mutations:{getDynamic:function(e,t){return void 0==e.dynamic[t.id]&&(void 0==t.default?console.error("store.js: tried to access a dynamic store value ("+t.id+") that does not actually exist and no default value was supplied - this is propbably a sequencing/timing issue!"):e.dynamic[t.id]=t.default),e.dynamic[t.id]},showDebug:function(e){e.debugIsVisible=!e.debugIsVisible},showMessageScreen:function(e,t){e.isMessageScreenVisible=t.truefalse,t.heading&&(e.messageScreen.heading=t.heading),t.content&&(e.messageScreen.content=t.content)},addDebugMessage:function(e,t){var a=(new Date).toLocaleTimeString();e.debugScreenContent.push({id:e.debugScreenContent.length+1,tm:a,text:t})},init:function(e){console.log("app.js init"),e.ready=!0}},actions:{init:function(e){return Object(Q["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.commit,n=!0,!n){t.next=7;break}return a("init"),t.abrupt("return",!0);case 7:return t.abrupt("return",!1);case 8:case"end":return t.stop()}}),t)})))()},showDebug:function(e){var t=e.commit;t("showDebug")},showMessageScreen:function(e,t){var a=e.commit;a("showMessageScreen",t)},addError:function(e,t){var a=e.state,n=e.commit;a.errored=!0,a.errors.push(t.msg);var r=a.errors.join("<br>");n("showMessageScreen",{truefalse:!0,heading:"Error",content:r}),n("addDebugMessage","Error: "+t.msg)}},modules:{}}),$={namespaced:!0,state:{iam:"doNothingButWait.js"},mutations:{},actions:{wait3:function(){return new Promise((function(e){console.log("....wait3 start"),setTimeout((function(){console.log("....wait3 done"),e("3 second wait done")}),3e3)}))},wait6:function(){return new Promise((function(e){console.log("....wait6 start"),setTimeout((function(){console.log("....wait6 done"),e("6 second wait done")}),6e3)}))}}},ee=a("2909"),te=(a("a434"),a("4e82"),a("ac1f"),a("5319"),a("fb6a"),a("bc3a")),ae=a.n(te),ne={namespaced:!0,test:function(){console.log("huh")},state:{iam:"loadData",auth:""},getJWT:function(e){return Object(Q["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){ae()({method:"post",url:e+"/?rest_route=/jwt-auth/v1/token",data:{username:"test",password:"#rW7NGnYAwSj1NElq#6jadJL"}}).then((function(e){console.log(e),t({ok:"ok"})})).catch((function(e){var a="Load error - check console";e.message&&(a=e.message,"Network Error"===a&&(a+=" (possible CORS error)")),"Request failed with status code 404"===e.message&&(a+=" (maybe the authentication plugin is not installed)"),e.response&&e.response.statusText&&(a+="<br>"+e.response.statusText),t({error:a})}))})));case 1:case"end":return t.stop()}}),t)})))()},loadData:function(e){return Object(Q["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){ae.a.get(e).then((function(e){e&&t({status:"ok",obj:e})})).catch((function(e){e.response?"The page number requested is larger than the number of pages available."===e.response.data.message?(e.response.data=void 0,t({status:"finished",obj:e.response})):e.response.data.message?t({error:e.response.data.message}):t({error:e.message}):e.message?"Network Error"===e.message?t({error:"Load error: please check the URL / Network connection!"}):t({error:e.message}):t({error:"Load error - please check console."})}))})));case 1:case"end":return t.stop()}}),t)})))()},wait3:function(){return new Promise((function(e,t){console.log("....wait3 start"),setTimeout((function(){console.log("....wait3 done"),e("3 second wait done")}),3e3),t&&console.log("x")}))}},re={namespaced:!0,test:function(){console.log("huh")},state:{iam:""},data:{url:"",pages:[],maxPages:20,allDataLoaded:!1,pagedRequestArray:[],currentAmountPerPageToLoad:0,maxPageToLoadWorking:0,loadingPages:!1,loadingData:!1,itemsToLoad:-1},wait3:function(){return new Promise((function(e,t){console.log("....wait3 start"),setTimeout((function(){console.log("....wait3 done"),e("3 second wait done")}),3e3),t&&console.log("x")}))},loadPagedRecordsX:function(e,t,a){var n=arguments,r=this;return Object(Q["a"])(regeneratorRuntime.mark((function o(){var s,i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return s=n.length>3&&void 0!==n[3]?n[3]:10,i=n.length>4?n[4]:void 0,r.loadingPages=!0,r.loadingData=!0,r.data.itemsToLoad=a*s,o.abrupt("return",new Promise((function(n){var o="";if(a>0){var u;t<1&&(t=1),re.data.currentAmountPerPageToLoad=s;while(t<a+1)u=e.replace("{{resultsPerPage}}",s),u=u.replace("{{maxPageLoaded}}",t),re.data.pagedRequestArray.push(u),t++;re.data.pagedRequestArray.length>re.data.maxPages?(re.data.pagedRequestArray=re.data.pagedRequestArray.slice(0,re.data.maxPages),o="loadPagedRecords was asked to load more than maxPages allows!"):r.loadNext(i)}n(""===o?{status:"loading..."}:{error:o})})));case 6:case"end":return o.stop()}}),o)})))()},loadPagedRecords:function(e,t,a){var n=arguments,r=this;return Object(Q["a"])(regeneratorRuntime.mark((function o(){var s,i,u,d,c;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:s=n.length>3&&void 0!==n[3]?n[3]:10,i=ne,r.data.itemsToLoad=a*s,u=!0,d="",t--;case 6:if(!u){o.next=16;break}if(t++,t>a&&(u=!1),!u){o.next=14;break}return c=e.replace("{{resultsPerPage}}",s),c=c.replace("{{maxPageLoaded}}",t),o.next=14,i.loadData(c).then((function(e){if(e.error)u=!1,d=e.error;else if("ok"===e.status){var t,n=re.checkResponseHeaders(e.obj.headers,a);if(n.maxPageToLoad&&(a=n.maxPageToLoad),n.error)u=!1,d=n.error;else if(e.obj.data)(t=re.data.pages).push.apply(t,Object(ee["a"])(e.obj.data))}}));case 14:o.next=6;break;case 16:return""!=d&&console.log(d),o.abrupt("return",new Promise((function(e,t){if(""===d){var a={status:"ok"};a.data=re.data.pages,e(a)}else t(d)})));case 18:case"end":return o.stop()}}),o)})))()},checkResponseHeaders:function(e,t){var a,n={};return e["x-wp-totalpages"]&&(a=parseInt(e["x-wp-totalpages"]),a<t&&(console.log("amount of pagedRequests has been reduced because the server says there are less!"),n.maxPageToLoad=a)),e["x-wp-total"]&&(a=parseInt(e["x-wp-total"]),a>this.data.itemsToLoad&&(n={error:"Not all of the WP contents list is being loaded! - MUST load it all to display correctly! ("+e["x-wp-total"]+" available. Told to load: "+this.data.itemsToLoad+")"})),n},loadNext:function(e){var t=ne;this.data.loadingData=!0,t.loadData(re.data.pagedRequestArray[0]).then((function(t){if(t){var a=void 0;if(t.status){if("finished"===t.status)re.data.loadingData=!1,re.data.pagedRequestArray=[],a={status:"ok"};else if("ok"===t.status&&(a=re.checkResponseHeaders(t.obj.headers),!a.error)){var n;if(t.obj.data)(n=re.data.pages).push.apply(n,Object(ee["a"])(t.obj.data));re.data.pagedRequestArray.shift(),re.data.pagedRequestArray.length>0?re.loadNext(e):(re.data.loadingData=!1,a={status:"ok"})}}else t.error&&(re.data.loadingData=!1,re.data.pagedRequestArray=[],a={error:t.error});void 0!=a&&("ok"===a.status&&(a.data=re.data.pages,re.data.loadingPages=!1,e(a)),a.error&&e(a))}}))}},oe={namespaced:!0,test:function(){console.log("huh")},state:{iam:"loadWPcontents",maxPagesToLoad:20,resultsPerPage:30,pages:[],functionToCall:void 0,functionToCallContext:void 0},checkAndReFormatLoadedData:function(e){var t,a;for(var n in e)t=e[n],t.id&&t.title.rendered&&(a={id:t.id,label:t.title.rendered,isSelected:!1,menu_order:t.menu_order,parent:t.parent,hidden:!1,showChildren:!1,expanded:!1,origData:t},e[n]=a);return e},dataLoaded:function(e){if(e)if(e.error)oe.state.functionToCall(e);else{var t=e.data;t=oe.checkAndReFormatLoadedData(t),t=oe.orderByID(t),oe.state.pages=oe.pageWalk(t),e={pages:oe.state.pages,thereIsMore:e.thereIsMore},oe.state.functionToCall(e,oe.state.functionToCallContext)}},pageWalk:function(e){var t=this.getLevel(e,0);t=this.orderByMenuOrder(t);for(var a=0;a<t.length;a++)t[a]=this.getChildren(t[a],e,-1);return t},getChildren:function(e,t,a){a++;var n=this.getLevel(t,e.id);if(n=this.orderByMenuOrder(n),n.length>0)for(var r=0;r<n.length;r++)n[r]=this.getChildren(n[r],t,a);return e.children=n,e},formatLoadedData:function(e){if(e){var t=e.data;return t=oe.checkAndReFormatLoadedData(t),t=oe.orderByID(t),oe.pageWalk(t)}},loadWPcontents:function(e){var t=this;return Object(Q["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n="",a.next=3,re.loadPagedRecords(e,1,t.state.maxPagesToLoad,t.state.resultsPerPage,t.dataLoaded).then((function(e){"ok"===e.status?r=oe.formatLoadedData(e):n="bad return from loadPagedRecords"}),(function(e){e?(console.log("Error: "+e),n=e):n="undefined error in loadWPcontents"}));case 3:return a.abrupt("return",new Promise((function(e,t){""===n?e(r):t(n)})));case 4:case"end":return a.stop()}}),a)})))()},wait3:function(){return new Promise((function(e,t){console.log("....wait3 start"),setTimeout((function(){console.log("....wait3 done"),e("3 second wait done")}),3e3),t&&console.log("x")}))},modules:{getData:re},getLevel:function(e,t){for(var a=[],n=e.length,r=0;r<n;r++)e[r].parent===t&&(a.push.apply(a,Object(ee["a"])(e.splice(r,1))),n--,r--);return a},orderByID:function(e){return e.sort((function(e,t){return e.id<t.id?-1:e.id>t.id?1:0})),e},orderByMenuOrder:function(e){return e.sort((function(e,t){return e.menu_order<t.menu_order?-1:e.menu_order>t.menu_order?1:0})),e}},se={namespaced:!0,setup:function(){},state:{iam:"WPnavMenu.js",wordPressSite:"",pagesEndpoint:"",resultsPerPage:100,pages:[],expandedIds:[],staticTree:[{id:1,label:"testxsx",expanded:!0,children:[{id:4,label:"sub1",isSelected:!0,expanded:!0},{id:5,label:"sub2",hidden:!1,expanded:!1,children:[{id:7,label:"sub1",hidden:!1,expanded:!0},{id:8,label:"sub2",expanded:!1},{id:9,label:"sub3",expanded:!1}]},{id:6,label:"sub3",hidden:!1,expanded:!1}]},{id:2,label:"test2",expanded:!1},{id:3,label:"test3",expanded:!0,children:[{id:10,label:"sub1",expanded:!1},{id:11,label:"sub2",expanded:!1},{id:12,label:"sub3",expanded:!1}]}],emptyTree:[],currentStatus:"loading...",readyToDisplay:!1,status:"",pageList:[],useStaticTree:!1,testx:1},getters:{},computed:Object(P["b"])({}),data:{pageArray:[]},findPage:function(e){if(this.state.pageList&&!(this.state.pageList.length<1)){var t,a=[],n=this.state.pageList.children;for(var r in n){var o=this.findPageCheckNode(n[r],e,a);if(o){t=o;break}a.pop()}return t}le.dispatch("app/addError",{msg:"Error! - cannot find a page in a non-existant list!"})},findPageCheckNode:function(e,t,a){if(a.push(e.id),e.children)for(var n in e.children){var r=this.findPageCheckNode(e.children[n],t,a);if(r)return r;a.pop()}if(e[t.att]===t.val)return{obj:e,path:a}},pageWalk:function(){var e=this.getLevel(se.data.pageArray,0);e=this.orderByMenuOrder(e);for(var t=0;t<e.length;t++)e[t]=this.getChildren(e[t],-1);return e},getChildren:function(e,t){t++,e.adepth=t;var a,n=e.id,r=!0;while(r)if(a=this.getLevel(se.data.pageArray,n),a.length>0){for(var o=0;o<a.length;o++)a[o].children=this.getChildren(a[o],t);e.children=a}else console.log(n+" has no children (WPnavMenu.js)"),r=!1;return e},getLevel:function(e,t){for(var a=[],n=e.length,r=0;r<n;r++)e[r].parent===t&&(a.push.apply(a,Object(ee["a"])(e.splice(r,1))),n--,r--);return a},orderByMenuOrder:function(e){return e.sort((function(e,t){return e.menu_order<t.menu_order?-1:e.menu_order>t.menu_order?1:0})),e},mutations:{addToList:function(e,t){var a;(a=e.pages).push.apply(a,Object(ee["a"])(t))},correctPageOrdering2:function(e){e.pages=se.data.pageArray},replacePageMenu:function(e,t){t&&(e.pageList=t,e.currentStatus="",e.readyToDisplay=!0)}},actions:{testCall:function(){},setCurrentPage:function(e,t){var a=e.dispatch,n=se.findPage({att:"isSelected",val:!0});n&&(n.obj.isSelected=!1),n=se.findPage({att:"id",val:t.obj.id}),n?(console.log("found title: "+n.obj.label),n.obj.isSelected=!0,n.obj.showChildren=!0,a("WPcontent/navigateTo",t.obj.origData,{root:!0})):console.log("NOT FOUND!")},logError:function(e,t){var a=e.dispatch;a("app/addError",{msg:"Error! - "+t},{root:!0})},init:function(e,t){return Object(Q["a"])(regeneratorRuntime.mark((function a(){var r,o,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=e.state,o=e.dispatch,s=e.commit,console.log("WPnavMenu - init"),t&&(t.site&&(r.wordPressSite=t.site),t.pagesEndpoint&&(r.pagesEndpoint=t.pagesEndpoint)),""==r.wordPressSite){a.next=17;break}if(i={label:"dummyTopLevelItem",hidden:!1,showChildren:!0,expanded:!0,children:[]},!r.useStaticTree){a.next=13;break}return i.children=r.staticTree,r.pageList=i,r.currentStatus="",r.readyToDisplay=!0,a.abrupt("return",!0);case 13:return oe.loadWPcontents(r.wordPressSite+r.pagesEndpoint).then((function(e){var t=Object(n["z"])(e);i.children=t,s("replacePageMenu",i)}),(function(e){e&&(console.log("loadWPcontents fail"),o("utils/addError",{msg:"WPnavMenu : "+e},{root:!0}))})),a.abrupt("return",!0);case 15:a.next=18;break;case 17:o("utils/addError",{msg:"WPnavMenu : no WP site defined!"},{root:!0});case 18:case"end":return a.stop()}}),a)})))()}},modules:{loadWPcontentsList:oe}},ie={namespaced:!0,state:{iam:"WPpage.js",ready:!1,contentArray:[{id:1,src:"dummy",contents:"hi this is a test"}],errorMessage:"",wordPressSite:"",currentPageData:"nothing to see here...",currentPageObj:void 0,readyToDisplayPage:!1,pageEndpoint:"/?rest_route=/wp/v2/pages/{{pageId}}",pageEndpointX:"/wp/v2/pages/{{pageId}}",test:0},mutations:{ready:function(e){e.ready=!0}},loadPage:function(e){return Object(Q["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=ne,!e){t.next=6;break}return t.next=4,a.loadData(e).then((function(e){if(e)return e.obj.data.content.rendered}));case 4:return n=t.sent,t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))()},actions:{loadPage:function(e,t){return Object(Q["a"])(regeneratorRuntime.mark((function a(){var n,r,o,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=e.state,r=e.dispatch,!t){a.next=10;break}return n.currentPageObj=t,o=n.pageEndpoint,o=o.replace("{{pageId}}",t.id),o=n.wordPressSite+o,a.next=8,ie.loadPage(o);case 8:s=a.sent,s?(n.currentPageData=s,n.readyToDisplayPage=!0):r("utils/addError",{msg:"WPpage load failed."},{root:!0});case 10:case"end":return a.stop()}}),a)})))()},init:function(e,t){return Object(Q["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.dispatch,r=e.state,t&&t.site&&(r.wordPressSite=t.site),""!=r.wordPressSite?n("utils/addDebugMessage","WPpage - init",{root:!0}):n("utils/addError",{msg:"WPpage : no WP site defined!"},{root:!0}),n("utils/addDebugMessage","WPpage - init",{root:!0}),a.abrupt("return",!0);case 5:case"end":return a.stop()}}),a)})))()}}},ue={namespaced:!0,state:{iam:"WPcontent.js",ready:!1,store:"",dispatch:"",wordpressSite:"https://mooc.conductit.eu",pagesEndpoint:"/wp-json/wp/v2/pages/?per_page={{resultsPerPage}}&page={{maxPageLoaded}}",username:"",password:""},mutations:{ready:function(e){e.ready=!0}},actions:{navigateTo:function(e,t){var a=e.dispatch;t&&a("WPcontent/WPpage/loadPage",t,{root:!0})},init:function(e){return Object(Q["a"])(regeneratorRuntime.mark((function t(){var a,n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.dispatch,n=e.state,r=!0,""==n.username&&""==n.password){t.next=6;break}return t.next=5,ne.getJWT(n.wordpressSite).then((function(e){e.error&&(a("utils/addError",{msg:e.error},{root:!0}),r=!1)}));case 5:case 6:if(!r){t.next=11;break}return t.next=9,a("initDo");case 9:return o=t.sent,t.abrupt("return",o);case 11:case"end":return t.stop()}}),t)})))()},initDo:function(e){var t=this;return Object(Q["a"])(regeneratorRuntime.mark((function a(){var n,r,o,s,i,u,d;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.dispatch,r=e.state,n("utils/addDebugMessage","WPcontent - init",{root:!0}),o=!0,a.next=5,Promise.all([t.dispatch("WPcontent/WPnavMenu/init",{site:r.wordpressSite,pagesEndpoint:r.pagesEndpoint}),t.dispatch("WPcontent/WPpage/init",{site:r.wordpressSite})]);case 5:return s=a.sent,i=Object(K["a"])(s,2),u=i[0],d=i[1],u||(n("utils/addError",{msg:"WPnavMenu failed."},{root:!0}),o=!1),d||(n("utils/addError",{msg:"WPpage failed."},{root:!0}),o=!1),a.abrupt("return",o);case 12:case"end":return a.stop()}}),a)})))()}},modules:{WPpage:ie,WPnavMenu:se}},de={namespaced:!0,state:{iam:"utils.js (store)",ready:!1,errorMessage:""},mutations:{ready:function(e){e.ready=!0}},actions:{init:function(e){var t=e.dispatch;return t("addDebugMessage","utils (init)"),!0},addDebugMessage:function(e,t){var a=e.commit;a("app/addDebugMessage",t,{root:!0})},addError:function(e,t){var a=e.dispatch;t.heading||(t.heading="Error"),a("app/addError",t,{root:!0})}}},ce={namespaced:!0,state:{iam:"lang.js",ready:!1,text:{welcomeDescription:"blah"},errorMessage:"",XlangFileToLoad:"https://loopback.hopto.me/json/lang.json",langFileToLoad:"https://www8.uis.no/fag/vue/externalLoads/lang.json",defaultLang:"en_gb",languagesAvailable:[],loadedTexts:[]},mutations:{dataLoaded:function(e,t){e.loadedTexts=t;for(var a=0;a<e.loadedTexts.length;a++)e.languagesAvailable.push(e.loadedTexts[a].lang)},setLanguage:function(e,t){e.text=e.loadedTexts[t].texts},ready:function(e){e.ready=!0}},actions:{init:function(e){return Object(Q["a"])(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,n=e.state,r=e.dispatch,console.log("lang init - loadData"),t.abrupt("return",fetch(n.langFileToLoad).then((function(e){return e.json()})).then((function(e){a("dataLoaded",e);var t=r("setLanguage",n.defaultLang).then((function(e){return e?(a("ready"),!0):(r("utils/addError",{msg:"Failed to set default language texts: "+n.errorMessage}),!1)}));return t})).catch((function(e){return r("app/addError",{msg:"Failed to load language texts file: "+e.message},{root:!0}),n.errorMessage=e.message,!1})));case 3:case"end":return t.stop()}}),t)})))()},setLanguage:function(e,t){var a=e.commit,n=e.state;a("app/addDebugMessage","Set language: "+t,{root:!0});for(var r=void 0,o=0;o<n.loadedTexts.length;o++)if(n.loadedTexts[o].lang===t){r=o;break}return void 0!=r?(a("setLanguage",r),!0):(n.errorMessage="No language texts found for: "+t,!1)}}},le=Object(P["a"])({state:{iam:"store",storeIsReady:!1,dynamic:{}},mutations:{init:function(e){e.storeIsReady=!0,console.log("...store init is done!")}},actions:{init:function(e){var t=this;return Object(Q["a"])(regeneratorRuntime.mark((function a(){var n,r,o,s,i,u,d,c,l,g,p,f,h,b;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,r=e.dispatch,o=!0,a.next=4,Promise.all([t.dispatch("utils/init"),t.dispatch("app/init")]);case 4:if(s=a.sent,i=Object(K["a"])(s,2),u=i[0],d=i[1],!u||!d){a.next=28;break}return a.next=11,Promise.all([r("lang/init")]);case 11:if(c=a.sent,l=Object(K["a"])(c,1),g=l[0],!g){a.next=24;break}return r("utils/addDebugMessage","Program started"),a.next=18,Promise.all([t.dispatch("WPcontent/init",{utils:de})]);case 18:p=a.sent,f=Object(K["a"])(p,1),h=f[0],h||(o=!1),a.next=26;break;case 24:r("utils/addError",{msg:"Could not load language (store.js)"}),o=!1;case 26:a.next=34;break;case 28:b="",u||(b="Could not start utils.js (store.js)"),d||(b="Could not start app.js (store.js)"),r("app/addError",{msg:b},{root:!0}),o=!1;case 34:if(!o){a.next=39;break}return n("init"),a.abrupt("return",!0);case 39:return a.abrupt("return",!1);case 40:case"end":return a.stop()}}),a)})))()},init4:function(e){var t=this;return Object(Q["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,t.dispatch("doNothingButWait/wait3"),t.dispatch("doNothingButWait/wait6"),n("init"),a.abrupt("return",!0);case 5:case"end":return a.stop()}}),a)})))()},init2:function(e){var t=this;return Object(Q["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,a.next=3,t.dispatch("doNothingButWait/wait3");case 3:return a.next=5,t.dispatch("doNothingButWait/wait6");case 5:return n("init"),a.abrupt("return",!0);case 7:case"end":return a.stop()}}),a)})))()},init3:function(e){var t=this;return Object(Q["a"])(regeneratorRuntime.mark((function a(){var n,r,o,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,a.next=3,Promise.all([t.dispatch("doNothingButWait/wait3"),t.dispatch("doNothingButWait/wait6")]);case 3:return r=a.sent,o=Object(K["a"])(r,2),s=o[0],i=o[1],console.log(s),console.log(i),n("init"),a.abrupt("return",!0);case 11:case"end":return a.stop()}}),a)})))()}},modules:{app:Z,utils:de,doNothingButWait:$,WPcontent:ue,lang:ce}}),ge=a("9483");console.log("...regServ"),Object(ge["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(n["c"])(T).use(le).use(G).mount("#app")},9224:function(e){e.exports=JSON.parse('{"a":"0.3.3"}')},ada4:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},e3c2:function(e,t,a){}});
//# sourceMappingURL=app.9042c3bf.js.map