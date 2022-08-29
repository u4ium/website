"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[35550],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42690:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],i={},s="Portal Button",p={unversionedId:"manual/development/portal",id:"manual/development/portal",title:"Portal Button",description:'After installation almost every app should have a "portal" button. This button is an easy and streamlined way of entering the Applications after installation. However, one should be aware that it does not magically follow changes inside the application (for example: from http to https).',source:"@site/docs/manual/development/portal.md",sourceDirName:"manual/development",slug:"/manual/development/portal",permalink:"/docs/manual/development/portal",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/manual/development/portal.md",tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"Ingress",permalink:"/docs/manual/development/ingress"},next:{title:"Questions.yaml",permalink:"/docs/manual/development/questions-yaml"}},u={},c=[{value:"questions.yaml example",id:"questionsyaml-example",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"portal-button"},"Portal Button"),(0,o.kt)("p",null,'After installation almost every app should have a "portal" button. This button is an easy and streamlined way of entering the Applications after installation. However, one should be aware that it does not magically follow changes inside the application (for example: from http to https).'),(0,o.kt)("h2",{id:"questionsyaml-example"},"questions.yaml example"),(0,o.kt)("p",null,"Every questions.yaml file should contain the following snippets to enable the portal button. Please be aware to change ",(0,o.kt)("inlineCode",{parentName:"p"},'"http"')," to ",(0,o.kt)("inlineCode",{parentName:"p"},'"https"'),' in services.main.port.protocol if your application uses http instead of https when running using "NodePort".'),(0,o.kt)("p",null,"Also please be aware that the portal only(!) points towards the main service, main service port and main ingress."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'portals:\n  web_portal:\n    protocols:\n      - "$kubernetes-resource_configmap_portal_protocol"\n    host:\n      - "$kubernetes-resource_configmap_portal_host"\n    ports:\n      - "$kubernetes-resource_configmap_portal_port"\n        path: "/"\n\nquestions:\n\n  - variable: portal\n    group: "Container Image"\n    label: "Configure Portal Button"\n    schema:\n      type: dict\n      hidden: true\n      attrs:\n        - variable: enabled\n          label: "Enable"\n          description: "enable the portal button"\n          schema:\n            hidden: true\n            editable: false\n            type: boolean\n            default: true\n\n')),(0,o.kt)("p",null,"There are also some additional (advanced) options available, these can be added below the above required portion as required:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"host:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'        - variable: host\n          label: "override Host when using NodePort"\n          description: "Overrides the host setting when using NodePort. Example use case would be load balanced NodePorts."\n          schema:\n            hidden: true\n            editable: false\n            type: string\n            default: "test.com"\n')))}d.isMDXComponent=!0}}]);