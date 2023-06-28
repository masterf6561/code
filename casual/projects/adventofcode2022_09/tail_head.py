import time
from re import split

class rope:
    def __init__(self, x, y):
        self.x  = x 
        self.y = y
    
    def move(self, direction, steps):
        if(direction == "R"):
            self.x += int(steps)
        elif(direction == "L"):     
            self.x -= int(steps)
        elif(direction == "U"):
            self.y -= int(steps)     
        elif(direction == "D"):
            self.y += int(steps)
        else:
            raise Exception("Direction is wrong")
            
    def getPosition(self):
        position = [self.x, self.y]
        return position

def getMoves():
    file = open('./moves.txt')
    line = file.readline()
    while line:
        moves.append(line[:-1])
        line = file.readline()
    file.close()

def generateBoard(size_x, size_y):
    for i in range(0, size_y):
        for j in range(0, size_x):
            if(i == head.y and j == head.x):
                print("H", end="")
            elif(i == tail.y and j == tail.x):
                print("T", end="")
            else:
                print(".", end="")
        print("")
    print("-------------------")

def executeMoves(move, head, tail, visitedTiles):
    direction, steps = split(" ", move)
    for i in range(int(steps)):
        head.move(direction, 1)
        tail_follows(head, tail)
        # generateBoard(50, 20)
        calcTailtiles(visitedTiles)
        # time.sleep(1)

def tail_follows(head, tail):
    dx = head.x - tail.x 
    dy = head.y - tail.y
    if(dx > 1 and (dy == 1 or dy > 1)):
        tail.move("D", 1)
        tail.move("R", 1)
    elif(dx < -1 and (dy == -1 or dy < -1)):
        tail.move("U", 1)
        tail.move("L", 1)
    elif(dx < -1 and (dy == 1 or dy > 1)):
        tail.move("D", 1)
        tail.move("L", 1)
    elif((dx == 1 or dx > 1) and dy < -1):
        tail.move("R", 1)
        tail.move("U", 1)
    elif(dx > 1):
        tail.move("R", 1)
    elif(dx < -1):
        tail.move("L", 1)
    elif(dy > 1):
        tail.move("D", 1)
    elif(dy < -1):
        tail.move("U", 1)

def calcTailtiles(visitedTiles):
    currentTile = [tail.x, tail.y]
    if(currentTile not in visitedTiles):
        visitedTiles.append(currentTile)

if __name__ == "__main__":
    moves = []
    getMoves()
    visitedTiles = []
    tail = rope(10, 10)
    head = rope(10, 10)
    for i in range(len(moves)):
        executeMoves(moves[i], head, tail, visitedTiles)
    for tile in visitedTiles:
        print(tile) 
    # print(len(visitedTiles))
