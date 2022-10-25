"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[88167],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(l,".").concat(m)]||p[m]||c[m]||s;return r?a.createElement(d,o(o({ref:t},h),{},{components:r})):a.createElement(d,o({ref:t},h))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85042:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=r(83117),n=r(80102),s=(r(67294),r(3905)),o=["components"],i={},l="shapeshifter-obfuscator",u={unversionedId:"charts/incubator/shapeshifter-obfuscator/index",id:"charts/incubator/shapeshifter-obfuscator/index",title:"shapeshifter-obfuscator",description:"Shapeshifter-Obfuscator is a Chartized implementation of shapeshifter-dispatcher provided by The Operator Foundation. The shapeshifter suite provides command-line proxy and obfuscation tools that effectively modify packets to evade advanced IDS systems.",source:"@site/docs/charts/incubator/shapeshifter-obfuscator/index.md",sourceDirName:"charts/incubator/shapeshifter-obfuscator",slug:"/charts/incubator/shapeshifter-obfuscator/",permalink:"/docs/charts/incubator/shapeshifter-obfuscator/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/incubator/shapeshifter-obfuscator/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/incubator/shadowsocks/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/incubator/shapeshifter-obfuscator/CHANGELOG"}},h={},c=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"TrueNAS SCALE",id:"truenas-scale",level:3},{value:"Helm",id:"helm",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"TrueNAS SCALE",id:"truenas-scale-1",level:3},{value:"Helm",id:"helm-1",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Helm",id:"helm-2",level:3},{value:"Available Settings",id:"available-settings",level:4},{value:"Configure using the command line",id:"configure-using-the-command-line",level:4},{value:"Configure using a yaml file",id:"configure-using-a-yaml-file",level:4},{value:"Connecting to other charts",id:"connecting-to-other-charts",level:4},{value:"Support",id:"support",level:2},{value:"Sponsor TrueCharts",id:"sponsor-truecharts",level:2}],p={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"shapeshifter-obfuscator"},"shapeshifter-obfuscator"),(0,s.kt)("p",null,"Shapeshifter-Obfuscator is a Chartized implementation of shapeshifter-dispatcher provided by The Operator Foundation. The shapeshifter suite provides command-line proxy and obfuscation tools that effectively modify packets to evade advanced IDS systems."),(0,s.kt)("p",null,"TrueCharts can be installed as both ",(0,s.kt)("em",{parentName:"p"},"normal")," Helm Charts or as Apps on TrueNAS SCALE."),(0,s.kt)("p",null,"This readme is just an automatically generated general guide on installing our Helm Charts and Apps.\nFor more information, please click here: ",(0,s.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/charts/incubator/shapeshifter-obfuscator"},"shapeshifter-obfuscator")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,s.kt)("a",{parentName:"strong",href:"https://github.com/truecharts/charts/issues/new/choose"},"here"))),(0,s.kt)("h2",{id:"source-code"},"Source Code"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/truecharts/charts/tree/master/charts/incubator/shapeshifter-obfuscator"},"https://github.com/truecharts/charts/tree/master/charts/incubator/shapeshifter-obfuscator")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/juchong/shapeshifter-docker"},"https://github.com/juchong/shapeshifter-docker")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/juchong/shapeshifter-docker"},"https://hub.docker.com/r/juchong/shapeshifter-docker"))),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("p",null,"Kubernetes: ",(0,s.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,s.kt)("h2",{id:"dependencies"},"Dependencies"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Repository"),(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Version"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://library-charts.truecharts.org"},"https://library-charts.truecharts.org")),(0,s.kt)("td",{parentName:"tr",align:null},"common"),(0,s.kt)("td",{parentName:"tr",align:null},"10.7.7")))),(0,s.kt)("h2",{id:"installing-the-chart"},"Installing the Chart"),(0,s.kt)("h3",{id:"truenas-scale"},"TrueNAS SCALE"),(0,s.kt)("p",null,"To install this Chart on TrueNAS SCALE check our ",(0,s.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Installing-an-App"},"Quick-Start Guide"),"."),(0,s.kt)("h3",{id:"helm"},"Helm"),(0,s.kt)("p",null,"To install the chart with the release name ",(0,s.kt)("inlineCode",{parentName:"p"},"shapeshifter-obfuscator")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add TrueCharts https://charts.truecharts.org\nhelm repo update\nhelm install shapeshifter-obfuscator TrueCharts/shapeshifter-obfuscator\n")),(0,s.kt)("h2",{id:"uninstall"},"Uninstall"),(0,s.kt)("h3",{id:"truenas-scale-1"},"TrueNAS SCALE"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Upgrading, Rolling Back and Uninstalling the Chart")),(0,s.kt)("p",null,"To upgrade, rollback or delete this Chart from TrueNAS SCALE check our ",(0,s.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Upgrade-rollback-delete-an-App"},"Quick-Start Guide"),"."),(0,s.kt)("h3",{id:"helm-1"},"Helm"),(0,s.kt)("p",null,"To uninstall the ",(0,s.kt)("inlineCode",{parentName:"p"},"shapeshifter-obfuscator")," deployment"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"helm uninstall shapeshifter-obfuscator\n")),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("h3",{id:"helm-2"},"Helm"),(0,s.kt)("h4",{id:"available-settings"},"Available Settings"),(0,s.kt)("p",null,"Read through the values.yaml file. It has several commented out suggested values.\nOther values may be used from the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/truecharts/library-charts/tree/main/charts/stable/common/values.yaml"},"values.yaml")," from the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/truecharts/library-charts/tree/main/charts/common"},"common library"),"."),(0,s.kt)("h4",{id:"configure-using-the-command-line"},"Configure using the command line"),(0,s.kt)("p",null,"Specify each parameter using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,s.kt)("inlineCode",{parentName:"p"},"helm install"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'helm install shapeshifter-obfuscator \\\n  --set env.TZ="America/New York" \\\n    TrueCharts/shapeshifter-obfuscator\n')),(0,s.kt)("h4",{id:"configure-using-a-yaml-file"},"Configure using a yaml file"),(0,s.kt)("p",null,"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"helm install shapeshifter-obfuscator TrueCharts/shapeshifter-obfuscator -f values.yaml\n")),(0,s.kt)("h4",{id:"connecting-to-other-charts"},"Connecting to other charts"),(0,s.kt)("p",null,"If you need to connect this Chart to other Charts on TrueNAS SCALE, please refer to our ",(0,s.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/linking-apps"},"Linking Charts Internally")," quick-start guide."),(0,s.kt)("h2",{id:"support"},"Support"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Please check our ",(0,s.kt)("a",{parentName:"li",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Important-MUST-READ"},"quick-start guides for TrueNAS SCALE"),"."),(0,s.kt)("li",{parentName:"ul"},"See the ",(0,s.kt)("a",{parentName:"li",href:"https://truecharts.org"},"Website")),(0,s.kt)("li",{parentName:"ul"},"Check our ",(0,s.kt)("a",{parentName:"li",href:"https://discord.gg/tVsPTHWTtr"},"Discord")),(0,s.kt)("li",{parentName:"ul"},"Open a ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/new/choose"},"issue"))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"sponsor-truecharts"},"Sponsor TrueCharts"),(0,s.kt)("p",null,"TrueCharts can only exist due to the incredible effort of our staff.\nPlease consider making a ",(0,s.kt)("a",{parentName:"p",href:"https://truecharts.org/sponsor"},"donation")," or contributing back to the project any way you can!"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}m.isMDXComponent=!0}}]);