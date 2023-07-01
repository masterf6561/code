from threading import *
import threading
import main
import time

def background_thread():
    inputvar = input()
    while(inputvar != "open"):
        print("Input not accepted")
        main_thread(False)
        inputvar = input()
    #print("Im background", inputvar)
    main.mainfunction(inputvar)
    main_thread(True)
    

def main_thread(is_loggedin: bool):
    if not is_loggedin:
        print("LogginScreen is showing")
    else:
        print("UI is visible")
    
if __name__ == "__main__":
    bgthread = Thread(target=background_thread)
    bgthread.start()
    
    main_thread(False)
