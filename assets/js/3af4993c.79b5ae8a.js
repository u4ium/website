"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[88990],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82637:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=r(83117),n=r(80102),l=(r(67294),r(3905)),i=["components"],o={},u="Default Helm-Values",s={unversionedId:"charts/stable/prowlarr/helm-values",id:"charts/stable/prowlarr/helm-values",title:"Default Helm-Values",description:"TrueCharts is primarily build to supply TrueNAS SCALE Apps.",source:"@site/docs/charts/stable/prowlarr/helm-values.md",sourceDirName:"charts/stable/prowlarr",slug:"/charts/stable/prowlarr/helm-values",permalink:"/docs/charts/stable/prowlarr/helm-values",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/prowlarr/helm-values.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog<br />",permalink:"/docs/charts/stable/prowlarr/CHANGELOG"},next:{title:"Security Overview",permalink:"/docs/charts/stable/prowlarr/security"}},p={},c=[{value:"Values",id:"values",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"default-helm-values"},"Default Helm-Values"),(0,l.kt)("p",null,"TrueCharts is primarily build to supply TrueNAS SCALE Apps.\nHowever, we also supply all Apps as standard Helm-Charts. In this document we aim to document the default values in our values.yaml file."),(0,l.kt)("p",null,'Most of our Apps also consume our "common" Helm Chart.\nIf this is the case, this means that all values.yaml values are set to the common chart values.yaml by default. This values.yaml file will only contain values that deviate from the common chart.\nYou will, however, be able to use all values referenced in the common chart here, besides the values listed in this document.'),(0,l.kt)("h2",{id:"values"},"Values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"env"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"See below"),(0,l.kt)("td",{parentName:"tr",align:null},"environment variables.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image.pullPolicy"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"IfNotPresent"')),(0,l.kt)("td",{parentName:"tr",align:null},"image pull policy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image.repository"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"tccr.io/truecharts/prowlarr"')),(0,l.kt)("td",{parentName:"tr",align:null},"image repository")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image.tag"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"v0.2.0.1632@sha256:2d30566fc2543bc64758f4ad50a8a5d8cb7f7b414e9177509f3eb129540e1fcc"')),(0,l.kt)("td",{parentName:"tr",align:null},"image tag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ingress.main"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"See values.yaml"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable and configure ingress settings for the chart under this key.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"persistence"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"See values.yaml"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure persistence settings for the chart under this key.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"securityContext.readOnlyRootFilesystem"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"See values.yaml"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the container timezone -- Configures service settings for the chart.")))),(0,l.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}d.isMDXComponent=!0}}]);