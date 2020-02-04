%»ùÓÚÈËÑÛÊÓ¾õµÄ°ëÈõË®Ó¡--Ë®Ó¡Ç¶Èë
clear
close all
time0=cputime;
turnkey=1;
switch turnkey
    case 1
        I=imread('len.jpg');     % Ô­Ê¼Í¼Ïó
    case 2
        I=rgb2gray(imread('len1.jpg'));  % Ô­Ê¼Í¼ÏóLena
    otherwise
        I=x;
end
        
Sy=imread('sy.bmp');           % ÓûÇ¶ÈëµÄÐÅÏ¢

[m,n]=size(I);
I1=zeros(m,n);                % ÔØÌåÍ¼Ïñ
pic=1;
switch pic                     % kx*ky ½ØÈ¡Í¼Ïñ¹æÄ£
    case 1
        kx=256;
        ky=256;
    case 2
        kx=128;
        ky=128;
    case 3
        kx=64;
        ky=64;
    case 4
        kx=32;
        ky=32;
    case 5
        kx=16;
        ky=16;
    case 6
        kx=8;
        ky=8;
end

rx=kx/2;                       % rx*ry Ð¡²¨ÏµÊý¹æÄ£
ry=ky/2;
M=m/kx;                        % ÐÐÖÐ¿éÊý
N=n/ky;                        % ÁÐÖÐ¿éÊý
Numbers=M*N;                   % ×Ü8*8¿éÊý

% ²ÎÊýÉèÖÃ
fi=10;                         % ÐèÒªÊÔÑéµ÷ÕûµÄ²ÎÊý 

B=zeros(1,Numbers);            % ÁÁ¶ÈÏµÊý
T=zeros(1,Numbers);            % ÎÆÀíÏµÊý
Sita=zeros(1,Numbers);         % ·½²îÏµÊý
Deta=zeros(1,Numbers);         % Á¿»¯²½³¤

switch pic
    case 1
        MAXb=8160*1024;
        MAXt=2100*1024;
    case 2
        MAXb=8160*256;
        MAXt=2100*256;
    case 3
        MAXb=8160*64;
        MAXt=2100*64;
    case 4
        MAXb=8160*16;
        MAXt=2100*16;
    case 5
        MAXb=8160*4;
        MAXt=2100*4;
    case 6
        MAXb=8160;
        MAXt=2100;
end

cA1=zeros(rx,ry);              % LLÏµÊý
cH1=zeros(rx,ry);              % LHÏµÊý
cV1=zeros(rx,ry);              % HLÏµÊý
cD1=zeros(rx,ry);              % HHÏµÊý

Dt=1;                          % Á¿»¯²½³¤
Q=zeros(rx,ry);                % Á¿»¯Öµ
S=zeros(rx,ry);                % µ÷ÕûºóµÄcA1ÏµÊý

% ·Ö¿é
tmp=zeros(kx,ky);              % Ô­Ê¼Í¼Ïñ½ØÈ¡µÄ¿é
tmp1=zeros(kx,ky);             % ÔØÌåºÏ³É¿é
Tmp=zeros(rx,ry);              % ½ØÈ¡µÄË®Ó¡¿é
k=1;                           % ¿é³õÖµ£¬k=1±íÃ÷µÚ1¸ö8X8¿é
for i=1:M
    for j=1:N
               
        tmp=I(((i-1)*kx+1):(i*kx),((j-1)*ky+1):(j*ky));                                              % ½ØÈ¡Í¼Ïñ¿é
        Tmp=Sy(((i-1)*rx+1):(i*rx),((j-1)*ry+1):(j*ry));                                             % ½ØÈ¡Ë®Ó¡¿é
        [cA1,cH1,cV1,cD1]=dwt2(tmp,'haar');                                                          % haarÐ¡²¨±ä»»

        B(1,k)=sum(sum(cA1))/MAXb;                                                                   % ÁÁ¶ÈÏµÊý
        T(1,k)=(sum(sum(abs(cH1)))+sum(sum(abs(cV1)))+sum(sum(abs(cD1))))/MAXt;                      % ÎÆÀíÏµÊý
        Sita(1,k)=(std(reshape(cH1,rx*ry,1))+std(reshape(cV1,rx*ry,1))+std(reshape(cD1,rx*ry,1)))/3; % ·½²îÏµÊý
        Deta(1,k)=B(1,k)*T(1,k)*Sita(1,k)*fi;                                                        % Á¿»¯²½³¤

