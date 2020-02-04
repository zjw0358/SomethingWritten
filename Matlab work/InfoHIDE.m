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
        I=imread('bao.png');
    case 8
        I=imread('len1.bmp');        %RGB图象
    case 9
        I=imread('len1.jpg');        %RGB图象
    case 10
        I=imread('len.jpg');
end
key=1;
switch key
     case 1
     Info=imread('cameraman.tif');
     case 2
    Info=imread('len2.bmp');
%      case 3                         %二值图象
    Info=double(imread('hd3.bmp')); 
end
Ii=I(:,:,1);       %R
Ij=I(:,:,2);       %G
Ik=I(:,:,3);       %B
Ij1=bitand(Ij,240);       %低4位清零
Ik1=bitand(Ik,240);       %低4位清零

InfoA=bitand(Info,15);     %把高4位屏蔽，隐藏低4位
Y=bitor(Ij1,InfoA);

InfoB=bitand(Info,240);    %把低4位屏蔽，隐藏高4位
InfoB1=bitshift(InfoB,-4);
Z=bitor(Ik1,InfoB1);

 JK=cat(3,Ii,Y,Z);
 imshow(I),title('载体图象');
 figure,imshow(Info),title('秘密信息');
 figure,imshow(JK),title('隐藏后图象');
 imwrite(JK,'secret.png');