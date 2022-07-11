"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[79421],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||c;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},64782:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(83117),a=r(80102),c=(r(67294),r(3905)),o=["components"],s={hide:["toc"]},i="Security Overview",l={unversionedId:"charts/stable/librephotos/security",id:"charts/stable/librephotos/security",title:"Security Overview",description:"Helm-Chart",source:"@site/docs/charts/stable/librephotos/security.md",sourceDirName:"charts/stable/librephotos",slug:"/charts/stable/librephotos/security",permalink:"/docs/charts/stable/librephotos/security",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/librephotos/security.md",tags:[],version:"current",frontMatter:{hide:["toc"]},sidebar:"chartsSidebar",previous:{title:"Default Helm-Values",permalink:"/docs/charts/stable/librephotos/helm-values"},next:{title:"Introduction",permalink:"/docs/charts/stable/librespeed/"}},u={},d=[{value:"Helm-Chart",id:"helm-chart",level:2},{value:"Scan Results",id:"scan-results",level:5},{value:"Containers",id:"containers",level:2},{value:"Detected Containers",id:"detected-containers",level:5},{value:"Scan Results",id:"scan-results-1",level:5}],p={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"security-overview"},"Security Overview"),(0,c.kt)("link",{href:"https://truecharts.org/_static/trivy.css",type:"text/css",rel:"stylesheet"}),(0,c.kt)("h2",{id:"helm-chart"},"Helm-Chart"),(0,c.kt)("h5",{id:"scan-results"},"Scan Results"),(0,c.kt)("h2",{id:"containers"},"Containers"),(0,c.kt)("h5",{id:"detected-containers"},"Detected Containers"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"      tccr.io/truecharts/multi-init:v0.0.1@sha256:41185dcea1e6f6a035d8090da40aecc6a69cef66b91dc1332a90c9d22861d367\n      tccr.io/truecharts/librephotos-backend:v2022w6@sha256:4c24ce4ea5b340f83da0be0935eaea4ca525a15ed6da014f8ad8c709b377a837\n    - 'tccr.io/truecharts/librephotos-frontend:v2022w6@sha256:9cb2cb4865197d460405fecd79bdd7808333443cb2089753825f7f97365a53a3'\n    - 'tccr.io/truecharts/librephotos-proxy:v2022w6@sha256:c147eaa3e96348e44132958ca871114a2ce240f0fa3604f738801317af09a160'\n      tccr.io/truecharts/multi-init:v0.0.1@sha256:41185dcea1e6f6a035d8090da40aecc6a69cef66b91dc1332a90c9d22861d367\n      tccr.io/truecharts/postgresql:v14.4.0@sha256:bd156ce74b29ee99bef079166d7472f27748889aea4c5f02001eba9499e7aebe\n      tccr.io/truecharts/multi-init:v0.0.1@sha256:41185dcea1e6f6a035d8090da40aecc6a69cef66b91dc1332a90c9d22861d367\n      tccr.io/truecharts/redis:v7.0.2@sha256:12331c08d5f9a580f881bbbd35e85450327c22145815aa06dfe4b4d416a1bdd4\n")),(0,c.kt)("h5",{id:"scan-results-1"},"Scan Results"),(0,c.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,c.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,c.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,c.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,c.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,c.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,c.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,c.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,c.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,c.kt)("p",null,"SCANNING DISABLED DUE TO BUG"))}f.isMDXComponent=!0}}]);