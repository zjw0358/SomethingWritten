function B=gzigzag(N)

%    按“之”字型读出一个矩阵（非独立版）
%    This program is designed to obtain zigzag and anti-zigzag index-matrices
%      Usage : [ZIGZAG,AZIGZAG]=gzigzag(N);
%            ZIGZAG: Matrix with size of N^2 x 1
%           AZIGZAG: Matrix with size of N x N
%    If matrix A (N x N) is to be zigzaged, then
%                   ZA=A(ZIGZAG);
%    If vector B (N^2 x 1) is to be anti-zigzaged, then
%                   AzB=B(AZIGZAG)
%
%                        by Chen Jun-Horng         May,14, 2003
%

start=1;
count=0;
[m n]=size(N);
A=zeros(m);
for D=m-1:-1:1-m
    count=count+1;
    x=start:start+m-abs(D)-1;
    start=start+m-abs(D);
    A=A+diag(x-(mod(count,2)~=0)*(x-fliplr(x)),D);
end
AZIGZAG=fliplr(A);
[Y,ZIGZAG]=sort(AZIGZAG(:));

for i=1:m
    for j=1:n
        for k=1:m*n
            if k==AZIGZAG(i,j)
                B(k)=N(i,j);
            end
        end
    end
end

