---
path: '/blog/2018-ithelp-day26'
date: '2017-12-29'
title: 'Day 26 : bootstrap tab hash （瓶#間）'
author: 'Kat Chou'
description: ''
tags: ['2018 it邦幫忙鐵人賽']
---

最近在切網頁的時候又遇到 bootstrap 的問題了，目前是希望能夠在 url 可以 # 到 tab ，也就是從 A 頁面點某個元素可以到 www.ooxx.com/B.asp#ooxx  B 頁面的 #ooxx 區塊 的這種情況。
在同一頁面中改#後的值是沒有問題的，但不同頁面的#就沒有反應。
爬文後是有看到這個： 
```
$(function(){
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab('show');

  $('.nav-tabs a').click(function (e) {
    $(this).tab('show');
    var scrollmem = $('body').scrollTop() || $('html').scrollTop();
    window.location.hash = this.hash;
    $('html,body').scrollTop(scrollmem);
  });
});
```

但目前還沒奏效...
這一段，我用chrome console 可以在網址列看到#值的變化，但寫到頁面內是沒有反應的。

然後，繼續爬文發現
[jquery click doesn't work on ajax ](https://stackoverflow.com/questions/9344306/jquery-click-doesnt-work-on-ajax-generated-content) 這問題，因為我也是用了ajax 抓了資料，回覆是說是要用on ，不能直接用click... 
搗鼓了半天，還在瓶#間，bu
