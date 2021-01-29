---
path: '/blog/2018-ithelp-day2'
date: '2017-12-05'
title: 'Day2: RWD斷點'
author: 'Kat Chou'
description: ''
tags: ['2018 it邦幫忙鐵人賽']
---

因為前陣子客戶找了外包的設計公司做網頁設計稿，該設計公司主要是做平面設計的，問起了"這網頁可以用手機看嗎? 現在很多人都用手機瀏覽網頁"，"設計的話像素要怎麼訂呢?" 

用了公司常用框架bootstrap斷點來回答, 資料如下:
![bs3的breakpoint](https://upload-images.jianshu.io/upload_images/4119783-c9afa47e94a893ff.JPG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![bs4的breakpoint](https://upload-images.jianshu.io/upload_images/4119783-7879d98040e705b6.JPG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

當時反正大概請他給桌機、平板、手機想要設計成什麼樣的設計稿，心想不就是瀏覽器寬度在哪個範圍就會吃什麼css這類的回答嗎...哪有辦法給個什麼精確的平面設計用的像素...另外，通常設斷點不外乎就是找最常見的解析度來處理，像是iPad、iPhone。

接著，想看看其他人怎麼說，就在google下了這搜尋字眼
![google斷點](https://upload-images.jianshu.io/upload_images/4119783-d693db955a659ec7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
就取第一個來看看 [Defining Breakpoints | Responsive Web Design](https://responsivedesign.is/strategy/page-layout/defining-breakpoints/) ,其中一點，他大概是說響應式網站該由手機版出發，從最小寬度開始設計，不斷擴大直到你開始覺得醜了就是一個斷點了，用這個方法好處是，一開始就能在小寬度思考什麼是網頁中最重要的內容。
不過實務上，比較常先從pc開始做，且大多數客戶通常是喜歡網頁豐富、內容繁多，甚至有可能之後還想加東西，要討論出什麼是最重要的內容......嗯...都很重要，但這就是另一個問題了。

簡單做個整理：
* 現在裝置越來越多了，不管設多少斷點都不太可能會絕對完美。
* 先由主流的裝置開始設斷點。
* 可以的話，由手機開始設定斷點。




