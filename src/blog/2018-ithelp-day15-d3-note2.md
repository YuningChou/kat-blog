---
path: '/2018-ithelp-day15'
date: '2017-12-18'
title: 'Day 15 : d3 學習筆記 - 用資料繪圖'
author: 'Kat Chou'
description: ''
category: ['2018 it邦幫忙鐵人賽']
---

在 d3 如果要把一個類別加到某個元素，會用 selection.attr() 函式。
attr() 是用來設定 DOM 的特性值，style() 是直接在某個元素上套用css樣式。

## div
在檔案中加入這個css設定
```
div.bar{
			display:inline-block;
			width:20px;
			height:75px;
			background: #0a969b;
			margin-right:2px
		}
```
d3的部分則是
```
var dataset = [ 5, 10, 15, 20, 25 ];		d3.select("body").selectAll("div").data(dataset).enter()
		.append("div").attr("class","bar")
		.style("height",function(d){
			return d + "px";
		});
```
![長這樣](http://upload-images.jianshu.io/upload_images/4119783-53ca9f7247f8bebb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

美化一下
```
var dataset = [ 5, 10, 15, 20, 25 ];		d3.select("body").selectAll("div").data(dataset).enter()
	.append("div").attr("class","bar")
	.style("height",function(d){
		var barHeight = d * 5; //高度5倍
		return barHeight + "px";
	});
```
![長高](http://upload-images.jianshu.io/upload_images/4119783-95d895d82ac4aece.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

隨機資料
```
var dataset = [];
for (var i = 0;i < 25; i++){
	var newNumber = Math.round(Math.random() * 30); //隨機30個整數
	dataset.push(newNumber);
}
d3.select("body").selectAll("div").data(dataset).enter()
	append("div").attr("class","bar")
	.style("height",function(d){
		var barHeight = d * 5;
		return barHeight + "px";
	});
```
## svg
```
var w = 500;
var h = 100;
var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
var circles = svg.selectAll("circle").data(dataset).enter().append("circle");
circles.attr("cx" , function(d, i){
	return(i * 50) + 25;
	}).attr("cy" , h/2).attr("r" ,function(d){
	return d;
});
```
![svg](http://upload-images.jianshu.io/upload_images/4119783-019464cc6c2bd76a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

cx 是圓形中心點的 x 軸，d的值仍然是dataset 內的，i 是被自動產生，這裡 i 可以隨意命名。
cy 是圓形中心點的 y 軸，把 cy 設定為 h 的一半，因為 h 是整個 svg 的高度，將 y 軸設定 h 除以 2 ，可以讓所有圓形都對齊垂直中心點。

加點顏色
```
.attr("fill","white")
.attr("stroke","orange")
.attr("stroke-width",function(d){
	return d/2;
});
```
![svg顏色](http://upload-images.jianshu.io/upload_images/4119783-40dbd35ee6d7a87c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![div 與 svg 的呈現都是 dataset 內同樣的資料](http://upload-images.jianshu.io/upload_images/4119783-0a843c36bcc6cdee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


