import sys
from subprocess import call 
from glob import glob
import os.path
from os import path

img_type = ['png', 'jpg', 'jpeg']

def getFolders(path):
     return (os.listdir(path) if os.listdir(path) else None)

os.chdir(f"{os.getcwd()}/flags")
filtered_files = filter(lambda refFile: refFile.split('.')[1] in img_type, os.listdir())
for file_name in filtered_files:
     os.system(f"cwebp -q 90 {file_name} -o {file_name.split('.')[0]}.webp")
     os.system(f"rm -f {file_name}")