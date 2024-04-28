import tkinter as tk
from tkinter import ttk
import mysql.connector
import string
import random

# Function to fetch table names from the database
def get_table_names():
    cursor.execute("SHOW TABLES")
    tables = [table[0] for table in cursor.fetchall()]
    return tables

def clear_old_headers():
    for i in table_tree.get_children():
        table_tree.delete(i)
    for col in table_tree["columns"]:
        table_tree.heading(col, text='')


# Function to fetch table data
def get_table_data(table_name):
    cursor.execute(f"SELECT * FROM {table_name}")
    data = cursor.fetchall()
    clear_old_headers()
    if table_name == "coffee_table":
        # Add headings
        table_tree.heading('#1', text='ID')
        table_tree.heading('#2', text='Name')
        table_tree.heading('#3', text='Region')
        table_tree.heading('#4', text='Roast')
    elif table_name == "users":
        table_tree.heading('#1', text="ID")
        table_tree.heading("#2", text="Name")
        table_tree.heading("#3", text="Email")

    return data

# Function to update the data displayed in the table
def update_table(event=None):
    selected_table = table_combobox.get()
    table_data = get_table_data(selected_table)
    # Clear previous data
    for i in table_tree.get_children():
        table_tree.delete(i)
    # Insert new data
    for row in table_data:
        table_tree.insert('', tk.END, values=row)


# Function to insert data into the database
def insert_data():
    selected_table = table_combobox.get()
    if selected_table:
        values = [entry.get() for entry in entry_widgets]
        columns = ", ".join(cursor.execute(f"SHOW COLUMNS FROM {selected_table}"))
        query = f"INSERT INTO {selected_table} ({columns}) VALUES ({', '.join(['%s']*len(values))})"
        cursor.execute(query, tuple(values))
        db.commit()
        update_table()

# Function to update the entry widgets based on selected table
def update_entry_widgets(event=None):
    selected_table = table_combobox.get()
    if selected_table:
        cursor.execute(f"DESCRIBE {selected_table}")
        columns = [column[0] for column in cursor.fetchall()]
        for entry_widget, col in zip(entry_widgets, columns):
            entry_widget.destroy()
            label = ttk.Label(root, text=col)
            label.pack()
            entry = ttk.Entry(root)
            entry.pack()
            entry_widgets.append(entry)

# Connect to MySQL Database
db = mysql.connector.connect(
    host="homeserver",
    user="moritz",
    password="gehomert27",
    database="nc_coffe"
)
cursor = db.cursor()

# Create main window
root = tk.Tk()
root.title("MySQL Database Viewer")

# Create combobox to display table names
table_combobox = ttk.Combobox(root)
table_combobox.pack()
table_combobox.bind("<<ComboboxSelected>>", update_table)
# table_combobox.bind("<<ComboboxSelected>>", update_entry_widgets)

# Create treeview to display table data
table_tree = ttk.Treeview(root, columns=('id', 'name', 'region', 'roast'), show="headings") # Add more columns if needed
table_tree.pack()

# Create entry widgets for data input
entry_widgets = []


# Create button to insert data
insert_button = ttk.Button(root, text="Insert Data", command=insert_data)
insert_button.pack()

# Get table names and populate combobox
tables = get_table_names()
table_combobox['values'] = tables

root.mainloop()

# Close the database connection
db.close()
