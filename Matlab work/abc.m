
a=zeros(1,128);
b=[1 1 0 0 1 1 0 0];                          %  L F S R 初始值11001100
for i=1:128
    a(i)=b(1);
    for j=1:7
        b(j)=b(j+1);
        tp=xor(b(8),b(4));
        tp1=xor(tp,b(3));
        b(8)=xor(tp1,b(2));
    end
end
j=10;

x=zeros(1,65536);
                          
x(1)=0.1;

for m=1:65535

y=x(m);
for k=1:128
    if a(k)==0      %根据0，1选择函数   
    x(m+1)=sqrt(abs(2*y-1));
    else
    x(m+1)=1-sqrt(abs(2*y-1));
    end
    y=x(m+1);
end

end 
x