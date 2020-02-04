a=zeros(1,128);
b=[1 1 0 0 1 1 0 0];%≥ı º÷µ
for i=1:128
    a(i)=b(1);
    for j=1:7
        b(j)=b(j+1);
        tp=xor(b(8),b(4));
        tp1=xor(tp,b(3));
        b(8)=xor(tp1,b(2));
    end
end
a