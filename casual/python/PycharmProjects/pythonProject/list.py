import random
import linecache

operation = input("Was möchten sie tun?: ")

#Befehle:
nothing = "nothing"                                     #zum Beenden des Programms
add = "add"                                             #add <Movie name> zum hinzufügen
rm = "remove"                                           #remove <Movie name> zum entfernen
show = "show"                                           #zeigt die liste
check_movie = "check"                                   #check <Movie name> um zu überprüfen ob der film bereits auf der liste ist
random_instr = "random"                                 #gibt einen zufälligen Film aus

file = "list.txt"

while operation != nothing:
    check_sum = 0                                       #check values damit die Befehle trotz dauerschleife nur ein mal ausgeführt werden
    shown_check = 0
    shown = 0
    num_lines = 0
    rand_num = 0
    rand_count = 0

    check_space = operation.find(" ")                   #wenn wörter ohne Leerzeichen übergeben werden wird eins hinzugefügt damit es nicht zu einer fehlermeldung kommt
    if check_space == -1:
        operation = operation + " "

    operation_separated = operation.split(" ", 1)       #trennt den Befehl vom film namen
    instr = operation_separated[0]
    movie = operation_separated[1]

    if instr == add:                                    #wenn hinzugefügt werden soll:
        with open(file, "a") as list:                   #öffne die Datei zum dazuschreiben
            list.write(movie + "\n")                    #schreibe Film dazu und springe in neue zeile
            print(movie + " wurde hinzugefügt")         #gib bestätigung aus
        operation = input("Was möchten sie tun?: ")     #frage erneut nach Befehl

    elif instr == rm:                                   #wenn entfernt werden solll:
        with open(file, "r") as list:                   #öffne die Datei zum lesen
            lines = list.readlines()                    #lies die Zeilen ein
        with open(file, "w") as list:                   #öffne die Datei zum schreiben
            for line in lines:
                if line.strip("\n") != movie:           #kontrolliere jede Zeile nach Übereinstimmung mit dem Film Namen der gelöscht werden soll
                    list.write(line)                    #schreibe zeile wieder dazu wenn sie nicht übereinstimmt, dadurch wird die die übereinstimmt gelöscht
        print(movie + " wurde entfernt")                #gibt Bestätigung aus
        operation = input("Was möchten sie tun?: ")     #frage erneut nach Befehl

    elif instr == show and shown == 0:                  #wenn gezeigt werden soll:
        with open(file, "r") as list:                   #öffne die Datei zum lesen
            shown = 1                                   #setze den "gezeigt" check value auf 1 damit er nicht dauerhaft ausgibt
            for line in list:
                print(line, end="")                     #gib die Zeile aus
        operation = input("Was möchten sie tun?: ")     #frage erneut nach Befehl

    elif instr == check_movie:                          #wenn kontrolliert werden soll:
        with open(file, "r") as list:                   #öffne die Datei zum lesen
            lines = list.readlines()                    #lies die Zeilen ein
            for line in lines:
                if line.strip("\n") == movie:           #kontrolliere für jede Zeile die Übereinstimmung
                    check_sum = 1                       #bei Übereinstimmung wird der check_value auf 1 gesetzt
        if check_sum == 1 and shown_check == 0:         #bei Übereinstimmung:
            print(movie + " ist vorhanden")             #gib Bestätigung aus
            shown_check = 1                             #setze check_value auf 1 damit ausgabe nur einmal ausgeführt wird
            operation = input("Was möchten sie tun?: ") #frage erneut nach Befehl

        elif check_sum == 0 and shown_check == 0:       #wenn keine Übereinstimmung:
            print(movie + " ist nicht vorhanden")       #gib Bestätigung aus
            shown_check = 1                             #setze check_value auf 1 damit ausgabe nur einmal ausgeführt wird
            operation = input("Was möchten sie tun?: ") #frage erneut nach Befehl

    elif instr == random_instr and rand_count == 0:     #wenn random ausgegeben werden soll:
        with open(file, "r") as list:                   #öffne die Datei zum lesen
            for num_lines, line in enumerate(list):         #zähle die Zeilen
                pass
        rand_num = random.randrange(1, num_lines + 1)   #erstelle zufällige zahl zwischen null und der anzahl der Zeilen
        line = linecache.getline(file, rand_num)        #lies die zufällige Zeile ein
        print(line.strip("\n"))                         #gib die Zeile aus
        operation = input("Was möchten sie tun?: ")     #frage erneut nach Befehl

    else:                                               #in allen anderen Fällen:
        print("Ungültige Eingabe!")                     #gib Fehlermeldung aus
        operation = input("Was möchten sie tun?: ")     #frage erneut nach Befehl