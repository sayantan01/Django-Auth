(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{116:function(e,t,s){},121:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(21),n=s.n(c),r=(s(87),s(41)),o=s(9),l=(s(88),s(73)),i=s(128),j=s(127),d=s(129),u=s(14),b=s(123),m=s(124),p=s(130),O=s(1);var h=function(){var e=Object(o.g)();return Object(O.jsxs)("div",{className:"container-fluid text-center",style:{backgroundColor:"#1b1b1b"},children:[Object(O.jsx)("h1",{id:"title",className:"text-center py-2",children:"Auth App"}),Object(O.jsx)("h4",{className:"text-center py-2",style:{color:"grey"},children:"Simple auth app using django backend"}),Object(O.jsx)(b.a,{variant:"primary",onClick:function(){e.push("/dashboard")},children:"Get started here"}),Object(O.jsx)(m.a,{xl:3,lg:2,md:2,sm:1,children:Object(O.jsxs)(p.a,{style:{width:800,height:500,margin:"auto",marginTop:50},children:[Object(O.jsx)(p.a.Item,{children:Object(O.jsx)("img",{className:"d-block w-100",src:"https://codesealer.com/wp-content/uploads/2020/10/rest-api-code-main.png",alt:"First slide"})}),Object(O.jsx)(p.a.Item,{children:Object(O.jsx)("img",{className:"d-block w-100",src:"https://cdn.artandlogic.com/wp-content/uploads/django.jpeg",alt:"Second slide"})}),Object(O.jsx)(p.a.Item,{children:Object(O.jsx)("img",{className:"d-block w-100",src:"https://lh4.googleusercontent.com/sBaxDLU9jP8BOaB8vNld8Yu_dv7V3HZGBNBHiguET93-VXWxm1tO3J6PtAWEg46cBAicYGZtZEMwRdYO3NYJUKBrEIT18-KvRUAMIHzQ_Q1sagcKZa3hyKVR4hJaf4VpTV3hoAoa",alt:"Third slide"})})]})})]})},x=s(2),g=s(8),f=s(54),v=s.n(f),y=s(125),N=s(44),w=s(31);var k=Object(u.b)((function(e){return{token:e.token,errors:e.msg}}))(Object(o.h)((function(e){var t=Object(a.useState)({name:"",email:"",password:"",password2:"",address:""}),s=Object(g.a)(t,2),c=s[0],n=s[1],r=Object(a.useState)(!1),l=Object(g.a)(r,2),i=l[0],j=l[1],d=Object(a.useState)(""),u=Object(g.a)(d,2),b=u[0],m=u[1],p=Object(a.useState)(0),h=Object(g.a)(p,2),f=h[0],k=h[1],E=Object(a.useState)(0),S=Object(g.a)(E,2),C=S[0],L=S[1],R=1===f?w.a:w.b,A=1===C?w.a:w.b;return Object(O.jsxs)("div",{className:"container",children:[null!==e.token&&Object(O.jsx)(o.a,{to:"/dashboard"}),!1===i&&b&&Object(O.jsx)(y.a,{variant:"warning",onClose:function(){return m("")},dismissible:!0,children:b}),i&&Object(O.jsx)(y.a,{variant:"success",onClose:function(){return j(!1)},dismissible:!0,children:Object(O.jsxs)("p",{children:["Successfully registered. You can Now ",Object(O.jsx)("a",{href:"/Login",children:"Login here"})]})}),Object(O.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),c.password===c.password2){var t={username:c.name,email:c.email,password:c.password,password2:c.password2,address:c.address};console.log(t),v.a.post("/api/signup",t).then((function(e){console.log("User registered successfully!"),j(!0)})).catch((function(e){console.log(e),500!==e.response.status?m(e.response.data.msg):m("Internal server error")}))}else m("Passwords must match")},children:[Object(O.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto text-center my-4",children:Object(O.jsx)("h2",{className:"form-title",children:"Create Account"})}),Object(O.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto my-3",children:[Object(O.jsxs)("label",{children:["User Name",Object(O.jsx)("sup",{style:{color:"red"},children:"*"})]}),Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter username",value:c.name,onChange:function(e){e.persist(),n((function(t){return Object(x.a)(Object(x.a)({},t),{},{name:e.target.value})}))},required:!0})]}),Object(O.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto my-3",children:[Object(O.jsxs)("label",{children:["Email",Object(O.jsx)("sup",{style:{color:"red"},children:"*"})]}),Object(O.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter your email ID",value:c.email,onChange:function(e){e.persist(),n((function(t){return Object(x.a)(Object(x.a)({},t),{},{email:e.target.value})}))},required:!0})]}),Object(O.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto my-3",children:[Object(O.jsxs)("label",{children:["Address",Object(O.jsx)("sup",{style:{color:"red"},children:"*"})]}),Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter your address",value:c.address,onChange:function(e){e.persist(),n((function(t){return Object(x.a)(Object(x.a)({},t),{},{address:e.target.value})}))},required:!0})]}),Object(O.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto my-3",children:[Object(O.jsxs)("label",{children:["Password",Object(O.jsx)("sup",{style:{color:"red"},children:"*"})]}),Object(O.jsxs)("div",{className:"input-group",children:[Object(O.jsx)("span",{className:"input-group-text",children:Object(O.jsx)(N.a,{icon:R,onClick:function(e){return k(1-f)}})}),Object(O.jsx)("input",{type:0===f?"password":"text",className:"form-control",placeholder:"Password",value:c.password,onChange:function(e){e.persist(),n((function(t){return Object(x.a)(Object(x.a)({},t),{},{password:e.target.value})}))}})]})]}),Object(O.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto my-3",children:[Object(O.jsxs)("label",{children:["Confirm Password",Object(O.jsx)("sup",{style:{color:"red"},children:"*"})]}),Object(O.jsxs)("div",{className:"input-group",children:[Object(O.jsx)("span",{className:"input-group-text",children:Object(O.jsx)(N.a,{icon:A,onClick:function(e){return L(1-C)}})}),Object(O.jsx)("input",{type:0===C?"password":"text",className:"form-control",placeholder:"Re-enter the password",value:c.password2,onChange:function(e){e.persist(),n((function(t){return Object(x.a)(Object(x.a)({},t),{},{password2:e.target.value})}))}})]})]}),Object(O.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(O.jsx)("input",{type:"submit",className:"btn btn-success",value:"Signup",disabled:0===c.email.length||0===c.name.length||0===c.password.length||0===c.password2.length||0===c.address.length})})]}),Object(O.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto my-4 text-center",children:Object(O.jsxs)("p",{children:["Already have an account?"," ",Object(O.jsx)("a",{href:"/login",className:"link-primary",children:"Login here"})]})})]})}))),E=s(126),S=s(77),C=s(61),L=s.n(C),R="LOGIN_USER",A="LOGOUT_USER",I="RECEIVE_ERROR",B="RESET_ERROR",D=function(e,t,s,a){return{type:R,token:e,username:t.userName,email:t.email}},P=function(){return{type:A}};var T=Object(u.b)((function(e){return{token:e.token,errors:e.msg}}))((function(e){var t=Object(a.useState)({email:"",password:""}),s=Object(g.a)(t,2),c=s[0],n=s[1],r=Object(a.useState)(!1),l=Object(g.a)(r,2),i=l[0],j=l[1],d=Object(a.useState)(0),u=Object(g.a)(d,2),b=u[0],m=u[1],p=1===b?w.a:w.b;return Object(O.jsxs)("div",{className:"container",children:[null!==e.token&&Object(O.jsx)(o.a,{to:"/dashboard"}),i&&e.errors&&Object(O.jsx)(y.a,{variant:"warning",onClose:function(){return j(!1)},dismissible:!0,children:e.errors}),Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault();var s,a={email:c.email,password:c.password};e.dispatch((s=a,function(){var e=Object(S.a)(L.a.mark((function e(t){var a,c,n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:B}),e.next=4,v.a.post("/api/login",s);case 4:return a=e.sent,console.log(a.data),c=a.data,n=c.token,r=c.user,e.abrupt("return",t(D(n,r)));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",t((o=e.t0.response.data.msg,{type:I,msg:o})));case 13:case"end":return e.stop()}var o}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())),j(!0)},children:[Object(O.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto text-center my-4",children:[Object(O.jsx)("h2",{className:"form-title",children:"Login"}),i&&""===e.errors&&Object(O.jsx)(E.a,{animation:"border",variant:"primary",className:"mx-auto"})]}),Object(O.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto my-3",children:[Object(O.jsxs)("label",{children:["Email",Object(O.jsx)("sup",{style:{color:"red"},children:"*"})]}),Object(O.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter your email ID",value:c.email,onChange:function(e){e.persist(),n((function(t){return Object(x.a)(Object(x.a)({},t),{},{email:e.target.value})}))},required:!0})]}),Object(O.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto my-3",children:[Object(O.jsxs)("label",{children:["Password",Object(O.jsx)("sup",{style:{color:"red"},children:"*"})]}),Object(O.jsxs)("div",{className:"input-group",children:[Object(O.jsx)("span",{className:"input-group-text",children:Object(O.jsx)(N.a,{icon:p,onClick:function(e){return m(1-b)}})}),Object(O.jsx)("input",{type:0===b?"password":"text",className:"form-control",placeholder:"Password",value:c.password,onChange:function(e){e.persist(),n((function(t){return Object(x.a)(Object(x.a)({},t),{},{password:e.target.value})}))},required:!0})]})]}),Object(O.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto my-3",children:Object(O.jsx)("input",{type:"submit",className:"btn btn-success",value:"Login",disabled:0===c.email.length||0===c.password.length})})]}),Object(O.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto my-4 text-center",children:Object(O.jsxs)("p",{children:["Don't have an account?"," ",Object(O.jsx)("a",{href:"/signup",className:"link-primary",children:"Create an account here"})]})})]})}));var _=Object(u.b)((function(e){return{}}))((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)("form",{method:"POST",onSubmit:function(t){t.preventDefault(),e.dispatch(P())},children:Object(O.jsx)("button",{type:"submit",className:"btn btn-success mx-md-2",children:"Logout"})})})}));s(115);var U=Object(u.b)((function(e){return{token:e.token}}))((function(e){return Object(O.jsxs)("div",{children:[null===e.token&&Object(O.jsx)(o.a,{to:"/Login"}),Object(O.jsx)("h1",{children:"Welcome to dashboard"})]})}));var V=Object(u.b)((function(e){return{userName:e.userName,email:e.email}}))((function(e){return Object(O.jsx)("div",{children:Object(O.jsxs)("p",{style:{color:"white"},className:"mx-md-5 my-2",children:["Hello ",e.userName]})})}));var q=Object(u.b)((function(e){return{token:e.token}}))((function(e){return Object(O.jsxs)("div",{className:"container my-5",children:[null===e.token&&Object(O.jsx)(o.a,{to:"/Login"}),Object(O.jsx)("img",{className:"img-fluid mx-auto d-block",src:"https://www.prestashop.com/sites/default/files/styles/blog_750x320/public/blog/2019/10/banner_error_404.jpg?itok=eAS4swln",alt:"404 not found"})]})}));s(116);var G=Object(u.b)((function(e){return{token:e.token}}))((function(e){return Object(a.useEffect)((function(){try{Object(l.a)(e.token).exp<Date.now()/1e3&&e.dispatch(P())}catch(t){console.log("no token")}}),[e]),Object(O.jsxs)("div",{children:[Object(O.jsx)(i.a,{bg:"dark",variant:"dark",expand:"md",children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(i.a.Brand,{href:"/home",children:"Auth App"}),Object(O.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(i.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(d.a,{className:"mr-auto",children:[Object(O.jsx)(d.a.Link,{href:"/signup",children:"Signup"}),Object(O.jsx)(d.a.Link,{href:"/login",children:"Login"}),Object(O.jsx)(d.a.Link,{href:"/dashboard",children:"Dashboard"}),null!==e.token&&Object(O.jsx)(d.a.Item,{children:Object(O.jsx)(V,{})}),null!==e.token&&Object(O.jsx)(_,{})]})})]})}),Object(O.jsx)(r.a,{children:Object(O.jsxs)(o.d,{children:[Object(O.jsx)(o.b,{exact:!0,path:"/",component:h}),Object(O.jsx)(o.b,{exact:!0,path:"/home",component:h}),Object(O.jsx)(o.b,{exact:!0,path:"/signup",component:k}),Object(O.jsx)(o.b,{exact:!0,path:"/login",component:T}),Object(O.jsx)(o.b,{exact:!0,path:"/dashboard",component:U}),Object(O.jsx)(o.b,{component:q})]})})]})})),J=s(32),Y={token:null,userName:"",email:"",msg:""};var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case R:var s=Object(x.a)(Object(x.a)({},e),{},{token:t.token,userName:t.username,email:t.email,msg:""});return s;case A:return Y;case I:return Object(x.a)(Object(x.a)({},e),{},{msg:t.msg});case B:return Object(x.a)(Object(x.a)({},e),{},{msg:""});default:return e}},K=s(81),Z=s(62),W=s(80),z={key:"root",storage:s.n(W).a},M=Object(Z.a)(z,H),Q=Object(J.c)(M,Object(J.a)(K.a)),F=Object(Z.b)(Q),X=s(82);n.a.render(Object(O.jsx)(u.a,{store:Q,children:Object(O.jsx)(X.a,{loading:null,persistor:F,children:Object(O.jsx)(G,{})})}),document.getElementById("root"))},87:function(e,t,s){}},[[121,1,2]]]);
//# sourceMappingURL=main.80a8e266.chunk.js.1f55edb86157.map