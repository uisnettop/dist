(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["xabout"],{"347e":function(e,t,n){"use strict";n("9eb3")},"408a":function(e,t,n){var c=n("e330");e.exports=c(1..valueOf)},"4f82":function(e,t,n){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var c=n("e330"),r=n("1d80"),o=n("577e"),a=n("5899"),i=c("".replace),d="["+a+"]",l=RegExp("^"+d+d+"*"),s=RegExp(d+d+"*$"),u=function(e){return function(t){var n=o(r(t));return 1&e&&(n=i(n,l,"")),2&e&&(n=i(n,s,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},"5abe":function(e,t,n){"use strict";n("4f82")},6070:function(e,t,n){"use strict";n("8f43")},7156:function(e,t,n){var c=n("1626"),r=n("861d"),o=n("d2bb");e.exports=function(e,t,n){var a,i;return o&&c(a=t.constructor)&&a!==n&&r(i=a.prototype)&&i!==n.prototype&&o(e,i),e}},"8f43":function(e,t,n){},"9eb3":function(e,t,n){},a9e3:function(e,t,n){"use strict";var c=n("83ab"),r=n("da84"),o=n("e330"),a=n("94ca"),i=n("6eeb"),d=n("1a2d"),l=n("7156"),s=n("3a9b"),u=n("d9b5"),b=n("c04e"),p=n("d039"),f=n("241c").f,h=n("06cf").f,j=n("9bf2").f,v=n("408a"),O=n("58a8").trim,g="Number",C=r[g],y=C.prototype,m=r.TypeError,k=o("".slice),I=o("".charCodeAt),N=function(e){var t=b(e,"number");return"bigint"==typeof t?t:P(t)},P=function(e){var t,n,c,r,o,a,i,d,l=b(e,"number");if(u(l))throw m("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=O(l),t=I(l,0),43===t||45===t){if(n=I(l,2),88===n||120===n)return NaN}else if(48===t){switch(I(l,1)){case 66:case 98:c=2,r=49;break;case 79:case 111:c=8,r=55;break;default:return+l}for(o=k(l,2),a=o.length,i=0;i<a;i++)if(d=I(o,i),d<48||d>r)return NaN;return parseInt(o,c)}return+l};if(a(g,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var T,E=function(e){var t=arguments.length<1?0:C(N(e)),n=this;return s(y,n)&&p((function(){v(n)}))?l(Object(t),n,E):t},w=c?f(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),_=0;w.length>_;_++)d(C,T=w[_])&&!d(E,T)&&j(E,T,h(C,T));E.prototype=y,y.constructor=E,i(r,g,E)}},f820:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r={class:"row"},o={class:"col-3 col-s-12 menu"},a={class:"menu"},i={key:0},d={key:1},l={class:"col-9"},s={key:0},u=["innerHTML"],b={key:1};function p(e,t,n,p,f,h){var j=Object(c["C"])("tree"),v=Object(c["C"])("Content");return Object(c["v"])(),Object(c["f"])("div",r,[Object(c["g"])("div",o,[Object(c["g"])("div",a,[e.readyToDisplayNav?(Object(c["v"])(),Object(c["f"])("div",i,[Object(c["j"])(j,{depth:0,"tree-data":e.pageList,"tree-store-object":f.navStoreObject,onSetcurrentpage:h.setCurrentPage},null,8,["tree-data","tree-store-object","onSetcurrentpage"])])):(Object(c["v"])(),Object(c["f"])("div",d,"Loading..."))])]),Object(c["g"])("div",l,[e.readyToDisplayPage?(Object(c["v"])(),Object(c["f"])("div",s,[Object(c["g"])("p",{innerHTML:e.pageHtml},null,8,u)])):(Object(c["v"])(),Object(c["f"])("div",b,[Object(c["j"])(v)]))])])}var f={class:"tree"};function h(e,t,n,r,o,a){var i=Object(c["C"])("node-tree");return Object(c["v"])(),Object(c["f"])("ul",f,[Object(c["j"])(i,{node:n.treeData,depth:n.depth,"handle-title-click":a.handleTitleClick},null,8,["node","depth","handle-title-click"])])}n("a9e3");var j={class:"title"},v={key:0};function O(e,t,n,r,o,a){var i=Object(c["C"])("node");return Object(c["v"])(),Object(c["f"])("li",{class:"node-tree",onClick:t[2]||(t[2]=Object(c["I"])((function(e){return n.handleTitleClick(n.node)}),["stop"]))},[Object(c["g"])("div",{class:Object(c["p"])(["menuItem",{hoverOver:n.depth>0}])},[!n.node.hidden&&n.depth>0?(Object(c["v"])(),Object(c["f"])("span",{key:0,class:Object(c["p"])(["menuItemInner",{isSelected:n.node.isSelected}])},[n.node.children&&n.node.children.length&&n.depth>0&&!n.node.showChildren?(Object(c["v"])(),Object(c["f"])("span",{key:0,class:"expand",onClick:t[0]||(t[0]=Object(c["I"])((function(){return a.toggleChildren&&a.toggleChildren.apply(a,arguments)}),["stop"]))},"+")):n.node.children&&n.node.children.length&&n.depth>0&&n.node.showChildren?(Object(c["v"])(),Object(c["f"])("span",{key:1,class:"collapse",onClick:t[1]||(t[1]=Object(c["I"])((function(){return a.toggleChildren&&a.toggleChildren.apply(a,arguments)}),["stop"]))},"-")):Object(c["e"])("",!0),Object(c["g"])("span",j,Object(c["E"])(n.node.label),1)],2)):Object(c["e"])("",!0)],2),n.node.showChildren?(Object(c["v"])(),Object(c["f"])("div",v,[n.node.children&&n.node.children.length?(Object(c["v"])(),Object(c["f"])("div",{key:0,style:Object(c["q"])(a.indent)},[(Object(c["v"])(!0),Object(c["f"])(c["a"],null,Object(c["B"])(n.node.children,(function(e){return Object(c["v"])(),Object(c["d"])(i,{node:e,depth:n.depth+1,key:e,"handle-title-click":n.handleTitleClick},null,8,["node","depth","handle-title-click"])})),128))],4)):Object(c["e"])("",!0)])):Object(c["e"])("",!0)])}var g={emits:{handleExpandClick:function(e){return e&&(e.showChildren=!e.showChildren),!0}},name:"node",setup:function(){},props:{node:Object,depth:Number,handleTitleClick:Function},data:function(){return{currentItem:void 0}},computed:{indent:function(){return{transform:"translate(".concat(20*this.depth,"px)")}}},methods:{setCurrentPage:function(){console.log("setCurrentPage: "+this.node.label),this.$store.dispatch("navMenu/setCurrentPage",{obj:this.node})},toggleChildren:function(){this.$emit("handleExpandClick",this.node)}}},C=(n("347e"),n("6b0d")),y=n.n(C);const m=y()(g,[["render",O],["__scopeId","data-v-b1cf7f64"]]);var k=m,I=n("5502"),N={setup:function(){function e(){}return{init:e}},methods:{handleTitleClick:function(e){this.$emit("setcurrentpage",e)},handleExpandClick:function(){}},props:{treeData:Object,depth:{type:Number,default:-1}},components:{NodeTree:k},computed:Object(I["b"])({})};n("6070");const P=y()(N,[["render",h],["__scopeId","data-v-0082cfd4"]]);var T=P,E={class:"content"};function w(e,t,n,r,o,a){return Object(c["v"])(),Object(c["f"])("div",E," Nothing to see here (content.vue) loading... ")}var _={name:"Content"};const x=y()(_,[["render",w]]);var S=x,W={setup:function(){return{}},data:function(){return{navStoreObject:"blah!"}},computed:Object(I["b"])({readyToDisplayNav:function(e){return e.WPcontent.WPnavMenu.readyToDisplay},pageList:function(e){return e.WPcontent.WPnavMenu.pageList},pageHtml:function(e){return e.WPcontent.WPpage.currentPageData?e.WPcontent.WPpage.currentPageData:"!!!"},readyToDisplayPage:function(e){return e.WPcontent.WPpage.readyToDisplayPage}}),components:{Tree:T,Content:S},methods:{setCurrentPage:function(e){console.log("gotit:"+e.label),this.$store.dispatch("WPcontent/WPnavMenu/setCurrentPage",{obj:e})}}};n("5abe");const D=y()(W,[["render",p],["__scopeId","data-v-7c31bd92"]]);t["default"]=D}}]);
//# sourceMappingURL=xabout.7b6a72a6.js.map