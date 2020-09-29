function B=zjdfft(n,a)
nv2=n/2;
nm1=n-1;
i=1;
j=1;
M1=0;
while i<=nm1
    if i<j
       t=a(j);
	   a(j)=a(i);
	   a(i)=t;
    end
    k=nv2;
    while k<j
      j=j-k;
       k=k/2;
    end
    j=j+k;
    i=i+1;
end
s=log2(n); 
l=1;
while l<=s
      le=2^l;
      le1=le/2;
      u=complex(1,0);
      w=complex(cos(pi/le1),(-1)*sin(pi/le1));
      j=1;
      while j<=le1
	    i=j;
	    while i<=n
	      ip=i+le1;
	      t=a(ip)*u;
	      a(ip)=a(i)-t;
	      a(i)=a(i)+t;
	      i=i+le;
        end
	  u=u*w;
	  j=j+1;
      end
      l=l+1;
 end
B=a;