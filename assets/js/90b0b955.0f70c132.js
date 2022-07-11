"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[90992],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=c,b=p["".concat(o,".").concat(f)]||p[f]||d[f]||s;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var s=r.length,a=new Array(s);a[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},97076:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var n=r(83117),c=r(80102),s=(r(67294),r(3905)),a=["components"],i={hide:["toc"]},o="Security Overview",l={unversionedId:"charts/stable/sqlitebrowser/security",id:"charts/stable/sqlitebrowser/security",title:"Security Overview",description:"Helm-Chart",source:"@site/docs/charts/stable/sqlitebrowser/security.md",sourceDirName:"charts/stable/sqlitebrowser",slug:"/charts/stable/sqlitebrowser/security",permalink:"/docs/charts/stable/sqlitebrowser/security",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/sqlitebrowser/security.md",tags:[],version:"current",frontMatter:{hide:["toc"]},sidebar:"chartsSidebar",previous:{title:"Default Helm-Values",permalink:"/docs/charts/stable/sqlitebrowser/helm-values"},next:{title:"Introduction",permalink:"/docs/charts/stable/stash/"}},u={},d=[{value:"Helm-Chart",id:"helm-chart",level:2},{value:"Scan Results",id:"scan-results",level:5},{value:"Containers",id:"containers",level:2},{value:"Detected Containers",id:"detected-containers",level:5},{value:"Scan Results",id:"scan-results-1",level:5}],p={toc:d};function f(e){var t=e.components,r=(0,c.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"security-overview"},"Security Overview"),(0,s.kt)("link",{href:"https://truecharts.org/_static/trivy.css",type:"text/css",rel:"stylesheet"}),(0,s.kt)("h2",{id:"helm-chart"},"Helm-Chart"),(0,s.kt)("h5",{id:"scan-results"},"Scan Results"),(0,s.kt)("h2",{id:"containers"},"Containers"),(0,s.kt)("h5",{id:"detected-containers"},"Detected Containers"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"      tccr.io/truecharts/multi-init:v0.0.1@sha256:41185dcea1e6f6a035d8090da40aecc6a69cef66b91dc1332a90c9d22861d367\n      tccr.io/truecharts/sqlitebrowser:version-3.12.2-02876202105241947ubuntu18.04.1@sha256:fc18746d4b3c37355ef0015b34c9bdd1d023c528d05097bf6dc839d54234fc48\n")),(0,s.kt)("h5",{id:"scan-results-1"},"Scan Results"),(0,s.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,s.kt)("p",null,"SCANNING DISABLED DUE TO BUG"))}f.isMDXComponent=!0}}]);