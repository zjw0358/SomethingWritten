
import socket
import sys,time

host = sys.argv[1]
textport = sys.argv[2]
filename = sys.argv[3]


print('Creating socket...')
try:	
	s= socket.socket(socket.AF_INET,socket.SOCK_STREAM)
except sock.error in e:
	print('Creating socket error',s,e)
	sys.exit(1)
print('Done')

print('Looking up port number...')
try:
	port = int(textport)
except ValueError:
	try:
		port = socket.getservbyname(textport,'tcp')
	except socket.error in e:
		print("Couldn't find your port",s,e)
		sys.exit(1)
print('Done')

print('Connecting to remote host on port ...',port)
try:
	s.connect((host,port))
except socket.gaierror:
	print("Address-related error connecting to server:",s)
	sys.exit(1)
except socket.error:
	print("Connection error:%s",s)
	sys.exit(1)
print('Done')

print('Sleeping...')
time.sleep(10)
print('Continuing...')

print('Connected from',s.getsockname())
print('Connected to',s.getpeername())

try:
	s.sendall('GET %s HTTP/1.0\r\n\r\n' ,filename)
except socket.error:
	print('Error sending data',s)
	sys.exit(1)

try:
	s.shutdown(1)
except socket.error:
	print('Error sending data(detected by shutdown)',s)
	sys.exit(1)

while 1:
	try:
		buf=s.recv(2048)
	except socket.error:
		print('Error receiving data',s)
		sys.exit(1)
	if not len(buf):
		break
	sys.stdout.write(buf)
