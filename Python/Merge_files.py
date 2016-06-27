# huangda 2016.6.27
# Merge N files into 1 file

# -*- coding=utf-8 -*-


#print(locale.getpreferredencoding())

line1_file = "line1.txt"
#line2_file = "line2.txt"
#line3_file = "line3.txt"
#line4_file = "line4.txt"
#line5_file = "line5.txt"

line9_file = "line9.txt"
line10_file = "line10.txt"
line13_file = "line13.txt"
line15_file = "line15.txt"
line32_file = "line32.txt"
line33_file = "line33.txt"

line50_file = "line50.txt"
line51_file = "line51.txt"
line52_file = "line52.txt"

z_file="after_merge.txt"

f_1 = open(line1_file,'r')
#f_2 = open(line2_file,'r')
#f_3 = open(line3_file,'r')
#f_4 = open(line4_file,'r')
#f_5 = open(line5_file,'r')

f_9 = open(line9_file,'r',encoding='utf-16')
f_10 = open(line10_file,'r',encoding='utf-16')
f_13 = open(line13_file,'r',encoding='utf-16')
f_15 = open(line15_file,'r',encoding='utf-16')
f_32 = open(line32_file,'r',encoding='utf-16')
f_33 = open(line33_file,'r',encoding='utf-16')
f_50 = open(line50_file,'r',encoding='utf-16')
f_51 = open(line51_file,'r',encoding='utf-16')
f_52 = open(line52_file,'r',encoding='utf-16')


z=open(z_file,'w',encoding='utf-8')

arr_1=[]
#arr_2=[]
#arr_3=[]
#arr_4=[]
#arr_5=[]

arr_9=[]
arr_10=[]
arr_13=[]
arr_15=[]
arr_32=[]
arr_33=[]
arr_50=[]
arr_51=[]
arr_52=[]


for lineA in f_1.readlines():
	arr_1.append(lineA)
'''
for lineB in f_2.readlines():
	arr_2.append(lineB)

for lineC in f_3.readlines():
	arr_3.append(lineC)

for lineD in f_4.readlines():
	arr_4.append(lineD)

for lineE in f_5.readlines():
	arr_5.append(lineE)
'''

for line9 in f_9.readlines():
	arr_9.append(line9)

for line10 in f_10.readlines():
	arr_10.append(line10)

for line13 in f_13.readlines():
	arr_13.append(line13)

for line15 in f_15.readlines():
	arr_15.append(line15)

for line32 in f_32.readlines():
	arr_32.append(line32)

for line33 in f_33.readlines():
	arr_33.append(line33)

for line50 in f_50.readlines():
	arr_50.append(line50)

for line51 in f_51.readlines():
	arr_51.append(line51)

for line52 in f_52.readlines():
	arr_52.append(line52)

	
'''
print(len(arr_1))
print(len(arr_9))
print(len(arr_10))
print(len(arr_13))
print(len(arr_15))
print(len(arr_32))
print(len(arr_33))
print(len(arr_50))
print(len(arr_51))
print(len(arr_52))
'''
for i in range(0,len(arr_1)): 
#	print(arraryB[i].strip() +'\t'+ arrary[i])
	z.write(	arr_1[i].strip() +'\t' +  # + arr_2[i].strip() + '\t' + arr_3[i].strip() + '\t' + arr_4[i].strip() + '\t' + arr_5[i].strip() + '\t'
			arr_9[i].strip() +'\t'+ arr_10[i].strip() + '\t' + arr_13[i].strip() + '\t' + arr_15[i].strip() + '\t' + arr_32[i].strip() + '\t' + 
			arr_33[i].strip() +'\t' + arr_50[i].strip() + '\t' + arr_51[i].strip() + '\t' + arr_52[i].strip() + '\n'
			)



f_1.close()
#f_2.close()
#f_3.close()
#f_4.close()
#f_5.close()

f_9.close()
f_10.close()
f_13.close()
f_15.close()
f_32.close()
f_33.close()
f_50.close()
f_51.close()
f_52.close()


z.close()
