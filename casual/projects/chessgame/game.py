#[[None for _ in range(8)] for _ in range(8)]
class chessboard:
    def __init__(self):
        self.layout = [
            ["R", "N", "B", "Q", "K", "B", "N", "R"],
            ["P", "P", "P", "P", "P", "P", "P", "P"],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            ["p", "p", "p", "p", "p", "p", "p", "p"],
            ["r", "n", "b", "q", "k", "b", "n", "r"]
        ]
        self.checkmate = False
        self.moveCount = 0

    def move(self, move, player):
        if(player == "w"):
            if(len(move)== 2):
                move_array = list(move)
                figure = str(move_array[0])
                col = figure.upper()
                col = ord(col) - ord('A')
                row = int(move_array[1])
                self.layout[row][col] = "p"
                self.layout[row][]
            elif(len(move) == 3):
                move_array = list(move)
                figure = str(move_array[0])
                col = str(move_array[1])
                col = col.upper()
                col = ord(col) - ord('A')
                row = int(move_array[2])
                self.layout[row][col] = figure.lower()
            else:
                print("Error, wrong input for move")
        elif(player == "b"):
            if(len(move)== 2):
                move_array = list(move)
                figure = str(move_array[0])
                col = figure.upper()
                col = ord(col) - ord('A')
                row = int(move_array[1])
                self.layout[row][col] = "P"
            elif(len(move) == 3):
                move_array = list(move)
                figure = str(move_array[0])
                col = str(move_array[1])
                col = col.upper()
                col = ord(col) - ord('A')
                row = int(move_array[2])
                self.layout[row][col] = figure.upper()
            else:
                print("Error, wrong input for move")
        else:
            print("ERROR: Player was neither 'w' nor 'b'")
            
    def getMove(self, player):
        if(player == "w"):
            print("Pleaser enter a move (e.g. c6, or Nc4)")
            move = input()
        elif(player == "b"):
            print("Pleaser enter a move (e.g. c6, or Nc4)")
            move = input()
        else:
            print("ERROR: Player was neither 'w' nor 'b'")
        return move
        
    def generateBoard(self):
        for i in range(8):
            for j in range(8):
                print(self.layout[i][j], end="")
                if(j != 7):
                    print("|", end="")
            print("")
            if(i != 7):
                print("---------------")
    
    def checkMove(self, move):
        if(True):
            pass

if __name__ == "__main__":
    Board = chessboard()
    while(not Board.checkmate):
        if(Board.moveCount % 2 == 0):
            player = "w"
        else:
            player = "b"
        Board.generateBoard()
        move = Board.getMove(player)
        Board.move(move, player)
        Board.moveCount += 1
        
    
    
