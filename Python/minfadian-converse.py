# 2020.9.29
# 将《民法典》中以汉字表示的“条数”，替换为阿拉伯数字条数

import re
''' 去掉行首空格
doc = open('aaa.txt')
ter = open('bbb.txt','w')

tmp_arr=[]
term_arr=[]

lines = doc.readlines()
count = 0
k=0
for line in lines:
    tmp_arr = line

    if tmp_arr[0] == ' ':
        k = k + 1
        term_arr.append(tmp_arr[1:])
    else:
        term_arr.append(tmp_arr)
    
print(len(term_arr))   
    
for i in range(len(term_arr)):
    ter.write(term_arr[i])

doc.close()
ter.close()
'''


    

def getHAN(num): # 阿拉伯数字转换成汉字
    han=''
    if num == 1:
        han = '一'
    elif num == 2:
        han = '二'
    elif num == 3:
        han = '三'
    elif num == 4:
        han = '四'
    elif num == 5:
        han = '五'
    elif num == 6:
        han = '六'
    elif num == 7:
        han = '七'
    elif num == 8:
        han = '八'
    elif num == 9:
        han = '九'    
    return han

fatiao=[]

for i in range(1261): # 输出汉字表示的条数
    #print(i)
    #print('==========')
    #print(len(str(i+1)))
    if len(str(i))==1:  # 个位数
        tmp = getHAN(i)
        fatiao.append('第' + tmp + '条')
    elif len(str(i))==2: # 十位数
        geweiHAN = getHAN((i)%10)   #gewei = (i)%10
        shiweiHAN = getHAN((int((i)/10))%10)   #shiwei = (int((i)/10))%10
        #print(str(shiwei) + str(gewei)) 
        fatiao.append('第' + shiweiHAN +'十' + geweiHAN + '条')
    elif len(str(i))==3: # 百位数
        geweiHAN = getHAN(i%10)   
        shiweiHAN = getHAN((int(i/10))%10)   
        baiweiHAN = getHAN((int(i/100))%10)
        fatiao.append('第' + baiweiHAN + '百' + shiweiHAN +'十' + geweiHAN + '条')
    elif len(str(i))==4: # 千位数
        geweiHAN = getHAN(i%10)   
        shiweiHAN = getHAN((int(i/10))%10)   
        baiweiHAN = getHAN((int(i/100))%10)
        qianweiHAN = getHAN((int(i/1000))%10)
        fatiao.append('第' + qianweiHAN + '千' + baiweiHAN + '百' + shiweiHAN +'十' + geweiHAN + '条')

print(fatiao[0],fatiao[1])
'''
count = 0
for item in fatiao:
    count = count + 1
    if(item =='第一条'):
        print(count)
'''


doc = open ('bbb.txt')         # 替换汉字条数为阿拉伯数字条数
final_f = open ('ccc.txt','w')
lines = doc.readlines()

line_item = 0
num = 0 #74 
tmpline = []
term_arr=[]


for line in lines:
    line_item = line_item + 1
    num = 0
    for item in fatiao:
        num = num + 1
        if item in line:
            print(item)
            #print(line)
            tmpline = str(line).replace(item ,'#define '+ 'A'+ str(num-1) +' //')  # 替换为 #define A00 //
            #term_arr.append(tmpline)
            break
        else:
            tmpline = line
    term_arr.append(tmpline.strip('\n'))
    #if '第七十四条' in line:
    #    print(line_item)
    #    print(str(line).replace('第七十四条' ,'#define '+ 'A'+ str(num) +' //'))
    #    print(str(line).replace('第七十四条' ,'#define '+ 'A'+ str(num) +' //').split())

#print(term_arr[0])
#print(len(fatiao))
print(len(term_arr))
print(num)
#print(len(term_arr))
for i in range(len(term_arr)):
    final_f.writelines(term_arr[i])
#final_f.write(term_arr)   
    
doc.close()    
final_f.close()



























