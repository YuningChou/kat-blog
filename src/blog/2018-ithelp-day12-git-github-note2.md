---
path: '/2018-ithelp-day12'
date: '2017-12-15'
title: 'Day 12 : Git & Github 學習筆記（二）'
author: 'Kat Chou'
description: ''
category: ['2018 it邦幫忙鐵人賽']
---

## 取消索引
把提交的檔案拿回來自己的工作目錄中
*  全部取消索引 :``` git reset HEAD```
*  單一檔案取消索引 ：``` git reset HEAD 檔案名稱```

## 還原檔案
* ``` git checkout 檔案名稱```
將單一檔案還原到最新一版commit的狀態

* ```git reset --hard```
把索引資料或任何編輯資料清空，讓工作區回到最後一次commit的狀況

## Github 遠端repository
*  從遠端拉回本地  git clone 
![git clone](http://upload-images.jianshu.io/upload_images/4119783-c85dd393d053ff74.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
*  git push 把本地的更新的資料推回遠端repository

## branch 分支
HEAD知道自己在哪個commit紀錄
新增第一個commit之後才會有master , master是最新的版本
*  ```git branch``` 瀏覽目前分支
*   ```git checkout  (commit編號前4碼 )```
這時候去看檔案就會看到當時版本的狀態
* ```  git checkout master ```回到master
（用```git checkout 分支名```來切換自己要到哪個分支）
*   創建分支 ```git branch 分支名稱```

## master 跟 branch 合併
*  在 branch 做好檔案確認沒問題之後
*  先 checkout 到 master 用 master 去合併分支
*  在 master 輸入```git merge 要合併的分支名```



以上是看著[六角學院-掌握 Git & Github 程式時光機](https://www.udemy.com/learninggit/learn/v4/content) 這個課程學的。
