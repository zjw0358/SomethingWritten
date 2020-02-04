%水印----嵌入程序                        基于一维FFT   “非均匀”取样sample程序  分16个采样点的时候
%调整：相角不变，虚实部变
clc;
clear;
close all;
turnkey=8;                             % 选择原始图像
switch turnkey
    case 1
        I=imread('cameraman.tif');     % 原始图象cameraman
    case 2
        I=rgb2gray(imread('50.bmp'));  % 原始图象Lena
    case 3
        I=rgb2gray(imread('face.png'));     
    case 4
        I=rgb2gray(imread('len1.jpg'));      
    case 5
         I=rgb2gray(imread('tu1.jpg'));    
     case 6
         I=rgb2gray(imread('bao.png'));
     case 7
         I=imread('len1.tif');
     case 8
         I=imread('len2.bmp');
end
[m,n]=size(I);
Zaiti=reshape(I,1,m*n);  
Sy=imread('hd2.bmp');           % 欲嵌入的水印信息
[u v]=size(Sy);            
shuiyin=reshape(Sy,1,u*v);
Deta=30;                       %步长   kk=5,kk2=13,d=10左右最好；kk=4,kk2=14,d=8左右最好；kk=6,kk2=12,d=10左右最好; kk=1,d=17以上都可
kk=8;
kk2=10;
ll=3;
ll2=15;
mm=1;
for i=1:u*v
        
        A=Zaiti(((i-1)*16+1):i*16);                                             % 截取图像块
        B=fft(A);
        xiangjiao=angle(B);
        C=B;
        B1=abs(B);
        Lh1=ceil(B1(kk)/Deta);
        Lh1a=ceil(B1(mm)/Deta);
        Lh1b=ceil(B1(ll)/Deta);
        %%%%%%%%%%%%%%%%%%%%%%%%%
        if abs(B1(kk))~=0
                if mod(Lh1,2)==shuiyin(i)
                         Lh2=Lh1*Deta+Deta/2;
                         
                else 
                         if  rem(B1(kk),Deta) >= Deta/2
                             Lh2=(Lh1+1)*Deta+Deta/2;
                            
                        else
                            Lh2=(Lh1-1)*Deta+Deta/2;
                        end
                end
              r=sqrt(Lh2^2/sec(xiangjiao(kk))^2);                      %实部
              xu=sqrt(Lh2^2-Lh2^2/sec(xiangjiao(kk))^2);           %虚部
              C(kk)=r*sign(real(B(kk)))+xu*sign(imag(B(kk)))*j;
              C(kk2)=r*sign(real(B(kk2)))+xu*sign(imag(B(kk2)))*j;
        else 
               if mod(Lh1,2)==shuiyin(i)
                       C(kk)=B(kk);
                 else

                             C(kk)=(Lh1+1)*Deta+Deta/2;
                             C(kk2)=(Lh1+1)*Deta+Deta/2;
                 end
        end
        %%%%%%%%%%%%%%%%%%%%%%%%
             if abs(B1(mm))~=0
                if mod(Lh1a,2)==shuiyin(i)
                         Lh2a=Lh1a*Deta+Deta/2;
                         
                else 
                         if  rem(B1(mm),Deta) >= Deta/2
                             Lh2a=(Lh1a+1)*Deta+Deta/2;
                            
                        else
                            Lh2a=(Lh1a-1)*Deta+Deta/2;
                        end
                end
              ra=sqrt(Lh2a^2/sec(xiangjiao(mm))^2);                      %实部
              xua=sqrt(Lh2a^2-Lh2a^2/sec(xiangjiao(mm))^2);           %虚部
              C(mm)=ra*sign(real(B(mm)))+xua*sign(imag(B(mm)))*j;
%               C(kk2)=r*sign(real(B(kk2)))+xu*sign(imag(B(kk2)))*j;
        else 
               if mod(Lh1a,2)==shuiyin(i)
                       C(mm)=B(mm);
                 else

                             C(mm)=(Lh1a+1)*Deta+Deta/2;
%                              C(kk2)=(Lh1+1)*Deta+Deta/2;
                 end
        end
        %%%%%%%%%%%%%%%%%%%%%%%%%
         if abs(B1(ll))~=0
                if mod(Lh1b,2)==shuiyin(i)
                         Lh2b=Lh1b*Deta+Deta/2;
                         
                else 
                         if  rem(B1(ll),Deta) >= Deta/2
                             Lh2b=(Lh1b+1)*Deta+Deta/2;
                            
                        else
                            Lh2b=(Lh1b-1)*Deta+Deta/2;
                        end
                end
              rb=sqrt(Lh2b^2/sec(xiangjiao(ll))^2);                      %实部
              xub=sqrt(Lh2b^2-Lh2b^2/sec(xiangjiao(ll))^2);           %虚部
              C(ll)=rb*sign(real(B(ll)))+xub*sign(imag(B(ll)))*j;
              C(ll2)=rb*sign(real(B(ll2)))+xub*sign(imag(B(ll2)))*j;
        else 
               if mod(Lh1b,2)==shuiyin(i)
                       C(ll)=B(ll);
                 else

                             C(ll)=(Lh1b+1)*Deta+Deta/2;
                             C(ll2)=(Lh1b+1)*Deta+Deta/2;
                 end
        end
        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            AA=ifft(C);
            Zaiti2(((i-1)*16+1):i*16)=AA;
%             zhengshu=floor(AA);
%             xiaoshu=AA-zhengshu;
%             for ii=1:8
%                    if  AA(ii)-double(A(ii))>0
%                        zhengshu(ii)=zhengshu(ii);
%                        zhengshu(ii+8)=zhengshu(ii+8);
%                    else
%                        zhengshu(ii)=zhengshu(ii)+1;
%                        zhengshu(ii+8)=zhengshu(ii+8)+1;
%                    end
%             end
%             
%             Zaiti2(((i-1)*16+1):i*16)=zhengshu;
 end
I1=reshape(Zaiti2,m,n);
% zhengshu=floor(Zaiti2);
% xiaoshu=Zaiti2-zhengshu;
% for i=1:4096
%         Xblock=xiaoshu(((i-1)*16+1):(i*16));
%         Zblock=zhengshu(((i-1)*16+1):(i*16));
% 
%         I2(((i-1)*16+1):(i*16))=Zblock;
% end
% 
% I3=reshape(I2,m,n);
% TI=uint8(I3);
TI=uint8(round(I1));
% TI=uint8(I1);
% figure(1),imshow(I),title('Original');
figure(2),imshow(Sy),title('Watermark');
% figure(3),imshow(uint8(round(I1))),title('Watermarked');
imwrite(TI,'Watermarked.bmp');
figure(3),imshow(TI),title('Watermarked');
%imwrite(TI,'Watermarked.bmp');
