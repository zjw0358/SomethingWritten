// pages/JiaoShiYi3/JiaoShiYi3.js
/*
var time=0;
var touchDot = 0;
var interval = "";
var flag_hd = true;
var gYiLinIndex = "";
var gYiLinCiIndex ="";
var gBenGuaTitle = "";
var gBianGuaId = "";
*/

Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    
    var myViewWidth;
    var myViewHeigt;
    wx.getSystemInfo({
      success: function (res) {
        myViewWidth = res.windowWidth
        myViewHeigt = res.windowHeight
      }
    })
    

    this.setData({ 
          YiLinCiTitleVText: options.BenGuaTitle + options.BianGuaId,
          canvasWidth: myViewWidth/2,
          })
    
    //this.setData({ YiLinCi4096:'adslfjasdflkjsd'})
    

    switch (options.YiLinIndex) {
      case '1':// BenGua1
        var Gua1 = getApp().globalData.Gua1_grp; 

        switch(options.YiLinCiIndex) // BianGua1
        {
          case '1':
            this.setData({ YiLinCi4096: Gua1[1] })
           break;
          case '2':
            this.setData({ YiLinCi4096: Gua1[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua1[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua1[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua1[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua1[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua1[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua1[8] })
            break;  
          case '9':
            this.setData({ YiLinCi4096: Gua1[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua1[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua1[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua1[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua1[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua1[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua1[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua1[16] })
            break; 
          case '17':
            this.setData({ YiLinCi4096: Gua1[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua1[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua1[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua1[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua1[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua1[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua1[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua1[24] })
            break; 
          case '25':
            this.setData({ YiLinCi4096: Gua1[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua1[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua1[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua1[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua1[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua1[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua1[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua1[32] })
            break; 
          case '33':
            this.setData({ YiLinCi4096: Gua1[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua1[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua1[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua1[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua1[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua1[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua1[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua1[40] })
            break; 
          case '41':
            this.setData({ YiLinCi4096: Gua1[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua1[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua1[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua1[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua1[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua1[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua1[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua1[48] })
            break; 
          case '49':
            this.setData({ YiLinCi4096: Gua1[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua1[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua1[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua1[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua1[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua1[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua1[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua1[56] })
            break; 
          case '57':
            this.setData({ YiLinCi4096: Gua1[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua1[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua1[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua1[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua1[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua1[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua1[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua1[64] })
            break; 
           default:
                break;
        }      
        break;
      case '2': // BenGua2
        var Gua2 = getApp().globalData.Gua2_grp; 
        switch (options.YiLinCiIndex) // BianGua2
        {
          case '1':
            this.setData({ YiLinCi4096: Gua2[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua2[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua2[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua2[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua2[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua2[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua2[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua2[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua2[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua2[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua2[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua2[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua2[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua2[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua2[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua2[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua2[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua2[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua2[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua2[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua2[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua2[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua2[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua2[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua2[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua2[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua2[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua2[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua2[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua2[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua2[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua2[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua2[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua2[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua2[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua2[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua2[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua2[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua2[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua2[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua2[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua2[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua2[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua2[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua2[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua2[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua2[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua2[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua2[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua2[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua2[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua2[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua2[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua2[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua2[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua2[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua2[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua2[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua2[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua2[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua2[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua2[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua2[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua2[64] })
            break;
          default:
            break;
        }
        break;
      case '3':
        var Gua3 = getApp().globalData.Gua3_grp;
        switch (options.YiLinCiIndex) // BianGua3
        {
          case '1':
            this.setData({ YiLinCi4096: Gua3[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua3[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua3[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua3[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua3[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua3[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua3[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua3[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua3[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua3[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua3[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua3[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua3[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua3[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua3[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua3[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua3[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua3[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua3[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua3[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua3[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua3[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua3[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua3[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua3[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua3[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua3[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua3[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua3[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua3[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua3[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua3[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua3[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua3[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua3[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua3[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua3[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua3[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua3[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua3[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua3[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua3[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua3[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua3[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua3[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua3[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua3[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua3[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua3[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua3[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua3[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua3[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua3[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua3[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua3[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua3[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua3[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua3[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua3[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua3[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua3[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua3[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua3[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua3[64] })
            break;
          default:
            break;
        }
        break;
      case '4':
        var Gua4 = getApp().globalData.Gua4_grp;
        switch (options.YiLinCiIndex) // BianGua4
        {
          case '1':
            this.setData({ YiLinCi4096: Gua4[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua4[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua4[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua4[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua4[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua4[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua4[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua4[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua4[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua4[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua4[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua4[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua4[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua4[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua4[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua4[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua4[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua4[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua4[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua4[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua4[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua4[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua4[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua4[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua4[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua4[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua4[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua4[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua4[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua4[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua4[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua4[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua4[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua4[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua4[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua4[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua4[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua4[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua4[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua4[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua4[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua4[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua4[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua4[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua4[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua4[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua4[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua4[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua4[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua4[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua4[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua4[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua4[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua4[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua4[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua4[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua4[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua4[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua4[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua4[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua4[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua4[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua4[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua4[64] })
            break;
          default:
            break;
        }
        break;
      case '5':
        var Gua5 = getApp().globalData.Gua5_grp;
        switch (options.YiLinCiIndex) // BianGua5
        {
          case '1':
            this.setData({ YiLinCi4096: Gua5[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua5[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua5[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua5[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua5[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua5[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua5[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua5[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua5[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua5[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua5[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua5[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua5[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua5[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua5[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua5[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua5[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua5[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua5[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua5[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua5[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua5[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua5[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua5[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua5[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua5[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua5[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua5[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua5[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua5[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua5[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua5[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua5[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua5[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua5[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua5[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua5[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua5[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua5[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua5[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua5[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua5[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua5[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua5[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua5[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua5[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua5[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua5[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua5[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua5[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua5[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua5[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua5[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua5[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua5[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua5[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua5[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua5[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua5[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua5[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua5[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua5[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua5[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua5[64] })
            break;
          default:
            break;
        }
        break;
      case '6':
        var Gua6 = getApp().globalData.Gua6_grp;
        switch (options.YiLinCiIndex) // BianGua6
        {
          case '1':
            this.setData({ YiLinCi4096: Gua6[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua6[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua6[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua6[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua6[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua6[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua6[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua6[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua6[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua6[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua6[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua6[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua6[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua6[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua6[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua6[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua6[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua6[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua6[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua6[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua6[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua6[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua6[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua6[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua6[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua6[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua6[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua6[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua6[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua6[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua6[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua6[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua6[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua6[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua6[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua6[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua6[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua6[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua6[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua6[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua6[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua6[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua6[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua6[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua6[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua6[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua6[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua6[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua6[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua6[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua6[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua6[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua6[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua6[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua6[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua6[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua6[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua6[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua6[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua6[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua6[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua6[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua6[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua6[64] })
            break;
          default:
            break;
        }
        break;
      case '7':
        var Gua7 = getApp().globalData.Gua7_grp;
        switch (options.YiLinCiIndex) // BianGua7
        {
          case '1':
            this.setData({ YiLinCi4096: Gua7[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua7[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua7[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua7[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua7[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua7[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua7[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua7[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua7[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua7[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua7[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua7[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua7[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua7[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua7[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua7[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua7[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua7[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua7[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua7[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua7[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua7[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua7[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua7[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua7[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua7[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua7[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua7[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua7[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua7[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua7[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua7[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua7[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua7[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua7[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua7[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua7[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua7[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua7[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua7[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua7[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua7[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua7[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua7[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua7[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua7[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua7[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua7[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua7[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua7[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua7[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua7[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua7[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua7[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua7[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua7[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua7[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua7[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua7[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua7[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua7[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua7[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua7[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua7[64] })
            break;
          default:
            break;
        }
        break;
      case '8':
        var Gua8 = getApp().globalData.Gua8_grp;
        switch (options.YiLinCiIndex) // BianGua8
        {
          case '1':
            this.setData({ YiLinCi4096: Gua8[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua8[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua8[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua8[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua8[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua8[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua8[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua8[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua8[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua8[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua8[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua8[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua8[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua8[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua8[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua8[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua8[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua8[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua8[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua8[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua8[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua8[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua8[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua8[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua8[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua8[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua8[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua8[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua8[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua8[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua8[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua8[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua8[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua8[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua8[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua8[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua8[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua8[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua8[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua8[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua8[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua8[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua8[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua8[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua8[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua8[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua8[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua8[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua8[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua8[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua8[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua8[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua8[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua8[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua8[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua8[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua8[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua8[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua8[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua8[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua8[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua8[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua8[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua8[64] })
            break;
          default:
            break;
        }
        break;
      case '9':
        var Gua9 = getApp().globalData.Gua9_grp;
        switch (options.YiLinCiIndex) // BianGua9
        {
          case '1':
            this.setData({ YiLinCi4096: Gua9[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua9[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua9[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua9[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua9[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua9[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua9[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua9[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua9[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua9[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua9[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua9[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua9[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua9[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua9[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua9[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua9[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua9[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua9[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua9[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua9[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua9[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua9[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua9[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua9[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua9[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua9[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua9[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua9[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua9[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua9[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua9[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua9[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua9[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua9[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua9[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua9[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua9[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua9[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua9[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua9[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua9[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua9[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua9[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua9[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua9[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua9[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua9[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua9[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua9[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua9[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua9[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua9[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua9[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua9[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua9[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua9[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua9[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua9[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua9[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua9[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua9[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua9[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua9[64] })
            break;
          default:
            break;
        }
        break;
      case '10':
        var Gua10 = getApp().globalData.Gua10_grp;
        switch (options.YiLinCiIndex) // BianGua10
        {
          case '1':
            this.setData({ YiLinCi4096: Gua10[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua10[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua10[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua10[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua10[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua10[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua10[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua10[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua10[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua10[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua10[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua10[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua10[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua10[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua10[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua10[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua10[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua10[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua10[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua10[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua10[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua10[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua10[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua10[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua10[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua10[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua10[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua10[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua10[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua10[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua10[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua10[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua10[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua10[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua10[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua10[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua10[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua10[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua10[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua10[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua10[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua10[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua10[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua10[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua10[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua10[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua10[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua10[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua10[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua10[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua10[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua10[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua10[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua10[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua10[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua10[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua10[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua10[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua10[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua10[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua10[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua10[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua10[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua10[64] })
            break;
          default:
            break;
        }
        break;
      case '11':
        var Gua11 = getApp().globalData.Gua11_grp;
        switch (options.YiLinCiIndex) // BianGua11
        {
          case '1':
            this.setData({ YiLinCi4096: Gua11[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua11[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua11[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua11[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua11[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua11[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua11[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua11[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua11[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua11[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua11[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua11[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua11[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua11[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua11[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua11[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua11[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua11[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua11[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua11[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua11[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua11[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua11[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua11[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua11[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua11[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua11[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua11[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua11[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua11[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua11[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua11[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua11[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua11[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua11[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua11[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua11[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua11[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua11[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua11[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua11[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua11[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua11[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua11[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua11[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua11[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua11[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua11[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua11[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua11[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua11[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua11[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua11[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua11[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua11[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua11[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua11[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua11[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua11[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua11[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua11[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua11[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua11[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua11[64] })
            break;
          default:
            break;
        }
        break;
      case '12':
        var Gua12 = getApp().globalData.Gua12_grp;
        switch (options.YiLinCiIndex) // BianGua12
        {
          case '1':
            this.setData({ YiLinCi4096: Gua12[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua12[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua12[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua12[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua12[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua12[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua12[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua12[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua12[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua12[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua12[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua12[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua12[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua12[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua12[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua12[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua12[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua12[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua12[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua12[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua12[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua12[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua12[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua12[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua12[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua12[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua12[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua12[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua12[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua12[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua12[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua12[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua12[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua12[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua12[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua12[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua12[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua12[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua12[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua12[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua12[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua12[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua12[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua12[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua12[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua12[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua12[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua12[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua12[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua12[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua12[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua12[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua12[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua12[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua12[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua12[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua12[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua12[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua12[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua12[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua12[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua12[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua12[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua12[64] })
            break;
          default:
            break;
        }
        break;
      case '13':
        var Gua13 = getApp().globalData.Gua13_grp;
        switch (options.YiLinCiIndex) // BianGua13
        {
          case '1':
            this.setData({ YiLinCi4096: Gua13[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua13[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua13[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua13[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua13[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua13[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua13[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua13[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua13[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua13[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua13[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua13[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua13[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua13[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua13[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua13[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua13[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua13[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua13[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua13[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua13[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua13[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua13[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua13[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua13[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua13[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua13[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua13[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua13[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua13[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua13[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua13[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua13[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua13[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua13[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua13[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua13[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua13[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua13[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua13[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua13[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua13[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua13[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua13[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua13[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua13[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua13[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua13[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua13[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua13[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua13[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua13[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua13[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua13[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua13[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua13[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua13[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua13[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua13[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua13[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua13[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua13[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua13[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua13[64] })
            break;
          default:
            break;
        }
        break;
      case '14':
        var Gua14 = getApp().globalData.Gua14_grp;
        switch (options.YiLinCiIndex) // BianGua14
        {
          case '1':
            this.setData({ YiLinCi4096: Gua14[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua14[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua14[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua14[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua14[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua14[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua14[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua14[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua14[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua14[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua14[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua14[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua14[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua14[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua14[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua14[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua14[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua14[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua14[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua14[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua14[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua14[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua14[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua14[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua14[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua14[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua14[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua14[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua14[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua14[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua14[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua14[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua14[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua14[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua14[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua14[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua14[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua14[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua14[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua14[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua14[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua14[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua14[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua14[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua14[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua14[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua14[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua14[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua14[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua14[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua14[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua14[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua14[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua14[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua14[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua14[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua14[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua14[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua14[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua14[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua14[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua14[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua14[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua14[64] })
            break;
          default:
            break;
        }
        break;
      case '15':
        var Gua15 = getApp().globalData.Gua15_grp;
        switch (options.YiLinCiIndex) // BianGua15
        {
          case '1':
            this.setData({ YiLinCi4096: Gua15[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua15[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua15[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua15[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua15[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua15[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua15[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua15[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua15[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua15[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua15[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua15[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua15[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua15[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua15[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua15[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua15[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua15[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua15[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua15[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua15[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua15[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua15[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua15[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua15[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua15[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua15[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua15[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua15[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua15[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua15[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua15[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua15[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua15[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua15[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua15[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua15[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua15[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua15[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua15[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua15[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua15[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua15[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua15[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua15[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua15[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua15[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua15[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua15[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua15[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua15[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua15[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua15[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua15[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua15[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua15[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua15[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua15[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua15[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua15[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua15[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua15[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua15[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua15[64] })
            break;
          default:
            break;
        }
        break;
      case '16':
        var Gua16 = getApp().globalData.Gua16_grp;
        switch (options.YiLinCiIndex) // BianGua16
        {
          case '1':
            this.setData({ YiLinCi4096: Gua16[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua16[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua16[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua16[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua16[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua16[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua16[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua16[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua16[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua16[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua16[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua16[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua16[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua16[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua16[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua16[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua16[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua16[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua16[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua16[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua16[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua16[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua16[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua16[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua16[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua16[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua16[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua16[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua16[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua16[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua16[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua16[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua16[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua16[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua16[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua16[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua16[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua16[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua16[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua16[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua16[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua16[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua16[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua16[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua16[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua16[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua16[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua16[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua16[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua16[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua16[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua16[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua16[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua16[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua16[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua16[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua16[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua16[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua16[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua16[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua16[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua16[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua16[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua16[64] })
            break;
          default:
            break;
        }
        break;
      case '17':
        var Gua17 = getApp().globalData.Gua17_grp;
        switch (options.YiLinCiIndex) // BianGua17
        {
          case '1':
            this.setData({ YiLinCi4096: Gua17[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua17[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua17[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua17[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua17[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua17[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua17[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua17[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua17[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua17[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua17[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua17[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua17[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua17[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua17[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua17[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua17[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua17[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua17[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua17[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua17[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua17[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua17[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua17[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua17[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua17[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua17[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua17[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua17[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua17[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua17[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua17[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua17[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua17[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua17[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua17[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua17[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua17[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua17[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua17[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua17[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua17[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua17[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua17[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua17[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua17[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua17[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua17[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua17[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua17[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua17[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua17[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua17[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua17[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua17[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua17[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua17[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua17[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua17[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua17[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua17[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua17[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua17[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua17[64] })
            break;
          default:
            break;
        }
        break;
      case '18':
        var Gua18 = getApp().globalData.Gua18_grp;
        switch (options.YiLinCiIndex) // BianGua18
        {
          case '1':
            this.setData({ YiLinCi4096: Gua18[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua18[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua18[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua18[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua18[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua18[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua18[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua18[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua18[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua18[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua18[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua18[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua18[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua18[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua18[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua18[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua18[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua18[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua18[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua18[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua18[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua18[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua18[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua18[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua18[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua18[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua18[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua18[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua18[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua18[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua18[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua18[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua18[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua18[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua18[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua18[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua18[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua18[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua18[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua18[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua18[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua18[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua18[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua18[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua18[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua18[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua18[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua18[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua18[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua18[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua18[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua18[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua18[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua18[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua18[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua18[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua18[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua18[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua18[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua18[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua18[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua18[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua18[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua18[64] })
            break;
          default:
            break;
        }
        break;
      case '19':
        var Gua19 = getApp().globalData.Gua19_grp;
        switch (options.YiLinCiIndex) // BianGua19
        {
          case '1':
            this.setData({ YiLinCi4096: Gua19[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua19[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua19[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua19[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua19[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua19[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua19[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua19[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua19[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua19[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua19[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua19[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua19[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua19[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua19[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua19[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua19[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua19[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua19[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua19[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua19[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua19[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua19[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua19[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua19[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua19[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua19[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua19[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua19[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua19[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua19[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua19[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua19[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua19[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua19[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua19[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua19[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua19[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua19[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua19[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua19[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua19[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua19[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua19[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua19[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua19[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua19[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua19[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua19[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua19[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua19[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua19[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua19[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua19[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua19[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua19[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua19[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua19[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua19[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua19[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua19[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua19[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua19[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua19[64] })
            break;
          default:
            break;
        }
        break;
      case '20':
        var Gua20 = getApp().globalData.Gua20_grp;
        switch (options.YiLinCiIndex) // BianGua20
        {
          case '1':
            this.setData({ YiLinCi4096: Gua20[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua20[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua20[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua20[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua20[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua20[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua20[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua20[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua20[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua20[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua20[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua20[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua20[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua20[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua20[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua20[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua20[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua20[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua20[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua20[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua20[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua20[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua20[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua20[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua20[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua20[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua20[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua20[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua20[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua20[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua20[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua20[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua20[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua20[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua20[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua20[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua20[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua20[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua20[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua20[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua20[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua20[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua20[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua20[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua20[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua20[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua20[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua20[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua20[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua20[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua20[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua20[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua20[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua20[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua20[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua20[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua20[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua20[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua20[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua20[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua20[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua20[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua20[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua20[64] })
            break;
          default:
            break;
        }
        break;
      case '21':
        var Gua21 = getApp().globalData.Gua21_grp;
        switch (options.YiLinCiIndex) // BianGua21
        {
          case '1':
            this.setData({ YiLinCi4096: Gua21[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua21[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua21[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua21[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua21[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua21[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua21[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua21[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua21[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua21[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua21[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua21[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua21[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua21[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua21[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua21[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua21[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua21[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua21[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua21[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua21[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua21[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua21[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua21[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua21[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua21[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua21[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua21[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua21[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua21[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua21[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua21[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua21[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua21[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua21[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua21[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua21[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua21[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua21[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua21[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua21[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua21[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua21[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua21[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua21[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua21[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua21[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua21[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua21[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua21[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua21[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua21[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua21[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua21[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua21[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua21[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua21[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua21[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua21[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua21[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua21[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua21[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua21[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua21[64] })
            break;
          default:
            break;
        }
        break;
      case '22':
        var Gua22 = getApp().globalData.Gua22_grp;
        switch (options.YiLinCiIndex) // BianGua22
        {
          case '1':
            this.setData({ YiLinCi4096: Gua22[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua22[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua22[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua22[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua22[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua22[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua22[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua22[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua22[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua22[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua22[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua22[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua22[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua22[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua22[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua22[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua22[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua22[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua22[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua22[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua22[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua22[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua22[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua22[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua22[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua22[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua22[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua22[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua22[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua22[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua22[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua22[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua22[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua22[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua22[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua22[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua22[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua22[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua22[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua22[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua22[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua22[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua22[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua22[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua22[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua22[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua22[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua22[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua22[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua22[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua22[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua22[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua22[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua22[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua22[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua22[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua22[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua22[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua22[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua22[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua22[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua22[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua22[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua22[64] })
            break;
          default:
            break;
        }
        break;
      case '23':
        var Gua23 = getApp().globalData.Gua23_grp;
        switch (options.YiLinCiIndex) // BianGua23
        {
          case '1':
            this.setData({ YiLinCi4096: Gua23[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua23[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua23[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua23[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua23[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua23[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua23[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua23[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua23[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua23[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua23[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua23[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua23[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua23[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua23[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua23[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua23[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua23[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua23[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua23[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua23[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua23[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua23[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua23[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua23[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua23[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua23[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua23[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua23[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua23[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua23[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua23[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua23[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua23[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua23[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua23[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua23[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua23[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua23[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua23[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua23[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua23[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua23[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua23[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua23[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua23[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua23[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua23[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua23[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua23[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua23[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua23[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua23[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua23[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua23[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua23[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua23[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua23[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua23[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua23[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua23[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua23[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua23[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua23[64] })
            break;
          default:
            break;
        }
        break;
      case '24':
        var Gua24 = getApp().globalData.Gua24_grp;
        switch (options.YiLinCiIndex) // BianGua24
        {
          case '1':
            this.setData({ YiLinCi4096: Gua24[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua24[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua24[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua24[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua24[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua24[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua24[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua24[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua24[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua24[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua24[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua24[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua24[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua24[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua24[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua24[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua24[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua24[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua24[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua24[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua24[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua24[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua24[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua24[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua24[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua24[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua24[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua24[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua24[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua24[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua24[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua24[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua24[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua24[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua24[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua24[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua24[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua24[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua24[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua24[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua24[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua24[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua24[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua24[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua24[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua24[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua24[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua24[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua24[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua24[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua24[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua24[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua24[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua24[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua24[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua24[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua24[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua24[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua24[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua24[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua24[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua24[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua24[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua24[64] })
            break;
          default:
            break;
        }
        break;
      case '25':
        var Gua25 = getApp().globalData.Gua25_grp;
        switch (options.YiLinCiIndex) // BianGua25
        {
          case '1':
            this.setData({ YiLinCi4096: Gua25[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua25[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua25[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua25[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua25[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua25[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua25[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua25[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua25[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua25[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua25[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua25[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua25[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua25[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua25[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua25[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua25[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua25[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua25[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua25[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua25[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua25[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua25[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua25[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua25[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua25[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua25[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua25[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua25[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua25[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua25[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua25[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua25[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua25[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua25[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua25[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua25[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua25[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua25[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua25[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua25[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua25[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua25[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua25[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua25[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua25[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua25[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua25[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua25[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua25[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua25[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua25[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua25[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua25[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua25[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua25[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua25[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua25[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua25[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua25[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua25[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua25[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua25[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua25[64] })
            break;
          default:
            break;
        }
        break;
      case '26':
        var Gua26 = getApp().globalData.Gua26_grp;
        switch (options.YiLinCiIndex) // BianGua26
        {
          case '1':
            this.setData({ YiLinCi4096: Gua26[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua26[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua26[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua26[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua26[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua26[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua26[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua26[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua26[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua26[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua26[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua26[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua26[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua26[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua26[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua26[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua26[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua26[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua26[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua26[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua26[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua26[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua26[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua26[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua26[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua26[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua26[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua26[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua26[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua26[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua26[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua26[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua26[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua26[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua26[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua26[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua26[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua26[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua26[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua26[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua26[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua26[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua26[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua26[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua26[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua26[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua26[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua26[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua26[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua26[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua26[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua26[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua26[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua26[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua26[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua26[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua26[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua26[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua26[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua26[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua26[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua26[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua26[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua26[64] })
            break;
          default:
            break;
        }
        break;
      case '27':
        var Gua27 = getApp().globalData.Gua27_grp;
        switch (options.YiLinCiIndex) // BianGua27
        {
          case '1':
            this.setData({ YiLinCi4096: Gua27[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua27[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua27[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua27[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua27[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua27[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua27[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua27[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua27[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua27[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua27[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua27[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua27[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua27[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua27[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua27[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua27[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua27[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua27[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua27[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua27[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua27[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua27[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua27[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua27[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua27[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua27[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua27[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua27[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua27[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua27[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua27[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua27[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua27[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua27[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua27[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua27[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua27[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua27[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua27[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua27[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua27[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua27[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua27[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua27[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua27[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua27[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua27[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua27[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua27[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua27[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua27[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua27[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua27[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua27[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua27[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua27[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua27[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua27[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua27[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua27[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua27[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua27[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua27[64] })
            break;
          default:
            break;
        }
        break;
      case '28':
        var Gua28 = getApp().globalData.Gua28_grp;
        switch (options.YiLinCiIndex) // BianGua28
        {
          case '1':
            this.setData({ YiLinCi4096: Gua28[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua28[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua28[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua28[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua28[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua28[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua28[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua28[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua28[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua28[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua28[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua28[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua28[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua28[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua28[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua28[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua28[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua28[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua28[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua28[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua28[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua28[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua28[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua28[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua28[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua28[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua28[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua28[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua28[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua28[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua28[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua28[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua28[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua28[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua28[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua28[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua28[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua28[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua28[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua28[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua28[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua28[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua28[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua28[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua28[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua28[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua28[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua28[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua28[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua28[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua28[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua28[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua28[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua28[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua28[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua28[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua28[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua28[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua28[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua28[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua28[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua28[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua28[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua28[64] })
            break;
          default:
            break;
        }
        break;
      case '29':
        var Gua29 = getApp().globalData.Gua29_grp;
        switch (options.YiLinCiIndex) // BianGua29
        {
          case '1':
            this.setData({ YiLinCi4096: Gua29[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua29[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua29[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua29[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua29[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua29[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua29[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua29[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua29[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua29[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua29[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua29[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua29[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua29[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua29[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua29[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua29[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua29[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua29[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua29[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua29[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua29[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua29[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua29[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua29[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua29[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua29[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua29[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua29[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua29[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua29[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua29[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua29[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua29[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua29[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua29[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua29[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua29[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua29[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua29[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua29[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua29[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua29[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua29[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua29[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua29[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua29[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua29[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua29[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua29[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua29[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua29[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua29[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua29[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua29[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua29[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua29[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua29[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua29[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua29[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua29[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua29[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua29[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua29[64] })
            break;
          default:
            break;
        }
        break;
      case '30':
        var Gua30 = getApp().globalData.Gua30_grp;
        switch (options.YiLinCiIndex) // BianGua30
        {
          case '1':
            this.setData({ YiLinCi4096: Gua30[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua30[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua30[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua30[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua30[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua30[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua30[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua30[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua30[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua30[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua30[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua30[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua30[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua30[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua30[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua30[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua30[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua30[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua30[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua30[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua30[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua30[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua30[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua30[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua30[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua30[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua30[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua30[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua30[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua30[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua30[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua30[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua30[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua30[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua30[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua30[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua30[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua30[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua30[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua30[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua30[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua30[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua30[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua30[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua30[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua30[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua30[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua30[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua30[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua30[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua30[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua30[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua30[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua30[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua30[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua30[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua30[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua30[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua30[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua30[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua30[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua30[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua30[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua30[64] })
            break;
          default:
            break;
        }
        break;
      case '31':
        var Gua31 = getApp().globalData.Gua31_grp;
        switch (options.YiLinCiIndex) // BianGua31
        {
          case '1':
            this.setData({ YiLinCi4096: Gua31[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua31[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua31[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua31[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua31[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua31[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua31[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua31[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua31[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua31[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua31[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua31[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua31[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua31[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua31[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua31[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua31[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua31[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua31[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua31[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua31[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua31[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua31[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua31[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua31[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua31[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua31[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua31[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua31[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua31[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua31[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua31[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua31[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua31[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua31[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua31[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua31[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua31[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua31[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua31[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua31[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua31[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua31[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua31[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua31[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua31[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua31[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua31[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua31[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua31[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua31[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua31[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua31[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua31[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua31[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua31[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua31[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua31[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua31[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua31[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua31[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua31[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua31[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua31[64] })
            break;
          default:
            break;
        }
        break;
      case '32':
        var Gua32 = getApp().globalData.Gua32_grp;
        switch (options.YiLinCiIndex) // BianGua32
        {
          case '1':
            this.setData({ YiLinCi4096: Gua32[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua32[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua32[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua32[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua32[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua32[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua32[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua32[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua32[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua32[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua32[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua32[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua32[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua32[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua32[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua32[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua32[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua32[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua32[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua32[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua32[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua32[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua32[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua32[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua32[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua32[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua32[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua32[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua32[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua32[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua32[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua32[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua32[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua32[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua32[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua32[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua32[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua32[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua32[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua32[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua32[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua32[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua32[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua32[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua32[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua32[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua32[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua32[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua32[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua32[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua32[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua32[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua32[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua32[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua32[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua32[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua32[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua32[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua32[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua32[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua32[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua32[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua32[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua32[64] })
            break;
          default:
            break;
        }
        break;
      case '33':
        var Gua33 = getApp().globalData.Gua33_grp;
        switch (options.YiLinCiIndex) // BianGua33
        {
          case '1':
            this.setData({ YiLinCi4096: Gua33[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua33[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua33[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua33[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua33[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua33[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua33[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua33[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua33[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua33[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua33[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua33[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua33[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua33[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua33[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua33[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua33[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua33[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua33[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua33[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua33[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua33[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua33[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua33[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua33[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua33[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua33[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua33[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua33[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua33[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua33[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua33[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua33[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua33[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua33[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua33[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua33[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua33[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua33[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua33[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua33[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua33[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua33[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua33[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua33[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua33[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua33[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua33[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua33[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua33[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua33[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua33[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua33[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua33[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua33[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua33[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua33[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua33[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua33[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua33[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua33[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua33[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua33[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua33[64] })
            break;
          default:
            break;
        }
        break;
      case '34':
        var Gua34 = getApp().globalData.Gua34_grp;
        switch (options.YiLinCiIndex) // BianGua34
        {
          case '1':
            this.setData({ YiLinCi4096: Gua34[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua34[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua34[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua34[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua34[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua34[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua34[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua34[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua34[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua34[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua34[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua34[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua34[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua34[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua34[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua34[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua34[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua34[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua34[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua34[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua34[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua34[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua34[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua34[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua34[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua34[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua34[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua34[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua34[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua34[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua34[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua34[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua34[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua34[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua34[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua34[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua34[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua34[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua34[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua34[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua34[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua34[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua34[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua34[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua34[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua34[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua34[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua34[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua34[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua34[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua34[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua34[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua34[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua34[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua34[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua34[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua34[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua34[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua34[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua34[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua34[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua34[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua34[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua34[64] })
            break;
          default:
            break;
        }
        break;
      case '35':
        var Gua35 = getApp().globalData.Gua35_grp;
        switch (options.YiLinCiIndex) // BianGua35
        {
          case '1':
            this.setData({ YiLinCi4096: Gua35[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua35[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua35[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua35[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua35[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua35[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua35[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua35[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua35[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua35[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua35[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua35[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua35[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua35[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua35[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua35[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua35[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua35[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua35[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua35[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua35[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua35[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua35[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua35[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua35[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua35[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua35[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua35[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua35[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua35[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua35[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua35[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua35[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua35[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua35[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua35[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua35[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua35[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua35[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua35[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua35[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua35[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua35[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua35[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua35[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua35[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua35[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua35[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua35[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua35[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua35[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua35[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua35[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua35[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua35[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua35[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua35[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua35[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua35[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua35[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua35[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua35[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua35[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua35[64] })
            break;
          default:
            break;
        }
        break;
      case '36':
        var Gua36 = getApp().globalData.Gua36_grp;
        switch (options.YiLinCiIndex) // BianGua36
        {
          case '1':
            this.setData({ YiLinCi4096: Gua36[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua36[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua36[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua36[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua36[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua36[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua36[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua36[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua36[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua36[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua36[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua36[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua36[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua36[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua36[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua36[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua36[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua36[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua36[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua36[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua36[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua36[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua36[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua36[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua36[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua36[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua36[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua36[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua36[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua36[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua36[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua36[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua36[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua36[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua36[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua36[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua36[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua36[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua36[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua36[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua36[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua36[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua36[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua36[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua36[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua36[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua36[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua36[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua36[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua36[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua36[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua36[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua36[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua36[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua36[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua36[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua36[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua36[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua36[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua36[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua36[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua36[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua36[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua36[64] })
            break;
          default:
            break;
        }
        break;
      case '37':
        var Gua37 = getApp().globalData.Gua37_grp;
        switch (options.YiLinCiIndex) // BianGua37
        {
          case '1':
            this.setData({ YiLinCi4096: Gua37[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua37[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua37[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua37[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua37[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua37[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua37[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua37[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua37[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua37[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua37[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua37[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua37[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua37[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua37[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua37[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua37[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua37[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua37[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua37[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua37[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua37[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua37[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua37[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua37[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua37[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua37[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua37[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua37[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua37[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua37[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua37[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua37[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua37[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua37[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua37[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua37[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua37[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua37[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua37[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua37[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua37[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua37[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua37[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua37[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua37[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua37[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua37[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua37[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua37[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua37[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua37[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua37[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua37[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua37[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua37[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua37[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua37[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua37[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua37[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua37[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua37[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua37[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua37[64] })
            break;
          default:
            break;
        }
        break;
      case '38':
        var Gua38 = getApp().globalData.Gua38_grp;
        switch (options.YiLinCiIndex) // BianGua38
        {
          case '1':
            this.setData({ YiLinCi4096: Gua38[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua38[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua38[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua38[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua38[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua38[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua38[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua38[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua38[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua38[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua38[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua38[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua38[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua38[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua38[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua38[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua38[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua38[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua38[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua38[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua38[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua38[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua38[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua38[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua38[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua38[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua38[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua38[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua38[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua38[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua38[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua38[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua38[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua38[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua38[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua38[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua38[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua38[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua38[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua38[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua38[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua38[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua38[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua38[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua38[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua38[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua38[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua38[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua38[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua38[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua38[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua38[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua38[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua38[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua38[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua38[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua38[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua38[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua38[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua38[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua38[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua38[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua38[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua38[64] })
            break;
          default:
            break;
        }
        break;
      case '39':
        var Gua39 = getApp().globalData.Gua39_grp;
        switch (options.YiLinCiIndex) // BianGua39
        {
          case '1':
            this.setData({ YiLinCi4096: Gua39[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua39[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua39[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua39[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua39[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua39[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua39[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua39[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua39[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua39[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua39[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua39[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua39[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua39[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua39[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua39[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua39[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua39[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua39[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua39[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua39[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua39[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua39[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua39[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua39[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua39[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua39[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua39[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua39[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua39[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua39[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua39[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua39[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua39[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua39[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua39[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua39[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua39[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua39[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua39[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua39[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua39[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua39[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua39[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua39[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua39[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua39[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua39[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua39[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua39[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua39[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua39[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua39[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua39[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua39[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua39[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua39[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua39[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua39[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua39[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua39[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua39[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua39[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua39[64] })
            break;
          default:
            break;
        }
        break;
      case '40':
        var Gua40 = getApp().globalData.Gua40_grp;
        switch (options.YiLinCiIndex) // BianGua40
        {
          case '1':
            this.setData({ YiLinCi4096: Gua40[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua40[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua40[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua40[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua40[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua40[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua40[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua40[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua40[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua40[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua40[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua40[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua40[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua40[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua40[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua40[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua40[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua40[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua40[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua40[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua40[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua40[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua40[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua40[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua40[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua40[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua40[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua40[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua40[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua40[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua40[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua40[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua40[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua40[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua40[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua40[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua40[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua40[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua40[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua40[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua40[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua40[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua40[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua40[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua40[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua40[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua40[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua40[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua40[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua40[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua40[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua40[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua40[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua40[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua40[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua40[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua40[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua40[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua40[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua40[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua40[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua40[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua40[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua40[64] })
            break;
          default:
            break;
        }
        break;
      case '41':
        var Gua41 = getApp().globalData.Gua41_grp;
        switch (options.YiLinCiIndex) // BianGua41
        {
          case '1':
            this.setData({ YiLinCi4096: Gua41[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua41[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua41[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua41[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua41[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua41[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua41[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua41[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua41[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua41[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua41[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua41[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua41[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua41[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua41[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua41[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua41[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua41[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua41[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua41[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua41[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua41[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua41[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua41[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua41[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua41[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua41[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua41[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua41[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua41[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua41[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua41[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua41[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua41[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua41[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua41[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua41[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua41[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua41[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua41[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua41[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua41[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua41[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua41[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua41[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua41[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua41[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua41[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua41[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua41[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua41[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua41[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua41[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua41[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua41[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua41[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua41[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua41[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua41[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua41[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua41[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua41[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua41[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua41[64] })
            break;
          default:
            break;
        }
        break;
      case '42':
        var Gua42 = getApp().globalData.Gua42_grp;
        switch (options.YiLinCiIndex) // BianGua42
        {
          case '1':
            this.setData({ YiLinCi4096: Gua42[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua42[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua42[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua42[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua42[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua42[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua42[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua42[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua42[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua42[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua42[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua42[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua42[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua42[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua42[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua42[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua42[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua42[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua42[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua42[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua42[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua42[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua42[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua42[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua42[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua42[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua42[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua42[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua42[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua42[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua42[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua42[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua42[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua42[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua42[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua42[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua42[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua42[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua42[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua42[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua42[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua42[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua42[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua42[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua42[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua42[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua42[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua42[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua42[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua42[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua42[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua42[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua42[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua42[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua42[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua42[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua42[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua42[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua42[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua42[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua42[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua42[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua42[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua42[64] })
            break;
          default:
            break;
        }
        break;
      case '43':
        var Gua43 = getApp().globalData.Gua43_grp;
        switch (options.YiLinCiIndex) // BianGua43
        {
          case '1':
            this.setData({ YiLinCi4096: Gua43[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua43[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua43[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua43[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua43[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua43[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua43[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua43[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua43[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua43[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua43[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua43[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua43[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua43[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua43[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua43[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua43[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua43[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua43[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua43[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua43[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua43[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua43[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua43[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua43[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua43[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua43[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua43[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua43[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua43[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua43[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua43[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua43[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua43[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua43[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua43[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua43[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua43[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua43[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua43[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua43[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua43[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua43[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua43[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua43[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua43[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua43[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua43[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua43[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua43[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua43[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua43[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua43[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua43[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua43[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua43[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua43[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua43[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua43[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua43[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua43[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua43[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua43[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua43[64] })
            break;
          default:
            break;
        }
        break;
      case '44':
        var Gua44 = getApp().globalData.Gua44_grp;
        switch (options.YiLinCiIndex) // BianGua44
        {
          case '1':
            this.setData({ YiLinCi4096: Gua44[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua44[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua44[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua44[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua44[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua44[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua44[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua44[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua44[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua44[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua44[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua44[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua44[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua44[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua44[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua44[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua44[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua44[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua44[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua44[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua44[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua44[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua44[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua44[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua44[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua44[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua44[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua44[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua44[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua44[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua44[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua44[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua44[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua44[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua44[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua44[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua44[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua44[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua44[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua44[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua44[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua44[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua44[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua44[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua44[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua44[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua44[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua44[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua44[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua44[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua44[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua44[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua44[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua44[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua44[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua44[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua44[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua44[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua44[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua44[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua44[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua44[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua44[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua44[64] })
            break;
          default:
            break;
        }
        break;
      case '45':
        var Gua45 = getApp().globalData.Gua45_grp;
        switch (options.YiLinCiIndex) // BianGua45
        {
          case '1':
            this.setData({ YiLinCi4096: Gua45[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua45[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua45[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua45[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua45[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua45[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua45[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua45[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua45[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua45[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua45[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua45[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua45[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua45[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua45[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua45[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua45[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua45[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua45[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua45[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua45[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua45[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua45[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua45[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua45[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua45[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua45[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua45[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua45[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua45[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua45[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua45[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua45[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua45[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua45[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua45[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua45[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua45[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua45[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua45[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua45[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua45[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua45[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua45[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua45[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua45[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua45[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua45[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua45[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua45[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua45[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua45[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua45[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua45[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua45[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua45[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua45[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua45[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua45[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua45[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua45[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua45[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua45[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua45[64] })
            break;
          default:
            break;
        }
        break;
      case '46':
        var Gua46 = getApp().globalData.Gua46_grp;
        switch (options.YiLinCiIndex) // BianGua46
        {
          case '1':
            this.setData({ YiLinCi4096: Gua46[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua46[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua46[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua46[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua46[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua46[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua46[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua46[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua46[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua46[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua46[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua46[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua46[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua46[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua46[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua46[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua46[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua46[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua46[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua46[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua46[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua46[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua46[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua46[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua46[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua46[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua46[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua46[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua46[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua46[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua46[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua46[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua46[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua46[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua46[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua46[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua46[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua46[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua46[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua46[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua46[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua46[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua46[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua46[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua46[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua46[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua46[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua46[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua46[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua46[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua46[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua46[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua46[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua46[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua46[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua46[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua46[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua46[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua46[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua46[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua46[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua46[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua46[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua46[64] })
            break;
          default:
            break;
        }
        break;
      case '47':
        var Gua47 = getApp().globalData.Gua47_grp;
        switch (options.YiLinCiIndex) // BianGua47
        {
          case '1':
            this.setData({ YiLinCi4096: Gua47[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua47[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua47[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua47[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua47[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua47[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua47[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua47[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua47[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua47[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua47[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua47[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua47[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua47[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua47[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua47[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua47[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua47[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua47[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua47[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua47[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua47[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua47[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua47[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua47[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua47[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua47[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua47[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua47[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua47[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua47[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua47[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua47[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua47[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua47[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua47[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua47[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua47[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua47[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua47[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua47[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua47[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua47[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua47[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua47[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua47[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua47[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua47[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua47[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua47[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua47[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua47[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua47[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua47[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua47[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua47[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua47[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua47[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua47[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua47[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua47[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua47[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua47[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua47[64] })
            break;
          default:
            break;
        }
        break;
      case '48':
        var Gua48 = getApp().globalData.Gua48_grp;
        switch (options.YiLinCiIndex) // BianGua48
        {
          case '1':
            this.setData({ YiLinCi4096: Gua48[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua48[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua48[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua48[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua48[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua48[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua48[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua48[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua48[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua48[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua48[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua48[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua48[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua48[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua48[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua48[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua48[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua48[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua48[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua48[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua48[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua48[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua48[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua48[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua48[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua48[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua48[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua48[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua48[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua48[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua48[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua48[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua48[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua48[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua48[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua48[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua48[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua48[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua48[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua48[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua48[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua48[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua48[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua48[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua48[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua48[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua48[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua48[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua48[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua48[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua48[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua48[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua48[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua48[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua48[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua48[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua48[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua48[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua48[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua48[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua48[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua48[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua48[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua48[64] })
            break;
          default:
            break;
        }
        break;
      case '49':
        var Gua49 = getApp().globalData.Gua49_grp;
        switch (options.YiLinCiIndex) // BianGua49
        {
          case '1':
            this.setData({ YiLinCi4096: Gua49[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua49[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua49[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua49[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua49[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua49[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua49[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua49[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua49[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua49[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua49[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua49[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua49[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua49[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua49[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua49[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua49[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua49[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua49[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua49[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua49[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua49[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua49[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua49[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua49[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua49[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua49[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua49[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua49[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua49[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua49[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua49[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua49[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua49[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua49[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua49[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua49[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua49[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua49[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua49[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua49[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua49[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua49[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua49[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua49[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua49[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua49[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua49[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua49[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua49[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua49[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua49[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua49[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua49[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua49[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua49[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua49[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua49[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua49[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua49[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua49[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua49[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua49[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua49[64] })
            break;
          default:
            break;
        }
        break;
      case '50':
        var Gua50 = getApp().globalData.Gua50_grp;
        switch (options.YiLinCiIndex) // BianGua50
        {
          case '1':
            this.setData({ YiLinCi4096: Gua50[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua50[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua50[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua50[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua50[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua50[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua50[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua50[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua50[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua50[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua50[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua50[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua50[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua50[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua50[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua50[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua50[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua50[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua50[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua50[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua50[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua50[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua50[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua50[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua50[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua50[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua50[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua50[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua50[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua50[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua50[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua50[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua50[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua50[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua50[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua50[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua50[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua50[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua50[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua50[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua50[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua50[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua50[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua50[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua50[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua50[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua50[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua50[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua50[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua50[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua50[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua50[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua50[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua50[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua50[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua50[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua50[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua50[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua50[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua50[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua50[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua50[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua50[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua50[64] })
            break;
          default:
            break;
        }
        break;
      case '51':
        var Gua51 = getApp().globalData.Gua51_grp;
        switch (options.YiLinCiIndex) // BianGua51
        {
          case '1':
            this.setData({ YiLinCi4096: Gua51[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua51[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua51[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua51[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua51[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua51[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua51[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua51[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua51[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua51[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua51[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua51[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua51[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua51[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua51[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua51[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua51[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua51[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua51[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua51[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua51[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua51[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua51[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua51[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua51[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua51[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua51[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua51[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua51[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua51[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua51[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua51[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua51[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua51[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua51[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua51[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua51[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua51[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua51[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua51[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua51[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua51[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua51[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua51[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua51[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua51[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua51[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua51[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua51[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua51[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua51[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua51[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua51[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua51[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua51[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua51[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua51[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua51[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua51[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua51[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua51[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua51[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua51[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua51[64] })
            break;
          default:
            break;
        }
        break;
      case '52':
        var Gua52 = getApp().globalData.Gua52_grp;
        switch (options.YiLinCiIndex) // BianGua52
        {
          case '1':
            this.setData({ YiLinCi4096: Gua52[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua52[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua52[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua52[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua52[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua52[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua52[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua52[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua52[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua52[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua52[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua52[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua52[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua52[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua52[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua52[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua52[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua52[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua52[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua52[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua52[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua52[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua52[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua52[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua52[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua52[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua52[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua52[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua52[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua52[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua52[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua52[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua52[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua52[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua52[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua52[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua52[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua52[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua52[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua52[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua52[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua52[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua52[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua52[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua52[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua52[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua52[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua52[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua52[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua52[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua52[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua52[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua52[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua52[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua52[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua52[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua52[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua52[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua52[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua52[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua52[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua52[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua52[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua52[64] })
            break;
          default:
            break;
        }
        break;
      case '53':
        var Gua53 = getApp().globalData.Gua53_grp;
        switch (options.YiLinCiIndex) // BianGua53
        {
          case '1':
            this.setData({ YiLinCi4096: Gua53[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua53[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua53[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua53[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua53[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua53[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua53[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua53[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua53[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua53[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua53[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua53[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua53[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua53[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua53[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua53[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua53[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua53[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua53[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua53[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua53[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua53[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua53[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua53[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua53[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua53[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua53[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua53[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua53[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua53[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua53[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua53[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua53[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua53[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua53[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua53[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua53[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua53[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua53[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua53[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua53[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua53[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua53[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua53[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua53[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua53[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua53[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua53[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua53[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua53[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua53[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua53[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua53[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua53[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua53[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua53[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua53[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua53[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua53[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua53[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua53[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua53[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua53[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua53[64] })
            break;
          default:
            break;
        }
        break;
      case '54':
        var Gua54 = getApp().globalData.Gua54_grp;
        switch (options.YiLinCiIndex) // BianGua54
        {
          case '1':
            this.setData({ YiLinCi4096: Gua54[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua54[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua54[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua54[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua54[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua54[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua54[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua54[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua54[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua54[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua54[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua54[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua54[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua54[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua54[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua54[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua54[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua54[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua54[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua54[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua54[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua54[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua54[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua54[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua54[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua54[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua54[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua54[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua54[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua54[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua54[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua54[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua54[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua54[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua54[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua54[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua54[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua54[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua54[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua54[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua54[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua54[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua54[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua54[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua54[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua54[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua54[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua54[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua54[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua54[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua54[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua54[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua54[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua54[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua54[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua54[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua54[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua54[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua54[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua54[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua54[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua54[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua54[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua54[64] })
            break;
          default:
            break;
        }
        break;
      case '55':
        var Gua55 = getApp().globalData.Gua55_grp;
        switch (options.YiLinCiIndex) // BianGua55
        {
          case '1':
            this.setData({ YiLinCi4096: Gua55[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua55[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua55[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua55[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua55[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua55[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua55[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua55[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua55[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua55[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua55[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua55[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua55[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua55[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua55[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua55[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua55[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua55[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua55[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua55[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua55[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua55[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua55[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua55[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua55[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua55[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua55[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua55[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua55[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua55[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua55[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua55[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua55[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua55[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua55[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua55[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua55[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua55[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua55[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua55[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua55[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua55[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua55[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua55[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua55[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua55[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua55[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua55[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua55[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua55[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua55[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua55[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua55[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua55[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua55[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua55[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua55[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua55[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua55[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua55[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua55[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua55[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua55[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua55[64] })
            break;
          default:
            break;
        }
        break;
      case '56':
        var Gua56 = getApp().globalData.Gua56_grp;
        switch (options.YiLinCiIndex) // BianGua56
        {
          case '1':
            this.setData({ YiLinCi4096: Gua56[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua56[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua56[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua56[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua56[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua56[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua56[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua56[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua56[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua56[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua56[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua56[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua56[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua56[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua56[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua56[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua56[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua56[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua56[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua56[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua56[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua56[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua56[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua56[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua56[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua56[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua56[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua56[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua56[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua56[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua56[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua56[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua56[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua56[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua56[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua56[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua56[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua56[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua56[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua56[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua56[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua56[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua56[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua56[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua56[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua56[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua56[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua56[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua56[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua56[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua56[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua56[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua56[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua56[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua56[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua56[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua56[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua56[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua56[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua56[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua56[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua56[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua56[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua56[64] })
            break;
          default:
            break;
        }
        break;
      case '57':
        var Gua57 = getApp().globalData.Gua57_grp;
        switch (options.YiLinCiIndex) // BianGua57
        {
          case '1':
            this.setData({ YiLinCi4096: Gua57[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua57[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua57[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua57[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua57[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua57[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua57[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua57[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua57[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua57[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua57[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua57[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua57[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua57[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua57[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua57[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua57[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua57[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua57[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua57[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua57[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua57[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua57[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua57[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua57[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua57[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua57[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua57[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua57[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua57[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua57[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua57[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua57[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua57[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua57[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua57[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua57[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua57[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua57[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua57[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua57[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua57[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua57[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua57[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua57[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua57[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua57[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua57[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua57[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua57[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua57[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua57[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua57[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua57[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua57[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua57[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua57[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua57[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua57[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua57[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua57[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua57[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua57[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua57[64] })
            break;
          default:
            break;
        }
        break;
      case '58':
        var Gua58 = getApp().globalData.Gua58_grp;
        switch (options.YiLinCiIndex) // BianGua58
        {
          case '1':
            this.setData({ YiLinCi4096: Gua58[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua58[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua58[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua58[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua58[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua58[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua58[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua58[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua58[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua58[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua58[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua58[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua58[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua58[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua58[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua58[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua58[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua58[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua58[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua58[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua58[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua58[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua58[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua58[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua58[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua58[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua58[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua58[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua58[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua58[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua58[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua58[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua58[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua58[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua58[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua58[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua58[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua58[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua58[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua58[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua58[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua58[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua58[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua58[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua58[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua58[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua58[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua58[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua58[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua58[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua58[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua58[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua58[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua58[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua58[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua58[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua58[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua58[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua58[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua58[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua58[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua58[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua58[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua58[64] })
            break;
          default:
            break;
        }
        break;
      case '59':
        var Gua59 = getApp().globalData.Gua59_grp;
        switch (options.YiLinCiIndex) // BianGua59
        {
          case '1':
            this.setData({ YiLinCi4096: Gua59[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua59[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua59[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua59[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua59[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua59[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua59[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua59[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua59[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua59[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua59[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua59[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua59[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua59[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua59[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua59[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua59[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua59[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua59[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua59[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua59[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua59[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua59[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua59[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua59[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua59[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua59[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua59[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua59[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua59[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua59[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua59[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua59[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua59[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua59[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua59[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua59[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua59[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua59[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua59[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua59[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua59[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua59[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua59[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua59[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua59[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua59[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua59[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua59[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua59[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua59[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua59[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua59[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua59[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua59[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua59[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua59[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua59[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua59[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua59[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua59[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua59[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua59[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua59[64] })
            break;
          default:
            break;
        }
        break;
      case '60':
        var Gua60 = getApp().globalData.Gua60_grp;
        switch (options.YiLinCiIndex) // BianGua60
        {
          case '1':
            this.setData({ YiLinCi4096: Gua60[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua60[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua60[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua60[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua60[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua60[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua60[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua60[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua60[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua60[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua60[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua60[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua60[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua60[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua60[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua60[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua60[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua60[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua60[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua60[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua60[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua60[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua60[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua60[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua60[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua60[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua60[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua60[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua60[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua60[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua60[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua60[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua60[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua60[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua60[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua60[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua60[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua60[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua60[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua60[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua60[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua60[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua60[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua60[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua60[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua60[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua60[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua60[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua60[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua60[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua60[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua60[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua60[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua60[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua60[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua60[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua60[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua60[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua60[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua60[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua60[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua60[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua60[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua60[64] })
            break;
          default:
            break;
        }
        break;
      case '61':
        var Gua61 = getApp().globalData.Gua61_grp;
        switch (options.YiLinCiIndex) // BianGua61
        {
          case '1':
            this.setData({ YiLinCi4096: Gua61[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua61[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua61[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua61[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua61[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua61[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua61[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua61[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua61[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua61[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua61[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua61[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua61[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua61[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua61[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua61[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua61[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua61[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua61[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua61[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua61[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua61[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua61[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua61[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua61[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua61[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua61[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua61[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua61[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua61[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua61[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua61[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua61[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua61[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua61[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua61[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua61[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua61[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua61[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua61[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua61[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua61[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua61[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua61[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua61[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua61[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua61[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua61[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua61[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua61[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua61[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua61[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua61[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua61[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua61[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua61[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua61[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua61[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua61[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua61[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua61[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua61[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua61[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua61[64] })
            break;
          default:
            break;
        }
        break;
      case '62':
        var Gua62 = getApp().globalData.Gua62_grp;
        switch (options.YiLinCiIndex) // BianGua62
        {
          case '1':
            this.setData({ YiLinCi4096: Gua62[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua62[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua62[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua62[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua62[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua62[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua62[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua62[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua62[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua62[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua62[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua62[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua62[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua62[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua62[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua62[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua62[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua62[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua62[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua62[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua62[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua62[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua62[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua62[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua62[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua62[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua62[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua62[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua62[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua62[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua62[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua62[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua62[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua62[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua62[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua62[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua62[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua62[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua62[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua62[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua62[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua62[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua62[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua62[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua62[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua62[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua62[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua62[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua62[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua62[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua62[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua62[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua62[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua62[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua62[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua62[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua62[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua62[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua62[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua62[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua62[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua62[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua62[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua62[64] })
            break;
          default:
            break;
        }
        break;
      case '63':
        var Gua63 = getApp().globalData.Gua63_grp;
        switch (options.YiLinCiIndex) // BianGua63
        {
          case '1':
            this.setData({ YiLinCi4096: Gua63[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua63[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua63[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua63[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua63[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua63[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua63[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua63[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua63[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua63[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua63[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua63[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua63[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua63[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua63[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua63[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua63[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua63[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua63[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua63[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua63[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua63[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua63[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua63[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua63[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua63[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua63[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua63[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua63[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua63[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua63[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua63[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua63[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua63[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua63[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua63[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua63[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua63[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua63[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua63[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua63[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua63[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua63[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua63[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua63[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua63[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua63[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua63[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua63[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua63[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua63[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua63[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua63[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua63[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua63[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua63[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua63[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua63[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua63[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua63[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua63[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua63[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua63[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua63[64] })
            break;
          default:
            break;
        }
        break;
      case '64':
        var Gua64 = getApp().globalData.Gua64_grp;
        switch (options.YiLinCiIndex) // BianGua64
        {
          case '1':
            this.setData({ YiLinCi4096: Gua64[1] })
            break;
          case '2':
            this.setData({ YiLinCi4096: Gua64[2] })
            break;
          case '3':
            this.setData({ YiLinCi4096: Gua64[3] })
            break;
          case '4':
            this.setData({ YiLinCi4096: Gua64[4] })
            break;
          case '5':
            this.setData({ YiLinCi4096: Gua64[5] })
            break;
          case '6':
            this.setData({ YiLinCi4096: Gua64[6] })
            break;
          case '7':
            this.setData({ YiLinCi4096: Gua64[7] })
            break;
          case '8':
            this.setData({ YiLinCi4096: Gua64[8] })
            break;
          case '9':
            this.setData({ YiLinCi4096: Gua64[9] })
            break;
          case '10':
            this.setData({ YiLinCi4096: Gua64[10] })
            break;
          case '11':
            this.setData({ YiLinCi4096: Gua64[11] })
            break;
          case '12':
            this.setData({ YiLinCi4096: Gua64[12] })
            break;
          case '13':
            this.setData({ YiLinCi4096: Gua64[13] })
            break;
          case '14':
            this.setData({ YiLinCi4096: Gua64[14] })
            break;
          case '15':
            this.setData({ YiLinCi4096: Gua64[15] })
            break;
          case '16':
            this.setData({ YiLinCi4096: Gua64[16] })
            break;
          case '17':
            this.setData({ YiLinCi4096: Gua64[17] })
            break;
          case '18':
            this.setData({ YiLinCi4096: Gua64[18] })
            break;
          case '19':
            this.setData({ YiLinCi4096: Gua64[19] })
            break;
          case '20':
            this.setData({ YiLinCi4096: Gua64[20] })
            break;
          case '21':
            this.setData({ YiLinCi4096: Gua64[21] })
            break;
          case '22':
            this.setData({ YiLinCi4096: Gua64[22] })
            break;
          case '23':
            this.setData({ YiLinCi4096: Gua64[23] })
            break;
          case '24':
            this.setData({ YiLinCi4096: Gua64[24] })
            break;
          case '25':
            this.setData({ YiLinCi4096: Gua64[25] })
            break;
          case '26':
            this.setData({ YiLinCi4096: Gua64[26] })
            break;
          case '27':
            this.setData({ YiLinCi4096: Gua64[27] })
            break;
          case '28':
            this.setData({ YiLinCi4096: Gua64[28] })
            break;
          case '29':
            this.setData({ YiLinCi4096: Gua64[29] })
            break;
          case '30':
            this.setData({ YiLinCi4096: Gua64[30] })
            break;
          case '31':
            this.setData({ YiLinCi4096: Gua64[31] })
            break;
          case '32':
            this.setData({ YiLinCi4096: Gua64[32] })
            break;
          case '33':
            this.setData({ YiLinCi4096: Gua64[33] })
            break;
          case '34':
            this.setData({ YiLinCi4096: Gua64[34] })
            break;
          case '35':
            this.setData({ YiLinCi4096: Gua64[35] })
            break;
          case '36':
            this.setData({ YiLinCi4096: Gua64[36] })
            break;
          case '37':
            this.setData({ YiLinCi4096: Gua64[37] })
            break;
          case '38':
            this.setData({ YiLinCi4096: Gua64[38] })
            break;
          case '39':
            this.setData({ YiLinCi4096: Gua64[39] })
            break;
          case '40':
            this.setData({ YiLinCi4096: Gua64[40] })
            break;
          case '41':
            this.setData({ YiLinCi4096: Gua64[41] })
            break;
          case '42':
            this.setData({ YiLinCi4096: Gua64[42] })
            break;
          case '43':
            this.setData({ YiLinCi4096: Gua64[43] })
            break;
          case '44':
            this.setData({ YiLinCi4096: Gua64[44] })
            break;
          case '45':
            this.setData({ YiLinCi4096: Gua64[45] })
            break;
          case '46':
            this.setData({ YiLinCi4096: Gua64[46] })
            break;
          case '47':
            this.setData({ YiLinCi4096: Gua64[47] })
            break;
          case '48':
            this.setData({ YiLinCi4096: Gua64[48] })
            break;
          case '49':
            this.setData({ YiLinCi4096: Gua64[49] })
            break;
          case '50':
            this.setData({ YiLinCi4096: Gua64[50] })
            break;
          case '51':
            this.setData({ YiLinCi4096: Gua64[51] })
            break;
          case '52':
            this.setData({ YiLinCi4096: Gua64[52] })
            break;
          case '53':
            this.setData({ YiLinCi4096: Gua64[53] })
            break;
          case '54':
            this.setData({ YiLinCi4096: Gua64[54] })
            break;
          case '55':
            this.setData({ YiLinCi4096: Gua64[55] })
            break;
          case '56':
            this.setData({ YiLinCi4096: Gua64[56] })
            break;
          case '57':
            this.setData({ YiLinCi4096: Gua64[57] })
            break;
          case '58':
            this.setData({ YiLinCi4096: Gua64[58] })
            break;
          case '59':
            this.setData({ YiLinCi4096: Gua64[59] })
            break;
          case '60':
            this.setData({ YiLinCi4096: Gua64[60] })
            break;
          case '61':
            this.setData({ YiLinCi4096: Gua64[61] })
            break;
          case '62':
            this.setData({ YiLinCi4096: Gua64[62] })
            break;
          case '63':
            this.setData({ YiLinCi4096: Gua64[63] })
            break;
          case '64':
            this.setData({ YiLinCi4096: Gua64[64] })
            break;
          default:
            break;
        }        
        break;
      default:
        console.error('not in 64')
        break;
    }
    
     // console.error('okokok')
    


    var yao_h = 18
    var yao_gap = 6
    var yangyao_w = myViewWidth/4 //120
    var yinyao_w = yangyao_w/3 //50
    var yinyao_gap = yangyao_w - yinyao_w *2 //20
    var yao1_start_x = myViewWidth/8
    var yao1_start_y = 10

// BenGua start
    var gua_grp = getApp().globalData.Gua_grp; 
    var j = options.YiLinIndex - 1
    var yao_group = gua_grp[j]

    var context = wx.createCanvasContext('GuaTuCanvas1')
    context.setLineWidth(yao_h)
    context.beginPath()

    for (var i = 0; i < 6; i++) {
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

// BianGua start
    var k = options.YiLinCiIndex - 1
    var yao_group = gua_grp[k]

    var context = wx.createCanvasContext('GuaTuCanvas2')
    context.setLineWidth(yao_h)
    context.beginPath()

    for (var i = 0; i < 6; i++) {
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
   gYiLinIndex =  options.YiLinIndex
   gYiLinCiIndex = options.YiLinCiIndex
   gBenGuaTitle = options.BenGuaTitle 
   gBianGuaId = options.BianGuaId
   */
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
/*
  touchStartInJiaoShiYi3: function (e) {
    touchDot = e.touches[0].pageX; // 获取触摸时的原点
    // 使用js计时器记录时间    
    interval = setInterval(function () {
      time++;
    }, 100);
  },

  touchEndInJiaoShiYi3: function (e) {
    var touchMove = e.changedTouches[0].pageX;
    // 向左滑动   
    if (touchMove - touchDot <= -40 && time < 10 && flag_hd == true) {
      flag_hd = false;
      //执行切换页面的方法
      console.log("向右滑动");
      gYiLinIndex  = gYiLinIndex - 1
      gYiLinCiIndex = gYiLinCiIndex - 1
      console.log(gYiLinIndex);
      console.log(gYiLinCiIndex);
      
      wx.navigateTo({
        url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=' + gYiLinCiIndex + '&YiLinIndex=' + gYiLinIndex + '&BenGuaTitle=' + gBenGuaTitle + '&BianGuaId=' + gBianGuaId
      })
    }
    // 向右滑动   
    if (touchMove - touchDot >= 40 && time < 10 && flag_hd == true) {
      flag_hd = false;
      //执行切换页面的方法
      console.log("向左滑动");
      console.log(gYiLinIndex - 1);
      console.log(gYiLinCiIndex - 1);
      wx.navigateTo({
        url: '../JiaoShiYi3/JiaoShiYi3?YiLinCiIndex=' + gYiLinCiIndex + '&YiLinIndex=' + gYiLinIndex + '&BenGuaTitle=' + gBenGuaTitle + '&BianGuaId=' + gBianGuaId
      })
    }
    clearInterval(interval); // 清除setInterval
    time = 0;
  },
*/
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