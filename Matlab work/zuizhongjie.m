function zuizhongjie(filename)   %主函数
image=imread(filename);
start_time=cputime;
%%%%%%%%%%%%%%%%%%%%%%%生成密匙
a=zeros(1,128);
b=[1 1 0 0 1 1 0 0];                  %  L F S R 初始值11001100
for i=1:128
    a(i)=b(1);
    for j=1:7
        b(j)=b(j+1);
        tp=xor(b(8),b(4));
        tp1=xor(tp,b(3));
        b(8)=xor(tp1,b(2));
    end
end
j=10;
x=zeros(1,128);
x(1)=0.12345678;                             % 混 沌 函 数 初 值0.1234567
c=zeros(1,128);
for k=1:128
    if a(k)==0      %根据0，1选择函数   
     x(k+1)=sqrt(abs(2*x(k)-1));
    else
        x(k+1)=1-sqrt(abs(2*x(k)-1));
    end
    c(k)=mod(fix(x(k)*2^j), 2);%转换函数,得到密匙
end
c=rot90(c,2);                              % 按加密顺序反过来，即为解密顺序
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5
%偷懒的地方
c=[1 0 0];

  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Q=cell(1,127);
Q{1}=image;
for k=1:3
    if c(k)==0
        Q{k+1}=shangxiajie(Q{k});
    else
        Q{k+1}=zuoyoujie(Q{k});
    end
end
elapsed_time=cputime-start_time
% imwrite(Q{4},'jiemijieguo.tif');
% im=imread('jiemijieguo.tif');
imwrite(Q{4},'jiemijieguo.bmp');
im=imread('jiemijieguo.bmp');
imshow(image),title('待解密图象');
figure,imshow(im),title('解密结果');
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%shangxiajie
function Z=shangxiajie(x)
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
%zuoyoujie
function Z=zuoyoujie(x)

[m n l]=size(x);
if l==3  %RGB
    X=cell(1,3);
       for h=1:3
           B=x(:,1:n/2,h);        %左半边
           B1=x(:,(n/2+1):n,h);   %右半边
           N=m*n/2;
           d=zeros(m,n/2);
           d1=zeros(m,n/2);
           d2=zeros(m,n/2);
           Flag=zeros(1,N);
           Flag1=zeros(1,N);

%求遍历矩阵
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
%解密右半边
B1=B1';
L=reshape(B1,1,N);
 for k=1:N
    for i=1:m
         for j=1:n/2
             if k==d(i,j)
                d1(i,j)=L(k);
                break;
            end
        end
    end
end
%求右半边矩阵的遍历矩阵
y=reshape(d1,1,N);
z=sort(y);
for i=1:m
    for j=1:n/2
        for k=1:N
            if (d1(i,j)==z(1,k)&Flag(1,k)==0)
                d(i,j)=k;
                Flag(1,k)=1;
                 
                break;
            end
        end
    end
end
%解密左半边
B=B';
L1=reshape(B,1,N);
 for k=1:N
    for i=1:m
        for j=1:n/2
       
            if k==d(i,j)
              
                d2(i,j)=L1(k);
                break;
            end
        end
    end
end

X{h}=[d2 d1];
X{h}=uint8(X{h});
end
Z=cat(3,X{1},X{2},X{3});
else  %非rgb图象
    R=islogical(x);
    if R==0  %灰度图象
B=x(:,1:n/2);
B1=x(:,(n/2+1):n);
N=m*n/2;
d=zeros(m,n/2);
d1=zeros(m,n/2);
d2=zeros(m,n/2);
Flag=zeros(1,N);
Flag1=zeros(1,N);

%求遍历矩阵
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
%解密右半边
B1=B1';
L=reshape(B1,1,N);
 for k=1:N
    for i=1:m
         for j=1:n/2
             if k==d(i,j)
                d1(i,j)=L(k);
                break;
            end
        end
    end
end
%求右半边矩阵的遍历矩阵
y=reshape(d1,1,N);
z=sort(y);
for i=1:m
    for j=1:n/2
        for k=1:N
            if (d1(i,j)==z(1,k)&Flag(1,k)==0)
                d(i,j)=k;
                Flag(1,k)=1;
                 
                break;
            end
        end
    end
end
%解密左半边
B=B';
L1=reshape(B,1,N);
 for k=1:N
    for i=1:m
        for j=1:n/2
       
            if k==d(i,j)
              
                d2(i,j)=L1(k);
                break;
            end
        end
    end
end

Y=[d2 d1];
Y=uint8(Y);
Z=Y;
else %二值图象
    B=x(:,1:n/2);
B1=x(:,(n/2+1):n);
N=m*n/2;
d=zeros(m,n/2);
d1=zeros(m,n/2);
d2=zeros(m,n/2);
Flag=zeros(1,N);
Flag1=zeros(1,N);

%求遍历矩阵
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
%解密右半边
B1=B1';
L=reshape(B1,1,N);
 for k=1:N
    for i=1:m
         for j=1:n/2
             if k==d(i,j)
                d1(i,j)=L(k);
                break;
            end
        end
    end
end
%求右半边矩阵的遍历矩阵
y=reshape(d1,1,N);
z=sort(y);
for i=1:m
    for j=1:n/2
        for k=1:N
            if (d1(i,j)==z(1,k)&Flag(1,k)==0)
                d(i,j)=k;
                Flag(1,k)=1;
                 
                break;
            end
        end
    end
end
%解密左半边
B=B';
L1=reshape(B,1,N);
 for k=1:N
    for i=1:m
        for j=1:n/2
       
            if k==d(i,j)
              
                d2(i,j)=L1(k);
                break;
            end
        end
    end
end

Y=[d2 d1];
Y=logical(Y);
Z=Y;
end
end