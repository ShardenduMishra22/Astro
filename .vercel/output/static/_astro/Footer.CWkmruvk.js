import{r as i}from"./index.DhYZZe0J.js";function N(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f={exports:{}},h={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=i,k=Symbol.for("react.element"),T=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,R=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function y(e,r,a){var s,o={},n=null,c=null;a!==void 0&&(n=""+a),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(c=r.ref);for(s in r)I.call(r,s)&&!S.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps,r)o[s]===void 0&&(o[s]=r[s]);return{$$typeof:k,type:e,key:n,ref:c,props:o,_owner:R.current}}h.Fragment=T;h.jsx=y;h.jsxs=y;f.exports=h;var t=f.exports;/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g=(...e)=>e.filter((r,a,s)=>!!r&&s.indexOf(r)===a).join(" ");/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var O={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=i.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:o="",children:n,iconNode:c,...u},x)=>i.createElement("svg",{ref:x,...O,width:r,height:r,stroke:e,strokeWidth:s?Number(a)*24/Number(r):a,className:g("lucide",o),...u},[...c.map(([p,v])=>i.createElement(p,v)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(e,r)=>{const a=i.forwardRef(({className:s,...o},n)=>i.createElement(P,{ref:n,iconNode:r,className:g(`lucide-${C(e)}`,s),...o}));return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=l("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=l("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=l("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=l("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=l("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=l("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);var w={exports:{}},D="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",W=D,q=W;function b(){}function j(){}j.resetWarningCache=b;var $=function(){function e(s,o,n,c,u,x){if(x!==q){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function r(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:j,resetWarningCache:b};return a.PropTypes=a,a};w.exports=$();var H=w.exports;const m=N(H),B=()=>{const e=new Date().getFullYear();return t.jsx("footer",{className:"bg-gray-900 h-[100%] mt-40 text-gray-300 pt-4",children:t.jsx("div",{className:"container mx-auto px-4 mt-10 min-h-[calc(100vh-200px)]",children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx("h2",{id:"typed-element",className:"text-3xl font-bold text-purple-400 w-full min-w-[300px] h-[40px] overflow-hidden"}),t.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[t.jsx(d,{href:"https://leetcode.com/u/ShardenduMishra22/",icon:t.jsx(E,{size:20}),label:"LeetCode",text:"LeetCode"}),t.jsx(d,{href:"https://github.com/ShardenduMishra22",icon:t.jsx(M,{size:20}),label:"GitHub",text:"GitHub"}),t.jsx(d,{href:"https://www.instagram.com/shardendumishra22?igsh=NHAyZWlvODF1cWs0",icon:t.jsx(L,{size:20}),label:"Instagram",text:"Instagram"}),t.jsx(d,{href:"https://x.com/Shardendu_M",icon:t.jsx(F,{size:20}),label:"Twitter",text:"Twitter"})]}),t.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[t.jsx(z,{className:"text-indigo-400",size:24}),t.jsx("p",{className:"text-indigo-400 text-xl",children:"Indian Institute of Information Technology Dharwad"})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("p",{className:"text-xl font-semibold flex items-center",children:["Made with ",t.jsx(A,{className:"inline text-red-500 mx-2",size:24})," by ",t.jsx("strong",{className:"text-indigo-600 px-2",children:" Shardendu Mishra"})]}),t.jsxs("div",{className:"flex items-center space-x-3",children:[t.jsxs("p",{className:"text-lg font-semibold",children:["Made Using",t.jsx("a",{href:"https://github.com/MishraShardendu22/Important-Information/blob/main/AstroKnowledge.md",children:t.jsx("strong",{className:"text-indigo-600 ",children:" Astro.JS"})})]}),t.jsx("img",{src:"https://cdn.sanity.io/images/3do82whm/next/1c2aa4d10fe71c23d7a36f69fc11c419c5f4ac35-1000x667.png?w=960&h=640&fit=clip&auto=format",alt:"Astro.js Logo",className:"h-10 w-10 object-contain rounded-full bg-white p-1"})]})]}),t.jsx("div",{children:t.jsx("div",{className:"flex items-center space-x-3",children:t.jsx("div",{className:"text-center mt-12",children:t.jsxs("p",{className:"text-gray-400 text-sm",children:["© ",e," ",t.jsx("span",{className:"text-purple-400 font-semibold",children:"Shardendu Mishra"}),". All rights reserved."]})})})})]}),t.jsx("div",{className:"w-full h-64 lg:h-full min-h-[300px] rounded-lg overflow-hidden shadow-lg",children:t.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4972.567096217221!2d75.02059907264308!3d15.392850793454533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d3a45986017d%3A0x98a72507dc76b7aa!2sIIIT-Dharwad%20Pond!5e0!3m2!1sen!2sin!4v1727762835442!5m2!1sen!2sin",width:"100%",height:"100%",style:{border:0},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"IIIT Dharwad Map"})})]})})})},d=({href:e,icon:r,label:a,text:s})=>t.jsxs("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"flex items-center text-purple-400 hover:text-yellow-400 transition-colors duration-300 text-lg group","aria-label":a,children:[t.jsx("span",{className:"bg-gray-800 p-2 rounded-full group-hover:bg-purple-700 transition-colors duration-300",children:r}),t.jsx("span",{className:"ml-2 hidden sm:inline",children:s})]});d.propTypes={href:m.string.isRequired,icon:m.node.isRequired,label:m.string.isRequired,text:m.string.isRequired};export{B as default};
