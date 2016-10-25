#!C:/Python35/python.exe
#-*-coding:utf-8 -*-

import sqlite3
import os
import cgi,cgitb
import time
import custom_data

global status
global DB_FILE_PATH
global TABLE_NAME

DB_FILE_PATH = custom_data.DB_FILE_PATH
TABLE_NAME = custom_data.TABLE_NAME 


 
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
        status=True
    except (Exception) as error_msg:
        status=False
        print('except in CreateTable: ')
        print(error_msg)   

    if status==True:
        print("init OK")





def main():
    CreateTable(DB_FILE_PATH,TABLE_NAME)

if __name__ == '__main__':
    main()