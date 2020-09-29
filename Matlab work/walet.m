clc
clear
close all
x=imread('cameraman.tif');
subplot(1,2,1);imshow(x),title('original');
[a b c d]=ddencmp('cmp','wp',x);
[Xc,treed,perf0,perf12]=wpdencmp(double(x),b,3,'bior3.1',d,a,c);
subplot(1,2,2);imshow(uint8(Xc)),title('yasuohou')
imwrite(Xc,'cameraman.bmp')
perf0
perf12