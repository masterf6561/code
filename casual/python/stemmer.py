sentence = input("enter sentence: ")
word = input("enter word to remove: ")

length = 0

for i in range(len(sentence)):
    if length != len(word):
        for j in range(len(word)):
            if sentence[i] == word[j]:
                if length == 0:
                    beginning = i
                i = i+1
                length = length+1
            else:
                length = 0
    else:
        print(sentence[:beginning-1] + sentence[i+j:])
        break
