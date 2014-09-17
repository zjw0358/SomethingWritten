
#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <sys/socket.h>
#include <linux/in.h>
//#include <netdb.h>
//#define MAXLING 255
#define SERVER_IP "127.0.0.1"
#define PORT	3490

int main()
{
    int sockfd;
    int context;
    char recvline[256]={'0'};
    struct sockaddr_in servaddr;	
    int connectfd;
    struct protoent *protocol;
    protocol = NULL;
    protocol = getprotobyname("icmp");
    printf("protocol name :%s\n",protocol.p_name);
    printf("protocol number :%d\n",protocol.p_proto);
    printf("protocol alias :%s\n",protocol.p_aliases[0]);
    
    if((sockfd=socket(AF_INET,SOCK_STREAM,0))<0)
	       printf("socket error\n");
	  else
	  		printf("sockfd is %d \n",sockfd);
	  		
    memset(&servaddr,0,sizeof(servaddr));
    servaddr.sin_family = AF_INET;
    servaddr.sin_port = htons(PORT);
    servaddr.sin_addr.s_addr = inet_addr(SERVER_IP);

    if(connectfd = connect(sockfd,(struct sockaddr*)&servaddr,sizeof(servaddr))<0)
	     printf("connect error\n");
    else
    	printf("connectfd is %d \n",connectfd);
    	
 
    context=read(sockfd,recvline,sizeof(recvline));
    pselect(1,NULL,NULL,NULL,NULL,NULL);
    if(context<0)
 			printf("read error\n");
 	  else
 	  	printf("context is %d\n",context);
 	  	
    if(fputs(recvline,stdout)==EOF)
    	perror("fputs"); 
  
  
    return 0;
}
