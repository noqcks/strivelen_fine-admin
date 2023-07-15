import{r as g}from"./vendor-0e720bfc.js";import{b as W,u as H,i as D,d as Z,e as Q,a as k,f as I,c as P}from"./index-d62a84b9.js";import{d as ee,t as re}from"./throttle-fe19b4d4.js";var U=globalThis&&globalThis.__read||function(i,e){var n=typeof Symbol=="function"&&i[Symbol.iterator];if(!n)return i;var r=n.call(i),t,a=[],u;try{for(;(e===void 0||e-- >0)&&!(t=r.next()).done;)a.push(t.value)}catch(s){u={error:s}}finally{try{t&&!t.done&&(n=r.return)&&n.call(r)}finally{if(u)throw u.error}}return a},G=globalThis&&globalThis.__spreadArray||function(i,e,n){if(n||arguments.length===2)for(var r=0,t=e.length,a;r<t;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return i.concat(a||Array.prototype.slice.call(e))},X=function(e,n){var r=n.manual,t=n.ready,a=t===void 0?!0:t,u=n.defaultParams,s=u===void 0?[]:u,f=n.refreshDeps,o=f===void 0?[]:f,l=n.refreshDepsAction,c=g.useRef(!1);return c.current=!1,W(function(){!r&&a&&(c.current=!0,e.run.apply(e,G([],U(s),!1)))},[a]),W(function(){c.current||r||(c.current=!0,l?l():e.refresh())},G([],U(o),!1)),{onBefore:function(){if(!a)return{stopNow:!0}}}};X.onInit=function(i){var e=i.ready,n=e===void 0?!0:e,r=i.manual;return{loading:!r&&n}};const ne=X;function te(i,e){if(i===e)return!0;for(var n=0;n<i.length;n++)if(!Object.is(i[n],e[n]))return!1;return!0}function Y(i,e){var n=g.useRef({deps:e,obj:void 0,initialized:!1}).current;return(n.initialized===!1||!te(n.deps,e))&&(n.deps=e,n.obj=i(),n.initialized=!0),n.obj}var F=globalThis&&globalThis.__assign||function(){return F=Object.assign||function(i){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t])}return i},F.apply(this,arguments)},j=new Map,ae=function(e,n,r){var t=j.get(e);t!=null&&t.timer&&clearTimeout(t.timer);var a=void 0;n>-1&&(a=setTimeout(function(){j.delete(e)},n)),j.set(e,F(F({},r),{timer:a}))},ie=function(e){return j.get(e)},E=new Map,oe=function(e){return E.get(e)},ue=function(e,n){E.set(e,n),n.then(function(r){return E.delete(e),r}).catch(function(){E.delete(e)})},T={},le=function(e,n){T[e]&&T[e].forEach(function(r){return r(n)})},M=function(e,n){return T[e]||(T[e]=[]),T[e].push(n),function(){var t=T[e].indexOf(n);T[e].splice(t,1)}},se=globalThis&&globalThis.__read||function(i,e){var n=typeof Symbol=="function"&&i[Symbol.iterator];if(!n)return i;var r=n.call(i),t,a=[],u;try{for(;(e===void 0||e-- >0)&&!(t=r.next()).done;)a.push(t.value)}catch(s){u={error:s}}finally{try{t&&!t.done&&(n=r.return)&&n.call(r)}finally{if(u)throw u.error}}return a},ce=globalThis&&globalThis.__spreadArray||function(i,e,n){if(n||arguments.length===2)for(var r=0,t=e.length,a;r<t;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return i.concat(a||Array.prototype.slice.call(e))},fe=function(e,n){var r=n.cacheKey,t=n.cacheTime,a=t===void 0?5*60*1e3:t,u=n.staleTime,s=u===void 0?0:u,f=n.setCache,o=n.getCache,l=g.useRef(),c=g.useRef(),h=function(p,d){f?f(d):ae(p,a,d),le(p,d.data)},y=function(p,d){return d===void 0&&(d=[]),o?o(d):ie(p)};return Y(function(){if(r){var v=y(r);v&&Object.hasOwnProperty.call(v,"data")&&(e.state.data=v.data,e.state.params=v.params,(s===-1||new Date().getTime()-v.time<=s)&&(e.state.loading=!1)),l.current=M(r,function(p){e.setState({data:p})})}},[]),H(function(){var v;(v=l.current)===null||v===void 0||v.call(l)}),r?{onBefore:function(p){var d=y(r,p);return!d||!Object.hasOwnProperty.call(d,"data")?{}:s===-1||new Date().getTime()-d.time<=s?{loading:!1,data:d==null?void 0:d.data,error:void 0,returnNow:!0}:{data:d==null?void 0:d.data,error:void 0}},onRequest:function(p,d){var b=oe(r);return b&&b!==c.current?{servicePromise:b}:(b=p.apply(void 0,ce([],se(d),!1)),c.current=b,ue(r,b),{servicePromise:b})},onSuccess:function(p,d){var b;r&&((b=l.current)===null||b===void 0||b.call(l),h(r,{data:p,params:d,time:new Date().getTime()}),l.current=M(r,function($){e.setState({data:$})}))},onMutate:function(p){var d;r&&((d=l.current)===null||d===void 0||d.call(l),h(r,{data:p,params:e.state.params,time:new Date().getTime()}),l.current=M(r,function(b){e.setState({data:b})}))}}:{}};const de=fe;var ve=globalThis&&globalThis.__read||function(i,e){var n=typeof Symbol=="function"&&i[Symbol.iterator];if(!n)return i;var r=n.call(i),t,a=[],u;try{for(;(e===void 0||e-- >0)&&!(t=r.next()).done;)a.push(t.value)}catch(s){u={error:s}}finally{try{t&&!t.done&&(n=r.return)&&n.call(r)}finally{if(u)throw u.error}}return a},he=globalThis&&globalThis.__spreadArray||function(i,e,n){if(n||arguments.length===2)for(var r=0,t=e.length,a;r<t;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return i.concat(a||Array.prototype.slice.call(e))},ge=function(e,n){var r=n.debounceWait,t=n.debounceLeading,a=n.debounceTrailing,u=n.debounceMaxWait,s=g.useRef(),f=g.useMemo(function(){var o={};return t!==void 0&&(o.leading=t),a!==void 0&&(o.trailing=a),u!==void 0&&(o.maxWait=u),o},[t,a,u]);return g.useEffect(function(){if(r){var o=e.runAsync.bind(e);return s.current=ee(function(l){l()},r,f),e.runAsync=function(){for(var l=[],c=0;c<arguments.length;c++)l[c]=arguments[c];return new Promise(function(h,y){var v;(v=s.current)===null||v===void 0||v.call(s,function(){o.apply(void 0,he([],ve(l),!1)).then(h).catch(y)})})},function(){var l;(l=s.current)===null||l===void 0||l.cancel(),e.runAsync=o}}},[r,f]),r?{onCancel:function(){var l;(l=s.current)===null||l===void 0||l.cancel()}}:{}};const ye=ge;var pe=function(e,n){var r=n.loadingDelay,t=g.useRef();if(!r)return{};var a=function(){t.current&&clearTimeout(t.current)};return{onBefore:function(){return a(),t.current=setTimeout(function(){e.setState({loading:!0})},r),{loading:!1}},onFinally:function(){a()},onCancel:function(){a()}}};const be=pe;function N(){return D?document.visibilityState!=="hidden":!0}var S=[];function me(i){return S.push(i),function(){var n=S.indexOf(i);S.splice(n,1)}}if(D){var _e=function(){if(N())for(var e=0;e<S.length;e++){var n=S[e];n()}};window.addEventListener("visibilitychange",_e,!1)}var we=function(e,n){var r=n.pollingInterval,t=n.pollingWhenHidden,a=t===void 0?!0:t,u=n.pollingErrorRetryCount,s=u===void 0?-1:u,f=g.useRef(),o=g.useRef(),l=g.useRef(0),c=function(){var y;f.current&&clearTimeout(f.current),(y=o.current)===null||y===void 0||y.call(o)};return W(function(){r||c()},[r]),r?{onBefore:function(){c()},onError:function(){l.current+=1},onSuccess:function(){l.current=0},onFinally:function(){s===-1||s!==-1&&l.current<=s?f.current=setTimeout(function(){!a&&!N()?o.current=me(function(){e.refresh()}):e.refresh()},r):l.current=0},onCancel:function(){c()}}:{}};const Te=we;var Pe=globalThis&&globalThis.__read||function(i,e){var n=typeof Symbol=="function"&&i[Symbol.iterator];if(!n)return i;var r=n.call(i),t,a=[],u;try{for(;(e===void 0||e-- >0)&&!(t=r.next()).done;)a.push(t.value)}catch(s){u={error:s}}finally{try{t&&!t.done&&(n=r.return)&&n.call(r)}finally{if(u)throw u.error}}return a},Ae=globalThis&&globalThis.__spreadArray||function(i,e,n){if(n||arguments.length===2)for(var r=0,t=e.length,a;r<t;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return i.concat(a||Array.prototype.slice.call(e))};function Oe(i,e){var n=!1;return function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];n||(n=!0,i.apply(void 0,Ae([],Pe(r),!1)),setTimeout(function(){n=!1},e))}}function Re(){return D&&typeof navigator.onLine<"u"?navigator.onLine:!0}var C=[];function Se(i){return C.push(i),function(){var n=C.indexOf(i);n>-1&&C.splice(n,1)}}if(D){var q=function(){if(!(!N()||!Re()))for(var e=0;e<C.length;e++){var n=C[e];n()}};window.addEventListener("visibilitychange",q,!1),window.addEventListener("focus",q,!1)}var Ce=function(e,n){var r=n.refreshOnWindowFocus,t=n.focusTimespan,a=t===void 0?5e3:t,u=g.useRef(),s=function(){var o;(o=u.current)===null||o===void 0||o.call(u)};return g.useEffect(function(){if(r){var f=Oe(e.refresh.bind(e),a);u.current=Se(function(){f()})}return function(){s()}},[r,a]),H(function(){s()}),{}};const $e=Ce;var xe=function(e,n){var r=n.retryInterval,t=n.retryCount,a=g.useRef(),u=g.useRef(0),s=g.useRef(!1);return t?{onBefore:function(){s.current||(u.current=0),s.current=!1,a.current&&clearTimeout(a.current)},onSuccess:function(){u.current=0},onError:function(){if(u.current+=1,t===-1||u.current<=t){var o=r??Math.min(1e3*Math.pow(2,u.current),3e4);a.current=setTimeout(function(){s.current=!0,e.refresh()},o)}else u.current=0},onCancel:function(){u.current=0,a.current&&clearTimeout(a.current)}}:{}};const je=xe;var Ee=globalThis&&globalThis.__read||function(i,e){var n=typeof Symbol=="function"&&i[Symbol.iterator];if(!n)return i;var r=n.call(i),t,a=[],u;try{for(;(e===void 0||e-- >0)&&!(t=r.next()).done;)a.push(t.value)}catch(s){u={error:s}}finally{try{t&&!t.done&&(n=r.return)&&n.call(r)}finally{if(u)throw u.error}}return a},Fe=globalThis&&globalThis.__spreadArray||function(i,e,n){if(n||arguments.length===2)for(var r=0,t=e.length,a;r<t;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return i.concat(a||Array.prototype.slice.call(e))},De=function(e,n){var r=n.throttleWait,t=n.throttleLeading,a=n.throttleTrailing,u=g.useRef(),s={};return t!==void 0&&(s.leading=t),a!==void 0&&(s.trailing=a),g.useEffect(function(){if(r){var f=e.runAsync.bind(e);return u.current=re(function(o){o()},r,s),e.runAsync=function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return new Promise(function(c,h){var y;(y=u.current)===null||y===void 0||y.call(u,function(){f.apply(void 0,Fe([],Ee(o),!1)).then(c).catch(h)})})},function(){var o;e.runAsync=f,(o=u.current)===null||o===void 0||o.cancel()}}},[r,t,a]),r?{onCancel:function(){var o;(o=u.current)===null||o===void 0||o.cancel()}}:{}};const Be=De;var Me=function(e){Z&&(Q(e)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof e,'".'))),g.useEffect(function(){e==null||e()},[])};const We=Me;var m=globalThis&&globalThis.__assign||function(){return m=Object.assign||function(i){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t])}return i},m.apply(this,arguments)},Le=globalThis&&globalThis.__awaiter||function(i,e,n,r){function t(a){return a instanceof n?a:new n(function(u){u(a)})}return new(n||(n=Promise))(function(a,u){function s(l){try{o(r.next(l))}catch(c){u(c)}}function f(l){try{o(r.throw(l))}catch(c){u(c)}}function o(l){l.done?a(l.value):t(l.value).then(s,f)}o((r=r.apply(i,e||[])).next())})},He=globalThis&&globalThis.__generator||function(i,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,t,a,u;return u={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function s(o){return function(l){return f([o,l])}}function f(o){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,t&&(a=o[0]&2?t.return:o[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,o[1])).done)return a;switch(t=0,a&&(o=[o[0]&2,a.value]),o[0]){case 0:case 1:a=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,t=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1],a=o;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(o);break}a[2]&&n.ops.pop(),n.trys.pop();continue}o=e.call(i,n)}catch(l){o=[6,l],t=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},Ne=globalThis&&globalThis.__rest||function(i,e){var n={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(n[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(i);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(i,r[t])&&(n[r[t]]=i[r[t]]);return n},A=globalThis&&globalThis.__read||function(i,e){var n=typeof Symbol=="function"&&i[Symbol.iterator];if(!n)return i;var r=n.call(i),t,a=[],u;try{for(;(e===void 0||e-- >0)&&!(t=r.next()).done;)a.push(t.value)}catch(s){u={error:s}}finally{try{t&&!t.done&&(n=r.return)&&n.call(r)}finally{if(u)throw u.error}}return a},O=globalThis&&globalThis.__spreadArray||function(i,e,n){if(n||arguments.length===2)for(var r=0,t=e.length,a;r<t;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return i.concat(a||Array.prototype.slice.call(e))},ze=function(){function i(e,n,r,t){t===void 0&&(t={}),this.serviceRef=e,this.options=n,this.subscribe=r,this.initState=t,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=m(m(m({},this.state),{loading:!n.manual}),t)}return i.prototype.setState=function(e){e===void 0&&(e={}),this.state=m(m({},this.state),e),this.subscribe()},i.prototype.runPluginHandler=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var t=this.pluginImpls.map(function(a){var u;return(u=a[e])===null||u===void 0?void 0:u.call.apply(u,O([a],A(n),!1))}).filter(Boolean);return Object.assign.apply(Object,O([{}],A(t),!1))},i.prototype.runAsync=function(){for(var e,n,r,t,a,u,s,f,o,l,c=[],h=0;h<arguments.length;h++)c[h]=arguments[h];return Le(this,void 0,void 0,function(){var y,v,p,d,b,$,B,x,_,w,z;return He(this,function(R){switch(R.label){case 0:if(this.count+=1,y=this.count,v=this.runPluginHandler("onBefore",c),p=v.stopNow,d=p===void 0?!1:p,b=v.returnNow,$=b===void 0?!1:b,B=Ne(v,["stopNow","returnNow"]),d)return[2,new Promise(function(){})];if(this.setState(m({loading:!0,params:c},B)),$)return[2,Promise.resolve(B.data)];(n=(e=this.options).onBefore)===null||n===void 0||n.call(e,c),R.label=1;case 1:return R.trys.push([1,3,,4]),x=this.runPluginHandler("onRequest",this.serviceRef.current,c).servicePromise,x||(x=(z=this.serviceRef).current.apply(z,O([],A(c),!1))),[4,x];case 2:return _=R.sent(),y!==this.count?[2,new Promise(function(){})]:(this.setState({data:_,error:void 0,loading:!1}),(t=(r=this.options).onSuccess)===null||t===void 0||t.call(r,_,c),this.runPluginHandler("onSuccess",_,c),(u=(a=this.options).onFinally)===null||u===void 0||u.call(a,c,_,void 0),y===this.count&&this.runPluginHandler("onFinally",c,_,void 0),[2,_]);case 3:if(w=R.sent(),y!==this.count)return[2,new Promise(function(){})];throw this.setState({error:w,loading:!1}),(f=(s=this.options).onError)===null||f===void 0||f.call(s,w,c),this.runPluginHandler("onError",w,c),(l=(o=this.options).onFinally)===null||l===void 0||l.call(o,c,void 0,w),y===this.count&&this.runPluginHandler("onFinally",c,void 0,w),w;case 4:return[2]}})})},i.prototype.run=function(){for(var e=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];this.runAsync.apply(this,O([],A(n),!1)).catch(function(t){e.options.onError||console.error(t)})},i.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},i.prototype.refresh=function(){this.run.apply(this,O([],A(this.state.params||[]),!1))},i.prototype.refreshAsync=function(){return this.runAsync.apply(this,O([],A(this.state.params||[]),!1))},i.prototype.mutate=function(e){var n=Q(e)?e(this.state.data):e;this.runPluginHandler("onMutate",n),this.setState({data:n})},i}();const Ue=ze;var L=globalThis&&globalThis.__assign||function(){return L=Object.assign||function(i){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t])}return i},L.apply(this,arguments)},Ge=globalThis&&globalThis.__rest||function(i,e){var n={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(n[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(i);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(i,r[t])&&(n[r[t]]=i[r[t]]);return n},V=globalThis&&globalThis.__read||function(i,e){var n=typeof Symbol=="function"&&i[Symbol.iterator];if(!n)return i;var r=n.call(i),t,a=[],u;try{for(;(e===void 0||e-- >0)&&!(t=r.next()).done;)a.push(t.value)}catch(s){u={error:s}}finally{try{t&&!t.done&&(n=r.return)&&n.call(r)}finally{if(u)throw u.error}}return a},J=globalThis&&globalThis.__spreadArray||function(i,e,n){if(n||arguments.length===2)for(var r=0,t=e.length,a;r<t;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return i.concat(a||Array.prototype.slice.call(e))};function qe(i,e,n){e===void 0&&(e={}),n===void 0&&(n=[]);var r=e.manual,t=r===void 0?!1:r,a=Ge(e,["manual"]),u=L({manual:t},a),s=k(i),f=I(),o=Y(function(){var l=n.map(function(c){var h;return(h=c==null?void 0:c.onInit)===null||h===void 0?void 0:h.call(c,u)}).filter(Boolean);return new Ue(s,u,f,Object.assign.apply(Object,J([{}],V(l),!1)))},[]);return o.options=u,o.pluginImpls=n.map(function(l){return l(o,u)}),We(function(){if(!t){var l=o.state.params||e.defaultParams||[];o.run.apply(o,J([],V(l),!1))}}),H(function(){o.cancel()}),{loading:o.state.loading,data:o.state.data,error:o.state.error,params:o.state.params||[],cancel:P(o.cancel.bind(o)),refresh:P(o.refresh.bind(o)),refreshAsync:P(o.refreshAsync.bind(o)),run:P(o.run.bind(o)),runAsync:P(o.runAsync.bind(o)),mutate:P(o.mutate.bind(o))}}var Ve=globalThis&&globalThis.__read||function(i,e){var n=typeof Symbol=="function"&&i[Symbol.iterator];if(!n)return i;var r=n.call(i),t,a=[],u;try{for(;(e===void 0||e-- >0)&&!(t=r.next()).done;)a.push(t.value)}catch(s){u={error:s}}finally{try{t&&!t.done&&(n=r.return)&&n.call(r)}finally{if(u)throw u.error}}return a},K=globalThis&&globalThis.__spreadArray||function(i,e,n){if(n||arguments.length===2)for(var r=0,t=e.length,a;r<t;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return i.concat(a||Array.prototype.slice.call(e))};function Xe(i,e,n){return qe(i,e,K(K([],Ve(n||[]),!1),[ye,be,Te,$e,Be,ne,de,je],!1))}export{te as d,Xe as u};
