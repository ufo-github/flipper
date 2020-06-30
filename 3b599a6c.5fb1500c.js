(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{172:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return f})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(11),i=(r(0),r(221)),c=r(225),a=r(230),u={id:"shared-preferences-plugin",title:"Shared Preferences"},f={id:"features/shared-preferences-plugin",title:"Shared Preferences",description:"\u2192 See setup instructions for the Shared Preferences plugin",source:"@site/../docs/features/shared-preferences-plugin.mdx",permalink:"/docs/features/shared-preferences-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/features/shared-preferences-plugin.mdx",sidebar:"features",previous:{title:"Sandbox",permalink:"/docs/features/sandbox-plugin"},next:{title:"LeakCanary",permalink:"/docs/features/leak-canary-plugin"}},s=[],p={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u2192 ",Object(i.b)(a.a,{to:Object(c.a)("/docs/setup/shared-preferences-plugin"),mdxType:"Link"},"See setup instructions for the Shared Preferences plugin")),Object(i.b)("p",null,"Easily inspect and modify the data contained within your app's shared preferences."),Object(i.b)("img",{alt:"Shared Preferences Plugin",src:Object(c.a)("img/shared-preferences.png")}),Object(i.b)("p",null,"All changes to the given shared preference file will automatically appear in Flipper. You may also edit the values in Flipper and have them synced to your device. This can be done by clicking on the value of the specific key you wish to edit, editing the value and then pressing enter."))}l.isMDXComponent=!0},221:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=o.a.createContext({}),s=function(e){var t=o.a.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},p=function(e){var t=s(e.components);return o.a.createElement(f.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,y=p["".concat(c,".").concat(b)]||p[b]||l[b]||i;return r?o.a.createElement(y,a({ref:t},f,{components:r})):o.a.createElement(y,a({ref:t},f))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var f=2;f<i;f++)c[f]=r[f];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},222:function(e,t,r){"use strict";var n=r(8),o=r(10),i=r(226),c="".startsWith;n(n.P+n.F*r(227)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return c?c.call(t,n,r):t.slice(r,r+n.length)===n}})},223:function(e,t,r){"use strict";var n=r(0),o=r(59);t.a=function(){return Object(n.useContext)(o.a)}},224:function(e,t){t.f=Object.getOwnPropertySymbols},225:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(222);var n=r(223);function o(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},226:function(e,t,r){var n=r(86),o=r(33);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},227:function(e,t,r){var n=r(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}},228:function(e,t,r){var n=r(91),o=r(60).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},229:function(e,t,r){t.f=r(3)},230:function(e,t,r){"use strict";r(232),r(222),r(24),r(235),r(87);var n=r(0),o=r.n(n),i=r(44),c=r(231),a=r(34),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t,r=e.isNavLink,f=u(e,["isNavLink"]),s=f.to,p=f.href,l=s||p,b=Object(c.a)(l),y=Object(n.useRef)(!1),h=r?i.c:i.b,d=a.a.canUseIntersectionObserver;return Object(n.useEffect)((function(){return!d&&b&&window.docusaurus.prefetch(l),function(){d&&t&&t.disconnect()}}),[l,d,b]),l&&b&&!l.startsWith("#")?o.a.createElement(h,Object.assign({},f,{onMouseEnter:function(){y.current||(window.docusaurus.preload(l),y.current=!0)},innerRef:function(e){var r,n;d&&e&&b&&(r=e,n=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:l})):o.a.createElement("a",Object.assign({href:l},!b&&{target:"_blank",rel:"noopener noreferrer"},f))}},231:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return n}))},232:function(e,t,r){var n=r(8);n(n.S+n.F,"Object",{assign:r(234)})},233:function(e,t,r){var n=r(84),o=r(41),i=r(31),c=r(85),a=r(30),u=r(89),f=Object.getOwnPropertyDescriptor;t.f=r(14)?f:function(e,t){if(e=i(e),t=c(t,!0),u)try{return f(e,t)}catch(r){}if(a(e,t))return o(!n.f.call(e,t),e[t])}},234:function(e,t,r){"use strict";var n=r(14),o=r(32),i=r(224),c=r(84),a=r(16),u=r(46),f=Object.assign;e.exports=!f||r(15)((function(){var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach((function(e){t[e]=e})),7!=f({},e)[r]||Object.keys(f({},t)).join("")!=n}))?function(e,t){for(var r=a(e),f=arguments.length,s=1,p=i.f,l=c.f;f>s;)for(var b,y=u(arguments[s++]),h=p?o(y).concat(p(y)):o(y),d=h.length,g=0;d>g;)b=h[g++],n&&!l.call(y,b)||(r[b]=y[b]);return r}:f},235:function(e,t,r){"use strict";var n=r(6),o=r(30),i=r(14),c=r(8),a=r(17),u=r(236).KEY,f=r(15),s=r(45),p=r(47),l=r(42),b=r(3),y=r(229),h=r(237),d=r(238),g=r(88),v=r(9),m=r(12),O=r(16),j=r(31),w=r(85),S=r(41),P=r(90),E=r(239),x=r(233),k=r(224),T=r(23),N=r(32),F=x.f,D=T.f,C=E.f,W=n.Symbol,I=n.JSON,M=I&&I.stringify,J=b("_hidden"),L=b("toPrimitive"),_={}.propertyIsEnumerable,R=s("symbol-registry"),A=s("symbols"),K=s("op-symbols"),U=Object.prototype,X="function"==typeof W&&!!k.f,Y=n.QObject,q=!Y||!Y.prototype||!Y.prototype.findChild,z=i&&f((function(){return 7!=P(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=F(U,t);n&&delete U[t],D(e,t,r),n&&e!==U&&D(U,t,n)}:D,G=function(e){var t=A[e]=P(W.prototype);return t._k=e,t},Q=X&&"symbol"==typeof W.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof W},B=function(e,t,r){return e===U&&B(K,t,r),v(e),t=w(t,!0),v(r),o(A,t)?(r.enumerable?(o(e,J)&&e[J][t]&&(e[J][t]=!1),r=P(r,{enumerable:S(0,!1)})):(o(e,J)||D(e,J,S(1,{})),e[J][t]=!0),z(e,t,r)):D(e,t,r)},H=function(e,t){v(e);for(var r,n=d(t=j(t)),o=0,i=n.length;i>o;)B(e,r=n[o++],t[r]);return e},V=function(e){var t=_.call(this,e=w(e,!0));return!(this===U&&o(A,e)&&!o(K,e))&&(!(t||!o(this,e)||!o(A,e)||o(this,J)&&this[J][e])||t)},Z=function(e,t){if(e=j(e),t=w(t,!0),e!==U||!o(A,t)||o(K,t)){var r=F(e,t);return!r||!o(A,t)||o(e,J)&&e[J][t]||(r.enumerable=!0),r}},$=function(e){for(var t,r=C(j(e)),n=[],i=0;r.length>i;)o(A,t=r[i++])||t==J||t==u||n.push(t);return n},ee=function(e){for(var t,r=e===U,n=C(r?K:j(e)),i=[],c=0;n.length>c;)!o(A,t=n[c++])||r&&!o(U,t)||i.push(A[t]);return i};X||(a((W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor!");var e=l(arguments.length>0?arguments[0]:void 0),t=function(r){this===U&&t.call(K,r),o(this,J)&&o(this[J],e)&&(this[J][e]=!1),z(this,e,S(1,r))};return i&&q&&z(U,e,{configurable:!0,set:t}),G(e)}).prototype,"toString",(function(){return this._k})),x.f=Z,T.f=B,r(228).f=E.f=$,r(84).f=V,k.f=ee,i&&!r(43)&&a(U,"propertyIsEnumerable",V,!0),y.f=function(e){return G(b(e))}),c(c.G+c.W+c.F*!X,{Symbol:W});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;te.length>re;)b(te[re++]);for(var ne=N(b.store),oe=0;ne.length>oe;)h(ne[oe++]);c(c.S+c.F*!X,"Symbol",{for:function(e){return o(R,e+="")?R[e]:R[e]=W(e)},keyFor:function(e){if(!Q(e))throw TypeError(e+" is not a symbol!");for(var t in R)if(R[t]===e)return t},useSetter:function(){q=!0},useSimple:function(){q=!1}}),c(c.S+c.F*!X,"Object",{create:function(e,t){return void 0===t?P(e):H(P(e),t)},defineProperty:B,defineProperties:H,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:ee});var ie=f((function(){k.f(1)}));c(c.S+c.F*ie,"Object",{getOwnPropertySymbols:function(e){return k.f(O(e))}}),I&&c(c.S+c.F*(!X||f((function(){var e=W();return"[null]"!=M([e])||"{}"!=M({a:e})||"{}"!=M(Object(e))}))),"JSON",{stringify:function(e){for(var t,r,n=[e],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=t=n[1],(m(t)||void 0!==e)&&!Q(e))return g(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!Q(t))return t}),n[1]=t,M.apply(I,n)}}),W.prototype[L]||r(13)(W.prototype,L,W.prototype.valueOf),p(W,"Symbol"),p(Math,"Math",!0),p(n.JSON,"JSON",!0)},236:function(e,t,r){var n=r(42)("meta"),o=r(12),i=r(30),c=r(23).f,a=0,u=Object.isExtensible||function(){return!0},f=!r(15)((function(){return u(Object.preventExtensions({}))})),s=function(e){c(e,n,{value:{i:"O"+ ++a,w:{}}})},p=e.exports={KEY:n,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,n)){if(!u(e))return"F";if(!t)return"E";s(e)}return e[n].i},getWeak:function(e,t){if(!i(e,n)){if(!u(e))return!0;if(!t)return!1;s(e)}return e[n].w},onFreeze:function(e){return f&&p.NEED&&u(e)&&!i(e,n)&&s(e),e}}},237:function(e,t,r){var n=r(6),o=r(18),i=r(43),c=r(229),a=r(23).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||a(t,e,{value:c.f(e)})}},238:function(e,t,r){var n=r(32),o=r(224),i=r(84);e.exports=function(e){var t=n(e),r=o.f;if(r)for(var c,a=r(e),u=i.f,f=0;a.length>f;)u.call(e,c=a[f++])&&t.push(c);return t}},239:function(e,t,r){var n=r(31),o=r(228).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return c&&"[object Window]"==i.call(e)?function(e){try{return o(e)}catch(t){return c.slice()}}(e):o(n(e))}}}]);