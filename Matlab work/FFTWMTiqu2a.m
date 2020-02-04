%    FFT水印提取
select=5;                       % 选择载体图像
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
        I=imread('gongjihou4.jpg');
end
[m,n]=size(I);
I1=reshape(I,1,m*n);
sy=zeros(u,v);
shuiyin1=zeros(1,u*v);
for i=1:u*v
       A1=I1(((i-1)*8+1):i*8);  
       B2=fft(A1);
       B21=abs(B2);
%         B21=fftshift(B2);
        Lh11=floor(B21(kk)/Deta);
        shuiyin1(i)=mod(Lh11,2);   
        
end
sy=reshape(shuiyin1,u,v);

figure,imshow(logical(sy)),title('Watermark fetched');
imwrite(logical(sy),'FETCHwodeWm.bmp');
