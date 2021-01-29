---
path: '/blog/2018-ithelp-day14'
date: '2017-12-17'
title: 'Day 14 : d3 學習筆記 - 資料'
author: 'Kat Chou'
description: ''
tags: ['2018 it邦幫忙鐵人賽']
---

[d3](https://d3js.org/) 
d3 可以處理不同種類的資料，支援使用任何包含數字、字串或物件在內的陣列。也可以有效率的處理JSON，甚至有內建函式，可以載入CSV資料。

## 建立自己的選擇器
 ```
var dataset = [ 5, 10, 15, 20, 25 ];
d3.select("body").selectAll("p").data(dataset).enter().append("p").text(function(d){return d;});
```
如果要建立新的、和資料綁定在一起的元素，要用enter()函式，這個函式會檢視目前的DOM選擇器，以及傳遞到這個函式的資料。如果接收到的資料比相對應的DOM多，enter()函式就會建立一個新的暫存元素。

使用d3的時候會寫很多匿名函式。這些函式使用來存取個別資料值和計算動態屬性的主要工具。

## 加上style
```
var dataset = [ 5, 10, 15, 20, 25 ];
d3.select("body").selectAll("p").data(dataset).enter()
		.append("p").text(function(d){return "來點文字：" + d;})
		.style("color",function(d){
			if (d > 10) {
				return "red";
			}else {
				return "green";
			}
		});
```
