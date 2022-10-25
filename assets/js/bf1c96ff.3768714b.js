"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9599],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,m=p["".concat(o,".").concat(d)]||p[d]||h[d]||s;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<s;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},19728:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return h}});var n=r(83117),a=r(80102),s=(r(67294),r(3905)),l=["components"],i={},o="breitbandmessung-de",u={unversionedId:"charts/incubator/breitbandmessung-de/index",id:"charts/incubator/breitbandmessung-de/index",title:"breitbandmessung-de",description:"A script to enable customers of lazy ISPs to perform measurement campaigns of the connection speed as described here in an automated way.",source:"@site/docs/charts/incubator/breitbandmessung-de/index.md",sourceDirName:"charts/incubator/breitbandmessung-de",slug:"/charts/incubator/breitbandmessung-de/",permalink:"/docs/charts/incubator/breitbandmessung-de/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/incubator/breitbandmessung-de/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/incubator/blender-desktop-g3/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/incubator/breitbandmessung-de/CHANGELOG"}},c={},h=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"TrueNAS SCALE",id:"truenas-scale",level:3},{value:"Helm",id:"helm",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"TrueNAS SCALE",id:"truenas-scale-1",level:3},{value:"Helm",id:"helm-1",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Helm",id:"helm-2",level:3},{value:"Available Settings",id:"available-settings",level:4},{value:"Configure using the command line",id:"configure-using-the-command-line",level:4},{value:"Configure using a yaml file",id:"configure-using-a-yaml-file",level:4},{value:"Connecting to other charts",id:"connecting-to-other-charts",level:4},{value:"Support",id:"support",level:2},{value:"Sponsor TrueCharts",id:"sponsor-truecharts",level:2}],p={toc:h};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"breitbandmessung-de"},"breitbandmessung-de"),(0,s.kt)("p",null,"A script to enable customers of lazy ISPs to perform measurement campaigns of the connection speed as described here in an automated way."),(0,s.kt)("p",null,"TrueCharts can be installed as both ",(0,s.kt)("em",{parentName:"p"},"normal")," Helm Charts or as Apps on TrueNAS SCALE."),(0,s.kt)("p",null,"This readme is just an automatically generated general guide on installing our Helm Charts and Apps.\nFor more information, please click here: ",(0,s.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/charts/incubator/breitbandmessung-de"},"breitbandmessung-de")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,s.kt)("a",{parentName:"strong",href:"https://github.com/truecharts/charts/issues/new/choose"},"here"))),(0,s.kt)("h2",{id:"source-code"},"Source Code"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/truecharts/charts/tree/master/charts/incubator/breitbandmessung-de"},"https://github.com/truecharts/charts/tree/master/charts/incubator/breitbandmessung-de")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/shneezin/breitbandmessung-node"},"https://github.com/shneezin/breitbandmessung-node")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/shneezin/breitbandmessung-node"},"https://hub.docker.com/r/shneezin/breitbandmessung-node"))),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("p",null,"Kubernetes: ",(0,s.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,s.kt)("h2",{id:"dependencies"},"Dependencies"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Repository"),(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Version"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://library-charts.truecharts.org"},"https://library-charts.truecharts.org")),(0,s.kt)("td",{parentName:"tr",align:null},"common"),(0,s.kt)("td",{parentName:"tr",align:null},"10.7.7")))),(0,s.kt)("h2",{id:"installing-the-chart"},"Installing the Chart"),(0,s.kt)("h3",{id:"truenas-scale"},"TrueNAS SCALE"),(0,s.kt)("p",null,"To install this Chart on TrueNAS SCALE check our ",(0,s.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Installing-an-App"},"Quick-Start Guide"),"."),(0,s.kt)("h3",{id:"helm"},"Helm"),(0,s.kt)("p",null,"To install the chart with the release name ",(0,s.kt)("inlineCode",{parentName:"p"},"breitbandmessung-de")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add TrueCharts https://charts.truecharts.org\nhelm repo update\nhelm install breitbandmessung-de TrueCharts/breitbandmessung-de\n")),(0,s.kt)("h2",{id:"uninstall"},"Uninstall"),(0,s.kt)("h3",{id:"truenas-scale-1"},"TrueNAS SCALE"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Upgrading, Rolling Back and Uninstalling the Chart")),(0,s.kt)("p",null,"To upgrade, rollback or delete this Chart from TrueNAS SCALE check our ",(0,s.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Upgrade-rollback-delete-an-App"},"Quick-Start Guide"),"."),(0,s.kt)("h3",{id:"helm-1"},"Helm"),(0,s.kt)("p",null,"To uninstall the ",(0,s.kt)("inlineCode",{parentName:"p"},"breitbandmessung-de")," deployment"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"helm uninstall breitbandmessung-de\n")),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("h3",{id:"helm-2"},"Helm"),(0,s.kt)("h4",{id:"available-settings"},"Available Settings"),(0,s.kt)("p",null,"Read through the values.yaml file. It has several commented out suggested values.\nOther values may be used from the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/truecharts/library-charts/tree/main/charts/stable/common/values.yaml"},"values.yaml")," from the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/truecharts/library-charts/tree/main/charts/common"},"common library"),"."),(0,s.kt)("h4",{id:"configure-using-the-command-line"},"Configure using the command line"),(0,s.kt)("p",null,"Specify each parameter using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,s.kt)("inlineCode",{parentName:"p"},"helm install"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'helm install breitbandmessung-de \\\n  --set env.TZ="America/New York" \\\n    TrueCharts/breitbandmessung-de\n')),(0,s.kt)("h4",{id:"configure-using-a-yaml-file"},"Configure using a yaml file"),(0,s.kt)("p",null,"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"helm install breitbandmessung-de TrueCharts/breitbandmessung-de -f values.yaml\n")),(0,s.kt)("h4",{id:"connecting-to-other-charts"},"Connecting to other charts"),(0,s.kt)("p",null,"If you need to connect this Chart to other Charts on TrueNAS SCALE, please refer to our ",(0,s.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/linking-apps"},"Linking Charts Internally")," quick-start guide."),(0,s.kt)("h2",{id:"support"},"Support"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Please check our ",(0,s.kt)("a",{parentName:"li",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Important-MUST-READ"},"quick-start guides for TrueNAS SCALE"),"."),(0,s.kt)("li",{parentName:"ul"},"See the ",(0,s.kt)("a",{parentName:"li",href:"https://truecharts.org"},"Website")),(0,s.kt)("li",{parentName:"ul"},"Check our ",(0,s.kt)("a",{parentName:"li",href:"https://discord.gg/tVsPTHWTtr"},"Discord")),(0,s.kt)("li",{parentName:"ul"},"Open a ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/new/choose"},"issue"))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"sponsor-truecharts"},"Sponsor TrueCharts"),(0,s.kt)("p",null,"TrueCharts can only exist due to the incredible effort of our staff.\nPlease consider making a ",(0,s.kt)("a",{parentName:"p",href:"https://truecharts.org/sponsor"},"donation")," or contributing back to the project any way you can!"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}d.isMDXComponent=!0}}]);