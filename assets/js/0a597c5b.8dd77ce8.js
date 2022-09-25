"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[96545],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},59580:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),l=["components"],o={},s="Installation notes",u={unversionedId:"charts/enterprise/blocky/installation-notes",id:"charts/enterprise/blocky/installation-notes",title:"Installation notes",description:"Default Configuration",source:"@site/docs/charts/enterprise/blocky/installation-notes.md",sourceDirName:"charts/enterprise/blocky",slug:"/charts/enterprise/blocky/installation-notes",permalink:"/docs/charts/enterprise/blocky/installation-notes",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/enterprise/blocky/installation-notes.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/enterprise/blocky/CHANGELOG"},next:{title:"metallb",permalink:"/docs/charts/enterprise/metallb/"}},c={},p=[{value:"Default Configuration",id:"default-configuration",level:2},{value:"Configuration Instructions",id:"configuration-instructions",level:2},{value:"TrueNAS SCALE",id:"truenas-scale",level:3},{value:"Native Helm",id:"native-helm",level:3},{value:"Adding config by mounting files",id:"adding-config-by-mounting-files",level:3}],m={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation-notes"},"Installation notes"),(0,i.kt)("h2",{id:"default-configuration"},"Default Configuration"),(0,i.kt)("p",null,"The following config will be pre-configured and merged with any config you manually add to ",(0,i.kt)("inlineCode",{parentName:"p"},"blockyConfig")," option in ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml"),":"),(0,i.kt)("p",null,"Redis (always present):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"redis:\n  address: $redis_host:6379\n  password: $redis_pass\n  database: 0\n  required: true\n  connectionAttempts: 10\n  connectionCooldown: 3s\n")),(0,i.kt)("p",null,"Prometheus (Only present if enabled):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"prometheus:\n  enable: true\n  path: /metrics\n")),(0,i.kt)("p",null,"Upstreams (from values.yaml):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"upstream:\n  default:\n    -  # Content from `.Values.defaultUpstreams`\n  # Additional upstream groups from `.Values.upstreams`\n")),(0,i.kt)("p",null,"Whitelist/Blacklist (from values.yaml) :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"blocking:\n  blockType: nxDomain\n  blockTTL: 6h\n  refreshPeriod: 4h\n  downloadTimeout: 60s\n  downloadAttempts: 3\n  downloadCooldown: 2s\n  failStartOnListError: false\n  processingConcurrency: 4\n  whiteLists:\n    # Groupname:\n    -  # Content from .Values.blocking.whiteList\n  blackLists:\n    # Groupname:\n    -  # Content from .Values.blocking.blackList\n  clientGroupsBlock:\n    # Groupname:\n    -  # Content from .Values.blocking.clientGroupsBlock\n")),(0,i.kt)("h2",{id:"configuration-instructions"},"Configuration Instructions"),(0,i.kt)("h3",{id:"truenas-scale"},"TrueNAS SCALE"),(0,i.kt)("p",null,"For TrueNAS SCALE, we offer only a limited subset of configuration options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upstream DNS servers"),(0,i.kt)("li",{parentName:"ul"},"Whitelists"),(0,i.kt)("li",{parentName:"ul"},"Blacklists")),(0,i.kt)("p",null,"Those have special variables in ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml"),", so we can show them nicely in the TrueNAS SCALE GUI"),(0,i.kt)("h3",{id:"native-helm"},"Native Helm"),(0,i.kt)("p",null,"For anything but TrueNAS SCALE, we would advice to instead use ",(0,i.kt)("inlineCode",{parentName:"p"},"blockyConfig")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"Values.yaml")," and NOT mount any configuration file manually."),(0,i.kt)("p",null,"In short:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add your config in ",(0,i.kt)("inlineCode",{parentName:"li"},"values.yaml")," under ",(0,i.kt)("inlineCode",{parentName:"li"},"blockyConfig:")),(0,i.kt)("li",{parentName:"ul"},"Add your whitelists in ",(0,i.kt)("inlineCode",{parentName:"li"},"values.yaml")," under ",(0,i.kt)("inlineCode",{parentName:"li"},"blockyWhitelist")," or manually using blockyConfig"),(0,i.kt)("li",{parentName:"ul"},"Add your blacklists in ",(0,i.kt)("inlineCode",{parentName:"li"},"values.yaml")," under ",(0,i.kt)("inlineCode",{parentName:"li"},"blockyBlacklist")," or manually using blockyConfig")),(0,i.kt)("h3",{id:"adding-config-by-mounting-files"},"Adding config by mounting files"),(0,i.kt)("p",null,"You can mount custom config files, using ",(0,i.kt)("inlineCode",{parentName:"p"},"persistence")," or, in SCALE GUI, ",(0,i.kt)("inlineCode",{parentName:"p"},"Additional Storage")," to the following path:\n",(0,i.kt)("inlineCode",{parentName:"p"},"/app/config/"),"\n",(0,i.kt)("em",{parentName:"p"},"However it cannot reference any of the pre-defined variables listed above, so it's use is severely limited.")),(0,i.kt)("p",null,"You can also mount custom Whitelist/Blacklist files, using ",(0,i.kt)("inlineCode",{parentName:"p"},"persistence")," or, in SCALE GUI, ",(0,i.kt)("inlineCode",{parentName:"p"},"Additional Storage")," and enter the path in your whitelist or blacklist settings manually"))}d.isMDXComponent=!0}}]);