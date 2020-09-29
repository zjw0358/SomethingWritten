% function Z=shangxiajie(x)
clc
clear
close all
x=imread('shangxiajiamijieguo.tif');
[m n l]=size(x);
if l==3   %RGB
      X=cell(1,3);
       for h=1:3
           B=x(1:m/2,:,h);                  %上半边图象
           B1=x((m/2+1):m,:,h);             %下半边图象
           d=zeros(m/2,n);
           d1=zeros(m/2,n);            
           d2=zeros(m/2,n);    
           N=m*n/2;
%标志
Flag=zeros(1,N);
Flag1=zeros(1,N);

%求上半边的遍历矩阵
C=reshape(B,1,N);
z1=sort(C);
for i=1:m/2
    for j=1:n
        for k=1:N
            if (B(i,j)==z1(1,k)&Flag1(1,k)==0)
                d(i,j)=k;
               
                Flag1(1,k)=1;
                break;
            end
        end
    end
end
%解密下半边
B1=B1';
L=reshape(B1,1,N);
 for k=1:N
    for i=1:m/2
         for j=1:n
        
            if k==d(i,j)
                d1(i,j)=L(k);
                break;
            end
        end
    end
end
%求下半边的遍历矩阵
y=reshape(d1,1,N);
z=sort(y);
for i=1:m/2
    for j=1:n
        for k=1:N
            if (d1(i,j)==z(1,k)&Flag(1,k)==0)
                d(i,j)=k;
                Flag(1,k)=1;
               
                break;
            end
        end
    end
end
%解密上半边
B=B';
L1=reshape(B,1,N);
 for k=1:N
    for i=1:m/2
        for j=1:n
       
            if k==d(i,j)
                d2(i,j)=L1(k);
                break;
            end
        end
    end
end

X{h}=[d2;d1];
X{h}=uint8(X{h});
         end
Z=cat(3,X{1},X{2},X{3});
imshow(Z);
imwrite('shangxiajiemijieguo.tif')

      else        %非rgb图象
          R=islogical(x);
          if  R==0      %灰度图象
                    B=x(1:m/2,:);                  %上半边图象
                    B1=x((m/2+1):m,:);             %下半边图象
                    d=zeros(m/2,n);
                    d1=zeros(m/2,n);            
                    d2=zeros(m/2,n);    
                    N=m*n/2;
%标志
Flag=zeros(1,N);
Flag1=zeros(1,N);

%求上半边的遍历矩阵
C=reshape(B,1,N);
z1=sort(C);
for i=1:m/2
    for j=1:n
        for k=1:N
            if (B(i,j)==z1(1,k)&Flag1(1,k)==0)
                d(i,j)=k;
               
                Flag1(1,k)=1;
                break;
            end
        end
    end
end
%解密下半边
B1=B1';
L=reshape(B1,1,N);
 for k=1:N
    for i=1:m/2
         for j=1:n
        
            if k==d(i,j)
                d1(i,j)=L(k);
                break;
            end
        end
    end
end
%求下半边的遍历矩阵
y=reshape(d1,1,N);
z=sort(y);
for i=1:m/2
    for j=1:n
        for k=1:N
            if (d1(i,j)==z(1,k)&Flag(1,k)==0)
                d(i,j)=k;
                Flag(1,k)=1;
               
                break;
            end
        end
    end
end
%解密上半边
B=B';
L1=reshape(B,1,N);
 for k=1:N
    for i=1:m/2
        for j=1:n
       
            if k==d(i,j)
                d2(i,j)=L1(k);
                break;
            end
        end
    end
end

X=[d2;d1];
X=uint8(X);
Z=X;
else        %二值图象
                    B=x(1:m/2,:);                  %上半边图象
                    B1=x((m/2+1):m,:);             %下半边图象
                    d=zeros(m/2,n);
                    d1=zeros(m/2,n);            
                    d2=zeros(m/2,n);    
                    N=m*n/2;
%标志
Flag=zeros(1,N);
Flag1=zeros(1,N);

%求上半边的遍历矩阵
C=reshape(B,1,N);
z1=sort(C);
for i=1:m/2
    for j=1:n
        for k=1:N
            if (B(i,j)==z1(1,k)&Flag1(1,k)==0)
                d(i,j)=k;
               
                Flag1(1,k)=1;
                break;
            end
        end
    end
end
%解密下半边
B1=B1';
L=reshape(B1,1,N);
 for k=1:N
    for i=1:m/2
         for j=1:n
        
            if k==d(i,j)
                d1(i,j)=L(k);
                break;
            end
        end
    end
end
%求下半边的遍历矩阵
y=reshape(d1,1,N);
z=sort(y);
for i=1:m/2
    for j=1:n
        for k=1:N
            if (d1(i,j)==z(1,k)&Flag(1,k)==0)
                d(i,j)=k;
                Flag(1,k)=1;
               
                break;
            end
        end
    end
end
%解密上半边
B=B';
L1=reshape(B,1,N);
 for k=1:N
    for i=1:m/2
        for j=1:n
       
            if k==d(i,j)
                d2(i,j)=L1(k);
                break;
            end
        end
    end
end

X=[d2;d1];
X=logical(X);
Z=X;
     end
end
imshow(Z);
imwrite('shangxiajiemijieguo.tif')