#!C:/Python35/python.exe
#-*-coding:utf-8 -*-

import sqlite3
import os
import cgi,cgitb
import types
import platform
from prettytable import PrettyTable

global DB_FILE_PATH,TABLE_NAME,INPUT_DATA
global sql_select
global Table_tag_Sql
global Row_Field
global Max_Rol
global Table_tag

Table_tag = ['id','inputDate','devName','module','config','imei',
             'dateBydelivery','effective_date','customer','term','contract_status',
             'device_corp','device_outside','dev_outside_date','effective_dateByoutside','transfer_supplier',
             'transfer_price','priceByRent','payment_date','dateByExchange','imeiByExchange',
             'reasonByExchange','dateByRework','dateByReworkOK','noteByRework','dateByReturn',
             'imeiByReturn','supplierByReturn','noteByReturn'  ]

Table_tag_Sql = "(id,inputDate,devName,module,config,imei,\
             dateBydelivery,effective_date,customer,term,contract_status,\
             device_corp,device_outside,dev_outside_date,effective_dateByoutside,transfer_supplier,\
             transfer_price,priceByRent,payment_date,dateByExchange,imeiByExchange,\
             reasonByExchange,dateByRework,dateByReworkOK,noteByRework,dateByReturn,\
             imeiByReturn,supplierByReturn,noteByReturn)" 

DB_FILE_PATH = "F:\\WorkHard\\SomethingWritten\\ERP\\warehouse.db"
#DB_FILE_PATH = "warehouse.db"
TABLE_NAME = "summary"






  

def DeleteItem(db_name,table_name,item,value):
    delete_sql = 'DELETE FROM '+ table_name + ' WHERE '+ item +' = ' + "'"+value+"'"  # others str
    #delete_sql = 'DELETE FROM '+ table_name + ' WHERE '+ item +' = ' + str(value) # id int
    #print(delete_sql)
    try:
        conn = sqlite3.connect(db_name)
        cu = conn.cursor() 
        cu.execute(delete_sql)
        conn.commit()
        cu.close()
        print("删除成功")
    except (Exception) as error_msg:
        print('except in DeleteItem: ')
        print(error_msg)   

def DropTable(db_name,table_name):
    sql_dropTable = 'DROP TABLE IF EXISTS '+table_name
    try:
        conn = sqlite3.connect(db_name)
        cu = conn.cursor() 

        cu.execute(sql_dropTable)
        conn.commit()
        cu.close()
    except (Exception) as error_msg:
        print('except in DropTable: ')
        print(error_msg)      
   
def ifExist(db_name,table_name,item,value):
    sql_query = 'SELECT count(1) from '+ table_name +' WHERE '+ item +'='+ "'"+ value +"'"
    #print(sql_query)
    try:
        conn = sqlite3.connect(db_name)
        cu = conn.cursor() 

        cu.execute(sql_query)
        res = cu.fetchone()
        cu.close()
    except (Exception) as error_msg:
        print('except in ifExist: ')
        print(error_msg)

    if res[0]==1:
        #print("there is")
        return True
    else:
        #print("there NOT")
        return False

def GetFromClient():
    form = cgi.FieldStorage()
    tb_id=[]
    for i in range(len(Table_tag)):
        tb_id.append(form.getvalue(Table_tag[i]))

    print('Content-type: text/html\n\n')  
    if ifExist(DB_FILE_PATH,TABLE_NAME,'id',tb_id[0]): 
        DeleteItem(DB_FILE_PATH,TABLE_NAME,'id',tb_id[0]) 
    else:
        print("无此数据，请检查id号") 


def main():
    #DropTable(DB_FILE_PATH,TABLE_NAME)    
    #DeleteItem(DB_FILE_PATH,TABLE_NAME,'devName','HongtenDF')
    #DeleteItem(DB_FILE_PATH,TABLE_NAME,'id','36')
    GetFromClient()


if __name__ == '__main__':
    main()
