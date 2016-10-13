#-*-coding:cp936 -*-
import sqlite3

op = sqlite3.connect("tst.db")

c=op.cursor()
create_tb_sql = '''CREATE TABLE `student` \
							(
                           `id` int(11) \
                           NOT NULL,
                           `name` varchar(20) NOT NULL,
                           `gender` varchar(4) DEFAULT NULL,
                           `age` int(11) DEFAULT NULL,
                           `address` varchar(200) DEFAULT NULL,
                           `phone` varchar(20) DEFAULT NULL,
                            PRIMARY KEY (`id`)
                         )'''
c.execute(create_tb_sql)