from threading import *
import tkinter as tk
import os
import time


"""
def unused_Function():
    print("Im a feature")
    or am I?

    var = "im so efficient"
    #var isnt even right in python lmao
"""

#writing some comments to document the code
def background_task(name):
    for letter in name:
        print(letter.upper(), end="")
    print("")
    for i in range(3):
        print(name)
        time.sleep(1)

#main function
if __name__ == "__main__":
    names = [
        "spotify",
        "discord",
        "chrome",
        "steam",
        "teamspeak",
        "firefox",
        "obs"
    ]
    threads = []
    
    for name in names:
        thread = Thread(target=background_task, args=(name,))
        threads.append(thread)
    
    for thread in threads:
        thread.setDaemon(True)
        thread.start()
    for thread in threads:
        thread.join()
        
    for i in range(3):
        print("mainthread")
