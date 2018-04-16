webpackJsonp([4],{"0xDb":function(e,t,n){"use strict";var o=n("pFYg"),a=n.n(o),i=n("mvHQ"),r=n.n(i);!function(e){var t={},n=/android/gi.test(navigator.appVersion),o=function(){var t=e.localStorage;return n&&(t=os.localStorage()),t};function i(e,t,n,o){return"function"==typeof t&&(o=n,n=t,t=void 0),"function"!=typeof n&&(o=n,n=void 0),{url:e,data:t,fnSuc:n,dataType:o}}t.trim=function(e){return String.prototype.trim?null==e?"":String.prototype.trim.call(e):e.replace(/(^\s*)|(\s*$)/g,"")},t.trimAll=function(e){return e.replace(/\s*/g,"")},t.isElement=function(e){return!(!e||1!=e.nodeType)},t.isArray=function(e){return Array.isArray?Array.isArray(e):e instanceof Array},t.isEmptyObject=function(e){return"{}"===r()(e)},t.addEvt=function(e,n,o,a){t.isElement(e)?(a=a||!1,e.addEventListener&&e.addEventListener(n,o,a)):console.warn("$api.addEvt Function need el param, el param must be DOM Element")},t.rmEvt=function(e,n,o,a){t.isElement(e)?(a=a||!1,e.removeEventListener&&e.removeEventListener(n,o,a)):console.warn("$api.rmEvt Function need el param, el param must be DOM Element")},t.one=function(e,n,o,a){if(t.isElement(e)){a=a||!1;var i=this;i.addEvt(e,n,function t(){o&&o(),i.rmEvt(e,n,t,a)},a)}else console.warn("$api.one Function need el param, el param must be DOM Element")},t.dom=function(e,t){if(1===arguments.length&&"string"==typeof arguments[0]){if(document.querySelector)return document.querySelector(arguments[0])}else if(2===arguments.length&&e.querySelector)return e.querySelector(t)},t.domAll=function(e,t){if(1===arguments.length&&"string"==typeof arguments[0]){if(document.querySelectorAll)return document.querySelectorAll(arguments[0])}else if(2===arguments.length&&e.querySelectorAll)return e.querySelectorAll(t)},t.byId=function(e){return document.getElementById(e)},t.first=function(e,n){return 1===arguments.length?t.isElement(e)?e.children[0]:void console.warn("$api.first Function need el param, el param must be DOM Element"):2===arguments.length?this.dom(e,n+":first-child"):void 0},t.last=function(e,n){if(1===arguments.length){if(!t.isElement(e))return void console.warn("$api.last Function need el param, el param must be DOM Element");var o=e.children;return o[o.length-1]}if(2===arguments.length)return this.dom(e,n+":last-child")},t.eq=function(e,t){return this.dom(e,":nth-child("+t+")")},t.not=function(e,t){return this.domAll(e,":not("+t+")")},t.prev=function(e){if(t.isElement(e)){var n=e.previousSibling;return n.nodeType&&3===n.nodeType?n=n.previousSibling:void 0}console.warn("$api.prev Function need el param, el param must be DOM Element")},t.next=function(e){if(t.isElement(e)){var n=e.nextSibling;return n.nodeType&&3===n.nodeType?n=n.nextSibling:void 0}console.warn("$api.next Function need el param, el param must be DOM Element")},t.closest=function(e,n){if(t.isElement(e)){var o,a;return function e(n,i){for(o=t.domAll(n.parentNode,i),a=function(e,t){for(var n=0,o=e.length;n<o;n++)if(e[n].isSameNode(t))return e[n];return!1}(o,n);!a;){if(null!=(n=n.parentNode)&&n.nodeType==n.DOCUMENT_NODE)return!1;e(n,i)}return a}(e,n)}console.warn("$api.closest Function need el param, el param must be DOM Element")},t.contains=function(e,t){var n=!1;if(t===e)return n=!0;do{if((t=t.parentNode)===e)return n=!0}while(t===document.body||t===document.documentElement);return n},t.remove=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},t.attr=function(e,n,o){if(t.isElement(e))return 2==arguments.length?e.getAttribute(n):3==arguments.length?(e.setAttribute(n,o),e):void 0;console.warn("$api.attr Function need el param, el param must be DOM Element")},t.removeAttr=function(e,n){t.isElement(e)?2===arguments.length&&e.removeAttribute(n):console.warn("$api.removeAttr Function need el param, el param must be DOM Element")},t.hasCls=function(e,n){if(t.isElement(e))return e.className.indexOf(n)>-1;console.warn("$api.hasCls Function need el param, el param must be DOM Element")},t.addCls=function(e,n){if(t.isElement(e)){if("classList"in e)e.classList.add(n);else{var o=e.className+" "+n;e.className=o}return e}console.warn("$api.addCls Function need el param, el param must be DOM Element")},t.removeCls=function(e,n){if(t.isElement(e)){if("classList"in e)e.classList.remove(n);else{var o=e.className.replace(n,"");e.className=o}return e}console.warn("$api.removeCls Function need el param, el param must be DOM Element")},t.toggleCls=function(e,n){if(t.isElement(e))return"classList"in e?e.classList.toggle(n):t.hasCls(e,n)?t.removeCls(e,n):t.addCls(e,n),e;console.warn("$api.toggleCls Function need el param, el param must be DOM Element")},t.val=function(e,n){if(t.isElement(e)){if(1===arguments.length)switch(e.tagName){case"SELECT":return e.options[e.selectedIndex].value;case"INPUT":case"TEXTAREA":return e.value}if(2===arguments.length)switch(e.tagName){case"SELECT":return e.options[e.selectedIndex].value=n,e;case"INPUT":case"TEXTAREA":return e.value=n,e}}else console.warn("$api.val Function need el param, el param must be DOM Element")},t.prepend=function(e,n){if(t.isElement(e))return e.insertAdjacentHTML("afterbegin",n),e;console.warn("$api.prepend Function need el param, el param must be DOM Element")},t.append=function(e,n){if(t.isElement(e))return e.insertAdjacentHTML("beforeend",n),e;console.warn("$api.append Function need el param, el param must be DOM Element")},t.before=function(e,n){if(t.isElement(e))return e.insertAdjacentHTML("beforebegin",n),e;console.warn("$api.before Function need el param, el param must be DOM Element")},t.after=function(e,n){if(t.isElement(e))return e.insertAdjacentHTML("afterend",n),e;console.warn("$api.after Function need el param, el param must be DOM Element")},t.html=function(e,n){if(t.isElement(e))return 1===arguments.length?e.innerHTML:2===arguments.length?(e.innerHTML=n,e):void 0;console.warn("$api.html Function need el param, el param must be DOM Element")},t.text=function(e,n){if(t.isElement(e))return 1===arguments.length?e.textContent:2===arguments.length?(e.textContent=n,e):void 0;console.warn("$api.text Function need el param, el param must be DOM Element")},t.offset=function(e){if(t.isElement(e)){var n=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),o=Math.max(document.documentElement.scrollTop,document.body.scrollTop),a=e.getBoundingClientRect();return{l:a.left+n,t:a.top+o,w:e.offsetWidth,h:e.offsetHeight}}console.warn("$api.offset Function need el param, el param must be DOM Element")},t.css=function(e,n){t.isElement(e)?"string"==typeof n&&n.indexOf(":")>0&&e.style&&(e.style.cssText+=";"+n):console.warn("$api.css Function need el param, el param must be DOM Element")},t.cssVal=function(n,o){if(t.isElement(n)){if(2===arguments.length)return e.getComputedStyle(n,null).getPropertyValue(o)}else console.warn("$api.cssVal Function need el param, el param must be DOM Element")},t.jsonToStr=function(e){if("object"===(void 0===e?"undefined":a()(e)))return JSON&&r()(e)},t.strToJson=function(e){if("string"==typeof e)return JSON&&JSON.parse(e)},t.setStorage=function(e,t){if(2===arguments.length){var n=t;n="object"==(void 0===n?"undefined":a()(n))?"obj-"+(n=r()(n)):"str-"+n;var i=o();i&&i.setItem(e,n)}},t.getStorage=function(e){var t=o();if(t){var n=t.getItem(e);if(!n)return;if(0===n.indexOf("obj-"))return n=n.slice(4),JSON.parse(n);if(0===n.indexOf("str-"))return n.slice(4)}},t.rmStorage=function(e){var t=o();t&&e&&t.removeItem(e)},t.clearStorage=function(){var e=o();e&&e.clear()},t.fixIos7Bar=function(e){return t.fixStatusBar(e)},t.fixStatusBar=function(e){return t.isElement(e)?(e.style.paddingTop=api.safeArea.top+"px",e.offsetHeight):(console.warn("$api.fixStatusBar Function need el param, el param must be DOM Element"),0)},t.fixTabBar=function(e){return t.isElement(e)?(e.style.paddingBottom=api.safeArea.bottom+"px",e.offsetHeight):(console.warn("$api.fixTabBar Function need el param, el param must be DOM Element"),0)},t.toast=function(e,t,n){var o={},a=function(e,t){api.showProgress(e),setTimeout(function(){api.hideProgress()},t)};if(1===arguments.length){n=n||500;"number"==typeof e?n=e:o.title=e+"",a(o,n)}else if(2===arguments.length){n=n||500;if("number"==typeof(t=t))n=t,t=null;e&&(o.title=e),t&&(o.text=t),a(o,n)}e&&(o.title=e),t&&(o.text=t),a(o,n=n||500)},t.post=function(){var e=i.apply(null,arguments),t={},n=e.fnSuc;if(e.url&&(t.url=e.url),e.data&&(t.data=e.data),e.dataType){var o=e.dataType.toLowerCase();"text"!=o&&"json"!=o||(t.dataType=o)}else t.dataType="json";t.method="post",api.ajax(t,function(e,t){e&&n&&n(e)})},t.get=function(){var e=i.apply(null,arguments),t={},n=e.fnSuc;if(e.url&&(t.url=e.url),e.dataType){var o=e.dataType.toLowerCase();"text"!=o&&"json"!=o||(t.dataType=o)}else t.dataType="text";t.method="get",api.ajax(t,function(e,t){e&&n&&n(e)})},e.$api=t}(window),n.d(t,"d",function(){return s}),n.d(t,"a",function(){return l}),n.d(t,"e",function(){return u}),n.d(t,"b",function(){return m}),n.d(t,"g",function(){return p}),n.d(t,"h",function(){return f}),n.d(t,"c",function(){return d}),n.d(t,"f",function(){return h}),console.log(void 0);var s=function(e){return{visualMap:[{show:!1,type:"continuous",seriesIndex:0,min:0}],tooltip:{trigger:"axis"},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{splitLine:{show:!1}}],series:[{type:"line",showSymbol:!1,data:[1,20,50,30,45,35,60]}]}},l=function(e){return{tooltip:{trigger:"axis"},legend:{left:"center",top:"0%",data:["1号GPU","2号GPU","3号GPU","4号GPU","5号GPU","6号GPU","7号GPU","8号GPU"]},xAxis:{type:"category",splitLine:{show:!1},data:["周一","周二","周三","周四","周五","周六","周日"]},grid:{left:"3%",right:"4%",bottom:"3%",top:"20%",containLabel:!0},yAxis:{type:"value",name:"温度"},series:[{name:"1号GPU",type:"line",data:[10,32,92,27,22,36,20]},{name:"2号GPU",type:"line",data:[10,56,43,8,126,32,23]},{name:"3号GPU",type:"line",data:[1,12,83,18,56,32,200]},{name:"4号GPU",type:"line",data:[20,15,35,18,76,39,23]},{name:"5号GPU",type:"line",data:[50,55,63,138,56,29,13]},{name:"6号GPU",type:"line",data:[20,35,13,158,26,19,3]},{name:"7号GPU",type:"line",data:[120,15,53,68,22,19,23]},{name:"8号GPU",type:"line",data:[10,25,33,38,52,129,150]}]}},u=function(){localStorage.clear(),window.location.reload()},c=function(e,t){return new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},m=function(e,t){if(!c(e,t)){var n=e.className.split(" ");n.push(t),e.className=n.join(" ")}},p=function(e,t){if(c(e,t)){var n=e.className.split(" ");n.splice(n.indexOf(t),1),e.className=n.join(" ")}},f=function(e,t){if("object"===(void 0===e?"undefined":a()(e))){var n=null;e.path.forEach(function(e){"LI"===e.nodeName&&(n=e)}),n&&("add"===t?m(n,"home-li_click"):p(n,"home-li_click"))}},d=function(){var e=new Date;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()},h=function(e,t){var n={account:e};t.require("tencentPush").registerPush(n,function(e,t){console.log("注册成功")})}},BaEm:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),a=n("NYxO"),i={isLogin:function(e){return e.isLogin},iphone:function(e){return e.iphone||localStorage.getItem("miningIphone")},newsNumber:function(e){return e.newsNumber},serch:function(e){return e.serch},listNumber:function(e){return e.listNumber},hashNumber:function(e){return e.hashNumber}},r=n("//Fk"),s=n.n(r),l=n("Dd8w"),u=n.n(l),c=n("mtWM"),m=n.n(c),p=n("0xDb"),f=n("Au9i"),d=n.n(f),h=n("mw3O"),g=n.n(h),E=m.a.create({timeout:1e4,baseURL:"http://120.78.164.148",headers:{"Content-Type":"application/x-www-form-urlencoded"}}),b=m.a.create({timeout:1e4,baseURL:"http://120.78.164.148"}),v=m.a.create({timeout:1e4,baseURL:"http://120.78.164.148",headers:{"Content-Type":"application/x-www-form-urlencoded"}}),y=function(e){return console.error(e),s.a.reject(e)},w=function(e){return 500===+e.data.code?(Object(f.Toast)({message:e.data.message,position:"top"}),void("请先登录"!==e.data.message&&-1===e.data.message.indexOf("失效")||setTimeout(function(){Object(p.e)()},800))):e.data};E.interceptors.request.use(function(e){if("post"===e.method){var t=localStorage.getItem("token"),n=g.a.parse(e.data);e.data=g.a.stringify(u()({token:t},n))}else"get"===e.method&&(e.params=u()({token:v},e.params));return e},y),E.interceptors.response.use(w),b.interceptors.request.use(function(e){return e},y),b.interceptors.response.use(w);var T={login:function(e,t){e.commit,e.state;return v.post("/home/login/login",g.a.stringify(t)).then(function(e){return e}).catch(function(){Object(f.Toast)({message:"请求错误",position:"top"})})},getList:function(e,t){e.commit,e.state;return E.post("/home/miner/list",g.a.stringify(t)).then(function(e){return e}).catch(function(){Object(f.Toast)({message:"请求错误",position:"top"})})},getDetail:function(e,t){e.commit,e.state;return E.post("/home/miner/detail",g.a.stringify(t)).then(function(e){return e}).catch(function(){Object(f.Toast)({message:"请求错误",position:"top"})})},setPasd:function(e,t){e.commit,e.state;return E.post("/home/user/pwd",g.a.stringify(t)).then(function(e){return e}).catch(function(){Object(f.Toast)({message:"请求错误",position:"top"})})},setRem:function(e,t){e.commit,e.state;return E.post("/home/miner/upd",g.a.stringify(t)).then(function(e){return e}).catch(function(){Object(f.Toast)({message:"请求错误",position:"top"})})},compileMining:function(e,t){e.commit,e.state;return E.post("/home/miner/updProxypool1",g.a.stringify(t)).then(function(e){return e}).catch(function(){Object(f.Toast)({message:"请求错误",position:"top"})})},setWallet:function(e,t){e.commit,e.state;return E.post("/home/miner/updproxywallet",g.a.stringify(t)).then(function(e){return e}).catch(function(){Object(f.Toast)({message:"请求错误",position:"top"})})},resetMinig:function(e,t){e.commit,e.state;return E.post("/home/miner/restart",g.a.stringify(t)).then(function(e){return e}).catch(function(){Object(f.Toast)({message:"请求错误",position:"top"})})}},S={GET_TOKEN_STORAGE:function(e){e.isLogin=!!localStorage.getItem("token")},SET_TOKEN_STORAGE:function(e,t){localStorage.setItem("token",t),e.isLogin=localStorage.getItem("token",t)},SET_IPHONE:function(e,t){e.iphone=t,localStorage.setItem("miningIphone",t)},SET_NEWSNUMBER:function(e,t){e.newsNumber=t},SET_SERCH:function(e,t){e.serch=t},SET_LISTNUMBER:function(e,t){e.listNumber=t},SET_HASHNUMBER:function(e,t){e.hashNumber=t}},O={state:{null:null},getters:{null:function(e){return e.null}},mutation:{SETNULL:function(e,t){e.null=t}},actions:{getState:function(e){e.commit,e.state;console.log(E)}}};o.default.use(a.a);var x=new a.a.Store({getters:i,actions:T,mutations:S,state:{isLogin:!1,iphone:"",newsNumber:0,serch:!1,listNumber:0,hashNumber:0},modules:{app:O}}),N=n("/ocq"),M=function(){return n.e(1).then(n.bind(null,"KR8f"))};o.default.use(N.a);var L=new N.a({base:"/",routes:[{path:"/",component:function(){return n.e(2).then(n.bind(null,"ftSK"))},children:[{path:"",name:"home",component:M},{path:"/home",name:"home",component:M},{path:"/anomaly",name:"anomaly",component:function(){return n.e(1).then(n.bind(null,"NCvq"))}},{path:"/account",name:"account",component:function(){return n.e(1).then(n.bind(null,"0FZS"))}},{path:"/anomalyDetals",name:"anomalyDetals",component:function(){return n.e(0).then(n.bind(null,"azRF"))}},{path:"/mineDetails",name:"mineDetails",component:function(){return n.e(0).then(n.bind(null,"VvA8"))}},{path:"/graph",name:"graph",component:function(){return n.e(0).then(n.bind(null,"vg4d"))}},{path:"/setting",name:"setting",component:function(){return n.e(0).then(n.bind(null,"VlR1"))}},{path:"/miningList",name:"miningList",component:function(){return n.e(0).then(n.bind(null,"7xos"))}},{path:"/FindKey",name:"FindKey",component:function(){return n.e(2).then(n.bind(null,"2nK7"))}},{path:"/article",name:"article",component:function(){return n.e(2).then(n.bind(null,"wm3/"))}}]},{path:"*",component:function(){return n.e(0).then(n.bind(null,"VdfP"))}}]}),A=(n("d8/S"),n("kDzl"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:this.className}},[t("router-view",{staticClass:"router"})],1)],1)},staticRenderFns:[]});var D=n("VU/8")({name:"app",data:function(){return{className:"all"}}},A,!1,function(e){n("BaEm")},null,null).exports,F=(n("UoMW"),n("XLwt")),$=n.n(F);o.default.prototype.$echarts=$.a,o.default.config.productionTip=!1,o.default.use(d.a),o.default.prototype.$http2=b,new o.default({el:"#app",router:L,store:x,template:"<App/>",components:{App:D}});api.require("tencentPush").registerPush(function(e,t){e.status?alert("注册成功，token为："+e.token):alert("注册失败，错误码："+t.code+"，错误信息："+t.msg)})},UoMW:function(e,t){var n=document.documentElement,o=375,a=1,i=1/a,r="orientationchange"in window?"orientationchange":"resize",s=document.createElement("meta");function l(){var e=n.clientWidth;e/a>o&&(e=o*a),n.dataset.width=e,n.dataset.persent=e/o*100,n.style.fontSize=e/o*100+"px"}s.name="viewport",s.content="width=device-width, user-scalable=no, initial-scale="+i+", maximum-scale="+i+", minimum-scale="+i,n.appendChild(s),l(),document.addEventListener&&window.addEventListener(r,l,!1)},"d8/S":function(e,t){},kDzl:function(e,t){}},["NHnr"]);