// pages/JiaoShiYi2/JiaoShiYi2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    YiLinCiTitle:"本卦名",
    BenGuaId:"0",
    BenGuaTitle:"",
    BianGuaId:"0",
  },
  JiaoSYCi1: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=1&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=乾',
    })
  },
  JiaoSYCi2: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=2&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=坤',
    })
  },
  JiaoSYCi3: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=3&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=屯',
    })
  },
  JiaoSYCi4: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=4&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=蒙',
    })
  },
  JiaoSYCi5: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=5&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=需',
    })
  },
  JiaoSYCi6: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=6&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=讼',
    })
  },
  JiaoSYCi7: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=7&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=师',
    })
  },
  JiaoSYCi8: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=8&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=比',
    })
  },
  JiaoSYCi9: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=9&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=小蓄',
    })
  },
  JiaoSYCi10: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=10&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=履',
    })
  },
  JiaoSYCi11: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=11&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=泰',
    })
  },
  JiaoSYCi12: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=12&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=否',
    })
  },
  JiaoSYCi13: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=13&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=同人',
    })
  },
  JiaoSYCi14: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=14&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=大有',
    })
  },
  JiaoSYCi15: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=15&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=谦',
    })
  },
  JiaoSYCi16: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=16&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=豫',
    })
  },
  JiaoSYCi17: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=17&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=随',
    })
  },
  JiaoSYCi18: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=18&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=蛊',
    })
  },
  JiaoSYCi19: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=19&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=临',
    })
  },
  JiaoSYCi20: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=20&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=观',
    })
  },
  JiaoSYCi21: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=21&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=噬嗑',
    })
  },
  JiaoSYCi22: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=22&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=贲',
    })
  },
  JiaoSYCi23: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=23&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=剥',
    })
  },
  JiaoSYCi24: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=24&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=复',
    })
  },
  JiaoSYCi25: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=25&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=无妄',
    })
  },
  JiaoSYCi26: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=26&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=大蓄',
    })
  },
  JiaoSYCi27: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=27&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=颐',
    })
  },
  JiaoSYCi28: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=28&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=大过',
    })
  },
  JiaoSYCi29: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=29&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=坎',
    })
  },
  JiaoSYCi30: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=30&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=离',
    })
  },
  JiaoSYCi31: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=31&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=咸',
    })
  },
  JiaoSYCi32: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=32&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=恒',
    })
  },
  JiaoSYCi33: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=33&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=遁',
    })
  },
  JiaoSYCi34: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=34&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=大壮',
    })
  },
  JiaoSYCi35: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=35&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=晋',
    })
  },
  JiaoSYCi36: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=36&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=明夷',
    })
  },
  JiaoSYCi37: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=37&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=家人',
    })
  },
  JiaoSYCi38: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=38&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=睽',
    })
  },
  JiaoSYCi39: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=39&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=蹇',
    })
  },
  JiaoSYCi40: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=40&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=解',
    })
  },
  JiaoSYCi41: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=41&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=损',
    })
  },
  JiaoSYCi42: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=42&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=益',
    })
  },
  JiaoSYCi43: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=43&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=夬',
    })
  },
  JiaoSYCi44: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=44&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=姤',
    })
  },
  JiaoSYCi45: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=45&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=萃',
    })
  },
  JiaoSYCi46: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=46&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=升',
    })
  },
  JiaoSYCi47: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=47&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=困',
    })
  },
  JiaoSYCi48: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=48&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=井',
    })
  },
  JiaoSYCi49: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=49&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=革',
    })
  },
  JiaoSYCi50: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=50&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=鼎',
    })
  },
  JiaoSYCi51: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=51&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=震',
    })
  },
  JiaoSYCi52: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=52&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=艮',
    })
  },
  JiaoSYCi53: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=53&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=渐',
    })
  },
  JiaoSYCi54: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=54&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=归妹',
    })
  },
  JiaoSYCi55: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=55&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=丰',
    })
  },
  JiaoSYCi56: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=56&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=旅',
    })
  },
  JiaoSYCi57: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=57&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=巽',
    })
  },
  JiaoSYCi58: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=58&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=兑',
    })
  },
  JiaoSYCi59: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=59&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=涣',
    })
  },
  JiaoSYCi60: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=60&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=节',
    })
  },
  JiaoSYCi61: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=61&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=中孚',
    })
  },
  JiaoSYCi62: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=62&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=小过',
    })
  },
  JiaoSYCi63: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=63&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=既济',
    })
  },
  JiaoSYCi64: function () {
    wx.navigateTo({
      url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=64&YiLinIndex=' + this.data.BenGuaId + '&BenGuaTitle=' + this.data.BenGuaTitle + '&BianGuaId=未济',
    })
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      YLCTitle_color: 'red'
    });

    if (options.YiLinIndex==null)
  {
    console.error('error here')
  }else{
      //console.error(options.YiLinIndex)
      switch (options.YiLinIndex)
    {
    case '1':
      this.setData({ YiLinCiTitle: "乾之" })
      this.setData({BenGuaId:'1'})
      break;
    case '2':
      this.setData({ YiLinCiTitle: "坤之" })
      this.setData({ BenGuaId: '2' })
      break;
    case '3':
      this.setData({ YiLinCiTitle: "屯之" })
      this.setData({ BenGuaId: '3' })
      break;
    case '4':
      this.setData({ YiLinCiTitle: "蒙之" })
      this.setData({ BenGuaId: '4' })
      break;
    case '5':
      this.setData({ YiLinCiTitle: "需之" })
      this.setData({ BenGuaId: '5' })
      break;
    case '6':
      this.setData({ YiLinCiTitle: "讼之" })
      this.setData({ BenGuaId: '6' })
      break;
    case '7':
      this.setData({ YiLinCiTitle: "师之" })
      this.setData({ BenGuaId: '7' })
      break;
    case '8':
      this.setData({ YiLinCiTitle: "比之" })
      this.setData({ BenGuaId: '8' })
      break;
    case '9':
      this.setData({ YiLinCiTitle: "小蓄之" })
      this.setData({ BenGuaId: '9' })
      break;
    case '10':
      this.setData({ YiLinCiTitle: "履之" })
      this.setData({ BenGuaId: '10' })
      break;
    case '11':
      this.setData({ YiLinCiTitle: "泰之" })
      this.setData({ BenGuaId: '11' })
      break;
    case '12':
      this.setData({ YiLinCiTitle: "否之" })
      this.setData({ BenGuaId: '12' })
      break;
    case '13':
      this.setData({ YiLinCiTitle: "同人之" })
      this.setData({ BenGuaId: '13' })
      break;
    case '14':
      this.setData({ YiLinCiTitle: "大有之" })
      this.setData({ BenGuaId: '14' })
      break;
    case '15':
      this.setData({ YiLinCiTitle: "谦之" })
      this.setData({ BenGuaId: '15' })
      break;
    case '16':
      this.setData({ YiLinCiTitle: "豫之" })
      this.setData({ BenGuaId: '16' })
      break;
    case '17':
      this.setData({ YiLinCiTitle: "随之" })
      this.setData({ BenGuaId: '17' })
      break;
    case '18':
      this.setData({ YiLinCiTitle: "蛊之" })
      this.setData({ BenGuaId: '18' })
      break;
    case '19':
      this.setData({ YiLinCiTitle: "临之" })
      this.setData({ BenGuaId: '19' })
      break;
    case '20':
      this.setData({ YiLinCiTitle: "观之" })
      this.setData({ BenGuaId: '20' })
      break;
    case '21':
      this.setData({ YiLinCiTitle: "噬嗑之" })
      this.setData({ BenGuaId: '21' })
      break;
    case '22':
      this.setData({ YiLinCiTitle: "贲之" })
      this.setData({ BenGuaId: '22' })
      break;
    case '23':
      this.setData({ YiLinCiTitle: "剥之" })
      this.setData({ BenGuaId: '23' })
      break;
    case '24':
      this.setData({ YiLinCiTitle: "复之" })
      this.setData({ BenGuaId: '24' })
      break;
    case '25':
      this.setData({ YiLinCiTitle: "无妄之" })
      this.setData({ BenGuaId: '25' })
      break;
    case '26':
      this.setData({ YiLinCiTitle: "大蓄之" })
      this.setData({ BenGuaId: '26' })
      break;
    case '27':
      this.setData({ YiLinCiTitle: "颐之" })
      this.setData({ BenGuaId: '27' })
      break;
    case '28':
      this.setData({ YiLinCiTitle: "大过之" })
      this.setData({ BenGuaId: '28' })
      break;
    case '29':
      this.setData({ YiLinCiTitle: "坎之" })
      this.setData({ BenGuaId: '29' })
      break;
    case '30':
      this.setData({ YiLinCiTitle: "离之" })
      this.setData({ BenGuaId: '30' })
      break;
    case '31':
      this.setData({ YiLinCiTitle: "咸之" })
      this.setData({ BenGuaId: '31' })
      break;
    case '32':
      this.setData({ YiLinCiTitle: "恒之" })
      this.setData({ BenGuaId: '32' })
      break;
    case '33':
      this.setData({ YiLinCiTitle: "遁之" })
      this.setData({ BenGuaId: '33' })
      break;
    case '34':
      this.setData({ YiLinCiTitle: "大壮之" })
      this.setData({ BenGuaId: '34' })
      break;
    case '35':
      this.setData({ YiLinCiTitle: "晋之" })
      this.setData({ BenGuaId: '35' })
      break;
    case '36':
      this.setData({ YiLinCiTitle: "明夷之" })
      this.setData({ BenGuaId: '36' })
      break;
    case '37':
      this.setData({ YiLinCiTitle: "家人之" })
      this.setData({ BenGuaId: '37' })
      break;
    case '38':
      this.setData({ YiLinCiTitle: "睽之" })
      this.setData({ BenGuaId: '38' })
      break;
    case '39':
      this.setData({ YiLinCiTitle: "蹇之" })
      this.setData({ BenGuaId: '39' })
      break;
    case '40':
      this.setData({ YiLinCiTitle: "解之" })
      this.setData({ BenGuaId: '40' })
      break;
    case '41':
      this.setData({ YiLinCiTitle: "损之" })
      this.setData({ BenGuaId: '41' })
      break;
    case '42':
      this.setData({ YiLinCiTitle: "益之" })
      this.setData({ BenGuaId: '42' })
      break;
    case '43':
      this.setData({ YiLinCiTitle: "夬之" })
      this.setData({ BenGuaId: '43' })
      break;
    case '44':
      this.setData({ YiLinCiTitle: "姤之" })
      this.setData({ BenGuaId: '44' })
      break;
    case '45':
      this.setData({ YiLinCiTitle: "萃之" })
      this.setData({ BenGuaId: '45' })
      break;
    case '46':
      this.setData({ YiLinCiTitle: "升之" })
      this.setData({ BenGuaId: '46' })
      break;
    case '47':
      this.setData({ YiLinCiTitle: "困之" })
      this.setData({ BenGuaId: '47' })
      break;
    case '48':
      this.setData({ YiLinCiTitle: "井之" })
      this.setData({ BenGuaId: '48' })
      break;
    case '49':
      this.setData({ YiLinCiTitle: "革之" })
      this.setData({ BenGuaId: '49' })
      break;
    case '50':
      this.setData({ YiLinCiTitle: "鼎之" })
      this.setData({ BenGuaId: '50' })
      break;
    case '51':
      this.setData({ YiLinCiTitle: "震之" })
      this.setData({ BenGuaId: '51' })
      break;
    case '52':
      this.setData({ YiLinCiTitle: "艮之" })
      this.setData({ BenGuaId: '52' })
      break;
    case '53':
      this.setData({ YiLinCiTitle: "渐之" })
      this.setData({ BenGuaId: '53' })
      break;
    case '54':
      this.setData({ YiLinCiTitle: "归妹之" })
      this.setData({ BenGuaId: '54' })
      break;
    case '55':
      this.setData({ YiLinCiTitle: "丰之" })
      this.setData({ BenGuaId: '55' })
      break;
    case '56':
      this.setData({ YiLinCiTitle: "旅之" })
      this.setData({ BenGuaId: '56' })
      break;
    case '57':
      this.setData({ YiLinCiTitle: "巽之" })
      this.setData({ BenGuaId: '57' })
      break;
    case '58':
      this.setData({ YiLinCiTitle: "兑之" })
      this.setData({ BenGuaId: '58' })
      break;
    case '59':
      this.setData({ YiLinCiTitle: "涣之" })
      this.setData({ BenGuaId: '59' })
      break;
    case '60':
      this.setData({ YiLinCiTitle: "节之" })
      this.setData({ BenGuaId: '60' })
      break;
    case '61':
      this.setData({ YiLinCiTitle: "中孚之" })
      this.setData({ BenGuaId: '61' })
      break;
    case '62':
      this.setData({ YiLinCiTitle: "小过之" })
      this.setData({ BenGuaId: '62' })
      break;
    case '63':
      this.setData({ YiLinCiTitle: "既济之" })
      this.setData({ BenGuaId: '63' })
      break;
    case '64':
      this.setData({ YiLinCiTitle: "未济之" })
      this.setData({ BenGuaId: '64' })
      break;
  default:
        console.error('not in 64')
    break;
    }
      this.setData({ BenGuaTitle: this.data.YiLinCiTitle })    
  }

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