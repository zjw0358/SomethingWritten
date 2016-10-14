#-*-coding:cp936 -*-
import sqlite3

template = '''
<html>
  <head>
    <title>%(title)s</title>
  </head>
  <body>
    <h1>%(title)s</h1>
    <p>%(text)s</p>
  </body>
</html>'''
data = {'title':'My Home Page','text':'Welcome to my Home Page'}
print(template % data)