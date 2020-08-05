---
category: 'blog'
cover: './cover.jpg'
title: 'Scala & Lift and the record lifecycle callbacks'
description: 'Learn how to hook the model lifecicle with custom code'
date: '2016-02-29'
tags: ['scala', 'design pattern', 'lift framework']
published: true
---

<article class="prose prose-lg sm:prose lg:prose-lg xl:prose-xl">

I was digging around the source code of our project when I noticed spread in many <a href="http://exploring.liftweb.net/master/index-5.html" target="_blank" rel="noopener noreferrer">snippets</a>, code that perform the same action (such as send a push notification to a user) after a particular object gets persisted in the database (for example when a new chat message is sent) or when a change of state happens (a payment for a particular order has been made).


The tecnhique I'm about to discuss can be applied to many frameworks: **Java** and <a href=" https://docs.jboss.org/hibernate/entitymanager/3.5/reference/en/html/listeners.html" target="_blank" rel="noopener noreferrer">Hibernate</a>, **Ruby** with <a href="http://guides.rubyonrails.org/active_record_callbacks.html" target="_blank" rel="noopener noreferrer">Active Record</a>, **Meteor** and its <a href="https://www.discovermeteor.com/blog/a-look-at-meteor-collection-hooks/" target="_blank" rel="noopener noreferrer">Collection hooks</a>, and for all the homo erectus who are reading, also with some PHP frameworks, just to name a few.


## Simplifying and DRYing out the code



The framework-agnostic recipe is the following:



 - **Identify** repeated code that perform some action after a change of state persisted on the database
 - **Cut** the previously identified code 
 - **Paste** it in the model and override the lifecycle callback that make sense the most, as explained below




 In <a href="http://www.liftweb.net/" target="_blank" rel="noopener noreferrer">Lift</a> we accomplish this with the LifecycleCallbacks <a href="http://docs.scala-lang.org/tutorials/tour/traits.html" target="_blank" rel="noopener noreferrer">trait</a> that we can mix in the fields of our <a href="https://www.assembla.com/wiki/show/liftweb/Record" target="_blank" rel="noopener noreferrer">record</a>, <a href="https://www.assembla.com/wiki/show/liftweb/Mongo_Record_Basics" target="_blank" rel="noopener noreferrer">MongoRecord</a> in our case.
 This trait make us available the following methods


```scala
 
 def beforeValidation {}
 def afterValidation {}
 
 def beforeSave {}
 def beforeCreate {}
 def beforeUpdate {}

 def afterSave {}
 def afterCreate {}
 def afterUpdate {}
 
```

that we can override in order to perform actions at various points during the lifecycle of a given instance. Their names are self explanatory but a thing to remember is that `beforeSave` is always called before `beforeCreate` or `beforeUpdate`.  
`afterSave`, similarly, is called after `afterCreate` or `afterUpdate`.  

With this tool in our toolbelt we can centralize the code that was spread all over the codebase, in our model, making our software more mantainable, <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself" target="_blank" rel="noopener noreferrer">**DRY**</a>, and clean.
 
Here is an example

```scala
 class ChatMsg extends MongoRecord[ChatMsg] 
   with ObjectIdPk[ChatMsg]{
     def meta = ChatMsg
     object text extends StringField(this, 500) 
       with LifecycleCallbacks{
         override def afterSave: Unit = {
             //send push notification or whatever
     }
   }
 }
```

Go and try it out!  

Keep Learning.  
Until next time :sunglasses:

 [liftweb]: http://www.liftweb.net/
 [record]: https://www.assembla.com/wiki/show/liftweb/Record
 [traits]: http://docs.scala-lang.org/tutorials/tour/traits.html
 [mongorecord]: https://www.assembla.com/wiki/show/liftweb/Mongo_Record_Basics
 [dry]: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself

</article>