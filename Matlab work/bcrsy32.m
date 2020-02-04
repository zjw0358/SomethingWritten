%基于人眼视觉的半弱水印--水印提取

select=1;                       % 选择载体图像
switch select
    case 1
        I=round(TI);
    case 2
        I=TI;
    case 3
        I=imread('watermarked.bmp');
end

[m,n]=size(I);
[M,N]=size(Sy);
P=4;                           % 嵌入一位水印信息的小波系数块大小
Q=4;
kx=256;                        % 图像块大小
ky=256;
MAXb=8160*1024;                
MAXt=2100*1024;
sy=zeros(M,N);

rx=kx/2;                       % rx*ry 小波系数规模
ry=ky/2;
I1=zeros(P,Q);                 % 载体图像初值

% 参数设置

B=0;                           % 亮度系数
T=0;                           % 纹理系数
Sita=0;                        % 方差系数
%Deta=0;                        % 量化步长

cA1=zeros(rx,ry);              % LL系数
cH1=zeros(rx,ry);              % LH系数
cV1=zeros(rx,ry);              % HL系数
cD1=zeros(rx,ry);              % HH系数

Qq=zeros(M,N);                 % 量化值

tmp=zeros(kx,ky);              % 原始图像截取的块
tmp1=zeros(kx,ky);             % 载体合成块

%tmp=I(((i-1)*kx+1):(i*kx),((j-1)*ky+1):(j*ky));                                                      % 截取图像块
tmp=I;
[cA1,cH1,cV1,cD1]=dwt2(tmp,'haar');                                                                  % haar小波变换

B=sum(sum(cA1))/MAXb;                                                                                % 亮度系数
T=(sum(sum(abs(cH1)))+sum(sum(abs(cV1)))+sum(sum(abs(cD1))))/MAXt;                                   % 纹理系数
Sita=(std(reshape(cH1,rx*ry,1))+std(reshape(cV1,rx*ry,1))+std(reshape(cD1,rx*ry,1)))/3;              % 方差系数
% Deta=B*T*Sita*fi;                                                                                    % 量化步长
% if Deta<=0.01                                                                                      % 量化步长调整
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
        sy(i,j)=mod(Qq(i,j),2);
    end
end

figure,imshow(logical(sy)),title('Watermark fetched');
imwrite(logical(sy),'Watermarkfetched.bmp');

B
T
Sita
Deta

DetaSave1=Qq;

% End on 2006-08-18-12:13