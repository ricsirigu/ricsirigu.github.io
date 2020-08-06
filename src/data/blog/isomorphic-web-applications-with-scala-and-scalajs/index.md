---
category: 'blog'
cover: './cover.jpg'
title: 'Isomorphic Web Applications with Scala and ScalaJs'
description: 'Learn how to integrate scalajs in a scala project'
date: '2016-03-20'
tags: ['scala', 'scalajs', 'isomorphic web application']
published: true
---

<article class="prose lg:prose-lg xl:prose-xl">

## What is an isomorphic web application? ##

An isomorphism is a mathematical term used to indicate that two things, from an high level perspective, are essentialy the same.  
In the context of web applications it means that we have code shared between the front-end and the back-end.  
It also means that we can execute the client side code on the server.  
With no doubt a more clear and less scary term is **Universal web application**.    

With the traditional approach of an application built with an MVC framework (one that doesn't support server side rendering of your front-end components) and an API backend, the client has to wait for the JavaScript to download and execute until he can finally see something. And we know from <a href="http://blog.gigaspaces.com/amazon-found-every-100ms-of-latency-cost-them-1-in-sales/" target="_blank" rel="noopener noreferrer">studies</a> that a reduction of 100ms of page load can make a big difference.



## Why is server side rendering useful? ##

It's useful for a number of reasons:

 - **SEO**: Having your MVC framework generate the views client side make difficult, if not impossibile, for crawlers to index your application. That's why a number of libraries, such as <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>, if configured appropriately, can easily render views server side.
 - **Performance**: Server side rendering speeds up the initial page load. The server can pre render the view and send it to the client that can render it until the JavaScript gets downloaded and executed. This is what <a href="https://blog.twitter.com/2012/improving-performance-on-twittercom" target="_blank" rel="noopener noreferrer">Twitter did</a> in one year and with 40 engineers.

<div style="background-color:#fff4db; color:#53450e; padding: 25px; border-radius:5px; text-align:center">
		<i>Can Google crawl my website successfully?</i> :smile:<br/>
		<a href="https://www.google.com/webmasters/tools/googlebot-fetch">Fetch as Google</a> your SPA to see the result.
</div>


An example of this architectural pattern is the <a href="https://www.meteor.com/" target="_blank" rel="noopener noreferrer">Meteor</a> framework.
You can achieve **similar** results with the MERN stack.

## Must an isomorphic web application necessarily be written in JavaScript? ##

If you read the title of this blog post you can stay calm and stop comparing the feeling of programming in JavaScript with the one of the time you went skydiving without the reserve parachute.

I know that your front-end code is written in JavaScript but if your codebase is in Scala you can write your client side code in that language and make a <a href="https://en.wikipedia.org/wiki/Source-to-source_compiler" target="_blank" rel="noopener noreferrer">transpiler</a> do the dirty work of producing the JavaScript. Or you can do a similar thing with the <a href="http://www.liftweb.net/" target="_blank" rel="noopener noreferrer">Lift</a> framework and its <a href="http://exploring.liftweb.net/master/index-10.html" target="_blank" rel="noopener noreferrer">JavaScript abstractions</a>.  
This is the <a href="https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-js" target="_blank" rel="noopener noreferrer">trend</a> that is emerging. You don't need to write your JavaScript by hand anymore.

JavaScript is becoming the Assembly of the web.


## What is ScalaJs? ##
ScalaJs is a compiler that translates Scala code to JavaScript, and can run on any browser or in an execution environment such as NodeJs. 
There are also <a href="https://www.scala-js.org/libraries/facades.html" target="_blank" rel="noopener noreferrer">ScalaJs facades</a> to interact with existing libraries such as facebook's <a href="https://github.com/japgolly/scalajs-react" target="_blank" rel="noopener noreferrer">React</a> in a typesafe manner. 


There are tons of languages that transpiles to JavaScript such as <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">Typescript</a>, <a href="https://dart.dev/" target="_blank" rel="noopener noreferrer">Dart</a>, <a href="https://clojurescript.org/" target="_blank" rel="noopener noreferrer">Closurescript</a>, <a href="https://coffeescript.org/" target="_blank" rel="noopener noreferrer">Coffescript</a> just to name a few.
All of them are born to reduce the JavaScript tendency of helping you to make mistakes.



## I like JavaScript, why should I care about ScalaJs? ##

 - It's safer. 

   No more `undefined is not a function` errors discovered at runtime, maybe in a production environment. 

   You now have **strong** type checking and lots of errors will be discovered at compile time. Your code will be more robust and your cortisol level will be optimal.

 - You have more <a href="https://en.wikipedia.org/wiki/Expressive_power_(computer_science)" target="_blank" rel="noopener noreferrer">expressive</a>, modular and reusable code. 

   When you start building large (10k+ LOC) and complex Single Page Applications and your codebase grows rapidly, it's better to have a more expressive language in order to express the same concept with fewer lines of code (arrow functions in ES6 make your keyboard last longer).   
   <a href="https://en.wikipedia.org/wiki/Halstead_complexity_measures" target="_blank" rel="noopener noreferrer">Less code, less bugs</a>



 - Same language for the server and the client. 

   It's great to know many programming languages but for a web application, maybe with offline support, it's great using only one. This way you reduce code duplication, for example form validation, currency formatting and so on, sharing the business logic code easily with the server. This way you reduce your cognitive load and the probability of making stupid mistakes such as writing `throw new Exception()` in JavaScript.  

 - You also get better tooling and better IDE support. 

   You can navigate easily your code and refactoring is safer and so easier.


<div style="background-color:#fff4db; color:#53450e; padding: 25px; border-radius:5px; text-align:center">
		<strong>:pencil2: Quiz time: </strong>
		<br/>
		<br/>
		<i>What does this JavaScript snippet print?</i>
		<br/>
		<br/>
		["10", "10", "10", "10"].map(parseInt);
		
</div>

## Isomorphic web app with ScalaJs ##

Many JavaScript frameworks have introduced the server side rendering capability such as Ember's <a href="https://github.com/tildeio/ember-cli-fastboot" target="_blank" rel="noopener noreferrer">FastBoot</a>, backbone's <a href="https://github.com/rendrjs/rendr" target="_blank" rel="noopener noreferrer">rendr</a>, <a href="https://github.com/angular/universal" target="_blank" rel="noopener noreferrer">Universal</a> Angular2 etc.  
Facebook's React in one of them and thanks to the ScalaJs <a href="https://github.com/japgolly/scalajs-react" target="_blank" rel="noopener noreferrer">facade</a> you can write your views server side in Scala, compile them to JavaScript with ScalaJs and push them to the client that can take control from there once is ready.


With ScalaJs you can literally be a full stack Scala engineer and also target the mobile world. 
You can write your <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">React Native</a> mobile application in Scala with <a href="https://github.com/scalajs-react-interface/sri#sri" target="_blank" rel="noopener noreferrer">React Native</a> interface, compile your code with ScalaJs and deploy it. 

Awesome.

You can start learning ScalaJs with the <a href="http://www.scala-js.org/doc/tutorial/basic/" target="_blank" rel="noopener noreferrer">basic tutorial</a>.  
I also suggest the <a href="http://www.lihaoyi.com/scalatags/" target="_blank" rel="noopener noreferrer">Scalatags</a> library, to write HTML in Scala.  
You can also find projects and a Single Page Application example <a href="https://github.com/lihaoyi/workbench-example-app" target="_blank" rel="noopener noreferrer">here</a> and <a href="https://github.com/ochrons/scalajs-spa-tutorial" target="_blank" rel="noopener noreferrer">here</a>.



Keep Learning.  
Until next time :sunglasses:

</article>