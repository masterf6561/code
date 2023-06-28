import paho.mqtt.client as mqtt
import random
import time

broker = "broker.emqx.io"
port = 1883
topic = "python/mqtt"
client_id = f'python-mqtt-{random.randint(0, 1000)}'

client = mqtt.Client()

def on_connect(client, userdata, flags, rc):
    print("Connected to MQTT Broker")

def on_message(client, userdata, msg):
    print("received message on topic. " + msg.topic + " - Message: " + msg.payload.decode())

def publish(client):
     msg_count = 1
     while True:
         time.sleep(1)
         msg = f"messages: {msg_count}"
         result = client.publish(topic, msg)
         # result: [0, 1]
         status = result[0]
         if status == 0:
             print(f"Send `{msg}` to topic `{topic}`")
         else:
             print(f"Failed to send message to topic {topic}")
         msg_count += 1
         if msg_count > 5:
             break


def subscribe(client: mqtt_client):
    def on_message(client, userdata, msg):
        print(f"Received `{msg.payload.decode()}` from `{msg.topic}` topic")

    client.subscribe(topic)
    client.on_message = on_message

client.on_connect = on_connect
client.on_message = on_message

client.connect(brokerIP, 1883, 60)

client.loop_start()

client.publish()

client.subscribe("topic/example")

while True:
    pass
