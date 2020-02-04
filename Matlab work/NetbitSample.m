clc;
clear;
close all;

turnkey=4;                             % 选择原始图像
switch turnkey
    case 1
        II=imread('len2.bmp');
        I=II(33:64,33:64);
      
    case 2
        I=imread('len2.bmp');
    case 3
        I=imread('cameraman.tif');
    case 4
        I=imread('sample.bmp');
end
[m n]=size(I);
L=2;              %小波变换尺度
s=zeros(2^L);
c0=0;
c025=0;
c05=0;
c075=0;

bk1=4;     %块数： bc1*bc2
bk2=4;
bc1=64;    %块的边长
bc2=64;

for kk=1:1:bk1
    for jj=1:bk2
     K=I((kk-1)*bc1+1:bc1*kk,(jj-1)*bc2+1:bc2*jj);
     [m1 n1]=size(K);
for i=1:m1/(2^L)
    for j=1:n1/(2^L)
        A=K((i-1)*(2^L)+1:(2^L)*i,(j-1)*(2^L)+1:(2^L)*j);  %分段，每2^L为一段
        
        for u=1:(2^L)                                %每4个空域像素一组
            for v=1:(2^L)
                s(u,v)=mod(double(A(u,v)),4);
                z=mod(sum(sum(s)),4);
            end
        end
        if z==0
            c0=c0+1;
        elseif z==1
            c025=c025+1;
        elseif z==2
            c05=c05+1;
        elseif z==3
            c075=c075+1;
        end
    end
end
  C0(kk,jj)=c0+c05;
  C1(kk,jj)=c025+c075;
        c0=0;
        c025=0;
        c05=0;
        c075=0;
    end
end
C0
C1