function unzipped=RLEdecode(zipped)
zip=uint8(zipped);
[m,n]=size(zip);
unzipped=[];
for i=1:m
    section=repmat(zip(i,1),1,double(zip(i,2)));
    unzipped=[unzipped section];
end
% unzipped=reshape(unzipped,info.rows,info.cols);
unzipped