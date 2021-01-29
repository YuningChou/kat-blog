---
path: '/blog/2018-ithelp-day19'
date: '2017-12-22'
title: 'Day 19 : before() - JavaScript & jQuery'
author: 'Kat Chou'
description: ''
tags: ['2018 it邦幫忙鐵人賽']
---

```
<div><img id="js-pic" src="https://picsum.photos/300/200?image=0"></div>
<div><img id="jq-pic" src="https://picsum.photos/300/200?image=2"></div>
```

![](https://upload-images.jianshu.io/upload_images/4119783-c343a3045cef67d0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 用before()加入文字
```
document.getElementById('js-pic').before('<strong>JavaScript筆電：</strong>','樓下是jQuery筆電');
$('#jq-pic').before('<strong>jQuery筆電：</strong>','在jQuery這裡strong標籤是html標籤喔不是文字');
```
上面的用 JavaScript ,下面的用jQuery，都可以放多項內容
差別在於用 JavaScript html 會變成文本
after()也是差不多東西

![](https://upload-images.jianshu.io/upload_images/4119783-91651849fc737742.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
