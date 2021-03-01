import{createContext as e,createElement as t,Component as r,useContext as o,useEffect as n}from"react";
/*! *****************************************************************************
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
***************************************************************************** */var c=function(e,t){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};var a,i=function(){return(i=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function s(e,t,r,o){return new(r||(r=Promise))((function(n,c){function a(e){try{s(o.next(e))}catch(e){c(e)}}function i(e){try{s(o.throw(e))}catch(e){c(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}s((o=o.apply(e,t||[])).next())}))}function p(e,t){var r,o,n,c,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,o&&(n=2&c[0]?o.return:c[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,c[1])).done)return n;switch(o=0,n&&(c=[2&c[0],n.value]),c[0]){case 0:case 1:n=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,o=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(n=a.trys,(n=n.length>0&&n[n.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!n||c[1]>n[0]&&c[1]<n[3])){a.label=c[1];break}if(6===c[0]&&a.label<n[1]){a.label=n[1],n=c;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(c);break}n[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],o=0}finally{r=n=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}}!function(e){e.SCRIPT_NOT_AVAILABLE="Recaptcha script is not available"}(a||(a={}));var u=e({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented")}}),f=u.Consumer,l=function(e){function r(){var t=null!==e&&e.apply(this,arguments)||this;return t.scriptId="google-recaptcha-v3",t.resolver=void 0,t.rejecter=void 0,t.loadTimeout=void 0,t.grecaptcha=new Promise((function(e,r){t.resolver=e,t.rejecter=r})),t.executeRecaptcha=function(e){return s(t,void 0,void 0,(function(){var t;return p(this,(function(r){return t=this.props.reCaptchaKey,[2,this.grecaptcha.then((function(r){return r.execute(t,{action:e})}))]}))}))},t.handleOnLoad=function(){window&&window.grecaptcha||!window.grcScriptPlaced||(t.loadTimeout=setTimeout((function(){t.handleOnLoad()}),50));var e=t.props.useEnterprise;if(window&&window.grecaptcha){var r=e?window.grecaptcha.enterprise:window.grecaptcha;r.ready((function(){t.resolver(r)}))}else console.warn(a.SCRIPT_NOT_AVAILABLE)},t.injectGoogleReCaptchaScript=function(){if(document.getElementById(t.scriptId))t.handleOnLoad();else{var e=t.generateGoogleReCaptchaScript();("body"===(t.props.scriptProps||{}).appendTo?document.body:document.getElementsByTagName("head")[0]).appendChild(e)}},t.generateGoogleReCaptchaScript=function(){var e=t.props,r=e.reCaptchaKey,o=e.language,n=e.scriptProps,c=void 0===n?{}:n,a=c.nonce,i=c.defer,s=c.async,p=document.createElement("script");return p.id=t.scriptId,p.src=t.googleRecaptchaSrc+"?render="+r+(o?"&hl="+o:""),a&&(p.nonce=a),p.defer=!!i,p.async=!!s,p.onload=t.handleOnLoad,window.grcScriptPlaced=!0,p},t}return function(e,t){function r(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(r,e),Object.defineProperty(r.prototype,"googleRecaptchaSrc",{get:function(){var e=this.props,t=e.useRecaptchaNet,r=e.useEnterprise;return"https://www."+(t&&!r?"recaptcha.net":"google.com")+"/recaptcha/"+(r?"enterprise.js":"api.js")},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"googleReCaptchaContextValue",{get:function(){return{executeRecaptcha:this.executeRecaptcha}},enumerable:!1,configurable:!0}),r.prototype.componentDidMount=function(){this.props.reCaptchaKey?this.injectGoogleReCaptchaScript():console.warn("<GoogleReCaptchaProvider /> recaptcha key not provided")},r.prototype.componentDidUpdate=function(e){this.props.reCaptchaKey||console.warn("<GoogleReCaptchaProvider /> recaptcha key not provided"),!e.reCaptchaKey&&this.props.reCaptchaKey&&this.injectGoogleReCaptchaScript()},r.prototype.componentWillUnmount=function(){var e=document.querySelector(".grecaptcha-badge");e&&e.parentNode&&document.body.removeChild(e.parentNode);var t=document.querySelector("#"+this.scriptId);t&&t.remove()},r.prototype.render=function(){var e=this.props.children;return t(u.Provider,{value:this.googleReCaptchaContextValue},e)},r}(r),y=function(){return o(u)},d=function(e){var t=e.action,r=e.onVerify,o=(e.runOnlyOnMount,y());return n((function(){var e=o.executeRecaptcha;s(void 0,void 0,void 0,(function(){var o;return p(this,(function(n){switch(n.label){case 0:return e?[4,e(t)]:(console.warn("Execute recaptcha function not defined"),[2]);case 1:return o=n.sent(),r?(r(o),[2]):(console.warn("Please define an onVerify function"),[2])}}))}))}),[t,r,o]),null};function m(e,t){return e(t={exports:{}},t.exports),t.exports
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}var h="function"==typeof Symbol&&Symbol.for,b=h?Symbol.for("react.element"):60103,v=h?Symbol.for("react.portal"):60106,g=h?Symbol.for("react.fragment"):60107,S=h?Symbol.for("react.strict_mode"):60108,w=h?Symbol.for("react.profiler"):60114,$=h?Symbol.for("react.provider"):60109,C=h?Symbol.for("react.context"):60110,P=h?Symbol.for("react.async_mode"):60111,x=h?Symbol.for("react.concurrent_mode"):60111,R=h?Symbol.for("react.forward_ref"):60112,O=h?Symbol.for("react.suspense"):60113,M=h?Symbol.for("react.suspense_list"):60120,j=h?Symbol.for("react.memo"):60115,E=h?Symbol.for("react.lazy"):60116,_=h?Symbol.for("react.block"):60121,T=h?Symbol.for("react.fundamental"):60117,N=h?Symbol.for("react.responder"):60118,A=h?Symbol.for("react.scope"):60119;function F(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case b:switch(e=e.type){case P:case x:case g:case w:case S:case O:return e;default:switch(e=e&&e.$$typeof){case C:case R:case E:case j:case $:return e;default:return t}}case v:return t}}}function L(e){return F(e)===x}var I={AsyncMode:P,ConcurrentMode:x,ContextConsumer:C,ContextProvider:$,Element:b,ForwardRef:R,Fragment:g,Lazy:E,Memo:j,Portal:v,Profiler:w,StrictMode:S,Suspense:O,isAsyncMode:function(e){return L(e)||F(e)===P},isConcurrentMode:L,isContextConsumer:function(e){return F(e)===C},isContextProvider:function(e){return F(e)===$},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===b},isForwardRef:function(e){return F(e)===R},isFragment:function(e){return F(e)===g},isLazy:function(e){return F(e)===E},isMemo:function(e){return F(e)===j},isPortal:function(e){return F(e)===v},isProfiler:function(e){return F(e)===w},isStrictMode:function(e){return F(e)===S},isSuspense:function(e){return F(e)===O},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===g||e===x||e===w||e===S||e===O||e===M||"object"==typeof e&&null!==e&&(e.$$typeof===E||e.$$typeof===j||e.$$typeof===$||e.$$typeof===C||e.$$typeof===R||e.$$typeof===T||e.$$typeof===N||e.$$typeof===A||e.$$typeof===_)},typeOf:F},V=m((function(e,t){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,o=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,c=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,p=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,l=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var y=e.type;switch(y){case p:case u:case n:case a:case c:case l:return y;default:var h=y&&y.$$typeof;switch(h){case s:case f:case m:case d:case i:return h;default:return t}}case o:return t}}}var w=p,$=u,C=s,P=i,x=r,R=f,O=n,M=m,j=d,E=o,_=a,T=c,N=l,A=!1;function F(e){return S(e)===u}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=P,t.Element=x,t.ForwardRef=R,t.Fragment=O,t.Lazy=M,t.Memo=j,t.Portal=E,t.Profiler=_,t.StrictMode=T,t.Suspense=N,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),F(e)||S(e)===p},t.isConcurrentMode=F,t.isContextConsumer=function(e){return S(e)===s},t.isContextProvider=function(e){return S(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return S(e)===f},t.isFragment=function(e){return S(e)===n},t.isLazy=function(e){return S(e)===m},t.isMemo=function(e){return S(e)===d},t.isPortal=function(e){return S(e)===o},t.isProfiler=function(e){return S(e)===a},t.isStrictMode=function(e){return S(e)===c},t.isSuspense=function(e){return S(e)===l},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===u||e===a||e===c||e===l||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===d||e.$$typeof===i||e.$$typeof===s||e.$$typeof===f||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g||e.$$typeof===h)},t.typeOf=S}()})),G=(V.AsyncMode,V.ConcurrentMode,V.ContextConsumer,V.ContextProvider,V.Element,V.ForwardRef,V.Fragment,V.Lazy,V.Memo,V.Portal,V.Profiler,V.StrictMode,V.Suspense,V.isAsyncMode,V.isConcurrentMode,V.isContextConsumer,V.isContextProvider,V.isElement,V.isForwardRef,V.isFragment,V.isLazy,V.isMemo,V.isPortal,V.isProfiler,V.isStrictMode,V.isSuspense,V.isValidElementType,V.typeOf,m((function(e){"production"===process.env.NODE_ENV?e.exports=I:e.exports=V}))),k={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},z={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},D={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},K={};function B(e){return G.isMemo(e)?D:K[e.$$typeof]||k}K[G.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},K[G.Memo]=D;var U=Object.defineProperty,q=Object.getOwnPropertyNames,W=Object.getOwnPropertySymbols,H=Object.getOwnPropertyDescriptor,J=Object.getPrototypeOf,Q=Object.prototype;var X=function e(t,r,o){if("string"!=typeof r){if(Q){var n=J(r);n&&n!==Q&&e(t,n,o)}var c=q(r);W&&(c=c.concat(W(r)));for(var a=B(t),i=B(r),s=0;s<c.length;++s){var p=c[s];if(!(z[p]||o&&o[p]||i&&i[p]||a&&a[p])){var u=H(r,p);try{U(t,p,u)}catch(e){}}}}return t},Y=function(e){var r=function(r){return t(f,null,(function(o){return t(e,i({},r,{googleReCaptchaProps:o}))}))};return r.displayName="withGoogleReCaptcha("+(e.displayName||e.name||"Component")+")",X(r,e),r};export{d as GoogleReCaptcha,f as GoogleReCaptchaConsumer,u as GoogleReCaptchaContext,l as GoogleReCaptchaProvider,y as useGoogleReCaptcha,Y as withGoogleReCaptcha};
//# sourceMappingURL=react-google-recaptcha-v3.esm.js.map