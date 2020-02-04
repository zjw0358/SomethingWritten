clc             %零水印算法验证程序    C01-C0=C11-C1
clear           % C01=count0+count05;  C11=count025+count075
close all
key=7;
switch key
 case 1
     x=imread('gongjihou.bmp');
 case 2
     x=imread('len2.bmp');
 case 3
     x=imread('sample1.bmp');
 case 4
     x=imread('football2.jpg');
 case 5
     x=imread('len21.bmp'); % len2.bmp的转置
 case 6
     x=imread('jiamijieguo.tif'); %len2.bmp的置乱加密
 case 7
     x=imread('jiamijieguo.bmp');%len2.bmp的置乱加密
end
[a b c d]=dwt2(x,'haar');
[a1 b1 c1 d1]=dwt2(a,'haar');
xs=a1-floor(a1);

count0=0;                                %求小数部分为0的个数
for i=1:64
    for j=1:64
        if xs(i,j)>=0 & xs(i,j)<0.25
            count0=count0+1;
        end
    end
end
count0

count025=0;                               %求小数部分为0.25的个数
for i=1:64
    for j=1:64
                if xs(i,j)>=0.25 & xs(i,j)<0.5
            count025=count025+1;
        end
    end
end
count025

count05=0;                                   %求小数部分为0.5的个数
for i=1:64
    for j=1:64
        if xs(i,j)>=0.5 & xs(i,j)<0.75
            count05=count05+1;
        end
    end
end
count05                                

count075=0;            %求小数部分为0.75的个数
for i=1:64
    for j=1:64
        if xs(i,j)>=0.75
            count075=count075+1;
        end
    end
end
count075

C0=count0+count05
C1=count025+count075