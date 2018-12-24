// pages/Najia/NajiaSimple.js
var util = require('../../utils/util.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {

    ShiChenArrayNum: ['23:00-01:00', '01:00-03:00', '03:00-05:00', '05:00-07:00', '07:00-09:00', '09:00-11:00', '11:00-13:00', '13:00-15:00', '15:00-17:00', '17:00-19:00', '19:00-21:00', '21:00-23:00'],
    Yao1Range: ['少阳 ---', '太阳 --- O', '少阴 - -', '太阴 - - X'],
    Yao2Range: ['少阳 ---', '太阳 --- O', '少阴 - -', '太阴 - - X'],
    Yao3Range: ['少阳 ---', '太阳 --- O', '少阴 - -', '太阴 - - X'],
    Yao4Range: ['少阳 ---', '太阳 --- O', '少阴 - -', '太阴 - - X'],
    Yao5Range: ['少阳 ---', '太阳 --- O', '少阴 - -', '太阴 - - X'],
    Yao6Range: ['少阳 ---', '太阳 --- O', '少阴 - -', '太阴 - - X'],
    y1Index: '0', y2Index: '0', y3Index: '0', y4Index: '0', y5Index: '0', y6Index: '0',
    index: '0',
    date: null,

    style1: '传统纳甲',
    style2: '《易冒》版纳甲',
    stlye_value: '1',
    style_1: '按爻选择',
    style_2: '按本卦、变卦选择',
    style_3: '按上、下八卦选择',
    qigua_style: 'yao6',
    GuaRange: [
      '乾', '坤', '屯', '蒙', '需', '讼', '师', '比',
      '小畜', '履', '泰', '否', '同人', '大有', '谦', '豫',
      '随', '蛊', '临', '观', '噬嗑', '贲', '剥', '复',
      '无妄', '大畜', '颐', '大过', '坎',
      '离', '咸', '恒',
      '遁', '大壮', '晋', '明夷', '家人', '睽', '蹇', '解',
      '损', '益', '夬', '姤', '萃', '升', '困', '井',
      '革', '鼎', '震', '艮', '渐', '归妹', '丰', '旅',
      '巽', '兑', '涣', '节', '中孚', '小过', '既济', '未济'
    ],
    BaGuaRange: ['乾', '兑', '离', '震', '巽', '坎', '艮', '坤'],
    benguaIndex: '0',
    bianguaIndex: '0',
    benupIndex: '0',
    bendownIndex: '0',
    bianupIndex: '0',
    biandownIndex: '0',
  },
  bindPickerBenUp: function (e) {
    //   console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      benupIndex: e.detail.value,
    })
  },
  bindPickerBenDown: function (e) {
    //  console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      bendownIndex: e.detail.value,
    })
  },
  bindPickerBianUp: function (e) {
    //  console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      bianupIndex: e.detail.value,
    })
  },
  bindPickerBianDown: function (e) {
    //  console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      biandownIndex: e.detail.value,
    })
  },
  bindPickerBen: function (e) {
    // console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      benguaIndex: e.detail.value,
    })
  },
  bindPickerBian: function (e) {
    //  console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      bianguaIndex: e.detail.value,
    })
  },
  bindPickerYao6: function (e) {
    // console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      y6Index: e.detail.value,
    })

  },
  bindPickerYao5: function (e) {
    //  console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      y5Index: e.detail.value,
    })

  },
  bindPickerYao4: function (e) {
    //console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      y4Index: e.detail.value,
    })

  },
  bindPickerYao3: function (e) {
    //console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      y3Index: e.detail.value,
    })

  },
  bindPickerYao2: function (e) {
    //console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      y2Index: e.detail.value,
    })

  },
  bindPickerYao1: function (e) {
    //console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      y1Index: e.detail.value,
    })

  },


  bindPickerChange: function (e) {
    //  console.error('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
    })
  },

  bindDateChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)

    this.setData({
      date: e.detail.value
    })
    //  console.error('index=' + e.detail.value[8] + e.detail.value[9] )
  },
  NJStyle_radioChange: function (e) {
    // console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      stlye_value: e.detail.value
    })
  },
  NJxuangua_radioChange: function (e) {
    //  console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      qigua_style: e.detail.value
    })
  },
  GetqiguaStyle: function () {
    var style;
    if (this.data.qigua_style == 'yao6')
      style = 0
    else if (this.data.qigua_style == 'benbian')
      style = 1
    else
      style = 2

    return style
  },
  Transform2list: function (baguaindex) {
    var bagualist
    switch (baguaindex) {
      case '0':
        bagualist = new Array(1, 1, 1)
        break;
      case '1':
        bagualist = new Array(0, 1, 1)
        break;
      case '2':
        bagualist = new Array(1, 0, 1)
        break;
      case '3':
        bagualist = new Array(0, 0, 1)
        break;
      case '4':
        bagualist = new Array(1, 1, 0)
        break;
      case '5':
        bagualist = new Array(0, 1, 0)
        break;
      case '6':
        bagualist = new Array(1, 0, 0)
        break;
      case '7':
        bagualist = new Array(0, 0, 0)
        break;
      default:
        break;
    }
    //  console.error('bagualist is ' + bagualist)
    return bagualist
  },

  GetBenBianIndex: function (benup, bendown, bianup, biandown) {
    var indexlist = []
    var uplist1 = this.Transform2list(benup)
    var downlist1 = this.Transform2list(bendown)
    var uplist2 = this.Transform2list(bianup)
    var downlist2 = this.Transform2list(biandown)

    var ben = uplist1.concat(downlist1)
    var bian = uplist2.concat(downlist2)
    //  console.error('ben is ' + ben )
    //  console.error('bian is ' + bian)
    //  console.error('bian is ' + typeof(bian))
    var gua_grp = getApp().globalData.Gua_grp;
    var benindex = this.GetGuaIndex(ben, gua_grp)
    var bianindex = this.GetGuaIndex(bian, gua_grp)
    //  console.error('benindex bianindex is ' + benindex+' '+bianindex)
    indexlist.push(benindex, bianindex)
    return indexlist
  },
  GetGuaIndex: function (singlegua, guagrp) {
    var index
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
        index = i
        break;
      }
    }
    return index
  },

  GoToPaiPanSimple:function(){
    
    
    var qgstyle = this.GetqiguaStyle()
    //  console.error('StrShiGan============' + qgstyle);

    if (qgstyle == 1) {
      var index1 = this.data.benguaIndex
      var index2 = this.data.bianguaIndex
      // console.error('StrShiGan============' + index1 +' '+ index2);
    }
    else {
      var benbianlist = this.GetBenBianIndex(this.data.benupIndex, this.data.bendownIndex, this.data.bianupIndex, this.data.biandownIndex)

      var index1 = benbianlist[0]
      var index2 = benbianlist[1]
      //  console.error('!!!!!!!!!!' + index1 + ' ' + index2);
    }



    if (qgstyle == 0) {
      var default_gua = this.data.y6Index + this.data.y5Index + this.data.y4Index + this.data.y3Index + this.data.y2Index + this.data.y1Index;

      wx.navigateTo({
        url: '../Najia/NajiaSimpleResult?&defaultGua=' + default_gua + '&xuanguaFlag=' + qgstyle
      })
   //   console.error('here is ' + default_gua)
    }
    else //if (qgstyle == 1)  or qgstyle == 2
    {
      wx.navigateTo({
        url: '../Najia/NajiaSimpleResult?&benIndex=' + index1 + '&bianIndex=' + index2 + '&xuanguaFlag=' + qgstyle
      })
    //  console.error('else is ' + index1 + ' ' + index2)
    }



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