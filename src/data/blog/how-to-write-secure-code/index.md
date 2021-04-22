---
category: 'blog'
cover: './cover.jpg'
title: 'How to write secure code'
description: 'Maybe you do not need to be a security expert, do you?'
date: '2021-02-13'
tags: ['security', 'programming', 'secure coding', 'secure coding best practices']
published: true
---

<article class="prose lg:prose-lg xl:prose-lg">

We all know that writing bug-free code is hard.  
That writing readable code is hard.  
That writing testable code is also hard.   
Well, I could keep going but you get it.   
Writing code that is also secure is even harder.

What can we do about it?

- Apply threat modeling as if there is no tomorrow
- Research for all **known** vulnerabilities and apply the suggested countermeasures
- Apply all the OWASP guidelines, in particular the <a href="https://owasp.org/www-project-proactive-controls/" target="_blank" rel="noopener noreferrer">Top 10 Proactive Controls</a>

Although these practices are strongly recommended, there is also another point to consider, which is often overlooked.

**A strong Design**

Let's suppose to have a simple domain object that represents a Developer in a typical web application with the Developer's username displayed in a public profile page.

```scala
case class Developer(id: Long, username: String)
```

The `Developer` is quite simple, it holds an `id` and its `username`.

If we take a closer look at the code we can identify at least one security vulnerability.  
Can you figure out where?  
(Here a knowledge of the <a href="https://owasp.org/www-project-proactive-controls/" target="_blank" rel="noopener noreferrer">most common web vulnerabilities is needeed</a>)

The  `username` is displayed in a public page and is Developer-controlled.

A malicious actor could name itself something along the lines of `'><script>alert('I'm an evil script!')</script>`
and manage to execute JavaScript code on the visitor's browser.  
<a href="https://portswigger.net/web-security/cross-site-scripting" target="_blank" rel="noopener noreferrer">This vulnerability is called Cross Site Scripting (*XSS*)</a>.  
Or he can even store its name as a malicious SQL query and perform <a href="https://portswigger.net/web-security/sql-injection/blind" target="_blank" rel="noopener noreferrer">a blind *SQL injection*</a> attack.

These are two injection vulnerabilities that affect two different layers. 
The presentation layer in the case of *XSS* and the persistence layer in the case of SQL injection.  
With the traditional approach we usually do one or more of the following:  
- To mitigate the first security vulnerability (*XSS*) we could encode the `username` when displaying it in the profile page, to strip out all the dangerous characters by hand or by using a modern JavaScript framework being careful not to disable the encoding for whatever reason.
- To mitigate the second security vulnerability we could add a filter to strip out everything except all the allowed non-dangerous characters.

We could even employ a web application firewall that manages this filtering automagically.

But these approaches, if not rigorously applied, tends to provide a false sense of security.

Moreover if a new attack vector is discovered, for which the above mitigations are not suitable, we are in trouble.

An alternative method is a variation of the <a href="https://en.wikipedia.org/wiki/Rule_of_least_power" target="_blank" rel="noopener noreferrer">"Rule of least power"</a>.  
Why representing the `username` as a whole `String` when we don't need all the UTF-16 charset (in this case)?

### Secure By Design

What if our `Developer` was represented in the following way?

```scala

object refinements {
    type Id = Long Refined Positive
    type Username = String Refined AllOf[
        NonEmpty
        MatchesRegex["[A-Za-z0-9_]+"]
        MinSize[5]
        MaxSize [20]
    ]
    
    final case class Developer(id: Id, username: Username)
}
```

Here I'm using Scala with <a href="https://github.com/fthomas/refined" target="_blank" rel="noopener noreferrer">refined</a>, but the same concepts apply to all the other programming languages.  

**We need to validate our domain model as strictly as possible.**

In our example the username can only be a non-empty String with a length between 5 and 20 characters and can only contain alfanumeric characters plus the underscore.
This makes the aforementioned attacks very unlikely to happen.

If we complement this design with the traditional approach previously explained and explicit security awareness, our code becomes even more secure.

Go and try it out!  

Keep Learning.  
Until next time :sunglasses:


</article>