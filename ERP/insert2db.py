#!C:/Python35/python.exe
#-*-coding:utf-8 -*-

import sqlite3
import os
import cgi,cgitb




def get_conn(path):

    conn = sqlite3.connect(path)
    if os.path.exists(path) and os.path.isfile(path):
        #print('硬盘上面:[{}]'.format(path))
        return conn
    else:
        conn = None
        #print('内存上面:[:memory:]')
        return sqlite3.connect(':memory:')

def get_cursor(conn):

    if conn is not None:
        return conn.cursor()
    else:
        return get_conn('').cursor()


def drop_table(conn, table):

    if table is not None and table != '':
        sql = 'DROP TABLE IF EXISTS ' + table
        if SHOW_SQL:
            pass
            #print('执行sql:[{}]'.format(sql))
        cu = get_cursor(conn)
        cu.execute(sql)
        conn.commit()
        #print('删除数据库表[{}]成功!'.format(table))
        close_all(conn, cu)
    else:
        pass
        #print('the [{}] is empty or equal None!'.format(sql))

def create_table(conn, sql):

    if sql is not None and sql != '':
        cu = get_cursor(conn)
        if SHOW_SQL:
            pass
            #print('执行sql:[{}]'.format(sql))
        cu.execute(sql)
        conn.commit()
        #print('创建数据库表[student]成功!')
        close_all(conn, cu)
    else:
        pass
        #print('the [{}] is empty or equal None!'.format(sql))



def close_all(conn, cu):
    try:
        if cu is not None:
            cu.close()
    finally:
        if cu is not None:
            cu.close()



def save(conn, sql, data):
    if sql is not None and sql != '':
        if data is not None:
            cu = get_cursor(conn)
            for d in data:
                if SHOW_SQL:
                    pass
                    #print('执行sql:[{}],参数:[{}]'.format(sql, d))
                cu.execute(sql, d)
                conn.commit()
            close_all(conn, cu)
    else:
        pass
        #print('the [{}] is empty or equal None!'.format(sql))

def fetchall(conn, sql):
    if sql is not None and sql != '':
        cu = get_cursor(conn)
        if SHOW_SQL:
            pass
            #print('执行sql:[{}]'.format(sql))
        cu.execute(sql)
        r = cu.fetchall()
        if len(r) > 0:
            for e in range(len(r)):
                pass
                #print(r[e])
    else:
        pass
        #print('the [{}] is empty or equal None!'.format(sql)) 

def fetchone(conn, sql, data):
    if sql is not None and sql != '':
        if data is not None:
            #Do this instead
            d = (data,) 
            cu = get_cursor(conn)
            if SHOW_SQL:
                pass
                #print('执行sql:[{}],参数:[{}]'.format(sql, data))
            cu.execute(sql, d)
            r = cu.fetchall()
            if len(r) > 0:
                for e in range(len(r)):
                    pass
                    #print(r[e])
        else:
            pass
            #print('the [{}] equal None!'.format(data))
    else:
        pass
        #print('the [{}] is empty or equal None!'.format(sql))

def update(conn, sql, data):
    if sql is not None and sql != '':
        if data is not None:
            cu = get_cursor(conn)
            for d in data:
                if SHOW_SQL:
                    pass
                    #print('执行sql:[{}],参数:[{}]'.format(sql, d))
                cu.execute(sql, d)
                conn.commit()
            close_all(conn, cu)
    else:
        pass
        #print('the [{}] is empty or equal None!'.format(sql))

def delete(conn, sql, data):
    if sql is not None and sql != '':
        if data is not None:
            cu = get_cursor(conn)
            for d in data:
                if SHOW_SQL:
                    pass
                    #print('执行sql:[{}],参数:[{}]'.format(sql, d))
                cu.execute(sql, d)
                conn.commit()
            close_all(conn, cu)
    else:
        pass
        #print('the [{}] is empty or equal None!'.format(sql))

