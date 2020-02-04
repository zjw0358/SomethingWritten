i=imread('football.jpg');
[m n L]=size(i);
x=cell(1,3);
for l=1:3
k1=i(1:128,:,l);
k2=i(129:256,:,l);
z=k1;
k1=k2;
k2=z;
x{l}=[k1;k2];
end


y=cat(3,x{1},x{2},x{3});
imshow(i);
figure,imshow(y)