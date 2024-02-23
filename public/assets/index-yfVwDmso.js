function tb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function qI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var WI={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu=Symbol.for("react.element"),nb=Symbol.for("react.portal"),rb=Symbol.for("react.fragment"),ib=Symbol.for("react.strict_mode"),sb=Symbol.for("react.profiler"),ob=Symbol.for("react.provider"),ab=Symbol.for("react.context"),lb=Symbol.for("react.forward_ref"),ub=Symbol.for("react.suspense"),cb=Symbol.for("react.memo"),db=Symbol.for("react.lazy"),iw=Symbol.iterator;function hb(t){return t===null||typeof t!="object"?null:(t=iw&&t[iw]||t["@@iterator"],typeof t=="function"?t:null)}var GI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},HI=Object.assign,KI={};function Zo(t,e,n){this.props=t,this.context=e,this.refs=KI,this.updater=n||GI}Zo.prototype.isReactComponent={};Zo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function QI(){}QI.prototype=Zo.prototype;function $g(t,e,n){this.props=t,this.context=e,this.refs=KI,this.updater=n||GI}var Bg=$g.prototype=new QI;Bg.constructor=$g;HI(Bg,Zo.prototype);Bg.isPureReactComponent=!0;var sw=Array.isArray,YI=Object.prototype.hasOwnProperty,zg={current:null},XI={key:!0,ref:!0,__self:!0,__source:!0};function JI(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)YI.call(e,r)&&!XI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Iu,type:t,key:s,ref:o,props:i,_owner:zg.current}}function fb(t,e){return{$$typeof:Iu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Iu}function pb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ow=/\/+/g;function $f(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pb(""+t.key):e.toString(36)}function Uc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Iu:case nb:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+$f(o,0):r,sw(i)?(n="",t!=null&&(n=t.replace(ow,"$&/")+"/"),Uc(i,e,n,"",function(u){return u})):i!=null&&(jg(i)&&(i=fb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ow,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",sw(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+$f(s,a);o+=Uc(s,e,n,l,i)}else if(l=hb(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+$f(s,a++),o+=Uc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sc(t,e,n){if(t==null)return t;var r=[],i=0;return Uc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function mb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},$c={transition:null},gb={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:$c,ReactCurrentOwner:zg};X.Children={map:sc,forEach:function(t,e,n){sc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sc(t,function(){e++}),e},toArray:function(t){return sc(t,function(e){return e})||[]},only:function(t){if(!jg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=Zo;X.Fragment=rb;X.Profiler=sb;X.PureComponent=$g;X.StrictMode=ib;X.Suspense=ub;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gb;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=HI({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)YI.call(e,l)&&!XI.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Iu,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:ab,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ob,_context:t},t.Consumer=t};X.createElement=JI;X.createFactory=function(t){var e=JI.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:lb,render:t}};X.isValidElement=jg;X.lazy=function(t){return{$$typeof:db,_payload:{_status:-1,_result:t},_init:mb}};X.memo=function(t,e){return{$$typeof:cb,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=$c.transition;$c.transition={};try{t()}finally{$c.transition=e}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(t,e){return kt.current.useCallback(t,e)};X.useContext=function(t){return kt.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};X.useEffect=function(t,e){return kt.current.useEffect(t,e)};X.useId=function(){return kt.current.useId()};X.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return kt.current.useMemo(t,e)};X.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};X.useRef=function(t){return kt.current.useRef(t)};X.useState=function(t){return kt.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return kt.current.useTransition()};X.version="18.2.0";WI.exports=X;var T=WI.exports;const f=qI(T),qp=tb({__proto__:null,default:f},[T]);var ZI={exports:{}},tn={},eT={exports:{}},tT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,G){var H=F.length;F.push(G);e:for(;0<H;){var be=H-1>>>1,je=F[be];if(0<i(je,G))F[be]=G,F[H]=je,H=be;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var G=F[0],H=F.pop();if(H!==G){F[0]=H;e:for(var be=0,je=F.length,rc=je>>>1;be<rc;){var bi=2*(be+1)-1,Uf=F[bi],xi=bi+1,ic=F[xi];if(0>i(Uf,H))xi<je&&0>i(ic,Uf)?(F[be]=ic,F[xi]=H,be=xi):(F[be]=Uf,F[bi]=H,be=bi);else if(xi<je&&0>i(ic,H))F[be]=ic,F[xi]=H,be=xi;else break e}}return G}function i(F,G){var H=F.sortIndex-G.sortIndex;return H!==0?H:F.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,y=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(F){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=F)r(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function E(F){if(v=!1,g(F),!y)if(n(l)!==null)y=!0,Mf(R);else{var G=n(u);G!==null&&Ff(E,G.startTime-F)}}function R(F,G){y=!1,v&&(v=!1,_(N),N=-1),p=!0;var H=h;try{for(g(G),d=n(l);d!==null&&(!(d.expirationTime>G)||F&&!zt());){var be=d.callback;if(typeof be=="function"){d.callback=null,h=d.priorityLevel;var je=be(d.expirationTime<=G);G=t.unstable_now(),typeof je=="function"?d.callback=je:d===n(l)&&r(l),g(G)}else r(l);d=n(l)}if(d!==null)var rc=!0;else{var bi=n(u);bi!==null&&Ff(E,bi.startTime-G),rc=!1}return rc}finally{d=null,h=H,p=!1}}var C=!1,b=null,N=-1,J=5,q=-1;function zt(){return!(t.unstable_now()-q<J)}function wa(){if(b!==null){var F=t.unstable_now();q=F;var G=!0;try{G=b(!0,F)}finally{G?Ea():(C=!1,b=null)}}else C=!1}var Ea;if(typeof m=="function")Ea=function(){m(wa)};else if(typeof MessageChannel<"u"){var rw=new MessageChannel,eb=rw.port2;rw.port1.onmessage=wa,Ea=function(){eb.postMessage(null)}}else Ea=function(){w(wa,0)};function Mf(F){b=F,C||(C=!0,Ea())}function Ff(F,G){N=w(function(){F(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,Mf(R))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var H=h;h=G;try{return F()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var H=h;h=F;try{return G()}finally{h=H}},t.unstable_scheduleCallback=function(F,G,H){var be=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?be+H:be):H=be,F){case 1:var je=-1;break;case 2:je=250;break;case 5:je=1073741823;break;case 4:je=1e4;break;default:je=5e3}return je=H+je,F={id:c++,callback:G,priorityLevel:F,startTime:H,expirationTime:je,sortIndex:-1},H>be?(F.sortIndex=H,e(u,F),n(l)===null&&F===n(u)&&(v?(_(N),N=-1):v=!0,Ff(E,H-be))):(F.sortIndex=je,e(l,F),y||p||(y=!0,Mf(R))),F},t.unstable_shouldYield=zt,t.unstable_wrapCallback=function(F){var G=h;return function(){var H=h;h=G;try{return F.apply(this,arguments)}finally{h=H}}}})(tT);eT.exports=tT;var _b=eT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nT=T,Yt=_b;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rT=new Set,Il={};function Rs(t,e){Co(t,e),Co(t+"Capture",e)}function Co(t,e){for(Il[t]=e,t=0;t<e.length;t++)rT.add(e[t])}var lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wp=Object.prototype.hasOwnProperty,yb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,aw={},lw={};function vb(t){return Wp.call(lw,t)?!0:Wp.call(aw,t)?!1:yb.test(t)?lw[t]=!0:(aw[t]=!0,!1)}function wb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Eb(t,e,n,r){if(e===null||typeof e>"u"||wb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){at[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];at[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){at[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){at[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){at[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){at[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){at[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){at[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){at[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var qg=/[\-:]([a-z])/g;function Wg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qg,Wg);at[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qg,Wg);at[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qg,Wg);at[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){at[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});at.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){at[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gg(t,e,n,r){var i=at.hasOwnProperty(e)?at[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Eb(e,n,i,r)&&(n=null),r||i===null?vb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var yr=nT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oc=Symbol.for("react.element"),Xs=Symbol.for("react.portal"),Js=Symbol.for("react.fragment"),Hg=Symbol.for("react.strict_mode"),Gp=Symbol.for("react.profiler"),iT=Symbol.for("react.provider"),sT=Symbol.for("react.context"),Kg=Symbol.for("react.forward_ref"),Hp=Symbol.for("react.suspense"),Kp=Symbol.for("react.suspense_list"),Qg=Symbol.for("react.memo"),Or=Symbol.for("react.lazy"),oT=Symbol.for("react.offscreen"),uw=Symbol.iterator;function Ia(t){return t===null||typeof t!="object"?null:(t=uw&&t[uw]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Bf;function za(t){if(Bf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bf=e&&e[1]||""}return`
`+Bf+t}var zf=!1;function jf(t,e){if(!t||zf)return"";zf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{zf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?za(t):""}function Ib(t){switch(t.tag){case 5:return za(t.type);case 16:return za("Lazy");case 13:return za("Suspense");case 19:return za("SuspenseList");case 0:case 2:case 15:return t=jf(t.type,!1),t;case 11:return t=jf(t.type.render,!1),t;case 1:return t=jf(t.type,!0),t;default:return""}}function Qp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Js:return"Fragment";case Xs:return"Portal";case Gp:return"Profiler";case Hg:return"StrictMode";case Hp:return"Suspense";case Kp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sT:return(t.displayName||"Context")+".Consumer";case iT:return(t._context.displayName||"Context")+".Provider";case Kg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qg:return e=t.displayName||null,e!==null?e:Qp(t.type)||"Memo";case Or:e=t._payload,t=t._init;try{return Qp(t(e))}catch{}}return null}function Tb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qp(e);case 8:return e===Hg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ni(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function aT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Sb(t){var e=aT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ac(t){t._valueTracker||(t._valueTracker=Sb(t))}function lT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=aT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ud(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yp(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ni(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uT(t,e){e=e.checked,e!=null&&Gg(t,"checked",e,!1)}function Xp(t,e){uT(t,e);var n=ni(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Jp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Jp(t,e.type,ni(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Jp(t,e,n){(e!=="number"||ud(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ja=Array.isArray;function fo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ni(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Zp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(ja(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ni(n)}}function cT(t,e){var n=ni(e.value),r=ni(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function fw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function em(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lc,hT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lc=lc||document.createElement("div"),lc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Tl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var tl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rb=["Webkit","ms","Moz","O"];Object.keys(tl).forEach(function(t){Rb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),tl[e]=tl[t]})});function fT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||tl.hasOwnProperty(t)&&tl[t]?(""+e).trim():e+"px"}function pT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Pb=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tm(t,e){if(e){if(Pb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function nm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rm=null;function Yg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var im=null,po=null,mo=null;function pw(t){if(t=Ru(t)){if(typeof im!="function")throw Error(k(280));var e=t.stateNode;e&&(e=vh(e),im(t.stateNode,t.type,e))}}function mT(t){po?mo?mo.push(t):mo=[t]:po=t}function gT(){if(po){var t=po,e=mo;if(mo=po=null,pw(t),e)for(t=0;t<e.length;t++)pw(e[t])}}function _T(t,e){return t(e)}function yT(){}var qf=!1;function vT(t,e,n){if(qf)return t(e,n);qf=!0;try{return _T(t,e,n)}finally{qf=!1,(po!==null||mo!==null)&&(yT(),gT())}}function Sl(t,e){var n=t.stateNode;if(n===null)return null;var r=vh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var sm=!1;if(lr)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){sm=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{sm=!1}function Ab(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var nl=!1,cd=null,dd=!1,om=null,Cb={onError:function(t){nl=!0,cd=t}};function kb(t,e,n,r,i,s,o,a,l){nl=!1,cd=null,Ab.apply(Cb,arguments)}function bb(t,e,n,r,i,s,o,a,l){if(kb.apply(this,arguments),nl){if(nl){var u=cd;nl=!1,cd=null}else throw Error(k(198));dd||(dd=!0,om=u)}}function Ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mw(t){if(Ps(t)!==t)throw Error(k(188))}function xb(t){var e=t.alternate;if(!e){if(e=Ps(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return mw(i),t;if(s===r)return mw(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function ET(t){return t=xb(t),t!==null?IT(t):null}function IT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=IT(t);if(e!==null)return e;t=t.sibling}return null}var TT=Yt.unstable_scheduleCallback,gw=Yt.unstable_cancelCallback,Nb=Yt.unstable_shouldYield,Db=Yt.unstable_requestPaint,xe=Yt.unstable_now,Ob=Yt.unstable_getCurrentPriorityLevel,Xg=Yt.unstable_ImmediatePriority,ST=Yt.unstable_UserBlockingPriority,hd=Yt.unstable_NormalPriority,Vb=Yt.unstable_LowPriority,RT=Yt.unstable_IdlePriority,mh=null,jn=null;function Lb(t){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(mh,t,void 0,(t.current.flags&128)===128)}catch{}}var Tn=Math.clz32?Math.clz32:Ub,Mb=Math.log,Fb=Math.LN2;function Ub(t){return t>>>=0,t===0?32:31-(Mb(t)/Fb|0)|0}var uc=64,cc=4194304;function qa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=qa(a):(s&=o,s!==0&&(r=qa(s)))}else o=n&~i,o!==0?r=qa(o):s!==0&&(r=qa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Tn(e),i=1<<n,r|=t[n],e&=~i;return r}function $b(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bb(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Tn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=$b(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function am(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function PT(){var t=uc;return uc<<=1,!(uc&4194240)&&(uc=64),t}function Wf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Tu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Tn(e),t[e]=n}function zb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Tn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Jg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Tn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function AT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var CT,Zg,kT,bT,xT,lm=!1,dc=[],Wr=null,Gr=null,Hr=null,Rl=new Map,Pl=new Map,Lr=[],jb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _w(t,e){switch(t){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":Rl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(e.pointerId)}}function Sa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ru(e),e!==null&&Zg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qb(t,e,n,r,i){switch(e){case"focusin":return Wr=Sa(Wr,t,e,n,r,i),!0;case"dragenter":return Gr=Sa(Gr,t,e,n,r,i),!0;case"mouseover":return Hr=Sa(Hr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Rl.set(s,Sa(Rl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Pl.set(s,Sa(Pl.get(s)||null,t,e,n,r,i)),!0}return!1}function NT(t){var e=ji(t.target);if(e!==null){var n=Ps(e);if(n!==null){if(e=n.tag,e===13){if(e=wT(n),e!==null){t.blockedOn=e,xT(t.priority,function(){kT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=um(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);rm=r,n.target.dispatchEvent(r),rm=null}else return e=Ru(n),e!==null&&Zg(e),t.blockedOn=n,!1;e.shift()}return!0}function yw(t,e,n){Bc(t)&&n.delete(e)}function Wb(){lm=!1,Wr!==null&&Bc(Wr)&&(Wr=null),Gr!==null&&Bc(Gr)&&(Gr=null),Hr!==null&&Bc(Hr)&&(Hr=null),Rl.forEach(yw),Pl.forEach(yw)}function Ra(t,e){t.blockedOn===e&&(t.blockedOn=null,lm||(lm=!0,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,Wb)))}function Al(t){function e(i){return Ra(i,t)}if(0<dc.length){Ra(dc[0],t);for(var n=1;n<dc.length;n++){var r=dc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Wr!==null&&Ra(Wr,t),Gr!==null&&Ra(Gr,t),Hr!==null&&Ra(Hr,t),Rl.forEach(e),Pl.forEach(e),n=0;n<Lr.length;n++)r=Lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Lr.length&&(n=Lr[0],n.blockedOn===null);)NT(n),n.blockedOn===null&&Lr.shift()}var go=yr.ReactCurrentBatchConfig,pd=!0;function Gb(t,e,n,r){var i=re,s=go.transition;go.transition=null;try{re=1,e_(t,e,n,r)}finally{re=i,go.transition=s}}function Hb(t,e,n,r){var i=re,s=go.transition;go.transition=null;try{re=4,e_(t,e,n,r)}finally{re=i,go.transition=s}}function e_(t,e,n,r){if(pd){var i=um(t,e,n,r);if(i===null)tp(t,e,r,md,n),_w(t,r);else if(qb(i,t,e,n,r))r.stopPropagation();else if(_w(t,r),e&4&&-1<jb.indexOf(t)){for(;i!==null;){var s=Ru(i);if(s!==null&&CT(s),s=um(t,e,n,r),s===null&&tp(t,e,r,md,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else tp(t,e,r,null,n)}}var md=null;function um(t,e,n,r){if(md=null,t=Yg(r),t=ji(t),t!==null)if(e=Ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return md=t,null}function DT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ob()){case Xg:return 1;case ST:return 4;case hd:case Vb:return 16;case RT:return 536870912;default:return 16}default:return 16}}var $r=null,t_=null,zc=null;function OT(){if(zc)return zc;var t,e=t_,n=e.length,r,i="value"in $r?$r.value:$r.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zc=i.slice(t,1<r?1-r:void 0)}function jc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function hc(){return!0}function vw(){return!1}function nn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?hc:vw,this.isPropagationStopped=vw,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hc)},persist:function(){},isPersistent:hc}),e}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},n_=nn(ea),Su=Ee({},ea,{view:0,detail:0}),Kb=nn(Su),Gf,Hf,Pa,gh=Ee({},Su,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:r_,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pa&&(Pa&&t.type==="mousemove"?(Gf=t.screenX-Pa.screenX,Hf=t.screenY-Pa.screenY):Hf=Gf=0,Pa=t),Gf)},movementY:function(t){return"movementY"in t?t.movementY:Hf}}),ww=nn(gh),Qb=Ee({},gh,{dataTransfer:0}),Yb=nn(Qb),Xb=Ee({},Su,{relatedTarget:0}),Kf=nn(Xb),Jb=Ee({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),Zb=nn(Jb),ex=Ee({},ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tx=nn(ex),nx=Ee({},ea,{data:0}),Ew=nn(nx),rx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sx[t])?!!e[t]:!1}function r_(){return ox}var ax=Ee({},Su,{key:function(t){if(t.key){var e=rx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ix[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:r_,charCode:function(t){return t.type==="keypress"?jc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lx=nn(ax),ux=Ee({},gh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iw=nn(ux),cx=Ee({},Su,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:r_}),dx=nn(cx),hx=Ee({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),fx=nn(hx),px=Ee({},gh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mx=nn(px),gx=[9,13,27,32],i_=lr&&"CompositionEvent"in window,rl=null;lr&&"documentMode"in document&&(rl=document.documentMode);var _x=lr&&"TextEvent"in window&&!rl,VT=lr&&(!i_||rl&&8<rl&&11>=rl),Tw=" ",Sw=!1;function LT(t,e){switch(t){case"keyup":return gx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function MT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zs=!1;function yx(t,e){switch(t){case"compositionend":return MT(e);case"keypress":return e.which!==32?null:(Sw=!0,Tw);case"textInput":return t=e.data,t===Tw&&Sw?null:t;default:return null}}function vx(t,e){if(Zs)return t==="compositionend"||!i_&&LT(t,e)?(t=OT(),zc=t_=$r=null,Zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return VT&&e.locale!=="ko"?null:e.data;default:return null}}var wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wx[t.type]:e==="textarea"}function FT(t,e,n,r){mT(r),e=gd(e,"onChange"),0<e.length&&(n=new n_("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var il=null,Cl=null;function Ex(t){QT(t,0)}function _h(t){var e=no(t);if(lT(e))return t}function Ix(t,e){if(t==="change")return e}var UT=!1;if(lr){var Qf;if(lr){var Yf="oninput"in document;if(!Yf){var Pw=document.createElement("div");Pw.setAttribute("oninput","return;"),Yf=typeof Pw.oninput=="function"}Qf=Yf}else Qf=!1;UT=Qf&&(!document.documentMode||9<document.documentMode)}function Aw(){il&&(il.detachEvent("onpropertychange",$T),Cl=il=null)}function $T(t){if(t.propertyName==="value"&&_h(Cl)){var e=[];FT(e,Cl,t,Yg(t)),vT(Ex,e)}}function Tx(t,e,n){t==="focusin"?(Aw(),il=e,Cl=n,il.attachEvent("onpropertychange",$T)):t==="focusout"&&Aw()}function Sx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _h(Cl)}function Rx(t,e){if(t==="click")return _h(e)}function Px(t,e){if(t==="input"||t==="change")return _h(e)}function Ax(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rn=typeof Object.is=="function"?Object.is:Ax;function kl(t,e){if(Rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wp.call(e,i)||!Rn(t[i],e[i]))return!1}return!0}function Cw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kw(t,e){var n=Cw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cw(n)}}function BT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?BT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zT(){for(var t=window,e=ud();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ud(t.document)}return e}function s_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Cx(t){var e=zT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&BT(n.ownerDocument.documentElement,n)){if(r!==null&&s_(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=kw(n,s);var o=kw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kx=lr&&"documentMode"in document&&11>=document.documentMode,eo=null,cm=null,sl=null,dm=!1;function bw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dm||eo==null||eo!==ud(r)||(r=eo,"selectionStart"in r&&s_(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),sl&&kl(sl,r)||(sl=r,r=gd(cm,"onSelect"),0<r.length&&(e=new n_("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=eo)))}function fc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var to={animationend:fc("Animation","AnimationEnd"),animationiteration:fc("Animation","AnimationIteration"),animationstart:fc("Animation","AnimationStart"),transitionend:fc("Transition","TransitionEnd")},Xf={},jT={};lr&&(jT=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function yh(t){if(Xf[t])return Xf[t];if(!to[t])return t;var e=to[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jT)return Xf[t]=e[n];return t}var qT=yh("animationend"),WT=yh("animationiteration"),GT=yh("animationstart"),HT=yh("transitionend"),KT=new Map,xw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yi(t,e){KT.set(t,e),Rs(e,[t])}for(var Jf=0;Jf<xw.length;Jf++){var Zf=xw[Jf],bx=Zf.toLowerCase(),xx=Zf[0].toUpperCase()+Zf.slice(1);yi(bx,"on"+xx)}yi(qT,"onAnimationEnd");yi(WT,"onAnimationIteration");yi(GT,"onAnimationStart");yi("dblclick","onDoubleClick");yi("focusin","onFocus");yi("focusout","onBlur");yi(HT,"onTransitionEnd");Co("onMouseEnter",["mouseout","mouseover"]);Co("onMouseLeave",["mouseout","mouseover"]);Co("onPointerEnter",["pointerout","pointerover"]);Co("onPointerLeave",["pointerout","pointerover"]);Rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wa));function Nw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bb(r,e,void 0,t),t.currentTarget=null}function QT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Nw(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Nw(i,a,u),s=l}}}if(dd)throw t=om,dd=!1,om=null,t}function le(t,e){var n=e[gm];n===void 0&&(n=e[gm]=new Set);var r=t+"__bubble";n.has(r)||(YT(e,t,2,!1),n.add(r))}function ep(t,e,n){var r=0;e&&(r|=4),YT(n,t,r,e)}var pc="_reactListening"+Math.random().toString(36).slice(2);function bl(t){if(!t[pc]){t[pc]=!0,rT.forEach(function(n){n!=="selectionchange"&&(Nx.has(n)||ep(n,!1,t),ep(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pc]||(e[pc]=!0,ep("selectionchange",!1,e))}}function YT(t,e,n,r){switch(DT(e)){case 1:var i=Gb;break;case 4:i=Hb;break;default:i=e_}n=i.bind(null,e,n,t),i=void 0,!sm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function tp(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ji(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}vT(function(){var u=s,c=Yg(n),d=[];e:{var h=KT.get(t);if(h!==void 0){var p=n_,y=t;switch(t){case"keypress":if(jc(n)===0)break e;case"keydown":case"keyup":p=lx;break;case"focusin":y="focus",p=Kf;break;case"focusout":y="blur",p=Kf;break;case"beforeblur":case"afterblur":p=Kf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ww;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Yb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=dx;break;case qT:case WT:case GT:p=Zb;break;case HT:p=fx;break;case"scroll":p=Kb;break;case"wheel":p=mx;break;case"copy":case"cut":case"paste":p=tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Iw}var v=(e&4)!==0,w=!v&&t==="scroll",_=v?h!==null?h+"Capture":null:h;v=[];for(var m=u,g;m!==null;){g=m;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,_!==null&&(E=Sl(m,_),E!=null&&v.push(xl(m,E,g)))),w)break;m=m.return}0<v.length&&(h=new p(h,y,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==rm&&(y=n.relatedTarget||n.fromElement)&&(ji(y)||y[ur]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?ji(y):null,y!==null&&(w=Ps(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=ww,E="onMouseLeave",_="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(v=Iw,E="onPointerLeave",_="onPointerEnter",m="pointer"),w=p==null?h:no(p),g=y==null?h:no(y),h=new v(E,m+"leave",p,n,c),h.target=w,h.relatedTarget=g,E=null,ji(c)===u&&(v=new v(_,m+"enter",y,n,c),v.target=g,v.relatedTarget=w,E=v),w=E,p&&y)t:{for(v=p,_=y,m=0,g=v;g;g=Ls(g))m++;for(g=0,E=_;E;E=Ls(E))g++;for(;0<m-g;)v=Ls(v),m--;for(;0<g-m;)_=Ls(_),g--;for(;m--;){if(v===_||_!==null&&v===_.alternate)break t;v=Ls(v),_=Ls(_)}v=null}else v=null;p!==null&&Dw(d,h,p,v,!1),y!==null&&w!==null&&Dw(d,w,y,v,!0)}}e:{if(h=u?no(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=Ix;else if(Rw(h))if(UT)R=Px;else{R=Sx;var C=Tx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=Rx);if(R&&(R=R(t,u))){FT(d,R,n,c);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Jp(h,"number",h.value)}switch(C=u?no(u):window,t){case"focusin":(Rw(C)||C.contentEditable==="true")&&(eo=C,cm=u,sl=null);break;case"focusout":sl=cm=eo=null;break;case"mousedown":dm=!0;break;case"contextmenu":case"mouseup":case"dragend":dm=!1,bw(d,n,c);break;case"selectionchange":if(kx)break;case"keydown":case"keyup":bw(d,n,c)}var b;if(i_)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Zs?LT(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(VT&&n.locale!=="ko"&&(Zs||N!=="onCompositionStart"?N==="onCompositionEnd"&&Zs&&(b=OT()):($r=c,t_="value"in $r?$r.value:$r.textContent,Zs=!0)),C=gd(u,N),0<C.length&&(N=new Ew(N,t,null,n,c),d.push({event:N,listeners:C}),b?N.data=b:(b=MT(n),b!==null&&(N.data=b)))),(b=_x?yx(t,n):vx(t,n))&&(u=gd(u,"onBeforeInput"),0<u.length&&(c=new Ew("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}QT(d,e)})}function xl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Sl(t,n),s!=null&&r.unshift(xl(t,s,i)),s=Sl(t,e),s!=null&&r.push(xl(t,s,i))),t=t.return}return r}function Ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Sl(n,s),l!=null&&o.unshift(xl(n,l,a))):i||(l=Sl(n,s),l!=null&&o.push(xl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Dx=/\r\n?/g,Ox=/\u0000|\uFFFD/g;function Ow(t){return(typeof t=="string"?t:""+t).replace(Dx,`
`).replace(Ox,"")}function mc(t,e,n){if(e=Ow(e),Ow(t)!==e&&n)throw Error(k(425))}function _d(){}var hm=null,fm=null;function pm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mm=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,Vw=typeof Promise=="function"?Promise:void 0,Lx=typeof queueMicrotask=="function"?queueMicrotask:typeof Vw<"u"?function(t){return Vw.resolve(null).then(t).catch(Mx)}:mm;function Mx(t){setTimeout(function(){throw t})}function np(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Al(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Al(e)}function Kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ta=Math.random().toString(36).slice(2),xn="__reactFiber$"+ta,Nl="__reactProps$"+ta,ur="__reactContainer$"+ta,gm="__reactEvents$"+ta,Fx="__reactListeners$"+ta,Ux="__reactHandles$"+ta;function ji(t){var e=t[xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ur]||n[xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lw(t);t!==null;){if(n=t[xn])return n;t=Lw(t)}return e}t=n,n=t.parentNode}return null}function Ru(t){return t=t[xn]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function no(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function vh(t){return t[Nl]||null}var _m=[],ro=-1;function vi(t){return{current:t}}function de(t){0>ro||(t.current=_m[ro],_m[ro]=null,ro--)}function oe(t,e){ro++,_m[ro]=t.current,t.current=e}var ri={},_t=vi(ri),Ft=vi(!1),is=ri;function ko(t,e){var n=t.type.contextTypes;if(!n)return ri;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ut(t){return t=t.childContextTypes,t!=null}function yd(){de(Ft),de(_t)}function Mw(t,e,n){if(_t.current!==ri)throw Error(k(168));oe(_t,e),oe(Ft,n)}function XT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,Tb(t)||"Unknown",i));return Ee({},n,r)}function vd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ri,is=_t.current,oe(_t,t),oe(Ft,Ft.current),!0}function Fw(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=XT(t,e,is),r.__reactInternalMemoizedMergedChildContext=t,de(Ft),de(_t),oe(_t,t)):de(Ft),oe(Ft,n)}var Jn=null,wh=!1,rp=!1;function JT(t){Jn===null?Jn=[t]:Jn.push(t)}function $x(t){wh=!0,JT(t)}function wi(){if(!rp&&Jn!==null){rp=!0;var t=0,e=re;try{var n=Jn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Jn=null,wh=!1}catch(i){throw Jn!==null&&(Jn=Jn.slice(t+1)),TT(Xg,wi),i}finally{re=e,rp=!1}}return null}var io=[],so=0,wd=null,Ed=0,rn=[],sn=0,ss=null,Zn=1,er="";function Di(t,e){io[so++]=Ed,io[so++]=wd,wd=t,Ed=e}function ZT(t,e,n){rn[sn++]=Zn,rn[sn++]=er,rn[sn++]=ss,ss=t;var r=Zn;t=er;var i=32-Tn(r)-1;r&=~(1<<i),n+=1;var s=32-Tn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zn=1<<32-Tn(e)+i|n<<i|r,er=s+t}else Zn=1<<s|n<<i|r,er=t}function o_(t){t.return!==null&&(Di(t,1),ZT(t,1,0))}function a_(t){for(;t===wd;)wd=io[--so],io[so]=null,Ed=io[--so],io[so]=null;for(;t===ss;)ss=rn[--sn],rn[sn]=null,er=rn[--sn],rn[sn]=null,Zn=rn[--sn],rn[sn]=null}var Qt=null,Wt=null,fe=!1,wn=null;function eS(t,e){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Uw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qt=t,Wt=Kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qt=t,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ss!==null?{id:Zn,overflow:er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qt=t,Wt=null,!0):!1;default:return!1}}function ym(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vm(t){if(fe){var e=Wt;if(e){var n=e;if(!Uw(t,e)){if(ym(t))throw Error(k(418));e=Kr(n.nextSibling);var r=Qt;e&&Uw(t,e)?eS(r,n):(t.flags=t.flags&-4097|2,fe=!1,Qt=t)}}else{if(ym(t))throw Error(k(418));t.flags=t.flags&-4097|2,fe=!1,Qt=t}}}function $w(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qt=t}function gc(t){if(t!==Qt)return!1;if(!fe)return $w(t),fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pm(t.type,t.memoizedProps)),e&&(e=Wt)){if(ym(t))throw tS(),Error(k(418));for(;e;)eS(t,e),e=Kr(e.nextSibling)}if($w(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wt=Kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wt=null}}else Wt=Qt?Kr(t.stateNode.nextSibling):null;return!0}function tS(){for(var t=Wt;t;)t=Kr(t.nextSibling)}function bo(){Wt=Qt=null,fe=!1}function l_(t){wn===null?wn=[t]:wn.push(t)}var Bx=yr.ReactCurrentBatchConfig;function _n(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Id=vi(null),Td=null,oo=null,u_=null;function c_(){u_=oo=Td=null}function d_(t){var e=Id.current;de(Id),t._currentValue=e}function wm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function _o(t,e){Td=t,u_=oo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function hn(t){var e=t._currentValue;if(u_!==t)if(t={context:t,memoizedValue:e,next:null},oo===null){if(Td===null)throw Error(k(308));oo=t,Td.dependencies={lanes:0,firstContext:t}}else oo=oo.next=t;return e}var qi=null;function h_(t){qi===null?qi=[t]:qi.push(t)}function nS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,h_(e)):(n.next=i.next,i.next=n),e.interleaved=n,cr(t,r)}function cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vr=!1;function f_(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ir(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,cr(t,n)}return i=r.interleaved,i===null?(e.next=e,h_(r)):(e.next=i.next,i.next=e),r.interleaved=e,cr(t,n)}function qc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jg(t,n)}}function Bw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Sd(t,e,n,r){var i=t.updateQueue;Vr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(h=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(p,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(p,d,h):y,h==null)break e;d=Ee({},d,h);break e;case 2:Vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);as|=o,t.lanes=o,t.memoizedState=d}}function zw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var iS=new nT.Component().refs;function Em(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Eh={isMounted:function(t){return(t=t._reactInternals)?Ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=St(),i=Xr(t),s=ir(r,i);s.payload=e,n!=null&&(s.callback=n),e=Qr(t,s,i),e!==null&&(Sn(e,t,i,r),qc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=St(),i=Xr(t),s=ir(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qr(t,s,i),e!==null&&(Sn(e,t,i,r),qc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=St(),r=Xr(t),i=ir(n,r);i.tag=2,e!=null&&(i.callback=e),e=Qr(t,i,r),e!==null&&(Sn(e,t,r,n),qc(e,t,r))}};function jw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!kl(n,r)||!kl(i,s):!0}function sS(t,e,n){var r=!1,i=ri,s=e.contextType;return typeof s=="object"&&s!==null?s=hn(s):(i=Ut(e)?is:_t.current,r=e.contextTypes,s=(r=r!=null)?ko(t,i):ri),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Eh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Eh.enqueueReplaceState(e,e.state,null)}function Im(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=iS,f_(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=hn(s):(s=Ut(e)?is:_t.current,i.context=ko(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Em(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Eh.enqueueReplaceState(i,i.state,null),Sd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===iS&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function _c(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ww(t){var e=t._init;return e(t._payload)}function oS(t){function e(_,m){if(t){var g=_.deletions;g===null?(_.deletions=[m],_.flags|=16):g.push(m)}}function n(_,m){if(!t)return null;for(;m!==null;)e(_,m),m=m.sibling;return null}function r(_,m){for(_=new Map;m!==null;)m.key!==null?_.set(m.key,m):_.set(m.index,m),m=m.sibling;return _}function i(_,m){return _=Jr(_,m),_.index=0,_.sibling=null,_}function s(_,m,g){return _.index=g,t?(g=_.alternate,g!==null?(g=g.index,g<m?(_.flags|=2,m):g):(_.flags|=2,m)):(_.flags|=1048576,m)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,m,g,E){return m===null||m.tag!==6?(m=cp(g,_.mode,E),m.return=_,m):(m=i(m,g),m.return=_,m)}function l(_,m,g,E){var R=g.type;return R===Js?c(_,m,g.props.children,E,g.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Or&&Ww(R)===m.type)?(E=i(m,g.props),E.ref=Aa(_,m,g),E.return=_,E):(E=Yc(g.type,g.key,g.props,null,_.mode,E),E.ref=Aa(_,m,g),E.return=_,E)}function u(_,m,g,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=dp(g,_.mode,E),m.return=_,m):(m=i(m,g.children||[]),m.return=_,m)}function c(_,m,g,E,R){return m===null||m.tag!==7?(m=Ji(g,_.mode,E,R),m.return=_,m):(m=i(m,g),m.return=_,m)}function d(_,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=cp(""+m,_.mode,g),m.return=_,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case oc:return g=Yc(m.type,m.key,m.props,null,_.mode,g),g.ref=Aa(_,null,m),g.return=_,g;case Xs:return m=dp(m,_.mode,g),m.return=_,m;case Or:var E=m._init;return d(_,E(m._payload),g)}if(ja(m)||Ia(m))return m=Ji(m,_.mode,g,null),m.return=_,m;_c(_,m)}return null}function h(_,m,g,E){var R=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:a(_,m,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case oc:return g.key===R?l(_,m,g,E):null;case Xs:return g.key===R?u(_,m,g,E):null;case Or:return R=g._init,h(_,m,R(g._payload),E)}if(ja(g)||Ia(g))return R!==null?null:c(_,m,g,E,null);_c(_,g)}return null}function p(_,m,g,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return _=_.get(g)||null,a(m,_,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case oc:return _=_.get(E.key===null?g:E.key)||null,l(m,_,E,R);case Xs:return _=_.get(E.key===null?g:E.key)||null,u(m,_,E,R);case Or:var C=E._init;return p(_,m,g,C(E._payload),R)}if(ja(E)||Ia(E))return _=_.get(g)||null,c(m,_,E,R,null);_c(m,E)}return null}function y(_,m,g,E){for(var R=null,C=null,b=m,N=m=0,J=null;b!==null&&N<g.length;N++){b.index>N?(J=b,b=null):J=b.sibling;var q=h(_,b,g[N],E);if(q===null){b===null&&(b=J);break}t&&b&&q.alternate===null&&e(_,b),m=s(q,m,N),C===null?R=q:C.sibling=q,C=q,b=J}if(N===g.length)return n(_,b),fe&&Di(_,N),R;if(b===null){for(;N<g.length;N++)b=d(_,g[N],E),b!==null&&(m=s(b,m,N),C===null?R=b:C.sibling=b,C=b);return fe&&Di(_,N),R}for(b=r(_,b);N<g.length;N++)J=p(b,_,N,g[N],E),J!==null&&(t&&J.alternate!==null&&b.delete(J.key===null?N:J.key),m=s(J,m,N),C===null?R=J:C.sibling=J,C=J);return t&&b.forEach(function(zt){return e(_,zt)}),fe&&Di(_,N),R}function v(_,m,g,E){var R=Ia(g);if(typeof R!="function")throw Error(k(150));if(g=R.call(g),g==null)throw Error(k(151));for(var C=R=null,b=m,N=m=0,J=null,q=g.next();b!==null&&!q.done;N++,q=g.next()){b.index>N?(J=b,b=null):J=b.sibling;var zt=h(_,b,q.value,E);if(zt===null){b===null&&(b=J);break}t&&b&&zt.alternate===null&&e(_,b),m=s(zt,m,N),C===null?R=zt:C.sibling=zt,C=zt,b=J}if(q.done)return n(_,b),fe&&Di(_,N),R;if(b===null){for(;!q.done;N++,q=g.next())q=d(_,q.value,E),q!==null&&(m=s(q,m,N),C===null?R=q:C.sibling=q,C=q);return fe&&Di(_,N),R}for(b=r(_,b);!q.done;N++,q=g.next())q=p(b,_,N,q.value,E),q!==null&&(t&&q.alternate!==null&&b.delete(q.key===null?N:q.key),m=s(q,m,N),C===null?R=q:C.sibling=q,C=q);return t&&b.forEach(function(wa){return e(_,wa)}),fe&&Di(_,N),R}function w(_,m,g,E){if(typeof g=="object"&&g!==null&&g.type===Js&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case oc:e:{for(var R=g.key,C=m;C!==null;){if(C.key===R){if(R=g.type,R===Js){if(C.tag===7){n(_,C.sibling),m=i(C,g.props.children),m.return=_,_=m;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Or&&Ww(R)===C.type){n(_,C.sibling),m=i(C,g.props),m.ref=Aa(_,C,g),m.return=_,_=m;break e}n(_,C);break}else e(_,C);C=C.sibling}g.type===Js?(m=Ji(g.props.children,_.mode,E,g.key),m.return=_,_=m):(E=Yc(g.type,g.key,g.props,null,_.mode,E),E.ref=Aa(_,m,g),E.return=_,_=E)}return o(_);case Xs:e:{for(C=g.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(_,m.sibling),m=i(m,g.children||[]),m.return=_,_=m;break e}else{n(_,m);break}else e(_,m);m=m.sibling}m=dp(g,_.mode,E),m.return=_,_=m}return o(_);case Or:return C=g._init,w(_,m,C(g._payload),E)}if(ja(g))return y(_,m,g,E);if(Ia(g))return v(_,m,g,E);_c(_,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(_,m.sibling),m=i(m,g),m.return=_,_=m):(n(_,m),m=cp(g,_.mode,E),m.return=_,_=m),o(_)):n(_,m)}return w}var xo=oS(!0),aS=oS(!1),Pu={},qn=vi(Pu),Dl=vi(Pu),Ol=vi(Pu);function Wi(t){if(t===Pu)throw Error(k(174));return t}function p_(t,e){switch(oe(Ol,e),oe(Dl,t),oe(qn,Pu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:em(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=em(e,t)}de(qn),oe(qn,e)}function No(){de(qn),de(Dl),de(Ol)}function lS(t){Wi(Ol.current);var e=Wi(qn.current),n=em(e,t.type);e!==n&&(oe(Dl,t),oe(qn,n))}function m_(t){Dl.current===t&&(de(qn),de(Dl))}var ye=vi(0);function Rd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ip=[];function g_(){for(var t=0;t<ip.length;t++)ip[t]._workInProgressVersionPrimary=null;ip.length=0}var Wc=yr.ReactCurrentDispatcher,sp=yr.ReactCurrentBatchConfig,os=0,ve=null,Fe=null,We=null,Pd=!1,ol=!1,Vl=0,zx=0;function ut(){throw Error(k(321))}function __(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rn(t[n],e[n]))return!1;return!0}function y_(t,e,n,r,i,s){if(os=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wc.current=t===null||t.memoizedState===null?Gx:Hx,t=n(r,i),ol){s=0;do{if(ol=!1,Vl=0,25<=s)throw Error(k(301));s+=1,We=Fe=null,e.updateQueue=null,Wc.current=Kx,t=n(r,i)}while(ol)}if(Wc.current=Ad,e=Fe!==null&&Fe.next!==null,os=0,We=Fe=ve=null,Pd=!1,e)throw Error(k(300));return t}function v_(){var t=Vl!==0;return Vl=0,t}function bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?ve.memoizedState=We=t:We=We.next=t,We}function fn(){if(Fe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=We===null?ve.memoizedState:We.next;if(e!==null)We=e,Fe=t;else{if(t===null)throw Error(k(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?ve.memoizedState=We=t:We=We.next=t}return We}function Ll(t,e){return typeof e=="function"?e(t):e}function op(t){var e=fn(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((os&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ve.lanes|=c,as|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Rn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,as|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ap(t){var e=fn(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Rn(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function uS(){}function cS(t,e){var n=ve,r=fn(),i=e(),s=!Rn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,w_(fS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Ml(9,hS.bind(null,n,r,i,e),void 0,null),He===null)throw Error(k(349));os&30||dS(n,e,i)}return i}function dS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hS(t,e,n,r){e.value=n,e.getSnapshot=r,pS(e)&&mS(t)}function fS(t,e,n){return n(function(){pS(e)&&mS(t)})}function pS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rn(t,n)}catch{return!0}}function mS(t){var e=cr(t,1);e!==null&&Sn(e,t,1,-1)}function Gw(t){var e=bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ll,lastRenderedState:t},e.queue=t,t=t.dispatch=Wx.bind(null,ve,t),[e.memoizedState,t]}function Ml(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function gS(){return fn().memoizedState}function Gc(t,e,n,r){var i=bn();ve.flags|=t,i.memoizedState=Ml(1|e,n,void 0,r===void 0?null:r)}function Ih(t,e,n,r){var i=fn();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&__(r,o.deps)){i.memoizedState=Ml(e,n,s,r);return}}ve.flags|=t,i.memoizedState=Ml(1|e,n,s,r)}function Hw(t,e){return Gc(8390656,8,t,e)}function w_(t,e){return Ih(2048,8,t,e)}function _S(t,e){return Ih(4,2,t,e)}function yS(t,e){return Ih(4,4,t,e)}function vS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wS(t,e,n){return n=n!=null?n.concat([t]):null,Ih(4,4,vS.bind(null,e,t),n)}function E_(){}function ES(t,e){var n=fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&__(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function IS(t,e){var n=fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&__(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function TS(t,e,n){return os&21?(Rn(n,e)||(n=PT(),ve.lanes|=n,as|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function jx(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=sp.transition;sp.transition={};try{t(!1),e()}finally{re=n,sp.transition=r}}function SS(){return fn().memoizedState}function qx(t,e,n){var r=Xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},RS(t))PS(e,n);else if(n=nS(t,e,n,r),n!==null){var i=St();Sn(n,t,r,i),AS(n,e,r)}}function Wx(t,e,n){var r=Xr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(RS(t))PS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Rn(a,o)){var l=e.interleaved;l===null?(i.next=i,h_(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=nS(t,e,i,r),n!==null&&(i=St(),Sn(n,t,r,i),AS(n,e,r))}}function RS(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function PS(t,e){ol=Pd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function AS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jg(t,n)}}var Ad={readContext:hn,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},Gx={readContext:hn,useCallback:function(t,e){return bn().memoizedState=[t,e===void 0?null:e],t},useContext:hn,useEffect:Hw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gc(4194308,4,vS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gc(4,2,t,e)},useMemo:function(t,e){var n=bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=bn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qx.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=bn();return t={current:t},e.memoizedState=t},useState:Gw,useDebugValue:E_,useDeferredValue:function(t){return bn().memoizedState=t},useTransition:function(){var t=Gw(!1),e=t[0];return t=jx.bind(null,t[1]),bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=bn();if(fe){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),He===null)throw Error(k(349));os&30||dS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Hw(fS.bind(null,r,s,t),[t]),r.flags|=2048,Ml(9,hS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=bn(),e=He.identifierPrefix;if(fe){var n=er,r=Zn;n=(r&~(1<<32-Tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Hx={readContext:hn,useCallback:ES,useContext:hn,useEffect:w_,useImperativeHandle:wS,useInsertionEffect:_S,useLayoutEffect:yS,useMemo:IS,useReducer:op,useRef:gS,useState:function(){return op(Ll)},useDebugValue:E_,useDeferredValue:function(t){var e=fn();return TS(e,Fe.memoizedState,t)},useTransition:function(){var t=op(Ll)[0],e=fn().memoizedState;return[t,e]},useMutableSource:uS,useSyncExternalStore:cS,useId:SS,unstable_isNewReconciler:!1},Kx={readContext:hn,useCallback:ES,useContext:hn,useEffect:w_,useImperativeHandle:wS,useInsertionEffect:_S,useLayoutEffect:yS,useMemo:IS,useReducer:ap,useRef:gS,useState:function(){return ap(Ll)},useDebugValue:E_,useDeferredValue:function(t){var e=fn();return Fe===null?e.memoizedState=t:TS(e,Fe.memoizedState,t)},useTransition:function(){var t=ap(Ll)[0],e=fn().memoizedState;return[t,e]},useMutableSource:uS,useSyncExternalStore:cS,useId:SS,unstable_isNewReconciler:!1};function Do(t,e){try{var n="",r=e;do n+=Ib(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function lp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Tm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Qx=typeof WeakMap=="function"?WeakMap:Map;function CS(t,e,n){n=ir(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){kd||(kd=!0,Dm=r),Tm(t,e)},n}function kS(t,e,n){n=ir(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Tm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Tm(t,e),typeof r!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Kw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Qx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=uN.bind(null,t,e,n),e.then(t,t))}function Qw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Yw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ir(-1,1),e.tag=2,Qr(n,e,1))),n.lanes|=1),t)}var Yx=yr.ReactCurrentOwner,Ot=!1;function vt(t,e,n,r){e.child=t===null?aS(e,null,n,r):xo(e,t.child,n,r)}function Xw(t,e,n,r,i){n=n.render;var s=e.ref;return _o(e,i),r=y_(t,e,n,r,s,i),n=v_(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(fe&&n&&o_(e),e.flags|=1,vt(t,e,r,i),e.child)}function Jw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!k_(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,bS(t,e,s,r,i)):(t=Yc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:kl,n(o,r)&&t.ref===e.ref)return dr(t,e,i)}return e.flags|=1,t=Jr(s,r),t.ref=e.ref,t.return=e,e.child=t}function bS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(kl(s,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,dr(t,e,i)}return Sm(t,e,n,r,i)}function xS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(lo,jt),jt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,oe(lo,jt),jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,oe(lo,jt),jt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,oe(lo,jt),jt|=r;return vt(t,e,i,n),e.child}function NS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sm(t,e,n,r,i){var s=Ut(n)?is:_t.current;return s=ko(e,s),_o(e,i),n=y_(t,e,n,r,s,i),r=v_(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(fe&&r&&o_(e),e.flags|=1,vt(t,e,n,i),e.child)}function Zw(t,e,n,r,i){if(Ut(n)){var s=!0;vd(e)}else s=!1;if(_o(e,i),e.stateNode===null)Hc(t,e),sS(e,n,r),Im(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=hn(u):(u=Ut(n)?is:_t.current,u=ko(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&qw(e,o,r,u),Vr=!1;var h=e.memoizedState;o.state=h,Sd(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Ft.current||Vr?(typeof c=="function"&&(Em(e,n,c,r),l=e.memoizedState),(a=Vr||jw(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,rS(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:_n(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=hn(l):(l=Ut(n)?is:_t.current,l=ko(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&qw(e,o,r,l),Vr=!1,h=e.memoizedState,o.state=h,Sd(e,r,o,i);var y=e.memoizedState;a!==d||h!==y||Ft.current||Vr?(typeof p=="function"&&(Em(e,n,p,r),y=e.memoizedState),(u=Vr||jw(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Rm(t,e,n,r,s,i)}function Rm(t,e,n,r,i,s){NS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Fw(e,n,!1),dr(t,e,s);r=e.stateNode,Yx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xo(e,t.child,null,s),e.child=xo(e,null,a,s)):vt(t,e,a,s),e.memoizedState=r.state,i&&Fw(e,n,!0),e.child}function DS(t){var e=t.stateNode;e.pendingContext?Mw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mw(t,e.context,!1),p_(t,e.containerInfo)}function eE(t,e,n,r,i){return bo(),l_(i),e.flags|=256,vt(t,e,n,r),e.child}var Pm={dehydrated:null,treeContext:null,retryLane:0};function Am(t){return{baseLanes:t,cachePool:null,transitions:null}}function OS(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),oe(ye,i&1),t===null)return vm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rh(o,r,0,null),t=Ji(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Am(n),e.memoizedState=Pm,t):I_(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Xx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Jr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Jr(a,s):(s=Ji(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Am(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pm,r}return s=t.child,t=s.sibling,r=Jr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function I_(t,e){return e=Rh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yc(t,e,n,r){return r!==null&&l_(r),xo(e,t.child,null,n),t=I_(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=lp(Error(k(422))),yc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Rh({mode:"visible",children:r.children},i,0,null),s=Ji(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&xo(e,t.child,null,o),e.child.memoizedState=Am(o),e.memoizedState=Pm,s);if(!(e.mode&1))return yc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=lp(s,r,void 0),yc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ot||a){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,cr(t,i),Sn(r,t,i,-1))}return C_(),r=lp(Error(k(421))),yc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=cN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Wt=Kr(i.nextSibling),Qt=e,fe=!0,wn=null,t!==null&&(rn[sn++]=Zn,rn[sn++]=er,rn[sn++]=ss,Zn=t.id,er=t.overflow,ss=e),e=I_(e,r.children),e.flags|=4096,e)}function tE(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wm(t.return,e,n)}function up(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function VS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tE(t,n,e);else if(t.tag===19)tE(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(oe(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Rd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),up(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Rd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}up(e,!0,n,null,s);break;case"together":up(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),as|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jx(t,e,n){switch(e.tag){case 3:DS(e),bo();break;case 5:lS(e);break;case 1:Ut(e.type)&&vd(e);break;case 4:p_(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;oe(Id,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(oe(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?OS(t,e,n):(oe(ye,ye.current&1),t=dr(t,e,n),t!==null?t.sibling:null);oe(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return VS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,xS(t,e,n)}return dr(t,e,n)}var LS,Cm,MS,FS;LS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cm=function(){};MS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wi(qn.current);var s=null;switch(n){case"input":i=Yp(t,i),r=Yp(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=Zp(t,i),r=Zp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_d)}tm(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Il.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Il.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&le("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};FS=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ca(t,e){if(!fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Zx(t,e,n){var r=e.pendingProps;switch(a_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return Ut(e.type)&&yd(),ct(e),null;case 3:return r=e.stateNode,No(),de(Ft),de(_t),g_(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(gc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wn!==null&&(Lm(wn),wn=null))),Cm(t,e),ct(e),null;case 5:m_(e);var i=Wi(Ol.current);if(n=e.type,t!==null&&e.stateNode!=null)MS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return ct(e),null}if(t=Wi(qn.current),gc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[xn]=e,r[Nl]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<Wa.length;i++)le(Wa[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":cw(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":hw(r,s),le("invalid",r)}tm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&mc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&mc(r.textContent,a,t),i=["children",""+a]):Il.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":ac(r),dw(r,s,!0);break;case"textarea":ac(r),fw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_d)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[xn]=e,t[Nl]=r,LS(t,e,!1,!1),e.stateNode=t;e:{switch(o=nm(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<Wa.length;i++)le(Wa[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":cw(t,r),i=Yp(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),le("invalid",t);break;case"textarea":hw(t,r),i=Zp(t,r),le("invalid",t);break;default:i=r}tm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?pT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Tl(t,l):typeof l=="number"&&Tl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Il.hasOwnProperty(s)?l!=null&&s==="onScroll"&&le("scroll",t):l!=null&&Gg(t,s,l,o))}switch(n){case"input":ac(t),dw(t,r,!1);break;case"textarea":ac(t),fw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ni(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?fo(t,!!r.multiple,s,!1):r.defaultValue!=null&&fo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_d)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)FS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Wi(Ol.current),Wi(qn.current),gc(e)){if(r=e.stateNode,n=e.memoizedProps,r[xn]=e,(s=r.nodeValue!==n)&&(t=Qt,t!==null))switch(t.tag){case 3:mc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xn]=e,e.stateNode=r}return ct(e),null;case 13:if(de(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(fe&&Wt!==null&&e.mode&1&&!(e.flags&128))tS(),bo(),e.flags|=98560,s=!1;else if(s=gc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[xn]=e}else bo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),s=!1}else wn!==null&&(Lm(wn),wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Ue===0&&(Ue=3):C_())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return No(),Cm(t,e),t===null&&bl(e.stateNode.containerInfo),ct(e),null;case 10:return d_(e.type._context),ct(e),null;case 17:return Ut(e.type)&&yd(),ct(e),null;case 19:if(de(ye),s=e.memoizedState,s===null)return ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ca(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rd(t),o!==null){for(e.flags|=128,Ca(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return oe(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&xe()>Oo&&(e.flags|=128,r=!0,Ca(s,!1),e.lanes=4194304)}else{if(!r)if(t=Rd(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fe)return ct(e),null}else 2*xe()-s.renderingStartTime>Oo&&n!==1073741824&&(e.flags|=128,r=!0,Ca(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xe(),e.sibling=null,n=ye.current,oe(ye,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return A_(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?jt&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function eN(t,e){switch(a_(e),e.tag){case 1:return Ut(e.type)&&yd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return No(),de(Ft),de(_t),g_(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return m_(e),null;case 13:if(de(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));bo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(ye),null;case 4:return No(),null;case 10:return d_(e.type._context),null;case 22:case 23:return A_(),null;case 24:return null;default:return null}}var vc=!1,ht=!1,tN=typeof WeakSet=="function"?WeakSet:Set,M=null;function ao(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function km(t,e,n){try{n()}catch(r){Te(t,e,r)}}var nE=!1;function nN(t,e){if(hm=pd,t=zT(),s_(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fm={focusedElem:t,selectionRange:n},pd=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,w=y.memoizedState,_=e.stateNode,m=_.getSnapshotBeforeUpdate(e.elementType===e.type?v:_n(e.type,v),w);_.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(E){Te(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return y=nE,nE=!1,y}function al(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&km(e,n,s)}i=i.next}while(i!==r)}}function Th(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function US(t){var e=t.alternate;e!==null&&(t.alternate=null,US(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xn],delete e[Nl],delete e[gm],delete e[Fx],delete e[Ux])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $S(t){return t.tag===5||t.tag===3||t.tag===4}function rE(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$S(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_d));else if(r!==4&&(t=t.child,t!==null))for(xm(t,e,n),t=t.sibling;t!==null;)xm(t,e,n),t=t.sibling}function Nm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nm(t,e,n),t=t.sibling;t!==null;)Nm(t,e,n),t=t.sibling}var et=null,vn=!1;function br(t,e,n){for(n=n.child;n!==null;)BS(t,e,n),n=n.sibling}function BS(t,e,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(mh,n)}catch{}switch(n.tag){case 5:ht||ao(n,e);case 6:var r=et,i=vn;et=null,br(t,e,n),et=r,vn=i,et!==null&&(vn?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(vn?(t=et,n=n.stateNode,t.nodeType===8?np(t.parentNode,n):t.nodeType===1&&np(t,n),Al(t)):np(et,n.stateNode));break;case 4:r=et,i=vn,et=n.stateNode.containerInfo,vn=!0,br(t,e,n),et=r,vn=i;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&km(n,e,o),i=i.next}while(i!==r)}br(t,e,n);break;case 1:if(!ht&&(ao(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Te(n,e,a)}br(t,e,n);break;case 21:br(t,e,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,br(t,e,n),ht=r):br(t,e,n);break;default:br(t,e,n)}}function iE(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tN),e.forEach(function(r){var i=dN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:et=a.stateNode,vn=!1;break e;case 3:et=a.stateNode.containerInfo,vn=!0;break e;case 4:et=a.stateNode.containerInfo,vn=!0;break e}a=a.return}if(et===null)throw Error(k(160));BS(s,o,i),et=null,vn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zS(e,t),e=e.sibling}function zS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gn(e,t),kn(t),r&4){try{al(3,t,t.return),Th(3,t)}catch(v){Te(t,t.return,v)}try{al(5,t,t.return)}catch(v){Te(t,t.return,v)}}break;case 1:gn(e,t),kn(t),r&512&&n!==null&&ao(n,n.return);break;case 5:if(gn(e,t),kn(t),r&512&&n!==null&&ao(n,n.return),t.flags&32){var i=t.stateNode;try{Tl(i,"")}catch(v){Te(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&uT(i,s),nm(a,o);var u=nm(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?pT(i,d):c==="dangerouslySetInnerHTML"?hT(i,d):c==="children"?Tl(i,d):Gg(i,c,d,u)}switch(a){case"input":Xp(i,s);break;case"textarea":cT(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?fo(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?fo(i,!!s.multiple,s.defaultValue,!0):fo(i,!!s.multiple,s.multiple?[]:"",!1))}i[Nl]=s}catch(v){Te(t,t.return,v)}}break;case 6:if(gn(e,t),kn(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Te(t,t.return,v)}}break;case 3:if(gn(e,t),kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Al(e.containerInfo)}catch(v){Te(t,t.return,v)}break;case 4:gn(e,t),kn(t);break;case 13:gn(e,t),kn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(R_=xe())),r&4&&iE(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ht=(u=ht)||c,gn(e,t),ht=u):gn(e,t),kn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(M=t,c=t.child;c!==null;){for(d=M=c;M!==null;){switch(h=M,p=h.child,h.tag){case 0:case 11:case 14:case 15:al(4,h,h.return);break;case 1:ao(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Te(r,n,v)}}break;case 5:ao(h,h.return);break;case 22:if(h.memoizedState!==null){oE(d);continue}}p!==null?(p.return=h,M=p):oE(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fT("display",o))}catch(v){Te(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Te(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:gn(e,t),kn(t),r&4&&iE(t);break;case 21:break;default:gn(e,t),kn(t)}}function kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($S(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Tl(i,""),r.flags&=-33);var s=rE(t);Nm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=rE(t);xm(t,a,o);break;default:throw Error(k(161))}}catch(l){Te(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rN(t,e,n){M=t,jS(t)}function jS(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ht;a=vc;var u=ht;if(vc=o,(ht=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?aE(i):l!==null?(l.return=o,M=l):aE(i);for(;s!==null;)M=s,jS(s),s=s.sibling;M=i,vc=a,ht=u}sE(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):sE(t)}}function sE(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ht||Th(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ht)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:_n(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Al(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ht||e.flags&512&&bm(e)}catch(h){Te(e,e.return,h)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function oE(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function aE(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Th(4,e)}catch(l){Te(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Te(e,i,l)}}var s=e.return;try{bm(e)}catch(l){Te(e,s,l)}break;case 5:var o=e.return;try{bm(e)}catch(l){Te(e,o,l)}}}catch(l){Te(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var iN=Math.ceil,Cd=yr.ReactCurrentDispatcher,T_=yr.ReactCurrentOwner,cn=yr.ReactCurrentBatchConfig,ee=0,He=null,Me=null,it=0,jt=0,lo=vi(0),Ue=0,Fl=null,as=0,Sh=0,S_=0,ll=null,Dt=null,R_=0,Oo=1/0,Xn=null,kd=!1,Dm=null,Yr=null,wc=!1,Br=null,bd=0,ul=0,Om=null,Kc=-1,Qc=0;function St(){return ee&6?xe():Kc!==-1?Kc:Kc=xe()}function Xr(t){return t.mode&1?ee&2&&it!==0?it&-it:Bx.transition!==null?(Qc===0&&(Qc=PT()),Qc):(t=re,t!==0||(t=window.event,t=t===void 0?16:DT(t.type)),t):1}function Sn(t,e,n,r){if(50<ul)throw ul=0,Om=null,Error(k(185));Tu(t,n,r),(!(ee&2)||t!==He)&&(t===He&&(!(ee&2)&&(Sh|=n),Ue===4&&Mr(t,it)),$t(t,r),n===1&&ee===0&&!(e.mode&1)&&(Oo=xe()+500,wh&&wi()))}function $t(t,e){var n=t.callbackNode;Bb(t,e);var r=fd(t,t===He?it:0);if(r===0)n!==null&&gw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&gw(n),e===1)t.tag===0?$x(lE.bind(null,t)):JT(lE.bind(null,t)),Lx(function(){!(ee&6)&&wi()}),n=null;else{switch(AT(r)){case 1:n=Xg;break;case 4:n=ST;break;case 16:n=hd;break;case 536870912:n=RT;break;default:n=hd}n=XS(n,qS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qS(t,e){if(Kc=-1,Qc=0,ee&6)throw Error(k(327));var n=t.callbackNode;if(yo()&&t.callbackNode!==n)return null;var r=fd(t,t===He?it:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=xd(t,r);else{e=r;var i=ee;ee|=2;var s=GS();(He!==t||it!==e)&&(Xn=null,Oo=xe()+500,Xi(t,e));do try{aN();break}catch(a){WS(t,a)}while(!0);c_(),Cd.current=s,ee=i,Me!==null?e=0:(He=null,it=0,e=Ue)}if(e!==0){if(e===2&&(i=am(t),i!==0&&(r=i,e=Vm(t,i))),e===1)throw n=Fl,Xi(t,0),Mr(t,r),$t(t,xe()),n;if(e===6)Mr(t,r);else{if(i=t.current.alternate,!(r&30)&&!sN(i)&&(e=xd(t,r),e===2&&(s=am(t),s!==0&&(r=s,e=Vm(t,s))),e===1))throw n=Fl,Xi(t,0),Mr(t,r),$t(t,xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Oi(t,Dt,Xn);break;case 3:if(Mr(t,r),(r&130023424)===r&&(e=R_+500-xe(),10<e)){if(fd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){St(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=mm(Oi.bind(null,t,Dt,Xn),e);break}Oi(t,Dt,Xn);break;case 4:if(Mr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Tn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iN(r/1960))-r,10<r){t.timeoutHandle=mm(Oi.bind(null,t,Dt,Xn),r);break}Oi(t,Dt,Xn);break;case 5:Oi(t,Dt,Xn);break;default:throw Error(k(329))}}}return $t(t,xe()),t.callbackNode===n?qS.bind(null,t):null}function Vm(t,e){var n=ll;return t.current.memoizedState.isDehydrated&&(Xi(t,e).flags|=256),t=xd(t,e),t!==2&&(e=Dt,Dt=n,e!==null&&Lm(e)),t}function Lm(t){Dt===null?Dt=t:Dt.push.apply(Dt,t)}function sN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mr(t,e){for(e&=~S_,e&=~Sh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Tn(e),r=1<<n;t[n]=-1,e&=~r}}function lE(t){if(ee&6)throw Error(k(327));yo();var e=fd(t,0);if(!(e&1))return $t(t,xe()),null;var n=xd(t,e);if(t.tag!==0&&n===2){var r=am(t);r!==0&&(e=r,n=Vm(t,r))}if(n===1)throw n=Fl,Xi(t,0),Mr(t,e),$t(t,xe()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Oi(t,Dt,Xn),$t(t,xe()),null}function P_(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(Oo=xe()+500,wh&&wi())}}function ls(t){Br!==null&&Br.tag===0&&!(ee&6)&&yo();var e=ee;ee|=1;var n=cn.transition,r=re;try{if(cn.transition=null,re=1,t)return t()}finally{re=r,cn.transition=n,ee=e,!(ee&6)&&wi()}}function A_(){jt=lo.current,de(lo)}function Xi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Vx(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(a_(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yd();break;case 3:No(),de(Ft),de(_t),g_();break;case 5:m_(r);break;case 4:No();break;case 13:de(ye);break;case 19:de(ye);break;case 10:d_(r.type._context);break;case 22:case 23:A_()}n=n.return}if(He=t,Me=t=Jr(t.current,null),it=jt=e,Ue=0,Fl=null,S_=Sh=as=0,Dt=ll=null,qi!==null){for(e=0;e<qi.length;e++)if(n=qi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qi=null}return t}function WS(t,e){do{var n=Me;try{if(c_(),Wc.current=Ad,Pd){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pd=!1}if(os=0,We=Fe=ve=null,ol=!1,Vl=0,T_.current=null,n===null||n.return===null){Ue=1,Fl=e,Me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=it,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Qw(o);if(p!==null){p.flags&=-257,Yw(p,o,a,s,e),p.mode&1&&Kw(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Kw(s,u,e),C_();break e}l=Error(k(426))}}else if(fe&&a.mode&1){var w=Qw(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Yw(w,o,a,s,e),l_(Do(l,a));break e}}s=l=Do(l,a),Ue!==4&&(Ue=2),ll===null?ll=[s]:ll.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=CS(s,l,e);Bw(s,_);break e;case 1:a=l;var m=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Yr===null||!Yr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=kS(s,a,e);Bw(s,E);break e}}s=s.return}while(s!==null)}KS(n)}catch(R){e=R,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function GS(){var t=Cd.current;return Cd.current=Ad,t===null?Ad:t}function C_(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),He===null||!(as&268435455)&&!(Sh&268435455)||Mr(He,it)}function xd(t,e){var n=ee;ee|=2;var r=GS();(He!==t||it!==e)&&(Xn=null,Xi(t,e));do try{oN();break}catch(i){WS(t,i)}while(!0);if(c_(),ee=n,Cd.current=r,Me!==null)throw Error(k(261));return He=null,it=0,Ue}function oN(){for(;Me!==null;)HS(Me)}function aN(){for(;Me!==null&&!Nb();)HS(Me)}function HS(t){var e=YS(t.alternate,t,jt);t.memoizedProps=t.pendingProps,e===null?KS(t):Me=e,T_.current=null}function KS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eN(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Me=null;return}}else if(n=Zx(n,e,jt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Ue===0&&(Ue=5)}function Oi(t,e,n){var r=re,i=cn.transition;try{cn.transition=null,re=1,lN(t,e,n,r)}finally{cn.transition=i,re=r}return null}function lN(t,e,n,r){do yo();while(Br!==null);if(ee&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zb(t,s),t===He&&(Me=He=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wc||(wc=!0,XS(hd,function(){return yo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=cn.transition,cn.transition=null;var o=re;re=1;var a=ee;ee|=4,T_.current=null,nN(t,n),zS(n,t),Cx(fm),pd=!!hm,fm=hm=null,t.current=n,rN(n),Db(),ee=a,re=o,cn.transition=s}else t.current=n;if(wc&&(wc=!1,Br=t,bd=i),s=t.pendingLanes,s===0&&(Yr=null),Lb(n.stateNode),$t(t,xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(kd)throw kd=!1,t=Dm,Dm=null,t;return bd&1&&t.tag!==0&&yo(),s=t.pendingLanes,s&1?t===Om?ul++:(ul=0,Om=t):ul=0,wi(),null}function yo(){if(Br!==null){var t=AT(bd),e=cn.transition,n=re;try{if(cn.transition=null,re=16>t?16:t,Br===null)var r=!1;else{if(t=Br,Br=null,bd=0,ee&6)throw Error(k(331));var i=ee;for(ee|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:al(8,c,s)}var d=c.child;if(d!==null)d.return=c,M=d;else for(;M!==null;){c=M;var h=c.sibling,p=c.return;if(US(c),c===u){M=null;break}if(h!==null){h.return=p,M=h;break}M=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:al(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,M=_;break e}M=s.return}}var m=t.current;for(M=m;M!==null;){o=M;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,M=g;else e:for(o=m;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Th(9,a)}}catch(R){Te(a,a.return,R)}if(a===o){M=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,M=E;break e}M=a.return}}if(ee=i,wi(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(mh,t)}catch{}r=!0}return r}finally{re=n,cn.transition=e}}return!1}function uE(t,e,n){e=Do(n,e),e=CS(t,e,1),t=Qr(t,e,1),e=St(),t!==null&&(Tu(t,1,e),$t(t,e))}function Te(t,e,n){if(t.tag===3)uE(t,t,n);else for(;e!==null;){if(e.tag===3){uE(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yr===null||!Yr.has(r))){t=Do(n,t),t=kS(e,t,1),e=Qr(e,t,1),t=St(),e!==null&&(Tu(e,1,t),$t(e,t));break}}e=e.return}}function uN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=St(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(it&n)===n&&(Ue===4||Ue===3&&(it&130023424)===it&&500>xe()-R_?Xi(t,0):S_|=n),$t(t,e)}function QS(t,e){e===0&&(t.mode&1?(e=cc,cc<<=1,!(cc&130023424)&&(cc=4194304)):e=1);var n=St();t=cr(t,e),t!==null&&(Tu(t,e,n),$t(t,n))}function cN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),QS(t,n)}function dN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),QS(t,n)}var YS;YS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ft.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,Jx(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,fe&&e.flags&1048576&&ZT(e,Ed,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Hc(t,e),t=e.pendingProps;var i=ko(e,_t.current);_o(e,n),i=y_(null,e,r,t,i,n);var s=v_();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ut(r)?(s=!0,vd(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,f_(e),i.updater=Eh,e.stateNode=i,i._reactInternals=e,Im(e,r,t,n),e=Rm(null,e,r,!0,s,n)):(e.tag=0,fe&&s&&o_(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Hc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=fN(r),t=_n(r,t),i){case 0:e=Sm(null,e,r,t,n);break e;case 1:e=Zw(null,e,r,t,n);break e;case 11:e=Xw(null,e,r,t,n);break e;case 14:e=Jw(null,e,r,_n(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Sm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Zw(t,e,r,i,n);case 3:e:{if(DS(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,rS(t,e),Sd(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Do(Error(k(423)),e),e=eE(t,e,r,n,i);break e}else if(r!==i){i=Do(Error(k(424)),e),e=eE(t,e,r,n,i);break e}else for(Wt=Kr(e.stateNode.containerInfo.firstChild),Qt=e,fe=!0,wn=null,n=aS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bo(),r===i){e=dr(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return lS(e),t===null&&vm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,pm(r,i)?o=null:s!==null&&pm(r,s)&&(e.flags|=32),NS(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&vm(e),null;case 13:return OS(t,e,n);case 4:return p_(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xo(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Xw(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,oe(Id,r._currentValue),r._currentValue=o,s!==null)if(Rn(s.value,o)){if(s.children===i.children&&!Ft.current){e=dr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ir(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,_o(e,n),i=hn(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=_n(r,e.pendingProps),i=_n(r.type,i),Jw(t,e,r,i,n);case 15:return bS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Hc(t,e),e.tag=1,Ut(r)?(t=!0,vd(e)):t=!1,_o(e,n),sS(e,r,i),Im(e,r,i,n),Rm(null,e,r,!0,t,n);case 19:return VS(t,e,n);case 22:return xS(t,e,n)}throw Error(k(156,e.tag))};function XS(t,e){return TT(t,e)}function hN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(t,e,n,r){return new hN(t,e,n,r)}function k_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fN(t){if(typeof t=="function")return k_(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kg)return 11;if(t===Qg)return 14}return 2}function Jr(t,e){var n=t.alternate;return n===null?(n=an(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")k_(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Js:return Ji(n.children,i,s,e);case Hg:o=8,i|=8;break;case Gp:return t=an(12,n,e,i|2),t.elementType=Gp,t.lanes=s,t;case Hp:return t=an(13,n,e,i),t.elementType=Hp,t.lanes=s,t;case Kp:return t=an(19,n,e,i),t.elementType=Kp,t.lanes=s,t;case oT:return Rh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case iT:o=10;break e;case sT:o=9;break e;case Kg:o=11;break e;case Qg:o=14;break e;case Or:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=an(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ji(t,e,n,r){return t=an(7,t,r,e),t.lanes=n,t}function Rh(t,e,n,r){return t=an(22,t,r,e),t.elementType=oT,t.lanes=n,t.stateNode={isHidden:!1},t}function cp(t,e,n){return t=an(6,t,null,e),t.lanes=n,t}function dp(t,e,n){return e=an(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wf(0),this.expirationTimes=Wf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function b_(t,e,n,r,i,s,o,a,l){return t=new pN(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=an(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},f_(s),t}function mN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function JS(t){if(!t)return ri;t=t._reactInternals;e:{if(Ps(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Ut(n))return XT(t,n,e)}return e}function ZS(t,e,n,r,i,s,o,a,l){return t=b_(n,r,!0,t,i,s,o,a,l),t.context=JS(null),n=t.current,r=St(),i=Xr(n),s=ir(r,i),s.callback=e??null,Qr(n,s,i),t.current.lanes=i,Tu(t,i,r),$t(t,r),t}function Ph(t,e,n,r){var i=e.current,s=St(),o=Xr(i);return n=JS(n),e.context===null?e.context=n:e.pendingContext=n,e=ir(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qr(i,e,o),t!==null&&(Sn(t,i,o,s),qc(t,i,o)),o}function Nd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cE(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function x_(t,e){cE(t,e),(t=t.alternate)&&cE(t,e)}function gN(){return null}var e1=typeof reportError=="function"?reportError:function(t){console.error(t)};function N_(t){this._internalRoot=t}Ah.prototype.render=N_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Ph(t,e,null,null)};Ah.prototype.unmount=N_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ls(function(){Ph(null,t,null,null)}),e[ur]=null}};function Ah(t){this._internalRoot=t}Ah.prototype.unstable_scheduleHydration=function(t){if(t){var e=bT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Lr.length&&e!==0&&e<Lr[n].priority;n++);Lr.splice(n,0,t),n===0&&NT(t)}};function D_(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ch(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dE(){}function _N(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Nd(o);s.call(u)}}var o=ZS(e,r,t,0,null,!1,!1,"",dE);return t._reactRootContainer=o,t[ur]=o.current,bl(t.nodeType===8?t.parentNode:t),ls(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Nd(l);a.call(u)}}var l=b_(t,0,!1,null,null,!1,!1,"",dE);return t._reactRootContainer=l,t[ur]=l.current,bl(t.nodeType===8?t.parentNode:t),ls(function(){Ph(e,l,n,r)}),l}function kh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Nd(o);a.call(l)}}Ph(e,o,t,i)}else o=_N(n,e,t,i,r);return Nd(o)}CT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qa(e.pendingLanes);n!==0&&(Jg(e,n|1),$t(e,xe()),!(ee&6)&&(Oo=xe()+500,wi()))}break;case 13:ls(function(){var r=cr(t,1);if(r!==null){var i=St();Sn(r,t,1,i)}}),x_(t,1)}};Zg=function(t){if(t.tag===13){var e=cr(t,134217728);if(e!==null){var n=St();Sn(e,t,134217728,n)}x_(t,134217728)}};kT=function(t){if(t.tag===13){var e=Xr(t),n=cr(t,e);if(n!==null){var r=St();Sn(n,t,e,r)}x_(t,e)}};bT=function(){return re};xT=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};im=function(t,e,n){switch(e){case"input":if(Xp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vh(r);if(!i)throw Error(k(90));lT(r),Xp(r,i)}}}break;case"textarea":cT(t,n);break;case"select":e=n.value,e!=null&&fo(t,!!n.multiple,e,!1)}};_T=P_;yT=ls;var yN={usingClientEntryPoint:!1,Events:[Ru,no,vh,mT,gT,P_]},ka={findFiberByHostInstance:ji,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vN={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ET(t),t===null?null:t.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance||gN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{mh=Ec.inject(vN),jn=Ec}catch{}}tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yN;tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!D_(e))throw Error(k(200));return mN(t,e,null,n)};tn.createRoot=function(t,e){if(!D_(t))throw Error(k(299));var n=!1,r="",i=e1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=b_(t,1,!1,null,null,n,!1,r,i),t[ur]=e.current,bl(t.nodeType===8?t.parentNode:t),new N_(e)};tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=ET(e),t=t===null?null:t.stateNode,t};tn.flushSync=function(t){return ls(t)};tn.hydrate=function(t,e,n){if(!Ch(e))throw Error(k(200));return kh(null,t,e,!0,n)};tn.hydrateRoot=function(t,e,n){if(!D_(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=e1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ZS(e,null,t,1,n??null,i,!1,s,o),t[ur]=e.current,bl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ah(e)};tn.render=function(t,e,n){if(!Ch(e))throw Error(k(200));return kh(null,t,e,!1,n)};tn.unmountComponentAtNode=function(t){if(!Ch(t))throw Error(k(40));return t._reactRootContainer?(ls(function(){kh(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};tn.unstable_batchedUpdates=P_;tn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ch(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return kh(t,e,n,!1,r)};tn.version="18.2.0-next-9e3b772b8-20220608";function t1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t1)}catch(t){console.error(t)}}t1(),ZI.exports=tn;var wN=ZI.exports;const EN=qI(wN);/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ul.apply(this,arguments)}var zr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(zr||(zr={}));const hE="popstate";function IN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Mm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Dd(i)}return SN(e,n,null,t)}function De(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function n1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function TN(){return Math.random().toString(36).substr(2,8)}function fE(t,e){return{usr:t.state,key:t.key,idx:e}}function Mm(t,e,n,r){return n===void 0&&(n=null),Ul({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?na(e):e,{state:n,key:e&&e.key||r||TN()})}function Dd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function na(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function SN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=zr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ul({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=zr.Pop;let w=c(),_=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:_})}function h(w,_){a=zr.Push;let m=Mm(v.location,w,_);n&&n(m,w),u=c()+1;let g=fE(m,u),E=v.createHref(m);try{o.pushState(g,"",E)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function p(w,_){a=zr.Replace;let m=Mm(v.location,w,_);n&&n(m,w),u=c();let g=fE(m,u),E=v.createHref(m);o.replaceState(g,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function y(w){let _=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:Dd(w);return m=m.replace(/ $/,"%20"),De(_,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,_)}let v={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(hE,d),l=w,()=>{i.removeEventListener(hE,d),l=null}},createHref(w){return e(i,w)},createURL:y,encodeLocation(w){let _=y(w);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:h,replace:p,go(w){return o.go(w)}};return v}var pE;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(pE||(pE={}));function RN(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?na(e):e,i=O_(r.pathname||"/",n);if(i==null)return null;let s=r1(t);PN(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=FN(i);o=VN(s[a],l)}return o}function r1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(De(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Zr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(De(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),r1(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:DN(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of i1(s.path))i(s,o,l)}),e}function i1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=i1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function PN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ON(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const AN=/^:[\w-]+$/,CN=3,kN=2,bN=1,xN=10,NN=-2,mE=t=>t==="*";function DN(t,e){let n=t.split("/"),r=n.length;return n.some(mE)&&(r+=NN),e&&(r+=kN),n.filter(i=>!mE(i)).reduce((i,s)=>i+(AN.test(s)?CN:s===""?bN:xN),r)}function ON(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function VN(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=LN({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Zr([i,c.pathname]),pathnameBase:zN(Zr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Zr([i,c.pathnameBase]))}return s}function LN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=MN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:p}=c;if(h==="*"){let v=a[d]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[d];return p&&!y?u[h]=void 0:u[h]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function MN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),n1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function FN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return n1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function O_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function UN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?na(t):t;return{pathname:n?n.startsWith("/")?n:$N(n,e):e,search:jN(r),hash:qN(i)}}function $N(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function BN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function V_(t,e){let n=BN(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function L_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=na(t):(i=Ul({},t),De(!i.pathname||!i.pathname.includes("?"),hp("?","pathname","search",i)),De(!i.pathname||!i.pathname.includes("#"),hp("#","pathname","hash",i)),De(!i.search||!i.search.includes("#"),hp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=UN(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Zr=t=>t.join("/").replace(/\/\/+/g,"/"),zN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),jN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function WN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const s1=["post","put","patch","delete"];new Set(s1);const GN=["get",...s1];new Set(GN);/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $l(){return $l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$l.apply(this,arguments)}const M_=T.createContext(null),HN=T.createContext(null),Ei=T.createContext(null),bh=T.createContext(null),vr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),o1=T.createContext(null);function KN(t,e){let{relative:n}=e===void 0?{}:e;ra()||De(!1);let{basename:r,navigator:i}=T.useContext(Ei),{hash:s,pathname:o,search:a}=l1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Zr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ra(){return T.useContext(bh)!=null}function As(){return ra()||De(!1),T.useContext(bh).location}function a1(t){T.useContext(Ei).static||T.useLayoutEffect(t)}function F_(){let{isDataRoute:t}=T.useContext(vr);return t?lD():QN()}function QN(){ra()||De(!1);let t=T.useContext(M_),{basename:e,future:n,navigator:r}=T.useContext(Ei),{matches:i}=T.useContext(vr),{pathname:s}=As(),o=JSON.stringify(V_(i,n.v7_relativeSplatPath)),a=T.useRef(!1);return a1(()=>{a.current=!0}),T.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=L_(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Zr([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}function YN(){let{matches:t}=T.useContext(vr),e=t[t.length-1];return e?e.params:{}}function l1(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=T.useContext(Ei),{matches:i}=T.useContext(vr),{pathname:s}=As(),o=JSON.stringify(V_(i,r.v7_relativeSplatPath));return T.useMemo(()=>L_(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function XN(t,e){return JN(t,e)}function JN(t,e,n,r){ra()||De(!1);let{navigator:i}=T.useContext(Ei),{matches:s}=T.useContext(vr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=As(),c;if(e){var d;let w=typeof e=="string"?na(e):e;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||De(!1),c=w}else c=u;let h=c.pathname||"/",p=h;if(l!=="/"){let w=l.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=RN(t,{pathname:p}),v=rD(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Zr([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Zr([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&v?T.createElement(bh.Provider,{value:{location:$l({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:zr.Pop}},v):v}function ZN(){let t=aD(),e=WN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,null)}const eD=T.createElement(ZN,null);class tD extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?T.createElement(vr.Provider,{value:this.props.routeContext},T.createElement(o1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nD(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(M_);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(vr.Provider,{value:e},r)}function rD(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||De(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:p}=n,y=d.route.loader&&h[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,h)=>{let p,y=!1,v=null,w=null;n&&(p=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||eD,l&&(u<0&&h===0?(uD("route-fallback",!1),y=!0,w=null):u===h&&(y=!0,w=d.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,h+1)),m=()=>{let g;return p?g=v:y?g=w:d.route.Component?g=T.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,T.createElement(nD,{match:d,routeContext:{outlet:c,matches:_,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?T.createElement(tD,{location:n.location,revalidation:n.revalidation,component:v,error:p,children:m(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):m()},null)}var u1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(u1||{}),Od=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Od||{});function iD(t){let e=T.useContext(M_);return e||De(!1),e}function sD(t){let e=T.useContext(HN);return e||De(!1),e}function oD(t){let e=T.useContext(vr);return e||De(!1),e}function c1(t){let e=oD(),n=e.matches[e.matches.length-1];return n.route.id||De(!1),n.route.id}function aD(){var t;let e=T.useContext(o1),n=sD(Od.UseRouteError),r=c1(Od.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function lD(){let{router:t}=iD(u1.UseNavigateStable),e=c1(Od.UseNavigateStable),n=T.useRef(!1);return a1(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,$l({fromRouteId:e},s)))},[t,e])}const gE={};function uD(t,e,n){!e&&!gE[t]&&(gE[t]=!0)}function ba(t){let{to:e,replace:n,state:r,relative:i}=t;ra()||De(!1);let{future:s,static:o}=T.useContext(Ei),{matches:a}=T.useContext(vr),{pathname:l}=As(),u=F_(),c=L_(e,V_(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(c);return T.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:i}),[u,d,i,n,r]),null}function Ws(t){De(!1)}function cD(t){let{basename:e="/",children:n=null,location:r,navigationType:i=zr.Pop,navigator:s,static:o=!1,future:a}=t;ra()&&De(!1);let l=e.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:s,static:o,future:$l({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=na(r));let{pathname:c="/",search:d="",hash:h="",state:p=null,key:y="default"}=r,v=T.useMemo(()=>{let w=O_(c,l);return w==null?null:{location:{pathname:w,search:d,hash:h,state:p,key:y},navigationType:i}},[l,c,d,h,p,y,i]);return v==null?null:T.createElement(Ei.Provider,{value:u},T.createElement(bh.Provider,{children:n,value:v}))}function dD(t){let{children:e,location:n}=t;return XN(Fm(e),n)}new Promise(()=>{});function Fm(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,Fm(r.props.children,s));return}r.type!==Ws&&De(!1),!r.props.index||!r.props.children||De(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Fm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Um(){return Um=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Um.apply(this,arguments)}function hD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function fD(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function pD(t,e){return t.button===0&&(!e||e==="_self")&&!fD(t)}const mD=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],gD="6";try{window.__reactRouterVersion=gD}catch{}const _D="startTransition",_E=qp[_D];function yD(t){let{basename:e,children:n,future:r,window:i}=t,s=T.useRef();s.current==null&&(s.current=IN({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=T.useCallback(d=>{u&&_E?_E(()=>l(d)):l(d)},[l,u]);return T.useLayoutEffect(()=>o.listen(c),[o,c]),T.createElement(cD,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const vD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wD=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ii=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,h=hD(e,mD),{basename:p}=T.useContext(Ei),y,v=!1;if(typeof u=="string"&&wD.test(u)&&(y=u,vD))try{let g=new URL(window.location.href),E=u.startsWith("//")?new URL(g.protocol+u):new URL(u),R=O_(E.pathname,p);E.origin===g.origin&&R!=null?u=R+E.search+E.hash:v=!0}catch{}let w=KN(u,{relative:i}),_=ED(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function m(g){r&&r(g),g.defaultPrevented||_(g)}return T.createElement("a",Um({},h,{href:y||w,onClick:v||s?r:m,ref:n,target:l}))});var yE;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(yE||(yE={}));var vE;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(vE||(vE={}));function ED(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=F_(),u=As(),c=l1(t,{relative:o});return T.useCallback(d=>{if(pD(d,n)){d.preventDefault();let h=r!==void 0?r:Dd(u)===Dd(c);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}var wE={};/**
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
 */const d1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ID=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},h1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(h=64)),r.push(n[c],n[d],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(d1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ID(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new TD;const h=s<<2|a>>4;if(r.push(h),u!==64){const p=a<<4&240|u>>2;if(r.push(p),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SD=function(t){const e=d1(t);return h1.encodeByteArray(e,!0)},Vd=function(t){return SD(t).replace(/\./g,"")},f1=function(t){try{return h1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ld(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!RD(n)||(t[n]=Ld(t[n],e[n]));return t}function RD(t){return t!=="__proto__"}/**
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
 */function PD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const AD=()=>PD().__FIREBASE_DEFAULTS__,CD=()=>{if(typeof process>"u"||typeof wE>"u")return;const t=wE.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&f1(t[1]);return e&&JSON.parse(e)},U_=()=>{try{return AD()||CD()||kD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},p1=()=>{var t;return(t=U_())===null||t===void 0?void 0:t.config},bD=t=>{var e;return(e=U_())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class xD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function m1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vd(JSON.stringify(n)),Vd(JSON.stringify(o)),""].join(".")}/**
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
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ND(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function $_(){var t;const e=(t=U_())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DD(){return typeof self=="object"&&self.self===self}function g1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function B_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _1(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function y1(){return!$_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bl(){try{return typeof indexedDB=="object"}catch{return!1}}function OD(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const VD="FirebaseError";class pt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VD,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cs.prototype.create)}}class Cs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?LD(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pt(i,a,r)}}function LD(t,e){return t.replace(MD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const MD=/\{\$([^}]+)}/g;/**
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
 */function EE(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function FD(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(IE(s)&&IE(o)){if(!zl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function IE(t){return t!==null&&typeof t=="object"}/**
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
 */function ia(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function uo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ga(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function v1(t,e){const n=new UD(t,e);return n.subscribe.bind(n)}class UD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$D(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=fp),i.error===void 0&&(i.error=fp),i.complete===void 0&&(i.complete=fp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $D(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fp(){}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function U(t){return t&&t._delegate?t._delegate:t}class pn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Vi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
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
 */let BD=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xD;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jD(e))try{this.getOrInitializeService({instanceIdentifier:Vi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vi){return this.instances.has(e)}getOptions(e=Vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vi){return this.component?this.component.multipleInstances?e:Vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function zD(t){return t===Vi?void 0:t}function jD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class qD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const z_=[];var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const w1={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},WD=K.INFO,GD={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},HD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=GD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xh{constructor(e){this.name=e,this._logLevel=WD,this._logHandler=HD,this._userLogHandler=null,z_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?w1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}function KD(t){z_.forEach(e=>{e.setLogLevel(t)})}function QD(t,e){for(const n of z_){let r=null;e&&e.level&&(r=w1[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:K[s].toLowerCase(),message:a,args:o,type:i.name})}}}const YD=(t,e)=>e.some(n=>t instanceof n);let TE,SE;function XD(){return TE||(TE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JD(){return SE||(SE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const E1=new WeakMap,$m=new WeakMap,I1=new WeakMap,pp=new WeakMap,j_=new WeakMap;function ZD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ei(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&E1.set(n,t)}).catch(()=>{}),j_.set(e,t),e}function eO(t){if($m.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});$m.set(t,e)}let Bm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $m.get(t);if(e==="objectStoreNames")return t.objectStoreNames||I1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ei(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tO(t){Bm=t(Bm)}function nO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(mp(this),e,...n);return I1.set(r,e.sort?e.sort():[e]),ei(r)}:JD().includes(t)?function(...e){return t.apply(mp(this),e),ei(E1.get(this))}:function(...e){return ei(t.apply(mp(this),e))}}function rO(t){return typeof t=="function"?nO(t):(t instanceof IDBTransaction&&eO(t),YD(t,XD())?new Proxy(t,Bm):t)}function ei(t){if(t instanceof IDBRequest)return ZD(t);if(pp.has(t))return pp.get(t);const e=rO(t);return e!==t&&(pp.set(t,e),j_.set(e,t)),e}const mp=t=>j_.get(t);function iO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ei(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ei(o.result),l.oldVersion,l.newVersion,ei(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const sO=["get","getKey","getAll","getAllKeys","count"],oO=["put","add","delete","clear"],gp=new Map;function RE(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gp.get(e))return gp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=oO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return gp.set(e,s),s}tO(t=>({...t,get:(e,n,r)=>RE(e,n)||t.get(e,n,r),has:(e,n)=>!!RE(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
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
 */class aO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zm="@firebase/app",PE="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const us=new xh("@firebase/app"),uO="@firebase/app-compat",cO="@firebase/analytics-compat",dO="@firebase/analytics",hO="@firebase/app-check-compat",fO="@firebase/app-check",pO="@firebase/auth",mO="@firebase/auth-compat",gO="@firebase/database",_O="@firebase/database-compat",yO="@firebase/functions",vO="@firebase/functions-compat",wO="@firebase/installations",EO="@firebase/installations-compat",IO="@firebase/messaging",TO="@firebase/messaging-compat",SO="@firebase/performance",RO="@firebase/performance-compat",PO="@firebase/remote-config",AO="@firebase/remote-config-compat",CO="@firebase/storage",kO="@firebase/storage-compat",bO="@firebase/firestore",xO="@firebase/firestore-compat",NO="firebase",DO="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const si="[DEFAULT]",OO={[zm]:"fire-core",[uO]:"fire-core-compat",[dO]:"fire-analytics",[cO]:"fire-analytics-compat",[fO]:"fire-app-check",[hO]:"fire-app-check-compat",[pO]:"fire-auth",[mO]:"fire-auth-compat",[gO]:"fire-rtdb",[_O]:"fire-rtdb-compat",[yO]:"fire-fn",[vO]:"fire-fn-compat",[wO]:"fire-iid",[EO]:"fire-iid-compat",[IO]:"fire-fcm",[TO]:"fire-fcm-compat",[SO]:"fire-perf",[RO]:"fire-perf-compat",[PO]:"fire-rc",[AO]:"fire-rc-compat",[CO]:"fire-gcs",[kO]:"fire-gcs-compat",[bO]:"fire-fst",[xO]:"fire-fst-compat","fire-js":"fire-js",[NO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
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
 */const oi=new Map,jl=new Map;function Md(t,e){try{t.container.addComponent(e)}catch(n){us.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function T1(t,e){t.container.addOrOverwriteComponent(e)}function hr(t){const e=t.name;if(jl.has(e))return us.debug(`There were multiple attempts to register component ${e}.`),!1;jl.set(e,t);for(const n of oi.values())Md(n,t);return!0}function S1(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function VO(t,e,n=si){S1(t,e).clearInstance(n)}function LO(){jl.clear()}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const MO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},sr=new Cs("app","Firebase",MO);/**
 * @license
 * Copyright 2019 Google LLC
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
 */let FO=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
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
 */const wr=DO;function q_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:si,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw sr.create("bad-app-name",{appName:String(i)});if(n||(n=p1()),!n)throw sr.create("no-options");const s=oi.get(i);if(s){if(zl(n,s.options)&&zl(r,s.config))return s;throw sr.create("duplicate-app",{appName:i})}const o=new qD(i);for(const l of jl.values())o.addComponent(l);const a=new FO(n,r,o);return oi.set(i,a),a}function UO(t=si){const e=oi.get(t);if(!e&&t===si&&p1())return q_();if(!e)throw sr.create("no-app",{appName:t});return e}function $O(){return Array.from(oi.values())}async function R1(t){const e=t.name;oi.has(e)&&(oi.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function dn(t,e,n){var r;let i=(r=OO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),us.warn(a.join(" "));return}hr(new pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function P1(t,e){if(t!==null&&typeof t!="function")throw sr.create("invalid-log-argument");QD(t,e)}function A1(t){KD(t)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const BO="firebase-heartbeat-database",zO=1,ql="firebase-heartbeat-store";let _p=null;function C1(){return _p||(_p=iO(BO,zO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ql)}catch(n){console.warn(n)}}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),_p}async function jO(t){try{const n=(await C1()).transaction(ql),r=await n.objectStore(ql).get(k1(t));return await n.done,r}catch(e){if(e instanceof pt)us.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});us.warn(n.message)}}}async function AE(t,e){try{const r=(await C1()).transaction(ql,"readwrite");await r.objectStore(ql).put(e,k1(t)),await r.done}catch(n){if(n instanceof pt)us.warn(n.message);else{const r=sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});us.warn(r.message)}}}function k1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const qO=1024,WO=30*24*60*60*1e3;class GO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=CE();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=WO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=CE(),{heartbeatsToSend:r,unsentEntries:i}=HO(this._heartbeatsCache.heartbeats),s=Vd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function CE(){return new Date().toISOString().substring(0,10)}function HO(t,e=qO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),kE(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),kE(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bl()?OD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return AE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return AE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function kE(t){return Vd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function QO(t){hr(new pn("platform-logger",e=>new aO(e),"PRIVATE")),hr(new pn("heartbeat",e=>new GO(e),"PRIVATE")),dn(zm,PE,t),dn(zm,PE,"esm2017"),dn("fire-js","")}QO("");const YO=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:pt,SDK_VERSION:wr,_DEFAULT_ENTRY_NAME:si,_addComponent:Md,_addOrOverwriteComponent:T1,_apps:oi,_clearComponents:LO,_components:jl,_getProvider:S1,_registerComponent:hr,_removeServiceInstance:VO,deleteApp:R1,getApp:UO,getApps:$O,initializeApp:q_,onLog:P1,registerVersion:dn,setLogLevel:A1},Symbol.toStringTag,{value:"Module"}));function W_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const xa={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ms={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function XO(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function b1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JO=XO,ZO=b1,x1=new Cs("auth","Firebase",b1());/**
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
 */const Fd=new xh("@firebase/auth");function e2(t,...e){Fd.logLevel<=K.WARN&&Fd.warn(`Auth (${wr}): ${t}`,...e)}function Xc(t,...e){Fd.logLevel<=K.ERROR&&Fd.error(`Auth (${wr}): ${t}`,...e)}/**
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
 */function lt(t,...e){throw G_(t,...e)}function st(t,...e){return G_(t,...e)}function N1(t,e,n){const r=Object.assign(Object.assign({},ZO()),{[e]:n});return new Cs("auth","Firebase",r).create(e,{appName:t.name})}function sa(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&lt(t,"argument-error"),N1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function G_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return x1.create(t,...e)}function x(t,e,...n){if(!t)throw G_(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xc(e),new Error(e)}function Pn(t,e){t||Fn(e)}/**
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
 */function Wl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function H_(){return bE()==="http:"||bE()==="https:"}function bE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function t2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(H_()||g1()||"connection"in navigator)?navigator.onLine:!0}function n2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Au{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=ND()||B_()}get(){return t2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function K_(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class D1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const r2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const i2=new Au(3e4,6e4);function Ce(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ke(t,e,n,r,i={}){return O1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ia(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),D1.fetch()(V1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function O1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},r2),e);try{const i=new o2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ha(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ha(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ha(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ha(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw N1(t,c,u);lt(t,c)}}catch(i){if(i instanceof pt)throw i;lt(t,"network-request-failed",{message:String(i)})}}async function Er(t,e,n,r,i={}){const s=await ke(t,e,n,r,i);return"mfaPendingCredential"in s&&lt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function V1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?K_(t.config,i):`${t.config.apiScheme}://${i}`}function s2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class o2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(st(this.auth,"network-request-failed")),i2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ha(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=st(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function xE(t){return t!==void 0&&t.getResponse!==void 0}function NE(t){return t!==void 0&&t.enterprise!==void 0}class a2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return s2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function l2(t){return(await ke(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function u2(t,e){return ke(t,"GET","/v2/recaptchaConfig",Ce(t,e))}/**
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
 */async function c2(t,e){return ke(t,"POST","/v1/accounts:delete",e)}async function d2(t,e){return ke(t,"POST","/v1/accounts:update",e)}async function h2(t,e){return ke(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function cl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function f2(t,e=!1){const n=U(t),r=await n.getIdToken(e),i=Nh(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:cl(yp(i.auth_time)),issuedAtTime:cl(yp(i.iat)),expirationTime:cl(yp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function yp(t){return Number(t)*1e3}function Nh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xc("JWT malformed, contained fewer than 3 sections"),null;try{const i=f1(n);return i?JSON.parse(i):(Xc("Failed to decode base64 JWT payload"),null)}catch(i){return Xc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function p2(t){const e=Nh(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pt&&m2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function m2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class g2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class L1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cl(this.lastLoginAt),this.creationTime=cl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Gl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await fr(t,h2(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?v2(s.providerUserInfo):[],a=y2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new L1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function _2(t){const e=U(t);await Gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function y2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function v2(t){return t.map(e=>{var{providerId:n}=e,r=W_(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function w2(t,e){const n=await O1(t,{},async()=>{const r=ia({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=V1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",D1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function E2(t,e){return ke(t,"POST","/v2/accounts:revokeToken",Ce(t,e))}/**
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
 */class Hl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):p2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await w2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Hl;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hl,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
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
 */function xr(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=W_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new g2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new L1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await fr(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return f2(this,e)}reload(){return _2(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Gl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fr(this,c2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:R,providerData:C,stsTokenManager:b}=n;x(g&&b,e,"internal-error");const N=Hl.fromJSON(this.name,b);x(typeof g=="string",e,"internal-error"),xr(d,e.name),xr(h,e.name),x(typeof E=="boolean",e,"internal-error"),x(typeof R=="boolean",e,"internal-error"),xr(p,e.name),xr(y,e.name),xr(v,e.name),xr(w,e.name),xr(_,e.name),xr(m,e.name);const J=new Zi({uid:g,auth:e,email:h,emailVerified:E,displayName:d,isAnonymous:R,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:N,createdAt:_,lastLoginAt:m});return C&&Array.isArray(C)&&(J.providerData=C.map(q=>Object.assign({},q))),w&&(J._redirectEventId=w),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Hl;i.updateFromServerResponse(n);const s=new Zi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Gl(s),s}}/**
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
 */const DE=new Map;function Gt(t){Pn(t instanceof Function,"Expected a class definition");let e=DE.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,DE.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class M1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}M1.type="NONE";const Vo=M1;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function es(t,e,n){return`firebase:${t}:${e}:${n}`}class vo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=es(this.userKey,i.apiKey,s),this.fullPersistenceKey=es("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vo(Gt(Vo),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Gt(Vo);const o=es(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Zi._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new vo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new vo(s,e,r))}}/**
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
 */function OE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(F1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(B1(e))return"Blackberry";if(z1(e))return"Webos";if(Q_(e))return"Safari";if((e.includes("chrome/")||U1(e))&&!e.includes("edge/"))return"Chrome";if(Cu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function F1(t=_e()){return/firefox\//i.test(t)}function Q_(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function U1(t=_e()){return/crios\//i.test(t)}function $1(t=_e()){return/iemobile/i.test(t)}function Cu(t=_e()){return/android/i.test(t)}function B1(t=_e()){return/blackberry/i.test(t)}function z1(t=_e()){return/webos/i.test(t)}function oa(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function I2(t=_e()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function T2(t=_e()){var e;return oa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function S2(){return _1()&&document.documentMode===10}function j1(t=_e()){return oa(t)||Cu(t)||z1(t)||B1(t)||/windows phone/i.test(t)||$1(t)}function R2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function q1(t,e=[]){let n;switch(t){case"Browser":n=OE(_e());break;case"Worker":n=`${OE(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wr}/${r}`}/**
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
 */class P2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function A2(t,e={}){return ke(t,"GET","/v2/passwordPolicy",Ce(t,e))}/**
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
 */const C2=6;class k2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:C2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class b2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new VE(this),this.idTokenSubscription=new VE(this),this.beforeStateQueue=new P2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=x1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=n2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?U(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await A2(this),n=new k2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Cs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await E2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await vo.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=q1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&e2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Re(t){return U(t)}class VE{constructor(e){this.auth=e,this.observer=null,this.addObserver=v1(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ku={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function x2(t){ku=t}function Y_(t){return ku.loadJS(t)}function N2(){return ku.recaptchaV2Script}function D2(){return ku.recaptchaEnterpriseScript}function O2(){return ku.gapiScript}function W1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const V2="recaptcha-enterprise",L2="NO_RECAPTCHA";class M2{constructor(e){this.type=V2,this.auth=Re(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{u2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new a2(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;NE(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(L2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&NE(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=D2();l.length!==0&&(l+=a),Y_(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function LE(t,e,n,r=!1){const i=new M2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Kl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await LE(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await LE(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function F2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function U2(t,e,n){const r=Re(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=G1(e),{host:o,port:a}=$2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||B2()}function G1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $2(t){const e=G1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ME(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ME(o)}}}function ME(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function B2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class aa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}/**
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
 */async function H1(t,e){return ke(t,"POST","/v1/accounts:resetPassword",Ce(t,e))}async function z2(t,e){return ke(t,"POST","/v1/accounts:update",e)}async function j2(t,e){return ke(t,"POST","/v1/accounts:signUp",e)}async function q2(t,e){return ke(t,"POST","/v1/accounts:update",Ce(t,e))}/**
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
 */async function W2(t,e){return Er(t,"POST","/v1/accounts:signInWithPassword",Ce(t,e))}async function Dh(t,e){return ke(t,"POST","/v1/accounts:sendOobCode",Ce(t,e))}async function G2(t,e){return Dh(t,e)}async function H2(t,e){return Dh(t,e)}async function K2(t,e){return Dh(t,e)}async function Q2(t,e){return Dh(t,e)}/**
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
 */async function Y2(t,e){return Er(t,"POST","/v1/accounts:signInWithEmailLink",Ce(t,e))}async function X2(t,e){return Er(t,"POST","/v1/accounts:signInWithEmailLink",Ce(t,e))}/**
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
 */class Ql extends aa{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ql(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ql(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kl(e,n,"signInWithPassword",W2);case"emailLink":return Y2(e,{email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kl(e,r,"signUpPassword",j2);case"emailLink":return X2(e,{idToken:n,email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function or(t,e){return Er(t,"POST","/v1/accounts:signInWithIdp",Ce(t,e))}/**
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
 */const J2="http://localhost";class Hn extends aa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=W_(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Hn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,or(e,n)}buildRequest(){const e={requestUri:J2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ia(n)}return e}}/**
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
 */async function Z2(t,e){return ke(t,"POST","/v1/accounts:sendVerificationCode",Ce(t,e))}async function eV(t,e){return Er(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,e))}async function tV(t,e){const n=await Er(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,e));if(n.temporaryProof)throw Ha(t,"account-exists-with-different-credential",n);return n}const nV={USER_NOT_FOUND:"user-not-found"};async function rV(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Er(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,n),nV)}/**
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
 */class ts extends aa{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ts({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ts({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return eV(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return tV(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return rV(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ts({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function iV(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sV(t){const e=uo(Ga(t)).link,n=e?uo(Ga(e)).deep_link_id:null,r=uo(Ga(t)).deep_link_id;return(r?uo(Ga(r)).link:null)||r||n||e||t}class Oh{constructor(e){var n,r,i,s,o,a;const l=uo(Ga(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=iV((i=l.mode)!==null&&i!==void 0?i:null);x(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=sV(e);try{return new Oh(n)}catch{return null}}}/**
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
 */class Ir{constructor(){this.providerId=Ir.PROVIDER_ID}static credential(e,n){return Ql._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Oh.parseLink(n);return x(r,"argument-error"),Ql._fromEmailAndCode(e,r.code,r.tenantId)}}Ir.PROVIDER_ID="password";Ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Tr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class la extends Tr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class wo extends la{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return x("providerId"in n&&"signInMethod"in n,"argument-error"),Hn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return x(e.idToken||e.accessToken,"argument-error"),Hn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return wo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return wo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new wo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Nn extends la{constructor(){super("facebook.com")}static credential(e){return Hn._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
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
 */class Dn extends la{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hn._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
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
 */class On extends la{constructor(){super("github.com")}static credential(e){return Hn._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
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
 */const oV="http://localhost";class Lo extends aa{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,or(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Lo(r,s)}static _create(e,n){return new Lo(e,n)}buildRequest(){return{requestUri:oV,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const aV="saml.";class Ud extends Tr{constructor(e){x(e.startsWith(aV),"argument-error"),super(e)}static credentialFromResult(e){return Ud.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ud.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Lo.fromJSON(e);return x(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Lo._create(r,n)}catch{return null}}}/**
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
 */class Vn extends la{constructor(){super("twitter.com")}static credential(e,n){return Hn._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
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
 */async function K1(t,e){return Er(t,"POST","/v1/accounts:signUp",Ce(t,e))}/**
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
 */class mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zi._fromIdTokenResponse(e,r,i),o=FE(r);return new mn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=FE(r);return new mn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function FE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function lV(t){var e;const n=Re(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new mn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await K1(n,{returnSecureToken:!0}),i=await mn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class $d extends pt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$d.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new $d(e,n,r,i)}}function Q1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$d._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function Y1(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function uV(t,e){const n=U(t);await Vh(!0,n,e);const{providerUserInfo:r}=await d2(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Y1(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function X_(t,e,n=!1){const r=await fr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mn._forOperation(t,"link",r)}async function Vh(t,e,n){await Gl(e);const r=Y1(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";x(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function X1(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await fr(t,Q1(r,i,e,t),n);x(s.idToken,r,"internal-error");const o=Nh(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),mn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&lt(r,"user-mismatch"),s}}/**
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
 */async function J1(t,e,n=!1){const r="signIn",i=await Q1(t,r,e),s=await mn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Lh(t,e){return J1(Re(t),e)}async function Z1(t,e){const n=U(t);return await Vh(!1,n,e.providerId),X_(n,e)}async function eR(t,e){return X1(U(t),e)}/**
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
 */async function cV(t,e){return Er(t,"POST","/v1/accounts:signInWithCustomToken",Ce(t,e))}/**
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
 */async function dV(t,e){const n=Re(t),r=await cV(n,{token:e,returnSecureToken:!0}),i=await mn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class bu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?J_._fromServerResponse(e,n):"totpInfo"in n?Z_._fromServerResponse(e,n):lt(e,"internal-error")}}class J_ extends bu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new J_(n)}}class Z_ extends bu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Z_(n)}}/**
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
 */function Mh(t,e,n){var r;x(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),x(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(x(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(x(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function ey(t){const e=Re(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hV(t,e,n){const r=Re(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Mh(r,i,n),await Kl(r,i,"getOobCode",H2)}async function fV(t,e,n){await H1(U(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ey(t),r})}async function pV(t,e){await q2(U(t),{oobCode:e})}async function tR(t,e){const n=U(t),r=await H1(n,{oobCode:e}),i=r.requestType;switch(x(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":x(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":x(r.mfaInfo,n,"internal-error");default:x(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=bu._fromServerResponse(Re(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function mV(t,e){const{data:n}=await tR(U(t),e);return n.email}async function gV(t,e,n){const r=Re(t),o=await Kl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",K1).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ey(t),l}),a=await mn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function _V(t,e,n){return Lh(U(t),Ir.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ey(t),r})}/**
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
 */async function yV(t,e,n){const r=Re(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){x(a.handleCodeInApp,r,"argument-error"),a&&Mh(r,o,a)}s(i,n),await Kl(r,i,"getOobCode",K2)}function vV(t,e){const n=Oh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function wV(t,e,n){const r=U(t),i=Ir.credentialWithLink(e,n||Wl());return x(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Lh(r,i)}/**
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
 */async function EV(t,e){return ke(t,"POST","/v1/accounts:createAuthUri",Ce(t,e))}/**
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
 */async function IV(t,e){const n=H_()?Wl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await EV(U(t),r);return i||[]}async function TV(t,e){const n=U(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Mh(n.auth,i,e);const{email:s}=await G2(n.auth,i);s!==t.email&&await t.reload()}async function SV(t,e,n){const r=U(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Mh(r.auth,s,n);const{email:o}=await Q2(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function RV(t,e){return ke(t,"POST","/v1/accounts:update",e)}/**
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
 */async function PV(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=U(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await fr(r,RV(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function AV(t,e){return nR(U(t),e,null)}function CV(t,e){return nR(U(t),null,e)}async function nR(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await fr(t,z2(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function kV(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Nh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Eo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new bV(s,i);case"github.com":return new xV(s,i);case"google.com":return new NV(s,i);case"twitter.com":return new DV(s,i,t.screenName||null);case"custom":case"anonymous":return new Eo(s,null);default:return new Eo(s,r,i)}}class Eo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class rR extends Eo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class bV extends Eo{constructor(e,n){super(e,"facebook.com",n)}}class xV extends rR{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class NV extends Eo{constructor(e,n){super(e,"google.com",n)}}class DV extends rR{constructor(e,n,r){super(e,"twitter.com",n,r)}}function OV(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:kV(n)}function VV(t,e,n,r){return U(t).onAuthStateChanged(e,n,r)}/**
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
 */class Gi{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Gi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Gi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Gi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Gi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class ty{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Re(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>bu._fromServerResponse(r,a));x(i.mfaPendingCredential,r,"internal-error");const o=Gi._fromMfaPendingCredential(i.mfaPendingCredential);return new ty(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await mn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return x(n.user,r,"internal-error"),mn._forOperation(n.user,n.operationType,u);default:lt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function LV(t,e){var n;const r=U(t),i=e;return x(e.customData.operationType,r,"argument-error"),x((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),ty._fromError(r,i)}/**
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
 */function MV(t,e){return ke(t,"POST","/v2/accounts/mfaEnrollment:start",Ce(t,e))}function FV(t,e){return ke(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ce(t,e))}function UV(t,e){return ke(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ce(t,e))}class ny{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>bu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new ny(e)}async getSession(){return Gi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await fr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await fr(this.user,UV(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const vp=new WeakMap;function $V(t){const e=U(t);return vp.has(e)||vp.set(e,ny._fromUser(e)),vp.get(e)}const Bd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class iR{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bd,"1"),this.storage.removeItem(Bd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function BV(){const t=_e();return Q_(t)||oa(t)}const zV=1e3,jV=10;class sR extends iR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=BV()&&R2(),this.fallbackToPolling=j1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);S2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jV):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sR.type="LOCAL";const ry=sR;/**
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
 */class oR extends iR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oR.type="SESSION";const cs=oR;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function qV(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Fh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Fh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await qV(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fh.receivers=[];/**
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
 */function xu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class WV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=xu("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Le(){return window}function GV(t){Le().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function iy(){return typeof Le().WorkerGlobalScope<"u"&&typeof Le().importScripts=="function"}async function HV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KV(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QV(){return iy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const aR="firebaseLocalStorageDb",YV=1,zd="firebaseLocalStorage",lR="fbase_key";class Nu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uh(t,e){return t.transaction([zd],e?"readwrite":"readonly").objectStore(zd)}function XV(){const t=indexedDB.deleteDatabase(aR);return new Nu(t).toPromise()}function jm(){const t=indexedDB.open(aR,YV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zd,{keyPath:lR})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zd)?e(r):(r.close(),await XV(),e(await jm()))})})}async function UE(t,e,n){const r=Uh(t,!0).put({[lR]:e,value:n});return new Nu(r).toPromise()}async function JV(t,e){const n=Uh(t,!1).get(e),r=await new Nu(n).toPromise();return r===void 0?null:r.value}function $E(t,e){const n=Uh(t,!0).delete(e);return new Nu(n).toPromise()}const ZV=800,eL=3;class uR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>eL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fh._getInstance(QV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HV(),!this.activeServiceWorker)return;this.sender=new WV(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jm();return await UE(e,Bd,"1"),await $E(e,Bd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>UE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>JV(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$E(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Uh(i,!1).getAll();return new Nu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uR.type="LOCAL";const Yl=uR;/**
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
 */function tL(t,e){return ke(t,"POST","/v2/accounts/mfaSignIn:start",Ce(t,e))}function nL(t,e){return ke(t,"POST","/v2/accounts/mfaSignIn:finalize",Ce(t,e))}/**
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
 */const rL=500,iL=6e4,Ic=1e12;class sL{constructor(e){this.auth=e,this.counter=Ic,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new oL(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Ic;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Ic;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Ic;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class oL{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;x(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=aL(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},iL)},rL))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function aL(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const wp=W1("rcb"),lL=new Au(3e4,6e4);class uL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Le().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return x(cL(n),e,"argument-error"),this.shouldResolveImmediately(n)&&xE(Le().grecaptcha)?Promise.resolve(Le().grecaptcha):new Promise((r,i)=>{const s=Le().setTimeout(()=>{i(st(e,"network-request-failed"))},lL.get());Le()[wp]=()=>{Le().clearTimeout(s),delete Le()[wp];const a=Le().grecaptcha;if(!a||!xE(a)){i(st(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${N2()}?${ia({onload:wp,render:"explicit",hl:n})}`;Y_(o).catch(()=>{clearTimeout(s),i(st(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Le().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function cL(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class dL{async load(e){return new sL(e)}clearedOneInstance(){}}/**
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
 */const cR="recaptcha",hL={theme:"light",type:"image"};let fL=class{constructor(e,n,r=Object.assign({},hL)){this.parameters=r,this.type=cR,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Re(e),this.isInvisible=this.parameters.size==="invisible",x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;x(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new dL:new uL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){x(!this.parameters.sitekey,this.auth,"argument-error"),x(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Le()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){x(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){x(H_()&&!iy(),this.auth,"internal-error"),await pL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await l2(this.auth);x(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return x(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function pL(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class sy{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ts._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function mL(t,e,n){const r=Re(t),i=await $h(r,e,U(n));return new sy(i,s=>Lh(r,s))}async function gL(t,e,n){const r=U(t);await Vh(!1,r,"phone");const i=await $h(r.auth,e,U(n));return new sy(i,s=>Z1(r,s))}async function _L(t,e,n){const r=U(t),i=await $h(r.auth,e,U(n));return new sy(i,s=>eR(r,s))}async function $h(t,e,n){var r;const i=await n.verify();try{x(typeof i=="string",t,"argument-error"),x(n.type===cR,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return x(o.type==="enroll",t,"internal-error"),(await MV(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{x(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return x(a,t,"missing-multi-factor-info"),(await tL(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Z2(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function yL(t,e){await X_(U(t),e)}/**
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
 */let ds=class Jc{constructor(e){this.providerId=Jc.PROVIDER_ID,this.auth=Re(e)}verifyPhoneNumber(e,n){return $h(this.auth,e,U(n))}static credential(e,n){return ts._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Jc.credentialFromTaggedObject(n)}static credentialFromError(e){return Jc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?ts._fromTokenResponse(n,r):null}};ds.PROVIDER_ID="phone";ds.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
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
 */function ks(t,e){return e?Gt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class oy extends aa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vL(t){return J1(t.auth,new oy(t),t.bypassAuthState)}function wL(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),X1(n,new oy(t),t.bypassAuthState)}async function EL(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),X_(n,new oy(t),t.bypassAuthState)}/**
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
 */class dR{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vL;case"linkViaPopup":case"linkViaRedirect":return EL;case"reauthViaPopup":case"reauthViaRedirect":return wL;default:lt(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IL=new Au(2e3,1e4);async function TL(t,e,n){const r=Re(t);sa(t,e,Tr);const i=ks(r,n);return new tr(r,"signInViaPopup",e,i).executeNotNull()}async function SL(t,e,n){const r=U(t);sa(r.auth,e,Tr);const i=ks(r.auth,n);return new tr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function RL(t,e,n){const r=U(t);sa(r.auth,e,Tr);const i=ks(r.auth,n);return new tr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class tr extends dR{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,tr.currentPopupAction&&tr.currentPopupAction.cancel(),tr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IL.get())};e()}}tr.currentPopupAction=null;/**
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
 */const PL="pendingRedirect",dl=new Map;class AL extends dR{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=dl.get(this.auth._key());if(!e){try{const r=await CL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}dl.set(this.auth._key(),e)}return this.bypassAuthState||dl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CL(t,e){const n=fR(e),r=hR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function ay(t,e){return hR(t)._set(fR(e),"true")}function kL(){dl.clear()}function ly(t,e){dl.set(t._key(),e)}function hR(t){return Gt(t._redirectPersistence)}function fR(t){return es(PL,t.config.apiKey,t.name)}/**
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
 */function bL(t,e,n){return xL(t,e,n)}async function xL(t,e,n){const r=Re(t);sa(t,e,Tr),await r._initializationPromise;const i=ks(r,n);return await ay(i,r),i._openRedirect(r,e,"signInViaRedirect")}function NL(t,e,n){return DL(t,e,n)}async function DL(t,e,n){const r=U(t);sa(r.auth,e,Tr),await r.auth._initializationPromise;const i=ks(r.auth,n);await ay(i,r.auth);const s=await pR(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function OL(t,e,n){return VL(t,e,n)}async function VL(t,e,n){const r=U(t);sa(r.auth,e,Tr),await r.auth._initializationPromise;const i=ks(r.auth,n);await Vh(!1,r,e.providerId),await ay(i,r.auth);const s=await pR(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function LL(t,e){return await Re(t)._initializationPromise,Bh(t,e,!1)}async function Bh(t,e,n=!1){const r=Re(t),i=ks(r,e),o=await new AL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function pR(t){const e=xu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const ML=10*60*1e3;class mR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gR(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(st(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ML&&this.cachedEventUids.clear(),this.cachedEventUids.has(BE(e))}saveEventToCache(e){this.cachedEventUids.add(BE(e)),this.lastProcessedEventTime=Date.now()}}function BE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gR({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gR(t);default:return!1}}/**
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
 */async function _R(t,e={}){return ke(t,"GET","/v1/projects",e)}/**
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
 */const UL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$L=/^https?/;async function BL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _R(t);for(const n of e)try{if(zL(n))return}catch{}lt(t,"unauthorized-domain")}function zL(t){const e=Wl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$L.test(n))return!1;if(UL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const jL=new Au(3e4,6e4);function zE(){const t=Le().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qL(t){return new Promise((e,n)=>{var r,i,s;function o(){zE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zE(),n(st(t,"network-request-failed"))},timeout:jL.get()})}if(!((i=(r=Le().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Le().gapi)===null||s===void 0)&&s.load)o();else{const a=W1("iframefcb");return Le()[a]=()=>{gapi.load?o():n(st(t,"network-request-failed"))},Y_(`${O2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Zc=null,e})}let Zc=null;function WL(t){return Zc=Zc||qL(t),Zc}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const GL=new Au(5e3,15e3),HL="__/auth/iframe",KL="emulator/auth/iframe",QL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XL(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?K_(e,KL):`https://${t.config.authDomain}/${HL}`,r={apiKey:e.apiKey,appName:t.name,v:wr},i=YL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ia(r).slice(1)}`}async function JL(t){const e=await WL(t),n=Le().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:XL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=st(t,"network-request-failed"),a=Le().setTimeout(()=>{s(o)},GL.get());function l(){Le().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ZL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eM=500,tM=600,nM="_blank",rM="http://localhost";class jE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iM(t,e,n,r=eM,i=tM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ZL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=_e().toLowerCase();n&&(a=U1(u)?nM:n),F1(u)&&(e=e||rM,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[p,y])=>`${h}${p}=${y},`,"");if(T2(u)&&a!=="_self")return sM(e||"",a),new jE(null);const d=window.open(e||"",a,c);x(d,t,"popup-blocked");try{d.focus()}catch{}return new jE(d)}function sM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const oM="__/auth/handler",aM="emulator/auth/handler",lM=encodeURIComponent("fac");async function qm(t,e,n,r,i,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wr,eventId:i};if(e instanceof Tr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",FD(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof la){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${lM}=${encodeURIComponent(l)}`:"";return`${uM(t)}?${ia(a).slice(1)}${u}`}function uM({config:t}){return t.emulator?K_(t,aM):`https://${t.authDomain}/${oM}`}/**
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
 */const Ep="webStorageSupport";class cM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cs,this._completeRedirectFn=Bh,this._overrideRedirectResult=ly}async _openPopup(e,n,r,i){var s;Pn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await qm(e,n,r,Wl(),i);return iM(e,o,xu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await qm(e,n,r,Wl(),i);return GV(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JL(e),r=new mR(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ep,{type:Ep},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ep];o!==void 0&&n(!!o),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return j1()||Q_()||oa()}}const dM=cM;class hM{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Fn("unexpected MultiFactorSessionType")}}}class uy extends hM{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new uy(e)}_finalizeEnroll(e,n,r){return FV(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return nL(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class yR{constructor(){}static assertion(e){return uy._fromCredential(e)}}yR.FACTOR_ID="phone";var qE="@firebase/auth",WE="1.6.0";/**
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
 */class fM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mM(t){hr(new pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:q1(t)},u=new b2(r,i,s,l);return F2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hr(new pn("auth-internal",e=>{const n=Re(e.getProvider("auth").getImmediate());return(r=>new fM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(qE,WE,pM(t)),dn(qE,WE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const gM=5*60;bD("authIdTokenMaxAge");function _M(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}x2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=st("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_M().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mM("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function yM(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function vM(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var co=function(){return co=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},co.apply(this,arguments)},vR=function(t){return{loading:t==null,value:t}},wM=function(){return function(t,e){switch(e.type){case"error":return co(co({},t),{error:e.error,loading:!1,value:void 0});case"reset":return vR(e.defaultValue);case"value":return co(co({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},EM=function(t){var e=t?t():void 0,n=T.useReducer(wM(),vR(e)),r=n[0],i=n[1],s=T.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=T.useCallback(function(l){i({type:"error",error:l})},[]),a=T.useCallback(function(l){i({type:"value",value:l})},[]);return T.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},cy=function(t,e){var n=EM(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return T.useEffect(function(){var l=VV(t,function(u){return yM(void 0,void 0,void 0,function(){var c;return vM(this,function(d){switch(d.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return d.sent(),[3,4];case 3:return c=d.sent(),s(c),[3,4];case 4:return o(u),[2]}})})},s);return function(){l()}},[t]),[a,i,r]};/**
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
 */class IM{constructor(e,n){this._delegate=e,this.firebase=n,Md(e,new pn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),R1(this._delegate)))}_getService(e,n=si){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=si){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Md(this._delegate,e)}_addOrOverwriteComponent(e){T1(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const TM={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},GE=new Cs("app-compat","Firebase",TM);/**
 * @license
 * Copyright 2019 Google LLC
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
 */function SM(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:dn,setLogLevel:A1,onLog:P1,apps:null,SDK_VERSION:wr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:YO}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||si,!EE(e,u))throw GE.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const d=q_(u,c);if(EE(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(hr(u)&&u.type==="PUBLIC"){const h=(p=i())=>{if(typeof p[d]!="function")throw GE.create("invalid-app-argument",{appName:c});return p[d]()};u.serviceProps!==void 0&&Ld(h,u.serviceProps),n[d]=h,t.prototype[d]=function(...p){return this._getService.bind(this,c).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function wR(){const t=SM(IM);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:wR,extendNamespace:e,createSubscribe:v1,ErrorFactory:Cs,deepExtend:Ld});function e(n){Ld(t,n)}return t}const RM=wR();/**
 * @license
 * Copyright 2019 Google LLC
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
 */const HE=new xh("@firebase/app-compat"),PM="@firebase/app-compat",AM="0.2.27";/**
 * @license
 * Copyright 2019 Google LLC
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
 */function CM(t){dn(PM,AM,t)}/**
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
 */if(DD()&&self.firebase!==void 0){HE.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&HE.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Yn=RM;CM();var kM="firebase",bM="10.8.0";/**
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
 */Yn.registerVersion(kM,bM,"app-compat");/**
 * @license
 * Copyright 2021 Google LLC
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
 */function hs(){return window}/**
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
 */const xM=2e3;async function NM(t,e,n){var r;const{BuildInfo:i}=hs();Pn(e.sessionId,"AuthEvent did not contain a session ID");const s=await MM(e.sessionId),o={};return oa()?o.ibi=i.packageName:Cu()?o.apn=i.packageName:lt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,qm(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function DM(t){const{BuildInfo:e}=hs(),n={};oa()?n.iosBundleId=e.packageName:Cu()?n.androidPackageName=e.packageName:lt(t,"operation-not-supported-in-this-environment"),await _R(t,n)}function OM(t){const{cordova:e}=hs();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,I2()?"_blank":"_system","location=yes"),n(i)})})}async function VM(t,e,n){const{cordova:r}=hs();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const h=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(st(t,"redirect-cancelled-by-user"))},xM))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Cu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function LM(t){var e,n,r,i,s,o,a,l,u,c;const d=hs();x(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),x(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),x(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),x(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),x(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function MM(t){const e=FM(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function FM(t){if(Pn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const UM=20;class $M extends mR{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function BM(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:qM(),postBody:null,tenantId:t.tenantId,error:st(t,"no-auth-event")}}function zM(t,e){return Wm()._set(Gm(t),e)}async function KE(t){const e=await Wm()._get(Gm(t));return e&&await Wm()._remove(Gm(t)),e}function jM(t,e){var n,r;const i=GM(e);if(i.includes("/__/auth/callback")){const s=ed(i),o=s.firebaseError?WM(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?st(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function qM(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<UM;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Wm(){return Gt(ry)}function Gm(t){return es("authEvent",t.config.apiKey,t.name)}function WM(t){try{return JSON.parse(t)}catch{return null}}function GM(t){const e=ed(t),n=e.link?decodeURIComponent(e.link):void 0,r=ed(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return ed(i).link||i||r||n||t}function ed(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return uo(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const HM=500;class KM{constructor(){this._redirectPersistence=cs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Bh,this._overrideRedirectResult=ly}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new $M(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){lt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){LM(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),kL(),await this._originValidation(e);const o=BM(e,r,i);await zM(e,o);const a=await NM(e,o,n),l=await OM(a);return VM(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DM(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=hs(),o=setTimeout(async()=>{await KE(e),n.onEvent(QE())},HM),a=async c=>{clearTimeout(o);const d=await KE(e);let h=null;d&&(c!=null&&c.url)&&(h=jM(d,c.url)),n.onEvent(h||QE())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;hs().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const QM=KM;function QE(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:st("no-auth-event")}}/**
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
 */function YM(t,e){Re(t)._logFramework(e)}var XM="@firebase/auth-compat",JM="0.5.2";/**
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
 */const ZM=1e3;function hl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function eF(){return hl()==="http:"||hl()==="https:"}function ER(t=_e()){return!!((hl()==="file:"||hl()==="ionic:"||hl()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function tF(){return B_()||$_()}function nF(){return _1()&&(document==null?void 0:document.documentMode)===11}function rF(t=_e()){return/Edge\/\d+/.test(t)}function iF(t=_e()){return nF()||rF(t)}function IR(){try{const t=self.localStorage,e=xu();if(t)return t.setItem(e,"1"),t.removeItem(e),iF()?Bl():!0}catch{return dy()&&Bl()}return!1}function dy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ip(){return(eF()||g1()||ER())&&!tF()&&IR()&&!dy()}function TR(){return ER()&&typeof document<"u"}async function sF(){return TR()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},ZM);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function oF(){return typeof window<"u"?window:null}/**
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
 */const qt={LOCAL:"local",NONE:"none",SESSION:"session"},Na=x,SR="persistence";function aF(t,e){if(Na(Object.values(qt).includes(e),t,"invalid-persistence-type"),B_()){Na(e!==qt.SESSION,t,"unsupported-persistence-type");return}if($_()){Na(e===qt.NONE,t,"unsupported-persistence-type");return}if(dy()){Na(e===qt.NONE||e===qt.LOCAL&&Bl(),t,"unsupported-persistence-type");return}Na(e===qt.NONE||IR(),t,"unsupported-persistence-type")}async function Hm(t){await t._initializationPromise;const e=RR(),n=es(SR,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function lF(t,e){const n=RR();if(!n)return[];const r=es(SR,t,e);switch(n.getItem(r)){case qt.NONE:return[Vo];case qt.LOCAL:return[Yl,cs];case qt.SESSION:return[cs];default:return[]}}function RR(){var t;try{return((t=oF())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const uF=x;class jr{constructor(){this.browserResolver=Gt(dM),this.cordovaResolver=Gt(QM),this.underlyingResolver=null,this._redirectPersistence=cs,this._completeRedirectFn=Bh,this._overrideRedirectResult=ly}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return TR()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return uF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await sF();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function PR(t){return t.unwrap()}function cF(t){return t.wrapped()}/**
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
 */function dF(t){return AR(t)}function hF(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new fF(t,LV(t,e))}else if(r){const i=AR(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function AR(t){const{_tokenResponse:e}=t instanceof pt?t.customData:t;if(!e)return null;if(!(t instanceof pt)&&"temporaryProof"in e&&"phoneNumber"in e)return ds.credentialFromResult(t);const n=e.providerId;if(!n||n===xa.PASSWORD)return null;let r;switch(n){case xa.GOOGLE:r=Dn;break;case xa.FACEBOOK:r=Nn;break;case xa.GITHUB:r=On;break;case xa.TWITTER:r=Vn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Lo._create(n,a):Hn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new wo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof pt?r.credentialFromError(t):r.credentialFromResult(t)}function xt(t,e){return e.catch(n=>{throw n instanceof pt&&hF(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:dF(n),additionalUserInfo:OV(n),user:zh.getOrCreate(i)}})}async function Km(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>xt(t,n.confirm(r))}}class fF{constructor(e,n){this.resolver=n,this.auth=cF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return xt(PR(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let zh=class Ka{constructor(e){this._delegate=e,this.multiFactor=$V(e)}static getOrCreate(e){return Ka.USER_MAP.has(e)||Ka.USER_MAP.set(e,new Ka(e)),Ka.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return xt(this.auth,Z1(this._delegate,e))}async linkWithPhoneNumber(e,n){return Km(this.auth,gL(this._delegate,e,n))}async linkWithPopup(e){return xt(this.auth,RL(this._delegate,e,jr))}async linkWithRedirect(e){return await Hm(Re(this.auth)),OL(this._delegate,e,jr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return xt(this.auth,eR(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Km(this.auth,_L(this._delegate,e,n))}reauthenticateWithPopup(e){return xt(this.auth,SL(this._delegate,e,jr))}async reauthenticateWithRedirect(e){return await Hm(Re(this.auth)),NL(this._delegate,e,jr)}sendEmailVerification(e){return TV(this._delegate,e)}async unlink(e){return await uV(this._delegate,e),this}updateEmail(e){return AV(this._delegate,e)}updatePassword(e){return CV(this._delegate,e)}updatePhoneNumber(e){return yL(this._delegate,e)}updateProfile(e){return PV(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return SV(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};zh.USER_MAP=new WeakMap;/**
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
 */const Da=x;class Qm{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Da(r,"invalid-api-key",{appName:e.name}),Da(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?jr:void 0;this._delegate=n.initialize({options:{persistence:pF(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(JO),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?zh.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){U2(this._delegate,e,n)}applyActionCode(e){return pV(this._delegate,e)}checkActionCode(e){return tR(this._delegate,e)}confirmPasswordReset(e,n){return fV(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return xt(this._delegate,gV(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return IV(this._delegate,e)}isSignInWithEmailLink(e){return vV(this._delegate,e)}async getRedirectResult(){Da(Ip(),this._delegate,"operation-not-supported-in-this-environment");const e=await LL(this._delegate,jr);return e?xt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){YM(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=YE(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=YE(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return yV(this._delegate,e,n)}sendPasswordResetEmail(e,n){return hV(this._delegate,e,n||void 0)}async setPersistence(e){aF(this._delegate,e);let n;switch(e){case qt.SESSION:n=cs;break;case qt.LOCAL:n=await Gt(Yl)._isAvailable()?Yl:ry;break;case qt.NONE:n=Vo;break;default:return lt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return xt(this._delegate,lV(this._delegate))}signInWithCredential(e){return xt(this._delegate,Lh(this._delegate,e))}signInWithCustomToken(e){return xt(this._delegate,dV(this._delegate,e))}signInWithEmailAndPassword(e,n){return xt(this._delegate,_V(this._delegate,e,n))}signInWithEmailLink(e,n){return xt(this._delegate,wV(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Km(this._delegate,mL(this._delegate,e,n))}async signInWithPopup(e){return Da(Ip(),this._delegate,"operation-not-supported-in-this-environment"),xt(this._delegate,TL(this._delegate,e,jr))}async signInWithRedirect(e){return Da(Ip(),this._delegate,"operation-not-supported-in-this-environment"),await Hm(this._delegate),bL(this._delegate,e,jr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return mV(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Qm.Persistence=qt;function YE(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&zh.getOrCreate(o)),error:e,complete:n}}function pF(t,e){const n=lF(t,e);if(typeof self<"u"&&!n.includes(Yl)&&n.push(Yl),typeof window<"u")for(const r of[ry,cs])n.includes(r)||n.push(r);return n.includes(Vo)||n.push(Vo),n}/**
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
 */class hy{constructor(){this.providerId="phone",this._delegate=new ds(PR(Yn.auth()))}static credential(e,n){return ds.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}hy.PHONE_SIGN_IN_METHOD=ds.PHONE_SIGN_IN_METHOD;hy.PROVIDER_ID=ds.PROVIDER_ID;/**
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
 */const mF=x;class gF{constructor(e,n,r=Yn.app()){var i;mF((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new fL(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const _F="auth-compat";function yF(t){t.INTERNAL.registerComponent(new pn(_F,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Qm(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ms.EMAIL_SIGNIN,PASSWORD_RESET:Ms.PASSWORD_RESET,RECOVER_EMAIL:Ms.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ms.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ms.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ms.VERIFY_EMAIL}},EmailAuthProvider:Ir,FacebookAuthProvider:Nn,GithubAuthProvider:On,GoogleAuthProvider:Dn,OAuthProvider:wo,SAMLAuthProvider:Ud,PhoneAuthProvider:hy,PhoneMultiFactorGenerator:yR,RecaptchaVerifier:gF,TwitterAuthProvider:Vn,Auth:Qm,AuthCredential:aa,Error:pt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(XM,JM)}yF(Yn);/**
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
 */const CR="firebasestorage.googleapis.com",kR="storageBucket",vF=2*60*1e3,wF=10*60*1e3,EF=1e3;/**
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
 */class Ie extends pt{constructor(e,n,r=0){super(Tp(e),`Firebase Storage: ${n} (${Tp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ie.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Tp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var he;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(he||(he={}));function Tp(t){return"storage/"+t}function fy(){const t="An unknown error occurred, please check the error payload for server response.";return new Ie(he.UNKNOWN,t)}function IF(t){return new Ie(he.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function TF(t){return new Ie(he.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function SF(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ie(he.UNAUTHENTICATED,t)}function RF(){return new Ie(he.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function PF(t){return new Ie(he.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function bR(){return new Ie(he.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xR(){return new Ie(he.CANCELED,"User canceled the upload/download.")}function AF(t){return new Ie(he.INVALID_URL,"Invalid URL '"+t+"'.")}function CF(t){return new Ie(he.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function kF(){return new Ie(he.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+kR+"' property when initializing the app?")}function NR(){return new Ie(he.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function bF(){return new Ie(he.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function xF(){return new Ie(he.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function NF(t){return new Ie(he.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Io(t){return new Ie(he.INVALID_ARGUMENT,t)}function DR(){return new Ie(he.APP_DELETED,"The Firebase app was deleted.")}function OR(t){return new Ie(he.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function fl(t,e){return new Ie(he.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Oa(t){throw new Ie(he.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ft.makeFromUrl(e,n)}catch{return new ft(e,"")}if(r.path==="")return r;throw CF(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${c}/b/${i}/o${h}`,"i"),y={bucket:1,path:3},v=n===CR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",_=new RegExp(`^https?://${v}/${i}/${w}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:p,indices:y,postModify:u},{regex:_,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<g.length;E++){const R=g[E],C=R.regex.exec(e);if(C){const b=C[R.indices.bucket];let N=C[R.indices.path];N||(N=""),r=new ft(b,N),R.postModify(r);break}}if(r==null)throw AF(e);return r}}class DF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function OF(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function d(w){i=setTimeout(()=>{i=null,t(p,l())},w)}function h(){s&&clearTimeout(s)}function p(w,..._){if(u){h();return}if(w){h(),c.call(null,w,..._);return}if(l()||o){h(),c.call(null,w,..._);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,d(g)}let y=!1;function v(w){y||(y=!0,h(),!u&&(i!==null?(w||(a=2),clearTimeout(i),d(0)):w||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function VF(t){t(!1)}/**
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
 */function LF(t){return t!==void 0}function MF(t){return typeof t=="function"}function FF(t){return typeof t=="object"&&!Array.isArray(t)}function jh(t){return typeof t=="string"||t instanceof String}function XE(t){return py()&&t instanceof Blob}function py(){return typeof Blob<"u"}function Ym(t,e,n,r){if(r<e)throw Io(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Io(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ii(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function VR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ns;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ns||(ns={}));/**
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
 */function LR(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class UF{constructor(e,n,r,i,s,o,a,l,u,c,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Tc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ns.NO_ERROR,l=s.getStatus();if(!a||LR(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===ns.ABORT;r(!1,new Tc(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Tc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());LF(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=fy();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?DR():xR();o(l)}else{const l=bR();o(l)}};this.canceled_?n(!1,new Tc(!1,null,!0)):this.backoffId_=OF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&VF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Tc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function $F(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function BF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function jF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qF(t,e,n,r,i,s,o=!0){const a=VR(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return zF(u,e),$F(u,n),BF(u,s),jF(u,r),new UF(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function WF(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function GF(...t){const e=WF();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(py())return new Blob(t);throw new Ie(he.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function HF(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function KF(t){if(typeof atob>"u")throw NF("base-64");return atob(t)}/**
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
 */const Ht={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sp{constructor(e,n){this.data=e,this.contentType=n||null}}function my(t,e){switch(t){case Ht.RAW:return new Sp(MR(e));case Ht.BASE64:case Ht.BASE64URL:return new Sp(FR(t,e));case Ht.DATA_URL:return new Sp(YF(e),XF(e))}throw fy()}function MR(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function QF(t){let e;try{e=decodeURIComponent(t)}catch{throw fl(Ht.DATA_URL,"Malformed data URL.")}return MR(e)}function FR(t,e){switch(t){case Ht.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw fl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ht.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw fl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=KF(e)}catch(i){throw i.message.includes("polyfill")?i:fl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class UR{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw fl(Ht.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=JF(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function YF(t){const e=new UR(t);return e.base64?FR(Ht.BASE64,e.rest):QF(e.rest)}function XF(t){return new UR(t).contentType}function JF(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Ln{constructor(e,n){let r=0,i="";XE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(XE(this.data_)){const r=this.data_,i=HF(r,e,n);return i===null?null:new Ln(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ln(r,!0)}}static getBlob(...e){if(py()){const n=e.map(r=>r instanceof Ln?r.data_:r);return new Ln(GF.apply(null,n))}else{const n=e.map(o=>jh(o)?my(Ht.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ln(i,!0)}}uploadData(){return this.data_}}/**
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
 */function gy(t){let e;try{e=JSON.parse(t)}catch{return null}return FF(e)?e:null}/**
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
 */function ZF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function eU(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function $R(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function tU(t,e){return e}class yt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||tU}}let Sc=null;function nU(t){return!jh(t)||t.length<2?t:$R(t)}function Du(){if(Sc)return Sc;const t=[];t.push(new yt("bucket")),t.push(new yt("generation")),t.push(new yt("metageneration")),t.push(new yt("name","fullPath",!0));function e(s,o){return nU(o)}const n=new yt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new yt("size");return i.xform=r,t.push(i),t.push(new yt("timeCreated")),t.push(new yt("updated")),t.push(new yt("md5Hash",null,!0)),t.push(new yt("cacheControl",null,!0)),t.push(new yt("contentDisposition",null,!0)),t.push(new yt("contentEncoding",null,!0)),t.push(new yt("contentLanguage",null,!0)),t.push(new yt("contentType",null,!0)),t.push(new yt("metadata","customMetadata",!0)),Sc=t,Sc}function rU(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ft(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function iU(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return rU(r,t),r}function BR(t,e,n){const r=gy(e);return r===null?null:iU(t,r,n)}function sU(t,e,n,r){const i=gy(e);if(i===null||!jh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,h="/b/"+o(c)+"/o/"+o(d),p=Ii(h,n,r),y=VR({alt:"media",token:u});return p+y})[0]}function _y(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const JE="prefixes",ZE="items";function oU(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[JE])for(const i of n[JE]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new ft(e,s));r.prefixes.push(o)}if(n[ZE])for(const i of n[ZE]){const s=t._makeStorageReference(new ft(e,i.name));r.items.push(s)}return r}function aU(t,e,n){const r=gy(n);return r===null?null:oU(t,e,r)}class Sr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Wn(t){if(!t)throw fy()}function qh(t,e){function n(r,i){const s=BR(t,i,e);return Wn(s!==null),s}return n}function lU(t,e){function n(r,i){const s=aU(t,e,i);return Wn(s!==null),s}return n}function uU(t,e){function n(r,i){const s=BR(t,i,e);return Wn(s!==null),sU(s,i,t.host,t._protocol)}return n}function ua(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=RF():i=SF():n.getStatus()===402?i=TF(t.bucket):n.getStatus()===403?i=PF(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Wh(t){const e=ua(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=IF(t.path)),s.serverResponse=i.serverResponse,s}return n}function zR(t,e,n){const r=e.fullServerUrl(),i=Ii(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Sr(i,s,qh(t,n),o);return a.errorHandler=Wh(e),a}function cU(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Ii(o,t.host,t._protocol),l="GET",u=t.maxOperationRetryTime,c=new Sr(a,l,lU(t,e.bucket),u);return c.urlParams=s,c.errorHandler=ua(e),c}function dU(t,e,n){const r=e.fullServerUrl(),i=Ii(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Sr(i,s,uU(t,n),o);return a.errorHandler=Wh(e),a}function hU(t,e,n,r){const i=e.fullServerUrl(),s=Ii(i,t.host,t._protocol),o="PATCH",a=_y(n,r),l={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,c=new Sr(s,o,qh(t,r),u);return c.headers=l,c.body=a,c.errorHandler=Wh(e),c}function fU(t,e){const n=e.fullServerUrl(),r=Ii(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new Sr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Wh(e),a}function pU(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function jR(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=pU(null,e)),r}function qR(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let E=0;E<2;E++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=jR(e,r,i),c=_y(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",p=Ln.getBlob(d,r,h);if(p===null)throw NR();const y={name:u.fullPath},v=Ii(s,t.host,t._protocol),w="POST",_=t.maxUploadRetryTime,m=new Sr(v,w,qh(t,n),_);return m.urlParams=y,m.headers=o,m.body=p.uploadData(),m.errorHandler=ua(e),m}class jd{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function yy(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Wn(!1)}return Wn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function mU(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=jR(e,r,i),a={name:o.fullPath},l=Ii(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=_y(o,n),h=t.maxUploadRetryTime;function p(v){yy(v);let w;try{w=v.getResponseHeader("X-Goog-Upload-URL")}catch{Wn(!1)}return Wn(jh(w)),w}const y=new Sr(l,u,p,h);return y.urlParams=a,y.headers=c,y.body=d,y.errorHandler=ua(e),y}function gU(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=yy(u,["active","final"]);let d=null;try{d=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Wn(!1)}d||Wn(!1);const h=Number(d);return Wn(!isNaN(h)),new jd(h,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Sr(n,o,s,a);return l.headers=i,l.errorHandler=ua(e),l}const e0=256*1024;function _U(t,e,n,r,i,s,o,a){const l=new jd(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw bF();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const d=l.current,h=d+c;let p="";c===0?p="finalize":u===c?p="upload, finalize":p="upload";const y={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},v=r.slice(d,h);if(v===null)throw NR();function w(E,R){const C=yy(E,["active","final"]),b=l.current+c,N=r.size();let J;return C==="final"?J=qh(e,s)(E,R):J=null,new jd(b,N,C==="final",J)}const _="POST",m=e.maxUploadRetryTime,g=new Sr(n,_,w,m);return g.headers=y,g.body=v.uploadData(),g.progressCallback=a||null,g.errorHandler=ua(t),g}/**
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
 */const yU={STATE_CHANGED:"state_changed"},Et={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Rp(t){switch(t){case"running":case"pausing":case"canceling":return Et.RUNNING;case"paused":return Et.PAUSED;case"success":return Et.SUCCESS;case"canceled":return Et.CANCELED;case"error":return Et.ERROR;default:return Et.ERROR}}/**
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
 */class vU{constructor(e,n,r){if(MF(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Fs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class wU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ns.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ns.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ns.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Oa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Oa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Oa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Oa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Oa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class EU extends wU{initXhr(){this.xhr_.responseType="text"}}function En(){return new EU}/**
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
 */class WR{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Du(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(he.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(LR(i.status,[]))if(s)i=bR();else{this.sleepTime=Math.max(this.sleepTime*2,EF),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(he.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=mU(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,En,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=gU(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,En,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=e0*this._chunkMultiplier,n=new jd(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=_U(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,En,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){e0*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=zR(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,En,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=qR(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,En,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=xR(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Rp(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new vU(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Rp(this._state)){case Et.SUCCESS:Fs(this._resolve.bind(null,this.snapshot))();break;case Et.CANCELED:case Et.ERROR:const n=this._reject;Fs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Rp(this._state)){case Et.RUNNING:case Et.PAUSED:e.next&&Fs(e.next.bind(e,this.snapshot))();break;case Et.SUCCESS:e.complete&&Fs(e.complete.bind(e))();break;case Et.CANCELED:case Et.ERROR:e.error&&Fs(e.error.bind(e,this._error))();break;default:e.error&&Fs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class fs{constructor(e,n){this._service=e,n instanceof ft?this._location=n:this._location=ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new fs(e,n)}get root(){const e=new ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $R(this._location.path)}get storage(){return this._service}get parent(){const e=ZF(this._location.path);if(e===null)return null;const n=new ft(this._location.bucket,e);return new fs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw OR(e)}}function GR(t,e,n){t._throwIfRoot("uploadBytes");const r=qR(t.storage,t._location,Du(),new Ln(e,!0),n);return t.storage.makeRequestWithTokens(r,En).then(i=>({metadata:i,ref:t}))}function IU(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new WR(t,new Ln(e),n)}function TU(t,e,n=Ht.RAW,r){t._throwIfRoot("uploadString");const i=my(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),GR(t,i.data,s)}function SU(t){const e={prefixes:[],items:[]};return HR(t,e).then(()=>e)}async function HR(t,e,n){const i=await KR(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await HR(t,e,i.nextPageToken)}function KR(t,e){e!=null&&typeof e.maxResults=="number"&&Ym("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=cU(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,En)}function RU(t){t._throwIfRoot("getMetadata");const e=zR(t.storage,t._location,Du());return t.storage.makeRequestWithTokens(e,En)}function PU(t,e){t._throwIfRoot("updateMetadata");const n=hU(t.storage,t._location,e,Du());return t.storage.makeRequestWithTokens(n,En)}function AU(t){t._throwIfRoot("getDownloadURL");const e=dU(t.storage,t._location,Du());return t.storage.makeRequestWithTokens(e,En).then(n=>{if(n===null)throw xF();return n})}function CU(t){t._throwIfRoot("deleteObject");const e=fU(t.storage,t._location);return t.storage.makeRequestWithTokens(e,En)}function QR(t,e){const n=eU(t._location.path,e),r=new ft(t._location.bucket,n);return new fs(t.storage,r)}/**
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
 */function kU(t){return/^[A-Za-z]+:\/\//.test(t)}function bU(t,e){return new fs(t,e)}function YR(t,e){if(t instanceof vy){const n=t;if(n._bucket==null)throw kF();const r=new fs(n,n._bucket);return e!=null?YR(r,e):r}else return e!==void 0?QR(t,e):t}function xU(t,e){if(e&&kU(e)){if(t instanceof vy)return bU(t,e);throw Io("To use ref(service, url), the first argument must be a Storage instance.")}else return YR(t,e)}function t0(t,e){const n=e==null?void 0:e[kR];return n==null?null:ft.makeFromBucketSpec(n,t)}function NU(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:m1(i,t.app.options.projectId))}class vy{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=CR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vF,this._maxUploadRetryTime=wF,this._requests=new Set,i!=null?this._bucket=ft.makeFromBucketSpec(i,this._host):this._bucket=t0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ft.makeFromBucketSpec(this._url,e):this._bucket=t0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ym("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ym("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new DF(DR());{const o=qF(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const n0="@firebase/storage",r0="0.12.1";/**
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
 */const DU="storage";function OU(t,e,n){return t=U(t),GR(t,e,n)}function VU(t,e,n,r){return t=U(t),TU(t,e,n,r)}function LU(t,e,n){return t=U(t),IU(t,e,n)}function MU(t){return t=U(t),RU(t)}function FU(t,e){return t=U(t),PU(t,e)}function UU(t,e){return t=U(t),KR(t,e)}function $U(t){return t=U(t),SU(t)}function wy(t){return t=U(t),AU(t)}function Ey(t){return t=U(t),CU(t)}function ps(t,e){return t=U(t),xU(t,e)}function BU(t,e){return QR(t,e)}function zU(t,e,n,r={}){NU(t,e,n,r)}function jU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new vy(n,r,i,e,wr)}function qU(){hr(new pn(DU,jU,"PUBLIC").setMultipleInstances(!0)),dn(n0,r0,""),dn(n0,r0,"esm2017")}qU();/**
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
 */class Rc{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
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
 */class i0{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Rc(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Rc(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new Rc(o,this,this._ref)):s={next:n.next?o=>n.next(new Rc(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class s0{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new ar(e,this._service))}get items(){return this._delegate.items.map(e=>new ar(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=BU(this._delegate,e);return new ar(n,this.storage)}get root(){return new ar(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new ar(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new i0(LU(this._delegate,e,n),this)}putString(e,n=Ht.RAW,r){this._throwIfRoot("putString");const i=my(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new i0(new WR(this._delegate,new Ln(i.data,!0),s),this)}listAll(){return $U(this._delegate).then(e=>new s0(e,this.storage))}list(e){return UU(this._delegate,e||void 0).then(n=>new s0(n,this.storage))}getMetadata(){return MU(this._delegate)}updateMetadata(e){return FU(this._delegate,e)}getDownloadURL(){return wy(this._delegate)}delete(){return this._throwIfRoot("delete"),Ey(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw OR(e)}}/**
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
 */class XR{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(o0(e))throw Io("ref() expected a child path but got a URL, use refFromURL instead.");return new ar(ps(this._delegate,e),this)}refFromURL(e){if(!o0(e))throw Io("refFromURL() expected a full URL but got a child path, use ref() instead.");try{ft.makeFromUrl(e,this._delegate.host)}catch{throw Io("refFromUrl() expected a valid full URL but got an invalid one.")}return new ar(ps(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){zU(this._delegate,e,n,r)}}function o0(t){return/^[A-Za-z]+:\/\//.test(t)}const WU="@firebase/storage-compat",GU="0.3.4";/**
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
 */const HU="storage-compat";function KU(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new XR(n,r)}function QU(t){const e={TaskState:Et,TaskEvent:yU,StringFormat:Ht,Storage:XR,Reference:ar};t.INTERNAL.registerComponent(new pn(HU,KU,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(WU,GU)}QU(Yn);var YU=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Iy=Iy||{},z=YU||self;function Gh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ou(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function XU(t){return Object.prototype.hasOwnProperty.call(t,Pp)&&t[Pp]||(t[Pp]=++JU)}var Pp="closure_uid_"+(1e9*Math.random()>>>0),JU=0;function ZU(t,e,n){return t.call.apply(t.bind,arguments)}function e4(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function mt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?mt=ZU:mt=e4,mt.apply(null,arguments)}function Pc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ti(){this.s=this.s,this.o=this.o}var t4=0;Ti.prototype.s=!1;Ti.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),t4!=0)&&XU(this)};Ti.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const JR=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ty(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function a0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Gh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function gt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var n4=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};z.addEventListener("test",n,e),z.removeEventListener("test",n,e)}catch{}return t}();function Xl(t){return/^[\s\xa0]*$/.test(t)}function Hh(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function Mn(t){return Hh().indexOf(t)!=-1}function Sy(t){return Sy[" "](t),t}Sy[" "]=function(){};function r4(t,e){var n=Q4;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var i4=Mn("Opera"),Mo=Mn("Trident")||Mn("MSIE"),ZR=Mn("Edge"),Xm=ZR||Mo,eP=Mn("Gecko")&&!(Hh().toLowerCase().indexOf("webkit")!=-1&&!Mn("Edge"))&&!(Mn("Trident")||Mn("MSIE"))&&!Mn("Edge"),s4=Hh().toLowerCase().indexOf("webkit")!=-1&&!Mn("Edge");function tP(){var t=z.document;return t?t.documentMode:void 0}var Jm;e:{var Ap="",Cp=function(){var t=Hh();if(eP)return/rv:([^\);]+)(\)|;)/.exec(t);if(ZR)return/Edge\/([\d\.]+)/.exec(t);if(Mo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(s4)return/WebKit\/(\S+)/.exec(t);if(i4)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Cp&&(Ap=Cp?Cp[1]:""),Mo){var kp=tP();if(kp!=null&&kp>parseFloat(Ap)){Jm=String(kp);break e}}Jm=Ap}var Zm;if(z.document&&Mo){var l0=tP();Zm=l0||parseInt(Jm,10)||void 0}else Zm=void 0;var o4=Zm;function Jl(t,e){if(gt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(eP){e:{try{Sy(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:a4[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Jl.$.h.call(this)}}Ye(Jl,gt);var a4={2:"touch",3:"pen",4:"mouse"};Jl.prototype.h=function(){Jl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vu="closure_listenable_"+(1e6*Math.random()|0),l4=0;function u4(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++l4,this.fa=this.ia=!1}function Kh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ry(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function c4(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nP(t){const e={};for(const n in t)e[n]=t[n];return e}const u0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rP(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<u0.length;s++)n=u0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Qh(t){this.src=t,this.g={},this.h=0}Qh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=tg(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new u4(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function eg(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=JR(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Kh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function tg(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Py="closure_lm_"+(1e6*Math.random()|0),bp={};function iP(t,e,n,r,i){if(r&&r.once)return oP(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)iP(t,e[s],n,r,i);return null}return n=ky(n),t&&t[Vu]?t.O(e,n,Ou(r)?!!r.capture:!!r,i):sP(t,e,n,!1,r,i)}function sP(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ou(i)?!!i.capture:!!i,a=Cy(t);if(a||(t[Py]=a=new Qh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=d4(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)n4||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(lP(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function d4(){function t(n){return e.call(t.src,t.listener,n)}const e=h4;return t}function oP(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)oP(t,e[s],n,r,i);return null}return n=ky(n),t&&t[Vu]?t.P(e,n,Ou(r)?!!r.capture:!!r,i):sP(t,e,n,!0,r,i)}function aP(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)aP(t,e[s],n,r,i);else r=Ou(r)?!!r.capture:!!r,n=ky(n),t&&t[Vu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=tg(s,n,r,i),-1<n&&(Kh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Cy(t))&&(e=t.g[e.toString()],t=-1,e&&(t=tg(e,n,r,i)),(n=-1<t?e[t]:null)&&Ay(n))}function Ay(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Vu])eg(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(lP(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Cy(e))?(eg(n,t),n.h==0&&(n.src=null,e[Py]=null)):Kh(t)}}}function lP(t){return t in bp?bp[t]:bp[t]="on"+t}function h4(t,e){if(t.fa)t=!0;else{e=new Jl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ay(t),t=n.call(r,e)}return t}function Cy(t){return t=t[Py],t instanceof Qh?t:null}var xp="__closure_events_fn_"+(1e9*Math.random()>>>0);function ky(t){return typeof t=="function"?t:(t[xp]||(t[xp]=function(e){return t.handleEvent(e)}),t[xp])}function Qe(){Ti.call(this),this.i=new Qh(this),this.S=this,this.J=null}Ye(Qe,Ti);Qe.prototype[Vu]=!0;Qe.prototype.removeEventListener=function(t,e,n,r){aP(this,t,e,n,r)};function ot(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new gt(e,t);else if(e instanceof gt)e.target=e.target||t;else{var i=e;e=new gt(r,t),rP(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ac(o,r,!0,e)&&i}if(o=e.g=t,i=Ac(o,r,!0,e)&&i,i=Ac(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ac(o,r,!1,e)&&i}Qe.prototype.N=function(){if(Qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Kh(n[r]);delete t.g[e],t.h--}}this.J=null};Qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Qe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ac(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&eg(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var by=z.JSON.stringify;class f4{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function p4(){var t=xy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class m4{constructor(){this.h=this.g=null}add(e,n){const r=uP.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var uP=new f4(()=>new g4,t=>t.reset());class g4{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function _4(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function y4(t){z.setTimeout(()=>{throw t},0)}let Zl,eu=!1,xy=new m4,cP=()=>{const t=z.Promise.resolve(void 0);Zl=()=>{t.then(v4)}};var v4=()=>{for(var t;t=p4();){try{t.h.call(t.g)}catch(n){y4(n)}var e=uP;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}eu=!1};function Yh(t,e){Qe.call(this),this.h=t||1,this.g=e||z,this.j=mt(this.qb,this),this.l=Date.now()}Ye(Yh,Qe);V=Yh.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ot(this,"tick"),this.ga&&(Ny(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ny(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){Yh.$.N.call(this),Ny(this),delete this.g};function Dy(t,e,n){if(typeof t=="function")n&&(t=mt(t,n));else if(t&&typeof t.handleEvent=="function")t=mt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function dP(t){t.g=Dy(()=>{t.g=null,t.i&&(t.i=!1,dP(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class w4 extends Ti{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:dP(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tu(t){Ti.call(this),this.h=t,this.g={}}Ye(tu,Ti);var c0=[];function hP(t,e,n,r){Array.isArray(n)||(n&&(c0[0]=n.toString()),n=c0);for(var i=0;i<n.length;i++){var s=iP(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function fP(t){Ry(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ay(e)},t),t.g={}}tu.prototype.N=function(){tu.$.N.call(this),fP(this)};tu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xh(){this.g=!0}Xh.prototype.Ea=function(){this.g=!1};function E4(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function I4(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ho(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+S4(t,n)+(r?" "+r:"")})}function T4(t,e){t.info(function(){return"TIMEOUT: "+e})}Xh.prototype.info=function(){};function S4(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return by(n)}catch{return e}}var bs={},d0=null;function Jh(){return d0=d0||new Qe}bs.Ta="serverreachability";function pP(t){gt.call(this,bs.Ta,t)}Ye(pP,gt);function nu(t){const e=Jh();ot(e,new pP(e))}bs.STAT_EVENT="statevent";function mP(t,e){gt.call(this,bs.STAT_EVENT,t),this.stat=e}Ye(mP,gt);function Tt(t){const e=Jh();ot(e,new mP(e,t))}bs.Ua="timingevent";function gP(t,e){gt.call(this,bs.Ua,t),this.size=e}Ye(gP,gt);function Lu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Zh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},_P={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Oy(){}Oy.prototype.h=null;function h0(t){return t.h||(t.h=t.i())}function yP(){}var Mu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Vy(){gt.call(this,"d")}Ye(Vy,gt);function Ly(){gt.call(this,"c")}Ye(Ly,gt);var ng;function ef(){}Ye(ef,Oy);ef.prototype.g=function(){return new XMLHttpRequest};ef.prototype.i=function(){return{}};ng=new ef;function Fu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new tu(this),this.P=R4,t=Xm?125:void 0,this.V=new Yh(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new vP}function vP(){this.i=null,this.g="",this.h=!1}var R4=45e3,wP={},rg={};V=Fu.prototype;V.setTimeout=function(t){this.P=t};function ig(t,e,n){t.L=1,t.A=nf(pr(e)),t.u=n,t.S=!0,EP(t,null)}function EP(t,e){t.G=Date.now(),Uu(t),t.B=pr(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),kP(n.i,"t",r),t.o=0,n=t.l.J,t.h=new vP,t.g=YP(t.l,n?e:null,!t.u),0<t.O&&(t.M=new w4(mt(t.Pa,t,t.g),t.O)),hP(t.U,t.g,"readystatechange",t.nb),e=t.I?nP(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),nu(),E4(t.j,t.v,t.B,t.m,t.W,t.u)}V.nb=function(t){t=t.target;const e=this.M;e&&Un(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const c=Un(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Xm||this.g&&(this.h.h||this.g.ja()||g0(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?nu(3):nu(2)),tf(this);var n=this.g.da();this.ca=n;t:if(IP(this)){var r=g0(this.g);t="";var i=r.length,s=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hi(this),pl(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,I4(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xl(a)){var u=a;break t}}u=null}if(n=u)ho(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sg(this,n);else{this.i=!1,this.s=3,Tt(12),Hi(this),pl(this);break e}}this.S?(TP(this,c,o),Xm&&this.i&&c==3&&(hP(this.U,this.V,"tick",this.mb),this.V.start())):(ho(this.j,this.m,o,null),sg(this,o)),c==4&&Hi(this),this.i&&!this.J&&(c==4?GP(this.l,this):(this.i=!1,Uu(this)))}else G4(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),Hi(this),pl(this)}}}catch{}finally{}};function IP(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function TP(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=P4(t,n),i==rg){e==4&&(t.s=4,Tt(14),r=!1),ho(t.j,t.m,null,"[Incomplete Response]");break}else if(i==wP){t.s=4,Tt(15),ho(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ho(t.j,t.m,i,null),sg(t,i);IP(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Tt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),zy(e),e.M=!0,Tt(11))):(ho(t.j,t.m,n,"[Invalid Chunked Response]"),Hi(t),pl(t))}V.mb=function(){if(this.g){var t=Un(this.g),e=this.g.ja();this.o<e.length&&(tf(this),TP(this,t,e),this.i&&t!=4&&Uu(this))}};function P4(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?rg:(n=Number(e.substring(n,r)),isNaN(n)?wP:(r+=1,r+n>e.length?rg:(e=e.slice(r,r+n),t.o=r+n,e)))}V.cancel=function(){this.J=!0,Hi(this)};function Uu(t){t.Y=Date.now()+t.P,SP(t,t.P)}function SP(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Lu(mt(t.lb,t),e)}function tf(t){t.C&&(z.clearTimeout(t.C),t.C=null)}V.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(T4(this.j,this.B),this.L!=2&&(nu(),Tt(17)),Hi(this),this.s=2,pl(this)):SP(this,this.Y-t)};function pl(t){t.l.H==0||t.J||GP(t.l,t)}function Hi(t){tf(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ny(t.V),fP(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function sg(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||og(n.i,t))){if(!t.K&&og(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Gd(n),af(n);else break e;By(n),Tt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Lu(mt(n.ib,n),6e3));if(1>=NP(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ki(n,11)}else if((t.K||n.g==t)&&Gd(n),!Xl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(My(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ue(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=QP(r,r.J?r.pa:null,r.Y),o.K){DP(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(tf(a),Uu(a)),r.g=o}else qP(r);0<n.j.length&&lf(n)}else u[0]!="stop"&&u[0]!="close"||Ki(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ki(n,7):$y(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}nu(4)}catch{}}function A4(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Gh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function C4(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Gh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function RP(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Gh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=C4(t),r=A4(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var PP=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function k4(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function rs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof rs){this.h=t.h,qd(this,t.j),this.s=t.s,this.g=t.g,Wd(this,t.m),this.l=t.l;var e=t.i,n=new ru;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),f0(this,n),this.o=t.o}else t&&(e=String(t).match(PP))?(this.h=!1,qd(this,e[1]||"",!0),this.s=Qa(e[2]||""),this.g=Qa(e[3]||"",!0),Wd(this,e[4]),this.l=Qa(e[5]||"",!0),f0(this,e[6]||"",!0),this.o=Qa(e[7]||"")):(this.h=!1,this.i=new ru(null,this.h))}rs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ya(e,p0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ya(e,p0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ya(n,n.charAt(0)=="/"?N4:x4,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ya(n,O4)),t.join("")};function pr(t){return new rs(t)}function qd(t,e,n){t.j=n?Qa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Wd(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function f0(t,e,n){e instanceof ru?(t.i=e,V4(t.i,t.h)):(n||(e=Ya(e,D4)),t.i=new ru(e,t.h))}function ue(t,e,n){t.i.set(e,n)}function nf(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ya(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,b4),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function b4(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var p0=/[#\/\?@]/g,x4=/[#\?:]/g,N4=/[#\?]/g,D4=/[#\?@]/g,O4=/#/g;function ru(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Si(t){t.g||(t.g=new Map,t.h=0,t.i&&k4(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=ru.prototype;V.add=function(t,e){Si(this),this.i=null,t=ca(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function AP(t,e){Si(t),e=ca(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function CP(t,e){return Si(t),e=ca(t,e),t.g.has(e)}V.forEach=function(t,e){Si(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};V.ta=function(){Si(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};V.Z=function(t){Si(this);let e=[];if(typeof t=="string")CP(this,t)&&(e=e.concat(this.g.get(ca(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return Si(this),this.i=null,t=ca(this,t),CP(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function kP(t,e,n){AP(t,e),0<n.length&&(t.i=null,t.g.set(ca(t,e),Ty(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ca(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function V4(t,e){e&&!t.j&&(Si(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(AP(this,r),kP(this,i,n))},t)),t.j=e}var L4=class{constructor(t,e){this.g=t,this.map=e}};function bP(t){this.l=t||M4,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var M4=10;function xP(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function NP(t){return t.h?1:t.g?t.g.size:0}function og(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function My(t,e){t.g?t.g.add(e):t.h=e}function DP(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bP.prototype.cancel=function(){if(this.i=OP(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function OP(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ty(t.i)}var F4=class{stringify(t){return z.JSON.stringify(t,void 0)}parse(t){return z.JSON.parse(t,void 0)}};function U4(){this.g=new F4}function $4(t,e,n){const r=n||"";try{RP(t,function(i,s){let o=i;Ou(i)&&(o=by(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function B4(t,e){const n=new Xh;if(z.Image){const r=new Image;r.onload=Pc(Cc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Pc(Cc,n,r,"TestLoadImage: error",!1,e),r.onabort=Pc(Cc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Pc(Cc,n,r,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Cc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function rf(t){this.l=t.ec||null,this.j=t.ob||!1}Ye(rf,Oy);rf.prototype.g=function(){return new sf(this.l,this.j)};rf.prototype.i=function(t){return function(){return t}}({});function sf(t,e){Qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Fy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(sf,Qe);var Fy=0;V=sf.prototype;V.open=function(t,e){if(this.readyState!=Fy)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,iu(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$u(this)),this.readyState=Fy};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,iu(this)),this.g&&(this.readyState=3,iu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;VP(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function VP(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?$u(this):iu(this),this.readyState==3&&VP(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,$u(this))};V.Ya=function(t){this.g&&(this.response=t,$u(this))};V.ka=function(){this.g&&$u(this)};function $u(t){t.readyState=4,t.l=null,t.j=null,t.A=null,iu(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function iu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(sf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var z4=z.JSON.parse;function Pe(t){Qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=LP,this.L=this.M=!1}Ye(Pe,Qe);var LP="",j4=/^https?$/i,q4=["POST","PUT"];V=Pe.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ng.g(),this.C=this.u?h0(this.u):h0(ng),this.g.onreadystatechange=mt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){m0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=z.FormData&&t instanceof z.FormData,!(0<=JR(q4,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{UP(this),0<this.B&&((this.L=W4(this.g))?(this.g.timeout=this.B,this.g.ontimeout=mt(this.ua,this)):this.A=Dy(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){m0(this,s)}};function W4(t){return Mo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof Iy<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ot(this,"timeout"),this.abort(8))};function m0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,MP(t),of(t)}function MP(t){t.F||(t.F=!0,ot(t,"complete"),ot(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ot(this,"complete"),ot(this,"abort"),of(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),of(this,!0)),Pe.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?FP(this):this.kb())};V.kb=function(){FP(this)};function FP(t){if(t.h&&typeof Iy<"u"&&(!t.C[1]||Un(t)!=4||t.da()!=2)){if(t.v&&Un(t)==4)Dy(t.La,0,t);else if(ot(t,"readystatechange"),Un(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(PP)[1]||null;!i&&z.self&&z.self.location&&(i=z.self.location.protocol.slice(0,-1)),r=!j4.test(i?i.toLowerCase():"")}n=r}if(n)ot(t,"complete"),ot(t,"success");else{t.m=6;try{var s=2<Un(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",MP(t)}}finally{of(t)}}}}function of(t,e){if(t.g){UP(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ot(t,"ready");try{n.onreadystatechange=r}catch{}}}function UP(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function Un(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),z4(e)}};function g0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case LP:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function G4(t){const e={};t=(t.g&&2<=Un(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Xl(t[r]))continue;var n=_4(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}c4(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $P(t){let e="";return Ry(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Uy(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$P(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function Va(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function BP(t){this.Ga=0,this.j=[],this.l=new Xh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Va("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Va("baseRetryDelayMs",5e3,t),this.hb=Va("retryDelaySeedMs",1e4,t),this.eb=Va("forwardChannelMaxRetries",2,t),this.xa=Va("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new bP(t&&t.concurrentRequestLimit),this.Ja=new U4,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=BP.prototype;V.ra=8;V.H=1;function $y(t){if(zP(t),t.H==3){var e=t.W++,n=pr(t.I);if(ue(n,"SID",t.K),ue(n,"RID",e),ue(n,"TYPE","terminate"),Bu(t,n),e=new Fu(t,t.l,e),e.L=2,e.A=nf(pr(n)),n=!1,z.navigator&&z.navigator.sendBeacon)try{n=z.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&z.Image&&(new Image().src=e.A,n=!0),n||(e.g=YP(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Uu(e)}KP(t)}function af(t){t.g&&(zy(t),t.g.cancel(),t.g=null)}function zP(t){af(t),t.u&&(z.clearTimeout(t.u),t.u=null),Gd(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function lf(t){if(!xP(t.i)&&!t.m){t.m=!0;var e=t.Na;Zl||cP(),eu||(Zl(),eu=!0),xy.add(e,t),t.C=0}}function H4(t,e){return NP(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Lu(mt(t.Na,t,e),HP(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Fu(this,this.l,t);let s=this.s;if(this.U&&(s?(s=nP(s),rP(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=jP(this,i,e),n=pr(this.I),ue(n,"RID",t),ue(n,"CVER",22),this.F&&ue(n,"X-HTTP-Session-Id",this.F),Bu(this,n),s&&(this.O?e="headers="+encodeURIComponent(String($P(s)))+"&"+e:this.o&&Uy(n,this.o,s)),My(this.i,i),this.bb&&ue(n,"TYPE","init"),this.P?(ue(n,"$req",e),ue(n,"SID","null"),i.aa=!0,ig(i,n,null)):ig(i,n,e),this.H=2}}else this.H==3&&(t?_0(this,t):this.j.length==0||xP(this.i)||_0(this))};function _0(t,e){var n;e?n=e.m:n=t.W++;const r=pr(t.I);ue(r,"SID",t.K),ue(r,"RID",n),ue(r,"AID",t.V),Bu(t,r),t.o&&t.s&&Uy(r,t.o,t.s),n=new Fu(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=jP(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),My(t.i,n),ig(n,r,e)}function Bu(t,e){t.na&&Ry(t.na,function(n,r){ue(e,r,n)}),t.h&&RP({},function(n,r){ue(e,r,n)})}function jP(t,e,n){n=Math.min(t.j.length,n);var r=t.h?mt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{$4(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function qP(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Zl||cP(),eu||(Zl(),eu=!0),xy.add(e,t),t.A=0}}function By(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Lu(mt(t.Ma,t),HP(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,WP(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Lu(mt(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Tt(10),af(this),WP(this))};function zy(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function WP(t){t.g=new Fu(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=pr(t.wa);ue(e,"RID","rpc"),ue(e,"SID",t.K),ue(e,"AID",t.V),ue(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ue(e,"TO",t.qa),ue(e,"TYPE","xmlhttp"),Bu(t,e),t.o&&t.s&&Uy(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=nf(pr(e)),n.u=null,n.S=!0,EP(n,t)}V.ib=function(){this.v!=null&&(this.v=null,af(this),By(this),Tt(19))};function Gd(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function GP(t,e){var n=null;if(t.g==e){Gd(t),zy(t),t.g=null;var r=2}else if(og(t.i,e))n=e.F,DP(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Jh(),ot(r,new gP(r,n)),lf(t)}else qP(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&H4(t,e)||r==2&&By(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ki(t,5);break;case 4:Ki(t,10);break;case 3:Ki(t,6);break;default:Ki(t,2)}}}function HP(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ki(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=mt(t.pb,t);n||(n=new rs("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||qd(n,"https"),nf(n)),B4(n.toString(),r)}else Tt(2);t.H=0,t.h&&t.h.za(e),KP(t),zP(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Tt(2)):(this.l.info("Failed to ping google.com"),Tt(1))};function KP(t){if(t.H=0,t.ma=[],t.h){const e=OP(t.i);(e.length!=0||t.j.length!=0)&&(a0(t.ma,e),a0(t.ma,t.j),t.i.i.length=0,Ty(t.j),t.j.length=0),t.h.ya()}}function QP(t,e,n){var r=n instanceof rs?pr(n):new rs(n);if(r.g!="")e&&(r.g=e+"."+r.g),Wd(r,r.m);else{var i=z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new rs(null);r&&qd(s,r),e&&(s.g=e),i&&Wd(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ue(r,n,e),ue(r,"VER",t.ra),Bu(t,r),r}function YP(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Pe(new rf({ob:n})):new Pe(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function XP(){}V=XP.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Hd(){if(Mo&&!(10<=Number(o4)))throw Error("Environmental error: no available transport.")}Hd.prototype.g=function(t,e){return new Xt(t,e)};function Xt(t,e){Qe.call(this),this.g=new BP(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Xl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Xl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new da(this)}Ye(Xt,Qe);Xt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Tt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=QP(t,null,t.Y),lf(t)};Xt.prototype.close=function(){$y(this.g)};Xt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=by(t),t=n);e.j.push(new L4(e.fb++,t)),e.H==3&&lf(e)};Xt.prototype.N=function(){this.g.h=null,delete this.j,$y(this.g),delete this.g,Xt.$.N.call(this)};function JP(t){Vy.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(JP,Vy);function ZP(){Ly.call(this),this.status=1}Ye(ZP,Ly);function da(t){this.g=t}Ye(da,XP);da.prototype.Ba=function(){ot(this.g,"a")};da.prototype.Aa=function(t){ot(this.g,new JP(t))};da.prototype.za=function(t){ot(this.g,new ZP)};da.prototype.ya=function(){ot(this.g,"b")};function K4(){this.blockSize=-1}function An(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ye(An,K4);An.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Np(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}An.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Np(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Np(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Np(this,r),i=0;break}}this.h=i,this.i+=e};An.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ie(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var Q4={};function jy(t){return-128<=t&&128>t?r4(t,function(e){return new ie([e|0],0>e?-1:0)}):new ie([t|0],0>t?-1:0)}function $n(t){if(isNaN(t)||!isFinite(t))return To;if(0>t)return nt($n(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ag;return new ie(e,0)}function eA(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return nt(eA(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=$n(Math.pow(e,8)),r=To,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=$n(Math.pow(e,s)),r=r.R(s).add($n(o))):(r=r.R(n),r=r.add($n(o)))}return r}var ag=4294967296,To=jy(0),lg=jy(1),y0=jy(16777216);V=ie.prototype;V.ea=function(){if(on(this))return-nt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ag+r)*e,e*=ag}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(nr(this))return"0";if(on(this))return"-"+nt(this).toString(t);for(var e=$n(Math.pow(t,6)),n=this,r="";;){var i=Qd(n,e).g;n=Kd(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,nr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function nr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function on(t){return t.h==-1}V.X=function(t){return t=Kd(this,t),on(t)?-1:nr(t)?0:1};function nt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ie(n,~t.h).add(lg)}V.abs=function(){return on(this)?nt(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ie(n,n[n.length-1]&-2147483648?-1:0)};function Kd(t,e){return t.add(nt(e))}V.R=function(t){if(nr(this)||nr(t))return To;if(on(this))return on(t)?nt(this).R(nt(t)):nt(nt(this).R(t));if(on(t))return nt(this.R(nt(t)));if(0>this.X(y0)&&0>t.X(y0))return $n(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,kc(n,2*r+2*i),n[2*r+2*i+1]+=s*l,kc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,kc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,kc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ie(n,0)};function kc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function La(t,e){this.g=t,this.h=e}function Qd(t,e){if(nr(e))throw Error("division by zero");if(nr(t))return new La(To,To);if(on(t))return e=Qd(nt(t),e),new La(nt(e.g),nt(e.h));if(on(e))return e=Qd(t,nt(e)),new La(nt(e.g),e.h);if(30<t.g.length){if(on(t)||on(e))throw Error("slowDivide_ only works with positive integers.");for(var n=lg,r=e;0>=r.X(t);)n=v0(n),r=v0(r);var i=Us(n,1),s=Us(r,1);for(r=Us(r,2),n=Us(n,2);!nr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Us(r,1),n=Us(n,1)}return e=Kd(t,i.R(e)),new La(i,e)}for(i=To;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=$n(n),o=s.R(e);on(o)||0<o.X(t);)n-=r,s=$n(n),o=s.R(e);nr(s)&&(s=lg),i=i.add(s),t=Kd(t,o)}return new La(i,t)}V.gb=function(t){return Qd(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ie(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ie(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ie(n,this.h^t.h)};function v0(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ie(n,t.h)}function Us(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ie(i,t.h)}Hd.prototype.createWebChannel=Hd.prototype.g;Xt.prototype.send=Xt.prototype.u;Xt.prototype.open=Xt.prototype.m;Xt.prototype.close=Xt.prototype.close;Zh.NO_ERROR=0;Zh.TIMEOUT=8;Zh.HTTP_ERROR=6;_P.COMPLETE="complete";yP.EventType=Mu;Mu.OPEN="a";Mu.CLOSE="b";Mu.ERROR="c";Mu.MESSAGE="d";Qe.prototype.listen=Qe.prototype.O;Pe.prototype.listenOnce=Pe.prototype.P;Pe.prototype.getLastError=Pe.prototype.Sa;Pe.prototype.getLastErrorCode=Pe.prototype.Ia;Pe.prototype.getStatus=Pe.prototype.da;Pe.prototype.getResponseJson=Pe.prototype.Wa;Pe.prototype.getResponseText=Pe.prototype.ja;Pe.prototype.send=Pe.prototype.ha;Pe.prototype.setWithCredentials=Pe.prototype.Oa;An.prototype.digest=An.prototype.l;An.prototype.reset=An.prototype.reset;An.prototype.update=An.prototype.j;ie.prototype.add=ie.prototype.add;ie.prototype.multiply=ie.prototype.R;ie.prototype.modulo=ie.prototype.gb;ie.prototype.compare=ie.prototype.X;ie.prototype.toNumber=ie.prototype.ea;ie.prototype.toString=ie.prototype.toString;ie.prototype.getBits=ie.prototype.D;ie.fromNumber=$n;ie.fromString=eA;var Y4=function(){return new Hd},X4=function(){return Jh()},Dp=Zh,J4=_P,Z4=bs,w0={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},bc=yP,e$=Pe,t$=An,So=ie;const E0="@firebase/firestore";/**
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
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
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
 */let ha="10.8.0";/**
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
 */const ai=new xh("@firebase/firestore");function Gs(){return ai.logLevel}function n$(t){ai.setLogLevel(t)}function A(t,...e){if(ai.logLevel<=K.DEBUG){const n=e.map(qy);ai.debug(`Firestore (${ha}): ${t}`,...n)}}function Ne(t,...e){if(ai.logLevel<=K.ERROR){const n=e.map(qy);ai.error(`Firestore (${ha}): ${t}`,...n)}}function Cn(t,...e){if(ai.logLevel<=K.WARN){const n=e.map(qy);ai.warn(`Firestore (${ha}): ${t}`,...n)}}function qy(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function L(t="Unexpected state"){const e=`FIRESTORE (${ha}) INTERNAL ASSERTION FAILED: `+t;throw Ne(e),new Error(e)}function $(t,e){t||L()}function r$(t,e){t||L()}function O(t,e){return t}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends pt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ke{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class tA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class i${getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class s${constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class o${constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ke;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ke,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ke)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string"),new tA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string"),new Ge(e)}}class a${constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class l${constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new a$(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class u${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class c${constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($(typeof n.token=="string"),this.R=n.token,new u$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function d$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class nA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=d$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function j(t,e){return t<e?-1:t>e?1:0}function Fo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function rA(t){return t+"\0"}/**
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
 */class ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new ge(0,0))}static max(){return new B(new ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class su{constructor(e,n,r){n===void 0?n=0:n>e.length&&L(),r===void 0?r=e.length-n:r>e.length-n&&L(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return su.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof su?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Q extends su{construct(e,n,r){return new Q(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Q(n)}static emptyPath(){return new Q([])}}const h$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends su{construct(e,n,r){return new pe(e,n,r)}static isValidIdentifier(e){return h$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new P(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new P(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new P(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new P(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(n)}static emptyPath(){return new pe([])}}/**
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
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(Q.fromString(e))}static fromName(e){return new D(Q.fromString(e).popFirst(5))}static empty(){return new D(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Q.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new Q(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */class Yd{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function ug(t){return t.fields.find(e=>e.kind===2)}function Li(t){return t.fields.filter(e=>e.kind!==2)}Yd.UNKNOWN_ID=-1;class td{constructor(e,n){this.fieldPath=e,this.kind=n}}class ou{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new ou(0,Jt.min())}}function iA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new ge(n+1,0):new ge(n,r));return new Jt(i,D.empty(),e)}function sA(t){return new Jt(t.readTime,t.key,-1)}class Jt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jt(B.min(),D.empty(),-1)}static max(){return new Jt(B.max(),D.empty(),-1)}}function Wy(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=D.comparator(t.documentKey,e.documentKey),n!==0?n:j(t.largestBatchId,e.largestBatchId))}/**
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
 */const oA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ri(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==oA)throw t;A("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class uf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Ke,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ml(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Gy(r.target.error);this.V.reject(new ml(e,i))}}static open(e,n,r,i){try{return new uf(n,e.transaction(i,r))}catch(s){throw new ml(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(A("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new p$(n)}}class ln{constructor(e,n,r){this.name=e,this.version=n,this.p=r,ln.S(_e())===12.2&&Ne("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return A("SimpleDb","Removing database:",e),Fi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Bl())return!1;if(ln.C())return!0;const e=_e(),n=ln.S(e),r=0<n&&n<10,i=ln.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(A("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ml(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new P(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new P(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ml(e,o))},i.onupgradeneeded=s=>{A("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{A("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=uf.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),I.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(A("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class f${constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Fi(this.k.delete())}}class ml extends P{constructor(e,n){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Pi(t){return t.name==="IndexedDbTransactionError"}class p${constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(A("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(A("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Fi(r)}add(e){return A("SimpleDb","ADD",this.store.name,e,e),Fi(this.store.add(e))}get(e){return Fi(this.store.get(e)).next(n=>(n===void 0&&(n=null),A("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return A("SimpleDb","DELETE",this.store.name,e),Fi(this.store.delete(e))}count(){return A("SimpleDb","COUNT",this.store.name),Fi(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new I((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new I((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){A("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new I((r,i)=>{n.onerror=s=>{const o=Gy(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new I((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new f$(a),u=n(a.primaryKey,a.value,l);if(u instanceof I){const c=u.catch(d=>(l.done(),I.reject(d)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>I.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Fi(t){return new I((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Gy(r.target.error);n(i)}})}let I0=!1;function Gy(t){const e=ln.S(_e());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new P("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return I0||(I0=!0,setTimeout(()=>{throw r},0)),r}}return t}class m${constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){A("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{A("IndexBackfiller",`Documents written: ${await this.X.te()}`)}catch(n){Pi(n)?A("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await Ri(n)}await this.ee(6e4)})}}class g${constructor(e,n){this.localStore=e,this.persistence=n}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.ne(n,e))}ne(e,n){const r=new Set;let i=n,s=!0;return I.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return A("IndexBackfiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}re(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(A("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ie(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=sA(s);Wy(o,r)>0&&(r=o)}),new Jt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Vt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Vt._e=-1;function zu(t){return t==null}function au(t){return t===0&&1/t==-1/0}function lA(t){return typeof t=="number"&&Number.isInteger(t)&&!au(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Rt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=T0(e)),e=_$(t.get(n),e);return T0(e)}function _$(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function T0(t){return t+""}function Bn(t){const e=t.length;if($(e>=2),e===2)return $(t.charAt(0)===""&&t.charAt(1)===""),Q.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&L(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:L()}s=o+2}return new Q(r)}/**
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
 */const S0=["userId","batchId"];/**
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
 */function nd(t,e){return[t,Rt(e)]}function uA(t,e,n){return[t,Rt(e),n]}const y$={},v$=["prefixPath","collectionGroup","readTime","documentId"],w$=["prefixPath","collectionGroup","documentId"],E$=["collectionGroup","readTime","prefixPath","documentId"],I$=["canonicalId","targetId"],T$=["targetId","path"],S$=["path","targetId"],R$=["collectionId","parent"],P$=["indexId","uid"],A$=["uid","sequenceNumber"],C$=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],k$=["indexId","uid","orderedDocumentKey"],b$=["userId","collectionPath","documentId"],x$=["userId","collectionPath","largestBatchId"],N$=["userId","collectionGroup","largestBatchId"],cA=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],D$=[...cA,"documentOverlays"],dA=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],hA=dA,O$=[...hA,"indexConfiguration","indexState","indexEntries"];/**
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
 */class cg extends aA{constructor(e,n){super(),this.ae=e,this.currentSequenceNumber=n}}function Xe(t,e){const n=O(t);return ln.M(n.ae,e)}/**
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
 */function R0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ae{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xc(this.root,e,this.comparator,!1)}getReverseIterator(){return new xc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xc(this.root,e,this.comparator,!0)}}class xc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??tt.RED,this.left=i??tt.EMPTY,this.right=s??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(e,n,r,i,s){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class se{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new P0(this.data.getIterator())}getIteratorFrom(e){return new P0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof se)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new se(this.comparator);return n.data=e,n}}class P0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function $s(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new se(pe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class pA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function V$(){return typeof atob<"u"}/**
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
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new pA("Invalid base64 string: "+s):s}}(e);return new $e(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new $e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const L$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function li(t){if($(!!t),typeof t=="string"){let e=0;const n=L$.exec(t);if($(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ui(t){return typeof t=="string"?$e.fromBase64String(t):$e.fromUint8Array(t)}/**
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
 */function cf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hy(t){const e=t.mapValue.fields.__previous_value__;return cf(e)?Hy(e):e}function lu(t){const e=li(t.mapValue.fields.__local_write_time__.timestampValue);return new ge(e.seconds,e.nanos)}/**
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
 */class M${constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ci{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ci("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ci&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const qr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},rd={nullValue:"NULL_VALUE"};function ms(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cf(t)?4:mA(t)?9007199254740991:10:L()}function Kn(t,e){if(t===e)return!0;const n=ms(t);if(n!==ms(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return lu(t).isEqual(lu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=li(i.timestampValue),a=li(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ui(i.bytesValue).isEqual(ui(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),a=Se(s.doubleValue);return o===a?au(o)===au(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Fo(t.arrayValue.values||[],e.arrayValue.values||[],Kn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(R0(o)!==R0(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Kn(o[l],a[l])))return!1;return!0}(t,e);default:return L()}}function uu(t,e){return(t.values||[]).find(n=>Kn(n,e))!==void 0}function di(t,e){if(t===e)return 0;const n=ms(t),r=ms(e);if(n!==r)return j(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return j(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Se(s.integerValue||s.doubleValue),l=Se(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return A0(t.timestampValue,e.timestampValue);case 4:return A0(lu(t),lu(e));case 5:return j(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ui(s),l=ui(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=j(a[u],l[u]);if(c!==0)return c}return j(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=j(Se(s.latitude),Se(o.latitude));return a!==0?a:j(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=di(a[u],l[u]);if(c)return c}return j(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===qr.mapValue&&o===qr.mapValue)return 0;if(s===qr.mapValue)return 1;if(o===qr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const h=j(l[d],c[d]);if(h!==0)return h;const p=di(a[l[d]],u[c[d]]);if(p!==0)return p}return j(l.length,c.length)}(t.mapValue,e.mapValue);default:throw L()}}function A0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return j(t,e);const n=li(t),r=li(e),i=j(n.seconds,r.seconds);return i!==0?i:j(n.nanos,r.nanos)}function Uo(t){return dg(t)}function dg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=li(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ui(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return D.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=dg(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${dg(n.fields[o])}`;return i+"}"}(t.mapValue):L()}function gs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function hg(t){return!!t&&"integerValue"in t}function cu(t){return!!t&&"arrayValue"in t}function C0(t){return!!t&&"nullValue"in t}function k0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function id(t){return!!t&&"mapValue"in t}function gl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=gl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function F$(t){return"nullValue"in t?rd:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?gs(ci.empty(),D.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:L()}function U$(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?gs(ci.empty(),D.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?qr:L()}function b0(t,e){const n=di(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function x0(t,e){const n=di(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!id(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gl(n)}setAll(e){let n=pe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=gl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());id(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];id(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new rt(gl(this.value))}}function gA(t){const e=[];return xs(t.fields,(n,r)=>{const i=new pe([n]);if(id(r)){const s=gA(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Lt(e)}/**
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
 */class ce{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ce(e,0,B.min(),B.min(),B.min(),rt.empty(),0)}static newFoundDocument(e,n,r,i){return new ce(e,1,n,B.min(),r,i,0)}static newNoDocument(e,n){return new ce(e,2,n,B.min(),B.min(),rt.empty(),0)}static newUnknownDocument(e,n){return new ce(e,3,n,B.min(),B.min(),rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hi{constructor(e,n){this.position=e,this.inclusive=n}}function N0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=D.comparator(D.fromName(o.referenceValue),n.key):r=di(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function D0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class du{constructor(e,n="asc"){this.field=e,this.dir=n}}function $$(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class _A{}class Y extends _A{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new B$(e,n,r):n==="array-contains"?new q$(e,r):n==="in"?new TA(e,r):n==="not-in"?new W$(e,r):n==="array-contains-any"?new G$(e,r):new Y(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new z$(e,r):new j$(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(di(n,this.value)):n!==null&&ms(this.value)===ms(n)&&this.matchesComparison(di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ne extends _A{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new ne(e,n)}matches(e){return $o(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function $o(t){return t.op==="and"}function fg(t){return t.op==="or"}function Ky(t){return yA(t)&&$o(t)}function yA(t){for(const e of t.filters)if(e instanceof ne)return!1;return!0}function pg(t){if(t instanceof Y)return t.field.canonicalString()+t.op.toString()+Uo(t.value);if(Ky(t))return t.filters.map(e=>pg(e)).join(",");{const e=t.filters.map(n=>pg(n)).join(",");return`${t.op}(${e})`}}function vA(t,e){return t instanceof Y?function(r,i){return i instanceof Y&&r.op===i.op&&r.field.isEqual(i.field)&&Kn(r.value,i.value)}(t,e):t instanceof ne?function(r,i){return i instanceof ne&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&vA(o,i.filters[a]),!0):!1}(t,e):void L()}function wA(t,e){const n=t.filters.concat(e);return ne.create(n,t.op)}function EA(t){return t instanceof Y?function(n){return`${n.field.canonicalString()} ${n.op} ${Uo(n.value)}`}(t):t instanceof ne?function(n){return n.op.toString()+" {"+n.getFilters().map(EA).join(" ,")+"}"}(t):"Filter"}class B$ extends Y{constructor(e,n,r){super(e,n,r),this.key=D.fromName(r.referenceValue)}matches(e){const n=D.comparator(e.key,this.key);return this.matchesComparison(n)}}class z$ extends Y{constructor(e,n){super(e,"in",n),this.keys=IA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class j$ extends Y{constructor(e,n){super(e,"not-in",n),this.keys=IA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function IA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>D.fromName(r.referenceValue))}class q$ extends Y{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cu(n)&&uu(n.arrayValue,this.value)}}class TA extends Y{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&uu(this.value.arrayValue,n)}}class W$ extends Y{constructor(e,n){super(e,"not-in",n)}matches(e){if(uu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!uu(this.value.arrayValue,n)}}class G$ extends Y{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>uu(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class H${constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function mg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new H$(t,e,n,r,i,s,o)}function _s(t){const e=O(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Uo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Uo(r)).join(",")),e.ce=n}return e.ce}function ju(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$$(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!D0(t.startAt,e.startAt)&&D0(t.endAt,e.endAt)}function Xd(t){return D.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Jd(t,e){return t.filters.filter(n=>n instanceof Y&&n.field.isEqual(e))}function O0(t,e,n){let r=rd,i=!0;for(const s of Jd(t,e)){let o=rd,a=!0;switch(s.op){case"<":case"<=":o=F$(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=rd}b0({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];b0({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function V0(t,e,n){let r=qr,i=!0;for(const s of Jd(t,e)){let o=qr,a=!0;switch(s.op){case">=":case">":o=U$(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=qr}x0({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];x0({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Rr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function SA(t,e,n,r,i,s,o,a){return new Rr(t,e,n,r,i,s,o,a)}function fa(t){return new Rr(t)}function L0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Qy(t){return t.collectionGroup!==null}function Ro(t){const e=O(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new se(pe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new du(s,r))}),n.has(pe.keyField().canonicalString())||e.le.push(new du(pe.keyField(),r))}return e.le}function Pt(t){const e=O(t);return e.he||(e.he=K$(e,Ro(t))),e.he}function K$(t,e){if(t.limitType==="F")return mg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new du(i.field,s)});const n=t.endAt?new hi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hi(t.startAt.position,t.startAt.inclusive):null;return mg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gg(t,e){const n=t.filters.concat([e]);return new Rr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Zd(t,e,n){return new Rr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qu(t,e){return ju(Pt(t),Pt(e))&&t.limitType===e.limitType}function RA(t){return`${_s(Pt(t))}|lt:${t.limitType}`}function Hs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>EA(i)).join(", ")}]`),zu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Uo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Uo(i)).join(",")),`Target(${r})`}(Pt(t))}; limitType=${t.limitType})`}function Wu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):D.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ro(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=N0(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ro(r),i)||r.endAt&&!function(o,a,l){const u=N0(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ro(r),i))}(t,e)}function PA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function AA(t){return(e,n)=>{let r=!1;for(const i of Ro(t)){const s=Q$(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Q$(t,e,n){const r=t.field.isKeyField()?D.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?di(l,u):L()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
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
 */class Ai{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return fA(this.inner)}size(){return this.innerSize}}/**
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
 */const Y$=new ae(D.comparator);function Mt(){return Y$}const CA=new ae(D.comparator);function Xa(...t){let e=CA;for(const n of t)e=e.insert(n.key,n);return e}function kA(t){let e=CA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zn(){return _l()}function bA(){return _l()}function _l(){return new Ai(t=>t.toString(),(t,e)=>t.isEqual(e))}const X$=new ae(D.comparator),J$=new se(D.comparator);function W(...t){let e=J$;for(const n of t)e=e.add(n);return e}const Z$=new se(j);function Yy(){return Z$}/**
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
 */function xA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:au(e)?"-0":e}}function NA(t){return{integerValue:""+t}}function DA(t,e){return lA(e)?NA(e):xA(t,e)}/**
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
 */class df{constructor(){this._=void 0}}function eB(t,e,n){return t instanceof Bo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&cf(s)&&(s=Hy(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ys?VA(t,e):t instanceof vs?LA(t,e):function(i,s){const o=OA(i,s),a=M0(o)+M0(i.Ie);return hg(o)&&hg(i.Ie)?NA(a):xA(i.serializer,a)}(t,e)}function tB(t,e,n){return t instanceof ys?VA(t,e):t instanceof vs?LA(t,e):n}function OA(t,e){return t instanceof zo?function(r){return hg(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Bo extends df{}class ys extends df{constructor(e){super(),this.elements=e}}function VA(t,e){const n=MA(e);for(const r of t.elements)n.some(i=>Kn(i,r))||n.push(r);return{arrayValue:{values:n}}}class vs extends df{constructor(e){super(),this.elements=e}}function LA(t,e){let n=MA(e);for(const r of t.elements)n=n.filter(i=>!Kn(i,r));return{arrayValue:{values:n}}}class zo extends df{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function M0(t){return Se(t.integerValue||t.doubleValue)}function MA(t){return cu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Gu{constructor(e,n){this.field=e,this.transform=n}}function nB(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ys&&i instanceof ys||r instanceof vs&&i instanceof vs?Fo(r.elements,i.elements,Kn):r instanceof zo&&i instanceof zo?Kn(r.Ie,i.Ie):r instanceof Bo&&i instanceof Bo}(t.transform,e.transform)}class rB{constructor(e,n){this.version=e,this.transformResults=n}}class me{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new me}static exists(e){return new me(void 0,e)}static updateTime(e){return new me(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sd(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hf{}function FA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ma(t.key,me.none()):new pa(t.key,t.data,me.none());{const n=t.data,r=rt.empty();let i=new se(pe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Pr(t.key,r,new Lt(i.toArray()),me.none())}}function iB(t,e,n){t instanceof pa?function(i,s,o){const a=i.value.clone(),l=U0(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Pr?function(i,s,o){if(!sd(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=U0(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(UA(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function yl(t,e,n,r){return t instanceof pa?function(s,o,a,l){if(!sd(s.precondition,o))return a;const u=s.value.clone(),c=$0(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pr?function(s,o,a,l){if(!sd(s.precondition,o))return a;const u=$0(s.fieldTransforms,l,o),c=o.data;return c.setAll(UA(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return sd(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function sB(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=OA(r.transform,i||null);s!=null&&(n===null&&(n=rt.empty()),n.set(r.field,s))}return n||null}function F0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fo(r,i,(s,o)=>nB(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pa extends hf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pr extends hf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function UA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function U0(t,e,n){const r=new Map;$(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,tB(o,a,n[i]))}return r}function $0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,eB(s,o,e))}return r}class ma extends hf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xy extends hf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Jy{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&iB(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=yl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=yl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=FA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&Fo(this.mutations,e.mutations,(n,r)=>F0(n,r))&&Fo(this.baseMutations,e.baseMutations,(n,r)=>F0(n,r))}}class Zy{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){$(e.mutations.length===r.length);let i=function(){return X$}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Zy(e,n,r,i)}}/**
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
 */class ev{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class oB{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ve,Z;function $A(t){switch(t){default:return L();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function BA(t){if(t===void 0)return Ne("GRPC error has no .code"),S.UNKNOWN;switch(t){case Ve.OK:return S.OK;case Ve.CANCELLED:return S.CANCELLED;case Ve.UNKNOWN:return S.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return S.INTERNAL;case Ve.UNAVAILABLE:return S.UNAVAILABLE;case Ve.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ve.NOT_FOUND:return S.NOT_FOUND;case Ve.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ve.ABORTED:return S.ABORTED;case Ve.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ve.DATA_LOSS:return S.DATA_LOSS;default:return L()}}(Z=Ve||(Ve={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function zA(){return new TextEncoder}/**
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
 */const aB=new So([4294967295,4294967295],0);function B0(t){const e=zA().encode(t),n=new t$;return n.update(e),new Uint8Array(n.digest())}function z0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new So([n,r],0),new So([i,s],0)]}class tv{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ja(`Invalid padding: ${n}`);if(r<0)throw new Ja(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ja(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ja(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=So.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(So.fromNumber(r)));return i.compare(aB)===1&&(i=new So([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=B0(e),[r,i]=z0(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new tv(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=B0(e),[r,i]=z0(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ku.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hu(B.min(),i,new ae(j),Mt(),W())}}class Ku{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ku(r,n,W(),W(),W())}}/**
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
 */class od{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class jA{constructor(e,n){this.targetId=e,this.fe=n}}class qA{constructor(e,n,r=$e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class j0{constructor(){this.ge=0,this.pe=W0(),this.ye=$e.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=W(),n=W(),r=W();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:L()}}),new Ku(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=W0()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,$(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class lB{constructor(e){this.Le=e,this.ke=new Map,this.qe=Mt(),this.Qe=q0(),this.Ke=new ae(j)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:L()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Xd(s))if(r===0){const o=new D(s.path);this.We(n,o,ce.newNoDocument(o,B.min()))}else $(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ui(r).toUint8Array()}catch(l){if(l instanceof pA)return Cn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new tv(o,i,s)}catch(l){return Cn(l instanceof Ja?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Xd(a.target)){const l=new D(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,ce.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=W();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Hu(e,n,this.Ke,this.qe,r);return this.qe=Mt(),this.Qe=q0(),this.Ke=new ae(j),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new j0,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new se(j),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||A("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new j0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function q0(){return new ae(D.comparator)}function W0(){return new ae(D.comparator)}const uB={asc:"ASCENDING",desc:"DESCENDING"},cB={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dB={and:"AND",or:"OR"};class hB{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _g(t,e){return t.useProto3Json||zu(e)?e:{value:e}}function jo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function fB(t,e){return jo(t,e.toTimestamp())}function Oe(t){return $(!!t),B.fromTimestamp(function(n){const r=li(n);return new ge(r.seconds,r.nanos)}(t))}function nv(t,e){return yg(t,e).canonicalString()}function yg(t,e){const n=function(i){return new Q(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function GA(t){const e=Q.fromString(t);return $(nC(e)),e}function hu(t,e){return nv(t.databaseId,e.path)}function Gn(t,e){const n=GA(e);if(n.get(1)!==t.databaseId.projectId)throw new P(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new D(QA(n))}function HA(t,e){return nv(t.databaseId,e)}function KA(t){const e=GA(t);return e.length===4?Q.emptyPath():QA(e)}function vg(t){return new Q(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function QA(t){return $(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function G0(t,e,n){return{name:hu(t,e),fields:n.value.mapValue.fields}}function YA(t,e,n){const r=Gn(t,e.name),i=Oe(e.updateTime),s=e.createTime?Oe(e.createTime):B.min(),o=new rt({mapValue:{fields:e.fields}}),a=ce.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function pB(t,e){return"found"in e?function(r,i){$(!!i.found),i.found.name,i.found.updateTime;const s=Gn(r,i.found.name),o=Oe(i.found.updateTime),a=i.found.createTime?Oe(i.found.createTime):B.min(),l=new rt({mapValue:{fields:i.found.fields}});return ce.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){$(!!i.missing),$(!!i.readTime);const s=Gn(r,i.missing),o=Oe(i.readTime);return ce.newNoDocument(s,o)}(t,e):L()}function mB(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:L()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?($(c===void 0||typeof c=="string"),$e.fromBase64String(c||"")):($(c===void 0||c instanceof Uint8Array),$e.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?S.UNKNOWN:BA(u.code);return new P(c,u.message||"")}(o);n=new qA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gn(t,r.document.name),s=Oe(r.document.updateTime),o=r.document.createTime?Oe(r.document.createTime):B.min(),a=new rt({mapValue:{fields:r.document.fields}}),l=ce.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new od(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Gn(t,r.document),s=r.readTime?Oe(r.readTime):B.min(),o=ce.newNoDocument(i,s),a=r.removedTargetIds||[];n=new od([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Gn(t,r.document),s=r.removedTargetIds||[];n=new od([],s,i,null)}else{if(!("filter"in e))return L();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new oB(i,s),a=r.targetId;n=new jA(a,o)}}return n}function fu(t,e){let n;if(e instanceof pa)n={update:G0(t,e.key,e.value)};else if(e instanceof ma)n={delete:hu(t,e.key)};else if(e instanceof Pr)n={update:G0(t,e.key,e.data),updateMask:EB(e.fieldMask)};else{if(!(e instanceof Xy))return L();n={verify:hu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Bo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ys)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof vs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof zo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw L()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:fB(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:L()}(t,e.precondition)),n}function wg(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?me.updateTime(Oe(s.updateTime)):s.exists!==void 0?me.exists(s.exists):me.none()}(e.currentDocument):me.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)$(a.setToServerValue==="REQUEST_TIME"),l=new Bo;else if("appendMissingElements"in a){const c=a.appendMissingElements.values||[];l=new ys(c)}else if("removeAllFromArray"in a){const c=a.removeAllFromArray.values||[];l=new vs(c)}else"increment"in a?l=new zo(o,a.increment):L();const u=pe.fromServerFormat(a.fieldPath);return new Gu(u,l)}(t,i)):[];if(e.update){e.update.name;const i=Gn(t,e.update.name),s=new rt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Lt(u.map(c=>pe.fromServerFormat(c)))}(e.updateMask);return new Pr(i,s,o,n,r)}return new pa(i,s,n,r)}if(e.delete){const i=Gn(t,e.delete);return new ma(i,n)}if(e.verify){const i=Gn(t,e.verify);return new Xy(i,n)}return L()}function gB(t,e){return t&&t.length>0?($(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Oe(i.updateTime):Oe(s);return o.isEqual(B.min())&&(o=Oe(s)),new rB(o,i.transformResults||[])}(n,e))):[]}function XA(t,e){return{documents:[HA(t,e.path)]}}function JA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=HA(t,i);const s=function(u){if(u.length!==0)return tC(ne.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Ks(h.field),direction:yB(h.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=_g(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function ZA(t){let e=KA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){$(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const h=eC(d);return h instanceof ne&&Ky(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(h=>function(y){return new du(Qs(y.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(d){let h;return h=typeof d=="object"?d.value:d,zu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(d){const h=!!d.before,p=d.values||[];return new hi(p,h)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const h=!d.before,p=d.values||[];return new hi(p,h)}(n.endAt)),SA(e,i,o,s,a,"F",l,u)}function _B(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function eC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qs(n.unaryFilter.field);return Y.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qs(n.unaryFilter.field);return Y.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qs(n.unaryFilter.field);return Y.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qs(n.unaryFilter.field);return Y.create(o,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(t):t.fieldFilter!==void 0?function(n){return Y.create(Qs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ne.create(n.compositeFilter.filters.map(r=>eC(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(n.compositeFilter.op))}(t):L()}function yB(t){return uB[t]}function vB(t){return cB[t]}function wB(t){return dB[t]}function Ks(t){return{fieldPath:t.canonicalString()}}function Qs(t){return pe.fromServerFormat(t.fieldPath)}function tC(t){return t instanceof Y?function(n){if(n.op==="=="){if(k0(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NAN"}};if(C0(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(k0(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NOT_NAN"}};if(C0(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ks(n.field),op:vB(n.op),value:n.value}}}(t):t instanceof ne?function(n){const r=n.getFilters().map(i=>tC(i));return r.length===1?r[0]:{compositeFilter:{op:wB(n.op),filters:r}}}(t):L()}function EB(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function nC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class rr{constructor(e,n,r,i,s=B.min(),o=B.min(),a=$e.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class rC{constructor(e){this.ct=e}}function IB(t,e){let n;if(e.document)n=YA(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=D.fromSegments(e.noDocument.path),i=Es(e.noDocument.readTime);n=ce.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return L();{const r=D.fromSegments(e.unknownDocument.path),i=Es(e.unknownDocument.version);n=ce.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new ge(i[0],i[1]);return B.fromTimestamp(s)}(e.readTime)),n}function H0(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:eh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:hu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:jo(s,o.version.toTimestamp()),createTime:jo(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ws(e.version)};else{if(!e.isUnknownDocument())return L();r.unknownDocument={path:n.path.toArray(),version:ws(e.version)}}return r}function eh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ws(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Es(t){const e=new ge(t.seconds,t.nanoseconds);return B.fromTimestamp(e)}function Ui(t,e){const n=(e.baseMutations||[]).map(s=>wg(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>wg(t.ct,s)),i=ge.fromMillis(e.localWriteTimeMs);return new Jy(e.batchId,i,n,r)}function Za(t){const e=Es(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Es(t.lastLimboFreeSnapshotVersion):B.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return $(s.documents.length===1),Pt(fa(KA(s.documents[0])))}(t.query):function(s){return Pt(ZA(s))}(t.query),new rr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,$e.fromBase64String(t.resumeToken))}function iC(t,e){const n=ws(e.snapshotVersion),r=ws(e.lastLimboFreeSnapshotVersion);let i;i=Xd(e.target)?XA(t.ct,e.target):JA(t.ct,e.target).ut;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:_s(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function rv(t){const e=ZA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zd(e,e.limit,"L"):e}function Op(t,e){return new ev(e.largestBatchId,wg(t.ct,e.overlayMutation))}function K0(t,e){const n=e.path.lastSegment();return[t,Rt(e.path.popLast()),n]}function Q0(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:ws(r.readTime),documentKey:Rt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class TB{getBundleMetadata(e,n){return Y0(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Es(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return Y0(e).put(function(i){return{bundleId:i.id,createTime:ws(Oe(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return X0(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:rv(s.bundledQuery),readTime:Es(s.readTime)}}(r)})}saveNamedQuery(e,n){return X0(e).put(function(i){return{name:i.name,readTime:ws(Oe(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function Y0(t){return Xe(t,"bundles")}function X0(t){return Xe(t,"namedQueries")}/**
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
 */class ff{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new ff(e,r)}getOverlay(e,n){return Ma(e).get(K0(this.userId,n)).next(r=>r?Op(this.serializer,r):null)}getOverlays(e,n){const r=zn();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new ev(n,o);i.push(this.ht(e,a))}),I.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Rt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Ma(e).H("collectionPathOverlayIndex",a))}),I.waitFor(s)}getOverlaysForCollection(e,n,r){const i=zn(),s=Rt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ma(e).W("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=Op(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=zn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Ma(e).Y({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const d=Op(this.serializer,u);s.size()<i||d.largestBatchId===o?(s.set(d.getKey(),d),o=d.largestBatchId):c.done()}).next(()=>s)}ht(e,n){return Ma(e).put(function(i,s,o){const[a,l,u]=K0(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:fu(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Ma(t){return Xe(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */class $i{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Se(e.integerValue));else if("doubleValue"in e){const r=Se(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),au(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(ui(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?mA(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):L()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),D.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}$i.bt=new $i;function SB(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function J0(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=SB(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class RB{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Bt(e){const n=this.Lt(e),r=J0(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Lt(e),r=J0(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class PB{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class AB{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Fa{constructor(){this.Gt=new RB,this.zt=new PB(this.Gt),this.jt=new AB(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class Bi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Bi(this.indexId,this.documentKey,this.arrayValue,r)}}function Nr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Z0(t.arrayValue,e.arrayValue),n!==0?n:(n=Z0(t.directionalValue,e.directionalValue),n!==0?n:D.comparator(t.documentKey,e.documentKey)))}function Z0(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class eI{constructor(e){this.Yt=new se((n,r)=>pe.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if($(e.collectionGroup===this.collectionId),this.en)return!1;const n=ug(e);if(n!==void 0&&!this.nn(n))return!1;const r=Li(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new se(pe.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new td(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new td(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new td(r.field,r.dir==="asc"?0:1)));return new Yd(Yd.UNKNOWN_ID,this.collectionId,n,ou.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function sC(t){var e,n;if($(t instanceof Y||t instanceof ne),t instanceof Y){if(t instanceof TA){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>Y.create(t.field,"==",s)))||[];return ne.create(i,"or")}return t}const r=t.filters.map(i=>sC(i));return ne.create(r,t.op)}function CB(t){if(t.getFilters().length===0)return[];const e=Tg(sC(t));return $(oC(e)),Eg(e)||Ig(e)?[e]:e.getFilters()}function Eg(t){return t instanceof Y}function Ig(t){return t instanceof ne&&Ky(t)}function oC(t){return Eg(t)||Ig(t)||function(n){if(n instanceof ne&&fg(n)){for(const r of n.getFilters())if(!Eg(r)&&!Ig(r))return!1;return!0}return!1}(t)}function Tg(t){if($(t instanceof Y||t instanceof ne),t instanceof Y)return t;if(t.filters.length===1)return Tg(t.filters[0]);const e=t.filters.map(r=>Tg(r));let n=ne.create(e,t.op);return n=th(n),oC(n)?n:($(n instanceof ne),$($o(n)),$(n.filters.length>1),n.filters.reduce((r,i)=>iv(r,i)))}function iv(t,e){let n;return $(t instanceof Y||t instanceof ne),$(e instanceof Y||e instanceof ne),n=t instanceof Y?e instanceof Y?function(i,s){return ne.create([i,s],"and")}(t,e):tI(t,e):e instanceof Y?tI(e,t):function(i,s){if($(i.filters.length>0&&s.filters.length>0),$o(i)&&$o(s))return wA(i,s.getFilters());const o=fg(i)?i:s,a=fg(i)?s:i,l=o.filters.map(u=>iv(u,a));return ne.create(l,"or")}(t,e),th(n)}function tI(t,e){if($o(e))return wA(e,t.getFilters());{const n=e.filters.map(r=>iv(t,r));return ne.create(n,"or")}}function th(t){if($(t instanceof Y||t instanceof ne),t instanceof Y)return t;const e=t.getFilters();if(e.length===1)return th(e[0]);if(yA(t))return t;const n=e.map(i=>th(i)),r=[];return n.forEach(i=>{i instanceof Y?r.push(i):i instanceof ne&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ne.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class kB{constructor(){this._n=new sv}addToCollectionParentIndex(e,n){return this._n.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}deleteAllFieldIndexes(e){return I.resolve()}createTargetIndexes(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(Jt.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(Jt.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class sv{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new se(Q.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new se(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Nc=new Uint8Array(0);class bB{constructor(e,n){this.databaseId=n,this.an=new sv,this.un=new Ai(r=>_s(r),(r,i)=>ju(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:Rt(i)};return nI(e).put(s)}return I.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[rA(n),""],!1,!0);return nI(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Bn(o.parent))}return r})}addFieldIndex(e,n){const r=Ua(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=zs(e);return s.next(a=>{o.put(Q0(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Ua(e),i=zs(e),s=Bs(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Ua(e),r=Bs(e),i=zs(e);return n.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,n){return I.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new eI(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Bs(e);let i=!0;const s=new Map;return I.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=W();const a=[];return I.forEach(s,(l,u)=>{A("IndexedDbIndexManager",`Using index ${function(g){return`id=${g.indexId}|cg=${g.collectionGroup}|f=${g.fields.map(E=>`${E.fieldPath}:${E.kind}`).join(",")}`}(l)} to execute ${_s(n)}`);const c=function(g,E){const R=ug(E);if(R===void 0)return null;for(const C of Jd(g,R.fieldPath))switch(C.op){case"array-contains-any":return C.value.arrayValue.values||[];case"array-contains":return[C.value]}return null}(u,l),d=function(g,E){const R=new Map;for(const C of Li(E))for(const b of Jd(g,C.fieldPath))switch(b.op){case"==":case"in":R.set(C.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return R.set(C.fieldPath.canonicalString(),b.value),Array.from(R.values())}return null}(u,l),h=function(g,E){const R=[];let C=!0;for(const b of Li(E)){const N=b.kind===0?O0(g,b.fieldPath,g.startAt):V0(g,b.fieldPath,g.startAt);R.push(N.value),C&&(C=N.inclusive)}return new hi(R,C)}(u,l),p=function(g,E){const R=[];let C=!0;for(const b of Li(E)){const N=b.kind===0?V0(g,b.fieldPath,g.endAt):O0(g,b.fieldPath,g.endAt);R.push(N.value),C&&(C=N.inclusive)}return new hi(R,C)}(u,l),y=this.hn(l,u,h),v=this.hn(l,u,p),w=this.Pn(l,u,d),_=this.In(l.indexId,c,y,h.inclusive,v,p.inclusive,w);return I.forEach(_,m=>r.j(m,n.limit).next(g=>{g.forEach(E=>{const R=D.fromSegments(E.documentKey);o.has(R)||(o=o.add(R),a.push(R))})}))}).next(()=>a)}return I.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=CB(ne.create(e.filters,"and")).map(r=>mg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let d=0;d<l;++d){const h=n?this.Tn(n[d/u]):Nc,p=this.En(e,h,r[d%u],i),y=this.dn(e,h,s[d%u],o),v=a.map(w=>this.En(e,h,w,!0));c.push(...this.createRange(p,y,v))}return c}En(e,n,r,i){const s=new Bi(e,D.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new Bi(e,D.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new eI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return I.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new se(pe.comparator),c=!1;for(const d of l.filters)for(const h of d.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?c=!0:u=u.add(h.field));for(const d of l.orderBy)d.field.isKeyField()||(u=u.add(d.field));return u.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new Fa;for(const i of Li(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);$i.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new Fa;return $i.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new Fa;return $i.bt.Pt(gs(this.databaseId,n),r.Ht(function(s){const o=Li(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new Fa);let s=0;for(const o of Li(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&cu(a))i=this.mn(i,o,a);else{const u=l.Ht(o.kind);$i.bt.Pt(a,u)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Fa;l.seed(a.Wt()),$i.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof Y&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Ua(e),i=zs(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return I.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(c,d){const h=d?new ou(d.sequenceNumber,new Jt(Es(d.readTime),new D(Bn(d.documentKey)),d.largestBatchId)):ou.empty(),p=c.fields.map(([y,v])=>new td(pe.fromServerFormat(y),v));return new Yd(c.indexId,c.collectionGroup,p,h)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:j(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Ua(e),s=zs(e);return this.gn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>I.forEach(a,l=>s.put(Q0(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return I.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?I.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),I.forEach(a,l=>this.pn(e,i,l).next(u=>{const c=this.yn(s,l);return u.isEqual(c)?I.resolve():this.wn(e,s,l,u,c)}))))})}Sn(e,n,r,i){return Bs(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return Bs(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=Bs(e);let s=new se(Nr);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new Bi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new se(Nr);const i=this.An(n,e);if(i==null)return r;const s=ug(n);if(s!=null){const o=e.data.field(s.fieldPath);if(cu(o))for(const a of o.arrayValue.values||[])r=r.add(new Bi(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new Bi(n.indexId,e.key,Nc,i));return r}wn(e,n,r,i,s){A("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,u,c,d,h){const p=l.getIterator(),y=u.getIterator();let v=$s(p),w=$s(y);for(;v||w;){let _=!1,m=!1;if(v&&w){const g=c(v,w);g<0?m=!0:g>0&&(_=!0)}else v!=null?m=!0:_=!0;_?(d(w),w=$s(y)):m?(h(v),v=$s(p)):(v=$s(p),w=$s(y))}}(i,s,Nr,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),I.waitFor(o)}gn(e){let n=1;return zs(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Nr(o,a)).filter((o,a,l)=>!a||Nr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Nr(o,e),l=Nr(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Nc,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Nc,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return Nr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(rI)}getMinOffset(e,n){return I.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||L())).next(rI)}}function nI(t){return Xe(t,"collectionParents")}function Bs(t){return Xe(t,"indexEntries")}function Ua(t){return Xe(t,"indexConfiguration")}function zs(t){return Xe(t,"indexState")}function rI(t){$(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Wy(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Jt(e.readTime,e.documentKey,n)}/**
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
 */const iI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Nt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function aC(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.Y({range:o},(c,d,h)=>(a++,h.delete()));s.push(l.next(()=>{$(a===1)}));const u=[];for(const c of n.mutations){const d=uA(e,c.key.path,n.batchId);s.push(i.delete(d)),u.push(c.key)}return I.waitFor(s).next(()=>u)}function nh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw L();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(41943040,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);class pf{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){$(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new pf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Dr(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Ys(e),o=Dr(e);return o.add({}).next(a=>{$(typeof a=="number");const l=new Jy(a,n,r,i),u=function(p,y,v){const w=v.baseMutations.map(m=>fu(p.ct,m)),_=v.mutations.map(m=>fu(p.ct,m));return{userId:y,batchId:v.batchId,localWriteTimeMs:v.localWriteTime.toMillis(),baseMutations:w,mutations:_}}(this.serializer,this.userId,l),c=[];let d=new se((h,p)=>j(h.canonicalString(),p.canonicalString()));for(const h of i){const p=uA(this.userId,h.key.path,a);d=d.add(h.key.path.popLast()),c.push(o.put(u)),c.push(s.put(p,y$))}return d.forEach(h=>{c.push(this.indexManager.addToCollectionParentIndex(e,h))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),I.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return Dr(e).get(n).next(r=>r?($(r.userId===this.userId),Ui(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?I.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Dr(e).Y({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&($(a.batchId>=r),s=Ui(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Dr(e).Y({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Dr(e).W("userMutationsIndex",n).next(r=>r.map(i=>Ui(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=nd(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Ys(e).Y({range:i},(o,a,l)=>{const[u,c,d]=o,h=Bn(c);if(u===this.userId&&n.path.isEqual(h))return Dr(e).get(d).next(p=>{if(!p)throw L();$(p.userId===this.userId),s.push(Ui(this.serializer,p))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new se(j);const i=[];return n.forEach(s=>{const o=nd(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=Ys(e).Y({range:a},(u,c,d)=>{const[h,p,y]=u,v=Bn(p);h===this.userId&&s.path.isEqual(v)?r=r.add(y):d.done()});i.push(l)}),I.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=nd(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new se(j);return Ys(e).Y({range:o},(l,u,c)=>{const[d,h,p]=l,y=Bn(h);d===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(p)):c.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Dr(e).get(s).next(o=>{if(o===null)throw L();$(o.userId===this.userId),r.push(Ui(this.serializer,o))}))}),I.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return aC(e.ae,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),I.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return I.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Ys(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Bn(s[1]);i.push(l)}else a.done()}).next(()=>{$(i.length===0)})})}containsKey(e,n){return lC(e,this.userId,n)}xn(e){return uC(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function lC(t,e,n){const r=nd(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ys(t).Y({range:s,J:!0},(a,l,u)=>{const[c,d,h]=a;c===e&&d===i&&(o=!0),u.done()}).next(()=>o)}function Dr(t){return Xe(t,"mutations")}function Ys(t){return Xe(t,"documentMutations")}function uC(t){return Xe(t,"mutationQueues")}/**
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
 */class Is{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Is(0)}static Bn(){return new Is(-1)}}/**
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
 */class xB{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Ln(e).next(n=>{const r=new Is(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Ln(e).next(n=>B.fromTimestamp(new ge(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Ln(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Ln(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Ln(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>js(e).delete(n.targetId)).next(()=>this.Ln(e)).next(r=>($(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return js(e).Y((o,a)=>{const l=Za(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>I.waitFor(s)).next(()=>i)}forEachTarget(e,n){return js(e).Y((r,i)=>{const s=Za(i);n(s)})}Ln(e){return sI(e).get("targetGlobalKey").next(n=>($(n!==null),n))}kn(e,n){return sI(e).put("targetGlobalKey",n)}qn(e,n){return js(e).put(iC(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Ln(e).next(n=>n.targetCount)}getTargetData(e,n){const r=_s(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return js(e).Y({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=Za(a);ju(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Fr(e);return n.forEach(o=>{const a=Rt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),I.waitFor(i)}removeMatchingKeys(e,n,r){const i=Fr(e);return I.forEach(n,s=>{const o=Rt(s.path);return I.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Fr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Fr(e);let s=W();return i.Y({range:r,J:!0},(o,a,l)=>{const u=Bn(o[1]),c=new D(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Rt(n.path),i=IDBKeyRange.bound([r],[rA(r)],!1,!0);let s=0;return Fr(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,n){return js(e).get(n).next(r=>r?Za(r):null)}}function js(t){return Xe(t,"targets")}function sI(t){return Xe(t,"targetGlobal")}function Fr(t){return Xe(t,"targetDocuments")}/**
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
 */function oI([t,e],[n,r]){const i=j(t,n);return i===0?j(e,r):i}class NB{constructor(e){this.Kn=e,this.buffer=new se(oI),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();oI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DB{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){A("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Pi(n)?A("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ri(n)}await this.zn(3e5)})}}class OB{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return I.resolve(Vt._e);const r=new NB(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(A("LruGarbageCollector","Garbage collection skipped; disabled"),I.resolve(iI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),iI):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(A("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Gs()<=K.DEBUG&&A("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),I.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function VB(t,e){return new OB(t,e)}/**
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
 */class LB{constructor(e,n){this.db=e,this.garbageCollector=VB(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return Dc(e,r)}removeReference(e,n,r){return Dc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Dc(e,n)}er(e,n){return function(i,s){let o=!1;return uC(i).Z(a=>lC(i,a,s).next(l=>(l&&(o=!0),I.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,B.min()),Fr(e).delete(function(d){return[0,Rt(d.path)]}(o))))});i.push(l)}}).next(()=>I.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Dc(e,n)}Xn(e,n){const r=Fr(e);let i,s=Vt._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Vt._e&&n(new D(Bn(i)),s),s=u,i=l):s=Vt._e}).next(()=>{s!==Vt._e&&n(new D(Bn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Dc(t,e){return Fr(t).put(function(r,i){return{targetId:0,path:Rt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class cC{constructor(){this.changes=new Ai(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ce.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class MB{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ni(e).put(r)}removeEntry(e,n,r){return Ni(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],eh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=ce.newInvalidDocument(n);return Ni(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only($a(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:ce.newInvalidDocument(n)};return Ni(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only($a(n))},(i,s)=>{r={document:this.nr(n,s),size:nh(s)}}).next(()=>r)}getEntries(e,n){let r=Mt();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=Mt(),i=new ae(D.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,nh(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return I.resolve();let i=new se(uI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound($a(i.first()),$a(i.last())),o=i.getIterator();let a=o.getNext();return Ni(e).Y({index:"documentKeyIndex",range:s},(l,u,c)=>{const d=D.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&uI(a,d)<0;)r(a,null),a=o.getNext();a&&a.isEqual(d)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.U($a(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),eh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ni(e).W(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let c=Mt();for(const d of u){const h=this.nr(D.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);h.isFoundDocument()&&(Wu(n,h)||i.has(h.key))&&(c=c.insert(h.key,h))}return c})}getAllFromCollectionGroup(e,n,r,i){let s=Mt();const o=lI(n,r),a=lI(n,Jt.max());return Ni(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const d=this.nr(D.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(d.key,d),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new FB(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return aI(e).get("remoteDocumentGlobalKey").next(n=>($(!!n),n))}tr(e,n){return aI(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=IB(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(B.min())))return r}return ce.newInvalidDocument(e)}}function dC(t){return new MB(t)}class FB extends cC{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new Ai(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new se((s,o)=>j(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=H0(this.ar.serializer,o);i=i.add(s.path.popLast());const u=nh(l);r+=u-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=H0(this.ar.serializer,o.convertToNoDocument(B.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),I.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function aI(t){return Xe(t,"remoteDocumentGlobal")}function Ni(t){return Xe(t,"remoteDocumentsV14")}function $a(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function lI(t,e){const n=e.documentKey.path.toArray();return[t,eh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function uI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=j(n[s],r[s]),i)return i;return i=j(n.length,r.length),i||(i=j(n[n.length-2],r[r.length-2]),i||j(n[n.length-1],r[r.length-1]))}/**
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
 *//**
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
 */class UB{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class hC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&yl(r.mutation,i,Lt.empty(),ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,n,r=W()){const i=zn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,W()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Mt();const o=_l(),a=function(){return _l()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Pr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),yl(c.mutation,u,c.mutation.getFieldMask(),ge.now())):o.set(u.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new UB(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=_l();let i=new ae((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Lt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||W()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=bA();c.forEach(h=>{if(!s.has(h)){const p=FA(n.get(h),r.get(h));p!==null&&d.set(h,p),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return D.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Qy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(zn());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?I.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,W())).next(c=>({batchId:a,changes:kA(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new D(n)).next(r=>{let i=Xa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Xa();return this.indexManager.getCollectionParents(e,s).next(a=>I.forEach(a,l=>{const u=function(d,h){return new Rr(h,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((d,h)=>{o=o.insert(d,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,ce.newInvalidDocument(c)))});let a=Xa();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&yl(c.mutation,u,Lt.empty(),ge.now()),Wu(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class $B{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return I.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Oe(i.createTime)}}(n)),I.resolve()}getNamedQuery(e,n){return I.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:rv(i.bundledQuery),readTime:Oe(i.readTime)}}(n)),I.resolve()}}/**
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
 */class BB{constructor(){this.overlays=new ae(D.comparator),this.hr=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zn();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=zn(),s=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ae((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=zn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=zn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ev(n,r));let s=this.hr.get(n);s===void 0&&(s=W(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class ov{constructor(){this.Pr=new se(qe.Ir),this.Tr=new se(qe.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new qe(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new D(new Q([])),r=new qe(n,e),i=new qe(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new D(new Q([])),r=new qe(n,e),i=new qe(n,e+1);let s=W();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new qe(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return D.comparator(e.key,n.key)||j(e.pr,n.pr)}static Er(e,n){return j(e.pr,n.pr)||D.comparator(e.key,n.key)}}/**
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
 */class zB{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new se(qe.Ir)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Jy(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new qe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),i=new qe(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new se(j);return n.forEach(i=>{const s=new qe(i,0),o=new qe(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),I.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;D.isDocumentKey(s)||(s=s.child(""));const o=new qe(new D(s),0);let a=new se(j);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),I.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){$(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return I.forEach(n.mutations,i=>{const s=new qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new qe(n,0),i=this.wr.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class jB{constructor(e){this.vr=e,this.docs=function(){return new ae(D.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():ce.newInvalidDocument(n))}getEntries(e,n){let r=Mt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ce.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Mt();const o=n.path,a=new D(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Wy(sA(c),r)<=0||(i.has(c.key)||Wu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,i){L()}Fr(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qB(this)}getSize(e){return I.resolve(this.size)}}class qB extends cC{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class WB{constructor(e){this.persistence=e,this.Mr=new Ai(n=>_s(n),ju),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ov,this.targetCount=0,this.Br=Is.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),I.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Is(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.qn(n),I.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Nr.containsKey(n))}}/**
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
 */class fC{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Vt(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new WB(this),this.indexManager=new kB,this.remoteDocumentCache=function(i){return new jB(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new rC(n),this.$r=new $B(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new BB,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new zB(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){A("MemoryPersistence","Starting transaction:",e);const i=new GB(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return I.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class GB extends aA{constructor(e){super(),this.currentSequenceNumber=e}}class mf{constructor(e){this.persistence=e,this.zr=new ov,this.jr=null}static Hr(e){return new mf(e)}get Jr(){if(this.jr)return this.jr;throw L()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),I.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Jr,r=>{const i=D.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,B.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return I.or([()=>I.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class HB{constructor(e){this.serializer=e}N(e,n,r,i){const s=new uf("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",S0,{unique:!0}),l.createObjectStore("documentMutations")}(e),cI(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=I.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),cI(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").W().next(c=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",S0,{unique:!0});const d=u.store("mutations"),h=c.map(p=>d.put(p));return I.waitFor(h)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:b$});u.createIndex("collectionPathOverlayIndex",x$,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",N$,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:v$});u.createIndex("documentKeyIndex",w$),u.createIndex("collectionGroupIndex",E$)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:P$}).createIndex("sequenceNumberIndex",A$,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:C$}).createIndex("documentKeyIndex",k$,{unique:!1})}(e))),o}ei(e){let n=0;return e.store("remoteDocuments").Y((r,i)=>{n+=nh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>I.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>I.forEach(a,l=>{$(l.userId===s.userId);const u=Ui(this.serializer,l);return aC(e,s.userId,u).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const l=new Q(o),u=function(d){return[0,Rt(d)]}(l);s.push(n.get(u).next(c=>c?I.resolve():(d=>n.put({targetId:0,path:Rt(d),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>I.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:R$});const r=n.store("collectionParents"),i=new sv,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Rt(l)})}};return n.store("remoteDocuments").Y({J:!0},(o,a)=>{const l=new Q(o);return s(l.popLast())}).next(()=>n.store("documentMutations").Y({J:!0},([o,a,l],u)=>{const c=Bn(a);return s(c.popLast())}))}ri(e){const n=e.store("targets");return n.Y((r,i)=>{const s=Za(i),o=iC(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(d){return d.document?new D(Q.fromString(d.document.name).popFirst(5)):d.noDocument?D.fromSegments(d.noDocument.path):d.unknownDocument?D.fromSegments(d.unknownDocument.path):L()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>I.waitFor(i))}si(e,n){const r=n.store("mutations"),i=dC(this.serializer),s=new fC(mf.Hr,this.serializer.ct);return r.W().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:W();Ui(this.serializer,l).keys().forEach(d=>c=c.add(d)),a.set(l.userId,c)}),I.forEach(a,(l,u)=>{const c=new Ge(u),d=ff.lt(this.serializer,c),h=s.getIndexManager(c),p=pf.lt(c,this.serializer,h,s.referenceDelegate);return new hC(i,p,d,h).recalculateAndSaveOverlaysForDocumentKeys(new cg(n,Vt._e),l).next()})})}}function cI(t){t.createObjectStore("targetDocuments",{keyPath:T$}).createIndex("documentTargetsIndex",S$,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",I$,{unique:!0}),t.createObjectStore("targetGlobal")}const Vp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class av{constructor(e,n,r,i,s,o,a,l,u,c,d=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=u,this.ai=c,this.ui=d,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=h=>Promise.resolve(),!av.D())throw new P(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new LB(this,i),this.Ti=n+"main",this.serializer=new rC(l),this.Ei=new ln(this.Ti,this.ui,new HB(this.serializer)),this.Qr=new xB(this.referenceDelegate,this.serializer),this.remoteDocumentCache=dC(this.serializer),this.$r=new TB,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,c===!1&&Ne("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new P(S.FAILED_PRECONDITION,Vp);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Vt(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Oc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Pi(e))return A("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return A("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return Ba(e).get("owner").next(n=>I.resolve(this.Si(n)))}bi(e){return Oc(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Xe(n,"clientMetadata");return r.W().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return I.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?I.resolve(!0):Ba(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new P(S.FAILED_PRECONDITION,Vp);return!1}}return!(!this.networkEnabled||!this.inForeground)||Oc(e).W().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&A("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new cg(e,Vt._e);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Bi()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Li(){return this.runTransaction("getActiveClients","readonly",e=>Oc(e).W().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return pf.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new bB(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return ff.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){A("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===15?O$:l===14?hA:l===13?dA:l===12?D$:l===11?cA:void L()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new cg(a,this.kr?this.kr.next():Vt._e),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw Ne(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new P(S.FAILED_PRECONDITION,oA);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return Ba(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new P(S.FAILED_PRECONDITION,Vp)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ba(e).put("owner",n)}static D(){return ln.D()}yi(e){const n=Ba(e);return n.get("owner").next(r=>this.Si(r)?(A("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):I.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ne(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;y1()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return A("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ne("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){Ne("Failed to set zombie client id.",e)}}Bi(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ba(t){return Xe(t,"owner")}function Oc(t){return Xe(t,"clientMetadata")}function lv(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class uv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=W(),i=W();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new uv(e,n.fromCache,r,i)}}/**
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
 */class KB{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class pC{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return y1()?8:ln.v(_e())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new KB;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Gs()<=K.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",Hs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),I.resolve()):(Gs()<=K.DEBUG&&A("QueryEngine","Query:",Hs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Gs()<=K.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",Hs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pt(n))):I.resolve())}ji(e,n){if(L0(n))return I.resolve(null);let r=Pt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Zd(n,null,"F"),r=Pt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=W(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,Zd(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return L0(n)||i.isEqual(B.min())?I.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?I.resolve(null):(Gs()<=K.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hs(n)),this.es(e,o,n,iA(i,-1)).next(a=>a))})}Zi(e,n){let r=new se(AA(e));return n.forEach((i,s)=>{Wu(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Gs()<=K.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",Hs(n)),this.zi.getDocumentsMatchingQuery(e,n,Jt.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class QB{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ae(j),this.rs=new Ai(s=>_s(s),ju),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hC(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function mC(t,e,n,r){return new QB(t,e,n,r)}async function gC(t,e){const n=O(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=W();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function YB(t,e){const n=O(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,h=d.keys();let p=I.resolve();return h.forEach(y=>{p=p.next(()=>c.getEntry(l,y)).next(v=>{const w=u.docVersions.get(y);$(w!==null),v.version.compareTo(w)<0&&(d.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=W();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function _C(t){const e=O(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function XB(t,e){const n=O(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,d)));let p=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?p=p.withResumeToken($e.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(d,p),function(v,w,_){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(h,p,c)&&a.push(n.Qr.updateTargetData(s,p))});let l=Mt(),u=W();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(yC(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(B.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(d=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function yC(t,e,n){let r=W(),i=W();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Mt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):A("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function JB(t,e){const n=O(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qo(t,e){const n=O(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Wo(t,e,n){const r=O(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Pi(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function rh(t,e,n){const r=O(t);let i=B.min(),s=W();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=O(l),h=d.rs.get(c);return h!==void 0?I.resolve(d.ns.get(h)):d.Qr.getTargetData(u,c)}(r,o,Pt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:B.min(),n?s:W())).next(a=>(EC(r,PA(e),a),{documents:a,hs:s})))}function vC(t,e){const n=O(t),r=O(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function wC(t,e){const n=O(t),r=n.ss.get(e)||B.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,iA(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(EC(n,e,i),i))}function EC(t,e,n){let r=t.ss.get(e)||B.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function ZB(t,e,n,r){const i=O(t);let s=W(),o=Mt();for(const u of n){const c=e.Ps(u.metadata.name);u.document&&(s=s.add(c));const d=e.Is(u);d.setReadTime(e.Ts(u.metadata.readTime)),o=o.insert(c,d)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await qo(i,function(c){return Pt(fa(Q.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>yC(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Qr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Qr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.cs,c.ls)).next(()=>c.cs)))}async function e3(t,e,n=W()){const r=await qo(t,Pt(rv(e.bundledQuery))),i=O(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Oe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken($e.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function dI(t,e){return`firestore_clients_${t}_${e}`}function hI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Lp(t,e){return`firestore_targets_${t}_${e}`}class ih{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new P(i.error.code,i.error.message))),o?new ih(e,n,i.state,s):(Ne("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class vl{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new P(r.error.code,r.error.message))),s?new vl(e,r.state,i):(Ne("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class sh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Yy();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=lA(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new sh(e,s):(Ne("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class cv{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new cv(n.clientId,n.onlineState):(Ne("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Sg{constructor(){this.activeTargetIds=Yy()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Mp{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new ae(j),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=dI(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new Sg),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Li();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(dI(this.persistenceKey,r));if(i){const s=sh.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Bs(e,"pending")}updateMutationState(e,n,r){this.Bs(e,n,r),this.Ls(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Lp(this.persistenceKey,e));if(r){const i=vl.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Lp(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Ls(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return A("SharedClientState","READ",e,n),n}setItem(e,n){A("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){A("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(A("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void Ne("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=Vt._e;if(s!=null)try{const a=JSON.parse(s);$(typeof a=="number"),o=a}catch(a){Ne("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Vt._e&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Bs(e,n,r){const i=new ih(this.currentUser,e,n,r),s=hI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Ls(e){const n=hI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=Lp(this.persistenceKey,e),s=new vl(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return sh.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return ih.Es(new Ge(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return vl.Es(i,n)}xs(e){return cv.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);A("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=Yy();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class IC{constructor(){this.no=new Sg,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Sg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class t3{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class fI{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vc=null;function Fp(){return Vc===null?Vc=function(){return 268435456+Math.round(2147483648*Math.random())}():Vc++,"0x"+Vc.toString(16)}/**
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
 */const n3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class r3{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const dt="WebChannelConnection";class i3 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Fp(),l=this.bo(n,r.toUriEncodedString());A("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(A("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Cn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ha}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=n3[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=Fp();return new Promise((o,a)=>{const l=new e$;l.setWithCredentials(!0),l.listenOnce(J4.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Dp.NO_ERROR:const c=l.getResponseJson();A(dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Dp.TIMEOUT:A(dt,`RPC '${e}' ${s} timed out`),a(new P(S.DEADLINE_EXCEEDED,"Request time out"));break;case Dp.HTTP_ERROR:const d=l.getStatus();if(A(dt,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const p=h==null?void 0:h.error;if(p&&p.status&&p.message){const y=function(w){const _=w.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(_)>=0?_:S.UNKNOWN}(p.status);a(new P(y,p.message))}else a(new P(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new P(S.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{A(dt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);A(dt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=Fp(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Y4(),a=X4(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");A(dt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let h=!1,p=!1;const y=new r3({lo:w=>{p?A(dt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(h||(A(dt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),h=!0),A(dt,`RPC '${e}' stream ${i} sending:`,w),d.send(w))},ho:()=>d.close()}),v=(w,_,m)=>{w.listen(_,g=>{try{m(g)}catch(E){setTimeout(()=>{throw E},0)}})};return v(d,bc.EventType.OPEN,()=>{p||A(dt,`RPC '${e}' stream ${i} transport opened.`)}),v(d,bc.EventType.CLOSE,()=>{p||(p=!0,A(dt,`RPC '${e}' stream ${i} transport closed`),y.Vo())}),v(d,bc.EventType.ERROR,w=>{p||(p=!0,Cn(dt,`RPC '${e}' stream ${i} transport errored:`,w),y.Vo(new P(S.UNAVAILABLE,"The operation could not be completed")))}),v(d,bc.EventType.MESSAGE,w=>{var _;if(!p){const m=w.data[0];$(!!m);const g=m,E=g.error||((_=g[0])===null||_===void 0?void 0:_.error);if(E){A(dt,`RPC '${e}' stream ${i} received error:`,E);const R=E.status;let C=function(J){const q=Ve[J];if(q!==void 0)return BA(q)}(R),b=E.message;C===void 0&&(C=S.INTERNAL,b="Unknown error status: "+R+" with message "+E.message),p=!0,y.Vo(new P(C,b)),d.close()}else A(dt,`RPC '${e}' stream ${i} received:`,m),y.mo(m)}}),v(a,Z4.STAT_EVENT,w=>{w.stat===w0.PROXY?A(dt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===w0.NOPROXY&&A(dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ro()},0),y}}/**
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
 */function TC(){return typeof window<"u"?window:null}function ad(){return typeof document<"u"?document:null}/**
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
 */function Qu(t){return new hB(t,!0)}/**
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
 */class dv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&A("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class SC{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new dv(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Ne(n.toString()),Ne("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new P(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return A("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class s3 extends SC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=mB(this.serializer,e),r=function(s){if(!("targetChange"in s))return B.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?B.min():o.readTime?Oe(o.readTime):B.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=vg(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Xd(l)?{documents:XA(s,l)}:{query:JA(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=WA(s,o.resumeToken);const u=_g(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(B.min())>0){a.readTime=jo(s,o.snapshotVersion.toTimestamp());const u=_g(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=_B(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=vg(this.serializer),n.removeTarget=e,this.t_(n)}}class o3 extends SC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if($(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=gB(e.writeResults,e.commitTime),r=Oe(e.commitTime);return this.listener.T_(r,n)}return $(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=vg(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>fu(this.serializer,r))};this.t_(n)}}/**
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
 */class a3 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new P(S.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,yg(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(S.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,yg(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new P(S.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class l3{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Ne(n),this.g_=!1):A("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class u3{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Ci(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=O(l);u.v_.add(4),await ga(u),u.x_.set("Unknown"),u.v_.delete(4),await Yu(u)}(this))})}),this.x_=new l3(r,i)}}async function Yu(t){if(Ci(t))for(const e of t.F_)await e(!0)}async function ga(t){for(const e of t.F_)await e(!1)}function gf(t,e){const n=O(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),pv(n)?fv(n):ya(n).Jo()&&hv(n,e))}function pu(t,e){const n=O(t),r=ya(n);n.C_.delete(e),r.Jo()&&RC(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Ci(n)&&n.x_.set("Unknown"))}function hv(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ya(t).c_(e)}function RC(t,e){t.O_.Oe(e),ya(t).l_(e)}function fv(t){t.O_=new lB({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ya(t).start(),t.x_.p_()}function pv(t){return Ci(t)&&!ya(t).Ho()&&t.C_.size>0}function Ci(t){return O(t).v_.size===0}function PC(t){t.O_=void 0}async function c3(t){t.C_.forEach((e,n)=>{hv(t,e)})}async function d3(t,e){PC(t),pv(t)?(t.x_.S_(e),fv(t)):t.x_.set("Unknown")}async function h3(t,e,n){if(t.x_.set("Online"),e instanceof qA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){A("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oh(t,r)}else if(e instanceof od?t.O_.$e(e):e instanceof jA?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(B.min()))try{const r=await _C(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken($e.EMPTY_BYTE_STRING,c.snapshotVersion)),RC(s,l);const d=new rr(c.target,l,u,c.sequenceNumber);hv(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){A("RemoteStore","Failed to raise snapshot:",r),await oh(t,r)}}async function oh(t,e,n){if(!Pi(e))throw e;t.v_.add(1),await ga(t),t.x_.set("Offline"),n||(n=()=>_C(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Yu(t)})}function AC(t,e){return e().catch(n=>oh(t,n,e))}async function _a(t){const e=O(t),n=fi(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;f3(e);)try{const i=await JB(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,p3(e,i)}catch(i){await oh(e,i)}CC(e)&&kC(e)}function f3(t){return Ci(t)&&t.D_.length<10}function p3(t,e){t.D_.push(e);const n=fi(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function CC(t){return Ci(t)&&!fi(t).Ho()&&t.D_.length>0}function kC(t){fi(t).start()}async function m3(t){fi(t).d_()}async function g3(t){const e=fi(t);for(const n of t.D_)e.I_(n.mutations)}async function _3(t,e,n){const r=t.D_.shift(),i=Zy.from(r,e,n);await AC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await _a(t)}async function y3(t,e){e&&fi(t).P_&&await async function(r,i){if(function(o){return $A(o)&&o!==S.ABORTED}(i.code)){const s=r.D_.shift();fi(r).Zo(),await AC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await _a(r)}}(t,e),CC(t)&&kC(t)}async function pI(t,e){const n=O(t);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const r=Ci(n);n.v_.add(3),await ga(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Yu(n)}async function Rg(t,e){const n=O(t);e?(n.v_.delete(2),await Yu(n)):e||(n.v_.add(2),await ga(n),n.x_.set("Unknown"))}function ya(t){return t.N_||(t.N_=function(n,r,i){const s=O(n);return s.R_(),new s3(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:c3.bind(null,t),To:d3.bind(null,t),u_:h3.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),pv(t)?fv(t):t.x_.set("Unknown")):(await t.N_.stop(),PC(t))})),t.N_}function fi(t){return t.B_||(t.B_=function(n,r,i){const s=O(n);return s.R_(),new o3(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:m3.bind(null,t),To:y3.bind(null,t),E_:g3.bind(null,t),T_:_3.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await _a(t)):(await t.B_.stop(),t.D_.length>0&&(A("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
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
 */class mv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ke,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new mv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function va(t,e){if(Ne("AsyncQueue",`${e}: ${t}`),Pi(t))return new P(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Po{constructor(e){this.comparator=e?(n,r)=>e(n,r)||D.comparator(n.key,r.key):(n,r)=>D.comparator(n.key,r.key),this.keyedMap=Xa(),this.sortedSet=new ae(this.comparator)}static emptySet(e){return new Po(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Po)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Po;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class mI{constructor(){this.L_=new ae(D.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):L():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Go{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Go(e,n,Po.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class v3{constructor(){this.q_=void 0,this.Q_=[]}}class w3{constructor(){this.queries=new Ai(e=>RA(e),qu),this.onlineState="Unknown",this.K_=new Set}}async function gv(t,e){const n=O(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new v3),i)try{s.q_=await n.onListen(r)}catch(o){const a=va(o,`Initialization of query '${Hs(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.Q_.push(e),e.U_(n.onlineState),s.q_&&e.W_(s.q_)&&yv(n)}async function _v(t,e){const n=O(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function E3(t,e){const n=O(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&yv(n)}function I3(t,e,n){const r=O(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function yv(t){t.K_.forEach(e=>{e.next()})}class vv{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Go(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class T3{constructor(e,n){this.X_=e,this.byteLength=n}ea(){return"metadata"in this.X_}}/**
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
 */class gI{constructor(e){this.serializer=e}Ps(e){return Gn(this.serializer,e)}Is(e){return e.metadata.exists?YA(this.serializer,e.document,!1):ce.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return Oe(e)}}class S3{constructor(e,n,r){this.ta=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=bC(e)}na(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.X_.namedQuery)this.queries.push(e.X_.namedQuery);else if(e.X_.documentMetadata){this.documents.push({metadata:e.X_.documentMetadata}),e.X_.documentMetadata.exists||++n;const r=Q.fromString(e.X_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.X_.document&&(this.documents[this.documents.length-1].document=e.X_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ra(e){const n=new Map,r=new gI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||W()).add(s);n.set(o,a)}}return n}async complete(){const e=await ZB(this.localStore,new gI(this.serializer),this.documents,this.ta.id),n=this.ra(this.documents);for(const r of this.queries)await e3(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ia:this.collectionGroups,sa:e}}}function bC(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class xC{constructor(e){this.key=e}}class NC{constructor(e){this.key=e}}class DC{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=W(),this.mutatedKeys=W(),this.ua=AA(e),this.ca=new Po(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new mI,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),p=Wu(this.query,d)?d:null,y=!!h&&this.mutatedKeys.has(h.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;h&&p?h.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),w=!0):this.Ia(h,p)||(r.track({type:2,doc:p}),w=!0,(l&&this.ua(p,l)>0||u&&this.ua(p,u)<0)&&(a=!0)):!h&&p?(r.track({type:0,doc:p}),w=!0):h&&!p&&(r.track({type:1,doc:h}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((c,d)=>function(p,y){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return v(p)-v(y)}(c.type,d.type)||this.ua(c.doc,d.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,u=l!==this._a;return this._a=l,o.length!==0||u?{snapshot:new Go(this.query,e.ca,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new mI,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=W(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new NC(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new xC(r))}),n}Ra(e){this.oa=e.hs,this.aa=W();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Go.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class R3{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class P3{constructor(e){this.key=e,this.ma=!1}}class A3{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Ai(a=>RA(a),qu),this.pa=new Map,this.ya=new Set,this.wa=new ae(D.comparator),this.Sa=new Map,this.ba=new ov,this.Da={},this.Ca=new Map,this.va=Is.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function C3(t,e){const n=Sv(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await qo(n.localStore,Pt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await wv(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&gf(n.remoteStore,o)}return i}async function wv(t,e,n,r,i){t.Ma=(d,h,p)=>async function(v,w,_,m){let g=w.view.ha(_);g.Xi&&(g=await rh(v.localStore,w.query,!1).then(({documents:b})=>w.view.ha(b,g)));const E=m&&m.targetChanges.get(w.targetId),R=m&&m.targetMismatches.get(w.targetId)!=null,C=w.view.applyChanges(g,v.isPrimaryClient,E,R);return Pg(v,w.targetId,C.da),C.snapshot}(t,d,h,p);const s=await rh(t.localStore,e,!0),o=new DC(e,s.hs),a=o.ha(s.documents),l=Ku.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Pg(t,n,u.da);const c=new R3(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function k3(t,e){const n=O(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!qu(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Wo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),pu(n.remoteStore,r.targetId),Ho(n,r.targetId)}).catch(Ri)):(Ho(n,r.targetId),await Wo(n.localStore,r.targetId,!0))}async function b3(t,e,n){const r=Rv(t);try{const i=await function(o,a){const l=O(o),u=ge.now(),c=a.reduce((p,y)=>p.add(y.key),W());let d,h;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Mt(),v=W();return l.os.getEntries(p,c).next(w=>{y=w,y.forEach((_,m)=>{m.isValidDocument()||(v=v.add(_))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,y)).next(w=>{d=w;const _=[];for(const m of a){const g=sB(m,d.get(m.key).overlayedDocument);g!=null&&_.push(new Pr(m.key,g,gA(g.value.mapValue),me.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,_,a)}).next(w=>{h=w;const _=w.applyToLocalDocumentSet(d,v);return l.documentOverlayCache.saveOverlays(p,w.batchId,_)})}).then(()=>({batchId:h.batchId,changes:kA(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new ae(j)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await Ar(r,i.changes),await _a(r.remoteStore)}catch(i){const s=va(i,"Failed to persist write");n.reject(s)}}async function OC(t,e){const n=O(t);try{const r=await XB(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?$(o.ma):i.removedDocuments.size>0&&($(o.ma),o.ma=!1))}),await Ar(n,r,e)}catch(r){await Ri(r)}}function _I(t,e,n){const r=O(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=O(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const h of d.Q_)h.U_(a)&&(u=!0)}),u&&yv(l)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function x3(t,e,n){const r=O(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new ae(D.comparator);o=o.insert(s,ce.newNoDocument(s,B.min()));const a=W().add(s),l=new Hu(B.min(),new Map,new ae(j),o,a);await OC(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),Tv(r)}else await Wo(r.localStore,e,!1).then(()=>Ho(r,e,n)).catch(Ri)}async function N3(t,e){const n=O(t),r=e.batch.batchId;try{const i=await YB(n.localStore,e);Iv(n,r,null),Ev(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ar(n,i)}catch(i){await Ri(i)}}async function D3(t,e,n){const r=O(t);try{const i=await function(o,a){const l=O(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>($(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);Iv(r,e,n),Ev(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ar(r,i)}catch(i){await Ri(i)}}async function O3(t,e){const n=O(t);Ci(n.remoteStore)||A("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=O(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ca.get(r)||[];i.push(e),n.Ca.set(r,i)}catch(r){const i=va(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Ev(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function Iv(t,e,n){const r=O(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Ho(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||VC(t,r)})}function VC(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(pu(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Tv(t))}function Pg(t,e,n){for(const r of n)r instanceof xC?(t.ba.addReference(r.key,e),V3(t,r)):r instanceof NC?(A("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||VC(t,r.key)):L()}function V3(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(A("SyncEngine","New document in limbo: "+n),t.ya.add(r),Tv(t))}function Tv(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new D(Q.fromString(e)),r=t.va.next();t.Sa.set(r,new P3(n)),t.wa=t.wa.insert(n,r),gf(t.remoteStore,new rr(Pt(fa(n.path)),r,"TargetPurposeLimboResolution",Vt._e))}}async function Ar(t,e,n){const r=O(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=uv.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.u_(i),await async function(l,u){const c=O(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>I.forEach(u,h=>I.forEach(h.qi,p=>c.persistence.referenceDelegate.addReference(d,h.targetId,p)).next(()=>I.forEach(h.Qi,p=>c.persistence.referenceDelegate.removeReference(d,h.targetId,p)))))}catch(d){if(!Pi(d))throw d;A("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const h=d.targetId;if(!d.fromCache){const p=c.ns.get(h),y=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(y);c.ns=c.ns.insert(h,v)}}}(r.localStore,s))}async function L3(t,e){const n=O(t);if(!n.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());const r=await gC(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new P(S.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ar(n,r.us)}}function M3(t,e){const n=O(t),r=n.Sa.get(e);if(r&&r.ma)return W().add(r.key);{let i=W();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}async function F3(t,e){const n=O(t),r=await rh(n.localStore,e.query,!0),i=e.view.Ra(r);return n.isPrimaryClient&&Pg(n,e.targetId,i.da),i}async function U3(t,e){const n=O(t);return wC(n.localStore,e).then(r=>Ar(n,r))}async function $3(t,e,n,r){const i=O(t),s=await function(a,l){const u=O(a),c=O(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",d=>c.vn(d,l).next(h=>h?u.localDocuments.getDocuments(d,h):I.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await _a(i.remoteStore):n==="acknowledged"||n==="rejected"?(Iv(i,e,r||null),Ev(i,e),function(a,l){O(O(a).mutationQueue).Mn(l)}(i.localStore,e)):L(),await Ar(i,s)):A("SyncEngine","Cannot apply mutation batch with id: "+e)}async function B3(t,e){const n=O(t);if(Sv(n),Rv(n),e===!0&&n.Fa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await yI(n,r.toArray());n.Fa=!0,await Rg(n.remoteStore,!0);for(const s of i)gf(n.remoteStore,s)}else if(e===!1&&n.Fa!==!1){const r=[];let i=Promise.resolve();n.pa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Ho(n,o),Wo(n.localStore,o,!0))),pu(n.remoteStore,o)}),await i,await yI(n,r),function(o){const a=O(o);a.Sa.forEach((l,u)=>{pu(a.remoteStore,u)}),a.ba.mr(),a.Sa=new Map,a.wa=new ae(D.comparator)}(n),n.Fa=!1,await Rg(n.remoteStore,!1)}}async function yI(t,e,n){const r=O(t),i=[],s=[];for(const o of e){let a;const l=r.pa.get(o);if(l&&l.length!==0){a=await qo(r.localStore,Pt(l[0]));for(const u of l){const c=r.ga.get(u),d=await F3(r,c);d.snapshot&&s.push(d.snapshot)}}else{const u=await vC(r.localStore,o);a=await qo(r.localStore,u),await wv(r,LC(u),o,!1,a.resumeToken)}i.push(a)}return r.fa.u_(s),i}function LC(t){return SA(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function z3(t){return function(n){return O(O(n).persistence).Li()}(O(t).localStore)}async function j3(t,e,n,r){const i=O(t);if(i.Fa)return void A("SyncEngine","Ignoring unexpected query state notification.");const s=i.pa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await wC(i.localStore,PA(s[0])),a=Hu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",$e.EMPTY_BYTE_STRING);await Ar(i,o,a);break}case"rejected":await Wo(i.localStore,e,!0),Ho(i,e,r);break;default:L()}}async function q3(t,e,n){const r=Sv(t);if(r.Fa){for(const i of e){if(r.pa.has(i)){A("SyncEngine","Adding an already active target "+i);continue}const s=await vC(r.localStore,i),o=await qo(r.localStore,s);await wv(r,LC(s),o.targetId,!1,o.resumeToken),gf(r.remoteStore,o)}for(const i of n)r.pa.has(i)&&await Wo(r.localStore,i,!1).then(()=>{pu(r.remoteStore,i),Ho(r,i)}).catch(Ri)}}function Sv(t){const e=O(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=OC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=M3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=x3.bind(null,e),e.fa.u_=E3.bind(null,e.eventManager),e.fa.xa=I3.bind(null,e.eventManager),e}function Rv(t){const e=O(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=N3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=D3.bind(null,e),e}function W3(t,e,n){const r=O(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(p,y){const v=O(p),w=Oe(y.createTime);return v.persistence.runTransaction("hasNewerBundle","readonly",_=>v.$r.getBundleMetadata(_,y.id)).then(_=>!!_&&_.createTime.compareTo(w)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(p){return{taskState:"Success",documentsLoaded:p.totalDocuments,bytesLoaded:p.totalBytes,totalDocuments:p.totalDocuments,totalBytes:p.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(bC(l));const u=new S3(l,s.localStore,o.serializer);let c=await o.Oa();for(;c;){const h=await u.na(c);h&&a._updateProgress(h),c=await o.Oa()}const d=await u.complete();return await Ar(s,d.sa,void 0),await function(p,y){const v=O(p);return v.persistence.runTransaction("Save bundle","readwrite",w=>v.$r.saveBundleMetadata(w,y))}(s.localStore,l),a._completeWith(d.progress),Promise.resolve(d.ia)}catch(l){return Cn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Ag{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Qu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return mC(this.persistence,new pC,e.initialUser,this.serializer)}createPersistence(e){return new fC(mf.Hr,this.serializer)}createSharedClientState(e){return new IC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class MC extends Ag{constructor(e,n,r){super(),this.Na=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Na.initialize(this,e),await Rv(this.Na.syncEngine),await _a(this.Na.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return mC(this.persistence,new pC,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new DB(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new g$(n,this.persistence);return new m$(e.asyncQueue,r)}createPersistence(e){const n=lv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new av(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,TC(),ad(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new IC}}class G3 extends MC{constructor(e,n){super(e,n,!1),this.Na=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Na.syncEngine;this.sharedClientState instanceof Mp&&(this.sharedClientState.syncEngine={Zs:$3.bind(null,n),Xs:j3.bind(null,n),eo:q3.bind(null,n),Li:z3.bind(null,n),Ys:U3.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await B3(this.Na.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=TC();if(!Mp.D(n))throw new P(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=lv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Mp(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Pv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_I(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=L3.bind(null,this.syncEngine),await Rg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new w3}()}createDatastore(e){const n=Qu(e.databaseInfo.databaseId),r=function(s){return new i3(s)}(e.databaseInfo);return function(s,o,a,l){return new a3(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new u3(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>_I(this.syncEngine,n,0),function(){return fI.D()?new fI:new t3}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const d=new A3(i,s,o,a,l,u);return c&&(d.Fa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=O(r);A("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await ga(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */function vI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class _f{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Ne("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class H3{constructor(e,n){this.ka=e,this.serializer=n,this.metadata=new Ke,this.buffer=new Uint8Array,this.qa=function(){return new TextDecoder("utf-8")}(),this.Qa().then(r=>{r&&r.ea()?this.metadata.resolve(r.X_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.X_)}`))},r=>this.metadata.reject(r))}close(){return this.ka.cancel()}async getMetadata(){return this.metadata.promise}async Oa(){return await this.getMetadata(),this.Qa()}async Qa(){const e=await this.Ka();if(e===null)return null;const n=this.qa.decode(e),r=Number(n);isNaN(r)&&this.$a(`length string (${n}) is not valid number`);const i=await this.Ua(r);return new T3(JSON.parse(i),e.length+r)}Wa(){return this.buffer.findIndex(e=>e===123)}async Ka(){for(;this.Wa()<0&&!await this.Ga(););if(this.buffer.length===0)return null;const e=this.Wa();e<0&&this.$a("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ua(e){for(;this.buffer.length<e;)await this.Ga()&&this.$a("Reached the end of bundle when more is expected.");const n=this.qa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}$a(e){throw this.ka.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ga(){const e=await this.ka.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class K3{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new P(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=O(i),a={documents:s.map(d=>hu(o.serializer,d))},l=await o.vo("BatchGetDocuments",o.serializer.databaseId,Q.emptyPath(),a,s.length),u=new Map;l.forEach(d=>{const h=pB(o.serializer,d);u.set(h.key.toString(),h)});const c=[];return s.forEach(d=>{const h=u.get(d.toString());$(!!h),c.push(h)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ma(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=D.fromPath(r);this.mutations.push(new Xy(i,this.precondition(i)))}),await async function(r,i){const s=O(r),o={writes:i.map(a=>fu(s.serializer,a))};await s.So("Commit",s.serializer.databaseId,Q.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw L();n=B.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new P(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(B.min())?me.exists(!1):me.updateTime(n):me.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(B.min()))throw new P(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return me.updateTime(n)}return me.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Q3{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.za=r.maxAttempts,this.jo=new dv(this.asyncQueue,"transaction_retry")}ja(){this.za-=1,this.Ha()}Ha(){this.jo.qo(async()=>{const e=new K3(this.datastore),n=this.Ja(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ya(i)}))}).catch(r=>{this.Ya(r)})})}Ja(e){try{const n=this.updateFunction(e);return!zu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Ya(e){this.za>0&&this.Za(e)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ha(),Promise.resolve()))):this.deferred.reject(e)}Za(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!$A(n)}return!1}}/**
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
 */class Y3{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ge.UNAUTHENTICATED,this.clientId=nA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{A("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(A("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ke;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=va(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ld(t,e){t.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await gC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Av(t);A("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>pI(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>pI(e.remoteStore,i)),t._onlineComponents=e}function FC(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Av(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){A("FirestoreClient","Using user provided OfflineComponentProvider");try{await ld(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!FC(n))throw n;Cn("Error using user provided cache. Falling back to memory cache: "+n),await ld(t,new Ag)}}else A("FirestoreClient","Using default OfflineComponentProvider"),await ld(t,new Ag);return t._offlineComponents}async function yf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(A("FirestoreClient","Using user provided OnlineComponentProvider"),await Cg(t,t._uninitializedComponentsProvider._online)):(A("FirestoreClient","Using default OnlineComponentProvider"),await Cg(t,new Pv))),t._onlineComponents}function UC(t){return Av(t).then(e=>e.persistence)}function Cv(t){return Av(t).then(e=>e.localStore)}function $C(t){return yf(t).then(e=>e.remoteStore)}function kv(t){return yf(t).then(e=>e.syncEngine)}function X3(t){return yf(t).then(e=>e.datastore)}async function Ko(t){const e=await yf(t),n=e.eventManager;return n.onListen=C3.bind(null,e.syncEngine),n.onUnlisten=k3.bind(null,e.syncEngine),n}function J3(t){return t.asyncQueue.enqueue(async()=>{const e=await UC(t),n=await $C(t);return e.setNetworkEnabled(!0),function(i){const s=O(i);return s.v_.delete(0),Yu(s)}(n)})}function Z3(t){return t.asyncQueue.enqueue(async()=>{const e=await UC(t),n=await $C(t);return e.setNetworkEnabled(!1),async function(i){const s=O(i);s.v_.add(0),await ga(s),s.x_.set("Offline")}(n)})}function ez(t,e){const n=new Ke;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,c){const d=O(u);return d.persistence.runTransaction("read document","readonly",h=>d.localDocuments.getDocument(h,c))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new P(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=va(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await Cv(t),e,n)),n.promise}function BC(t,e,n={}){const r=new Ke;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new _f({next:h=>{o.enqueueAndForget(()=>_v(s,d));const p=h.docs.has(a);!p&&h.fromCache?u.reject(new P(S.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&h.fromCache&&l&&l.source==="server"?u.reject(new P(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new vv(fa(a.path),c,{includeMetadataChanges:!0,Z_:!0});return gv(s,d)}(await Ko(t),t.asyncQueue,e,n,r)),r.promise}function tz(t,e){const n=new Ke;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await rh(i,s,!0),l=new DC(s,a.hs),u=l.ha(a.documents),c=l.applyChanges(u,!1);o.resolve(c.snapshot)}catch(a){const l=va(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await Cv(t),e,n)),n.promise}function zC(t,e,n={}){const r=new Ke;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new _f({next:h=>{o.enqueueAndForget(()=>_v(s,d)),h.fromCache&&l.source==="server"?u.reject(new P(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new vv(a,c,{includeMetadataChanges:!0,Z_:!0});return gv(s,d)}(await Ko(t),t.asyncQueue,e,n,r)),r.promise}function nz(t,e){const n=new _f(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){O(i).K_.add(s),s.next()}(await Ko(t),n)),()=>{n.La(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){O(i).K_.delete(s)}(await Ko(t),n))}}function rz(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?zA().encode(o):o,function(c,d){return new H3(c,d)}(function(c,d){if(c instanceof Uint8Array)return vI(c,d);if(c instanceof ArrayBuffer)return vI(new Uint8Array(c),d);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,Qu(e));t.asyncQueue.enqueueAndForget(async()=>{W3(await kv(t),i,r)})}function iz(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=O(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await Cv(t),e))}/**
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
 */function jC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const wI=new Map;/**
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
 */function bv(t,e,n){if(!n)throw new P(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qC(t,e,n,r){if(e===!0&&r===!0)throw new P(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function EI(t){if(!D.isDocumentKey(t))throw new P(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function II(t){if(D.isDocumentKey(t))throw new P(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":L()}function te(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vf(t);throw new P(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function WC(t,e){if(e<=0)throw new P(S.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class TI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new P(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new P(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new P(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new P(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new TI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new TI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new i$;switch(r.type){case"firstParty":return new l$(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new P(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wI.get(n);r&&(A("ComponentProvider","Removing Datastore"),wI.delete(n),r.terminate())}(this),Promise.resolve()}}function sz(t,e,n,r={}){var i;const s=(t=te(t,Xu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Cn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ge.MOCK_USER;else{a=m1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new P(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ge(u)}t._authCredentials=new s$(new tA(a,l))}}/**
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
 */let At=class GC{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new GC(this.firestore,e,this._query)}},we=class HC{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new HC(this.firestore,e,this._key)}},ti=class KC extends At{constructor(e,n,r){super(e,n,fa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new D(e))}withConverter(e){return new KC(this.firestore,e,this._path)}};function Ju(t,e,...n){if(t=U(t),bv("collection","path",e),t instanceof Xu){const r=Q.fromString(e,...n);return II(r),new ti(t,null,r)}{if(!(t instanceof we||t instanceof ti))throw new P(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Q.fromString(e,...n));return II(r),new ti(t.firestore,null,r)}}function oz(t,e){if(t=te(t,Xu),bv("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new P(S.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new At(t,null,function(r){return new Rr(Q.emptyPath(),r)}(e))}function Ct(t,e,...n){if(t=U(t),arguments.length===1&&(e=nA.newId()),bv("doc","path",e),t instanceof Xu){const r=Q.fromString(e,...n);return EI(r),new we(t,null,new D(r))}{if(!(t instanceof we||t instanceof ti))throw new P(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Q.fromString(e,...n));return EI(r),new we(t.firestore,t instanceof ti?t.converter:null,new D(r))}}function QC(t,e){return t=U(t),e=U(e),(t instanceof we||t instanceof ti)&&(e instanceof we||e instanceof ti)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function YC(t,e){return t=U(t),e=U(e),t instanceof At&&e instanceof At&&t.firestore===e.firestore&&qu(t._query,e._query)&&t.converter===e.converter}/**
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
 */class az{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new dv(this,"async_queue_retry"),this._u=()=>{const n=ad();n&&A("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=ad();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=ad();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new Ke;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!Pi(e))throw e;A("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ne("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const i=mv.createAndSchedule(this,e,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&L()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}function kg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class lz{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ke,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const uz=-1;let Ae=class extends Xu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new az}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||XC(this),this._firestoreClient.terminate()}};function Je(t){return t._firestoreClient||XC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function XC(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new M$(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,jC(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Y3(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function cz(t,e){ZC(t=te(t,Ae));const n=Je(t);if(n._uninitializedComponentsProvider)throw new P(S.FAILED_PRECONDITION,"SDK cache is already specified.");Cn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new Pv;return JC(n,i,new MC(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function dz(t){ZC(t=te(t,Ae));const e=Je(t);if(e._uninitializedComponentsProvider)throw new P(S.FAILED_PRECONDITION,"SDK cache is already specified.");Cn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new Pv;return JC(e,r,new G3(r,n.cacheSizeBytes))}function JC(t,e,n){const r=new Ke;return t.asyncQueue.enqueue(async()=>{try{await ld(t,n),await Cg(t,e),r.resolve()}catch(i){const s=i;if(!FC(s))throw s;Cn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function hz(t){if(t._initialized&&!t._terminated)throw new P(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ke;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!ln.D())return Promise.resolve();const i=r+"main";await ln.delete(i)}(lv(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function fz(t){return function(n){const r=new Ke;return n.asyncQueue.enqueueAndForget(async()=>O3(await kv(n),r)),r.promise}(Je(t=te(t,Ae)))}function pz(t){return J3(Je(t=te(t,Ae)))}function mz(t){return Z3(Je(t=te(t,Ae)))}function gz(t,e){const n=Je(t=te(t,Ae)),r=new lz;return rz(n,t._databaseId,e,r),r}function _z(t,e){return iz(Je(t=te(t,Ae)),e).then(n=>n?new At(t,null,n.query):null)}function ZC(t){if(t._initialized||t._terminated)throw new P(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qn($e.fromBase64String(e))}catch(n){throw new P(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qn($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let pi=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let Ns=class{constructor(e){this._methodName=e}};/**
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
 */class wf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}/**
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
 */const yz=/^__.*__$/;class vz{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new pa(e,this.data,n,this.fieldTransforms)}}class ek{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tk(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Ef{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new Ef(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.mu(e),i}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return ah(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(tk(this.du)&&yz.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class wz{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qu(e)}Su(e,n,r,i=!1){return new Ef({du:e,methodName:n,wu:r,path:pe.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ds(t){const e=t._freezeSettings(),n=Qu(t._databaseId);return new wz(t._databaseId,!!e.ignoreUndefinedProperties,n)}function If(t,e,n,r,i,s={}){const o=t.Su(s.merge||s.mergeFields?2:0,e,n,i);Mv("Data must be an object, but it was:",o,r);const a=ik(r,o);let l,u;if(s.merge)l=new Lt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=bg(e,d,n);if(!o.contains(h))throw new P(S.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);ok(c,h)||c.push(h)}l=new Lt(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new vz(new rt(a),l,u)}class Zu extends Ns{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zu}}function nk(t,e,n){return new Ef({du:3,wu:e.settings.wu,methodName:t._methodName,Vu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class xv extends Ns{_toFieldTransform(e){return new Gu(e.path,new Bo)}isEqual(e){return e instanceof xv}}class Nv extends Ns{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){const n=nk(this,e,!0),r=this.bu.map(s=>Os(s,n)),i=new ys(r);return new Gu(e.path,i)}isEqual(e){return e instanceof Nv&&zl(this.bu,e.bu)}}class Dv extends Ns{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){const n=nk(this,e,!0),r=this.bu.map(s=>Os(s,n)),i=new vs(r);return new Gu(e.path,i)}isEqual(e){return e instanceof Dv&&zl(this.bu,e.bu)}}class Ov extends Ns{constructor(e,n){super(e),this.Du=n}_toFieldTransform(e){const n=new zo(e.serializer,DA(e.serializer,this.Du));return new Gu(e.path,n)}isEqual(e){return e instanceof Ov&&this.Du===e.Du}}function Vv(t,e,n,r){const i=t.Su(1,e,n);Mv("Data must be an object, but it was:",i,r);const s=[],o=rt.empty();xs(r,(l,u)=>{const c=Fv(e,l,n);u=U(u);const d=i.fu(c);if(u instanceof Zu)s.push(c);else{const h=Os(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new Lt(s);return new ek(o,a,i.fieldTransforms)}function Lv(t,e,n,r,i,s){const o=t.Su(1,e,n),a=[bg(e,r,n)],l=[i];if(s.length%2!=0)throw new P(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(bg(e,s[h])),l.push(s[h+1]);const u=[],c=rt.empty();for(let h=a.length-1;h>=0;--h)if(!ok(u,a[h])){const p=a[h];let y=l[h];y=U(y);const v=o.fu(p);if(y instanceof Zu)u.push(p);else{const w=Os(y,v);w!=null&&(u.push(p),c.set(p,w))}}const d=new Lt(u);return new ek(c,d,o.fieldTransforms)}function rk(t,e,n,r=!1){return Os(n,t.Su(r?4:3,e))}function Os(t,e){if(sk(t=U(t)))return Mv("Unsupported field value:",e,t),ik(t,e);if(t instanceof Ns)return function(r,i){if(!tk(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Os(a,i.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=U(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return DA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ge.fromDate(r);return{timestampValue:jo(i.serializer,s)}}if(r instanceof ge){const s=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jo(i.serializer,s)}}if(r instanceof wf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qn)return{bytesValue:WA(i.serializer,r._byteString)};if(r instanceof we){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:nv(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${vf(r)}`)}(t,e)}function ik(t,e){const n={};return fA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(t,(r,i)=>{const s=Os(i,e.Ru(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function sk(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ge||t instanceof wf||t instanceof Qn||t instanceof we||t instanceof Ns)}function Mv(t,e,n){if(!sk(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=vf(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function bg(t,e,n){if((e=U(e))instanceof pi)return e._internalPath;if(typeof e=="string")return Fv(t,e);throw ah("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ez=new RegExp("[~\\*/\\[\\]]");function Fv(t,e,n){if(e.search(Ez)>=0)throw ah(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pi(...e.split("."))._internalPath}catch{throw ah(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ah(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new P(S.INVALID_ARGUMENT,a+t+l)}function ok(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class mu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Iz(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Iz extends mu{data(){return super.data()}}function Tf(t,e){return typeof e=="string"?Fv(t,e):e instanceof pi?e._internalPath:e._delegate._internalPath}/**
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
 */function ak(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uv{}class ec extends Uv{}function yn(t,e,...n){let r=[];e instanceof Uv&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Bv).length,a=s.filter(l=>l instanceof Sf).length;if(o>1||o>0&&a>0)throw new P(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Sf extends ec{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Sf(e,n,r)}_apply(e){const n=this._parse(e);return ck(e._query,n),new At(e.firestore,e.converter,gg(e._query,n))}_parse(e){const n=Ds(e.firestore);return function(s,o,a,l,u,c,d){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new P(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){RI(d,c);const p=[];for(const y of d)p.push(SI(l,s,y));h={arrayValue:{values:p}}}else h=SI(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||RI(d,c),h=rk(a,o,d,c==="in"||c==="not-in");return Y.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function $v(t,e,n){const r=e,i=Tf("where",t);return Sf._create(i,r,n)}class Bv extends Uv{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Bv(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ne.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)ck(o,l),o=gg(o,l)}(e._query,n),new At(e.firestore,e.converter,gg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class zv extends ec{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new zv(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new P(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new P(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new du(s,o)}(e._query,this._field,this._direction);return new At(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Rr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function lk(t,e="asc"){const n=e,r=Tf("orderBy",t);return zv._create(r,n)}class Rf extends ec{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Rf(e,n,r)}_apply(e){return new At(e.firestore,e.converter,Zd(e._query,this._limit,this._limitType))}}function Tz(t){return WC("limit",t),Rf._create("limit",t,"F")}function Sz(t){return WC("limitToLast",t),Rf._create("limitToLast",t,"L")}class Pf extends ec{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Pf(e,n,r)}_apply(e){const n=uk(e,this.type,this._docOrFields,this._inclusive);return new At(e.firestore,e.converter,function(i,s){return new Rr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function Rz(...t){return Pf._create("startAt",t,!0)}function Pz(...t){return Pf._create("startAfter",t,!1)}class Af extends ec{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Af(e,n,r)}_apply(e){const n=uk(e,this.type,this._docOrFields,this._inclusive);return new At(e.firestore,e.converter,function(i,s){return new Rr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function Az(...t){return Af._create("endBefore",t,!1)}function Cz(...t){return Af._create("endAt",t,!0)}function uk(t,e,n,r){if(n[0]=U(n[0]),n[0]instanceof mu)return function(s,o,a,l,u){if(!l)throw new P(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const d of Ro(s))if(d.field.isKeyField())c.push(gs(o,l.key));else{const h=l.data.field(d.field);if(cf(h))throw new P(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const p=d.field.canonicalString();throw new P(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${p}' (used as the orderBy) does not exist.`)}c.push(h)}return new hi(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ds(t.firestore);return function(o,a,l,u,c,d){const h=o.explicitOrderBy;if(c.length>h.length)throw new P(S.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const p=[];for(let y=0;y<c.length;y++){const v=c[y];if(h[y].field.isKeyField()){if(typeof v!="string")throw new P(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof v}`);if(!Qy(o)&&v.indexOf("/")!==-1)throw new P(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${v}' contains a slash.`);const w=o.path.child(Q.fromString(v));if(!D.isDocumentKey(w))throw new P(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const _=new D(w);p.push(gs(a,_))}else{const w=rk(l,u,v);p.push(w)}}return new hi(p,d)}(t._query,t.firestore._databaseId,i,e,n,r)}}function SI(t,e,n){if(typeof(n=U(n))=="string"){if(n==="")throw new P(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qy(e)&&n.indexOf("/")!==-1)throw new P(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Q.fromString(n));if(!D.isDocumentKey(r))throw new P(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return gs(t,new D(r))}if(n instanceof we)return gs(t,n._key);throw new P(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vf(n)}.`)}function RI(t,e){if(!Array.isArray(t)||t.length===0)throw new P(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ck(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new P(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new P(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class jv{convertValue(e,n="none"){switch(ms(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw L()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new wf(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(lu(e));default:return null}}convertTimestamp(e){const n=li(e);return new ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Q.fromString(e);$(nC(r));const i=new ci(r.get(1),r.get(3)),s=new D(r.popFirst(5));return i.isEqual(n)||Ne(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Cf(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class kz extends jv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,n)}}/**
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
 */class Qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let mr=class extends mu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Tf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},wl=class extends mr{data(e={}){return super.data(e)}},mi=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Qi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wl(this._firestore,this._userDataWriter,r.key,r,new Qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new wl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new wl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:bz(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function bz(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}function dk(t,e){return t instanceof mr&&e instanceof mr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof mi&&e instanceof mi&&t._firestore===e._firestore&&YC(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function qv(t){t=te(t,we);const e=te(t.firestore,Ae);return BC(Je(e),t._key).then(n=>Wv(e,t,n))}class Vs extends jv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,n)}}function xz(t){t=te(t,we);const e=te(t.firestore,Ae),n=Je(e),r=new Vs(e);return ez(n,t._key).then(i=>new mr(e,r,t._key,i,new Qi(i!==null&&i.hasLocalMutations,!0),t.converter))}function Nz(t){t=te(t,we);const e=te(t.firestore,Ae);return BC(Je(e),t._key,{source:"server"}).then(n=>Wv(e,t,n))}function hk(t){t=te(t,At);const e=te(t.firestore,Ae),n=Je(e),r=new Vs(e);return ak(t._query),zC(n,t._query).then(i=>new mi(e,r,t,i))}function Dz(t){t=te(t,At);const e=te(t.firestore,Ae),n=Je(e),r=new Vs(e);return tz(n,t._query).then(i=>new mi(e,r,t,i))}function Oz(t){t=te(t,At);const e=te(t.firestore,Ae),n=Je(e),r=new Vs(e);return zC(n,t._query,{source:"server"}).then(i=>new mi(e,r,t,i))}function PI(t,e,n){t=te(t,we);const r=te(t.firestore,Ae),i=Cf(t.converter,e,n);return tc(r,[If(Ds(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,me.none())])}function gr(t,e,n,...r){t=te(t,we);const i=te(t.firestore,Ae),s=Ds(i);let o;return o=typeof(e=U(e))=="string"||e instanceof pi?Lv(s,"updateDoc",t._key,e,n,r):Vv(s,"updateDoc",t._key,e),tc(i,[o.toMutation(t._key,me.exists(!0))])}function fk(t){return tc(te(t.firestore,Ae),[new ma(t._key,me.none())])}function Vz(t,e){const n=te(t.firestore,Ae),r=Ct(t),i=Cf(t.converter,e);return tc(n,[If(Ds(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,me.exists(!1))]).then(()=>r)}function kf(t,...e){var n,r,i;t=U(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||kg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(kg(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof we)u=te(t.firestore,Ae),c=fa(t._key.path),l={next:d=>{e[o]&&e[o](Wv(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=te(t,At);u=te(d.firestore,Ae),c=d._query;const h=new Vs(u);l={next:p=>{e[o]&&e[o](new mi(u,h,d,p))},error:e[o+1],complete:e[o+2]},ak(t._query)}return function(h,p,y,v){const w=new _f(v),_=new vv(p,w,y);return h.asyncQueue.enqueueAndForget(async()=>gv(await Ko(h),_)),()=>{w.La(),h.asyncQueue.enqueueAndForget(async()=>_v(await Ko(h),_))}}(Je(u),c,a,l)}function Lz(t,e){return nz(Je(t=te(t,Ae)),kg(e)?e:{next:e})}function tc(t,e){return function(r,i){const s=new Ke;return r.asyncQueue.enqueueAndForget(async()=>b3(await kv(r),i,s)),s.promise}(Je(t),e)}function Wv(t,e,n){const r=n.docs.get(e._key),i=new Vs(t);return new mr(t,i,e._key,r,new Qi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const Mz={maxAttempts:5};/**
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
 */let Fz=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ds(e)}set(e,n,r){this._verifyNotCommitted();const i=Ur(e,this._firestore),s=Cf(i.converter,n,r),o=If(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,me.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Ur(e,this._firestore);let o;return o=typeof(n=U(n))=="string"||n instanceof pi?Lv(this._dataReader,"WriteBatch.update",s._key,n,r,i):Vv(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,me.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ur(e,this._firestore);return this._mutations=this._mutations.concat(new ma(n._key,me.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new P(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Ur(t,e){if((t=U(t)).firestore!==e)throw new P(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let Uz=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Ds(n)}get(n){const r=Ur(n,this._firestore),i=new kz(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return L();const o=s[0];if(o.isFoundDocument())return new mu(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new mu(this._firestore,i,r._key,null,r.converter);throw L()})}set(n,r,i){const s=Ur(n,this._firestore),o=Cf(s.converter,r,i),a=If(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Ur(n,this._firestore);let a;return a=typeof(r=U(r))=="string"||r instanceof pi?Lv(this._dataReader,"Transaction.update",o._key,r,i,s):Vv(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Ur(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Ur(e,this._firestore),r=new Vs(this._firestore);return super.get(e).then(i=>new mr(this._firestore,r,n._key,i._document,new Qi(!1,!1),n.converter))}};function $z(t,e,n){t=te(t,Ae);const r=Object.assign(Object.assign({},Mz),n);return function(s){if(s.maxAttempts<1)throw new P(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new Ke;return s.asyncQueue.enqueueAndForget(async()=>{const u=await X3(s);new Q3(s.asyncQueue,u,a,o,l).ja()}),l.promise}(Je(t),i=>e(new Uz(t,i)),r)}/**
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
 */function Bz(){return new Zu("deleteField")}function zz(){return new xv("serverTimestamp")}function gu(...t){return new Nv("arrayUnion",t)}function lh(...t){return new Dv("arrayRemove",t)}function jz(t){return new Ov("increment",t)}(function(e,n=!0){(function(i){ha=i})(wr),hr(new pn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ae(new o$(r.getProvider("auth-internal")),new c$(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new P(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ci(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),dn(E0,"4.4.2",e),dn(E0,"4.4.2","esm2017")})();const qz="@firebase/firestore-compat",Wz="0.3.25";/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Gv(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new P("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function AI(){if(typeof Uint8Array>"u")throw new P("unimplemented","Uint8Arrays are not available in this environment.")}function CI(){if(!V$())throw new P("unimplemented","Blobs are unavailable in Firestore in this environment.")}let pk=class xg{constructor(e){this._delegate=e}static fromBase64String(e){return CI(),new xg(Qn.fromBase64String(e))}static fromUint8Array(e){return AI(),new xg(Qn.fromUint8Array(e))}toBase64(){return CI(),this._delegate.toBase64()}toUint8Array(){return AI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function Ng(t){return Gz(t,["next","error","complete"])}function Gz(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class Hz{enableIndexedDbPersistence(e,n){return cz(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return dz(e._delegate)}clearIndexedDbPersistence(e){return hz(e._delegate)}}class mk{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ci||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Cn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){sz(this._delegate,e,n,r)}enableNetwork(){return pz(this._delegate)}disableNetwork(){return mz(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,qC("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return fz(this._delegate)}onSnapshotsInSync(e){return Lz(this._delegate,e)}get app(){if(!this._appCompat)throw new P("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Qo(this,Ju(this._delegate,e))}catch(n){throw It(n,"collection()","Firestore.collection()")}}doc(e){try{return new un(this,Ct(this._delegate,e))}catch(n){throw It(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new wt(this,oz(this._delegate,e))}catch(n){throw It(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return $z(this._delegate,n=>e(new gk(this,n)))}batch(){return Je(this._delegate),new _k(new Fz(this._delegate,e=>tc(this._delegate,e)))}loadBundle(e){return gz(this._delegate,e)}namedQuery(e){return _z(this._delegate,e).then(n=>n?new wt(this,n):null)}}class bf extends jv{constructor(e){super(),this.firestore=e}convertBytes(e){return new pk(new Qn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return un.forKey(n,this.firestore,null)}}function Kz(t){n$(t)}class gk{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new bf(e)}get(e){const n=Yi(e);return this._delegate.get(n).then(r=>new _u(this._firestore,new mr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Yi(e);return r?(Gv("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Yi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Yi(e);return this._delegate.delete(n),this}}class _k{constructor(e){this._delegate=e}set(e,n,r){const i=Yi(e);return r?(Gv("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Yi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Yi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Ts{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new wl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new yu(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Ts.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Ts(e,new bf(e),n),i.set(n,s)),s}}Ts.INSTANCES=new WeakMap;class un{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new bf(e)}static forPath(e,n,r){if(e.length%2!==0)throw new P("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new un(n,new we(n._delegate,r,new D(e)))}static forKey(e,n,r){return new un(n,new we(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Qo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Qo(this.firestore,Ju(this._delegate,e))}catch(n){throw It(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=U(e),e instanceof we?QC(this._delegate,e):!1}set(e,n){n=Gv("DocumentReference.set",n);try{return n?PI(this._delegate,e,n):PI(this._delegate,e)}catch(r){throw It(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?gr(this._delegate,e):gr(this._delegate,e,n,...r)}catch(i){throw It(i,"updateDoc()","DocumentReference.update()")}}delete(){return fk(this._delegate)}onSnapshot(...e){const n=yk(e),r=vk(e,i=>new _u(this.firestore,new mr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return kf(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=xz(this._delegate):(e==null?void 0:e.source)==="server"?n=Nz(this._delegate):n=qv(this._delegate),n.then(r=>new _u(this.firestore,new mr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new un(this.firestore,e?this._delegate.withConverter(Ts.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function It(t,e,n){return t.message=t.message.replace(e,n),t}function yk(t){for(const e of t)if(typeof e=="object"&&!Ng(e))return e;return{}}function vk(t,e){var n,r;let i;return Ng(t[0])?i=t[0]:Ng(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class _u{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new un(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return dk(this._delegate,e._delegate)}}class yu extends _u{data(e){const n=this._delegate.data(e);return this._delegate._converter||r$(n!==void 0),n}}class wt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new bf(e)}where(e,n,r){try{return new wt(this.firestore,yn(this._delegate,$v(e,n,r)))}catch(i){throw It(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new wt(this.firestore,yn(this._delegate,lk(e,n)))}catch(r){throw It(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new wt(this.firestore,yn(this._delegate,Tz(e)))}catch(n){throw It(n,"limit()","Query.limit()")}}limitToLast(e){try{return new wt(this.firestore,yn(this._delegate,Sz(e)))}catch(n){throw It(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new wt(this.firestore,yn(this._delegate,Rz(...e)))}catch(n){throw It(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new wt(this.firestore,yn(this._delegate,Pz(...e)))}catch(n){throw It(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new wt(this.firestore,yn(this._delegate,Az(...e)))}catch(n){throw It(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new wt(this.firestore,yn(this._delegate,Cz(...e)))}catch(n){throw It(n,"endAt()","Query.endAt()")}}isEqual(e){return YC(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Dz(this._delegate):(e==null?void 0:e.source)==="server"?n=Oz(this._delegate):n=hk(this._delegate),n.then(r=>new Dg(this.firestore,new mi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=yk(e),r=vk(e,i=>new Dg(this.firestore,new mi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return kf(this._delegate,n,r)}withConverter(e){return new wt(this.firestore,e?this._delegate.withConverter(Ts.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Qz{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new yu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Dg{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new wt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new yu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new Qz(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new yu(this._firestore,r))})}isEqual(e){return dk(this._delegate,e._delegate)}}class Qo extends wt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new un(this.firestore,e):null}doc(e){try{return e===void 0?new un(this.firestore,Ct(this._delegate)):new un(this.firestore,Ct(this._delegate,e))}catch(n){throw It(n,"doc()","CollectionReference.doc()")}}add(e){return Vz(this._delegate,e).then(n=>new un(this.firestore,n))}isEqual(e){return QC(this._delegate,e._delegate)}withConverter(e){return new Qo(this.firestore,e?this._delegate.withConverter(Ts.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Yi(t){return te(t,we)}/**
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
 */class Hv{constructor(...e){this._delegate=new pi(...e)}static documentId(){return new Hv(pe.keyField().canonicalString())}isEqual(e){return e=U(e),e instanceof pi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class zi{constructor(e){this._delegate=e}static serverTimestamp(){const e=zz();return e._methodName="FieldValue.serverTimestamp",new zi(e)}static delete(){const e=Bz();return e._methodName="FieldValue.delete",new zi(e)}static arrayUnion(...e){const n=gu(...e);return n._methodName="FieldValue.arrayUnion",new zi(n)}static arrayRemove(...e){const n=lh(...e);return n._methodName="FieldValue.arrayRemove",new zi(n)}static increment(e){const n=jz(e);return n._methodName="FieldValue.increment",new zi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Yz={Firestore:mk,GeoPoint:wf,Timestamp:ge,Blob:pk,Transaction:gk,WriteBatch:_k,DocumentReference:un,DocumentSnapshot:_u,Query:wt,QueryDocumentSnapshot:yu,QuerySnapshot:Dg,CollectionReference:Qo,FieldPath:Hv,FieldValue:zi,setLogLevel:Kz,CACHE_SIZE_UNLIMITED:uz};function Xz(t,e){t.INTERNAL.registerComponent(new pn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},Yz)))}/**
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
 */function Jz(t){Xz(t,(e,n)=>new mk(e,n,new Hz)),t.registerVersion(qz,Wz)}Jz(Yn);var qs={};const Zz={apiKey:qs.REACT_APP_API_KEY,authDomain:qs.REACT_APP_AUTH_DOMAIN,projectId:qs.REACT_APP_PROJECT_ID,storageBucket:qs.REACT_APP_STORAGE_BUCKET,messagingSenderId:qs.REACT_APP_MESSAGING_SENDER_ID,appId:qs.REACT_APP_APP_ID},e6=Yn.initializeApp(Zz),ki=Yn.auth(e6),Yo=Yn.storage(),Be=Yn.firestore(),Lc=({to:t,name:e,icon:n})=>f.createElement(ii,{to:t},f.createElement("li",{className:"p-4 hover:bg-neutral-700 hover:rounded cursor-pointer font-light"},f.createElement("i",{className:n}),f.createElement("span",null,e)));var wk={exports:{}},Ek={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nc=T;function t6(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var n6=typeof Object.is=="function"?Object.is:t6,r6=nc.useSyncExternalStore,i6=nc.useRef,s6=nc.useEffect,o6=nc.useMemo,a6=nc.useDebugValue;Ek.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=i6(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=o6(function(){function l(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var y=o.value;if(i(y,p))return d=y}return d=p}if(y=d,n6(c,p))return y;var v=r(p);return i!==void 0&&i(y,v)?y:(c=p,d=v)}var u=!1,c,d,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,r,i]);var a=r6(t,s[0],s[1]);return s6(function(){o.hasValue=!0,o.value=a},[a]),a6(a),a};wk.exports=Ek;var l6=wk.exports,Kt="default"in qp?f:qp,kI=Symbol.for("react-redux-context"),bI=typeof globalThis<"u"?globalThis:{};function u6(){if(!Kt.createContext)return{};const t=bI[kI]??(bI[kI]=new Map);let e=t.get(Kt.createContext);return e||(e=Kt.createContext(null),t.set(Kt.createContext,e)),e}var gi=u6(),c6=()=>{throw new Error("uSES not initialized!")};function Kv(t=gi){return function(){return Kt.useContext(t)}}var Ik=Kv(),Tk=c6,d6=t=>{Tk=t},h6=(t,e)=>t===e;function f6(t=gi){const e=t===gi?Ik:Kv(t),n=(r,i={})=>{const{equalityFn:s=h6,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=e();Kt.useRef(!0);const h=Kt.useCallback({[r.name](y){return r(y)}}[r.name],[r,c,o.stabilityCheck]),p=Tk(l.addNestedSub,a.getState,u||a.getState,h,s);return Kt.useDebugValue(p),p};return Object.assign(n,{withTypes:()=>n}),n}var ze=f6();function p6(t){t()}function m6(){let t=null,e=null;return{clear(){t=null,e=null},notify(){p6(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var xI={notify(){},get:()=>[]};function g6(t,e){let n,r=xI,i=0,s=!1;function o(v){c();const w=r.subscribe(v);let _=!1;return()=>{_||(_=!0,w(),d())}}function a(){r.notify()}function l(){y.onStateChange&&y.onStateChange()}function u(){return s}function c(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=m6())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=xI)}function h(){s||(s=!0,c())}function p(){s&&(s=!1,d())}const y={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:h,tryUnsubscribe:p,getListeners:()=>r};return y}var _6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",y6=_6?Kt.useLayoutEffect:Kt.useEffect;function v6({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=Kt.useMemo(()=>{const u=g6(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=Kt.useMemo(()=>t.getState(),[t]);y6(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||gi;return Kt.createElement(l.Provider,{value:o},n)}var w6=v6;function Sk(t=gi){const e=t===gi?Ik:Kv(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var E6=Sk();function I6(t=gi){const e=t===gi?E6:Sk(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Cr=I6();d6(l6.useSyncExternalStoreWithSelector);function Ze(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var T6=typeof Symbol=="function"&&Symbol.observable||"@@observable",NI=T6,Up=()=>Math.random().toString(36).substring(7).split("").join("."),S6={INIT:`@@redux/INIT${Up()}`,REPLACE:`@@redux/REPLACE${Up()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Up()}`},uh=S6;function Qv(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function Rk(t,e,n){if(typeof t!="function")throw new Error(Ze(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ze(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ze(1));return n(Rk)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((w,_)=>{o.set(_,w)}))}function c(){if(l)throw new Error(Ze(3));return i}function d(w){if(typeof w!="function")throw new Error(Ze(4));if(l)throw new Error(Ze(5));let _=!0;u();const m=a++;return o.set(m,w),function(){if(_){if(l)throw new Error(Ze(6));_=!1,u(),o.delete(m),s=null}}}function h(w){if(!Qv(w))throw new Error(Ze(7));if(typeof w.type>"u")throw new Error(Ze(8));if(typeof w.type!="string")throw new Error(Ze(17));if(l)throw new Error(Ze(9));try{l=!0,i=r(i,w)}finally{l=!1}return(s=o).forEach(m=>{m()}),w}function p(w){if(typeof w!="function")throw new Error(Ze(10));r=w,h({type:uh.REPLACE})}function y(){const w=d;return{subscribe(_){if(typeof _!="object"||_===null)throw new Error(Ze(11));function m(){const E=_;E.next&&E.next(c())}return m(),{unsubscribe:w(m)}},[NI](){return this}}}return h({type:uh.INIT}),{dispatch:h,subscribe:d,getState:c,replaceReducer:p,[NI]:y}}function R6(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:uh.INIT})>"u")throw new Error(Ze(12));if(typeof n(void 0,{type:uh.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ze(13))})}function P6(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{R6(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],h=n[d],p=o[d],y=h(p,a);if(typeof y>"u")throw a&&a.type,new Error(Ze(14));u[d]=y,l=l||y!==p}return l=l||r.length!==Object.keys(o).length,l?u:o}}function ch(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function A6(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(Ze(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=t.map(l=>l(o));return s=ch(...a)(i.dispatch),{...i,dispatch:s}}}function C6(t){return Qv(t)&&"type"in t&&typeof t.type=="string"}var Pk=Symbol.for("immer-nothing"),DI=Symbol.for("immer-draftable"),Zt=Symbol.for("immer-state");function In(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Xo=Object.getPrototypeOf;function _i(t){return!!t&&!!t[Zt]}function _r(t){var e;return t?Ak(t)||Array.isArray(t)||!!t[DI]||!!((e=t.constructor)!=null&&e[DI])||Nf(t)||Df(t):!1}var k6=Object.prototype.constructor.toString();function Ak(t){if(!t||typeof t!="object")return!1;const e=Xo(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===k6}function vu(t,e){xf(t)===0?Object.entries(t).forEach(([n,r])=>{e(n,r,t)}):t.forEach((n,r)=>e(r,n,t))}function xf(t){const e=t[Zt];return e?e.type_:Array.isArray(t)?1:Nf(t)?2:Df(t)?3:0}function Og(t,e){return xf(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function Ck(t,e,n){const r=xf(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function b6(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Nf(t){return t instanceof Map}function Df(t){return t instanceof Set}function Mi(t){return t.copy_||t.base_}function Vg(t,e){if(Nf(t))return new Map(t);if(Df(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&Ak(t))return Xo(t)?{...t}:Object.assign(Object.create(null),t);const n=Object.getOwnPropertyDescriptors(t);delete n[Zt];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create(Xo(t),n)}function Yv(t,e=!1){return Of(t)||_i(t)||!_r(t)||(xf(t)>1&&(t.set=t.add=t.clear=t.delete=x6),Object.freeze(t),e&&vu(t,(n,r)=>Yv(r,!0))),t}function x6(){In(2)}function Of(t){return Object.isFrozen(t)}var N6={};function Ss(t){const e=N6[t];return e||In(0,t),e}var wu;function kk(){return wu}function D6(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function OI(t,e){e&&(Ss("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Lg(t){Mg(t),t.drafts_.forEach(O6),t.drafts_=null}function Mg(t){t===wu&&(wu=t.parent_)}function VI(t){return wu=D6(wu,t)}function O6(t){const e=t[Zt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function LI(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Zt].modified_&&(Lg(e),In(4)),_r(t)&&(t=dh(e,t),e.parent_||hh(e,t)),e.patches_&&Ss("Patches").generateReplacementPatches_(n[Zt].base_,t,e.patches_,e.inversePatches_)):t=dh(e,n,[]),Lg(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==Pk?t:void 0}function dh(t,e,n){if(Of(e))return e;const r=e[Zt];if(!r)return vu(e,(i,s)=>MI(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return hh(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),vu(s,(a,l)=>MI(t,r,i,a,l,n,o)),hh(t,i,!1),n&&t.patches_&&Ss("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function MI(t,e,n,r,i,s,o){if(_i(i)){const a=s&&e&&e.type_!==3&&!Og(e.assigned_,r)?s.concat(r):void 0,l=dh(t,i,a);if(Ck(n,r,l),_i(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(_r(i)&&!Of(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;dh(t,i),(!e||!e.scope_.parent_)&&hh(t,i)}}function hh(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Yv(e,n)}function V6(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:kk(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=Xv;n&&(i=[r],s=Eu);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var Xv={get(t,e){if(e===Zt)return t;const n=Mi(t);if(!Og(n,e))return L6(t,n,e);const r=n[e];return t.finalized_||!_r(r)?r:r===$p(t.base_,e)?(Bp(t),t.copy_[e]=Ug(r,t)):r},has(t,e){return e in Mi(t)},ownKeys(t){return Reflect.ownKeys(Mi(t))},set(t,e,n){const r=bk(Mi(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=$p(Mi(t),e),s=i==null?void 0:i[Zt];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(b6(n,i)&&(n!==void 0||Og(t.base_,e)))return!0;Bp(t),Fg(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return $p(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Bp(t),Fg(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Mi(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){In(11)},getPrototypeOf(t){return Xo(t.base_)},setPrototypeOf(){In(12)}},Eu={};vu(Xv,(t,e)=>{Eu[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Eu.deleteProperty=function(t,e){return Eu.set.call(this,t,e,void 0)};Eu.set=function(t,e,n){return Xv.set.call(this,t[0],e,n,t[0])};function $p(t,e){const n=t[Zt];return(n?Mi(n):t)[e]}function L6(t,e,n){var i;const r=bk(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function bk(t,e){if(!(e in t))return;let n=Xo(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Xo(n)}}function Fg(t){t.modified_||(t.modified_=!0,t.parent_&&Fg(t.parent_))}function Bp(t){t.copy_||(t.copy_=Vg(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var M6=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...u){return o.produce(l,c=>n.call(this,c,...u))}}typeof n!="function"&&In(6),r!==void 0&&typeof r!="function"&&In(7);let i;if(_r(e)){const s=VI(this),o=Ug(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Lg(s):Mg(s)}return OI(s,r),LI(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===Pk&&(i=void 0),this.autoFreeze_&&Yv(i,!0),r){const s=[],o=[];Ss("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else In(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){_r(t)||In(8),_i(t)&&(t=xk(t));const e=VI(this),n=Ug(t,void 0);return n[Zt].isManual_=!0,Mg(e),n}finishDraft(t,e){const n=t&&t[Zt];(!n||!n.isManual_)&&In(9);const{scope_:r}=n;return OI(r,e),LI(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=Ss("Patches").applyPatches_;return _i(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Ug(t,e){const n=Nf(t)?Ss("MapSet").proxyMap_(t,e):Df(t)?Ss("MapSet").proxySet_(t,e):V6(t,e);return(e?e.scope_:kk()).drafts_.push(n),n}function xk(t){return _i(t)||In(10,t),Nk(t)}function Nk(t){if(!_r(t)||Of(t))return t;const e=t[Zt];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Vg(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Vg(t,!0);return vu(n,(r,i)=>{Ck(n,r,Nk(i))}),e&&(e.finalized_=!1),n}var en=new M6,Dk=en.produce;en.produceWithPatches.bind(en);en.setAutoFreeze.bind(en);en.setUseStrictShallowCopy.bind(en);en.applyPatches.bind(en);en.createDraft.bind(en);en.finishDraft.bind(en);function F6(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function U6(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function $6(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var FI=t=>Array.isArray(t)?t:[t];function B6(t){const e=Array.isArray(t[0])?t[0]:t;return $6(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function z6(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var j6=class{constructor(t){this.value=t}deref(){return this.value}},q6=typeof WeakRef<"u"?WeakRef:j6,W6=0,UI=1;function Mc(){return{s:W6,v:void 0,o:null,p:null}}function Jv(t,e={}){let n=Mc();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var d;let a=n;const{length:l}=arguments;for(let h=0,p=l;h<p;h++){const y=arguments[h];if(typeof y=="function"||typeof y=="object"&&y!==null){let v=a.o;v===null&&(a.o=v=new WeakMap);const w=v.get(y);w===void 0?(a=Mc(),v.set(y,a)):a=w}else{let v=a.p;v===null&&(a.p=v=new Map);const w=v.get(y);w===void 0?(a=Mc(),v.set(y,a)):a=w}}const u=a;let c;if(a.s===UI?c=a.v:(c=t.apply(null,arguments),s++),u.s=UI,r){const h=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;h!=null&&r(h,c)&&(c=h,s!==0&&s--),i=typeof c=="object"&&c!==null||typeof c=="function"?new q6(c):c}return u.v=c,c}return o.clearCache=()=>{n=Mc(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function Ok(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),F6(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...l},{memoize:d,memoizeOptions:h=[],argsMemoize:p=Jv,argsMemoizeOptions:y=[],devModeChecks:v={}}=c,w=FI(h),_=FI(y),m=B6(i),g=d(function(){return s++,u.apply(null,arguments)},...w),E=p(function(){o++;const C=z6(m,arguments);return a=g.apply(null,C),a},..._);return Object.assign(E,{resultFunc:u,memoizedResultFunc:g,dependencies:m,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:d,argsMemoize:p})};return Object.assign(r,{withTypes:()=>r}),r}var G6=Ok(Jv),H6=Object.assign((t,e=G6)=>{U6(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>H6});function Vk(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var K6=Vk(),Q6=Vk,Y6=(...t)=>{const e=Ok(...t),n=Object.assign((...r)=>{const i=e(...r),s=(o,...a)=>i(_i(o)?xk(o):o,...a);return Object.assign(s,i),s},{withTypes:()=>n});return n};Y6(Jv);var X6=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ch:ch.apply(null,arguments)};function Jo(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(Bt(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>C6(r)&&r.type===t,n}var Lk=class el extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,el.prototype)}static get[Symbol.species](){return el}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new el(...e[0].concat(this)):new el(...e.concat(this))}};function $I(t){return _r(t)?Dk(t,()=>{}):t}function BI(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(Bt(10));const r=n.insert(e,t);return t.set(e,r),r}function J6(t){return typeof t=="boolean"}var Z6=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new Lk;return n&&(J6(n)?o.push(K6):o.push(Q6(n.extraArgument))),o},ej="RTK_autoBatch",Mk=t=>e=>{setTimeout(e,t)},tj=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Mk(10),nj=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?tj:t.type==="callback"?t.queueNotification:Mk(t.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),h=r.subscribe(d);return a.add(c),()=>{h(),a.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[ej]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},rj=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new Lk(t);return r&&i.push(nj(typeof r=="object"?r:void 0)),i},ij=!0;function sj(t){const e=Z6(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(Qv(n))a=P6(n);else throw new Error(Bt(1));let l;typeof r=="function"?l=r(e):l=e();let u=ch;i&&(u=X6({trace:!ij,...typeof i=="object"&&i}));const c=A6(...l),d=rj(c);let h=typeof o=="function"?o(d):d();const p=u(...h);return Rk(a,s,p)}function Fk(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(Bt(28));if(a in e)throw new Error(Bt(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function oj(t){return typeof t=="function"}function aj(t,e){let[n,r,i]=Fk(e),s;if(oj(t))s=()=>$I(t());else{const a=$I(t);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(_i(c)){const p=d(c,l);return p===void 0?c:p}else{if(_r(c))return Dk(c,h=>d(h,l));{const h=d(c,l);if(h===void 0){if(c===null)return c;throw new Error(Bt(9))}return h}}return c},a)}return o.getInitialState=s,o}var lj="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",uj=(t=21)=>{let e="",n=t;for(;n--;)e+=lj[Math.random()*64|0];return e},cj=Symbol.for("rtk-slice-createasyncthunk");function dj(t,e){return`${t}/${e}`}function hj({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[cj];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(Bt(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(pj()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(g,E){const R=typeof g=="string"?g:g.type;if(!R)throw new Error(Bt(12));if(R in u.sliceCaseReducersByType)throw new Error(Bt(13));return u.sliceCaseReducersByType[R]=E,c},addMatcher(g,E){return u.sliceMatchers.push({matcher:g,reducer:E}),c},exposeAction(g,E){return u.actionCreators[g]=E,c},exposeCaseReducer(g,E){return u.sliceCaseReducersByName[g]=E,c}};l.forEach(g=>{const E=a[g],R={reducerName:g,type:dj(s,g),createNotation:typeof i.reducers=="function"};gj(E)?yj(R,E,c,e):mj(R,E,c)});function d(){const[g={},E=[],R=void 0]=typeof i.extraReducers=="function"?Fk(i.extraReducers):[i.extraReducers],C={...g,...u.sliceCaseReducersByType};return aj(i.initialState,b=>{for(let N in C)b.addCase(N,C[N]);for(let N of u.sliceMatchers)b.addMatcher(N.matcher,N.reducer);for(let N of E)b.addMatcher(N.matcher,N.reducer);R&&b.addDefaultCase(R)})}const h=g=>g,p=new Map;let y;function v(g,E){return y||(y=d()),y(g,E)}function w(){return y||(y=d()),y.getInitialState()}function _(g,E=!1){function R(b){let N=b[g];return typeof N>"u"&&E&&(N=w()),N}function C(b=h){const N=BI(p,E,{insert:()=>new WeakMap});return BI(N,b,{insert:()=>{const J={};for(const[q,zt]of Object.entries(i.selectors??{}))J[q]=fj(zt,b,w,E);return J}})}return{reducerPath:g,getSelectors:C,get selectors(){return C(R)},selectSlice:R}}const m={name:s,reducer:v,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:w,..._(o),injectInto(g,{reducerPath:E,...R}={}){const C=E??o;return g.inject({reducerPath:C,reducer:v},R),{...m,..._(C,!0)}}};return m}}function fj(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var Zv=hj();function pj(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function mj({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!_j(r))throw new Error(Bt(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?Jo(t,o):Jo(t))}function gj(t){return t._reducerDefinitionType==="asyncThunk"}function _j(t){return t._reducerDefinitionType==="reducerWithPrepare"}function yj({type:t,reducerName:e},n,r,i){if(!i)throw new Error(Bt(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:c}=n,d=i(t,s,c);r.exposeAction(e,d),o&&r.addCase(d.fulfilled,o),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(e,{fulfilled:o||Fc,pending:a||Fc,rejected:l||Fc,settled:u||Fc})}function Fc(){}var vj=(t,e)=>{if(typeof t!="function")throw new Error(Bt(32))},ew="listenerMiddleware",wj=t=>{let{type:e,actionCreator:n,matcher:r,predicate:i,effect:s}=t;if(e)i=Jo(e).match;else if(n)e=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(Bt(21));return vj(s),{predicate:i,type:e,effect:s}},Ej=Object.assign(t=>{const{type:e,predicate:n,effect:r}=wj(t);return{id:uj(),effect:r,type:e,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(Bt(22))}}},{withTypes:()=>Ej}),Ij=Object.assign(Jo(`${ew}/add`),{withTypes:()=>Ij});Jo(`${ew}/removeAll`);var Tj=Object.assign(Jo(`${ew}/remove`),{withTypes:()=>Tj});function Bt(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const Sj=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{uid:"",email:"",username:"",bio:"",profilePicURL:"",followers:[],following:[],posts:[],createdAt:"",updatedAt:"",isAuthenticated:!1},Uk=Zv({name:"user",initialState:Sj,reducers:{setUser:(t,e)=>{t.uid=e.payload.uid,t.email=e.payload.email,t.token=e.payload.token,t.username=e.payload.username,t.bio=e.payload.bio,t.profilePicURL=e.payload.profilePicURL,t.followers=e.payload.followers,t.following=e.payload.following,t.posts=e.payload.posts,t.createdAt=e.payload.createdAt,t.updatedAt=e.payload.updatedAt,t.isAuthenticated=!0,localStorage.setItem("user",JSON.stringify(t))},removeUser:t=>{t.uid="",t.email="",t.token="",t.username="",t.bio="",t.profilePicURL="",t.followers="",t.following="",t.posts="",t.createdAt="",t.updatedAt="",t.isAuthenticated=!1,localStorage.removeItem("user")}}}),{setUser:Vf,removeUser:Rj}=Uk.actions,Pj=Uk.reducer,Aj=()=>{const[t,e]=T.useState(null),n=Cr();return{handleLogout:async()=>{try{await ki.signOut(),n(Rj())}catch(i){e(i)}},error:t}},Cj=()=>{const{handleLogout:t}=Aj();return f.createElement("button",{className:"mb-10 mt-auto p-4 text-left w-full hover:bg-neutral-700 hover:text-white hover:rounded font-normal",onClick:t},f.createElement("i",{className:"fas fa-sign-out-alt mr-3"}),"Logout")},kj=()=>{const t=ze(e=>e.user);return f.createElement("div",{className:"bg-black text-white w-60 h-screen flex flex-col p-5"},f.createElement("img",{className:"p-4 mt-5",src:"",alt:"HH99"}),f.createElement("ul",{className:"flex-1 overflow-y-auto mt-5 space-y-1"},f.createElement(Lc,{to:"/auth",name:"Home",icon:"fas fa-home mr-3"}),f.createElement(Lc,{to:"/users",name:"Search User",icon:"fas fa-search mr-3"}),f.createElement(Lc,{to:"/create",name:"Create",icon:"fas fa-plus-circle mr-3"}),f.createElement(Lc,{to:`/${t.email}`,name:"My Page",icon:"fas fa-user mr-3"})),f.createElement(Cj,null))},bj=({children:t})=>{const{pathname:e}=As(),[n]=cy(ki),r=e!=="/auth"&&n;return f.createElement("div",{className:"flex bg-gray-100 h-full"},r?f.createElement(kj,null):null,f.createElement("div",{className:"flex-1"},t))},xj={profile:null,followers:[],following:[]},$k=Zv({name:"userProfile",initialState:xj,reducers:{setUserProfile:(t,e)=>{t.profile=e.payload},addPost:(t,e)=>{t.profile.posts.push(e.payload.id)},deletePost:(t,e)=>{t.profile.posts=t.profile.posts.filter(n=>n!==e.payload.postId)}}}),{setUserProfile:Ao,addPost:H5,deletePost:K5}=$k.actions,Nj=$k.reducer,Bk=t=>{const[e,n]=T.useState(!0),[r,i]=T.useState([]),s=Cr();return T.useEffect(()=>{(async()=>{n(!0),Ao(null);try{const a=await qv(Ct(Be,"users",t));a.exists()&&(i(a.data()),s(Ao(a.data())))}catch(a){console.log("Error",a.message)}finally{n(!1)}})()},[t]),{isLoading:e,profile:r,setUserProfile:Ao}},Lf=t=>{const[e,n]=T.useState(!1),[r,i]=T.useState(!1),s=Cr(),o=ze(l=>l.user),a=async()=>{n(!0);try{const l=Ct(Be,"users",o.uid),u=Ct(Be,"users",t);await gr(l,{following:r?lh(t):gu(t)}),await gr(u,{followers:r?lh(o.uid):gu(o.uid)}),s(Vf({...o,following:r?o.following.filter(c=>c!==t):[...o.following,t]})),i(c=>!c)}catch(l){console.log("Error",l.message,"error")}finally{n(!1)}};return T.useEffect(()=>{if(o){const l=o.following.includes(t);i(l)}},[o,t,i]),{isUpdating:e,isFollowing:r,handleFollowUser:a}},tw=t=>{const e=Date.now(),n=Math.floor((e-t)/1e3);return n<60?`${n}초 전`:n<3600?`${Math.floor(n/60)}분 전`:n<86400?`${Math.floor(n/3600)}시간 전`:n<604800?`${Math.floor(n/86400)}일 전`:`${Math.floor(n/604800)}주 전`},Dj=({post:t,creatorProfile:e})=>{const n=ze(o=>o.user),{handleFollowUser:r,isFollowing:i,isUpdating:s}=Lf(t.createdBy);return f.createElement("div",{className:"flex justify-between items-center w-full mt-3 mb-4"},f.createElement("div",{className:"flex items-center space-x-2"},e?f.createElement(ii,{to:`/${e.email}`},e.profilePicURL?f.createElement("img",{src:e.profilePicURL,alt:"user profile pic",className:"w-10 h-10 rounded-full"}):f.createElement("img",{src:"./user-solid.svg",alt:"profile",className:"w-10 h-10 rounded-full border border-gray-300 p-1"})):f.createElement("div",{className:"animate-pulse w-8 h-8 rounded-full bg-gray-200"}),f.createElement("div",{className:"flex flex-col text-xs font-bold space-y-1"},e?f.createElement(ii,{to:`/${e.email}`},e.username):f.createElement("div",{className:"animate-pulse w-20 h-4 bg-gray-200"}),f.createElement("span",{className:"text-gray-500"},"• ",tw(t.createdAt)))),f.createElement("div",null,f.createElement("button",{className:"bg-transparent text-blue-500 font-bold text-xs hover:text-white transition duration-200 ease-in-out",onClick:r,disabled:s},n.uid!==t.createdBy?i?"Unfollow":"Follow":f.createElement("i",{className:"fa fa-check"}))))},Oj=()=>f.createElement("div",{className:"flex gap-4 w-full items-center"},f.createElement("div",{className:"h-10 w-10 rounded-full bg-gray-200 animate-pulse"}),f.createElement("div",{className:"flex gap-1 flex-col"},f.createElement("div",{className:"h-2 w-24 bg-gray-200 animate-pulse"}),f.createElement("div",{className:"h-2 w-12 bg-gray-200 animate-pulse"}))),Vj=()=>{const[t,e]=T.useState(!1);return{isDeleting:t,handleDeleteComment:async(r,i)=>{if(!t){e(!0);try{const s=Be.collection("posts").doc(r),o=await s.get();if(o.exists){const l=o.data().comments.filter(u=>u.commentId!==i);await s.update({comments:l})}else console.error("해당 포스트 없음")}catch(s){console.error("Error",s)}finally{e(!1)}}}}};var zk={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},zI=f.createContext&&f.createContext(zk),Lj=["attr","size","title"];function Mj(t,e){if(t==null)return{};var n=Fj(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Fj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function fh(){return fh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fh.apply(this,arguments)}function jI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ph(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?jI(Object(n),!0).forEach(function(r){Uj(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):jI(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Uj(t,e,n){return e=$j(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $j(t){var e=Bj(t,"string");return typeof e=="symbol"?e:String(e)}function Bj(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function jk(t){return t&&t.map((e,n)=>f.createElement(e.tag,ph({key:n},e.attr),jk(e.child)))}function kr(t){return e=>f.createElement(zj,fh({attr:ph({},t.attr)},e),jk(t.child))}function zj(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=Mj(t,Lj),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),f.createElement("svg",fh({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:ph(ph({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&f.createElement("title",null,s),t.children)};return zI!==void 0?f.createElement(zI.Consumer,null,n=>e(n)):e(zk)}function qk(t){return kr({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(t)}function Wk(t){return kr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"},child:[]}]})(t)}const jj=()=>({updateComment:async(e,n,r)=>{try{const i=Ct(Be,"posts",e),a=(await qv(i)).data().comments.map(l=>l.commentId===n?{...l,comment:r}:l);await gr(i,{comments:a})}catch(i){console.error("Error updating comment:",i)}}}),Gk=({comment:t})=>{const{profile:e,isLoading:n}=Bk(t.createdBy),{isDeleting:r,handleDeleteComment:i}=Vj(),s=ze(y=>y.user),[o,a]=T.useState(!1),[l,u]=T.useState(t.comment),{updateComment:c}=jj(),d=()=>{i(t.postId,t.commentId)},h=()=>{a(!0)},p=()=>{console.log("Save edited comment:",l),c(t.postId,t.commentId,l),a(!1)};return n?f.createElement(Oj,null):f.createElement("div",{className:"flex gap-4 w-full justify-between items-start"},f.createElement("div",{className:"flex-grow"},f.createElement("div",{className:"flex items-start"},f.createElement(ii,{to:`/${e.email}`},e.profilePicURL?f.createElement("img",{src:e.profilePicURL,alt:"profile",className:"w-8 h-8 rounded-full border border-gray-300 p-1"}):f.createElement("img",{src:"./user-solid.svg",alt:"profile",className:"w-8 h-8 rounded-full border border-gray-300 p-1"})),f.createElement("div",{className:"flex flex-col justify-items-start ml-3 w-full"},f.createElement("div",{className:"flex gap-2 items-center"},f.createElement(ii,{to:`/${e.email}`},f.createElement("p",{className:"font-bold text-sm"},e.username)),o?f.createElement("input",{type:"text",placeholder:"Comment",className:"border-b border-gray-300 focus:outline-none px-1 py-2 w-4/5",value:l,onChange:y=>u(y.target.value)}):f.createElement("p",{className:"text-base"},t.comment)),f.createElement("p",{className:"text-sm text-gray-500 text-left"},tw(t.createdAt))))),s&&s.uid===t.createdBy&&f.createElement("div",{className:"flex items-center"},o?f.createElement("button",{onClick:p,className:"text-blue-600 hover:bg-white-300 hover:text-white-300 rounded-full p-1 mr-2"},"Save"):f.createElement("button",{onClick:h,className:"text-blue-600 hover:bg-white-300 hover:text-white-300 rounded-full p-1 mr-2"},f.createElement(qk,{size:16})),f.createElement("button",{onClick:d,disabled:r,className:"text-red-600 hover:bg-white-300 hover:text-white-300 rounded-full p-1"},f.createElement(Wk,{size:16}))))},Hk=()=>{const[t,e]=T.useState(!1),n=ze(i=>i.user);return{isCommenting:t,handlePostComment:async(i,s)=>{if(t||!n)return;e(!0);const l={commentId:Ct(Be.collection("posts").doc(i).collection("comments")).id,comment:s,createdAt:Date.now(),createdBy:n.uid,postId:i};try{await gr(Ct(Be,"posts",i),{comments:gu(l)})}catch(u){console.log(u)}finally{e(!1)}}}},qj=({isOpen:t,onClose:e,post:n})=>{const{handlePostComment:r,isCommenting:i}=Hk(),s=T.useRef(null),o=T.useRef(null),a=async l=>{l.preventDefault(),await r(n.id,s.current.value),s.current.value=""};return T.useEffect(()=>{t&&setTimeout(()=>{var l;(l=o.current)==null||l.scrollTo(0,o.current.scrollHeight)},100)},[t]),t?f.createElement("div",{className:`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${!t&&"hidden"}`,onClick:e},f.createElement("div",{className:"relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white",onClick:l=>l.stopPropagation()},f.createElement("div",{className:"mt-3 text-center"},f.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900"},"Comments"),f.createElement("div",{className:"mt-2"},f.createElement("div",{className:"flex flex-col max-h-60 overflow-y-auto",ref:o},n.comments&&n.comments.map((l,u)=>f.createElement(Gk,{key:u,comment:l}))),f.createElement("form",{onSubmit:a,className:"mt-4"},f.createElement("input",{type:"text",placeholder:"Comment",className:"border-b border-gray-300 focus:outline-none w-full px-1 py-2",ref:s}),f.createElement("div",{className:"mt-4 flex justify-end"},f.createElement("button",{type:"submit",className:`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${i?"bg-gray-500":"bg-blue-500 hover:bg-blue-700"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`,disabled:i},"Post"))))))):null},Wj=t=>{const e=ze(c=>c.user),n=t.likes||[],[r,i]=T.useState(!1),[s,o]=T.useState(n.length),[a,l]=T.useState(n.includes(e==null?void 0:e.uid));return T.useEffect(()=>{},[s,a]),{isLiked:a,likes:s,handleLike:async()=>{if(!r&&e){i(!0);try{const c=Ct(Be,"posts",t.id);console.log(e.uid),await gr(c,{likes:a?lh(e.uid):gu(e.uid)}),l(!a),o(a?s-1:s+1)}catch(c){console.log(c)}finally{i(!1)}}},isUpdating:r}},Kk=({post:t,creatorProfile:e,isProfilePage:n})=>{const r=ze(_=>_.user),{isCommenting:i,handlePostComment:s}=Hk(),[o,a]=T.useState(""),{handleLike:l,isLiked:u,likes:c}=Wj(t),d=T.useRef(null),[h,p]=T.useState(!1),[y,v]=T.useState(!1),w=async _=>{_.preventDefault(),await s(t.id,d.current.value),d.current.value="",a("")};return f.createElement("div",{className:"mt-auto"},f.createElement("div",{className:"flex items-center gap-4 pt-0 mb-2 mt-4"},f.createElement("div",{onClick:l,className:"cursor-pointer text-2xl"},u?f.createElement("i",{className:"fas fa-heart text-red-500 cursor-pointer"}):f.createElement("i",{className:"far fa-heart cursor-pointer"})),f.createElement("div",{className:"cursor-pointer text-2xl",onClick:()=>p(!h)},f.createElement("i",{className:"far fa-comment cursor-pointer"}))),f.createElement("div",{className:"font-semibold text-sm"},c," likes"),f.createElement("p",null,t.content),f.createElement("div",{className:"text-sm text-gray-500"},tw(t.createdAt)),!n&&f.createElement(f.Fragment,null,f.createElement("div",{className:"font-semibold text-sm"},e==null?void 0:e.username," ",f.createElement("span",{className:"font-normal"},t.caption)),t.comments&&t.comments.length>0?f.createElement("div",{className:"text-sm text-gray-500 cursor-pointer",onClick:()=>v(!y)},"View all ",t.comments.length," comments"):f.createElement("div",{className:"text-sm text-gray-500 cursor-pointer",onClick:()=>v(!y)},"No comments yet"),h&&f.createElement(qj,{isOpen:h,onClose:()=>p(!1),post:t})),r&&y&&f.createElement("div",{className:"flex flex-col items-start justify-between space-y-4 bg-gray-100 border rounded p-4 my-4"},t.comments&&t.comments.map((_,m)=>f.createElement(Gk,{key:m,comment:_})),f.createElement("div",{className:"flex items-center justify-between w-full"},f.createElement("input",{type:"text",placeholder:"Comments",className:"border-b border-gray-300 focus:outline-none w-full px-1 py-2",onChange:_=>a(_.target.value),value:o,ref:d}),f.createElement("button",{className:"text-blue-500 font-semibold cursor-pointer hover:text-white bg-transparent py-2 px-4",onClick:w,disabled:i},i?"Posting...":"Post"))))},Gj=({post:t})=>{const{profile:e}=Bk(t.createdBy);return f.createElement("div",{className:"my-10 p-7 pb-10 w-full bg-white rounded-lg shadow-md"},f.createElement(Dj,{post:t,creatorProfile:e}),f.createElement("img",{src:t.img,alt:"FEED POST IMG",className:"w-full"}),f.createElement(Kk,{post:t,creatorProfile:e}))},Hj={posts:[],status:"idle",error:null},Qk=Zv({name:"posts",initialState:Hj,reducers:{createPost:(t,e)=>{t.posts.unshift(e.payload)},setPosts:(t,e)=>{t.posts=e.payload},deletePost:(t,e)=>{t.posts=t.posts.filter(n=>n.id!==e.payload)},addComment:(t,e)=>{const{postId:n,comment:r}=e.payload,i=t.posts.find(s=>s.id===n);i&&i.comments.push(r)}}}),{createPost:Q5,deletePost:Y5,addComment:X5,setPosts:Yk}=Qk.actions,Kj=Qk.reducer,Qj=()=>{const t=Cr();return T.useEffect(()=>{const e=Be.collection("posts").onSnapshot(n=>{const r=n.docs.map(i=>({id:i.id,...i.data()}));t(Yk(r))});return()=>{e()}},[t]),null},Yj=()=>{const{posts:t}=ze(n=>n.posts);Qj();const e=[...t].sort((n,r)=>r.createdAt-n.createdAt);return f.createElement("div",{className:"m-10"},f.createElement("ul",null,!e.length==0?f.createElement(f.Fragment,null,e.map(n=>f.createElement(Gj,{key:n.id,post:n}))):f.createElement("h1",{className:"py-10 text-center text-xl font-bold text-gray-600 mt-8"},"등록된 post가 없습니다.",f.createElement("span",{role:"img","aria-label":"angry",className:"text-red-500 text-2xl ml-2"},"😡"))))},Xj=()=>{const[t,e]=T.useState(!0),[n,r]=T.useState([]),[i,s]=T.useState(""),o=ze(a=>a.user);return T.useEffect(()=>{o&&(async()=>{e(!0);try{if(!o)return;if(!Array.isArray(o.following))throw new Error("authUser.following is not an array");const l=Ju(Be,"users"),u=yn(l,lk("uid")),c=await hk(u),d=[];c.forEach(h=>{d.push({...h.data(),id:h.id})}),r(d),console.log(d)}catch(l){s(l.message),console.error(l)}finally{e(!1)}})()},[o]),{isLoading:t,Users:n,error:i}},Jj=({user:t})=>{const e=ze(s=>s.user),{isFollowing:n,isUpdating:r,handleFollowUser:i}=Lf(t.uid);return f.createElement("div",{className:"flex justify-between items-center w-full bg-white rounded-lg p-4 shadow-md m-10"},f.createElement("div",{className:"flex items-center space-x-2 "},f.createElement(ii,{to:`/${t.email}`},t.profilePicURL?f.createElement("img",{src:t.profilePicURL,alt:"p",className:"w-10 h-10 rounded-full"}):f.createElement("img",{src:"./user-solid.svg",alt:"profile",className:"w-10 h-10 rounded-full border border-gray-300 p-1"})),f.createElement("div",{className:"flex flex-col"},f.createElement(ii,{to:`/${t.email}`},f.createElement("p",{className:"text-sm font-semibold"},t.username)),f.createElement("p",{className:"text-xs text-gray-500"},t.followers.length," followers"))),e.uid!==t.uid&&f.createElement("button",{className:`text-sm font-medium ${n?"text-blue-400":"text-gray-500 hover:text-blue-400"}`,onClick:i,disabled:r},n?"Unfollow":"Follow"))},Zj=()=>{Lf();const{Users:t}=Xj(),[e,n]=T.useState(""),[r,i]=T.useState("all"),s=ze(d=>d.user),o=t.filter(d=>d.username.toLowerCase().includes(e.toLowerCase())),a=d=>{n(d.target.value)},l=s.followers||[],u=s.following||[];let c;switch(r){case"followers":c=o.filter(d=>l.includes(d.id));break;case"following":c=o.filter(d=>u.includes(d.id));break;default:c=o}return f.createElement("div",null,f.createElement("input",{type:"text",placeholder:"Search users...",value:e,onChange:a,className:"px-3 py-3 rounded-md  w-full mx-10 mt-10 shadow-md"}),f.createElement("div",{className:"flex justify-start ml-10 mt-4 space-x-4"},f.createElement("button",{onClick:()=>i("all"),className:`px-4 py-2 rounded-md ${r==="all"?"bg-blue-500 text-white":"bg-gray-200 text-gray-700"}`},"Total"),f.createElement("button",{onClick:()=>i("followers"),className:`px-4 py-2 rounded-md ${r==="followers"?"bg-blue-500 text-white":"bg-gray-200 text-gray-700"}`},"followers"),f.createElement("button",{onClick:()=>i("following"),className:`px-4 py-2 rounded-md ${r==="following"?"bg-blue-500 text-white":"bg-gray-200 text-gray-700"}`},"following")),c.map(d=>f.createElement(Jj,{user:d,key:d.id})))};function e5(t){return kr({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"},child:[]}]})(t)}const Xk=t=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let r=0;r<t;r++)n+=e.charAt(Math.floor(Math.random()*e.length));return n},t5=()=>{const[t,e]=T.useState(!1),[n,r]=T.useState(null);return{createPost:async(s,o)=>{e(!0),r(null);try{const a=ki.currentUser.uid,l=Xk(10),u=Yo.ref(`images/${a}/${l}`);await u.put(o);const c=await u.getDownloadURL(),d={createdBy:a,img:c,content:s,commentCount:0,likeCount:0,createdAt:Date.now(),updatedAt:Date.now()};return await Be.collection("posts").add(d),e(!1),{success:!0}}catch(a){return console.error("게시글 등록 오류:",a),e(!1),r(a),{success:!1,error:a}}},loading:t,error:n}};function n5(){const[t,e]=T.useState(""),[n,r]=T.useState(null),[i,s]=T.useState(null);T.useState(!1);const o=F_(),{createPost:a,loading:l,error:u}=t5(),c=async h=>{h.preventDefault(),(await a(t,n)).success?(e(""),r(null),s(null),alert("게시글이 성공적으로 등록되었습니다."),o("/")):alert("게시글을 등록하는 중 오류가 발생했습니다.")},d=h=>{const p=h.target.files[0];r(p);const y=new FileReader;y.onload=()=>{s(y.result)},y.readAsDataURL(p)};return f.createElement("div",{className:"text-black w-full bg-white rounded-lg p-10 shadow-md m-10"},f.createElement("h2",{className:"text-xl font-bold mb-4 text-sm"},"Create Post"),f.createElement("form",{onSubmit:c,className:"space-y-4"},i&&f.createElement("img",{src:i,alt:"이미지 미리보기",className:"max-w-full mb-4"}),f.createElement("textarea",{className:"border border-black rounded-lg p-2 w-full bg-transparent",value:t,onChange:h=>e(h.target.value),placeholder:"게시글 내용을 입력하세요",required:!0}),f.createElement("label",{className:"flex items-center justify-center text-black rounded-md cursor-pointer hover:bg-gray-600 w-10 py-2"},f.createElement(e5,null),f.createElement("input",{type:"file",accept:"image/*",onChange:d,className:"hidden",required:!0})),f.createElement("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full block"},"Post")))}const zp=()=>{const{pathname:t}=As(),e=t=="/",n=t=="/create",r=t=="/users";return f.createElement("div",{className:"container mx-auto px-4"},f.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8"},f.createElement("div",{className:"col-span-2"},e&&f.createElement(Yj,null),n&&f.createElement(n5,null),r&&f.createElement(Zj,null))))};function r5(t){return kr({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"},child:[]}]})(t)}function i5(t){return kr({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"},child:[]}]})(t)}function s5(t){return kr({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},child:[]}]})(t)}function o5(t){return kr({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"},child:[]}]})(t)}function a5(t){return kr({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"},child:[]}]})(t)}const l5=()=>{const[t,e]=T.useState(!1),n=ze(s=>s.user),r=Cr();return{editProfile:async(s,o)=>{if(t||!n)return;e(!0);const a=ps(Yo,`profilePics/${n.uid}`),l=Ct(Be,"users",n.uid);let u="";try{o&&(await VU(a,o,"data_url"),u=await wy(ps(Yo,`profilePics/${n.uid}`)));const c={...n,username:s.username||n.username,bio:s.bio||n.bio,profilePicURL:u||n.profilePicURL};await gr(l,{username:s.username||n.username,bio:s.bio||n.bio,profilePicURL:u||n.profilePicURL}),r(Vf({...c}),Ao({...c}))}catch(c){console.log("Error"+c)}},isUpdating:t}},u5=()=>{const[t,e]=T.useState(null),n=2*1024*1024;return{selectedFile:t,handleImageChange:i=>{const s=i.target.files[0];if(s&&s.type.startsWith("image/")){if(s.size>n){console.log("Error","File size must be less than 2MB","error"),e(null);return}const o=new FileReader;o.onloadend=()=>{e(o.result)},o.readAsDataURL(s)}else console.log("Error","Please select an image file","error"),e(null)},setSelectedFile:e}},El=({text:t,value:e,placeholder:n,onChange:r})=>f.createElement("div",{className:"flex flex-col space-y-1"},f.createElement("label",{htmlFor:"bio",className:"block text-sm font-medium text-gray-700"},t),f.createElement("input",{type:"text",name:"bio",id:"bio",className:"block w-full px-3 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder-black",placeholder:n,value:e,onChange:r})),c5=({onClick:t,isUpdating:e})=>f.createElement("div",{className:"flex items-center justify-between space-x-4"},f.createElement("button",{type:"button",className:"flex-1 px-4 py-2 text-sm font-medium text-black bg-red-400 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:bg-red-500 focus:outline-none focus:ring-offset-gray-200",onClick:t.onClose},"Cancel"),f.createElement("button",{type:"button",className:"flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-400 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:bg-blue-500 focus:outline-none focus:ring-offset-gray-200",onClick:t.handleEditProfile,disabled:e},e?"Updating...":"Submit")),d5=()=>{const[t,e]=T.useState(null),[n,r]=T.useState(!1);return{handleChangePassword:async(s,o,a)=>{if(o!==a){e("새로운 비밀번호가 일치하지 않습니다.");return}try{const l=ki.currentUser,u=Ir.credential(l.email,s);await l.reauthenticateWithCredential(u),await l.updatePassword(o),e(null),r(!0),console.log("비밀번호가 성공적으로 변경되었습니다.")}catch(l){e("현재 비밀번호가 일치하지 않습니다."),console.error("재인증 오류:",l)}},error:t,success:n}},h5=({onClose:t})=>{const[e,n]=T.useState(""),[r,i]=T.useState(""),[s,o]=T.useState(""),{handleChangePassword:a,error:l,success:u}=d5(),c=async d=>{d.preventDefault(),a(e,r,s)};return f.createElement("div",{onClick:d=>d.stopPropagation(),className:"p-6"},f.createElement("form",{onSubmit:c,className:"mt-4 space-y-6"},f.createElement("h1",{className:"text-xl font-bold mb-4 text-sm"}," Change Password"),f.createElement(El,{text:"currentPassword",onChange:d=>n(d.target.value)}),f.createElement(El,{text:"newPassword",onChange:d=>i(d.target.value)}),f.createElement(El,{text:"confirmPassword",onChange:d=>o(d.target.value)}),l&&f.createElement("p",null,l),f.createElement("button",{type:"submit",className:"w-full flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-400 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:bg-blue-500 focus:outline-none focus:ring-offset-gray-200"},"Change Password Submit")))},f5=({isOpen:t,onClose:e})=>{const[n,r]=T.useState({username:"",bio:""}),[i,s]=T.useState(t),o=ze(w=>w.user),a=T.useRef(null),{handleImageChange:l,selectedFile:u,setSelectedFile:c}=u5(),{isUpdating:d,editProfile:h}=l5(),[p,y]=T.useState(!1),v=async()=>{try{await h(n,u),c(null),e()}catch(w){console.log("Error",w.message,"error")}};return f.createElement(T.Fragment,null,f.createElement("div",{className:`fixed inset-0 z-50 overflow-y-auto ${i?"block":"hidden"}`},f.createElement("div",{className:"flex items-center justify-center min-h-screen"},f.createElement("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",onClick:e},f.createElement("div",{className:"absolute inset-0 bg-gray-500 opacity-75"})),f.createElement("div",{className:"relative bg-white rounded-lg w-96 max-w-md mx-auto shadow-xl z-50 overflow-hidden"},f.createElement("div",{className:"absolute top-4 right-4"},f.createElement("button",{className:"p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none",onClick:()=>{y(!p)}},f.createElement(s5,{className:"w-6 h-6 text-gray-600 hover:text-red-500"}))),p?f.createElement(h5,{onClose:()=>y(!1)}):f.createElement("div",{className:"p-6"},f.createElement("div",{className:"flex items-center justify-center"},f.createElement("div",{className:"relative mt-1"},f.createElement("img",{src:u||o.profilePicURL,alt:"",className:"w-24 h-24 mx-auto bg-gray-300 rounded-full"}),f.createElement("button",{type:"button",className:"absolute inset-0 flex items-center justify-center w-full h-full rounded-full bg-black bg-opacity-50 focus:outline-none",onClick:()=>a.current.click()},f.createElement(r5,{className:"w-8 h-8 text-white"})," ")),f.createElement("input",{type:"file",hidden:!0,ref:a,onChange:l})),f.createElement("div",{className:"mt-4 space-y-6"},f.createElement(El,{text:"Username",placeholder:o.username,value:n.username,onChange:w=>r({...n,username:w.target.value})}),f.createElement(El,{text:"bio",placeholder:o.bio,value:n.bio,onChange:w=>r({...n,bio:w.target.value})}),f.createElement(c5,{onClick:{onClose:e,handleEditProfile:v},isUpdating:d})))))))},Jk=t=>{const[e,n]=T.useState(!0),[r,i]=T.useState([]),s=Cr();return T.useEffect(()=>{if(!t){console.error("Invalid email provided"),n(!1);return}const o=yn(Ju(Be,"users"),$v("email","==",t)),a=kf(o,l=>{n(!0);const u=[];l.forEach(c=>{u.push(c.data())}),i(u[0]),s(Ao(u[0])),n(!1)});return()=>a()},[t,s,Ao]),{isLoading:e,profile:r}},p5=({email:t})=>{const e=ze(c=>c.user),{profile:n}=Jk(t),[r,i]=T.useState(!1),{isFollowing:s,isUpdating:o,handleFollowUser:a}=Lf(n.uid),l=e&&e.email===n.email,u=e&&e.email!==n.email;return f.createElement("div",{className:"flex gap-4 py-10 flex-wrap"},f.createElement("div",{className:"rounded-full overflow-hidden bg-gray-200"},n.profilePicURL?f.createElement("img",{src:n.profilePicURL,alt:"As a programmer logo",className:"w-24 h-24 object-cover"}):f.createElement("img",{src:"./user-solid.svg",alt:"profile",className:"w-24 h-24 rounded-full border border-gray-300 p-1"})),f.createElement("div",{className:"flex flex-col flex-1 mx-auto items-start mt-4 md:mt-0 pl-4"},f.createElement("div",{className:"flex gap-4 justify-center md:justify-start w-full items-center"},f.createElement("p",{className:"text-sm md:text-lg font-medium"},n.username),l&&f.createElement("div",{className:"flex gap-4 items-center justify-center"},f.createElement("button",{className:"bg-blue-500 text-white px-3 py-1.5 rounded-md hover:bg-white-800",onClick:()=>{i(!r)}},"Edit Profile")),u&&f.createElement("div",{className:"flex gap-4 items-center justify-center"},f.createElement("button",{className:"bg-blue-500 text-white px-3 py-1.5 rounded-md hover:bg-blue-600",onClick:a,disabled:o},s?"Unfollow":"Follow"))),f.createElement("div",{className:"flex items-center gap-4 mt-2"},(n==null?void 0:n.posts)&&f.createElement("p",{className:"text-xs md:text-sm font-normal"},n.posts.length," Posts"),(n==null?void 0:n.followers)&&f.createElement("p",{className:"text-xs md:text-sm font-normal"},n.followers.length," Followers"),(n==null?void 0:n.following)&&f.createElement("p",{className:"text-xs md:text-sm font-normal"},n.following.length," Following")),f.createElement("p",{className:"text-sm mt-2"},n==null?void 0:n.bio)),r&&f.createElement(f5,{isOpen:r,onClose:()=>i(!1)}))},m5=t=>{const[e,n]=T.useState(!0),r=Cr();return T.useEffect(()=>{(async()=>{if(!t){n(!1);return}try{const s=yn(Ju(Be,"posts"),$v("createdBy","==",t)),o=kf(s,a=>{const l=[];a.forEach(u=>{l.push({...u.data(),id:u.id})}),l.sort((u,c)=>c.createdAt-u.createdAt),r(Yk(l)),n(!1)});return()=>{o()}}catch(s){console.error("Error fetching user posts:",s),n(!1)}})()},[t,r]),{isLoading:e}};function Zk(t){return kr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(t)}const g5=()=>{const t=ze(o=>o.user),[e,n]=T.useState(!1),[r,i]=T.useState(null);return{handleUpdatePost:async(o,a,l)=>{n(!0),i(null);try{let u=null;if(l){const h=(await Ct(Be,"posts",o).get()).data().img,p=ps(Yo,h);await Ey(p);const y=Xk(10),v=ps(Yo,`images/${t.uid}/${y}`);await OU(v,l),u=await wy(v)}await gr(Ct(Be,"posts",o),{content:a,img:u}),n(!1)}catch(u){console.error("Error updating post:",u),n(!1),i(u)}},loading:e,error:r}},_5=({isOpen:t,onClose:e,post:n})=>{const{handleUpdatePost:r,loading:i,error:s}=g5();ze(c=>c.user);const[o,a]=T.useState({content:n.content,image:null}),l=c=>{a({...o,[c.target.name]:c.target.value})},u=c=>{const d=c.target.files[0];a({...o,image:d})};return f.createElement(T.Fragment,null,t&&f.createElement("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20"},f.createElement("div",{className:"max-w-md mx-auto bg-white rounded-lg overflow-hidden"},f.createElement("div",{className:"flex justify-end"},f.createElement("button",{className:"p-2",onClick:e},f.createElement(Zk,null))),f.createElement("div",{className:"p-6"},f.createElement("h2",{className:"text-xl font-semibold mb-4"},"Edit Post"),f.createElement("div",{className:"mb-4"},f.createElement("label",{htmlFor:"content",className:"block mb-1"},"Content"),f.createElement("textarea",{id:"content",name:"content",value:o.content,onChange:l,className:"w-full border rounded-md p-2"})),f.createElement("div",{className:"mb-4"},f.createElement("label",{htmlFor:"image",className:"block mb-1"},"Image"),f.createElement("input",{type:"file",id:"image",name:"image",onChange:u,className:"w-full border rounded-md p-2"})),f.createElement("button",{onClick:r,className:"bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"},"Update Post")))))},y5=({post:t})=>{const[e,n]=T.useState(!1),[r,i]=T.useState(!1),[s,o]=T.useState(!1),a=ze(h=>h.user),l=ze(h=>h.Profile.profile),u=async()=>{if(window.confirm("해당 포스트를 삭제하시겠습니까?")&&!r)try{await fk(Ct(Be,"posts",t.id)),await Ey(ps(Yo,t.img))}catch(h){console.error("Error deleting post:",h)}finally{i(!1)}},c=()=>{n(!1)},d=()=>{o(!0)};return f.createElement(f.Fragment,null,f.createElement("div",{className:"relative cursor-pointer border border-white-300 overflow-hidden rounded",onClick:()=>n(!0)},f.createElement("img",{src:t.img,alt:"profile post",className:"w-full h-60"})),e&&f.createElement("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20",onClick:c},f.createElement("div",{className:"max-w-3xl mx-auto bg-white rounded-lg overflow-hidden",onClick:h=>h.stopPropagation()},f.createElement("div",{className:"flex"},f.createElement("div",{className:"w-1/2"},f.createElement("img",{src:t.img,alt:"profile post",className:"object-cover h-full w-full"})),f.createElement("div",{className:"w-1/2 p-6"},f.createElement("div",{className:"flex justify-between items-center"},f.createElement("div",{className:"flex items-center"},f.createElement("img",{src:l.profilePicURL,alt:"profile",className:"w-10 h-10 rounded-full object-cover"}),f.createElement("span",{className:"font-bold text-black ml-2"},l.username)),f.createElement("div",{className:"flex items-center"},(a==null?void 0:a.uid)===l.uid&&f.createElement(f.Fragment,null,f.createElement("button",{className:"text-red-600 hover:bg-white-300 hover:text-white-300 rounded-full p-1",onClick:u},f.createElement(Wk,{size:20})),f.createElement("button",{className:"text-black hover:bg-white-300 hover:text-white-300 rounded-full ml-2",onClick:d},f.createElement(qk,{size:20}))),f.createElement("button",{className:"text-black hover:bg-white-300 hover:text-white-300 rounded-full ml-2",onClick:c},f.createElement(Zk,{size:24})))),f.createElement("div",{className:"border-t border-gray-300 my-4"}),f.createElement(Kk,{isProfilePage:!1,post:t}))))),s&&f.createElement(_5,{isOpen:s,onClose:()=>o(!1),post:t}))},v5=()=>f.createElement("div",{className:"flex flex-col items-center justify-center mx-auto mt-10"},f.createElement("p",{className:"text-2xl"},"No Posts Found🤔")),w5=({uid:t})=>{const{isLoading:e}=m5(t),{posts:n}=ze(i=>i.posts);return!e&&n.length===0?f.createElement(v5,null):f.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-2"},e?[...Array(3)].map((i,s)=>f.createElement("div",{key:s,className:"flex flex-col items-start space-y-4"},f.createElement("div",{className:"w-full"},f.createElement("div",{className:"bg-gray-300 w-full h-80"})))):f.createElement(f.Fragment,null,n&&n.map(i=>f.createElement(y5,{post:i,key:i.id}))))},E5=()=>f.createElement("div",{className:"flex gap-4 sm:gap-10 py-10 flex-col sm:flex-row justify-center items-center"},f.createElement("div",{className:"h-24 w-24 rounded-full bg-gray-300"}),f.createElement("div",{className:"flex flex-col items-center sm:items-start w-full"},f.createElement("div",{className:"h-3 w-36 bg-gray-300 mb-2"}),f.createElement("div",{className:"h-3 w-24 bg-gray-300"}))),jp=({icon:t,text:e})=>f.createElement("div",{className:"flex border-t border-white items-center p-3 cursor-pointer border-b border-gray-100 hover:border-b hover:border-red-900"},f.createElement("div",{className:"text-2xl"},t),f.createElement("span",{className:"text-sm font-medium ml-1"},e)),I5=()=>f.createElement("div",{className:"flex justify-center gap-4 sm:gap-10 text-uppercase font-bold"},f.createElement(jp,{icon:f.createElement(a5,null),text:"Posts"}),f.createElement(jp,{icon:f.createElement(i5,null),text:"Saved"}),f.createElement(jp,{icon:f.createElement(o5,null),text:"Likes"})),T5=()=>f.createElement("div",{className:"flex flex-col items-center mx-auto text-center"},f.createElement("p",{className:"text-2xl"},"User Not Found"),f.createElement(ii,{to:"/",className:"text-blue-500 mt-2"},"Go home")),S5=()=>{const{email:t}=YN(),e=cy(ki),{profile:n}=Jk(t);return T.useEffect(()=>{},[t]),!e&&!n?f.createElement(T5,null):f.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 "},f.createElement("div",{className:"container m-10 bg-white col-span-2 rounded-lg p-5 shadow-md"},f.createElement("div",{className:"flex flex-col py-10 px-4 md:px-10"},e&&n&&f.createElement(p5,{email:t}),!e&&f.createElement(E5,null)),f.createElement("div",{className:"flex px-2 sm:px-4 max-w-full mx-auto border-t border-white-300 flex-col"},f.createElement(I5,null),f.createElement(w5,{uid:n.uid}))))},R5=()=>{const[t,e]=T.useState(null),[n,r]=T.useState(!1),i=Cr();return{login:async(o,a)=>{try{r(!0);const l=await ki.signInWithEmailAndPassword(o,a),d=(await Be.collection("users").doc(l.user.uid).get()).data();d&&i(Vf({...d}))}catch(l){e(l.message)}finally{r(!1)}},loading:n,error:t}},P5=()=>{const[t,e]=T.useState(""),[n,r]=T.useState(""),{login:i,loading:s,error:o}=R5(),a=async l=>{l.preventDefault(),i(t,n)};return f.createElement("div",{className:"text-white text-center"},f.createElement("h1",{className:"text-2xl font-bold mb-4"},"로그인"),o&&f.createElement("alert",{status:"error"},f.createElement("p",null,"로그인 에러: ",o)),f.createElement("form",{className:"w-64 mx-auto",onSubmit:a},f.createElement("div",{className:"mb-4"},f.createElement("label",{htmlFor:"email",className:"block mb-1 font-light text-left"},"아이디"),f.createElement("input",{type:"email",id:"email",name:"email",className:"w-full p-2.5 border border-white rounded-lg text-black text-sm",placeholder:"아이디를 입력하세요",value:t,onChange:l=>e(l.target.value)})),f.createElement("div",{className:"mb-6"},f.createElement("label",{htmlFor:"password",className:"block mb-1 font-light text-left"},"비밀번호"),f.createElement("input",{type:"password",id:"password",name:"password",className:"w-full p-2.5 border border-white rounded-lg text-black text-sm",placeholder:"비밀번호를 입력하세요",value:n,onChange:l=>r(l.target.value)})),f.createElement("button",{className:"text-blue-500 hover:bg-white hover:text-black border border-white px-4 py-2 rounded-full w-full",type:"submit",disabled:s},"로그인")))},A5=()=>{const[t,e]=T.useState(null),[n,r]=T.useState(!1),i=Cr();return{signup:async o=>{try{r(!0);const a=await ki.createUserWithEmailAndPassword(o.email,o.password);if(!a&&t){e(t);return}if(a){const l={uid:a.user.uid,email:o.email,username:o.username,bio:"",profilePicURL:"",followers:[],following:[],posts:[],createdAt:Date.now(),updatedAt:Date.now()};await Be.collection("users").doc(a.user.uid).set({...l}).then(()=>{i(Vf({...l}))})}}catch(a){e(a.message)}finally{r(!1)}},loading:n,error:t}};function C5(){const[t,e]=T.useState({username:"",email:"",password:""}),{signup:n}=A5(),r=s=>{const{name:o,value:a}=s.target;e({...t,[o]:a})},i=s=>{s.preventDefault(),n(t)};return f.createElement("div",{className:"text-white text-center"},f.createElement("h1",{className:"text-2xl font-bold mb-4"},"회원가입"),f.createElement("form",{className:"w-64 mx-auto",onSubmit:i},f.createElement("div",{className:"mb-4"},f.createElement("label",{htmlFor:"username",className:"block mb-1 font-light text-left"},"이름"),f.createElement("input",{type:"text",id:"username",name:"username",className:"w-full p-2.5 border border-white rounded-lg text-black text-sm",placeholder:"이름을 입력하세요",value:t.username,onChange:r})),f.createElement("div",{className:"mb-4"},f.createElement("label",{htmlFor:"email",className:"block mb-1 font-light text-left"},"아이디"),f.createElement("input",{type:"email",id:"email",name:"email",className:"w-full p-2.5 border border-white rounded-lg text-black text-sm",placeholder:"아이디를 입력하세요",value:t.email,onChange:r})),f.createElement("div",{className:"mb-6"},f.createElement("label",{htmlFor:"password",className:"block mb-1 font-light text-left"},"비밀번호"),f.createElement("input",{type:"password",id:"password",name:"password",className:"w-full p-2.5 border border-white rounded-lg text-black text-sm",placeholder:"비밀번호를 입력하세요",value:t.password,onChange:r})),f.createElement("button",{className:"text-blue-500 hover:bg-white hover:text-black border border-white px-4 py-2 rounded-full w-full",type:"submit"},"회원가입")))}const k5=()=>{const[t,e]=T.useState(!0);return f.createElement("div",{className:"bg-black bg-opacity-75 text-white rounded-lg p-8 text-center border border-white border-opacity-50"},f.createElement("h1",{className:"text-2xl font-bold mb-4"},"HH99"),t?f.createElement(P5,null):f.createElement(C5,null),f.createElement("div",{className:"flex items-center my-4"},f.createElement("div",{className:"flex-1 border-t border-white"}),f.createElement("div",{className:"mx-4"},"OR"),f.createElement("div",{className:"flex-1 border-t border-white"})),t?"계정이 없으신가요? ":"이미 계정이 있으신가요? ",f.createElement("button",{className:"ml-3 text-blue-500 hover:bg-white hover:text-black border border-white px-4 py-2 rounded-full",onClick:()=>e(!t)},t?"회원가입":"로그인"))};function b5(){const t={display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"black"};return f.createElement("div",{style:t},f.createElement(k5,null))}function x5(){const[t]=cy(ki);return f.createElement(yD,null,f.createElement(bj,null,f.createElement(dD,null,f.createElement(Ws,{path:"/auth",element:t?f.createElement(ba,{to:"/"}):f.createElement(b5,null)}),f.createElement(Ws,{path:"/",element:t?f.createElement(zp,null):f.createElement(ba,{to:"/auth"})}),f.createElement(Ws,{path:"/create",element:t?f.createElement(zp,null):f.createElement(ba,{to:"/auth"})}),f.createElement(Ws,{path:"/users",element:t?f.createElement(zp,null):f.createElement(ba,{to:"/auth"})}),f.createElement(Ws,{path:"/:email",element:t?f.createElement(S5,null):f.createElement(ba,{to:"/auth"})}))))}const nw=sj({reducer:{user:Pj,Profile:Nj,posts:Kj}});nw.getState;nw.dispatch;EN.render(f.createElement(f.StrictMode,null,f.createElement(w6,{store:nw},f.createElement(x5,null))),document.getElementById("root"));
