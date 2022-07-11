"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[61376],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=o(r),f=a,b=d["".concat(l,".").concat(f)]||d[f]||p[f]||c;return r?n.createElement(b,s(s({ref:t},u),{},{components:r})):n.createElement(b,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var o=2;o<c;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89690:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var n=r(83117),a=r(80102),c=(r(67294),r(3905)),s=["components"],i={hide:["toc"]},l="Security Overview",o={unversionedId:"charts/stable/paperless-ng/security",id:"charts/stable/paperless-ng/security",title:"Security Overview",description:"Helm-Chart",source:"@site/docs/charts/stable/paperless-ng/security.md",sourceDirName:"charts/stable/paperless-ng",slug:"/charts/stable/paperless-ng/security",permalink:"/docs/charts/stable/paperless-ng/security",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/paperless-ng/security.md",tags:[],version:"current",frontMatter:{hide:["toc"]},sidebar:"chartsSidebar",previous:{title:"Default Helm-Values",permalink:"/docs/charts/stable/paperless-ng/helm-values"},next:{title:"Introduction",permalink:"/docs/charts/stable/papermerge/"}},u={},p=[{value:"Helm-Chart",id:"helm-chart",level:2},{value:"Scan Results",id:"scan-results",level:5},{value:"Containers",id:"containers",level:2},{value:"Detected Containers",id:"detected-containers",level:5},{value:"Scan Results",id:"scan-results-1",level:5}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"security-overview"},"Security Overview"),(0,c.kt)("link",{href:"https://truecharts.org/_static/trivy.css",type:"text/css",rel:"stylesheet"}),(0,c.kt)("h2",{id:"helm-chart"},"Helm-Chart"),(0,c.kt)("h5",{id:"scan-results"},"Scan Results"),(0,c.kt)("h2",{id:"containers"},"Containers"),(0,c.kt)("h5",{id:"detected-containers"},"Detected Containers"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"      tccr.io/truecharts/multi-init:v0.0.1@sha256:41185dcea1e6f6a035d8090da40aecc6a69cef66b91dc1332a90c9d22861d367\n      tccr.io/truecharts/paperless-ng:v1.7.1@sha256:3cf778235059abdebd321bc886dff741355d1698b38f6da5c6519f2afe375bea\n      tccr.io/truecharts/multi-init:v0.0.1@sha256:41185dcea1e6f6a035d8090da40aecc6a69cef66b91dc1332a90c9d22861d367\n      tccr.io/truecharts/postgresql:v14.4.0@sha256:bd156ce74b29ee99bef079166d7472f27748889aea4c5f02001eba9499e7aebe\n      tccr.io/truecharts/multi-init:v0.0.1@sha256:41185dcea1e6f6a035d8090da40aecc6a69cef66b91dc1332a90c9d22861d367\n      tccr.io/truecharts/redis:v7.0.2@sha256:12331c08d5f9a580f881bbbd35e85450327c22145815aa06dfe4b4d416a1bdd4\n")),(0,c.kt)("h5",{id:"scan-results-1"},"Scan Results"),(0,c.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,c.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,c.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,c.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,c.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,c.kt)("p",null,"SCANNING DISABLED DUE TO BUG"))}f.isMDXComponent=!0}}]);