def print_formatted(number):
    """ for i in range(1,number+1):
        #print(str(i) + "   " + oct(i).upper().lstrip("0O").rjust(width, " ") + hex(i).upper().lstrip("0X").rjust(width, " ") + bin(i).lstrip("0b").rjust(width - len(bin(i)), " "))
        string = '{:>{width}}  {:>{width1}}  {:>{width1}}  {:>{width2}}'.format(str(i), oct(i).upper().lstrip("0O"), hex(i).upper().lstrip("0X"), bin(i).lstrip("0b"), width = len(bin(number).lstrip("0b")), width1 = len(bin(number).lstrip("0b"))-1, width2 = int(len(bin(number).lstrip("0b"))) -1)
        print(string) """

    width = len(bin(number)) - 2

    for n in range(1, number+1):
        deci = str(n).rjust(width)
        octo = str(oct(n)[2:]).rjust(width)
        hexa = str(hex(n)[2:]).upper().rjust(width)
        bina = str(bin(n)[2:]).rjust(width)

        print(f'{deci} {octo} {hexa} {bina}')

if __name__ == '__main__':
    n = int(input())
    print_formatted(n)