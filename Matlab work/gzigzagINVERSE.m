function C=gzigzag(B)

%    按“之”字型还原一个矩阵（非独立版）

[M,N]=size(B);
m=sqrt(N);
AZIGZAG=gzigzag(m);
for i=1:m
    for j=1:m
        for k=1:N
            if k==AZIGZAG(i,j)
             C(i,j)=B(k);
            end
        end
    end
end

