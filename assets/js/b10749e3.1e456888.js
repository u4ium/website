"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[50345],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?s.createElement(h,i(i({ref:t},c),{},{components:n})):s.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<o;u++)i[u]=n[u];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37516:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var s=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],a={},l="Unit tests",u={unversionedId:"manual/development/unit-tests",id:"manual/development/unit-tests",title:"Unit tests",description:"We unit test our common library, while it isn't near complete coverage but it does offer some basic checks.",source:"@site/docs/manual/development/unit-tests.md",sourceDirName:"manual/development",slug:"/manual/development/unit-tests",permalink:"/docs/manual/development/unit-tests",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/manual/development/unit-tests.md",tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"Storage",permalink:"/docs/manual/development/storage"},next:{title:"Values.yaml Files",permalink:"/docs/manual/development/values-yaml"}},c={},p=[{value:"Running the tests",id:"running-the-tests",level:2},{value:"Using Visual Studio Code",id:"using-visual-studio-code",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Running tests",id:"running-tests",level:4},{value:"Output",id:"output",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"unit-tests"},"Unit tests"),(0,o.kt)("p",null,"We unit test our common library, while it isn't near complete coverage but it does offer some basic checks."),(0,o.kt)("h2",{id:"running-the-tests"},"Running the tests"),(0,o.kt)("p",null,"Running these tests can be done any way you like. In this document we limit ourselves to using Visual Studio Code, using our Development Container."),(0,o.kt)("h3",{id:"using-visual-studio-code"},"Using Visual Studio Code"),(0,o.kt)("p",null,"Our repo comes with a Visual Studio Code ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/containers"},"development container")," definition and ",(0,o.kt)("inlineCode",{parentName:"p"},"launch.json")," that allow you to quickly set up an environment in which you can run the tests."),(0,o.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visual Studio Code is installed."),(0,o.kt)("li",{parentName:"ul"},"Docker is installed and running."),(0,o.kt)("li",{parentName:"ul"},'The "Remote - Containers" extension is installed and enabled in Visual Studio Code.')),(0,o.kt)("p",null,"For more details, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/containers#_system-requirements"},"official documentation"),"."),(0,o.kt)("h4",{id:"running-tests"},"Running tests"),(0,o.kt)("p",null,"Once Visual Studio Code is set up, and you open the ",(0,o.kt)("inlineCode",{parentName:"p"},"charts")," workspace, you will see a popup asking if you wish to re-open the workspace in a development container:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/k8s-at-home/charts/master/docs/images/vscode_devcontainer_popup.png",alt:"Visual Studio Code development container popup"})),(0,o.kt)("p",null,"Select to do so and a Dockerized workspace will be built. You can now use Visual Studio Code as normal."),(0,o.kt)("p",null,'To run or debug the unit tests, click the "Run" button on the left sidebar and select the desired configuration:'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/k8s-at-home/charts/master/docs/images/vscode_run_unittests.png",alt:"Visual Studio Code run configurations"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"UnitTest - active spec file only"),": This configuration will try to run the currently opened test file."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Make sure that you have opened a valid test file (",(0,o.kt)("inlineCode",{parentName:"p"},".rb")," files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"test/charts")," folder), or this will not work.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"UnitTest - all spec files"),": This configuration will run the all test files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"test/charts")," folder."))),(0,o.kt)("p",null,'Next, press the green "Play" icon. This will start the tests show the outcome in a terminal window.'),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"A successful test will output something like the following..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'Started with run options --seed 52955\n\ncommon-test::statefulset volumeClaimTemplates\n  can set values for volumeClaimTemplates                         PASS (0.16s)\n  volumeClaimTemplates should be empty by default                 PASS (0.06s)\n\ncommon-test::ports settings\n  targetPort can be overridden                                    PASS (0.17s)\n  port name can be overridden                                     PASS (0.17s)\n  defaults to name "http" on port 8080                            PASS (0.16s)\n  targetPort cannot be a named port                               PASS (0.05s)\n\ncommon-test::pod replicas\n  defaults to 1                                                   PASS (0.08s)\n  accepts integer as value                                        PASS (0.08s)\n\ncommon-test::Environment settings\n  Check no environment variables                                  PASS (0.05s)\n  set "valueFrom" environment variables                           PASS (0.11s)\n  set "static" and "Dynamic/Tpl" environment variables            PASS (0.15s)\n  set "Dynamic/Tpl" environment variables                         PASS (0.11s)\n  set "static" environment variables                              PASS (0.10s)\n\ncommon-test::ingress\n  ingress with hosts                                              PASS (0.10s)\n  should be disabled when ingress.enabled: false                  PASS (0.06s)\n  ingress with hosts template is evaluated                        PASS (0.11s)\n  ingress with hosts and tls                                      PASS (0.15s)\n  ingress with hosts and tls templates is evaluated               PASS (0.16s)\n  should be enabled when ingress.enabled: true                    PASS (0.06s)\n\ncommon-test::controller type\n  accepts "daemonset"                                             PASS (0.06s)\n  accepts "statefulset"                                           PASS (0.06s)\n  defaults to "Deployment"                                        PASS (0.06s)\n\nFinished in 2.26077s\n22 tests, 59 assertions, 0 failures, 0 errors, 0 skips\n')))}d.isMDXComponent=!0}}]);