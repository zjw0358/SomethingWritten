% 写程序思路要清晰，排序方法要对，MATLAB的语句使用要得当。

% 写的程序，在改变输入参数的值或者规模时，不能影响程序主体的正常运行。例如：a的规模或者尺寸m,n的改变。

% 要适当引入标志信息位，辅助排序的正确完成。例如：flag的引入。

a=[10 7 5;1 5 7];

[m,n]=size(a);
tmp=a';
N=m*n;

b=reshape(tmp,1,N);
c=sort(b);

Flag=zeros(1,N);
d=zeros(2,3);

for i=1:m
    for j=1:n
        for k=1:N
            if (a(i,j)==c(1,k) & Flag(1,k)==0)
                d(i,j)=k;
                Flag(1,k)=1;
                break;
            end
        end
    end
end

a
c
d