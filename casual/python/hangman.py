def get_letter():
    letter = input("Bitte einen Buchstaben eingeben!: ")
    if len(letter) > 1 or len(letter) < 1:
        print("Unluzlässige eingabe!!!")
    letter = letter[0]
    return letter


def get_word():
    word = str(input("geben sie ein Wort ein!: "))
    return word


def check_letter(letter, orig_word):
    return letter in orig_word


def delete_word(word):
    new_word = list("___________________________________________________________________")
    return new_word[:len(word)]


def conv_word(word):
    return list(word)


def draw_word(word, letter, orig_word):
    for i in range(len(orig_word)):
        if letter == orig_word[i]:
            word[i] = letter
    return word


def draw_hangman(state):
    if state == 1:
        print("|\n|\n|\n|\n|\n")
    elif state == 2:
        print("|--------\n|\n|\n|\n|\n")
    elif state == 3:
        print("|--------|\n|        o\n|\n|\n|\n")
    elif state == 4:
        print("|--------|\n|        o\n|        |\n|\n|\n")
    elif state == 5:
        print("|--------|\n|        o\n|       \|\n|\n|\n")
    elif state == 6:
        print("|--------|\n|        o\n|       \|/\n|\n|\n")
    elif state == 7:
        print("|--------|\n|        o\n|       \|/\n|       /\n|\n")
    elif state == 8:
        print("|--------|\n|        o\n|       \|/\n|       / \ \n|\n")


def del_word_to_string(word):
    final = ",".join(str(x) for x in del_word)
    return final.replace(",", "")


hangman_state = 0

word = conv_word(get_word())
orig_word = word
del_word = delete_word(word)

while 1:
    if "_" not in del_word:
        print("Glückwunsch, sie haben gewonnen!!")
        break
    elif hangman_state == 8:
        print("Verloren!")
        break
    else:
        letter = get_letter()
        if check_letter(letter, orig_word):
            del_word = draw_word(del_word, letter, orig_word)
            print(del_word_to_string(del_word))
        else:
            hangman_state = hangman_state + 1
            draw_hangman(hangman_state)


