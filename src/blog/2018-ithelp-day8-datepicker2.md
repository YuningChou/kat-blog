---
path: '/2018-ithelp-day8'
date: '2017-12-11'
title: 'Day8 : 做個DatePicker (二) - 數據'
author: 'Kat Chou'
description: ''
category: ['2018 it邦幫忙鐵人賽']
---

加入日曆數據的 js

data.js (寫了一大堆註解)
```
(function(){
    var datepicker = {};

    datepicker.getMonthData = function(year,month){
        var ret = []; //用來返回結果
        if(!year || !month){ 
            var today = new Date(); 
            year = today.getFullYear();
            month = today.getMonth() + 1; //如果用getMonth()會得到真實月份減1的月份，因此要+1才會得到真實月份
            //如果沒有傳year或month就用當前日期
        }
        var firstDay = new Date(year,month - 1,1); //這個月的第一天, month需要-1
        var firstDayWeekDay = firstDay.getDay(); //在當月月曆前需要補上個月的日期，獲取第一天是星期幾
        if(firstDayWeekDay === 0) firstDayWeekDay = 7; //如果是週日就是7

        year = firstDay.getFullYear();
        month = firstDay.getMonth()+1;

        var lastDayOfLastMonth = new Date(year,month - 1, 0);//上個月的最後一天，也就是這個月的第0天
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate();

        var preMonthDayCount = firstDayWeekDay - 1; //需要顯示多少上個月的日期

        var lastDay = new Date(year,month,0); //當月最後一天，需要知道什麼時候算是下個月，下個月的第0天等於本月最後一天
        var lastDate = lastDay.getDate();

        for(var i = 0; i < 7 * 6; i++){
            //得到當月每一天的數據
            var date = i + 1 - preMonthDayCount;//減去上個月的
            var showDate = date;//用來算應該顯示的是哪一天
            var thisMonth = month;
            if(date <= 0){ 
                //上個月 
                thisMonth = month - 1 ; //小於等於0，所以是上個月的，這個月-1
                showDate = lastDateOfLastMonth + date; //上個月的最後一天減去date,他本身就是負的所以該加date
            }else if(date > lastDate){
                //下個月
                thisMonth = month + 1; //date大於本月最後一天就是下個月，這個月+1
                showDate = showDate - lastDate; //減去當月最後一天得到下個月的日期
            }
            if(thisMonth === 0) thisMonth = 12; //去年12月
            if(thisMonth === 12) thisMonth = 1; //明年1月

            ret.push({
                month:thisMonth,
                date:date,
                showDate : showDate
            });
        }

        return {
            year: year,
            month: month,
            days: ret
        };
    };

    window.datepicker = datepicker;
})();
```

套到頁面的 main.js 
```
(function(){
    var datepicker = window.datepicker;
    datepicker.buildUi = function(year,month){
        var monthData = datepicker.getMonthData(year,month);

        //日曆html結構
        var html = '<div class="ync-datepicker-header">' +
        '<a href="#" class="ync-datepicker-btn ync-datepicker-prev-btn">&lt;</a>' +
        '<a href="#" class="ync-datepicker-btn ync-datepicker-next-btn">&gt;</a>' +
        ' <span class="ync-datepicker-curr-month">' + monthData.year + '-' + monthData.month + '</span>' +
    '</div>' +
    '<div class="ync-datepicker-body">' +
        '<table>' +
            '<thead>' +
                '<tr>' +
                    '<th>一</th>' +
                    '<th>二</th>' +
                    '<th>三</th>' +
                    '<th>四</th>' +
                    '<th>五</th>' +
                    '<th>六</th>' +
                    '<th>日</th>' + 
                '</tr>' +
            '</thead>' +
            '<tbody>';

            for(var i = 0; i<monthData.days.length; i++){
                var date = monthData.days[i];
                if(i%7 === 0){
                    //i被7整除是一週的第一天
                    html += '<tr>';
                }
                html += '<td>' + date.showDate + '</td>';
                if(i%7 === 6){
                    //i被7除的時候餘6則是一週的最後一天
                    html += '</tr>';
                }    
            }
                
            html +=  '</tbody>' +
        '</table>' +
    '</div>';
    
    return html;

    };
    //內容放到頁面顯示
    datepicker.init = function($input){
        var html = datepicker.buildUi();
        var $wrapper = document.createElement('div');
        $wrapper.className = 'ync-datepicker-wrapper';
        $wrapper.innerHTML = html;
        document.body.appendChild($wrapper);
    };
})();
```
*本日心得 ：month+1 -1 要弄清楚，date 、 data一直狂拼錯覺得累

一樣放在 [這裡](https://github.com/YuningChou/ync-datepicker)
