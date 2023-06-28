import random
import time

from paho.mqtt import client as mqtt_client

broker = 'broker.emqx.io'
port = 1883
topics = ["python/mqtt", "python/testing", "python/arrays", "python/ndf"]
# Generate a Client ID with the publish prefix.
client_id = f'publish-{random.randint(0, 1000)}'
# username = 'emqx'
# password = 'public'

def connect_mqtt():
    def on_connect(client, userdata, flags, rc):
        if rc == 0:
            print("Connected to MQTT Broker!")
        else:
            print("Failed to connect, return code %d\n", rc)

    client = mqtt_client.Client(client_id)
    # client.username_pw_set(username, password)
    client.on_connect = on_connect
    client.connect(broker, port)
    return client

def publish(client):
    msg_count = 0
    while True:
        auth_key = random.randint(10000,99999)
        measurement = random.randint(0.2, 0.8)
        time.sleep(1)
        msg = f"ID: {msg_count} | Auth_key: {auth_key} | Measurement: {measurement}"
        if(auth_key % 2 == 0):
            topic = topics[0]
        elif(auth_key % 3 == 0):
            topic = topics[2]
        elif(auth_key % 7 == 0):
            topic = topics[3]
        else:
            topic = topics[1]
        result = client.publish(topic, msg)# result: [0, 1]
        status = result[0]
        if status == 0:
            print(f"Time: {time.time()} | Send `{msg}` to topic `{topic}`")
        else:
            print(f"Failed to send message to topic {topic}")
        msg_count += 1

def run():
    client = connect_mqtt()
    client.loop_start()
    publish(client)
    client.loop_stop()

if __name__ == '__main__':
    run()
