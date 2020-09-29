%基于人眼视觉的半弱水印--水印提取
I=zeros(m,n);
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
%         B1=tmp(1,1)/maxB;
%         T1=sum(sum(abs(tmp)))/maxT;
%         S1=std(reshape(tmp,1,64));
%         Deta1=log(S1*(T1+B1));
        tmp1a=gzigzag1(tmp);                         % 截取图像块
        tmp1a(:)=round(tmp1a(:)/Deta);
%             for a=1:BC*BC
%             sy1(a)=mod(tmp1a(a),2);
%             end
            for a=1:BC*BC                             % 中频
            sy1(a)=mod(tmp1a(a+3),2);
            end
           SY=reshape(sy1,BC,BC);
           sy(((i-1)*BC+1):(i*BC),((j-1)*BC+1):(j*BC))=SY;                                         % 截取水印块
     end
 end
figure,imshow(logical(sy)),title('Watermark fetched');
imwrite(logical(sy),'Watermarkfetched.bmp');

% End on 2006-08-18-12:13