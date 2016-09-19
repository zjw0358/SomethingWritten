#-*-coding:cp936 -*-

import urllib
import urllib.request
import http.cookiejar

import time
import re





#FID = 92

def Get_SourceCode(FID):
	url="http://bbs.biketo.com/forum-"+str(FID) +"-1.html"

	headers={
			'User-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:48.0) Gecko/20100101 Firefox/48.0', # Get from firebug network status

			'Cookie':'XFJp_2132_saltkey=OnC8oUUA; XFJp_2132_lastvisit=1474188938; XFJp_2132_sid=edEA0l; XFJp_2132_lastact=1474192835%09forum.php%09ajax; XFJp_2132_st_t=410094%7C1474192561%7C93bf3b5bd179e204ca0c0b14bd74c5a6; XFJp_2132_atarget=1; XFJp_2132_forum_lastvisit=D_92_1474192561; Hm_lvt_d5fe67a93dc45edea7b69a91b382daa1=1473739293,1473846987,1474162908,1474191724; Hm_lpvt_d5fe67a93dc45edea7b69a91b382daa1=1474192387; CNZZDATA547230=cnzz_eid%3D242393440-1474191822-%26ntime%3D1474191822; __utma=114141336.812458895.1474192375.1474192375.1474192375.1; __utmb=114141336.3.10.1474192375; __utmc=114141336; __utmz=114141336.1474192375.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt=1; XFJp_2132_ulastactivity=1c06V3DLDMvxL7Z%2FWDZRjE%2FNpDK%2BThwjM5sl18B3z59RRAFNCtZM; XFJp_2132_auth=d3d9wvHsju2BinXRTd%2FMdHWzF6cR6bp75KuulNC1GSc2xEjiE%2FTRBN66cq128ny3h0Ud9Q4yefkdK0NHzN8T0aemNg8; XFJp_2132_lastcheckfeed=410094%7C1474192550; XFJp_2132_lip=183.16.197.157%2C1474191897; XFJp_2132_security_cookiereport=e00fMDldcrm4RdxkzfKi441N1l9nPjkdb85%2FzgTn9Pfje3pqc%2Fi6; pgv_pvi=5274193296; pgv_info=ssi=s4806583446; tjpctrl=1474194178363; XFJp_2132_nofocus_forum=1'

		} # bbs.biketo.com

	cookie = http.cookiejar.CookieJar()
	cjhdr = urllib.request.HTTPCookieProcessor(cookie)
	opener = urllib.request.build_opener(cjhdr)

	info_f=open('thread_list_'+ str(FID) +'.txt','a')

	req = urllib.request.Request(url, None,headers)	# GET 
	with urllib.request.urlopen(req) as response:
		if(response.status!=200):
			print('login Failed! ' + response.status)
		else:
			print('login OK!')
			html=((response.read().decode('gbk')))
			info_f.write(str(html))

	info_f.close()


forum_list=[
		72, 	# 游记
		255,	# 山地
		39, 	# 交易
		258,	# 旅行
		256, 	# 公路
		92, 	# 折叠
		]


for i in forum_list:
	Get_SourceCode(i)
