"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[57722],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(r),f=c,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,i=new Array(a);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:c,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},97099:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var n=r(83117),c=r(80102),a=(r(67294),r(3905)),i=["components"],o={hide:["toc"]},s="Security Overview",u={unversionedId:"charts/stable/monica/security",id:"charts/stable/monica/security",title:"Security Overview",description:"Helm-Chart",source:"@site/docs/charts/stable/monica/security.md",sourceDirName:"charts/stable/monica",slug:"/charts/stable/monica/security",permalink:"/docs/charts/stable/monica/security",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/monica/security.md",tags:[],version:"current",frontMatter:{hide:["toc"]},sidebar:"chartsSidebar",previous:{title:"Default Helm-Values",permalink:"/docs/charts/stable/monica/helm-values"},next:{title:"Introduction",permalink:"/docs/charts/stable/mosquitto/"}},l={},d=[{value:"Helm-Chart",id:"helm-chart",level:2},{value:"Scan Results",id:"scan-results",level:5},{value:"Containers",id:"containers",level:2},{value:"Detected Containers",id:"detected-containers",level:5},{value:"Scan Results",id:"scan-results-1",level:5}],p={toc:d};function f(e){var t=e.components,r=(0,c.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"security-overview"},"Security Overview"),(0,a.kt)("link",{href:"https://truecharts.org/_static/trivy.css",type:"text/css",rel:"stylesheet"}),(0,a.kt)("h2",{id:"helm-chart"},"Helm-Chart"),(0,a.kt)("h5",{id:"scan-results"},"Scan Results"),(0,a.kt)("h2",{id:"containers"},"Containers"),(0,a.kt)("h5",{id:"detected-containers"},"Detected Containers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      tccr.io/truecharts/multi-init:v0.0.1@sha256:41185dcea1e6f6a035d8090da40aecc6a69cef66b91dc1332a90c9d22861d367\n      tccr.io/truecharts/monica:v3.7.0@sha256:b71dbe325d882d4f799ec84d978760121e27725aac7aabe8f4c5923c3bec4723\n      tccr.io/truecharts/multi-init:v0.0.1@sha256:41185dcea1e6f6a035d8090da40aecc6a69cef66b91dc1332a90c9d22861d367\n      tccr.io/truecharts/mariadb:v10.8.3@sha256:31d068abf7d460574a9068b7363a5b3e8df44872970841c59781883bec85cbf4\n")),(0,a.kt)("h5",{id:"scan-results-1"},"Scan Results"),(0,a.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,a.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,a.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,a.kt)("p",null,"SCANNING DISABLED DUE TO BUG"))}f.isMDXComponent=!0}}]);