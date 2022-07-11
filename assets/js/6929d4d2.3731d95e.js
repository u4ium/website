"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8379],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83429:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),c=["components"],s={hide:["toc"]},o="Security Overview",l={unversionedId:"charts/stable/minisatip/security",id:"charts/stable/minisatip/security",title:"Security Overview",description:"Helm-Chart",source:"@site/docs/charts/stable/minisatip/security.md",sourceDirName:"charts/stable/minisatip",slug:"/charts/stable/minisatip/security",permalink:"/docs/charts/stable/minisatip/security",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/minisatip/security.md",tags:[],version:"current",frontMatter:{hide:["toc"]},sidebar:"chartsSidebar",previous:{title:"Default Helm-Values",permalink:"/docs/charts/stable/minisatip/helm-values"},next:{title:"Installation Notes",permalink:"/docs/charts/stable/mkvcleaver/notes"}},u={},p=[{value:"Helm-Chart",id:"helm-chart",level:2},{value:"Scan Results",id:"scan-results",level:5},{value:"Containers",id:"containers",level:2},{value:"Detected Containers",id:"detected-containers",level:5},{value:"Scan Results",id:"scan-results-1",level:5}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security-overview"},"Security Overview"),(0,i.kt)("link",{href:"https://truecharts.org/_static/trivy.css",type:"text/css",rel:"stylesheet"}),(0,i.kt)("h2",{id:"helm-chart"},"Helm-Chart"),(0,i.kt)("h5",{id:"scan-results"},"Scan Results"),(0,i.kt)("h2",{id:"containers"},"Containers"),(0,i.kt)("h5",{id:"detected-containers"},"Detected Containers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      tccr.io/truecharts/multi-init:v0.0.1@sha256:41185dcea1e6f6a035d8090da40aecc6a69cef66b91dc1332a90c9d22861d367\n      tccr.io/truecharts/minisatip:v2021.12.01\n")),(0,i.kt)("h5",{id:"scan-results-1"},"Scan Results"),(0,i.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,i.kt)("p",null,"SCANNING DISABLED DUE TO BUG"))}f.isMDXComponent=!0}}]);