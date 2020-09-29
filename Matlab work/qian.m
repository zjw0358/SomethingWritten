%基于人眼视觉的半弱水印--水印嵌入  (毕业论文程序)
clc;
clear;
close all;

turnkey=2;    % 选择原始图像
switch turnkey
    case 1
        I=imread('cameraman.tif');   % 原始图像cameraman      
    case 2
        I=imread('len2.bmp');   % 原始图像len
    case 3
        I=rgb2gray(imread('F:\学习\数字图象处理\图库\12-测试图像库\12-测试图像库\测试图像库1\41.bmp'));   % 原始图像
    case 4
        I=imread('50.bmp');   % 原始图像
    case 5
        I=rgb2gray(imread('ye.jpg'));   % 原始图像
    case 6
        I=rgb2gray(imread('F:\学习\数字图象处理\图库\12-测试图像库\12-测试图像库\测试图像库2\41.bmp'));   % 原始图像
end

%       II=rgb2gray(III); %将真彩转换成灰度图像  
%       I=II(1:256,1:256);    % 截取图像块
                 
  Sy=imread('hd.bmp');  % 欲嵌入的水印信息
%     Sy=imread('asy.bmp');  % 欲嵌入的置乱后的水印信息

[m,n]=size(I);

P=0.5;   %最佳恢复概率P,统计得出
fi=5;  %需要试验调整的参数 

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
 B=zeros(1,Numbers);            % 亮度系数
 T=zeros(1,Numbers);            % 纹理系数
 Sita=zeros(1,Numbers);         % 方差系数
 Deta=zeros(1,Numbers);         % 量化步长
 switch pic                     % MAXb可根据公式(3)计算得出,MAXt可根据vein.m得出
    case 1
        MAXb=8160*1024;
        MAXt=1738*1024;
    case 2
        MAXb=8160*256;
        MAXt=1738*256;
    case 3
        MAXb=8160*64;
        MAXt=1738*64;
    case 4
        MAXb=8160*16;
        MAXt=1738*16;
    case 5
        MAXb=8160*4;
        MAXt=1738*4;
    case 6
        MAXb=8160;
        MAXt=1738;
end
MAXs=45; % MAXs可根据vein.m得出

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
        tmp=I(((i-1)*kx+1):(i*kx),((j-1)*ky+1):(j*ky));    % 截取图像块
        Tmp=Sy(((i-1)*rx+1):(i*rx),((j-1)*ry+1):(j*ry));   % 截取水印块
        [cA1,cH1,cV1,cD1]=dwt2(tmp,'haar');    % haar小波变换
                      
        B(1,k)=sum(sum(cA1));   % 亮度系数
        T(1,k)=sum(sum(abs(cH1)))+sum(sum(abs(cV1)))+sum(sum(abs(cD1)));  % 纹理系数
        Sita(1,k)=(std(reshape(cH1,rx*ry,1))+std(reshape(cV1,rx*ry,1))+std(reshape(cD1,rx*ry,1)))/3; % 方差系数
        Sum(1,k)=B(1,k)/MAXb+20*T(1,k)/MAXt+20*Sita(1,k)/MAXs;
        Z(1,k)=statistic(tmp);  % 平滑程度判断算子
        
       if Sum(1,k)>=4 & Sum(1,k)<=25 & Z(1,k)<0.4
           Deta(1,k)=round(log(Sum(1,k)+1)*fi);% 第一类图像量化步长
         elseif Sum(1,k)>=4 & Sum(1,k)<=25 & Z(1,k)>=0.4
           Deta(1,k)=round(log(Sum(1,k)+1)*0.5*fi);% 第二类图像量化步长
         elseif Sum(1,k)<4
           Deta(1,k)=round(log(Sum(1,k)+1)*fi);% 第三类图像量化步长 
         elseif Sum(1,k)>25
           Deta(1,k)=round(log(Sum(1,k)+1)*1.2*fi);% 第四类图像量化步长
       end

      Q=floor(cA1/Deta(1,k));  % 量化LL系数
        
         for p=1:rx      % 调整cA1的系数值为S
            for q=1:ry
               if mod(Q(p,q),2)==Tmp(p,q)
                      if cA1(p,q)>0
                         S(p,q)=Q(p,q)*Deta(1,k)+Deta(1,k)*P;
                          if S(p,q)>510
                              S(p,q)=(Q(p,q)-2)*Deta(1,k)+Deta(1,k)*P;
                          end
                      else
                          S(p,q)=Q(p,q)*Deta(1,k)-Deta(1,k)*P;
                      end
                  else
                      if cA1(p,q)>0 
                         if rem(cA1(p,q),Deta(1,k)) > Deta(k)*P
                             S(p,q)=(Q(p,q)+1)*Deta(1,k)+Deta(1,k)*P;
                            if S(p,q)>510
                                S(p,q)=(Q(p,q)-2)*Deta(1,k)+Deta(1,k)*P;
                            end
                         else
                             S(p,q)=(Q(p,q)-1)*Deta(1,k)+Deta(1,k)*P;
                            if Q(p,q)==0
                             S(p,q)=(Q(p,q)+1)*Deta(1,k)+Deta(1,k)*P;
                           end
                         end
                      else
                          if abs(rem(cA1(p,q),Deta(1,k))) > Deta(k)*P
                              S(p,q)=(Q(p,q)-1)*Deta(1,k)-Deta(1,k)*P;
                          else
                              S(p,q)=Q(p,q)*Deta(1,k)+Deta(1,k)*P;
                          end
                      end
                  end
              end
          end
         tmp1=IDWT2(S,cH1,cV1,cD1,'haar'); % 小波逆变换   
         
          I2(((i-1)*kx+1):(i*kx),((j-1)*ky+1):(j*ky))=tmp1;
%          for p1=1:rx
%            for q1=1:ry
%                tmp2=tmp1(1+(2*(p1-1)):2*p1,1+(2*(q1-1)):2*q1);  % 截取图像2*2块
%                I1(1+(2*(p1-1)):2*p1,1+(2*(q1-1)):2*q1)=tiaozheng(tmp2);  %调整系数  
%            end
%         end
%          I2(((i-1)*kx+1):(i*kx),((j-1)*ky+1):(j*ky))=I1;  % 添加到载体图像中去
%          k=k+1;  % 处理下一个图像块
   end
end

figure,imshow(I),title('原始图像');
figure,imshow(Sy),title('置乱后的水印图像');
figure,imshow(uint8(I2)),title('载体图像');
imwrite(uint8(I2),'Watermarked.bmp');

% figure(3),imshow(uint8(round(tmp1))),title('Watermarked');
% imwrite(uint8(round(tmp1)),'Watermarked.bmp');

%    B
%    T
%    Sita
     Deta
   Sum
   Z