#-*-coding:cp936 -*-
from datetime import datetime,date
import urllib
import urllib.request
import http.cookiejar

import time
import re


def Write2log(logString):
	try:
		login_f=open('login_file.txt','a')
	except IOError:
		print("Errors in Func Write2log")
	
	login_f.write(logString)
	login_f.close()

url_sigin="http://bbs.biketo.com/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&inajax=1"

url_myspace="http://bbs.biketo.com/home.php?mod=space&uid=410094&do=profile&from=space"


headers={
	'User-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:48.0) Gecko/20100101 Firefox/48.0', # Get from firebug network status

	'Refer':'http://bbs.biketo.com/plugin.php?id=dsu_paulsign:sign',# Get from firebug network status

	'Cookie':'pgv_pvi=1085234708; Hm_lvt_d5fe67a93dc45edea7b69a91b382daa1=1473417697,1473477009,1473490322,1473490340; CNZZDATA547230=cnzz_eid%3D936302645-1468923536-%26ntime%3D1473489107; __utma=114141336.18318982.1468926385.1473477012.1473489430.29; __utmz=114141336.1473417654.26.5.utmcsr=i.biketo.com|utmccn=(referral)|utmcmd=referral|utmcct=/member/logout.html; Hm_lvt_dafa5b6f1421186b22c564180031bfd2=1472874437,1473307594,1473388899,1473490321; XFJp_2132_ulastactivity=9a48pjxmi04U5jbq5lAOrQ15ZgLoNWxKdg1iWi4WSFiyIuitGjVn; XFJp_2132_lastcheckfeed=410094%7C1473490503; XFJp_2132_smile=4D1; XFJp_2132_saltkey=A5Pu5HLh; XFJp_2132_lastvisit=1471516164; XFJp_2132_atarget=1; XFJp_2132_sid=Hly51J; XFJp_2132_lastact=1473490509%09misc.php%09patch; XFJp_2132_lip=183.16.188.204%2C1473489592; XFJp_2132_security_cookiereport=13ee%2BepGAHrpLIFjL%2ByibH9JOz7W6%2BlrRLfTlFMT1a%2By1YNFwSNo; pgv_info=ssi=s166567136; Hm_lpvt_d5fe67a93dc45edea7b69a91b382daa1=1473490344; __utmc=114141336; __utmb=114141336.8.10.1473489430; tjpctrl=1473491230485; XFJp_2132_sendmail=1; __utmt=1; Hm_lpvt_dafa5b6f1421186b22c564180031bfd2=1473490338; XFJp_2132_onlineusernum=1827; XFJp_2132_auth=e6891W8E39oTKVV8EHZyHpeK8B4UWGMcqXKDqVmq%2B5AvIOsG90hG5vChIHaT7tPKBlcKkGg5sOdpxLWvz7BMvkDkp%2B4; feunzmlusername=dontbecoder123; feunzmluserid=410094; feunzmlgroupid=1; feunzmlrnd=5DrqTB39BNayB2q2Z92P' # Get from firebug network status

		} # bbs.biketo.com


day1={
	'formhash':'dcd1f829',
	'qdxq':'kx',
	'qdmode':'1',
	'todaysay':'好天气,又可以骑车了'.encode('gbk'),
	'fastreply':'0'
	}  
day2={
	'formhash':'dcd1f829',
	'qdxq':'fd',
	'qdmode':'1',
	'todaysay':'完全不知道说什么'.encode('gbk'),
	'fastreply':'0'
	} 
day3={
	'formhash':'dcd1f829',
	'qdxq':'wl',
	'qdmode':'1',
	'todaysay':'慵懒无聊的一天'.encode('gbk'),
	'fastreply':'0'
	} 
day4={
	'formhash':'dcd1f829',
	'qdxq':'yl',
	'qdmode':'1',
	'todaysay':'发红包就好了'.encode('gbk'),
	'fastreply':'0'
	} 
day5={
	'formhash':'dcd1f829',
	'qdxq':'kx',
	'qdmode':'1',
	'todaysay':'如果有一天奇迹会出现'.encode('gbk'),
	'fastreply':'0'
	} 
day6={
	'formhash':'dcd1f829',
	'qdxq':'fd',
	'qdmode':'1',
	'todaysay':'心情不美丽了'.encode('gbk'),
	'fastreply':'0'
	} 
day7={
	'formhash':'dcd1f829',
	'qdxq':'wl',
	'qdmode':'1',
	'todaysay':'我想去旅行'.encode('gbk'),
	'fastreply':'0'
	} 

day_list=[day1,day2,day3,day4,day5,day6,day7]

def Goto_sigin(data_sent2):
	cookie = http.cookiejar.CookieJar()
	cjhdr = urllib.request.HTTPCookieProcessor(cookie)
	opener = urllib.request.build_opener(cjhdr)

	postdata=urllib.parse.urlencode(data_sent2)

	postdata=postdata.encode('utf8') # utf8  ascii  gbk

	req = urllib.request.Request(url_sigin, postdata, headers)  # POST
	with urllib.request.urlopen(req) as response:
		if(response.status!=200):
			#print('Sigin in Failed! ' + response.status)
			log_in_sigin='Sigin in Failed: '+ str(response.status) + ' ' + time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time())) + '\t'
			Write2log(log_in_sigin)
			exit()
		else:
			#print('Sigin in OK!')
			log_in_sigin=time.strftime('Sigin in time: %Y-%m-%d %H:%M:%S',time.localtime(time.time())) + '\t'


	req = urllib.request.Request(url_myspace, None,headers)	# GET 
	with urllib.request.urlopen(req) as response:
		if(response.status!=200):
			#print('login Failed! ' + response.status)
			log_in_check= str('login Failed! ' + response.status)
			Write2log(log_in_check)
			exit()
		else:
			#print('login OK!')
			html=(str(response.read()))
			index =html.find('<em>BIKETO\\xb1\\xd2')
			#print(index)
			cut_down=html[index:index+35]
			#print(cut_down)
			pt=re.compile('\d*\s')
			#print(type(pt))
			#print('I have BIKETO coin : ' + pt.findall(cut_down)[0])
			asset = 'I have BIKETO coin : ' + pt.findall(cut_down)[0]+'\n'
			Write2log(log_in_sigin+asset)



today=datetime.today().weekday()
if today==0:
	data_sent2=day_list[0]
elif today==1:
	data_sent2=day_list[1]
elif today==2:
	data_sent2=day_list[2]
elif today==3:
	data_sent2=day_list[3]
elif today==4:
	data_sent2=day_list[4]
elif today==5:
	data_sent2=day_list[5]
elif today==6:
	data_sent2=day_list[6]	

Goto_sigin(data_sent2)


