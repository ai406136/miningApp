webpackJsonp([2],{"2nK7":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Dd8w"),a=s.n(i),o=s("NYxO"),n=s("0xDb"),r={data:function(){return{from:{pwd1:"",pwd2:""}}},methods:a()({back:function(){this.$router.back()},submit:function(){this.from.pwd1||this.from.pwd1?this.from.pwd1===this.from.pwd2?this.setPwd():this.$toast({message:"两次密码不一致",position:"center",duration:5e3}):this.$toast({message:"密码不能为空",position:"center",duration:5e3})},setPwd:function(){var t=this;this.setPasd(this.from).then(function(e){200===+e.code&&(t.$toast({message:e.message,position:"center",iconClass:""}),t.goHome())})},goHome:function(){var t=this;setTimeout(function(){t.$router.push({path:"/home"}),Object(n.g)()},1e3)}},Object(o.b)(["setPasd"]))},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login find"},[s("div",{staticClass:"login-header"},[t._v("设置密码")]),t._v(" "),s("div",{staticClass:"login-from"},[s("ul",{staticClass:"login-from_ul"},[s("li",{staticClass:"login-from_userName"},[s("i",{staticClass:"iconfont icon-mima"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.from.pwd1,expression:"from.pwd1"}],staticClass:"from-inp",attrs:{type:"password",autocomplete:"off"},domProps:{value:t.from.pwd1},on:{input:function(e){e.target.composing||t.$set(t.from,"pwd1",e.target.value)}}})]),t._v(" "),s("li",[s("i",{staticClass:"iconfont icon-mima"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.from.pwd2,expression:"from.pwd2"}],staticClass:"from-inp",attrs:{type:"password",autocomplete:"off"},domProps:{value:t.from.pwd2},on:{input:function(e){e.target.composing||t.$set(t.from,"pwd2",e.target.value)}}})])])]),t._v(" "),s("mt-button",{staticClass:"login-from_submit",attrs:{type:"default"},on:{click:t.submit}},[t._v("确定")]),t._v(" "),s("div",{staticClass:"login-close",on:{click:t.back}},[s("i",{staticClass:"iconfont icon-closecircleoutline"})])],1)},staticRenderFns:[]};var u=s("VU/8")(r,c,!1,function(t){s("jJZk"),s("hJJK")},"data-v-d47094f8",null);e.default=u.exports},"4KwZ":function(t,e){},QWRR:function(t,e){t.exports={header:{home:"首页",anomaly:"异常消息",account:"我的",anomalyDetals:"消息列表",mineDetails:"矿机详情",setting:"我的设置",miningList:"矿机筛选"}}},bB9U:function(t,e){},f2PF:function(t,e){},ftSK:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Dd8w"),a=s.n(i),o=s("QWRR"),n=s.n(o),r=s("0xDb"),c=s("NYxO"),u={name:"layout",data:function(){return{searchData:"",result:[{title:"1",value:"2"}],selected:"",data:[{name:"首页",icon:"icon-shouye",router:"/home"},{name:"异常消息",icon:"icon-xiaoxi",router:"/anomaly",isBadge:!0},{name:"我的",icon:"icon-home",router:"/account"}]}},created:function(){this.getNunber(),this.selected=this.$route.path},mounted:function(){var t=this;setInterval(function(){t.getNunber()},7e4)},methods:a()({getNunber:function(){var t=this,e=0;this.getList().then(function(s){if("200"===s.code){var i=0;s.data.forEach(function(t){i+=+t.hash,(+t.cpu_temp>80||+t.hash<18)&&e++});var a=i.toFixed(2);t.SET_LISTNUMBER(s.data.length),t.SET_HASHNUMBER(a),t.SET_NEWSNUMBER(e)}})},goClick:function(){this.$router.push({path:this.selected})},back:function(){this.SET_SERCH(!1),this.$router.back()},back2:function(){this.SET_SERCH(!1)},search:function(){this.SET_SERCH(!0)},touchDom:function(t,e){"add"===e?Object(r.c)(this.$refs[t][0].$el,"home-li_click"):Object(r.h)(this.$refs[t][0].$el,"home-li_click")}},Object(c.b)(["getList"]),Object(c.d)(["SET_SERCH","SET_NEWSNUMBER","SET_LISTNUMBER","SET_HASHNUMBER"])),computed:a()({headerTitle:function(){return n.a.header[this.$route.name]},isBack:function(){return["首页","异常消息","我的"].indexOf(this.headerTitle)},isShou:function(){return"矿机筛选"===this.headerTitle&&!this.serch}},Object(c.c)(["newsNumber","serch"])),watch:{$route:function(t,e){this.selected=t.path}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layout"},[s("mt-header",{attrs:{title:t.headerTitle}},[s("div",{directives:[{name:"show",rawName:"v-show",value:-1===t.isBack,expression:"isBack === -1"}],attrs:{slot:"left"},slot:"left"},[s("mt-button",{directives:[{name:"show",rawName:"v-show",value:!t.serch,expression:"!serch"}],attrs:{icon:"back"},on:{click:t.back}},[t._v("返回")]),t._v(" "),s("mt-button",{directives:[{name:"show",rawName:"v-show",value:t.serch,expression:"serch"}],attrs:{icon:"back"},on:{click:t.back2}},[t._v("返回")])],1),t._v(" "),s("mt-button",{directives:[{name:"show",rawName:"v-show",value:t.isShou,expression:"isShou"}],attrs:{slot:"right",icon:"search"},on:{click:t.search},slot:"right"})],1),t._v(" "),s("mt-tabbar",{directives:[{name:"show",rawName:"v-show",value:-1!==t.isBack,expression:"isBack !== -1"}],staticClass:"layout-bar",attrs:{fixed:!0},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.data,function(e,i){return s("mt-tab-item",{key:i,ref:e.router,refInFor:!0,attrs:{id:e.router},nativeOn:{touchstart:function(s){t.touchDom(e.router,"add")},touchend:function(s){t.touchDom(e.router,"rem")},click:function(e){t.goClick(e)}}},[s("i",{staticClass:"iconfont",class:e.icon,attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("div",{staticClass:"tabSpan"},[t._v("\n        "+t._s(e.name)+"\n        "),e.isBadge&&t.newsNumber?s("mt-badge",{staticClass:"errorC",attrs:{size:"small",type:"error"}},[t._v(t._s(t.newsNumber))]):t._e()],1)])})),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var m=s("VU/8")(u,l,!1,function(t){s("f2PF"),s("lcaZ")},"data-v-0c6ac22e",null).exports,d={data:function(){return{achieved:!1,from:{username:"",password:""}}},methods:a()({submit:function(){var t=this;this.achieved=!0,setTimeout(function(){t.login(t.from).then(function(e){console.log(e);var s=e.data,i=+s.code;t.achieved=!1,200===i?(localStorage.setItem("imgSrc",e.data.data.img),t.SET_TOKEN_STORAGE(s.data.token),t.SET_IPHONE(t.from.username)):t.$toast({title:"请求错误",message:s.message,position:"center",iconClass:""})})},500)}},Object(c.b)(["login"]),Object(c.d)(["SET_TOKEN_STORAGE","SET_IPHONE"]))},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("div",{staticClass:"login-header"},[t._v("登录")]),t._v(" "),s("div",{staticClass:"login-from"},[s("ul",{staticClass:"login-from_ul"},[s("li",{staticClass:"login-from_userName"},[s("i",{staticClass:"iconfont icon-me"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.from.username,expression:"from.username"}],staticClass:"from-inp",attrs:{autocomplete:"off"},domProps:{value:t.from.username},on:{input:function(e){e.target.composing||t.$set(t.from,"username",e.target.value)}}})]),t._v(" "),s("li",[s("i",{staticClass:"iconfont icon-mima"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.from.password,expression:"from.password"}],staticClass:"from-inp",attrs:{type:"password",autocomplete:"off"},domProps:{value:t.from.password},on:{input:function(e){e.target.composing||t.$set(t.from,"password",e.target.value)}}})])])]),t._v(" "),s("mt-button",{staticClass:"login-from_submit",attrs:{type:"default"},nativeOn:{click:function(e){t.submit(e)}}},[t._v("登录")]),t._v(" "),t.achieved?s("div",{staticClass:"login-achieved centers"},[s("mt-spinner",{attrs:{size:50,color:"rgb(255, 255, 255)",type:"triple-bounce"}})],1):t._e()],1)},staticRenderFns:[]};var h={name:"main-page",components:{layout:m,Login:s("VU/8")(d,f,!1,function(t){s("4KwZ")},"data-v-42c249ef",null).exports},created:function(){this.GET_TOKEN_STORAGE()},methods:a()({},Object(c.d)(["GET_TOKEN_STORAGE"])),computed:a()({},Object(c.c)(["isLogin"]),{mainView:function(){return this.isLogin?"layout":"Login"}})},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-page"},[e(this.mainView,{tag:"component"})],1)},staticRenderFns:[]};var p=s("VU/8")(h,v,!1,function(t){s("bB9U")},"data-v-43ae69c6",null);e.default=p.exports},hJJK:function(t,e){},huiB:function(t,e){},jJZk:function(t,e){},lcaZ:function(t,e){},"wm3/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"article"},[s("span",[t._v("文章"+t._s(t.index))])])},staticRenderFns:[]};var a=s("VU/8")({data:function(){return{index:0}},created:function(){this.index=this.$route.query.id}},i,!1,function(t){s("huiB")},"data-v-3c1e96db",null);e.default=a.exports}});