---
path: '/2018-ithelp-day4'
date: '2017-12-07'
title: 'Day4 : 人人都說Sass好，所以我來參一腳'
author: 'Kat Chou'
description: ''
category: ['2018 it邦幫忙鐵人賽']
---

都說Sass消除樣式表冗余、還有變數跟繼承的概念等等的，說有多好用就有多好用...

馬上來安裝步驟123....456
首先裝ruby然後裝sass
1. 安裝[ruby](https://rubyinstaller.org/downloads/)
2. cli 安裝 gulp-sass 輸入:
>npm install gulp-sass --save-dev

外表看似簡單..突然發現似乎裝個gulp會更好
網路上七大姑八大爺，各有各的習慣，看來看去反正我的安裝步驟變成這樣
#1.gulp  
1. 安裝[node.js](https://nodejs.org/en/)
2. cli 輸入:
  >npm install -g gulp
3. cd 到專案目錄後輸入:
  >npm init
4. 然後再輸入:
  >npm install gulp -save-dev
5. 裝 gulp-webserver 輸入:（文章爬一爬就發現的東西，就順手裝了）
  >npm install gulp-webserver -save-dev
6. 在專案目錄底下增加一個gulpfile.js, 內容為: 
  >var gulp = require('gulp');
  var webserver = require('gulp-webserver');
  gulp.task('webserver', function() {
  gulp.src('./app/')
        .pipe(webserver({
          port:1234,
          livereload: true,
          directoryListing: false,
          open: true,
          fallback: 'index.html'
    }));
});
gulp.task('default',['webserver']);
7. 在cli 輸入 gulp 就會執行了,也會開啟瀏覽器
----------------------
#2.Sass
1. 安裝[ruby](https://rubyinstaller.org/downloads/)
2. cli 安裝 gulp-sass 輸入:
>npm install gulp-sass --save-dev
3. 在 gulpfile.js   (設定sass,css的目錄) 
>var gulp = require('gulp'),             // 載入 gulp
    gulpSass = require('gulp-sass');    // 載入 gulp-sass
    gulp.task('styles', function () {
     gulp.src('sass/style.sass')    // 指定要處理的 Sass 檔案目錄
        .pipe(gulpSass())         // 編譯 Sass
        .pipe(gulp.dest('css'));  // 指定編譯後的 css 檔案目錄
});
4. 在cli 執行 gulp styles (styles指的是task的名字 )

工欲善其事，必先利其器。 第一次安裝花了我6個小時（很容易卡在開發環境建置的人），總之慶幸自己沒放棄。

嘗試運用在一個網頁上，[點這個](https://github.com/YuningChou/travel-website/tree/master)
從需要寫這些
![](http://upload-images.jianshu.io/upload_images/4119783-02b223ea2131a575.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
變成只要寫這些
![](http://upload-images.jianshu.io/upload_images/4119783-df0876cbe8d07e76.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
先到這個階段
