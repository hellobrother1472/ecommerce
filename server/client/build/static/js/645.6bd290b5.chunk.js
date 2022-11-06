"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[645],{3645:function(e,t,r){r.r(t);var s=r(2982),c=r(4165),i=r(5861),n=r(885),a=r(2791),l=r(8820),d=r(6355),o=r(7689),m=r(1087),x=r(8257),u=r(184);t.default=function(e){var t=e.setProgress,r=(0,o.UO)().id,h=(0,a.useState)(!1),f=(0,n.Z)(h,2),g=f[0],j=f[1],p=(0,a.useState)(),y=(0,n.Z)(p,2),v=y[0],w=y[1];(0,a.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(){var s,i;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(10),e.next=3,fetch("/admin/getAllProductsByCategory/".concat(r));case 3:return s=e.sent,t(40),e.next=7,s.json();case 7:i=e.sent,t(70),w(i.productList),t(100);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r]);return(0,u.jsx)("div",{className:"flex flex-col justify-center items-center p-6 md:p-8 bg-gray-100",children:v?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"heading-category flex items-center justify-between smm:justify-between w-1/2 ml-auto smm:ml-0 smm:w-full",children:[(0,u.jsxs)("div",{className:"heading",children:[(0,u.jsx)("h1",{className:"text-3xl mdm:text-2xl text-royal-blue",children:v[0].categoryName}),(0,u.jsx)("p",{className:"border-b-4 border-red-500 w-10 mx-auto mt-1"})]}),(0,u.jsxs)("div",{className:"filter-option flex flex-col",children:[(0,u.jsx)("div",{className:"filter text-lg mdm:text-sm text-gray-500 border-2 border-gray-300 py-1 px-2 rounded-md cursor-pointer hover:bg-red-500 hover:text-white",onClick:function(){j(!g)},children:(0,u.jsxs)("h4",{className:"flex items-center justify-center gap-1",children:[(0,u.jsx)(d.roE,{}),"Sort By: Default"]})}),g&&(0,u.jsx)("div",{className:"dropdown p-2 shadow-xl mt-2 bg-white w-40 rounded-md",children:(0,u.jsxs)("ul",{className:"items text-lg smm:text-sm text-gray-500 cursor-pointer",children:[(0,u.jsx)("li",{className:"border-b-2 border-gray-400 hover:text-black mt-1",onClick:function(){v&&(v.sort((function(e,t){return e.discountedPrice-t.discountedPrice})),w((0,s.Z)(v)))},children:"Price - Low to High"}),(0,u.jsx)("li",{className:"hover:text-black mt-1",onClick:function(){v&&(v.sort((function(e,t){return t.discountedPrice-e.discountedPrice})),w((0,s.Z)(v)))},children:"Price - High to Low"})]})})]})]}),(0,u.jsx)("div",{className:"products flex flex-wrap items-center mt-4 mdm:justify-center mdm:items-center",children:v.map((function(e){return(0,u.jsx)(m.rU,{className:"md:w-1/3",to:"/product/".concat(e._id),children:(0,u.jsxs)("div",{className:"product bg-white flex flex-col justify-center items-center p-2 mx-6 my-4 cursor-pointer relative hover:scale-110 hover:shadow-2xl duration-200 rounded-lg",children:[(0,u.jsxs)("h4",{className:"flex justify-center items-center text-white bg-red-500 px-1 text-sm rounded-md gap-1 absolute top-2 right-2",children:[Math.round(e.avgRating)," ",(0,u.jsx)(l.pHD,{})]}),(0,u.jsx)("div",{className:"image bg-gray-200",children:(0,u.jsx)("img",{className:"h-72 w-64",src:e.productImage,loading:"lazy",alt:"shirt"})}),(0,u.jsxs)("div",{className:"product-detail flex flex-col justify-center items-center mt-3",children:[(0,u.jsx)("h3",{className:"text-xl text-center text-red-500",children:e.name}),(0,u.jsxs)("div",{className:"price flex gap-2 items-center justify-center",children:[(0,u.jsxs)("h4",{children:["\u20b9",e.discountedPrice,"/-"]}),(0,u.jsxs)("h4",{className:"text-gray-500 line-through text-sm",children:["\u20b9",e.originalPrice,"/-"]})]}),(0,u.jsxs)("h4",{className:"text-gray-500 text-center w-full break-words",children:[e.description.slice(0,60),"..."]})]})]},e._id)},e._id)}))})]}):(0,u.jsx)(x.Z,{})})}}}]);
//# sourceMappingURL=645.6bd290b5.chunk.js.map