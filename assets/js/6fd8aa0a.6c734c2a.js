"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[81388],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),u=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),h=u(r),d=a,m=h["".concat(o,".").concat(d)]||h[d]||p[d]||i;return r?n.createElement(m,l(l({ref:e},c),{},{components:r})):n.createElement(m,l({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=h;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:a,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},47194:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),l=["components"],s={},o="Introduction",u={unversionedId:"charts/stable/synapse/index",id:"charts/stable/synapse/index",title:"Introduction",description:"A Helm chart to deploy a Matrix homeserver stack into Kubernetes",source:"@site/docs/charts/stable/synapse/index.md",sourceDirName:"charts/stable/synapse",slug:"/charts/stable/synapse/",permalink:"/docs/charts/stable/synapse/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/synapse/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Security Overview",permalink:"/docs/charts/stable/strapi/security"},next:{title:"Changelog<br />",permalink:"/docs/charts/stable/synapse/CHANGELOG"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"Upgrading, Rolling Back and Uninstalling the Chart",id:"upgrading-rolling-back-and-uninstalling-the-chart",level:2},{value:"Support",id:"support",level:2}],h={toc:p};function d(t){var e=t.components,r=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A Helm chart to deploy a Matrix homeserver stack into Kubernetes"),(0,i.kt)("p",null,"TrueCharts are designed to be installed as TrueNAS SCALE app only. We can not guarantee this charts works as a stand-alone helm installation.\n",(0,i.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/truecharts/apps/issues/new/choose"},"here"))),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"Kubernetes: ",(0,i.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Repository"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://charts.truecharts.org/"},"https://charts.truecharts.org/")),(0,i.kt)("td",{parentName:"tr",align:null},"postgresql"),(0,i.kt)("td",{parentName:"tr",align:null},"8.0.24")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://library-charts.truecharts.org"},"https://library-charts.truecharts.org")),(0,i.kt)("td",{parentName:"tr",align:null},"common"),(0,i.kt)("td",{parentName:"tr",align:null},"10.2.1")))),(0,i.kt)("h2",{id:"installing-the-chart"},"Installing the Chart"),(0,i.kt)("p",null,"To install this App on TrueNAS SCALE check our ",(0,i.kt)("a",{parentName:"p",href:"https://truecharts.org/manual/Quick-Start%20Guides/02-Installing-an-App/"},"Quick-Start Guide"),"."),(0,i.kt)("h2",{id:"upgrading-rolling-back-and-uninstalling-the-chart"},"Upgrading, Rolling Back and Uninstalling the Chart"),(0,i.kt)("p",null,"To upgrade, rollback or delete this App from TrueNAS SCALE check our ",(0,i.kt)("a",{parentName:"p",href:"https://truecharts.org/manual/Quick-Start%20Guides/04-Upgrade-rollback-delete-an-App/"},"Quick-Start Guide"),"."),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please check our ",(0,i.kt)("a",{parentName:"li",href:"https://truecharts.org/manual/Quick-Start%20Guides/01-Adding-TrueCharts/"},"quick-start guides")," first."),(0,i.kt)("li",{parentName:"ul"},"See the ",(0,i.kt)("a",{parentName:"li",href:"https://truecharts.org"},"Wiki")),(0,i.kt)("li",{parentName:"ul"},"Check our ",(0,i.kt)("a",{parentName:"li",href:"https://discord.gg/tVsPTHWTtr"},"Discord")),(0,i.kt)("li",{parentName:"ul"},"Open a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/new/choose"},"issue"))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}d.isMDXComponent=!0}}]);