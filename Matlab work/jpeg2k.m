x=imread('watermarked.bmp');
n=1;
q=[10,10.5];
yy=jpeg2k2im(im2jpeg2k(x,n,q));