long decode(BYTE* pData0,long size0,BYTE* pData1)
{
    BYTE pix;
    BYTE Count=0;
    BYTE* pIndex=pData1;

    for(long i=0;i<size0;i+=2)
    {
        Count=pData0[i];
        pix=pData0[i+1];
        for(BYTE j=0;j<Count;j++)
        {
            *pIndex=pix;
            pIndex++;
        }
    }

    return (1+pIndex-pData1);
}