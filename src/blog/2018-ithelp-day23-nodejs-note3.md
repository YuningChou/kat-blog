---
path: '/2018-ithelp-day23'
date: '2017-12-26'
title: 'Day 23 : Node.js 跟著做（三）'
author: 'Kat Chou'
description: ''
tags: ['2018 it邦幫忙鐵人賽']
---

## npm
[npm](https://www.npmjs.com/)

*  npm init  新增 package.json
*  node_modules 通常不會進入到版本控制，因此下載別人開發的模組時若沒有 node_modules ，就用npm install , 可以把模組都裝回來。

--save : node 應用程式上線會用到的npm 
--save-dev : 除錯、不是主要模組，開發測試用
-g : 全域 (會安裝在底層的資料夾)，
通常用--save 才可以在 package.json 有引用模組相關資料，用-g 的話可能導致開發好之後，別人去使用會有沒有引用模組資料的問題。
