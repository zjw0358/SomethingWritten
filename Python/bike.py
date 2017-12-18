# -*- coding: gbk 


Nine_wheel = [11,12,14,16,18,21,24,28,32]

Eight_wheel = [11,13,15,18,21,24,28,32]

Crankset_30 = 30
Crankset_34 = 34
Crankset_39 = 39
Crankset_42 = 42
Crankset_48 = 48
Crankset_47 = 47
Crankset_46 = 46
Crankset_50 = 50
Crankset_53 = 53
Wheel_size_18 = 18
Wheel_size_16 = 16
Wheel_size_20 = 20

print("Crankset_50 vs 11-32t for 9")
for i in Nine_wheel:
	print(round(Crankset_50/i,3))

print("Crankset_34 vs 11-32t for 9")
for i in Nine_wheel:
	print(round(Crankset_34/i,3))

print("Crankset_53 vs 11-32t for 9")
for i in Nine_wheel:
	print(round(Crankset_53/i,3))

print("Crankset_39 vs 11-32t for 9")
for i in Nine_wheel:
	print(round(Crankset_39/i,3))

print("Crankset_42 vs 11-32t for 9")
for i in Nine_wheel:
	print(round(Crankset_42/i,3))

print("Crankset_30 vs 11-32t for 9")
for i in Nine_wheel:
	print(round(Crankset_30/i,3))

#print("Crankset_47 vs 11-32t for 9")
#for i in Nine_wheel:
#	print(round(Crankset_47/i,3))



#print("Crankset_39 vs 11-32t for 8")
#for i in Eight_wheel:
#	print(round(Crankset_39/i,3))

#print("Crankset_46 vs 11-32t")
#for i in Eight_wheel:
#	print(round(Crankset_46/i*Wheel_size_16,2))	
