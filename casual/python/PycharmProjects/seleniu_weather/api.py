import requests

API_KEY = "edd88372a14f134203a58212e743f06a"
BASE_URL = "https://openweathermap.org/data/2.5/weather"


loc = input("Enter location: ")

if loc == "berlin":
    lat = 52.468
    lon = 13.504
elif loc == "new york":
    lat = 40.703
    lon = -73.916
else:
    lat = input("Enter latitude: ")
    lon = input("enter longitude: ")

request_url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}"
other_url = f"{BASE_URL}?appid={API_KEY}&q={loc}"

response = requests.get(request_url)
if response.status_code == 200:
    data = response.json()
    weather = data["weather"][0]["description"]
    temp = round(data["main"]["temp"] - 273.15, 2)
    print("The weather is: ", weather)
    print("The temperature is: ", temp, "celsius")
else:
    print("an error occured")
    

