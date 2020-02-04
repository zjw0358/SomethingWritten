select=7;                    % 选择载体图像
switch select
    case 1
        I=imread('Watermarked.bmp');
    case 2
        I=imread('gongjihou.bmp');
    case 3                              %正常提取
        I=imread('secret.png');
    case 4
        I=I1;
    case 5                               %普通攻击后提取
        I=imread('gongjihou.bmp');
    case 6
        I=imread('Watermarked.jpg');
    case 7                                %jpeg压缩后提取
        I=imread('gongjihou1.jpg');
end
for i=1:u
    for j=1:v
        A1=I(((i-1)*k+1),((j-1)*k+1));
        sy(i,j)=bitand(A1,1);                
    end
end
figure,imshow(logical(sy)),title('Watermark fetched');
imwrite(logical(sy),'FETCHwodeWm.bmp');