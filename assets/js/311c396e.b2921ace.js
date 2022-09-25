"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[42127],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30782:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={},u="Migration Notes",s={unversionedId:"charts/stable/nextcloud/migration_guide",id:"charts/stable/nextcloud/migration_guide",title:"Migration Notes",description:"This guide is provided as a resource to help taken from our Discord, but since 15.X is a breaking change",source:"@site/docs/charts/stable/nextcloud/migration_guide.md",sourceDirName:"charts/stable/nextcloud",slug:"/charts/stable/nextcloud/migration_guide",permalink:"/docs/charts/stable/nextcloud/migration_guide",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/nextcloud/migration_guide.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Important Notes",permalink:"/docs/charts/stable/nextcloud/installation_notes"},next:{title:"Input Validation",permalink:"/docs/charts/stable/nextcloud/validation"}},c={},p=[],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migration-notes"},"Migration Notes"),(0,o.kt)("p",null,"This guide is provided as a resource to help taken from our Discord, but since 15.X is a breaking change\nthere's no guarantees this will work, and you may have to install fresh"),(0,o.kt)("p",null,'We want to highlight that this is considered a completely new App, hence the "breaking change".\nFor the best stability we would advice people to reinstall (with the option to save the users data).'),(0,o.kt)("p",null,"While we try to help people through migration and even have added some automated migration tooling,\nwe cannot guarantee migration with breaking changes like these."),(0,o.kt)("p",null,"The correct troubleshooting steps would be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Remove any mention of "nextcloud_datadir" either in env-vars or config.php (if you manually added or altered it), we never supported this due to us expecting this change long beforehand'),(0,o.kt)("li",{parentName:"ul"},"Remove any custom storage"),(0,o.kt)("li",{parentName:"ul"},'Ensure config is set to "PVC"'),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," to the TRUSTED_PROXY setting like this: ",(0,o.kt)("inlineCode",{parentName:"li"},"172.16.0.0/16 127.0.0.1")),(0,o.kt)("li",{parentName:"ul"},"Stop and Start the old version to double-ensure the settings are applied"),(0,o.kt)("li",{parentName:"ul"},"Apply the update"),(0,o.kt)("li",{parentName:"ul"},"Wait for a good while (go grab lunch, eat it and drink a coffee afterwards)"),(0,o.kt)("li",{parentName:"ul"},"Check if it worked out")),(0,o.kt)("p",null,"If not:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Manually ensure your nextcloud data structure is correct inside the App in both /var/www/html and /var/www/html/data"),(0,o.kt)("li",{parentName:"ul"},"Double check if data directory is not set to anything other than /var/www/html/data (not set at-all is fine though)"),(0,o.kt)("li",{parentName:"ul"},"Restart")))}h.isMDXComponent=!0}}]);