---
path: '/2018-ithelp-day9'
date: '2017-12-12'
title: 'Day9 : 做個DatePicker (三) - 事件'
author: 'Kat Chou'
description: ''
tags: ['2018 it邦幫忙鐵人賽']
---

## 點擊input 展開收起日曆的事件
css的部分將日曆設定為絕對定位、預設不顯示並增加一個class並設定顯示 （由js控制）。
將日曆設定為絕對定位、假設這是一個之後會被幾個頁面運用的套件，頁面結構有可能會變動，因此在點開日曆前計算位置。
```
.ync-datepicker-wrapper{
    width:240px;
    font-size:16px;
    box-shadow: 0px 1px 2px 2px rgba(0,0,0,.3);
    display:none;
    position: absolute; /* 跟著 input */
}
.ync-datepicker-wrapper-show{
    display:block;
}
```
js
```
var $input = document.querySelector(input);
        var isOpen = false;
        $input.addEventListener('click',function(){
            if(isOpen){
                $wrapper.classList.remove('ync-datepicker-wrapper-show');
                isOpen = false;
            }else{
                $wrapper.classList.add('ync-datepicker-wrapper-show');
                // 計算input與日曆的位置
                var left = $input.offsetLeft;
                var top = $input.offsetTop;
                var height =  $input.offsetHeight;
                $wrapper.style.top =  top + height + 2 + 'px';
                $wrapper.style.left = left + 'px';
                isOpen = true;
            }
        }, false);
```
## 月份切換
這邊不直接給左右箭頭建立綁定事件是因為init只調用一次，左右箭頭被不斷銷毀和重建，綁定事件會無法生效。
```
$wrapper.addEventListener('click',function(e){
            var $target = e.target; //直接點擊元素
            if(!$target.classList.contains('ync-datepicker-btn'))
                return;
            if($target.classList.contains('ync-datepicker-prev-btn')){
                datepicker.render('prev');
            }else if($target.classList.contains('ync-datepicker-next-btn'))
                datepicker.render('next');
        },false);
```
## 選擇日期顯示到input
這邊在html結構加入了 data-date
```
 html += '<td data-date=" ' + date.date +' ">' + date.showDate + '</td>';
```
js  target拿到選擇的日期
```
$wrapper.addEventListener('click',function(e){
            var $target = e.target;
            if($target.tagName.toLowerCase() !== 'td') return;
            var date = new Date(monthData.year,monthData.month - 1,$target.dataset.date); //dataset可以取到data開頭的屬性
            $input.value = format(date);
            $wrapper.classList.remove('ync-datepicker-wrapper-show');
            isOpen = false;
        },false);
    };
    //日期格式化
    function format(date){
        ret = '';
        var padding = function(num){
            if(num <= 0){
            return '0' + num;
            }
            return num;
        }
        ret += date.getFullYear() + '/';
        ret += padding(date.getMonth() + 1) + '/';
        ret += padding(date.getDate());
        return ret;
    }
```

先這樣 

一樣放在 [這裡](https://github.com/YuningChou/ync-datepicker)
