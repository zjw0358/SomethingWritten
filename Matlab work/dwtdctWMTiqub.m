I=zeros(m,n);
select=6;                       % 选择载体图像
switch select
    case 1
        I=round(TI);
    case 2
        I=TI;
    case 3
        I=imread('Watermarked.bmp');
    case 4
        I=I1;
    case 5
        I=imread('gongjihou.bmp');
    case 6
        I=imread('gongjihou3.jpg');
end
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
tmp=zeros(8,8);              % 图像截取的块
tmp1=zeros(1,64);             % 图像截取的块2
tmp1a=zeros(1,64);
sy=zeros(u,v);            % 截取的水印块
sy1=zeros(1,BC*BC);
Tmp=zeros(BC,BC);              % 截取的水印块
% Deta=6;

for i=1:M
    for j=1:N
        C=cA1(((i-1)*8+1):(i*8),((j-1)*8+1):(j*8));                                              % 截取图像块
        tmp=dct2(C);
          Deta1=sum(sum(abs(tmp)))/64;
         S1=round(log2(abs(Deta1))*1000)/1000+0.02;
        tmp1a=gzigzag1(tmp);                         % 截取图像块
        tmp1a(:)=floor(tmp1a(:)/S1);
          for a=1:BC*BC                             % 中频
            sy1(a)=mod(tmp1a(a+3),2);
            end
           SY=reshape(sy1,BC,BC);
           sy(((i-1)*BC+1):(i*BC),((j-1)*BC+1):(j*BC))=SY;                                         % 截取水印块
     end
 end
 figure,imshow(logical(sy)),title('Watermark fetched');
imwrite(logical(sy),'Watermarkfetched.bmp');
 