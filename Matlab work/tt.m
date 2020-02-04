
clc;                               % ³õÊ¼»¯
clear;
close all;

I=rgb2gray(imread('len1.jpg'));      % ¶ÁÈëÔ­Ê¼Í¼Ïñ
figure,imshow(I);
[C,S]=wavedec2(I,2,'haar');        % ³ß¶ÈÎª2µÄĞ¡²¨·Ö½â
cA2=appcoef2(C,S,'haar',2);        % ÌáÈ¡cA2·ÖÁ¿
[m,n]=size(cA2);                   % ÌáÈ¡cA2·ÖÁ¿³ß´ç
Num=uint32(m*n);

% ca2=floor(cA2);
% xspj=sum(sum(cA2-ca2))/m/n;        % ¼ÆËãĞ¡²¨ÏµÊıĞ¡Êı²¿·ÖµÄÆ½¾ùÖµxspj

cA2x=cA2;                          % ĞŞ¸ÄcA2ÏµÊı

xgxs=reshape(cA2x,1,m*n);          % ½«ĞŞ¸Ä¹ıµÄcA2ÏµÊıÖØĞÂ×éÖ¯³ÉÒÔÁĞÎªÖ÷ĞòµÄĞÎÊ½
C(1,1:Num)=xgxs;                   % ½«ĞŞ¸Ä¹ıµÄcA2ÏµÊıÌí¼Óµ½Ğ¡²¨·Ö½âÏµÊıÖĞÈ¥
I1=waverec2(C,S,'haar');           % 2Î¬Ğ¡²¨ºÏ³ÉÍ¼Ïñ

TI=uint8(round(I1));
figure,imshow(TI);                 % ÏÔÊ¾ºÏ³ÉµÄÍ¼Ïñ
imwrite(TI,'watermarked.bmp');     % ´æ´¢ÔØÌåÍ¼Ïñ