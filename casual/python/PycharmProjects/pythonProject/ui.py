import tkinter as tk
from tkinter.filedialog import askopenfile
file = "list.txt"

root = tk.Tk()


canvas = tk.Canvas(root, width=700, height=500, bg= "#C0C0C0")
canvas.grid(columnspan=3, rowspan=7)

#create Lables
instructions = tk.Label(root, text= "Was möchten sie tun?", font="Raleway", bg= "#C0C0C0")
instructions.grid(columnspan=3, column=0, row=0)

in_label = tk.Label(root, text= "Eingabe des Films:", font="Raleway", bg= "#C0C0C0")
in_label.grid(column=1,row=5)

out_label = tk.Label(root, text= "Ausgabe:", font="Raleway", bg= "#C0C0C0")
out_label.grid(column=1,row=3)

#define functions

def write_to_list():
    movie = input_field.get()
    with open(file, "a") as list:                   # öffne die Datei zum dazuschreiben
        list.write(movie + "\n")                    # schreibe Film dazu und springe in neue zeile
        out_field.insert(1.0, movie + " wurde hinzugefügt!\n")        # gib bestätigung aus


def remove_from_list():
    movie = input_field.get()
    with open(file, "r") as list:                   # öffne die Datei zum lesen
        lines = list.readlines()                    # lies die Zeilen ein
    with open(file, "w") as list:                   # öffne die Datei zum schreiben
        for line in lines:
            if line.strip("\n") != movie:           # kontrolliere jede Zeile nach Übereinstimmung mit dem Film Namen der gelöscht werden soll
                list.write(line)#
    out_field.insert(1.0, movie + " wurde entfernt!\n")

def check_list():
    movie = input_field.get()
    with open(file, "r") as list:                   # öffne die Datei zum lesen
        check_sum = 0
        lines = list.readlines()                    # lies die Zeilen ein
        for line in lines:
            if line.strip("\n") == movie:           # kontrolliere für jede Zeile die Übereinstimmung
                check_sum = 1
        if check_sum == 1:
            out_field.insert(1.0, movie + " ist vorhanden!\n")
        else:
            out_field.insert(1.0, movie + " ist nicht vorhanden!\n")

def show_list():
    with open(file, "r") as list:               # öffne die Datei zum lesen
        out_field.insert(1.0, "\n")
        for line in list:
            out_field.insert(1.0, line)

def open_explorer():
    file = askopenfile(parent=root, mode="rb", title="browse")


# create output field
out_field = tk.Text(root, width=50, height=10, padx=15, pady=15)
out_field.grid(column=1, row=4)

#crate input field

input_field = tk.Entry(root, width=50)
input_field.grid(column=1, row=6)

#create Buttons

add_text = tk.StringVar()
add_btn = tk.Button(root, textvariable=add_text, command=lambda:write_to_list(), font="Raleway",
                    bg="#4E4E5A", fg="white", height=1, width=10)
add_text.set("Add")
add_btn.grid(column=0, row=1)

remove_text = tk.StringVar()
remove_btn = tk.Button(root, textvariable=remove_text, command=lambda:remove_from_list(), font="Raleway",
                       bg="#4E4E5A", fg="white", height=1, width=10)
remove_text.set("Remove")
remove_btn.grid(column=0, row=2 )

browse_text = tk.StringVar()
browse_btn = tk.Button(root, textvariable=browse_text, command=lambda:open_explorer(), font="Raleway",
                       bg="#4E4E5A", fg="white", height=1, width=10)
browse_text.set("Browse")
browse_btn.grid(column=1, row=1)

check_text = tk.StringVar()
check_btn = tk.Button(root, textvariable=check_text, command=lambda:check_list(), font="Raleway",
                      bg="#4E4E5A", fg="white", height=1, width=10)
check_text.set("Check")
check_btn.grid(column=2, row=2)

show_text = tk.StringVar()
show_btn = tk.Button(root, textvariable=show_text, command=lambda:show_list(), font="Raleway",
                     bg="#4E4E5A", fg="white", height=1, width=10)
show_text.set("Show")
show_btn.grid(column=2, row=1)

movie = input_field.get()

root.mainloop()
                                              
