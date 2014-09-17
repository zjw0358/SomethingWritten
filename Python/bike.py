# -*- coding: gbk 

PI = 3.1415	# 圆周率
Trans = 0.0254 	# 换算率
Wheel_size = 20	# 轮径
Crankset = 50	# 牙盘齿数
Fly_wheel = 39	# 飞轮齿数
Distance = 0  	# 走距 

Distance = Crankset/Fly_wheel * PI * Wheel_size * Trans
print (Distance)
