---
category: 'blog'
cover: './cover.jpg'
title: 'Quick recipe: How to connect multiple Docker containers'
description: 'How to connect multiple Docker containers'
date: '2018-02-22'
tags: ['docker', 'containers']
published: true
---

<article class="prose lg:prose-lg xl:prose-xl">


This will be a quick one.  
You have two or more **Docker** containers and you want them to communicate with each other.
Here is how you do it.


For semplicity of sake let's assume you have two containers.

* `my-dev-db` is the first container, a database used for development for example
* `my-web-app` is the second one, a web app written in your favourite programming language

To allow the communication between our cool containers we need to create a bridge network with

`docker network create <network-name>`

in our case, let's name it `my-net`. Such an original name. :sweat_smile:

and then you attach your running containers to the newly created network with

`docker network connect my-net my-dev-db`
`docker network connect my-net my-web-app`

now if you run the command `docker network inspect my-net` you should see your containers listed. Now your containers should see each other and can talk with each other.

If you want to learn more, check out <a href="https://docs.docker.com/network/bridge/" target="_blank" rel="noopener noreferrer">the official Docker documentation</a>

If you want to know how to do the same thing using **Docker Compose**, just take a look <a href="https://docs.docker.com/compose/networking/" target="_blank" rel="noopener noreferrer">here</a>


Keep Learning  
Until next time :sunglasses:

</article>