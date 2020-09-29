function im2(filename,password)

i=imread(filename);
figure,imshow(i);
i=double(i);

c=num2str(password);
b=length(c);
m=char('1');

for d=1:b
   if strcmp(m,c(d))
    
    j=i(1:128,:);
    k=sort(j);
    j2=i(129:256,:);
    i=[k;j2+k];
else
    j3=i(:,1:128);
    k2=sort(j3);
    j4=i(:,129:256);
    i=[k2 j4+k2];
   end
    
end
i=uint8(i);
figure,imshow(i)
