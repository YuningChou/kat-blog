---
path: '/2018-ithelp-day7'
date: '2017-12-10'
title: 'Day7 : 做個DatePicker (一) - 靜態結構+樣式'
author: 'Kat Chou'
description: ''
tags: ['2018 it邦幫忙鐵人賽']
---

日曆是網頁上常用的工具，也來自己做做看
![](https://upload-images.jianshu.io/upload_images/4119783-055074950ed27657.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

今天先做靜態結構+樣式

## 首先是html結構
**日曆這種東西很容易被使用在各種頁面，class命名上取的略長，以防在網頁中重複命名。
```
<div class="ync-datepicker-wrapper">
        <div class="ync-datepicker-header">
            <a href="#" class="ync-datepicker-btn ync-datepicker-prev-btn">&lt;</a>
            <a href="#" class="ync-datepicker-btn ync-datepicker-next-btn">&gt;</a>
            <span class="ync-datepicker-curr-month">2017-12</span>
        </div>
        <div class="ync-datepicker-body">
            <table>
                <thead>
                    <tr>
                        <th>一</th>
                        <th>二</th>
                        <th>三</th>
                        <th>四</th>
                        <th>五</th>
                        <th>六</th>
                        <th>日</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                    </tr>
                    <tr>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>38</td>
                        <td>29</td>
                        <td>30</td>
                        <td>31</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
```
## 再來是css 
```
.ync-datepicker-wrapper{
    width:240px;
    font-size:16px;
    box-shadow: 0px 1px 2px 2px rgba(0,0,0,.3);
}
.ync-datepicker-wrapper .ync-datepicker-header{
    padding : 0 10px;
    height: 50px;
    line-height: 50px;
    text-align : center;
    background: #dc3545;
    color:white;
}
.ync-datepicker-wrapper .ync-datepicker-btn{
    font-family: serif;
    font-size: 26px;
    width:20px;
    height:50px;
    line-height: 50px;
    color: #035c44;
    text-align: center;
    cursor:pointer;
    text-decoration: none;
}
.ync-datepicker-wrapper .ync-datepicker-prev-btn{
    float:left;
}
.ync-datepicker-wrapper .ync-datepicker-next-btn{
    float:right;
}
.ync-datepicker-wrapper .ync-datepicker-body table{
    width:100%;
    border-collapse:collapse;
}
.ync-datepicker-wrapper .ync-datepicker-body table th,
.ync-datepicker-wrapper .ync-datepicker-body table td{
    height:30px;
    text-align: center;
}
.ync-datepicker-wrapper .ync-datepicker-body table th{
    font-size: 12px;
    height:40px;
    line-height: 40px;
}
.ync-datepicker-wrapper .ync-datepicker-body table td{
    font-size:10px;
    cursor: pointer;
}
```

有先丟到github : [連結](https://github.com/YuningChou/ync-datepicker)
這配色是因為聖誕節快到了～
