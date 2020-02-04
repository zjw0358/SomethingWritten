% 我的PSNR计算

y=I;                              %原图
% y=image;
% y=imread('len512.bmp');
% y=image;
% y=imread('Watermarked.bmp');
key=1;
switch key
case 1
    x=imread('Watermarked.bmp');
case 2
    x=imread('gongjihou1.jpg');
case 3
    x=imread('watermarked.jpg');
case 4
    x=imread('secret.bmp');
case 5
    x=imread('gongjihou.bmp');
end
[M,N]=size(x);
SQRT=0;
for i=1:M
    for j=1:N
       SQRT=SQRT+(double(x(i,j))-double(y(i,j)))^2;
   end
end
MSE=SQRT/M/N;
RMSE=sqrt(MSE);

LINE=zeros(1,M*N);
for i=1:M
    LINE=[LINE,double(x(i,:))];
end

VAR=var(LINE);

SNR=10*log10(VAR/MSE);

PSNR=20*LOG10(255/RMSE)

beep on;
beep;
beep off;

