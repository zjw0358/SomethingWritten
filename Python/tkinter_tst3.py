from tkinter import *
#from tkMessageBox import *
import Pmw

import pil,ImageTk
class App:
	def __init__(self,master):
		self.result = Pmw.EntryField(master,entry_width=8,
				value='',
				label_text='Returned value',
				labelpos=W,labelmargin=1)
		self.result.pack(padx=15,pady=15)

root = Tk()
question = App(root)

button = askquestion("Question:",
		"Oh Dear,did sb say sth to Mr.Green?",
		default = NO)
question.result.setentry(button)

root.mainloop()
