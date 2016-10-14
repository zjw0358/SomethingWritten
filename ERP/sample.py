#! /usr/bin/python3
#-*-coding:utf-8 -*-

import sqlite3
import os
import cgi,cgitb
import types

global DB_FILE_PATH,TABLE_NAME,INPUT_DATA
global sql_select
global Table_tag

Table_tag = "(inputDate,devName,module,config,imei,\
             dateBydelivery,effective_date,customer,term,contract_status,\
             device_corp,device_outside,dev_outside_date,effective_dateByoutside,transfer_supplier,\
             transfer_price,priceByRent,payment_date,dateByExchange,imeiByExchange,\
             reasonByExchange,dateByRework,dateByReworkOK,noteByRework,dateByReturn,\
             imeiByReturn,supplierByReturn,noteByReturn)" 

#DB_FILE_PATH = "F:\\WorkHard\\SomethingWritten\\ERP\\warehouse.db"
DB_FILE_PATH = "warehouse.db"
TABLE_NAME = "summary"
INPUT_DATA =  [ ('1112', 'Hong', 'ADK-10', 'MTK6555,双卡双待', '455578589652', 
             '20160922', '20160923', '合力泰', '一年','已签',
             '终测仪','电源','20160502','20160503','合总',
             '15万','2000','未付','20160102','98474637',
             '电源坏','20160402','20160409','因为坏','20160905',
             'OI292838','华为','已归还')
         ]

  
sql_insert='INSERT INTO '+ TABLE_NAME + ' '+ Table_tag +' values ' + '(?, ?, ?, ?, ?, \
                                              ?, ?, ?, ?, ?, \
                                              ?, ?, ?, ?, ?, \
                                              ?, ?, ?, ?, ?, \
                                              ?, ?, ?, ?, ?, \
                                              ?, ?, ?)'


def ShowResult(list_data):
    print("Content-type:text/html")
    print("\n\n")
    print ('<html>')
    print ('<head>')
    print ('<meta charset="utf-8">')
    print ('<title>Hello Word  </title>')
    print ('</head>')
    print ('<body>')
    #print ('<h2>Hello Word!--- 我的CGI测试 </h2>')
    for i in list_data:
        print(str(i).encode('gb2312'))
    print ('</body>')
    print ('</html>')

    #for i in list_data:
    #    print(i)

def CheckTableFromDB(db_name,table_name): 
    sql_select='SELECT * FROM '+ table_name  
    try:    
        conn = sqlite3.connect(db_name)
        cu = conn.cursor()     
        cu.execute(sql_select)
        r=cu.fetchall()
        cu.close()
    except (Exception) as error_msg:
        print(error_msg)

    r1=[]	
    for i in r:
        r1.append(list(i))
    #print(r1)     
    #for i in r1:
    	#for j in i:
    		#if type(j) is not types.IntType and  j is not None	:
    			#j.decode('gbk')
    		#if type(j) is types.StringType:
    			#j.encode('gbk')
    			#print(j+' is string')
    #print(r1)			
    ShowResult(r1)

def CommitToTable(db_name,input_data):
    try:
        conn = sqlite3.connect(db_name)
        cu = conn.cursor() 
        for d in input_data:
            cu.execute(sql_insert,d)
            conn.commit()
        cu.close()
    except (Exception) as error_msg:
        print(error_msg)    

def DeleteItem(db_name,table_name,item,data2del):
    delete_sql = 'DELETE FROM '+ table_name + ' WHERE '+ item +' = ' + "'"+data2del+"'"  # others str
    #delete_sql = 'DELETE FROM '+ table_name + ' WHERE '+ item +' = ' + str(data2del) # id int
    print(delete_sql)
    try:
        conn = sqlite3.connect(db_name)
        cu = conn.cursor() 
        #for d in data2del:
        #    print(type(d))
            #cu.execute(delete_sql,d)
        cu.execute(delete_sql)
        conn.commit()
        cu.close()
    except (Exception) as error_msg:
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

def CreateTable(db_name,table_name):
    sql_createTB='''CREATE TABLE ''' + table_name +''' (
                          id integer primary key autoincrement,                            
                          `inputDate` varchar(15) NOT NULL,
                          `devName` varchar(20) DEFAULT NULL,
                          `module` varchar(20) DEFAULT NULL,
                          `config` varchar(20) DEFAULT NULL,
                          `imei` varchar(20) DEFAULT NULL,

                          `dateBydelivery` varchar(20) DEFAULT NULL,
                          `effective_date` varchar(20) DEFAULT NULL,
                          `customer` varchar(20) DEFAULT NULL,
                          `term` varchar(20) DEFAULT NULL,                        
                          `contract_status` varchar(20) DEFAULT NULL,

                          `device_corp` varchar(20) DEFAULT NULL,
                          `device_outside` varchar(20) DEFAULT NULL,
                          `dev_outside_date` varchar(20) DEFAULT NULL,
                          `effective_dateByoutside` varchar(20) DEFAULT NULL,                        
                          `transfer_supplier` varchar(20) DEFAULT NULL,

                          `transfer_price` varchar(20) DEFAULT NULL,
                          `priceByRent` varchar(20) DEFAULT NULL,
                          `payment_date` varchar(20) DEFAULT NULL,
                          `dateByExchange` varchar(20) DEFAULT NULL,                        
                          `imeiByExchange` varchar(20) DEFAULT NULL,

                          `reasonByExchange` varchar(20) DEFAULT NULL,
                          `dateByRework` varchar(20) DEFAULT NULL,
                          `dateByReworkOK` varchar(20) DEFAULT NULL,
                          `noteByRework` varchar(20) DEFAULT NULL,                        
                          `dateByReturn` varchar(20) DEFAULT NULL,

                          `imeiByReturn` varchar(20) DEFAULT NULL,
                          `supplierByReturn` varchar(20) DEFAULT NULL,
                          `noteByReturn` varchar(20) DEFAULT NULL
                           
                        )'''

    try:
        conn = sqlite3.connect(db_name)
        cu = conn.cursor() 

        cu.execute(sql_createTB)
        conn.commit()
        cu.close()
    except (Exception) as error_msg:
        print('except in CreateTable: ')
        print(error_msg)   

def UpdateData(db_name,table_name,item,data2update):
    sql_update = 'UPDATE '+ table_name +' SET '+ item +'='+ "'"+ data2update +"'"
    #print(sql_update)
    try:
        conn = sqlite3.connect(db_name)
        cu = conn.cursor() 

        cu.execute(sql_update)
        conn.commit()
        cu.close()
    except (Exception) as error_msg:
        print('except in UpdateData: ')
        print(error_msg)  


def main():
    #init()
    #CreateTable(DB_FILE_PATH,TABLE_NAME)
    CheckTableFromDB(DB_FILE_PATH,TABLE_NAME)
    #CommitToTable(DB_FILE_PATH,INPUT_DATA)
    #DropTable(DB_FILE_PATH,TABLE_NAME)
    
    #DeleteItem(DB_FILE_PATH,TABLE_NAME,'devName','HongtenDF')
    #DeleteItem(DB_FILE_PATH,TABLE_NAME,'id',12)
    #UpdateData(DB_FILE_PATH,TABLE_NAME,'devName','huangda')

if __name__ == '__main__':
    main()
