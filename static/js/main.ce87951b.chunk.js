(this.webpackJsonpwoorbit2=this.webpackJsonpwoorbit2||[]).push([[0],{102:function(e,t,c){},103:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(44),r=c.n(n),l=c(10),i=c(26),j=c(39),o=c(17),b=c(1),d=c(6),h=c(41),m=c(118),u=c(109),x=c(110),O=c(85),p=c(115),f=c(86),g=c(111),v=c(84),y=c(66),N=Object(v.a)({apiKey:"AIzaSyBU08ktapW07TE2bXLVYA3Yl7b-0HHiDD4",authDomain:"woorbit.firebaseapp.com",projectId:"woorbit",storageBucket:"woorbit.appspot.com",messagingSenderId:"913535745495",appId:"1:913535745495:web:d2a0787082259a24081f92",measurementId:"G-2ED7DELTD7"}),w=Object(y.c)(N),C=c(3);function k(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),v=Object(l.a)(r,2),y=v[0],N=v[1],k=s.a.useState(null),S=Object(l.a)(k,2),I=S[0],L=S[1],E=s.a.useState(!1),U=Object(l.a)(E,2),D=U[0],B=U[1],G=Object(o.g)(),T=Object(i.b)();function W(){return(W=Object(d.a)(Object(b.a)().mark((function e(t){var a,s;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B(!0),t.preventDefault(),c&&y){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,Object(i.e)(T,c,y);case 7:a=e.sent,a.user.emailVerified?(s=Object(h.a)(w,"users",T.currentUser.reloadUserInfo.localId),Object(h.b)(s).then((function(e){B(!1),e.exists()?G("/"):G("/form")}))):(B(!1),L("Email is not verified!")),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(4),B(!1),L("Email and Password not match");case 17:case"end":return e.stop()}}),e,null,[[4,13]])})))).apply(this,arguments)}return Object(C.jsx)("div",{className:"vh-100 d-flex justify-content-center align-items-center",style:{backgroundColor:"#f5f5f5"},children:Object(C.jsxs)(m.a,{children:[Object(C.jsx)(u.a,{className:"container p-4",children:Object(C.jsxs)(x.a,{children:[Object(C.jsx)(O.a,{sm:12,md:7,className:"mb-2 d-flex align-items-center justify-content-center",children:Object(C.jsx)("img",{src:"login.svg",alt:"login",style:{width:"100%"}})}),Object(C.jsx)(O.a,{sm:12,md:5,children:Object(C.jsxs)(p.a,{onSubmit:function(e){return W.apply(this,arguments)},children:[Object(C.jsx)("h1",{children:"Sign In"}),Object(C.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(C.jsx)(p.a.Label,{children:"Email address"}),Object(C.jsx)(p.a.Control,{type:"email",placeholder:"Enter email",value:c,onChange:function(e){var t=e.target;return n(t.value)}})]}),Object(C.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(C.jsx)(p.a.Label,{children:"Password"}),Object(C.jsx)(p.a.Control,{type:"password",placeholder:"Password",value:y,onChange:function(e){var t=e.target;return N(t.value)}})]}),Object(C.jsx)(j.b,{className:"m-2",to:"/signup",children:"Don't have account ? Register"}),Object(C.jsx)(f.a,{variant:"primary",type:"submit",className:"btn-color",children:D?"Loading..":"Login"})]})})]})}),I&&Object(C.jsx)(g.a,{className:"m-3",varient:"danger",onClose:function(){return L(null)},dismissible:!0,children:I})]})})}function S(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),h=o[0],g=o[1],v=Object(a.useState)(""),y=Object(l.a)(v,2),N=y[0],w=y[1],k=s.a.useState(!1),S=Object(l.a)(k,2),I=S[0],L=S[1],E=Object(i.b)();function U(){return(U=Object(d.a)(Object(b.a)().mark((function e(t){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),h&&N&&c){e.next=3;break}return e.abrupt("return");case 3:return L(!0),e.prev=4,e.next=7,Object(i.a)(E,h,N);case 7:return e.next=9,Object(i.g)(E.currentUser,{displayName:c});case 9:return e.next=11,Object(i.d)(E.currentUser);case 11:L(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),L(!1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,14]])})))).apply(this,arguments)}return Object(C.jsx)("div",{className:"vh-100 d-flex justify-content-center align-items-center",style:{backgroundColor:"#f5f5f5"},children:Object(C.jsx)(m.a,{children:Object(C.jsx)(u.a,{className:"container p-4",children:Object(C.jsxs)(x.a,{children:[Object(C.jsx)(O.a,{sm:12,md:7,className:"d-flex align-items-center justify-content-center",children:Object(C.jsx)("img",{src:"register.svg",alt:"register",style:{width:"100%"}})}),Object(C.jsx)(O.a,{sm:12,md:5,children:Object(C.jsxs)(p.a,{onSubmit:function(e){return U.apply(this,arguments)},children:[Object(C.jsx)("h1",{children:"Sign Up"}),Object(C.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(C.jsx)(p.a.Label,{children:"Name"}),Object(C.jsx)(p.a.Control,{type:"text",placeholder:"Enter name",value:c,onChange:function(e){var t=e.target;return n(t.value)}}),Object(C.jsx)(p.a.Label,{children:"Email address"}),Object(C.jsx)(p.a.Control,{type:"email",placeholder:"Email",value:h,onChange:function(e){var t=e.target;return g(t.value)}})]}),Object(C.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(C.jsx)(p.a.Label,{children:"Password"}),Object(C.jsx)(p.a.Control,{type:"password",placeholder:"Password",value:N,onChange:function(e){var t=e.target;return w(t.value)}})]}),Object(C.jsx)(j.b,{className:"m-2",to:"/signin",children:"Already have an account ? Login"}),Object(C.jsx)(f.a,{variant:"primary",type:"submit",className:"btn-color m-2",children:I?"Loading..":"Sign Up"})]})})]})})})})}function I(){var e,t=s.a.useState(""),c=Object(l.a)(t,2),a=c[0],n=c[1],r=s.a.useState(""),j=Object(l.a)(r,2),m=j[0],u=j[1],x=s.a.useState(""),O=Object(l.a)(x,2),g=O[0],v=O[1],y=s.a.useState(""),N=Object(l.a)(y,2),k=N[0],S=N[1],I=s.a.useState(""),L=Object(l.a)(I,2),E=L[0],U=L[1],D=s.a.useState(""),B=Object(l.a)(D,2),G=B[0],T=B[1],W=s.a.useState(""),P=Object(l.a)(W,2),A=P[0],R=P[1],z=s.a.useState(""),F=Object(l.a)(z,2),H=F[0],M=F[1],V=s.a.useState(""),K=Object(l.a)(V,2),Y=K[0],J=K[1],q=s.a.useState("male"),X=Object(l.a)(q,2),Z=X[0],Q=X[1],$=Object(o.g)(),_=Object(i.b)(),ee=_.currentUser;function te(){return(te=Object(d.a)(Object(b.a)().mark((function e(t){var c;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),null!==ee){e.next=3;break}return e.abrupt("return");case 3:return c=Object(h.a)(w,"users",_.currentUser.reloadUserInfo.localId),e.next=6,Object(h.c)(c,{address:k,zip:E,city:G,state:A,country:H,gender:Z,phoneNumber:g,companyName:Y});case 6:$("/");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return s.a.useEffect((function(){if(null!==ee){var e=Object(h.a)(w,"users",_.currentUser.reloadUserInfo.localId);Object(h.b)(e).then((function(e){if(e.exists()){var t=e.data(),c=t.phoneNumber,a=t.address,s=t.zip,n=t.city,r=t.state,l=t.country,i=t.companyName,j=t.gender;v(c),S(a),U(s),T(n),R(r),M(l),J(i),Q(j)}})),n(ee.displayName),u(ee.email)}}),[ee,null===(e=_.currentUser)||void 0===e?void 0:e.reloadUserInfo.localId,$]),Object(C.jsx)("div",{className:"vh-100 d-flex justify-content-center align-items-center",style:{backgroundColor:"#f5f5f5"},children:Object(C.jsxs)(p.a,{className:"container p-4 user-info-form",onSubmit:function(e){return te.apply(this,arguments)},children:[Object(C.jsxs)(p.a.Group,{className:"mb-3 row",controlId:"formBasicEmail",children:[Object(C.jsxs)("div",{className:"col-md-4 mb-2",children:[Object(C.jsx)(p.a.Label,{children:"Name"}),Object(C.jsx)(p.a.Control,{type:"text",placeholder:"name",value:a,disabled:!0})]}),Object(C.jsxs)("div",{className:"col-md-4 mb-2",children:[Object(C.jsx)(p.a.Label,{children:"Email"}),Object(C.jsx)(p.a.Control,{type:"email",placeholder:"email",value:m,disabled:!0})]}),Object(C.jsxs)("div",{className:"col-md-4 mb-2",children:[Object(C.jsx)(p.a.Label,{children:"Phone Number"}),Object(C.jsx)(p.a.Control,{type:"text",placeholder:"number",value:g,onChange:function(e){var t=e.target;return v(t.value)}})]})]}),Object(C.jsxs)(p.a.Group,{className:"mb-3 row",controlId:"formBasicEmail",children:[Object(C.jsxs)("div",{className:"mb-3 col-md-10",children:[Object(C.jsx)(p.a.Label,{children:"Address"}),Object(C.jsx)(p.a.Control,{type:"text",placeholder:"address",value:k,onChange:function(e){var t=e.target;return S(t.value)}})]}),Object(C.jsxs)("div",{className:"col-md-2 mb-2",children:[Object(C.jsx)(p.a.Label,{children:"Zip code"}),Object(C.jsx)(p.a.Control,{type:"text",placeholder:"zip",value:E,onChange:function(e){var t=e.target;return U(t.value)}})]}),Object(C.jsxs)("div",{className:"col-md-4 mb-2",children:[Object(C.jsx)(p.a.Label,{children:"City"}),Object(C.jsx)(p.a.Control,{type:"text",placeholder:"city",value:G,onChange:function(e){var t=e.target;return T(t.value)}})]}),Object(C.jsxs)("div",{className:"col-md-4 mb-2",children:[Object(C.jsx)(p.a.Label,{children:"State"}),Object(C.jsx)(p.a.Control,{type:"text",placeholder:"state",value:A,onChange:function(e){var t=e.target;return R(t.value)}})]}),Object(C.jsxs)("div",{className:"col-md-4 mb-2",children:[Object(C.jsx)(p.a.Label,{children:"Country"}),Object(C.jsx)(p.a.Control,{type:"text",placeholder:"country",value:H,onChange:function(e){var t=e.target;return M(t.value)}})]})]}),Object(C.jsxs)(p.a.Group,{className:"mb-3 row",controlId:"formBasicEmail",children:[Object(C.jsxs)("div",{className:"col-md-4 mb-2",children:[Object(C.jsx)("label",{for:"exampleFormControlSelect1",children:"Gender"}),Object(C.jsxs)("select",{class:"form-control",id:"exampleFormControlSelect1",value:Z,onChange:function(e){var t=e.target;return Q(t.value)},children:[Object(C.jsx)("option",{value:"male",children:"Male"}),Object(C.jsx)("option",{value:"female",children:"Female"}),Object(C.jsx)("option",{value:"other",children:"Other"})]})]}),Object(C.jsxs)("div",{className:"col-md-4 mb-2",children:[Object(C.jsx)(p.a.Label,{children:"Company Name"}),Object(C.jsx)(p.a.Control,{type:"text",placeholder:"Company Name",value:Y,onChange:function(e){var t=e.target;return J(t.value)}})]})]}),Object(C.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit"}),Object(C.jsx)(f.a,{className:"m-3",variant:"dander",type:"submit",style:{color:"red"},children:"Clear"})]})})}var L=c(114),E=c(117),U=c(113),D=c(79);function B(e){var t=e.onSignout,c=e.user,a=e.innerText,n=Object(o.g)(),r=s.a.forwardRef((function(e,t){var a=e.children,s=e.onClick;return Object(C.jsxs)("a",{className:"mt-5n",href:"/signin",ref:t,onClick:function(e){e.preventDefault(),s(e)},children:[a,c&&Object(C.jsx)(D.a,{})]})}));return Object(C.jsxs)(U.a,{children:[Object(C.jsx)(U.a.Toggle,{as:r,id:"dropdown-custom-components",children:a}),Object(C.jsxs)(U.a.Menu,{children:[Object(C.jsx)(U.a.Item,{onClick:function(){return n("/profile")},eventKey:"1",children:"Profile"}),c&&Object(C.jsx)(U.a.Item,{onClick:t,eventKey:"1",children:"Sign out"})]})]})}function G(e){var t=e.user,c=s.a.useState(!1),a=Object(l.a)(c,2),n=a[0],r=a[1],j=Object(o.g)(),h=Object(i.b)();function m(){return x.apply(this,arguments)}function x(){return(x=Object(d.a)(Object(b.a)().mark((function e(){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}return e.next=3,Object(i.f)(h);case 3:return e.abrupt("return");case 4:j("/signin");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.useEffect((function(){function e(e){window.scrollY>0?r(!0):r(!1)}return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}));var O=n?{backgroundColor:"white",boxShadow:"0px 6px 13px -12px rgba(0,0,0,0.75)",WebkitBoxShadow:"0px 6px 13px -12px rgba(0,0,0,0.75)",MozBoxShadow:"0px 6px 13px -12px rgba(0,0,0,0.75)",transition:"550ms"}:{backgroundColor:"transparent"};return Object(C.jsxs)(L.a,{style:O,className:"nav-bg pt-0 pb-0",expand:"lg",fixed:"top",children:[Object(C.jsxs)(u.a,{className:"d-flex",children:[Object(C.jsxs)(L.a.Brand,{href:"#home",className:"d-flex",children:[Object(C.jsx)("img",{alt:"logo",src:"/logo.png",width:"60",height:"50",className:"d-inline-block align-top m-1"}),Object(C.jsxs)("div",{className:"d-flex flex-column justify-content-center",children:[Object(C.jsx)("h5",{className:"m-0",children:"Woorbit"}),Object(C.jsx)("p",{className:"p-0 m-0",style:{fontSize:"12px"},children:"The work orbit"})]})]}),Object(C.jsx)(L.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(C.jsx)(L.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:Object(C.jsxs)(E.a,{children:[Object(C.jsx)(E.a.Link,{className:"m-2 h6",href:"#home",children:"Home"}),Object(C.jsx)(E.a.Link,{className:"m-2 h6",href:"#about",children:"About"}),Object(C.jsx)(E.a.Link,{className:"m-2 h6",href:"#services",children:"Services"}),Object(C.jsx)(E.a.Link,{className:"m-2 h6",href:"#contact",children:"Contact"}),Object(C.jsx)(E.a.Link,{onClick:!t&&m,className:"m-2 h6",children:Object(C.jsx)(B,{innerText:t?t.displayName:"Signin",onSignout:m,user:t})})]})})]}),n&&Object(C.jsx)(f.a,{onClick:function(){window.scrollTo(0,0)},className:"btn-color bottom-right-scroll",children:"Top"})]})}function T(){return Object(C.jsxs)(u.a,{className:"banner d-flex flex-column justify-content-center",children:[Object(C.jsx)(x.a,{children:Object(C.jsx)("h1",{style:{fontSize:"70px"},children:"Woorbit"})}),Object(C.jsx)(x.a,{children:Object(C.jsx)("p",{className:"h3",children:"Where we provide industries the best work force and man power for the max outcome of industries."})}),Object(C.jsx)(x.a,{className:"w-md-50",children:Object(C.jsx)(O.a,{children:Object(C.jsx)(f.a,{className:"btn-color p-0",children:Object(C.jsx)("a",{className:"m-3",style:{color:"white"},href:"#services",children:"Learn How"})})})})]})}var W=c(116);function P(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("h5",{className:"white text-align-center mb-0 pt-5",children:"OUR CLIENTS"}),Object(C.jsxs)(W.a,{className:"white",children:[Object(C.jsx)(W.a.Item,{className:"h-100",interval:1e3,children:Object(C.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"300px"},children:Object(C.jsx)("img",{alt:"prestige",src:"prestige.png"})})}),Object(C.jsx)(W.a.Item,{interval:1e3,children:Object(C.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"300px"},children:Object(C.jsx)("img",{alt:"birla",src:"birla.jpg"})})}),Object(C.jsx)(W.a.Item,{interval:1e3,children:Object(C.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"300px"},children:Object(C.jsx)("img",{alt:"polar",src:"polar.png"})})}),Object(C.jsx)(W.a.Item,{interval:1e3,children:Object(C.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"300px"},children:Object(C.jsx)("h1",{children:"Vihaa trading company"})})})]})]})}function A(e){var t=e.user;return Object(C.jsxs)("div",{id:"home",style:{height:"100%"},children:[Object(C.jsx)(G,{user:t}),Object(C.jsx)(T,{}),Object(C.jsx)(P,{})]})}function R(e){var t=e.className,c=(e.title,e.children),a=e.img;return Object(C.jsxs)(m.a,{style:{width:"18rem"},className:"card ".concat(t),children:[Object(C.jsx)(m.a.Img,{variant:"top",src:a,className:"h-50 mt-5 card-img"}),Object(C.jsx)(m.a.Body,{className:"d-flex flex-column justify-content-center align-items-center",children:Object(C.jsx)(m.a.Text,{className:"text-center",children:c})})]})}function z(){return Object(C.jsxs)(u.a,{fluid:!0,style:{height:"200px"},className:"mt-5 bg-blue-light mb-5 d-flex flex-column justify-content-center align-items-center",children:[Object(C.jsx)("h4",{children:"Get in touch"}),Object(C.jsx)(x.a,{children:Object(C.jsx)(O.a,{children:Object(C.jsx)("p",{className:"text-align-center",children:"Want to know how we can help your brand stand out? Let's discuss!"})})}),Object(C.jsx)(f.a,{size:"lg",className:"btn-color p-0",children:Object(C.jsx)("a",{href:"#contact",className:"m-3",style:{color:"white"},children:"Contact us"})})]})}function F(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{id:"services",children:[Object(C.jsx)("div",{className:"d-flex flex-column align-items-center",children:Object(C.jsx)("h5",{className:"pt-5 mb-3",children:"OUR SERVICES"})}),Object(C.jsx)(u.a,{children:Object(C.jsxs)(x.a,{children:[Object(C.jsx)(O.a,{className:"p-0 d-flex justify-content-center mb-3",children:Object(C.jsx)(R,{img:"service1.svg",children:"Fully Criminal verified background of workers and make sure the safety and further conflicts within."})}),Object(C.jsx)(O.a,{className:"p-0 d-flex justify-content-center mb-3",children:Object(C.jsx)(R,{img:"service2.svg",children:"Hightly skilled labours from locals who have experiance in respected field from years."})}),Object(C.jsx)(O.a,{className:"p-0 d-flex justify-content-center mb-3",children:Object(C.jsx)(R,{img:"service3.svg",children:"Good pay, Good work by removing contractors monopoly, we ensure that workers are happy with there wages so the output of labours increase."})})]})})]}),Object(C.jsx)(z,{})]})}function H(){return Object(C.jsxs)("div",{className:"w-100 bg-blue-light who-we-cont p-5 mb-4 mt-5",children:[Object(C.jsx)("h6",{children:"ABOUT US"}),Object(C.jsx)("h4",{children:"Woorbit"}),Object(C.jsx)("p",{children:"Woorbit is a service based company which provide high skilled, punctual labour to the industries keeping the vision of indsutries. We help industries to grow by providing best workers with skills as per requirement of company. We make sure that the workers gets a justifiable income and save them from monopoly of contractors."}),Object(C.jsx)(f.a,{className:"p-0 btn-color",children:Object(C.jsx)("a",{href:"#services",className:"m-3",style:{color:"white"},children:"Learn More"})})]})}function M(){return Object(C.jsx)("div",{id:"about",className:"d-flex justify-content-center align-items-center",children:Object(C.jsx)(H,{})})}var V=c(89);function K(e){var t=e.icon,c=e.heading,a=e.children;return Object(C.jsx)(u.a,{className:"mb-4",children:Object(C.jsxs)(x.a,{children:[Object(C.jsx)(O.a,{xs:12,className:"model-icon-blue",children:t}),Object(C.jsxs)(O.a,{children:[Object(C.jsx)("h4",{className:"sub-heading-color model-heading",children:c}),Object(C.jsx)("p",{className:"model-info-text",children:a})]})]})})}function Y(){return Object(C.jsx)(u.a,{children:Object(C.jsxs)(x.a,{children:[Object(C.jsx)(O.a,{xs:12,children:Object(C.jsx)("h2",{className:"text-align-center mt-5 mb-5",children:"What we offer"})}),Object(C.jsx)(O.a,{children:Object(C.jsx)(u.a,{children:Object(C.jsxs)(x.a,{children:[Object(C.jsx)(O.a,{xs:12,md:6,children:Object(C.jsx)(K,{icon:Object(C.jsx)(V.a,{}),heading:"Trust First Approch",children:"Woorbit believes trust is first thing which we earn from our client everything comes later."})}),Object(C.jsx)(O.a,{xs:12,md:6,children:Object(C.jsx)(K,{icon:Object(C.jsx)(D.b,{}),heading:"Tech Support",children:"We provide 24/7 tech support to the industries, out 24/7 services is execptionally perfect and help industries to enhance there outcome greatly."})})]})})})]})})}function J(){return Object(C.jsx)("div",{children:Object(C.jsx)(Y,{})})}var q=c(82);function X(){return Object(C.jsxs)(u.a,{className:"mt-4 bg-blue-light",fluid:!0,id:"contact",children:[Object(C.jsxs)(x.a,{className:"p-5 footer-img",children:[Object(C.jsxs)(O.a,{xs:12,sm:4,className:"small-icon mb-4",children:[Object(C.jsx)("h4",{children:"Links"}),Object(C.jsx)("a",{href:"https://www.linkedin.com/company/woorbit",children:Object(C.jsx)(q.a,{})}),Object(C.jsx)("a",{href:"https://www.linkedin.com/company/woorbit",children:Object(C.jsx)(q.b,{})}),Object(C.jsx)("a",{href:"https://www.linkedin.com/company/woorbit",children:Object(C.jsx)(q.c,{})})]}),Object(C.jsxs)(O.a,{xs:12,sm:4,className:"mb-4",children:[Object(C.jsx)("h4",{children:"Mail"}),Object(C.jsx)("a",{href:"mailto:contact@woorbit.com",children:"contact@woorbit.com"}),Object(C.jsx)("br",{}),Object(C.jsx)("a",{href:"mailto:thewoorbit@gmail.com",children:"thewoorbit@gmail.com"})]}),Object(C.jsxs)(O.a,{children:[Object(C.jsx)("h4",{children:"Contact"}),Object(C.jsxs)("p",{children:["Delhi-Gurgaon road,",Object(C.jsx)("br",{}),"NH-48, Pincode 110030,",Object(C.jsx)("br",{}),"South west Delhi, Delhi(DL)"]}),Object(C.jsx)("a",{href:"tel:+919058540453",children:"+919058540453, "}),Object(C.jsx)("a",{href:"tel:+919411594887",children:"+919411594887"})]})]}),Object(C.jsx)(x.a,{children:Object(C.jsx)(O.a,{className:"justify-content-center heading-color text-blue-dark d-flex align-items-center p-4",children:Object(C.jsxs)("p",{className:"text-align-center",children:["\xa9 Copyright ",Object(C.jsx)("b",{children:"Woorbit"}),". All Rights Reserved "]})})})]})}function Z(e){var t=e.user;return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(A,{user:t}),Object(C.jsx)(M,{}),Object(C.jsx)(F,{}),Object(C.jsx)(J,{}),Object(C.jsx)(X,{})]})}var Q=c(8),$=c(112),_={address:"",city:"",gender:"",phoneNumber:"",state:"",country:"",companyName:""};function ee(e){var t=e.user,c=s.a.useState(_),a=Object(l.a)(c,2),n=a[0],r=a[1],j=Object(o.g)(),b=Object(i.b)();return s.a.useEffect((function(){if(t)try{var e=Object(h.a)(w,"users",b.currentUser.reloadUserInfo.localId);Object(h.b)(e).then((function(e){e.exists()&&r((function(t){return Object(Q.a)(Object(Q.a)({},t),e.data())}))}))}catch(c){console.log(c.message)}}),[t,b.currentUser.reloadUserInfo.localId]),Object(C.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{backgroundColor:"#f5f5f5"},children:Object(C.jsx)(m.a,{children:Object(C.jsxs)(u.a,{className:"p-4",children:[Object(C.jsxs)(x.a,{className:"p-4",children:[Object(C.jsx)(O.a,{xs:12,className:"mb-4 text-align-center",children:Object(C.jsx)("h1",{children:""===n.city?"Loading...":"PROFILE"})}),Object(C.jsx)(O.a,{sm:12,className:"d-flex justify-content-center",children:Object(C.jsx)($.a,{alt:"avatar",src:(null===t||void 0===t?void 0:t.photoURL)||"avatar.jpeg",roundedCircle:!0,style:{width:"25%"}})}),Object(C.jsxs)(O.a,{sm:12,className:"text-align-center",children:[Object(C.jsx)("h3",{children:null===t||void 0===t?void 0:t.displayName}),Object(C.jsx)("p",{children:"GENDER: "+n.gender}),Object(C.jsx)("p",{children:"ADDRESS: ".concat(n.address,", ").concat(n.city)})]})]}),Object(C.jsxs)(x.a,{children:[Object(C.jsxs)(O.a,{sm:12,md:7,children:[Object(C.jsx)("h3",{children:"Contact"}),Object(C.jsx)("p",{children:"PHONE: "+n.phoneNumber}),Object(C.jsx)("p",{children:"EMAIL: "+(null===t||void 0===t?void 0:t.email)})]}),Object(C.jsxs)(O.a,{sm:12,md:5,children:[Object(C.jsx)("h3",{children:"Company"}),Object(C.jsx)("p",{children:"Name: "+n.companyName})]})]}),Object(C.jsx)(x.a,{children:Object(C.jsx)(f.a,{onClick:function(){return j("/form")},children:"Update"})})]})})})}c(101),c(102);var te=function(){var e=Object(i.b)(),t=s.a.useState(null),c=Object(l.a)(t,2),a=c[0],n=c[1];return s.a.useEffect((function(){Object(i.c)(e,(function(e){n(e)}))}),[e]),Object(C.jsx)(j.a,{children:Object(C.jsxs)(o.d,{children:[Object(C.jsx)(o.b,{path:"/",element:Object(C.jsx)(Z,{user:a})}),Object(C.jsx)(o.b,{path:"/signin",element:Object(C.jsx)(k,{})}),Object(C.jsx)(o.b,{path:"/signup",element:a?Object(C.jsx)(o.a,{to:"/signin"}):Object(C.jsx)(S,{})}),Object(C.jsx)(o.b,{path:"/form",element:Object(C.jsx)(I,{})}),Object(C.jsx)(o.b,{path:"/profile",element:Object(C.jsx)(ee,{user:a})})]})})};r.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(te,{})}),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.ce87951b.chunk.js.map