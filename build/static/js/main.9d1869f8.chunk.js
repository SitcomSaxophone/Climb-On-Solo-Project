(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,a){},228:function(e,t,a){e.exports=a(404)},259:function(e,t,a){},402:function(e,t,a){},404:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(30),c=a.n(s),o=a(41),i=a(15),l=a(159),u=(a(236),Object(o.c)({loginMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch((arguments.length>1?arguments[1]:void 0).type){case"CLEAR_LOGIN_ERROR":return"";case"LOGIN_INPUT_ERROR":return"Enter your username and password!";case"LOGIN_FAILED":return"Oops! The username and password didn't match. Try again!";case"LOGIN_FAILED_NO_CODE":return"Oops! Something went wrong! Is the server running?";default:return e}},registrationMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch((arguments.length>1?arguments[1]:void 0).type){case"CLEAR_REGISTRATION_ERROR":return"";case"REGISTRATION_INPUT_ERROR":return"Choose a username and password!";case"REGISTRATION_FAILED":return"Oops! That didn't work. The username might already be taken. Try again!";default:return e}}})),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"login";switch((arguments.length>1?arguments[1]:void 0).type){case"SET_TO_LOGIN_MODE":return"login";case"SET_TO_REGISTER_MODE":return"register";default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.payload;case"UNSET_USER":return{};default:return e}},h=a(70),m=a(50),E=a.n(m),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SCHEDULE":var a=!0,n=!1,r=void 0;try{for(var s,c=t.payload[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var o=s.value;o.start_date=E()(o.start_date).format("dddd MMMM Do YYYY, h:mm:ss a"),o.end_date=E()(o.end_date).format("dddd MMMM Do YYYY, h:mm:ss a")}}catch(f){n=!0,r=f}finally{try{a||null==c.return||c.return()}finally{if(n)throw r}}return Object(h.a)(t.payload);case"SET_ARCHIVE":var i=!0,l=!1,u=void 0;try{for(var p,d=t.payload[Symbol.iterator]();!(i=(p=d.next()).done);i=!0){var m=p.value;m.start_date=E()(m.start_date).format("dddd MMMM Do YYYY, h:mm:ss a"),m.end_date=E()(m.end_date).format("dddd MMMM Do YYYY, h:mm:ss a")}}catch(f){l=!0,u=f}finally{try{i||null==d.return||d.return()}finally{if(l)throw u}}return Object(h.a)(t.payload);default:return e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WORKOUT":return Object(h.a)(t.payload);default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_SCHEDULE_DATE":var a=E()(t.payload.date).format("L");return{startDate:a+" "+t.payload.start_time,endDate:a+" "+t.payload.end_time};default:return e}},O=!1,b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case"TOGGLE_CALENDAR_FORM":return O=!O;default:return e}},w=Object(o.c)({errors:u,loginMode:p,user:d,schedule:f,workout:v,newSchedule:g,scheduleForm:b}),y=a(8),j=a.n(y),C=a(7),k=a(28),_=a.n(k),x=j.a.mark(R),S=j.a.mark(N),T=j.a.mark(D);function R(e){var t;return j.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(C.c)({type:"CLEAR_LOGIN_ERROR"});case 3:return t={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=6,_.a.post("api/user/login",e.payload,t);case 6:return a.next=8,Object(C.c)({type:"FETCH_USER"});case 8:a.next=20;break;case 10:if(a.prev=10,a.t0=a.catch(0),console.log("Error with user login:",a.t0),401!==a.t0.response.status){a.next=18;break}return a.next=16,Object(C.c)({type:"LOGIN_FAILED"});case 16:a.next=20;break;case 18:return a.next=20,Object(C.c)({type:"LOGIN_FAILED_NO_CODE"});case 20:case"end":return a.stop()}},x,this,[[0,10]])}function N(e){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{"Content-Type":"application/json"},withCredentials:!0},e.next=4,_.a.post("api/user/logout",t);case 4:return e.next=6,Object(C.c)({type:"UNSET_USER"});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error with user logout:",e.t0);case 11:case"end":return e.stop()}},S,this,[[0,8]])}function D(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)("LOGIN",R);case 2:return e.next=4,Object(C.d)("LOGOUT",N);case 4:case"end":return e.stop()}},T,this)}var I=D,L=j.a.mark(A),F=j.a.mark(U);function A(e){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(C.c)({type:"CLEAR_REGISTRATION_ERROR"});case 3:return t.next=5,_.a.post("api/user/register",e.payload);case 5:return t.next=7,Object(C.c)({type:"LOGIN",payload:e.payload});case 7:return t.next=9,Object(C.c)({type:"SET_TO_LOGIN_MODE"});case 9:t.next=16;break;case 11:return t.prev=11,t.t0=t.catch(0),console.log("Error with user registration:",t.t0),t.next=16,Object(C.c)({type:"REGISTRATION_FAILED"});case 16:case"end":return t.stop()}},L,this,[[0,11]])}function U(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)("REGISTER",A);case 2:case"end":return e.stop()}},F,this)}var M=U,H=j.a.mark(W),G=j.a.mark(Y);function W(){var e,t;return j.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=4,_.a.get("api/user",e);case 4:return t=a.sent,a.next=7,Object(C.c)({type:"SET_USER",payload:t.data});case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log("User get request failed",a.t0);case 12:case"end":return a.stop()}},H,this,[[0,9]])}function Y(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)("FETCH_USER",W);case 2:case"end":return e.stop()}},G,this)}var B=Y,P=j.a.mark(X),K=j.a.mark(Z),V=j.a.mark($),z=j.a.mark(ee),q=j.a.mark(te),J=j.a.mark(ae),Q=j.a.mark(ne);function X(e){var t;return j.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(C.b)(_.a.get,"/api/schedule",{id:e.payload});case 3:return t=a.sent,a.next=6,Object(C.c)({type:"SET_SCHEDULE",payload:t.data});case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log("Error fetching schedule: ",a.t0);case 11:case"end":return a.stop()}},P,this,[[0,8]])}function Z(e){var t;return j.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(C.b)(_.a.get,"/api/schedule/archive",{id:e.payload});case 3:return t=a.sent,a.next=6,Object(C.c)({type:"SET_ARCHIVE",payload:t.data});case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log("Error fetching archive: ",a.t0);case 11:case"end":return a.stop()}},K,this,[[0,8]])}function $(e){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(C.b)(_.a.post,"/api/schedule",e.payload);case 3:return t.next=5,Object(C.c)({type:"FETCH_SCHEDULE"});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error POSTing new schedule date: ",t.t0);case 10:case"end":return t.stop()}},V,this,[[0,7]])}function ee(e){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(C.b)(_.a.delete,"/api/schedule",{params:e.payload});case 3:return t.next=5,Object(C.c)({type:"FETCH_SCHEDULE"});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error making DELETE to server: ",t.t0);case 10:case"end":return t.stop()}},z,this,[[0,7]])}function te(e){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(C.b)(_.a.delete,"/api/schedule",{params:e.payload});case 3:return t.next=5,Object(C.c)({type:"FETCH_ARCHIVE"});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error making DELETE to server: ",t.t0);case 10:case"end":return t.stop()}},q,this,[[0,7]])}function ae(e){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(C.b)(_.a.put,"/api/schedule",e.payload);case 3:return t.next=5,Object(C.c)({type:"FETCH_SCHEDULE"});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error making UPDATE to server: ",t.t0);case 10:case"end":return t.stop()}},J,this,[[0,7]])}function ne(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)("FETCH_SCHEDULE",X);case 2:return e.next=4,Object(C.d)("SCHEDULE_NEW_WORKOUT",$);case 4:return e.next=6,Object(C.d)("DELETE_WORKOUT",ee);case 6:return e.next=8,Object(C.d)("UPDATE_SCHEDULE",ae);case 8:return e.next=10,Object(C.d)("FETCH_ARCHIVE",Z);case 10:return e.next=12,Object(C.d)("DELETE_ARCHIVED_WORKOUT",te);case 12:case"end":return e.stop()}},Q,this)}var re=ne,se=j.a.mark(oe),ce=j.a.mark(ie);function oe(){var e;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(C.b)(_.a.get,"/api/workout");case 3:return e=t.sent,t.next=6,Object(C.c)({type:"SET_WORKOUT",payload:e.data});case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("Error fetching workouts: ",t.t0);case 11:case"end":return t.stop()}},se,this,[[0,8]])}function ie(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)("FETCH_WORKOUT",oe);case 2:case"end":return e.stop()}},ce,this)}var le=ie,ue=j.a.mark(pe);function pe(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)([I(),M(),B(),re(),le()]);case 2:case"end":return e.stop()}},ue,this)}var de=a(20),he=a(21),me=a(23),Ee=a(22),fe=a(24),ve=a(407),ge=a(409),Oe=a(406),be=a(408),we=a(90),ye=a(405),je=Object(i.b)()(function(e){return r.a.createElement("button",{className:e.className,onClick:function(){return e.dispatch({type:"LOGOUT"})}},"Log Out")}),Ce=a(83),ke=a.n(Ce),_e=a(40),xe=a.n(_e),Se=a(31),Te=a.n(Se),Re=a(157),Ne=a.n(Re),De=a(19),Ie=(a(259),function(e){function t(){var e,a;Object(de.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(me.a)(this,(e=Object(Ee.a)(t)).call.apply(e,[this].concat(r)))).state={anchorEl:null},a.handleOpen=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a}return Object(fe.a)(t,e),Object(he.a)(t,[{key:"render",value:function(){var e=this.state.anchorEl;return r.a.createElement("div",{className:this.props.classes.root},r.a.createElement("h2",{className:this.props.classes.title},"Climb On"),r.a.createElement(Te.a,{className:this.props.classes.menu,onClick:this.handleOpen},r.a.createElement(Ne.a,{className:this.props.classes.icon})),r.a.createElement(ke.a,{anchorEl:e,open:Boolean(e),onClose:this.handleClose},r.a.createElement(xe.a,{onClick:this.handleClose},r.a.createElement(ye.a,{className:"nav-link",to:"/home"},this.props.user.id?"Home":"Login / Register")),r.a.createElement(xe.a,{onClick:this.handleClose},this.props.user.id&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ye.a,{className:"nav-link",to:"/schedule"},"Calendar"))),r.a.createElement(xe.a,{onClick:this.handleClose},this.props.user.id&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ye.a,{className:"nav-link",to:"/archive"},"Archive"))),r.a.createElement(xe.a,{onClick:this.handleClose},this.props.user.id&&r.a.createElement(r.a.Fragment,null,r.a.createElement(je,{className:"nav-link"})))))}}]),t}(n.Component)),Le=Object(De.withStyles)({root:{display:"flex",backgroundColor:"#13a052"},title:{fontSize:"10vmin",color:"#f2f2f2",margin:"auto",marginLeft:"0",paddingLeft:"1vmin"},menu:{height:"12vmin",width:"12vmin",align:"right",marginRight:"0"},icon:{height:"9vmin",width:"9vmin",paddingBottom:"1vmin"},button:{}})(Object(i.b)(function(e){return{user:e.user}})(Ie)),Fe=a(160),Ae=a(36),Ue=a(34),Me=a.n(Ue),He=a(32),Ge=a.n(He),We=(a(149),function(e){function t(){var e,a;Object(de.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(me.a)(this,(e=Object(Ee.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.login=function(e){e.preventDefault(),a.state.username&&a.state.password?a.props.dispatch({type:"LOGIN",payload:{username:a.state.username,password:a.state.password}}):a.props.dispatch({type:"LOGIN_INPUT_ERROR"})},a.handleInputChangeFor=function(e){return function(t){a.setState(Object(Ae.a)({},e,t.target.value))}},a}return Object(fe.a)(t,e),Object(he.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"loginView"},this.props.errors.loginMessage&&r.a.createElement("h2",{className:"alert",role:"alert"},this.props.errors.loginMessage),r.a.createElement("form",{onSubmit:this.login},r.a.createElement("h1",{className:"loginHeader"},"Log In"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},r.a.createElement(Me.a,{className:"loginInput",placeholder:"Username",type:"text",name:"username",value:this.state.username,onChange:this.handleInputChangeFor("username"),variant:"outlined"}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},r.a.createElement(Me.a,{className:"loginInput",placeholder:"Password",type:"password",name:"password",value:this.state.password,onChange:this.handleInputChangeFor("password"),variant:"outlined"}))),r.a.createElement("div",null,r.a.createElement(Ge.a,{className:"log-in",type:"submit",name:"submit",value:"Log In"},"Log In"))),r.a.createElement("center",null,r.a.createElement(Ge.a,{type:"button",className:"link-button",onClick:function(){e.props.dispatch({type:"SET_TO_REGISTER_MODE"})}},"Register")))}}]),t}(n.Component)),Ye=Object(i.b)(function(e){return{errors:e.errors}})(We),Be=function(e){function t(){var e,a;Object(de.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(me.a)(this,(e=Object(Ee.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.registerUser=function(e){e.preventDefault(),a.state.username&&a.state.password?a.props.dispatch({type:"REGISTER",payload:{username:a.state.username,password:a.state.password}}):a.props.dispatch({type:"REGISTRATION_INPUT_ERROR"})},a.handleInputChangeFor=function(e){return function(t){a.setState(Object(Ae.a)({},e,t.target.value))}},a}return Object(fe.a)(t,e),Object(he.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"loginView"},this.props.errors.registrationMessage&&r.a.createElement("h2",{className:"alert",role:"alert"},this.props.errors.registrationMessage),r.a.createElement("form",{onSubmit:this.registerUser},r.a.createElement("h1",{className:"loginHeader"},"Register User"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},r.a.createElement(Me.a,{className:"loginInput",placeholder:"Username",type:"text",name:"username",value:this.state.username,onChange:this.handleInputChangeFor("username")}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},r.a.createElement(Me.a,{className:"loginInput",placeholder:"Password",type:"password",name:"password",value:this.state.password,onChange:this.handleInputChangeFor("password")}))),r.a.createElement("div",null,r.a.createElement(Ge.a,{className:"register",type:"submit",name:"submit",value:"Register"},"Register"))),r.a.createElement("center",null,r.a.createElement(Ge.a,{type:"button",className:"link-button",onClick:function(){e.props.dispatch({type:"SET_TO_LOGIN_MODE"})}},"Login")))}}]),t}(n.Component),Pe=Object(i.b)(function(e){return{errors:e.errors}})(Be),Ke=Object(i.b)(function(e){return{user:e.user,loginMode:e.loginMode}})(function(e){var t,a=e.component,n=e.user,s=e.loginMode,c=Object(Fe.a)(e,["component","user","loginMode"]);return t=n.id?a:"login"===s?Ye:Pe,r.a.createElement(be.a,Object.assign({},c,{component:t}))}),Ve=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null)))},ze=function(e){function t(){var e,a;Object(de.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(me.a)(this,(e=Object(Ee.a)(t)).call.apply(e,[this].concat(r)))).logout=function(){a.props.dispatch({type:"LOGOUT"})},a}return Object(fe.a)(t,e),Object(he.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{id:"welcome"},"Welcome, ",this.props.user.username,"!"),r.a.createElement("p",null,"Your ID is: ",this.props.user.id),r.a.createElement(je,{className:"log-in"}))}}]),t}(n.Component),qe=Object(i.b)(function(e){return{user:e.user}})(ze),Je=a(42),Qe=a(55),Xe=a.n(Qe),Ze=a(56),$e=a.n(Ze),et=a(59),tt=a.n(et),at=a(57),nt=a.n(at),rt=a(58),st=a.n(rt),ct=a(88),ot=a.n(ct),it=a(37),lt=a.n(it),ut=a(35),pt=a.n(ut),dt=a(84),ht=a.n(dt),mt=a(60),Et=a.n(mt),ft=a(39),vt=a.n(ft),gt=a(89),Ot=a.n(gt),bt=function(e){function t(){var e,a;Object(de.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(me.a)(this,(e=Object(Ee.a)(t)).call.apply(e,[this].concat(r)))).state={expanded:!1,workout:{isComplete:!1,comments:"",added_weight:0,route_rating:""}},a.handleExpandClick=function(){a.setState(function(e){return{expanded:!e.expanded}})},a.handleCheck=function(e){return function(e){a.setState({workout:Object(Je.a)({},a.state.workout,{isComplete:!a.state.workout.isComplete})})}},a.handleChangeFor=function(e){return function(t){a.setState({workout:Object(Je.a)({},a.state.workout,Object(Ae.a)({},e,t.target.value))})}},a.handleSaveCompletedWorkout=function(e){return function(t){t.preventDefault(),a.props.dispatch({type:"UPDATE_SCHEDULE",payload:Object(Je.a)({},a.state.workout,{id:e.id})}),a.setState({workout:{added_weight:null,route_rating:"",comments:""}})}},a.handleDelete=function(e){return function(t){t.preventDefault(),a.props.dispatch({type:"DELETE_WORKOUT",payload:e})}},a}return Object(fe.a)(t,e),Object(he.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Xe.a,{className:this.props.classes.root,key:this.props.date.id},r.a.createElement($e.a,{title:this.props.date.start_date,subheader:this.props.date.end_date,className:this.props.classes.title}),r.a.createElement(nt.a,{className:this.props.classes.expandDiv},r.a.createElement(Te.a,{onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show more"},r.a.createElement(ot.a,null))),r.a.createElement(st.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},r.a.createElement(tt.a,{className:this.props.content},r.a.createElement(pt.a,{className:this.props.classes.exercise},this.props.date.name),r.a.createElement(lt.a,{autowidth:"true",type:"text",placeholder:"Route Rating (optional)",onChange:this.handleChangeFor("route_rating"),variant:"outlined",value:this.state.workout.route_rating,className:this.props.classes.contentInput}),r.a.createElement(lt.a,{autowidth:"true",type:"number",placeholder:"Added weight (optional)",onChange:this.handleChangeFor("added_weight"),variant:"outlined",className:this.props.classes.contentInput}),r.a.createElement("br",null),r.a.createElement(lt.a,{autowidth:"true",label:"Additional comments?",multiline:!0,rowsMax:"5",margin:"normal",onChange:this.handleChangeFor("comments"),variant:"outlined",value:this.state.workout.comments,className:this.props.classes.contentInput}),r.a.createElement(Et.a,{className:this.props.classes.completionForm},r.a.createElement(vt.a,{control:r.a.createElement(ht.a,{checked:this.state.workout.isComplete,onChange:this.handleCheck(this.props.date),color:"primary",style:{height:34,width:34}}),label:"Complete Exercise",className:this.props.classes.icon}),r.a.createElement(Ge.a,{variant:"contained",color:"primary",style:{marginLeft:"10vmin",marginRight:"10vmin"},onClick:this.handleSaveCompletedWorkout(this.props.date)},"Archive"),r.a.createElement(vt.a,{control:r.a.createElement(Te.a,{onClick:this.handleDelete(this.props.date)},r.a.createElement(Ot.a,{style:{height:34,width:34}})),label:"Delete Exercise",className:this.props.classes.icon}))))))}}]),t}(n.Component),wt=Object(De.withStyles)({root:{backgroundColor:"white",width:"86%",margin:"auto"},title:{paddingBottom:0,fontSize:"5vmin"},content:{display:"flex",paddingTop:0},contentInput:{marginLeft:"2vmin",marginRight:"2vmin",height:60},completionForm:{display:"flex",flexDirection:"row",justifyContent:"center"},exercise:{fontSize:"4.5vmin"},expandDiv:{paddingTop:0,paddingBottom:0},icon:{width:50,marginLeft:"10vmin",marginRight:"10vmin"}})(Object(i.b)(function(e){return{user:e.user,schedule:e.schedule}})(bt)),yt=a(69),jt=a.n(yt),Ct=a(68),kt=a.n(Ct),_t=a(46),xt=a.n(_t),St=function(e){function t(){var e,a;Object(de.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(me.a)(this,(e=Object(Ee.a)(t)).call.apply(e,[this].concat(r)))).state={newWorkout:{workout_id:0,user_id:a.props.user.id},newScheduleDate:{date:null,start_time:"",end_time:""},labelWidth:0},a.scheduleNewWorkout=function(){return function(e){e.preventDefault(),a.props.dispatch({type:"SCHEDULE_NEW_WORKOUT",payload:Object(Je.a)({},a.state.newWorkout,{start_time:a.props.newSchedule.startDate,end_time:a.props.newSchedule.endDate})}),a.props.dispatch({type:"TOGGLE_CALENDAR_FORM"})}},a.handleDateChangeFor=function(e){return function(t){a.setState({newScheduleDate:Object(Je.a)({},a.state.newScheduleDate,Object(Ae.a)({},e,t.target.value))})}},a.handleSelectChange=function(e){a.setState({newWorkout:Object(Je.a)({},a.state.newWorkout,{workout_id:Number(e.target.value)})})},a.handleDatePicker=function(e){a.setState({newScheduleDate:Object(Je.a)({},a.state.newScheduleDate,{date:e})})},a.handleNewDate=function(e){e.preventDefault(),a.props.dispatch({type:"NEW_SCHEDULE_DATE",payload:a.state.newScheduleDate})},a}return Object(fe.a)(t,e),Object(he.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"FETCH_WORKOUT"}),this.setState({labelWidth:c.a.findDOMNode(this.InputLabelRef).offsetWidth})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.classes.form,id:"workoutFormDiv"},r.a.createElement("form",{onSubmit:this.scheduleNewWorkout()},r.a.createElement(xt.a,null,r.a.createElement(lt.a,{required:!0,type:"date",variant:"outlined",onChange:this.handleDateChangeFor("date"),helperText:"Select a date",className:this.props.classes.input})),r.a.createElement(xt.a,null,r.a.createElement(lt.a,{required:!0,type:"time",onChange:this.handleDateChangeFor("start_time"),value:this.state.newScheduleDate.start_time,variant:"outlined",helperText:"Set a start time",className:this.props.classes.input})),r.a.createElement(xt.a,null,r.a.createElement(lt.a,{required:!0,type:"time",onChange:this.handleDateChangeFor("end_time"),onBlur:this.handleNewDate,value:this.state.newScheduleDate.end_time,variant:"outlined",helperText:"Set an end time",className:this.props.classes.input})),r.a.createElement(xt.a,{required:!0,variant:"outlined"},r.a.createElement(we.b,{ref:function(t){e.InputLabelRef=t},htmlFor:"outlined-workout-simple"},"Select a Workout"),r.a.createElement(jt.a,{value:this.state.newWorkout.workout_id,onChange:this.handleSelectChange,input:r.a.createElement(kt.a,{labelWidth:this.state.labelWidth}),className:this.props.classes.input,style:{width:200}},this.props.workouts.map(function(e){return r.a.createElement(xe.a,{key:e.id,value:e.id},e.name)}))),r.a.createElement(Ge.a,{type:"submit",variant:"outlined",style:{height:40}},"Submit")))}}]),t}(n.Component),Tt=Object(De.withStyles)({form:{display:"inline-block",paddingBottom:"3vmin"},input:{height:60,marginLeft:"1vmin",marginRight:"1vmin"}})(Object(i.b)(function(e){return{user:e.user,workouts:e.workout,newSchedule:e.newSchedule,scheduleForm:e.scheduleForm}})(St)),Rt=a(158),Nt=a.n(Rt),Dt=function(e){function t(){var e,a;Object(de.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(me.a)(this,(e=Object(Ee.a)(t)).call.apply(e,[this].concat(r)))).handleFormToggle=function(e){e.preventDefault(),a.props.dispatch({type:"TOGGLE_CALENDAR_FORM"})},a}return Object(fe.a)(t,e),Object(he.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"FETCH_SCHEDULE",payload:this.props.user.id})}},{key:"render",value:function(){return r.a.createElement("div",{className:this.props.classes.root},r.a.createElement("h2",{className:this.props.classes.title},"Schedule"),r.a.createElement(Et.a,{className:this.props.classes.iconButton},r.a.createElement(vt.a,{control:r.a.createElement(Te.a,{onClick:this.handleFormToggle},r.a.createElement(Nt.a,{className:this.props.classes.icon})),label:"New Workout",style:{width:65}})),!0===this.props.scheduleForm?r.a.createElement(Tt,null):null,this.props.schedule.map(function(e){return r.a.createElement(wt,{key:e.id,date:e})}))}}]),t}(n.Component),It=Object(De.withStyles)({root:{textAlign:"center"},title:{fontSize:"6vmin",marginTop:"0"},iconButton:{height:"10vmin",width:"10vmin",paddingLeft:"6vmin",paddingBottom:"3vmin",marginLeft:25,marginRight:0},icon:{height:"7vmin",width:"7vmin"}})(Object(i.b)(function(e){return{user:e.user,schedule:e.schedule,scheduleForm:e.scheduleForm}})(Dt)),Lt=function(e){function t(){var e,a;Object(de.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(me.a)(this,(e=Object(Ee.a)(t)).call.apply(e,[this].concat(r)))).state={expanded:!1},a.handleExpandClick=function(){a.setState(function(e){return{expanded:!e.expanded}})},a.handleDelete=function(e){return function(t){t.preventDefault(),a.props.dispatch({type:"DELETE_ARCHIVED_WORKOUT",payload:e})}},a}return Object(fe.a)(t,e),Object(he.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Xe.a,{className:this.props.classes.root,key:this.props.date.id},r.a.createElement($e.a,{title:this.props.date.start_date,subheader:this.props.date.end_date}),r.a.createElement(nt.a,null,r.a.createElement(Te.a,{onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show more"},r.a.createElement(ot.a,null))),r.a.createElement(st.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},r.a.createElement(tt.a,null,r.a.createElement(pt.a,{className:this.props.classes.exercise},this.props.date.name),this.props.date.added_weight>0?r.a.createElement(pt.a,{paragraph:!0},this.props.date.added_weight," additional lbs/kg"):null,r.a.createElement(pt.a,{paragraph:!0},this.props.date.route_rating),r.a.createElement(pt.a,{paragraph:!0},this.props.date.comments),r.a.createElement(vt.a,{control:r.a.createElement(Te.a,{onClick:this.handleDelete(this.props.date)},r.a.createElement(Ot.a,null)),label:"Delete Exercise",style:{width:60}})))))}}]),t}(n.Component),Ft=Object(De.withStyles)({root:{backgroundColor:"white",width:"86%",margin:"auto"},title:{paddingBottom:0,fontSize:"5vmin"},exercise:{fontSize:"4.5vmin"}})(Object(i.b)()(Lt)),At=function(e){function t(){return Object(de.a)(this,t),Object(me.a)(this,Object(Ee.a)(t).apply(this,arguments))}return Object(fe.a)(t,e),Object(he.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"FETCH_ARCHIVE",payload:this.props.user.id})}},{key:"render",value:function(){return r.a.createElement("div",{className:this.props.classes.root},r.a.createElement("h2",{className:this.props.classes.title},"Archive"),this.props.archive.map(function(e){return r.a.createElement(Ft,{key:e.id,date:e})}))}}]),t}(n.Component),Ut=Object(De.withStyles)({root:{textAlign:"center"},title:{fontSize:"6vmin",marginTop:"0"}})(Object(i.b)(function(e){return{user:e.user,archive:e.schedule}})(At)),Mt=(a(402),function(e){function t(){return Object(de.a)(this,t),Object(me.a)(this,Object(Ee.a)(t).apply(this,arguments))}return Object(fe.a)(t,e),Object(he.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"FETCH_USER"})}},{key:"render",value:function(){return r.a.createElement(ve.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(we.a,null),r.a.createElement(Le,null),r.a.createElement(ge.a,null,r.a.createElement(Oe.a,{exact:!0,from:"/",to:"/schedule"}),r.a.createElement(be.a,{exact:!0,path:"/about",component:Ve}),r.a.createElement(Ke,{exact:!0,path:"/home",component:qe}),r.a.createElement(Ke,{exact:!0,path:"/schedule",component:It}),r.a.createElement(Ke,{exact:!0,path:"/archive",component:Ut}),r.a.createElement(Ke,{exact:!0,path:"/workouts",component:Tt}),r.a.createElement(be.a,{render:function(){return r.a.createElement("h1",null,"404")}}))))}}]),t}(n.Component)),Ht=Object(i.b)()(Mt),Gt=Object(l.a)(),Wt=[Gt],Yt=Object(o.d)(w,o.a.apply(void 0,Wt));Gt.run(pe),c.a.render(r.a.createElement(i.a,{store:Yt},r.a.createElement(Ht,null)),document.getElementById("react-root"))}},[[228,2,1]]]);
//# sourceMappingURL=main.9d1869f8.chunk.js.map