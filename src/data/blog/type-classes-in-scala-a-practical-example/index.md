---
category: 'blog'
cover: './cover.jpg'
title: 'Type Classes in Scala: A Practical Example'
description: 'A guided practical tour of the Type Class pattern '
date: '2017-06-02'
tags: ['scala', 'functional programming', 'type class']
published: true
---

<article class="prose lg:prose-lg xl:prose-xl">

Say you want to extend a particular class (type) with some new functionality but you can't access the source code..
or perhaps you can but you don't want to use inheritance and subtype polimorphism..

Let's suppose you have the following type that represents an uploaded picture

```scala
case class Picture(name: String, uri: Uri)     
```

and you want to return the json representation of it to your clients.   
You can do something like this

```scala

trait Jsonable{
    def toJson: JValue
}

final case class Picture(name: String, uri: Uri) extends Jsonable{
    def toJson(): JValue = {
        //implementation omitted
    }
}    
```

Then you realize that you need another type, Attachment.   
No problem, let's add another case class to the mix

```scala

final case class Attachment(name: String, uri: Uri, visibile: Boolean) extends Jsonable{
    def toJson(): JValue = {
        //implementation omitted
    }
}    
```

Now you can serialize to json all of your case classes that extends the *Jsonable* trait


```scala
val picture: Jsonable = Picture("scalaitaly.png", new Uri("aws.s3.scalaitaly.png"))
val attachment: Jsonable = Attachment("speakers.pdf", new Uri("aws.s3.speakers.pdf"), true)

println(picture.toJson)
println(attachment.toJson)
```

This all works, but what if you don't have access to the source code of `Picture` or `Attachment`?
Is there another way? Maybe more **Scala-ish**?   

## Type Classes to the rescue

First and foremost. A Type Class has nothing to do with the concept of class in a typical Object Oriented programming language.  
It's a concept from the Haskell world and it's used to achieve **ad-hoc polymorphism**  

### Type Classes in practice

The first thing to do is define the behavior that you want your classes to have, in this case we want our case classes to be serializable in the json format.  
That's the Type Class.

```scala
trait JsonWriter[T]{
  def toJson(in: T): JValue
}
```

then we need the Type Class instances for each concrete class we have

```scala
implicit val pictureJsonWriter = new JsonWriter[Picture]{
  override def toJson(in: Picture): JValue = ???
}  
  
implicit val attachmentJsonWriter = new JsonWriter[Attachment]{
  override def toJson(in: Attachment): JValue = ???
}
```

we mark them `implicit` because we want the compiler to be able to inject the correct implementation into the interface the we are defining next

```scala
def jsonOf[T](in: T)(implicit jsonWriter: JsonWriter[T]): String =
  jsonWriter.toJson(in)
```

You can play with the code below  

<iframe height="300" frameborder="0" style="width: 100%; overflow: hidden;" src="https://embed.scalafiddle.io/embed?sfid=eRUVeR8/5&layout=v80"></iframe>

Wouldn't it better if the method `toJson` would be a part of the classes in our domain model but without touching them?
Adding the functionality magically from the outside.

I would like to write

```scala
println(Picture("mypic", "mypicurl").toJson)
println(Attachment("myattachment", "myurl", false).toJson)
```

As if `toJson` were a built-in method of the class.

Yes, I know that, for example in Ruby, Javascript you can do monkey patching, but we are talking about compile time transformation, not runtime.

In Scala you can achieve that using **Implicit Classes**

You just need to write 

```scala
implicit class JsonSerializer[T](data: T){
  def toJson(implicit writer: JsonWriter[T]): String = 
    writer.toJson(data)
}
```

This way, when you try to do something like `Picture("mypic", "mypicurl").toJson`, the compiler, not finding the `toJson` method in the `Picture` class, tries to convert `Picture` in a `JsonSerializer` that has the method you want.  
Then it passes as `implicit writer: JsonWriter[T]` your Type Class instance that you defined for `Picture` before.  

You can play with the final code below  

<iframe height="300" frameborder="0" style="width: 100%; overflow: hidden;" src="https://embed.scalafiddle.io/embed?sfid=V6QiLPI/1&layout=v80"></iframe>

### Conclusions

With this powerful design pattern we have achieved an impressive result.  
We can now add new data or new methods to existing types without changing any existing code.  

It's certainly a design pattern that is useful to have in your toolbelt.  
It's so important that many famous libraries such as <a href="https://github.com/milessabin/shapeless" target="_blank" rel="noopener noreferrer">Shapeless</a>, <a href="http://typelevel.org/cats/" target="_blank" rel="noopener noreferrer">Cats</a>, <a href="https://github.com/scalaz/scalaz" target="_blank" rel="noopener noreferrer">Scalaz</a> and so on, couldn't even exists without this.

If you want to learn more (yes you want) I suggest you <a href="http://underscore.io/books/advanced-scala/" target="_blank" rel="noopener noreferrer">Advanced Scala</a> by the amazing guys of <a href="http://underscore.io/" target="_blank" rel="noopener noreferrer">Underscore.io</a>.  

Moreover, they recently open sourced all their ebooks, you can download all of them for free <a href="http://underscore.io/books/" target="_blank" rel="noopener noreferrer">here</a>, what are you waiting for?


Keep Learning  
Until next time :sunglasses:

</article>