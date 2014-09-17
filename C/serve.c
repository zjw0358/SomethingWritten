
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <sys/socket.h>
#include <linux/in.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <sys/wait.h>
#include <signal.h>

#define PORT	3490
void sig_child(int signo);

int main()
{
int listenfd,connfd;
  struct sockaddr_in servaddr;
  char	buff[255];
  time_t ticks;
  int bindfd ;
  int listen_flag ;
  pid_t childpid;
  
  listenfd = socket(AF_INET,SOCK_STREAM,0);
  
  if(listenfd<0)
  	perror("socket");
  	else
  	printf("listenfd is %d\n",listenfd);  
  
  memset(&servaddr,0,sizeof(servaddr));
  
  servaddr.sin_family  = AF_INET;
  servaddr.sin_addr.s_addr = htonl(INADDR_ANY);
  servaddr.sin_port = htons(PORT);//PORT
  
  if( 0 >bind(listenfd,(struct sockaddr *)&servaddr,sizeof(servaddr)) )
  {
  	perror("bind");
  	exit(1);
  }
  
  listen_flag = listen(listenfd,3);
  if(listen_flag==0)
    {
    printf("listen_flag is %d\n",listen_flag);
    perror("listen");
  }
  else
  	perror("listen"); 
  
  signal(SIGCHLD,sig_child);
  
   for(;;)
   {
   	connfd = accept(listenfd,NULL,NULL);
		if((childpid=fork())==0)	//child process
			{
		close(listenfd);		//child process close listening socket first!

		snprintf(buff,sizeof(buff),"welcome to server\n");
		write(connfd,buff,strlen(buff));
		close(connfd);
		exit(0);	
		  }
   	}
  close(connfd);

}

void sig_child(int signo)
{
	pid_t pid;
	int stat;
	while((pid=waitpid(-1,&stat,WNOHANG))>0)
		{
			printf("child %d terminaled\n",pid);
			kill(pid,SIGTERM);
		//	exit(0);
			}
	return;
	}