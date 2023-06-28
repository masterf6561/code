import numpy as np
import sys
import subprocess

# Note that lenght has a max of 18!

if(len(sys.argv) == 3):
    count = int(sys.argv[1])
    lenght = int(sys.argv[2])
else:
    raise Exception("Wrong Input. Please enter Count: INT and Length: INT")

def create_randomborders():
    lower_border = []
    higher_border = []
    lower_border.append(1)
    higher_border.append(9)
    for i in range(1, lenght):
        lower_border.append(0)
    for i in range(1, lenght):
        higher_border.append(9)
    lower_border = int("".join(str(element) for element in lower_border))
    higher_border = int("".join(str(element) for element in higher_border))
    borders = [lower_border, higher_border]
    return borders

def create_randoms(lower_border, higher_border):
    random_numbers = np.random.randint(lower_border, higher_border,size=count)
    return random_numbers.tolist()   

def transmit(random_numbers):
    command = "python3 hello.py"
    process = subprocess.Popen(command, shell=True, stdin=subprocess.PIPE)
    for value in random_numbers:
        print(value)
        process.stdin.write(bytes(str(value) + "\n", "utf-8"))
    process.stdin.close()
    process.wait()

if __name__ == "__main__":
    borders = create_randomborders()
    random_numbers = create_randoms(borders[0], borders[1])
    transmit(random_numbers)
