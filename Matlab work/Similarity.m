w=logical(Sy);
w1=logical(sy);
uu=sum(sum(w.*w1));
vv=sqrt(sum(sum(w.^2)));
vv1=sqrt(sum(sum(w1.^2)));
similarity=uu/(vv*vv1)
