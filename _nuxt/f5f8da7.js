(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{168:function(t,e,n){"use strict";n.r(e);n(15),n(12),n(16),n(7),n(20),n(14),n(21);var r=n(3),o=n(0),c=n(84);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=o.a.extend({mounted:function(){"/"===this.$route.path?window.addEventListener("scroll",this.handleScroll):this.isShow=!0},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},data:function(){return{color:"rgba(255, 255, 255, 0.5)",isShow:!1}},computed:f(f({},Object(c.c)({getLogoPosition:"getLogoPosition",getCartTotal:"cart/getCartTotal"})),{},{cartNumber:function(){return"20"}}),methods:{handleScroll:function(){this.isShow=window.scrollY>this.getLogoPosition}}}),v=n(66),h=n(78),m=n.n(h),_=n(351),w=n(352),O=n(340),x=n(173),y=n(180),T=n(239),j=n(348),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{staticClass:"px-4",attrs:{app:"",color:t.color}},[n("v-expand-transition",[n("a",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"center-top",attrs:{href:"/",role:"button"}},[n("v-img",{attrs:{src:"/icon.png","max-height":"96","max-width":"96"}})],1)]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:"",href:"/books"}},[t._v("Bookself")]),t._v(" "),n("v-btn",{attrs:{text:"",href:"/tracking"}},[t._v("Tracking")]),t._v(" "),n("v-btn",{attrs:{text:"",href:"/about-us"}},[t._v("WHAT IS CANDIDE?")]),t._v(" "),n("v-btn",{attrs:{icon:"",href:"/cart"}},[n("client-only",[n("v-badge",{attrs:{content:t.getCartTotal,value:t.getCartTotal,color:"green",overlap:""}},[n("v-icon",[t._v("mdi-cart")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VAppBar:_.a,VBadge:w.a,VBtn:O.a,VExpandTransition:x.a,VIcon:y.a,VImg:T.a,VSpacer:j.a})},172:function(t,e,n){"use strict";var r=n(235);e.a=function(t){var e=t.store;Object(r.a)()(e)}},223:function(t,e,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("dc093880",content,!0,{sourceMap:!1})},231:function(t,e,n){var content=n(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("56b15182",content,!0,{sourceMap:!1})},238:function(t,e,n){"use strict";var r={components:{NavBar:n(168).default},name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}},o=(n(328),n(66)),c=n(78),l=n.n(c),f=n(347),d=n(340),v=n(349),h=n(180),m=n(350),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("nav-bar"),t._v(" "),n("v-main",[n("Nuxt")],1),t._v(" "),n("v-footer",{staticClass:"d-flex justify-space-between px-8",attrs:{absolute:!t.fixed,app:"","min-height":"64",dark:""}},[n("div",[t._v("\n      Copyright © "+t._s((new Date).getFullYear())+" Candidebooks. All rights\n      reserved.\n    ")]),t._v(" "),n("div",[n("span",[t._v("ติดตามข่าวสาร : ")]),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-facebook")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-instagram")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-twitter")])],1)],1)])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{NavBar:n(168).default}),l()(component,{VApp:f.a,VBtn:d.a,VFooter:v.a,VIcon:h.a,VMain:m.a})},252:function(t,e,n){n(253),t.exports=n(254)},284:function(t,e,n){"use strict";n(223)},285:function(t,e,n){var r=n(29)(!1);r.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=r},328:function(t,e,n){"use strict";n(231)},329:function(t,e,n){var r=n(29)(!1);r.push([t.i,".secondary-bg{color:#fff!important;background:#272727}.center-top{position:absolute;top:0;left:50%;transform:translate(-50%)}.no-overflow-hidden .v-label,.no-overflow-hidden .v-text-field__details,.v-select__selection--comma{overflow:visible!important}.chip-active-border{border-width:thin;border-style:solid}",""]),t.exports=r},334:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"getters",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l}));var r=function(){return{logoPosition:0,counter:10}},o={getLogoPosition:function(t){return t.logoPosition}},c={SET_COUNTER:function(t){t.counter++},SET_LOGOPOSITION:function(t,data){t.logoPosition=data}},l={increment:function(t){(0,t.commit)("SET_COUNTER")},logoStaticPosition:function(t,e){(0,t.commit)("SET_LOGOPOSITION",e)}}},335:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"getters",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l}));n(47),n(58);var r=function(){return{cart:[]}},o={getCartTotal:function(t){return t.cart.length}},c={ADD_TO_CART:function(t,e){t.cart.push(e)}},l={addToCart:function(t,e){var n=t.commit;return t.state.cart.includes("".concat(e))?{status:!1,message:"สินค้านี้ถูกเพิ่มในตะกร้าแล้ว"}:(n("ADD_TO_CART",e),{status:!0,message:"เพิ่มสินค้าในตะกร้าเรียบร้อยแล้ว"})}}},75:function(t,e,n){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(284),n(66)),c=n(78),l=n.n(c),f=n(347),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports;l()(component,{VApp:f.a})}},[[252,22,6,23]]]);