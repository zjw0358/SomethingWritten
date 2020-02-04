clc;
clear;
close all;

turnkey=8;                             % 选择原始图像
switch turnkey
    case 1
        I=imread('cameraman.tif');     % 原始图象cameraman
    case 2
        I=rgb2gray(imread('50.bmp'));  % 原始图象Lena
    case 3
        I=rgb2gray(imread('tu1.jpg'));     
    case 4
        I=rgb2gray(imread('len1.jpg'));      
    case 5
        I=rgb2gray(imread('8.bmp'));      
    case 6
        I=imread('len1.tif');
    case 7
        I=imread('len1.bmp');
    case 8
        I=imread('len2.bmp');
end
        
Sy=imread('hd2.bmp');   
  
[m,n]=size(I);
rx=m/2;                       % rx*ry 小波系数规模
ry=n/2;

cA1=zeros(rx,ry);              % LL系数
cH1=zeros(rx,ry);              % LH系数
cV1=zeros(rx,ry);              % HL系数
cD1=zeros(rx,ry);              % HH系数
        
[cA1,cH1,cV1,cD1]=dwt2(I,'db1');   

M=rx/8;
N=ry/8;
Numbers=M*N;
[u v]=size(Sy);
SNumbers=u*v/Numbers; 
BC=sqrt(SNumbers); 

tmp=zeros(8,8);              % 图像截取的块
tmp1=zeros(1,64);             % 图像截取的块2
tmp1a=zeros(1,64);
Tmp=zeros(BC,BC);              % 截取的水印块
% Deta=6;

for i=1:M
    for j=1:N
       
        A=cA1(((i-1)*8+1):(i*8),((j-1)*8+1):(j*8));   
         tmp=dct2(A);
         Deta=sum(sum(abs(tmp)))/64;
         S=round(log2(abs(Deta))*1000)/1000+0.02;
        Tmp=Sy(((i-1)*BC+1):(i*BC),((j-1)*BC+1):(j*BC));                                         % 截取水印块
        Tmp1=reshape(Tmp,1,BC*BC); 
        tmp1a=gzigzag1(tmp);                            % 截取图像块
        tmp1a(4:19)=floor(tmp1a(4:19)/S);              %量化
        for  a=1:BC*BC                                        % 中频
             if mod(tmp1a(a+3),2)==Tmp1(a)
                 tmp1a(a+3)=(tmp1a(a+3)*S)+S/2;
             else 
                 tmp1a(a+3)=((tmp1a(a+3)-1)*S)+S/2;
             end
         end
          tmp=gzigzagINVERSE(tmp1a);
          cA1(((i-1)*8+1):(i*8),((j-1)*8+1):(j*8))=idct2(tmp);
        end
 end
 TI=idwt2(cA1,cH1,cV1,cD1,'db1');
 figure(2),imshow(Sy),title('Watermark');
 imwrite(uint8(round(TI)),'Watermarked.bmp');
 figure(3),imshow(uint8(round(TI))),title('Watermarked');