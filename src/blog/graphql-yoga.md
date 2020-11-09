---
path: '/graphql-yoga'
date: '2020-11-09'
title: 'GraphQL-graphql-yoga'
author: 'Kat Chou'
description: ''
tags: ['GraphQL']
---

起手式
***
[graphql-yoga](https://github.com/prisma-labs/graphql-yoga)

### Step 1  安裝graphql-yoga
` npm install graphql-yoga`

### Step 2 babel安裝與設定 

用途： 使用 es6

` npm install @babel/cli @babel/core @babel/node @babel/preset-env -D`

⬇️ 在根目錄新增 .babelrc 檔案
```
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": "current"
                }
            }
        ]
    ]
}
```

### Step 3 nodemon 

用途： 更新檔案後自動重啟

` npm install nodemon -D`

### Step 4 package.json script 設定

```
"scripts": {
  "start": "nodemon --exec babel-node index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

### index.js
```
import { GraphQLServer } from 'graphql-yoga';
const server = new GraphQLServer({
    typeDefs: `
        type Query {
            hello(name: String): String!
        }
    `,
    resolvers: {
        Query: {
            hello: (root, { name }, context) =>{
                return `Hello ${name || 'World'}`
            }
        },
    }
})

server.start({}, ({ port }) => {
    console.log(`server run at http://localhost:${port}`);
})
```

