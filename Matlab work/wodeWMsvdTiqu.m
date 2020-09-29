%    SVD水印提取
select=3;                     % 选择载体图像
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
sy=zeros(u,v);
for i=1:u
    for j=1:v
        B=I(((i-1)*2+1):(i*2),((j-1)*2+1):(j*2));                                              % 截取图像块
        [U,S,V]=svd(double(B));
         s=max(max(S));
        [x y]=find(S==s);
        S(x(1),y(1))=floor(S(x(1),y(1))/Deta);
        sy(i,j)=mod(S(x(1),y(1)),2);
    end
end
   
figure,imshow(logical(sy)),title('Watermark fetched');
imwrite(logical(sy),'FETCHwodeWm.bmp');
