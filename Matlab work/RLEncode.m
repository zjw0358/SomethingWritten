function [zipped]=RLEncode(vector)
%[m,n]=size(vector);
%vector=vector(:)';
%vector=unit8(vector(:));
% vector=[0 0 0 1 1 0 0 0 1 0 1 1 1];
L=length(vector);
c=vector(1);e(1,1)=c;e(1,2)=0;  %e(:,1)存放灰度，e(:,2)存放行程
t1=1;
for j=1:L
    if((vector(j)==c))
        e(t1,2)=double(e(t1,2))+1;
    else
        c=vector(j);
        t1=t1+1;
        e(t1,1)=c;
        e(t1,2)=1;
    end
end
zipped=e;
% info.rows=m;
% info.cols=n;
% [m,n]=size(e);
% info.ratio=m*n/(info.rows*info.cols);