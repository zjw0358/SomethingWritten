%自认证脆弱水印
clc;
clear;
close all;
TIME=cputime;

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

x=zeros(1,65536);
x(1,1)=0;
J=10;
z=zeros(m,n);


a=zeros(1,65536);
b=[1 0 1 0 1 0 1 0];                          %  LFSR 初始值11001100
for i=1:65536
    a(1,i)=b(1,1);
    for j=1:7
        b(1,j)=b(1,j+1);
    end
    tp=xor(b(1,8),b(1,4));
    tp1=xor(tp,b(1,3));
    b(1,8)=xor(tp1,b(1,2));
end

I1=bitand(I,254);  %最低位清零


for i=1:m
    for j=1:n
        tmp=double(I1(i,j))/255;
        x(1,1)=tmp;
        for k=1:256
            x(1,k+1)=sqrt(abs(2*x(1,k)-1));
                if a(1,k)==1
                 x(1,k+1)=1-x(1,k+1);
                end
        end
        count=double(I1(i,j))+1; %选序列中第I1(i,j)个元素
        z(i,j)=mod(fix(x(count)*2^J),2);   %得到Z
        
        X1=dec2bin(double(I(i,j)));
        if length(X1)<8
            cha=8-length(X1);
            kong=blanks(8);
            kong(1:cha)='0';
            kong(cha+1:end)=X1;
            X1=kong;
        end
        r=mod(floor(x(count)*255),7)+1;    %得到r
        Info=xor(z(i,j),X1(r));
%         I1(i,j)=bitor(I1(i,j),Info);
        Endbit=int2str(Info);
        X1(end)=Endbit;
        I1(i,j)=bin2dec(X1);
    end
end
TI=uint8(I1);
imshow(I),title('The original image');
imwrite(TI,'Watermarked.bmp');
figure,imshow(TI),title('Watermarked image')
elapse=cputime-TIME