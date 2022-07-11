"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8751],{3905:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return d}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=a.createContext({}),s=function(t){var e=a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,u=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=s(r),d=n,k=c["".concat(u,".").concat(d)]||c[d]||p[d]||l;return r?a.createElement(k,i(i({ref:e},m),{},{components:r})):a.createElement(k,i({ref:e},m))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},36052:function(t,e,r){r.r(e),r.d(e,{assets:function(){return m},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=r(83117),n=r(80102),l=(r(67294),r(3905)),i=["components"],o={},u="Default Helm-Values",s={unversionedId:"charts/stable/promcord/helm-values",id:"charts/stable/promcord/helm-values",title:"Default Helm-Values",description:"TrueCharts is primarily build to supply TrueNAS SCALE Apps.",source:"@site/docs/charts/stable/promcord/helm-values.md",sourceDirName:"charts/stable/promcord",slug:"/charts/stable/promcord/helm-values",permalink:"/docs/charts/stable/promcord/helm-values",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/promcord/helm-values.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog<br />",permalink:"/docs/charts/stable/promcord/CHANGELOG"},next:{title:"Security Overview",permalink:"/docs/charts/stable/promcord/security"}},m={},p=[{value:"Values",id:"values",level:2}],c={toc:p};function d(t){var e=t.components,r=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"default-helm-values"},"Default Helm-Values"),(0,l.kt)("p",null,"TrueCharts is primarily build to supply TrueNAS SCALE Apps.\nHowever, we also supply all Apps as standard Helm-Charts. In this document we aim to document the default values in our values.yaml file."),(0,l.kt)("p",null,'Most of our Apps also consume our "common" Helm Chart.\nIf this is the case, this means that all values.yaml values are set to the common chart values.yaml by default. This values.yaml file will only contain values that deviate from the common chart.\nYou will, however, be able to use all values referenced in the common chart here, besides the values listed in this document.'),(0,l.kt)("h2",{id:"values"},"Values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"env"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"See below"),(0,l.kt)("td",{parentName:"tr",align:null},"environment variables. See ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/nimarion/promcord/blob/master/README.md"},"application docs")," for more details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image.pullPolicy"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"IfNotPresent"')),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image.repository"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"tccr.io/truecharts/promcord"')),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image.tag"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"latest@sha256:ba9bee8d89b3ce86ca55d1bd29e13deb31f73a004991b17d8d80c73f2cc1c03c"')),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metrics.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"See values.yaml"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable and configure a Prometheus serviceMonitor for the chart under this key.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metrics.prometheusRule"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"See values.yaml"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable and configure Prometheus Rules for the chart under this key.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metrics.prometheusRule.rules"),(0,l.kt)("td",{parentName:"tr",align:null},"list"),(0,l.kt)("td",{parentName:"tr",align:null},"See prometheusrules.yaml"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure additionial rules for the chart under this key.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metrics.serviceMonitor.interval"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"1m"')),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metrics.serviceMonitor.labels"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metrics.serviceMonitor.scrapeTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"30s"')),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"See values.yaml"),(0,l.kt)("td",{parentName:"tr",align:null},"Configures service settings for the chart.")))),(0,l.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}d.isMDXComponent=!0}}]);