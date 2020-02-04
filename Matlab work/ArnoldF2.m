function Z=ArnoldF2(file,J)    %Äæarnold±ä»»

[m n]=size(file);
Q=cell(1,200);
Q{1}=file;
N=n;
z=J;    %ÖÜÆÚ
for k=1:z
for i=1:m
    for j=1:n
        A=mod([1 1;1 2]*[i;j],N);
        x=A(1)+1;
        y=A(2)+1;
        Q{k+1}(x,y)=Q{k}(i,j);
    end
end
end
Z=Q{k+1};