function xn=IDFT(Xk,N)    %求傅立叶变换，摘自《MATLAB辅助现代工程数字信号处理》，与文件DFT成对
n=[0:N-1];
k=n;
Wn=exp(-j*2*pi/N);
nk=n'*k;
Wnnk=Wn.^(-nk);
xn=Xk*Wnnk/N;