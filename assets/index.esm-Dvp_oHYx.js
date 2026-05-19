import{F as Es,g as re,I as vi,L as ws,a as Ei,_ as Ts,b as Is,C as As,r as Yn,S as Ss}from"./index-CldZoEmv.js";var ee=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var h,e=Object.defineProperty;function s(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof ee=="object"&&ee];for(var n=0;n<t.length;++n){var i=t[n];if(i&&i.Math==Math)return i}throw Error("Cannot find global object")}var o=s(this);function l(t,n){if(n)t:{var i=o;t=t.split(".");for(var r=0;r<t.length-1;r++){var a=t[r];if(!(a in i))break t;i=i[a]}t=t[t.length-1],r=i[t],n=n(r),n!=r&&n!=null&&e(i,t,{configurable:!0,writable:!0,value:n})}}l("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),l("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),l("Object.entries",function(t){return t||function(n){var i=[],r;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&i.push([r,n[r]]);return i}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function p(t){var n=typeof t;return n=="object"&&t!=null||n=="function"}function g(t,n,i){return t.call.apply(t.bind,arguments)}function E(t,n,i){return E=g,E.apply(null,arguments)}function P(t,n){var i=Array.prototype.slice.call(arguments,1);return function(){var r=i.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function I(t,n){function i(){}i.prototype=n.prototype,t.Z=n.prototype,t.prototype=new i,t.prototype.constructor=t,t.Ob=function(r,a,u){for(var d=Array(arguments.length-2),m=2;m<arguments.length;m++)d[m-2]=arguments[m];return n.prototype[a].apply(r,d)}}var Y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function K(t){const n=t.length;if(n>0){const i=Array(n);for(let r=0;r<n;r++)i[r]=t[r];return i}return[]}function ot(t,n){for(let r=1;r<arguments.length;r++){const a=arguments[r];var i=typeof a;if(i=i!="object"?i:a?Array.isArray(a)?"array":i:"null",i=="array"||i=="object"&&typeof a.length=="number"){i=t.length||0;const u=a.length||0;t.length=i+u;for(let d=0;d<u;d++)t[i+d]=a[d]}else t.push(a)}}class Q{constructor(n,i){this.i=n,this.j=i,this.h=0,this.g=null}get(){let n;return this.h>0?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}function ht(t){f.setTimeout(()=>{throw t},0)}function de(){var t=pe;let n=null;return t.g&&(n=t.g,t.g=t.g.next,t.g||(t.h=null),n.next=null),n}class ji{constructor(){this.h=this.g=null}add(n,i){const r=Xe.get();r.set(n,i),this.h?this.h.next=r:this.g=r,this.h=r}}var Xe=new Q(()=>new Li,t=>t.reset());class Li{constructor(){this.next=this.g=this.h=null}set(n,i){this.h=n,this.g=i,this.next=null}reset(){this.next=this.g=this.h=null}}let vt,Et=!1,pe=new ji,We=()=>{const t=Promise.resolve(void 0);vt=()=>{t.then(Mi)}};function Mi(){for(var t;t=de();){try{t.h.call(t.g)}catch(i){ht(i)}var n=Xe;n.j(t),n.h<100&&(n.h++,t.next=n.g,n.g=t)}Et=!1}function J(){this.u=this.u,this.C=this.C}J.prototype.u=!1,J.prototype.dispose=function(){this.u||(this.u=!0,this.N())},J.prototype[Symbol.dispose]=function(){this.dispose()},J.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function V(t,n){this.type=t,this.g=this.target=n,this.defaultPrevented=!1}V.prototype.h=function(){this.defaultPrevented=!0};var Fi=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var t=!1,n=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const i=()=>{};f.addEventListener("test",i,n),f.removeEventListener("test",i,n)}catch{}return t})();function wt(t){return/^[\s\xa0]*$/.test(t)}function dt(t,n){V.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,n)}I(dt,V),dt.prototype.init=function(t,n){const i=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=n,n=t.relatedTarget,n||(i=="mouseover"?n=t.fromElement:i=="mouseout"&&(n=t.toElement)),this.relatedTarget=n,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&dt.Z.h.call(this)},dt.prototype.h=function(){dt.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Bt="closure_listenable_"+(Math.random()*1e6|0),Ui=0;function qi(t,n,i,r,a){this.listener=t,this.proxy=null,this.src=n,this.type=i,this.capture=!!r,this.ha=a,this.key=++Ui,this.da=this.fa=!1}function Gt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function zt(t,n,i){for(const r in t)n.call(i,t[r],r,t)}function Bi(t,n){for(const i in t)n.call(void 0,t[i],i,t)}function Ye(t){const n={};for(const i in t)n[i]=t[i];return n}const Qe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ze(t,n){let i,r;for(let a=1;a<arguments.length;a++){r=arguments[a];for(i in r)t[i]=r[i];for(let u=0;u<Qe.length;u++)i=Qe[u],Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}}function $t(t){this.src=t,this.g={},this.h=0}$t.prototype.add=function(t,n,i,r,a){const u=t.toString();t=this.g[u],t||(t=this.g[u]=[],this.h++);const d=me(t,n,r,a);return d>-1?(n=t[d],i||(n.fa=!1)):(n=new qi(n,this.src,u,!!r,a),n.fa=i,t.push(n)),n};function ge(t,n){const i=n.type;if(i in t.g){var r=t.g[i],a=Array.prototype.indexOf.call(r,n,void 0),u;(u=a>=0)&&Array.prototype.splice.call(r,a,1),u&&(Gt(n),t.g[i].length==0&&(delete t.g[i],t.h--))}}function me(t,n,i,r){for(let a=0;a<t.length;++a){const u=t[a];if(!u.da&&u.listener==n&&u.capture==!!i&&u.ha==r)return a}return-1}var ye="closure_lm_"+(Math.random()*1e6|0),_e={};function tn(t,n,i,r,a){if(Array.isArray(n)){for(let u=0;u<n.length;u++)tn(t,n[u],i,r,a);return null}return i=sn(i),t&&t[Bt]?t.J(n,i,p(r)?!!r.capture:!1,a):Gi(t,n,i,!1,r,a)}function Gi(t,n,i,r,a,u){if(!n)throw Error("Invalid event type");const d=p(a)?!!a.capture:!!a;let m=Ee(t);if(m||(t[ye]=m=new $t(t)),i=m.add(n,i,r,d,u),i.proxy)return i;if(r=zi(),i.proxy=r,r.src=t,r.listener=i,t.addEventListener)Fi||(a=d),a===void 0&&(a=!1),t.addEventListener(n.toString(),r,a);else if(t.attachEvent)t.attachEvent(nn(n.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return i}function zi(){function t(i){return n.call(t.src,t.listener,i)}const n=$i;return t}function en(t,n,i,r,a){if(Array.isArray(n))for(var u=0;u<n.length;u++)en(t,n[u],i,r,a);else r=p(r)?!!r.capture:!!r,i=sn(i),t&&t[Bt]?(t=t.i,u=String(n).toString(),u in t.g&&(n=t.g[u],i=me(n,i,r,a),i>-1&&(Gt(n[i]),Array.prototype.splice.call(n,i,1),n.length==0&&(delete t.g[u],t.h--)))):t&&(t=Ee(t))&&(n=t.g[n.toString()],t=-1,n&&(t=me(n,i,r,a)),(i=t>-1?n[t]:null)&&ve(i))}function ve(t){if(typeof t!="number"&&t&&!t.da){var n=t.src;if(n&&n[Bt])ge(n.i,t);else{var i=t.type,r=t.proxy;n.removeEventListener?n.removeEventListener(i,r,t.capture):n.detachEvent?n.detachEvent(nn(i),r):n.addListener&&n.removeListener&&n.removeListener(r),(i=Ee(n))?(ge(i,t),i.h==0&&(i.src=null,n[ye]=null)):Gt(t)}}}function nn(t){return t in _e?_e[t]:_e[t]="on"+t}function $i(t,n){if(t.da)t=!0;else{n=new dt(n,this);const i=t.listener,r=t.ha||t.src;t.fa&&ve(t),t=i.call(r,n)}return t}function Ee(t){return t=t[ye],t instanceof $t?t:null}var we="__closure_events_fn_"+(Math.random()*1e9>>>0);function sn(t){return typeof t=="function"?t:(t[we]||(t[we]=function(n){return t.handleEvent(n)}),t[we])}function k(){J.call(this),this.i=new $t(this),this.M=this,this.G=null}I(k,J),k.prototype[Bt]=!0,k.prototype.removeEventListener=function(t,n,i,r){en(this,t,n,i,r)};function O(t,n){var i,r=t.G;if(r)for(i=[];r;r=r.G)i.push(r);if(t=t.M,r=n.type||n,typeof n=="string")n=new V(n,t);else if(n instanceof V)n.target=n.target||t;else{var a=n;n=new V(r,t),Ze(n,a)}a=!0;let u,d;if(i)for(d=i.length-1;d>=0;d--)u=n.g=i[d],a=Ht(u,r,!0,n)&&a;if(u=n.g=t,a=Ht(u,r,!0,n)&&a,a=Ht(u,r,!1,n)&&a,i)for(d=0;d<i.length;d++)u=n.g=i[d],a=Ht(u,r,!1,n)&&a}k.prototype.N=function(){if(k.Z.N.call(this),this.i){var t=this.i;for(const n in t.g){const i=t.g[n];for(let r=0;r<i.length;r++)Gt(i[r]);delete t.g[n],t.h--}}this.G=null},k.prototype.J=function(t,n,i,r){return this.i.add(String(t),n,!1,i,r)},k.prototype.K=function(t,n,i,r){return this.i.add(String(t),n,!0,i,r)};function Ht(t,n,i,r){if(n=t.i.g[String(n)],!n)return!0;n=n.concat();let a=!0;for(let u=0;u<n.length;++u){const d=n[u];if(d&&!d.da&&d.capture==i){const m=d.listener,R=d.ha||d.src;d.fa&&ge(t.i,d),a=m.call(R,r)!==!1&&a}}return a&&!r.defaultPrevented}function Hi(t,n){if(typeof t!="function")if(t&&typeof t.handleEvent=="function")t=E(t.handleEvent,t);else throw Error("Invalid listener argument");return Number(n)>2147483647?-1:f.setTimeout(t,n||0)}function rn(t){t.g=Hi(()=>{t.g=null,t.i&&(t.i=!1,rn(t))},t.l);const n=t.h;t.h=null,t.m.apply(null,n)}class Ki extends J{constructor(n,i){super(),this.m=n,this.l=i,this.h=null,this.i=!1,this.g=null}j(n){this.h=arguments,this.g?this.i=!0:rn(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tt(t){J.call(this),this.h=t,this.g={}}I(Tt,J);var on=[];function hn(t){zt(t.g,function(n,i){this.g.hasOwnProperty(i)&&ve(n)},t),t.g={}}Tt.prototype.N=function(){Tt.Z.N.call(this),hn(this)},Tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Te=f.JSON.stringify,Ji=f.JSON.parse,Xi=class{stringify(t){return f.JSON.stringify(t,void 0)}parse(t){return f.JSON.parse(t,void 0)}};function ln(){}function Wi(){}var It={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ie(){V.call(this,"d")}I(Ie,V);function Ae(){V.call(this,"c")}I(Ae,V);var pt={},an=null;function Se(){return an=an||new k}pt.Ia="serverreachability";function un(t){V.call(this,pt.Ia,t)}I(un,V);function At(t){const n=Se();O(n,new un(n))}pt.STAT_EVENT="statevent";function cn(t,n){V.call(this,pt.STAT_EVENT,t),this.stat=n}I(cn,V);function C(t){const n=Se();O(n,new cn(n,t))}pt.Ja="timingevent";function fn(t,n){V.call(this,pt.Ja,t),this.size=n}I(fn,V);function St(t,n){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){t()},n)}function Rt(){this.g=!0}Rt.prototype.ua=function(){this.g=!1};function Yi(t,n,i,r,a,u){t.info(function(){if(t.g)if(u){var d="",m=u.split("&");for(let w=0;w<m.length;w++){var R=m[w].split("=");if(R.length>1){const N=R[0];R=R[1];const z=N.split("_");d=z.length>=2&&z[1]=="type"?d+(N+"="+R+"&"):d+(N+"=redacted&")}}}else d=null;else d=u;return"XMLHTTP REQ ("+r+") [attempt "+a+"]: "+n+`
`+i+`
`+d})}function Qi(t,n,i,r,a,u,d){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+a+"]: "+n+`
`+i+`
`+u+" "+d})}function gt(t,n,i,r){t.info(function(){return"XMLHTTP TEXT ("+n+"): "+ts(t,i)+(r?" "+r:"")})}function Zi(t,n){t.info(function(){return"TIMEOUT: "+n})}Rt.prototype.info=function(){};function ts(t,n){if(!t.g)return n;if(!n)return null;try{const u=JSON.parse(n);if(u){for(t=0;t<u.length;t++)if(Array.isArray(u[t])){var i=u[t];if(!(i.length<2)){var r=i[1];if(Array.isArray(r)&&!(r.length<1)){var a=r[0];if(a!="noop"&&a!="stop"&&a!="close")for(let d=1;d<r.length;d++)r[d]=""}}}}return Te(u)}catch{return n}}var Re={NO_ERROR:0,TIMEOUT:8},es={},dn;function Pe(){}I(Pe,ln),Pe.prototype.g=function(){return new XMLHttpRequest},dn=new Pe;function Pt(t){return encodeURIComponent(String(t))}function ns(t){var n=1;t=t.split(":");const i=[];for(;n>0&&t.length;)i.push(t.shift()),n--;return t.length&&i.push(t.join(":")),i}function Z(t,n,i,r){this.j=t,this.i=n,this.l=i,this.S=r||1,this.V=new Tt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new pn}function pn(){this.i=null,this.g="",this.h=!1}var gn={},Ne={};function De(t,n,i){t.M=1,t.A=Jt(G(n)),t.u=i,t.R=!0,mn(t,null)}function mn(t,n){t.F=Date.now(),Kt(t),t.B=G(t.A);var i=t.B,r=t.S;Array.isArray(r)||(r=[String(r)]),Dn(i.i,"t",r),t.C=0,i=t.j.L,t.h=new pn,t.g=Kn(t.j,i?n:null,!t.u),t.P>0&&(t.O=new Ki(E(t.Y,t,t.g),t.P)),n=t.V,i=t.g,r=t.ba;var a="readystatechange";Array.isArray(a)||(a&&(on[0]=a.toString()),a=on);for(let u=0;u<a.length;u++){const d=tn(i,a[u],r||n.handleEvent,!1,n.h||n);if(!d)break;n.g[d.key]=d}n=t.J?Ye(t.J):{},t.u?(t.v||(t.v="POST"),n["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,n)):(t.v="GET",t.g.ea(t.B,t.v,null,n)),At(),Yi(t.i,t.v,t.B,t.l,t.S,t.u)}Z.prototype.ba=function(t){t=t.target;const n=this.O;n&&nt(t)==3?n.j():this.Y(t)},Z.prototype.Y=function(t){try{if(t==this.g)t:{const m=nt(this.g),R=this.g.ya(),w=this.g.ca();if(!(m<3)&&(m!=3||this.g&&(this.h.h||this.g.la()||jn(this.g)))){this.K||m!=4||R==7||(R==8||w<=0?At(3):At(2)),Ve(this);var n=this.g.ca();this.X=n;var i=is(this);if(this.o=n==200,Qi(this.i,this.v,this.B,this.l,this.S,m,n),this.o){if(this.U&&!this.L){e:{if(this.g){var r,a=this.g;if((r=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wt(r)){var u=r;break e}}u=null}if(t=u)gt(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ke(this,t);else{this.o=!1,this.m=3,C(12),lt(this),Nt(this);break t}}if(this.R){t=!0;let N;for(;!this.K&&this.C<i.length;)if(N=ss(this,i),N==Ne){m==4&&(this.m=4,C(14),t=!1),gt(this.i,this.l,null,"[Incomplete Response]");break}else if(N==gn){this.m=4,C(15),gt(this.i,this.l,i,"[Invalid Chunk]"),t=!1;break}else gt(this.i,this.l,N,null),ke(this,N);if(yn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),m!=4||i.length!=0||this.h.h||(this.m=1,C(16),t=!1),this.o=this.o&&t,!t)gt(this.i,this.l,i,"[Invalid Chunked Response]"),lt(this),Nt(this);else if(i.length>0&&!this.W){this.W=!0;var d=this.j;d.g==this&&d.aa&&!d.P&&(d.j.info("Great, no buffering proxy detected. Bytes received: "+i.length),Fe(d),d.P=!0,C(11))}}else gt(this.i,this.l,i,null),ke(this,i);m==4&&lt(this),this.o&&!this.K&&(m==4?Gn(this.j,this):(this.o=!1,Kt(this)))}else _s(this.g),n==400&&i.indexOf("Unknown SID")>0?(this.m=3,C(12)):(this.m=0,C(13)),lt(this),Nt(this)}}}catch{}finally{}};function is(t){if(!yn(t))return t.g.la();const n=jn(t.g);if(n==="")return"";let i="";const r=n.length,a=nt(t.g)==4;if(!t.h.i){if(typeof TextDecoder>"u")return lt(t),Nt(t),"";t.h.i=new f.TextDecoder}for(let u=0;u<r;u++)t.h.h=!0,i+=t.h.i.decode(n[u],{stream:!(a&&u==r-1)});return n.length=0,t.h.g+=i,t.C=0,t.h.g}function yn(t){return t.g?t.v=="GET"&&t.M!=2&&t.j.Aa:!1}function ss(t,n){var i=t.C,r=n.indexOf(`
`,i);return r==-1?Ne:(i=Number(n.substring(i,r)),isNaN(i)?gn:(r+=1,r+i>n.length?Ne:(n=n.slice(r,r+i),t.C=r+i,n)))}Z.prototype.cancel=function(){this.K=!0,lt(this)};function Kt(t){t.T=Date.now()+t.H,_n(t,t.H)}function _n(t,n){if(t.D!=null)throw Error("WatchDog timer not null");t.D=St(E(t.aa,t),n)}function Ve(t){t.D&&(f.clearTimeout(t.D),t.D=null)}Z.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(Zi(this.i,this.B),this.M!=2&&(At(),C(17)),lt(this),this.m=2,Nt(this)):_n(this,this.T-t)};function Nt(t){t.j.I==0||t.K||Gn(t.j,t)}function lt(t){Ve(t);var n=t.O;n&&typeof n.dispose=="function"&&n.dispose(),t.O=null,hn(t.V),t.g&&(n=t.g,t.g=null,n.abort(),n.dispose())}function ke(t,n){try{var i=t.j;if(i.I!=0&&(i.g==t||Oe(i.h,t))){if(!t.L&&Oe(i.h,t)&&i.I==3){try{var r=i.Ba.g.parse(n)}catch{r=null}if(Array.isArray(r)&&r.length==3){var a=r;if(a[0]==0){t:if(!i.v){if(i.g)if(i.g.F+3e3<t.F)Zt(i),Yt(i);else break t;Me(i),C(18)}}else i.xa=a[1],0<i.xa-i.K&&a[2]<37500&&i.F&&i.A==0&&!i.C&&(i.C=St(E(i.Va,i),6e3));wn(i.h)<=1&&i.ta&&(i.ta=void 0)}else ut(i,11)}else if((t.L||i.g==t)&&Zt(i),!wt(n))for(a=i.Ba.g.parse(n),n=0;n<a.length;n++){let w=a[n];const N=w[0];if(!(N<=i.K))if(i.K=N,w=w[1],i.I==2)if(w[0]=="c"){i.M=w[1],i.ba=w[2];const z=w[3];z!=null&&(i.ka=z,i.j.info("VER="+i.ka));const ct=w[4];ct!=null&&(i.za=ct,i.j.info("SVER="+i.za));const it=w[5];it!=null&&typeof it=="number"&&it>0&&(r=1.5*it,i.O=r,i.j.info("backChannelRequestTimeoutMs_="+r)),r=i;const st=t.g;if(st){const te=st.g?st.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(te){var u=r.h;u.g||te.indexOf("spdy")==-1&&te.indexOf("quic")==-1&&te.indexOf("h2")==-1||(u.j=u.l,u.g=new Set,u.h&&(Ce(u,u.h),u.h=null))}if(r.G){const Ue=st.g?st.g.getResponseHeader("X-HTTP-Session-Id"):null;Ue&&(r.wa=Ue,T(r.J,r.G,Ue))}}i.I=3,i.l&&i.l.ra(),i.aa&&(i.T=Date.now()-t.F,i.j.info("Handshake RTT: "+i.T+"ms")),r=i;var d=t;if(r.na=Hn(r,r.L?r.ba:null,r.W),d.L){Tn(r.h,d);var m=d,R=r.O;R&&(m.H=R),m.D&&(Ve(m),Kt(m)),r.g=d}else qn(r);i.i.length>0&&Qt(i)}else w[0]!="stop"&&w[0]!="close"||ut(i,7);else i.I==3&&(w[0]=="stop"||w[0]=="close"?w[0]=="stop"?ut(i,7):Le(i):w[0]!="noop"&&i.l&&i.l.qa(w),i.A=0)}}At(4)}catch{}}var rs=class{constructor(t,n){this.g=t,this.map=n}};function vn(t){this.l=t||10,f.PerformanceNavigationTiming?(t=f.performance.getEntriesByType("navigation"),t=t.length>0&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function En(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function wn(t){return t.h?1:t.g?t.g.size:0}function Oe(t,n){return t.h?t.h==n:t.g?t.g.has(n):!1}function Ce(t,n){t.g?t.g.add(n):t.h=n}function Tn(t,n){t.h&&t.h==n?t.h=null:t.g&&t.g.has(n)&&t.g.delete(n)}vn.prototype.cancel=function(){if(this.i=In(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function In(t){if(t.h!=null)return t.i.concat(t.h.G);if(t.g!=null&&t.g.size!==0){let n=t.i;for(const i of t.g.values())n=n.concat(i.G);return n}return K(t.i)}var An=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function os(t,n){if(t){t=t.split("&");for(let i=0;i<t.length;i++){const r=t[i].indexOf("=");let a,u=null;r>=0?(a=t[i].substring(0,r),u=t[i].substring(r+1)):a=t[i],n(a,u?decodeURIComponent(u.replace(/\+/g," ")):"")}}}function tt(t){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let n;t instanceof tt?(this.l=t.l,Dt(this,t.j),this.o=t.o,this.g=t.g,Vt(this,t.u),this.h=t.h,be(this,Vn(t.i)),this.m=t.m):t&&(n=String(t).match(An))?(this.l=!1,Dt(this,n[1]||"",!0),this.o=kt(n[2]||""),this.g=kt(n[3]||"",!0),Vt(this,n[4]),this.h=kt(n[5]||"",!0),be(this,n[6]||"",!0),this.m=kt(n[7]||"")):(this.l=!1,this.i=new Ct(null,this.l))}tt.prototype.toString=function(){const t=[];var n=this.j;n&&t.push(Ot(n,Sn,!0),":");var i=this.g;return(i||n=="file")&&(t.push("//"),(n=this.o)&&t.push(Ot(n,Sn,!0),"@"),t.push(Pt(i).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i=this.u,i!=null&&t.push(":",String(i))),(i=this.h)&&(this.g&&i.charAt(0)!="/"&&t.push("/"),t.push(Ot(i,i.charAt(0)=="/"?as:ls,!0))),(i=this.i.toString())&&t.push("?",i),(i=this.m)&&t.push("#",Ot(i,cs)),t.join("")},tt.prototype.resolve=function(t){const n=G(this);let i=!!t.j;i?Dt(n,t.j):i=!!t.o,i?n.o=t.o:i=!!t.g,i?n.g=t.g:i=t.u!=null;var r=t.h;if(i)Vt(n,t.u);else if(i=!!t.h){if(r.charAt(0)!="/")if(this.g&&!this.h)r="/"+r;else{var a=n.h.lastIndexOf("/");a!=-1&&(r=n.h.slice(0,a+1)+r)}if(a=r,a==".."||a==".")r="";else if(a.indexOf("./")!=-1||a.indexOf("/.")!=-1){r=a.lastIndexOf("/",0)==0,a=a.split("/");const u=[];for(let d=0;d<a.length;){const m=a[d++];m=="."?r&&d==a.length&&u.push(""):m==".."?((u.length>1||u.length==1&&u[0]!="")&&u.pop(),r&&d==a.length&&u.push("")):(u.push(m),r=!0)}r=u.join("/")}else r=a}return i?n.h=r:i=t.i.toString()!=="",i?be(n,Vn(t.i)):i=!!t.m,i&&(n.m=t.m),n};function G(t){return new tt(t)}function Dt(t,n,i){t.j=i?kt(n,!0):n,t.j&&(t.j=t.j.replace(/:$/,""))}function Vt(t,n){if(n){if(n=Number(n),isNaN(n)||n<0)throw Error("Bad port number "+n);t.u=n}else t.u=null}function be(t,n,i){n instanceof Ct?(t.i=n,fs(t.i,t.l)):(i||(n=Ot(n,us)),t.i=new Ct(n,t.l))}function T(t,n,i){t.i.set(n,i)}function Jt(t){return T(t,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),t}function kt(t,n){return t?n?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ot(t,n,i){return typeof t=="string"?(t=encodeURI(t).replace(n,hs),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function hs(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Sn=/[#\/\?@]/g,ls=/[#\?:]/g,as=/[#\?]/g,us=/[#\?@]/g,cs=/#/g;function Ct(t,n){this.h=this.g=null,this.i=t||null,this.j=!!n}function at(t){t.g||(t.g=new Map,t.h=0,t.i&&os(t.i,function(n,i){t.add(decodeURIComponent(n.replace(/\+/g," ")),i)}))}h=Ct.prototype,h.add=function(t,n){at(this),this.i=null,t=mt(this,t);let i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(n),this.h+=1,this};function Rn(t,n){at(t),n=mt(t,n),t.g.has(n)&&(t.i=null,t.h-=t.g.get(n).length,t.g.delete(n))}function Pn(t,n){return at(t),n=mt(t,n),t.g.has(n)}h.forEach=function(t,n){at(this),this.g.forEach(function(i,r){i.forEach(function(a){t.call(n,a,r,this)},this)},this)};function Nn(t,n){at(t);let i=[];if(typeof n=="string")Pn(t,n)&&(i=i.concat(t.g.get(mt(t,n))));else for(t=Array.from(t.g.values()),n=0;n<t.length;n++)i=i.concat(t[n]);return i}h.set=function(t,n){return at(this),this.i=null,t=mt(this,t),Pn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[n]),this.h+=1,this},h.get=function(t,n){return t?(t=Nn(this,t),t.length>0?String(t[0]):n):n};function Dn(t,n,i){Rn(t,n),i.length>0&&(t.i=null,t.g.set(mt(t,n),K(i)),t.h+=i.length)}h.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],n=Array.from(this.g.keys());for(let r=0;r<n.length;r++){var i=n[r];const a=Pt(i);i=Nn(this,i);for(let u=0;u<i.length;u++){let d=a;i[u]!==""&&(d+="="+Pt(i[u])),t.push(d)}}return this.i=t.join("&")};function Vn(t){const n=new Ct;return n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),n}function mt(t,n){return n=String(n),t.j&&(n=n.toLowerCase()),n}function fs(t,n){n&&!t.j&&(at(t),t.i=null,t.g.forEach(function(i,r){const a=r.toLowerCase();r!=a&&(Rn(this,r),Dn(this,a,i))},t)),t.j=n}function ds(t,n){const i=new Rt;if(f.Image){const r=new Image;r.onload=P(et,i,"TestLoadImage: loaded",!0,n,r),r.onerror=P(et,i,"TestLoadImage: error",!1,n,r),r.onabort=P(et,i,"TestLoadImage: abort",!1,n,r),r.ontimeout=P(et,i,"TestLoadImage: timeout",!1,n,r),f.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else n(!1)}function ps(t,n){const i=new Rt,r=new AbortController,a=setTimeout(()=>{r.abort(),et(i,"TestPingServer: timeout",!1,n)},1e4);fetch(t,{signal:r.signal}).then(u=>{clearTimeout(a),u.ok?et(i,"TestPingServer: ok",!0,n):et(i,"TestPingServer: server error",!1,n)}).catch(()=>{clearTimeout(a),et(i,"TestPingServer: error",!1,n)})}function et(t,n,i,r,a){try{a&&(a.onload=null,a.onerror=null,a.onabort=null,a.ontimeout=null),r(i)}catch{}}function gs(){this.g=new Xi}function xe(t){this.i=t.Sb||null,this.h=t.ab||!1}I(xe,ln),xe.prototype.g=function(){return new Xt(this.i,this.h)};function Xt(t,n){k.call(this),this.H=t,this.o=n,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(Xt,k),h=Xt.prototype,h.open=function(t,n){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=n,this.readyState=1,xt(this)},h.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const n={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(n.body=t),(this.H||f).fetch(new Request(this.D,n)).then(this.Pa.bind(this),this.ga.bind(this))},h.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,bt(this)),this.readyState=0},h.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xt(this)),this.g&&(this.readyState=3,xt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;kn(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))};function kn(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}h.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var n=t.value?t.value:new Uint8Array(0);(n=this.B.decode(n,{stream:!t.done}))&&(this.response=this.responseText+=n)}t.done?bt(this):xt(this),this.readyState==3&&kn(this)}},h.Oa=function(t){this.g&&(this.response=this.responseText=t,bt(this))},h.Na=function(t){this.g&&(this.response=t,bt(this))},h.ga=function(){this.g&&bt(this)};function bt(t){t.readyState=4,t.l=null,t.j=null,t.B=null,xt(t)}h.setRequestHeader=function(t,n){this.A.append(t,n)},h.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},h.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],n=this.h.entries();for(var i=n.next();!i.done;)i=i.value,t.push(i[0]+": "+i[1]),i=n.next();return t.join(`\r
`)};function xt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Xt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function On(t){let n="";return zt(t,function(i,r){n+=r,n+=":",n+=i,n+=`\r
`}),n}function je(t,n,i){t:{for(r in i){var r=!1;break t}r=!0}r||(i=On(i),typeof t=="string"?i!=null&&Pt(i):T(t,n,i))}function A(t){k.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(A,k);var ms=/^https?$/i,ys=["POST","PUT"];h=A.prototype,h.Fa=function(t){this.H=t},h.ea=function(t,n,i,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);n=n?n.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():dn.g(),this.g.onreadystatechange=Y(E(this.Ca,this));try{this.B=!0,this.g.open(n,String(t),!0),this.B=!1}catch(u){Cn(this,u);return}if(t=i||"",i=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var a in r)i.set(a,r[a]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const u of r.keys())i.set(u,r.get(u));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(i.keys()).find(u=>u.toLowerCase()=="content-type"),a=f.FormData&&t instanceof f.FormData,!(Array.prototype.indexOf.call(ys,n,void 0)>=0)||r||a||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[u,d]of i)this.g.setRequestHeader(u,d);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(u){Cn(this,u)}};function Cn(t,n){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=n,t.o=5,bn(t),Wt(t)}function bn(t){t.A||(t.A=!0,O(t,"complete"),O(t,"error"))}h.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,O(this,"complete"),O(this,"abort"),Wt(this))},h.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wt(this,!0)),A.Z.N.call(this)},h.Ca=function(){this.u||(this.B||this.v||this.j?xn(this):this.Xa())},h.Xa=function(){xn(this)};function xn(t){if(t.h&&typeof c<"u"){if(t.v&&nt(t)==4)setTimeout(t.Ca.bind(t),0);else if(O(t,"readystatechange"),nt(t)==4){t.h=!1;try{const u=t.ca();t:switch(u){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n=!0;break t;default:n=!1}var i;if(!(i=n)){var r;if(r=u===0){let d=String(t.D).match(An)[1]||null;!d&&f.self&&f.self.location&&(d=f.self.location.protocol.slice(0,-1)),r=!ms.test(d?d.toLowerCase():"")}i=r}if(i)O(t,"complete"),O(t,"success");else{t.o=6;try{var a=nt(t)>2?t.g.statusText:""}catch{a=""}t.l=a+" ["+t.ca()+"]",bn(t)}}finally{Wt(t)}}}}function Wt(t,n){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const i=t.g;t.g=null,n||O(t,"ready");try{i.onreadystatechange=null}catch{}}}h.isActive=function(){return!!this.g};function nt(t){return t.g?t.g.readyState:0}h.ca=function(){try{return nt(this)>2?this.g.status:-1}catch{return-1}},h.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},h.La=function(t){if(this.g){var n=this.g.responseText;return t&&n.indexOf(t)==0&&(n=n.substring(t.length)),Ji(n)}};function jn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function _s(t){const n={};t=(t.g&&nt(t)>=2&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(wt(t[r]))continue;var i=ns(t[r]);const a=i[0];if(i=i[1],typeof i!="string")continue;i=i.trim();const u=n[a]||[];n[a]=u,u.push(i)}Bi(n,function(r){return r.join(", ")})}h.ya=function(){return this.o},h.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function jt(t,n,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||n}function Ln(t){this.za=0,this.i=[],this.j=new Rt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=jt("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=jt("baseRetryDelayMs",5e3,t),this.Za=jt("retryDelaySeedMs",1e4,t),this.Ta=jt("forwardChannelMaxRetries",2,t),this.va=jt("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new vn(t&&t.concurrentRequestLimit),this.Ba=new gs,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}h=Ln.prototype,h.ka=8,h.I=1,h.connect=function(t,n,i,r){C(0),this.W=t,this.H=n||{},i&&r!==void 0&&(this.H.OSID=i,this.H.OAID=r),this.F=this.X,this.J=Hn(this,null,this.W),Qt(this)};function Le(t){if(Mn(t),t.I==3){var n=t.V++,i=G(t.J);if(T(i,"SID",t.M),T(i,"RID",n),T(i,"TYPE","terminate"),Lt(t,i),n=new Z(t,t.j,n),n.M=2,n.A=Jt(G(i)),i=!1,f.navigator&&f.navigator.sendBeacon)try{i=f.navigator.sendBeacon(n.A.toString(),"")}catch{}!i&&f.Image&&(new Image().src=n.A,i=!0),i||(n.g=Kn(n.j,null),n.g.ea(n.A)),n.F=Date.now(),Kt(n)}$n(t)}function Yt(t){t.g&&(Fe(t),t.g.cancel(),t.g=null)}function Mn(t){Yt(t),t.v&&(f.clearTimeout(t.v),t.v=null),Zt(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&f.clearTimeout(t.m),t.m=null)}function Qt(t){if(!En(t.h)&&!t.m){t.m=!0;var n=t.Ea;vt||We(),Et||(vt(),Et=!0),pe.add(n,t),t.D=0}}function vs(t,n){return wn(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=n.G.concat(t.i),!0):t.I==1||t.I==2||t.D>=(t.Sa?0:t.Ta)?!1:(t.m=St(E(t.Ea,t,n),zn(t,t.D)),t.D++,!0)}h.Ea=function(t){if(this.m)if(this.m=null,this.I==1){if(!t){this.V=Math.floor(Math.random()*1e5),t=this.V++;const a=new Z(this,this.j,t);let u=this.o;if(this.U&&(u?(u=Ye(u),Ze(u,this.U)):u=this.U),this.u!==null||this.R||(a.J=u,u=null),this.S)t:{for(var n=0,i=0;i<this.i.length;i++){e:{var r=this.i[i];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(n+=r,n>4096){n=i;break t}if(n===4096||i===this.i.length-1){n=i+1;break t}}n=1e3}else n=1e3;n=Un(this,a,n),i=G(this.J),T(i,"RID",t),T(i,"CVER",22),this.G&&T(i,"X-HTTP-Session-Id",this.G),Lt(this,i),u&&(this.R?n="headers="+Pt(On(u))+"&"+n:this.u&&je(i,this.u,u)),Ce(this.h,a),this.Ra&&T(i,"TYPE","init"),this.S?(T(i,"$req",n),T(i,"SID","null"),a.U=!0,De(a,i,null)):De(a,i,n),this.I=2}}else this.I==3&&(t?Fn(this,t):this.i.length==0||En(this.h)||Fn(this))};function Fn(t,n){var i;n?i=n.l:i=t.V++;const r=G(t.J);T(r,"SID",t.M),T(r,"RID",i),T(r,"AID",t.K),Lt(t,r),t.u&&t.o&&je(r,t.u,t.o),i=new Z(t,t.j,i,t.D+1),t.u===null&&(i.J=t.o),n&&(t.i=n.G.concat(t.i)),n=Un(t,i,1e3),i.H=Math.round(t.va*.5)+Math.round(t.va*.5*Math.random()),Ce(t.h,i),De(i,r,n)}function Lt(t,n){t.H&&zt(t.H,function(i,r){T(n,r,i)}),t.l&&zt({},function(i,r){T(n,r,i)})}function Un(t,n,i){i=Math.min(t.i.length,i);const r=t.l?E(t.l.Ka,t.l,t):null;t:{var a=t.i;let m=-1;for(;;){const R=["count="+i];m==-1?i>0?(m=a[0].g,R.push("ofs="+m)):m=0:R.push("ofs="+m);let w=!0;for(let N=0;N<i;N++){var u=a[N].g;const z=a[N].map;if(u-=m,u<0)m=Math.max(0,a[N].g-100),w=!1;else try{u="req"+u+"_"||"";try{var d=z instanceof Map?z:Object.entries(z);for(const[ct,it]of d){let st=it;p(it)&&(st=Te(it)),R.push(u+ct+"="+encodeURIComponent(st))}}catch(ct){throw R.push(u+"type="+encodeURIComponent("_badmap")),ct}}catch{r&&r(z)}}if(w){d=R.join("&");break t}}d=void 0}return t=t.i.splice(0,i),n.G=t,d}function qn(t){if(!t.g&&!t.v){t.Y=1;var n=t.Da;vt||We(),Et||(vt(),Et=!0),pe.add(n,t),t.A=0}}function Me(t){return t.g||t.v||t.A>=3?!1:(t.Y++,t.v=St(E(t.Da,t),zn(t,t.A)),t.A++,!0)}h.Da=function(){if(this.v=null,Bn(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=St(E(this.Wa,this),t)}},h.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,C(10),Yt(this),Bn(this))};function Fe(t){t.B!=null&&(f.clearTimeout(t.B),t.B=null)}function Bn(t){t.g=new Z(t,t.j,"rpc",t.Y),t.u===null&&(t.g.J=t.o),t.g.P=0;var n=G(t.na);T(n,"RID","rpc"),T(n,"SID",t.M),T(n,"AID",t.K),T(n,"CI",t.F?"0":"1"),!t.F&&t.ia&&T(n,"TO",t.ia),T(n,"TYPE","xmlhttp"),Lt(t,n),t.u&&t.o&&je(n,t.u,t.o),t.O&&(t.g.H=t.O);var i=t.g;t=t.ba,i.M=1,i.A=Jt(G(n)),i.u=null,i.R=!0,mn(i,t)}h.Va=function(){this.C!=null&&(this.C=null,Yt(this),Me(this),C(19))};function Zt(t){t.C!=null&&(f.clearTimeout(t.C),t.C=null)}function Gn(t,n){var i=null;if(t.g==n){Zt(t),Fe(t),t.g=null;var r=2}else if(Oe(t.h,n))i=n.G,Tn(t.h,n),r=1;else return;if(t.I!=0){if(n.o)if(r==1){i=n.u?n.u.length:0,n=Date.now()-n.F;var a=t.D;r=Se(),O(r,new fn(r,i)),Qt(t)}else qn(t);else if(a=n.m,a==3||a==0&&n.X>0||!(r==1&&vs(t,n)||r==2&&Me(t)))switch(i&&i.length>0&&(n=t.h,n.i=n.i.concat(i)),a){case 1:ut(t,5);break;case 4:ut(t,10);break;case 3:ut(t,6);break;default:ut(t,2)}}}function zn(t,n){let i=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(i*=2),i*n}function ut(t,n){if(t.j.info("Error code "+n),n==2){var i=E(t.bb,t),r=t.Ua;const a=!r;r=new tt(r||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Dt(r,"https"),Jt(r),a?ds(r.toString(),i):ps(r.toString(),i)}else C(2);t.I=0,t.l&&t.l.pa(n),$n(t),Mn(t)}h.bb=function(t){t?(this.j.info("Successfully pinged google.com"),C(2)):(this.j.info("Failed to ping google.com"),C(1))};function $n(t){if(t.I=0,t.ja=[],t.l){const n=In(t.h);(n.length!=0||t.i.length!=0)&&(ot(t.ja,n),ot(t.ja,t.i),t.h.i.length=0,K(t.i),t.i.length=0),t.l.oa()}}function Hn(t,n,i){var r=i instanceof tt?G(i):new tt(i);if(r.g!="")n&&(r.g=n+"."+r.g),Vt(r,r.u);else{var a=f.location;r=a.protocol,n=n?n+"."+a.hostname:a.hostname,a=+a.port;const u=new tt(null);r&&Dt(u,r),n&&(u.g=n),a&&Vt(u,a),i&&(u.h=i),r=u}return i=t.G,n=t.wa,i&&n&&T(r,i,n),T(r,"VER",t.ka),Lt(t,r),r}function Kn(t,n,i){if(n&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return n=t.Aa&&!t.ma?new A(new xe({ab:i})):new A(t.ma),n.Fa(t.L),n}h.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jn(){}h=Jn.prototype,h.ra=function(){},h.qa=function(){},h.pa=function(){},h.oa=function(){},h.isActive=function(){return!0},h.Ka=function(){};function M(t,n){k.call(this),this.g=new Ln(n),this.l=t,this.h=n&&n.messageUrlParams||null,t=n&&n.messageHeaders||null,n&&n.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=n&&n.initMessageHeaders||null,n&&n.messageContentType&&(t?t["X-WebChannel-Content-Type"]=n.messageContentType:t={"X-WebChannel-Content-Type":n.messageContentType}),n&&n.sa&&(t?t["X-WebChannel-Client-Profile"]=n.sa:t={"X-WebChannel-Client-Profile":n.sa}),this.g.U=t,(t=n&&n.Qb)&&!wt(t)&&(this.g.u=t),this.A=n&&n.supportsCrossDomainXhr||!1,this.v=n&&n.sendRawJson||!1,(n=n&&n.httpSessionIdParam)&&!wt(n)&&(this.g.G=n,t=this.h,t!==null&&n in t&&(t=this.h,n in t&&delete t[n])),this.j=new yt(this)}I(M,k),M.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},M.prototype.close=function(){Le(this.g)},M.prototype.o=function(t){var n=this.g;if(typeof t=="string"){var i={};i.__data__=t,t=i}else this.v&&(i={},i.__data__=Te(t),t=i);n.i.push(new rs(n.Ya++,t)),n.I==3&&Qt(n)},M.prototype.N=function(){this.g.l=null,delete this.j,Le(this.g),delete this.g,M.Z.N.call(this)};function Xn(t){Ie.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var n=t.__sm__;if(n){t:{for(const i in n){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,n=n!==null&&t in n?n[t]:void 0),this.data=n}else this.data=t}I(Xn,Ie);function Wn(){Ae.call(this),this.status=1}I(Wn,Ae);function yt(t){this.g=t}I(yt,Jn),yt.prototype.ra=function(){O(this.g,"a")},yt.prototype.qa=function(t){O(this.g,new Xn(t))},yt.prototype.pa=function(t){O(this.g,new Wn)},yt.prototype.oa=function(){O(this.g,"b")},M.prototype.send=M.prototype.o,M.prototype.open=M.prototype.m,M.prototype.close=M.prototype.close,Re.NO_ERROR=0,Re.TIMEOUT=8,Re.HTTP_ERROR=6,es.COMPLETE="complete",Wi.EventType=It,It.OPEN="a",It.CLOSE="b",It.ERROR="c",It.MESSAGE="d",k.prototype.listen=k.prototype.J,A.prototype.listenOnce=A.prototype.K,A.prototype.getLastError=A.prototype.Ha,A.prototype.getLastErrorCode=A.prototype.ya,A.prototype.getStatus=A.prototype.ca,A.prototype.getResponseJson=A.prototype.La,A.prototype.getResponseText=A.prototype.la,A.prototype.send=A.prototype.ea,A.prototype.setWithCredentials=A.prototype.Fa}).apply(typeof ee<"u"?ee:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}j.UNAUTHENTICATED=new j(null),j.GOOGLE_CREDENTIALS=new j("google-credentials-uid"),j.FIRST_PARTY=new j("first-party-uid"),j.MOCK_USER=new j("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ce="12.13.0";function Rs(h){ce=h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=new ws("@firebase/firestore");function B(h,...e){if(oe.logLevel<=Ei.DEBUG){const s=e.map(Ti);oe.debug(`Firestore (${ce}): ${h}`,...s)}}function wi(h,...e){if(oe.logLevel<=Ei.ERROR){const s=e.map(Ti);oe.error(`Firestore (${ce}): ${h}`,...s)}}function Ti(h){if(typeof h=="string")return h;try{return(function(s){return JSON.stringify(s)})(h)}catch{return h}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(h,e,s){let o="Unexpected state";typeof e=="string"?o=e:s=e,Ii(h,o,s)}function Ii(h,e,s){let o=`FIRESTORE (${ce}) INTERNAL ASSERTION FAILED: ${e} (ID: ${h.toString(16)})`;if(s!==void 0)try{o+=" CONTEXT: "+JSON.stringify(s)}catch{o+=" CONTEXT: "+s}throw wi(o),new Error(o)}function Mt(h,e,s,o){let l="Unexpected state";typeof s=="string"?l=s:o=s,h||Ii(e,l,o)}function Ps(h,e){return h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",NOT_FOUND:"not-found",FAILED_PRECONDITION:"failed-precondition"};class _ extends Es{constructor(e,s){super(e,s),this.code=e,this.message=s,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.promise=new Promise(((e,s)=>{this.resolve=e,this.reject=s}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,s){this.user=s,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ds{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,s){e.enqueueRetryable((()=>s(j.UNAUTHENTICATED)))}shutdown(){}}class Vs{constructor(e){this.t=e,this.currentUser=j.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,s){Mt(this.o===void 0,42304);let o=this.i;const l=g=>this.i!==o?(o=this.i,s(g)):Promise.resolve();let c=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Ft,e.enqueueRetryable((()=>l(this.currentUser)))};const f=()=>{const g=c;e.enqueueRetryable((async()=>{await g.promise,await l(this.currentUser)}))},p=g=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((g=>p(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Ft)}}),0),f()}getToken(){const e=this.i,s=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(s).then((o=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):o?(Mt(typeof o.accessToken=="string",31837,{l:o}),new Ns(o.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Mt(e===null||typeof e=="string",2055,{h:e}),new j(e)}}class ks{constructor(e,s,o){this.P=e,this.T=s,this.I=o,this.type="FirstParty",this.user=j.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Os{constructor(e,s,o){this.P=e,this.T=s,this.I=o}getToken(){return Promise.resolve(new ks(this.P,this.T,this.I))}start(e,s){e.enqueueRetryable((()=>s(j.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Qn{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cs{constructor(e,s){this.V=s,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ts(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,s){Mt(this.o===void 0,3512);const o=c=>{c.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.m;return this.m=c.token,B("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?s(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>o(c)))};const l=c=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>l(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?l(c):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Qn(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((s=>s?(Mt(typeof s.token=="string",44558,{tokenResult:s}),this.m=s.token,new Qn(s.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(h){const e=typeof self<"u"&&(self.crypto||self.msCrypto),s=new Uint8Array(h);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(s);else for(let o=0;o<h;o++)s[o]=Math.floor(256*Math.random());return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=62*Math.floor(4.129032258064516);let o="";for(;o.length<20;){const l=bs(40);for(let c=0;c<l.length;++c)o.length<20&&l[c]<s&&(o+=e.charAt(l[c]%62))}return o}}function rt(h,e){return h<e?-1:h>e?1:0}function js(h,e){const s=Math.min(h.length,e.length);for(let o=0;o<s;o++){const l=h.charAt(o),c=e.charAt(o);if(l!==c)return qe(l)===qe(c)?rt(l,c):qe(l)?1:-1}return rt(h.length,e.length)}const Ls=55296,Ms=57343;function qe(h){const e=h.charCodeAt(0);return e>=Ls&&e<=Ms}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="__name__";class ${constructor(e,s,o){s===void 0?s=0:s>e.length&&x(637,{offset:s,range:e.length}),o===void 0?o=e.length-s:o>e.length-s&&x(1746,{length:o,range:e.length-s}),this.segments=e,this.offset=s,this.len=o}get length(){return this.len}isEqual(e){return $.comparator(this,e)===0}child(e){const s=this.segments.slice(this.offset,this.limit());return e instanceof $?e.forEach((o=>{s.push(o)})):s.push(e),this.construct(s)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let s=0;s<this.length;s++)if(this.get(s)!==e.get(s))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let s=0;s<this.length;s++)if(this.get(s)!==e.get(s))return!1;return!0}forEach(e){for(let s=this.offset,o=this.limit();s<o;s++)e(this.segments[s])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,s){const o=Math.min(e.length,s.length);for(let l=0;l<o;l++){const c=$.compareSegments(e.get(l),s.get(l));if(c!==0)return c}return rt(e.length,s.length)}static compareSegments(e,s){const o=$.isNumericId(e),l=$.isNumericId(s);return o&&!l?-1:!o&&l?1:o&&l?$.extractNumericId(e).compare($.extractNumericId(s)):js(e,s)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vi.fromString(e.substring(4,e.length-2))}}class L extends ${construct(e,s,o){return new L(e,s,o)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const s=[];for(const o of e){if(o.indexOf("//")>=0)throw new _(y.INVALID_ARGUMENT,`Invalid segment (${o}). Paths must not contain // in them.`);s.push(...o.split("/").filter((l=>l.length>0)))}return new L(s)}static emptyPath(){return new L([])}}const Fs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class U extends ${construct(e,s,o){return new U(e,s,o)}static isValidIdentifier(e){return Fs.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),U.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zn}static keyField(){return new U([Zn])}static fromServerFormat(e){const s=[];let o="",l=0;const c=()=>{if(o.length===0)throw new _(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);s.push(o),o=""};let f=!1;for(;l<e.length;){const p=e[l];if(p==="\\"){if(l+1===e.length)throw new _(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[l+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new _(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);o+=g,l+=2}else p==="`"?(f=!f,l++):p!=="."||f?(o+=p,l++):(c(),l++)}if(c(),f)throw new _(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new U(s)}static emptyPath(){return new U([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(L.fromString(e))}static fromName(e){return new X(L.fromString(e).popFirst(5))}static empty(){return new X(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&L.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,s){return L.comparator(e.path,s.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new L(e.slice()))}}function Us(h,e,s,o){if(e===!0&&o===!0)throw new _(y.INVALID_ARGUMENT,`${h} and ${s} cannot be used together.`)}function Ai(h){return typeof h=="object"&&h!==null&&(Object.getPrototypeOf(h)===Object.prototype||Object.getPrototypeOf(h)===null)}function Si(h){if(h===void 0)return"undefined";if(h===null)return"null";if(typeof h=="string")return h.length>20&&(h=`${h.substring(0,20)}...`),JSON.stringify(h);if(typeof h=="number"||typeof h=="boolean")return""+h;if(typeof h=="object"){if(h instanceof Array)return"an array";{const e=(function(o){return o.constructor?o.constructor.name:null})(h);return e?`a custom ${e} object`:"an object"}}return typeof h=="function"?"a function":x(12329,{type:typeof h})}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(h,e){const s={typeString:h};return e&&(s.value=e),s}function qt(h,e){if(!Ai(h))throw new _(y.INVALID_ARGUMENT,"JSON must be an object");let s;for(const o in e)if(e[o]){const l=e[o].typeString,c="value"in e[o]?{value:e[o].value}:void 0;if(!(o in h)){s=`JSON missing required field: '${o}'`;break}const f=h[o];if(l&&typeof f!==l){s=`JSON field '${o}' must be a ${l}.`;break}if(c!==void 0&&f!==c.value){s=`Expected '${o}' field to equal '${c.value}'`;break}}if(s)throw new _(y.INVALID_ARGUMENT,s);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=-62135596800,ei=1e6;class b{static now(){return b.fromMillis(Date.now())}static fromDate(e){return b.fromMillis(e.getTime())}static fromMillis(e){const s=Math.floor(e/1e3),o=Math.floor((e-1e3*s)*ei);return new b(s,o)}constructor(e,s){if(this.seconds=e,this.nanoseconds=s,s<0)throw new _(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+s);if(s>=1e9)throw new _(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+s);if(e<ti)throw new _(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ei}_compareTo(e){return this.seconds===e.seconds?rt(this.nanoseconds,e.nanoseconds):rt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:b._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(qt(e,b._jsonSchema))return new b(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ti;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}b._jsonSchemaVersion="firestore/timestamp/1.0",b._jsonSchema={type:S("string",b._jsonSchemaVersion),seconds:S("number"),nanoseconds:S("number")};function qs(h){return h.name==="IndexedDbTransactionError"}function Ri(h){return h===0&&1/h==-1/0}function Bs(h){return typeof h=="number"&&Number.isInteger(h)&&!Ri(h)&&h<=Number.MAX_SAFE_INTEGER&&h>=Number.MIN_SAFE_INTEGER}function Gs(h,e){for(const s in h)Object.prototype.hasOwnProperty.call(h,s)&&e(s,h[s])}function zs(h){for(const e in h)if(Object.prototype.hasOwnProperty.call(h,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,s){this.comparator=e,this.root=s||D.EMPTY}insert(e,s){return new he(this.comparator,this.root.insert(e,s,this.comparator).copy(null,null,D.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,D.BLACK,null,null))}get(e){let s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return s.value;o<0?s=s.left:o>0&&(s=s.right)}return null}indexOf(e){let s=0,o=this.root;for(;!o.isEmpty();){const l=this.comparator(e,o.key);if(l===0)return s+o.left.size;l<0?o=o.left:(s+=o.left.size+1,o=o.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((s,o)=>(e(s,o),!1)))}toString(){const e=[];return this.inorderTraversal(((s,o)=>(e.push(`${s}:${o}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ne(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ne(this.root,e,this.comparator,!1)}getReverseIterator(){return new ne(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ne(this.root,e,this.comparator,!0)}}class ne{constructor(e,s,o,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=s?o(e.key,s):1,s&&l&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const s={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return s}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class D{constructor(e,s,o,l,c){this.key=e,this.value=s,this.color=o??D.RED,this.left=l??D.EMPTY,this.right=c??D.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,s,o,l,c){return new D(e??this.key,s??this.value,o??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,s,o){let l=this;const c=o(e,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(e,s,o),null):c===0?l.copy(null,s,null,null,null):l.copy(null,null,null,null,l.right.insert(e,s,o)),l.fixUp()}removeMin(){if(this.left.isEmpty())return D.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,s){let o,l=this;if(s(e,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(e,s),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),s(e,l.key)===0){if(l.right.isEmpty())return D.EMPTY;o=l.right.min(),l=l.copy(o.key,o.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(e,s))}return l.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,D.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,D.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),s=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,s)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw x(27949);return e+(this.isRed()?0:1)}}D.EMPTY=null,D.RED=!0,D.BLACK=!1;D.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(e,s,o,l,c){return this}insert(e,s,o){return new D(e,s)}remove(e,s){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((s,o)=>(e(s),!1)))}forEachInRange(e,s){const o=this.data.getIteratorFrom(e[0]);for(;o.hasNext();){const l=o.getNext();if(this.comparator(l.key,e[1])>=0)return;s(l.key)}}forEachWhile(e,s){let o;for(o=s!==void 0?this.data.getIteratorFrom(s):this.data.getIterator();o.hasNext();)if(!e(o.getNext().key))return}firstAfterOrEqual(e){const s=this.data.getIteratorFrom(e);return s.hasNext()?s.getNext().key:null}getIterator(){return new ni(this.data.getIterator())}getIteratorFrom(e){return new ni(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let s=this;return s.size<e.size&&(s=e,e=this),e.forEach((o=>{s=s.add(o)})),s}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const s=this.data.getIterator(),o=e.data.getIterator();for(;s.hasNext();){const l=s.getNext().key,c=o.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((s=>{e.push(s)})),e}toString(){const e=[];return this.forEach((s=>e.push(s))),"SortedSet("+e.toString()+")"}copy(e){const s=new le(this.comparator);return s.data=e,s}}class ni{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const s=(function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new $s("Invalid base64 string: "+c):c}})(e);return new ft(s)}static fromUint8Array(e){const s=(function(l){let c="";for(let f=0;f<l.length;++f)c+=String.fromCharCode(l[f]);return c})(e);return new ft(s)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(s){return btoa(s)})(this.binaryString)}toUint8Array(){return(function(s){const o=new Uint8Array(s.length);for(let l=0;l<s.length;l++)o[l]=s.charCodeAt(l);return o})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return rt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs="server_timestamp",Ks="__type__";function Js(h){var s,o;return((o=(((s=h==null?void 0:h.mapValue)==null?void 0:s.fields)||{})[Ks])==null?void 0:o.stringValue)===Hs}const ii="(default)";class ae{constructor(e,s){this.projectId=e,this.database=s||ii}static empty(){return new ae("","")}get isDefaultDatabase(){return this.database===ii}isEqual(e){return e instanceof ae&&e.projectId===this.projectId&&e.database===this.database}}function Xs(h,e){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new _(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ae(h.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="__type__",Ys="__vector__",Qs="value";function si(h,e){return{referenceValue:`projects/${h.projectId}/databases/${h.database}/documents/${e.path.canonicalString()}`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,s){this.position=e,this.inclusive=s}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,s="asc"){this.field=e,this.dir=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,s=null,o=[],l=[],c=null,f="F",p=null,g=null){this.path=e,this.collectionGroup=s,this.explicitOrderBy=o,this.filters=l,this.limit=c,this.limitType=f,this.startAt=p,this.endAt=g,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Zs(h){return new Pi(h)}function tr(h){return h.collectionGroup!==null}function er(h){const e=Ps(h);if(e.Ie===null){e.Ie=[];const s=new Set;for(const c of e.explicitOrderBy)e.Ie.push(c),s.add(c.field.canonicalString());const o=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new le(U.comparator);return f.filters.forEach((g=>{g.getFlattenedFilters().forEach((E=>{E.isInequality()&&(p=p.add(E.field))}))})),p})(e).forEach((c=>{s.has(c.canonicalString())||c.isKeyField()||e.Ie.push(new oi(c,o))})),s.has(U.keyField().canonicalString())||e.Ie.push(new oi(U.keyField(),o))}return e.Ie}function nr(h,e){return new Pi(h.path,h.collectionGroup,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,e,h.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(h,e){if(h.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ri(e)?"-0":e}}function ir(h){return{integerValue:""+h}}function sr(h,e){return Bs(e)?ir(e):Ni(h,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hi,v;(v=hi||(hi={}))[v.OK=0]="OK",v[v.CANCELLED=1]="CANCELLED",v[v.UNKNOWN=2]="UNKNOWN",v[v.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",v[v.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",v[v.NOT_FOUND=5]="NOT_FOUND",v[v.ALREADY_EXISTS=6]="ALREADY_EXISTS",v[v.PERMISSION_DENIED=7]="PERMISSION_DENIED",v[v.UNAUTHENTICATED=16]="UNAUTHENTICATED",v[v.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",v[v.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",v[v.ABORTED=10]="ABORTED",v[v.OUT_OF_RANGE=11]="OUT_OF_RANGE",v[v.UNIMPLEMENTED=12]="UNIMPLEMENTED",v[v.INTERNAL=13]="INTERNAL",v[v.UNAVAILABLE=14]="UNAVAILABLE",v[v.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new vi([4294967295,4294967295],0);class rr{constructor(e,s){this.databaseId=e,this.useProto3Json=s}}function li(h,e){return h.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function or(h,e){return h.useProto3Json?e.toBase64():e.toUint8Array()}function hr(h,e){return lr(h,e).canonicalString()}function lr(h,e){const s=(function(l){return new L(["projects",l.projectId,"databases",l.database])})(h).child("documents");return e===void 0?s:s.child(e)}function Di(h){return!!h&&typeof h._toProto=="function"&&h._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=1048576;function Be(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(h){return new rr(h,!0)}class cr{constructor(e,s,o=1e3,l=1.5,c=6e4){this.Ci=e,this.timerId=s,this.R_=o,this.A_=l,this.V_=c,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const s=Math.floor(this.d_+this.y_()),o=Math.max(0,Date.now()-this.f_),l=Math.max(0,s-o);l>0&&B("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.d_} ms, delay with jitter: ${s} ms, last attempt: ${o} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,l,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,s,o,l,c){this.asyncQueue=e,this.timerId=s,this.targetTimeMs=o,this.op=l,this.removalCallback=c,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,s,o,l,c){const f=Date.now()+o,p=new Ge(e,s,f,l,c);return p.start(o),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var ai,ui;(ui=ai||(ai={})).Ba="default",ui.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(h){const e={};return h.timeoutSeconds!==void 0&&(e.timeoutSeconds=h.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="ComponentProvider",ci=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="firestore.googleapis.com",fi=!0;class di{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new _(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pr,this.ssl=fi}else this.host=e.host,this.ssl=e.ssl??fi;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ar;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ur)throw new _(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Us("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fr(e.experimentalLongPollingOptions??{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new _(y.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new _(y.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new _(y.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(o,l){return o.timeoutSeconds===l.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gr{constructor(e,s,o,l){this._authCredentials=e,this._appCheckCredentials=s,this._databaseId=o,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new di({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new _(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new _(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new di(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(o){if(!o)return new Ds;switch(o.type){case"firstParty":return new Os(o.sessionIndex||"0",o.iamToken||null,o.authTokenFactory||null);case"provider":return o.client;default:throw new _(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(s){const o=ci.get(s);o&&(B(dr,"Removing Datastore"),ci.delete(s),o.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,s,o){this.converter=s,this._query=o,this.type="query",this.firestore=e}withConverter(e){return new fe(this.firestore,e,this._query)}}class F{constructor(e,s,o){this.converter=s,this._key=o,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ze(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new F(this.firestore,e,this._key)}toJSON(){return{type:F._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,s,o){if(qt(s,F._jsonSchema))return new F(e,o||null,new X(L.fromString(s.referencePath)))}}F._jsonSchemaVersion="firestore/documentReference/1.0",F._jsonSchema={type:S("string",F._jsonSchemaVersion),referencePath:S("string")};class ze extends fe{constructor(e,s,o){super(e,s,Zs(o)),this._path=o,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new F(this.firestore,null,new X(e))}withConverter(e){return new ze(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi="AsyncQueue";class gi{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new cr(this,"async_queue_retry"),this.lc=()=>{const o=Be();o&&B(pi,"Visibility state changed to "+o.visibilityState),this.M_.w_()},this.hc=e;const s=Be();s&&typeof s.addEventListener=="function"&&s.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const s=Be();s&&typeof s.removeEventListener=="function"&&s.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise((()=>{}));const s=new Ft;return this.Tc((()=>this.sc&&this.uc?Promise.resolve():(e().then(s.resolve,s.reject),s.promise))).then((()=>s.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.rc.push(e),this.Ic())))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!qs(e))throw e;B(pi,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_((()=>this.Ic()))}}Tc(e){const s=this.hc.then((()=>(this.ac=!0,e().catch((o=>{throw this._c=o,this.ac=!1,wi("INTERNAL UNHANDLED ERROR: ",mi(o)),o})).then((o=>(this.ac=!1,o))))));return this.hc=s,s}enqueueAfterDelay(e,s,o){this.Pc(),this.cc.indexOf(e)>-1&&(s=0);const l=Ge.createAndSchedule(this,e,s,o,(c=>this.Ec(c)));return this.oc.push(l),l}Pc(){this._c&&x(47125,{Rc:mi(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const s of this.oc)if(s.timerId===e)return!0;return!1}dc(e){return this.Ac().then((()=>{this.oc.sort(((s,o)=>s.targetTimeMs-o.targetTimeMs));for(const s of this.oc)if(s.skipDelay(),e!=="all"&&s.timerId===e)break;return this.Ac()}))}mc(e){this.cc.push(e)}Ec(e){const s=this.oc.indexOf(e);this.oc.splice(s,1)}}function mi(h){let e=h.message||"";return h.stack&&(e=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),e}class mr extends gr{constructor(e,s,o,l){super(e,s,o,l),this.type="firestore",this._queue=new gi,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gi(e),this._firestoreClient=void 0,await e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this._byteString=e}static fromBase64String(e){try{return new q(ft.fromBase64String(e))}catch(s){throw new _(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+s)}}static fromUint8Array(e){return new q(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:q._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(qt(e,q._jsonSchema))return q.fromBase64String(e.bytes)}}q._jsonSchemaVersion="firestore/bytes/1.0",q._jsonSchema={type:S("string",q._jsonSchemaVersion),bytes:S("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(...e){for(let s=0;s<e.length;++s)if(e[s].length===0)throw new _(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new U(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,s){if(!isFinite(e)||e<-90||e>90)throw new _(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(s)||s<-180||s>180)throw new _(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+s);this._lat=e,this._long=s}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return rt(this._lat,e._lat)||rt(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:W._jsonSchemaVersion}}static fromJSON(e){if(qt(e,W._jsonSchema))return new W(e.latitude,e.longitude)}}W._jsonSchemaVersion="firestore/geoPoint/1.0",W._jsonSchema={type:S("string",W._jsonSchemaVersion),latitude:S("number"),longitude:S("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this._values=(e||[]).map((s=>s))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(o,l){if(o.length!==l.length)return!1;for(let c=0;c<o.length;++c)if(o[c]!==l[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:H._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(qt(e,H._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((s=>typeof s=="number")))return new H(e.vectorValues);throw new _(y.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}H._jsonSchemaVersion="firestore/vectorValue/1.0",H._jsonSchema={type:S("string",H._jsonSchemaVersion),vectorValues:S("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=/^__.*__$/;function Ci(h){switch(h){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{dataSource:h})}}class $e{constructor(e,s,o,l,c,f){this.settings=e,this.databaseId=s,this.serializer=o,this.ignoreUndefinedProperties=l,c===void 0&&this.fc(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new $e({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var l;const s=(l=this.path)==null?void 0:l.child(e),o=this.i({path:s,arrayElement:!1});return o.wc(e),o}Sc(e){var l;const s=(l=this.path)==null?void 0:l.child(e),o=this.i({path:s,arrayElement:!1});return o.fc(),o}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return ue(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((s=>e.isPrefixOf(s)))!==void 0||this.fieldTransforms.find((s=>e.isPrefixOf(s.field)))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Ci(this.dataSource)&&yr.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class _r{constructor(e,s,o){this.databaseId=e,this.ignoreUndefinedProperties=s,this.serializer=o||Vi(e)}V(e,s,o,l=!1){return new $e({dataSource:e,methodName:s,targetDoc:o,path:U.emptyPath(),arrayElement:!1,hasConverter:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vr(h){const e=h._freezeSettings(),s=Vi(h._databaseId);return new _r(h._databaseId,!!e.ignoreUndefinedProperties,s)}function Er(h,e,s,o=!1){return He(s,h.V(o?4:3,e))}function He(h,e){if(bi(h=re(h)))return Tr("Unsupported field value:",e,h),wr(h,e);if(h instanceof Oi)return(function(o,l){if(!Ci(l.dataSource))throw l.Dc(`${o._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Dc(`${o._methodName}() is not currently supported inside arrays`);const c=o._toFieldTransform(l);c&&l.fieldTransforms.push(c)})(h,e),null;if(h===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),h instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return(function(o,l){const c=[];let f=0;for(const p of o){let g=He(p,l.bc(f));g==null&&(g={nullValue:"NULL_VALUE"}),c.push(g),f++}return{arrayValue:{values:c}}})(h,e)}return(function(o,l){if((o=re(o))===null)return{nullValue:"NULL_VALUE"};if(typeof o=="number")return sr(l.serializer,o);if(typeof o=="boolean")return{booleanValue:o};if(typeof o=="string")return{stringValue:o};if(o instanceof Date){const c=b.fromDate(o);return{timestampValue:li(l.serializer,c)}}if(o instanceof b){const c=new b(o.seconds,1e3*Math.floor(o.nanoseconds/1e3));return{timestampValue:li(l.serializer,c)}}if(o instanceof W)return{geoPointValue:{latitude:o.latitude,longitude:o.longitude}};if(o instanceof q)return{bytesValue:or(l.serializer,o._byteString)};if(o instanceof F){const c=l.databaseId,f=o.firestore._databaseId;if(!f.isEqual(c))throw l.Dc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:hr(o.firestore._databaseId||l.databaseId,o._key.path)}}if(o instanceof H)return(function(f,p){const g=f instanceof H?f.toArray():f;return{mapValue:{fields:{[Ws]:{stringValue:Ys},[Qs]:{arrayValue:{values:g.map((P=>{if(typeof P!="number")throw p.Dc("VectorValues must only contain numeric values.");return Ni(p.serializer,P)}))}}}}}})(o,l);if(Di(o))return o._toProto(l.serializer);throw l.Dc(`Unsupported field value: ${Si(o)}`)})(h,e)}function wr(h,e){const s={};return zs(h)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gs(h,((o,l)=>{const c=He(l,e.yc(o));c!=null&&(s[o]=c)})),{mapValue:{fields:s}}}function bi(h){return!(typeof h!="object"||h===null||h instanceof Array||h instanceof Date||h instanceof b||h instanceof W||h instanceof q||h instanceof F||h instanceof Oi||h instanceof H||Di(h))}function Tr(h,e,s){if(!bi(s)||!Ai(s)){const o=Si(s);throw o==="an object"?e.Dc(h+" a custom object"):e.Dc(h+" "+o)}}function xi(h,e,s){if((e=re(e))instanceof ki)return e._internalPath;if(typeof e=="string")return Ar(h,e);throw ue("Field path arguments must be of type string or ",h,!1,void 0,s)}const Ir=new RegExp("[~\\*/\\[\\]]");function Ar(h,e,s){if(e.search(Ir)>=0)throw ue(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,h,!1,void 0,s);try{return new ki(...e.split("."))._internalPath}catch{throw ue(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,h,!1,void 0,s)}}function ue(h,e,s,o,l){const c=o&&!o.isEmpty(),f=l!==void 0;let p=`Function ${e}() called with invalid data`;s&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(c||f)&&(g+=" (found",c&&(g+=` in field ${o}`),f&&(g+=` in document ${l}`),g+=")"),new _(y.INVALID_ARGUMENT,p+h+g)}const yi="@firebase/firestore",_i="4.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,s,o,l,c){this._firestore=e,this._userDataWriter=s,this._key=o,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new F(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Sr(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const s=this._document.data.field(xi("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s)}}}class Sr extends Ke{data(){return super.data()}}class Rr{}class Pr extends Rr{}class Je extends Pr{constructor(e,s,o){super(),this.type=e,this._docOrFields=s,this._inclusive=o}static _create(e,s,o){return new Je(e,s,o)}_apply(e){const s=Nr(e,this.type,this._docOrFields,this._inclusive);return new fe(e.firestore,e.converter,nr(e._query,s))}}function Or(...h){return Je._create("startAfter",h,!1)}function Nr(h,e,s,o){if(s[0]=re(s[0]),s[0]instanceof Ke)return(function(c,f,p,g,E){if(!g)throw new _(y.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${p}().`);const P=[];for(const I of er(c))if(I.field.isKeyField())P.push(si(f,g.key));else{const Y=g.data.field(I.field);if(Js(Y))throw new _(y.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+I.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(Y===null){const K=I.field.canonicalString();throw new _(y.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${K}' (used as the orderBy) does not exist.`)}P.push(Y)}return new ri(P,E)})(h._query,h.firestore._databaseId,e,s[0]._document,o);{const l=vr(h.firestore);return(function(f,p,g,E,P,I){const Y=f.explicitOrderBy;if(P.length>Y.length)throw new _(y.INVALID_ARGUMENT,`Too many arguments provided to ${E}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const K=[];for(let ot=0;ot<P.length;ot++){const Q=P[ot];if(Y[ot].field.isKeyField()){if(typeof Q!="string")throw new _(y.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${E}(), but got a ${typeof Q}`);if(!tr(f)&&Q.indexOf("/")!==-1)throw new _(y.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${E}() must be a plain document ID, but '${Q}' contains a slash.`);const ht=f.path.child(L.fromString(Q));if(!X.isDocumentKey(ht))throw new _(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${E}() must result in a valid document path, but '${ht}' is not because it contains an odd number of segments.`);const de=new X(ht);K.push(si(p,de))}else{const ht=Er(g,E,Q);K.push(ht)}}return new ri(K,I)})(h._query,h.firestore._databaseId,l,e,s,o)}}class ie{constructor(e,s){this.hasPendingWrites=e,this.fromCache=s}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _t extends Ke{constructor(e,s,o,l,c,f){super(e,s,o,l,f),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const s=new se(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(s,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,s={}){if(this._document){const o=this._document.data.field(xi("DocumentSnapshot.get",e));if(o!==null)return this._userDataWriter.convertValue(o,s.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new _(y.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,s={};return s.type=_t._jsonSchemaVersion,s.bundle="",s.bundleSource="DocumentSnapshot",s.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?s:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),s.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),s)}}_t._jsonSchemaVersion="firestore/documentSnapshot/1.0",_t._jsonSchema={type:S("string",_t._jsonSchemaVersion),bundleSource:S("string","DocumentSnapshot"),bundleName:S("string"),bundle:S("string")};class se extends _t{data(e={}){return super.data(e)}}class Ut{constructor(e,s,o,l){this._firestore=e,this._userDataWriter=s,this._snapshot=l,this.metadata=new ie(l.hasPendingWrites,l.fromCache),this.query=o}get docs(){const e=[];return this.forEach((s=>e.push(s))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,s){this._snapshot.docs.forEach((o=>{e.call(s,new se(this._firestore,this._userDataWriter,o.key,o,new ie(this._snapshot.mutatedKeys.has(o.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const s=!!e.includeMetadataChanges;if(s&&this._snapshot.excludesMetadataChanges)throw new _(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===s||(this._cachedChanges=(function(l,c){if(l._snapshot.oldDocs.isEmpty()){let f=0;return l._snapshot.docChanges.map((p=>{const g=new se(l._firestore,l._userDataWriter,p.doc.key,p.doc,new ie(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}}))}{let f=l._snapshot.oldDocs;return l._snapshot.docChanges.filter((p=>c||p.type!==3)).map((p=>{const g=new se(l._firestore,l._userDataWriter,p.doc.key,p.doc,new ie(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);let E=-1,P=-1;return p.type!==0&&(E=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),P=f.indexOf(p.doc.key)),{type:Dr(p.type),doc:g,oldIndex:E,newIndex:P}}))}})(this,s),this._cachedChangesIncludeMetadataChanges=s),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new _(y.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ut._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const s=[],o=[],l=[];return this.docs.forEach((c=>{c._document!==null&&(s.push(c._document),o.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),l.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Dr(h){switch(h){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:h})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut._jsonSchemaVersion="firestore/querySnapshot/1.0",Ut._jsonSchema={type:S("string",Ut._jsonSchemaVersion),bundleSource:S("string","QuerySnapshot"),bundleName:S("string"),bundle:S("string")};(function(e,s=!0){Rs(Ss),Is(new As("firestore",((o,{instanceIdentifier:l,options:c})=>{const f=o.getProvider("app").getImmediate(),p=new mr(new Vs(o.getProvider("auth-internal")),new Cs(f,o.getProvider("app-check-internal")),Xs(f,l),f);return c={useFetchStreams:s,...c},p._setSettings(c),p}),"PUBLIC").setMultipleInstances(!0)),Yn(yi,_i,e),Yn(yi,_i,"esm2020")})();export{q as Bytes,ze as CollectionReference,F as DocumentReference,_t as DocumentSnapshot,ki as FieldPath,Oi as FieldValue,mr as Firestore,_ as FirestoreError,W as GeoPoint,fe as Query,Pr as QueryConstraint,se as QueryDocumentSnapshot,Ut as QuerySnapshot,Je as QueryStartAtConstraint,ie as SnapshotMetadata,b as Timestamp,H as VectorValue,xs as _AutoId,ft as _ByteString,ae as _DatabaseId,X as _DocumentKey,Ds as _EmptyAuthCredentialsProvider,U as _FieldPath,Us as _validateIsNotUsedTogether,Or as startAfter};
