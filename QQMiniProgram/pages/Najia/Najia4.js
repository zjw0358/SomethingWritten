// pages/Najia/Najia4.js
// pages/Najia/Najia2.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '../../resources/tai6.jpg',
    // ShiChenArray:['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'],
    ShiChenArrayNum: ['23:00-01:00', '01:00-03:00', '03:00-05:00', '05:00-07:00', '07:00-09:00', '09:00-11:00', '11:00-13:00', '13:00-15:00', '15:00-17:00', '17:00-19:00', '19:00-21:00', '21:00-23:00'],
    Yao1Range: ['少阳 ---', '太阳 --- O', '少阴 - -', '太阴 - - X'],
    Yao2Range: ['少阳 ---', '太阳 --- O', '少阴 - -', '太阴 - - X'],
    Yao3Range: ['少阳 ---', '太阳 --- O', '少阴 - -', '太阴 - - X'],
    Yao4Range: ['少阳 ---', '太阳 --- O', '少阴 - -', '太阴 - - X'],
    Yao5Range: ['少阳 ---', '太阳 --- O', '少阴 - -', '太阴 - - X'],
    Yao6Range: ['少阳 ---', '太阳 --- O', '少阴 - -', '太阴 - - X'],
    y1Index: '0', y2Index: '0', y3Index: '0', y4Index: '0', y5Index: '0', y6Index: '0',
    index: '0',
    date:null,
  },
  sequence: function (a, b) {
    return a - b;
  },
  GetShiGan: function (RiGan, qigua_flag, time_index) {
    var JiaJiRi = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸', '甲', '乙'];
    var YiGengRi = ['丙', '丁', '戊', '己', '庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁']
    var BinXinRi = ['戊', '己', '庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁', '戊', '己'];
    var DingRenRi = ['庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛'];
    var WuGuiRi = ['壬', '癸', '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    var shigan;
    var index;
    if (qigua_flag == 0) {
      var dateTime = util.formatTime(new Date());
      var hour = dateTime.getHours();
      switch (hour) {
        case 23:
        case 0:
          index = 0;
          break;
        case 1:
        case 2:
          index = 1;
          break;
        case 3:
        case 4:
          index = 2;
          break;
        case 5:
        case 6:
          index = 3;
          break;
        case 7:
        case 8:
          index = 4;
          break;
        case 9:
        case 10:
          index = 5;
          break;
        case 11:
        case 12:
          index = 6;
          break;
        case 13:
        case 14:
          index = 7;
          break;
        case 15:
        case 16:
          index = 8;
          break;
        case 17:
        case 18:
          index = 9;
          break;
        case 19:
        case 20:
          index = 10;
          break;
        case 21:
        case 22:
          index = 11;
          break;
        default:
          break;
      }
    } else {
      index = time_index;
      //console.error('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'+ RiGan);
    }

    switch (RiGan) {
      case '甲':
      case '己':
        shigan = JiaJiRi[index];
        break;
      case '乙':
      case '庚':
        shigan = YiGengRi[index];
        break;
      case '丙':
      case '辛':
        shigan = BinXinRi[index];
        break;
      case '丁':
      case '壬':
        shigan = DingRenRi[index];
        break;
      case '戊':
      case '癸':
        shigan = WuGuiRi[index];
        break;
      default:
        break;
    }

    return shigan;
  },
  GetGongliTimeStr: function (qigua_flag, time_index) {
    var timeStr;
    if (qigua_flag == 0) // auto qigua
    {
      var dateTime = util.formatTime(new Date());
      timeStr = (dateTime.getHours()).toString() + ':' + (dateTime.getMinutes()).toString() + ':' + (dateTime.getSeconds()).toString()
    }
    else // manual mode
    {
      switch (time_index) {
        case '0':
          timeStr = '23:00-01:00';
          break;
        case '1':
          timeStr = '01:00-03:00';
          break;
        case '2':
          timeStr = '03:00-05:00';
          break;
        case '3':
          timeStr = '05:00-07:00';
          break;
        case '4':
          timeStr = '07:00-09:00';
          break;
        case '5':
          timeStr = '09:00-11:00';
          break;
        case '6':
          timeStr = '11:00-13:00';
          break;
        case '7':
          timeStr = '13:00-15:00';
          break;
        case '8':
          timeStr = '15:00-17:00';
          break;
        case '9':
          timeStr = '17:00-19:00';
          break;
        case '10':
          timeStr = '19:00-21:00';
          break;
        case '11':
          timeStr = '21:00-23:00';
          break;
        default:

          break;
      }
    }
    return timeStr;
  },

  GetYinLiStrShi: function (qigua_flag, time_index) {
    var dizhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥',];
    var tmp = ['23:00-01:00', '01:00-03:00', '03:00-05:00', '05:00-07:00', '07:00-09:00', '09:00-11:00', '11:00-13:00', '13:00-15:00', '15:00-17:00', '17:00-19:00', '19:00-21:00', '21:00-23:00'];
    var strshi;
    var index;
    if (qigua_flag == 0) {
      var dateTime = util.formatTime(new Date());
      var hour = dateTime.getHours();
      switch (hour) {
        case 23:
        case 0:
          index = 0;
          break;
        case 1:
        case 2:
          index = 1;
          break;
        case 3:
        case 4:
          index = 2;
          break;
        case 5:
        case 6:
          index = 3;
          break;
        case 7:
        case 8:
          index = 4;
          break;
        case 9:
        case 10:
          index = 5;
          break;
        case 11:
        case 12:
          index = 6;
          break;
        case 13:
        case 14:
          index = 7;
          break;
        case 15:
        case 16:
          index = 8;
          break;
        case 17:
        case 18:
          index = 9;
          break;
        case 19:
        case 20:
          index = 10;
          break;
        case 21:
        case 22:
          index = 11;
          break;
        default:
          break;
      }
    } else {
      switch (time_index) {
        case '0':
          index = 0;
          break;
        case '1':
          index = 1;
          break;
        case '2':
          index = 2;
          break;
        case '3':
          index = 3;
          break;
        case '4':
          index = 4;
          break;
        case '5':
          index = 5;
          break;
        case '6':
          index = 6;
          break;
        case '7':
          index = 7;
          break;
        case '8':
          index = 8;
          break;
        case '9':
          index = 9;
          break;
        case '10':
          index = 10;
          break;
        case '11':
          index = 11;
          break;
        default:
          break;
      }
      // index = time_index;
      //console.error('!!!!!!!!!!!!!!!!!!!!=' + time_index + index);
    }
    switch (index) {
      case 0:
        strshi = dizhi[0];
        break;
      case 1:
        strshi = dizhi[1];
        break;
      case 2:
        strshi = dizhi[2];
        break;
      case 3:
        strshi = dizhi[3];
        break;
      case 4:
        strshi = dizhi[4];
        break;
      case 5:
        strshi = dizhi[5];
        break;
      case 6:
        strshi = dizhi[6];
        break;
      case 7:
        strshi = dizhi[7];
        break;
      case 8:
        strshi = dizhi[8];
        break;
      case 9:
        strshi = dizhi[9];
        break;
      case 10:
        strshi = dizhi[10];
        break;
      case 11:
        strshi = dizhi[11];
        break;
      default:
        break;
    }

    return strshi;
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
        //   console.error("aaa_Year " + nYinLiYear);

        if (nYinLiYear == 0) {
          diff_day = nDaysFrom1900Solar;
        } else {
          diff_day = nDaysFrom1900Solar - YinLiDays[nYinLiYear - 1];
        }


        // console.error("diff_day " + diff_day);
        // console.error("YinLiYear[] " + YinLiYear[nYinLiYear]);
        nMonthInThisYear = ('0000000' + YinLiYear[nYinLiYear].toString(2)).slice(-20); // for 阴历月、日
        nMonthNormalYear = nMonthInThisYear.slice(4, 16);
        //   console.error("nStringInThisYear " + nMonthInThisYear);
        //    console.error("nMonthInThisYear " + nMonthNormalYear);


        if (YinLiYear[nYinLiYear].toString(16).slice(-1) == '0') // 无闰月
        {
          //    console.error("No Leap month ");

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
              //  console.error(">= diff_day" + nCountDay);
              break;
            }

          }

          //  console.error("nLunarM " + nLunarM);
          //  console.error("nLunarD " + nLunarD);
          break;
        }
        else   // 有闰月
        {
          //     console.error("Have Leap month ");
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

          //   console.error("12 month " + nMonthNormalYear);

          //  console.error("before " + before);
          //  console.error("after " + after);
          //  console.error("13 month " + nMonthInLeapYear); // there are 13 month now

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

    //  console.error("nYinLiYear " + nYinLiYear);
    return [nYinLiYear + 1900, nLunarM, nLunarD, R_flag];
  },

  ReturnGanZhi: function (nyear, yyear, nmonth, nday, ydate) {
    var JiaZi = getApp().globalData.JiaZi;

    var sTermInfo = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758,];// start from XiaoHan
    var TianGan = ['0', "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
    var DiZhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
    var GanYue;
    var ZhiYue;
    var offDate;

    //console.error("hhhhhhhhhhhhhhhhh= " + sDay);
    var Yindex = 0;
    var Mindex = 0;
    var Dindex = 0;

    if ((40 + (nday % 60)) > 59)  // 40:1900.1.31 is 甲辰日    干支日
    {
      Dindex = (40 + (nday % 60)) - 60;
    } else {

      Dindex = 40 + (nday % 60);
    }
    //   console.error("Today is " + JiaZi[Dindex]); 

    if (((nyear - 1900) % 60 + 36) > 60)           // 36:1900.1.31 is 庚子年    干支年
    {
      Yindex = ((nyear - 1900) % 60 + 36) - 60;
    }
    else if (((nyear - 1900) % 60 + 36) == 60) {
      Yindex = 0;
    }
    else {
      Yindex = (nyear - 1900) % 60 + 36
    }

    //  console.error("This year is " + JiaZi[Yindex]); 

    // 干支月
    var YueGan = (yyear % 5 - 2) * 2 - 1;  // 立春的月干  
    if (YueGan < 0)
      YueGan = YueGan + 10;

    //console.error("YueGan = " + YueGan);
    //console.error("YueGan Jiazi " + TianGan[YueGan]);
    //var GanIndex = YueGan - 1;    // transform to index

    var JieQi24 = new Array();

    for (var i = 0; i < 24; i++) // 24 节气  // 注意，是以阳历年计算
    {
      offDate = new Date((31556925974.7 * (yyear - 1900) + sTermInfo[i] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
      JieQi24.push(offDate.getUTCDate());
      // console.error(yyear + " sTermInfo" + "[" + i + "]" + offDate.getUTCDate());
    }
    var xiazhi_day = JieQi24[9];
    var dongzhi_day = JieQi24[21];
    // console.error("JieQi24 is " + JieQi24);
    //console.error("XiaZhi is " + JieQi24[9]);
    //console.error("DongZhi is " + JieQi24[21]);
    switch (nmonth) {
      case 1:
        //console.error("yangli yue = " + nmonth);
        if ((ydate > JieQi24[0]) || (ydate == JieQi24[0])) {
          YueGan = YueGan - 1;
          if ((YueGan - 1) == 0)
            YueGan = 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[1];
        } else {
          YueGan = YueGan - 2;
          if (YueGan < 0)
            YueGan += 10;

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[0];

        }

        break;
      case 2:
        if ((ydate > JieQi24[2]) || (ydate == JieQi24[2])) {
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
        if ((ydate > JieQi24[4]) || (ydate == JieQi24[4])) {
          YueGan = YueGan + 1;
          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[3];

        } else {

          GanYue = TianGan[YueGan];
          ZhiYue = DiZhi[2];

        }
        break;
      case 4:
        if ((ydate > JieQi24[6]) || (ydate == JieQi24[6])) {
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
        if ((ydate > JieQi24[8]) || (ydate == JieQi24[8])) {
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
        if ((ydate > JieQi24[10]) || (ydate == JieQi24[10])) {
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
        if ((ydate > JieQi24[12]) || (ydate == JieQi24[12])) {
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
        if ((ydate > JieQi24[14]) || (ydate == JieQi24[14])) {
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
        if ((ydate > JieQi24[16]) || (ydate == JieQi24[16])) {
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
        if ((ydate > JieQi24[18]) || (ydate == JieQi24[18])) {
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
        if ((ydate > JieQi24[20]) || (ydate == JieQi24[20])) {
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
        if ((ydate > JieQi24[22]) || (ydate == JieQi24[22])) {
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
    var ganzhi = [JiaZi[Yindex], GanYue + ZhiYue, JiaZi[Dindex], xiazhi_day,dongzhi_day];

    return ganzhi
  },

  bindPickerYao6: function (e) {
    console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      y6Index: e.detail.value,
    })
  },
  bindPickerYao5: function (e) {
    console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      y5Index: e.detail.value,
    })
  },
  bindPickerYao4: function (e) {
    console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      y4Index: e.detail.value,
    })
  },
  bindPickerYao3: function (e) {
    console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      y3Index: e.detail.value,
    })
  },
  bindPickerYao2: function (e) {
    console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      y2Index: e.detail.value,
    })
  },
  bindPickerYao1: function (e) {
    console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      y1Index: e.detail.value,
    })
  },


  bindPickerChange: function (e) {
    console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
    })
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)

    this.setData({
      date: e.detail.value
    })
    console.error('index=' + e.detail.value[8] + e.detail.value[9])
  },
  QiGuaCoin: function () {
    var YaoArray = new Array();
    var DongIndexArray = new Array();
    var coin;
    var yao;
    var dong_index = -1;

    for (var i = 0; i < 6; i++) // 六爻六次，从下到上
    {

      var CoinArray = new Array();
      for (var j = 0; j < 3; j++) {
        var seed = Math.random();
        if (seed > 0.5) {
          CoinArray[j] = '1';
        } else {
          CoinArray[j] = '0';
        }
      }
      var coin = CoinArray[0] + CoinArray[1] + CoinArray[2];
      //  console.error("CoinArray " + CoinArray);
      //  console.error("coin " + coin);
      switch (coin) {
        case '000':
          yao = 'n';
          dong_index = i.toString();
          break;
        case '111':
          yao = 'y';
          dong_index = i.toString();
          break;
        case '100':
        case '010':
        case '001':
          yao = 'y';
          dong_index = 'x';
          break;
        case '011':
        case '101':
        case '110':
          yao = 'n';
          dong_index = 'x';
          break;
      }
      YaoArray.push(yao);
      DongIndexArray.push(dong_index);
    }
    // console.error("YaoArray " + YaoArray );
    //console.error("YaoArray reverse" +YaoArray.reverse());
    // console.error("DongIndexArray " + DongIndexArray);
    //console.error("DongIndexArray reverse" + DongIndexArray.reverse());
    var YaoAndDong = (YaoArray.reverse()).concat(DongIndexArray);// l六爻转变为从上到下
  //  console.error("YaoArray " + typeof(YaoArray));
  //  console.error("DongIndexArray " + typeof (DongIndexArray));
  //  console.error("YaoAndDong typeof " + typeof(YaoAndDong));
    return YaoAndDong;
  },

  GoToPaiPanFromAuto: function () {
    var ShengXiao = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
    var YinLiYue = ["0", "正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"];
    var YinLiDay = ["0", "初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十",
      "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
      "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十"];
    var StrYinLi = [];
    var StrDate = [];
    var StrShiZhi;
    var StrShiGan;
    var timeStr;

    var date = util.formatTime(new Date());

    var time_index = this.data.index
    var date_fromPicker = this.data.date
    //console.error('pppp111 ' + date_fromPicker)
    //console.error('pppp222 ' + parseInt(date_fromPicker.slice(0,5)) )
    //console.error('pppp222 ' + parseInt(date_fromPicker.slice(5, 8)))
    //console.error('pppp222 ' + parseInt(date_fromPicker.slice(8, 11)))
    if (qigua_flag == 0)//auto
    {
      var nyear = date.getFullYear(); // tst here
      var nmonth = date.getMonth() + 1;
      var ndate = date.getDate();
    }
    else {
      var nyear = parseInt(date_fromPicker.slice(0, 5));
      var nmonth = parseInt(date_fromPicker.slice(5, 8))
      var ndate = parseInt(date_fromPicker.slice(8, 11))
    }
    var ndays = this.DaysFrom1900Solar(nyear, nmonth, ndate);

    var nYLymd = this.LunarDay(ndays);

    var nGanZhi = this.ReturnGanZhi(nYLymd[0], nyear, nmonth, ndays, ndate);


    var qigua_flag = 0
    var gonglitime = this.GetGongliTimeStr(qigua_flag, time_index);
    StrDate = date_fromPicker + ' ' + gonglitime;
    //  console.error('RRRRRRRRRRRRRRRRRRRRRRRRRR ' + StrDate);
    StrShiZhi = this.GetYinLiStrShi(qigua_flag, time_index)
    // console.error('RRRRRRRRRRRRRRRRRRRRRRRRRR StrShiZhi = ' + StrShiZhi)

    StrShiGan = this.GetShiGan(nGanZhi[2].slice(0, 1), qigua_flag, time_index)
    if (nYLymd[3] == 0) {
      StrYinLi = [nYLymd[0] + " 年 " + YinLiYue[nYLymd[1]] + " 月 " + YinLiDay[nYLymd[2]] + ' ' + StrShiZhi + '时']
    }
    else {
      StrYinLi = [nYLymd[0] + " 年 " + ' 闰' + YinLiYue[nYLymd[1]] + " 月 " + YinLiDay[nYLymd[2]] + ' ' + StrShiZhi + '时']
    }
    //console.error('nGanZhi is        '+nGanZhi.pop())
    //console.error('nGanZhi is        ' + nGanZhi.pop())
    //console.error('nGanZhi is        ' + nGanZhi)
    var xia_dong_day=[]
    xia_dong_day.push(nGanZhi.pop())
    xia_dong_day.push(nGanZhi.pop())
    xia_dong_day = xia_dong_day.reverse()
    nGanZhi = nGanZhi + ' ' + StrShiGan + StrShiZhi;
   // console.error('StrShiGan============' + StrShiGan);
    var default_gua = this.data.y6Index + this.data.y5Index + this.data.y4Index + this.data.y3Index + this.data.y2Index + this.data.y1Index;
   // console.error('default_gua='+default_gua)
   // console.error('default_gua=' + default_gua[2])
   // console.error('default_gua=' + typeof(default_gua[2]))
    // ppflag=2 易冒纳甲

    var autoqigualist = this.QiGuaCoin()
 

    
   // console.error('autoqigualist=' + autoqigualist)
   // console.error('autoqigualist type=' + typeof (autoqigualist))

    wx.navigateTo({
      url: '../Najia/NajiaPaiPan?&dateIndex=' + StrDate + '&timeIndex=' + time_index + '&YLymd=' + StrYinLi + '&ganzhiGrp=' + nGanZhi + '&qigua_flag=' + '0' + '&ppflag=' + '1' + '&xiadong_day=' + xia_dong_day + '&qigualist=' + autoqigualist
    })

   // console.error('time is     ' + StrDate)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var dateTime = util.formatTime_1(new Date());

    this.setData({
      date: dateTime
    })


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