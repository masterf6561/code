import customtkinter as tk
from connection import connect_to_mysql


config = {
    "host": "homeserver",
    "user": "moritz",
    "password": "gehomert27",
    "database": "nc_coffe",
}


def button_callback():
    print("button clicked again")


def handle_table_click(cursor, app, table):
    cursor.execute(f"SELECT * FROM {table}")
    rows = cursor.fetchall()
    for row in rows:
        button = tk.CTkButton(app, text=row[1], command=button_callback)
        button.pack(padx=20, pady=20)


if __name__ == "__main__":
    app = tk.CTk()
    app.geometry("800x450")
    conn = connect_to_mysql(config, attempts=1)

    if conn and conn.is_connected():
        with conn.cursor() as cursor:
            cursor.execute("SHOW TABLES")
            tables = cursor.fetchall()
            for table in tables:
                current_table: str = table[0]
                # def onClick():
                handle_table_click(cursor, app, current_table)

                # table_button = tk.CTkButton(app, text=current_table, command=onClick)
                # table_button.pack(padx=20, pady=20)
            

        # conn.close()
    else:
        print("Could not Connect")

    app.mainloop()
