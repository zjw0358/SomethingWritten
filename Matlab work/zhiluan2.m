A=imread('cameraman.tif');
N=length(A);
%按列抽样
T=zeros(N);
for i=1:N/2
    T(2*i-1,i)=1;
end
for j=1:N/2
    T(2*j,j+N/2)=1;
end
B=double(A)*T;

%按行抽样
T=zeros(N);
for i=1:N/2
T(i,2*i-1)=1;
end
for j=1:N/2
T(j+N/2,j)=1;
end
B=T*B;
subplot(1,3,1),imshow(A);
subplot(1,3,2),imshow(uint8(B));
title('置乱图像');


for i=0:255
    for j=0:255
        x=rem(2*i+255*j,256);
        y=rem(255*i+j,256);
        D(256-y,x+1)=B(256-j,i+1);
    end
end


subplot(1,3,3),imshow(D); title('逆置乱图像');