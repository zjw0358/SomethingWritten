%基于人眼视觉的半弱水印
clear
close all
tm=cputime;
image=imread('cameraman.tif');  %原始图象
shuiyin=imread('logo.tif');     %欲嵌入的信息
[x y]=size(shuiyin);
shuiyin1=reshape(shuiyin,1,x*y);

[m n l]=size(image);
blocksize=m*n/64;             %总8*8块数
blocksize1=sqrt(blocksize);   %每行（列）的块数


fi=10;              
B=zeros(1,blocksize);%亮度系数
T=zeros(1,blocksize);%纹理系数
Sita=zeros(1,blocksize);%方差系数
Deta=zeros(1,blocksize);%量化步长
cA1=cell(1,blocksize);%LL系数
A=cell(1,blocksize);%LL系数（列）
cH1=cell(1,blocksize);%LH系数
cV1=cell(1,blocksize);%HL系数
cD1=cell(1,blocksize);%HH系数
Q=cell(1,blocksize);%量化结果
tmp=cell(1,blocksize);%8*8矩阵
tmp1=cell(1,blocksize);%嵌入后的8*8矩阵

%%%%%%%%%%%%%%%%%%分块
 k=1; %块初值，k=1表明第1个8&8块
   for i=1:blocksize1
    for j=1:blocksize1
       
        tmp{k}=image(((i-1)*8+1):(i*8),((j-1)*8+1):(j*8));%，每一个8*8块
        [cA,cH,cV,cD]=dwt2(tmp{k},'haar');
      
        cA1{k}=cA;%记录系数
        cH1{k}=cH;
        cV1{k}=cV;
        cD1{k}=cD;
        A{k}=reshape(cA1{k},1,16);
        B(k)=sum((sum(cA1{k}))/8160); %求亮度系数
        T(k)=(sum(sum(abs(cH1{k})))+sum(sum(abs(cV1{k})))+sum(sum(abs(cD1{k}))))/2100;%求纹理系数
        
        ch{k}=reshape(cH1{k},1,16);
        cv{k}=reshape(cV1{k},1,16);
        cd{k}=reshape(cD1{k},1,16);
        Sita(k)=(var(ch{k})+var(cv{k})+var(cd{k}))/3;%求方差系数
        if Sita(k)==0
            Deta(k)==1
        else
        Deta(k)=fi*B(k)*T(k)*Sita(k);%量化步长
        end
       Q{k}=floor(A{k}/Deta(k));%量化
    k=k+1;
  end
end


%%%%%%%%%%%%%%%水印嵌入
k=1;
            for i=1:16     %每个LL的16个系数
            
                  if mod(Q{k}(i),2)==shuiyin1(16*(k-1)+i)                           %量化后与水印数据吻合的情况
                         if A{k}(i)>=0                                        
                          A{k}(i)=Q{k}(i)*Deta(k)+Deta(k)/2;
                          else
                          A{k}(i)=Q{k}(i)*Deta(k)-Deta(k)/2;
                          end
                  else                                                      %量化后与水印数据不吻合的情况
                        if A{k}(i)>=0
                               if rem(A{k}(i),Deta(k))>=Deta(k)/2
                                  A{k}(i)=(Q{k}(i)+1)*Deta(k)+Deta(k)/2;
                               elseif rem(A{k}(i),Deta(k))<Deta(k)/2
                                  A{k}(i)=(Q{k}(i)-1)*Deta(k)+Deta(k)/2;
                               end
                        else
                               if abs(rem(A{k}(i),Deta(k))>=Deta(k)/2)
                                  A{k}(i)=(Q{k}(i)-1)*Deta(k)-Deta(k)/2;
                               elseif abs(rem(A{k}(i),Deta(k))<Deta(k)/2)
                                  A{k}(i)=(Q{k}(i)+1)*Deta(k)-Deta(k)/2;
                               end
                        end 
                  end
                  cA1{k}=reshape(A{k},4,4);
                k=k+1;
             
         end 
      
%IDWT 
for k=1:blocksize
tmp1{k}=idwt2(cA1{k},cH1{k},cV1{k},cD1{k},'haar');
end

%重构图象
WM=zeros(m,n);%存含水印的图片
k=1;
    for i=1:blocksize1
    for j=1:blocksize1
        WM(((i-1)*8+1):(i*8),((j-1)*8+1):(j*8))=tmp1{k};
    k=k+1;   
    end
    end
WM=uint8(WM);
figure(1),imshow(image)
title('Original Image')
figure(2),imshow(shuiyin)
title('copy_right')
imwrite(WM,'Watermarked.tif');
wm=imread('Watermarked.tif');
figure(3),imshow(wm)
title('Watermarked Image')
time=cputime-tm