"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[58131],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=c,y=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(y,o(o({ref:t},l),{},{components:r})):n.createElement(y,o({ref:t},l))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:c,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},639:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(83117),c=r(80102),a=(r(67294),r(3905)),o=["components"],s={hide:["toc"]},i="Security Overview",u={unversionedId:"charts/stable/pwndrop/security",id:"charts/stable/pwndrop/security",title:"Security Overview",description:"Helm-Chart",source:"@site/docs/charts/stable/pwndrop/security.md",sourceDirName:"charts/stable/pwndrop",slug:"/charts/stable/pwndrop/security",permalink:"/docs/charts/stable/pwndrop/security",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/pwndrop/security.md",tags:[],version:"current",frontMatter:{hide:["toc"]},sidebar:"chartsSidebar",previous:{title:"Default Helm-Values",permalink:"/docs/charts/stable/pwndrop/helm-values"},next:{title:"Introduction",permalink:"/docs/charts/stable/pydio-cells/"}},l={},p=[{value:"Helm-Chart",id:"helm-chart",level:2},{value:"Scan Results",id:"scan-results",level:5},{value:"Containers",id:"containers",level:2},{value:"Detected Containers",id:"detected-containers",level:5},{value:"Scan Results",id:"scan-results-1",level:5}],d={toc:p};function f(e){var t=e.components,r=(0,c.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"security-overview"},"Security Overview"),(0,a.kt)("link",{href:"https://truecharts.org/_static/trivy.css",type:"text/css",rel:"stylesheet"}),(0,a.kt)("h2",{id:"helm-chart"},"Helm-Chart"),(0,a.kt)("h5",{id:"scan-results"},"Scan Results"),(0,a.kt)("h2",{id:"containers"},"Containers"),(0,a.kt)("h5",{id:"detected-containers"},"Detected Containers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      tccr.io/truecharts/multi-init:v0.0.1@sha256:41185dcea1e6f6a035d8090da40aecc6a69cef66b91dc1332a90c9d22861d367\n      tccr.io/truecharts/pwndrop:v1.0.1\n")),(0,a.kt)("h5",{id:"scan-results-1"},"Scan Results"),(0,a.kt)("p",null,"SCANNING DISABLED DUE TO BUG"),(0,a.kt)("p",null,"SCANNING DISABLED DUE TO BUG"))}f.isMDXComponent=!0}}]);