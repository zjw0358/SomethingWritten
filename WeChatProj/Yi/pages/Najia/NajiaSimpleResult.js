// pages/Najia/NajiaSimpleResult.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },









  GetJiaoShiyi: function (benindex, bianindex) {
    var jsCi;
    bianindex = bianindex + 1
    // console.error('GetJiaoShiyi '+typeof(benindex))
    var tmp;
    switch (benindex) {
      case 0:
        tmp = (getApp().globalData.Gua1_grp);
        jsCi = tmp[bianindex]
        break;
      case 1:
        tmp = (getApp().globalData.Gua2_grp);
        jsCi = tmp[bianindex]
        break;
      case 2:
        tmp = (getApp().globalData.Gua3_grp);
        jsCi = tmp[bianindex]
        break;
      case 3:
        tmp = (getApp().globalData.Gua4_grp);
        jsCi = tmp[bianindex]
        break;
      case 4:
        tmp = (getApp().globalData.Gua5_grp);
        jsCi = tmp[bianindex]
        break;
      case 5:
        tmp = (getApp().globalData.Gua6_grp);
        jsCi = tmp[bianindex]
        break;
      case 6:
        tmp = (getApp().globalData.Gua7_grp);
        jsCi = tmp[bianindex]
        break;
      case 7:
        tmp = (getApp().globalData.Gua8_grp);
        jsCi = tmp[bianindex]
        break;
      case 8:
        tmp = (getApp().globalData.Gua9_grp);
        jsCi = tmp[bianindex]
        break;
      case 9:
        tmp = (getApp().globalData.Gua10_grp);
        jsCi = tmp[bianindex]
        break;
      case 10:
        tmp = (getApp().globalData.Gua11_grp);
        jsCi = tmp[bianindex]
        break;
      case 11:
        tmp = (getApp().globalData.Gua12_grp);
        jsCi = tmp[bianindex]
        break;
      case 12:
        tmp = (getApp().globalData.Gua13_grp);
        jsCi = tmp[bianindex]
        break;
      case 13:
        tmp = (getApp().globalData.Gua14_grp);
        jsCi = tmp[bianindex]
        break;
      case 14:
        tmp = (getApp().globalData.Gua15_grp);
        jsCi = tmp[bianindex]
        break;
      case 15:
        tmp = (getApp().globalData.Gua16_grp);
        jsCi = tmp[bianindex]
        break;
      case 16:
        tmp = (getApp().globalData.Gua17_grp);
        jsCi = tmp[bianindex]
        break;
      case 17:
        tmp = (getApp().globalData.Gua18_grp);
        jsCi = tmp[bianindex]
        break;
      case 18:
        tmp = (getApp().globalData.Gua19_grp);
        jsCi = tmp[bianindex]
        break;
      case 19:
        tmp = (getApp().globalData.Gua20_grp);
        jsCi = tmp[bianindex]
        break;
      case 20:
        tmp = (getApp().globalData.Gua21_grp);
        jsCi = tmp[bianindex]
        break;
      case 21:
        tmp = (getApp().globalData.Gua22_grp);
        jsCi = tmp[bianindex]
        break;
      case 22:
        tmp = (getApp().globalData.Gua23_grp);
        jsCi = tmp[bianindex]
        break;
      case 23:
        tmp = (getApp().globalData.Gua24_grp);
        jsCi = tmp[bianindex]
        break;
      case 24:
        tmp = (getApp().globalData.Gua25_grp);
        jsCi = tmp[bianindex]
        break;
      case 25:
        tmp = (getApp().globalData.Gua26_grp);
        jsCi = tmp[bianindex]
        break;
      case 26:
        tmp = (getApp().globalData.Gua27_grp);
        jsCi = tmp[bianindex]
        break;
      case 27:
        tmp = (getApp().globalData.Gua28_grp);
        jsCi = tmp[bianindex]
        break;
      case 28:
        tmp = (getApp().globalData.Gua29_grp);
        jsCi = tmp[bianindex]
        break;
      case 29:
        tmp = (getApp().globalData.Gua30_grp);
        jsCi = tmp[bianindex]
        break;
      case 30:
        tmp = (getApp().globalData.Gua31_grp);
        jsCi = tmp[bianindex]
        break;
      case 31:
        tmp = (getApp().globalData.Gua32_grp);
        jsCi = tmp[bianindex]
        break;
      case 32:
        tmp = (getApp().globalData.Gua33_grp);
        jsCi = tmp[bianindex]
        break;
      case 33:
        tmp = (getApp().globalData.Gua34_grp);
        jsCi = tmp[bianindex]
        break;
      case 34:
        tmp = (getApp().globalData.Gua35_grp);
        jsCi = tmp[bianindex]
        break;
      case 35:
        tmp = (getApp().globalData.Gua36_grp);
        jsCi = tmp[bianindex]
        break;
      case 36:
        tmp = (getApp().globalData.Gua37_grp);
        jsCi = tmp[bianindex]
        break;
      case 37:
        tmp = (getApp().globalData.Gua38_grp);
        jsCi = tmp[bianindex]
        break;
      case 38:
        tmp = (getApp().globalData.Gua39_grp);
        jsCi = tmp[bianindex]
        break;
      case 39:
        tmp = (getApp().globalData.Gua40_grp);
        jsCi = tmp[bianindex]
        break;
      case 40:
        tmp = (getApp().globalData.Gua41_grp);
        jsCi = tmp[bianindex]
        break;
      case 41:
        tmp = (getApp().globalData.Gua42_grp);
        jsCi = tmp[bianindex]
        break;
      case 42:
        tmp = (getApp().globalData.Gua43_grp);
        jsCi = tmp[bianindex]
        break;
      case 43:
        tmp = (getApp().globalData.Gua44_grp);
        jsCi = tmp[bianindex]
        break;
      case 44:
        tmp = (getApp().globalData.Gua45_grp);
        jsCi = tmp[bianindex]
        break;
      case 45:
        tmp = (getApp().globalData.Gua46_grp);
        jsCi = tmp[bianindex]
        break;
      case 46:
        tmp = (getApp().globalData.Gua47_grp);
        jsCi = tmp[bianindex]
        break;
      case 47:
        tmp = (getApp().globalData.Gua48_grp);
        jsCi = tmp[bianindex]
        break;
      case 48:
        tmp = (getApp().globalData.Gua49_grp);
        jsCi = tmp[bianindex]
        break;
      case 49:
        tmp = (getApp().globalData.Gua50_grp);
        jsCi = tmp[bianindex]
        break;
      case 50:
        tmp = (getApp().globalData.Gua51_grp);
        jsCi = tmp[bianindex]
        break;
      case 51:
        tmp = (getApp().globalData.Gua52_grp);
        jsCi = tmp[bianindex]
        break;
      case 52:
        tmp = (getApp().globalData.Gua53_grp);
        jsCi = tmp[bianindex]
        break;
      case 53:
        tmp = (getApp().globalData.Gua54_grp);
        jsCi = tmp[bianindex]
        break;
      case 54:
        tmp = (getApp().globalData.Gua55_grp);
        jsCi = tmp[bianindex]
        break;
      case 55:
        tmp = (getApp().globalData.Gua56_grp);
        jsCi = tmp[bianindex]
        break;
      case 56:
        tmp = (getApp().globalData.Gua57_grp);
        jsCi = tmp[bianindex]
        break;
      case 57:
        tmp = (getApp().globalData.Gua58_grp);
        jsCi = tmp[bianindex]
        break;
      case 58:
        tmp = (getApp().globalData.Gua59_grp);
        jsCi = tmp[bianindex]
        break;
      case 59:
        tmp = (getApp().globalData.Gua60_grp);
        jsCi = tmp[bianindex]
        break;
      case 60:
        tmp = (getApp().globalData.Gua61_grp);
        jsCi = tmp[bianindex]
        break;
      case 61:
        tmp = (getApp().globalData.Gua62_grp);
        jsCi = tmp[bianindex]
        break;
      case 62:
        tmp = (getApp().globalData.Gua63_grp);
        jsCi = tmp[bianindex]
        break;
      case 63:
        tmp = (getApp().globalData.Gua64_grp);
        jsCi = tmp[bianindex]
        break;

      default:
        break;
    }
    return jsCi;
  },
 

  GetBenBianGua: function (coinList) {
    var gua_grp = getApp().globalData.Gua_grp;
    var bengua = coinList.slice(0, 6);
    var benGuaIndex;
    var bianGuaIndex;
    var biangua;
    var tempGua;
    var dongyao = coinList.slice(6, 12);
    // console.error('ben gua='+coinList.slice(0,6));
    // console.error('dong yao =' + coinList.slice(6, 12));

    for (var i = 0; i < 64; i++) {
      tempGua = gua_grp[i];
      var count = 0;

      // console.error('tempGua = ' + tempGua);
      for (var j = 0; j < 6; j++) {
        if (tempGua[j] == bengua[j]) {
          count = count + 1;
        }
        else {
          break;
        }
      }
      if (count == 6) {
        // chenGua = gua_grp[i];
        benGuaIndex = i;
        // console.error('Gottttttt it!');
        break;
      } else {
        continue;
      }

    }

    biangua = bengua.reverse();// 求变卦前 先翻过来，从下到上
    for (var i = 0; i < 6; i++) {
      if (dongyao[i] > 0) {
        if (biangua[i] == 1)
          biangua[i] = 0;
        else
          biangua[i] = 1;
      }
    }
    biangua = biangua.reverse();// 恢复从上到下
    //  console.error('biangua===' + biangua);

    for (var i = 0; i < 64; i++) {
      tempGua = gua_grp[i];
      var count = 0;

      for (var j = 0; j < 6; j++) {
        if (tempGua[j] == biangua[j]) {
          count = count + 1;
        }
        else {
          break;
        }
      }
      if (count == 6) {

        bianGuaIndex = i;
        //   console.error('Gottttttt it! bianGuaIndex=' + bianGuaIndex);
        break;
      } else {
        continue;
      }
    }

    // console.error('benGuaIndex===' + benGuaIndex);
    var ben_bian_index = [benGuaIndex, bianGuaIndex];
    return ben_bian_index;
  },
 
 
 
 

 
  GetGuaIndex: function (singlegua, guagrp) {

    var index
    //console.error('singlegua is  ' + singlegua)
    for (var i = 0; i < 64; i++) {
      var count = 0
      for (var j = 0; j < 6; j++) {
        if (singlegua[j] == guagrp[i][j]) {
          //console.error('+++ ')
          count++
        } else {
          //console.error('--- ' )
          break;
        }
      }
      if (count == 6) {
        // console.error('i is ' + i)
        //  console.error('guagrp[i] is ' + guagrp[i])
        index = i
        break;
      }
    }

    return index
  },
  GetCZHgua: function (benIndex) {
    var gua_grp = getApp().globalData.Gua_grp;
    var ben = []
    var cuo = []
    var zong = []
    var hu = []
    var cuoIndex, zongIndex, huIndex
    var list = []
    //  console.error('benIndex ' + benIndex)
    //  console.error('ben ' + gua_grp[benIndex])

    ben = gua_grp[benIndex]
    for (var i = 0; i < 6; i++) {
      if (gua_grp[benIndex][i] == 1) {
        cuo[i] = 0

      } else {
        cuo[i] = 1
      }
    }

    //zong = ben.reverse() 巨坑 类型

    zong[0] = ben[5]
    zong[1] = ben[4]
    zong[2] = ben[3]
    zong[3] = ben[2]
    zong[4] = ben[1]
    zong[5] = ben[0]
    // console.error('cuo ' + cuo)

    // console.error('zong ' + zong)

    hu[5] = gua_grp[benIndex][4]
    hu[4] = gua_grp[benIndex][3]
    hu[3] = gua_grp[benIndex][2]
    hu[2] = gua_grp[benIndex][3]
    hu[1] = gua_grp[benIndex][2]
    hu[0] = gua_grp[benIndex][1]
    // hu=hu.reverse()
    // console.error('hu ' + hu)

    cuoIndex = this.GetGuaIndex(cuo, gua_grp)
    zongIndex = this.GetGuaIndex(zong, gua_grp)
    huIndex = this.GetGuaIndex(hu, gua_grp)

    list.push(cuoIndex)
    list.push(zongIndex)
    list.push(huIndex)

    // console.error('list is '+list)
    return list
  },
  showGuaTitle: function (benIndex, bianIndex, cuoIndex, zongIndex, huIndex) {

    var benName = getApp().globalData.GuaTitleSimplest[benIndex]
    var bianName = getApp().globalData.GuaTitleSimplest[bianIndex]

    var cuoName = getApp().globalData.GuaTitleSimplest[cuoIndex]
    var zongName = getApp().globalData.GuaTitleSimplest[zongIndex]
    var huName = getApp().globalData.GuaTitleSimplest[huIndex]

    this.setData({
      benguaTitle: '本卦:' + benName,
      bianguaTitle: '变卦:' + bianName,
      cuoguaTitle: '错卦:' + cuoName,
      zongguaTitle: '综卦:' + zongName,
      huguaTitle: '互卦:' + huName,
    })
  },
  showTime: function (date, yldate, ganzhiDate, xunkong) {


    this.setData({
      QiguaTime: '起卦时间: ' + date,
      Yinli: '农历: ' + yldate,
 
      Ganzhi_Y: ganzhiDate[0] + ganzhiDate[1],
      Ganzhi_M: ganzhiDate[3] + ganzhiDate[4],
      Ganzhi_D: ganzhiDate[6] + ganzhiDate[7],
      Ganzhi_H: ganzhiDate[9] + ganzhiDate[10],
      Ganzhi_xunkong: '(旬空: ' + xunkong + ')'
    })

    this.showShenSha(ganzhiDate[6], ganzhiDate[7])
  },
  DrawCZHgua: function (cuogua, zonggua, hugua, screenWidth) {

    var yao_h = 5
    var yao_gap = 3
    var yangyao_w = (screenWidth * 0.35) * 0.4;
    var yinyao_w = yangyao_w * 0.4;
    var yinyao_gap = yangyao_w * 0.2;
    //var title_y = 15
    var cuo_start_y = 5
 
    var cuo_startX = (screenWidth * 0.35) * 0.4;
    var zong_startX = (screenWidth * 0.35) * 0.4 * 2 + (screenWidth * 0.35) * 0.4
    var hu_startX = (screenWidth * 0.35) * 0.4 * 3 + (screenWidth * 0.35) * 0.4 * 2
    var ctx = wx.createCanvasContext('guatu2')

 
    ctx.setLineWidth(yao_h)
 
    for (var i = 0; i < 6; i++) {
      if (cuogua[i] == 1) { 
        ctx.moveTo(cuo_startX, cuo_start_y + (yao_h + yao_gap) * i)
        ctx.lineTo(cuo_startX + yangyao_w, cuo_start_y + (yao_h + yao_gap) * i)

      } else {
        ctx.moveTo(cuo_startX, cuo_start_y + (yao_h + yao_gap) * i)
        ctx.lineTo(cuo_startX + yinyao_w, cuo_start_y + (yao_h + yao_gap) * i)
        ctx.moveTo(cuo_startX + yinyao_w + yinyao_gap, cuo_start_y + (yao_h + yao_gap) * i)
        ctx.lineTo(cuo_startX + yinyao_w * 2 + yinyao_gap, cuo_start_y + (yao_h + yao_gap) * i)
      }

      if (zonggua[i] == 1) {
        ctx.moveTo(zong_startX, cuo_start_y + (yao_h + yao_gap) * i)
        ctx.lineTo(zong_startX + yangyao_w, cuo_start_y + (yao_h + yao_gap) * i)

      } else {
        ctx.moveTo(zong_startX, cuo_start_y + (yao_h + yao_gap) * i)
        ctx.lineTo(zong_startX + yinyao_w, cuo_start_y + (yao_h + yao_gap) * i)
        ctx.moveTo(zong_startX + yinyao_w + yinyao_gap, cuo_start_y + (yao_h + yao_gap) * i)
        ctx.lineTo(zong_startX + yinyao_w * 2 + yinyao_gap, cuo_start_y + (yao_h + yao_gap) * i)
      }

      if (hugua[i] == 1) {
        ctx.moveTo(hu_startX, cuo_start_y + (yao_h + yao_gap) * i)
        ctx.lineTo(hu_startX + yangyao_w, cuo_start_y + (yao_h + yao_gap) * i)

      } else {
        ctx.moveTo(hu_startX, cuo_start_y + (yao_h + yao_gap) * i)
        ctx.lineTo(hu_startX + yinyao_w, cuo_start_y + (yao_h + yao_gap) * i)
        ctx.moveTo(hu_startX + yinyao_w + yinyao_gap, cuo_start_y + (yao_h + yao_gap) * i)
        ctx.lineTo(hu_startX + yinyao_w * 2 + yinyao_gap, cuo_start_y + (yao_h + yao_gap) * i)
      }
    }
    ctx.stroke()
    ctx.draw()

  },
  DrawGua: function (bengua, biangua, dong,  screenWidth) {
    var yaoName = ['上爻', '五爻', '四爻', '三爻', '二爻', '初爻']
    var LiuQLiuS_startY = 20
   
    var yaoname_startX =0
    var yao_h = 15
    var yao_gap = 6
    var yangyao_w = screenWidth * 0.25;
    var yinyao_w = yangyao_w * 0.4;
    var yinyao_gap = yangyao_w * 0.2;
    var yao1_start_x = screenWidth*0.125;
    var yao1_start_y = 15
    var yao2_start_x = screenWidth * 0.25*2 + screenWidth * 0.125
    var bianyao_startX = screenWidth * 0.25 * 2

    var yao_group = bengua;
 
    var bianyao_grp = [];
    for (var i = 0; i < 6; i++) {
      if (dong[i] < 0)
        bianyao_grp.push('');
      else
        bianyao_grp.push('--->');
    }
    bianyao_grp = bianyao_grp.reverse();

    var ctx = wx.createCanvasContext('guatu')

    ctx.setFontSize(15)

    ctx.setLineWidth(yao_h)

    
   // console.error('bianyao_grp is '+bianyao_grp)
    
    ////////////////////////////////     本卦 & 变卦  //////////////////////////////////

    for (var i = 0; i < 6; ++i) {
      if (bianyao_grp[i]!='')
        ctx.setFillStyle('red')
      else
        ctx.setFillStyle('black')
      ctx.fillText(yaoName[i], yaoname_startX, LiuQLiuS_startY + (yao_h + yao_gap) * i)

     ctx.fillText(bianyao_grp[i], bianyao_startX, LiuQLiuS_startY + (yao_h + yao_gap) * i)
    

      if (bengua[i] == 1) { 
        
        ctx.moveTo(yao1_start_x, yao1_start_y + (yao_h + yao_gap) * i)
      //  ctx.setStrokeStyle('red');
        ctx.lineTo(yao1_start_x + yangyao_w, yao1_start_y + (yao_h + yao_gap) * i)
   //     ctx.strokeRect(yao1_start_x, yao1_start_y+(yao_h + yao_gap) * i, yao1_start_x + yinyao_w, yao1_start_y+(yao_h + yao_gap) * i)
      } else {
        ctx.moveTo(yao1_start_x, yao1_start_y + (yao_h + yao_gap) * i)
        ctx.lineTo(yao1_start_x + yinyao_w, yao1_start_y + (yao_h + yao_gap) * i)
      //  ctx.strokeRect(yao1_start_x, yao1_start_y + (yao_h + yao_gap) * i, yinyao_w, yao1_start_y + (yao_h + yao_gap) * i)
       // ctx.strokeRect(yao1_start_x + yinyao_w + yinyao_gap,yao1_start_y + (yao_h + yao_gap) * i, yinyao_w, yao1_start_y + (yao_h + yao_gap) * i)

        ctx.moveTo(yao1_start_x + yinyao_w + yinyao_gap, yao1_start_y + (yao_h + yao_gap) * i)
        ctx.lineTo(yao1_start_x + yinyao_w * 2 + yinyao_gap, yao1_start_y + (yao_h + yao_gap) * i)
        
      }
      ctx.stroke()
     
      if (biangua[i] == 1) {
       // ctx.setStrokeStyle('black');
        ctx.moveTo(yao2_start_x, yao1_start_y + (yao_h + yao_gap) * i)
      //  ctx.setStrokeStyle('black');
        ctx.lineTo(yao2_start_x + yangyao_w, yao1_start_y + (yao_h + yao_gap) * i)
      

      } else {
        ctx.moveTo(yao2_start_x, yao1_start_y + (yao_h + yao_gap) * i)
        ctx.lineTo(yao2_start_x + yinyao_w, yao1_start_y + (yao_h + yao_gap) * i)
        ctx.moveTo(yao2_start_x + yinyao_w + yinyao_gap, yao1_start_y + (yao_h + yao_gap) * i)
        ctx.lineTo(yao2_start_x + yinyao_w * 2 + yinyao_gap, yao1_start_y + (yao_h + yao_gap) * i)
      }
      
    }
    
    ctx.stroke()
    ctx.draw()


  },
  GetDongFromBenBian: function (benguaindex, bianguaindex) {
    var bengua = getApp().globalData.Gua_grp[benguaindex];
    var biangua = getApp().globalData.Gua_grp[bianguaindex];
    var dlis = [];

    for (var i = 0; i < 6; i++) {
      if (bengua[i] == biangua[i]) {
        dlis.push(-1)
      } else {
        dlis.push(1)
      }
    }
    dlis = dlis.reverse()
    // console.error('yesssssss ' + dlis)

    return dlis
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = util.formatTime(new Date());

    var nyear = date.getFullYear(); // tst here
    var nmonth = date.getMonth() + 1;
    var nday = date.getDate();

    this.setData(
      {
        Today:  nyear + " 年" + nmonth + " 月 " + nday + " 日 ",
      }
    )

    var gua_grp = getApp().globalData.Gua_grp;


    var myGuaView_width;
    var myGuaView_heigt;
    wx.getSystemInfo({
      success: function (res) {
        myGuaView_width = res.windowWidth
        myGuaView_heigt = res.windowHeight
      }
    })
    var myCanvasWidth = myGuaView_width;
    
    var myCanvasHeight2 = myCanvasWidth / 6
    this.setData({
      GuaView_width: myGuaView_width,
    
      guatu2_height: myCanvasHeight2,
    })
   
    var gua_index = []
    var donglist
  
     {
      //console.error('options.list='+options.defaultGua)
      if (options.xuanguaFlag == '0') {
        var dongY = []
        var list = []
        for (var i = 0; i < 6; i++) {
          if (options.defaultGua[i] == '0') {
            list.push('1');
            dongY.push(-1)
          } else if (options.defaultGua[i] == '1') {
            list.push('1');
            dongY.push(1)
          } else if (options.defaultGua[i] == '2') {
            list.push('0');
            dongY.push(-1)
          } else if (options.defaultGua[i] == '3') {
            list.push('0');
            dongY.push(1)
          }
        }
        dongY = dongY.reverse()
        list = list.concat(dongY)
        gua_index = this.GetBenBianGua(list);
        donglist = list.slice(6, 12)
      }
      else //if (options.xuanguaFlag=='1')
      {
    
        gua_index[0] = parseInt(options.benIndex)
        gua_index[1] = parseInt(options.bianIndex)
        donglist = this.GetDongFromBenBian(gua_index[0], gua_index[1])
      }
      //     console.error('list.concat(dongY)=' + list)
    }



    //var paipanFlag = options.ppflag;
   // var flag = this.GetPaiPanFlag(options.dateIndex, options.xiadong_day, options.qigua_flag, paipanFlag)

   // var benLiuqin = this.GetLiuQin(gua_index[0], flag);
  //  var liuqin_tmp = this.GetLiuQin(gua_index[1], flag);
    
  //  var benShiying = this.GetShiYing(gua_index[0])
  //  var bianShiying = this.GetShiYing(gua_index[1])
    

   // this.showTime(options.dateIndex, options.YLymd, options.ganzhiGrp, xunkong);


    this.DrawGua(gua_grp[gua_index[0]], gua_grp[gua_index[1]], donglist,   myCanvasWidth);

    var gualistName = this.GetCZHgua(gua_index[0])

    this.showGuaTitle(gua_index[0], gua_index[1], gualistName[0], gualistName[1], gualistName[2]);

    this.DrawCZHgua(gua_grp[gualistName[0]], gua_grp[gualistName[1]], gua_grp[gualistName[2]], myCanvasWidth);


    //this.showGuaShiShen(gua_index[0])

    //this.showFushen(gua_index[0], flag, paipanFlag)

    var temp_gua_id = gua_index[0];
    var temp_gua_id2 = gua_index[1];
    this.setData({
      gua_title: getApp().globalData.Gua_title_str[temp_gua_id],
      gua_daxiang: getApp().globalData.Gua_daxiang_str[temp_gua_id],

      guayao_1: getApp().globalData.GuaYao1_str[temp_gua_id],
      guayao_2: getApp().globalData.GuaYao2_str[temp_gua_id],
      guayao_3: getApp().globalData.GuaYao3_str[temp_gua_id],
      guayao_4: getApp().globalData.GuaYao4_str[temp_gua_id],
      guayao_5: getApp().globalData.GuaYao5_str[temp_gua_id],
      guayao_6: getApp().globalData.GuaYao6_str[temp_gua_id],
      yong_96: getApp().globalData.Yong96_str[temp_gua_id],

      gua_tuan: getApp().globalData.Gua_tuan_str[temp_gua_id],
      gua_xiang: getApp().globalData.Gua_xiaoxiang_str[temp_gua_id],


    })
    if (temp_gua_id != temp_gua_id2) {
      this.setData({
        /////////////////////////     变卦      /////////////////////////////////
        gua_title_2: getApp().globalData.Gua_title_str[temp_gua_id2],
        gua_daxiang_2: getApp().globalData.Gua_daxiang_str[temp_gua_id2],

        guayao_1_2: getApp().globalData.GuaYao1_str[temp_gua_id2],
        guayao_2_2: getApp().globalData.GuaYao2_str[temp_gua_id2],
        guayao_3_2: getApp().globalData.GuaYao3_str[temp_gua_id2],
        guayao_4_2: getApp().globalData.GuaYao4_str[temp_gua_id2],
        guayao_5_2: getApp().globalData.GuaYao5_str[temp_gua_id2],
        guayao_6_2: getApp().globalData.GuaYao6_str[temp_gua_id2],
        yong_96_2: getApp().globalData.Yong96_str[temp_gua_id2],

        gua_tuan_2: getApp().globalData.Gua_tuan_str[temp_gua_id2],
        gua_xiang_2: getApp().globalData.Gua_xiaoxiang_str[temp_gua_id2],
      })
    }
    var jiaoshiyici = this.GetJiaoShiyi(gua_index[0], gua_index[1])
    this.setData({
      JiaoShiYiCi: jiaoshiyici
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