select=1;                    % 选择载体图像
switch select
    case 1
        I=imread('secret.bmp');
    case 2
        I=imread('secret.jpg');
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
Ii=I(:,:,1);
Ij=I(:,:,2);
Ik=I(:,:,3);

INFO=bitand(Ik,15);           %提取高4位信息
INFOB=bitshift(INFO,4); 

INFOA=bitand(Ij,15);
Information=bitor(INFOB,INFOA);

imshow(I),title('含隐藏信息图象');
figure,imshow(Information),title('隐藏信息');