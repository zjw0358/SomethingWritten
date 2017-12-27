

import datetime

starttime = datetime.datetime.now()

id_arr=[]
source_id_arr=[]
french_new_arr=[]
french_old_arr=[]
polish_new_arr=[]
polish_old_arr=[]

count = 0


id_f = open("id.txt")

id_lines = id_f.readlines()

for line in id_lines:
	id_arr.append(line.strip('\n'))

#print(id_arr)


source_id_f = open("source_id.txt")

source_id_lines = source_id_f.readlines()

for line in source_id_lines:
	source_id_arr.append(line.strip('\n'))

#print(source_id_arr)
'''
french_new_f = open("french_new.txt")

french_new_lines = french_new_f.readlines()

for line in french_new_lines:
	french_new_arr.append(line.strip('\n'))
#print(french_new_arr[0])

french_old_f = open("french_old.txt")

french_old_lines = french_old_f.readlines()

for line in french_old_lines:
	french_old_arr.append(line.strip('\n'))
'''

polish_new_f = open("polish_new.txt")

polish_new_lines = polish_new_f.readlines()

for line in polish_new_lines:
	polish_new_arr.append(line.strip('\n'))

#print(polish_new_arr[0])

polish_old_f = open("polish_old.txt")

polish_old_lines = polish_old_f.readlines()

for line in polish_old_lines:
	polish_old_arr.append(line.strip('\n'))

#print(polish_old_arr[0])

for i in range(len(id_arr)):
	for j in range(len(source_id_arr)):
		if(id_arr[i] == source_id_arr[j]):
			count = count + 1
			#french_old_arr[j] = french_new_arr[i]
			polish_old_arr[j] = polish_new_arr[i]



result_f = open("OK_list.txt",'w')

for i in range(count):
	result_f.write(polish_old_arr[i]+'\n')
	#result_f.write(french_old_arr[i]+'\n')

print(polish_old_arr)
print(len(polish_old_arr))

id_f.close()
source_id_f.close()
#french_new_f.close()
#french_old_f.close()
result_f.close()

endtime = datetime.datetime.now()
print("It spend ",(endtime - starttime).seconds,"Secs")