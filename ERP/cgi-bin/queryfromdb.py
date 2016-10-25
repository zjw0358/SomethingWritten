#!C:/Python35/python.exe
#-*-coding:utf-8 -*-

import sqlite3
import os
import cgi,cgitb
import types
import platform
from prettytable import PrettyTable
import custom_data

global DB_FILE_PATH,TABLE_NAME,INPUT_DATA
global sql_select

global Row_Field


DB_FILE_PATH = custom_data.DB_FILE_PATH 

TABLE_NAME = custom_data.TABLE_NAME 

Row_Field = custom_data.Row_FieldForDisplay
  

def ShowRowField():
	for i in Row_Field:
		print(i)
	print('<br/>')

def ShowResult(list_data):    
    print ('<html>')
    print ('<head>')
    print ('<meta charset="gbk">')
    print ('<title>总表预览  </title>')
    print ('</head>')
    print ('<body>')
    #ShowRowField()
    mix=PrettyTable()
    mix.field_names=Row_Field
    
    for i in list_data:
        mix.add_row(i)
    print(mix.get_html_string()) 


    print ('</body>')
    print ('</html>')


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

    ShowResult(r1)    


def CheckRecord(db_name,table_name):
    sql_select="SELECT * FROM "+ table_name +" order by inputDate ASC" 
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

    #mix=PrettyTable()
    #mix.field_names=Row_Field[0:8]
    
    #for i in r1:
    #    mix.add_row(i[0:8])
    #print(mix)          
    #print(r1)    
    ShowResult(r1)

def main():
    print("Content-type:text/html")
    print("\n\n")
    #CheckTableFromDB(DB_FILE_PATH,TABLE_NAME)
    CheckRecord(DB_FILE_PATH,TABLE_NAME)


if __name__ == '__main__':
    main()
