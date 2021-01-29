---
path: '/blog/2018-ithelp-day10'
date: '2017-12-13'
title: 'Day 10 : Bootstrap 列印'
author: 'Kat Chou'
description: ''
tags: ['2018 it邦幫忙鐵人賽']
---

Bootstrap在工作當中算是很常使用

[維基百科上的介紹 ](https://zh.wikipedia.org/wiki/Bootstrap): Bootstrap是一組用於網站和網路應用程式開發的開源前端框架，包括HTML、CSS及JavaScript的框架，提供字體排印、表單、按鈕、導航及其他各種元件及Javascript擴充套件，旨在使動態網頁和Web應用的開發更加容易。

從3.0版本開始，Bootstrap將行動裝置優先作為設計方針。

再來是客戶的列印需求:
1. 在頁面按下鍵盤 ctrl + p 列印
2. 在頁面做個按鈕按下去彈出按下ctrl + p 的列印畫面

知道css有這麼一個東西 , 可以設定列印時的樣式
```
@media print {
}
```
## *列印會用手機寬度的css
首先按下ctrl + p ，畫面使用了手機寬度的css...
原本想說既然這樣那就把桌機版的css複製貼到@media print 裡面，於是...頁面重新整理之後按下ctrl + p 一點動靜也沒有...

打開google 搜尋print css , 大部分的說明都在 @media print 或是 media = "screen" 這類的，還是不解為何它非得用手機的css。
思來想去，看了一陣子，恩...一定是bootstrap的關係，在google 搜尋了 bootstrap print mobile 終於在stackoverflow有了有效的解法 [附上連結](https://stackoverflow.com/questions/23369367/bootstrap-3-pages-printing-mobile-version)
```
//按自己的情況設定
@media print {
  @page {
    size: 330mm 427mm; 
    margin: 14mm;
  }
  .container {
    width: 1170px;
  }
}
```
## *a標籤的連結網址都會被顯示出來
```
<a href="https://www.google.com">google</a>
```
新增一個html 放上面這個a標籤連結試試 , 會有下面兩種結果
![沒有bootstrap css的ctrl+p列印](https://upload-images.jianshu.io/upload_images/4119783-d6de967aa66d0f29.JPG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![引入bootstrap css的ctrl+p列印](https://upload-images.jianshu.io/upload_images/4119783-48e5f9ddc42763dd.JPG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

解決方法是在@media print另外為a[href] content 給個 " "
```
@media print {
  a[href]:after {
    content: "";
  }
}
```

大概就是這麼一回事


