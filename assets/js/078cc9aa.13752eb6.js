"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[73393],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(a),m=l,d=h["".concat(o,".").concat(m)]||h[m]||p[m]||n;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},90194:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=a(83117),l=a(80102),n=(a(67294),a(3905)),i=["components"],s={},o="filezilla",u={unversionedId:"charts/stable/filezilla/index",id:"charts/stable/filezilla/index",title:"filezilla",description:"Version application AppVersion: 3.55.1",source:"@site/docs/charts/stable/filezilla/index.md",sourceDirName:"charts/stable/filezilla",slug:"/charts/stable/filezilla/",permalink:"/docs/charts/stable/filezilla/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/filezilla/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/fileflows/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/stable/filezilla/CHANGELOG"}},c={},p=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"TrueNAS SCALE",id:"truenas-scale",level:3},{value:"Helm",id:"helm",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"TrueNAS SCALE",id:"truenas-scale-1",level:3},{value:"Helm",id:"helm-1",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Helm",id:"helm-2",level:3},{value:"Available Settings",id:"available-settings",level:4},{value:"Configure using the command line",id:"configure-using-the-command-line",level:4},{value:"Configure using a yaml file",id:"configure-using-a-yaml-file",level:4},{value:"Connecting to other charts",id:"connecting-to-other-charts",level:4},{value:"Support",id:"support",level:2},{value:"Sponsor TrueCharts",id:"sponsor-truecharts",level:2}],h={toc:p};function m(e){var t=e.components,a=(0,l.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"filezilla"},"filezilla"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Version-4.0.34-informational?style=flat-square",alt:"Version: 4.0.34"})," ",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Type-application-informational?style=flat-square",alt:"Type: application"})," ",(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/AppVersion-3.55.1-informational?style=flat-square",alt:"AppVersion: 3.55.1"})),(0,n.kt)("p",null,"A Helm chart for Kubernetes"),(0,n.kt)("p",null,"TrueCharts can be installed as both ",(0,n.kt)("em",{parentName:"p"},"normal")," Helm Charts or as Apps on TrueNAS SCALE."),(0,n.kt)("p",null,"This readme is just an automatically generated general guide on installing our Helm Charts and Apps.\nFor more information, please click here: ",(0,n.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/charts/stable/filezilla"},"filezilla")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,n.kt)("a",{parentName:"strong",href:"https://github.com/truecharts/charts/issues/new/choose"},"here"))),(0,n.kt)("h2",{id:"source-code"},"Source Code"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/truecharts/charts/tree/master/charts/stable/filezilla"},"https://github.com/truecharts/charts/tree/master/charts/stable/filezilla")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://filezilla-project.org/"},"https://filezilla-project.org/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/linuxserver/docker-filezilla"},"https://github.com/linuxserver/docker-filezilla"))),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"Kubernetes: ",(0,n.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,n.kt)("h2",{id:"dependencies"},"Dependencies"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Repository"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://library-charts.truecharts.org"},"https://library-charts.truecharts.org")),(0,n.kt)("td",{parentName:"tr",align:null},"common"),(0,n.kt)("td",{parentName:"tr",align:null},"10.5.5")))),(0,n.kt)("h2",{id:"installing-the-chart"},"Installing the Chart"),(0,n.kt)("h3",{id:"truenas-scale"},"TrueNAS SCALE"),(0,n.kt)("p",null,"To install this Chart on TrueNAS SCALE check our ",(0,n.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/Installing-an-App"},"Quick-Start Guide"),"."),(0,n.kt)("h3",{id:"helm"},"Helm"),(0,n.kt)("p",null,"To install the chart with the release name ",(0,n.kt)("inlineCode",{parentName:"p"},"filezilla")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add TrueCharts https://charts.truecharts.org\nhelm repo update\nhelm install filezilla TrueCharts/filezilla\n")),(0,n.kt)("h2",{id:"uninstall"},"Uninstall"),(0,n.kt)("h3",{id:"truenas-scale-1"},"TrueNAS SCALE"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Upgrading, Rolling Back and Uninstalling the Chart")),(0,n.kt)("p",null,"To upgrade, rollback or delete this Chart from TrueNAS SCALE check our ",(0,n.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/Upgrade-rollback-delete-an-App"},"Quick-Start Guide"),"."),(0,n.kt)("h3",{id:"helm-1"},"Helm"),(0,n.kt)("p",null,"To uninstall the ",(0,n.kt)("inlineCode",{parentName:"p"},"filezilla")," deployment"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"helm uninstall filezilla\n")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"helm-2"},"Helm"),(0,n.kt)("h4",{id:"available-settings"},"Available Settings"),(0,n.kt)("p",null,"Read through the ",(0,n.kt)("a",{parentName:"p",href:"./values.yaml"},"values.yaml")," file. It has several commented out suggested values.\nOther values may be used from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/truecharts/library-charts/tree/main/charts/stable/common/values.yaml"},"values.yaml")," from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/k8s-at-home/library-charts/tree/main/charts/stable/common"},"common library"),"."),(0,n.kt)("h4",{id:"configure-using-the-command-line"},"Configure using the command line"),(0,n.kt)("p",null,"Specify each parameter using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,n.kt)("inlineCode",{parentName:"p"},"helm install"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},'helm install filezilla \\\n  --set env.TZ="America/New York" \\\n    TrueCharts/filezilla\n')),(0,n.kt)("h4",{id:"configure-using-a-yaml-file"},"Configure using a yaml file"),(0,n.kt)("p",null,"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"helm install filezilla TrueCharts/filezilla -f values.yaml\n")),(0,n.kt)("h4",{id:"connecting-to-other-charts"},"Connecting to other charts"),(0,n.kt)("p",null,"If you need to connect this Chart to other Charts on TrueNAS SCALE, please refer to our ",(0,n.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/linking-apps"},"Linking Charts Internally")," quick-start guide."),(0,n.kt)("h2",{id:"support"},"Support"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Please check our ",(0,n.kt)("a",{parentName:"li",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/Important-MUST-READ"},"quick-start guides for TrueNAS SCALE"),"."),(0,n.kt)("li",{parentName:"ul"},"See the ",(0,n.kt)("a",{parentName:"li",href:"https://truecharts.org"},"Website")),(0,n.kt)("li",{parentName:"ul"},"Check our ",(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/tVsPTHWTtr"},"Discord")),(0,n.kt)("li",{parentName:"ul"},"Open a ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/new/choose"},"issue"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"sponsor-truecharts"},"Sponsor TrueCharts"),(0,n.kt)("p",null,"TrueCharts can only exist due to the incredible effort of our staff.\nPlease consider making a ",(0,n.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/about/sponsor"},"donation")," or contributing back to the project any way you can!"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}m.isMDXComponent=!0}}]);