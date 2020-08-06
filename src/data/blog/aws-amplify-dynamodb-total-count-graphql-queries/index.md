---
category: 'blog'
cover: './cover.jpg'
title: 'How to count the number of results with AWS Amplify DynamoDB and GraphQL'
description: 'Ho to paginate the results with DynamoDB?'
date: '2019-12-10'
tags: ['aws', 'dynamodb', 'graphql', 'amplify']
published: true
---
<article class="prose lg:prose-lg xl:prose-xl">

How to get the total count of results with DynamoDB and GraphQL in order to paginate my results?

Many engineers using <a href="https://aws.amazon.com/it/amplify/" target="_blank" rel="noopener noreferrer">AWS Amplify</a> are <a href="https://github.com/aws-amplify/amplify-js/issues/2901" target="_blank" rel="noopener noreferrer">facing</a> the <a href="https://stackoverflow.com/questions/55537058/get-count-from-dynamodb-resolver" target="_blank" rel="noopener noreferrer">same</a> <a href="https://github.com/aws-amplify/amplify-cli/issues/1865" target="_blank" rel="noopener noreferrer">issue</a>.


If you are about to bang your head against the wall, stop. 

I'll show you how to do it.

From the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Count" target="_blank" rel="noopener noreferrer">DynamoDB documentation</a>:

```
the Query response contains the following elements:

ScannedCount — The number of items that matched the key condition expression before a filter expression (if present) was applied.

Count — The number of items that remain after a filter expression (if present) was applied.

```

The problem is that the automatically generated queries from Amplify don't have those fields.

This is an example of a query that lists users:

```javascript
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelAlertFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        groupCanAccess
        owner
        ...
      }
      nextToken
    }
  }
`;

```

And so, there will be no `scannedCount` and `count` in the result.

To make them magically appear, open your `amplify/backend/api/deepboard/build/schema.graphql` 

and look for the definition of the `type Query`.

You'll find something like this 

```graphql
type Query {
  getUser(id: ID!): User
  listUsers(filter: ModelUserFilterInput, limit: Int, nextToken: String): ModelUserConnection
  ...
}
```

a `listUsers` field that returns a type of `ModelUserConnection`, that is the result type that we want to edit.

Copy the type `ModelUserConnection` in your `amplify/backend/api/<project-name>/schema.graphql` to override it.


```graphql
type ModelUserConnection {
  items: [User]
  nextToken: String
}
```

Add the `scannedCount` and `count` fields.

```graphql
type ModelUserConnection {
  items: [User]
  nextToken: String
  scannedCount: Int
  count: Int
}
```

Now type `amplify push` and enjoy. 

Now the query will return the scannedCount and count and you can happily paginate your results.

Remember that if the size of the Query result set is larger than 1 MB, `scannedCount` and `count` represent only a partial count of the total items. You need to perform multiple Query operations to retrieve all the results.


Keep Learning  
Until next time :sunglasses:

</article>

[issue-1]: https://github.com/aws-amplify/amplify-js/issues/2901
[issue-2]: https://stackoverflow.com/questions/55537058/get-count-from-dynamodb-resolver
[issue-3]: https://github.com/aws-amplify/amplify-cli/issues/1865
[aws-doc-1]: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Count