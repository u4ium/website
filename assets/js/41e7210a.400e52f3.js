"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[38796],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,h=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51652:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={},s="Important Notes",u={unversionedId:"charts/stable/nextcloud/notes",id:"charts/stable/nextcloud/notes",title:"Important Notes",description:"Nextcloud is a VERY picky Application and is VERY hard to support.",source:"@site/docs/charts/stable/nextcloud/notes.md",sourceDirName:"charts/stable/nextcloud",slug:"/charts/stable/nextcloud/notes",permalink:"/docs/charts/stable/nextcloud/notes",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/nextcloud/notes.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Default Helm-Values",permalink:"/docs/charts/stable/nextcloud/helm-values"},next:{title:"Security Overview",permalink:"/docs/charts/stable/nextcloud/security"}},c={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"important-notes"},"Important Notes"),(0,a.kt)("p",null,"Nextcloud is a VERY picky Application and is VERY hard to support.\nFor this reason we ask you not to file support requests on our Discord or Github, unless your issue is clearly caused by TrueCharts."),(0,a.kt)("p",null,'While we consider the App layer "Stable", we simply cannot guarantee stability due to the nature of the Nextcloud Application inside the App.'),(0,a.kt)("h1",{id:"installation-notes"},"Installation Notes"),(0,a.kt)("p",null,"Nextcloud generates it's ",(0,a.kt)("inlineCode",{parentName:"p"},"config.php")," file on the first startup/installation. Therefore you have to set some values correctly on the first try.\nOtherwise you will have to either re-install the App or edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.php")," manually, with the latter being out of our support scope.\nThe mentioned values are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TRUSTED_PROXIES"),(0,a.kt)("li",{parentName:"ul"},"NODE_IP"),(0,a.kt)("li",{parentName:"ul"},"Ingress, if you plan to use it."),(0,a.kt)("li",{parentName:"ul"},"Data storage location, type (eg. PVC, hostPath).")),(0,a.kt)("p",null,"Also Nextcloud creates an Admin user on the first startup/installation, which you can only define it's username and password on the first install.\nChanging them later, will have no effect.\nThe mentioned values are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NEXTCLOUD_ADMIN_USER"),(0,a.kt)("li",{parentName:"ul"},"NEXTCLOUD_ADMIN_PASSWORD")))}d.isMDXComponent=!0}}]);