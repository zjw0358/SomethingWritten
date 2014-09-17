

road_km=float(input('Plz input Km:'))
fees = 0

if road_km>15:
	fees=(road_km-1.5)*2.4+6
	fees=fees+fees*0.3
else:
	fees=(road_km-1.5)*2.4+6

print(fees, 'Yuan')

for x in range(10):
	print(x)
