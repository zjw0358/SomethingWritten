% 图像与原始图像PSNR计算

y=I;                              %原图
% y=imread('Watermarked.bmp');        %加水印后的图像
key=3;
switch key
    case 1
x=imread('gongjihou.jpg');
    case 2
x=imread('gongjihou.bmp');
    case 3
x=imread('Watermarked.bmp');
end
% load grade.mat;
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

% End on 2006-08-18-12:13