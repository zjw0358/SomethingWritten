function [c,s]=wavefast(x,n,varargin)

if nargin==3
    if ischar(varargin{1})
        [lp,hp]=wavefilter(varargin{1},'d');
    else
        error('Missing wavelet name');
    end
else
    lp=varargin{1};hp=varargin{2};
end
f1=length(lp);
sx=size(x);
if (ndims(x)~=2) |(min(sx))<2|~isreal(x) |~isnumeric(x)
    error('X must be a real,numeric matrix.');
end
if (ndims(lp)~=2) |~isreal(lp) |~isnumeric(lp) |(ndims(hp)~=2)|~isreal(hp)|~isnumeric(hp)
    error(['LP and HP must be even and equal length']);
end
if ~isreal(n)|~isnumeric(n)|(n<1)|(n>log2(max(sx)))
    error(['N must be a real scalar'])
end

c=[];
s=sx;
app=double(x);

for i=1:n
    [app,keep]=symextend(app,f1);
    rows=symconv(app,hp,'row',f1,keep);
    coefs=symconv(rows,hp,'col',f1,keep);
    c=[coefs(:)' c];
    s=[size(coefs);s];
    coefs=symconv(rows,lp,'col',f1,keep);
    c=[coefs(:)' c];
    rows=symconv(app,lp,'row',f1,keep);
    coef=symconv(rows,hp,'col',f1,keep);
    c=[coefs(:)' c];
    app=symconv(rows,lp,'col',f1,keep);
end

c=[app(:)' c];
s=[size(app);s];

function [y,keep]=symextend(x,f1)
keep=floor((f1+size(x)-1)/2);
y=padarray(x,[(f1-1) (f1-1)],'symmetric','both');

function y=symconv(x,h,type,f1,keep)

if strcmp(type,'row')
    y=conv2(x,h);
    y=y(:,1:2:end);
    y=y(:,f1/2+1:f1/2+keep(2));
else
    y=conv2(x,h');
    y=y(1:2:end,:);
    y=y(f1/2+1:f1/2+keep(1),:);
end