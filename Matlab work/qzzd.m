%                                     老板的程序
% 理想的置乱矩阵
% 平均距离为20，最大为31，最小为16
%

R=16;
for i=1:32
    for j=1:32
        z5(i,j)=(i-1)*32+j;
        z4(i,j)=mod((z5(i,j)+512-j+32-j+1),1024);
        if z4(i,j)==0
            z4(i,j)=1024;
        end
    end
end
[x,zz1]=pp(z4,z5,R);

a=zeros(1,65536);
b=[1 0 1 0 1 0 1 0];                          %  LFSR 初始值11001100
for i=1:65536
    a(1,i)=b(1,1);
    for j=1:7
        b(1,j)=b(1,j+1);
    end
    tp=xor(b(1,8),b(1,4));
    tp1=xor(tp,b(1,3));
    b(1,8)=xor(tp1,b(1,2));
end
x=zeros(1,65536);
x(1,1)=0.4169023578;
for k=1:65535
    x(1,k+1)=sqrt(abs(2*x(1,k)-1));
    if a(1,k)==1
        x(1,k+1)=1-x(1,k+1);
    end
end

clear i;

Index=1237;
I=(1:32);
for J=1:32
    A=z4(J,:);
    X=x(1,Index:Index+31);
    Index=Index+32;
    P=X+i*I;
%     Q=(esort(P))';
    Q=esort(P);
    for j=1:32
        B(1,j)=A(1,imag(Q(j,1)));
    end
    z6(J,:)=B(1,:);
end
[y,zz2]=pp(z6,z5,R);
