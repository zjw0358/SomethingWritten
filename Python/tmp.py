import shutil
import os
import glob

target_tree="c:\\windows\\winConfigs\\alg"
mk_dir="mkdir c:\\windows\\winConfigs\\alg"


os.system(mk_dir)

for files in glob.glob(os.getcwd()+"\\alg\\*.*"):
	shutil.copy(files,target_tree)
