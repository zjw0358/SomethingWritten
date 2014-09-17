
from tkinter import *

''' 	Event		'''
root = Tk()

def enter(event):
	print('Entered Frame:x=%d,y=%d',(event.x,event.y))

frame = Frame(root,width=150,height=150)
frame.bind('<Any-Enter>',enter)
frame.pack()

root.mainloop()
"""
import Pmw

evenDick={
	'2':'KeyPerss','3':'KeyRelease','5':'ButtonPress',
	}
root_2 = Tk()

def reportEvent(event):
	rpt='\n\n%s'%(80*'=')

	try:
		rpt='%s focus=%s' %(rpt,event.focus)
	except:
		try:
			rpt='%s send=%s' %(rpt,event.send_event)
		except:
			pass

	text2.yview(END)
	text2.insert(END,rpt)

frame = Frame(root_2,takefocus=1,highlightthickness=2)
text = Entry(frame,width=10,takefocus=1,highlightthickness=2)
text2 = Pmw.ScrolledText(frame)
root_2.mainloop()
"""
