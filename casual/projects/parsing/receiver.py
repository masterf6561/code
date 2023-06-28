import sys

values = []
i = 1
for value in sys.stdin:
    values.append(value[:-1])
    print("Received value Nr.", i, ":", value[:-1])
    i+=1

