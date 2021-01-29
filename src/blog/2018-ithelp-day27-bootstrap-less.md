---
path: '/blog/2018-ithelp-day27'
date: '2017-12-30'
title: 'Day 27 : Bootstrap Less 使用方法'
author: 'Kat Chou'
description: ''
tags: ['2018 it邦幫忙鐵人賽']
---

在使用Bootstrap為樣式框架的專案上，如果要改樣式:

1.自己新建一個css (什麼custom.css..之類的)，按照css引入順序去覆蓋原本bootstrap.css。

2.自訂less,公司這次的專案當中研究的方法，紀錄一下:

1.下載bootstrap source code 版本
幾個檔案的小說明:

bootstrap.less : 用來引用其他檔案，最後就是要編譯這個。

variables.less 和 mixins.less : 其他檔案都依賴這兩個。

utilities.less : 最後引用，可以把想要覆蓋的項目寫到這個檔案。

2.安裝好less
打開terminal (我自己習慣用git bash)，而且我先前裝了node.js，所以也有npm

輸入指令 : npm install -g less 安裝less

3. 建立幾個自訂檔案
custom-variables.less : 這就是要設定自訂樣式的檔案

custom-other.less: 包含無法通過修改變量的樣式

custom-bootstrap.less : 新生成的核心檔案，要把這個編譯成css,以下是要寫在這檔案內的內容。(注意順序)

@import "../bootstrap/less/bootstrap.less";

@import "custom-variables.less";

@import "custom-other.less";

@import "../bootstrap/less/utilities.less";
4. 編譯custom-bootstrap.less
指令 : lessc custom-bootstrap.less > custom-bootstrap.css

生成custom-bootstrap.css，就可以拿來用在網頁當中，取代原來的bootstrap.css。

之前想錯的地方: 以為專案一開始就得使用source code版的bootstrap框架，半路才要使用應該要用什麼的方法，思來想去，就是想多了, 另外還跑去看了grunt ，很多教學文都會提到的，熟練 grunt 框架應該也能方便很多吧，不過在此時先使用上面的方法。
