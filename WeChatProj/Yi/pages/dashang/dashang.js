// pages/dashang/dashang.js
var app = getApp() 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '../../resources/shou.jpg',
    //imglist: ['http://127.0.0.1/image/bobo.jpg']
    show: "",  
  },
  imageError: function (e) {
    console.log('shoukuan_iamge发生error事件，携带值为', e.detail.errMsg)
  },


  GotoDashang: function (e){
/*   wx.previewImage({
     current:this.data.src,
     urls: this.data.imglist
   })*/
    wx.requestPayment({
      "timeStamp": "",
      "nonceStr": "",
      "package": "",
      "signType": "MD5",
      "paySign": "",
      "success": function (res) {
      },
      "fail": function (res) {
      }
    })
  },

  click:function(){

var that = this;
var show;

  wx.scanCode({
  success:(res)=>{
    this.show = "--result:" + res.result + "--scanType:" + res.scanType + "--charSet:" + res.charSet + "--path:" + res.path;  
    that.setData({
      show: this.show  
    })
  }
})
  
  wx.showToast({
    title: '成功',
    icon: 'success',
    duration: 2000
  })
  
  fail: (res) => {
    wx.showToast({
      title: '失败',
      icon: 'success',
      duration: 2000
    })
  }

  complete: (res) => {
  }  
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData(
        { shoukuan_pic:'aspectFit'}
    )
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