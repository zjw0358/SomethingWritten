long code(BYTE* pData0,long size0,BYTE* pData1)
{
    BYTE pix0,pix1;
    BYTE Count=0;
    BYTE* pIndex=pData1;
    pix0=pData0[0];

    for(long i=0;i<size0;i++)
    {
        Count++;
        pix1=pData0[i];
        if(pix1!=pix0)
        {
            *pIndex=Count-1;
            pIndex++;
            *pIndex=pix0;
            pIndex++;
            pix0=pix1;
            Count=1;
        }
        if(Count==255)
        {
            *pIndex=Count;
            pIndex++;
            *pIndex=pix0;
            pIndex++;
            pix0=pix1;
            Count=0;
        }
    }
    *pIndex=Count-1;
    pIndex++;
    *pIndex=pix0;

    return (1+pIndex-pData1);
}