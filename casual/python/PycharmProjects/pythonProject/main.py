import time

operation = input("Hinzufügen oder entfernen?: ")

num = 0
zu = "add"
ent = "remove"
keinen = "none"
done = "done"
show = "show"

if operation == zu:
    while operation != ent:
        with open("list.txt", "a") as list:
            movie_add = input("Welchen Film möchten sie hinzufügen?: ")
            if movie_add == keinen:
                break
            elif movie_add == ent:
                print("Zum Entfernen bitte neustarten!")
            elif movie_add == show:
                print("Zum Zeigen bitte neustarten!")
            else:
                list.write(movie_add + "\n")
elif operation == ent:
    while operation != zu:
        movie_rm = input("Welchen Film möchten sie entfernen?: ")
        if movie_rm == keinen:
            break
        elif movie_rm == zu:
            print("Zum Hinzufügen bitte neustarten!")
        elif movie_rm == show:
            print("Zum Zeigen bitte neustarten!")
        else:
            with open("list.txt", "r") as list:
                lines = list.readlines()
            with open("list.txt", "w") as list:
                for line in lines:
                    if line.strip("\n") != movie_rm:
                        list.write(line)

elif operation == show:
    with open("list.txt", "r") as list:
        for line in list:
            print(line, end="")


    time.sleep(2)
else:
    print("Ungültige Operation!")