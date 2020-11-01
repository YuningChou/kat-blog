---
path: '/hexo-change-computer'
date: '2018-02-13'
title: 'hexo-換電腦'
author: 'Kat Chou'
description: '使用 hexo 建置 blog 部署到 github 時，更換電腦的操作。'
tags: ['hexo', 'blog']
---

如果你想換台電腦寫部落格
我是參照以下步驟做的，個人覺得應該可以work。

請在 gitbub 另外開一個 repository, 並在舊電腦上 commit 所有得文章與環境設置. (如果theme底下有 .git目錄，請用rm -rm .git, 確保theme會被加到新的git)
push 文章與環境到新的 repository
在新電腦中，請一樣安裝 git 與 所提到的環境
在新電腦中安裝 nodeJS
請不要執行 hexo init
git clone 網誌的 repository (Ex: account.github.io)
這樣應該就可以動了