%         if k==436                                                                                  % Êä³ö¶¨µã¼ÆËãµÄ²ÎÊý
%             clc
%             tmp
%             Tmp
%             B(1,k)
%             T(1,k)
%             Sita(1,k)
%             Deta(1,k)
%             pause
%         end

        if Deta(1,k)<=2                                                                              % Á¿»¯²½³¤µ÷Õû·½°¸Ò»
            Deta(1,k)=1;
        else
            Deta(1,k)=1+log(Deta(1,k));                                                              % ²ÉÓÃlogÁ¿»¯²½³¤ºÏÊÊ
        end
        Deta(1,k)=round(2*Deta(1,k));                                                                % Deta ¼ÆËã·½·¨¶þ                            
        if mod(Deta(1,k),2)==1
            Deta(1,k)=Deta(1,k)+1;
        end

        
        Q=floor(cA1/Deta(1,k));                                                                      % Á¿»¯LLÏµÊý
        
        for p=1:rx                                                                                   % µ÷ÕûcA1µÄÏµÊýÖµÎªS
            for q=1:ry
                if mod(Q(p,q),2)==Tmp(p,q)
                    if cA1(p,q)>0
                        S(p,q)=Q(p,q)*Deta(1,k)+Deta(1,k)/2;
                    else
                        S(p,q)=Q(p,q)*Deta(1,k)-Deta(1,k)/2;
                    end
                else
                    if cA1(p,q)>0
                        if rem(cA1(p,q),Deta(1,k)) >= Deta(k)/2
                            S(p,q)=(Q(p,q)+1)*Deta(1,k)+Deta(1,k)/2;
                        else
                            S(p,q)=Q(p,q)*Deta(1,k)-Deta(1,k)/2;
                        end
                    else
                        if abs(rem(cA1(p,q),Deta(1,k))) >= Deta(k)/2
                            S(p,q)=(Q(p,q)-1)*Deta(1,k)-Deta(1,k)/2;
                        else
                            S(p,q)=Q(p,q)*Deta(1,k)+Deta(1,k)/2;
                        end
                    end
                end
            end
        end
        tmp1=IDWT2(S,cH1,cV1,cD1,'haar');                                                            % Ð¡²¨Äæ±ä»»     
        I1(((i-1)*kx+1):(i*kx),((j-1)*ky+1):(j*ky))=tmp1;                                            % Ìí¼Óµ½ÔØÌåÍ¼ÏñÖÐÈ¥
        k=k+1;                                                                                       % ´¦ÀíÏÂÒ»¸öÍ¼Ïñ¿é
    end
end

TI=I1;

figure(1),imshow(I),title('Original');
figure(2),imshow(Sy),title('Watermark');
figure(3),imshow(uint8(round(TI))),title('Watermarked');
imwrite(uint8(round(TI)),'Watermarked.bmp');
DetaSave0=Deta;
time1=cputime-time0
figure;
switch pic
    case 1
        subplot(2,2,1),plot (B(1,1:1024), 'DisplayName', 'B(1,1:1024)', 'YDataSource', 'B(1,1:1024)'); 
        subplot(2,2,2),plot (T(1,1:1024), 'DisplayName', 'T(1,1:1024)', 'YDataSource', 'T(1,1:1024)'); 
        subplot(2,2,3),plot (Sita(1,1:1024), 'DisplayName', 'Sita(1,1:1024)', 'YDataSource', 'Sita(1,1:1024)'); 
        subplot(2,2,4),plot (Deta(1,1:1024), 'DisplayName', 'Deta(1,1:1024)', 'YDataSource', 'Deta(1,1:1024)'); 
    case 2
        subplot(2,2,1),plot (B(1,1:1), 'DisplayName', 'B(1,1:1)', 'YDataSource', 'B(1,1:1)'); 
        subplot(2,2,2),plot (T(1,1:1), 'DisplayName', 'T(1,1:1)', 'YDataSource', 'T(1,1:1)'); 
        subplot(2,2,3),plot (Sita(1,1:1), 'DisplayName', 'Sita(1,1:1)', 'YDataSource', 'Sita(1,1:1)'); 
        subplot(2,2,4),plot (Deta(1,1:1), 'DisplayName', 'Deta(1,1:1)', 'YDataSource', 'Deta(1,1:1)'); 
end

%DetaSave0=Deta;

% End on 2006-08-18-12:13