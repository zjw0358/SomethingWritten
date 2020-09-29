function X=zuoyoujiami2(x)
[m n]=size(x);
%判断读入图象是否为方阵，若不是则补成方阵。
if m>n                  %行数大于列数的情况
    n=m;
    x(m,n)=0;           %补成方阵
    N=m*n/2;
    x2=x(:,(n/2+1):n);
    x3=x(:,1:n/2);
    d=zeros(m,n/2);     %用来存置乱矩阵
     if mod(m,2)==1     %若行是奇数行的情况
         m=m+1;
         n=m;
         x(m,n)=0;
         N=m*n/2;
         x2=x(:,(n/2+1):n);
         x3=x(:,1:n/2);
         d=zeros(m,n/2);
     end
 elseif m<n             %行数小于列数
         m=n;
         x(m,n)=0;
         N=m*n/2;
         x2=x(:,(n/2+1):n);
         x3=x(:,1:n/2);
         d=zeros(m,n/2);
         if mod(n,2)==1    %若列是奇数列的情况
             n=n+1;
             m=n;
             x(m,n)=0;
             N=m*n/2;
             x2=x(:,(n/2+1):n);
             x3=x(:,1:n/2);
             d=zeros(m,n/2);
         end
  elseif m==n             %行列相等的情况
     x2=x(:,(n/2+1):n);
     x3=x(:,1:n/2);
     N=m*n/2;
     d=zeros(m,n/2);
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
B=reshape(A,m/2,n);
B=B';



%对已求的置乱矩阵求遍历矩阵
C=reshape(B,1,N);
z1=sort(C);
for i=1:m
    for j=1:n/2
        for k=1:N
            if (B(i,j)==z1(1,k)&Flag1(1,k)==0)
                d(i,j)=k;
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
                A1(k)=x(i,j);
                break;
            end
        end
    end
end
B1=reshape(A1,m/2,n);
B1=B1';

X=[B B1];
X=uint8(X);