// pages/Najia/NajiaPaiPan.js
var util = require('../../utils/util.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
 
  },
LiuShenPai:function(todayRiGan){
  var liushen_grp;
  switch (todayRiGan)
  {
    case'甲':
    case'乙':
      liushen_grp = ['玄武','白虎','腾蛇','勾陈','朱雀','青龙'];
      break;   
    case '丙':
    case '丁':
      liushen_grp = ['青龙','玄武', '白虎', '腾蛇', '勾陈', '朱雀'];
      break;
    case '庚':
    case '辛':
      liushen_grp = ['腾蛇','勾陈', '朱雀', '青龙', '玄武', '白虎'];
      break;
    case '壬':
    case '癸':
      liushen_grp = ['白虎','腾蛇', '勾陈', '朱雀', '青龙', '玄武'];
      break;
    case '戊':
      liushen_grp = ['朱雀', '青龙', '玄武', '白虎', '腾蛇', '勾陈'];
      break;
    case '己':
      liushen_grp = ['勾陈','朱雀', '青龙', '玄武', '白虎', '腾蛇'];
      break;  
      default:
      break;      
  }
  return liushen_grp;
},  
GetShenSha:function(rigan,rizhi){
  var shensha_list=[];
  var RiGan_Guiren = {
    '甲': '丑未', '乙': '子申', '丙': '亥酉', '丁': '亥酉', '戊': '丑未',
    '己': '子申', '庚': '丑未', '辛': '午寅', '壬': '卯巳', '癸': '卯巳', 
  } 
  var RiGan_Ganlu={
    '甲': '寅', '乙': '卯', '丙': '巳', '丁': '午', '戊': '巳',
    '己': '午', '庚': '申', '辛': '酉', '壬': '亥', '癸': '子', 
  }
  var RiGan_Wenchang = {
    '甲': '巳', '乙': '午', '丙': '申', '丁': '酉', '戊': '申',
    '己': '酉', '庚': '亥', '辛': '子', '壬': '寅', '癸': '卯',
  }
  var RiGan_Yangren = {
    '甲': '卯', '乙': '辰', '丙': '午', '丁': '未', '戊': '午',
    '己': '未', '庚': '酉', '辛': '戌', '壬': '子', '癸': '丑',
  }
  var RiGan_Jinyu = {
    '甲': '辰', '乙': '巳', '丙': '未', '丁': '申', '戊': '未',
    '己': '申', '庚': '戌', '辛': '亥', '壬': '丑', '癸': '寅',
  }
  var RiZhi_Yima={
    '子': '寅', '丑': '亥', '寅': '申', '卯': '巳', '辰': '寅', '巳': '亥',
    '午': '申', '未': '巳', '申': '寅', '酉': '亥', '戌': '申', '亥': '巳',
  }
  var RiZhi_Huagai = {
    '子': '戌', '丑': '丑', '寅': '戌', '卯': '未', '辰': '戌', '巳': '丑',
    '午': '戌', '未': '未', '申': '戌', '酉': '未', '戌': '戌', '亥': '未',
  }
  var RiZhi_Taohua = {
    '子': '酉', '丑': '午', '寅': '卯', '卯': '子', '辰': '酉', '巳': '午',
    '午': '卯', '未': '子', '申': '酉', '酉': '午', '戌': '卯', '亥': '子',
  }
  var RiZhi_Jiesha = {
    '子': '巳', '丑': '寅', '寅': '亥', '卯': '申', '辰': '巳', '巳': '寅',
    '午': '亥', '未': '申', '申': '巳', '酉': '寅', '戌': '亥', '亥': '申',
  }
  var RiZhi_Jiangxing = {
    '子': '子', '丑': '酉', '寅': '午', '卯': '卯', '辰': '子', '巳': '酉',
    '午': '午', '未': '卯', '申': '子', '酉': '酉', '戌': '午', '亥': '卯',
  }
  /*shensha_list=[
    RiGan_Guiren[rigan]+RiGan_Wenchang[rigan]+RiGan_Yangren[rigan]+RiGan_Jinyu[rigan]+RiGan_Ganlu[rigan]+
    RiZhi_Yima[rizhi]+RiZhi_Huagai[rizhi]+RiZhi_Taohua[rizhi]+RiZhi_Jiesha[rizhi]+RiZhi_Jiangxing[rizhi]
]*/
  shensha_list.push(RiGan_Guiren[rigan]);
  shensha_list.push(RiGan_Wenchang[rigan])
  shensha_list.push(RiGan_Yangren[rigan])
  shensha_list.push(RiGan_Jinyu[rigan])
  shensha_list.push(RiGan_Ganlu[rigan])

  shensha_list.push(RiZhi_Yima[rizhi]) 
  shensha_list.push(RiZhi_Huagai[rizhi]) 
  shensha_list.push(RiZhi_Taohua[rizhi]) 
  shensha_list.push(RiZhi_Jiesha[rizhi]) 
  shensha_list.push(RiZhi_Jiangxing[rizhi]) 
  return shensha_list;
},

showShenSha:function(rgan,rzhi){
  var sha_list =this.GetShenSha(rgan,rzhi)
 // console.error('sha_list'+sha_list)
  this.setData({
    
    RiGansha_1: sha_list[0],
    RiGansha_2: sha_list[1],
    RiGansha_3: sha_list[2],
    RiGansha_4: sha_list[3],
    RiGansha_5: sha_list[4],

    RiZhisha_1: sha_list[5],
    RiZhisha_2: sha_list[6],
    RiZhisha_3: sha_list[7],
    RiZhisha_4: sha_list[8],
    RiZhisha_5: sha_list[9],
    
  })
},
GetXunKong:function(ri_tiangan){
  var xunk;
  var xun1 = ['甲子', '乙丑', '丙寅', '丁卯', '戊辰', '己巳', '庚午', '辛未', '壬申', '癸酉' ]
  var xun2 = ['甲戌', '乙亥', '丙子', '丁丑', '戊寅', '己卯', '庚辰', '辛巳', '壬午', '癸未',]
  var xun3 = ['甲申', '乙酉', '丙戌', '丁亥', '戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳']
  var xun4 = ['甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥', '庚子', '辛丑', '壬寅', '癸卯']
  var xun5 = ['甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥', '壬子', '癸丑']
  var xun6 = ['甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥']
  
 // console.error(xun1.indexOf('丙子'))
  if ((xun1.indexOf(ri_tiangan) > 0)|| (xun1.indexOf(ri_tiangan) == 0))
    xunk = '戌亥'
  else if ((xun2.indexOf(ri_tiangan) > 0) || (xun2.indexOf(ri_tiangan) == 0))
    xunk = '申酉'
  else if ((xun3.indexOf(ri_tiangan) > 0) || (xun3.indexOf(ri_tiangan) == 0))
    xunk = '午未'
  else if ((xun4.indexOf(ri_tiangan) > 0) || (xun4.indexOf(ri_tiangan) == 0))
    xunk = '辰巳'
  else if ((xun5.indexOf(ri_tiangan) > 0) || (xun5.indexOf(ri_tiangan) == 0))
    xunk = '寅卯'
  else if ((xun6.indexOf(ri_tiangan) > 0) || (xun6.indexOf(ri_tiangan) == 0))
    xunk = '子丑'

    return xunk
},
  GetPaiPanFlag:function(manual_date,xiadong_list,qiguaflag,ppflag){
    var flag; //     0 is 冬至到夏至之间， 1 is 夏至到冬至之间
    var xia_day = xiadong_list[0] + xiadong_list[1]
    var dong_day = xiadong_list[3] + xiadong_list[4]
    xia_day = Number(xia_day)
    dong_day = Number(dong_day)

    if (qiguaflag==0) // auto
    {
    var date = util.formatTime(new Date());
    var nmonth = date.getMonth() + 1;
    var ndate = date.getDate();
      
    }
    else  // manual
    {
      var nmonth = Number(manual_date[5] + manual_date[6]);
      var ndate = Number(manual_date[8] + manual_date[9])

    }
    
    //console.error('xia_day dong_day is ' + ndate)

    if ((nmonth > 6) && (nmonth<12))
    {
      flag = 1;      
    }
    else if ((nmonth == 6) && (ndate > xia_day))
    {
      flag = 1;
    }
    else if ((nmonth == 12) && ((ndate < dong_day) || (ndate == dong_day)))
    {
      flag = 1;
     // console.error('))))))))))))))))');
    }
    else
    {
      flag = 0;
     // console.error('=============');
    }

    if (ppflag=='1') 
      flag = 0

    return flag
    //console.error('xia_day is ' + xia_day);
    //console.error('xia_day is ' + typeof(Number(xia_day)));
  },


