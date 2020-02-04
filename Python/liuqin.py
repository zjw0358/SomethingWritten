def transform2LiuQin(gong5x,yao5x):
	liu6=['父母','子孙','官鬼','妻财','兄弟',]
	gong=['水','火','木','金','土']

	if     (gong5x,yao5x)==(gong[0],gong[0]):  #### 水 水 		
		return liu6[4]
	elif (gong5x,yao5x)==(gong[0],gong[1]): #  '水','火',
		return liu6[3]
	elif (gong5x,yao5x)==(gong[0],gong[2]): #  '水','木',
		return liu6[1]	
	elif (gong5x,yao5x)==(gong[0],gong[3]): #  '水','金',
		return liu6[0]
	elif (gong5x,yao5x)==(gong[0],gong[4]): #  '水','土',
		return liu6[2]	
	elif  (gong5x,yao5x)==(gong[1],gong[0]):  ####  火 水 		!!!
		return liu6[2]
	elif (gong5x,yao5x)==(gong[1],gong[1]): #  '火','火',
		return liu6[4]
	elif (gong5x,yao5x)==(gong[1],gong[2]): #  '火','木',
		return liu6[0]	
	elif (gong5x,yao5x)==(gong[1],gong[3]): #  '火','金',
		return liu6[3]
	elif (gong5x,yao5x)==(gong[1],gong[4]): #  '火','土',
		return liu6[1]
	elif  (gong5x,yao5x)==(gong[2],gong[0]):  ####  木 水 		
		return liu6[0]
	elif (gong5x,yao5x)==(gong[2],gong[1]): #  '木','火',
		return liu6[1]
	elif (gong5x,yao5x)==(gong[2],gong[2]): #  '木','木',
		return liu6[4]	
	elif (gong5x,yao5x)==(gong[2],gong[3]): #  '木','金',
		return liu6[2]
	elif (gong5x,yao5x)==(gong[2],gong[4]): #  '木','土',
		return liu6[3]	
	elif  (gong5x,yao5x)==(gong[3],gong[0]):  ####  金 水 		
		return liu6[1]
	elif (gong5x,yao5x)==(gong[3],gong[1]): #  '金','火',
		return liu6[2]
	elif (gong5x,yao5x)==(gong[3],gong[2]): #  '金','木',
		return liu6[3]	
	elif (gong5x,yao5x)==(gong[3],gong[3]): #  '金','金',
		return liu6[4]
	elif (gong5x,yao5x)==(gong[3],gong[4]): #  '金','土',
		return liu6[0]	
	elif  (gong5x,yao5x)==(gong[4],gong[0]):  ####  土 水 		
		return liu6[3]
	elif (gong5x,yao5x)==(gong[4],gong[1]): #  '土','火',
		return liu6[0]
	elif (gong5x,yao5x)==(gong[4],gong[2]): #  '土','木',
		return liu6[2]	
	elif (gong5x,yao5x)==(gong[4],gong[3]): #  '土','金',
		return liu6[1]
	elif (gong5x,yao5x)==(gong[4],gong[4]): #  '土','土',
		return liu6[4]

 

'乾','震','坎','艮',
'坤','巽','离','兑'



gua64wuxing=[
'金', '土', '水', '火', '土', '火', '水','土',
'木', '土', '土', '金', '火', '金', '金','木',
'木', '木', '土', '金', '木', '土', '金','土',
'木', '土', '木', '木', '水', '火', '金','木',
'金', '土', '金', '水', '木', '土', '金','木',
'土', '木', '土', '金', '金', '木', '金','木',
'水', '火', '木', '土', '土', '金', '水','火',
'木', '金', '火', '水', '土', '金', '水','火'
]


dizhi5_dict={
'子':'水',
'丑':'土',
'寅':'木', 
'卯':'木',
'辰':'土',
'巳':'火',
'午':'火',
'未':'土',
'申':'金',
'酉':'金',
'戌':'土',
'亥':'水'	
}

