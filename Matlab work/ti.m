%基于人眼视觉的半弱水印--水印提取   （毕业论文程序）
% clear;
% close all;

select=1;  % 选择载体图像
switch select
    case 1
        I=imread('Watermarked.bmp');
    case 2
        I=imread('gongjihou.bmp');
    case 3
        I=imread('gongjihou3.jpg');
end

[m,n]=size(I);

pic=1;   % 选择原始图像处理块的大小
switch pic
    case 1
        kx=256;
        ky=256;
    case 2
        kx=128;
        ky=128;
    case 3
        kx=64;
        ky=64;
    case 4
        kx=32;
        ky=32;
    case 5
        kx=16;
        ky=16;
    case 6
        kx=8;
        ky=8;
end

I1=zeros(kx,ky);
I2=zeros(m,n);   % 载体图像初值
rx=kx/2;  % rx*ry 小波系数规模
ry=ky/2;
M=m/kx;    % 行中块数
N=n/ky;     % 列中块数
Numbers=M*N;   % 总块数

% 参数设置 
Deta=zeros(1,Numbers);         % 量化步长

cA1=zeros(rx,ry);              % LL系数
cH1=zeros(rx,ry);              % LH系数
cV1=zeros(rx,ry);              % HL系数
cD1=zeros(rx,ry);              % HH系数


Q=zeros(rx,ry);                % 量化值
S=zeros(rx,ry);                % 调整后的cA1系数

% 分块
tmp=zeros(kx,ky);              % 原始图像截取的块
tmp1=zeros(kx,ky);             % 载体合成块
Tmp=zeros(rx,ry);              % 截取的水印块
k=1;                           % 块初值，k=1表明第1个块
for i=1:M
    for j=1:N
               
        tmp=I(((i-1)*kx+1):(i*kx),((j-1)*ky+1):(j*ky));  % 截取图像块
        [cA1,cH1,cV1,cD1]=dwt2(tmp,'haar');  % haar小波变换
        Deta(1,k)=11;  %与嵌入时保持一致
        
        Q=floor(cA1/Deta(1,k));  % 量化LL系数
        
        Tmp=mod(Q,2);
        sy(((i-1)*rx+1):(i*rx),((j-1)*ry+1):(j*ry))=Tmp;
       k=k+1;  % 处理下一个图像块
    end
end

 figure,imshow(logical(sy)),title('Watermark fetched');
imwrite(logical(sy),'sy1.bmp');
imwrite(logical(sy),'Watermarkfetched.bmp');

