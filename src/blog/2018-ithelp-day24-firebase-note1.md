---
path: '/2018-ithelp-day24'
date: '2017-12-27'
title: 'Day 24 : firebase (一)'
author: 'Kat Chou'
description: ''
tags: ['2018 it邦幫忙鐵人賽']
---

## firebase 資料庫
之前已經上網爬文看過怎麼將 Firebase 加入網路應用程式。

學習到新的知識點筆記：
firebase.database() 
ref() : 尋找資料庫路徑
set() : 新增資料
firebase 全部是物件格式，不能放陣列內容。

如果要修改資料的話：
firebase.database().ref('像是資料夾般的找到要修改的資料點').set(新的資料)

網頁讀取資料：
1.  把路徑抓出來
2.  once : 讀取一次資料庫的資料。
(on :  隨時監聽、資料即時更新)
3.  snapshot : 快照，把當下想要的資料的值照起來放在snapshot上面。
