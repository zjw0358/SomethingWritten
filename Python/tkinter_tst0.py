# -*- coding: gbk -*-
from tkinter import *

root = Tk()
#root.option_readfile('optionDB')
'''	Toplevel	'''
root.title('Toplevel')
Label(root,text='This is main(default) Toplevel').pack(pady=10)
t1 = Toplevel(root)
Label(t1,text='This is child of root').pack(padx=10,pady=10)
t2 = Toplevel(root)
Label(t2,text='This is a transient window of root').pack(padx=10,pady=10)
t2.transient(root)
t3 = Toplevel(root,borderwidth=5,bg='blue')
Label(t3,text='No wm decorations',bg='blue',fg='white').pack(padx=10,pady=10)
t3.overrideredirect(1)
t3.geometry('200x70+150+150')
'''	Frame	'''
f =Frame(root,width=300,height=110)
xf = Frame(f,relief=GROOVE,borderwidth=2)
Label(xf,text='You shot him!').pack(pady=10)
Button(xf,text="He's dead!",state=DISABLED).pack(side=LEFT,padx=5,pady=8)
Button(xf,text="let's go out!",command=root.quit).pack(side=RIGHT)
xf.place(relx=0.01,rely=0.125,anchor=NW)
Label(f,text='self-defence against fruit').place(relx=0.06,rely=0.125,anchor=W)
f.pack()
'''	Entery(Input)	'''
Label(root,text='puzzle:').pack(side=LEFT,padx=5,pady=10)
e=StringVar()
Entry(root,width=40,textvariable=e).pack(side=LEFT)
e.set("'Plz input sth here!'")

'''	Radiobutton	'''
var=IntVar()
for text,value in [('Red',1),('blue',2),('yellow',3),
		   ('gray',4),('black',5),('white',6)]:
	Radiobutton(root,text=text,value=value,variable=var,
			indicatoron=0).pack(anchor=W,fill=X,ipadx=18)
var.set(2) # default value of RadioButton

'''	Message		'''
string_zh=u'消息框测试中文测试消息框测试中文测试消息框测试中文测试消息框测试中文测试消息框测试中文测试'
Message(root,text=string_zh,bg='royalblue',fg='ivory',relief=GROOVE).pack(padx=10,pady=10)

'''	text		'''
text=Text(root,height=26,width=50)
scroll = Scrollbar(root,command=text.yview)
text.configure(yscrollcommand=scroll.set)
text.tag_configure('bold_italics',font=('Verdana',12,'bold','italic'))
text.tag_configure('big',font=('Verdana',24,'bold'))
text.tag_configure('color',foreground='blue',font=('Tempus Sans ITC',14))
button=Button(text,text='I do live at 46 Horton terrace')
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
'''	Listbox		'''
list = Listbox(root,height=6,width=15)
scroll_2 = Scrollbar(root,command=list.yview)
list.configure(yscrollcommand=scroll_2.set)
list.pack(side=LEFT)
scroll_2.pack(side=RIGHT,fill=Y)
for item in range(20):
	list.insert(END,item)
root.mainloop()

