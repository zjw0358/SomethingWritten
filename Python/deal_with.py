


import re

source_file="simpleweixiao.txt"
dest_file="simpleweixiao_OK.txt"
f=open(source_file,'r')
t=open(dest_file,'w')

for line in f.readlines():
	if(len(line)!=0):
		print(line)
		t.write(line)
f.close()
t.close()
