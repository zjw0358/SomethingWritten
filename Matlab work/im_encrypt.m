function   im_encrypt(filename,passwd,u)
% 功    能： 对RGB图象进行加密或解密
% 调用格式： im_encrypt(filename,passwd,u)
% 参数说明： filename -- 含有“图象文件的名称、类型和路径”的字符串
%            passwd   -- (0,1)之间的任意小数，作为图象的解密密码，默认值为0.1（初始迭代点）
%            u        -- Logistic方程参数[3.57,4.0],默认值为3.9843
% 返 回 值： 无返回值
% 示    例： 1.>> im_encrypt('c:\angle.bmp',0.222，3.9)
%                函数对 C 盘下的位图 angle 进行加密，解密密码为0.222
%            1.>> im_encrypt('c:\angle.bmp')
%                函数对 C 盘下的位图 angle 进行加密，解密密码为默认值0.1

% 检查输入的参数是否有错
if nargin==0 | nargin>3                                      % 参数个数检查
    error('输入的参数不符合要求，"键入help im_encrypt"可得到帮助！');
end
if nargin==3 & (ischar(filename)==0 | isa(passwd,'double')==0 | isa(u,'double')==0 | passwd>=1 | passwd<=0 | u<3.5715 | u>4.0) % 以 im_encrypt(filename,passwd) 的形式调用时
    error('输入的参数不符合要求，"键入help im_encrypt"可得到帮助！');
end
if nargin==2 & (ischar(filename)==0 | isa(passwd,'double')==0 | passwd>=1 | passwd<=0)% 以 im_encrypt(filename,passwd) 的形式调用时
    error('输入的参数不符合要求，"键入help im_encrypt"可得到帮助！');
end
if nargin==1 & ischar(filename)==0                            % 以 im_encrypt(filename) 的形式调用时
    error('输入的参数不符合要求，"键入help im_encrypt"可得到帮助！');
end
if nargin==1
    passwd=0.1;
    u=3.9843;
end
if nargin==2
    u=3.9843;
end

% 读图象文件
image=imread(filename);
figure,imshow(image);

% 对图像进行加密操作（BEncrypt='true'）
imsize=size(image);
temp=size(imsize);
im_dim=temp(2);             % 图象的维数
count=imsize(1)*imsize(2);  % 像素个数
times=1;      % 记数器
for i=1:imsize(1)           % 对图像的每一行
    for j=1:imsize(2)       % 对图像的每一列
        % 由Logistic迭代产生混沌序列 y(i)
        if(times==1)         % 对第一个像素进行加密,第一次进行Logistic迭代
                                    % Logistic迭代 （为什么没把它作为一个函数文件编写？原因：在循环次数较多的循环体中，不宜调用函数文件，非常慢！）       
                                    for k=1:1000
                                        x(i)=0;
                                    end
                                    x(1)=passwd;
                                    for k=2:1000
                                         x(k)=u*x(k-1)*(1-x(k-1));
                                    end
                                    y(1)=x(1000);
        else                 % 非第一次Logistic迭代，对其它像素加密
                                    % Logistic迭代
                                    x(1)=y(times-1);    % 上一次迭代的终点作为本次迭代的起点
                                    for k=2:9
                                        x(k)=u*x(k-1)*(1-x(k-1));
                                    end
                                    y(times)=x(9);
        end
        
        % 将y(i)扩大255倍后转换成二进制
        binary_yi=dec_to_bin(y(times)*255);
        
        if im_dim==2                        % 对于256色灰度图象
            % 将灰度值明文转换成二进制
            binary_p_ming=dec_to_bin(image(i,j));
            % 将binary_p_ming与binary_yi进行异或运算，得到像素点的灰度值的二进制码文
            binary_p_ma=m_xor(binary_p_ming,binary_yi);
            % 将灰度值的二进制码文转换成十进制，并赋给像素点
            image(i,j)=bin_to_dec(binary_p_ma);
        else                                % 对于RGB图象
            % 将像素点的RGB值明文转换成二进制
            binary_R_ming=dec_to_bin(image(i,j,1));
            binary_G_ming=dec_to_bin(image(i,j,2));
            binary_B_ming=dec_to_bin(image(i,j,3));
            % 将binary_yi分别与binary_R_ming、binary_G_ming、binary_B_ming进行异或运算，得到像素点的RGB值码文
            binary_R_ma=m_xor(binary_yi,binary_R_ming);
            binary_G_ma=m_xor(binary_yi,binary_G_ming);
            binary_B_ma=m_xor(binary_yi,binary_B_ming);
            % 像素点的RGB值码文转换成十进制，并赋给像素点
            image(i,j,1)=bin_to_dec(binary_R_ma);
            image(i,j,2)=bin_to_dec(binary_G_ma);
            image(i,j,3)=bin_to_dec(binary_B_ma);
        end
        
        % 对像素点的加密到此完成，显示进度
        if times==i*imsize(2)  % 加密完一行
            imshow(image); 
        end
        
        % 加密下一个像素点
        times=times+1;
    end
end

% 保存图象
imwrite(image,filename);
im=imread(filename);
imshow(im);

function ret_str=m_xor(str1,str2)
% 功    能： 异或运算
% 调用方式： m_xor(str1,str2)
% 参数说明： str1,str2均为8位字符串
% 示    例： str1='10011001'
%            str2='01010001'
%            m_xor(str1,str2)='11001000'

ret_str='00000000';
for i=1:8
    if str1(i)==str2(i)
        ret_str(i)='0';
    else
        ret_str(i)='1';
    end
end

function ret=bin_to_dec(bin)
% 功    能： 将8位二进制串转换成0~255之间的整数
% 调用方式： d=bin_to_dec(bin)
% 参数说明： bin -- 8位二进制串
% 返 回 值： 0~255之间的整数
% 示    例： d=dec_to_bin('11001000')
%               =200
if ischar(bin)==0 | size(bin)>8 | size(bin)<8
    error('参数有错！');
end
ret=bin2dec(bin);

function ret=dec_to_bin(d)
% 功    能： 将0~255之间的整数转换成8位二进制串
% 调用方式： str=dec_to_bin(d)
% 参数说明： d -- 0~255之间的整数
% 返 回 值： 8位二进制串
% 示    例： str=dec_to_bin(200)
%               ='11001000'

if d>255 | d<0
    error('参数有错！');
end
ret='00000000';
bin=dec2bin(double(d));
count=size(bin);
for i=1:count(2)
    ret(9-i)=bin(count(2)+1-i);
end
