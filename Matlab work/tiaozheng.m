function x=tiaozheng(y)   %调整逆变换系数程序

[m,n]=size(y);
x=zeros(m,n);
x1=zeros(m,n);
 
x=fix(y);       %矩阵y的整数部分
x1=y-fix(y);     %矩阵y的小数部分
s=sum(sum(x1));  %矩阵y小数部分和

re=reshape(x1,1,m*n); %实部为矩阵y的小数部分元素
im=(1:m*n);           %虚部为元素的位置 
x2=re+i*im;   %建立复数矩阵
x3=Esort(x2);   %按实部对x3进行排序
for k=1:m*n
    if s>=0.5 & x(imag(x3(k)))<=255 %像素值不大于255
        x(imag(x3(k)))=x(imag(x3(k)))+1;
        k=k+1;
        s=s-1;
    end
end
%x      
%s