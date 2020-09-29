% 文献《可恢复到脆弱图像水印技术》---直接把水印隐藏在LSB  
clc;       
clear;
close all;
turnkey=7;                             % 选择原始图像
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
        I=rgb2gray(imread('8.bmp'));      
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
R0=bitand(I(1:128,1:128),1);      %提取LSB
R1=bitand(I(1:128,129:256),1);     %提取LSB
R2=bitand(I(129:256,1:128),1);      %提取LSB
r0=reshape(R0,1,128*128);
r1=reshape(R1,1,128*128);
r2=reshape(R2,1,128*128);

I1=bitand(I,128);    %提取MSB
Is=double(I)-double(I1);
a1=I(1:128,1:128);   %MSB图象分4块
a2=I(1:128,129:256);
a3=I(129:256,1:128);
a4=I(129:256,129:256);
y1=ArnoldF(a1,32);    %arnold置乱
y2=ArnoldF(a2,17);
y3=ArnoldF(a3,19);
y4=ArnoldF(a4,25);
I2=[y1 y2;y3 y4];
I11=reshape(I2,1,m*n);   %重新排列成一行

z=cell(1,m*n*4);

for k=1:m*n/4
    J=I11((k-1)*4+1:k*4);
    
    for i=1:4
        z{i}=dec2bin(double(J(i)));
        if str2num(z{i})~=0
           z{i}=char('1');
        end
    end
   L0=xor(z{1},z{2});
   L0=xor(L0,z{3});
   s0=xor(L0,r0(k));
   L1=xor(z{1},z{2});
   L1=xor(L1,z{4});
   s1=xor(L1,r1(k));
   L2=xor(z{1},z{3});
   L2=xor(L2,z{4});
   s2=xor(L2,r2(k));
     
       A=double([s0 s1 s2]);
      if A==[0 0 1]
          r2(k)=~r2(k);
     elseif A==[0 1 0]
          r1(k)=~r1(k);
     elseif A==[1 0 0]
          r0(k)=~r0(k);
     elseif A==[0 1 1]
          z{4}=~z{4};
     elseif A==[1 0 1]
          z{3}=~z{3};
     elseif A==[1 1 0]
          z{2}=~z{2};
     elseif A==[1 1 1]
          z{1}=~z{1};
     end
         for i=1:4
             P(i)=str2num(z{i});
         end
         Ix((k-1)*4+1:k*4)=P;
end
     Ix1=reshape(Ix,256,256);
     Ix2=Ix1.*(2^7);
     b1=Ix2(1:128,1:128);   %MSB图象分4块
     b2=Ix2(1:128,129:256);
     b3=Ix2(129:256,1:128);
     b4=Ix2(129:256,129:256);
      z1=ArnoldF2(b1,96-32);    %逆arnold置乱
      z2=ArnoldF2(b2,96-17);
      z3=ArnoldF2(b3,96-19);
      z4=ArnoldF2(b4,96-25);
      Ix3=[z1 z2;z3 z4];
     Iz=Ix3+Is;
     TI=uint8(Iz);
     imshow(I)
     figure,imshow(TI)
     imwrite(TI,'huifu.bmp')