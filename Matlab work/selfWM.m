%
% 奇异值分解算法
%
clc;
clear;
close all;

TIME=cputime;
K=12;
x1=imread('len512.bmp');

x2=zeros(516,516);
x2(1:512,1:512)=double(x1);
% imshow(uint8(x2))
[m,n]=size(x2);
M=m/K;
N=n/K;

uu=[];
vv=[];
ss=[];

u1=cell(1,12);
x=[];
v1=cell(1,12);
y=[];

x1=cell(M,N);
y1=cell(M,N);
z1=cell(M,N);


% 
% i=2;
% j=2;
% M=10;
% N=10;
 for i=1:M
     for j=1:N
        X=x2(12*(i-1)+1:12*i,12*(j-1)+1:12*j);
        [U,S,V] = svd(X,0);                                % 奇异值分解 [U S V]
        uu=U(:,1);
        vv=V(:,1);
        ss=S(1,1);

for ii=1:12
    %%%%%%%%% U
    if -0.30<=uu(ii) & uu(ii)<-0.25
        u1{ii}='0';
        elseif -0.35<=uu(ii) & uu(ii)<-0.3
        u1{ii}='10';
        elseif -0.25<=uu(ii) & uu(ii)<-0.2
        u1{ii}='111';
        elseif -0.4<=uu(ii) & uu(ii)<-0.35
        u1{ii}='1100';
        elseif 0.0<=uu(ii) & uu(ii)<-0.05
        u1{ii}='11011';
        elseif -0.2<=uu(ii) & uu(ii)<-0.15
        u1{ii}='110100';
        elseif -0.45<=uu(ii) & uu(ii)<-0.4
        u1{ii}='1101011';
        elseif -0.15<=uu(ii) & uu(ii)<-0.1
        u1{ii}='11010100';
        elseif -0.5<=uu(ii) & uu(ii)<-0.45
        u1{ii}='11010101';
    end
    x=[x u1{ii}];
 
    %%%%%%%%%%  V
    if -0.30<=vv(ii) & vv(ii)<-0.25
        v1{ii}='0';
        elseif  -0.35<=vv(ii) & vv(ii)<-0.3
        v1{ii}='11';
        elseif  -0.35<=vv(ii) & vv(ii)<-0.3
        v1{ii}='101';
         elseif  -0.35<=vv(ii) & vv(ii)<-0.3
        v1{ii}='1001';
         elseif  -0.35<=vv(ii) & vv(ii)<-0.3
        v1{ii}='10000';
         elseif  -0.35<=vv(ii) & vv(ii)<-0.3
        v1{ii}='100011';
         elseif  -0.35<=vv(ii) & vv(ii)<-0.3
        v1{ii}='1000101';
         elseif  -0.35<=vv(ii) & vv(ii)<-0.3
        v1{ii}='10001000';
         elseif  -0.35<=vv(ii) & vv(ii)<-0.3
        v1{ii}='100010010';
         elseif  -0.35<=vv(ii) & vv(ii)<-0.3
        v1{ii}='1000100110';
         elseif  -0.35<=vv(ii) & vv(ii)<-0.3
        v1{ii}='1000100111';
    end
    y=[y v1{ii}];
%        y=v1{ii};
    %%%%%%%%%%%%%%  S
    z=dec2bin(ss);
end


x1{i,j}=x;
y1{i,j}=y;
z1{i,j}=z;
x=[];
y=[];
z=[];
 end
end
for i=1:M
    for j=1:N
        tj1(i,j)=length(x1{i,j});%  U
        tj2(i,j)=length(y1{i,j});%  V
        tj3(i,j)=length(z1{i,j});%  S
    end
end
tjZ=tj1+tj2+tj3;
% x1
% y1
% z1

TIME2=cputime-TIME