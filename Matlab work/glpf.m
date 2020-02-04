f=imread('f.bmp')
PQ=paddedsize(size(f));
[U,V]=dftuv(PQ(1),PQ(2));
D0=0.05*PQ(2);                                  %截止参数
F=fft2(f,PQ(1),PQ(2));
H=exp(-(U.^2+V.^2)/(2*(D0^2)));                 %高斯低通滤波(GLPF)传递函数 
g=dftfilt(f,H);
figure,imshow(f,[])
figure,imshow(fftshift(H),[])                   %图像形式察看滤波器
figure,imshow(log(1+abs(fftshift(F))),[])       %频谱显示
figure,imshow(g,[])                             %处理后的图像