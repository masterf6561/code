import wave
import pyaudio
import numpy as np

#set audio parameters
FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 44100
CHUNK = 8192
RECORD_SECONDS = 5
WAVE_OUTPUT = "output.wav"
THRESHOLD = 1000

#init audio stream
audio = pyaudio.PyAudio()

#open mic stream
stream = audio.open(format=FORMAT,
                    channels=CHANNELS,
                    rate=RATE,
                    input=True,
                    output= True,
                    frames_per_buffer=CHUNK)

print("Recording started...")

while True:
    data = stream.read(CHUNK)
    audio_data = np.frombuffer(data, dtype=np.int16)
    rms = np.sqrt(np.mean(np.square(audio_data)))
    if rms < THRESHOLD:
        audio_data = np.zeros_like(audio_data)
        
    processed_data = audio_data.astype(np.int16).tobytes()
    
    stream.write(processed_data, CHUNK)
    
stream.stop_stream()
stream.close()

audio.terminate()
#for recording to wav file:
"""
frames = []

#capture audio data from mic
for i in range(0, int(RATE/CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)
    
print("Recording finished")

stream.stop_stream()
stream.close()

audio.terminate()

#save audio frames as wav file
wf = wave.open(WAVE_OUTPUT, "wb")
wf.setnchannels(CHANNELS)
wf.setsampwidth(audio.get_sample_size(FORMAT))
wf.setframerate(RATE)
wf.writeframes(b''.join(frames))
wf.close
"""