GetLiuQin:function(guaIndex,xiadong_flag){
var gua64LiuQin=[
  ['父母壬戌土', '兄弟壬申金', '官鬼壬午火', '父母甲辰土', '妻财甲寅木', '子孙甲子水'],
  ['子孙癸酉金', '妻财癸亥水', '兄弟癸丑土', '官鬼乙卯木', '父母乙巳火', '兄弟乙未土'],
  ['兄弟戊子水', '官鬼戊戌土', '父母戊申金', '官鬼庚辰土', '子孙庚寅木', '兄弟庚子水'],
  ['父母丙寅木', '官鬼丙子水', '子孙丙戌土', '兄弟戊午火', '子孙戊辰土', '父母戊寅木'],
  ['妻财戊子水', '兄弟戊戌土', '子孙戊申金', '兄弟甲辰土', '官鬼甲寅木', '妻财甲子水'],
  ['子孙壬戌土', '妻财壬申金', '兄弟壬午火', '兄弟戊午火', '子孙戊辰土', '父母戊寅木'],
  ['父母癸酉金', '兄弟癸亥水', '官鬼癸丑土', '妻财戊午火', '官鬼戊辰土', '子孙戊寅木'],
  ['妻财戊子水', '兄弟戊戌土', '子孙戊申金', '官鬼乙卯木', '父母乙巳火', '兄弟乙未土'],
  ['兄弟辛卯木', '子孙辛巳火', '妻财辛未土', '妻财甲辰土', '兄弟甲寅木', '父母甲子水'],
  ['兄弟壬戌土', '子孙壬申金', '父母壬午火', '兄弟丁丑土', '官鬼丁卯木', '父母丁巳火'],
  ['子孙癸酉金', '妻财癸亥水', '兄弟癸丑土', '兄弟甲辰土', '官鬼甲寅木', '妻财甲子水'],
  ['父母壬戌土', '兄弟壬申金', '官鬼壬午火', '妻财乙卯木', '官鬼乙巳火', '父母乙未土'],
  ['子孙壬戌土', '妻财壬申金', '兄弟壬午火', '官鬼己亥水', '子孙己丑土', '父母己卯木'],
  ['官鬼己巳火', '父母己未土', '兄弟己酉金', '父母甲辰土', '妻财甲寅木', '子孙甲子水'],
  ['兄弟癸酉金', '子孙癸亥水', '父母癸丑土', '兄弟丙申金', '官鬼丙午火', '父母丙辰土'],
  ['妻财庚戌土', '官鬼庚申金', '子孙庚午火', '兄弟乙卯木', '子孙乙巳火', '妻财乙未土'],
  ['妻财丁未土', '官鬼丁酉金', '父母丁亥水', '妻财庚辰土', '兄弟庚寅木', '父母庚子水'],
  ['兄弟丙寅木', '父母丙子水', '妻财丙戌土', '官鬼辛酉金', '父母辛亥水', '妻财辛丑土'],
  ['子孙癸酉金', '妻财癸亥水', '兄弟癸丑土', '兄弟丁丑土', '官鬼丁卯木', '父母丁巳火'],
  ['妻财辛卯木', '官鬼辛巳火', '父母辛未土', '妻财乙卯木', '官鬼乙巳火', '父母乙未土'],
  ['子孙己巳火', '妻财己未土', '官鬼己酉金', '妻财庚辰土', '兄弟庚寅木', '父母庚子水'],
  ['官鬼丙寅木', '妻财丙子水', '兄弟丙戌土', '妻财己亥水', '兄弟己丑土', '官鬼己卯木'],
  ['妻财丙寅木', '子孙丙子水', '父母丙戌土', '妻财乙卯木', '官鬼乙巳火', '父母乙未土'],
  ['子孙癸酉金', '妻财癸亥水', '兄弟癸丑土', '兄弟庚辰土', '官鬼庚寅木', '妻财庚子水'],
  ['妻财壬戌土', '官鬼壬申金', '子孙壬午火', '妻财庚辰土', '兄弟庚寅木', '父母庚子水'],
  ['官鬼丙寅木', '妻财丙子水', '兄弟丙戌土', '兄弟甲辰土', '官鬼甲寅木', '妻财甲子水'],
  ['兄弟丙寅木', '父母丙子水', '妻财丙戌土', '妻财庚辰土', '兄弟庚寅木', '父母庚子水'],
  ['妻财丁未土', '官鬼丁酉金', '父母丁亥水', '官鬼辛酉金', '父母辛亥水', '妻财辛丑土'],
  ['兄弟戊子水', '官鬼戊戌土', '父母戊申金', '妻财戊午火', '官鬼戊辰土', '子孙戊寅木'],
  ['兄弟己巳火', '子孙己未土', '妻财己酉金', '官鬼己亥水', '子孙己丑土', '父母己卯木'],
  ['父母丁未土', '兄弟丁酉金', '子孙丁亥水', '兄弟丙申金', '官鬼丙午火', '父母丙辰土'],
  ['妻财庚戌土', '官鬼庚申金', '子孙庚午火', '官鬼辛酉金', '父母辛亥水', '妻财辛丑土'],
  ['父母壬戌土', '兄弟壬申金', '官鬼壬午火', '兄弟丙申金', '官鬼丙午火', '父母丙辰土'],
  ['兄弟庚戌土', '子孙庚申金', '父母庚午火', '兄弟甲辰土', '官鬼甲寅木', '妻财甲子水'],
  ['官鬼己巳火', '父母己未土', '兄弟己酉金', '妻财乙卯木', '官鬼乙巳火', '父母乙未土'],
  ['父母癸酉金', '兄弟癸亥水', '官鬼癸丑土', '兄弟己亥水', '官鬼己丑土', '子孙己卯木'],
  ['兄弟辛卯木', '子孙辛巳火', '妻财辛未土', '父母己亥水', '妻财己丑土', '兄弟己卯木'],
  ['父母己巳火', '兄弟己未土', '子孙己酉金', '兄弟丁丑土', '官鬼丁卯木', '父母丁巳火'],
  ['子孙戊子水', '父母戊戌土', '兄弟戊申金', '兄弟丙申金', '官鬼丙午火', '父母丙辰土'],
  ['妻财庚戌土', '官鬼庚申金', '子孙庚午火', '子孙戊午火', '妻财戊辰土', '兄弟戊寅木'],
  ['官鬼丙寅木', '妻财丙子水', '兄弟丙戌土', '兄弟丁丑土', '官鬼丁卯木', '父母丁巳火'],
  ['兄弟辛卯木', '子孙辛巳火', '妻财辛未土', '妻财庚辰土', '兄弟庚寅木', '父母庚子水'],
  ['兄弟丁未土', '子孙丁酉金', '妻财丁亥水', '兄弟甲辰土', '官鬼甲寅木', '妻财甲子水'],
  ['父母壬戌土', '兄弟壬申金', '官鬼壬午火', '兄弟辛酉金', '子孙辛亥水', '父母辛丑土'],
  ['父母丁未土', '兄弟丁酉金', '子孙丁亥水', '妻财乙卯木', '官鬼乙巳火', '父母乙未土'],
  ['官鬼癸酉金', '父母癸亥水', '妻财癸丑土', '官鬼辛酉金', '父母辛亥水', '妻财辛丑土'],
  ['父母丁未土', '兄弟丁酉金', '子孙丁亥水', '官鬼戊午火', '父母戊辰土', '妻财戊寅木'],
  ['父母戊子水', '妻财戊戌土', '官鬼戊申金', '官鬼辛酉金', '父母辛亥水', '妻财辛丑土'],
  ['官鬼丁未土', '父母丁酉金', '兄弟丁亥水', '兄弟己亥水', '官鬼己丑土', '子孙己卯木'],
  ['兄弟己巳火', '子孙己未土', '妻财己酉金', '妻财辛酉金', '官鬼辛亥水', '子孙辛丑土'],
  ['妻财庚戌土', '官鬼庚申金', '子孙庚午火', '妻财庚辰土', '兄弟庚寅木', '父母庚子水'],
  ['官鬼丙寅木', '妻财丙子水', '兄弟丙戌土', '子孙丙申金', '父母丙午火', '兄弟丙辰土'],
  ['官鬼辛卯木', '父母辛巳火', '兄弟辛未土', '子孙丙申金', '父母丙午火', '兄弟丙辰土'],
  ['父母庚戌土', '兄弟庚申金', '官鬼庚午火', '父母丁丑土', '妻财丁卯木', '官鬼丁巳火'],
  ['官鬼庚戌土', '父母庚申金', '妻财庚午火', '兄弟己亥水', '官鬼己丑土', '子孙己卯木'],
  ['兄弟己巳火', '子孙己未土', '妻财己酉金', '妻财丙申金', '兄弟丙午火', '子孙丙辰土'],
  ['兄弟辛卯木', '子孙辛巳火', '妻财辛未土', '官鬼辛酉金', '父母辛亥水', '妻财辛丑土'],
  ['父母丁未土', '兄弟丁酉金', '子孙丁亥水', '父母丁丑土', '妻财丁卯木', '官鬼丁巳火'],
  ['父母辛卯木', '兄弟辛巳火', '子孙辛未土', '兄弟戊午火', '子孙戊辰土', '父母戊寅木'],
  ['兄弟戊子水', '官鬼戊戌土', '父母戊申金', '官鬼丁丑土', '子孙丁卯木', '妻财丁巳火'],
  ['官鬼辛卯木', '父母辛巳火', '兄弟辛未土', '兄弟丁丑土', '官鬼丁卯木', '父母丁巳火'],
  ['父母庚戌土', '兄弟庚申金', '官鬼庚午火', '兄弟丙申金', '官鬼丙午火', '父母丙辰土'],
  ['兄弟戊子水', '官鬼戊戌土', '父母戊申金', '兄弟己亥水', '官鬼己丑土', '子孙己卯木'],
  ['兄弟己巳火', '子孙己未土', '妻财己酉金', '兄弟戊午火', '子孙戊辰土', '父母戊寅木'],
]
 var gua64LiuQin_YiMaoVersion=[
   ['父母甲辰土', '妻财甲寅木', '子孙甲子水', '父母壬戌土', '兄弟壬申金', '官鬼壬午火'],
   ['官鬼乙卯木', '父母乙巳火', '兄弟乙未土', '子孙癸酉金', '妻财癸亥水', '兄弟癸丑土'],
   ['兄弟戊子水', '官鬼戊戌土', '父母戊申金', '官鬼庚辰土', '子孙庚寅木', '兄弟庚子水'],
   ['父母丙寅木', '官鬼丙子水', '子孙丙戌土', '兄弟戊午火', '子孙戊辰土', '父母戊寅木'],
   ['妻财戊子水', '兄弟戊戌土', '子孙戊申金', '兄弟壬戌土', '子孙壬申金', '父母壬午火'],
   ['子孙甲辰土', '父母甲寅木', '官鬼甲子水', '兄弟戊午火', '子孙戊辰土', '父母戊寅木'],
   ['子孙乙卯木', '妻财乙巳火', '官鬼乙未土', '妻财戊午火', '官鬼戊辰土', '子孙戊寅木'],
   ['妻财戊子水', '兄弟戊戌土', '子孙戊申金', '子孙癸酉金', '妻财癸亥水', '兄弟癸丑土'],
   ['兄弟辛卯木', '子孙辛巳火', '妻财辛未土', '妻财壬戌土', '官鬼壬申金', '子孙壬午火'],
   ['兄弟甲辰土', '官鬼甲寅木', '妻财甲子水', '兄弟丁丑土', '官鬼丁卯木', '父母丁巳火'],
   ['官鬼乙卯木', '父母乙巳火', '兄弟乙未土', '兄弟壬戌土', '子孙壬申金', '父母壬午火'],
   ['父母甲辰土', '妻财甲寅木', '子孙甲子水', '兄弟癸酉金', '子孙癸亥水', '父母癸丑土'],
   ['子孙甲辰土', '父母甲寅木', '官鬼甲子水', '官鬼己亥水', '子孙己丑土', '父母己卯木'],
   ['官鬼己巳火', '父母己未土', '兄弟己酉金', '父母壬戌土', '兄弟壬申金', '官鬼壬午火'],
   ['妻财乙卯木', '官鬼乙巳火', '父母乙未土', '兄弟丙申金', '官鬼丙午火', '父母丙辰土'],
   ['妻财庚戌土', '官鬼庚申金', '子孙庚午火', '官鬼癸酉金', '父母癸亥水', '妻财癸丑土'],
   ['妻财丁未土', '官鬼丁酉金', '父母丁亥水', '妻财庚辰土', '兄弟庚寅木', '父母庚子水'],
   ['兄弟丙寅木', '父母丙子水', '妻财丙戌土', '官鬼辛酉金', '父母辛亥水', '妻财辛丑土'],
   ['官鬼乙卯木', '父母乙巳火', '兄弟乙未土', '兄弟丁丑土', '官鬼丁卯木', '父母丁巳火'],
   ['妻财辛卯木', '官鬼辛巳火', '父母辛未土', '兄弟癸酉金', '子孙癸亥水', '父母癸丑土'],
   ['子孙己巳火', '妻财己未土', '官鬼己酉金', '妻财庚辰土', '兄弟庚寅木', '父母庚子水'],
   ['官鬼丙寅木', '妻财丙子水', '兄弟丙戌土', '妻财己亥水', '兄弟己丑土', '官鬼己卯木'],
   ['妻财丙寅木', '子孙丙子水', '父母丙戌土', '兄弟癸酉金', '子孙癸亥水', '父母癸丑土'],
   ['官鬼乙卯木', '父母乙巳火', '兄弟乙未土', '兄弟庚辰土', '官鬼庚寅木', '妻财庚子水'],
   ['妻财甲辰土', '兄弟甲寅木', '父母甲子水', '妻财庚辰土', '兄弟庚寅木', '父母庚子水'],
   ['官鬼丙寅木', '妻财丙子水', '兄弟丙戌土', '兄弟壬戌土', '子孙壬申金', '父母壬午火'],
   ['兄弟丙寅木', '父母丙子水', '妻财丙戌土', '妻财庚辰土', '兄弟庚寅木', '父母庚子水'],
   ['妻财丁未土', '官鬼丁酉金', '父母丁亥水', '官鬼辛酉金', '父母辛亥水', '妻财辛丑土'],
   ['兄弟戊子水', '官鬼戊戌土', '父母戊申金', '妻财戊午火', '官鬼戊辰土', '子孙戊寅木'],
   ['兄弟己巳火', '子孙己未土', '妻财己酉金', '官鬼己亥水', '子孙己丑土', '父母己卯木'],
   ['父母丁未土', '兄弟丁酉金', '子孙丁亥水', '兄弟丙申金', '官鬼丙午火', '父母丙辰土'],
   ['妻财庚戌土', '官鬼庚申金', '子孙庚午火', '官鬼辛酉金', '父母辛亥水', '妻财辛丑土'],
   ['父母甲辰土', '妻财甲寅木', '子孙甲子水', '兄弟丙申金', '官鬼丙午火', '父母丙辰土'],
   ['兄弟庚戌土', '子孙庚申金', '父母庚午火', '兄弟壬戌土', '子孙壬申金', '父母壬午火'],
   ['官鬼己巳火', '父母己未土', '兄弟己酉金', '兄弟癸酉金', '子孙癸亥水', '父母癸丑土'],
   ['子孙乙卯木', '妻财乙巳火', '官鬼乙未土', '兄弟己亥水', '官鬼己丑土', '子孙己卯木'],
   ['兄弟辛卯木', '子孙辛巳火', '妻财辛未土', '父母己亥水', '妻财己丑土', '兄弟己卯木'],
   ['父母己巳火', '兄弟己未土', '子孙己酉金', '兄弟丁丑土', '官鬼丁卯木', '父母丁巳火'],
   ['子孙戊子水', '父母戊戌土', '兄弟戊申金', '兄弟丙申金', '官鬼丙午火', '父母丙辰土'],
   ['妻财庚戌土', '官鬼庚申金', '子孙庚午火', '子孙戊午火', '妻财戊辰土', '兄弟戊寅木'],
   ['官鬼丙寅木', '妻财丙子水', '兄弟丙戌土', '兄弟丁丑土', '官鬼丁卯木', '父母丁巳火'],
   ['兄弟辛卯木', '子孙辛巳火', '妻财辛未土', '妻财庚辰土', '兄弟庚寅木', '父母庚子水'],
   ['兄弟丁未土', '子孙丁酉金', '妻财丁亥水', '兄弟壬戌土', '子孙壬申金', '父母壬午火'],
   ['父母甲辰土', '妻财甲寅木', '子孙甲子水', '兄弟辛酉金', '子孙辛亥水', '父母辛丑土'],
   ['父母丁未土', '兄弟丁酉金', '子孙丁亥水', '兄弟癸酉金', '子孙癸亥水', '父母癸丑土'],
   ['兄弟乙卯木', '子孙乙巳火', '妻财乙未土', '官鬼辛酉金', '父母辛亥水', '妻财辛丑土'],
   ['父母丁未土', '兄弟丁酉金', '子孙丁亥水', '官鬼戊午火', '父母戊辰土', '妻财戊寅木'],
   ['父母戊子水', '妻财戊戌土', '官鬼戊申金', '官鬼辛酉金', '父母辛亥水', '妻财辛丑土'],
   ['官鬼丁未土', '父母丁酉金', '兄弟丁亥水', '兄弟己亥水', '官鬼己丑土', '子孙己卯木'],
   ['兄弟己巳火', '子孙己未土', '妻财己酉金', '妻财辛酉金', '官鬼辛亥水', '子孙辛丑土'],
   ['妻财庚戌土', '官鬼庚申金', '子孙庚午火', '妻财庚辰土', '兄弟庚寅木', '父母庚子水'],
   ['官鬼丙寅木', '妻财丙子水', '兄弟丙戌土', '子孙丙申金', '父母丙午火', '兄弟丙辰土'],
   ['官鬼辛卯木', '父母辛巳火', '兄弟辛未土', '子孙丙申金', '父母丙午火', '兄弟丙辰土'],
   ['父母庚戌土', '兄弟庚申金', '官鬼庚午火', '父母丁丑土', '妻财丁卯木', '官鬼丁巳火'],
   ['官鬼庚戌土', '父母庚申金', '妻财庚午火', '兄弟己亥水', '官鬼己丑土', '子孙己卯木'],
   ['兄弟己巳火', '子孙己未土', '妻财己酉金', '妻财丙申金', '兄弟丙午火', '子孙丙辰土'],
   ['兄弟辛卯木', '子孙辛巳火', '妻财辛未土', '官鬼辛酉金', '父母辛亥水', '妻财辛丑土'],
   ['父母丁未土', '兄弟丁酉金', '子孙丁亥水', '父母丁丑土', '妻财丁卯木', '官鬼丁巳火'],
   ['父母辛卯木', '兄弟辛巳火', '子孙辛未土', '兄弟戊午火', '子孙戊辰土', '父母戊寅木'],
   ['兄弟戊子水', '官鬼戊戌土', '父母戊申金', '官鬼丁丑土', '子孙丁卯木', '妻财丁巳火'],
   ['官鬼辛卯木', '父母辛巳火', '兄弟辛未土', '兄弟丁丑土', '官鬼丁卯木', '父母丁巳火'],
   ['父母庚戌土', '兄弟庚申金', '官鬼庚午火', '兄弟丙申金', '官鬼丙午火', '父母丙辰土'],
   ['兄弟戊子水', '官鬼戊戌土', '父母戊申金', '兄弟己亥水', '官鬼己丑土', '子孙己卯木'],
   ['兄弟己巳火', '子孙己未土', '妻财己酉金', '兄弟戊午火', '子孙戊辰土', '父母戊寅木']
 ]

  if (xiadong_flag ==0)
    return gua64LiuQin[guaIndex]
  else
    return gua64LiuQin_YiMaoVersion[guaIndex]
},
GetShiYing:function(guaindex){
  var shiyingGrp = [
    ['世', '', '', '应', '', ''], ['世', '', '', '应', '', ''], ['', '应', '', '', '世', ''], ['', '', '世', '', '', '应'], ['', '', '世', '', '', '应'], ['', '', '世', '', '', '应'], ['应', '', '', '世', '', ''], ['应', '', '', '世', '', ''],
    ['', '', '应', '', '', '世'], ['', '世', '', '', '应', ''], ['应', '', '', '世', '', ''], ['应', '', '', '世', '', ''], ['应', '', '', '世', '', ''], ['应', '', '', '世', '', ''], ['', '世', '', '', '应', ''], ['', '', '应', '', '', '世'],
    ['应', '', '', '世', '', ''], ['应', '', '', '世', '', ''], ['', '应', '', '', '世', ''], ['', '', '世', '', '', '应'], ['', '世', '', '', '应', ''], ['', '', '应', '', '', '世'], ['', '世', '', '', '应', ''], ['', '', '应', '', '', '世'],
    ['', '', '世', '', '', '应'], ['', '应', '', '', '世', ''], ['', '', '世', '', '', '应'], ['', '', '世', '', '', '应'], ['世', '', '', '应', '', ''], ['世', '', '', '应', '', ''], ['应', '', '', '世', '', ''], ['应', '', '', '世', '', ''],
    ['', '应', '', '', '世', ''], ['', '', '世', '', '', '应'], ['', '', '世', '', '', '应'], ['', '', '世', '', '', '应'], ['', '应', '', '', '世', ''], ['', '', '世', '', '', '应'], ['', '', '世', '', '', '应'], ['', '应', '', '', '世', ''],
    ['应', '', '', '世', '', ''], ['应', '', '', '世', '', ''], ['', '世', '', '', '应', ''], ['', '', '应', '', '', '世'], ['', '应', '', '', '世', ''], ['', '', '世', '', '', '应'], ['', '', '应', '', '', '世'], ['', '世', '', '', '应', ''],
    ['', '', '世', '', '', '应'], ['', '应', '', '', '世', ''], ['世', '', '', '应', '', ''], ['世', '', '', '应', '', ''], ['应', '', '', '世', '', ''], ['应', '', '', '世', '', ''], ['', '世', '', '', '应', ''], ['', '', '应', '', '', '世'],
    ['世', '', '', '应', '', ''], ['世', '', '', '应', '', ''], ['', '世', '', '', '应', ''], ['', '', '应', '', '', '世'], ['', '', '世', '', '', '应'], ['', '', '世', '', '', '应'], ['应', '', '', '世', '', ''], ['应', '', '', '世', '', '']
  ]
//  console.error('guaindex= '+guaindex)
 // console.error('GuaShiShen= ' + GuaShiShen[0][0])
 // console.error('GuaShiShen= ' + GuaShiShen[0][1])
  return shiyingGrp[guaindex]
},
GetGuaShiShen:function(guaindex){
  var GuaShiShen = [
    ['巳', '五爻'], ['亥', '四爻'], ['未', '三爻'], ['酉', '五爻'], ['酉', '三爻'], ['卯', '初爻'], ['申', '初爻'], ['申', '四爻'],
    ['子', '初爻'], ['辰', '三爻'], ['寅', '五爻'], ['申', '四爻'], ['寅', '上爻'], ['寅', '五爻'], ['戌', '上爻'], ['午', '二爻'],
    ['申', '五爻'], ['寅', '四爻'], ['丑', '四爻'], ['酉', '二爻'], ['戌', '二爻'], ['子', '四爻'], ['戌', '初爻'], ['子', '初爻'],
    ['卯', '初爻'], ['丑', '三爻'], ['酉', '五爻'], ['卯', '上爻'], ['亥', '初爻'], ['巳', '上爻'], ['寅', '三爻'], ['寅', '四爻'],
    ['未', '初爻'], ['卯', '初爻'], ['卯', '四爻'], ['酉', '二爻'], ['未', '二爻'], ['卯', '四爻'], ['酉', '三爻'], ['丑', '五爻'],
    ['申', '二爻'], ['申', '五爻'], ['辰', '四爻'], ['午', '二爻'], ['未', '上爻'], ['酉', '二爻'], ['午', '三爻'], ['辰', '五爻'],
    ['卯', '上爻'], ['丑', '上爻'], ['亥', '五爻'], ['巳', '三爻'], ['寅', '三爻'], ['申', '二爻'], ['戌', '三爻'], ['午', '五爻'],
    ['巳', '四爻'], ['亥', '二爻'], ['辰', '上爻'], ['子', '上爻'], ['酉', '二爻'], ['卯', '初爻'], ['寅', '上爻'], ['申', '初爻'],
  ]
  return GuaShiShen[guaindex]
},
  GetbianLiuQ:function(gong5x,gualiuqin){
    var temp=[]
    var new_gualiuqin=[]

    for (var i=0;i<6;i++)
    {
      temp = gualiuqin[i][2] + gualiuqin[i][3] + gualiuqin[i][4]
      new_gualiuqin.push( (this.GetBianGuaLiuQin(gong5x, gualiuqin[i][4])) + temp)
    }
   // console.error('========' + new_gualiuqin)
    return new_gualiuqin
  },

  GetJiaoShiyi:function(benindex,bianindex){
    var jsCi;
    bianindex = bianindex+1
   // console.error('GetJiaoShiyi '+typeof(benindex))
    var tmp;
    switch (benindex)
    {
      case 0:
        tmp =(getApp().globalData.Gua1_grp); 
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
  GetBianGuaLiuQin: function (gong5x, yao5x){

  //var liu6 = ['父母', '子孙', '官鬼', '妻财', '兄弟',]
  //var gong = ['水', '火', '木', '金', '土']
  var dic={
    '水水': '兄弟', '火火': '兄弟', '木木': '兄弟', '金金': '兄弟', '土土': '兄弟', 
    '水金': '父母', '火木': '父母', '木水': '父母', '金土': '父母', '土火': '父母', 
    '水木': '子孙', '火土': '子孙', '木火': '子孙', '金水': '子孙', '土金': '子孙', 
    '水火': '妻财', '火金': '妻财', '木土': '妻财', '金木': '妻财', '土水': '妻财', 
    '水土': '官鬼', '火水': '官鬼', '木金': '官鬼', '金火': '官鬼', '土木': '官鬼', 
  } 
  //console.error('input is ='+gong5x+yao5x);  

  return dic[gong5x+yao5x] 
  
},



GetBenBianGua:function(coinList){
  var gua_grp = getApp().globalData.Gua_grp; 
  var bengua = coinList.slice(0, 6);
  var benGuaIndex;
  var bianGuaIndex;
  var biangua;
  var tempGua;
  var dongyao = coinList.slice(6, 12);
 // console.error('ben gua='+coinList.slice(0,6));
 // console.error('dong yao =' + coinList.slice(6, 12));

for(var i =0;i<64;i++)
{
  tempGua = gua_grp[i];
  var count = 0;

 // console.error('tempGua = ' + tempGua);
  for(var j=0;j<6;j++)
  {    
    if (tempGua[j] == bengua[j]) {
      count =count+1;
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
  for (var i = 0; i < 6; i++) 
  {
    if((dongyao[i]>0)||(dongyao[i]==0))
    {
      if (biangua[i]==1)
        biangua[i] = 0;
      else
        biangua[i] = 1;
    }
  }
  biangua = biangua.reverse();// 恢复从上到下
  //console.error('biangua===' + biangua);

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
/*
  GetBianGua: function (coinList)
  {
// console.error('coinList dong=' + coinList.slice(6, 12));
var dongyao = coinList.slice(6, 12);
var bianGuaIndex;

    for (var i = 0; i < 64; i++) {
      var tempGua = gua_grp[i];
      var count = 0;

      // console.error('tempGua = ' + tempGua);
      for (var j = 0; j < 6; j++) {
        if (tempGua[j] == gua[j]) {
          count = count + 1;
        }
        else {
          break;
        }
      }
      if (count == 6) {
        // chenGua = gua_grp[i];
        bianGuaIndex = i;
        // console.error('Gottttttt it!');
        break;
      } else {
        continue;
      }
    }
},
*/
QiGuaCoin:function(){
  var YaoArray = new Array();
  var DongIndexArray = new Array();
  var coin;
  var yao;
  var dong_index = -1;

  for(var i = 0;i < 6;i++) // 六爻六次，从下到上
  {
    
    var CoinArray=new Array();
    for(var j = 0;j<3;j++)
    {
    var seed = Math.random(); 
      if (seed > 0.5)
      {
        CoinArray[j] = '1';
      }else{
        CoinArray[j] = '0';
      }
    }
    var coin = CoinArray[0] + CoinArray[1] + CoinArray[2];
  //  console.error("CoinArray " + CoinArray);
  //  console.error("coin " + coin);
    switch (coin)
    {
      case '000':
        yao = '0';
        dong_index = i;
        break;
      case '111':
        yao ='1';
        dong_index = i;
        break;
      case '100':
      case '010':
      case '001':
        yao = 1;
        dong_index = -1;
        break; 
      case '011':
      case '101':
      case '110':
        yao = 0;
        dong_index=-1;
        break; 
    }
    YaoArray.push(yao);
    DongIndexArray.push(dong_index);
  }
 // console.error("YaoArray " + YaoArray );
  //console.error("YaoArray reverse" +YaoArray.reverse());
 // console.error("DongIndexArray " + DongIndexArray);
  //console.error("DongIndexArray reverse" + DongIndexArray.reverse());
  var YaoAndDong = (YaoArray.reverse()).concat(DongIndexArray);// l六爻转变为从上到下
//  console.error("YaoAndDong " + YaoAndDong);
  return YaoAndDong;
},
/*
transform2YinLinStr:function(str){
  switch(str)
  {
    case '1':

  }

},
*/
  GetFuIndex(benIndex){
  var fuindex
  switch (benIndex) {
    case 0:
      fuindex = 1;
      break;
    case 1:
      fuindex = 0;
      break;
    case 28:
      fuindex = 29;
      break;
    case 29:
      fuindex = 28;
      break;
    case 50:
      fuindex = 51;
      break;
    case 51:
      fuindex = 50;
      break;
    case 56:
      fuindex = 57;
      break;
    case 57:
      fuindex = 56;
      break;
    case 13:
      fuindex = 11;
      break;
    case 16:
      fuindex = 32;
      break;
    case 6:
      fuindex = 62;
      break;
    case 52:
      fuindex = 40;
      break;
    case 7:
      fuindex = 10;
      break;
    case 17:
      fuindex = 41;
      break;
    case 12:
      fuindex = 63;
      break;
    case 53:
      fuindex = 30;
      break;
    case 43:
    case 32:
    case 11:
    case 19:
    case 22:
    case 34:
      fuindex = 0;
      break;
    case 15:
    case 39:
    case 31:
    case 45:
    case 47:
    case 27:
      fuindex = 50;
      break;
    case 59:
    case 2:
    case 62:
    case 48:
    case 54:
    case 35:
      fuindex = 28;
      break;
    case 21:
    case 25:
    case 40:
    case 37:
    case 9:
    case 60:
      fuindex = 51;
      break;
    case 23:
    case 18:
    case 10:
    case 33:
    case 42:
    case 4:
      fuindex = 1;
      break;
    case 36:
    case 41:
    case 8:
    case 24:
    case 20:
    case 26:
      fuindex = 56;
      break;
    case 55:
    case 49:
    case 63:
    case 3:
    case 58:
    case 5:
      fuindex = 29;
      break;
    case 46:
    case 44:
    case 30:
    case 38:
    case 14:
    case 61:
      fuindex = 57;
      break;
  }
  return fuindex
},
  GetFuIndex_ym(benIndex) {
    var fuindex
    switch (benIndex) {
      case 0:
        fuindex = 1;
        break;
      case 1:
        fuindex = 0;
        break;
      case 28:
        fuindex = 29;
        break;
      case 29:
        fuindex = 28;
        break;
      case 50:
        fuindex = 51;
        break;
      case 51:
        fuindex = 50;
        break;
      case 56:
        fuindex = 57;
        break;
      case 57:
        fuindex = 56;
        break;
      case 13:
        fuindex = 11;
        break;
      case 16:
        fuindex = 32;
        break;
      case 6:
        fuindex = 62;
        break;
      case 52:
        fuindex = 40;
        break;
      case 7:
        fuindex = 10;
        break;
      case 17:
        fuindex = 41;
        break;
      case 12:
        fuindex = 63;
        break;
      case 53:
        fuindex = 30;
        break;
      case 43:
      case 32:
      case 11:
      case 19:
      case 22:      
        fuindex = 0;
        break;
      case 34:
        fuindex = 25;
        break;  
      case 15:
      case 39:
      case 31:
      case 45:
      case 47:
        fuindex = 50;
        break;
      case 27:
        fuindex = 2;
        break;  
      case 59:
      case 2:
      case 62:
      case 48:
      case 54:
        fuindex = 28;
        break;
      case 35:  
        fuindex = 37;
        break;
      case 21:
      case 25:
      case 40:
      case 37:
      case 9:
        fuindex = 51;
        break;
      case 60:
        fuindex = 32;
        break;
      case 23:
      case 18:
      case 10:
      case 33:
      case 42:
        fuindex = 1;
        break;
      case 4:
        fuindex = 44;
        break;  
      case 36:
      case 41:
      case 8:
      case 24:
      case 20:
        fuindex = 56;
        break;
      case 26:
        fuindex = 49;
        break;  
      case 55:
      case 49:
      case 63:
      case 3:
      case 58:
        fuindex = 29;
        break;
      case 5:
        fuindex = 36;
        break;  
      case 46:
      case 44:
      case 30:
      case 38:
      case 14:
        fuindex = 57;
        break;
      case 61:
        fuindex = 18;
        break;  
    }
    return fuindex
  },
  showFushen: function (benIndex, xiadong_flag,ifyimao){
    
   // console.error('aaa '+typeof(benIndex))
   // console.error('aaa ' + benIndex)
    if (ifyimao == '1')
      var findex = this.GetFuIndex(benIndex)
    else
      var findex = this.GetFuIndex_ym(benIndex)

    var fushen = this.GetLiuQin(findex, xiadong_flag);

this.setData({
  fuyao6: '上爻：' + fushen[0],
  fuyao5: '五爻：' + fushen[1],
  fuyao4: '四爻：' + fushen[2],
  fuyao3: '三爻：' + fushen[3],
  fuyao2: '二爻：' + fushen[4],
  fuyao1: '初爻：' + fushen[5],
})
  
},

showGuaShiShen:function(benIndex)
{
  var gua_shi = this.GetGuaShiShen(benIndex);
  this.setData({
    gua_shen: gua_shi[0],
    shi_shen: gua_shi[1]

  })
},
GetGuaIndex:function(singlegua,guagrp){
  
  var index
  //console.error('singlegua is  ' + singlegua)
  for (var i = 0; i < 64; i++) 
  {
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
  GetCZHgua:function(benIndex){
  var gua_grp = getApp().globalData.Gua_grp;
  var ben=[]
  var cuo=[] 
  var zong=[]
  var hu=[]
  var cuoIndex,zongIndex,huIndex
  var list = []
  //  console.error('benIndex ' + benIndex)
  //  console.error('ben ' + gua_grp[benIndex])

    ben = gua_grp[benIndex]
    for(var i=0;i<6;i++)
    {
      if (gua_grp[benIndex][i] == 1)
      {
        cuo[i]=0
        
      }else{
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
    
    hu[5]=  gua_grp[benIndex][4]
    hu[4] = gua_grp[benIndex][3]
    hu[3] = gua_grp[benIndex][2]
    hu[2] = gua_grp[benIndex][3]
    hu[1] = gua_grp[benIndex][2]
    hu[0] = gua_grp[benIndex][1]
   // hu=hu.reverse()
   // console.error('hu ' + hu)
  
    cuoIndex = this.GetGuaIndex(cuo, gua_grp)
    zongIndex=this.GetGuaIndex(zong, gua_grp)
    huIndex=this.GetGuaIndex(hu,gua_grp)

    list.push(cuoIndex)
    list.push(zongIndex)
    list.push(huIndex)

   // console.error('list is '+list)
    return list
  },

    GetLiuHeChong:function(index){
      var liuhe = '六合卦'
      var liuchong = '六冲卦'
      var name 

      switch (index) {
        case 0:
        case 1:
        case 28:
        case 29:
        case 50:
        case 51:
        case 56:
        case 57:
        case 24:
        case 33:
          name = liuchong
          break;
        case 10:
        case 11:
        case 59:
        case 21:
        case 23:
        case 15:
        case 46:
        case 55:
          name = liuhe
          break;   
    }
    return name
    },
  showHeChongTitle: function (benIndex, bianIndex){
    
    var benCHName
    var bianCHName

    benCHName = this.GetLiuHeChong(benIndex)
    bianCHName = this.GetLiuHeChong(bianIndex)

    if (benCHName)
    {
    this.setData({
      benHCTitle: benCHName,
      
    })
    }
    if (bianCHName){
      this.setData({
        bianHCTitle: bianCHName,

      })      
    }
  },

showGuaTitle:function(benIndex,bianIndex,cuoIndex,zongIndex,huIndex)
{

  var benName = getApp().globalData.GuaTitleSimple[benIndex]
  var bianName = getApp().globalData.GuaTitleSimple[bianIndex]
  
  var cuoName = getApp().globalData.GuaTitleSimplest[cuoIndex]
  var zongName = getApp().globalData.GuaTitleSimplest[zongIndex]
  var huName = getApp().globalData.GuaTitleSimplest[huIndex]

  this.setData({
    benguaTitle: '本卦:'+benName,
    bianguaTitle:'变卦:'+bianName,
    cuoguaTitle:'错卦:'+cuoName,
    zongguaTitle: '综卦:' + zongName,
    huguaTitle: '互卦:' + huName,
  })
},
showTime:function(date,yldate,ganzhiDate,xunkong){


  this.setData({
    QiguaTime: '起卦时间: ' + date ,
    Yinli: '农历: ' + yldate,
   // Ganzhi: ganzhiDate[0] + ganzhiDate[1] + '年 ' + ganzhiDate[3] + ganzhiDate[4] + '月 ' + ganzhiDate[6] + ganzhiDate[7] + '日 ' + ganzhiDate[9] + ganzhiDate[10] + '时' + ' (旬空: ' + xunkong + ')'
   // Shichen: list,
    Ganzhi_Y: ganzhiDate[0] + ganzhiDate[1],
    Ganzhi_M: ganzhiDate[3] + ganzhiDate[4],
    Ganzhi_D: ganzhiDate[6] + ganzhiDate[7],
    Ganzhi_H: ganzhiDate[9] + ganzhiDate[10],
    Ganzhi_xunkong: '(旬空: ' + xunkong + ')'
  })

  this.showShenSha(ganzhiDate[6], ganzhiDate[7])
},
  DrawCZHgua: function (cuogua, zonggua, hugua, screenWidth){

    var yao_h = 5
    var yao_gap = 3
    var yangyao_w = (screenWidth * 0.35) * 0.4;
    var yinyao_w = yangyao_w * 0.4;
    var yinyao_gap = yangyao_w * 0.2;
    //var title_y = 15
    var cuo_start_y = 5
    /*
    var yao1_start_x = screenWidth * 0.18 + screenWidth * 0.3 * 0.5;
    
    var yao2_start_x = screenWidth * 0.35 * 0.6  
    var yao3_start_x = yao2_start_x + yinyao_w + yinyao_gap
*/
    var cuo_startX = (screenWidth * 0.35) * 0.4;
    var zong_startX = (screenWidth * 0.35) * 0.4 * 2 + (screenWidth * 0.35) * 0.4
    var hu_startX = (screenWidth * 0.35) * 0.4 * 3 + (screenWidth * 0.35) * 0.4*2
    var ctx = wx.createCanvasContext('guatu2')

  /*  
    var cuoName = getApp().globalData.GuaTitleSimplest[cuoIndex]
    var zongName = getApp().globalData.GuaTitleSimplest[zongIndex]
    var huName = getApp().globalData.GuaTitleSimplest[huIndex]

  var cuoguaTitle='错卦:'+cuoName
  var zongguaTitle= '综卦:' + zongName
  var huguaTitle='互卦:' + huName
*/
    ctx.setLineWidth(yao_h)
    /*
    ctx.setFontSize(15)
    ctx.fillText(cuoguaTitle, cuo_startX - cuo_startX*0.5 ,title_y)
    ctx.fillText(zongguaTitle, zong_startX-cuo_startX * 0.5, title_y)
    ctx.fillText(huguaTitle, hu_startX - cuo_startX * 0.5, title_y)
    */
   for(var i=0;i<6;i++)
   { 
     if (cuogua[i] == 1) { //((GuaYao_grp[k])[i]==1){ 
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
  DrawGua: function (bengua, biangua, dong, liuqin1_grp, liuqin2_grp, shiying1_grp, shiying2_grp,screenWidth,liushen)
  {

  var liushen_startX = 0
  var liuqin1_startX = screenWidth*0.12
  var shiying1_startX = screenWidth * 0.1 + screenWidth * 0.35 * 0.65 + (screenWidth * 0.15)
  var bianyao_startX = shiying1_startX + screenWidth * 0.05
  var liuqin2_startX = bianyao_startX + screenWidth * 0.05
  

  var LiuQLiuS_startY = 20 
  //console.error("screenWidth " + shiying1_startX)

  var yao_h = 15
  var yao_gap = 6
  var yangyao_w = (screenWidth * 0.35)*0.4;
  var yinyao_w = yangyao_w*0.4;
  var yinyao_gap = yangyao_w*0.2;  
  var yao1_start_x = screenWidth * 0.18 + screenWidth * 0.3*0.5;  
  var yao1_start_y = 15
  var yao2_start_x = liuqin2_startX + screenWidth * 0.35 * 0.6  

  var shiying2_startX = yao2_start_x + screenWidth * 0.15
 //   console.error("shiying2_startX " + shiying2_startX)
  //var j = 3;//options.index
    var yao_group = bengua;//group[j]
  //var canvas_grp = ['guatu','guatu2']
  //var GuaYao_grp = [group[j], group[j+1]]
    var bianyao_grp=[];
for(var i=0;i<6;i++)
{
  if(dong[i]<0)
    bianyao_grp.push('');
  else
    bianyao_grp.push('-->');
}
  bianyao_grp = bianyao_grp.reverse();

  var ctx = wx.createCanvasContext('guatu')

  ctx.setFontSize(15)

  ctx.setLineWidth(yao_h)

 // context.beginPath()
 
////////////////////////////////     本卦 & 变卦  //////////////////////////////////

  for (var i = 0; i < 6; ++i) {
    if (liushen[i] == '青龙')
      ctx.setFillStyle('green')
    else if (liushen[i] == '白虎')
      ctx.setFillStyle('DarkGray')
    else if (liushen[i] == '朱雀')
      ctx.setFillStyle('red')
    else if (liushen[i] == '玄武')
      ctx.setFillStyle('black')
    else if (liushen[i] == '勾陈')
      ctx.setFillStyle('SandyBrown')
    else if (liushen[i] == '腾蛇')
      ctx.setFillStyle('OrangeRed')

    ctx.fillText(liushen[i], liushen_startX, LiuQLiuS_startY + (yao_h + yao_gap) * i)



    ctx.setFillStyle('black')
    ctx.fillText(liuqin1_grp[i], liuqin1_startX, LiuQLiuS_startY + (yao_h + yao_gap) * i)
    ctx.fillText(shiying1_grp[i], shiying1_startX, LiuQLiuS_startY + (yao_h + yao_gap) * i)
    
    ctx.fillText(bianyao_grp[i], bianyao_startX, LiuQLiuS_startY + (yao_h + yao_gap) * i)
    ctx.fillText(liuqin2_grp[i], liuqin2_startX, LiuQLiuS_startY + (yao_h + yao_gap) * i)
    ctx.fillText(shiying2_grp[i], shiying2_startX, LiuQLiuS_startY + (yao_h + yao_gap) * i)

    if (bengua[i] == 1){ //((GuaYao_grp[k])[i]==1){ 
      ctx.moveTo(yao1_start_x, yao1_start_y + (yao_h + yao_gap) * i)
      ctx.lineTo(yao1_start_x + yangyao_w, yao1_start_y + (yao_h + yao_gap) * i)

    } else {
      ctx.moveTo(yao1_start_x, yao1_start_y + (yao_h + yao_gap) * i)
      ctx.lineTo(yao1_start_x + yinyao_w, yao1_start_y + (yao_h + yao_gap) * i)
      ctx.moveTo(yao1_start_x + yinyao_w + yinyao_gap, yao1_start_y + (yao_h + yao_gap) * i)
      ctx.lineTo(yao1_start_x + yinyao_w * 2 + yinyao_gap, yao1_start_y + (yao_h + yao_gap) * i)
    }

    if (biangua[i] == 1) { 
      ctx.moveTo(yao2_start_x, yao1_start_y + (yao_h + yao_gap) * i)
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
  GetDongFromBenBian: function (benguaindex, bianguaindex){
    var bengua = getApp().globalData.Gua_grp[benguaindex];
    var biangua = getApp().globalData.Gua_grp[bianguaindex];
    var  dlis=[];

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
    var gua64wuxing = [
      '金', '土', '水', '火', '土', '火', '水', '土',
      '木', '土', '土', '金', '火', '金', '金', '木',
      '木', '木', '土', '金', '木', '土', '金', '土',
      '木', '土', '木', '木', '水', '火', '金', '木',
      '金', '土', '金', '水', '木', '土', '金', '木',
      '土', '木', '土', '金', '金', '木', '金', '木',
      '水', '火', '木', '土', '土', '金', '水', '火',
      '木', '金', '火', '水', '土', '金', '水', '火'
    ]
    
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
    //var myCanvasHeight1 = myCanvasWidth*0.35 
    var myCanvasHeight2 = myCanvasWidth/6
    this.setData({ 
      GuaView_width: myGuaView_width,
      //guatu1_height: myCanvasHeight1,
      guatu2_height: myCanvasHeight2,
    })
    var qigua_flag;
    if (options.qigua_flag == '0')
      qigua_flag = 0;
    else
      qigua_flag = 1;

    var liushen_grp = this.LiuShenPai(options.ganzhiGrp[6]);// 日干
    var xunkong = this.GetXunKong(options.ganzhiGrp[6] + options.ganzhiGrp[7])
    var gua_index=[]
    var donglist
    if (qigua_flag==0)// auto qi gua
    {
    var list = this.QiGuaCoin();
    gua_index = this.GetBenBianGua(list);//gua_index[0] is benGua,gua_index[1] is bianGua
      donglist = list.slice(6, 12)
    }
    else{
    //console.error('options.list='+options.defaultGua)
      if (options.xuanguaFlag=='0')
    {
    var dongY=[]
    var list=[]
    for(var i=0;i<6;i++)
    {
      if (options.defaultGua[i] == '0')
        {
          list.push('1');
          dongY.push(-1)
      } else if (options.defaultGua[i] == '1')
      {
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
      //  console.error('list.concat(dongY)=' + typeof(options.benIndex))
      //  console.error('list.concat(dongY)=' + options.bianIndex)
        gua_index[0] = parseInt(options.benIndex)
        gua_index[1] = parseInt(options.bianIndex)
        donglist = this.GetDongFromBenBian(gua_index[0], gua_index[1])
      }
 //     console.error('list.concat(dongY)=' + list)
    }
    


    var paipanFlag = options.ppflag;
    var flag = this.GetPaiPanFlag(options.dateIndex, options.xiadong_day, options.qigua_flag, paipanFlag)
    
    var benLiuqin = this.GetLiuQin(gua_index[0],flag);
    var liuqin_tmp = this.GetLiuQin(gua_index[1],flag);
    var bianLiuqin = this.GetbianLiuQ(gua64wuxing[gua_index[0]],liuqin_tmp)
    var benShiying = this.GetShiYing(gua_index[0])
    var bianShiying = this.GetShiYing(gua_index[1])
    //console.error('paipanFlag=' + paipanFlag)
    
    this.showTime(options.dateIndex, options.YLymd, options.ganzhiGrp, xunkong);
    
    //console.error('options.ganzhiGrp=' + options.ganzhiGrp)
    
   
    var gualistName = this.GetCZHgua(gua_index[0]) 
    
    this.showGuaTitle(gua_index[0], gua_index[1], gualistName[0], gualistName[1], gualistName[2]);

    this.showHeChongTitle(gua_index[0], gua_index[1])

    this.DrawGua(gua_grp[gua_index[0]], gua_grp[gua_index[1]], donglist, benLiuqin, bianLiuqin, benShiying, bianShiying, myCanvasWidth, liushen_grp);

    this.DrawCZHgua(gua_grp[gualistName[0]], gua_grp[gualistName[1]], gua_grp[gualistName[2]], myCanvasWidth);

    this.showGuaShiShen(gua_index[0])    

    this.showFushen(gua_index[0], flag, paipanFlag)

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
    if (temp_gua_id != temp_gua_id2){
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
    JiaoShiYiCi:jiaoshiyici
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