%攻击实验----非函数版本
image=imread('Watermarked.bmp');     %原水印
% image=imread('DFT.bmp');
% image=imread('secret.png');
% image=imread('secret.bmp');
% image=imread('len2.bmp');
% image=imread('gongjihou.bmp');
% image=imread('gongjihouxx.bmp');
% imshow(image)
x=11;
switch x
    case 1                         %中值滤波[2,2] 
          yy=medfilt2(image,[2,2]);     
          figure,imshow(uint8(yy))
          imwrite(yy,'gongjihou.bmp')
    case 2                         %中值滤波[3,3]
         yy=medfilt2(image,[3,3]);                        
         figure,imshow(yy)
         imwrite(yy,'gongjihou.bmp')
     case 3                        %中值滤波[4,4]
          yy=medfilt2(image,[4,4]);                        
          figure,imshow(yy)
          imwrite(yy,'gongjihou.bmp')
     case 4                        %laplacian高通滤波,默认大小为3*3
        w=fspecial('laplacian',0.1);
        yy=imfilter(image,w,'circular'); 
        figure,imshow(yy)
         imwrite(yy,'gongjihou.bmp')
     case 5                         %高斯低通滤波[3，3]
       w=fspecial('gaussian',[3,3],0.5);
       yy=imfilter(image,w,'replicate');   
       figure,imshow(yy)
       imwrite(yy,'gongjihou.bmp')
     case 6                         %椒盐1%
           yy=imnoise(image,'salt & pepper',0.01);
           figure,imshow(yy)
           imwrite(yy,'gongjihou.bmp')
     case 7                         %椒盐2%
          yy=imnoise(image,'salt & pepper',0.02);
          figure,imshow(yy)
          imwrite(yy,'gongjihou.bmp')
      case 8                         %椒盐3%
          yy=imnoise(image,'salt & pepper',0.03);
          figure,imshow(yy)
          imwrite(yy,'gongjihou.bmp')
     case 9                         %高斯噪声
         yy=imnoise(image,'gaussian',0,0.000235);     %攻击后为38dB
         figure,imshow(yy)
         imwrite(yy,'gongjihou.bmp')
%          yy=imnoise(image,'gaussian');                  %默认攻击 
%          figure,imshow(yy)
%          imwrite(yy,'gongjihou.bmp')
     case 10                        %泊松噪声
          yy=imnoise1(image,'poisson',2.75);         %攻击后为38dB
          figure,imshow(yy)
          imwrite(yy,'gongjihou.bmp')
%           yy=imnoise(image,'poisson');         默认攻击
%           figure,imshow(yy)
%           imwrite(yy,'gongjihou.bmp')
      case 11                        %JPEG压缩
         imwrite(image,'gongjihou1.jpg','q',95);  %2.77倍
         imwrite(image,'gongjihou2.jpg','q',85);  %4.4828倍
         imwrite(image,'gongjihou3.jpg','q',75);   %6.1905倍
         imwrite(image,'gongjihou4.jpg','q',65);   %7.2952倍
         imwrite(image,'gongjihou5.jpg','q',50);  %9.1678倍
         imwrite(image,'gongjihou6.jpg','q',45);  %9.7744倍
         imwrite(image,'gongjihou7.jpg','q',35);  %11.3438倍
         imwrite(image,'gongjihou8.jpg','q',25);  %14.0086倍
         yy=imread('gongjihou1.jpg');   
         yy2=imread('gongjihou2.jpg');
         yy3=imread('gongjihou3.jpg');
         yy4=imread('gongjihou4.jpg');
         yy5=imread('gongjihou5.jpg');
         yy6=imread('gongjihou6.jpg');
         yy7=imread('gongjihou7.jpg');
         yy8=imread('gongjihou8.jpg');
         subplot(2,4,1),imshow(yy)
         subplot(2,4,2),imshow(yy2)
         subplot(2,4,3),imshow(yy3)
         subplot(2,4,4),imshow(yy4)
         subplot(2,4,5),imshow(yy5)
         subplot(2,4,6),imshow(yy6)
         subplot(2,4,7),imshow(yy7)
         subplot(2,4,8),imshow(yy8)
     case 12                        %JPEG2K压缩
         n=2;
         q=[8 7];
         yy=jpeg2k2im(im2jpeg2k(image,n,q));
     case 13                        %直方图均衡化
         yy=histeq(image,256);
         imwrite(yy,'gongjihou.bmp');
         imshow(yy)
     case 14                         %高斯低通滤波[3，3]
       w=fspecial('gaussian',[3,3],0.47);     %攻击后为  SNR 34.6975dB
       yy=imfilter(image,w,'replicate');   
       figure,imshow(yy)
       imwrite(yy,'gongjihou.bmp')
       case 15                         %高斯噪声
         yy=imnoise(image,'gaussian',0,0.000120);     %攻击后为  SNR 33.5127dB
         figure,imshow(yy)
         imwrite(yy,'gongjihou.bmp')
 end


