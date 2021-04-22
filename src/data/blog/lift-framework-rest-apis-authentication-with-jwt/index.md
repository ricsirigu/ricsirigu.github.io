---
category: 'blog'
cover: './cover.jpg'
title: 'How to protect your RESTful APIs in Lift with JWT'
description: 'How to add authentication to your REST APIs'
date: '2017-07-21'
tags: ['jwt', 'security', 'authentication']
published: true
---

<article class="prose lg:prose-lg xl:prose-lg">

You have a RESTful api as a source of data for your mobile applications or a reactjs/angular/vue/whatever frontend, and you, as a security conscious software engineer (or a good student that follows <a href="https://github.com/shieldfy/API-Security-Checklist" target="_blank" rel="noopener noreferrer">these security guidelines</a> ) want to protect your precious endpoints from unwanted eyes.



## What is JWT 

As explained in <a href="https://jwt.io/introduction/" target="_blank" rel="noopener noreferrer">the official JWT page</a> or in the <a href="https://tools.ietf.org/html/rfc7519" target="_blank" rel="noopener noreferrer">RFC 7519</a>:

_JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA._


In brief, it's a string with the following format

`header.payload.signature`

where each part is **base64url** encoded, interactive examples <a href="https://jwt.io/#debugger" target="_blank" rel="noopener noreferrer">here</a>.

Just rember that the payload is not encrypted and **ANYONE** that has access to the token can see what's inside. An attacker can inspect the payload but he can't tamper with it because it's signed with a **STRONG** key that you generated.

My library of choice to encode/decode/verify JWT with Scala is <a href="http://pauldijou.fr/jwt-scala" target="_blank" rel="noopener noreferrer">jwt-scala</a>

## Building an interceptor with Lift

The api we want to protect is the following

`GET /api/secured/treasure`


I would like to have a middleware (in Express.js terms, a decorator if you are a Python lover) that intercepts every request that points to a protected resource, decode the JWT inside of the http request's **Authorization** header and allow or deny access to the forementioned resource according to the token validity.

**How can we do this with Lift?**

The `LiftRules` object is where most of the configuration parameters that handles HTTP request and responses reside.
It gets initialized during boot.

As the <a href="https://exploring.liftweb.net/master/index-9.html#toc-Section-9.9" target="_blank" rel="noopener noreferrer">documentation says</a>, this is the place where we tell Lift what resource needs to be protected and how.

Lift doesn't support Token based authentication out of the box, but thanks to its extensibility we can easily write our own JWT authenticator.

Let the fun begin!

Let's start with informing Lift that out precious API needs to be protected.

```scala
def protectedRoutes: LiftRules.HttpAuthProtectedResourcePF = {
  //Empty means that this resource is protected by authentication but no authorization is performed
  case "api" :: "secured" :: "treasure" :: Nil JsonGet _ => Empty
}
LiftRules.httpAuthProtectedResource.append(protectedRoutes)
LiftRules.authentication = JWTAuthentication("api"){
  case(payload, _) =>
    true
}
```

For each `HttpAuthProtectedResourcePF` inside `LiftRules.httpAuthProtectedResource`, Lift will use the authentication mechanism defined with `LiftRules.authentication`.  
In our case `JWTAuthentication`.

Let's write it.

First thing to do, in order to tell Lift we are writing an HTTP authentication method, we must extend the `HttpAuthentication` trait

```scala
trait HttpAuthentication {
  def header(r: Req): Box[String] = r.request.header("Authorization")
  def verified_? : PartialFunction[Req, Boolean]
  def realm: String = ""
  def unauthorizedResponse: UnauthorizedResponse = UnauthorizedResponse(realm)
  def shutDown {}
}
```

and override the `verified_?` partial function, that is the bouncer of our API.

Inside the `verified_?` partial function we need to take the token from the request's `Authorization` header, verify it and decode its payload, if we are interested in the claims inside its stomach.  
If `verified_?` returns `true`, the client is allowed, otherwise a 401 UnauthorizedResponse will be returned.

```scala
case class JWTAuthentication(realmName: String)(func: PartialFunction[(String, Req), Boolean]) extends HttpAuthentication {
    ...
    //If the credentials functions returns a Full box, func gets executed
    override def verified_? : PartialFunction[Req, Boolean] = {
    case (req) =>
        credentials(req) match {
        case Full(payload) if func.isDefinedAt(payload, req) =>
            jwtClaims.set(Option(payload))
            func(payload, req)
        case _ => false
        }
    }
}
```

`credentials` is a simple function that decodes the JWT with your secret and a given algorithm, you can find the full code at the end of this post.

Now we have an interceptor that can extract a JWT from each request that points to a protected resource, but how can we examine the claims that are inside the token without redoing the work that our interceptor has already done? 

It's simple, we can stick our decoded payload in a `TransientRequestVar`, a request variable that has the scope of the current HTTP request.

```scala
object jwtClaims extends TransientRequestVar[Option[String]](Empty)
```

Now in our api we can access jwtClaims and analyze the JWT payload.
```scala
object SecuredApi extends RestHelper{
  serve("api" / "secured" prefix {
     case "treasure" :: Nil JsonGet _ =>
       //Here you can access jwtClaims TransientRequestVar
       JString("My Treasure")
  })
}
```

This example is purposefully simple in order to make you better understand the general architecture, a better approach would be deserialize our claims and stick inside the TransientRequestVar not a String but a more suitable and easier to manage data type.

Here below, for your enjoyment, the full source code.

```scala
object SecuredApi extends RestHelper{

  def init() = {

    def protectedRoutes: LiftRules.HttpAuthProtectedResourcePF = {
      //Empty means that this resource is protected by authentication but no authorization is performed
      case "api" :: "secured" :: "treasure" :: Nil JsonGet _ => Empty
    }
    LiftRules.httpAuthProtectedResource.append(protectedRoutes)
    LiftRules.authentication = JWTAuthentication("api"){
      case(payload, _) =>
        true
    }
    LiftRules.statelessDispatch.append(SecuredApi)
  }


  serve("api" / "secured" prefix {
     case "treasure" :: Nil JsonGet _ =>
       //Here you can access jwtClaims TransientRequestVar
       JString("My Treasure")
  })
  
}
```

```scala
object jwtClaims extends TransientRequestVar[Option[String]](Empty)

case class JWTAuthentication(realmName: String)(func: PartialFunction[(String, Req), Boolean]) extends HttpAuthentication {

  //Take the JWT from the Authorization header
  def credentials(r: Req): Box[String] = {

    header(r).flatMap{ token =>
      if (Jwt.isValid(sanitizeHeader(token), secret, Seq(JwtAlgorithm.HS256))) {
        Jwt.decode(sanitizeHeader(token), secret, Seq(JwtAlgorithm.HS256)) match {
          case Success(payload) => Full(payload)
          case Failure(_) => Empty
        }
      } else {
        Empty
      }
    }
  }

  //If the credentials functions returns a Full box, func gets executed
  override def verified_? : PartialFunction[Req, Boolean] = {
    case (req) =>
      credentials(req) match {
        case Full(payload) if func.isDefinedAt(payload, req) =>
          jwtClaims.set(Option(payload))
          func(payload, req)
        case _ => false
      }
  }

  override def realm: String = realmName
}
```

Keep Learning  
Until next time :sunglasses:


</article>