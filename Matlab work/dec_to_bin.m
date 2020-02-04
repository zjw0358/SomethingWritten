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
