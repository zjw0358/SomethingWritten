#import ctypes
#import urllib2
__author__='huangda'
print('hello,urllib2')
if(0):
	print("yes")
else:
	print("no")
'''
a,b=0,1
while b<10:
	print(b,end=',')
	a,b=b,a+b

a = ['Mary', 'had', 'a', 'little', 'lamb']
print("\n")
for i in range(len(a)):
	print(i, a[i])


def parrot(voltage, state='a stiff', action='voom', type='Norwegian Blue'):
    print("-- This parrot wouldn't", action, end=' ')
    print("if you put", voltage, "volts through it.")
    print("-- Lovely plumage, the", type)
    print("-- It's", state, "!")

parrot(action='VOOOOOM', voltage=1000000) 
#parrot(voltage=5.0, 'dead')



import threading, zipfile

class AsyncZip(threading.Thread):
    def __init__(self, infile, outfile):
        threading.Thread.__init__(self)
        self.infile = infile
        self.outfile = outfile
    def run(self):
        f = zipfile.ZipFile(self.outfile, 'w', zipfile.ZIP_DEFLATED)
        f.write(self.infile)
        f.close()
        print('Finished background zip of:', self.infile)

background = AsyncZip('mydata.txt', 'myarchive.zip')
background.start()
print('The main program continues to run in foreground.')

background.join()    # Wait for the background task to finish
print('Main program waited until background was done.')

'''

