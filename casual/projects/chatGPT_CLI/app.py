import openai
import os

file = open("./plainKey.txt", "r")
line = file.readline()
API_KEY = line

openai.api_key = os.getenv(API_KEY)

print(API_KEY)

openai.Model.list()

openai.requestssession
