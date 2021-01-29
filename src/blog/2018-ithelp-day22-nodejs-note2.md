---
path: '/blog/2018-ithelp-day22'
date: '2017-12-25'
title: 'Day 22 : Node.js 跟著做（二）'
author: 'Kat Chou'
description: ''
tags: ['2018 it邦幫忙鐵人賽']
---

## global
node.js 有個像是瀏覽器 window 的全域物件 global
window 宣告變數例如：
```
var a = 1;
```
global 則是：
```
global.a = 1;
```
node.js 裡面每個 js 是模組的概念。

## require
1. module.exports
app.js
```
var content = require('./data');//require載入模組
var a = 1;

console.log(a);
console.log(content);
```
data.js
```
var data = '2';
module.exports = data; //原本是預設空物件
module.exports ={
    content: data,
    title : 'title1'
}
```

2. exports加入屬性和方法 value的值
app.js
```
var content = require('./data');//require載入模組
var a = 1;

console.log(a);
console.log(content.data);
console.log(content.bark());
```
data.js
```
exports.data = '2';
//沒有寫module.exports時預設是空物件

exports.bark = function(){
    return 'bark!!';
}
```
module.exports 和 exports 不能共用

## 用 http 模組開啟 web 伺服器
```
var http = require('http'); //http是 node.js 內建模組
http.createServer(function(request,response){
    //request對方瀏覽器要求進入這個webserver，response回傳資料
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write('<h1>hello!</h1>');
    response.end();
}).listen(8080);  //
```
## Path
載入
```
var path = require('path');
```
```
path.dirname('/xx/yy/zz.js') //抓目錄路徑  回傳 /xx/yy 
path.join(__dirname,'/xx')  //路徑合併  回傳 前後路徑合併 
path.basename('/xx/yy/zz.js') //抓檔名  回傳 zz.js 
path.extname('/xx/yy/zz.js')  //抓副檔名  回傳 js 
path.parse('/xx/yy/zz.js') //分析路徑  回傳 上述綜合物件 
```
