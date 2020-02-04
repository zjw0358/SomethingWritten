% 文献《可恢复到脆弱图像水印技术》---直接把水印隐藏在LSB  
clc;       
clear;
close all;
turnkey=8;                             % 选择原始图像
switch turnkey
    case 1
        I=imread('cameraman.tif');     % 原始图象cameraman
    case 2
        I=rgb2gray(imread('50.bmp'));  % 原始图象Lena
    case 6
        I=imread('len1.tif');
    case 7
        I=imread('sample.bmp');
    case 8
        I=imread('sample1.bmp');       
end
[m n]=size(I);
I1=bitand(I,128);   %提取MSB
a1=I1(1:m/2,1:n/2);   %MSB图象分4块
a2=I1(1:m/2,n/2+1:n);
a3=I1(m/2+1:m,1:n/2);
a4=I1(m/2+1:m,n/2+1:n);

y1=ArnoldF(a1,32);    %arnold置乱
y2=ArnoldF(a2,17);
y3=ArnoldF(a3,19);
y4=ArnoldF(a4,25);
I2=[y1 y2;y3 y4];
I3=reshape(I2,1,m*n);

% I3=reshape(I1,1,m*n);   %重新排列成一行

x1=I(1:m/2,1:n/2);   %原始图象分4块
x2=I(1:m/2,n/2+1:n);
x3=I(m/2+1:m,1:n/2);
x4=I(m/2+1:m,n/2+1:n);


Z1=cell(1,4);
z=zeros(1,4)
Ham0=zeros(1,m*n/4);
Ham1=zeros(1,m*n/4);
Ham2=zeros(1,m*n/4);

for k=1:m*n/4
    Z=I3((k-1)*4+1:k*4);
        for i=1:4
        Z1{i}=dec2bin(double(Z(i)));       %转二进制
               if str2num(Z1{i})~=0
                  Z1{i}=char('1');
              end
                z(i)=str2num(Z1{i});
        end
        r0=xor(z(1),z(2));
        r0=xor(r0,z(3));
        
        r1=xor(z(1),z(2));
        r1=xor(r1,z(4));
        
        r2=xor(z(1),z(3));
        r2=xor(r2,z(4));
        
        Ham0(k)=r0;
        Ham1(k)=r1;
        Ham2(k)=r2;
 end
 HM0=uint8(reshape(Ham0,m/2,n/2));
  HM1=uint8(reshape(Ham1,m/2,n/2));
   HM2=uint8(reshape(Ham2,m/2,n/2));
   
   X1=bitand(x1,254);    %最低位清零
    X2=bitand(x2,254);    %最低位清零
     X3=bitand(x3,254);    %最低位清零
     
     Y1=bitor(X1,HM0);   %嵌入水印
     Y2=bitor(X2,HM1);   %嵌入水印
     Y3=bitor(X3,HM2);   %嵌入水印
     
     I4=[Y1 Y2;Y3 x4];
     TI=uint8(I4);
     imshow(TI)
     imwrite(TI,'qianruhou.bmp')