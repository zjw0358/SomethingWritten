// pages/Zhan/Zhan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
/*
    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }, {
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
    }, {
      mode: 'aspectFill',
      text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
    }, {
      mode: 'top',
      text: 'top：不缩放图片，只显示图片的顶部区域'
    }, {
      mode: 'bottom',
      text: 'bottom：不缩放图片，只显示图片的底部区域'
    }, {
      mode: 'center',
      text: 'center：不缩放图片，只显示图片的中间区域'
    }, {
      mode: 'left',
      text: 'left：不缩放图片，只显示图片的左边区域'
    }, {
      mode: 'right',
      text: 'right：不缩放图片，只显示图片的右边边区域'
    }, {
      mode: 'top left',
      text: 'top left：不缩放图片，只显示图片的左上边区域'
    }, {
      mode: 'top right',
      text: 'top right：不缩放图片，只显示图片的右上边区域'
    }, {
      mode: 'bottom left',
      text: 'bottom left：不缩放图片，只显示图片的左下边区域'
    }, {
      mode: 'bottom right',
      text: 'bottom right：不缩放图片，只显示图片的右下边区域'
    }],
*/
    src: '../../resources/tai6.jpg'
    
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },

  GoToResult:function(){
    var seed1 = Math.floor(10*Math.random())
    var seed2 = Math.floor(10*Math.random())

    var up = (seed1 % 8) + 1 
    var down = (seed2 % 8) + 1
    var INDEX
    var VALUE = Math.round(1 + Math.random()*5) 

   if(up == 1){
      switch(down)
      {
      case 1:
          INDEX =  1;
        break;
      case 2:
          INDEX = 10;
        break;
      case 3:
          INDEX = 13;
        break;
      case 4:
          INDEX = 25;
        break;
      case 5:
          INDEX = 44;
        break;
      case 6:
          INDEX = 6;
        break;
      case 7:
          INDEX = 33;
        break;
      case 8:
          INDEX = 12;
        break;                
      }
   }
   if(up == 2){
     switch (down) {
       case 1:
         INDEX = 43;
         break;
       case 2:
         INDEX = 58;
         break;
       case 3:
         INDEX = 49;
         break;
       case 4:
         INDEX = 17;
         break;
       case 5:
         INDEX = 28;
         break;
       case 6:
         INDEX = 47;
         break;
       case 7:
         INDEX = 31;
         break;
       case 8:
         INDEX = 45;
         break;
     }
   }
   if (up == 3) {
     switch (down) {
       case 1:
         INDEX = 14;
         break;
       case 2:
         INDEX = 38;
         break;
       case 3:
         INDEX = 30;
         break;
       case 4:
         INDEX = 21;
         break;
       case 5:
         INDEX = 50;
         break;
       case 6:
         INDEX = 64;
         break;
       case 7:
         INDEX = 56;
         break;
       case 8:
         INDEX = 35;
         break;
     }
   }
   if (up == 4) {
     switch (down) {
       case 1:
         INDEX = 34;
         break;
       case 2:
         INDEX = 54;
         break;
       case 3:
         INDEX = 55;
         break;
       case 4:
         INDEX = 51;
         break;
       case 5:
         INDEX = 32;
         break;
       case 6:
         INDEX = 40;
         break;
       case 7:
         INDEX = 62;
         break;
       case 8:
         INDEX = 16;
         break;
     }
   }
   if (up == 5) {
     switch (down) {
       case 1:
         INDEX = 9;
         break;
       case 2:
         INDEX = 61;
         break;
       case 3:
         INDEX = 37;
         break;
       case 4:
         INDEX = 42;
         break;
       case 5:
         INDEX = 57;
         break;
       case 6:
         INDEX = 59;
         break;
       case 7:
         INDEX = 53;
         break;
       case 8:
         INDEX = 20;
         break;
     }
   }
   if (up == 6) {
     switch (down) {
       case 1:
         INDEX = 5;
         break;
       case 2:
         INDEX = 60;
         break;
       case 3:
         INDEX = 63;
         break;
       case 4:
         INDEX = 3;
         break;
       case 5:
         INDEX = 48;
         break;
       case 6:
         INDEX = 29;
         break;
       case 7:
         INDEX = 39;
         break;
       case 8:
         INDEX = 8;
         break;
     }
   }
   if (up == 7) {
     switch (down) {
       case 1:
         INDEX = 26;
         break;
       case 2:
         INDEX = 41;
         break;
       case 3:
         INDEX = 22;
         break;
       case 4:
         INDEX = 27;
         break;
       case 5:
         INDEX = 18;
         break;
       case 6:
         INDEX = 4;
         break;
       case 7:
         INDEX = 52;
         break;
       case 8:
         INDEX = 23;
         break;
     }
   }
   if (up == 8) {
     switch (down) {
       case 1:
         INDEX = 11;
         break;
       case 2:
         INDEX = 19;
         break;
       case 3:
         INDEX = 36;
         break;
       case 4:
         INDEX = 24;
         break;
       case 5:
         INDEX = 46;
         break;
       case 6:
         INDEX = 7;
         break;
       case 7:
         INDEX = 15;
         break;
       case 8:
         INDEX = 2;
         break;
     }
   }
    INDEX = INDEX - 1
    //var FromZhanPage = 'true'
    //url: '../Gua64/Gua64?index=' + INDEX + '&value=' + VALUE + '&FromZhanPage=' + FromZhanPage
    wx.navigateTo({
      url: '../Gua64/Gua64?index=' + INDEX + '&value=' + VALUE
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   // this.setData(
   //   { mode:'bottom right'}
   // )
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