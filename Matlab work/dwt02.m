% 分析具体图像的DwT系数之间的关系 
turn=1;
switch turn
    case 1
        X8=imread('cameraman.tif');
    case 2
        X8=imread('8.bmp');
    case 3
        X8=imread('9.bmp');
    case 4
        X8=imread('10.bmp');
    case 5
        X8=imread('41.bmp');
    case 6
        X8=imread('42.bmp');
end
figure,imshow(X8);
if isgray(X8)
    x8=X8;
else
    x8=rgb2gray(X8);
end
figure,imshow(x8);
figure;
k=1
for i=1:4
    for j=1:4
        tmp=x8(((i-1)*64+1):(i*64),((j-1)*64+1):(j*64));
        subplot(4,4,k),imshow(tmp);
        switch k
            case 1  
                [y801A,y801H,y801V,y801D]=dwt2(tmp,'haar');
                a1=sum(sum(abs(y801A)));
                A1=sum(sum(y801A));
                h1=sum(sum(abs(y801H)));
                H1=sum(sum(y801H));
                v1=sum(sum(abs(y801V)));
                V1=sum(sum(y801V));
                d1=sum(sum(abs(y801D)));
                D1=sum(sum(y801D));
                t1=(h1+v1+d1)/3
            case 2  
                [y802A,y802H,y802V,y802D]=dwt2(tmp,'haar');
                a2=sum(sum(abs(y802A)));
                A2=sum(sum(y802A));
                h2=sum(sum(abs(y802H)));
                H2=sum(sum(y802H));
                v2=sum(sum(abs(y802V)));
                V2=sum(sum(y802V));
                d2=sum(sum(abs(y802D)));
                D2=sum(sum(y802D));
                t2=(h2+v2+d2)/3
            case 3  
                [y803A,y803H,y803V,y803D]=dwt2(tmp,'haar');
                a3=sum(sum(abs(y803A)));
                A3=sum(sum(y803A));
                h3=sum(sum(abs(y803H)));
                H3=sum(sum(y803H));
                v3=sum(sum(abs(y803V)));
                V3=sum(sum(y803V));
                d3=sum(sum(abs(y803D)));
                D3=sum(sum(y803D));
                t3=(h3+v3+d3)/3
            case 4  
                [y804A,y804H,y804V,y804D]=dwt2(tmp,'haar');
                a4=sum(sum(abs(y804A)));
                A4=sum(sum(y804A));
                h4=sum(sum(abs(y804H)));
                H4=sum(sum(y804H));
                v4=sum(sum(abs(y804V)));
                V4=sum(sum(y804V));
                d4=sum(sum(abs(y804D)));
                D4=sum(sum(y804D));
                t4=(h4+v4+d4)/3
            case 5  
                [y805A,y805H,y805V,y805D]=dwt2(tmp,'haar');
                a5=sum(sum(abs(y805A)));
                A5=sum(sum(y805A));
                h5=sum(sum(abs(y805H)));
                H5=sum(sum(y805H));
                v5=sum(sum(abs(y805V)));
                V5=sum(sum(y801V));
                d5=sum(sum(abs(y805D)));
                D5=sum(sum(y805D));
                t5=(h5+v5+d5)/3
            case 6  
                [y806A,y806H,y806V,y806D]=dwt2(tmp,'haar');
                a6=sum(sum(abs(y806A)));
                A6=sum(sum(y806A));
                h6=sum(sum(abs(y806H)));
                H6=sum(sum(y806H));
                v6=sum(sum(abs(y806V)));
                V6=sum(sum(y806V));
                d6=sum(sum(abs(y806D)));
                D6=sum(sum(y806D));
                t6=(h6+v6+d6)/3
            case 7  
                [y807A,y807H,y807V,y807D]=dwt2(tmp,'haar');
                a7=sum(sum(abs(y807A)));
                A7=sum(sum(y807A));
                h7=sum(sum(abs(y807H)));
                H7=sum(sum(y807H));
                v7=sum(sum(abs(y807V)));
                V7=sum(sum(y807V));
                d7=sum(sum(abs(y807D)));
                D7=sum(sum(y807D));
                t7=(h7+v7+d7)/3
            case 8  
                [y808A,y808H,y808V,y808D]=dwt2(tmp,'haar');
                a8=sum(sum(abs(y808A)));
                A8=sum(sum(y808A));
                h8=sum(sum(abs(y808H)));
                H8=sum(sum(y808H));
                v8=sum(sum(abs(y808V)));
                V8=sum(sum(y808V));
                d8=sum(sum(abs(y808D)));
                D8=sum(sum(y808D));
                t8=(h8+v8+d8)/3
            case 9  
                [y809A,y809H,y809V,y809D]=dwt2(tmp,'haar');
                a9=sum(sum(abs(y809A)));
                A9=sum(sum(y809A));
                h9=sum(sum(abs(y809H)));
                H9=sum(sum(y809H));
                v9=sum(sum(abs(y809V)));
                V9=sum(sum(y809V));
                d9=sum(sum(abs(y809D)));
                D9=sum(sum(y809D));
                t9=(h9+v9+d9)/3
            case 10 
                [y810A,y810H,y810V,y810D]=dwt2(tmp,'haar');
                a10=sum(sum(abs(y810A)));
                A10=sum(sum(y810A));
                h10=sum(sum(abs(y810H)));
                H10=sum(sum(y810H));
                v10=sum(sum(abs(y810V)));
                V10=sum(sum(y810V));
                d10=sum(sum(abs(y810D)));
                D10=sum(sum(y810D));
                t10=(h10+v10+d10)/3
            case 11 
                [y811A,y811H,y811V,y811D]=dwt2(tmp,'haar');
                a11=sum(sum(abs(y811A)));
                A11=sum(sum(y811A));
                h11=sum(sum(abs(y811H)));
                H11=sum(sum(y811H));
                v11=sum(sum(abs(y811V)));
                V11=sum(sum(y811V));
                d11=sum(sum(abs(y811D)));
                D11=sum(sum(y811D));
                t11=(h11+v11+d11)/3
            case 12 
                [y812A,y812H,y812V,y812D]=dwt2(tmp,'haar');
                a12=sum(sum(abs(y812A)));
                A12=sum(sum(y812A));
                h12=sum(sum(abs(y812H)));
                H12=sum(sum(y812H));
                v12=sum(sum(abs(y812V)));
                V12=sum(sum(y812V));
                d12=sum(sum(abs(y812D)));
                D12=sum(sum(y812D));
                t12=(h12+v12+d12)/3
            case 13 
                [y813A,y813H,y813V,y813D]=dwt2(tmp,'haar');
                a13=sum(sum(abs(y813A)));
                A13=sum(sum(y813A));
                h13=sum(sum(abs(y813H)));
                H13=sum(sum(y813H));
                v13=sum(sum(abs(y813V)));
                V13=sum(sum(y813V));
                d13=sum(sum(abs(y813D)));
                D13=sum(sum(y813D));
                t13=(h13+v13+d13)/3
            case 14 
                [y814A,y814H,y814V,y814D]=dwt2(tmp,'haar');
                a14=sum(sum(abs(y814A)));
                A14=sum(sum(y814A));
                h14=sum(sum(abs(y814H)));
                H14=sum(sum(y814H));
                v14=sum(sum(abs(y814V)));
                V14=sum(sum(y814V));
                d14=sum(sum(abs(y814D)));
                D14=sum(sum(y814D));
                t14=(h14+v14+d14)/3
            case 15 
                [y815A,y815H,y815V,y815D]=dwt2(tmp,'haar');
                a15=sum(sum(abs(y815A)));
                A15=sum(sum(y815A));
                h15=sum(sum(abs(y815H)));
                H15=sum(sum(y815H));
                v15=sum(sum(abs(y815V)));
                V15=sum(sum(y815V));
                d15=sum(sum(abs(y815D)));
                D15=sum(sum(y815D));
                t15=(h15+v15+d15)/3
            case 16 
                [y816A,y816H,y816V,y816D]=dwt2(tmp,'haar');
                a16=sum(sum(abs(y816A)));
                A16=sum(sum(y816A));
                h16=sum(sum(abs(y816H)));
                H16=sum(sum(y816H));
                v16=sum(sum(abs(y816V)));
                V16=sum(sum(y816V));
                d16=sum(sum(abs(y816D)));
                D16=sum(sum(y816D));
                t16=(h16+v16+d16)/3
        end
        k=k+1;
    end
end