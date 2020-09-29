

C_20 = [4.6295,19.4599,6.3826,21.4155,5.59,20.888,6.318,21.86,6.5,22.2,7.928,23.65,8.35, 
23.95,8.44,23.822,9.098,24.218,8.218,23.08,7.9,22.6,6.11,20.84 ]

C_21 = [3.87,18.73,5.63,20.646,4.81,20.1,5.52,21.04,5.678,21.37,7.108,22.83, 
7.5,23.13,7.646,23.042,8.318,23.438,7.438,22.36,7.18,21.94,5.4055,20.12]

D = 0.2422
L = 0

j=0

DaysInEveryYear=[]
"year = 2018"
for year in range(1999,2001):
	
	DaysInYear= []
	for i in range(0,24):
		if(year<2000):
			C = C_20[i]
		else:	
			C = C_21[i]
		if i==0 or 1 or 10 or 11:
			day = (year%100*D + C ) //1-  (year%100 - 1)//4
		else:
			day = (year%100*D+C ) //1-  (year%100 )//4	
		day = int(day)	
		if (year==2026) and (i==1):
			day = day - 1
		if (year==2008) and (i==7):	  
			day = day + 1
		if (year==1902) and (i==8):	
			day = day + 1
		if (year==1928) and (i==9):	
			day = day + 1	
		if ((year==1925) or (year==2016))and (i==10):	
			day = day + 1	
		if (year==1922) and (i==10):	
			day = day + 1
		if (year==2002) and (i==12):	
			day = day + 1	
		if (year==1927) and (i==14):	
			day = day + 1		
		if (year==1942) and (i==15):	
			day = day + 1	
		if (year==1978) and (i==19):	
			day = day + 1		
		if (year==1954) and (i==20):	
			day = day + 1	
		if ((year==1918) or(year==2021) )and (i==21):
			day = day - 1	
		if (year==1982) and (i==22):
			day = day + 1
		if (year==2019) and (i==22):
			day = day - 1

		DaysInYear.append(day)

	DaysInEveryYear.append(DaysInYear)

for k in range(0,2):
	print(DaysInEveryYear[k]," \n")		