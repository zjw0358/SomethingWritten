function x=jpeg2k2im(y)
error(nargchk(1,1,nargin));
n=double(y.n);
q=double(y.q)/100;
runs=double(y.runs);
rlen=length(runs);
zrc=-double(y.zrc);
eoc=zrc-1;
s=double(y.s);
s=reshape(s,n+2,2);
cl=prod(s(1,:));
for i=2:n+1
    cl=cl+3*prod(s(i,:));
end
r=huff2mat(y.huffman);
c=[];
zi=find(r==zrc);
i=1;
for j=1:length(zi)
    c=[c r(i:zi(j)-1) zeros(1,runs(r(zi(j)+1)))];
    i=zi(j)+2;
end
zi=find(r==eoc);
if length(zi)==1
    c=[c r(i:zi-1)];
    c=[c zeros(1,cl-length(c))];
else
    c=[c r(i:end)];
end
c=c+(c>0)-(c<0);
for k=1:n
    qi=3*k-2;
    c=wavepaste('h',c,s,k,wavecopy('h',c,s,k)*q(qi));
    c=wavepaste('v',c,s,k,wavecopy('v',c,s,k)*q(qi+1));
    c=wavepaste('d',c,s,k,wavecopy('d',c,s,k)*q(qi+2));
end
c=wavepaste('a',c,s,k,wavecopy('a',c,s,k)*q(qi+3));
x=waveback(c,s,'jpeg9.7',n);
x=uint8(x+128);
figure,imshow(x)
yy=x;
imwrite(yy,'gongjihou.jpg')