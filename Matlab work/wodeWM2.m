%小波域简单水印------嵌入程序          带量化的，量化取整用floor！
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
        I=imread('len2.bmp');
    case 8
        I=imread('len1.bmp');        %嵌入到RGB图象
    case 9
        I=imread('len1.jpg');        %嵌入到RGB图象
end
        
Sy=imread('hd.bmp');           % 欲嵌入的水印信息
% Ii=I(:,:,1);
% Ij=I(:,:,2);
% Ik=I(:,:,3);
% [m,n]=size(Ik)8
[m,n]=size(I);
[A H V D]=dwt2(I,'haar');
Deta=8;
B=floor(A/Deta);
[M,N]=size(Sy);
S=zeros(M,N);
for i=1:M
    for j=1:N
        if mod(B(i,j),2)==Sy(i,j)
            S(i,j)=(B(i,j)*Deta)+Deta/2;
%              S(i,j)=B(i,j)*Deta;
        else
            if rem(B(i,j),2) >=Deta/2
            S(i,j)=(B(i,j)+1)*Deta+Deta/2;
%             S(i,j)=(B(i,j)+1)*Deta;
            else
             S(i,j)=(B(i,j)-1)*Deta+Deta/2;
%               S(i,j)=(B(i,j)-1)*Deta;
            end
        end
    end
end
%            Ik1=idwt2(S,H,V,D,'haar');
%            Ik1=round(Ik1);
%            JK=cat(3,Ii,Ij,Ik1);
I1=idwt2(S,H,V,D,'haar');
figure(1),imshow(I),title('Original');
figure(2),imshow(Sy),title('Watermark');
figure(3),imshow(uint8(round(I1))),title('Watermarked');        %灰度图象
imwrite(uint8(round(I1)),'Watermarked.bmp');                    %灰度图象
% figure(3),imshow(JK),title('Watermarked');                     RGB图像 
% imwrite(JK,'Watermarked.bmp');                                 RGB图像
 

