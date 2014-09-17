import threading,time,random



def numbergen(sem,queue,qlock):
	while 1:
		time.sleep(1)
		if random.randint(0,1):
			value = random.randint(0,100)
			qlock.acquire()
			try:
				queue.append(value)
			finally:
				qlock.release()
			print(threading.currentThread().getName(),"insert", value ," on the queue")
			print('In gen',queue)
			sem.release()

def numbercalc(sem,queue,qlock):
	while 1:
		time.sleep(2)
		sem.acquire()
		qlock.acquire()
		try:
			value = queue.pop(0)
		finally:
			qlock.release()
		newvalue = value*2
		print(threading.currentThread().getName()," Got",value, "  from the queue",newvalue)
		print('In Calc',queue)
		time.sleep(3)


childthreads=[]
sem = threading.Semaphore(0)
queue=[]
qlock=threading.Lock()
print("MainThread is ",threading.currentThread().getName())
t = threading.Thread(target=numbergen,args=[sem,queue,qlock])
t.setDaemon(1)
t.start()
childthreads.append(t)


for i in range(1,3):
	t = threading.Thread(target=numbercalc,args=[sem,queue,qlock])
	t.setDaemon(1)
	t.start()
	childthreads.append(t)

while 1: # MainThreading sleep 
	time.sleep(300)
