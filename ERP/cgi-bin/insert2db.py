#!C:/Python35/python.exe
#-*-coding:utf-8 -*-

import sqlite3
import os
import cgi,cgitb
import time

global DB_FILE_PATH
DB_FILE_PATH = 'F:\\WorkHard\\SomethingWritten\\ERP\\warehouse.db'
global TABLE_NAME
TABLE_NAME = 'summary'


global Table_field
Table_field = "(inputDate,devName,module,config,imei,\
             dateBydelivery,effective_date,customer,term,contract_status,\
             device_corp,device_outside,dev_outside_date,effective_dateByoutside,transfer_supplier,\
             transfer_price,priceByRent,payment_date,dateByExchange,imeiByExchange,\
             reasonByExchange,dateByRework,dateByReworkOK,noteByRework,dateByReturn,\
             imeiByReturn,supplierByReturn,noteByReturn)" 

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


global Table_tag
Table_tag = ['inputDate','devName','module','config','imei',
             'dateBydelivery','effective_date','customer','term','contract_status',
             'device_corp','device_outside','dev_outside_date','effective_dateByoutside','transfer_supplier',
             'transfer_price','priceByRent','payment_date','dateByExchange','imeiByExchange',
             'reasonByExchange','dateByRework','dateByReworkOK','noteByRework','dateByReturn',
             'imeiByReturn','supplierByReturn','noteByReturn'  ]

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
    #print(len(tb_id[0]))
    #print("<br/>")            
    save_test(DB_FILE_PATH,tb_id) 
    #print('Content-type: text/html\n\n')
    print("提交成功!")



def main():

    GetFromClient()

if __name__ == '__main__':
    main()