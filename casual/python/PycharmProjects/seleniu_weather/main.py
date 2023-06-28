from ast import Interactive
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time


path = "C:\Program Files (x86)\chromedriver.exe"

driver = webdriver.Chrome(path)

driver.get("https://www.wetter.com")

#search = driver.find_element_by_name("q")
search = driver.find_element_by_class_name("search-field")
search.send_keys("Berlin")
search.send_keys(Keys.RETURN)

driver.maximize_window()

