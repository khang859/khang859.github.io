import{S as N,i as P,s as $,e as p,t as M,a as A,b as a,c as x,d as f,n as k,f as K,D as ue,g as V,u as W,h as X,j as Y,k as T,l as j,m as S,o as Q,p as F,q as H,r as q,v as de,w as z,x as J,y as ye,z as Z,A as G,B as ke,C as ee,E as fe,F as xe,G as Ke,H as me,I as pe,J as te,K as D}from"./vendor.87bd3664.js";const Ce=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}};Ce();function Ae(l){let e,n,o,t,s,r,i,c,b,d,u,v,h,_,C,m;return{c(){e=p("nav"),n=p("ul"),o=p("li"),t=p("a"),s=M("Home"),i=A(),c=p("li"),b=p("a"),d=M("About Me"),v=A(),h=p("li"),_=p("a"),C=M("Random Apps"),a(t,"href","/"),a(t,"class",r="px-4 py-2 rounded hover:border-2 hover:border-dashed hover:border-emerald-500 transition-border duration-300 "+(l[0]==="HOME"?l[1]("HOME"):"")),a(o,"class","flex flex-1 text-center justify-center"),a(b,"href","/about"),a(b,"class",u="px-4 py-2 rounded hover:border-2 hover:border-dashed hover:border-emerald-500 transition-border duration-300 "+(l[0]==="ABOUT"?l[1]("ABOUT"):"")),a(c,"class","flex flex-1 text-center justify-center"),a(_,"href","/random-apps"),a(_,"class",m="px-4 py-2 rounded hover:border-2 hover:border-dashed hover:border-emerald-500 transition-border duration-300 "+(l[0]==="RANDOM_APPS"?l[1]("RANDOM_APPS"):"")),a(h,"class","flex flex-1 text-center justify-center"),a(n,"class","flex flex-col sm:flex-row flex-wrap justify-center mx-auto w-full"),a(e,"class","p-5 container mx-auto bg-white rounded my-4 drop-shadow-md")},m(y,w){x(y,e,w),f(e,n),f(n,o),f(o,t),f(t,s),f(n,i),f(n,c),f(c,b),f(b,d),f(n,v),f(n,h),f(h,_),f(_,C)},p(y,[w]){w&1&&r!==(r="px-4 py-2 rounded hover:border-2 hover:border-dashed hover:border-emerald-500 transition-border duration-300 "+(y[0]==="HOME"?y[1]("HOME"):""))&&a(t,"class",r),w&1&&u!==(u="px-4 py-2 rounded hover:border-2 hover:border-dashed hover:border-emerald-500 transition-border duration-300 "+(y[0]==="ABOUT"?y[1]("ABOUT"):""))&&a(b,"class",u),w&1&&m!==(m="px-4 py-2 rounded hover:border-2 hover:border-dashed hover:border-emerald-500 transition-border duration-300 "+(y[0]==="RANDOM_APPS"?y[1]("RANDOM_APPS"):""))&&a(_,"class",m)},i:k,o:k,d(y){y&&K(e)}}}function Oe(l,e,n){let{currentPage:o="HOME"}=e;const t=()=>"border-2 border-solid border-emerald-500";return l.$$set=s=>{"currentPage"in s&&n(0,o=s.currentPage)},[o,t]}class Re extends N{constructor(e){super();P(this,e,Oe,Ae,$,{currentPage:0})}}function Se(l){let e;return{c(){e=p("div"),e.textContent="Home Page Here"},m(n,o){x(n,e,o)},p:k,i:k,o:k,d(n){n&&K(e)}}}class Te extends N{constructor(e){super();P(this,e,null,Se,$,{})}}const I=new ue("lastKnown");I.version(1).stores({lastKnown:"++id, name, lastKnown"});const U=new ue("recipes");U.version(1).stores({recipe:"++id, name, recipe"});const je=l=>({}),ne=l=>({}),Le=l=>({}),le=l=>({});function Me(l){let e,n,o,t,s,r,i,c,b,d,u,v,h,_;const C=l[3].body,m=V(C,l,l[2],le),y=l[3].footer,w=V(y,l,l[2],ne);return{c(){e=p("div"),n=p("div"),o=p("div"),t=A(),s=p("span"),s.textContent="\u200B",r=A(),i=p("div"),c=p("div"),b=p("div"),d=p("div"),m&&m.c(),u=A(),v=p("div"),w&&w.c(),a(o,"class","fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"),a(o,"aria-hidden","true"),a(s,"class","hidden sm:inline-block sm:align-middle sm:h-screen"),a(s,"aria-hidden","true"),a(d,"class","mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"),a(b,"class","sm:flex sm:items-start"),a(c,"class","bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"),a(v,"class","bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row justify-end"),a(i,"data-selector","inner-modal"),a(i,"class","inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"),a(n,"class",h="flex "+(l[1]===!0?"items-start min-h-full":"items-end min-h-screen")+" justify-center pt-4 px-4 pb-20 text-center sm:p-0"),a(e,"class","fixed z-10 inset-0 overflow-y-auto hidden"),a(e,"data-selector",l[0]),a(e,"aria-labelledby","modal-title"),a(e,"role","dialog"),a(e,"aria-modal","true")},m(g,O){x(g,e,O),f(e,n),f(n,o),f(n,t),f(n,s),f(n,r),f(n,i),f(i,c),f(c,b),f(b,d),m&&m.m(d,null),f(i,u),f(i,v),w&&w.m(v,null),_=!0},p(g,[O]){m&&m.p&&(!_||O&4)&&W(m,C,g,g[2],_?Y(C,g[2],O,Le):X(g[2]),le),w&&w.p&&(!_||O&4)&&W(w,y,g,g[2],_?Y(y,g[2],O,je):X(g[2]),ne),(!_||O&2&&h!==(h="flex "+(g[1]===!0?"items-start min-h-full":"items-end min-h-screen")+" justify-center pt-4 px-4 pb-20 text-center sm:p-0"))&&a(n,"class",h),(!_||O&1)&&a(e,"data-selector",g[0])},i(g){_||(T(m,g),T(w,g),_=!0)},o(g){j(m,g),j(w,g),_=!1},d(g){g&&K(e),m&&m.d(g),w&&w.d(g)}}}function Ne(l,e,n){let{$$slots:o={},$$scope:t}=e,{selector:s}=e,{remove:r=!1}=e;return l.$$set=i=>{"selector"in i&&n(0,s=i.selector),"remove"in i&&n(1,r=i.remove),"$$scope"in i&&n(2,t=i.$$scope)},[s,r,t,o]}class Pe extends N{constructor(e){super();P(this,e,Ne,Me,$,{selector:0,remove:1})}}function oe(l,e,n){const o=l.slice();return o[26]=e[n],o}function re(l){let e,n,o;return{c(){e=p("button"),e.textContent="Clear Search",a(e,"class","items-center w-full mt-4 sm:mt-0 flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-500 text-base font-medium text-white hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-1/3 sm:text-sm")},m(t,s){x(t,e,s),n||(o=S(e,"click",l[15]),n=!0)},p:k,d(t){t&&K(e),n=!1,o()}}}function $e(l){return{c:k,m:k,p:k,d:k}}function Ee(l){let e,n=l[25],o=[];for(let t=0;t<n.length;t+=1)o[t]=se(oe(l,n,t));return{c(){e=p("ul");for(let t=0;t<o.length;t+=1)o[t].c();a(e,"class","p-4 mt-10 container flex flex-col list-none")},m(t,s){x(t,e,s);for(let r=0;r<o.length;r+=1)o[r].m(e,null)},p(t,s){if(s&3680){n=t[25];let r;for(r=0;r<n.length;r+=1){const i=oe(t,n,r);o[r]?o[r].p(i,s):(o[r]=se(i),o[r].c(),o[r].m(e,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=n.length}},d(t){t&&K(e),fe(o,t)}}}function Be(l){let e,n,o;function t(){return l[19](l[26])}return{c(){e=p("button"),e.textContent="Remove",a(e,"class","mr-4 bg-red-700 hover:bg-red-600 px-4 py-2 text-white rounded transition-colors")},m(s,r){x(s,e,r),n||(o=S(e,"click",t),n=!0)},p(s,r){l=s},d(s){s&&K(e),n=!1,o()}}}function De(l){let e,n,o,t,s;function r(){return l[18](l[26])}return{c(){e=p("button"),n=M("Confirm Removal"),a(e,"data-confirm-button",o=l[26].id),a(e,"class","disabled:bg-slate-500 mr-4 bg-red-700 hover:bg-red-600 px-4 py-2 text-white rounded transition-colors")},m(i,c){x(i,e,c),f(e,n),t||(s=S(e,"click",r),t=!0)},p(i,c){l=i,c&64&&o!==(o=l[26].id)&&a(e,"data-confirm-button",o)},d(i){i&&K(e),t=!1,s()}}}function se(l){let e,n,o,t=l[26].name+"",s,r,i,c=ee.markdown.toHTML(l[26].recipe)+"",b,d,u,v,h,_,C,m;function y(){return l[17](l[26])}function w(L,E){return L[5]==L[26].id?De:Be}let g=w(l),O=g(l);return{c(){e=p("li"),n=p("div"),o=p("h3"),s=M(t),r=A(),i=p("div"),b=A(),d=p("div"),u=p("button"),u.textContent="Edit",v=A(),O.c(),h=A(),a(o,"class","flex-1 mb-4 font-semibold text-lg"),a(i,"class","recipe-styles flex-1 mb-4 md:ml-4"),a(u,"class","mr-4 bg-sky-700 hover:bg-sky-600 px-4 py-2 text-white rounded transition-colors"),a(d,"class","flex justify-end"),a(n,"class","p-4 container flex justify-center flex-col bg-white mt-8 drop-shadow-md border-2 border-slate-50 border-solid rounded mb-4 "),a(e,"data-list-item-selector",_=l[26].id)},m(L,E){x(L,e,E),f(e,n),f(n,o),f(o,s),f(n,r),f(n,i),i.innerHTML=c,f(n,b),f(n,d),f(d,u),f(d,v),O.m(d,null),f(e,h),C||(m=S(u,"click",y),C=!0)},p(L,E){l=L,E&64&&t!==(t=l[26].name+"")&&G(s,t),E&64&&c!==(c=ee.markdown.toHTML(l[26].recipe)+"")&&(i.innerHTML=c),g===(g=w(l))&&O?O.p(l,E):(O.d(1),O=g(l),O&&(O.c(),O.m(d,null))),E&64&&_!==(_=l[26].id)&&a(e,"data-list-item-selector",_)},d(L){L&&K(e),O.d(),C=!1,m()}}}function He(l){return{c:k,m:k,p:k,d:k}}function Ie(l){let e,n,o,t,s,r,i,c,b,d,u,v,h;return{c(){e=p("div"),n=p("div"),o=p("div"),t=p("label"),t.textContent="Recipe Name:",s=A(),r=p("input"),i=A(),c=p("div"),b=p("label"),b.textContent="Recipe:",d=A(),u=p("textarea"),a(t,"for","recipeName"),a(t,"class","mb-2"),a(r,"id","recipeName"),a(r,"type","text"),a(r,"placeholder","Enter Recipe Name"),a(r,"class","p-2 rounded w-full border-solid border-2"),Z(r,"border-red-500",l[4]),a(o,"class","p-4 flex flex-col"),a(b,"for","recipeDescription"),a(b,"class","mb-2"),a(u,"rows","10"),a(u,"cols","50"),a(u,"id","recipeDescription"),a(u,"placeholder","Enter Recipe"),a(u,"class","p-2 rounded w-full border-solid border-2"),a(c,"class","p-4 flex justify-start flex-col"),a(e,"slot","body")},m(_,C){x(_,e,C),f(e,n),f(n,o),f(o,t),f(o,s),f(o,r),H(r,l[0]),f(n,i),f(n,c),f(c,b),f(c,d),f(c,u),H(u,l[1]),v||(h=[S(r,"input",l[20]),S(u,"input",l[21])],v=!0)},p(_,C){C&1&&r.value!==_[0]&&H(r,_[0]),C&16&&Z(r,"border-red-500",_[4]),C&2&&H(u,_[1])},d(_){_&&K(e),v=!1,J(h)}}}function Ue(l){let e,n,o=l[2]?"Update":"Create",t,s,r,i,c;return{c(){e=p("div"),n=p("button"),t=M(o),s=A(),r=p("button"),r.textContent="Cancel",a(n,"type","button"),a(n,"class","mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-emerald-500 text-base font-medium text-white hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"),a(r,"type","button"),a(r,"class","mt-4 md:mt-0 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"),a(e,"slot","footer")},m(b,d){x(b,e,d),f(e,n),f(n,t),f(e,s),f(e,r),i||(c=[S(n,"click",l[8]),S(r,"click",l[7])],i=!0)},p(b,d){d&4&&o!==(o=b[2]?"Update":"Create")&&G(t,o)},d(b){b&&K(e),i=!1,J(c)}}}function Fe(l){let e,n,o,t,s,r,i,c,b,d,u,v,h,_,C,m=l[3]&&re(l),y={ctx:l,current:null,token:null,hasCatch:!1,pending:He,then:Ee,catch:$e,value:25};return Q(d=l[6],y),v=new Pe({props:{selector:"recipe-modal",$$slots:{footer:[Ue],body:[Ie]},$$scope:{ctx:l}}}),{c(){e=p("section"),n=p("button"),n.textContent="+ Add new recipe",o=A(),t=p("div"),s=p("label"),s.textContent="Search:",r=A(),i=p("input"),c=A(),m&&m.c(),b=A(),y.block.c(),u=A(),F(v.$$.fragment),a(n,"class","mt-4 md:mt-0 small-btn flex-1 md:ml-4 drop-shadow-sm bg-emerald-500 text-stone-50 px-4 py-2 rounded transition-colors hover:drop-shadow-md duration-250 text-white "),a(s,"for","search1"),a(s,"class","invisible w-0"),a(i,"id","search1"),a(i,"type","text"),a(i,"placeholder","Search"),a(i,"class","p-2 rounded w-full sm:w-3/4 border-solid border-2"),a(t,"class","flex justify-center flex-col align-middle mt-4 w-3/4 sm:flex-row")},m(w,g){x(w,e,g),f(e,n),x(w,o,g),x(w,t,g),f(t,s),f(t,r),f(t,i),H(i,l[3]),f(t,c),m&&m.m(t,null),x(w,b,g),y.block.m(w,y.anchor=g),y.mount=()=>u.parentNode,y.anchor=u,x(w,u,g),q(v,w,g),h=!0,_||(C=[S(n,"click",l[12]),S(i,"keyup",l[13]),S(i,"keydown",l[14]),S(i,"input",l[16])],_=!0)},p(w,[g]){l=w,g&8&&i.value!==l[3]&&H(i,l[3]),l[3]?m?m.p(l,g):(m=re(l),m.c(),m.m(t,null)):m&&(m.d(1),m=null),y.ctx=l,g&64&&d!==(d=l[6])&&Q(d,y)||de(y,l,g);const O={};g&536870935&&(O.$$scope={dirty:g,ctx:l}),v.$set(O)},i(w){h||(T(v.$$.fragment,w),h=!0)},o(w){j(v.$$.fragment,w),h=!1},d(w){w&&K(e),w&&K(o),w&&K(t),m&&m.d(),w&&K(b),y.block.d(w),y.token=null,y=null,w&&K(u),z(v,w),_=!1,J(C)}}}let qe=500;function ze(l,e,n){let o,t,s,r,i=!1,c;const b=async()=>{const R=await U.recipe.reverse().toArray();if(r){const B={keys:["name","recipe"]};return new xe(R,B).search(r).map(ve=>ve.item)}return R};let d=b();const u=()=>{document.querySelector('[data-selector="recipe-modal"]').classList.toggle("hidden")},v=async()=>{if(o===""||!o){n(4,i=!0);return}const R={name:o,recipe:t};s!==void 0?(await U.recipe.update(s,R),n(2,s=void 0)):await U.recipe.add(R),n(6,d=b()),u()},h=async R=>{const B=await U.recipe.where(R).toArray();if(B.length!==1)throw new Error("Something went wrong.");n(0,o=B[0].name),n(1,t=B[0].recipe),n(2,s=B[0].id),u()},_=R=>{n(5,c=R)},C=async R=>{const B=await U.recipe.where(R).toArray();if(B.length!==1)throw new Error("Something went wrong.");await U.recipe.delete(B[0].id),n(6,d=b()),n(5,c=void 0)},m=()=>{n(0,o=""),n(1,t=""),n(2,s=void 0),u()};let y;const w=()=>{clearTimeout(y),y=setTimeout(O,qe)},g=()=>{clearTimeout(y)},O=()=>{n(6,d=b())},L=()=>{n(3,r=void 0),n(6,d=b())};ye(async()=>{await ke();const R=document.querySelector(`[data-confirm-button="${c}"]`);R&&(R.disabled=!0,setTimeout(()=>{R.disabled=!1},1e3))});function E(){r=this.value,n(3,r)}const be=R=>{h(R)},he=R=>{C(R)},_e=R=>{_(R.id)};function we(){o=this.value,n(0,o)}function ge(){t=this.value,n(1,t)}return l.$$.update=()=>{l.$$.dirty&1&&o!==""&&n(4,i=!1)},[o,t,s,r,i,c,d,u,v,h,_,C,m,w,g,L,E,be,he,_e,we,ge]}class Ge extends N{constructor(e){super();P(this,e,ze,Fe,$,{})}}function Je(l){let e,n,o,t,s;return{c(){e=p("button"),n=M(l[2]),a(e,"class",o="mt-4 md:mt-0 small-btn flex-1 md:ml-4 drop-shadow-sm bg-white text-stone-50 px-4 py-2 rounded transition-colors hover:drop-shadow-md duration-250 "+l[3]+" svelte-ubowvh")},m(r,i){x(r,e,i),f(e,n),t||(s=S(e,"click",l[4]),t=!0)},p(r,[i]){i&4&&G(n,r[2]),i&8&&o!==(o="mt-4 md:mt-0 small-btn flex-1 md:ml-4 drop-shadow-sm bg-white text-stone-50 px-4 py-2 rounded transition-colors hover:drop-shadow-md duration-250 "+r[3]+" svelte-ubowvh")&&a(e,"class",o)},i:k,o:k,d(r){r&&K(e),t=!1,s()}}}function Qe(l,e,n){let o,{onClick:t}=e,{lastKnown:s}=e,{label:r}=e;const i=()=>t(s);return l.$$set=c=>{"onClick"in c&&n(0,t=c.onClick),"lastKnown"in c&&n(1,s=c.lastKnown),"label"in c&&n(2,r=c.label)},l.$$.update=()=>{l.$$.dirty&4&&n(3,o=r=="Refresh"?"bg-emerald-500 hover:bg-emerald-800":"bg-red-500 hover:bg-red-800")},[t,s,r,o,i]}class ie extends N{constructor(e){super();P(this,e,Qe,Je,$,{onClick:0,lastKnown:1,label:2})}}function Ve(l){let e,n;const o=l[1].default,t=V(o,l,l[0],null);return{c(){e=p("li"),t&&t.c(),a(e,"class","p-4 container flex justify-center flex-col bg-white drop-shadow-md border-2 border-slate-50 border-solid md:flex-row rounded mb-4 ")},m(s,r){x(s,e,r),t&&t.m(e,null),n=!0},p(s,[r]){t&&t.p&&(!n||r&1)&&W(t,o,s,s[0],n?Y(o,s[0],r,null):X(s[0]),null)},i(s){n||(T(t,s),n=!0)},o(s){j(t,s),n=!1},d(s){s&&K(e),t&&t.d(s)}}}function We(l,e,n){let{$$slots:o={},$$scope:t}=e;return l.$$set=s=>{"$$scope"in s&&n(0,t=s.$$scope)},[t,o]}class Xe extends N{constructor(e){super();P(this,e,We,Ve,$,{})}}function ae(l,e,n){const o=l.slice();return o[11]=e[n],o[13]=n,o}function Ye(l){return{c:k,m:k,p:k,i:k,o:k,d:k}}function Ze(l){let e,n,o=l[10],t=[];for(let r=0;r<o.length;r+=1)t[r]=ce(ae(l,o,r));const s=r=>j(t[r],1,1,()=>{t[r]=null});return{c(){e=p("ul");for(let r=0;r<t.length;r+=1)t[r].c();a(e,"class","p-4 mt-10 container flex flex-col items-center ")},m(r,i){x(r,e,i);for(let c=0;c<t.length;c+=1)t[c].m(e,null);n=!0},p(r,i){if(i&42){o=r[10];let c;for(c=0;c<o.length;c+=1){const b=ae(r,o,c);t[c]?(t[c].p(b,i),T(t[c],1)):(t[c]=ce(b),t[c].c(),T(t[c],1),t[c].m(e,null))}for(me(),c=o.length;c<t.length;c+=1)s(c);pe()}},i(r){if(!n){for(let i=0;i<o.length;i+=1)T(t[i]);n=!0}},o(r){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)j(t[i]);n=!1},d(r){r&&K(e),fe(t,r)}}}function et(l){let e,n=l[11].name+"",o,t,s,r,i=l[11].lastKnown+"",c,b,d,u,v,h,_,C;return u=new ie({props:{onClick:l[3],label:"Refresh",lastKnown:l[11].lastKnown}}),h=new ie({props:{onClick:l[5],label:"Delete",lastKnown:l[11].lastKnown}}),{c(){e=p("h3"),o=M(n),t=A(),s=p("span"),r=M("Last Known: "),c=M(i),b=A(),d=p("div"),F(u.$$.fragment),v=A(),F(h.$$.fragment),_=A(),a(e,"class","flex-1 mb-4 font-semibold text-lg"),a(s,"class","flex-1 mb-4 md:ml-4"),a(d,"class","container flex-1 flex flex-col md:flex-row")},m(m,y){x(m,e,y),f(e,o),x(m,t,y),x(m,s,y),f(s,r),f(s,c),x(m,b,y),x(m,d,y),q(u,d,null),f(d,v),q(h,d,null),x(m,_,y),C=!0},p(m,y){(!C||y&2)&&n!==(n=m[11].name+"")&&G(o,n),(!C||y&2)&&i!==(i=m[11].lastKnown+"")&&G(c,i);const w={};y&2&&(w.lastKnown=m[11].lastKnown),u.$set(w);const g={};y&2&&(g.lastKnown=m[11].lastKnown),h.$set(g)},i(m){C||(T(u.$$.fragment,m),T(h.$$.fragment,m),C=!0)},o(m){j(u.$$.fragment,m),j(h.$$.fragment,m),C=!1},d(m){m&&K(e),m&&K(t),m&&K(s),m&&K(b),m&&K(d),z(u),z(h),m&&K(_)}}}function ce(l){let e,n;return e=new Xe({props:{$$slots:{default:[et]},$$scope:{ctx:l}}}),{c(){F(e.$$.fragment)},m(o,t){q(e,o,t),n=!0},p(o,t){const s={};t&16386&&(s.$$scope={dirty:t,ctx:o}),e.$set(s)},i(o){n||(T(e.$$.fragment,o),n=!0)},o(o){j(e.$$.fragment,o),n=!1},d(o){z(e,o)}}}function tt(l){return{c:k,m:k,p:k,i:k,o:k,d:k}}function nt(l){let e,n,o,t,s,r,i,c,b,d,u={ctx:l,current:null,token:null,hasCatch:!1,pending:tt,then:Ze,catch:Ye,value:10,blocks:[,,,]};return Q(i=l[1],u),{c(){e=p("div"),n=p("input"),o=A(),t=p("button"),t.textContent="Create",s=A(),r=Ke(),u.block.c(),a(n,"class","px-4 py-2"),a(n,"type","text"),a(n,"placeholder","New item name"),a(t,"class","ml-4 drop-shadow-sm bg-white px-4 py-2 rounded transition-colors hover:bg-emerald-500 hover:text-stone-50 hover:drop-shadow-md duration-250 "),a(e,"class","container flex justify-center w-100")},m(v,h){x(v,e,h),f(e,n),H(n,l[0]),f(e,o),f(e,t),x(v,s,h),x(v,r,h),u.block.m(v,u.anchor=h),u.mount=()=>r.parentNode,u.anchor=r,c=!0,b||(d=[S(n,"input",l[6]),S(n,"keyup",l[4]),S(t,"click",l[2])],b=!0)},p(v,[h]){l=v,h&1&&n.value!==l[0]&&H(n,l[0]),u.ctx=l,h&2&&i!==(i=l[1])&&Q(i,u)||de(u,l,h)},i(v){c||(T(u.block),c=!0)},o(v){for(let h=0;h<3;h+=1){const _=u.blocks[h];j(_)}c=!1},d(v){v&&K(e),v&&K(s),v&&K(r),u.block.d(v),u.token=null,u=null,b=!1,J(d)}}}function lt(l,e,n){let o,t;const s={dateStyle:"long",timeStyle:"medium"},r=()=>{const h={name:t,lastKnown:Intl.DateTimeFormat("en-US",s).format(new Date)};try{I.lastKnown.add(h),n(1,o=u())}catch(_){console.log(_)}},i=()=>r(),c=async h=>{const _=await I.lastKnown.where({lastKnown:h}).toArray();if(_.length!==1)throw new Error("Something went wrong.");const C=Intl.DateTimeFormat("en-US",s).format(new Date);await I.lastKnown.update(_[0].id,{lastKnown:C}),n(1,o=u())},b=h=>{h.keyCode===13&&r()},d=async h=>{const _=await I.lastKnown.where({lastKnown:h}).toArray();if(_.length!==1)throw new Error("Something went wrong.");await I.lastKnown.delete(_[0].id),n(1,o=u())},u=async()=>await I.lastKnown.toArray();function v(){t=this.value,n(0,t)}return n(1,o=u()),[t,o,i,c,b,d,v]}class ot extends N{constructor(e){super();P(this,e,lt,nt,$,{})}}function rt(l){let e;return{c(){e=p("div"),e.textContent="About me"},m(n,o){x(n,e,o)},p:k,i:k,o:k,d(n){n&&K(e)}}}class st extends N{constructor(e){super();P(this,e,null,rt,$,{})}}function it(l){let e,n,o,t,s,r,i,c;return{c(){e=p("div"),n=p("div"),o=p("a"),o.textContent="Last Known",t=A(),s=p("div"),r=p("a"),r.textContent="Recipes",a(o,"href","/app/last-known"),a(n,"class","flex flex-1 justify-center"),a(r,"href","/app/recipes"),a(s,"class","flex flex-1 justify-center"),a(e,"class","flex w-full justify-center mx-auto")},m(b,d){x(b,e,d),f(e,n),f(n,o),f(e,t),f(e,s),f(s,r),i||(c=[S(o,"click",te(l[0])),S(r,"click",te(l[1]))],i=!0)},p:k,i:k,o:k,d(b){b&&K(e),i=!1,J(c)}}}function at(l){return[()=>{D("/app/last-known")},()=>{D("/app/recipes")}]}class ct extends N{constructor(e){super();P(this,e,at,it,$,{})}}function ut(l){let e,n,o,t,s,r,i;e=new Re({props:{currentPage:l[1]}});var c=l[0];function b(d){return{}}return c&&(t=new c(b())),{c(){F(e.$$.fragment),n=A(),o=p("main"),t&&F(t.$$.fragment),s=A(),r=p("footer"),r.textContent="Made with love by Khang Nguyen",a(o,"class","container flex flex-col items-center mx-auto bg-white rounded p-4 drop-shadow-md min-h-screen"),a(r,"class","flex mx-auto justify-center p-5 container mx-auto my-4 bg-white rounded drop-shadow-md")},m(d,u){q(e,d,u),x(d,n,u),x(d,o,u),t&&q(t,o,null),x(d,s,u),x(d,r,u),i=!0},p(d,[u]){const v={};if(u&2&&(v.currentPage=d[1]),e.$set(v),c!==(c=d[0])){if(t){me();const h=t;j(h.$$.fragment,1,0,()=>{z(h,1)}),pe()}c?(t=new c(b()),F(t.$$.fragment),T(t.$$.fragment,1),q(t,o,null)):t=null}},i(d){i||(T(e.$$.fragment,d),t&&T(t.$$.fragment,d),i=!0)},o(d){j(e.$$.fragment,d),t&&j(t.$$.fragment,d),i=!1},d(d){z(e,d),d&&K(n),d&&K(o),t&&z(t),d&&K(s),d&&K(r)}}}function dt(l,e,n){let o,t="HOME";return D("/",()=>{n(0,o=Te),n(1,t="HOME")}),D("/about",()=>{n(0,o=st),n(1,t="ABOUT")}),D("/random-apps",()=>{n(0,o=ct),n(1,t="RANDOM_APPS")}),D("/app/recipes",()=>n(0,o=Ge)),D("/app/last-known",()=>n(0,o=ot)),D.start(),[o,t]}class ft extends N{constructor(e){super();P(this,e,dt,ut,$,{})}}new ft({target:document.getElementById("root")});
