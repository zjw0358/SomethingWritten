import sys
import urllib.request
import os
#import urllib2



response = urllib.request.urlopen('http://www.59136s.com/thread-156508-1-1.html')
html = response.read()

#str='123456'
file = open('html.txt','w')
file.write(str(html))
file.close()
#os.system('type html>html.txt')	 
#print(html)

