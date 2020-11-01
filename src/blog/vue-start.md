---
path: '/vue-create'
date: '2018-05-16'
title: '我使用 Vue 的起手式(vue-cli + sass + bootstrap + fontawesome)'
author: 'Kat Chou'
description: ''
tags: ['vue', 'sass', 'bootstrap']
---

初學者筆記 
***
### Step 1  安裝 vue-cli
` npm install -g vue-cli`

### Step 2  建立一個vue-cli的專案
`vue init webpack [project-name]`

### Step 3 安裝Sass / Sass-loader / node-sass
`npm install sass sass-loader node-sass --save`

### Step 4 安裝BootStrap / jQuery / Popper
```
npm install bootstrap
npm install --save jquery
npm install --save popper.js
```

### Step 5 到 build/webpack.base.conf.js 去設定
```
// 最上方加入一個webpack
const webpack = require('webpack')
module.exports = {
  ...
  // 新增plugins
  plugins: [
    new webpack.ProvidePlugin({
        '$': "jquery",
        'jQuery': "jquery",
        'Popper': 'popper.js'
    })
  ],
	...
}
```

### Step 6 在 src/main.js  載入 BootStrap
```
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
```
* * *
### * 加上 font awesome
```
 npm i --save @fortawesome/fontawesome
 npm i --save @fortawesome/fontawesome-free-solid
 npm i --save @fortawesome/vue-fontawesome
 npm i --save @fortawesome/fontawesome-svg-core
```

### 在 src/main.js  載入 font awesome
```
import fontawesome from '@fortawesome/fontawesome';
import fontAwesomeIcon from '@fortawesome/vue-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(solid) 
Vue.component('font-awesome-icon', fontAwesomeIcon) 
```
### 在 html 裡使用
`<font-awesome-icon :icon="['fas', 'font-awesome']" />`

*** 
以下是另外一件事
*** 
ps. 東西做完後 `npm run build` 打包後東西會放在 dis t資料夾
本地打開出現問題--空白,原因是資源的引入路徑
### 解決辦法 :
打開 到config\index.js 
把 assetsPublicPath 的 " / "，改成 " ./  " 變成相對路徑就好了
