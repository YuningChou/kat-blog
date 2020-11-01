---
path: '/2018-ithelp-day29'
date: '2018-01-01'
title: 'Day 29 : 列印'
author: 'Kat Chou'
description: ''
tags: ['2018 it邦幫忙鐵人賽']
---

之前有提到 bootstrap 列印問題，現在筆記一下其他列印相關css。

```
@media print{

    /*隱藏不列印的東西*/
    .no-print{
        display:none;
    }
}
```
關於內容被截斷、留白與尺寸的問題調整...

## 尺寸、邊距
```
@page{
     size: 5.5in 8.5in;       
     margin: 30px;
}
```

##   第一頁、奇數頁或偶數頁樣式
```
@page :first { 

    /*首頁設置*/

}
```
left、right分别為偶數頁、奇數頁

##   斷開調整
```
@page{
    table{
        page-break-after: avoid;
    }  
}
```
ps. page-break-after 對 tr、td不起作用

##  避免某行文字斷開
```
@page{
    table{
        page-break-inside: avoid;
    }  
}
```
