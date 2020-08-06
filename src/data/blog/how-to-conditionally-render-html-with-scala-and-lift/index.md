---
category: 'blog'
cover: './cover.jpg'
title: 'How to conditionally render HTML with Scala and the Lift Framework'
description: 'Learn how to conditionally render HTML with Scala and the Lift Framework'
date: '2017-02-01'
tags: ['scala', 'lift framework']
published: true
---
<article class="prose lg:prose-lg xl:prose-xl">

You have a piece of HTML like the following

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset=utf-8 />
  <title>Your Snippet</title>
</head>
<body data-lift="ConditionalRendering">
  <div id="content-container">
    <span class="subtitle">Inclusions</span>
    <div class="info">
      <ul id="inclusions">
        <li class="inclusions-text">Guided tour</li>
      </ul>
    </div>
  </div>
</body>
</html>
 
```

and you want to hide the entire container if some condition is true.  
Otherwise you want to display something inside the container.   
Maybe populating an unordered list.

```scala
class ConditionalRendering{
  def render: (NodeSeq) => NodeSeq = {
    "#content-container" #> {if(trueness) PassThru else ClearNodes} andThen
    "#inclusions" #> {".inclusions-text *" #> { List("food", "drinks") } }                     
  }
}
 
```

The key part is **andThen** because if you use the **&** chaining method, the CSS selectors are applied to the
original template, no matter what other selectors you are using.   
In contrast, with **andThen** you are composing two functions with the first being executed before the second.

Keep Learning.  
Until next time :sunglasses:

</article>