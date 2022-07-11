"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[83954],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63950:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={},l="Networking",u={unversionedId:"manual/SCALE Apps/indepth/networking",id:"manual/SCALE Apps/indepth/networking",title:"Networking",description:"TrueCharts contain a number of networking options, some super-easy, others quite-advanced. In this document we will try to give a general overview what the general configuration options are and what are their downside and upsides.",source:"@site/docs/manual/SCALE Apps/indepth/networking.md",sourceDirName:"manual/SCALE Apps/indepth",slug:"/manual/SCALE Apps/indepth/networking",permalink:"/docs/manual/SCALE Apps/indepth/networking",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/manual/SCALE Apps/indepth/networking.md",tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"Clustering",permalink:"/docs/manual/SCALE Apps/indepth/clustering"},next:{title:"Storage",permalink:"/docs/manual/SCALE Apps/indepth/storage"}},c={},p=[{value:"General Choices",id:"general-choices",level:2},{value:"Host Networking",id:"host-networking",level:3},{value:"ClusterIP",id:"clusterip",level:3},{value:"NodePort",id:"nodeport",level:3},{value:"LoadBalancer",id:"loadbalancer",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"networking"},"Networking"),(0,a.kt)("p",null,"TrueCharts contain a number of networking options, some super-easy, others quite-advanced. In this document we will try to give a general overview what the general configuration options are and what are their downside and upsides."),(0,a.kt)("h2",{id:"general-choices"},"General Choices"),(0,a.kt)("h3",{id:"host-networking"},"Host Networking"),(0,a.kt)("p",null,"This option is considered to be an advanced option and is rarely needed. It connects the network-stack of the host to the App."),(0,a.kt)("p",null,"The reason this is not needed in most Apps, is because we already have great options to deal with most forms of network traffic and every maintainer has the goal to make sure you don't need this setting."),(0,a.kt)("p",null,"Please refer to the documentation of individual Apps or the Support-Discussions section on github, if you think you might need this setting in your specific use case"),(0,a.kt)("h3",{id:"clusterip"},"ClusterIP"),(0,a.kt)("p",null,'The "Basic" network mode, it create a special load-balancer called a "service" thats only available on the internal network between the Apps.'),(0,a.kt)("p",null,"Don't think you can't connect to it though, because our ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.truecharts.org/general/reverse-proxy/"},"Reverse proxy")," can forward most traffic for you!"),(0,a.kt)("h3",{id:"nodeport"},"NodePort"),(0,a.kt)("p",null,"The name already makes clear what this one does: It connect to a port on your node (the PC hosting your App)."),(0,a.kt)("p",null,"Its a special ClusterIP that forwards all traffic from a certain port on your host-system aka \"node\", directly to the service. However, it's also still a ClusterIP, so it's very well possible to use both the Reverse proxy and the NodePort, just not at the same port."),(0,a.kt)("p",null,"There are, however, multiple downsides to using nodeports:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can only pick ports above 9000"),(0,a.kt)("li",{parentName:"ul"},"You can not connect two Apps to the same port")),(0,a.kt)("h3",{id:"loadbalancer"},"LoadBalancer"),(0,a.kt)("p",null,"Loadbalancer connects a service targetPort directly to the Host Network. However: it can do so in lower ranges than NodePort, making it a great solution for things like DNS servers."),(0,a.kt)("p",null,"There are, however, downsides to using LoadBalancer:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can not connect two Apps to the same port")))}h.isMDXComponent=!0}}]);