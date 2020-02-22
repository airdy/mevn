webpackJsonp([1],{Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n=new s.a,o=a("VU/8")(n,null,!1,null,null,null).exports,r={data:function(){return{auth:"",token:localStorage.usertoken}},methods:{logout:function(){localStorage.removeItem("usertoken")}},mounted:function(){var t=this;o.$on("logged-in",function(e){t.auth=e})}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark rounded"},[t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse justify-content-md-center",attrs:{id:"navbar1"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),""!=t.auth||null!=t.token&&void 0!=t.token?t._e():a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),""!=t.auth||null!=t.token&&void 0!=t.token?t._e():a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[t._v("Register")])],1),t._v(" "),"loggedin"==t.auth||null!=t.token||void 0!=t.token?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[t._v("Profile")])],1):t._e(),t._v(" "),"loggedin"==t.auth||null!=t.token||void 0!=t.token?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:""},on:{click:t.logout}},[t._v("Logout")])]):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar1","aria-controls":"navbar1","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]},l={name:"App",components:{Navbar:a("VU/8")(r,i,!1,null,null,null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("navbar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]},u=a("VU/8")(l,c,!1,null,null,null).exports,m=a("/ocq"),v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"jumbotron mt-5"},[e("div",{staticClass:"col sm-8 mx-auto"},[e("h3",{staticClass:"text-center"},[this._v("Test task. Use navbar to change pages")])])])])}]},d=a("VU/8")(null,v,!1,null,null,null).exports,p=a("mtWM"),g=a.n(p),_={data:function(){return{email:"",password:""}},methods:{login:function(){var t=this;g.a.post("/users/login",{email:this.email,password:this.password,bio:this.bio}).then(function(e){localStorage.setItem("usertoken",e.data),t.email="",t.password="",t.bio="",R.push({name:"Profile"})}).catch(function(t){console.log(t)}),this.emitMethod()},emitMethod:function(){o.$emit("logged-in","loggedin")}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 mt-5 mx-auto"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Please sign in")]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",name:"email",placeholder:"Enter email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("Sign in")])])])])])},staticRenderFns:[]},h=a("VU/8")(_,f,!1,null,null,null).exports,b={data:function(){return{email:"",username:"",password:"",bio:""}},methods:{register:function(){g.a.post("/users/register",{email:this.email,username:this.username,password:this.password,bio:this.bio}).then(function(t){R.push({name:"Login"}),console.log(t)}).catch(function(t){console.log(t)})}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 mt-5 mx-auto"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Register")]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",name:"email",placeholder:"Enter email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("Username")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",name:"username",placeholder:"Enter username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"bio"}},[t._v("Biography")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bio,expression:"bio"}],staticClass:"form-control",attrs:{type:"text",name:"biography",placeholder:"Enter your biography"},domProps:{value:t.bio},on:{input:function(e){e.target.composing||(t.bio=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("Register!")])])])])])},staticRenderFns:[]},w=a("VU/8")(b,C,!1,null,null,null).exports,k=a("ytdl"),x=a.n(k),y={data:function(){var t=localStorage.usertoken,e=x()(t);return{email:e.email,username:e.username,bio:e.bio}}},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"jumbotron mt-5"},[t._m(0),t._v(" "),a("table",{staticClass:"table col-md-6 mx-auto"},[a("tbody",[a("tr",[a("td",[t._v("Email")]),t._v(" "),a("td",[t._v(t._s(t.email))])]),t._v(" "),a("tr",[a("td",[t._v("Username")]),t._v(" "),a("td",[t._v(t._s(t.username))])]),t._v(" "),a("tr",[a("td",[t._v("Bio")]),t._v(" "),a("td",[t._v(t._s(t.bio))])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-8 mx-auto"},[e("h1",{staticClass:"text-center"},[this._v("PROFILE")]),this._v(" "),e("h6",{staticClass:"text-center"},[this._v("There's information get from localStorage")])])}]},P=a("VU/8")(y,E,!1,null,null,null).exports;s.a.use(m.a);var R=new m.a({routes:[{path:"/",name:"Home",component:d},{path:"/login",name:"Login",component:h},{path:"/register",name:"Register",component:w},{path:"/profile",name:"Profile",component:P},{path:"*",redirect:"/login"}]});a("Jmt5"),a("Bb4J"),s.a.config.productionTip=!1,new s.a({el:"#app",router:R,components:{App:u},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.1ce3c71827099f7a8fca.js.map