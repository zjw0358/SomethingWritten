a=[1,2,3,4,5]

'''
file = open('names.txt','a')
for i in a:
    file.write(str(i)+"\n")
file.close()
'''

file = open('names.txt','r',encoding='utf-8')
for b in file.readlines():
    print b.strip()
print 'end'
file.close()
print b

    
