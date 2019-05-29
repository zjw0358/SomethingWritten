// pages/JiaoShiYiZhanResult/JiaoShiYiZhanResult.js

var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },



  sequence: function (a, b) {
    return a - b;
  },

  DrawYiLinZhan: function (canvasW,canvasH,benindex,bianindex){

   // var myViewWidth;
   // var myViewHeigt;


    var yao_h = 18
    var yao_gap = 6
    var yangyao_w = canvasW / 4 //120
    var yinyao_w = yangyao_w / 3 //50
    var yinyao_gap = yangyao_w - yinyao_w * 2 //20
    var yao1_start_x = canvasW/8
    var yao1_start_y = 10

    // BenGua start
    var gua_grp = getApp().globalData.Gua_grp;
   // var j = options.YiLinIndex - 1
    var yao_group = gua_grp[benindex]
   // console.error(yao_group)
    var context = wx.createCanvasContext('GuaTuCanvas1')
    context.setLineWidth(yao_h)
    context.beginPath()

    for (var i = 0; i < 6; i++) {
      if (yao_group[i] == 1) {
        context.moveTo(yao1_start_x, yao1_start_y + (yao_h + yao_gap) * i)
        context.lineTo(yao1_start_x + yangyao_w, yao1_start_y + (yao_h + yao_gap) * i)

      } else {
        context.moveTo(yao1_start_x, yao1_start_y + (yao_h + yao_gap) * i)
        context.lineTo(yao1_start_x + yinyao_w, yao1_start_y + (yao_h + yao_gap) * i)
        context.moveTo(yao1_start_x + yinyao_w + yinyao_gap, yao1_start_y + (yao_h + yao_gap) * i)
        context.lineTo(yao1_start_x + yinyao_w * 2 + yinyao_gap, yao1_start_y + (yao_h + yao_gap) * i)
      }
    }
    context.stroke()
    context.draw()

    // BianGua start

    yao_group = gua_grp[bianindex]

    context = wx.createCanvasContext('GuaTuCanvas2')
    context.setLineWidth(yao_h)
    context.beginPath()

    for (i = 0; i < 6; i++) {
      if (yao_group[i] == 1) {
        context.moveTo(yao1_start_x, yao1_start_y + (yao_h + yao_gap) * i)
        context.lineTo(yao1_start_x + yangyao_w, yao1_start_y + (yao_h + yao_gap) * i)

      } else {
        context.moveTo(yao1_start_x, yao1_start_y + (yao_h + yao_gap) * i)
        context.lineTo(yao1_start_x + yinyao_w, yao1_start_y + (yao_h + yao_gap) * i)
        context.moveTo(yao1_start_x + yinyao_w + yinyao_gap, yao1_start_y + (yao_h + yao_gap) * i)
        context.lineTo(yao1_start_x + yinyao_w * 2 + yinyao_gap, yao1_start_y + (yao_h + yao_gap) * i)
      }
    }
    context.stroke()
    context.draw()

  },

  GetYiLinGrp:function(index){
    var grp;
    switch(index){
      case 1:
        grp = getApp().globalData.Gua1_grp;
        break;
      case 2:
        grp = getApp().globalData.Gua2_grp;
        break;
      case 3:
        grp = getApp().globalData.Gua3_grp;
        break;
      case 4:
        grp = getApp().globalData.Gua4_grp;
        break;
      case 5:
        grp = getApp().globalData.Gua5_grp;
        break;
      case 6:
        grp = getApp().globalData.Gua6_grp;
        break;
      case 7:
        grp = getApp().globalData.Gua7_grp;
        break;
      case 8:
        grp = getApp().globalData.Gua8_grp;
        break;
      case 9:
        grp = getApp().globalData.Gua9_grp;
        break;
      case 10:
        grp = getApp().globalData.Gua10_grp;
        break;
      case 11:
        grp = getApp().globalData.Gua11_grp;
        break;
      case 12:
        grp = getApp().globalData.Gua12_grp;
        break;
      case 13:
        grp = getApp().globalData.Gua13_grp;
        break;
      case 14:
        grp = getApp().globalData.Gua14_grp;
        break;
      case 15:
        grp = getApp().globalData.Gua15_grp;
        break;
      case 16:
        grp = getApp().globalData.Gua16_grp;
        break;
      case 17:
        grp = getApp().globalData.Gua17_grp;
        break;
      case 18:
        grp = getApp().globalData.Gua18_grp;
        break;
      case 19:
        grp = getApp().globalData.Gua19_grp;
        break;
      case 20:
        grp = getApp().globalData.Gua20_grp;
        break;
      case 21:
        grp = getApp().globalData.Gua21_grp;
        break;
      case 22:
        grp = getApp().globalData.Gua22_grp;
        break;
      case 23:
        grp = getApp().globalData.Gua23_grp;
        break;
      case 24:
        grp = getApp().globalData.Gua24_grp;
        break;
      case 25:
        grp = getApp().globalData.Gua25_grp;
        break;
      case 26:
        grp = getApp().globalData.Gua26_grp;
        break;
      case 27:
        grp = getApp().globalData.Gua27_grp;
        break;
      case 28:
        grp = getApp().globalData.Gua28_grp;
        break;
      case 29:
        grp = getApp().globalData.Gua29_grp;
        break;
      case 30:
        grp = getApp().globalData.Gua30_grp;
        break;
      case 31:
        grp = getApp().globalData.Gua31_grp;
        break;
      case 32:
        grp = getApp().globalData.Gua32_grp;
        break;
      case 33:
        grp = getApp().globalData.Gua33_grp;
        break;
      case 34:
        grp = getApp().globalData.Gua34_grp;
        break;
      case 35:
        grp = getApp().globalData.Gua35_grp;
        break;
      case 36:
        grp = getApp().globalData.Gua36_grp;
        break;
      case 37:
        grp = getApp().globalData.Gua37_grp;
        break;
      case 38:
        grp = getApp().globalData.Gua38_grp;
        break;
      case 39:
        grp = getApp().globalData.Gua39_grp;
        break;
      case 40:
        grp = getApp().globalData.Gua40_grp;
        break;
      case 41:
        grp = getApp().globalData.Gua41_grp;
        break;
      case 42:
        grp = getApp().globalData.Gua42_grp;
        break;
      case 43:
        grp = getApp().globalData.Gua43_grp;
        break;
      case 44:
        grp = getApp().globalData.Gua44_grp;
        break;
      case 45:
        grp = getApp().globalData.Gua45_grp;
        break;
      case 46:
        grp = getApp().globalData.Gua46_grp;
        break;
      case 47:
        grp = getApp().globalData.Gua47_grp;
        break;
      case 48:
        grp = getApp().globalData.Gua48_grp;
        break;
      case 49:
        grp = getApp().globalData.Gua49_grp;
        break;
      case 50:
        grp = getApp().globalData.Gua50_grp;
        break;
      case 51:
        grp = getApp().globalData.Gua51_grp;
        break;
      case 52:
        grp = getApp().globalData.Gua52_grp;
        break;
      case 53:
        grp = getApp().globalData.Gua53_grp;
        break;
      case 54:
        grp = getApp().globalData.Gua54_grp;
        break;
      case 55:
        grp = getApp().globalData.Gua55_grp;
        break;
      case 56:
        grp = getApp().globalData.Gua56_grp;
        break;
      case 57:
        grp = getApp().globalData.Gua57_grp;
        break;
      case 58:
        grp = getApp().globalData.Gua58_grp;
        break;
      case 59:
        grp = getApp().globalData.Gua59_grp;
        break;
      case 60:
        grp = getApp().globalData.Gua60_grp;
        break;
      case 61:
        grp = getApp().globalData.Gua61_grp;
        break;
      case 62:
        grp = getApp().globalData.Gua62_grp;
        break;
      case 63:
        grp = getApp().globalData.Gua63_grp;
        break;
      case 64:
        grp = getApp().globalData.Gua64_grp;
        break;
        default:
        break;
    }
       return grp
  },

  QiGua4YiLin: function () {
    var YaoArray = new Array();//[];

    for (var i = 0; i < 6; i++) // 六爻六次，从下到上
    {      
      var seed = Math.random();
      if (seed > 0.5) {
        YaoArray.push(1);// = 1;
      } else {
        YaoArray.push(0);//YaoArray[i] = 0;
      }           
    }
    YaoArray = YaoArray.reverse()
   // console.error('YaoArray is ',YaoArray)
    
    var gua_grp = getApp().globalData.Gua_grp; 
    var index; // 当日摇出之卦   

    for(i=0;i<64;i++)
    {
      if (gua_grp[i].toString() == YaoArray.toString())
      {
        index = i
      }
    }
    
   // console.error(index)
   // console.error('gua_grp is ', gua_grp[index])
    return index;
   
  },

  GetGuaIndex: function (gua_name) {

    var gua_map = {
      '乾': 0, '坤': 1, '屯': 2, '蒙': 3, '需': 4, '讼': 5, '师': 6, '比': 7,
      '小畜': 8, '履': 9, '泰': 10, '否': 11, '同人': 12, '大有': 13, '谦': 14, '豫': 15,
      '随': 16, '蛊': 17, '临': 18, '观': 19, '噬嗑': 20, '贲': 21, '剥': 22, '复': 23,
      '无妄': 24, '大畜': 25, '颐': 26, '大过': 27, '坎': 28, '离': 29, '咸': 30, '恒': 31,
      '遁': 32, '大壮': 33, '晋': 34, '明夷': 35, '家人': 36, '睽': 37, '蹇': 38, '解': 39,
      '损': 40, '益': 41, '夬': 42, '姤': 43, '萃': 44, '升': 45, '困': 46, '井': 47,
      '革': 48, '鼎': 49, '震': 50, '艮': 51, '渐': 52, '归妹': 53, '丰': 54, '旅': 55,
      '巽': 56, '兑': 57, '涣': 58, '节': 59, '中孚': 60, '小过': 61, '既济': 62, '未既': 63,
    }

    return gua_map[gua_name]
  },

  GetDutyGua: function (jieqi_list) {
    var gualist_1month = ['屯', '谦', '睽', '升', '临']
    var gualist_2month = ['小过', '蒙', '益', '渐', '泰']
    var gualist_3month = ['需', '随', '晋', '解', '大壮'] // 春分 《震》当值一日
    var gualist_4month = ['豫', '讼', '蛊', '革', '夬']
    var gualist_5month = ['旅', '师', '比', '小畜', '乾']
    var gualist_6month = ['大有', '家人', '井', '咸', '姤']// 夏至 《离》当值一日
    var gualist_7month = ['鼎', '丰', '涣', '履', '遁']
    var gualist_8month = ['恒', '节', '同人', '损', '否']
    var gualist_9month = ['巽', '萃', '大畜', '贲', '观']   // 秋分 《兑》当值一日
    var gualist_10month = ['归妹', '无妄', '明夷', '困', '剥']
    var gualist_11month = ['艮', '既济', '噬嗑', '大过', '坤']
    var gualist_12month = ['未济', '蹇', '颐', '中孚', '复']  // 冬至 《坎》当值一日

    var date = util.formatTime(new Date());
    var nyear = date.getFullYear();
    var nmonth = date.getMonth() + 1;
    var nday = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var tianshu1, tianshu2, tianshu3, tianshu4, tianshu5, tianshu6, tianshu7, tianshu8, tianshu9, tianshu10, tianshu11, tianshu12; // 本月节与下月节之间，相隔的天数
    var yao_day; // 一爻所占天数
    var yao_hour; // 一爻所占小时
    var yao_min; // 一爻所占分钟
    var yao_n; // 距每月第一个节气的爻数
    var Feb; // 二月天数
    var tmp;
    var dutygua;

    //  console.error(nyear, nmonth, nday, hour, min);

    switch (nmonth) {
      case 1:   // 小寒、大寒
        if ((nday > jieqi_list[0]) || (nday == jieqi_list[0])) {
          tianshu1 = (31 - jieqi_list[0]) + jieqi_list[2]
          yao_min = tianshu1 * 24 * 60 / 30;
          yao_n = Math.floor((((nday - jieqi_list[0]) * 24 * 60) + (hour * 60) + min) / yao_min)

          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_1month[tmp - 1]

        }
        else // from 月初到本月第一个节气
        {
          dutygua = gualist_12month[4]  // 复卦
        }
        break;
      case 2:     // 立春、雨水
        if ((nday > jieqi_list[2]) || (nday == jieqi_list[2])) {
          if (((nyear % 4 == 0) && (nyear % 100 != 0)) || (nyear % 400 == 0)) {
            tianshu2 = (29 - jieqi_list[2]) + jieqi_list[4]
            Feb = 29
          }
          else {
            tianshu2 = (28 - jieqi_list[2]) + jieqi_list[4]
            Feb = 28
          }

          yao_min = tianshu2 * 24 * 60 / 30;
          yao_n = Math.floor((((nday - jieqi_list[2]) * 24 * 60) + (hour * 60) + min) / yao_min)

          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_2month[tmp - 1]

        }
        else // from 月初到本月第一个节气
        {
          tianshu1 = (31 - jieqi_list[0]) + jieqi_list[2]
          yao_min = tianshu1 * 24 * 60 / 30;
          yao_n = Math.floor((((31 - jieqi_list[0] + 1 + nday) * 24 * 60) + (hour * 60) + min) / yao_min)
          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_1month[tmp - 1]

        }
        break;
      case 3:     // 惊蛰、春分
        if (nday == jieqi_list[5])
          dutygua = '震';

        if ((nday > jieqi_list[4]) || (nday == jieqi_list[4])) {
          tianshu3 = (31 - jieqi_list[4]) + jieqi_list[6]
          yao_min = tianshu3 * 24 * 60 / 30;
          yao_n = Math.floor((((nday - jieqi_list[4]) * 24 * 60) + (hour * 60) + min) / yao_min)

          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_3month[tmp - 1]

        }
        else // from 月初到本月第一个节气
        {
          if (((nyear % 4 == 0) && (nyear % 100 != 0)) || (nyear % 400 == 0)) {
            tianshu2 = (29 - jieqi_list[2]) + jieqi_list[4]
            Feb = 29
          }
          else {
            tianshu2 = (28 - jieqi_list[2]) + jieqi_list[4]
            Feb = 28
          }

          yao_min = tianshu2 * 24 * 60 / 30;
          yao_n = Math.floor((((Feb - jieqi_list[2] + 1 + nday) * 24 * 60) + (hour * 60) + min) / yao_min)
          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_2month[tmp - 1]

        }
        break;
      case 4:     // 清明、谷雨
        if ((nday > jieqi_list[6]) || (nday == jieqi_list[6])) {
          tianshu4 = (30 - jieqi_list[6]) + jieqi_list[8]
          yao_min = tianshu4 * 24 * 60 / 30;
          yao_n = Math.floor((((nday - jieqi_list[6]) * 24 * 60) + (hour * 60) + min) / yao_min)

          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_4month[tmp - 1]

        }
        else // from 月初到本月第一个节气
        {
          tianshu3 = (31 - jieqi_list[4]) + jieqi_list[6]
          yao_min = tianshu3 * 24 * 60 / 30;
          yao_n = Math.floor((((31 - jieqi_list[4] + 1 + nday) * 24 * 60) + (hour * 60) + min) / yao_min)
          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_3month[tmp - 1]

        }
        break;
      case 5:     // 立夏 小满               
        if ((nday > jieqi_list[8]) || (nday == jieqi_list[8])) {
          tianshu5 = (31 - jieqi_list[8]) + jieqi_list[10]
          yao_min = tianshu5 * 24 * 60 / 30;
          yao_n = Math.floor((((nday - jieqi_list[8]) * 24 * 60) + (hour * 60) + min) / yao_min)
          // console.error('yao_n', yao_n)
          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_5month[tmp - 1]
          // console.error('dutygua', dutygua)
        }
        else // from 月初到本月第一个节气
        {
          tianshu4 = (30 - jieqi_list[6]) + jieqi_list[8]
          yao_min = tianshu4 * 24 * 60 / 30;
          yao_n = Math.floor((((30 - jieqi_list[6] + 1 + nday) * 24 * 60) + (hour * 60) + min) / yao_min)
          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_4month[tmp - 1]

        }
        break;
      case 6:     // 芒种、夏至
        if (nday == jieqi_list[11])
          dutygua = '离';
        if ((nday > jieqi_list[10]) || (nday == jieqi_list[10])) {
          tianshu6 = (30 - jieqi_list[10]) + jieqi_list[12]
          yao_min = tianshu6 * 24 * 60 / 30;
          yao_n = Math.floor((((nday - jieqi_list[10]) * 24 * 60) + (hour * 60) + min) / yao_min)

          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_6month[tmp - 1]

        }
        else // from 月初到本月第一个节气
        {
          tianshu5 = (31 - jieqi_list[8]) + jieqi_list[10]
          yao_min = tianshu5 * 24 * 60 / 30;
          yao_n = Math.floor((((31 - jieqi_list[8] + 1 + nday) * 24 * 60) + (hour * 60) + min) / yao_min)
          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_5month[tmp - 1]

        }
        break;
      case 7:     // 小暑、大暑
        if ((nday > jieqi_list[12]) || (nday == jieqi_list[12])) {
          tianshu7 = (31 - jieqi_list[12]) + jieqi_list[14]
          yao_min = tianshu7 * 24 * 60 / 30;
          yao_n = Math.floor((((nday - jieqi_list[12]) * 24 * 60) + (hour * 60) + min) / yao_min)

          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_7month[tmp - 1]

        }
        else // from 月初到本月第一个节气
        {
          tianshu6 = (30 - jieqi_list[10]) + jieqi_list[12]
          yao_min = tianshu6 * 24 * 60 / 30;
          yao_n = Math.floor((((30 - jieqi_list[10] + 1 + nday) * 24 * 60) + (hour * 60) + min) / yao_min)
          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_6month[tmp - 1]

        }
        break;
      case 8:     // 立秋、处暑
        if ((nday > jieqi_list[14]) || (nday == jieqi_list[14])) {
          tianshu8 = (31 - jieqi_list[14]) + jieqi_list[16]
          yao_min = tianshu8 * 24 * 60 / 30;
          yao_n = Math.floor((((nday - jieqi_list[14]) * 24 * 60) + (hour * 60) + min) / yao_min)

          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_8month[tmp - 1]

        }
        else // from 月初到本月第一个节气
        {
          tianshu7 = (31 - jieqi_list[12]) + jieqi_list[14]
          yao_min = tianshu7 * 24 * 60 / 30;
          yao_n = Math.floor((((31 - jieqi_list[12] + 1 + nday) * 24 * 60) + (hour * 60) + min) / yao_min)
          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_7month[tmp - 1]

        }
        break;
      case 9:     // 白露、秋分
        if (nday == jieqi_list[17])
          dutygua = '兑';
        if ((nday > jieqi_list[16]) || (nday == jieqi_list[16])) {
          tianshu9 = (30 - jieqi_list[16]) + jieqi_list[18]
          yao_min = tianshu9 * 24 * 60 / 30;
          yao_n = Math.floor((((nday - jieqi_list[16]) * 24 * 60) + (hour * 60) + min) / yao_min)

          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_9month[tmp - 1]

        }
        else // from 月初到本月第一个节气
        {
          tianshu8 = (31 - jieqi_list[14]) + jieqi_list[16]
          yao_min = tianshu8 * 24 * 60 / 30;
          yao_n = Math.floor((((31 - jieqi_list[14] + 1 + nday) * 24 * 60) + (hour * 60) + min) / yao_min)
          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_8month[tmp - 1]

        }
        break;
      case 10:    // 寒露、霜降
        if ((nday > jieqi_list[18]) || (nday == jieqi_list[18])) {
          tianshu10 = (31 - jieqi_list[18]) + jieqi_list[20]
          yao_min = tianshu10 * 24 * 60 / 30;
          yao_n = Math.floor((((nday - jieqi_list[18]) * 24 * 60) + (hour * 60) + min) / yao_min)

          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_10month[tmp - 1]

        }
        else // from 月初到本月第一个节气
        {
          tianshu9 = (30 - jieqi_list[16]) + jieqi_list[18]
          yao_min = tianshu9 * 24 * 60 / 30;
          yao_n = Math.floor((((30 - jieqi_list[16] + 1 + nday) * 24 * 60) + (hour * 60) + min) / yao_min)
          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_9month[tmp - 1]

        }
        break;
      case 11:    // 立冬、小雪
        if ((nday > jieqi_list[20]) || (nday == jieqi_list[20])) {
          tianshu11 = (30 - jieqi_list[20]) + jieqi_list[22]
          yao_min = tianshu11 * 24 * 60 / 30;
          yao_n = Math.floor((((nday - jieqi_list[20]) * 24 * 60) + (hour * 60) + min) / yao_min)

          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_11month[tmp - 1]

        }
        else // from 月初到本月第一个节气
        {
          tianshu10 = (31 - jieqi_list[18]) + jieqi_list[20]
          yao_min = tianshu10 * 24 * 60 / 30;
          yao_n = Math.floor((((31 - jieqi_list[18] + 1 + nday) * 24 * 60) + (hour * 60) + min) / yao_min)
          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_10month[tmp - 1]

        }
        break;
      case 12:    // 大雪、冬至
        if (nday == jieqi_list[23])
          dutygua = '坎';
        if ((nday > jieqi_list[22]) || (nday == jieqi_list[22])) {
          tianshu12 = (31 - jieqi_list[22]) + jieqi_list[0]
          yao_min = tianshu12 * 24 * 60 / 30;
          yao_n = Math.floor((((nday - jieqi_list[22]) * 24 * 60) + (hour * 60) + min) / yao_min)

          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_12month[tmp - 1]

        }
        else // from 月初到本月第一个节气
        {
          tianshu11 = (30 - jieqi_list[20]) + jieqi_list[22]
          yao_min = tianshu11 * 24 * 60 / 30;
          yao_n = Math.floor((((30 - jieqi_list[20] + 1 + nday) * 24 * 60) + (hour * 60) + min) / yao_min)
          tmp = Math.floor(yao_n / 6) + 1
          dutygua = gualist_11month[tmp - 1]

        }
        break;
    }
    //console.error('ppppp',dutygua)
    return dutygua
  },

  DaysFrom1900Solar: function (nYear, nMonth, nDay) {
    var ndays = 0;
    var i, j;

    if ((nYear < 1900) || (nYear > 2049) || (nMonth > 13) || (nMonth < 1) || (nDay < 1) || (nDay > 31)) {
      // console.error("Error!!!");
      return;
    }

    if (nYear == 1900) {
      if ((nMonth == 1) && (nDay < 31)) {
        //    console.error("Error!!!");
      }
      else if ((nMonth == 1) && (nDay == 31)) {
        ndays = 0;

      } else {
        for (var j = 2; j < nMonth; j++) {
          if ((j == 3) || (j == 5) || (j == 7) || (j == 8) || (j == 10) || (j == 12)) {
            ndays += 31;
          }
          else if ((j == 4) || (j == 6) || (j == 9) || (j == 11)) {
            ndays += 30;
          }
          else {
            ndays += 28;
          }
        }
        ndays = ndays + nDay;
      }
    }
    else {
      for (i = 1901; i < nYear; i++) // This year before 
      {
        for (j = 1; j < 13; j++) {
          if ((j == 1) || (j == 3) || (j == 5) || (j == 7) || (j == 8) || (j == 10) || (j == 12)) {
            ndays += 31;
          }
          else if ((j == 4) || (j == 6) || (j == 9) || (j == 11)) {
            ndays += 30;
          }
          else {
            if (((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0))
              ndays += 29;
            else
              ndays += 28;
          }
        }
      }

      for (j = 1; j < nMonth; j++)   // This year
      {
        if ((j == 1) || (j == 3) || (j == 5) || (j == 7) || (j == 8) || (j == 10) || (j == 12)) {
          ndays += 31;
        }
        else if ((j == 4) || (j == 6) || (j == 9) || (j == 11)) {
          ndays += 30;
        }
        else {
          if (((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0))
            ndays += 29;
          else
            ndays += 28;
        }
      }
      ndays = 334 + ndays + nDay; // 334 is from 1900.1.31 to 1900.12.31
    }
    //   console.error("solar ndays " + ndays);
    return ndays;

  },

  LunarDay: function (nDaysFrom1900Solar) {
    var YinLiYear = [
      0x04BD8, 0x04AE0, 0x0A570, 0x054D5, 0x0D260, 0x0D950, 0x16554, 0x056A0, 0x09AD0, 0x055D2,
      0x04AE0, 0x0A5B6, 0x0A4D0, 0x0D250, 0x1D255, 0x0B540, 0x0D6A0, 0x0ADA2, 0x095B0, 0x14977,
      0x04970, 0x0A4B0, 0x0B4B5, 0x06A50, 0x06D40, 0x1AB54, 0x02B60, 0x09570, 0x052F2, 0x04970,
      0x06566, 0x0D4A0, 0x0EA50, 0x06E95, 0x05AD0, 0x02B60, 0x186E3, 0x092E0, 0x1C8D7, 0x0C950,
      0x0D4A0, 0x1D8A6, 0x0B550, 0x056A0, 0x1A5B4, 0x025D0, 0x092D0, 0x0D2B2, 0x0A950, 0x0B557,
      0x06CA0, 0x0B550, 0x15355, 0x04DA0, 0x0A5B0, 0x14573, 0x052B0, 0x0A9A8, 0x0E950, 0x06AA0,
      0x0AEA6, 0x0AB50, 0x04B60, 0x0AAE4, 0x0A570, 0x05260, 0x0F263, 0x0D950, 0x05B57, 0x056A0,
      0x096D0, 0x04DD5, 0x04AD0, 0x0A4D0, 0x0D4D4, 0x0D250, 0x0D558, 0x0B540, 0x0B6A0, 0x195A6,
      0x095B0, 0x049B0, 0x0A974, 0x0A4B0, 0x0B27A, 0x06A50, 0x06D40, 0x0AF46, 0x0AB60, 0x09570,
      0x04AF5, 0x04970, 0x064B0, 0x074A3, 0x0EA50, 0x06B58, 0x055C0, 0x0AB60, 0x096D5, 0x092E0,
      0x0C960, 0x0D954, 0x0D4A0, 0x0DA50, 0x07552, 0x056A0, 0x0ABB7, 0x025D0, 0x092D0, 0x0CAB5,
      0x0A950, 0x0B4A0, 0x0BAA4, 0x0AD50, 0x055D9, 0x04BA0, 0x0A5B0, 0x15176, 0x052B0, 0x0A930,
      0x07954, 0x06AA0, 0x0AD50, 0x05B52, 0x04B60, 0x0A6E6, 0x0A4E0, 0x0D260, 0x0EA65, 0x0D530,
      0x05AA0, 0x076A3, 0x096D0, 0x04BD7, 0x04AD0, 0x0A4D0, 0x1D0B6, 0x0D250, 0x0D520, 0x0DD45,
      0x0B5A0, 0x056D0, 0x055B2, 0x049B0, 0x0A577, 0x0A4B0, 0x0AA50, 0x1B255, 0x06D20, 0x0ada0,
    ];
    var YinLiDays = [
      384, 738, 1093, 1476, 1830, 2185, 2569, 2923, 3278, 3662,               // 1910
      4016, 4400, 4754, 5108, 5492, 5846, 6201, 6585, 6940, 7324,             // 1920
      7678, 8032, 8416, 8770, 9124, 9509, 9863, 10218, 10602, 10956,          // 1930
      11339, 11693, 12048, 12432, 12787, 13141, 13525, 13879, 14263, 14617,   // 1940
      14971, 15355, 15710, 16064, 16449, 16803, 17157, 17541, 17895, 18279,   // 1950
      18633, 18988, 19372, 19726, 20081, 20465, 20819, 21202, 21557, 21911,   // 1960
      22295, 22650, 23004, 23388, 23743, 24096, 24480, 24835, 25219, 25573,   // 1970
      25928, 26312, 26666, 27020, 27404, 27758, 28142, 28496, 28851, 29235,   // 1980
      29590, 29944, 30328, 30682, 31066, 31420, 31774, 32158, 32513, 32868,   // 1990
      33252, 33606, 33960, 34343, 34698, 35082, 35436, 35791, 36175, 36529,   // 2000
      36883, 37267, 37621, 37976, 38360, 38714, 39099, 39453, 39807, 40191,   // 2010
      40545, 40899, 41283, 41638, 42022, 42376, 42731, 43115, 43469, 43823,   // 2020
      44207, 44561, 44916, 45300, 45654, 46038, 46392, 46746, 47130, 47485,   // 2030
      47839, 48223, 48578, 48962, 49316, 49670, 50054, 50408, 50762, 51146,   // 2040
      51501, 51856, 52240, 52594, 52978, 53332, 53686, 54070, 54424, 54779    // 2050
    ];

    var aLunarLeapMonth = new Array();
    var aLunarMonth = new Array();
    var aLunarDaysByYear = new Array();
    var aLunarDays = new Array();
    var nLunarLeapMonth;
    var nLunarMonth;
    var nLunarDays;
    var nDaysInAYear = 0;
    var nYinLiYear = 0;
    var diff_day = 0;
    var nMonthInThisYear = 0;
    var nCountDay = 0;
    var nLunarD = 0;
    var nLunarM = 0;
    var nMonthInLeapYear;
    var nMonthNormalYear;
    var R_flag = 0;

    var tmp = 0;

    for (var i = 0; i < YinLiDays.length; i++) {
      if (YinLiDays[i] == nDaysFrom1900Solar) // just 1.1
      {
        nLunarD = 1;
        nLunarM = 1;
        nYinLiYear = i + 1;
        //console.error('nYinLiYear = ' + nYinLiYear)
        return [nYinLiYear + 1900, nLunarM, nLunarD, R_flag];
      }
    }

    YinLiDays.push(nDaysFrom1900Solar);
    YinLiDays.sort(this.sequence)
    //console.error(nDaysFrom1900Solar)
    //console.error(YinLiDays.sort(this.sequence));

    /////////////////////////////////////////////////////////////////////////////////////////
    for (var i = 0; i < YinLiDays.length; i++) {
      if (YinLiDays[i] == nDaysFrom1900Solar)// 找到所在年
      {
        nYinLiYear = i;                     // 阴历年
        // console.error("aaa_Year " + nYinLiYear);

        if (nYinLiYear == 0) {
          diff_day = nDaysFrom1900Solar;
        } else {
          diff_day = nDaysFrom1900Solar - YinLiDays[nYinLiYear - 1];
        }


        //  console.error("diff_day " + diff_day);
        //  console.error("YinLiYear[] " + YinLiYear[nYinLiYear]);
        nMonthInThisYear = ('0000000' + YinLiYear[nYinLiYear].toString(2)).slice(-20); // for 阴历月、日
        nMonthNormalYear = nMonthInThisYear.slice(4, 16);
        //   console.error("nStringInThisYear " + nMonthInThisYear);
        //   console.error("nMonthInThisYear " + nMonthNormalYear);


        if (YinLiYear[nYinLiYear].toString(16).slice(-1) == '0') // 无闰月
        {
          //   console.error("No Leap month ");

          for (tmp = 0; tmp < 12; tmp++) {
            if (nMonthNormalYear[tmp] == '0')
              nLunarDays = 29;
            else
              nLunarDays = 30;

            if ((nCountDay + nLunarDays) < diff_day) {
              nCountDay += nLunarDays;
              //    console.error("< diff_day " + nCountDay);
            }
            else if ((nCountDay + nLunarDays) == diff_day) {
              nLunarD = 1; // 1 号
              nLunarM = tmp + 2;
              //    console.error(">= diff_day" + nCountDay); 
              break;
            }
            else {
              nLunarD = diff_day - nCountDay + 1;
              nLunarM = tmp + 1;
              //     console.error(">= diff_day" + nCountDay);
              break;
            }

          }

          //  console.error("nLunarM " + nLunarM);
          //  console.error("nLunarD " + nLunarD);
          break;
        }
        else   // 有闰月
        {
          //console.error("Have Leap month ");
          if ((YinLiYear[nYinLiYear].toString(16).slice(-1)) == 'a') {
            nLunarLeapMonth = Number('10');
          } else {
            nLunarLeapMonth = Number(YinLiYear[nYinLiYear].toString(16).slice(-1));
          }
          //   console.error("IIIIIIIIIIIIIIIII " + nLunarLeapMonth);  // 计算闰哪一个月

          var before = nMonthNormalYear.slice(0, nLunarLeapMonth);
          var after = nMonthNormalYear.slice(nLunarLeapMonth, 12);
          if (nMonthInThisYear[3] == '0')
            nMonthInLeapYear = before + '0' + after;
          else
            nMonthInLeapYear = before + '1' + after;


          for (tmp = 0; tmp < 13; tmp++) {
            if (nMonthInLeapYear[tmp] == '0')
              nLunarDays = 29;
            else
              nLunarDays = 30;

            if ((nCountDay + nLunarDays) < diff_day) {
              nCountDay += nLunarDays;

            }
            else {
              nLunarD = diff_day - nCountDay + 1;
              nLunarM = tmp + 1;

              if (nLunarM > nLunarLeapMonth) {
                if (nLunarM == (nLunarLeapMonth + 1)) {
                  nLunarM = nLunarLeapMonth;
                  R_flag = 1;
                } else {

                  nLunarM = nLunarM - 1;
                }
              }
              //   console.error("cccc " + nLunarM);
              break;
            }
          }
          break;
        }

      }
    }

    //console.error("nYinLiYear " + nYinLiYear);
    return [nYinLiYear + 1900, nLunarM, nLunarD, R_flag];
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var GuaName=[
      '乾', '坤', '屯', '蒙', '需', '讼', '师', '比',
      '小畜', '履', '泰', '否', '同人', '大有', '谦', '豫',
      '随', '蛊', '临', '观', '噬嗑', '贲', '剥', '复',
      '无妄', '大畜', '颐', '大过', '坎', '离', '咸', '恒',
      '遁', '大壮', '晋', '明夷', '家人', '睽', '蹇', '解',
      '损', '益', '夬', '姤', '萃', '升', '困', '井',
      '革', '鼎', '震', '艮', '渐', '归妹', '丰', '旅',
      '巽', '兑', '涣', '节', '中孚', '小过', '既济', '未既',
    ];
    var date = util.formatTime(new Date());

    var JiaZi = getApp().globalData.JiaZi;

    var nyear = date.getFullYear(); // tst here
    var nmonth = date.getMonth() + 1;
    var nday = date.getDate();
    var sDays = this.DaysFrom1900Solar(nyear, nmonth, nday);
    var sTermInfo = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758,];// start from XiaoHan
    var TianGan = ['0', "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
    var DiZhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
    var offDate;
    var GanYue;
    var ZhiYue;
    var index;

    var Ldate = new Array();
    Ldate = this.LunarDay(sDays);
    var sYear = Ldate[0];
    var sMonth = Ldate[1];
    var sDay = Ldate[2];
    var sRflag = Ldate[3];

    //  console.error("sYear sMonth sDay sRflag=" + sYear + ' ' + sMonth + ' ' + sDay + ' '+ sRflag); 
    var Yindex = 0;
    var Mindex = 0;
    var Dindex = 0;

    if ((40 + (sDays % 60)) > 59)  // 40:1900.1.31 is 甲辰日    干支日
    {
      Dindex = (40 + (sDays % 60)) - 60;
    } else {

      Dindex = 40 + (sDays % 60);
    }
    //   console.error("Today is " + JiaZi[Dindex]); 

    if (((sYear - 1900) % 60 + 36) > 60)           // 36:1900.1.31 is 庚子年    干支年
    {
      Yindex = ((sYear - 1900) % 60 + 36) - 60;
    }
    else if (((sYear - 1900) % 60 + 36) == 60) {
      Yindex = 0;
    }
    else {
      Yindex = (sYear - 1900) % 60 + 36
    }

    //  console.error("This year is " + JiaZi[Yindex]); 

    // 干支月
    var YueGan = (nyear % 5 - 2) * 2 - 1;  // 立春的月干  
    if (YueGan < 0)
      YueGan = YueGan + 10;


    // console.error("YueGan = " + YueGan); 
    // console.error("YueGan Jiazi " + TianGan[YueGan]);
    //var GanIndex = YueGan - 1;    // transform to index

    var JieQi24 = new Array();

    for (var i = 0; i < 24; i++) // 24 节气  // 注意，是以阳历年计算
    {
      offDate = new Date((31556925974.7 * (nyear - 1900) + sTermInfo[i] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
      JieQi24.push(offDate.getUTCDate());
      // console.error(nyear + " sTermInfo" + "[" + i + "]" + offDate.getUTCDate());
    }
    // console.error("JieQi24 is " + JieQi24);

    switch (nmonth) {
      case 1:
        //   console.error("yangli yue = " + nmonth); 
        if ((nday > JieQi24[0]) || (nday == JieQi24[0])) {
          YueGan = YueGan - 1;
          if ((YueGan - 1) == 0)
            YueGan = 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[1];
          //    console.error("jie hou ");
        } else {
          //    console.error("jie qian ");
          YueGan = YueGan - 2;
          if (YueGan < 0)
            YueGan += 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[0];

        }

        break;
      case 2:
        if ((nday > JieQi24[2]) || (nday == JieQi24[2])) {
          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[2];
        } else {
          YueGan = YueGan - 1;
          if ((YueGan - 1) == 0)
            YueGan = 10;
          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[1];
        }
        break;
      case 3:
        if ((nday > JieQi24[4]) || (nday == JieQi24[4])) {
          YueGan = YueGan + 1;
          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[3];

        } else {

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[2];

        }
        break;
      case 4:
        if ((nday > JieQi24[6]) || (nday == JieQi24[6])) {
          YueGan = YueGan + 2;
          if (YueGan > 10)
            YueGan = YueGan % 10;
          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[4];

        } else {
          YueGan = YueGan + 1;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[3];

        }
        break;
      case 5:
        if ((nday > JieQi24[8]) || (nday == JieQi24[8])) {
          YueGan = YueGan + 3;
          if (YueGan > 10)
            YueGan = YueGan % 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[5];

        } else {
          YueGan = YueGan + 2;
          if (YueGan > 10)
            YueGan = YueGan % 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[4];

        }
        break;
      case 6:
        if ((nday > JieQi24[10]) || (nday == JieQi24[10])) {
          YueGan = YueGan + 4;
          if (YueGan > 10)
            YueGan = YueGan % 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[6];

        } else {
          YueGan = YueGan + 3;
          if (YueGan > 10)
            YueGan = YueGan % 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[5];

        }
        break;
      case 7:
        if ((nday > JieQi24[12]) || (nday == JieQi24[12])) {
          YueGan = YueGan + 5;
          if (YueGan > 10)
            YueGan = YueGan % 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[7];

        } else {
          YueGan = YueGan + 4;
          if (YueGan > 10)
            YueGan = YueGan % 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[6];

        }
        break;
      case 8:
        if ((nday > JieQi24[14]) || (nday == JieQi24[14])) {
          YueGan = YueGan + 6;
          if (YueGan > 10)
            YueGan = YueGan % 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[8];

        } else {
          YueGan = YueGan + 5;
          if (YueGan > 10)
            YueGan = YueGan % 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[7];

        }
        break;
      case 9:
        if ((nday > JieQi24[16]) || (nday == JieQi24[16])) {
          YueGan = YueGan + 7;
          if (YueGan > 10)
            YueGan = YueGan % 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[9];

        } else {
          YueGan = YueGan + 6;
          if (YueGan > 10)
            YueGan = YueGan % 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[8];

        }
        break;
      case 10:
        if ((nday > JieQi24[18]) || (nday == JieQi24[18])) {
          YueGan = YueGan + 8;
          if (YueGan > 10)
            YueGan = YueGan % 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[10];

        } else {
          YueGan = YueGan + 7;
          if (YueGan > 10)
            YueGan = YueGan % 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[9];

        }
        break;
      case 11:
        if ((nday > JieQi24[20]) || (nday == JieQi24[20])) {
          YueGan = YueGan + 9;
          if (YueGan > 10)
            YueGan = YueGan % 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[11];

        } else {
          YueGan = YueGan + 8;
          if (YueGan > 10)
            YueGan = YueGan % 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[10];

        }
        break;
      case 12:
        if ((nday > JieQi24[22]) || (nday == JieQi24[22])) {
          YueGan = YueGan + 10;
          if (YueGan > 10)
            YueGan = YueGan % 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[0];

        } else {
          YueGan = YueGan + 9;
          if (YueGan > 10)
            YueGan = YueGan % 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[11];

        }
        break;
      default:

        break;
    }


    // var ShengXiao = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
    var YinLiYue = ["0", "正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"];
    var YinLiDay = ["0", "初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十",
      "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
      "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十"];

    // var shengxiaoIndex = (nyear + 9) % 12;

    var myViewWidth;
    var myViewHeigt;
    wx.getSystemInfo({
      success: function (res) {
        myViewWidth = res.windowWidth
        myViewHeigt = res.windowHeight
      }
    })

  

    var dutyGua = this.GetDutyGua(JieQi24);
    var bengua_index = this.GetGuaIndex(dutyGua)
    //console.error('bengua_index',bengua_index)
    var biangua_index = this.QiGua4YiLin()
    var yilinci_grp = this.GetYiLinGrp(bengua_index + 1)

    this.setData(
      {
      //  guatuInDuty_width: myViewWidth / 2,
      //  guatuInDuty_height: myViewHeigt / 3,
        canvasWidth: myViewWidth/2,
        Today: "今天是 " + nyear + " 年 " + nmonth + " 月 " + nday + " 日 ",
        YinLi: sYear + " 年 " + YinLiYue[sMonth] + " 月 " + YinLiDay[sDay] + " 日",
        Ganzhi: JiaZi[Yindex] + " 年 " + GanYue + ZhiYue + " 月 " + JiaZi[Dindex] + " 日",
        DutyGua: dutyGua + '之' + GuaName[biangua_index],
        //gua_daxiang: getApp().globalData.Gua_daxiang_str[bengua_index],
      }
    )
    this.DrawYiLinZhan(myViewWidth,myViewHeigt,bengua_index, biangua_index)
    this.setData({ YiLinCi4096: yilinci_grp[biangua_index + 1] })

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})