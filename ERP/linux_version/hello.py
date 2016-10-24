#!/usr/bin/python
#-*- coding:utf-8 -*-

import codecs,sys

sys.stdout=codecs.getwriter('utf8')(sys.stdout.buffer)

print('Content-type:text/html\n\n')
print("<meta charset=\"utf-8\">")
print("hello,你好,python from apache!")
