% function hundunjia(filename)   %主函数
% image=imread(filename);
% start_time=cputime;
clc
clear
start_time=cputime;
image=imread('len2.bmp');
BIN=cell(256);
for i=1:256
    for j=1:256
        BIN{i,j}=dec2bin(double(image(i,j)));
        if length(BIN{i,j})<8
            cha=8-length(BIN{i,j});
            kong=blanks(8);
            kong(1:cha)='0';
            kong(cha+1:end)=BIN{i,j};
            BIN{i,j}=kong;
        end
    end
end
BI=reshape(BIN,1,256*256);
%%%%%%%%%%%%%%%%%%%%%%
a=zeros(1,256*256*8);
b=[1 1 0 0 1 1 0 0];                          %  L F S R 初始值11001100
for i=1:(256*256*8)
    a(i)=b(1);
    for j=1:7
        b(j)=b(j+1);
        tp=xor(b(8),b(4));
        tp1=xor(tp,b(3));
        b(8)=xor(tp1,b(2));
    end
end
%%%%%%%%%%%%%%%%%%%%%%%%
Q=zeros(1,256*256*8);
Q1=zeros(1,256*256*8);
q=zeros(1,8);
for i=1:256*256
          r=a((i-1)*8+1:i*8);
          m=BI{i};
          q=Q((i-1)*8+1:i*8);
        for k=1:8
            q(k)=xor(r(k),str2double(m(k)));
        end
        Q1((i-1)*8+1:i*8)=q;
    end
%%%%%%%%%%%%%%%%%%%%%%%%%%        
j=10;
x=zeros(1,256*256*8);
x(1)=0.12345678;                             % 混 沌 函 数 初 值0.1234567
c=zeros(1,256*256*8);

 for k=1:256*256*8
    if Q1(k)==0      %根据0，1选择函数   
     x(k+1)=sqrt(abs(2*x(k)-1));
    else
        x(k+1)=1-sqrt(abs(2*x(k)-1));
    end
    c(k)=mod(fix(x(k)*2^j), 2);%转换函数

 end
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

miwen3=zeros(1,256*256);
for i=1:256*256
    miwen=c((i-1)*8+1:i*8);
          for k=1:8
              miwen1(k)=num2str(miwen(k));
          end
          miwen2=strcat(miwen1(1),miwen1(2),miwen1(3),miwen1(4),miwen1(5),miwen1(6),miwen1(7),miwen1(8));
          miwen3(i)=bin2dec(miwen2);
      end
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Jieguo=reshape(miwen3,256,256);
TI=uint8(Jieguo);
imwrite(TI,'jiamijieguo.bmp');
imshow(TI)
Time=cputime-start_time