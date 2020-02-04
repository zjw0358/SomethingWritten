%    FFT水印提取
select=7;                       % 选择载体图像
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
        I=imread('gongjihou1.jpg');
end
[m,n]=size(I);
I1=reshape(I,1,m*n);
sy=zeros(u,v);
shuiyin1=zeros(1,u*v);
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
a=zeros(1,4096);
b=[1 1 0 0 1 1 0 0];%初始值
for p=1:4096
    a(p)=b(1);
    for q=1:7
        b(q)=b(q+1);
        tp=xor(b(8),b(4));
        tp1=xor(tp,b(3));
        b(8)=xor(tp1,b(2));
    end
end
K=10;
x=zeros(1,4096);
x(1)=0.1234567;
c1=zeros(1,4096);
for k=1:4096
    if a(k)==0      %根据0，1选择函数   
     x(k+1)=sqrt(abs(2*x(k)-1));
    else
        x(k+1)=1-sqrt(abs(2*x(k)-1));
    end
    c1(k)=mod(fix(x(k)*2^K), 2);%转换函数,得到密匙
end
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
for i=1:u*v
       A1=I1(((i-1)*16+1):i*16);  
       B2=fft(A1);
       B21=abs(B2);
        if c1(i)==0
            kk=1;
%             kk2=10;
%             mm=5;     
%             mm2=13;
       Lh11=floor(B21(kk)/Deta1);
       shuiyin1(i)=mod(Lh11,2);   
        else
            kk=7;
            kk2=11;
            mm=15;    
            mm2=3;
      
        Lh11=floor(B21(kk)/Deta);
        Lh11a=floor(B21(mm)/Deta);
        if mod(Lh11,2)==mod(Lh11a,2)
            shuiyin1(i)=mod(Lh11,2);   
        else
            shuiyin1(i)=mod(Lh11a,2);
        end
    end
end
sy=reshape(shuiyin1,u,v);
figure,imshow(logical(sy)),title('Watermark fetched');
imwrite(logical(sy),'FETCHwodeWm.bmp');
