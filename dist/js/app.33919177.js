(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],u=0,m=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,o=1;o<r.length;o++){var c=r[o];0!==s[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},s={app:0},n=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ca9fc21f"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=s[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,a){r=s[t]=[e,a]}));e.push(r[2]=a);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(u);var r=s[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,r[1](l)}s[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("f666")},"0f82":function(t,e,r){t.exports=r.p+"img/iphone8.16d682b6.jpg"},1771:function(t,e,r){var a={"./iphone11.jpg":"9d6b","./iphone12.jpg":"7abb","./iphone8.jpg":"0f82","./logo.png":"cf05","./pixel5.jpg":"c35d","./s20ultra.JPG":"ce46"};function s(t){var e=n(t);return r(e)}function n(t){if(!r.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=n,t.exports=s,s.id="1771"},"4af2":function(t,e,r){},"53a2":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],o=r("5530"),i=r("2f62"),c={name:"App",methods:Object(o["a"])({},Object(i["b"])(["load_products","new_product","load_user","load_users"])),computer:Object(o["a"])({},Object(i["c"])(["user"])),mounted:function(){this.load_products(),this.load_user(),this.load_users()}},l=c,u=(r("034f"),r("295a")),d=Object(u["a"])(l,s,n,!1,null,null,null),m=d.exports,p=(r("d3b7"),r("8c4f")),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),r("div",{staticClass:"home"},[r("HelloWorld")],1)],1)},h=[],b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("body",[r("div",{staticClass:"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"},[r("div",{staticClass:"col-md-5 p-lg-5 mx-auto my-5"},[r("h1",{staticClass:"display-4 font-weight-normal"},[t._v("Phone Store")]),r("p",{staticClass:"lead font-weight-normal"},[t._v("A lot of phones")]),r("a",{staticClass:"btn btn-outline-secondary",attrs:{href:"/catalog"}},[t._v("Catalog")])]),r("div",{staticClass:"product-device box-shadow d-none d-md-block"}),r("div",{staticClass:"product-device product-device-2 box-shadow d-none d-md-block"})]),r("div",{staticClass:"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3"},[r("div",{staticClass:"bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"},[r("div",{staticClass:"my-3 py-3"},[r("h2",{staticClass:"display-5"},[t._v("iPhone 12 Pro")]),r("p",{staticClass:"lead"},[t._v("by Apple")])]),r("div",{staticClass:"bg-light box-shadow mx-auto",staticStyle:{width:"80%",height:"300px","border-radius":"21px 21px 0 0"}})]),r("div",{staticClass:"bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"},[r("div",{staticClass:"my-3 p-3"},[r("h2",{staticClass:"display-5"},[t._v("iPhone 12 ")]),r("p",{staticClass:"lead"},[t._v("by Apple")])]),r("div",{staticClass:"bg-dark box-shadow mx-auto",staticStyle:{width:"80%",height:"300px","border-radius":"21px 21px 0 0"}})])])])}],_={name:"HelloWorld",props:{msg:String}},w=_,g=(r("c309"),Object(u["a"])(w,b,v,!1,null,"7a7aeb47",null)),y=g.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{href:"/"}},[t._v("PhonesWebShop")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"/catalog"}},[t._v("Phones")])],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",{attrs:{href:"/admin"}},[t._v("admin")]),r("b-nav-item",{attrs:{href:"/register"}},[t._v("Register")]),r("b-nav-item",{attrs:{href:"/login"}},[t._v("Log in")]),r("b-nav-item",{attrs:{href:"/logout"}},[t._v("Logout "+t._s(t.user.first_name))])],1)],1)],1),r("b-jumbotron",{attrs:{header:"Phones",lead:"there are "+t.products.length+" available phones"}})],1)},C=[],x={name:"Header",computed:Object(o["a"])({},Object(i["c"])(["products","user"]))},P=x,O=Object(u["a"])(P,j,C,!1,null,"013745ec",null),k=O.exports,E={name:"Home",components:{HelloWorld:y,Header:k}},N=E,$=Object(u["a"])(N,f,h,!1,null,null,null),S=$.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("Header"),r("b-container",[r("b-row",[r("b-col",{attrs:{cm:"6"}},[r("ProductsList")],1)],1)],1)],1)},H=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"ProductsList"}},[a("div",{staticClass:"row"},t._l(t.products,(function(e){return a("div",{key:e.id,staticClass:"col-md-4"},[a("div",{staticClass:"card mb-4 box-shadow"},[a("a",{attrs:{href:"/product/"+e.id}},[a("img",{staticClass:"card-img-top",attrs:{src:r("1771")("./"+e.image),alt:"Card image caps"}})]),a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[t._v(t._s(e.name)),a("br"),t._v("id:"+t._s(e.id))]),a("div",{staticClass:"d-flex justify-content-between align-items-center"},[t._m(0,!0),a("small",{staticClass:"text-muted"},[t._v(" "+t._s(e.price)+"$")])])])])])})),0)])},T=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"btn-group"},[r("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" Buy ")])])}],D={name:"ProductsList",computed:Object(o["a"])({},Object(i["c"])(["products"])),data:function(){return{fields:[{key:"name"},{key:"id"},{key:"price"},{key:"image"}]}},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["delete_product"])),{},{editProduct:function(t){Xt.push({path:"/message/".concat(t.id)})}})},A=D,F=(r("d85a"),Object(u["a"])(A,I,T,!1,null,null,null)),J=F.exports,z={name:"catalog",components:{Header:k,ProductsList:J}},M=z,R=Object(u["a"])(M,L,H,!1,null,null,null),q=R.exports,U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),r("b-container",[r("b-row",[r("b-col",{attrs:{cm:"6"}},[r("div",[r("ProductDetails",{attrs:{image:t.product.image,price:t.product.price,name:t.product.name,id:t.product.id,product:t.product,users:t.users}})],1)])],1)],1)],1)},W=[],B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-9"},[a("div",{staticClass:"card mt-4"},[a("img",{staticClass:"card-img-top img-fluid",attrs:{src:r("1771")("./"+t.image),alt:""}}),a("div",{staticClass:"card-body"},[a("h3",{staticClass:"card-title"},[t._v(t._s(t.name))]),a("h4",[t._v("$"+t._s(t.price))]),a("b-form",{on:{submit:function(e){return e.preventDefault(),t.postComment(e)}}},[a("b-row",{staticClass:"mt-2"},[a("b-col",{attrs:{sm:"2",offset:"2"}},[a("label",{attrs:{for:"comm"}},[t._v("Comment:")]),a("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Type comment..."},model:{value:t.comm,callback:function(e){t.comm=e},expression:"comm"}})],1)],1),a("b-col",{attrs:{sm:"2",offset:"2"}},[a("b-button",{attrs:{variant:"success",size:"sm"},on:{click:t.postComment}},[t._v("Leave a comment")])],1)],1),t._l(t.reviews,(function(e){return a("div",{key:e.id,staticClass:"col-md-4"},[a("p",{staticClass:"card-text"},[t._v(t._s(e.comment))])])}))],2)])])])])},G=[],Y=(r("fb6a"),r("a9e3"),r("ac1f"),r("1276"),{name:"ProductDetails",props:{name:{type:String,default:""},price:{type:Number,default:0},image:{type:String,default:""}},data:function(){return{comm:""}},computed:Object(o["a"])({},Object(i["c"])(["reviews","user","users"])),mounted:function(){var t=window.location.href;this.load_reviews(t.split("/").slice(-1)[0]),this.comm=this.comment},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["load_reviews","post_review"])),{},{postComment:function(){var t=window.location.href;alert(this.comm);var e=JSON.stringify({comment:this.comm,idProduct:t.split("/").slice(-1)[0],idUser:this.$store.state.user.id});this.post_review(e)}})}),K=Y,Q=Object(u["a"])(K,B,G,!1,null,"68c5bdca",null),V=Q.exports,X={name:"Product",components:{Header:k,ProductDetails:V},data:function(){return{edit:!0}},computed:Object(o["a"])(Object(o["a"])({},Object(i["c"])(["products","users"])),{},{product:function(){for(var t=0;t<this.products.length;t++)if(this.products[t].id===parseInt(this.$route.params.id))return this.products[t];return this.products[0]}}),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["load_products"])),{},{toggleEdit:function(){this.edit=!this.edit}})},Z=X,tt=Object(u["a"])(Z,U,W,!1,null,"d73c772a",null),et=tt.exports,rt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("Header"),r("b-container",[r("b-row",[r("b-col",{attrs:{cm:"6"}},[r("EditProducts")],1)],1)],1)],1)},at=[],st=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[t.product?r("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[t._v(" "+t._s(t.product.name)+" ")]):t._e(),r("b-form",{on:{submit:function(e){return e.preventDefault(),t.checkForm(e)}}},[r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"2",offset:"2"}},[r("label",{attrs:{for:"newName"}},[t._v("Name:")]),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Name"},model:{value:t.newName,callback:function(e){t.newName=e},expression:"newName"}})],1)],1),r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"2",offset:"2"}},[r("label",{attrs:{for:"newPrice"}},[t._v("Price:")]),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Price"},model:{value:t.newPrice,callback:function(e){t.newPrice=e},expression:"newPrice"}})],1)],1),r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"2",offset:"2"}},[r("label",{attrs:{for:"newImage"}},[t._v("Image:")]),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"image"},model:{value:t.newImage,callback:function(e){t.newImage=e},expression:"newImage"}})],1)],1),r("b-col",{attrs:{sm:"2",offset:"2"}},[r("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:t.checkForm}},[t._v("Save")])],1),this.$route.params.id?r("b-col",{attrs:{sm:"2",offset:"2"}},[r("b-button",{attrs:{variant:"danger",size:"lg"},on:{click:t.remove}},[t._v("Delete")])],1):t._e(),this.$route.params.id?r("b-col",{attrs:{sm:"2",offset:"2"}},[r("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:t.oldData}},[t._v("Load old data")])],1):t._e(),t.errors.length?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[r("b",[t._v("Please correct the following error(s):")]),r("ul",t._l(t.errors,(function(e){return r("li",{key:e.id},[t._v(t._s(e))])})),0)]):t._e(),t.added?r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" Product added successfuly! ")]):t._e(),t.err?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("Error")]):t._e()],1)],1)},nt=[],ot=(r("b0c0"),{name:"EditProduct",computed:Object(o["a"])(Object(o["a"])({},Object(i["c"])(["products"])),{},{product:function(){for(var t=0;t<this.products.length;t++)if(this.products[t].id===parseInt(this.$route.params.id))return this.products[t];return null}}),props:{name:{type:String,default:""},price:{type:Number,default:0},image:{type:String,default:""}},data:function(){return{newName:"",newPrice:0,newImage:"",errors:[],err:!1,added:!1}},mounted:function(){this.newName=this.name,this.newPrice=this.price,this.newImage=this.image},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["add_product","new_product","change_product","delete_product"])),{},{oldData:function(){null!=this.product&&(this.newName=this.product.name,this.newPrice=this.product.price,this.newImage=this.product.image)},checkForm:function(){this.errors=[],!this.newName&&this.newName.length<45&&this.errors.push("Name required."),(!this.newPrice||this.newPrice<=0)&&this.errors.push("Price  have to be more than 0."),this.newImage||this.errors.push("Image required."),0==this.errors.length&&this.addNew()},addNew:function(){var t=JSON.stringify({name:this.newName,price:this.newPrice,image:this.newImage});this.$route.params.id?(this.change_product({id:this.$route.params.id,pro:t}),this.$router.push("/admin")):(this.new_product(t),this.added=!0),this.newName="",this.newPrice="",this.newImage=""},remove:function(){this.delete_product(this.$route.params.id),this.$router.push("/admin"),this.newName="",this.newPrice="",this.newImage=""}})}),it=ot,ct=Object(u["a"])(it,st,nt,!1,null,"cf3c09d2",null),lt=ct.exports,ut={name:"Edit",components:{Header:k,EditProducts:lt}},dt=ut,mt=Object(u["a"])(dt,rt,at,!1,null,"690052b6",null),pt=mt.exports,ft=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("Header"),r("b-container",[r("b-row",[r("b-col",{attrs:{cm:"6"}},[r("AdminPanel")],1)],1)],1)],1)},ht=[],bt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",attrs:{id:"ProductsList"}},[r("h2",[t._v("Admin Panel")]),r("p",[t._v("Products")]),r("a",{attrs:{href:"/newProduct"}},[t._v("New")]),r("table",{staticClass:"table table-striped"},[t._m(0),r("tbody",t._l(t.products,(function(e){return r("tr",{key:e.id},[r("td",[t._v(" "+t._s(e.name))]),r("td",[t._v(" "+t._s(e.price))]),r("td",[t._v(" "+t._s(e.image))]),r("td",[r("a",{attrs:{href:"/newProduct/"+e.id}},[t._v("Edit")])])])})),0)])])},vt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Name")]),r("th",[t._v("Price")]),r("th",[t._v("Image")]),r("th")])])}],_t={name:"AdminPanel",computed:Object(o["a"])({},Object(i["c"])(["products"])),data:function(){return{fields:[{key:"name"},{key:"id"},{key:"price"},{key:"image"}]}},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["delete_product"])),{},{editProduct:function(t){Xt.push({path:"/message/".concat(t.id)})}})},wt=_t,gt=(r("6644"),Object(u["a"])(wt,bt,vt,!1,null,null,null)),yt=gt.exports,jt={name:"admin",components:{Header:k,AdminPanel:yt}},Ct=jt,xt=Object(u["a"])(Ct,ft,ht,!1,null,null,null),Pt=xt.exports,Ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("Header"),r("b-container",[r("b-row",[r("b-col",{attrs:{cm:"6"}},[r("Register")],1)],1)],1)],1)},kt=[],Et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[t.product?r("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[t._v(" "+t._s(t.product.name)+" ")]):t._e(),r("b-form",{on:{submit:function(e){return e.preventDefault(),t.checkForm(e)}}},[r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"2",offset:"2"}},[r("label",{attrs:{for:"firstName"}},[t._v("First Name:")]),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"firstName"},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1)],1),r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"2",offset:"2"}},[r("label",{attrs:{for:"newPrice"}},[t._v("Last Name:")]),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Last Name"},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1)],1),r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"2",offset:"2"}},[r("label",{attrs:{for:"newPassword"}},[t._v("Password:")]),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{type:"password",placeholder:"Password"},model:{value:t.newPassword,callback:function(e){t.newPassword=e},expression:"newPassword"}})],1)],1),r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"2",offset:"2"}},[r("label",{attrs:{for:"newEmail"}},[t._v("Email:")]),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{type:"email",placeholder:"Email"},model:{value:t.newEmail,callback:function(e){t.newEmail=e},expression:"newEmail"}})],1)],1),r("b-col",{attrs:{sm:"2",offset:"2"}},[r("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:t.checkForm}},[t._v("Register")])],1),t.errors.length?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[r("b",[t._v("Please correct the following error(s):")]),r("ul",t._l(t.errors,(function(e){return r("li",{key:e.id},[t._v(t._s(e))])})),0)]):t._e(),t.added?r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" Registration successfull! ")]):t._e(),t.err?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("Error")]):t._e()],1)],1)},Nt=[],$t={name:"EditProduct",computed:Object(o["a"])({},Object(i["c"])(["users"])),props:{first_name:{type:String,default:""},last_name:{type:String,default:""},password:{type:String,default:""},email:{type:String,default:""}},data:function(){return{firstName:"",lastName:"",newPassword:"",newEmail:"",errors:[],err:!1,added:!1}},mounted:function(){this.firstName=this.first_name,this.lastName=this.last_name,this.newPassword=this.password,this.newEmail=this.email},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["register"])),{},{checkForm:function(){this.errors=[],0==this.errors.length&&this.addNew()},addNew:function(){var t=JSON.stringify({first_name:this.firstName,last_name:this.lastName,password:this.newPassword,email:this.newEmail});this.register(t),this.added=!0}})},St=$t,Lt=Object(u["a"])(St,Et,Nt,!1,null,"1145bcfa",null),Ht=Lt.exports,It={name:"Edit",components:{Header:k,Register:Ht}},Tt=It,Dt=Object(u["a"])(Tt,Ot,kt,!1,null,"6a8ff18f",null),At=Dt.exports,Ft=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("Header"),r("b-container",[r("b-row",[r("b-col",{attrs:{cm:"6"}},[r("Login")],1)],1)],1)],1)},Jt=[],zt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.checkForm(e)}}},[r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"2",offset:"2"}},[r("label",{attrs:{for:"newEmail"}},[t._v("Email:")]),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{type:"email",placeholder:"Email"},model:{value:t.newEmail,callback:function(e){t.newEmail=e},expression:"newEmail"}})],1)],1),r("b-row",{staticClass:"mt-2"},[r("b-col",{attrs:{sm:"2",offset:"2"}},[r("label",{attrs:{for:"newPassword"}},[t._v("Password:")]),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{type:"password",placeholder:"Password"},model:{value:t.newPassword,callback:function(e){t.newPassword=e},expression:"newPassword"}})],1)],1),r("b-col",{attrs:{sm:"2",offset:"2"}},[r("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:t.checkForm}},[t._v("Log in")])],1),0!=t.errors.length?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[r("b",[t._v("Please correct the following error(s):")]),r("ul",t._l(t.errors,(function(e){return r("li",{key:e.id},[t._v(t._s(e))])})),0)]):t._e(),t.added?r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" Login successfull! ")]):t._e(),t.err?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("Error")]):t._e()],1)],1)},Mt=[],Rt={name:"Logins",computed:Object(o["a"])({},Object(i["c"])(["users","errors"])),props:{password:{type:String,default:""},email:{type:String,default:""}},data:function(){return{newPassword:"",newEmail:"",err:!1,added:!1}},mounted:function(){this.newPassword=this.password,this.newEmail=this.email},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["login","load_user"])),{},{checkForm:function(){this.addNew()},addNew:function(){var t=JSON.stringify({password:this.newPassword,email:this.newEmail});this.login(t),this.load_user(),this.err=!0,this.added=!0,this.$router.push("/products")}})},qt=Rt,Ut=Object(u["a"])(qt,zt,Mt,!1,null,"223a8d92",null),Wt=Ut.exports,Bt={name:"Loginv",components:{Header:k,Login:Wt}},Gt=Bt,Yt=Object(u["a"])(Gt,Ft,Jt,!1,null,"bc3b0244",null),Kt=Yt.exports;a["default"].use(p["a"]);var Qt=[{path:"/",name:"Home",component:S},{path:"/catalog",name:"catalog",component:q},{path:"/product/:id",name:"product",component:et},{path:"/newProduct",name:"newProduct",component:pt},{path:"/register",name:"register",component:At},{path:"/newProduct/:id",name:"newProduct2",component:pt},{path:"/admin",name:"Admin",component:Pt},{path:"/login",name:"Login",component:Kt},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],Vt=new p["a"]({mode:"history",base:"/",routes:Qt}),Xt=Vt;r("a434");a["default"].use(i["a"]);var Zt=new i["a"].Store({state:{products:[],users:[],reviews:[],error:[],user:[]},mutations:{set_products:function(t,e){t.products=e},set_token:function(t){},set_error:function(t){state.error=t},add_product:function(t,e){t.products.push(e)},add_review:function(t,e){t.reviews.push(e)},set_user:function(t,e){t.user=e},set_users:function(t,e){t.users=e},set_reviews:function(t,e){t.reviews=e},add_users:function(t,e){t.users.push(e)},remove_product:function(t,e){for(var r=0;r<t.products.length;r++)if(t.products[r].id===e){t.products.splice(r,1);break}},update_product:function(t,e){for(var r=0;r<t.products.length;r++)if(t.products[r].id===parseInt(e.id)){t.products[r].name=e.pro.name,t.products[r].price=e.pro.price,t.products[r].image=e.pro.image;break}}},actions:{load_products:function(t){var e=t.commit;fetch("http://localhost:8080/api/products",{method:"get"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){e("set_products",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},register:function(t,e){var r=t.commit;fetch("http://localhost:8080/api/users",{method:"post",headers:{"Content-Type":"application/json"},body:e}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){r("add_users",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},login:function(t,e){var r=t.commit;fetch("http://localhost:8080/api/login",{method:"post",headers:{"Content-Type":"application/json"},body:e}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){localStorage.setItem("token",t["token"]),r("set_token",t["token"])})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):r("set_error",t)}))},load_user:function(t){var e=t.commit;fetch("http://localhost:8080/api/user",{method:"get",headers:{"Content-Type":"application/json",token:localStorage.getItem("token")}}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){e("set_user",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},load_reviews:function(t,e){var r=t.commit;fetch("http://localhost:8080/api/reviews/"+e,{method:"get",headers:{"Content-Type":"application/json"}}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){r("set_reviews",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},load_users:function(t){var e=t.commit;fetch("http://localhost:8080/api/users",{method:"get",headers:{"Content-Type":"application/json"}}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){e("set_users",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},post_review:function(t,e){var r=t.commit;fetch("http://localhost:8080/api/review",{method:"post",headers:{"Content-Type":"application/json",token:localStorage.getItem("token")},body:e}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){r("add_review",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},new_product:function(t,e){var r=t.commit;fetch("http://localhost:8080/api/products",{method:"post",headers:{"Content-Type":"application/json"},body:e}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){r("add_product",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},change_product:function(t,e){var r=t.commit;fetch("http://localhost:8080/api/product/".concat(e.id),{method:"put",headers:{"Content-Type":"application/json"},body:e.pro}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){r("update_product",{id:e.id,pro:t})})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},delete_product:function(t,e){var r=t.commit;fetch("http://localhost:8080/api/product/".concat(e),{method:"delete"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){r("remove_product",t.id)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))}}}),te=r("5f5b");r("f9e3"),r("2dd8");a["default"].use(te["a"]),a["default"].config.productionTip=!1,new a["default"]({router:Xt,store:Zt,render:function(t){return t(m)}}).$mount("#app")},6644:function(t,e,r){"use strict";r("53a2")},"7abb":function(t,e,r){t.exports=r.p+"img/iphone12.bb271401.jpg"},"9d6b":function(t,e,r){t.exports=r.p+"img/iphone11.ba66664a.jpg"},c309:function(t,e,r){"use strict";r("ea57")},c35d:function(t,e,r){t.exports=r.p+"img/pixel5.0fc7c174.jpg"},ce46:function(t,e){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"},d85a:function(t,e,r){"use strict";r("4af2")},ea57:function(t,e,r){},f666:function(t,e,r){}});
//# sourceMappingURL=app.33919177.js.map