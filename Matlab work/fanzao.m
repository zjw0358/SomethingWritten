function fanzao(filename)   %主函数
image=imread(filename);
%%%%%%%%%%%%%%%%%%%%%%%生成密匙
c=[0 1 0 1];
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Q=cell(1,127);
Q{1}=image;
for k=1:4
    if c(k)==0
        Q{k+1}=shangxiajia(Q{k});
    else
        Q{k+1}=zuoyoujia(Q{k});
    end
end

imwrite(Q{5},'jiamijieguo.tif');
im=imread('jiamijieguo.tif');
imshow(image);
figure,imshow(im)
%shangxia
function Z=shangxiajia(x)
[m n l]=size(x);
if l==3      %RGB图像
     %判断读入图象是否为方阵，若不是则补成方阵。
     X=cell(1,3);
      for h=1:3
        if m>n
    n=m;
    x(m,n,h)=0;
    N=m*n/2;
    x2=x((m/2+1):m,:,h);%下半边
    x3=x(1:m/2,:,h);  %上半边
    d=zeros(m,n/2);
          if mod(m,2)==1
           m=m+1;
           n=m;
           x(m,n,h)=0;
           N=m*n/2;
           x2=x((m/2+1):m,:,h);%下半边
           x3=x(1:m/2,:,h);  %上半边
           d=zeros(m,n/2);
           end
    elseif m<n
         m=n;
         x(m,n,h)=0;
         N=m*n/2;      
         x2=x((m/2+1):m,:,h);%下半边
         x3=x(1:m/2,:,h);  %上半边
         d=zeros(m,n/2);
         if mod(n,2)==1
             n=n+1;
             m=n;
             x(m,n,h)=0;
             N=m*n/2;
            x2=x((m/2+1:m),:,h);%下半边
            x3=x(1:m/2,:,h);  %上半边
             d=zeros(m,n/2);
         end
      elseif m==n
       x2=x((m/2+1):m,:,h);%下半边
       x3=x(1:m/2,:,h);  %上半边
       N=m*n/2;
       d=zeros(m,n/2);
    end
%标志
Flag=zeros(1,N);
Flag1=zeros(1,N);
%求下半边矩阵的遍历矩阵
y=reshape(x2,1,N);
z=sort(y);
for i=1:m/2
    for j=1:n
        for k=1:N
            if (x2(i,j)==z(1,k)&Flag(1,k)==0)
                d(i,j)=k;
                Flag(1,k)=1;
                break;
            end
        end
    end
end
%用遍历矩阵对上半边进行置乱
A=zeros(1,N);
for i=1:m/2
    for j=1:n
        for k=1:N
            if k==d(i,j)
                A(k)=x3(i,j);
                break;
            end
        end
    end
end
B=reshape(A,n,m/2);
B=B';
%对已求的置乱矩阵求遍历矩阵
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
%用遍历矩阵对下半边进行置乱
A1=zeros(1,N);
for i=1:m/2
    for j=1:n
        for k=1:N
            if k==d(i,j)
                A1(k)=x2(i,j);
                break;
            end
        end
    end
end
B1=reshape(A1,n,m/2);
B1=B1';

X{h}=[B;B1];
X{h}=uint8(X{h});

     end
Z=cat(3,X{1},X{2},X{3});
else 
    %判断读入图象是否为方阵，若不是则补成方阵。
if m>n
    n=m;
    x(m,n)=0;
    N=m*n/2;
    x2=x((m/2+1):m,:);        %下半边图象
             x3=x(1:m/2,:);     %上半边图象
             d=zeros(m/2,n);
             d1=zeros(m/2,n);    %保存遍历矩阵
             d2=zeros(m/2,n);     %保存遍历矩阵
     if mod(m,2)==1
         m=m+1;
         n=m;
         x(m,n)=0;
         N=m*n/2;
       
             x2=x((m/2+1):m,:);
             x3=x(1:m/2,:);
             d=zeros(m/2,n);
             d1=zeros(m/2,n);    %保存遍历矩阵
             d2=zeros(m/2,n);     %保存遍历矩阵
     end
 elseif m<n
         m=n;
         x(m,n)=0;
         N=m*n/2;
        
         x2=x((m/2+1):m,:);
             x3=x(1:m/2,:);
             d=zeros(m/2,n);
             d1=zeros(m/2,n);    %保存遍历矩阵
             d2=zeros(m/2,n);     %保存遍历矩阵
         if mod(n,2)==1
             n=n+1;
             m=n;
             x(m,n)=0;
             N=m*n/2;
             
             x2=x((m/2+1):m,:);
             x3=x(1:m/2,:);
             d=zeros(m/2,n);
             d1=zeros(m/2,n);    %保存遍历矩阵
             d2=zeros(m/2,n);     %保存遍历矩阵
         end
  elseif m==n
     
             x2=x((m/2+1):m,:);
             x3=x(1:m/2,:);
             d=zeros(m/2,n);
             d1=zeros(m/2,n);    %保存遍历矩阵
             d2=zeros(m/2,n);     %保存遍历矩阵
     N=m*n/2;
   
 end
