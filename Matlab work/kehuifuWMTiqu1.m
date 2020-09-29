% 文献《可恢复到脆弱图像水印技术》---直接把水印隐藏在LSB  
clc;       
clear;
close all;
turnkey=5;                             % 选择原始图像
switch turnkey
    case 1
        I=imread('cameraman.tif');     % 原始图象cameraman
    case 2
        I=rgb2gray(imread('50.bmp'));  % 原始图象Lena
    case 3
        I=rgb2gray(imread('tu1.jpg'));     
    case 4
        I=rgb2gray(imread('win.jpg'));      
    case 5
        I=imread('gongjihouX.bmp');      
    case 6
        I=imread('len1.tif');
    case 7
        I=imread('qianruhou.bmp');
    case 8
        I=imread('len1.bmp');        %RGB图象
    case 9
        I=imread('len1.jpg');        %RGB图象
    case 10
        I=imread('len2.bmp');
end
[m n]=size(I);
R0=bitand(I(1:m/2,1:n/2),1);      %提取LSB
R1=bitand(I(1:m/2,n/2+1:n),1);     %提取LSB
R2=bitand(I(m/2+1:m,1:n/2),1);      %提取LSB
% R3=I(m/2+1:m,n/2+1:n);    %图象的第4块；没嵌入信息的块
r0=reshape(R0,1,m/2*n/2);
r1=reshape(R1,1,m/2*n/2);
r2=reshape(R2,1,m/2*n/2);

I1=bitand(I,128);    %提取MSB
Is=double(I)-double(I1);   %除去MSB，剩下的图象

a1=I(1:m/2,1:n/2);   %MSB图象分4块
a2=I(1:m/2,n/2+1:n);
a3=I(m/2+1:m,1:n/2);
a4=I(m/2+1:m,n/2+1:n);

y1=ArnoldF(a1,32);    %arnold置乱
y2=ArnoldF(a2,17);
y3=ArnoldF(a3,19);
y4=ArnoldF(a4,25);
I2=[y1 y2;y3 y4];
I11=reshape(I2,1,m*n);
% I11=reshape(I1,1,m*n);   %重新排列成一行

z=cell(1,4);
z1=zeros(1,4);

for k=1:m*n/4
    J=I11((k-1)*4+1:k*4);
    
    for i=1:4
        z{i}=dec2bin(double(J(i)));
        if str2num(z{i})~=0
           z{i}=char('1');
       end
        z1(i)=str2num(z{i});
    end
   L0=xor(z1(1),z1(2));
   L0=xor(L0,z1(3));
   s0=xor(L0,r0(k));
   
   L1=xor(z1(1),z1(2));
   L1=xor(L1,z1(4));
   s1=xor(L1,r1(k));
   
   L2=xor(z1(1),z1(3));
   L2=xor(L2,z1(4));
   s2=xor(L2,r2(k));
   
   A=double([s0 s1 s2]);

     if A==[0 1 1]
            z1(4)=~z1(4);
     elseif A==[1 0 1]
            z1(3)=~z1(3);
     elseif A==[1 1 0]
            z1(2)=~z1(2);
     elseif A==[1 1 1]
            z1(1)=~z1(1);
      elseif A==[0 0 1]
          r2(k)=~r2(k);
     elseif A==[0 1 0]
          r1(k)=~r1(k);
     elseif A==[1 0 0]
          r0(k)=~r0(k);
      end
        for i=1:4
             P(i)=z1(i);
         end
         Ix((k-1)*4+1:k*4)=P;
end

     Ix1=reshape(Ix,m,n);
     Ix2=Ix1.*(2^7);
     b1=Ix2(1:m/2,1:n/2);   %MSB图象分4块
     b2=Ix2(1:m/2,n/2+1:n);
     b3=Ix2(m/2+1:m,1:n/2);
     b4=Ix2(m/2+1:m,n/2+1:n);

      z1=ArnoldF2(b1,96-32);    %逆arnold置乱
      z2=ArnoldF2(b2,96-17);
      z3=ArnoldF2(b3,96-19);
      z4=ArnoldF2(b4,96-25);
      Ix3=[z1 z2;z3 z4];
      Iz=Ix3+Is;
     %%%%%%%%%%%%%%%%%%
%        r00=reshape(r0,m/2,n/2);
%        r11=reshape(r1,m/2,n/2);
%        r22=reshape(r2,m/2,n/2);
% 
%       %%%%%%
%        X1=bitand(Iz(1:m/2,1:n/2),254);    %最低位清零
%        X2=bitand(Iz(1:m/2,n/2+1:n),254);    %最低位清零
%        X3=bitand(Iz(m/2+1:m,1:n/2),254);    %最低位清零
%         Y1=bitor(X1,double(r00));   %嵌入水印
%         Y2=bitor(X2,double(r11));   %嵌入水印
%         Y3=bitor(X3,double(r22));   %嵌入水印
%         TI=[Y1 Y2;Y3 R3];%%%？？？
%          TI=uint8(TI);

%      Iz=Ix2+Is;
     TI=uint8(Iz);
     imshow(I),title('原图')
     figure,imshow(TI)
     imwrite(TI,'huifu.bmp'),title('恢复的图象')