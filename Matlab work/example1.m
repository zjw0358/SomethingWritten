f=ones(128,128)*4;
f(32:96,32:96)=zeros(65);
subplot(2,2,1),imshow(f);
F=fft2(f);
Fc=fftshift(F);
subplot(2,2,2),imagesc(abs(Fc),[0 255]); 
colormap(gray);