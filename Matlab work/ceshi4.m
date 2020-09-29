select=1;                       % 选择载体图像
switch select
    case 1
        I=imread('cameraman.tif');     % 原始图象cameraman
    case 2
        I=rgb2gray(imread('50.bmp'));  % 原始图象Lena
    case 3
        I=rgb2gray(imread('tu1.jpg'));     
    case 4
        I=rgb2gray(imread('len1.jpg'));      
    case 5
        I=rgb2gray(imread('8.bmp'));      
    case 6
        I=imread('len1.tif');
    case 7
        I=imread('len1.bmp')
end   
I=im2double(I);
T=dctmtx(8);
B=blkproc(I,[8 8],'P1*x*P2',T,T');
mask=[1 1 1 1 0 0 0 0 
      1 1 1 0 0 0 0 0
      1 1 0 0 0 0 0 0
      1 0 0 0 0 0 0 0
      0	0 0	0 0	0 0	0
      0 0 0 0 0 0 0 0
      0 0 0 0 0 0 0 0
      0 0 0 0 0 0 0 0];
  LH=[16 11 10 16 24 40 51 61;
    12 12 14 19 26 58 60 55;
    14 13 16 24 40 57 69 56;
    14 17 22 29 51 87 80 62;
    18 22 37 56 68 109 103 77;
    24 35 55 64 81 104 113 92;
    49 64 78 87 103 121 120 101;
    72 92 95 98 112 100 103 99];
  B2=blkproc(B,[8 8],'P1.*x',LH);
  I2=blkproc(B2,[8 8],'P1*x*P2',T',T);
  imshow(I)
  figure,imshow(I2)
