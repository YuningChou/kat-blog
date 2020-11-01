---
path: '/2018-ithelp-day6'
date: '2017-12-09'
title: 'Day6 : 幾個Sass寫法'
author: 'Kat Chou'
description: ''
tags: ['2018 it邦幫忙鐵人賽']
---

研究幾個看過卻還未明白的sass寫法

### 縮寫形式的嵌套
```  
nav {
   border-width : 1px;
   border-style : solid;
   border-color : #ccc;
}
```  
會寫成
```  
nav {
    border : 1px solid #ccc;
}
``` 
如果還想再設定border屬性，比如另外設定左右border的寬度為0
``` 
nav {
    border : 1px solid #ccc;
    border-left : 0px;
    border-right: 0px;
}
``` 
現在可以寫
``` 
nav {
    border : 1px solid #ccc {
        left : 0px;
        right: 0px;
      }
}
``` 

### 嵌套導入
sass可以讓@import寫在css規則內
比如有個文件 叫做 _black-theme.scss (前面的下底線是局部文件命名規定)，內容如下
``` 
aside {
    background : black;
    color : white;
}
``` 
然後把它放到css內
``` 
.black-theme { @import "black-theme" }
``` 
結果會是
``` 
.black-theme {
    aside {
        background : black;
        color : white;
    }
}
``` 
### 混合器 @mixin
如果網站中有些地方的樣式類似，可以用變數來處理，但如果大段的重複樣式，變數就沒辦法處理了。sass的混合器可以解決大段樣式的重複使用。
``` 
@mixin  sample{
    font-size : 14px;
    color : red;
}
``` 
@include來使用sample 
``` 
.withsample {
    background:#eee;
    @include sample;
}
``` 
結果會是
``` 
.withsample {
    background:#eee;
    font-size:14px;
    color:red
}
