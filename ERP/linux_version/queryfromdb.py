#! /usr/bin/python3
#-*-coding:utf-8 -*-

import sqlite3
import os
import cgi,cgitb
import types
import platform
from prettytable import PrettyTable
import custom_data
import codecs,sys

global DB_FILE_PATH,TABLE_NAME,INPUT_DATA
global sql_select

global Row_Field


DB_FILE_PATH = custom_data.DB_FILE_PATH 

TABLE_NAME = custom_data.TABLE_NAME 

Row_Field = custom_data.Row_FieldForDisplay
  
sys.stdout=codecs.getwriter('utf8')(sys.stdout.buffer)

def ShowRowField():
	for i in Row_Field:
		print(i)
	print('<br/>')

def ShowResult(list_data):    
    print ('<html>')
    print ('<head>')
    print ('<meta charset=\"utf-8\">')
    print ('<title>总表预览  </title>')
    print ('</head>')
    print ('<body>')
    #ShowRowField()
    mix=PrettyTable()
    mix.field_names=Row_Field
    	#mix.align["id"]	="c"
    	#mix.padding_width=5
    for i in list_data:
    	mix.add_row(i)
    print(mix.get_html_string()) 

    print ('</body>')
    print ('</html>')


def CheckTableFromDB(db_name,table_name): 
    sql_select='SELECT * FROM '+ table_name + ' order by id asc' 
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
    print(r1)     
    #for i in r1:
    	#for j in i:
    		#if type(j) is not types.IntType and  j is not None	:
    			#j.decode('gbk')
    		#if type(j) is types.StringType:
    			#j.encode('gbk')
    			#print(j+' is string')
    #print(r1)			
    #ShowResult(r1)    


def CheckRecord(db_name,table_name):
    sql_select="SELECT * FROM "+ table_name +" order by id ASC" 
    try:    
        conn = sqlite3.connect(db_name)
        cu = conn.cursor()     
        cu.execute(sql_select)
        r=cu.fetchall()
        #print(r)
        cu.close()
    except (Exception) as error_msg:
        print(error_msg)

    r1=[] 
    for i in r:
    	#print(i)
    	r1.append(list(i))
	#print(i)
	#print("<br />")
	
    #print(r1)
    #print("<br/>")
    ShowResult(r1)

def main():
    print("Content-type:text/html")
    print("\n\n")
    print("<meta charset=\"utf-8\">")
    #CheckTableFromDB(DB_FILE_PATH,TABLE_NAME)
    CheckRecord(DB_FILE_PATH,TABLE_NAME)


if __name__ == '__main__':
    main()