SixFourGua=[
['乾','乾'], ['坤','坤'], ['坎','震'], ['艮','坎'], ['坎','乾'], ['乾','坎'], ['坤','坎'],['坎','坤'],
['巽','乾'], ['乾','兑'], ['坤','乾'], ['乾','坤'], ['乾','离'], ['离','乾'], ['坤','艮'],['震','坤'],
['兑','震'], ['艮','巽'], ['坤','兑'], ['巽','坤'], ['离','震'], ['艮','离'], ['艮','坤'],['坤','震'],
['乾','震'], ['艮','乾'], ['艮','震'], ['兑','巽'], ['坎','坎'], ['离','离'], ['兑','艮'],['震','巽'],
['乾','艮'], ['震','乾'], ['离','坤'], ['坤','离'], ['巽','离'], ['离','兑'], ['坎','艮'],['震','坎'],
['艮','兑'], ['巽','震'], ['兑','乾'], ['乾','巽'], ['兑','坤'], ['坤','巽'], ['兑','坎'],['坎','巽'],
['兑','离'], ['离','巽'], ['震','震'], ['艮','艮'], ['巽','艮'], ['震','兑'], ['震','离'],['离','艮'],
['巽','巽'], ['兑','兑'], ['巽','坎'], ['坎','兑'], ['巽','兑'], ['震','艮'], ['坎','离'],['离','坎']
]

liuqin=[]
str_liuqin=[]
bagua=['乾','震','坎','艮','坤','巽','离','兑']

Updict={
'乾':['甲辰','甲寅','甲子'],	
#'乾':['壬戌','壬申','壬午'],  # After dong zhi
'震':['庚戌','庚申','庚午'],
'坎':['戊子','戊戌','戊申'],
'艮':['丙寅','丙子','丙戌'],

'坤':['乙卯','乙巳','乙未'], #'坤':['癸酉','癸亥','癸丑'],# After dong zhi
'巽':['辛卯','辛巳','辛未'],
'离':['己巳','己未','己酉'],
'兑':['丁未','丁酉','丁亥'],

}

Downdict={
'乾':['壬戌','壬申','壬午'],  
#'乾':['甲辰','甲寅','甲子'],# After dong zhi
'震':['庚辰','庚寅','庚子'],
'坎':['戊午','戊辰','戊寅'],
'艮':['丙申','丙午','丙辰'],

#'坤':['乙卯','乙巳','乙未'],# After dong zhi
'坤':['癸酉','癸亥','癸丑'],
'巽':['辛酉','辛亥','辛丑'],
'离':['己亥','己丑','己卯'],
'兑':['丁丑','丁卯','丁巳'],
}




for i in range(64):
	liuqin1 = Updict[SixFourGua[i][0]]
	liuqin2 = Downdict[SixFourGua[i][1]]
	lq = liuqin1 + liuqin2
	liuqin.append(lq)


#print(dizhi5_dict[liuqin[0][0][1]])

listLiuQin=[]

for i in range(64):
	AguaLiuQin=[]
	for j in range(6):
		#print(dizhi5_dict[liuqin[i][j][1]])	
		#print('got '+ transform2LiuQin(gua64wuxing[i],dizhi5_dict[liuqin[i][j][1]]) + liuqin[i][j] + dizhi5_dict[liuqin[i][j][1]])
		gualiuqin = transform2LiuQin(gua64wuxing[i],dizhi5_dict[liuqin[i][j][1]]) + liuqin[i][j] + dizhi5_dict[liuqin[i][j][1]]
		AguaLiuQin.append(gualiuqin)
	listLiuQin.append(AguaLiuQin)

#print('['+",".join(liuqin[0]) + '],')
with open("NaJia_yimao.txt","w") as f:
	for i in range(64):
		f.write("[\'"+"\',\'".join(listLiuQin[i]) + "'],"+'\n')

#print(listLiuQin[0])


#print(transform2LiuQin('火','火'))
#print(listLiuQin)
#test = 	'['+",".join(liuqin[0]) + '],'
#print('['+",".join(liuqin[0]) + '],')
#with open("NaJia.txt","w") as f:
#	for i in range(64):
#		f.write('['+",".join(liuqin[i]) + '],'+'\n')


