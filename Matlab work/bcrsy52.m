%基于人眼视觉的半弱水印--水印提取
select=3;                       % 选择载体图像
switch select
    case 1
        I=round(I1);
    case 2
        I=TI;
    case 3
        I=imread('Watermarked.bmp');
    case 4
        I=I1;
    case 5
        I=imread('gongjihou.bmp');
    case 6
        I=imread('watermarked.jpg');
    case 7
        I=imread('gongjihou1.jpg');
end
% [m,n]=size(I);
% M=m/8;                        % 行中块数
% N=n/8;                        % 列中块数
% Numbers=m*n/64;                   % 总块数
% tmp=zeros(8,8);              % 图像截取的块
% sy=zeros(u,v);            % 截取的水印块
xinxiT=zeros(1,256);
I1t=fft(I);
 for i=1:256
   xinxiT(i)=mod(I1t(1,i),2);
 end
 sy=reshape(xinxiT,16,16);
figure,imshow(logical(sy)),title('Watermark fetched');
imwrite(logical(sy),'Watermarkfetched.bmp');
