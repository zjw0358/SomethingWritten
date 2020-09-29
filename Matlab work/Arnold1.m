clear     %arnold±ä»»
clc
key=1;
switch key
case 1
I=imread('len2.bmp');
case 2
I=imread('arnold.bmp');
end
[m n]=size(I);
N=256;
Q=cell(1,200);
z=1; %ÖÜÆÚ
Q{1}=I;
for k=1:z    
for i=1:m
    for j=1:n
        A=mod([1 1;1 2]*[i;j],N);
        x=A(1)+1;
        y=A(2)+1;
        Q{k+1}(x,y)=Q{k}(i,j);
       
    end
end
end

imwrite(Q{k+1},'arnold.bmp');
imshow(Q{k+1})