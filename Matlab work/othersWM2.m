%用于图象内容认证的半脆弱水印嵌入算法 
%王向阳 杨红颖 陈利科 赵红
%小型微型计算机系统 Vol.26 No.11 Nov.2005：2017-2020

select=3;                       % 选择载体图像
switch select
    case 1
        I=round(TI);
    case 2
        I=TI;
    case 3
        I=imread('Watermarked.bmp');
    case 4
        I=I1;
    case 5
        I=imread('gongjihou.bmp');
    case 6
        I=imread('gongjihou1.jpg');
end

[m,n]=size(I);

        [cA1,cH1,cV1,cD1]=dwt2(I,'haar');                                                          % haar小波变换
        [cA2,cH2,cV2,cD2]=dwt2(cA1,'haar');

         for i=1:32
            for j=1:32
                tmp=cV2(((i-1)*4+1):(i*4),((j-1)*4+1):(j*4));            %LH
                tmp1=cA2(((i-1)*4+1):(i*4),((j-1)*4+1):(j*4));           %LL
                tmp2=cH2(((i-1)*4+1):(i*4),((j-1)*4+1):(j*4));           %HL
                S=sum(sum(abs(tmp)));
                A=sum(sum(abs(tmp1)));
                B=sum(sum(abs(tmp2)));
                Deta=log((A+B)/2);
                Q=round(S/Deta);    
        
                  if mod(Q,2)==0
                      sy(i,j)=0;
                  else
                      sy(i,j)=1;
                  end
              end
          end
   


figure,imshow(logical(sy)),title('Watermark fetched');
imwrite(logical(sy),'Watermarkfetched.bmp');

