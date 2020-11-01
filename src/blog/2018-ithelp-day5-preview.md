---
path: '/2018-ithelp-day5'
date: '2017-12-08'
title: 'Day5 : 預覽'
author: 'Kat Chou'
description: ''
tags: ['2018 it邦幫忙鐵人賽']
---

今天來做一個即時預覽的效果。
使用html5 blob 、iframe 


[demo](https://yuningchou.github.io/iframe_html5_blob/)
demo裡面的聖誕卡是codepen上找到的[這個](https://codepen.io/Alireza29675/pen/KwgwMy)

demo中按下按鈕就會執行github gist裡面嵌入的內容。

步驟 1 ：建立<iframe>
步驟 2 :  html、css字符串轉為blob
步驟 3 ：用URL.createObjectURL() 將blob轉為URL並給<iframe>src屬性

``` 
var iframe = document.createElement('iframe');
var blob = new Blob([htmlCode], {
  'type': 'text/html'
//用document.getElementById('codeArea').value取到內容
});
iframe.src = URL.createObjectURL(blob);
//把blob 丟到這邊來轉為URL
``` 

這個要用在哪裡...大概是在網頁中內容想穿插一個即時效果的展示，但又不想因此多新增一頁的時候。
