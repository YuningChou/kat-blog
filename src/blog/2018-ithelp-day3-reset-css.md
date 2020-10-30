---
path: '/2018-ithelp-day3'
date: '2017-12-06'
title: 'Day3 : 引入reset.css之後'
author: 'Kat Chou'
description: ''
category: ['2018 it邦幫忙鐵人賽']
---

從一些網站當中右鍵檢視網頁原始碼，會看到這麼一隻css - reset.css
``<link type="text/css" rel="stylesheet"  href="css/reset.css">``
打開一看 :
```
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
fieldset, img {
    border: 0;
}
address, caption, cite, code, dfn, em, strong, th, var {
    font-style: normal;
    font-weight: normal;
}

ol, ul {
    list-style: none;
}
caption, th {
    text-align: left;
}
/*h1, h2, h3, h4, h5, h6 {
	font-size:100%;
	font-weight:normal;
}*/
q:before, q:after {
    content: '';
}
abbr, acronym {
    border: 0;
}
```
reset.css的用途，就是讓各個瀏覽器統一css，讓其歸零。
在寫網頁的時候先引入reset.css然後再引入自己的css去覆蓋reset.css。
不是說程式越少越好嗎？為什麼要做這種“覆蓋”的動作？
![???](http://upload-images.jianshu.io/upload_images/4119783-8d05340bdc6b1b72.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
嗯...喔..這網站還擺了normalize.css

這個margin:0; padding:0; 比如div這個標籤沒默認。估了一下，有人在stackoverflow整理了[各家瀏覽器的default styles](https://stackoverflow.com/questions/6867254/browsers-default-css-for-html-elements)。

還未仔細鑽研，不過這reset.css 讓我想起引入資源的各種像是排序、彼此覆蓋、一大堆有用跟無用的 !important 、一大堆後來加入的class所造成的維護困難， 尤其像是維護前人或以前的自己所做的東西，或以原有架構跟資源再去新增的狀況。

不知道大家都用什麼好方法在處理這樣的狀況，打開f12看到一堆槓槓真的是...


