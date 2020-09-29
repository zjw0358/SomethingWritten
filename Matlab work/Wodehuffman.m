function CODE=Wodehuffman(p)
% error(nargchk(1,1,nargin));
% if (ndims(p)~=2)|(min(size(p))>1)|~isreal(p)|~isnumeric(p)
%     error('P must be a real numeric vector.......');
% end
L=length(p);
p1=zeros(L);
px=zeros(L);
px(1,:)=p;
for i=1:(L-1)
    p2=p1(i,:);
    p2=sort(px(i,:));
    p2(2)=p2(1)+p(2);
    p2(1)=[];
    px(i,:)=px(i-1,L-1);
    px(i+1,:)=p2;
end
    