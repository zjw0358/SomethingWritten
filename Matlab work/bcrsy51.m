%基于人眼视觉的半弱水印--水印嵌入(FFT)
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
        I=rgb2gray(imread('face.png'));     
    case 4
        I=rgb2gray(imread('len1.jpg'));      
    case 5
         I=rgb2gray(imread('tu1.jpg'));    
     case 6
         I=rgb2gray(imread('bao.png'));
     case 7
         I=imread('len2.bmp');
end
[m,n]=size(I);
% Numbers=m*n/64;                   % 总块数
% M=m/8;
% N=n/8;
Sy=imread('hd4.bmp');           % 欲嵌入的水印信息
% [u v]=size(Sy);            
% SNumbers=u*v;                   % 水印大小
xinxi=reshape(Sy,1,256);
% BC=sqrt(SNumbers);               % 水印块边长
% Tmp=zeros(BC,BC);            % 截取的水印块
I1=fft(I);
I2=I1;
Deta=2;
for i=1:256
     if mod(I1(1,i),2)==xinxi(i)
      I2(1,i)=I1(1,i);
  else
      I2(1,i)=I1(1,i)-1;
  end
 end
I3=ifft(I2);
TI=abs(I3);
% TI=round(I1);
% figure(1),imshow(I),title('Original');
figure(2),imshow(Sy),title('Watermark');
% figure(3),imshow(uint8(round(I1))),title('Watermarked');
imwrite(uint8(TI),'Watermarked.bmp');
figure(3),imshow(uint8(TI)),title('Watermarked');
% imwrite(TI,'Watermarked.bmp');
% imwrite(I1,'watermarked.bmp')

