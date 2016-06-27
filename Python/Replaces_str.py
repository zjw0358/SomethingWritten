# huangda 2016.6.27
# Replace string from src file to a big target file

# -*- coding=utf-8 -*-

# Read src file 
src_file="srcf.txt"

fp=open(src_file,'r',encoding='utf-16')

src_file_row = 615
src_file_col = 10

matrix=[[0]*src_file_col]*src_file_row

i=0
for lines in fp.readlines():
	matrix[i]=lines.split('\t')
	i=i+1
x=0
for x in range(0,src_file_col):
	matrix[x][src_file_col-1]=matrix[x][src_file_col-1].strip('\n')
	
#print(matrix[0][src_file_col-1]) for test

# Read end

index =0
index_2 = 0

# Read Target file
ref_list="ref_list.txt"

ok_file = "ok_end.txt"

f=open(ok_file,'w',encoding='utf-16')

arr=[]

tp=open(ref_list,'r',encoding='utf-16')

ref_list_file_row = 16396

for j in range(0,ref_list_file_row): # 16396
	arr.append(tp.readline().split('\t'))

	for i in range(0,src_file_row):
		if(arr[j][0]==matrix[i][0]):
			index = index +1
			#print(j,i)
#			print(matrix[i][0])
#			print(matrix[i][1])
#			print(arr[j])
#			print(arr[j][8])
#			print(matrix[i][1])

#			print(arr[j][9])
#			print(matrix[i][2])

#			print(arr[j][12])
#			print(matrix[i][3])

#			print(arr[j][14])
#			print(matrix[i][4])

#			print(arr[j][31])
#			print(matrix[i][5])

#			print(arr[j][32])
#			print(matrix[i][6])

#			print(arr[j][49])
#			print(matrix[i][7])

#			print(arr[j][50])
#			print(matrix[i][8])

#			print(arr[j][51])
#			print(matrix[i][9])

			arr[j][8]=matrix[i][1] # Spanish
			arr[j][9]=matrix[i][2] # French
			arr[j][12]=matrix[i][3] # Italian
			arr[j][14]=matrix[i][4] # Portugues
			arr[j][31]=matrix[i][5] # Slovaenian
			arr[j][32]=matrix[i][6] # Greek
			arr[j][49]=matrix[i][7] # Lithuanian
			arr[j][50]=matrix[i][8] # Latvian
			arr[j][51]=matrix[i][9]  # Estonian

			arr[j][51]=arr[j][51].strip('\n')
		
			continue			

			
#		else:
#			continue
	index_2 = index_2 +1
	equl_line="\t".join(arr[j])
	f.write(equl_line)
		



f.close()
tp.close()
fp.close()

print(index)
print(index_2)
