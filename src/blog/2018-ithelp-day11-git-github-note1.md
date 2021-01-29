---
path: '/blog/2018-ithelp-day11'
date: '2017-12-14'
title: 'Day 11 : Git & Github 學習筆記（一）'
author: 'Kat Chou'
description: ''
tags: ['2018 it邦幫忙鐵人賽']
---

環境建置

設定自己的email和名字
```
git config --global user.email 'email'
git config --global user.name "名字"
```
輸入 
```
git config --list
```
有看到下列兩行就ok了
user.email=輸入的email
user.name=輸入的名字

## git init
cd到專案資料夾輸入 git init ，開一個新的repository，也會監控檔案是否變更、增減。

## git add . 
把做好的檔案加入索引。
add . 是加入全部的檔案，
要單獨檔案加入的話 git add  檔名

## git status 
檢查狀態，如果有加入索引成功會是綠色的，還沒加入索引的會是紅色。
在已加入索引的檔案修改，git status 會有提示說有這個檔案，有修改過的檔案在工作目錄。

##  git commit -m '在這裡描述自己做了什麼'
紀錄自己寫code的歷史，看一下當時的自己或別人做了些什麼。
commit 之後在輸入git status的話就會通知工作目錄是乾淨的沒有更新紀錄。

## git log 
查詢紀錄，確認commit
---------------
## .gitignore
不想讓一些檔案進入到版控的話可以用這個來忽略這些檔案。
新增 .gitignore 把要忽略的檔案寫到這個 .gitignore檔案內，.gitignore不能忽略掉自己。
- *.html  忽略所有html為副檔名的檔案
- 資料夾名／ 忽略資料夾 （比如css/ 就忽略css資料夾) 

對我來說 gitignore是新知，![](https://upload-images.jianshu.io/upload_images/4119783-b629137e67c33712.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
之前雖然用了github ，不過就是按照github提供的流程來做init add commit 這類的事，可以開始忽略像是node_modules 、sass之類的資料夾了。

以上是看著[六角學院-掌握 Git & Github 程式時光機](https://www.udemy.com/learninggit/learn/v4/content) 這個課程學的（才剛開始）。
