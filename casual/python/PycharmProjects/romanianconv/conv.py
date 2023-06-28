dict = {"M": 1000, "D" : 500, "C" : 100, "L" : 50, "X" : 10, "V" : 5, "I" : 1}

input = input("Eingabe: ")
arr = []
sum = 0
i_count = 0
for letter in input:
    arr.append(letter)
arr.append("N")
print(arr)

for i in range(0, len(arr)):
    if arr[i+1] == "N":
        sum = sum + dict[arr[i]]
        print(sum)
        quit()
    else:
        if dict[arr[i]] < dict[arr[i+1]]:
            if arr[i] == "I" and (arr[i+1] != "V" and arr[i+1] != "X"):
                print("Falsche Anordnung1!")
                quit()
            elif arr[i] == "X" and (arr[i + 1] != "L" and arr[i + 1] != "C"):
                print("Falsche Anordnung2!")
                quit()
            elif arr[i] == "C" and (arr[i + 1] != "D" and arr[i + 1] != "M"):
                print("Falsche Anordnung3!")
                quit()
            else:
                sum = sum - dict[arr[i]]
        else:
            sum = sum + dict[arr[i]]
