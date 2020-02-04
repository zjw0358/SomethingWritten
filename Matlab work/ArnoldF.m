
function Z=ArnoldF(file,J)          %arnold变换，  n为置乱周期
% file1=imread(file);
[m n]=size(file);
N=n;
Q=cell(1,200);
z=J; %周期
Q{1}=file;
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
Q{k+1};
Z=Q{k+1};