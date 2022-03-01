import{S as N,i as L,s as D,e as p,t as j,a as C,b as a,c as k,d as m,n as K,f as x,D as ue,g as V,u as W,h as X,j as Y,k as P,l as M,m as S,o as Q,p as F,q as I,r as q,v as de,w as z,x as G,y as ke,z as Z,A as J,B as xe,C as ee,E as fe,F as Ke,G as Ae,H as me,I as pe,J as te,K as H}from"./vendor.87bd3664.js";const Ce=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}};Ce();function Oe(o){let e,n,l,t,s,r,i,c,f,u,d,v,h,_,A,b;return{c(){e=p("nav"),n=p("ul"),l=p("li"),t=p("a"),s=j("Home"),i=C(),c=p("li"),f=p("a"),u=j("About Me"),v=C(),h=p("li"),_=p("a"),A=j("Random Apps"),a(t,"href","/"),a(t,"class",r="px-4 py-2 rounded hover:border-2 hover:border-dashed hover:border-emerald-500 transition-border duration-300 "+(o[0]==="HOME"?o[1]("HOME"):"")),a(l,"class","flex flex-1 text-center justify-center"),a(f,"href","/about"),a(f,"class",d="px-4 py-2 rounded hover:border-2 hover:border-dashed hover:border-emerald-500 transition-border duration-300 "+(o[0]==="ABOUT"?o[1]("ABOUT"):"")),a(c,"class","flex flex-1 text-center justify-center"),a(_,"href","/random-apps"),a(_,"class",b="px-4 py-2 rounded hover:border-2 hover:border-dashed hover:border-emerald-500 transition-border duration-300 "+(o[0]==="RANDOM_APPS"?o[1]("RANDOM_APPS"):"")),a(h,"class","flex flex-1 text-center justify-center"),a(n,"class","flex flex-col sm:flex-row flex-wrap justify-center mx-auto w-full"),a(e,"class","p-5 container mx-auto bg-white rounded my-4 drop-shadow-md")},m(y,w){k(y,e,w),m(e,n),m(n,l),m(l,t),m(t,s),m(n,i),m(n,c),m(c,f),m(f,u),m(n,v),m(n,h),m(h,_),m(_,A)},p(y,[w]){w&1&&r!==(r="px-4 py-2 rounded hover:border-2 hover:border-dashed hover:border-emerald-500 transition-border duration-300 "+(y[0]==="HOME"?y[1]("HOME"):""))&&a(t,"class",r),w&1&&d!==(d="px-4 py-2 rounded hover:border-2 hover:border-dashed hover:border-emerald-500 transition-border duration-300 "+(y[0]==="ABOUT"?y[1]("ABOUT"):""))&&a(f,"class",d),w&1&&b!==(b="px-4 py-2 rounded hover:border-2 hover:border-dashed hover:border-emerald-500 transition-border duration-300 "+(y[0]==="RANDOM_APPS"?y[1]("RANDOM_APPS"):""))&&a(_,"class",b)},i:K,o:K,d(y){y&&x(e)}}}function Re(o,e,n){let{currentPage:l="HOME"}=e;const t=()=>"border-2 border-solid border-emerald-500";return o.$$set=s=>{"currentPage"in s&&n(0,l=s.currentPage)},[l,t]}class Se extends N{constructor(e){super();L(this,e,Re,Oe,D,{currentPage:0})}}function Pe(o){let e;return{c(){e=p("div"),e.textContent="Home Page Here"},m(n,l){k(n,e,l)},p:K,i:K,o:K,d(n){n&&x(e)}}}class Me extends N{constructor(e){super();L(this,e,null,Pe,D,{})}}const $=new ue("lastKnown");$.version(1).stores({lastKnown:"++id, name, lastKnown"});const U=new ue("recipes");U.version(1).stores({recipe:"++id, name, recipe"});const Te=o=>({}),ne=o=>({}),je=o=>({}),oe=o=>({});function Ne(o){let e,n,l,t,s,r,i,c,f,u,d,v,h,_;const A=o[3].body,b=V(A,o,o[2],oe),y=o[3].footer,w=V(y,o,o[2],ne);return{c(){e=p("div"),n=p("div"),l=p("div"),t=C(),s=p("span"),s.textContent="\u200B",r=C(),i=p("div"),c=p("div"),f=p("div"),u=p("div"),b&&b.c(),d=C(),v=p("div"),w&&w.c(),a(l,"class","fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"),a(l,"aria-hidden","true"),a(s,"class","hidden sm:inline-block sm:align-middle sm:h-screen"),a(s,"aria-hidden","true"),a(u,"class","mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"),a(f,"class","sm:flex sm:items-start"),a(c,"class","bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"),a(v,"class","bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row justify-end"),a(i,"data-selector","inner-modal"),a(i,"class","inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"),a(n,"class",h="flex "+(o[1]===!0?"items-start min-h-full":"items-end min-h-screen")+" justify-center pt-4 px-4 pb-20 text-center sm:p-0"),a(e,"class","fixed z-10 inset-0 overflow-y-auto hidden"),a(e,"data-selector",o[0]),a(e,"aria-labelledby","modal-title"),a(e,"role","dialog"),a(e,"aria-modal","true")},m(g,O){k(g,e,O),m(e,n),m(n,l),m(n,t),m(n,s),m(n,r),m(n,i),m(i,c),m(c,f),m(f,u),b&&b.m(u,null),m(i,d),m(i,v),w&&w.m(v,null),_=!0},p(g,[O]){b&&b.p&&(!_||O&4)&&W(b,A,g,g[2],_?Y(A,g[2],O,je):X(g[2]),oe),w&&w.p&&(!_||O&4)&&W(w,y,g,g[2],_?Y(y,g[2],O,Te):X(g[2]),ne),(!_||O&2&&h!==(h="flex "+(g[1]===!0?"items-start min-h-full":"items-end min-h-screen")+" justify-center pt-4 px-4 pb-20 text-center sm:p-0"))&&a(n,"class",h),(!_||O&1)&&a(e,"data-selector",g[0])},i(g){_||(P(b,g),P(w,g),_=!0)},o(g){M(b,g),M(w,g),_=!1},d(g){g&&x(e),b&&b.d(g),w&&w.d(g)}}}function Le(o,e,n){let{$$slots:l={},$$scope:t}=e,{selector:s}=e,{remove:r=!1}=e;return o.$$set=i=>{"selector"in i&&n(0,s=i.selector),"remove"in i&&n(1,r=i.remove),"$$scope"in i&&n(2,t=i.$$scope)},[s,r,t,l]}class De extends N{constructor(e){super();L(this,e,Le,Ne,D,{selector:0,remove:1})}}function le(o,e,n){const l=o.slice();return l[27]=e[n],l}function re(o){let e,n,l;return{c(){e=p("button"),e.textContent="Clear Search",a(e,"class","items-center w-full mt-4 sm:mt-0 flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-500 text-base font-medium text-white hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-1/3 sm:text-sm")},m(t,s){k(t,e,s),n||(l=S(e,"click",o[15]),n=!0)},p:K,d(t){t&&x(e),n=!1,l()}}}function Ee(o){return{c:K,m:K,p:K,d:K}}function Be(o){let e,n=o[26],l=[];for(let t=0;t<n.length;t+=1)l[t]=se(le(o,n,t));return{c(){e=p("ul");for(let t=0;t<l.length;t+=1)l[t].c();a(e,"class","p-4 mt-10 container flex flex-col list-none")},m(t,s){k(t,e,s);for(let r=0;r<l.length;r+=1)l[r].m(e,null)},p(t,s){if(s&3680){n=t[26];let r;for(r=0;r<n.length;r+=1){const i=le(t,n,r);l[r]?l[r].p(i,s):(l[r]=se(i),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(t){t&&x(e),fe(l,t)}}}function He(o){let e,n,l;function t(){return o[20](o[27])}return{c(){e=p("button"),e.textContent="Remove",a(e,"class","mr-4 bg-red-700 hover:bg-red-600 px-4 py-2 text-white rounded transition-colors")},m(s,r){k(s,e,r),n||(l=S(e,"click",t),n=!0)},p(s,r){o=s},d(s){s&&x(e),n=!1,l()}}}function Ie(o){let e,n,l,t,s,r,i;function c(){return o[19](o[27])}return{c(){e=p("button"),e.textContent="Cancel",n=C(),l=p("button"),t=j("Confirm Removal"),a(e,"class","mr-4 bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-white rounded transition-colors"),a(l,"data-confirm-button",s=o[27].id),a(l,"class","disabled:bg-slate-500 mr-4 bg-red-700 hover:bg-red-600 px-4 py-2 text-white rounded transition-colors")},m(f,u){k(f,e,u),k(f,n,u),k(f,l,u),m(l,t),r||(i=[S(e,"click",o[18]),S(l,"click",c)],r=!0)},p(f,u){o=f,u&64&&s!==(s=o[27].id)&&a(l,"data-confirm-button",s)},d(f){f&&x(e),f&&x(n),f&&x(l),r=!1,G(i)}}}function se(o){let e,n,l,t=o[27].name+"",s,r,i,c=ee.markdown.toHTML(o[27].recipe)+"",f,u,d,v,h,_,A,b;function y(){return o[17](o[27])}function w(T,E){return T[5]==T[27].id?Ie:He}let g=w(o),O=g(o);return{c(){e=p("li"),n=p("div"),l=p("h3"),s=j(t),r=C(),i=p("div"),f=C(),u=p("div"),d=p("button"),d.textContent="Edit",v=C(),O.c(),h=C(),a(l,"class","flex-1 mb-4 font-semibold text-lg"),a(i,"class","recipe-styles flex-1 mb-4 md:ml-4"),a(d,"class","mr-4 bg-sky-700 hover:bg-sky-600 px-4 py-2 text-white rounded transition-colors"),a(u,"class","flex justify-end"),a(n,"class","p-4 container flex justify-center flex-col bg-white mt-8 drop-shadow-md border-2 border-slate-50 border-solid rounded mb-4 "),a(e,"data-list-item-selector",_=o[27].id)},m(T,E){k(T,e,E),m(e,n),m(n,l),m(l,s),m(n,r),m(n,i),i.innerHTML=c,m(n,f),m(n,u),m(u,d),m(u,v),O.m(u,null),m(e,h),A||(b=S(d,"click",y),A=!0)},p(T,E){o=T,E&64&&t!==(t=o[27].name+"")&&J(s,t),E&64&&c!==(c=ee.markdown.toHTML(o[27].recipe)+"")&&(i.innerHTML=c),g===(g=w(o))&&O?O.p(o,E):(O.d(1),O=g(o),O&&(O.c(),O.m(u,null))),E&64&&_!==(_=o[27].id)&&a(e,"data-list-item-selector",_)},d(T){T&&x(e),O.d(),A=!1,b()}}}function $e(o){return{c:K,m:K,p:K,d:K}}function Ue(o){let e,n,l,t,s,r,i,c,f,u,d,v,h;return{c(){e=p("div"),n=p("div"),l=p("div"),t=p("label"),t.textContent="Recipe Name:",s=C(),r=p("input"),i=C(),c=p("div"),f=p("label"),f.textContent="Recipe:",u=C(),d=p("textarea"),a(t,"for","recipeName"),a(t,"class","mb-2"),a(r,"id","recipeName"),a(r,"type","text"),a(r,"placeholder","Enter Recipe Name"),a(r,"class","p-2 rounded w-full border-solid border-2"),Z(r,"border-red-500",o[4]),a(l,"class","p-4 flex flex-col"),a(f,"for","recipeDescription"),a(f,"class","mb-2"),a(d,"rows","10"),a(d,"cols","50"),a(d,"id","recipeDescription"),a(d,"placeholder","Enter Recipe"),a(d,"class","p-2 rounded w-full border-solid border-2"),a(c,"class","p-4 flex justify-start flex-col"),a(e,"slot","body")},m(_,A){k(_,e,A),m(e,n),m(n,l),m(l,t),m(l,s),m(l,r),I(r,o[0]),m(n,i),m(n,c),m(c,f),m(c,u),m(c,d),I(d,o[1]),v||(h=[S(r,"input",o[21]),S(d,"input",o[22])],v=!0)},p(_,A){A&1&&r.value!==_[0]&&I(r,_[0]),A&16&&Z(r,"border-red-500",_[4]),A&2&&I(d,_[1])},d(_){_&&x(e),v=!1,G(h)}}}function Fe(o){let e,n,l=o[2]?"Update":"Create",t,s,r,i,c;return{c(){e=p("div"),n=p("button"),t=j(l),s=C(),r=p("button"),r.textContent="Cancel",a(n,"type","button"),a(n,"class","mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-emerald-500 text-base font-medium text-white hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"),a(r,"type","button"),a(r,"class","mt-4 md:mt-0 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"),a(e,"slot","footer")},m(f,u){k(f,e,u),m(e,n),m(n,t),m(e,s),m(e,r),i||(c=[S(n,"click",o[8]),S(r,"click",o[7])],i=!0)},p(f,u){u&4&&l!==(l=f[2]?"Update":"Create")&&J(t,l)},d(f){f&&x(e),i=!1,G(c)}}}function qe(o){let e,n,l,t,s,r,i,c,f,u,d,v,h,_,A,b=o[3]&&re(o),y={ctx:o,current:null,token:null,hasCatch:!1,pending:$e,then:Be,catch:Ee,value:26};return Q(u=o[6],y),v=new De({props:{selector:"recipe-modal",$$slots:{footer:[Fe],body:[Ue]},$$scope:{ctx:o}}}),{c(){e=p("section"),n=p("button"),n.textContent="+ Add new recipe",l=C(),t=p("div"),s=p("label"),s.textContent="Search:",r=C(),i=p("input"),c=C(),b&&b.c(),f=C(),y.block.c(),d=C(),F(v.$$.fragment),a(n,"class","mt-4 md:mt-0 small-btn flex-1 md:ml-4 drop-shadow-sm bg-emerald-500 text-stone-50 px-4 py-2 rounded transition-colors hover:drop-shadow-md duration-250 text-white "),a(s,"for","search1"),a(s,"class","invisible w-0"),a(i,"id","search1"),a(i,"type","text"),a(i,"placeholder","Search"),a(i,"class","p-2 rounded w-full sm:w-3/4 border-solid border-2"),a(t,"class","flex justify-center flex-col align-middle mt-4 w-3/4 sm:flex-row")},m(w,g){k(w,e,g),m(e,n),k(w,l,g),k(w,t,g),m(t,s),m(t,r),m(t,i),I(i,o[3]),m(t,c),b&&b.m(t,null),k(w,f,g),y.block.m(w,y.anchor=g),y.mount=()=>d.parentNode,y.anchor=d,k(w,d,g),q(v,w,g),h=!0,_||(A=[S(n,"click",o[12]),S(i,"keyup",o[13]),S(i,"keydown",o[14]),S(i,"input",o[16])],_=!0)},p(w,[g]){o=w,g&8&&i.value!==o[3]&&I(i,o[3]),o[3]?b?b.p(o,g):(b=re(o),b.c(),b.m(t,null)):b&&(b.d(1),b=null),y.ctx=o,g&64&&u!==(u=o[6])&&Q(u,y)||de(y,o,g);const O={};g&1073741847&&(O.$$scope={dirty:g,ctx:o}),v.$set(O)},i(w){h||(P(v.$$.fragment,w),h=!0)},o(w){M(v.$$.fragment,w),h=!1},d(w){w&&x(e),w&&x(l),w&&x(t),b&&b.d(),w&&x(f),y.block.d(w),y.token=null,y=null,w&&x(d),z(v,w),_=!1,G(A)}}}let ze=500;function Ge(o,e,n){let l,t,s,r,i=!1,c;const f=async()=>{const R=await U.recipe.reverse().toArray();if(r){const B={keys:["name","recipe"]};return new Ke(R,B).search(r).map(ye=>ye.item)}return R};let u=f();const d=()=>{document.querySelector('[data-selector="recipe-modal"]').classList.toggle("hidden")},v=async()=>{if(l===""||!l){n(4,i=!0);return}const R={name:l,recipe:t};s!==void 0?(await U.recipe.update(s,R),n(2,s=void 0)):await U.recipe.add(R),n(6,u=f()),d()},h=async R=>{const B=await U.recipe.where(R).toArray();if(B.length!==1)throw new Error("Something went wrong.");n(0,l=B[0].name),n(1,t=B[0].recipe),n(2,s=B[0].id),d()},_=R=>{n(5,c=R)},A=async R=>{const B=await U.recipe.where(R).toArray();if(B.length!==1)throw new Error("Something went wrong.");await U.recipe.delete(B[0].id),n(6,u=f()),n(5,c=void 0)},b=()=>{n(0,l=""),n(1,t=""),n(2,s=void 0),d()};let y;const w=()=>{clearTimeout(y),y=setTimeout(O,ze)},g=()=>{clearTimeout(y)},O=()=>{n(6,u=f())},T=()=>{n(3,r=void 0),n(6,u=f())};ke(async()=>{await xe();const R=document.querySelector(`[data-confirm-button="${c}"]`);R&&(R.disabled=!0,setTimeout(()=>{R.disabled=!1},1e3))});function E(){r=this.value,n(3,r)}const be=R=>{n(5,c=void 0),h(R)},he=()=>{n(5,c=void 0)},_e=R=>{A(R)},we=R=>{_(R.id)};function ge(){l=this.value,n(0,l)}function ve(){t=this.value,n(1,t)}return o.$$.update=()=>{o.$$.dirty&1&&l!==""&&n(4,i=!1)},[l,t,s,r,i,c,u,d,v,h,_,A,b,w,g,T,E,be,he,_e,we,ge,ve]}class Je extends N{constructor(e){super();L(this,e,Ge,qe,D,{})}}function Qe(o){let e,n,l,t,s;return{c(){e=p("button"),n=j(o[2]),a(e,"class",l="mt-4 md:mt-0 small-btn flex-1 md:ml-4 drop-shadow-sm bg-white text-stone-50 px-4 py-2 rounded transition-colors hover:drop-shadow-md duration-250 "+o[3]+" svelte-ubowvh")},m(r,i){k(r,e,i),m(e,n),t||(s=S(e,"click",o[4]),t=!0)},p(r,[i]){i&4&&J(n,r[2]),i&8&&l!==(l="mt-4 md:mt-0 small-btn flex-1 md:ml-4 drop-shadow-sm bg-white text-stone-50 px-4 py-2 rounded transition-colors hover:drop-shadow-md duration-250 "+r[3]+" svelte-ubowvh")&&a(e,"class",l)},i:K,o:K,d(r){r&&x(e),t=!1,s()}}}function Ve(o,e,n){let l,{onClick:t}=e,{lastKnown:s}=e,{label:r}=e;const i=()=>t(s);return o.$$set=c=>{"onClick"in c&&n(0,t=c.onClick),"lastKnown"in c&&n(1,s=c.lastKnown),"label"in c&&n(2,r=c.label)},o.$$.update=()=>{o.$$.dirty&4&&n(3,l=r=="Refresh"?"bg-emerald-500 hover:bg-emerald-800":"bg-red-500 hover:bg-red-800")},[t,s,r,l,i]}class ie extends N{constructor(e){super();L(this,e,Ve,Qe,D,{onClick:0,lastKnown:1,label:2})}}function We(o){let e,n;const l=o[1].default,t=V(l,o,o[0],null);return{c(){e=p("li"),t&&t.c(),a(e,"class","p-4 container flex justify-center flex-col bg-white drop-shadow-md border-2 border-slate-50 border-solid md:flex-row rounded mb-4 ")},m(s,r){k(s,e,r),t&&t.m(e,null),n=!0},p(s,[r]){t&&t.p&&(!n||r&1)&&W(t,l,s,s[0],n?Y(l,s[0],r,null):X(s[0]),null)},i(s){n||(P(t,s),n=!0)},o(s){M(t,s),n=!1},d(s){s&&x(e),t&&t.d(s)}}}function Xe(o,e,n){let{$$slots:l={},$$scope:t}=e;return o.$$set=s=>{"$$scope"in s&&n(0,t=s.$$scope)},[t,l]}class Ye extends N{constructor(e){super();L(this,e,Xe,We,D,{})}}function ae(o,e,n){const l=o.slice();return l[11]=e[n],l[13]=n,l}function Ze(o){return{c:K,m:K,p:K,i:K,o:K,d:K}}function et(o){let e,n,l=o[10],t=[];for(let r=0;r<l.length;r+=1)t[r]=ce(ae(o,l,r));const s=r=>M(t[r],1,1,()=>{t[r]=null});return{c(){e=p("ul");for(let r=0;r<t.length;r+=1)t[r].c();a(e,"class","p-4 mt-10 container flex flex-col items-center ")},m(r,i){k(r,e,i);for(let c=0;c<t.length;c+=1)t[c].m(e,null);n=!0},p(r,i){if(i&42){l=r[10];let c;for(c=0;c<l.length;c+=1){const f=ae(r,l,c);t[c]?(t[c].p(f,i),P(t[c],1)):(t[c]=ce(f),t[c].c(),P(t[c],1),t[c].m(e,null))}for(me(),c=l.length;c<t.length;c+=1)s(c);pe()}},i(r){if(!n){for(let i=0;i<l.length;i+=1)P(t[i]);n=!0}},o(r){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)M(t[i]);n=!1},d(r){r&&x(e),fe(t,r)}}}function tt(o){let e,n=o[11].name+"",l,t,s,r,i=o[11].lastKnown+"",c,f,u,d,v,h,_,A;return d=new ie({props:{onClick:o[3],label:"Refresh",lastKnown:o[11].lastKnown}}),h=new ie({props:{onClick:o[5],label:"Delete",lastKnown:o[11].lastKnown}}),{c(){e=p("h3"),l=j(n),t=C(),s=p("span"),r=j("Last Known: "),c=j(i),f=C(),u=p("div"),F(d.$$.fragment),v=C(),F(h.$$.fragment),_=C(),a(e,"class","flex-1 mb-4 font-semibold text-lg"),a(s,"class","flex-1 mb-4 md:ml-4"),a(u,"class","container flex-1 flex flex-col md:flex-row")},m(b,y){k(b,e,y),m(e,l),k(b,t,y),k(b,s,y),m(s,r),m(s,c),k(b,f,y),k(b,u,y),q(d,u,null),m(u,v),q(h,u,null),k(b,_,y),A=!0},p(b,y){(!A||y&2)&&n!==(n=b[11].name+"")&&J(l,n),(!A||y&2)&&i!==(i=b[11].lastKnown+"")&&J(c,i);const w={};y&2&&(w.lastKnown=b[11].lastKnown),d.$set(w);const g={};y&2&&(g.lastKnown=b[11].lastKnown),h.$set(g)},i(b){A||(P(d.$$.fragment,b),P(h.$$.fragment,b),A=!0)},o(b){M(d.$$.fragment,b),M(h.$$.fragment,b),A=!1},d(b){b&&x(e),b&&x(t),b&&x(s),b&&x(f),b&&x(u),z(d),z(h),b&&x(_)}}}function ce(o){let e,n;return e=new Ye({props:{$$slots:{default:[tt]},$$scope:{ctx:o}}}),{c(){F(e.$$.fragment)},m(l,t){q(e,l,t),n=!0},p(l,t){const s={};t&16386&&(s.$$scope={dirty:t,ctx:l}),e.$set(s)},i(l){n||(P(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){z(e,l)}}}function nt(o){return{c:K,m:K,p:K,i:K,o:K,d:K}}function ot(o){let e,n,l,t,s,r,i,c,f,u,d={ctx:o,current:null,token:null,hasCatch:!1,pending:nt,then:et,catch:Ze,value:10,blocks:[,,,]};return Q(i=o[1],d),{c(){e=p("div"),n=p("input"),l=C(),t=p("button"),t.textContent="Create",s=C(),r=Ae(),d.block.c(),a(n,"class","px-4 py-2"),a(n,"type","text"),a(n,"placeholder","New item name"),a(t,"class","ml-4 drop-shadow-sm bg-white px-4 py-2 rounded transition-colors hover:bg-emerald-500 hover:text-stone-50 hover:drop-shadow-md duration-250 "),a(e,"class","container flex justify-center w-100")},m(v,h){k(v,e,h),m(e,n),I(n,o[0]),m(e,l),m(e,t),k(v,s,h),k(v,r,h),d.block.m(v,d.anchor=h),d.mount=()=>r.parentNode,d.anchor=r,c=!0,f||(u=[S(n,"input",o[6]),S(n,"keyup",o[4]),S(t,"click",o[2])],f=!0)},p(v,[h]){o=v,h&1&&n.value!==o[0]&&I(n,o[0]),d.ctx=o,h&2&&i!==(i=o[1])&&Q(i,d)||de(d,o,h)},i(v){c||(P(d.block),c=!0)},o(v){for(let h=0;h<3;h+=1){const _=d.blocks[h];M(_)}c=!1},d(v){v&&x(e),v&&x(s),v&&x(r),d.block.d(v),d.token=null,d=null,f=!1,G(u)}}}function lt(o,e,n){let l,t;const s={dateStyle:"long",timeStyle:"medium"},r=()=>{const h={name:t,lastKnown:Intl.DateTimeFormat("en-US",s).format(new Date)};try{$.lastKnown.add(h),n(1,l=d())}catch(_){console.log(_)}},i=()=>r(),c=async h=>{const _=await $.lastKnown.where({lastKnown:h}).toArray();if(_.length!==1)throw new Error("Something went wrong.");const A=Intl.DateTimeFormat("en-US",s).format(new Date);await $.lastKnown.update(_[0].id,{lastKnown:A}),n(1,l=d())},f=h=>{h.keyCode===13&&r()},u=async h=>{const _=await $.lastKnown.where({lastKnown:h}).toArray();if(_.length!==1)throw new Error("Something went wrong.");await $.lastKnown.delete(_[0].id),n(1,l=d())},d=async()=>await $.lastKnown.toArray();function v(){t=this.value,n(0,t)}return n(1,l=d()),[t,l,i,c,f,u,v]}class rt extends N{constructor(e){super();L(this,e,lt,ot,D,{})}}function st(o){let e;return{c(){e=p("div"),e.textContent="About me"},m(n,l){k(n,e,l)},p:K,i:K,o:K,d(n){n&&x(e)}}}class it extends N{constructor(e){super();L(this,e,null,st,D,{})}}function at(o){let e,n,l,t,s,r,i,c;return{c(){e=p("div"),n=p("div"),l=p("a"),l.textContent="Last Known",t=C(),s=p("div"),r=p("a"),r.textContent="Recipes",a(l,"href","/app/last-known"),a(n,"class","flex flex-1 justify-center"),a(r,"href","/app/recipes"),a(s,"class","flex flex-1 justify-center"),a(e,"class","flex w-full justify-center mx-auto")},m(f,u){k(f,e,u),m(e,n),m(n,l),m(e,t),m(e,s),m(s,r),i||(c=[S(l,"click",te(o[0])),S(r,"click",te(o[1]))],i=!0)},p:K,i:K,o:K,d(f){f&&x(e),i=!1,G(c)}}}function ct(o){return[()=>{H("/app/last-known")},()=>{H("/app/recipes")}]}class ut extends N{constructor(e){super();L(this,e,ct,at,D,{})}}function dt(o){let e,n,l,t,s,r,i;e=new Se({props:{currentPage:o[1]}});var c=o[0];function f(u){return{}}return c&&(t=new c(f())),{c(){F(e.$$.fragment),n=C(),l=p("main"),t&&F(t.$$.fragment),s=C(),r=p("footer"),r.textContent="Made with love by Khang Nguyen",a(l,"class","container flex flex-col items-center mx-auto bg-white rounded p-4 drop-shadow-md min-h-screen"),a(r,"class","flex mx-auto justify-center p-5 container mx-auto my-4 bg-white rounded drop-shadow-md")},m(u,d){q(e,u,d),k(u,n,d),k(u,l,d),t&&q(t,l,null),k(u,s,d),k(u,r,d),i=!0},p(u,[d]){const v={};if(d&2&&(v.currentPage=u[1]),e.$set(v),c!==(c=u[0])){if(t){me();const h=t;M(h.$$.fragment,1,0,()=>{z(h,1)}),pe()}c?(t=new c(f()),F(t.$$.fragment),P(t.$$.fragment,1),q(t,l,null)):t=null}},i(u){i||(P(e.$$.fragment,u),t&&P(t.$$.fragment,u),i=!0)},o(u){M(e.$$.fragment,u),t&&M(t.$$.fragment,u),i=!1},d(u){z(e,u),u&&x(n),u&&x(l),t&&z(t),u&&x(s),u&&x(r)}}}function ft(o,e,n){let l,t="HOME";return H("/",()=>{n(0,l=Me),n(1,t="HOME")}),H("/about",()=>{n(0,l=it),n(1,t="ABOUT")}),H("/random-apps",()=>{n(0,l=ut),n(1,t="RANDOM_APPS")}),H("/app/recipes",()=>{n(1,t="RANDOM_APPS"),n(0,l=Je)}),H("/app/last-known",()=>{n(1,t="RANDOM_APPS"),n(0,l=rt)}),H.start(),[l,t]}class mt extends N{constructor(e){super();L(this,e,ft,dt,D,{})}}new mt({target:document.getElementById("root")});
