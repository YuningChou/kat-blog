---
path: '/ant-design-form-multipart-form-data'
date: '2019-03-20'
title: 'ant-design form multipart/form-data'
author: 'Kat Chou'
description: 'antd 上傳圖片'
tags: ['Ant-Design', 'F2E']
---

目前公司前端使用 React 、Ant - Design 
最近有個需求 ：表單除了input 、 select 外還有上傳圖片的欄位，上傳圖片的部分使用了 antd 的 [Upload](https://ant.design/components/upload-cn/) ，踩了一些坑，在這裡紀錄一下實作方法。
------
### 為了馬上看到上傳的圖片而使用 [照片牆](https://ant.design/components/upload-cn/#components-upload-demo-picture-card) 。

問題點  ：預設是點擊選擇圖片後就馬上上傳，而不是選擇圖片後跟著表單所有內容被submit 才上傳

解決辦法：beforeUpload
```
handleBeforeUploadFile = (file) => {
  // 使用 beforeUpload 會失去在選擇圖片後馬上看到圖片的功能，因此利用FileReader方法來實現預覽效果
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function () {
    this.setState({fileList: [{uid: file.uid, url: reader.result}],image:reader.result})
  }.bind(this);
    // 使用 beforeUpload 回傳 false 可以停止上傳
    return false
}
```
------
###需要使用multipart/form-data
為了可以送出 file (圖片）使用 multipart/form-data，因為使用 antd 不在 Form 標籤加 enctype="multipart/form-data", 之前也曾設定 Content-Type ，但是行不通。
解決辦法還是 new formData()，在調用 api 時傳入 formData 。
##### * 注意*  不可以 JSON.stringify(formData) , 要直接傳formData  
```
let formData = new FormData();   
// fields 是表單內容，將它 append 到 formData         
Object.keys(fields).map((item) => {
  formData.append(item,fields[item])
}) 
```
------
還有其他在 form 卡住的關卡，筆記後補...
