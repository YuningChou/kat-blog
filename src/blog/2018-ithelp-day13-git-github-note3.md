---
path: '/2018-ithelp-day13'
date: '2017-12-16'
title: 'Day 13 : Git & Github 學習筆記（三）'
author: 'Kat Chou'
description: ''
tags: ['2018 it邦幫忙鐵人賽']
---

## git merge 解決衝突
如果在 master 跟 branch 同時被更新同行資料的情況下，merge會跳出提醒說需要處理衝突的部分，無法自動合併成功。
這時候去查看有衝突的資料，確認資料的保留或刪減後儲存，再重新增加到工作目錄中(``` git add .```)，接著再 commit 就會合併成功了。
## git tag 標籤
在多個commit中可以紀錄自己現在commit 的是什麼版本， git tag 用標籤來瀏覽想看的版本
```git tag 標籤名``` 增加標籤
```git tag``` 可查詢標籤
```git tag -n``` 可查詢詳細標籤
```git checkout 標籤名稱```切換到標籤的commit 
如果想寫標註內容可以寫```git tag -am '標註內容'```
刪除標籤 ```git tag -d```

## git stash 暫時儲存當前目錄
在工作做到一半的時候儲存工作目錄
```git stash list``` 瀏覽 git stash列表
可以看到 commit 紀錄
```git stash pop``` 還原暫存
也可以把暫存紀錄帶到其他的branch
```git stash drop``` 清除最新暫存
```git stash clear``` 清除全部暫存
----------
## 分支推送到遠端repository
```git push origin 分支名稱``` push分支
origin 是預設的遠端主機名稱也可以改名字 
```git remote rename 原來的名稱 要修改的名稱```


