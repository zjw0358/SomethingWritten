d=[6 4 2;1 3 5];
Q=[3 4 1;9 7 3];
A=zeros(1,6);
for i=1:2
    for j=1:3
        for a=1:6
            if a==d(i,j)
                A(a)=Q(i,j);
                break;
            end
        end
    end
end
B=reshape(A,3,2);
C=B';
d
Q
A
B
C