def drop_table_test():
    #print('删除数据库表测试...')
    conn = get_conn(DB_FILE_PATH)
    drop_table(conn, TABLE_NAME)

def create_table_test():
    #print('创建数据库表测试...')
    create_table_sql = '''CREATE TABLE `summary` (
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
                          `noteByReturn` varchar(20) DEFAULT NULL,
                          
                           PRIMARY KEY (`inputDate`)
                        )'''
    conn = get_conn(DB_FILE_PATH)
    create_table(conn, create_table_sql)

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

#    save_sql = '''INSERT INTO summary values (?, ?, ?, ?, ?, \
#                                              ?, ?, ?, ?, ?, \
#                                              ?, ?, ?, ?, ?, \
#                                              ?, ?, ?, ?, ?, \
#                                              ?, ?, ?, ?, ?, \
#                                              ?, ?, ?)'''
#    data = [tuple(listFromClient)]
#    conn = get_conn(DB_FILE_PATH)
#    save(conn, save_sql, data)

def fetchall_test():
    #print('查询所有数据...')
    fetchall_sql = '''SELECT * FROM student'''
    conn = get_conn(DB_FILE_PATH)
    fetchall(conn, fetchall_sql)

def fetchone_test():
    #print('查询一条数据...')
    fetchone_sql = 'SELECT * FROM student WHERE ID = ? '
    data = 1
    conn = get_conn(DB_FILE_PATH)
    fetchone(conn, fetchone_sql, data)

def update_test():
    #print('更新数据...')
    update_sql = 'UPDATE student SET name = ? WHERE ID = ? '
    data = [('HongtenAA', 1),
            ('HongtenBB', 2),
            ('HongtenCC', 3),
            ('HongtenDD', 4)]
    conn = get_conn(DB_FILE_PATH)
    update(conn, update_sql, data)

def delete_test():
    #print('删除数据...')
    delete_sql = 'DELETE FROM student WHERE NAME = ? AND ID = ? '
    data = [('HongtenAA', 1),
            ('HongtenCC', 3)]
    conn = get_conn(DB_FILE_PATH)
    delete(conn, delete_sql, data)


global Table_tag
Table_tag = ['inputDate','devName','module','config','imei',
             'dateBydelivery','effective_date','customer','term','contract_status',
             'device_corp','device_outside','dev_outside_date','effective_dateByoutside','transfer_supplier',
             'transfer_price','priceByRent','payment_date','dateByExchange','imeiByExchange',
             'reasonByExchange','dateByRework','dateByReworkOK','noteByRework','dateByReturn',
             'imeiByReturn','supplierByReturn','noteByReturn'  ]


def init():

    global DB_FILE_PATH
    #DB_FILE_PATH = 'F:\\WorkHard\\SomethingWritten\\ERP\\warehouse.db'
    DB_FILE_PATH = 'C:\\Program Files (x86)\\Apache Software Foundation\\Apache2.2\\cgi-bin\\warehouse.db'

    global TABLE_NAME
    TABLE_NAME = 'summary'
    global SHOW_SQL
    SHOW_SQL = False #True
    #print('Content-type: text/html\n\n')
    #print('show_sql : {}'.format(SHOW_SQL))
    #drop_table_test()
    #create_table_test()
    #save_test()  #insert data
    
def GetFromClient():
    form = cgi.FieldStorage()
    tb_id=[]
    for i in range(len(Table_tag)):
        tb_id.append(form.getvalue(Table_tag[i]))


    save_test(DB_FILE_PATH,tb_id) 
    print('Content-type: text/html\n\n')
    print("提交成功!")
#===================================
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

#===================================
def main():
    init()
    #CreateTable(DB_FILE_PATH,TABLE_NAME)
    #fetchall_test()
    #print('#' * 50)
    #fetchone_test()
    #print('#' * 50)
    #update_test()
    #fetchall_test()
    #print('#' * 50)
    #delete_test()
    #fetchall_test()
    GetFromClient()

if __name__ == '__main__':
    main()