"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[11477],{30010:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"Docker-Compose on TrueNAS SCALE using TrueCharts","metadata":{"permalink":"/blog/Docker-Compose on TrueNAS SCALE using TrueCharts","source":"@site/blog/06-03-2022-docker-compose.md","title":"Docker-Compose on TrueNAS SCALE using TrueCharts","description":"From the early stages of TrueNAS SCALE development, we\u2019ve read many complaints about the fact docker-compose wasn\u2019t supported by TrueNAS SCALE. It\u2019s understandable, as it\u2019s one of the most used docker deployment options for home users.","date":"2022-08-30T15:36:05.981Z","formattedDate":"August 30, 2022","tags":[],"readingTime":1.63,"hasTruncateMarker":false,"authors":[{"name":"Kjeld Schouten-Lebbing","title":"Founder of TrueCharts","url":"https://github.com/Ornias","imageURL":"https://github.com/Ornias.png","key":"ornias"}],"frontMatter":{"slug":"Docker-Compose on TrueNAS SCALE using TrueCharts","title":"Docker-Compose on TrueNAS SCALE using TrueCharts","authors":["ornias"]},"nextItem":{"title":"Helm as a foundation","permalink":"/blog/Helm as a foundation"}},"content":"From the early stages of TrueNAS SCALE development, we\u2019ve read many complaints about the fact docker-compose wasn\u2019t supported by TrueNAS SCALE. It\u2019s understandable, as it\u2019s one of the most used docker deployment options for home users.\\n\\nThe TrueNAS SCALE community has figured out interesting ways to enable Docker-Compose. But this approaches all have a number of downsides:\\n\\n- It\'s not future proof, it can be nuked permanently and without warning, with any TrueNAS SCALE update.\\n\\n- It inherently breaks SCALE Applications and often even requires those to be disabled.\\n\\n- There is no support for this work-around.\\n\\nTo solve this problem, we\u2019ve decided to take matters into our own hands. We are glad to finally announce our solution:\\n\\n**Docker-Compose Application for TrueNAS SCALE by TrueCharts**\\n\\nIt\u2019s designed from the ground up, to give users nearly the same experience as running Docker-Compose on the host system, and even contains some nice tweaks:\\n\\n- It\u2019s fully backed by TrueNAS SCALE Applications, so it will survive updates.\\n\\n- There is a GUI option to input your Docker-Compose file, that will survive reboots.\\n\\n- Completely self-contained, and will not modify the default docker stack.\\n\\n- Fully compatible to run alongside other TrueNAS SCALE Applications, so you can easily migrate your Docker-Compose applications to TrueNAS SCALE Applications.\\n\\n- We are your support if the application does not work as advertised.\\n\\nAll with just one caveat:\\n\\n- The Docker-Compose command has to be executed from inside the container shell.\\n\\nWe based our solution on the official Docker-in-Docker container by Docker, with some added tooling to optimize it for single-container deployments. Perhaps most interestingly, the container has native access to `/mnt`, `/root` and `/cluster`, so you can work with your containers like you\u2019re working on the host.\\n\\nWith this in place we hope that TrueNAS SCALE can finally start to fill the big shoes of solutions like Unraid and TrueNAS Core and give the community what they want, not just what they need!"},{"id":"Helm as a foundation","metadata":{"permalink":"/blog/Helm as a foundation","source":"@site/blog/06-06-2022-helm-foundation.md","title":"Helm as a foundation","description":"After some carefull consideration about how we want to move the project forward, we\'ve decided to put our Helm Charts first and other solutions second.","date":"2022-08-30T15:36:05.981Z","formattedDate":"August 30, 2022","tags":[],"readingTime":1.17,"hasTruncateMarker":false,"authors":[{"name":"Kjeld Schouten-Lebbing","title":"Founder of TrueCharts","url":"https://github.com/Ornias","imageURL":"https://github.com/Ornias.png","key":"ornias"}],"frontMatter":{"slug":"Helm as a foundation","title":"Helm as a foundation","authors":["ornias"]},"prevItem":{"title":"Docker-Compose on TrueNAS SCALE using TrueCharts","permalink":"/blog/Docker-Compose on TrueNAS SCALE using TrueCharts"},"nextItem":{"title":"Meet TrueCharts - the First App Store for TrueNAS SCALE","permalink":"/blog/Meet TrueCharts - the First App Store for TrueNAS SCALE"}},"content":"After some carefull consideration about how we want to move the project forward, we\'ve decided to put our Helm Charts first and other solutions second.\\nOur reasoning to do this, is that we want to allow users to be more flexible in which kubernetes platform they use and experience all the awesome projects that are out there.\\n\\n**SCALE and TrueCharts**\\n\\nWhat does this mean for our SCALE users? Not so much really: We will still fully support and build SCALE Apps.\\nHowever, it does mean that we will more openly start calling our work \\"Charts\\" instead of \\"Apps\\" and some new Charts will not support SCALE out-of-the box.\\n\\n**Helm and TrueCharts**\\n\\nWe\'re also going to up our game considerably to support users wanting to customise the YAML directly with Helm. More Apps with more flexible configuration.\\nAt the same time we\'re going to work on making the SCALE GUI generation more automated. While this might lead to a more \\"cluttered\\" GUI, it will bring things more in \\"sync\\" with the native Helm deployments we offer.\\n\\nFor new developers all of this will offer a much easier experience: Just build the helm chart and submit the PR for it. No more bothering with being required to move through hunderds of rows of SCALE GUI description.\\n\\nWith all of these changes combined, we hope to being our awesome repository of Charts to more people, much faster!"},{"id":"Meet TrueCharts - the First App Store for TrueNAS SCALE","metadata":{"permalink":"/blog/Meet TrueCharts - the First App Store for TrueNAS SCALE","source":"@site/blog/16-12-2021-meet-truecharts.md","title":"Meet TrueCharts - the First App Store for TrueNAS SCALE","description":"Enterprise storage does not need to be rigid and difficult. TrueNAS SCALE is scale-out storage and hyperconverged infrastructure that is also flexible. Key to that flexibility is the inclusion of Kubernetes for deploying containerized (e.g. docker) applications. Kubernetes allows single containers or pods of containers to be easily deployed on a unified infrastructure.  A growing assortment of these applications are now preconfigured for easy deployment using a TrueNAS-enhanced implementation of Helm Charts.","date":"2022-08-30T15:36:05.981Z","formattedDate":"August 30, 2022","tags":[],"readingTime":2.48,"hasTruncateMarker":false,"authors":[{"name":"Kjeld Schouten-Lebbing","title":"Founder of TrueCharts","url":"https://github.com/Ornias","imageURL":"https://github.com/Ornias.png","key":"ornias"}],"frontMatter":{"slug":"Meet TrueCharts - the First App Store for TrueNAS SCALE","title":"Meet TrueCharts - the First App Store for TrueNAS SCALE","authors":["ornias"]},"prevItem":{"title":"Helm as a foundation","permalink":"/blog/Helm as a foundation"},"nextItem":{"title":"Introducing: TrueCharts Container Repository","permalink":"/blog/Introducing: TrueCharts Container Repository"}},"content":"Enterprise storage does not need to be rigid and difficult. TrueNAS SCALE is scale-out storage and hyperconverged infrastructure that is also flexible. Key to that flexibility is the inclusion of Kubernetes for deploying containerized (e.g. docker) applications. Kubernetes allows single containers or pods of containers to be easily deployed on a unified infrastructure.  A growing assortment of these applications are now preconfigured for easy deployment using a TrueNAS-enhanced implementation of Helm Charts.\\n\\nUsers and third parties can now build catalogs of application charts for deployment with the ease of an app store experience. These catalogs are like app stores for TrueNAS SCALE.  iXsystems has been collaborating and sponsoring the team developing TrueCharts, the first and most comprehensive of these app stores. Best of all, the TrueCharts Apps are free and Open Source.\\nTrueCharts offers a diverse set of easily-deployed applications for TrueNAS users, with more than 180 available apps to choose from.  We\u2019ve invited the TrueCharts team to write a guest blog to share the details.\\n\\n**TrueCharts**\\n\\nWith streamlined Kubernetes support for its \u201dapps\u201d, TrueNAS SCALE has made the big step of bringing Kubernetes to the masses while staying true to its Open Source philosophy by empowering the community to build their own apps and catalogs. This ability for users to pick their own favorite catalogs for apps has already proven to be popular. Meet TrueCharts, the first community apps catalog!\\n\\nTrueCharts was built by the founders of a group who developed installation scripts for TrueNAS CORE, called \u201cJailman\u201d. TrueCharts offers more than what Jailman was capable of: a flexible, user-friendly installer with a freedom of choice that users need and deserve!\\n\\nWorking as a completely independent project, the TrueCharts community has since invested an entire year carefully crafting tools that provide many of the awesome features that Kubernetes has to offer to the TrueNAS SCALE apps ecosystem. For example, all apps can be simply enabled with Traefik reverse proxy and Wireguard VPN capabilities. In addition to the official apps like Plex, Nextcloud, and Minio, TrueCharts adds a huge variety of apps including Vaultwarden, Handbrake, OpenLDAP, Photoprism, Pihole, Syncthing, and more.\\n\\nTrueCharts was designed with one primary goal in mind: to serve as a solid framework for users who are new to Kubernetes while also exposing as many Kubernetes features as possible for experienced users. Where the official apps by iXsystems focus on easy deployment, TrueCharts focuses on those applications that need a bit more flexibility to customize the app for specific use cases and system environments. TrueCharts is managed  from within the TrueNAS SCALE UI. Simply add the catalog and follow the Quick Start guides!\\n\\nAs the release of TrueNAS SCALE 22.02 \u201cAngelFish\u201d is getting closer and closer, the TrueCharts Team and iXsystems are already hard at work looking into a future of apps with high availability, dynamic scaling, and distributed storage. Want to know more about TrueCharts? Visit TrueCharts.org or come visit our great community: TrueCharts on Discord!\\n\\nTrueCharts and TrueNAS = Endless Possibilities"},{"id":"Introducing: TrueCharts Container Repository","metadata":{"permalink":"/blog/Introducing: TrueCharts Container Repository","source":"@site/blog/24-01-2022-introducing-tccr.md","title":"Introducing: TrueCharts Container Repository","description":"The last year we\u2019ve grown at an ever-increasing pace, doubling code and users every few months. Some issues could be fixed quickly and easily, while other issues were vastly more complex. One of those issues happened to be the convoluted mess of different container sources.","date":"2022-08-30T15:36:05.981Z","formattedDate":"August 30, 2022","tags":[],"readingTime":1.28,"hasTruncateMarker":false,"authors":[{"name":"Kjeld Schouten-Lebbing","title":"Founder of TrueCharts","url":"https://github.com/Ornias","imageURL":"https://github.com/Ornias.png","key":"ornias"}],"frontMatter":{"slug":"Introducing: TrueCharts Container Repository","title":"Introducing: TrueCharts Container Repository","authors":["ornias"]},"prevItem":{"title":"Meet TrueCharts - the First App Store for TrueNAS SCALE","permalink":"/blog/Meet TrueCharts - the First App Store for TrueNAS SCALE"}},"content":"The last year we\u2019ve grown at an ever-increasing pace, doubling code and users every few months. Some issues could be fixed quickly and easily, while other issues were vastly more complex. One of those issues happened to be the convoluted mess of different container sources.\\n\\nThese container sources all had different tag formats, rate limits, downtimes, and one even decided to start deleting tags, leading to applications breaking. This, obviously, was not the experience we wanted our users to have.\\n\\nTherefore, we\u2019ve spent the better part of December setting up our own container distribution system. The TrueCharts Container Repository, or TCCR in short. TCCR is a combination of containers we\u2019ve fully built ourselves and containers we mirror, screen and re-tag into a standardized format. Doing this also allowed us to ensure *all* containers are available from multiple sources: GHCR, Quay and Dockerhub.\\n\\nTo achieve this, we\u2019ve partnered with scarf.sh, which allows us to easily switch between container sources for our repository, while also giving us something new: metrics. We can finally see which containers are popular and which are not, but we can also see if there are people still using older versions of applications. This allows us to improve our decision-making process: which apps to work on and which older versions to keep supporting.\\n\\nAll of you have (under the hood), already been running TCCR and we\u2019ve only had a handful of issues related to it. We\u2019re happy to have created something that again, highlights us as the number 1 source for TrueNAS SCALE Applications."}]}')}}]);