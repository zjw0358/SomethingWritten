function [varargout]=waveback(c,s,varargin)
error(nargchk(3,5,nargin));
error(nargchk(1,2,nargout));
if (ndims(c)~=2) |(size(c,1)~=1)
    error('C must be a row vector.');
end
if (ndims(s)~=2) | ~isreal(s) |~isnumeric(s) | (size(s,2)~=2)
    error('S must be a real,numeric two-column array.');
end
elements=prod(s,2);
if (length(c)<elements(end))| ~(elements(1)+3*sum(elements(2:end-1))>=elements(end))
    error(['[C S] must be a standard wavelet' 'decomposition structure.']);
end
nmax=size(s,1)-2;
wname=varargin{1};
filterchk=0;
nchk=0;
switch nargin
    case 3
        if ischar(wname)
            [lp,hp]=wavefilter(wname,'r');
            n=nmax;
        else
            error('Undefined filter.');
        end
        if  nargout~=1
            error('Wrong number of output arguments');
        end
    case 4
        if ischar(wname)
              [lp,hp]=wavefilter(wname,'r');
              n=varargin{2};
              nchk=1;
          else
              lf=varargin{1};hp=varargin{2};
              filterchk=1;
              n=nmax;
              if nargout~=1
                  error('Wrong number of output arguments.');
              end
          end
      case 5
          lp=varargin{1};
          hp=varargin{2};
          filterchk=1;
          n=varargin{3};
          nchk=1;
      otherwise
          error('Improper number of input arguments.');
  end
  fl=length(lp);
  if filterchk
      if (ndims(lp)~=2) |~isreal(lp) |~isnumeric(lp)|(ndims(hp)~=2)|~isreal(hp)|...
              ~isnumeric(hp)|(fl~=length(hp))|rem(fl,2)~=0
      error(['LP and HP must be even and qual length real numeric filter vectors.']);
      end
  end
  if nchk &(~isnumeric(n)|~isreal(n))
      error('N must be a real numeric')
  end
  if (n>nmax) |(n<1)
      error('Invalid number (N) of reconstructions requested.');
  end
  if (n~=nmax)&(nargout~=2)
      error('Not enough output arguments');
  end
  nc=c;
  ns=s;
  nnmax=nmax;
  for i=1:n
      a=symconvup(wavecopy('a',nc,ns),lp,lp,fl,ns(3,:))+...
          symconvup(wavecopy('h',nc,ns,nnmax),hp,lp,fl,ns(3,:))+...
          symconvup(wavecopy('v',nc,ns,nnmax),lp,hp,fl,ns(3,:))+...
          symconvup(wavecopy('d',nc,ns,nnmax),hp,hp,fl,ns(3,:));
      nc=nc(4*prod(ns(1,:))+1:end);
      nc=[a(:)' nc];
      ns=ns(3:end,:);
      ns=[ns(1,:);ns];
      nnmax=size(ns,1)-2;
  end
  if nargout==1
      a=nc;
      nc=repmat(0,ns(1,:));
      nc(:)=a;
  end
  varargout{1}=nc;
  if nargout==2
      varagout{2}=ns;
  end
  
  function z=symconvup(x,f1,f2,fln,keep)
  y=zeros([2 1].*size(x));
  y(1:2:end,:)=x;
  y=conv2(y,f1');
  z=zeros([1 2].*size(y));
  z(:,1:2:end)=y;
  z=conv2(z,f2);
  z=z(fln-1:fln+keep(1)-2,fln-1:fln+keep(2)-2);