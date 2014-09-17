# -*- coding: gbk -*-
from tkinter import *

root = Tk()

'''	AboutDialog	Pmw		'''
import Pmw
#root.option_readfile('optionDB')
#Pmw.initialize()
Pmw.aboutversion('2.0')
Pmw.aboutcopyright('Copyrigth Company Name 2013\nAll rigth reversed')
Pmw.aboutcontact(
		'For information about this app contact:\n'+
		'email:info@company_name.com'
		)
about = Pmw.AboutDialog(root,applicationname='About Dialog')

def action():
	print('Do action now!')
	Pmw.AboutDialog(root,applicationname='About Dialog')

'''	text		'''
text=Text(root,height=26,width=50)
scroll = Scrollbar(root,command=text.yview)
text.configure(yscrollcommand=scroll.set)
text.tag_configure('bold_italics',font=('Verdana',12,'bold','italic'))
text.tag_configure('big',font=('Verdana',24,'bold'))
text.tag_configure('color',foreground='blue',font=('Tempus Sans ITC',14))
button=Button(text,text='I do live at 46 Horton terrace',command=action)
text.window_create(END,window=button)

#photo=PhotoImage(file='aa.jpg')
#text.image_create(END,iamge=photo)
text.pack(side=LEFT)
scroll.pack(side=RIGHT,fill=Y)
'''	canvas		'''
canvas = Canvas(root,width=400,height=400)
canvas.create_oval(10,10,100,100,fill='gray90')
canvas.create_line(105,10,200,105,stipple='')
canvas.create_bitmap(355,53,bitmap='questhead')
frm=Frame(canvas,relief=GROOVE,borderwidth=2)
Label(frm,text='Embedded Frame/Label').pack()
canvas.create_window(285,280,window=frm,anchor=CENTER)
canvas.pack()
'''	Listbox	 Scrollbar	'''
list = Listbox(root,height=6,width=15)
scroll_2 = Scrollbar(root,command=list.yview)
list.configure(yscrollcommand=scroll_2.set)
list.pack(side=LEFT)
scroll_2.pack(side=RIGHT,fill=Y)
for item in range(20):
	list.insert(END,item)

'''	TimeCounter		'''
time = Pmw.TimeCounter(root,labelpos=W,label_text='HH:MM:SS',min='00:00:00',max='23:59:59')
time.pack(padx=10,pady=5)

root.mainloop()
