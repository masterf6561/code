import requests
API_KEY = "edd88372a14f134203a58212e743f06a"
BASE_URL = "https://openweathermap.org/data/2.5/weather"

CITY = input("Enter City name: ")
request_url = f"{BASE_URL}?appid={API_KEY}&q={CITY}"

datas = requests.get(request_url)

if datas.status_code == 200:
    data = datas.json()
    print((data))
else:
    print("an error occured")
                                    