%基于人眼视觉的半弱水印--水印提取
I=zeros(m,n);
select=3;                     % 选择载体图像
switch select
    case 1
        I=round(TI);
    case 2
        I=TI;
    case 3
        I=imread('watermarked.bmp');
    case 4
        I=I1;
    case 5
        I=imread('wm.bmp');
end
[m,n]=size(I);
M=m/8;                        % 行中块数
N=n/8;                        % 列中块数
Numbers=m*n/64;                   % 总块数
tmp=zeros(8,8);              % 图像截取的块
sy=zeros(u,v);            % 截取的水印块
sy1=zeros(1,BC*BC);
for i=1:M
    for j=1:N
        C=I(((i-1)*8+1):(i*8),((j-1)*8+1):(j*8));                                              % 截取图像块
        tmp=dct2(C);
%         tmp1a=round(tmp./LH);
        tp=gzigzag1(tmp);                         % 截取图像
        tp(5)=round(log2(abs(tp(5))));
        sy1=mod(tp(5),2);
        % SY=reshape(sy1,BC,BC);
           sy(((i-1)*BC+1):(i*BC),((j-1)*BC+1):(j*BC))=sy1;                                         % 截取水印块
     end
 end
figure,imshow(logical(sy)),title('Watermark fetched');
imwrite(logical(sy),'Watermarkfetched.bmp');

% End on 2006-08-18-12:13