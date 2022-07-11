"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[68280],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(h,s(s({ref:t},l),{},{components:r})):n.createElement(h,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89672:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),s=["components"],o={},c="Ingress",u={unversionedId:"charts/stable/duplicati/Adding-Ingress",id:"charts/stable/duplicati/Adding-Ingress",title:"Ingress",description:"This chart requires Ingress to be enabled after initial install due to the configuration of the application upstream (see Duplicati forum post). Please install the application without Ingress, access settings of the application and add your hostname inside the settings of the app.",source:"@site/docs/charts/stable/duplicati/Adding-Ingress.md",sourceDirName:"charts/stable/duplicati",slug:"/charts/stable/duplicati/Adding-Ingress",permalink:"/docs/charts/stable/duplicati/Adding-Ingress",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/duplicati/Adding-Ingress.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Introduction",permalink:"/docs/charts/stable/duplicati/"},next:{title:"Changelog<br />",permalink:"/docs/charts/stable/duplicati/CHANGELOG"}},l={},p=[],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ingress"},"Ingress"),(0,i.kt)("p",null,"This chart requires Ingress to be enabled after initial install due to the configuration of the application upstream (see ",(0,i.kt)("a",{parentName:"p",href:"https://forum.duplicati.com/t/error-message-in-browser-the-host-header-sent-by-the-client-is-not-allowed/5806"},"Duplicati forum post"),"). Please install the application without Ingress, access settings of the application and add your hostname inside the settings of the app."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/89483932/174445638-bac32cc8-375f-4fdb-a99f-f8b75a4613e1.png",alt:"image"})),(0,i.kt)("p",null,"Once this is done you can successful add Ingress using the steps outlined inside our ",(0,i.kt)("a",{parentName:"p",href:"https://truecharts.org/manual/Quick-Start%20Guides/09-add-ingress/"},"Quick-Start Guide"),". If you require more help or details please refer to our Discord for help from our Support Staff."))}f.isMDXComponent=!0}}]);