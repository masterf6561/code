def print_rangoli(size):
    # your code goes here
    len_size = len(rangoli(0,size))
    
    parag = []
    parag_rev = []
    
    for i in range(0,size):
        l = rangoli(i,size)
        parag.append(l.center(len_size,"-"))
    
    parag_rev = [parag[len(parag) - i]
            for i in range(1, len(parag)+1)]
    
    for i in range(len(parag_rev)-1):
        print(parag_rev[i])
    
    for i in range(len(parag)):
        print(parag[i])
    
def rangoli(begin,size):
    ascii_lowercase = 'abcdefghijklmnopqrstuvwxyz'
    
    lin1 = ""
    lin2 = ""
    
    for i in range(begin,size):
        l = ascii_lowercase[i]
        lin2 += l + " "
        
    lin1 = lin2[:0:-1]
    lin = lin1+lin2
    lin = lin.strip()
    lin = lin.replace(" ","-")
    return lin

if __name__ == '__main__':
    n = int(input())
    print_rangoli(n)