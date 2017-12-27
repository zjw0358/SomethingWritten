// pages/Gua64/Gua64.js


Page({

  /**
   * 页面的初始数据
   */

  data: {
    gua_title: '',
    gua_daxiang: '',
    guayao_1: '',
    guayao_2: '',
    guayao_3: '',
    guayao_4: '',
    guayao_5: '',
    guayao_6: '',
    yong_96: '',
    gua_tuan: '',
    gua_xiang: '',
    /*
  gua_title:'default_gua_title',
  gua_daxiang:'default_gua_daxiang',
  guayao_1:'default_guayao1',
  guayao_2: 'default_guayao2',
  guayao_3: 'default_guayao3',
  guayao_4: 'default_guayao4',
  guayao_5: 'default_guayao5',
  guayao_6: 'default_guayao6',
  yong_96:  'default_yong96',
  gua_tuan: 'default_gua_tuan',
  gua_xiang: 'default_gua_xiang',
*/
  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var gua_grp = getApp().globalData.Gua_grp; 
    

    this.setData({
      gua_title: getApp().globalData.Gua_title_str[options.index],
      gua_daxiang: getApp().globalData.Gua_daxiang_str[options.index],

      guayao_1: getApp().globalData.GuaYao1_str[options.index],
      guayao_2: getApp().globalData.GuaYao2_str[options.index],
      guayao_3: getApp().globalData.GuaYao3_str[options.index],
      guayao_4: getApp().globalData.GuaYao4_str[options.index],
      guayao_5: getApp().globalData.GuaYao5_str[options.index],
      guayao_6: getApp().globalData.GuaYao6_str[options.index],
      yong_96: getApp().globalData.Yong96_str[options.index],

      gua_tuan: getApp().globalData.Gua_tuan_str[options.index],
      gua_xiang: getApp().globalData.Gua_xiaoxiang_str[options.index],

      
    });
    
     if (options.value==null)
    {
    
    }else{
       if (options.value=='1'){
         this.setData({
           yao1_color: 'red'
         });
       } else if (options.value == '2'){
         this.setData({
           yao2_color: 'red'
         });
       } else if (options.value == '3'){
         this.setData({
           yao3_color: 'red'
         });
       } else if (options.value == '4'){
         this.setData({
           yao4_color: 'red'
         });
       } else if (options.value == '5'){
         this.setData({
           yao5_color: 'red'
         });
       } else if (options.value == '6'){
         this.setData({
           yao6_color: 'red'
         });
       }
       
    }

  
  var yao_h = 25
  var yao_gap = 6
  var yangyao_w = 180
  var yinyao_w = 70
  var yinyao_gap = 40
  var yao1_start_x = 10
  var yao1_start_y = 10

  var j = options.index
  var yao_group = gua_grp[j]

  var context = wx.createCanvasContext('guatu')
  context.setLineWidth(yao_h)
  context.beginPath()

  for (var i = 0; i < 6; ++i) {
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
   
      
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