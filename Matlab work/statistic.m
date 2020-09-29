function x=statistic(y)   %统计高频系数中元素值的绝对值小于0.5的元素所占的比例

Sum=0; %计数初始值

[m,n]=size(y);

[cA1,cH1,cV1,cD1]=dwt2(y,'haar');    % haar小波变换                       
for i=1:m/2
    for j=1:n/2
        k1=cH1(i,j);
        k2=cV1(i,j);
        k3=cD1(i,j);
        if abs(k1)<0.5;
            Sum=Sum+1;
        end
        if abs(k2)<0.5;
            Sum=Sum+1;
        end
        if abs(k3)<0.5;
            Sum=Sum+1;
        end
    end
end
x=Sum/((m/2)*(n/2)*3);