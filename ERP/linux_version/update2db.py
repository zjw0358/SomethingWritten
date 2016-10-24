#! /usr/bin/python3
#-*-coding:utf-8 -*-

import sqlite3
import os
import cgi,cgitb

from prettytable import PrettyTable
import custom_data
import codecs,sys

sys.stdout=codecs.getwriter('utf8')(sys.stdout.buffer)

global DB_FILE_PATH,TABLE_NAME,INPUT_DATA
global Table_tag



DB_FILE_PATH = custom_data.DB_FILE_PATH
TABLE_NAME = custom_data.TABLE_NAME 
Table_tag = custom_data.TableTagForModifyDelete

INPUT_DATA =  [ ('1112', 'Hong', 'ADK-10', 'MTK6555,双卡双待', '455578589652', 
             '20160922', '20160923', '合力泰', '一年','已签',
             '终测仪','电源','20160502','20160503','合总',
             '15万','2000','未付','20160102','98474637',
             '电源坏','20160402','20160409','因为坏','20160905',
             'OI292838','华为','已归还')
         ] # for test only

  




def UpdateData(db_name,table_name,item,value,item1,value1,index,index_value):
    sql_update = 'UPDATE '+ table_name +' SET '+ item +'='+ "'"+ value +"',"+item1 +'='+ "'"+ value1 +"'"+" WHERE " + index+"="+index_value
    print(sql_update)
    try:
        conn = sqlite3.connect(db_name)
        cu = conn.cursor() 

        cu.execute(sql_update)
        conn.commit()
        cu.close()
    except (Exception) as error_msg:
        print('except in UpdateData: ')
        print(error_msg)  


def update2db(db_name,table_name,input_data):
    #sql_update = 'UPDATE '+ table_name +' SET '+ item +'='+ "'"+ value1 +"'"+" WHERE " + index+"="+value2
    
    #print(str(len(input_data)))
    item_list=[]  # list ,where there is Not None

    for x in range(len(input_data)):
      if input_data[x]!=None:
          item_list.append(x)

    #print("item list is")
    #print(item_list)
    #print("<br/>")

    field_list=[]   # Tag list
    value_list=[] # value list from input

    for j in item_list:
        field_list.append(Table_tag[j])
        value_list.append(input_data[j])

    #print("input map is :")
    #print(field_list)
    #print("<br/>")
    #print(value_list)  
    #print("<br/>")

    items=[]
    #print("item_list is ")
    #print((len(item_list)))
    #print(item_list)


    for j in range(len(item_list)):
        #print(field_list[j])
        #print(value_list[j])
        items.append(str(field_list[j])+"="+"'"+str(value_list[j])+"'"+",")
        
    items[-1]=items[-1].replace(",","")
    #print(items[-1])

    #print("items is :")
    #print(items)
    #print("<br/>")

    item_str=""    # For string in sql sentense
    for i in items:
        item_str=item_str+i
    #print(item_str)
    #print("<br/>")

    index=Table_tag[0]
    #print("index is ")
    #print(Table_tag[0])
    #print("<br/>")
    index_value=input_data[0]
    #print("index_value is ")
    #print(input_data[0])
    #print("<br/>")


    sql_update = 'UPDATE '+ table_name +' SET '+ item_str +" WHERE " + index+"="+index_value

    #print(sql_update)
    try:
        conn = sqlite3.connect(db_name)
        cu = conn.cursor() 
        
        cu.execute(sql_update)
        conn.commit()
        cu.close()
        print("修改成功!")
    except (Exception) as error_msg:
        print('except in UpdateData: ')
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
        print('except in CheckValid: ')
        print(error_msg)

    if res[0]==1:
        #print("there is")
        return True
    else:
        #print("there NOT")
        return False

def GetFromClient():
    print('Content-type: text/html\n\n')
    print("<meta charset=\"utf-8\">")
    form = cgi.FieldStorage()
    tb_id=[]
    for i in range(len(Table_tag)):
        tb_id.append(form.getvalue(Table_tag[i]))

     
    #print(tb_id) 
    if ifExist(DB_FILE_PATH,TABLE_NAME,'id',tb_id[0]): 
        update2db(DB_FILE_PATH,TABLE_NAME,tb_id) 
    else:
        print("无此数据，请检查id号")    
    

def main():
    GetFromClient()
    #UpdateData(DB_FILE_PATH,TABLE_NAME,'id','1','module','wosede','id','1')

if __name__ == '__main__':
    main()