%标志
Flag=zeros(1,N);
Flag1=zeros(1,N);

%求下半边矩阵的遍历矩阵
y=reshape(x2,1,N);
z=sort(y);
for i=1:m/2
    for j=1:n
        for k=1:N
            if (x2(i,j)==z(1,k)&Flag(1,k)==0)
                d(i,j)=k;
                Flag(1,k)=1;
                d1(i,j)=d(i,j);
                break;
            end
        end
    end
end
%用遍历矩阵对上半边进行置乱
A=zeros(1,N);
for i=1:m/2
    for j=1:n
        for k=1:N
            if k==d(i,j)
                A(k)=x3(i,j);
                break;
            end
        end
    end
end
B=reshape(A,n,m/2);
B=B';
%对已求的置乱矩阵求遍历矩阵
C=reshape(B,1,N);
z1=sort(C);
for i=1:m/2
    for j=1:n
        for k=1:N
            if (B(i,j)==z1(1,k)&Flag1(1,k)==0)
                d(i,j)=k;
                d2(i,j)=d(i,j);
                Flag1(1,k)=1;
                break;
            end
        end
    end
end
%用遍历矩阵对下半边进行置乱
A1=zeros(1,N);
for i=1:m/2
    for j=1:n
        for k=1:N
            if k==d(i,j)
                A1(k)=x2(i,j);
                break;
            end
        end
    end
end
B1=reshape(A1,n,m/2);
B1=B1';
X=[B;B1];
X=uint8(X);
Z=X;
end
%zuoyou 
function Z=zuoyoujia(x)
[m n l]=size(x);

if l==3 %RGB图像
    %判断读入图象是否为方阵，若不是则补成方阵。
    X=cell(1,3);
    for h=1:3
if m>n
    n=m;
    x(m,n,h)=0;
    N=m*n/2;
             x2=x(:,(n/2+1):n,h);  %右半边图象
             x3=x(:,1:n/2,h);     %左半边图象
              
             d=zeros(m,n/2);
             d1=zeros(m,n/2);    %保存遍历矩阵
             d2=zeros(m,n/2);     %保存遍历矩阵
     if mod(m,2)==1
         m=m+1;
         n=m;
         x(m,n,h)=0;
          
         N=m*n/2;
       
           x2=x(:,(n/2+1):n,h);  %右半边图象
            x3=x(:,1:n/2,h);     %左半边图象
             
             d=zeros(m,n/2);
              d1=zeros(m,n/2); 
             d2=zeros(m,n/2);   
     end
 elseif m<n
         m=n;
         x(m,n,h)=0;
        
         N=m*n/2;
        
          x2=x(:,(n/2+1):n,h);  %右半边图象
             x3=x(:,1:n/2,h);     %左半边图象
              
             d=zeros(m,n/2);
              d1=zeros(m,n/2); 
             d2=zeros(m,n/2);   
         if mod(n,2)==1
             n=n+1;
             m=n;
             x(m,n,h)=0;
             N=m*n/2;
             
           x2=x(:,(n/2+1):n,h);  %右半边图象
             x3=x(:,1:n/2,h);     %左半边图象
             d=zeros(m,n/2);
              d1=zeros(m,n/2); 
             d2=zeros(m,n/2);     
         end
  elseif m==n
     
           x2=x(:,(n/2+1):n,h);  %右半边图象
            x3=x(:,1:n/2,h);     %左半边图象
             d=zeros(m,n/2);
              d1=zeros(m,n/2); 
             d2=zeros(m,n/2);     
     N=m*n/2;
   
 end
%标志
Flag=zeros(1,N);
Flag1=zeros(1,N);


%求右半边矩阵的遍历矩阵
y=reshape(x2,1,N);
z=sort(y);
for i=1:m
    for j=1:n/2
        for k=1:N
            if (x2(i,j)==z(1,k)&Flag(1,k)==0)
                d(i,j)=k;
                Flag(1,k)=1;
                d1(i,j)=d(i,j);
                break;
            end
        end
    end
