% 滤波器 
% fspecial('type',parameters)
% 'type' 滤波器类型 'parameters'进一步定义制定的滤波器
% 高斯低通滤波器 fspecial('gaussian',[r,c],sig).
% 一个大小为r*c的高斯低通滤波器，标准偏差为sig(正)。默认值为3*3和0.5。若有一个数来代替[r,c],则表示方形滤波器。
f=imread('f.bmp');
w=fspecial('gaussian');
g=imfilter(f,w,'replicate');   
% 边界选项 
% 'replicate'图形大小通过复制边界的值来扩展。
% 'symmetric'图形大小通过镜像反射其边界来扩展。
% 'circular' 图形大小通过将图像看成一个二维周期函数的一个周期来扩展。
% P          输入图像的边界通过用值P(无引号)来填充扩展。P的默认值为0。
figure,imshow(f,[]);
figure,imshow(g,[]);