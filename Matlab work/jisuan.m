Sy=imread('sy.bmp');           % 欲嵌入的水印信息
Sy1=imread('sy1.bmp');           % 篡改的水印信息
[m,n]=size(Sy);                
pic=1;                         % 选择原始图像处理块的大小
switch pic
    case 1
        kx=256;
        ky=256;      
end
rx=kx/2;                       % rx*ry 小波系数规模
ry=ky/2;
B=(sum(sum(xor(Sy,Sy1))))/(rx*ry);    
B
    