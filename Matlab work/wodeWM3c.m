%基于人眼视觉的半弱水印--水印嵌入(DCT) 基于jpeg 量化表的,取整时用自带函数
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
        I=rgb2gray(imread('face.png'));     
    case 4
        I=rgb2gray(imread('len1.jpg'));      
    case 5
         I=rgb2gray(imread('tu1.jpg'));    
     case 6
         I=rgb2gray(imread('bao.png'));
     case 7
         I=imread('len1.tif');
     case 8
         I=imread('len2.bmp');
end
[m,n]=size(I);
I1=zeros(m,n);                 % 载体图像初值     
Numbers=m*n/64;                   % 总块数
M=m/8;
N=n/8;
Sy=imread('hd.bmp');           % 欲嵌入的水印信息
[u v]=size(Sy);            
SNumbers=u*v/Numbers;           % 水印块大小
BC=sqrt(SNumbers);               % 水印块边长
tmp=zeros(8,8);              % 图像截取的块
tmp1=zeros(1,64);             % 图像截取的块2
tmp1a=zeros(1,64);
Tmp=zeros(BC,BC);            % 截取的水印块
% LH= [5     3     3     5     7    12    15    18
%      4     4     4     6     8    17    18    17
%      4     4     5     7    12    17    21    17
%      4     5     7     9    15    26    24    19
%      5     7    11    17    20    33    31    23
%      7    11    17    19    24    31    34    28
%     15    19    23    26    31    36    36    30
%     22    28    29    29    34    30    31    30];
LH=[ 6     4     4     6    10    16    20    24
     5     5     6     8    10    23    24    22
     6     5     6    10    16    23    28    22
     6     7     9    12    20    35    32    25
     7     9    15    22    27    44    41    31
    10    14    22    26    32    42    45    37
    20    26    31    35    41    48    48    40
    29    37    38    39    45    40    41    40];
% LH=[ 8     6     5     8    12    20    26    31
%      6     6     7    10    13    29    30    28
%      7     7     8    12    20    29    35    28
%      7     9    11    15    26    44    40    31
%      9    11    19    28    34    55    52    39
%     12    18    28    32    41    52    57    46
%     25    32    39    44    52    61    60    51
%     36    46    48    49    56    50    52    50];
Deta=1;
maxB=16320;
maxT=5361;
for i=1:M
    for j=1:N
       
        A=I(((i-1)*8+1):(i*8),((j-1)*8+1):(j*8));                                              % 截取图像块
        tmp=dct2(A);
        tmpa=round(tmp./LH);
        Tmp=Sy(((i-1)*BC+1):(i*BC),((j-1)*BC+1):(j*BC));                                         % 截取水印块
        Tmp1=reshape(Tmp,1,BC*BC);                  % 截取水印块

        tmp1a=gzigzag1(tmpa);                            % 截取图像块
%          for  a=1:BC*BC
%              if mod(tmp1a(a),2)==Tmp1(a)
%                  tmp1a(a)=(tmp1a(a)*Deta)+0.001;
%              else 
%                  tmp1a(a)=((tmp1a(a)-1)*Deta)+0.001;
%              end
%          end
          for  a=1:BC*BC                                        % 中频量化一
             if mod(tmp1a(a+3),2)==Tmp1(a)
                 tmp1a(a+3)=(tmp1a(a+3)*Deta);
             else 
                 tmp1a(a+3)=((tmp1a(a+3)+1)*Deta);
             end
         end
             tmp=gzigzagINVERSE(tmp1a);
          tmp=tmp.*LH;
          I1(((i-1)*8+1):(i*8),((j-1)*8+1):(j*8))=idct2(tmp);
     end
 end
TI=uint8(I1);
% TI=round(I1);
% figure(1),imshow(I),title('Original');
figure(2),imshow(Sy),title('Watermark');
% figure(3),imshow(uint8(round(I1))),title('Watermarked');
imwrite(uint8(round(I1)),'Watermarked.bmp');
figure(3),imshow(TI),title('Watermarked');
% imwrite(TI,'Watermarked.bmp');
% imwrite(I1,'watermarked.bmp')

