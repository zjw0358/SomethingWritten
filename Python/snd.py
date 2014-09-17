
import winsound
import os

wav="D:\Program Files\Tencent\QQ\Misc\Sound\Classic\msg.wav"

if(os.path.exists(wav)):
	print('yes')
else:
	print('no')
winsound.PlaySound(wav,winsound.SND_FILENAME)
