// pages/XiCi2_detail/XiCi2_detail.js
var gChapter='';

var time = 0;
var touchDot = 0;
var touchDotY = 0;
var interval = "";
var flag_hd = true;

var gChapterIndex = "";
var gChapterIndexNext = "";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gChapter:1
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    switch (options.chapter)
    {
      case '1':
        wx.setNavigationBarTitle({
          title: '系辞传下 第一章'
        })
        break;
      case '2':
        wx.setNavigationBarTitle({
          title: '系辞传下 第二章'
        })
        break;
      case '3':
        wx.setNavigationBarTitle({
          title: '系辞传下 第三章'
        })
        break;
      case '4':
        wx.setNavigationBarTitle({
          title: '系辞传下 第四章'
        })
        break;
      case '5':
        wx.setNavigationBarTitle({
          title: '系辞传下 第五章'
        })
        break;
      case '6':
        wx.setNavigationBarTitle({
          title: '系辞传下 第六章'
        })
        break;
      case '7':
        wx.setNavigationBarTitle({
          title: '系辞传下 第七章'
        })
        break;
      case '8':
        wx.setNavigationBarTitle({
          title: '系辞传下 第八章'
        })
        break;
      case '9':
        wx.setNavigationBarTitle({
          title: '系辞传下 第九章'
        })
        break;
      case '10':
        wx.setNavigationBarTitle({
          title: '系辞传下 第十章'
        })
        break;
      case '11':
        wx.setNavigationBarTitle({
          title: '系辞传下 第十一章'
        })
        break;
      case '12':
        wx.setNavigationBarTitle({
          title: '系辞传下 第十二章'
        })
        break;

    }
      
    console.log("onLoad:" + options.chapter)
 
    this.setData({ gChapter: options.chapter })
   
    gChapterIndex = options.chapter
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
  /*
    flag_hd = true;
    clearInterval(interval);
    time = 0;
    */
  },
  /*
  touchStartInXiCi2Page: function (e) {
  
      touchDot = e.touches[0].pageX; // 获取触摸时的原点
      // 使用js计时器记录时间    
      interval = setInterval(function () {
        time++;
      }, 100);
    
  },

  touchEndInXiCi2Page: function (e) {

  
      var touchMove = e.changedTouches[0].pageX;
      // 向左滑动   
      if (touchMove - touchDot <= -40 && time < 10 && flag_hd == true) {
        flag_hd = false;
        //执行切换页面的方法
        console.log("向左滑动");
  

        if (gChapterIndex == 12) {
          gChapterIndexNext = 1
          console.log('gChapterIndexNext:' + gChapterIndexNext);
        } else {

          gChapterIndexNext = parseInt(gChapterIndex) + 1
          console.log('gChapterIndexNext:' + gChapterIndexNext);
        }
        touchDot = 0
        wx.redirectTo({
          url: '../XiCi2_detail/XiCi2_detail?chapter=' + gChapterIndexNext
        })
      }
      // 向右滑动   
      else if (touchMove - touchDot >= 40 && time < 10 && flag_hd == true) {
        flag_hd = false;
        //执行切换页面的方法
        console.log("向右滑动");

        console.log('gChapterIndex_1:' + gChapterIndex);

        if (gChapterIndex != 1) {
          gChapterIndexNext = parseInt(gChapterIndex) - 1
          console.log('gChapterIndex_2:' + gChapterIndex);
        } else {

          gChapterIndexNext = 12
        }
        touchDot = 0
        wx.redirectTo({
          url: '../XiCi2_detail/XiCi2_detail?chapter=' + gChapterIndexNext
        })
      }else{
        touchDot = 0
      }
      clearInterval(interval); // 清除setInterval
      time = 0;
    
  },
  */

  touchMoveInXiCi2Page: function (event) {
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
  touchStartInXiCi2Page: function (event) {
    this.data.lastX = event.touches[0].pageX
    this.data.lastY = event.touches[0].pageY
    touchDot = event.touches[0].pageX
    touchDotY = event.touches[0].pageY
    console.log('guaPagesTPstart lastX:' + event.touches[0].pageX)
    console.log('guaPagesTPstart lastY:' + event.touches[0].pageY)
  },
  //滑动结束事件
  touchEndInXiCi2Page: function (event) {


    console.log('guaPagesTPend lastX:' + event.changedTouches[0].pageX)
    console.log('guaPagesTPend lastY:' + event.changedTouches[0].pageY)

    if ((event.changedTouches[0].pageX - touchDot <= -40) &&
      ((event.changedTouches[0].pageY - touchDotY < 20) ||
        (event.changedTouches[0].pageY - touchDotY < -20)
      )) {
      console.error('left')
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)

      if (gChapterIndex == 12) {
        gChapterIndexNext = 1
        console.log('gChapterIndexNext:' + gChapterIndex);
      } else {

        gChapterIndexNext = parseInt(gChapterIndex) + 1
        console.log('gChapterIndexNext:' + gChapterIndex);
      }

      wx.redirectTo({
        url: '../XiCi2_detail/XiCi2_detail?chapter=' + gChapterIndexNext
      })
    } else if ((event.changedTouches[0].pageX - touchDot >= 40) &&
      ((event.changedTouches[0].pageY - touchDotY < 20) ||
        (event.changedTouches[0].pageY - touchDotY < -20)
      )) {
      console.error('right')
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)

      if (gChapterIndex != 1) {
        gChapterIndexNext = parseInt(gChapterIndex) - 1
        console.log('gChapterIndex_2:' + gChapterIndex);
      } else {

        gChapterIndexNext = 12
      }
      wx.redirectTo({
        url: '../XiCi2_detail/XiCi2_detail?chapter=' + gChapterIndexNext
      })
    }


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
   * 页面下拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右下角分享
   */
  onShareAppMessage: function () {
  
  }
})