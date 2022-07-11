"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[73858],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(r),f=i,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},11056:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),o=["components"],s={},u="09 - Exposing Apps using Ingress and Traefik",l={unversionedId:"manual/SCALE Apps/Quick-Start Guides/add-ingress",id:"manual/SCALE Apps/Quick-Start Guides/add-ingress",title:"09 - Exposing Apps using Ingress and Traefik",description:'To use Traefik as ingress, all you have to do is enable "ingress" in the App of your choice and fill out a little form.',source:"@site/docs/manual/SCALE Apps/Quick-Start Guides/09-add-ingress.md",sourceDirName:"manual/SCALE Apps/Quick-Start Guides",slug:"/manual/SCALE Apps/Quick-Start Guides/add-ingress",permalink:"/docs/manual/SCALE Apps/Quick-Start Guides/add-ingress",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/manual/SCALE Apps/Quick-Start Guides/09-add-ingress.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"manualSidebar",previous:{title:"08 - Installing Traefik",permalink:"/docs/manual/SCALE Apps/Quick-Start Guides/installing-Traefik"},next:{title:"10 - Add Traefik Middleware to Apps",permalink:"/docs/manual/SCALE Apps/Quick-Start Guides/add-middleware"}},p={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Video Guide",id:"video-guide",level:2},{value:"Notes",id:"notes",level:2}],c={toc:d};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"09---exposing-apps-using-ingress-and-traefik"},"09 - Exposing Apps using Ingress and Traefik"),(0,a.kt)("p",null,'To use Traefik as ingress, all you have to do is enable "ingress" in the App of your choice and fill out a little form.\nWe currently require Traefik to be installed before you enable ingress on your App.'),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make sure your storage-pool is created and working"),(0,a.kt)("li",{parentName:"ul"},'Make sure you selected your storage-pool when you first opened the "Apps" interface, if not please refer to quick-start guide ',(0,a.kt)("inlineCode",{parentName:"li"},"01 - First time Apps setup")),(0,a.kt)("li",{parentName:"ul"},"Make sure you have a working internet connection and can reach github and truecharts.org from the host system."),(0,a.kt)("li",{parentName:"ul"},"Make sure you already added the TrueCharts catalog from guide 02"),(0,a.kt)("li",{parentName:"ul"},"Make sure your App is installed and, preferably, working"),(0,a.kt)("li",{parentName:"ul"},"Make sure you added your certificates in guide 07"),(0,a.kt)("li",{parentName:"ul"},"Make sure you've setup traefik in guide 08")),(0,a.kt)("h2",{id:"video-guide"},"Video Guide"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.youtube.com/embed/0Rmav5gyAwI",alt:"type:video"})),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,"There are a few highlights to take into account when adding a ingress to an App:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Adding hosts is required\nBy default the hosts list is empty, this is due to upstream design choices and is a issue that is yet to be solved upstream.\nHowever: adding hosts (preferably just one) is required for ANY app to function with a ingress enabled. Apps might not install and throw errors if you do not add any hosts.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Traefik not accepting/using certificates\nSometimes you might notice Traefik ignores your certificate. This is most likely due to the domain on your certificate, being different from the domain you entered into the reverse proxy host box.\nTraefik requires your certificate to match the domain used for Ingress. This is an upstream design decision and something we can easily and safely disable."))))}f.isMDXComponent=!0}}]);