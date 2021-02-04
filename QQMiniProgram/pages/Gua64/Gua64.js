// pages/Gua64/Gua64.js
/*
var touchDot = 0;
var touchDotY = 0;

var gYiJingIndex = "";
var gYiJingIndexNext = "";
var gFromZhanFlag = 'false';
*/
Page({

  /**
   * 页面的初始数据
   */

  data: {
    // lastX: 0,          //滑动开始x轴位置
    // lastY: 0,          //滑动开始y轴位置
    // text: "没有滑动",


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
    
  //  console.error('onLoad')
    var myCanvasWidth;
    wx.getSystemInfo({
      success: function (res) {
        myCanvasWidth = res.windowWidth
        // myCanvasHeight = res.windowHeight
        //console.error('myCanvasWidth ' + res.windowHeight)
      }
    })

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

      canvasWidth: myCanvasWidth, 
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
  var yangyao_w = myCanvasWidth/3;  //180
    var yinyao_w = (myCanvasWidth/3)*0.4;  //70
    var yinyao_gap = (myCanvasWidth/3)*0.2; //40
    var yao1_start_x = myCanvasWidth / 3
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

    /*
    if (options.FromZhanPage=='true')
    { 
      gFromZhanFlag = options.FromZhanPage
    }
   // console.log('FromZhanPage is :' + gFromZhanFlag);
    
    gYiJingIndex = options.index
    */
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  /*
    flag_hd = true;
    clearInterval(interval);
    time = 0;
    */
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
  /*
  guaPagesMove: function (event) {
         var currentX = event.touches[0].pageX
         var currentY = event.touches[0].pageY
         var tx = currentX - this.data.lastX
         var ty = currentY - this.data.lastY
         var text = ""
         //左右方向滑动
         if (Math.abs(tx) > Math.abs(ty)) {
             if (tx < 0)
                 text = "向左滑动"
             else if (tx > 0)
               text = "向右滑动"
    
  } //上下方向滑动
     else {
           if (ty < 0)
         text = "向上滑动"
       else if (ty > 0)
         text = "向下滑动"
     }
 
     //将当前坐标进行保存以进行下一次计算
     this.data.lastX = currentX
     this.data.lastY = currentY

     this.setData({
           text: text,
         });
     },
   
   //滑动开始事件
  guaPagesTPstart: function (event) {
         this.data.lastX = event.touches[0].pageX
         this.data.lastY = event.touches[0].pageY
         touchDot = event.touches[0].pageX
         touchDotY = event.touches[0].pageY
      //   console.log('guaPagesTPstart lastX:' + event.touches[0].pageX)
      //   console.log('guaPagesTPstart lastY:' + event.touches[0].pageY)
  },
     //滑动结束事件
   guaPagesTPend: function (event) {
         

      //   console.log('guaPagesTPend lastX:' + event.changedTouches[0].pageX)
      //   console.log('guaPagesTPend lastY:' + event.changedTouches[0].pageY)
    
   if ((event.changedTouches[0].pageX - touchDot <= -40) && 
      ((event.changedTouches[0].pageY - touchDotY < 20 ) ||
      (event.changedTouches[0].pageY - touchDotY < -20) 
      ))
         {
       //    console.error('left') 
           wx.showToast({
             title: '加载中',
             icon: 'loading',
             duration: 10000
           })
           setTimeout(function () {
             wx.hideToast()
           }, 2000)

     if (gYiJingIndex == 63) {
       gYiJingIndexNext = 0
       //console.log('gYiJingIndexNext:' + gYiJingIndex);
     } else {

       gYiJingIndexNext = parseInt(gYiJingIndex) + 1
       //console.log('gYiJingIndexNext:' + gYiJingIndex);
     } 

           wx.redirectTo({
             url: '../Gua64/Gua64?index=' + gYiJingIndexNext
           })
         } else if ((event.changedTouches[0].pageX - touchDot >= 40) &&
         (( event.changedTouches[0].pageY - touchDotY < 20)||
          (event.changedTouches[0].pageY - touchDotY < -20) 
          ))
         {
         //  console.error('right')
           wx.showToast({
             title: '加载中',
             icon: 'loading',
             duration: 10000
           })
           setTimeout(function () {
             wx.hideToast()
           }, 2000)

          if (gYiJingIndex != 0) {
            gYiJingIndexNext = parseInt(gYiJingIndex) - 1
        //    console.log('gYiJingIndex_2:' + gYiJingIndex);
          } else {

            gYiJingIndexNext = 63
          }
           wx.redirectTo({
             url: '../Gua64/Gua64?index=' + gYiJingIndexNext
           })
         }
        
         
  },
*/   


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