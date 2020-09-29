%    FFT水印提取
select=3;                       % 选择载体图像
switch select
    case 1
        I=round(I1);
    case 2
        I=TI;
    case 3                              %正常提取
        I=imread('Watermarked.bmp');
    case 4
        I=I1;
    case 5                               %普通攻击后提取
        I=imread('gongjihou.bmp');
    case 6
        I=imread('watermarked.jpg');
    case 7                                %jpeg压缩后提取
        I=imread('gongjihou2.jpg');
end
[m,n]=size(I);
I1=reshape(I,1,m*n);
sy=zeros(u,v);
shuiyin1=zeros(1,u*v);
% Deta1=20;
for i=1:u*v
       A1=I1(((i-1)*16+1):i*16);  
       B2=fft(A1);
       B21=abs(B2);
        Lh11=floor(B21(kk)/Deta);
%         Lh11=floor(B21(kk)/Deta1);
        Lh1a1=floor(B21(jj2)/Deta1);
        if mod(Lh11,2)==mod(Lh1a1,2)
           shuiyin1(i)=mod(Lh11,2);   
        else
           shuiyin1(i)=mod(Lh1a1,2);
       end
end
sy=reshape(shuiyin1,u,v);
figure,imshow(logical(sy)),title('Watermark fetched');
imwrite(logical(sy),'FETCHwodeWm.bmp');
