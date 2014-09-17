# -*- coding: gbk -*-

from tkinter import *
#import tkFont
import random

class App:    
    def __init__(self, master) :
        
        frame = [Frame() for i in range(4)]
        for i in range(4):
            frame[i] = Frame(master)
            frame[i].pack()
        
        self.button1 = Button(frame[0], text='双色球', fg='red', width=20, command=self.creatDouble)
        self.button1.pack(side=LEFT)
        
        self.button2 = Button(frame[1], text='大乐透', fg='blue',width=20, command=self.creatDaLeTou)
        self.button2.pack(side=LEFT)
        
        self.button3 = Button(frame[2], text='清空', width=20, command=self.clearall)
        self.button3.pack()

        self.text = Text(frame[3], width=53, height=15)
        self.scroll = Scrollbar(frame[3], width=4, command=self.text.yview)
        self.text.configure(yscrollcommand=self.scroll.set)
        self.scroll.pack(side=RIGHT, fill=Y)
        self.text.pack(side=LEFT)
        
    def say_hi(self):
        print ('hello world')
        
    def clearall(self):
        self.text.delete('1.0',END)

    def creatRandum(self, rangeSize, arrSize):
        arr = [0 for i in range(0,arrSize)]
        rangeArr = [x + 1 for x in range(rangeSize)]
        for i in range(len(arr)) :
            arr[i] = rangeArr[random.randint(0, len(rangeArr) - 1)]
            rangeArr.remove(arr[i])
        #arr.sort()
        return arr

    def creatDouble(self):
        redball = self.creatRandum(33, 6)
        blueball = random.randint(1,16)

        ballstr = ''
        for i in redball :
            ballstr = ballstr + str(i) + ' '
        ballstr = ballstr + '|' + str(blueball) + '\n'

        self.text.insert(1.0, ballstr)

    def creatDaLeTou(self):
        beforeArea = self.creatRandum(35, 5)
        afterArea = self.creatRandum(12, 2)
        
        ballstr = ''
        for i in beforeArea :
            ballstr = ballstr + str(i) + ' '
        ballstr = ballstr + '|'
        for i in afterArea :
            ballstr = ballstr + str(i) + ' '
        ballstr = ballstr + '\n'

        self.text.insert(1.0, ballstr)

        
root = Tk()
app = App(root)
root.title('彩票机选器')
root.mainloop()

