---
path: '/2018-ithelp-day28'
date: '2017-12-31'
title: 'Day 28 : css 的 link 和 @import'
author: 'Kat Chou'
description: ''
category: ['2018 it邦幫忙鐵人賽']
---

link
```
<link href="index.css" rel="stylesheet">  
```
@import
```
<style type="text/css">  
@import "index.css";  
</style>  
```
*  @import 為css；link 是為當前頁面服務，@import 無法用 js 操作dom改變樣式。
* link 除了引用樣式文件外，還可以引用圖片，@import 只能引用樣式。
*  link 引用 css 的時候，在頁面載入時同時加載，@import要等頁面完全載入後才會加載。