end
%用遍历矩阵对左半边进行置乱
A=zeros(1,N);
for i=1:m
    for j=1:n/2
        for k=1:N
            if k==d(i,j)
                A(k)=x3(i,j);
                break;
            end
        end
    end
end
B=reshape(A,n/2,m);
B=B';
%对已求的置乱矩阵求遍历矩阵
C=reshape(B,1,N);
z1=sort(C);
for i=1:m
    for j=1:n/2
        for k=1:N
            if (B(i,j)==z1(1,k)&Flag1(1,k)==0)
                d(i,j)=k;
                d2(i,j)=d(i,j);
                Flag1(1,k)=1;
                break;
            end
        end
    end
end
%用遍历矩阵对右半边进行置乱
A1=zeros(1,N);
for i=1:m
    for j=1:n/2
        for k=1:N
            if k==d(i,j)
                A1(k)=x2(i,j);
                break;
            end
        end
    end
end
B1=reshape(A1,n/2,m);
B1=B1';

X{h}=[B B1];
X{h}=uint8(X{h});
end
Z=cat(3,X{1},X{2},X{3});

    
else   %非rgb图像
%判断读入图象是否为方阵，若不是则补成方阵。
if m>n
    n=m;
    x(m,n)=0;
    N=m*n/2;
             x2=x(:,(n/2+1):n);        %右半边图象
             x3=x(:,1:n/2);     %左半边图象
             d=zeros(m,n/2);
             d1=zeros(m,n/2);    %保存遍历矩阵
             d2=zeros(m,n/2);     %保存遍历矩阵
     if mod(m,2)==1
         m=m+1;
         n=m;
         x(m,n)=0;
         N=m*n/2;
       
            x2=x(:,(n/2+1):n);
             x3=x(:,1:n/2);
             d=zeros(m,n/2);
              d1=zeros(m,n/2); 
             d2=zeros(m,n/2);   
     end
 elseif m<n
         m=n;
         x(m,n)=0;
         N=m*n/2;
        
         x2=x(:,(n/2+1):n);
             x3=x(:,1:n/2);
             d=zeros(m,n/2);
              d1=zeros(m,n/2); 
             d2=zeros(m,n/2);   
         if mod(n,2)==1
             n=n+1;
             m=n;
             x(m,n)=0;
             N=m*n/2;
             
             x2=x(:,(n/2+1):n);
             x3=x(:,1:n/2);
             d=zeros(m,n/2);
              d1=zeros(m,n/2); 
             d2=zeros(m,n/2);     
         end
  elseif m==n
     
            x2=x(:,(n/2+1):n);
             x3=x(:,1:n/2);
             d=zeros(m,n/2);
              d1=zeros(m,n/2); 
             d2=zeros(m,n/2);     
     N=m*n/2;
   
 end
%标志
Flag=zeros(1,N);
Flag1=zeros(1,N);

%求右半边矩阵的遍历矩阵
y=reshape(x2,1,N);
z=sort(y);
for i=1:m
    for j=1:n/2
        for k=1:N
            if (x2(i,j)==z(1,k)&Flag(1,k)==0)
                d(i,j)=k;
                Flag(1,k)=1;
                d1(i,j)=d(i,j);
                break;
            end
        end
    end
end
%用遍历矩阵对左半边进行置乱
A=zeros(1,N);
for i=1:m
    for j=1:n/2
        for k=1:N
            if k==d(i,j)
                A(k)=x3(i,j);
                break;
            end
        end
    end
end
B=reshape(A,n/2,m);
B=B';
%对已求的置乱矩阵求遍历矩阵
C=reshape(B,1,N);
z1=sort(C);
for i=1:m
    for j=1:n/2
        for k=1:N
            if (B(i,j)==z1(1,k)&Flag1(1,k)==0)
                d(i,j)=k;
                d2(i,j)=d(i,j);
                Flag1(1,k)=1;
                break;
            end
        end
    end
end
%用遍历矩阵对右半边进行置乱
A1=zeros(1,N);
for i=1:m
    for j=1:n/2
        for k=1:N
            if k==d(i,j)
                A1(k)=x2(i,j);
                break;
            end
        end
    end
end
B1=reshape(A1,n/2,m);
B1=B1';

X=[B B1];
X=uint8(X);
Z=X;
end