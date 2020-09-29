function  z=CRC(x)
% clc
% clear
% x=[0 0 1 0 1 0 1 1];
y=[1 1 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1];      %CRC-16
% y=[1 0 0 0 1 0 0 0 0 0 0 1 0 0 0 0 1];        %CRC-CCITT
%  x=[0 1 1];
% y=[1 1 1 0 1];

tmp=min(min(find(x(:)==1)));
x(1:tmp-1)=[];

a=length(x);
b=length(y);

k=16;

x1=zeros(1,a+k);
x1(1:a)=x;

c=length(x1);
tmp1=c;


    y1=zeros(1,c);
    y1(1:b)=y;
    z=x1;
  while tmp1>=b
    z=xor(z,y1);
    tmp=min(min(find(z(:)==1)));
    z(1:tmp-1)=[];
    y1(end-(tmp-1)+1:end)=[];
    tmp1=length(z);
   end
%    z;

    
      
      
 