%用于视觉掩蔽的半脆弱水印技术研究 
%王向阳 杨红颖 陈利科 赵红
%中国图象图形学报 Vol.10 No.12 Dec.2005：1548-1553

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
                tmp=cA2(((i-1)*4+1):(i*4),((j-1)*4+1):(j*4));            %LL
                tmp1=cH2(((i-1)*4+1):(i*4),((j-1)*4+1):(j*4));           %LH
                tmp2=cV2(((i-1)*4+1):(i*4),((j-1)*4+1):(j*4));           %HL
                S=sum(sum(abs(tmp)));
                A=sum(sum(abs(tmp1)));
                B=sum(sum(abs(tmp2)));
                Deta=log((A+B)/2);
                Q=floor(S/Deta);    
        
                  if mod(Q,2)==0
                      sy(i,j)=0;
                  else
                      sy(i,j)=1;
                  end
              end
          end
   


figure,imshow(logical(sy)),title('Watermark fetched');
imwrite(logical(sy),'Watermarkfetched.bmp');

