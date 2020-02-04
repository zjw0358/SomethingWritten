clc;
clear;
%X=imread('Watermarked.bmp');  %¹¥»÷Ç°Í¼Ïñ
X=imread('len.bmp');  %¹¥»÷Ç°Í¼Ïñ

 select=1;                    %Ñ¡Ôñ¹¥»÷ºóÍ¼Ïñ 
 switch select
    case 1
        Y=imread('gongjihou.bmp'); 
    case 2
        Y=imread('gongjihou1.jpg');
end
 
[m,n]=size(X);
X1=zeros(2,2);
Y1=zeros(2,2);
x=0;%ÏñËØ¼õÉÙµÄ¸öÊı
y=0;%ÏñËØÔö¼ÓµÄ¸öÊı
i=1;
Z=zeros(1,m*n/4); %ÏñËØ±ä»¯Öµ

for p=1:m/2
      for q=1:n/2
           X1=X(1+(2*(p-1)):2*p,1+(2*(q-1)):2*q);     % ½ØÈ¡¹¥»÷Ç°Í¼Ïñ2*2¿é
           Y1=Y(1+(2*(p-1)):2*p,1+(2*(q-1)):2*q);     % ½ØÈ¡¹¥»÷ºóÍ¼Ïñ2*2¿é 
           if sum(sum(X1))-sum(sum(Y1))>0
               x=x+1;
           else if sum(sum(X1))-sum(sum(Y1))<0
               y=y+1;    
       end
   end
       q=q+1;
   end
       p=p+1;
end
  x
  y
  m*n
  x/(x+y)
  y/(x+y)