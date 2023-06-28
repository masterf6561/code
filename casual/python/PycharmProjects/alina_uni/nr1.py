import re

file = open("text.txt", "r")
lines = file.readlines()

indices_obj = re.finditer(pattern=lines[1], string=lines[0])
out = [index.start() for index in indices_obj]

print(out)
    
file.close()
