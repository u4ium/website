"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[64004],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(r),d=i,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98804:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),o=["components"],s={},c="How to: Create Certificates",u={unversionedId:"manual/SCALE Apps/indepth/certificates",id:"manual/SCALE Apps/indepth/certificates",title:"How to: Create Certificates",description:'At TrueCharts we support HTTPS deployments of every app using our Traefik Reverse Proxy. We support both self-signed, custom and lets-encrypt certificates, using the TrueNAS SCALE building certificate manager. Available under "Credentials"',source:"@site/docs/manual/SCALE Apps/indepth/certificates.md",sourceDirName:"manual/SCALE Apps/indepth",slug:"/manual/SCALE Apps/indepth/certificates",permalink:"/docs/manual/SCALE Apps/indepth/certificates",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/manual/SCALE Apps/indepth/certificates.md",tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"15 - Accessing PVC Data",permalink:"/docs/manual/SCALE Apps/Quick-Start Guides/pvc-access"},next:{title:"Clustering",permalink:"/docs/manual/SCALE Apps/indepth/clustering"}},l={},p=[{value:"Self Signed certificates",id:"self-signed-certificates",level:2},{value:"Lets-Encrypt Certificates",id:"lets-encrypt-certificates",level:2},{value:"Import existing certificates",id:"import-existing-certificates",level:2}],f={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-create-certificates"},"How to: Create Certificates"),(0,a.kt)("p",null,'At TrueCharts we support HTTPS deployments of every app using our Traefik Reverse Proxy. We support both self-signed, custom and lets-encrypt certificates, using the TrueNAS SCALE building certificate manager. Available under "Credentials"'),(0,a.kt)("h2",{id:"self-signed-certificates"},"Self Signed certificates"),(0,a.kt)("p",null,'Self signed certificates are relatively straight forward and handled by Traefik itself. You just select the default TrueNAS certificate when adding a ingress to your App and Traefik does the rest!\nPlease be aware that these certificates are not really secure, but are "good enough" for testing.'),(0,a.kt)("h2",{id:"lets-encrypt-certificates"},"Lets-Encrypt Certificates"),(0,a.kt)("p",null,'With the current version of TrueNAS SCALE, it\'s possible to automatically generate certificates for your domain(s) using letsencrypt. However, this process is not very clear, hence we added a short how-to guide as well.\nAfter you managed to complete this, you should be able to select "iX Certificate" as certificate option and your personal certificate in the other drop-down box!'),(0,a.kt)("h2",{id:"import-existing-certificates"},"Import existing certificates"),(0,a.kt)("p",null,"TrueNAS SCALE also allows you to manually import certificates, this is rather straight forward:\nCopy-Paste the keys into their respective boxes and hit ",(0,a.kt)("inlineCode",{parentName:"p"},"save")))}d.isMDXComponent=!0}}]);