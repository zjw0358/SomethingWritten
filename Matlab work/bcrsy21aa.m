%基于人眼视觉的半弱水印--水印嵌入
clc;
clear;
close all;

turnkey=8;                             % 选择原始图像
switch turnkey
    case 1
        I=imread('cameraman.tif');     % 原始图象cameraman
    case 2
        I=rgb2gray(imread('1.jpg'));  % 原始图象Lena
    case 3
        I=rgb2gray(imread('2.bmp'));     
    case 4
        I=rgb2gray(imread('3.jpg'));      
    case 5
        I=rgb2gray(imread('8.bmp'));      
    case 6
        I=imread('len1.tif');
    case 7
        I=rgb2gray(imread('bao.png'));
    case 8
        I=imread('len2.bmp');
end
        
Sy=imread('sy.bmp');           % 欲嵌入的水印信息

[m,n]=size(I);
I1=zeros(m,n);                 % 载体图像初值

pp=0.53;
fi=0.4;                        % 需要试验调整的参数 
pic=1;                         % 选择图像块大小，在bcrsy.m中一起设置
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

rx=kx/2;                       % rx*ry 小波系数规模
ry=ky/2;
M=m/kx;                        % 行中块数
N=n/ky;                        % 列中块数
Numbers=M*N;                   % 总块数

% 参数设置 

 B=zeros(1,Numbers);            % 亮度系数
 T=zeros(1,Numbers);            % 纹理系数
 Sita=zeros(1,Numbers);         % 方差系数
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
               
        tmp=I(((i-1)*kx+1):(i*kx),((j-1)*ky+1):(j*ky));                                              % 截取图像块
        Tmp=Sy(((i-1)*rx+1):(i*rx),((j-1)*ry+1):(j*ry));                                             % 截取水印块
        [cA1,cH1,cV1,cD1]=dwt2(tmp,'haar');                                                          % haar小波变换

        B(1,k)=sum(sum(cA1));                                                                   % 亮度系数
        T(1,k)=sum(sum(abs(cH1)))+sum(sum(abs(cV1)))+sum(sum(abs(cD1)));                     % 纹理系数
        Sita(1,k)=(std(reshape(cH1,rx*ry,1))+std(reshape(cV1,rx*ry,1))+std(reshape(cD1,rx*ry,1)))/3; % 方差系数
        Deta(1,k)=round(log2(B(1,k)+T(1,k)+Sita(1,k))*fi); 
        
      Q=floor(cA1/Deta(1,k));                                                                      % 量化LL系数
        
         for p=1:rx                                                                                 % 调整cA1的系数值为S
            for q=1:ry
               if mod(Q(p,q),2)==Tmp(p,q)
                      if cA1(p,q)>0
                         S(p,q)=Q(p,q)*Deta(1,k)+Deta(1,k)*pp;
                     else
                          S(p,q)=Q(p,q)*Deta(1,k)-Deta(1,k)*pp;
                      end
                  else
                      if cA1(p,q)>0 
                         if rem(cA1(p,q),Deta(1,k)) >= Deta(k)*pp
                             S(p,q)=(Q(p,q)+1)*Deta(1,k)+Deta(1,k)*pp;
                         else
                             S(p,q)=(Q(p,q)-1)*Deta(1,k)+Deta(1,k)*pp;
                         end
                     else
                          if abs(rem(cA1(p,q),Deta(1,k))) >= Deta(k)*pp
                              S(p,q)=(Q(p,q)-1)*Deta(1,k)-Deta(1,k)*pp;
                          else
                              S(p,q)=Q(p,q)*Deta(1,k)+Deta(1,k)*pp;
                          end
                      end
                  end
              end
          end
         tmp1=IDWT2(S,cH1,cV1,cD1,'haar');                                                            % 小波逆变换     
         I1(((i-1)*kx+1):(i*kx),((j-1)*ky+1):(j*ky))=tmp1;                                            % 添加到载体图像中去
        k=k+1;                                                                                       % 处理下一个图像块
   end
   end

    for p1=1:m/2
       for q1=1:n/2
           tmp2=I1(1+(2*(p1-1)):2*p1,1+(2*(q1-1)):2*q1);       % 截取图像2*2块
           I2(1+(2*(p1-1)):2*p1,1+(2*(q1-1)):2*q1)=tiaozheng(tmp2); %调整系数     
           q1=q1+1;
       end
       p1=p1+1;
   end

%figure(1),imshow(I),title('Original');
%figure(2),imshow(Sy),title('Watermark');
%figure(3),imshow(uint8(I2)),title('Watermarked');
imwrite(uint8(I2),'Watermarked.bmp');

%figure(3),imshow(uint8(round(I1))),title('Watermarked');
%imwrite(uint8(round(I1)),'Watermarked.bmp');

B
T
Sita
Deta

