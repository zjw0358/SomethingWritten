//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  GoToPreface: function() {
    wx.navigateTo({
      url: '../preface/preface'
    })
  },

  GoToYiJing1: function () {
    wx.navigateTo({
      url: '../YiJing/YiJing1'
    })
  },

  GoToYiJing2: function () {
    wx.navigateTo({
      url: '../YiJing/YiJing2'
    })
  },

  GoToWenYan1: function () {
    wx.navigateTo({
      url: '../WenYanXuGua/WenYan1'
    })
  },
  GoToWenYan2: function () {
    wx.navigateTo({
      url: '../WenYanXuGua/WenYan2'
    })
  },
  /*
  GoToXiCi: function () {
    wx.navigateTo({
      url: '../XiCi/XiCi'
    })
  },
  
  GoToWenYan_XuGua: function () {
    wx.navigateTo({
      url: '../WenYanXuGua/WenYanXuGua'
    })
  },
*/
  GoToXiCi1: function () {
    wx.navigateTo({
      url: '../XiCi1/XiCi1'
    })
  },
  GoToXiCi2: function () {
    wx.navigateTo({
      url: '../XiCi2/XiCi2'
    })
  },

  GoToXuGua1: function () {
    wx.navigateTo({
      url: '../WenYanXuGua/XuGua1'
    })
  },
  GoToXuGua2: function () {
    wx.navigateTo({
      url: '../WenYanXuGua/XuGua2'
    })
  },

  GoToShuoGua: function () {
    wx.navigateTo({
      url: '../ShuoGua/ShuoGua'
    })
  },
  GoToZaGua: function () {
    wx.navigateTo({
      url: '../ZaGua/ZaGua'
    })
  },

  GoToZHAN:function(){
    wx.navigateTo({
      url: '../Zhan/Zhan'
    })
  },
  GoToPRE:function(){
    wx.navigateTo({
      url: '../Pres/Pres'
    })
  },
  GoToJiaoShiYi: function () {
    wx.navigateTo({
      url: '../JiaoShiYi/JiaoShiYi'
    })
  },

  GoToNajia: function () {
    wx.navigateTo({
      url: '../Najia/Najia'
    })
  },

  GoToDaShang: function () {
    wx.navigateTo({
      url: '../dashang/dashang'
    })
  },
  onLoad: function () {
    /*
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    */
  }
  
})
