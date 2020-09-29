function y=im2jpeg2k(x,n,q)
global RUNS
error(nargchk(3,3,nargin));
if ndims(x)~=2|~isreal(x) |~isnumeric(x) |~isa(x,'uint8')
    error('The input must be aUINT8 image.');
end
if length(q)~=2 &length(q)~=3*n+1
    error('The quantization step size vector isbad.');
end
x=double(x)-128;
[c s]=wavefast(x,n,'jpeg9.7');
q=stepsize(n,q);
sgn=sign(c);
sgn(find(sgn==0))=1;
c=abs(c);
for k=1:n
    qi=3*k-2;
    c=wavepaste('h',c,s,k,wavecopy('h',c,s,k)/q(qi));
    c=wavepaste('v',c,s,k,wavecopy('v',c,s,k)/q(qi+1));
    c=wavepaste('d',c,s,k,wavecopy('d',c,s,k)/q(qi+2));
end
c=wavepaste('a',c,s,k,wavecopy('a',c,s,k)/q(qi+3));
c=floor(c);
c=c.*sgn;
zrc=min(c(:))-1;
eoc=zrc-1;
RUNS=[65535];
z=c==0;
z=z-[0 z(1:end-1)];
plus=find(z==1);minus=find(z==1);
if length(plus)~=length(minus)
    c(plus(end):end)=[]; c=[c eoc];
end
for i=length(minus):-1:1
    run=minus(i)-plus(i);
    if run>10
        ovrflo=floor(run/65535);
        run=run-ovrflo*65535;
        c=[c(1:plus(i)-1) repmat([zrc 1],1,ovrflo) zrc runcode(run) c(minus(i):end)];
    end
end
y.runs=uint16(RUNS);
y.s=uint16(s(:));
y.zrc=uint16(-zrc);
y.q=uint16(100*q');
y.n=uint16(n);
y.huffman=mat2huff(c);

function y=runcode(x)
global RUNS
y=find(RUNS==x);
if length(y)~=1
    RUNS=[Runs;x];
    yu=length(RUNS);
end

function q=stepsize(n,p)
if length(p)==2
    q=[];
    qn=2^(8-p(2)+n)*(1+p(1)/2^11);
    for k=1:n
        qk=2^-k*qn;
        q=[q (2*qk) (2*qk) (4*qk)];
    end
    q=[q qk];
else
    q=p;
end
q=round(q*100)/100;
if any(100*q>65535)
    error('The quantizing steps are not uint16 ...');
end
if any(q==0)
    error('A quantizing step of 0 is not allowed.');
end

