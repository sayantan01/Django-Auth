(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{116:function(e,t,s){},121:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(21),n=s.n(a),r=(s(88),s(44)),l=s(9),i=(s(89),s(74)),o=s(129),j=s(128),d=s(130),u=s(14),b=s(123),m=s(124),O=s(131),h=s(1);var p=function(){var e=Object(l.g)();return Object(h.jsxs)("div",{className:"container-fluid text-center",style:{backgroundColor:"#1b1b1b"},children:[Object(h.jsx)("h1",{id:"title",className:"text-center py-2",children:"Auth App"}),Object(h.jsx)("h4",{className:"text-center py-2",style:{color:"grey"},children:"Simple auth app using django backend"}),Object(h.jsx)(b.a,{variant:"primary",onClick:function(){e.push("/dashboard")},children:"Get started here"}),Object(h.jsx)(m.a,{xl:3,lg:2,md:2,sm:1,children:Object(h.jsxs)(O.a,{style:{width:800,height:500,margin:"auto",marginTop:50},children:[Object(h.jsx)(O.a.Item,{children:Object(h.jsx)("img",{className:"d-block w-100",src:"https://codesealer.com/wp-content/uploads/2020/10/rest-api-code-main.png",alt:"First slide"})}),Object(h.jsx)(O.a.Item,{children:Object(h.jsx)("img",{className:"d-block w-100",src:"https://cdn.artandlogic.com/wp-content/uploads/django.jpeg",alt:"Second slide"})}),Object(h.jsx)(O.a.Item,{children:Object(h.jsx)("img",{className:"d-block w-100",src:"https://lh4.googleusercontent.com/sBaxDLU9jP8BOaB8vNld8Yu_dv7V3HZGBNBHiguET93-VXWxm1tO3J6PtAWEg46cBAicYGZtZEMwRdYO3NYJUKBrEIT18-KvRUAMIHzQ_Q1sagcKZa3hyKVR4hJaf4VpTV3hoAoa",alt:"Third slide"})})]})})]})},x=s(2),g=s(8),f=s(33),v=s.n(f),y=s(125),N=s(31),w=s(25);var k=Object(u.b)((function(e){return{token:e.token,errors:e.msg}}))(Object(l.h)((function(e){var t=Object(c.useState)({name:"",email:"",password:"",password2:"",address:""}),s=Object(g.a)(t,2),a=s[0],n=s[1],r=Object(c.useState)(!1),i=Object(g.a)(r,2),o=i[0],j=i[1],d=Object(c.useState)(""),u=Object(g.a)(d,2),b=u[0],m=u[1],O=Object(c.useState)(0),p=Object(g.a)(O,2),f=p[0],k=p[1],S=Object(c.useState)(0),E=Object(g.a)(S,2),C=E[0],L=E[1],R=1===f?w.b:w.c,A=1===C?w.b:w.c;return Object(h.jsxs)("div",{className:"container",children:[null!==e.token&&Object(h.jsx)(l.a,{to:"/dashboard"}),!1===o&&b&&Object(h.jsx)(y.a,{variant:"warning",onClose:function(){return m("")},dismissible:!0,children:b}),o&&Object(h.jsx)(y.a,{variant:"success",onClose:function(){return j(!1)},dismissible:!0,children:Object(h.jsxs)("p",{children:["Successfully registered. You can Now ",Object(h.jsx)("a",{href:"/Login",children:"Login here"})]})}),Object(h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),a.password===a.password2){var t={username:a.name,email:a.email,password:a.password,password2:a.password2,address:a.address};console.log(t),v.a.post("/api/signup",t).then((function(e){console.log("User registered successfully!"),j(!0)})).catch((function(e){console.log(e),500!==e.response.status?m(e.response.data.msg):m("Internal server error")}))}else m("Passwords must match")},children:[Object(h.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto text-center my-4",children:Object(h.jsx)("h2",{className:"form-title",children:"Create Account"})}),Object(h.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto my-3",children:[Object(h.jsxs)("label",{children:["User Name",Object(h.jsx)("sup",{style:{color:"red"},children:"*"})]}),Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter username",value:a.name,onChange:function(e){e.persist(),n((function(t){return Object(x.a)(Object(x.a)({},t),{},{name:e.target.value})}))},required:!0})]}),Object(h.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto my-3",children:[Object(h.jsxs)("label",{children:["Email",Object(h.jsx)("sup",{style:{color:"red"},children:"*"})]}),Object(h.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter your email ID",value:a.email,onChange:function(e){e.persist(),n((function(t){return Object(x.a)(Object(x.a)({},t),{},{email:e.target.value})}))},required:!0})]}),Object(h.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto my-3",children:[Object(h.jsxs)("label",{children:["Address",Object(h.jsx)("sup",{style:{color:"red"},children:"*"})]}),Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter your address",value:a.address,onChange:function(e){e.persist(),n((function(t){return Object(x.a)(Object(x.a)({},t),{},{address:e.target.value})}))},required:!0})]}),Object(h.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto my-3",children:[Object(h.jsxs)("label",{children:["Password",Object(h.jsx)("sup",{style:{color:"red"},children:"*"})]}),Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("span",{className:"input-group-text",children:Object(h.jsx)(N.a,{icon:R,onClick:function(e){return k(1-f)}})}),Object(h.jsx)("input",{type:0===f?"password":"text",className:"form-control",placeholder:"Password",value:a.password,onChange:function(e){e.persist(),n((function(t){return Object(x.a)(Object(x.a)({},t),{},{password:e.target.value})}))}})]})]}),Object(h.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto my-3",children:[Object(h.jsxs)("label",{children:["Confirm Password",Object(h.jsx)("sup",{style:{color:"red"},children:"*"})]}),Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("span",{className:"input-group-text",children:Object(h.jsx)(N.a,{icon:A,onClick:function(e){return L(1-C)}})}),Object(h.jsx)("input",{type:0===C?"password":"text",className:"form-control",placeholder:"Re-enter the password",value:a.password2,onChange:function(e){e.persist(),n((function(t){return Object(x.a)(Object(x.a)({},t),{},{password2:e.target.value})}))}})]})]}),Object(h.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(h.jsx)("input",{type:"submit",className:"btn btn-success",value:"Signup",disabled:0===a.email.length||0===a.name.length||0===a.password.length||0===a.password2.length||0===a.address.length})})]}),Object(h.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto my-4 text-center",children:Object(h.jsxs)("p",{children:["Already have an account?"," ",Object(h.jsx)("a",{href:"/login",className:"link-primary",children:"Login here"})]})})]})}))),S=s(126),E=s(58),C=s(41),L=s.n(C),R="LOGIN_USER",A="LOGOUT_USER",I="RECEIVE_ERROR",D="RESET_ERROR",_=function(e,t,s,c){return{type:R,token:e,username:t.userName,email:t.email}},U=function(){return{type:A}};var B=Object(u.b)((function(e){return{token:e.token,errors:e.msg}}))((function(e){var t=Object(c.useState)({email:"",password:""}),s=Object(g.a)(t,2),a=s[0],n=s[1],r=Object(c.useState)(!1),i=Object(g.a)(r,2),o=i[0],j=i[1],d=Object(c.useState)(0),u=Object(g.a)(d,2),b=u[0],m=u[1],O=1===b?w.b:w.c;return Object(h.jsxs)("div",{className:"container",children:[null!==e.token&&Object(h.jsx)(l.a,{to:"/dashboard"}),o&&e.errors&&Object(h.jsx)(y.a,{variant:"warning",onClose:function(){return j(!1)},dismissible:!0,children:e.errors}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault();var s,c={email:a.email,password:a.password};e.dispatch((s=c,function(){var e=Object(E.a)(L.a.mark((function e(t){var c,a,n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:D}),e.next=4,v.a.post("/api/login",s);case 4:return c=e.sent,console.log(c.data),a=c.data,n=a.token,r=a.user,e.abrupt("return",t(_(n,r)));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",t((l=e.t0.response.data.msg,{type:I,msg:l})));case 13:case"end":return e.stop()}var l}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())),j(!0)},children:[Object(h.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto text-center my-4",children:[Object(h.jsx)("h2",{className:"form-title",children:"Login"}),o&&""===e.errors&&Object(h.jsx)(S.a,{animation:"border",variant:"primary",className:"mx-auto"})]}),Object(h.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto my-3",children:[Object(h.jsxs)("label",{children:["Email",Object(h.jsx)("sup",{style:{color:"red"},children:"*"})]}),Object(h.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter your email ID",value:a.email,onChange:function(e){e.persist(),n((function(t){return Object(x.a)(Object(x.a)({},t),{},{email:e.target.value})}))},required:!0})]}),Object(h.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto my-3",children:[Object(h.jsxs)("label",{children:["Password",Object(h.jsx)("sup",{style:{color:"red"},children:"*"})]}),Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("span",{className:"input-group-text",children:Object(h.jsx)(N.a,{icon:O,onClick:function(e){return m(1-b)}})}),Object(h.jsx)("input",{type:0===b?"password":"text",className:"form-control",placeholder:"Password",value:a.password,onChange:function(e){e.persist(),n((function(t){return Object(x.a)(Object(x.a)({},t),{},{password:e.target.value})}))},required:!0})]})]}),Object(h.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto my-3",children:Object(h.jsx)("input",{type:"submit",className:"btn btn-success",value:"Login",disabled:0===a.email.length||0===a.password.length})})]}),Object(h.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto my-4 text-center",children:Object(h.jsxs)("p",{children:["Don't have an account?"," ",Object(h.jsx)("a",{href:"/signup",className:"link-primary",children:"Create an account here"})]})})]})}));var P=Object(u.b)((function(e){return{}}))((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("form",{method:"POST",onSubmit:function(t){t.preventDefault(),e.dispatch(U())},children:Object(h.jsx)("button",{type:"submit",className:"btn btn-success mx-md-2",children:"Logout"})})})})),T=s(127),V=s(78);var q=Object(u.b)((function(e){return{token:e.token}}))((function(e){var t=Object(c.useState)(null),s=Object(g.a)(t,2),a=s[0],n=s[1],r=Object(c.useState)(!1),i=Object(g.a)(r,2),o=i[0],j=i[1],d=Object(c.useState)(!1),u=Object(g.a)(d,2),O=u[0],p=u[1];Object(c.useEffect)((function(){!function(){var e=Object(E.a)(L.a.mark((function e(){var t,s;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/users");case 3:t=e.sent,s=t.data.users,n(s),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error!! ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[a]);var x=function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.username}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:e.address}),Object(h.jsx)("td",{children:Object(h.jsx)(b.a,{variant:"success",value:e.email,children:Object(h.jsx)(N.a,{icon:w.a})})}),Object(h.jsx)("td",{children:Object(h.jsx)(b.a,{variant:"danger",value:e.email,onClick:function(){j(!0),v.a.delete("/api/delete",{headers:{},data:{email:e.email}}).then((function(e){console.log(e),n(e.data.users),p(!0),j(!1)})).catch((function(e){console.log(e),j(!1)}))},children:Object(h.jsx)(N.a,{icon:w.d})})})]})};return Object(h.jsxs)("div",{className:"container align-content-center my-3",children:[null===e.token&&Object(h.jsx)(l.a,{to:"/Login"}),O&&Object(h.jsx)(y.a,{variant:"success",onClose:function(){return p(!1)},dismissible:!0,children:Object(h.jsx)("p",{children:"Successfully deleted user"})}),Object(h.jsx)(V.a,{children:Object(h.jsx)("style",{children:"body { background-color: black; }"})}),Object(h.jsx)("h2",{id:"user_details_title",className:"d-flex justify-content-center",children:"User Details"}),o&&Object(h.jsx)(S.a,{animation:"border",variant:"primary",className:"mx-auto"}),Object(h.jsx)(m.a,{className:"my-5 d-flex justify-content-center",children:Object(h.jsx)(T.a,{lg:8,children:Object(h.jsxs)("table",{id:"users",className:"table table-light table-striped table-hover",children:[Object(h.jsx)("thead",{style:{color:"green"},children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("b",{children:"Username"})}),Object(h.jsx)("td",{children:Object(h.jsx)("b",{children:"Email"})}),Object(h.jsx)("td",{children:Object(h.jsx)("b",{children:"Address"})}),Object(h.jsx)("td",{children:Object(h.jsx)("b",{children:"Edit"})}),Object(h.jsx)("td",{children:Object(h.jsx)("b",{children:"Delete"})})]})}),Object(h.jsx)("tbody",{children:function(){if(null!==a)return a.map((function(e,t){return Object(h.jsx)(x,{username:e.userName,email:e.email,address:e.address},t)}))}()})]})})})]})}));var G=Object(u.b)((function(e){return{userName:e.userName,email:e.email}}))((function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("p",{style:{color:"white"},className:"mx-md-5 my-2",children:["Hello ",e.userName]})})}));var J=Object(u.b)((function(e){return{token:e.token}}))((function(e){return Object(h.jsxs)("div",{className:"container my-5",children:[null===e.token&&Object(h.jsx)(l.a,{to:"/Login"}),Object(h.jsx)("img",{className:"img-fluid mx-auto d-block",src:"https://www.prestashop.com/sites/default/files/styles/blog_750x320/public/blog/2019/10/banner_error_404.jpg?itok=eAS4swln",alt:"404 not found"})]})}));s(116);var Y=Object(u.b)((function(e){return{token:e.token}}))((function(e){return Object(c.useEffect)((function(){try{Object(i.a)(e.token).exp<Date.now()/1e3&&e.dispatch(U())}catch(t){console.log("no token")}}),[e]),Object(h.jsxs)("div",{children:[Object(h.jsx)(o.a,{bg:"dark",variant:"dark",expand:"md",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(o.a.Brand,{href:"/home",children:"Auth App"}),Object(h.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsxs)(d.a,{className:"mr-auto",children:[Object(h.jsx)(d.a.Link,{href:"/signup",children:"Signup"}),Object(h.jsx)(d.a.Link,{href:"/login",children:"Login"}),Object(h.jsx)(d.a.Link,{href:"/dashboard",children:"Dashboard"}),null!==e.token&&Object(h.jsx)(d.a.Item,{children:Object(h.jsx)(G,{})}),null!==e.token&&Object(h.jsx)(P,{})]})})]})}),Object(h.jsx)(r.a,{children:Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{exact:!0,path:"/",component:p}),Object(h.jsx)(l.b,{exact:!0,path:"/home",component:p}),Object(h.jsx)(l.b,{exact:!0,path:"/signup",component:k}),Object(h.jsx)(l.b,{exact:!0,path:"/login",component:B}),Object(h.jsx)(l.b,{exact:!0,path:"/dashboard",component:q}),Object(h.jsx)(l.b,{component:J})]})})]})})),H=s(34),K={token:null,userName:"",email:"",msg:""};var Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case R:var s=Object(x.a)(Object(x.a)({},e),{},{token:t.token,userName:t.username,email:t.email,msg:""});return s;case A:return K;case I:return Object(x.a)(Object(x.a)({},e),{},{msg:t.msg});case D:return Object(x.a)(Object(x.a)({},e),{},{msg:""});default:return e}},z=s(82),M=s(63),Q=s(81),W={key:"root",storage:s.n(Q).a},F=Object(M.a)(W,Z),X=Object(H.c)(F,Object(H.a)(z.a)),$=Object(M.b)(X),ee=s(83);n.a.render(Object(h.jsx)(u.a,{store:X,children:Object(h.jsx)(ee.a,{loading:null,persistor:$,children:Object(h.jsx)(Y,{})})}),document.getElementById("root"))},88:function(e,t,s){}},[[121,1,2]]]);
//# sourceMappingURL=main.327ced1e.chunk.js.map