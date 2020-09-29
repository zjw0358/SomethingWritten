%MATLAB数字水印程序 
% Script file:dctblock.m 
% 
% Purpose:an algorithm to achieve the embeding watermarking to a image by 
% dct bloking and hvs,then detect the watermarking by 
% comparability. 
% 
% 
% Record of revisions: 
% Date Programmer Description of change 
% ==== ========== ===================== 
% 11/19/03 Mao Li Original code 
% Define variables: 
% a0 --Original gray image matrix 
% a1 --Embeded gray image matrix 
% da0 --the dct original gray image matrix 
% ca0 --the column vector of a0 
% cda0 --the column vector of da0 
% cda1 --the embeded column vector of cda0 
% da1 --the image matrix of cda1 
% r --image matrix row 
% c --image matrix column 
% k --the number of blocks 
% i --the subscript of a matrix 
% SNR --the similarity degree 

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
% input original data ,block break and convert a block into a column vector % 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
clear; 
clc; 
a0=imread('cameraman.tif'); 

ca0=im2col(a0,[8,8],'distinct'); 
[r,c]=size(a0); 
k=(r*c/64); %块数
da0=blkproc(a0,[8,8],'dct2'); 
cda0=im2col(da0,[8,8],'distinct'); 

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
% produce the watermarking signal (random sequence) % 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
randn('state',110); 
w0=randn(1,5120); 
w0=reshape(w0,5,1024); 

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
% changing submultiple % 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
alpha=1; 

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
% embed the watermarking into the low frequences coefficients % 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
cda1=cda0; 
for i=1:k 
cda1(2,i)=cda0(2,i)+alpha*w0(1,i); 
cda1(3,i)=cda0(3,i)+alpha*w0(2,i); 
cda1(9,i)=cda0(9,i)+alpha*w0(3,i); 
cda1(10,i)=cda0(10,i)+alpha*w0(4,i); 
cda1(17,i)=cda0(17,i)+alpha*w0(5,i); 
end 

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
% reconstruct the watermarking % 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
da1=col2im(cda1,[8,8],[r,c,],'distinct'); 
a1=blkproc(da1,[8,8],'idct2'); 
figure; 
subplot(1,2,1),imshow(a0,[]),title('the original image'); 
subplot(1,2,2),imshow(a1,[]),title('the embeded image'); 
