% 功    能： 产生复合混沌动力系统的图象加密
% 使用方式： rr1
% 参数说明： g0-反馈移位寄存器的初始值,x0-复合混沌动力系统的初始值
% 返 回 值： 参见下面的描述和WORKSPACE的变量值

% PART 0: 变量设置
clear;
clc;
% 密钥值
g0='11001100';
x0=double(0.607);
% 反馈移位寄存器的运算中间值
g=g0;
% 统计反馈移位寄存器的输出位0/1的个数
countq0=0;
countq1=0;
% 统计转换算子的输出位0/1的个数
countc0=0;
countc1=0;
% 统计明文的输出位0/1的个数
countm0=0;
countm1=0;
% 复合混沌动力系统的初始值赋值
x=double(0);
x=x0;
% 转换算子的初始值
J=10;
mi='0';
ri='0';
ci='0';
q='0';
c=0;
X0=double(0);
% 图象处理
YSTX=imread('ystx.bmp');
ystx=rgb2gray(YSTX);
figure,imshow(ystx);
[M,N]=size(ystx);
K=M*N;
result=uint8(zeros(M,N)); 
TMP=uint8(0);
tmp='00000000';
i=1;  
while (i<=K)
    col=mod(i,N);
    if (col==0)
        row=int8(i/N);
        col=N;
    else
        row=int8(double(int8(i/N))+1);
    end
    TMP=ystx(row,col);
    tmp=dec2bin(double(TMP),8);
    C=0;
    I=1;
    while (I<=8)
        % PART 1: 反馈移位寄存器输出R={ri}
        ri=g(8);
        mi=tmp(9-I);
        if mi=='0'
            countm0=countm0+1;
        else
            countm1=countm1+1;
        end;
        % 统计输出位0/1的个数
        if ri==mi
            q='0';
            countq0=countq0+1;
        else
            countq1=countq1+1;
            q='1';
        end;
        % PART 2: 复合混沌动力系统产生[0，1]之间的数字 
        % 选择子混沌动力系统，迭代生成新的混沌值
        x=1-sqrt(abs(2*x-1));
        if (q=='0')
            x=1-x;
        end
        % PART 3: 转换算子
        % 利用转换算子R做转换,注意J的数字大小，以便选择int8/int16/int32函数
        % 选择向下取整
        c=mod(floor(x*(2^J)),2);
        C=C+c*2^(I-1);
        if (c==0)
            ci='0';
            countc0=countc0+1;
        else
            ci='1';
            countc1=countc1+1;
        end
        % 计算抽头8、4、3、2位的异或值作为最高位8的新值, 注意顺序！
        k ='0';
        k1='0';
        k2='0';
        if (g(1)==g(5))
            k1='0';
        else
            k1='1';
        end
        if (g(6)==g(7))
            k2='0';
        else
            k2='1';
        end
        if (k1==k2)
            k='0';
        else
            k='1';
        end
        JJ=7;
        while (JJ>0)
            g(JJ+1)=g(JJ);
            JJ=JJ-1;
        end
        % Method 1
        g(1)=k;
        % Method 2
%         if (k==ci)
%             g(1)='0';
%         else
%             g(1)='1';
%         end
         I=I+1;
    end    
    result(row,col)=uint8(C);
    % 迭代记数增1
    i=i+1;
end
% PART 4: 统计输出
figure,imshow(result);
imwrite(result,'result.bmp','BMP');

% 功    能： 产生复合混沌动力系统的图象解密
% 使用方式： rr2
% 参数说明： g0-反馈移位寄存器的初始值,x0-复合混沌动力系统的初始值
% 返 回 值： 参见下面的描述和WORKSPACE的变量值

% PART 0: 变量设置
% 密钥值
clear;
clc;
g0='11001100';
x0=double(0.607);
% 反馈移位寄存器的运算中间值
g=g0;
% 复合混沌动力系统的初始值赋值
x=double(0);
x=x0;
% 统计反馈移位寄存器的输出位0/1的个数
countq0=0;
countq1=0;
% 统计转换算子的输出位0/1的个数
countc0=0;
countc1=0;
% 统计明文的输出位0/1的个数
countm0=0;
countm1=0;
% 转换算子的初始值
J=10;
% 图象处理
result0=imread('result.bmp');
figure,imshow(result0);
[M,N]=size(result0);
K=M*N;
ystx0=uint8(zeros(M,N)); 
i=1;
ri='0';
ci='0';
SI=0;
si='0';
q='0';
qq='0';
mi=0;
c=0;
X0=double(0);
TMP=uint8(0);
tmp='00000000';
while (i<=K)
    col=mod(i,N);
    if (col==0)
        row=int8(i/N);
        col=N;
    else
        row=int8(double(int8(i/N))+1);
    end
    TMP=result0(row,col);
    tmp=dec2bin(double(TMP),8);
    C=0;
    I=1;
    while (I<=8)
        % PART 1: 反馈移位寄存器输出ri
        ri=g(8);
        ci=tmp(9-I);
        if ci=='0'
            countc0=countc0+1;
        else
            countc1=countc1+1;
        end
        x=1-sqrt(abs(2*x-1));
        % 利用转换算子R做转换,注意J的数字大小
        % 选择向下取整
        SI=mod(floor(x*(2^J)),2);
        if (SI==0)
            si='0';
        else
            si='1';
        end
        if ( ci == si )
            q='1';
            countq1=countq1+1;
        else
            q='0';
            countq0=countq0+1;
        end
        if q==ri
            mi=0;
            countm0=countm0+1;
        else
            mi=1;
            countm1=countm1+1;
        end
        C=C+mi*2^(I-1);
        % 计算抽头8、4、3、2位的异或值作为最高位8的新值, 注意顺序！
        k ='0';
        k1='0';
        k2='0';
        if (g(1)==g(5))
            k1='0';
        else
            k1='1';
        end
        if (g(6)==g(7))
            k2='0';
        else
            k2='1';
        end
        if (k1==k2)
            k='0';
        else
            k='1';
        end
        JJ=7;
        while (JJ>0)
            g(JJ+1)=g(JJ);
            JJ=JJ-1;
        end
        % Method 1
        g(1)=k;
        % Method 2
        I=I+1;
        
    end    
    ystx0(row,col)=uint8(C);
    % 迭代记数增1
    i=i+1;
end
% PART 4: 统计输出
figure,imshow(ystx0);
imwrite(ystx0,'ystx0.bmp','BMP');
