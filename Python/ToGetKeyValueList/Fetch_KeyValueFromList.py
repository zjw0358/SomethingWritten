# huangda
# 2017.12.18
# To fetch {key value0 value1 value2} from ref_list.txt

import datetime

starttime = datetime.datetime.now()

original_arr=[]
key_arr=[]
value0_arr=[]
value1_arr=[]
value2_arr=[]


target_arr=[[]*3]*2302  # 2302 is the lines of the used string file
result_lines =[]

count = 0


original_f = open("original.txt",'r')		# be compiled in software target

original_lines = original_f.readlines()

for line in original_lines:
	#print(line)
	#count = count + 1
	original_arr.append(line.strip('\n'))

#print(original_arr)
#print(count)



key_f = open("key.txt",'r')			# ID from ref_list.txt
key_lines = key_f.readlines()

for line in key_lines:
	#print(line)
	#count = count + 1
	key_arr.append(line.strip('\n'))

#print(key_arr)
#print(count)


value0_f = open("value_english.txt",'r')  # values from ref_list.txt
value0_lines = value0_f.readlines()
for line in value0_lines:
	#print(line)
	#count = count + 1
	value0_arr.append(line.strip('\n'))


value1_f = open("value_russia.txt",'r')  # values from ref_list.txt
value1_lines = value1_f.readlines()
for line in value1_lines:
	#print(line)
	#count = count + 1
	value1_arr.append(line.strip('\n'))

#print(value1_arr)
#print(count)



value2_f = open("value_urkra.txt",'r')	# values from ref_list.txt
value2_lines = value2_f.readlines()
for line in value2_lines:
	#print(line)
	#count = count + 1
	value2_arr.append(line.strip('\n'))

#print(value2_arr)
#print(count)



for i in range(len(original_arr)):
	for j in range(len(key_arr)):
		if (original_arr[i] == key_arr[j]):			
			target_arr[count]=[original_arr[i],value0_arr[j],value1_arr[j],value2_arr[j]]
			count = count + 1
	
print(count)

result_f = open("OK_list.txt",'w')


print(target_arr[0])

for i in range(count):
	result_f.write('\t'.join(target_arr[i])+'\n')

original_f.close()	
key_f.close()
value1_f.close()
value2_f.close()
result_f.close()

endtime = datetime.datetime.now()
print("It spend ",(endtime - starttime).seconds,"Secs")
