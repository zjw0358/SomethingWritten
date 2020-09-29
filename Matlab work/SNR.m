% y=I;                              %ԭͼ
% y=image;
% y=imread('len2.bmp');
% y=image;
y=imread('Watermarked.bmp');
% y=imread('hd2.bmp');
key=2;
switch key
case 1
    x=imread('Watermarked.bmp');
case 2
    x=imread('gongjihou2.jpg');
case 3
    x=imread('watermarked.jpg');
case 4
    x=imread('secret.bmp');
case 5
    x=imread('gongjihou.bmp');
case 6
    x=imread('FETCHwodeWm.bmp');
end
% [M,N]=size(x);
A=sum(sum(double(y).^2));
KI=abs(double(x)-double(y));
B=sum(sum(KI.^2));
SNR=10*log10(A/B)
beep on;
beep;
beep off;
