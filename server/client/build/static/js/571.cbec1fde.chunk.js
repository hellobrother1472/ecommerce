"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[571],{3571:function(e,t,s){s.r(t);var m=s(4942),r=s(1413),d=s(4165),l=s(5861),n=s(885),a=s(2791),i=s(1405),c=s(7689),x=s(1087),o=s(4757),h=s.n(o),u=s(184);t.default=function(){var e=(0,c.s0)(),t=[],s=(0,a.useState)(!1),o=(0,n.Z)(s,2),f=o[0],b=o[1],j=(0,a.useState)({name:"",email:"",number:""}),w=(0,n.Z)(j,2),p=w[0],N=w[1],v=(0,i.v9)((function(e){return e.userLoginStatusReducer.isSignedIn})),g=(0,i.v9)((function(e){return e.userLoginStatusReducer.user}));(0,a.useEffect)((function(){g&&N(g)}),[g]),(0,a.useEffect)((function(){"false"===v&&e("/signin")}),[]);var y=function(){var e=(0,l.Z)((0,d.Z)().mark((function e(t,s){var m;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/admin/updateuser/".concat(s),{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify(p)});case 3:return m=e.sent,e.next=6,m.json();case 6:e.sent,b(!f);case 8:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),k=function(e){N((0,r.Z)((0,r.Z)({},p),{},(0,m.Z)({},e.target.name,e.target.value)))};return(0,u.jsxs)("div",{className:"profile-page flex flex-col justify-center items-center mt-6 p-4",children:[(0,u.jsxs)("div",{className:"profile-heading",children:[(0,u.jsx)("h1",{className:"text-royal-blue mdm:text-2xl md:text-4xl font-semibold",children:"My Profile"}),(0,u.jsx)("p",{className:"border-b-4 border-red-500 w-20 mx-auto mt-1"})]}),(0,u.jsx)("div",{className:"profile-content w-3/5 mdm:w-full mt-8 shadow-xl rounded-lg p-4 overflow-auto",children:(0,u.jsxs)("div",{className:"proflie-user-content flex mdm:flex-col justify-center items-start gap-8",children:[(0,u.jsx)("div",{className:"profile-left w-[35%] mdm:w-full flex justify-center",children:(0,u.jsx)("div",{className:"profile-pic",children:(0,u.jsx)("img",{className:"h-80 w-80 smm:h-48 smm:w-48 rounded-md",src:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",alt:"avatar"})})}),(0,u.jsxs)("div",{className:"profile-right w-3/5 mdm:w-full ml-auto flex flex-col mdm:justify-center mdm:items-center",children:[(0,u.jsxs)("div",{className:"user flex justify-between items-center mdm:flex-col",children:[(0,u.jsxs)("div",{className:"user-desc",children:[(0,u.jsx)("h1",{className:"mdm:text-xl md:text-2xl font-semibold",children:p.name}),(0,u.jsx)("h2",{className:"text-red-500 mdm:text-lg md:text-xl",children:"Customer"})]}),(0,u.jsxs)("div",{className:"user-btn flex md:flex-col gap-4",children:[(0,u.jsx)("button",{onClick:function(e){e.preventDefault(),b(!f)},className:"bg-black text-white px-4 py-2 rounded-md mdm:text-sm text-lg border-2 hover:text-black hover:bg-white border-black",children:"Edit Profile"}),(0,u.jsx)(h(),{href:"#myorders",children:(0,u.jsx)("button",{className:"bg-red-500 text-white px-4 py-2 rounded-md mdm:text-sm text-lg border-2 hover:text-red-500 hover:bg-white border-red-500",children:"My Orders"})})]})]}),(0,u.jsxs)("div",{className:"user-comp-info mt-14",children:[(0,u.jsx)("h1",{className:"mdm:text-xl md:text-2xl font-semibold border-b-2 border-red-400",children:"About"}),(0,u.jsxs)("div",{className:"user-info p-2",children:[(0,u.jsxs)("div",{className:"user-id flex justify-between items-center mt-4 gap-2",children:[(0,u.jsx)("h2",{className:"text-red-500 mdm:text-base md:text-lg mdm:w-1/5",children:"UserId: "}),(0,u.jsxs)("h2",{className:"mdm:text-base md:text-lg md:w-2/5",children:[p._id," "]})]}),(0,u.jsxs)("div",{className:"user-name flex justify-between items-center mt-4",children:[(0,u.jsx)("h2",{className:"text-red-500 mdm:text-base md:text-lg mdm:w-1/5 mr-2",children:"Name: "}),f?(0,u.jsx)("input",{onChange:k,name:"name",className:"mdm:text-base md:text-lg md:w-2/5 p-2 border-2 border-gray-300  rounded-md",type:"text",value:p.name}):(0,u.jsxs)("h2",{className:"mdm:text-base md:text-lg md:w-2/5",children:[p.name," "]})]}),(0,u.jsxs)("div",{className:"user-email flex justify-between items-center mt-4",children:[(0,u.jsx)("h2",{className:"text-red-500 mdm:text-base md:text-lg mdm:w-1/5 mr-2 ",children:"Email: "}),f?(0,u.jsx)("input",{onChange:k,name:"email",className:"mdm:text-base md:text-lg md:w-2/5 p-2 border-2 border-gray-300 rounded-md",type:"email",value:p.email}):(0,u.jsxs)("h2",{className:"mdm:text-base md:text-lg md:w-2/5",children:[p.email," "]})]}),(0,u.jsxs)("div",{className:"user-number flex justify-between items-center mt-4",children:[(0,u.jsx)("h2",{className:"text-red-500 mdm:text-base md:text-lg mdm:w-1/5 mr-2",children:"Phone: "}),f?(0,u.jsx)("input",{onChange:k,name:"number",className:"mdm:text-base md:text-lg md:w-2/5 p-2 border-2 border-gray-300 rounded-md",type:"text",value:p.number}):(0,u.jsxs)("h2",{className:"mdm:text-base md:text-lg md:w-2/5",children:[p.number," "]})]}),(0,u.jsx)("div",{className:"submit-btn",children:f?(0,u.jsx)("button",{onClick:function(e){return y(e,p._id)},className:"mt-2 bg-red-500 text-white px-4 py-2 rounded-md mdm:text-sm text-lg border-2 hover:text-red-500 hover:bg-white border-red-500",children:"Submit"}):""})]})]})]})]})}),(0,u.jsx)("div",{id:"myorders",className:"myorder-content w-3/5 mdm:w-full mt-8 shadow-xl rounded-lg p-4 mb-10",children:(0,u.jsxs)("div",{className:"order mt-4 flex flex-col",children:[(0,u.jsx)("div",{className:"order-heading flex justify-center mt-3",children:(0,u.jsx)("h1",{className:"text-royal-blue text-center mdm:text-xl md:text-2xl font-semibold w-32 border-b-2 border-red-500",children:"My Orders"})}),(0,u.jsxs)("div",{className:"my-order-heading flex justify-around items-center mt-6 border-b-2 border-red-200",children:[(0,u.jsx)("h2",{className:"mdm:text-sm text-xl w-[10%] text-center smm:hidden",children:"Order Id"}),(0,u.jsx)("h2",{className:"mdm:text-sm text-xl w-[30%] vsmmm:w-[20%] text-center",children:"Item"}),(0,u.jsx)("h2",{className:"mdm:text-sm text-xl w-[10%] vsmmm:w-[14%] text-center",children:"Quantity"}),(0,u.jsx)("h2",{className:"mdm:text-sm text-xl w-[10%] vsmmm:w-[10%] text-center",children:"Price"}),(0,u.jsx)("h2",{className:"mdm:text-sm text-xl w-[20%] vsmmm:w-[18%] text-center",children:"Action"})]}),(0,u.jsx)("div",{className:"myorder-details flex flex-col justify-center items-center mt-4",children:t.length>0?t.map((function(e,s){return(0,u.jsxs)("div",{className:s==t.length-1?"order flex w-full justify-around items-center px-2 py-3":"order flex w-full justify-around items-center border-b-2 border-gray-200  px-2 py-3",children:[(0,u.jsx)("h2",{className:"w-[10%] text-center mdm:text-sm text-base smm:hidden",children:"#000000"}),(0,u.jsxs)("div",{className:"item-detail flex items-center justify-center gap-4 w-[30%] text-center mdm:text-sm text-xl vsmmm:w-[20%]",children:[(0,u.jsx)("img",{className:"h-14 w-14 vsmmm:hidden",src:e.img,alt:"order-image"}),(0,u.jsx)("h2",{className:"mdm:text-sm text-base",children:e.h1})]}),(0,u.jsx)("h2",{className:"w-[10%] text-center mdm:text-sm text-base vsmmm:w-[14%]",children:e.qty}),(0,u.jsxs)("h2",{className:"w-[10%] text-center mdm:text-sm text-base vsmmm:w-[10%]",children:["\u20b9",e.qty*e.price,"/-"]}),(0,u.jsx)("h2",{className:"w-[20%] text-center mdm:text-sm text-base vsmmm:w-[18%]",children:"View Order | Reorder"})]},s)})):(0,u.jsxs)("h2",{className:"mdm:text-xl md:text-2xl font-semibold",children:["No Shopping has been done till now, If you want to have something here. Go to ",(0,u.jsx)(x.rU,{to:"/",children:(0,u.jsx)("span",{className:"text-red-500",children:"Shop Now"})})]})})]})})]})}}}]);
//# sourceMappingURL=571.cbec1fde.chunk.js.map