#-*-coding:cp936 -*-

import urllib
import urllib.request
import http.cookiejar

import time




url="http://bbs.77bike.com/jobcenter.php?action=punch&verify=ba9b0a0d&nowtime=1474173831992&verify=ba9b0a0d" # For sigin

url2='http://bbs.77bike.com/userpay.php' # For check asset

headers={
	'User-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:48.0) Gecko/20100101 Firefox/48.0', # Get from firebug network status

	'Refer':'http://bbs.77bike.com/u.php',# Get from firebug network status

	'Cookie':'2f2b9_lastpos=other; 2f2b9_ol_offset=6111; 2f2b9_ipstate=1474173874; 2f2b9_bubble=a%3A2%3A%7Bs%3A16%3A%22pw_all_tip_medal%22%3Bi%3A1%3Bs%3A19%3A%22pw_all_tip_usercard%22%3Bi%3A1%3B%7D; 2f2b9_readlog=%2C218532%2C218806%2C218825%2C218770%2C218794%2C218640%2C218708%2C218769%2C218526%2C218522%2C; CNZZDATA5520252=cnzz_eid%3D491125340-1469097503-http%253A%252F%252Fbbs.77bike.com%252F%26ntime%3D1474172158; Hm_lvt_b738b124948406f56e606b292ef04731=1472696380,1472878876,1473757183,1474173713; 2f2b9_cloudClientUid=99975051; 2f2b9_threadlog=%2C12%2C; newwindows=1; 2f2b9_ckquestion=BAFTBAIEAAoNUDo5AANYUlRYBwRVU1YHVQpbUQQHUAxWAgVYBgNQVVABUlw; 2f2b9_cloudcksessionid=455383b4b5c8cca51f35a08a40c2f6a0; 2f2b9_winduser=BABTAgcCPg1bUwpSAQQDBFJZDFdTAlcDVAkMVAEBUldZBgVRVgJSPg; 2f2b9_ck_info=%2F%09; 2f2b9_lastvisit=27%091474173914%09%2Fpw_ajax.php%3Factionbubble%26uid157523%26signpw_all_tip_medal%26nowtime1474173738941%26verifyba9b0a0d; Hm_lpvt_b738b124948406f56e606b292ef04731=1474173737' # Get from firebug network status

		} # 

dict1={
	'step':'2',
	}  # 77bike



cookie = http.cookiejar.CookieJar()
cjhdr = urllib.request.HTTPCookieProcessor(cookie)
opener = urllib.request.build_opener(cjhdr)

postdata=urllib.parse.urlencode(dict1)

postdata=postdata.encode('utf8') # utf8  ascii

#print(postdata)

info_f=open('77bike.txt','a')


req = urllib.request.Request(url, postdata, headers)  # POST
with urllib.request.urlopen(req) as response:
	if(response.status!=200):
		#print('Sigin in Failed! ' + response.status)
		info_f.write('Sigin in Failed: '+ str(response.status) + ' ' + time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time())) + '\n')
	else:
		pass
		#print('Sigin in OK!')
		#info_f.write(time.strftime('Sigin in time: %Y-%m-%d %H:%M:%S',time.localtime(time.time())) + '\n')




req = urllib.request.Request(url2, None, headers)  # POST
with urllib.request.urlopen(req) as response:
	if(response.status!=200):
		#print('Sigin in Failed! ' + response.status)
		info_f.write('Sigin in Failed: '+ str(response.status) + ' ' + time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time())) + '\n')
	else:
		#print('Sigin in OK!')
		html=((response.read().decode('gb2312')))




#info_f.write(str(html))
#context = info_f.read()
#index = (context.find('金钱'))
#print(str(context[index:index+8]))

index = (html.find('金钱'))

info_f.write(time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time())) + ' ' + html[index:index+8])
info_f.close()


