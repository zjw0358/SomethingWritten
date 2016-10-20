#!C:/Python35/python.exe
#-*-coding:utf-8 -*-

import sqlite3
import os
import cgi,cgitb
import time
import custom_data

global DB_FILE_PATH
global TABLE_NAME

DB_FILE_PATH = custom_data.DB_FILE_PATH
TABLE_NAME = custom_data.TABLE_NAME 


global Table_field
Table_field = str(custom_data.TableTagForInsert)

global Table_tag
Table_tag = list(custom_data.TableTagForInsert)

def save_test(db_name,input_data):
    sql_insert='INSERT INTO '+ TABLE_NAME + ' '+ Table_field +' values ' + '(?, ?, ?, ?, ?, \
                                              ?, ?, ?, ?, ?, \
                                              ?, ?, ?, ?, ?, \
                                              ?, ?, ?, ?, ?, \
                                              ?, ?, ?, ?, ?, \
                                              ?, ?, ?)'
    data = [tuple(input_data)]                                          
    try:
        conn = sqlite3.connect(db_name)
        cu = conn.cursor() 
        for d in data:
            cu.execute(sql_insert,d)
            conn.commit()
        cu.close()
    except (Exception) as error_msg:
        print(error_msg)  




def is_valid_date(str):
	#print(str)
	try:
		time.strptime(str, "%Y-%m-%d")
		#print("Right")
		#print("<br/>")
		return True
	except (Exception) as error_msg:
		print(error_msg)
		#print("<br/>")
		return False
    
def GetFromClient():
    print('Content-type: text/html\n\n')
    form = cgi.FieldStorage()
    tb_id=[]
    for i in range(len(Table_tag)):
        tb_id.append(form.getvalue(Table_tag[i]))

    if is_valid_date(tb_id[0]) is not True:
        print("日期格式错误")
        print("<br/>")
        return    
    #print(tb_id)
    #print("<br/>")            
    save_test(DB_FILE_PATH,tb_id) 
    #print('Content-type: text/html\n\n')
    print("提交成功!")



def main():

    GetFromClient()

if __name__ == '__main__':
    main()