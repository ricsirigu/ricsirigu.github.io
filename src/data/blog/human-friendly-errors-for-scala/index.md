---
category: 'blog'
cover: './cover.jpg'
title: 'Human Friendly errors for Scala'
description: 'Learn how to make Scala errors more human friendly'
date: '2017-02-17'
tags: ['scala', 'functional programming']
published: true
---

<article class="prose lg:prose-lg xl:prose-xl">

Sometimes Scala compiler errors can be too cryptic and scare beginners away

```scala
error: diverging implicit expansion for type scala.collection.generic.CanBuildFrom[ird.replay.gui.GraphType.ValueSet,(ird.replay.gui.GraphType.Value, org.jfree.data.time.TimeSeries),That]
starting with method newCanBuildFrom in object SortedSet

```

Or

```scala
[error] TheNextFacebook.scala:16: type mismatch;
[error]  found   : akka.http.scaladsl.server.StandardRoute
[error]  required: akka.stream.scaladsl.Flow[akka.http.scaladsl.model.HttpRequest,akka.http.scaladsl.model.HttpResponse,Any]
[error]   Http().bindAndHandle(r, "localhost", 8080)

```

What if we could have right now an human friendly explanation of the error, similar to what <a href="https://elm-lang.org/" target="_blank" rel="noopener noreferrer">Elm</a> or <a href="https://reactnative.dev/blog/2020/07/06/version-0.63" target="_blank" rel="noopener noreferrer">React</a> do?
(Well, even Scala itself with <a href="http://scala-lang.org/blog/2016/10/14/dotty-errors.html" target="_blank" rel="noopener noreferrer">Dotty</a> will have it but in the future)

Scala <a href="https://github.com/softwaremill/scala-clippy" target="_blank" rel="noopener noreferrer">Clippy</a> is a compiler (or SBT) plugin that does just that.

Just import it in your project

```scala
addSbtPlugin("com.softwaremill.clippy" % "plugin-sbt" % "0.5.1")

```

and the previous error magically becomes

```scala
[error]  Clippy advises: did you forget to define an implicit akka.stream.ActorMaterializer?
[error]  It allows routes to be converted into a flow.
[error]  You can read more at http://doc.akka.io/docs/akka-stream-and-http-experimental/2.0/scala/http/routing-dsl/index.html

```

But there is no magic, it's all community driven.   
When first started Clippy will download the current advice list from   
<a href="https://scala-clippy.org/" target="_blank" rel="noopener noreferrer">scala-clippy.org</a>.  
It's community driven so you can also contribute!


For more detailed instructions on how to setup just visit the <a href="https://github.com/softwaremill/scala-clippy" target="_blank" rel="noopener noreferrer">Clippy Github repository.</a>



Keep Learning  
Until next time :sunglasses:

</article>