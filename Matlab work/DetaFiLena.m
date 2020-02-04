% Lena Fi
load FiLena
a=T*B*Sita;
b=2:0.1:20;
c=b';
d=c/a;
subplot(1,2,1),plot(c,'b-')
subplot(1,2,2),plot(d,'r-')
