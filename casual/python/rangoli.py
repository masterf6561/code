alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

def otherfunction():
    if(3 < 4):
        print("math is working so far")
    elif(3==4):
        print("the indenting is so weird")

mynaname = 13

def print_rangoli(size: int):
    width = (size*4)-3
    for i in range(0, size):
        k=n=0
        print(("-" * ((width//2) - i*2)),end="")
        while(k <= i):
            k+=1
            print(alphabet[size-k], end="")
            if(k <= i+1):
                print("-", end="")
        while(n < i):
            print(alphabet[(size-i)+n], end="")
            if(n < size-2):
                print("-", end="")
            n+=1
        print(("-" * (((width//2) - i*2)-1)))

    for i in reversed(range(0, size-1)):
        k=n=0
        print(("-" * ((width//2) - i*2)),end="")
        while(k <= i):
            k+=1
            print(alphabet[size-k], end="")
            if(k <= i+1):
                print("-", end="")
        while(n < i):
            print(alphabet[(size-i)+n], end="")
            if(n <= i):
                print("-", end="")
            n+=1
        print(("-" * (((width//2) - i*2)-1)))

if __name__ == '__main__':
    n = int(input())
    print_rangoli(n)
    print_rangoli(mynaname)
