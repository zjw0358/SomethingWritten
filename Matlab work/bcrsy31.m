%基于人眼视觉的半弱水印--水印嵌入
% clc;
% clear;
% close all;

fi=10;                               % 需要试验调整的参数
% Deta=1;

turnkey=1;                             % 选择原始图像
switch turnkey
    case 1
        I=imread('cameraman.tif');     % 原始图象cameraman
    case 2
        I=rgb2gray(imread('50.bmp'));  % 原始图象Lena
    case 3
        I=rgb2gray(imread('face.png'));     
    case 4
        I=rgb2gray(imread('hua.png'));      
    case 5
        I=rgb2gray(imread('10.bmp'));      
end
[m,n]=size(I);
        
Sy=imread('sy.bmp');           % 欲嵌入的水印信息
[M,N]=size(Sy);                % 小波系数划分的行与列块数
P=4;                           % 嵌入一位水印信息的小波系数块大小
Q=4;
kx=256;                        % 图像块大小
ky=256;
MAXb=8160*1024;                
MAXt=2100*1024;

rx=kx/2;                       % rx*ry 小波系数规模
ry=ky/2;
I1=zeros(P,Q);                 % 载体图像初值

% 参数设置

% B=0;                           % 亮度系数
% T=0;                           % 纹理系数
% Sita=0;                        % 方差系数
% Deta=0;                        % 量化步长

cA1=zeros(rx,ry);              % LL系数
cH1=zeros(rx,ry);              % LH系数
cV1=zeros(rx,ry);              % HL系数
cD1=zeros(rx,ry);              % HH系数

Qq=zeros(M,N);                 % 量化值
S=zeros(rx,ry);                % 调整后的cA1系数

tmp=zeros(kx,ky);              % 原始图像截取的块
tmp1=zeros(kx,ky);             % 载体合成块

%tmp=I(((i-1)*kx+1):(i*kx),((j-1)*ky+1):(j*ky));                                                     % 截取图像块
tmp=I;
[cA1,cH1,cV1,cD1]=dwt2(tmp,'haar');                                                                  % haar小波变换

B=sum(sum(cA1))/MAXb;                                                                                % 亮度系数
T=(sum(sum(abs(cH1)))+sum(sum(abs(cV1)))+sum(sum(abs(cD1))))/MAXt;                                   % 纹理系数
Sita=(std(reshape(cH1,rx*ry,1))+std(reshape(cV1,rx*ry,1))+std(reshape(cD1,rx*ry,1)))/3;              % 方差系数
Deta=B*T*Sita*fi;                                                                                    % 量化步长
% if Deta<=0.01                                                                                        % 量化步长调整
%     Deta=0.01;
% else
%     if Deta>=2.0
%         Deta=log(Deta);
%     else
%         Deta=Deta/2;
%     end
% end
% Deta=round(Deta);

for i=1:M
    for j=1:N
        I1=cA1(((i-1)*P+1):(i*P),((j-1)*Q+1):(j*Q));                           % 取小波系数块
        ti=sum(sum(I1));
        Qq(i,j)=floor(ti/Deta);
        nk=sum(sum(floor(I1/Deta)));
        
        if Sy(i,j)==0
            if mod(nk,2)==0
                T1=I1+Deta/2-rem(I1,Deta);
            else
                T1=I1+Deta/2-rem(I1,Deta);
                T1(1,1)=T1(1,1)-Deta/2;
                T1(1,2)=T1(1,2)-Deta/2;
            end
        else
             if mod(nk,2)==0
                T1=I1+Deta/2-rem(I1,Deta);
                T1(1,1)=T1(1,1)-Deta/2;
                T1(1,2)=T1(1,2)-Deta/2;
            else
                T1=I1+Deta/2-rem(I1,Deta);
            end
        end
        S(((i-1)*P+1):(i*P),((j-1)*Q+1):(j*Q))=T1;
    end
end

tmp1=IDWT2(S,cH1,cV1,cD1,'haar');                                              % 小波逆变换     

TI=tmp1;

figure(1),imshow(I),title('Original');
figure(2),imshow(Sy),title('Watermark');
figure(3),imshow(uint8(round(TI))),title('Watermarked');
imwrite(uint8(round(TI)),'Watermarked.bmp');
%imwrite(uint8(floor(TI)),'Watermarked.bmp');

B
T
Sita
Deta

DetaSave0=Qq;
