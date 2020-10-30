---
path: '/create-http-server'
date: '2019-03-20'
title: '畫面刻完後想加個http server'
author: 'Kat Chou'
description: ''
category: ['node.js', 'F2E']
---

筆記一下 使用node.js

### Step1

在專案裡 `npm init`

### Step2

```npm install http-server```

### Step3

到 package.json 的 script 的地方設定一下

```js
"scripts": {
  "start": "http-server -a 127.0.0.1 -p 8080"
}
```

### Step4 跑起來

```npm run start```
