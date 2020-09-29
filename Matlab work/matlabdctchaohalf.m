clear;
Q1=0.25;Q=12.6;N=8;%指定量化系数Q1,Q,图像分块大小值N
j=0;k=0;%初始化
Inputf=input('input the images name:','s');%可输入文本字符串
Inputf=imread(Inputf);
if isrgb(Inputf)
    Inputf=rgb2gray(Inputf);%rgb图像转换为灰度图像
end
if isgray(Inputf)
    Input=double(Inputf);
    [a,b]=size(Inputf);
end
subplot 221;imshow(Inputf,[]);title('原始图像');

blockno1=fix(a/N);blockno2=fix(b/N);%朝零方向取整
w=zeros(blockno1,blockno2);
for j=1:blockno1
   for k=1:blockno2
       x=(j-1)*N+1;    
      y=(k-1)*N+1;
      block_dct1=Input(x:x+N-1,y:y+N-1);
      LINE=zeros(1,64);
for i=1:8
    LINE=[LINE,double(block_dct1(i,:))];
end
LINE=LINE(65:128);
std1=std(LINE);%删除前64个零
std1=fix(std1/Q1)*Q1;%将所选子块的标准差进行归一化处理
%Logistic混沌映射
n=10;z=zeros(1:n+1);z(1)=std1;
for i=1:n
    z(i+1)=1-2*(z(i)^2);
end
if z(n+1)<=0 w(j,k)=0;
elseif z(n+1)>0 w(j,k)=1;   %产生水印比特
end
%利用邻近值算法思想将w(j,k)按量化嵌入技术嵌入DCT域直流系数A(0,0)即block_dct1(1,1);
block_dct1=dct2(block_dct1);h=round(block_dct1(1,1)/Q);
 if w(j,k)==0     
        if rem(h,2)==0 %正好是偶数
            block_dct1(1,1)=h*Q;
        elseif rem(h,2)==1   %奇数
            if block_dct1(1,1)-h*Q>0 block_dct1(1,1)=(h+1)*Q;
            else block_dct1(1,1)=(h-1)*Q;
            end
        end    
 elseif w(j,k)==1
     if    rem(h,2)==1    %正好是奇数
         block_dct1(1,1)=h*Q;
     elseif rem(h,2)==0   %偶数
         if block_dct1(1,1)-h*Q>0  block_dct1(1,1)=(h+1)*Q;
         else block_dct1(1,1)=(h-1)*Q;
         end
     end
 end
 block_dct2=idct2(block_dct1);%图像子块作逆DCT变换,得到含有水印的图像子块
   Outf(x:x+N-1,y:y+N-1)=block_dct2;
   end
end
subplot 222;imshow(Outf,[]);
title('处理后图像');


         
        
     
   






      
      
       








