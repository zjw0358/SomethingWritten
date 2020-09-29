AAD.m
%function D=AAD(I,J)
% AAD(I,J) returns the average absolute difference between the pixels % of I and J.
% The AAD value is useful to quantitize the distortions on an image.

if (size(I)~=size(J))
   error('Las imagenes deben tener el mismo tamaño')
end
if (~isrgb(I) & ~isrgb(J))
   [m n] = size(I);
   A=double(I);
   B=double(J);
   sumaDif=0;
   for u=1:m
      for v=1:n
         sumaDif = sumaDif + abs(A(u,v)-B(u,v));
      end
   end
   D=sumaDif/(m*n);   
else 
   error('Las imagenes no pueden ser en color')
end
